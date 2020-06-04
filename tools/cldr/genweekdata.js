/*
 * genDayofWeek.js - ilib tool to generate the json data about day of the week
 *
 * Copyright © 2013-2018, 2020 JEDLSoft
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
var supplementalData = require("cldr-data/supplemental/weekData.json");

var unifile = require('./unifile.js');
var common = require('./common.js');
var UnicodeFile = unifile.UnicodeFile;
var coelesce = common.coelesce;
var mkdirs = common.makeDirs;
var path = require("path");

function usage() {
	console.log("Usage: genDayofWeek [-h] [toDir]\n" +
		"Generate the firstdayofweek.jf files for each country.\n" +
		"-h or --help\n" +
		"  this help\n" +
		"toDir\n" +
		"  directory to output the firstdayofweek.jf json files. Default: current dir.\n");
	process.exit(1);
}
var languageDataFileName;
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
if (process.argv.length > 2) {
	toDir = process.argv[2];
}
console.log("genweekdata - generate the localeinfo firstdayofweek.jf files.\n" +
	"Copyright (c) 2013-2018 JEDLSoft");
console.log("output dir: " + toDir);

if (!fs.existsSync(toDir)) {
	console.error("Could not access target directory " + toDir);
	usage();
}

var dayProperties = {"sun":0, "mon":1, "tue":2, "wed":3, "thu":4, "fri":5, "sat":6};
var firstDayOfWeekData = supplementalData.supplemental.weekData.firstDay;
var fstOfWeek = {};
//console.log("data is "+ JSON.stringify(firstDayOfWeekData));
for (var locale in firstDayOfWeekData) {
	var filename;
	//console.log("day of the week is :"+locale);
	//console.log("firstDayOfWeekData  is "+firstDayOfWeekData[locale]);
	if (locale && firstDayOfWeekData[locale]) {
		if (locale.length < 9) {
			if (locale == "001") {
				filename = toDir;
			} else {
				filename = path.join(toDir, 'und', locale);
			}
			if (!fs.existsSync(filename)) {
				mkdirs(filename);
			}
			fstOfWeek.firstDayOfWeek = dayProperties[firstDayOfWeekData[locale]];
			fstOfWeek.generated = true;
			var fn = path.join(filename, "firstdayofweek.jf");
			fs.writeFileSync(fn, JSON.stringify(fstOfWeek, true, 4), "utf-8");
		}
	}
}

var weekendStart = {};
var weekendStartData = supplementalData.supplemental.weekData.weekendStart;
for (var locale in weekendStartData) {
	var filename;	
	if (locale == 001) {
		filename = toDir;
	} else {
		filename = path.join(toDir, 'und', locale);
	}
	if (!fs.existsSync(filename)) {
		mkdirs(filename);
	}

	weekendStart.weekendStart = dayProperties[weekendStartData[locale]];
	weekendStart.generated = true;
	var fn = path.join(filename, "weekendstart.jf");
	fs.writeFileSync(fn, JSON.stringify(weekendStart, true, 4), "utf-8");
}

var weekendEnd = {};
weekendEnd.generated = true;
var weekendEndData = supplementalData.supplemental.weekData.weekendEnd;
for (var locale in weekendEndData) {
	var filename;	
	if (locale == 001) {
		filename = toDir;
	} else {
		filename = path.join(toDir, 'und', locale);
	}
	if (!fs.existsSync(filename)) {
		mkdirs(filename);
	}	
	weekendEnd.weekendEnd = dayProperties[weekendEndData[locale]];
	weekendEnd.generated = true;
	var fn = path.join(filename, "weekendend.jf");
	fs.writeFileSync(fn, JSON.stringify(weekendEnd, true, 4), "utf-8");
}
