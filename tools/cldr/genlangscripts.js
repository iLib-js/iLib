/*
 * genscripts.js - ilib tool to generate the json data about ISO 15924 scripts
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
	util.print("Usage: genlangscripts [-h] CLDR_dir [toDir]\n" +
		"Generate the script.jf files for each language.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"CLDR_dir\n" +
		"  directory with CLDR represented in json format downloaded from the Unicode site\n" +
		"toDir\n" +
		"  directory to output the script.jf json files. Default: current dir.\n");
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

util.print("genlangscripts - generate the localeinfo script.jf files.\n" +
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

var scripts = {};
var scripts_name = {};
var languageData = supplementalData.languageData;

for (var locale in languageData) {
	if (locale && languageData[locale]) {
		if (typeof (languageData[locale]["@scripts"]) === 'string') {
			var language = (locale.length <= 3) ? locale : locale.split(/-/)[0];
			if (typeof (scripts[language]) === 'undefined') {
				scripts[language] = [];
			}
			var newLangs = languageData[locale]["@scripts"].split(/ /g);
			if (locale.length <= 3) {
				console.log("language " + language + " prepending " + JSON.stringify(newLangs));
				scripts[language] = newLangs.concat(scripts[language]);
			} else {
				console.log("language " + language + " appending " + JSON.stringify(newLangs));
				scripts[language] = scripts[language].concat(newLangs);
			}
		}
	}
}

for (var language in scripts) {
	if (language && scripts[language]) {
		var filename = toDir + '/' + language;
		if (!fs.existsSync(filename)) {
			fs.mkdirSync(filename);
		}
		console.log(language + ':\t"scripts": ' + JSON.stringify(scripts[language]) + ',');
		scripts_name["scripts"] = scripts[language];
		fs.writeFile(filename + "/scripts.jf", JSON.stringify(scripts_name), function (err) {
			if (err) {
				console.log(err);
				throw err;
			}
		});
	}
}
