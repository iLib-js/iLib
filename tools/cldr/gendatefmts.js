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
			"Generate date formats information files.\n\n" +
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

util.print("gendatefmts - generate date formats information files.\n" +
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
	languageData = suppData.languageData;
} catch (e) {
	util.print("Error: Could not load file " + filename + "\n");
	process.exit(2);
}


// get the information about scripts if necessary
for (var locale in languageData) {
	if (locale && languageData[locale]) {
		// util.print("checking scripts for locale " + locale + "\n");
		if (typeof(languageData[locale]["@scripts"]) === 'string') {
			var language = (locale.length <= 3) ? locale : locale.split(/-/)[0];
			if (typeof(scripts[language]) === 'undefined') {
				scripts[language] = [];
			}
			var newLangs = languageData[locale]["@scripts"].split(/ /g);
			if (locale.length <= 3) {
				// util.print("language " + language + " prepending " + JSON.stringify(newLangs));
				scripts[language] = newLangs.concat(scripts[language]);
			} else {
				// util.print("language " + language + " appending " + JSON.stringify(newLangs));
				scripts[language] = scripts[language].concat(newLangs);
			}
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
	if (typeof(obj) !== 'undefined' && (typeof(obj.generated) === 'undefined' || obj.generated === false)) {
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
		"af":1, "br":1, "cy":1, "el":1, "en":1, "de":1, "bar":1,
		"gsw":1, "ksh":1, "lb":1, "nds":1, "pfl":1, "hz":1, "id":1,
		"la":1, "ms":1, "pt":1, "ve":1, "xh":1, "zu":1,
	};

	var lowercasedMonthLocales = {
		"bs":1, "bg":1, "hr":1, "ca":1, "cs":1, "da":1, "dsb":1,
		"eo":1, "es":1, "et":1, "fi":1, "fr":1, "hr":1, "hsb":1,
		"hu":1, "hy":1, "is":1, "it":1, "li":1, "lv":1, "lt":1,
		"mk":1, "no":1, "nn":1, "nl":1, "pl":1, "BR":1, "ro":1,
		"ru":1, "os":1, "sr":1, "sk":1, "sl":1, "sv":1, "tr":1,
		"uk":1, "vi":1, "wa":1
	};

	var str = "";
	var parent = typeof(data.dates.calendars.gregorian.months.format) === 'undefined' ? 
			data.dates.calendars.gregorian.months.standalone : 
			data.dates.calendars.gregorian.months.format;

	var capFunction = (typeof(lowercasedMonthLocales[language]) !== 'undefined' || typeof(lowercasedMonthLocales[region]) !== 'undefined') ? initialLower :
			(typeof(capitalizedMonthLocales[language]) !== 'undefined' ? initialCap : leaveSame);
	
	table = parent.narrow;
	for (var i = 1; i < 13; i++) {
		sysres["N"+i] = str;
	}

	table = parent.abbreviated;
	for (var i = 1; i < 13; i++) {
		sysres["NN"+i] = capFunction(table[i].substring(0,2));
	}
	for (var i = 1; i < 13; i++) {
		sysres["MMM"+i] = capFunction(table[i]);
	}

	table = parent.wide;
	for (var i = 1; i < 13; i++) {
		sysres["MMMM"+i] = capFunction(table[i]);
	}

	// from https://meta.wikimedia.org/wiki/Capitalization_of_Wiktionary_pages#Capitalization_of_month_names
	var capitalizedDayLocales = {
		"af":1, "br":1, "cy":1, "en":1, "de":1, "bar":1,
		"gsw":1, "ksh":1, "lb":1, "nds":1, "pfl":1, "el":1, 
		"hz":1, "id":1, "la":1, "ve":1, "xh":1, "zu":1,
	};

	var lowercasedDayLocales = {
		"bs":1, "bg":1, "hr":1, "ca":1, "cs":1, "dsb":1,
		"eo":1, "fi":1, "fr":1, "hsb":1,
		"hu":1, "hy":1, "it":1, "li":1, "lv":1, "lt":1,
		"mk":1, "no":1, "nn":1, "nl":1, "os":1, "pl":1, "pt":1, "ro":1,
		"ru":1, "sr":1, "sk":1, "sv":1, "vi":1, "wa":1
	};

	var dayProperties = ["sun","mon","tue","wed","thu","fri","sat"];
	var parent = typeof(data.dates.calendars.gregorian.days.format) === 'undefined' ? 
			data.dates.calendars.gregorian.days.standalone : 
			data.dates.calendars.gregorian.days.format;
	capFunction = (typeof(capitalizedDayLocales[language]) !== 'undefined') ? initialCap : 
		  (typeof(lowercasedDayLocales[language]) !== 'undefined') ? initialLower :
			  leaveSame;
	
	table = parent.narrow;
	for (var i = 0; i < 7; i++) {
		sysres["E"+i] = table[dayProperties[i]];
	}

	table = parent.short;
	for (var i = 0; i < 7; i++) {
		sysres["EE"+i] = capFunction(table[dayProperties[i]].substring(0,2));
	}
	
	table = parent.abbreviated;
	for (var i = 0; i < 7; i++) {
		sysres["EEE"+i] = capFunction(table[dayProperties[i]]);
	}
	
	table = parent.wide;
	for (var i = 0; i < 7; i++) {
		sysres["EEEE"+i] = capFunction(table[dayProperties[i]]);
	}

	var periodProperties = ["am","pm"];
	parent = typeof(data.dates.calendars.gregorian.dayPeriods.format) === 'undefined' ? 
			data.dates.calendars.gregorian.dayPeriods.standalone : 
			data.dates.calendars.gregorian.dayPeriods.format;

	table = parent.wide;
	for (var i = 0; i < 2; i++) {
		sysres["a"+i] = table[periodProperties[i]];
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
			
			if (i+size <= str.length) {
				if (i+size+1 === str.length) {
					return str.substring(0, i+size+1);
				}
				return str.substring(0, i+size);
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

			var mediumOther = "", longOther = "", fullOther = "";
			var temp, mediumClipped, longClipped, mediumStr = "", longStr = "", fullStr = "";
			if (typeof(unit["unitPattern-count-other-alt-short"]) !== 'undefined') {
				mediumOther = clipForMedium(
						unit["unitPattern-count-other-alt-short"],
						unit["unitPattern-count-other"]);
			}
			if (typeof(unit["unitPattern-count-other"]) !== 'undefined') {
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
				if (typeof(unit["unitPattern-count-" + name + "-alt-short"]) !== 'undefined' &&
						mediumClipped !== mediumOther) {
					if (mediumStr.length > 0) {
						mediumStr += "|";
					}
					temp = mediumClipped.replace("{0}", "{num}");
					mediumStr += name + "#" + temp;
				}
				longClipped = clipForLong(unit["unitPattern-count-" + name]);
				if (typeof(unit["unitPattern-count-" + name]) !== 'undefined' &&
						longClipped !== longOther) {
					if (longStr.length > 0) {
						longStr += "|";
					}
					temp = longClipped.replace("{0}", "{num}");
					longStr += name + "#" + temp;
				}
				if (typeof(unit["unitPattern-count-" + name]) !== 'undefined' &&
						unit["unitPattern-count-" + name] !== fullOther) {
					if (fullStr.length > 0) {
						fullStr += "|";
					}
					fullStr += name + "#" + unit["unitPattern-count-" + name].replace("{0}", "{num}");
				}
			}
			if (typeof(unit["unitPattern-count-other-alt-short"]) !== 'undefined') {
				if (mediumStr.length > 0) {
					mediumStr += "|";
				}
				temp = clipForMedium(unit["unitPattern-count-other-alt-short"], unit["unitPattern-count-other"]).replace("{0}", "{num}");
				mediumStr += "#" + temp;
			}
			if (typeof(unit["unitPattern-count-other"]) !== 'undefined') {
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
	if (typeof(unit["day-past"]["unitPattern-count-one"]) !== 'undefined') {
		var day = table["day"]["unitPattern-count-one"];
		var dayPast = table["day-past"]["unitPattern-count-one"];
		sysres["{duration} ago"] = dayPast.replace(day, "{duration}").toLowerCase();
	}

	unit = table;
	str = "";
	if (typeof(table["day-future"]["unitPattern-count-one"]) !== 'undefined') {
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

function writeDateFormats(language, script, region) {
	var filename;
	
	if (script) {
		if (getDefaultScript(language) === script) {
			// util.print("default script for language " + language + " is " + getDefaultScript(language) + "\n");
			filename = localeDirName + "/" + language + "/" + region + "/dateformats.json";
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
		util.print("writing to " + filename + "\n");
	} else {
		util.print("not overwriting " + filename + "\n");
	}
}

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
		util.print(locale + " ");
		getLocaleData(file, l.getLanguage(), l.getScript(), l.getRegion());
	}
}
util.print("\n");

// find the system resources
util.print("Merging and pruning locale data...\n");

mergeAndPrune(localeData);

var resources = {};

util.print("\nCalculating system resources...\n");

resources.data = getSystemResources(undefined, undefined, undefined, localeData.data);
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

process.exit(0);

// Now write out the data. Do not overwrite existing data, as it has probably 
// been hand-tweaked.


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
