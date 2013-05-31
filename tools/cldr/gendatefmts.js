/*
 * gendatefmts.js - ilib tool to generate the dateformats.json files and the date json fragments from 
 * the CLDR data files
 * 
 * Copyright © 2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * This code is intended to be run under node.js 
 */
var fs = require('fs');
var util = require('util');
var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;

function usage() {
	util.print("Usage: gendatefmts [-h] CLDR_json_dir locale_data_dir\n" +
		"Generate date formats information files.\n" +
		"-h or --help\n" +
		"  this help\n" +
		"CLDR_json_dir\n" +
		"  the top level of the Unicode CLDR distribution in json format\n" +
		"locale_data_dir\n" +
		"  the top level of the ilib locale data directory\n");
	process.exit(1);
}

var cldrDirName;
var localeDirName;

process.argv.forEach(function (val, index, array) {
		if (val === "-h" || val === "--help") {
			usage();
		}
	});

if (process.argv.length < 4) {
	util.error('Error: not enough arguments');
	usage();
}

cldrDirName = process.argv[2];
localeDirName = process.argv[3];

util.print("gendatefmts - generate date and time formats information files.\n" +
	"Copyright (c) 2013 JEDLSoft\n");

util.print("CLDR dir: " + cldrDirName + "\n");
util.print("locale dir: " + localeDirName + "\n");

fs.exists(cldrDirName, function (exists) {
		if (!exists) {
			util.error("Could not access CLDR dir " + cldrDirName);
			usage();
		}
	});

fs.exists(localeDirName, function (exists) {
		if (!exists) {
			util.error("Could not access locale data directory " + localeDirName);
			usage();
		}
	});

var filename, root, json, suppData, languageData, scripts = {};

try {
	filename = cldrDirName + "/main/en.json";
	json = fs.readFileSync(filename, "utf-8");
	root = JSON.parse(json);

	filename = cldrDirName + "/supplemental/supplementalData.json";
	json = fs.readFileSync(filename, "utf-8");
	suppData = JSON.parse(json);

	languageData = suppData.languageData; //I dont get it
} catch (e) {
	util.print("Error: Could not load file " + filename + "\n");
	process.exit(2);
}

// get the information about scripts if necessary
for (var locale in languageData) {
	if (locale && languageData[locale]) {
		// util.print("checking scripts for locale " + locale +"languageData[locale]   " + JSON.stringify(languageData[locale]) + "\n");

		//util.print("languageData[locale][@scripts] === " + JSON.stringify(languageData[locale]["@scripts"]) + "\n");
		if (typeof (languageData[locale]["@scripts"]) === 'string') {
			var language = (locale.length <= 3) ? locale : locale.split(/-/)[0];
			//util.print("language ******" + language + "\n");    
			//util.print("scripts[language] @@@@ " + (scripts[language]) + "\n"); 
			if (typeof (scripts[language]) === 'undefined') {
				scripts[language] = [];
			}
			//util.print("scripts[language] #### " + JSON.stringify(scripts[language]) + "\n");
			var newLangs = languageData[locale]["@scripts"].split(/ /g);
			if (locale.length <= 3) {
				// util.print("language " + language + " prepending " + JSON.stringify(newLangs));
				scripts[language] = newLangs.concat(scripts[language]);
				// util.print("scripts[language] $$$$$  " + JSON.stringify(scripts[language]) + "\n");    
			} else {
				// util.print("language " + language + " appending " + JSON.stringify(newLangs));
				scripts[language] = scripts[language].concat(newLangs);
			}

			//util.print("scripts[language] &&&&&&  " + JSON.stringify(scripts[language]) + "\n");
		}

	}
}

function loadFile(path) {
	var ret = undefined;

	if (fs.existsSync(path)) {
		json = fs.readFileSync(path, "utf-8");
		ret = JSON.parse(json);
	}

	return ret;
}

function calcLocalePath(language, script, region, filename) {
	var path = localeDirName + "/";
	if (language) {
		path += language + "/";
	}
	if (script) {
		path += script + "/";
	}
	if (region) {
		path += region + "/";
	}
	path += filename;
	return path;
}

function loadFileNonGenerated(language, script, region) {
	var path = calcLocalePath(language, script, region, "sysres.json");
	var obj = loadFile(path);
	if (typeof (obj) !== 'undefined' && (typeof (obj.generated) === 'undefined' || obj.generated === false)) {
		// only return non-generated files
		return obj;
	}
	return undefined;
}

var localeData = {};

function getLocaleData(path, language, script, region) {
	var data;
	try {
		filename = cldrDirName + "/main/" + path;
		data = loadFile(filename);

		util.print(language + " ");
		if (script) {
			if (region) {
				if (!localeData[language]) {
					localeData[language] = {};
				}
				if (!localeData[language][script]) {
					localeData[language][script] = {};
				}
				if (!localeData[language][script][region]) {
					localeData[language][script][region] = {};
				}
				localeData[language][script][region].data = data;
			}
		} else if (region) {
			if (!localeData[language]) {
				localeData[language] = {};
			}
			if (!localeData[language][region]) {
				localeData[language][region] = {};
			}
			localeData[language][region].data = data;
		} else if (language) {
			if (!localeData[language]) {
				localeData[language] = {};
			}
			localeData[language].data = data;
		} else {
			// root locale
			localeData.data = data;
		}
	} catch (e) {
		return undefined;
	}

	return data;
}

function getMergedData(language, script, region) {
	var ret = localeData.data; // root
	if (language) {
		ret = merge(ret, localeData[language].data);
		if (script) {
			ret = merge(ret, localeData[language][script].data);
			if (region) {
				ret = merge(ret, localeData[language][script][region].data);
			}
		} else if (region) {
			ret = merge(ret, localeData[language][region].data);
		}
	}
	return ret;
}

function getDefaultScript(language) {
	return scripts[language] ? scripts[language][0] : undefined;
}

function initialCap(str) {
	return str.charAt(0).toUpperCase() + str.substring(1);
}

function initialLower(str) {
	return str.charAt(0).toLowerCase() + str.substring(1);
}

function leaveSame(str) {
	return str;
}

function getSystemResources(language, script, region, data) {
	// if it is already there and non-generated, return it
	var sysres = loadFileNonGenerated(language, script, region);
	//util.print("\n Niranjan");
	if (sysres) {
		util.print("\nLoaded existing resources from " + calcLocalePath(language, script, region, "sysres.json") + "\n");

		sysres.generated = false;
		return sysres;
	}

	// else generate a new one

	sysres = {
		generated: true
	};

	// from https://meta.wikimedia.org/wiki/Capitalization_of_Wiktionary_pages#Capitalization_of_month_names
	var capitalizedMonthLocales = {
		"af": 1,
		"br": 1,
		"cy": 1,
		"el": 1,
		"en": 1,
		"de": 1,
		"bar": 1,
		"gsw": 1,
		"ksh": 1,
		"lb": 1,
		"nds": 1,
		"pfl": 1,
		"hz": 1,
		"id": 1,
		"la": 1,
		"ms": 1,
		"pt": 1,
		"ve": 1,
		"xh": 1,
		"zu": 1,
	};

	var lowercasedMonthLocales = {
		"bs": 1,
		"bg": 1,
		"hr": 1,
		"ca": 1,
		"cs": 1,
		"da": 1,
		"dsb": 1,
		"eo": 1,
		"es": 1,
		"et": 1,
		"fi": 1,
		"fr": 1,
		"hr": 1,
		"hsb": 1,
		"hu": 1,
		"hy": 1,
		"is": 1,
		"it": 1,
		"li": 1,
		"lv": 1,
		"lt": 1,
		"mk": 1,
		"no": 1,
		"nn": 1,
		"nl": 1,
		"pl": 1,
		"BR": 1,
		"ro": 1,
		"ru": 1,
		"os": 1,
		"sr": 1,
		"sk": 1,
		"sl": 1,
		"sv": 1,
		"tr": 1,
		"uk": 1,
		"vi": 1,
		"wa": 1
	};

	var str = "";
	var parent = typeof (data.dates.calendars.gregorian.months.format) === 'undefined' ?
		data.dates.calendars.gregorian.months.standalone :
		data.dates.calendars.gregorian.months.format;

	var capFunction = (typeof (lowercasedMonthLocales[language]) !== 'undefined' || typeof (lowercasedMonthLocales[region]) !== 'undefined') ? initialLower :
	(typeof (capitalizedMonthLocales[language]) !== 'undefined' ? initialCap : leaveSame);

	table = parent.narrow;
	for (var i = 1; i < 13; i++) {
		sysres["N" + i] = str;
	}

	table = parent.abbreviated;
	for (var i = 1; i < 13; i++) {
		sysres["NN" + i] = capFunction(table[i].substring(0, 2));
	}
	for (var i = 1; i < 13; i++) {
		sysres["MMM" + i] = capFunction(table[i]);
	}

	table = parent.wide;
	for (var i = 1; i < 13; i++) {
		sysres["MMMM" + i] = capFunction(table[i]);
	}

	// from https://meta.wikimedia.org/wiki/Capitalization_of_Wiktionary_pages#Capitalization_of_month_names
	var capitalizedDayLocales = {
		"af": 1,
		"br": 1,
		"cy": 1,
		"en": 1,
		"de": 1,
		"bar": 1,
		"gsw": 1,
		"ksh": 1,
		"lb": 1,
		"nds": 1,
		"pfl": 1,
		"el": 1,
		"hz": 1,
		"id": 1,
		"la": 1,
		"ve": 1,
		"xh": 1,
		"zu": 1,
	};

	var lowercasedDayLocales = {
		"bs": 1,
		"bg": 1,
		"hr": 1,
		"ca": 1,
		"cs": 1,
		"dsb": 1,
		"eo": 1,
		"fi": 1,
		"fr": 1,
		"hsb": 1,
		"hu": 1,
		"hy": 1,
		"it": 1,
		"li": 1,
		"lv": 1,
		"lt": 1,
		"mk": 1,
		"no": 1,
		"nn": 1,
		"nl": 1,
		"os": 1,
		"pl": 1,
		"pt": 1,
		"ro": 1,
		"ru": 1,
		"sr": 1,
		"sk": 1,
		"sv": 1,
		"vi": 1,
		"wa": 1
	};

	var dayProperties = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
	var parent = typeof (data.dates.calendars.gregorian.days.format) === 'undefined' ?
		data.dates.calendars.gregorian.days.standalone :
		data.dates.calendars.gregorian.days.format;
	capFunction = (typeof (capitalizedDayLocales[language]) !== 'undefined') ? initialCap :
	(typeof (lowercasedDayLocales[language]) !== 'undefined') ? initialLower :
		leaveSame;

	table = parent.narrow;
	for (var i = 0; i < 7; i++) {
		sysres["E" + i] = table[dayProperties[i]];
	}

	table = parent.short;
	for (var i = 0; i < 7; i++) {
		sysres["EE" + i] = capFunction(table[dayProperties[i]].substring(0, 2));
	}

	table = parent.abbreviated;
	for (var i = 0; i < 7; i++) {
		sysres["EEE" + i] = capFunction(table[dayProperties[i]]);
	}

	table = parent.wide;
	for (var i = 0; i < 7; i++) {
		sysres["EEEE" + i] = capFunction(table[dayProperties[i]]);
	}

	var periodProperties = ["am", "pm"];
	parent = typeof (data.dates.calendars.gregorian.dayPeriods.format) === 'undefined' ?
		data.dates.calendars.gregorian.dayPeriods.standalone :
		data.dates.calendars.gregorian.dayPeriods.format;

	table = parent.wide;
	for (var i = 0; i < 2; i++) {
		sysres["a" + i] = table[periodProperties[i]];
	}

	table = data.dates.calendars.gregorian.eras.eraAbbr;
	sysres["G-1"] = table["0"];
	sysres["G1"] = table["1"];

	function truncToSize(str, size) {
		var i = str.indexOf("{0}");
		if (i >= 0) {
			i += 3;
			while (str.charAt(i) === ' ') {
				i++;
			}

			if (i + size <= str.length) {
				if (i + size + 1 === str.length) {
					return str.substring(0, i + size + 1);
				}
				return str.substring(0, i + size);
			}
			return undefined;
		}
		return undefined;
	}

	function clip(shortStr, longStr, size) {
		var truncated = undefined;
		if (shortStr) {
			truncated = truncToSize(shortStr, size);
		}
		if (truncated) {
			return truncated;
		}
		if (longStr) {
			truncated = truncToSize(longStr, size);
		}
		if (truncated) {
			return truncated;
		}
		return shortStr || longStr;
	}

	function clipForMedium(shortStr, longStr) {
		return clip(shortStr, longStr, 2);
	}

	function clipForLong(longStr) {
		return clip(longStr, undefined, 3);
	}

	var durationPropertiesFull = {
		"second": "1#1 second|#{num} seconds",
		"minute": "1#1 minute|#{num} minutes",
		"hour": "1#1 hour|#{num} hours",
		"day": "1#1 day|#{num} days",
		"week": "1#1 week|#{num} weeks",
		"month": "1#1 month|#{num} months",
		"year": "1#1 year|#{num} years"
	};

	var durationPropertiesLong = {
		"second": "1#1 sec|#{num} sec",
		"minute": "1#1 min|#{num} min",
		"hour": "1#1 hr|#{num} hrs",
		"day": "durationLongDays",
		"week": "1#1 wk|#{num} wks",
		"month": "1#1 mon|#{num} mons",
		"year": "1#1 yr|#{num} yrs"
	};

	var durationPropertiesMedium = {
		"second": "1#1 se|#{num} sec",
		"minute": "1#1 mi|#{num} min",
		"hour": "durationMediumHours",
		"day": "1#1 dy|#{num} dys",
		"week": "durationMediumWeeks",
		"month": "1#1 mo|#{num} mos",
		"year": "durationMediumYears"
	};

	var durationPropertiesShort = {
		"second": "#{num}s",
		"minute": "durationShortMinutes",
		"hour": "#{num}h",
		"day": "#{num}d",
		"week": "#{num}w",
		"month": "durationShortMonths",
		"year": "#{num}y"
	};

	table = data.units;

	for (duration in durationPropertiesMedium) {
		if (duration && durationPropertiesMedium[duration]) {
			var unit = table[duration];

			var shortStr = unit["unitPattern-count-one"];
			if (!shortStr) {
				shortStr = unit["unitPattern-count-other"];
			}

			if (shortStr) {
				var unitOnly = shortStr.replace("{0}", "");
				var initial = unitOnly.trim().charAt(0);
				shortStr = shortStr.replace(unitOnly, initial).replace("{0}", "{num}");

				if (shortStr.length > 0) {
					sysres[durationPropertiesShort[duration]] = "#" + shortStr;
				}
			}

			var mediumOther = "",
				longOther = "",
				fullOther = "";
			var temp, mediumClipped, longClipped, mediumStr = "",
				longStr = "",
				fullStr = "";
			if (typeof (unit["unitPattern-count-other-alt-short"]) !== 'undefined') {
				mediumOther = clipForMedium(
					unit["unitPattern-count-other-alt-short"],
					unit["unitPattern-count-other"]);
			}
			if (typeof (unit["unitPattern-count-other"]) !== 'undefined') {
				longOther = clipForLong(unit["unitPattern-count-other"]);
				fullOther = unit["unitPattern-count-other"];
			}

			var unitNames = [
                "0",
                "1",
                "zero",
                "one",
                "two",
                "few",
                "many"
            ];
			for (var j = 0; j < unitNames.length; j++) {
				name = unitNames[j];
				mediumClipped = clipForMedium(
					unit["unitPattern-count-" + name + "-alt-short"],
					unit["unitPattern-count-" + name]);
				if (typeof (unit["unitPattern-count-" + name + "-alt-short"]) !== 'undefined' &&
					mediumClipped !== mediumOther) {
					if (mediumStr.length > 0) {
						mediumStr += "|";
					}
					temp = mediumClipped.replace("{0}", "{num}");
					mediumStr += name + "#" + temp;
				}
				longClipped = clipForLong(unit["unitPattern-count-" + name]);
				if (typeof (unit["unitPattern-count-" + name]) !== 'undefined' &&
					longClipped !== longOther) {
					if (longStr.length > 0) {
						longStr += "|";
					}
					temp = longClipped.replace("{0}", "{num}");
					longStr += name + "#" + temp;
				}
				if (typeof (unit["unitPattern-count-" + name]) !== 'undefined' &&
					unit["unitPattern-count-" + name] !== fullOther) {
					if (fullStr.length > 0) {
						fullStr += "|";
					}
					fullStr += name + "#" + unit["unitPattern-count-" + name].replace("{0}", "{num}");
				}
			}
			if (typeof (unit["unitPattern-count-other-alt-short"]) !== 'undefined') {
				if (mediumStr.length > 0) {
					mediumStr += "|";
				}
				temp = clipForMedium(unit["unitPattern-count-other-alt-short"], unit["unitPattern-count-other"]).replace("{0}", "{num}");
				mediumStr += "#" + temp;
			}
			if (typeof (unit["unitPattern-count-other"]) !== 'undefined') {
				if (longStr.length > 0) {
					longStr += "|";
				}
				if (fullStr.length > 0) {
					fullStr += "|";
				}
				temp = clipForLong(unit["unitPattern-count-other"]).replace("{0}", "{num}");
				longStr += "#" + temp;

				fullStr += "#" + unit["unitPattern-count-other"].replace("{0}", "{num}");
			}

			if (mediumStr.length > 0) {
				sysres[durationPropertiesMedium[duration]] = mediumStr;
			}
			if (longStr.length > 0) {
				sysres[durationPropertiesLong[duration]] = longStr;
			}
			if (fullStr.length > 0) {
				sysres[durationPropertiesFull[duration]] = fullStr;
			}
		}
	}

	unit = table;
	str = "";
	if (typeof (unit["day-past"]["unitPattern-count-one"]) !== 'undefined') {
		var day = table["day"]["unitPattern-count-one"];
		var dayPast = table["day-past"]["unitPattern-count-one"];
		sysres["{duration} ago"] = dayPast.replace(day, "{duration}").toLowerCase();
	}

	unit = table;
	str = "";
	if (typeof (table["day-future"]["unitPattern-count-one"]) !== 'undefined') {
		var day = table["day"]["unitPattern-count-one"];
		var dayFuture = table["day-future"]["unitPattern-count-one"];
		sysres["in {duration}"] = dayFuture.replace(day, "{duration}").toLowerCase();
	}

	var listProperties = {
		"separatorFull": "middle",
		"finalSeparatorFull": "end"
	};

	table = data.listPatterns.listPattern;

	for (pattern in listProperties) {
		if (pattern && listProperties[pattern]) {
			var unit = table[listProperties[pattern]];
			if (unit.length > 0) {
				sysres[pattern] = unit.replace(/\{.\}/g, "");
			}
		}
	}
	sysres["separatorShort"] = " ";
	sysres["separatorMedium"] = " ";
	sysres["separatorLong"] = " ";

	return sysres;
}

/*function writeDateFormats(language, script, region) {
    var filename;
    
    if (script) {
        if (getDefaultScript(language) === script) {
            // util.print("default script for language " + language + " is " + getDefaultScript(language) + "\n");
            filename = localeDirName + "/" + language + "/" + region + "/dateformats.json";
                //util.print("FileName ######", filename);
        
        } else {
            filename = localeDirName + "/" + language + "/" + script + "/" + region + "/dateformats.json";
        }
    } else {
        filename = localeDirName + "/" + language + "/" + region + "/dateformats.json";
    }

    // first check if there is an existing file, and if so, if it is hand-tweaked. If it is, skip this one.
    // If it is generated, overwrite it with the new generation.
    var output = loadFile(filename);
    if (!output || (typeof(output.generated) !== 'undefined' && output.generated)) {
        var data = getMergedData(language, script, region);
        //util.print("merged data is "+JSON.stringify(data)+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+"\n");
        var default_calendar=data.dates.calendars["default"];
        util.print("default calendar is :"+default_calendar+"\n");
        var gregorian_order=data.dates.calendars["gregorian"]["dateTimeFormats"]["full"]["dateTimeFormat"]["pattern"];
        util.print("default calendar format pattern is "+gregorian_order+"\n");
        var gregorian={};
        var output={};
        //output["gregorian"]="gregorian";
        
        if(gregorian_order=="{0} {1}")
        {
        //util.print("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"+"\n");
        gregorian["order"]="{date} {time}";
        }
        else
        {
        gregorian["order"]="{time} {date}";
        }
        util.print("gregorian calendar order is :"+gregorian["order"]+"\n");
        var available_formats=data.dates.calendars["gregorian"]["dateTimeFormats"]["availableFormats"];
        util.print("available formats are :"+JSON.stringify(available_formats)+"++++++++++++++++++++++++++++++++++++++++++++"+"\n");
        







//code getting implemented



            
            






        makeDirs(filename);
        
        output["gregorian"]=gregorian;
        fs.writeFileSync(filename, JSON.stringify(data), "utf-8");
        util.print("writing to " + filename + "\n");
    } else {
        util.print("not overwriting " + filename + "\n");
    }
}*/

function anyProperties(data) {
	var count = 0;
	for (var prop in data) {
		if (prop && data[prop]) {
			count++;
		}
		if (count > 1) {
			return true;
		}
	}
	return false;
}

function writeSystemResources(language, script, region, data) {
	var path = calcLocalePath(language, script, region, "");
	if (data.generated) {
		if (anyProperties(data)) {
			util.print("Writing " + path + "\n");
			makeDirs(path);
			fs.writeFileSync(path + "/sysres.json", JSON.stringify(data), "utf-8");
		} else {
			util.print("Skipping empty " + path + "\n");
		}
	} else {
		util.print("Skipping existing " + path + "\n");
	}
}

// for each locale, get the data

var language, region, script, file,
	files = fs.readdirSync(cldrDirName + "/main/");

util.print("Reading locale data into memory...\n");

for (var i = 0; i < files.length; i++) {
	file = files[i];
	if (file === "root.json") {
		// special case because "root" is not a valid locale specifier
		getLocaleData(file, undefined, undefined, undefined);
	} else {
		locale = file.split(/\./)[0].replace(/_/g, "-");
		var l = new Locale(locale);

		getLocaleData(file, l.getLanguage(), l.getScript(), l.getRegion());
	}
}
util.print("\n");

// find the system resources
util.print("Merging and pruning locale data...\n");

mergeAndPrune(localeData);

var resources = {};
var resources_dateformat_data = {};
util.print("\nCalculating system resources...\n");

resources.data = getSystemResources(undefined, undefined, undefined, localeData.data);
//resources_dateformat_data=resources.data;
for (language in localeData) {
	if (language && localeData[language] && language !== 'data' && language !== 'merged') {
		resources[language] = resources[language] || {};
		util.print(language + " ");
		for (var subpart in localeData[language]) {
			if (subpart && localeData[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
				resources[language][subpart] = resources[language][subpart] || {};
				if (Locale.isScriptCode(subpart)) {
					script = subpart;
					for (region in localeData[language][script]) {
						resources[language][script][region] = resources[language][script][region] || {};
						if (region && localeData[language][script][region] && region !== 'data' && region !== 'merged') {
							resources[language][script][region].data = getSystemResources(language, script, region, localeData[language][script][region].merged);
						}
					}
				}
				resources[language][subpart].data = getSystemResources(language, subpart, undefined, localeData[language][subpart].merged);
			}
		}
		resources[language].data = getSystemResources(language, undefined, undefined, localeData[language].merged);
	}
}

util.print("\nMerging and pruning resources...\n");

mergeAndPrune(resources);

util.print("\nWriting system resources...\n");

// now write out the system resources

//process.exit(0);

// Now write out the data. Do not overwrite existing data, as it has probably 
// been hand-tweaked.

/*writeDateFormats(undefined,undefined,undefined);
for (language in localeData) {
    if (language && localeData[language] && language !== 'data') {
        for (var subpart in localeData[language]) {
            if (subpart && localeData[language][subpart] && subpart !== 'data') {
                if (Locale.isScriptCode(subpart)) {
                    script = subpart;
                    for (region in localeData[language][script]) {
                        if (region && localeData[language][script][region] && region !== 'data') {
                            writeDateFormats(language, script, region);
                        }            
                    }        
                } else {
                    region = subpart;
                    writeDateFormats(language, undefined, region);
                }
            }
        }
    }
}
*/

for (language in resources) {
	if (language && resources[language] && language !== 'data' && language !== 'merged') {
		for (var subpart in resources[language]) {
			if (subpart && resources[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
				if (Locale.isScriptCode(subpart)) {
					script = subpart;
					for (region in resources[language][script]) {
						if (region && resources[language][script][region] && region !== 'data' && region !== 'merged') {
							writeSystemResources(language, script, region, resources[language][script][region].data);
						}
					}
					writeSystemResources(language, script, undefined, resources[language][script].data);
				} else {
					writeSystemResources(language, undefined, subpart, resources[language][subpart].data);
				}
			}
		}
		writeSystemResources(language, undefined, undefined, resources[language].data);
	}
}

writeSystemResources(undefined, undefined, undefined, resources.data);

resources_dateformat_data.data = getDateFormats(undefined, undefined, undefined, localeData.data);
for (language in localeData) {
	if (language && localeData[language] && language !== 'data' && language !== 'merged') {
		resources_dateformat_data[language] = resources_dateformat_data[language] || {};
		util.print(language + " ");
		for (var subpart in localeData[language]) {
			if (subpart && localeData[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
				resources_dateformat_data[language][subpart] = resources_dateformat_data[language][subpart] || {};
				if (Locale.isScriptCode(subpart)) {
					script = subpart;
					for (region in localeData[language][script]) {
						resources_dateformat_data[language][script][region] = resources_dateformat_data[language][script][region] || {};
						if (region && localeData[language][script][region] && region !== 'data' && region !== 'merged') {
							resources_dateformat_data[language][script][region].data = getDateFormats(language, script, region, localeData[language][script][region].merged);
						}
					}
				}
				resources_dateformat_data[language][subpart].data = getDateFormats(language, subpart, undefined, localeData[language][subpart].merged);
			}
		}
		resources_dateformat_data[language].data = getDateFormats(language, undefined, undefined, localeData[language].merged);
	}
}

util.print("\nMerging and pruning data for dateformats.\n");

mergeAndPrune(resources_dateformat_data);

function getDateFormats(language, script, region, data) {
	// if it is already there and non-generated, return it
	var dates = loadFileNonGenerated(language, script, region);
	//util.print("language: " + language + "\n");
	//util.print("script: " + script + "\n");
	//util.print("region: " + region + "\n");
	if (dates) {
		util.print("\nLoaded existing resources from " + calcLocalePath(language, script, region, "dateformats.json") + "\n");

		dates.generated = false;
		return dates;
	}

	// else generate a new one
	dates = {
		generated: true
	};

	//var default_calendar = data.dates.calendars["default"];
	//util.print("default calendar is :" + default_calendar + "\n");
	var gregorian_order = data.dates.calendars["gregorian"]["dateTimeFormats"]["full"]["dateTimeFormat"]["pattern"];
	//util.print("default calendar format pattern is " + gregorian_order + "\n");
	var gregorian = {};
	//var output = {};
	//output["gregorian"]="gregorian";

	if (gregorian_order == "{0} {1}") {
		//util.print("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"+"\n");
		gregorian["order"] = "{date} {time}";
	} else {
		gregorian["order"] = "{time} {date}";
	}
	//util.print("gregorian calendar order is :" + gregorian["order"] + "\n");
	var date_formats = data.dates.calendars["gregorian"]["dateFormats"];
	var available_formats = data.dates.calendars["gregorian"]["dateTimeFormats"]["availableFormats"];
	//util.print("available formats are :" + JSON.stringify(available_formats) + "++++++++++++++++++++++++++++++++++++++++++++" + "\n");
	available_formats = JSON.parse(JSON.stringify(available_formats).replace(/L/g, "M"));

	//util.print("available formats after conversion :" + JSON.stringify(available_formats) + "++++++++++++++++++++++++++++++++++++++++++++" + "\n");
	var keys_dateformats = Object.keys(available_formats);
	//var values_dateformats = JSON.stringify(keys_dateformats);
	var arr_values = [];
	//util.print("date fomat keys are :" + keys_dateformats + "*********************************" + "\n");
	for (var i = 0; i < keys_dateformats.length; i++) {
		arr_values[i] = available_formats[keys_dateformats[i]];
	}
	//util.print("date fomat values are :" + JSON.stringify(arr_values) + "*********************************" + "\n");

	var date = {};
	var dm = {};
	var dmwy = {};
	var dmy = {};
	var dmw = {};
	var my = {};
	var d = {};
	var m = {};
	var y = {};
	var n = {};
	//for (var i=0;i<keys_dateformats.length;i++)
	//{
	if (available_formats["Md"] || available_formats["Mdd"]) {

		dm["s"] = available_formats["Md"] || available_formats["Mdd"];
		//break;

	} else if ((available_formats["Md"] === undefined) && (available_formats["Md"] === undefined)) {
		var flag = false;
		for (var j = 0; j < arr_values.length; j++) {

			if (((arr_values[j].split("M").length - 1) == 1) && ((arr_values[j].split("d").length - 1) == 1)) {

				dm["s"] = (arr_values[j].indexOf("M") > arr_values[j].indexOf("d")) ? (arr_values[j].substring(arr_values[j].indexOf("d"), 1 + arr_values[j].indexOf("M"))) : (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].indexOf("d")));
				//}

				flag = true;
				break;
			}
		}
		if (flag == false) {
			var short = date_formats["short"]["dateFormat"]["pattern"];

			dm["s"] = (short.indexOf("d") < short.indexOf("M")) ? short.substring(short.indexOf("d"), 1 + short.indexOf("M")) : (short.indexOf("M"), 1 + short.indexOf("d"));
		}
	}
	//end of short

	if (available_formats["MMdd"] || available_formats["MMd"]) {
		//if(available_formats["MMdd"]!=undefined)
		//{
		dm["m"] = available_formats["MMdd"] || available_formats["MMd"];
		//}
		//else
		//dm["m"]=available_formats["MMd"];
	} else if ((available_formats["MMdd"] === undefined) && (available_formats["MMd"] === undefined)) {
		var flag = false;

		for (var j = 0; j < arr_values.length; j++) {
			if (((arr_values[j].split("M").length - 1) == 2) && ((arr_values[j].split("d").length - 1) >= 1)) {

				dm["m"] = (arr_values[j].indexOf("M") > arr_values[j].indexOf("d")) ? (arr_values[j].substring(arr_values[j].indexOf("d"), 1 + arr_values[j].indexOf("M"))) : (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].indexOf("d")));
				flag = true;
				break;
			}
		}

		if (flag == false) {
			var medium = date_formats["medium"]["dateFormat"]["pattern"];
			dm["m"] = (medium.indexOf("M") < medium.lastIndexOf("d")) ? medium.substring(medium.indexOf("M"), 1 + medium.lastIndexOf("d")) : medium.substring(medium.indexOf("d"), 1 + medium.lastIndexOf("M"));
		}
	}

	if (available_formats["MMMd"] || available_formats["MMMdd"]) {
		dm["l"] = available_formats["MMMd"] || available_formats["MMMdd"];
	} else if ((available_formats["MMMdd"] === undefined) && (available_formats["MMMd"] === undefined)) {
		var flag = false;
		for (var j = 0; j < arr_values.length; j++) {
			if (((arr_values[j].split("M").length - 1) == 3) && ((arr_values[j].split("d").length - 1) >= 1)) {
				dm["l"] = (arr_values[j].indexOf("M") > arr_values[j].indexOf("d")) ? (arr_values[j].substring(arr_values[j].indexOf("d"), 1 + arr_values[j].indexOf("M"))) : (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].indexOf("d")));
				flag = true;
				break;
			}
		}

		if (flag == false) {
			var long = date_formats["long"]["dateFormat"]["pattern"];
			dm["l"] = (long.indexOf("M") < long.lastIndexOf("d")) ? long.substring(long.indexOf("M"), 1 + long.lastIndexOf("d")) : (long.substring(long.indexOf("d"), 1 + long.lastIndexOf("M")));
		}
	}

	if (available_formats["MMMMd"] || available_formats["MMMMdd"]) {
		dm["f"] = available_formats["MMMMd"] || available_formats["MMMMdd"];
	} else if ((available_formats["MMMMdd"] === undefined) && (available_formats["MMMMd"] === undefined)) {
		var flag = false;
		for (var j = 0; j < arr_values.length; j++) {
			if (((arr_values[j].split("M").length - 1) == 4) && ((arr_values[j].split("d").length - 1) >= 1)) {
				dm["f"] = (arr_values[j].indexOf("M") > arr_values[j].indexOf("d")) ? (arr_values[j].substring(arr_values[j].indexOf("d"), 1 + arr_values[j].indexOf("M"))) : (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].indexOf("d")));
				flag = true;
				break;
			}
		}

		if (flag == false) {
			var full = date_formats["long"]["dateFormat"]["pattern"];
			dm["f"] = full.indexOf("M") < (full.lastIndexOf("d")) ? full.substring(full.indexOf("M"), 1 + full.lastIndexOf("d")) : full.substring(full.indexOf("d"), 1 + full.lastIndexOf("M"));
		}
	}

	//end of combination dm

	if (available_formats["yM"] || available_formats["yyM"] || available_formats["yyyyM"]) {
		my["s"] = available_formats["yM"] || available_formats["yyM"] || available_formats["yyyyM"];
	} else if ((available_formats["yM"] === undefined) && (available_formats["yyM"] === undefined) && (available_formats["yyyyM"] === undefined)) {
		var flag = false;
		for (var j = 0; j < arr_values.length; j++) {
			if (((arr_values[j].split("M").length - 1) == 1) && ((arr_values[j].split("y").length - 1) >= 1)) {
				my["s"] = (arr_values[j].indexOf("y") > arr_values[j].indexOf("M")) ? (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].indexOf("y"))) : (arr_values[j].substring(arr_values[j].indexOf("y"), 1 + arr_values[j].indexOf("M")));
				flag = true;
				break;
			}
		}

		if (flag == false) {
			var short = date_formats["short"]["dateFormat"]["pattern"];

			my["s"] = (short.indexOf("M") < short.indexOf("y")) ? short.substring(short.indexOf("M"), 1 + short.indexOf("y")) : (short.indexOf("y"), 1 + short.indexOf("M"));
		}
	}

	if (available_formats["yyyyMM"] || available_formats["yyMM"] || available_formats["yMM"]) {
		my["m"] = available_formats["yyyyMM"] || available_formats["yyMM"] || available_formats["yMM"];
	} else if ((available_formats["yMM"] === undefined) && (available_formats["yyMM"] === undefined) && (available_formats["yyyyMM"] === undefined)) {
		var flag = false;
		for (var j = 0; j < arr_values.length; j++) {
			if (((arr_values[j].split("M").length - 1) == 2) && ((arr_values[j].split("y").length - 1) >= 1)) {
				my["m"] = (arr_values[j].indexOf("y") > arr_values[j].indexOf("M")) ? (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].indexOf("y"))) : (arr_values[j].substring(arr_values[j].indexOf("y"), 1 + arr_values[j].indexOf("M")));
				flag = true;
				break;
			}
		}
		if (flag == false)	{
			var medium = date_formats["medium"]["dateFormat"]["pattern"];

			my["m"] = medium.indexOf("M") < medium.indexOf("y") ? medium.substring(medium.indexOf("M"), 1 + medium.indexOf("y")) : medium.indexOf("y"), 1 + medium.indexOf("M");
		}
	}

	if (available_formats["yMMM"] || available_formats["yyMMM"] || available_formats["yyyyMMM"]) {
		my["l"] = available_formats["yMMM"] || available_formats["yyMMM"] || available_formats["yyyyMMM"];
	} else if ((available_formats["yMMM"] === undefined) && (available_formats["yyMMM"] === undefined) && (available_formats["yyyyMMM"] === undefined)) {
		var flag = false;
		for (var j = 0; j < arr_values.length; j++) {
			if (((arr_values[j].split("M").length - 1) == 3) && ((arr_values[j].split("y").length - 1) >= 1)) {
				my["l"] = (arr_values[j].indexOf("y") > arr_values[j].indexOf("M")) ? (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].indexOf("y"))) : (arr_values[j].substring(arr_values[j].indexOf("y"), 1 + arr_values[j].indexOf("M")));
				flag = true;
				break;
			}
		}
		if (flag == false)	{
			var long = date_formats["long"]["dateFormat"]["pattern"];

			my["l"] = (long.indexOf("M") < long.indexOf("y")) ? long.substring(long.indexOf("M"), 1 + long.indexOf("y")) : (long.indexOf("y"), 1 + long.indexOf("M"));
		}
	}

	if (available_formats["yyyyMMMM"] || available_formats["yyMMMM"] || available_formats["yMMMM"]) {
		my["f"] = available_formats["yyyyMMMM"] || available_formats["yyMMMM"] || available_formats["yMMMM"];
	} else if ((available_formats["yyyyMMMM"] === undefined) && (available_formats["yyMMMM"] === undefined) && (available_formats["yMMMM"] === undefined)) {
		var flag = false;
		for (var j = 0; j < arr_values.length; j++) {
			if (((arr_values[j].split("M").length - 1) == 4) && ((arr_values[j].split("y").length - 1) >= 1)) {
				my["f"] = (arr_values[j].indexOf("y") > arr_values[j].indexOf("M")) ? (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].indexOf("y"))) : (arr_values[j].substring(arr_values[j].indexOf("y"), 1 + arr_values[j].indexOf("M")));
				flag = true;
				break;
			}
		}
		if (flag == false)	{
			var full = date_formats["full"]["dateFormat"]["pattern"];

			my["f"] = (full.indexOf("M") < full.indexOf("y")) ? full.substring(full.indexOf("M"), 1 + full.indexOf("y")) : (full.indexOf("y"), 1 + full.indexOf("M"));
		}
	}

	//end of my combination

	if (available_formats["yyyyMd"]) {
		dmy["s"] = available_formats["yyyyMd"];
	} else if (available_formats["yyyyMd"] === undefined) {
		var flag = false;
		for (var j = 0; j < arr_values.length; j++) {
			if (((arr_values[j].split("M").length - 1) == 1) && ((arr_values[j].split("y").length - 1) >= 1) && ((arr_values[j].split("d").length - 1) >= 1)) {
				index_of_d = arr_values[j].indexOf("d");
				index_of_m = arr_values[j].indexOf("M");
				index_of_y = arr_values[j].indexOf("y");

				var max_index = Math.max(index_of_d, index_of_m, index_of_y);
				var min_index = Math.min(index_of_d, index_of_m, index_of_y);

				dmy["s"] = arr_values[j].substring(min_index, 1 + max_index);
				flag = true;
				break;
			}
		}

		if (flag == false)	{
			var short = date_formats["short"]["dateFormat"]["pattern"];
			index_of_d = short.indexOf("d");
			index_of_m = short.indexOf("M");
			index_of_y = short.indexOf("y");

			var max_index = Math.max(index_of_d, index_of_m, index_of_y);
			var min_index = Math.min(index_of_d, index_of_m, index_of_y);
			dmy["s"] = short.substring(min_index, 1 + max_index);
		}
	}

	if (available_formats["yyMMdd"]) {
		dmy["m"] = available_formats["yyMMdd"];
	} else if (available_formats["yyMMdd"] === undefined) {
		var flag = false;
		for (var j = 0; j < arr_values.length; j++) {
			if (((arr_values[j].split("M").length - 1) == 2) && ((arr_values[j].split("y").length - 1) >= 1) && ((arr_values[j].split("d").length - 1) >= 1)) {
				index_of_d = arr_values[j].indexOf("d");
				index_of_m = arr_values[j].indexOf("M");
				index_of_y = arr_values[j].indexOf("y");

				var max_index = Math.max(index_of_d, index_of_m, index_of_y);
				var min_index = Math.min(index_of_d, index_of_m, index_of_y);

				dmy["m"] = arr_values[j].substring(min_index, 1 + max_index);
				flag = true;
				break;
			}
		}
		if (flag == false)	{
			var medium = date_formats["medium"]["dateFormat"]["pattern"];
			index_of_d = medium.indexOf("d");
			index_of_m = medium.indexOf("M");
			index_of_y = medium.indexOf("y");

			var max_index = Math.max(index_of_d, index_of_m, index_of_y);
			var min_index = Math.min(index_of_d, index_of_m, index_of_y);
			dmy["m"] = medium.substring(min_index, 1 + max_index);
		}
	}

	if (available_formats["yyMMMd"] && available_formats["yyyyMMMd"]) {
		dmy["l"] = available_formats["yyMMMd"] || available_formats["yyyyMMMd"];
	} else if ((available_formats["yyMMMd"] === undefined) && (available_formats["yyyyMMMd"] === undefined)) {
		var flag = false;
		for (var j = 0; j < arr_values.length; j++) {
			if (((arr_values[j].split("M").length - 1) == 3) && ((arr_values[j].split("y").length - 1) >= 1) && ((arr_values[j].split("d").length - 1) >= 1)) {
				index_of_d = arr_values[j].indexOf("d");
				index_of_m = arr_values[j].indexOf("M");
				index_of_y = arr_values[j].indexOf("y");

				var max_index = Math.max(index_of_d, index_of_m, index_of_y);
				var min_index = Math.min(index_of_d, index_of_m, index_of_y);

				dmy["l"] = arr_values[j].substring(min_index, 1 + max_index);
				flag = true;
				break;
			}
		}
		if (flag == false)	{
			var long = date_formats["long"]["dateFormat"]["pattern"];
			index_of_d = long.indexOf("d");
			index_of_m = long.indexOf("M");
			index_of_y = long.indexOf("y");

			var max_index = Math.max(index_of_d, index_of_m, index_of_y);
			var min_index = Math.min(index_of_d, index_of_m, index_of_y);

			dmy["l"] = long.substring(min_index, 1 + max_index);
		}
	}

	if (available_formats["yMMMMd"]) {
		dmy["f"] = available_formats["yMMMMd"];
	} else if (available_formats["yMMMMd"] === undefined) {
		var flag = false;
		for (var j = 0; j < arr_values.length; j++) {
			if (((arr_values[j].split("M").length - 1) == 4) && ((arr_values[j].split("y").length - 1) >= 1) && ((arr_values[j].split("d").length - 1) >= 1)) {
				index_of_d = arr_values[j].indexOf("d");
				index_of_m = arr_values[j].indexOf("M");
				index_of_y = arr_values[j].indexOf("y");

				var max_index = Math.max(index_of_d, index_of_m, index_of_y);
				var min_index = Math.min(index_of_d, index_of_m, index_of_y);

				dmy["f"] = arr_values[j].substring(min_index, 1 + max_index);
				flag = true;
				break;
			}
		}
		if (flag == false)	{
			var full = date_formats["full"]["dateFormat"]["pattern"];
			index_of_d = full.indexOf("d");
			index_of_m = full.indexOf("M");
			index_of_y = full.indexOf("y");

			var max_index = Math.max(index_of_d, index_of_m, index_of_y);
			var min_index = Math.min(index_of_d, index_of_m, index_of_y);
			dmy["f"] = full.substring(min_index, 1 + max_index);
		}
	}

	//end of dmy combination

	if (available_formats["d"]) {
		d["s"] = available_formats["d"];
		d["m"] = d["l"] = d["f"] = d["s"];
	}

	if (available_formats["d"] === undefined) {
		//var flag=false;
		for (var j = 0; j < arr_values.length; j++) {
			if ((arr_values[j].split("d").length - 1) == 1) {
				d["s"] = "d";
				d["m"] = "d";
				d["l"] = "d";
				d["f"] = "d";
				break;
			}
		}
	}
	//if(d["s"]!="d")
	//{
	for (var j = 0; j < arr_values.length; j++) {
		if ((arr_values[j].split("d").length - 1) == 2) {
			if (d["s"] != "d") {
				d["s"] = "dd";
			}
			d["m"] = "dd";
			d["l"] = "dd";
			d["f"] = "dd";
			break;
		}
	}
	//}

	//}

	//end of d combination

	if (available_formats["M"]) {
		m["s"] = available_formats["M"];
		m["s"] = m["l"] = m["m"] = m["f"];
	} else if (available_formats["M"] === undefined) {
		//var flag=false;
		for (var j = 0; j < arr_values.length; j++) {
			if ((arr_values[j].split("M").length - 1) == 1) {
				m["s"] = "M";
				m["m"] = "M";
				m["l"] = "M";
				m["f"] = "M";
				break;
			}
		}
	}
	//if(m["s"]!="M")
	//{
	for (var j = 0; j < arr_values.length; j++) {
		if ((arr_values[j].split("M").length - 1) == 2) {
			if (m["s"] != "M") {
				m["s"] = "MM";
			}
			m["m"] = "MM";
			m["l"] = "MM";
			m["f"] = "MM";

			break;
		}
	}
	//}

	if (available_formats["MMM"]) {
		m["l"] = available_formats["MMM"];
		m["f"] = m["l"];
	} else if (available_formats["MMM"] === undefined) {
		for (var j = 0; j < arr_values.length; j++) {
			if ((arr_values[j].split("M").length - 1) == 3) {
				m["l"] = "MMM";
				m["f"] = "MMM";
				break;
			}
		}
	}

	//if(m["l"]!="MMM")
	//{
	for (var j = 0; j < arr_values.length; j++) {
		if ((arr_values[j].split("M").length - 1) == 4) {
			if (m["l"] != "MMM") {

				m["l"] = "MMMM";
			}
			m["f"] = "MMMM";
			//d["l"]="dd";
			//d["f"]="dd";
			break;
		}
	}
	//}

	//end of m combination

	if (available_formats["y"]) {
		y["s"] = available_formats["y"];
		y["s"] = y["m"] = y["l"] = y["f"];
	} else if (available_formats["y"] === undefined) {
		//var flag=false;
		for (var j = 0; j < arr_values.length; j++) {
			if ((arr_values[j].split("y").length - 1) == 1) {
				y["s"] = "y";
				y["m"] = "y";
				y["l"] = "y";
				y["f"] = "y";
				break;
			}
		}
	}
	//if(y["s"]!="y")
	//{
	for (var j = 0; j < arr_values.length; j++) {
		if ((arr_values[j].split("y").length - 1) == 2) {
			if (y["s"] != "y") {
				y["s"] = "yy";
			}
			y["m"] = "yy";
			y["l"] = "yy";
			y["f"] = "yy";

			break;
		}
	}
	//}

	if (available_formats["yyy"]) {
		y["l"] = available_formats["yyy"];
		y["f"] = y["l"];
	} else if (available_formats["yyy"] === undefined) {
		for (var j = 0; j < arr_values.length; j++) {
			if ((arr_values[j].split("y").length - 1) == 3) {
				y["l"] = "yyy";
				y["f"] = "yyy";
				break;
			}
		}
	}

	//if(y["l"]!="yyy")
	//{
	for (var j = 0; j < arr_values.length; j++) {
		if ((arr_values[j].split("y").length - 1) == 4) {
			if (y["l"] != "yyy") {
				y["l"] = "yyyy";
			}
			y["f"] = "yyyy";
			//d["l"]="dd";
			//d["f"]="dd";
			break;
		}
	}
	//}

	if (available_formats["yyyy"]) {
		y["f"] = available_formats["yyyy"];
	}

	//end of y combination

	if (available_formats["MEd"]) {
		dmw["s"] = available_formats["MEd"];
		dmw["m"] = dmw["s"];
	} else if (available_formats["MEd"] === undefined) {
		dmw["s"] = "E" + " " + dm["s"];
		dmw["m"] = "EE" + " " + dm["m"];
	}

	//dmw["m"]="E"+dm["s"];

	if (available_formats["MMMEd"]) {
		dmw["l"] = available_formats["MMMEd"];
		dmw["f"] = dmw["l"].replace(/E/g, "EEEE");
	} else if (available_formats["MMMEd"] === undefined) {
		dmw["l"] = "EEE" + " " + dm["l"];
		dmw["f"] = "EEEE" + " " + dm["f"];
	}

	//dmw["l"]="EEE"+dm["l"];

	//end of dmw

	if (available_formats["yMEd"]) {
		dmwy["s"] = available_formats["yMEd"];
		dmwy["m"] = dmwy["s"];
	} else if (available_formats["yMEd"] === undefined) {
		dmw["s"] = "EE" + " " + dmy["s"];
	}

	if (available_formats["yMMMEd"]) {
		dmwy["l"] = available_formats["yMMMEd"];
		dmwy["f"] = dmwy["l"].replace(/E/g, "EEEE");
	} else if (available_formats["yMMMEd"] === undefined) {
		dmwy["l"] = "EEE" + " " + dmy["l"];
		dmwy["f"] = "EEEE" + " " + dmy["f"];
	}

	n["s"] = "N";
	n["m"] = "N";
	n["l"] = "MMM";
	n["f"] = "MMMM";

	//}

	date["dm"] = dm;
	date["my"] = my;
	date["dmy"] = dmy;
	date["d"] = d;
	date["m"] = m;
	date["y"] = y;
	date["dmw"] = dmw;
	date["dmwy"] = dmwy;
	date["n"] = n;
	gregorian["date"] = date;
	//dates["gregorian"]=gregorian;
	//}

	//util.print("gregorian date formats are :"+JSON.stringify(gregorian)+"++++++++++++++++++++++++++++++++++++++++++++"+"\n");    

	//code to map Time Formats
	var time = {};
	available_formats = JSON.parse(JSON.stringify(available_formats).replace(/HH/g, "H"));
	if (available_formats["hms"]) {
		var index_of_a = available_formats["hms"].indexOf("a");
		var index_of_h = available_formats["hms"].indexOf("h");
		var max_index = Math.max(index_of_a, index_of_h);
		available_formats["hms"] = available_formats["hms"].replace(/h/g, "H");
		available_formats["hms"] = available_formats["hms"].substring(available_formats["hms"].indexOf("H"), 1 + available_formats["hms"].lastIndexOf("s"));
		//available_formats["hms"]==available_formats["hms"].replace(/a/g,"");
		if (max_index == index_of_a) {
			time["ahmsz"] = available_formats["hms"] + "a" + " " + "z";
			time["ahms"] = available_formats["hms"] + "a";
		} else {
			time["ahmsz"] = "a" + available_formats["hms"] + " " + "z";
			time["ahms"] = "a" + available_formats["hms"];
		}
		time["hms"] = available_formats["hms"];
		time["ms"] = available_formats["hms"].substring(available_formats["hms"].indexOf("m"), 1 + available_formats["hms"].lastIndexOf("s"));
	}

	if (available_formats["hm"]) {
		var index_of_a = available_formats["hm"].indexOf("a");
		var index_of_h = available_formats["hm"].indexOf("h");
		var max_index = Math.max(index_of_a, index_of_h);
		available_formats["hm"] = available_formats["hm"].replace(/h/g, "H");
		available_formats["hm"] = available_formats["hm"].substring(available_formats["hm"].indexOf("H"), 1 + available_formats["hm"].lastIndexOf("s"));

		if (max_index == index_of_a) {
			time["ahmz"] = available_formats["hm"] + "a" + " " + "z";
			time["ahm"] = available_formats["hm"] + "a";
			time["ah"] = "Ha";
		} else {
			time["ahmz"] = "a" + available_formats["hm"] + " " + "z";
			time["ahm"] = "a" + available_formats["hm"];
			time["ah"] = "aH";
		}
		time["hm"] = available_formats["hm"];

	}
	time["m"] = "mm";
	time["s"] = "ss";

	gregorian["time"] = time;
	util.print("gregorian date formats are :" + JSON.stringify(time) + "++++++++++++++++++++++++++++++++++++++++++++" + "\n");
	dates["gregorian"] = gregorian;

	//util.print("gregorian date formats are :"+JSON.stringify(gregorian)+"++++++++++++++++++++++++++++++++++++++++++++"+"\n");    

	return dates;
}
//util.print("\nMerging and pruning resources...\n");

function writeDateFormats(language, script, region, data) {

	var path = calcLocalePath(language, script, region, "");

	if (data.generated) {
		if (anyProperties(data)) {
			var empty_data = data["gregorian"]["date"];
			var dateFormat = {};
			var gregorian = {};
			var date = {};
			if (data["gregorian"]["order"] != undefined)
				gregorian["order"] = data["gregorian"]["order"];

			var arr_data = ["dm", "dmy", "my", "m", "d", "y", "dmwy", "dmw", "n"];
			var arr_keys = [empty_data["dm"], empty_data["dmy"], empty_data["my"], empty_data["m"], empty_data["d"], empty_data["y"], empty_data["dmwy"], empty_data["dmw"], empty_data["n"]];

			for (var i = 0; i < arr_data.length; i++) {

				if ((Object.keys(arr_keys[i]).length != 0)) {
					date[arr_data[i]] = arr_keys[i];
				}
			}

			if (Object.keys(date).length != 0) {
				gregorian["date"] = date;

			}
			if (Object.keys(data["gregorian"]["time"]).length != 0) {
				gregorian["time"] = data["gregorian"]["time"];
			}
			if (Object.keys(gregorian).length === 0) {
				util.print("Skipping empty " + path + "\n");
				return;
			}

			makeDirs(path);

			//gregorian["date"]=date;
			dateFormat["gregorian"] = gregorian;

			util.print("Writing " + path + "dateformats.json\n");

			fs.writeFileSync(path + "/dateformats.json", JSON.stringify(dateFormat), "utf-8");
		} else {
			util.print("Skipping empty " + path + "dateformats.json\n");
		}
	} else {
		util.print("Skipping existing " + path + "dateformats.json\n");
	}
}

for (language in resources_dateformat_data) {
	if (language && resources_dateformat_data[language] && language !== 'data' && language !== 'merged') {
		for (var subpart in resources_dateformat_data[language]) {
			if (subpart && resources_dateformat_data[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
				if (Locale.isScriptCode(subpart)) {
					script = subpart;
					for (region in resources_dateformat_data[language][script]) {
						if (region && resources_dateformat_data[language][script][region] && region !== 'data' && region !== 'merged') {
							writeDateFormats(language, script, region, resources_dateformat_data[language][script][region].data);
						}
					}
					writeDateFormats(language, script, undefined, resources_dateformat_data[language][script].data);
				} else {
					writeDateFormats(language, undefined, subpart, resources_dateformat_data[language][subpart].data);
				}
			}
		}
		writeDateFormats(language, undefined, undefined, resources_dateformat_data[language].data);
	}
}
writeDateFormats(undefined, undefined, undefined, resources_dateformat_data.data);

process.exit(0);