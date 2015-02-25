/*
 * gentzinfo.js - ilib tool to generate the tzinfo about time zones in a locale
 * 
 * Copyright © 2013-2015, JEDLSoft
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
var path = require('path');
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
			"  directory to output the normalized json files. Default: current dir.\n");
	process.exit(1);
}

function loadFile(filepath) {
	var ret = undefined;
	
	if (fs.existsSync(filepath)) {
		json = fs.readFileSync(filepath, "utf-8");
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

if (!fs.existsSync(cldrDir)) {
	util.error("Could not access CLDR directory " + cldrDir);
	usage();
}

if (!fs.existsSync(tzDataDir)) {
	util.error("Could not access tzdata directory " + tzDataDir);
	usage();
}

if (!fs.existsSync(toDir)) {
	util.error("Could not access target directory " + toDir);
	usage();
}

var windowsZonesFile = cldrDir + "/supplemental/windowsZones.json";
if (!fs.existsSync(windowsZonesFile)) {
	util.error("Could not access file " + windowsZonesFile);
	usage();
}
var windowsZones = loadFile(windowsZonesFile);
if (typeof(windowsZones.supplemental) !== 'undefined') {
	windowsZones = windowsZones.supplemental;
}

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

function isDirectory(dir) {
	var stats = fs.statSync(dir);
	return stats.isDirectory();
}

function scanDir(rootDir, dirName, zones) {
	var dirpath, filepath, files;
	
	dirpath = path.join(rootDir, dirName);
	files = fs.readdirSync(dirpath);

	util.print("Scanning dir " + dirpath + "\n");

	for (var i = 0; i < files.length; i++) {
		file = files[i];
		filepath = path.join(dirName, file);
		if (isDirectory(path.join(rootDir, filepath))) {
			scanDir(rootDir, filepath, zones);
		} else {
			var ext = filepath.search(".json");
		
			if (ext !== -1) {
				util.print("Found file " + filepath + "\n");
				zones[filepath.substring(0, ext).replace(/^zoneinfo\//, "")] = loadFile(path.join(rootDir, filepath)) || {};
			}
		}
	}
}

util.print("\n");

var timezones = {};
scanDir(toDir, "", timezones);

var countries = {};
var countryToZones = {};

for (var i = 0; i < zoneTab.length(); i++) {
	var row = zoneTab.get(i);
	util.print("map " + row[2] + " to " + row[0] + "\n");
	countries[row[2]] = row[0];
	if (!countryToZones[row[0]]) {
		countryToZones[row[0]] = [];
	}
	countryToZones[row[0]].push(row[2]);
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
	var type = mapZone["@type"] || mapZone["_type"];
	var zones = type.split(/ /g);
	for (var i = 0; i < zones.length; i++) {
		var name = backwardsMap[zones[i]] || zones[i];
		if (timezones[name]) {
			var other = mapZone["@other"] || mapZone["_other"];
			timezones[name].n = other.replace(/[Ss]tandard/, "{c}");
			util.print("zone " + name + " long name is " + timezones[name].n + "\n");
		} else {
			util.print("zone " + name + " long name is missing\n");
		}
	}
}

if (!fs.existsSync(path.join(toDir, "zoneinfo"))) {
	common.makeDirs(path.join(toDir, "zoneinfo"));
}

for (var zone in timezones) {
	var filepath = path.join(toDir, "zoneinfo", zone + ".json");
	util.print("Writing out zone info file " + filepath + "\n");
	fs.writeFile(filepath, JSON.stringify(timezones[zone], true, 4), function (err) {
		if (err) {
			throw err;
		}
	});
}

var filepath = path.join(toDir, "zoneinfo/zonetab.json");
util.print("Writing out zone tab file " + filepath + "\n");
fs.writeFile(filepath, JSON.stringify(countryToZones, true, 4), function (err) {
	if (err) {
		throw err;
	}
});

util.print("Done\n");