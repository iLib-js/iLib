/*
 * genpapersizes.js - ilib tool to generate the json data about paper sizes
 *
 * Copyright © 2013 - 2015, JEDLSoft
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
var mkdirs = common.makeDirs;

function usage() {
	util.print("Usage: genpapersize [-h] CLDR_dir [toDir]\n" +
		"Generate the papersizes.jf files for each locale.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"CLDR_dir\n" +
		"  directory with CLDR represented in json format downloaded from the Unicode site\n" +
		"toDir\n" +
		"  directory to output the papersize.jf json files. Default: current dir.\n");
	process.exit(1);
}

var cldrDirName, measurementDataFileName;
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

cldrDirName = process.argv[2];
if (process.argv.length > 3) {
	toDir = process.argv[3];
}

util.print("genpapersizes - generate the localeinfo papersize.jf files.\n" +
	"Copyright (c) 2013-2015 JEDLSoft\n");

util.print("CLDR dir: " + cldrDirName + "\n");
util.print("output dir: " + toDir + "\n");

if (!fs.existsSync(cldrDirName)) {
	util.error("Could not access CLDR dir " + cldrDirName);
	usage();
}

if (!fs.existsSync(toDir)) {
	util.error("Could not access target directory " + toDir);
	usage();
}

try {
	filename = cldrDirName + "/supplemental/measurementData.json";
	json = fs.readFileSync(filename, "utf-8");
	suppData = JSON.parse(json);

	measurementData = suppData.supplemental.measurementData;
} catch (e) {
	util.print("Error: Could not load file " + filename + "\n");
	process.exit(2);
}

var paperSizeData = measurementData.paperSize;

var paperSizes = {};
var papersize = {};

for (var territories in paperSizeData) {
	var territories_US_Letter,
		directory, filename;
	if (paperSizeData[territories] === "US-Letter") {
		filename = toDir + 'und/' + territories;
		//util.print(filename + "\n");
		paperSizes["regular"] = "8x11";

		if (!fs.existsSync(filename)) {
			mkdirs(filename);
			//util.print(territories + "\n");
		}
		papersize["paperSizes"] = paperSizes;
		papersize.generated = true;
		
		fs.writeFile(filename + "/papersizes.jf", JSON.stringify(papersize, true, 4), function (err) {
			
			if (err) {
				console.log(err);
			throw err;
			}
		});
		util.print(filename + "/papersizes.jf\n");
	}
	else {
		// deal with "001": "A4". - code 001 indicates World.

		filename = toDir;
		if (!fs.existsSync(filename)) {
			fs.mkdirSync(filename);
		}
		paperSizes["regular"] = "A4";
		papersize["paperSizes"] = paperSizes;
		papersize.generated = true;
		fs.writeFile(filename + "/papersizes.jf", JSON.stringify(papersize, true, 4), function (err) {
			if (err) {
				console.log(err);
			throw err;
			}
		});
		util.print(filename + "papersizes.jf\n");
	}
}