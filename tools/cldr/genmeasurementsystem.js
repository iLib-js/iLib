/*
 * genmeasurementsystem.js - ilib tool to generate the json data about day of the week
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
 * See the License for the specific day_of_week governing permissions and
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
	util.print("Usage: genmeasurementsystem [-h] CLDR_dir [toDir]\n" +
		"Generate the measuresys.jf files for measurement system.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"CLDR_dir\n" +
		"  directory with CLDR represented in json format downloaded from the Unicode site\n" +
		"toDir\n" +
		"  directory to output the measuresys.jf json files. Default: current dir.\n");
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
util.print("genmeasurementsystem - generate the localeinfo measuresys.jf files.\n" +
	"Copyright (c) 2013 JEDLSoft\n");
util.print("CLDR dir: " + cldrDir + "\n");
util.print("output dir: " + toDir + "\n");
languageDataFileName = cldrDir + "/supplemental/supplementalData.json";
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
var supplementalData = JSON.parse(languageDataString);
var measurementData = supplementalData.measurementData;
//util.print("measurementData data is "+ JSON.stringify(measurementData));
for (var measure_system in measurementData) {
	var filename;
	//util.print("Measurement system is :"+measure_system+"\n");
	//util.print("measurementData  is "+measurementData[measure_system]);
	if (measure_system && measurementData[measure_system]) {
		if (measure_system.length < 4) {
			if (measure_system == 001) {
				filename = toDir + '/';
			} else {
				filename = toDir + '/' + 'und/' + measure_system;
			}
			if (!fs.existsSync(filename)) {
				fs.mkdirSync(filename);
				//}
				//console.log(measure_system + ':\t"Units": ' + JSON.stringify(measurementData[measure_system]));
				var measureUnits = ["metric", "uscustomary"];
				for (var i = 0; i < 2; i++) {
					if (measurementData[measure_system] == "US") {
						console.log(measure_system + ':\t"Units are ": ' + measureUnits[1]);
						fs.writeFile(filename + "/measuresys.jf", '\t"Units": ' + measureUnits[1] + ',\n', function (err) {
							if (err) {
								console.log(err);
								throw err;
							}
						});
					} else {
						fs.writeFile(filename + "/measuresys.jf", '\t"Units": ' + measureUnits[0] + ',\n', function (err) {
							if (err) {
								console.log(err);
								throw err;
							}
						});
					}
				}
			}
		}
	}
}