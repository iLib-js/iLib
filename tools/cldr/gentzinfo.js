/*
 * gentzinfo.js - ilib tool to generate the tzinfo about time zones in a locale
 * 
 * Copyright © 2013-2015, 2018, 2020 JEDLSoft
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
var path = require('path');
var unifile = require('./unifile.js');
var common = require('./common.js');
var UnicodeFile = unifile.UnicodeFile;
var windowsZones = require("cldr-data/supplemental/windowsZones.json");
var mkdirs = common.makeDirs;

function usage() {
	console.log("Usage: gentzinfo [-h] tzdata-dir [toDir]\n" +
			"Generate the time zone info.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"tzdata-dir\n" +
			"  path to the tzdata dir downloaded from the IANA site.\n" +
			"toDir\n" +
			"  directory to output the normalized json files. Default: current-dir.");
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

var tzDataDir = ".";
var toDir = ".";

process.argv.forEach(function (val, index, array) {
	if (val === "-h" || val === "--help") {
		usage();
	}
});

if (process.argv.length < 2) {
	console.error('Error: not enough arguments');
	usage();
}

tzDataDir = process.argv[2];
if (process.argv.length > 3) {
	toDir = process.argv[3];
}

console.log("gentzinfo - generate time zone info data.\n" +
		"Copyright (c) 2013, 2018 JEDLSoft\n");
console.log("To dir: " + toDir );

if (!fs.existsSync(tzDataDir)) {
	console.error("Could not access tzdata directory " + tzDataDir);
	usage();
}

if (!fs.existsSync(toDir)) {
	console.error("Could not access target directory " + toDir);
	usage();
}

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
	console.log("mapped old id " + row[2] + " to modern " + row[1] );
}

function isDirectory(dir) {
	var stats = fs.statSync(dir);
	return stats.isDirectory();
}

function scanDir(rootDir, dirName, zones) {
	var dirpath, filepath, files;
	
	dirpath = path.join(rootDir, dirName);
	files = fs.readdirSync(dirpath);

	console.log("Scanning dir " + dirpath );

	for (var i = 0; i < files.length; i++) {
		file = files[i];
		filepath = path.join(dirName, file);
		if (isDirectory(path.join(rootDir, filepath))) {
			scanDir(rootDir, filepath, zones);
		} else {
			var ext = filepath.search(".json");
		
			if (ext !== -1) {
				console.log("Found file " + filepath );
				zones[filepath.substring(0, ext).replace(/^zoneinfo\//, "")] = loadFile(path.join(rootDir, filepath)) || {};
			}
		}
	}
}

console.log("");

var timezones = {};
scanDir(toDir, "", timezones);

var countries = {};
var countryToZones = {};

for (var i = 0; i < zoneTab.length(); i++) {
	var row = zoneTab.get(i);
	console.log("map " + row[2] + " to " + row[0] );
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
		console.log("zone " + zone + " country " + zoneDef.c );
	} else if (typeof(countries[backwardsMap[zone]]) !== 'undefined') {
		zoneDef.c = countries[backwardsMap[zone]];
		console.log("zone (old) " + zone + " country " + zoneDef.c );
	} else {
		console.log("zone " + zone + " has no country.");
	}
}

// now deal with backwards maps so that they appear in the right country's list of zones
for (var oldzone in backwardsMap) {
	var newzone = backwardsMap[oldzone];
	if (countries[newzone]) {
		countryToZones[countries[newzone]].push(oldzone);
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
			console.log("zone " + name + " long name is " + timezones[name].n );
		} else {
			console.log("zone " + name + " long name is missing");
		}
	}
}

if (!fs.existsSync(path.join(toDir, "zoneinfo"))) {
	common.makeDirs(path.join(toDir, "zoneinfo"));
}

for (var zone in timezones) {
	var filepath = path.join(toDir, "zoneinfo", zone + ".json");
	console.log("Writing out zone info file " + filepath );
	fs.writeFile(filepath, JSON.stringify(timezones[zone], true, 4), function (err) {
		if (err) {
			throw err;
		}
	});
}

var filepath = path.join(toDir, "zoneinfo/zonetab.json");
console.log("Writing out zone tab file " + filepath );
for (var country in countryToZones) {
    countryToZones[country].sort();
}
fs.writeFile(filepath, JSON.stringify(countryToZones, true, 4), function (err) {
	if (err) {
		throw err;
	}
});

// generate timezone.jf
var rootTimezone = {timezone: "ETC/UTC"};
fs.writeFileSync(path.join(toDir, "timezone.jf"), JSON.stringify(rootTimezone, true, 4), "utf-8");

var defaultTimezone = {
    "AU": "Australia/Sydney",
    "BD": "Asia/Dhaka",
    "BR": "America/Sao_Paulo",
    "CA": "America/Toronto",
    "CL": "America/Santiago",
    "CN": "Asia/Shanghai",
    "CY": "Asia/Nicosia",
    "ES": "Europe/Madrid",
    "FM": "Pacific/Chuuk",
    "GB": "Europe/London",
    "GL": "America/Nuuk",
    "IE": "Europe/Dublin",
    "IN": "Asia/Kolkata",
    "KE": "Africa/Nairobi",
    "KI": "Pacific/Kiritimati",
    "MH": "Pacific/Majuro",
    "MM": "Asia/Yangon",
    "MN": "Asia/Ulaanbaatar",
    "MO": "Asia/Macau",
    "MX": "America/Mexico_City",
    "NO": "Europe/Oslo",
    "NZ": "Pacific/Auckland",
    "PF": "Pacific/Tahiti",
    "PG": "Pacific/Port_Moresby",
    "PT": "Europe/Lisbon",
    "RU": "Europe/Moscow",
    "US": "America/New_York"
}

for (var country in countryToZones) {
    var directory = path.join(toDir, "und", country);
    if (!fs.existsSync(directory)) {
        mkdirs(directory);
    };
    var data = {
        timezone: typeof defaultTimezone[country] !== "undefined" ? defaultTimezone[country]: countryToZones[country][0]
    }
    fs.writeFileSync(path.join(directory, "timezone.jf"), JSON.stringify(data, true, 4), "utf-8");
}

console.log("Done");