/*
 * genDayofWeek.js - ilib tool to generate the json data about day of the week
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
 * See the License for the specific firstdayofweek governing permissions and
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
var mkdirs = common.makeDirs;

function usage() {
	util.print("Usage: genDayofWeek [-h] CLDR_dir [toDir]\n" +
		"Generate the firstdayofweek.jf files for each country.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"CLDR_dir\n" +
		"  directory with CLDR represented in json format downloaded from the Unicode site\n" +
		"toDir\n" +
		"  directory to output the firstdayofweek.jf json files. Default: current dir.\n");
	process.exit(1);
}
var cldrDir, languageDataFileName;
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
if (process.argv.length > 3) {
	toDir = process.argv[3];
}
util.print("genDayofWeek - generate the localeinfo firstdayofweek.jf files.\n" +
	"Copyright (c) 2013 JEDLSoft\n");
util.print("CLDR dir: " + cldrDir + "\n");
util.print("output dir: " + toDir + "\n");
languageDataFileName = cldrDir + "/supplemental/weekData.json";
fs.exists(languageDataFileName, function (exists) {
	if (!exists) {
		util.error("Could not access file " + languageDataFileName);
		usage();
	}
});
fs.exists(toDir, function (exists) {
	if (!exists) {
		util.error("Could not access target directory " + toDir);
		usage();
	}
});

var languageDataString = fs.readFileSync(languageDataFileName, "utf-8");
var dayProperties = {"sun":0, "mon":1, "tue":2, "wed":3, "thu":4, "fri":5, "sat":6};
var supplementalData = JSON.parse(languageDataString);
var firstDayOfWeekData = supplementalData.supplemental.weekData.firstDay;
var fstOfWeek = {};
for (var firstdayofweek in firstDayOfWeekData) {
	var filename;	
	if (firstdayofweek && firstDayOfWeekData[firstdayofweek]) {
		if (firstdayofweek.length < 9) {
			if (firstdayofweek == 001) {
				filename = toDir;
			} else {
				filename = toDir + '/' + 'und/' + firstdayofweek;
			}
			if (!fs.existsSync(filename)) {
				mkdirs(filename);
			}
			fstOfWeek.firstDayOfWeek = dayProperties[firstDayOfWeekData[firstdayofweek]];
			fstOfWeek.generated = true;
			fs.writeFile(filename + "/firstdayofweek.jf", JSON.stringify(fstOfWeek, true, 4), function (err) {
				if (err) {
				console.log(err);
				throw err;
				}
			});
		}
	}
}

var weekendStart = {};
var weekendStartData = supplementalData.supplemental.weekData.weekendStart;
for (var wkendStart in weekendStartData) {
	var filename;	
	if (wkendStart == 001) {
		filename = toDir;
	} else {
		filename = toDir + '/' + 'und/' + wkendStart;
	}
	if (!fs.existsSync(filename)) {
		mkdirs(filename);
	}

	weekendStart.weekendStart = dayProperties[weekendStartData[wkendStart]];
	weekendStart.generated = true;
	fs.writeFile(filename + "/weekendstart.jf", JSON.stringify(weekendStart, true, 4), function (err) {
		if (err) {
		console.log(err);
		throw err;
		}
	});
}

var weekendEnd = {};
weekendEnd.generated = true;
var weekendEndData = supplementalData.supplemental.weekData.weekendEnd;
for (var wkendEnd in weekendEndData) {
	var filename;	
	if (wkendEnd == 001) {
		filename = toDir;
	} else {
		filename = toDir + '/' + 'und/' + wkendEnd;
	}
	if (!fs.existsSync(filename)) {
		mkdirs(filename);
	}	
	weekendEnd.weekendEnd = dayProperties[weekendEndData[wkendEnd]];
	weekendEnd.generated = true;
	fs.writeFile(filename + "/weekendend.jf", JSON.stringify(weekendEnd, true, 4), function (err) {
		if (err) {
		console.log(err);
		throw err;
		}
	});
}



