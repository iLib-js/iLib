/*
 * gentzinfo.js - ilib tool to generate the tzinfo about time zones in a locale
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
var unifile = require('./unifile.js');
var common = require('./common.js');
var UnicodeFile = unifile.UnicodeFile;
var coelesce = common.coelesce;

function usage() {
	util.print("Usage: gentzinfo [-h] CLDR-dir tzdata-dir [toDir]\n" +
			"Generate the time zone info.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"CLDR-dir\n" +
			"  path to the json CLDR files downloaded from the Unicode site\n" +
			"tzdata-dir\n" +
			"  path to the tzdata dir downloaded from the IANA site\n" +
			"toDir\n" +
			"  directory to output the normalization json files. Default: current dir.\n");
	process.exit(1);
}

function loadFile(path) {
	var ret = undefined;
	
	if (fs.existsSync(path)) {
		json = fs.readFileSync(path, "utf-8");
		ret = JSON.parse(json);
	}
	
	return ret;
}

var cldrDir;
var tzDataDir;
var toDir = ".";

process.argv.forEach(function (val, index, array) {
	if (val === "-h" || val === "--help") {
		usage();
	}
});

if (process.argv.length < 3) {
	util.error('Error: not enough arguments');
	usage();
}

cldrDir = process.argv[2];
tzDataDir = process.argv[3];
if (process.argv.length > 4) {
	toDir = process.argv[4];
}

util.print("gentzinfo - generate time zone info data.\n" +
		"Copyright (c) 2013 JEDLSoft\n");
util.print("CLDR dir: " + cldrDir + "\n");
util.print("To dir: " + toDir + "\n");

fs.exists(cldrDir, function (exists) {
	if (!exists) {
		util.error("Could not access CLDR directory " + cldrDir);
		usage();
	}
});

fs.exists(tzDataDir, function (exists) {
	if (!exists) {
		util.error("Could not access tzdata directory " + tzDataDir);
		usage();
	}
});

fs.exists(toDir, function (exists) {
	if (!exists) {
		util.error("Could not access target directory " + toDir);
		usage();
	}
});

var windowsZonesFile = cldrDir + "aux/supplemental/windowsZones.json";
fs.exists(windowsZonesFile, function (exists) {
	if (!exists) {
		util.error("Could not access file " + windowsZonesFile);
		usage();
	}
});
var windowsZones = loadFile(windowsZonesFile);

var zoneTabFile = tzDataDir + "/zone.tab";
var zoneTab = new UnicodeFile({
	path: zoneTabFile,
	splitChar: /\t+/g
});

var backwardsCompatibilityFile = tzDataDir + "/backward";
var backwardsFile = new UnicodeFile({
	path: backwardsCompatibilityFile,
	splitChar: /\t+/g
});
var backwardsMap = {};

for (var i = 0; i < backwardsFile.length(); i++) {
	var row = backwardsFile.get(i);
	backwardsMap[row[2].trim()] = row[1].trim();
	util.print("mapped old id " + row[2] + " to modern " + row[1] + "\n");
}

var timezonesFile = toDir + "/timezones.json";
var timezones = loadFile(timezonesFile) || {};
var countries = {};

for (var i = 0; i < zoneTab.length(); i++) {
	var row = zoneTab.get(i);
	util.print("map " + row[2] + " to " + row[0] + "\n");
	countries[row[2]] = row[0];
}

for (var zone in timezones) {
	var zoneDef = timezones[zone];
	if (typeof(countries[zone]) !== 'undefined') {
		zoneDef.c = countries[zone];
		util.print("zone " + zone + " country " + zoneDef.c + "\n");
	} else if (typeof(countries[backwardsMap[zone]]) !== 'undefined') {
		zoneDef.c = countries[backwardsMap[zone]];
		util.print("zone (old) " + zone + " country " + zoneDef.c + "\n");
	} else {
		util.print("zone " + zone + " has no country.\n");
	}
}

var tz;

for (var zone = 0; zone < windowsZones.windowsZones.mapTimezones.length; zone++) {
	var mapZone = windowsZones.windowsZones.mapTimezones[zone].mapZone;
	var zones = mapZone["@type"].split(/ /g);
	for (var i = 0; i < zones.length; i++) {
		var name = backwardsMap[zones[i]] || zones[i];
		if (timezones[name]) {
			timezones[name].n = mapZone["@other"].replace(/[Ss]tandard/, "{c}");
			util.print("zone " + name + " long name is " + timezones[name].n + "\n");
		} else {
			util.print("zone " + name + " long name is missing\n");
		}
	}
}

fs.writeFile(timezonesFile, JSON.stringify(timezones), function (err) {
	if (err) {
		throw err;
	}
});

util.print("Done\n");