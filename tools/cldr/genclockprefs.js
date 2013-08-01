/* 
 * genclockprefs.js - ilib tool to generate the  clock json fragments from
 * the CLDR data files
 *
 * Copyright © 2013, LGE
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
	util.print("Usage: genclockprefs [-h] CLDR_json_dir locale_data_dir\n" +
		"Generate clock preferences information files.\n\n" +
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
util.print("genclockprefs - generate clock preferences information files.\n" +
	"Copyright (c) 2013 LGE\n");
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
for (var locale in languageData) {
	if (locale && languageData[locale]) {
		if (typeof (languageData[locale]["@scripts"]) === 'string') {
			var language = (locale.length <= 3) ? locale : locale.split(/-/)[0];
			if (typeof (scripts[language]) === 'undefined') {
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
		//util.print("path is :"+path+"\n"); 
	}
	return ret;
}
/*function loadFile_jf(path) {
	var ret = undefined;
	if (fs.existsSync(path)) {
		//util.print("path is :" + path + "\n");
		json = fs.readFileSync(path, "utf-8");
		var lastComma = json.lastIndexOf(",");
		json = json.substring(0, lastComma);
		ret = JSON.parse("{" + json + "}");
		//util.print("path is :"+path+"\n"); 
	}
	return ret;
}*/

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
	var path = calcLocalePath(language, script, region, "clock.jf");
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

function writeClockPrefs(language, script, region, data) {
	var path = calcLocalePath(language, script, region, "");
	//util.print("data to be written into jf files" + path + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(data)+"\n");
	if (data.generated) {
		if (anyProperties(data)) {
			util.print("Writing " + path + "\n");
			makeDirs(path);
			//util.print("data to be written into jf files" + path + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(data["clock"])+"\n"); 
			if (typeof (data["clock"]) != 'undefined') {
				data.generated = true;
				makeDirs(path);
				fs.writeFileSync(path + "/clock.jf", JSON.stringify(data, true, 4), "utf-8");
			}
		} else {
			util.print("Skipping empty " + path + "\n");
		}
	} else {
		util.print("Skipping existing " + path + "\n");
	}
}

function getClockPrefs(language, script, region, data) {
	// if it is already there and non-generated, return it 
	var clockprefs = loadFileNonGenerated(language, script, region);
	if (clockprefs) {
		util.print("\nLoaded existing resources from " + calcLocalePath(language, script, region, "clock.jf") + "\n");
		//util.print("\nLoaded existing resources data " + JSON.stringify(clockprefs) + "\n");
		clockprefs.generated = false;
		return clockprefs;
	}
	// else generate a new one 
	clockprefs = {
		generated: true
	};
	var default_calendar = data.dates.calendars["default"];
	var timeformat = data.dates.calendars[default_calendar]["timeFormats"]["short"]["timeFormat"]["pattern"];
	if (timeformat.indexOf("H") != -1) {
		clockprefs["clock"] = "24";
	} else if (timeformat.indexOf("h") != -1) {
		clockprefs["clock"] = "12";
	} else {
		util.print("could not find default clock preference \n");
	}
	//util.print("time format is :"+JSON.stringify(timeformat)+"\n");
	//util.print("clock preference is :"+JSON.stringify(clockprefs)+"\n");
	return clockprefs;
}
var language, region, script, files;
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
		if (typeof (l.getVariant()) === 'undefined') {
			getLocaleData(file, l.getLanguage(), l.getScript(), l.getRegion());
		}
	}
}
util.print("\n");
util.print("Merging and pruning locale data...\n");
mergeAndPrune(localeData);
var resources = {};
resources.data = getClockPrefs(undefined, undefined, undefined, localeData.data);
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
							resources[language][script][region].data = getClockPrefs(language, script, region, localeData[language][script][region].merged);
						}
					}
				}
				resources[language][subpart].data = getClockPrefs(language, subpart, undefined, localeData[language][subpart].merged);
			}
		}
		resources[language].data = getClockPrefs(language, undefined, undefined, localeData[language].merged);
	}
}
//resources.data = getClockPrefs(undefined, undefined, undefined, localeData.data); 
util.print("\nMerging and pruning r...\n");
//util.print("\nLoaded existing resources " + JSON.stringify(resources) + "\n");
//writeClockPrefs(undefined, undefined, undefined, resources.data); 
//util.print("\ndata before merge and pruning\n"+JSON.stringify(resources)+"\n");
mergeAndPrune(resources);
//util.print("\ndata after merge and pruning\n"+JSON.stringify(resources)+"\n");
//writeClockPrefs(undefined, undefined, undefined, resources.data);
for (language in resources) {
	if (language && resources[language] && language !== 'data' && language !== 'merged') {
		for (var subpart in resources[language]) {
			if (subpart && resources[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
				if (Locale.isScriptCode(subpart)) {
					script = subpart;
					for (region in resources[language][script]) {
						if (region && resources[language][script][region] && region !== 'data' && region !== 'merged') {
							writeClockPrefs(language, script, region, resources[language][script][region].data);
						}
					}
					writeClockPrefs(language, script, undefined, resources[language][script].data);
				} else {
					writeClockPrefs(language, undefined, subpart, resources[language][subpart].data);
				}
			}
		}
		writeClockPrefs(language, undefined, undefined, resources[language].data);
	}
}
writeClockPrefs(undefined, undefined, undefined, resources.data);
process.exit(0);
