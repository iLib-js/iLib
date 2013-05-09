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
	util.print("Usage: gencountrynames [-h] CLDR_json_dir locale_data_dir\n" +
			"Generate localized country names from the CLDR data.\n\n" +
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

util.print("gencountrynames - generate localized country names from the CLDR data.\n" +
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

function loadFile(path) {
	var ret = undefined;
	
	if (fs.existsSync(path)) {
		json = fs.readFileSync(path, "utf-8");
		ret = JSON.parse(json);
	}
	
	return ret;
}

function filterRegions(regions, territories) {
	for (var region in territories) {
		if (region && territories[region]) {
			if (Locale.isRegionCode(region)) {
				regions[territories[region]] = region;
			}
		}
	}
	
	return regions;
}

function getRegionNames(localeData, path, language, script, region) {
	try {
		var filename = cldrDirName + "/main/" + path;
		var data = loadFile(filename);
		
		var destfile = calcLocalePath(language, script, region, "ctrynames.json");
		var destdata = loadFile(destfile);
		
		// If the existing file is there and done by hand, just merge these things into that file rather
		// than overwriting it. If the file is previously generated, start from a blank slate.
		if (!destdata || typeof(destdata.generated) === 'undefined' || destdata.generated !== false) {
			destdata = {};
		} else {
			util.print("Merging into existing by-hand file\n");
		}
		
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
				localeData[language][script][region].data = filterRegions(destdata, data.localeDisplayNames.territories);
			}
		} else if (region) {
			if (!localeData[language]) {
				localeData[language] = {};
			}
			if (!localeData[language][region]) {
				localeData[language][region] = {};
			}
			localeData[language][region].data = filterRegions(destdata, data.localeDisplayNames.territories);
		} else if (language) {
			if (!localeData[language]) {
				localeData[language] = {};
			}
			localeData[language].data = filterRegions(destdata, data.localeDisplayNames.territories);
		} else {
			// root locale
			localeData.data = filterRegions(destdata, data.localeDisplayNames.territories);
		}
	} catch (e) {
		return undefined;
	}
	
	return data;
}

function getMergedData(localeData, language, script, region) {
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

function calcLocalePath(language, script, region, filename) {
	var path = localeDirName + "/";
	if (language) {
		path += language + "/";
	} else {
		path += "und/";
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

function writeCountryNameResources(language, script, region, data) {
	var path = calcLocalePath(language, script, region, "");
	if (anyProperties(data)) {
		util.print("Writing " + path + "\n");
		makeDirs(path);
		fs.writeFileSync(path + "/ctrynames.json", JSON.stringify(data), "utf-8");
	} else {
		// util.print("Skipping empty " + path + "\n");
	}
}

var localeFiles, localeData = {};

try {
	localeFiles = fs.readdirSync(cldrDirName + "/main");
} catch (e) {
	util.print("Error: Could not load file " + filename + "\n");
	process.exit(2);
}

util.print("Loading locale data...\n");

// get the information about scripts if necessary
for (var i = 0; i < localeFiles.length; i++) {
// for (var i = 0; i < 6; i++) {
	var filename = localeFiles[i];	
	var localeSpec = filename.substring(0, filename.length-5).replace(/_/g, "-");
	util.print("filename: " + filename + " Locale: " + localeSpec + "\n");
	var locale = new Locale(localeSpec);
	
	var language = locale.getLanguage(),
		script = locale.getScript(),
		region = locale.getRegion();
	
	if (filename !== "root.json") {
		getRegionNames(localeData, filename, language, script, region);
	}
}

//find the system resources
util.print("Merging and pruning locale data...\n");

mergeAndPrune(localeData);

util.print("\nWriting country name resources...\n");

// now write out the system resources

for (language in localeData) {
	if (language && localeData[language] && language !== 'data' && language !== 'merged') {
		for (var subpart in localeData[language]) {
			if (subpart && localeData[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
				if (Locale.isScriptCode(subpart)) {
					script = subpart;
					for (region in localeData[language][script]) {
						if (region && localeData[language][script][region] && region !== 'data' && region !== 'merged') {
							writeCountryNameResources(language, script, region, localeData[language][script][region].data);
						}			
					}
					writeCountryNameResources(language, script, undefined, localeData[language][script].data);
				} else { 
					writeCountryNameResources(language, undefined, subpart, localeData[language][subpart].data);
				}
			}
		}
		writeCountryNameResources(language, undefined, undefined, localeData[language].data);
	}
}

writeCountryNameResources(undefined, undefined, undefined, localeData.data);
