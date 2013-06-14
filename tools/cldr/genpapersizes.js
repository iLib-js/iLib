/*
 * genpapersizes.js - ilib tool to generate the json data about paper sizes
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
	util.print("Usage: genpapersize [-h] CLDR_dir [toDir]\n" +
			"Generate the papaersize.jf files for each day_of_week.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"CLDR_dir\n" +
			"  directory with CLDR represented in json format downloaded from the Unicode site\n" +
			"toDir\n" +
			"  directory to output the papersize.jf json files. Default: current dir.\n");
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

util.print("genpapaersizes - generate the localeinfo papaersize.jf files.\n" +
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
var paperSizeData = supplementalData.measurementData.paperSize;
util.print("paperSize data is "+ JSON.stringify(paperSizeData));
var paperSizes={};

var territories_US_Letter=paperSizeData["US-Letter"]["@territories"].split(" ");

for (var territories in territories_US_Letter) {
	var filename;
	filename = toDir + '/'+'und/' + territories_US_Letter[territories];
	paperSizes["regular"]="US-Letter";
	if (!fs.existsSync(filename)) {
			fs.mkdirSync(filename);
		//}
	fs.writeFile(filename + "/papersize.jf", '\t"papaerSizes": ' + JSON.stringify(paperSizes)+ ',\n', function (err) {
						if (err) {
						console.log(err);
						throw err;
							}
					});
			
				}
			}
	
	var filename = toDir + '/' ;
	if (!fs.existsSync(filename)) {
	fs.mkdirSync(filename);
	paperSizes["regular"]="A4";
	fs.writeFile(filename + "/papersize.jf", '\t"papaerSizes": ' + JSON.stringify(paperSizes)+ ',\n', function (err) {
						if (err) {
						console.log(err);
						throw err;
							}
					});
			}
