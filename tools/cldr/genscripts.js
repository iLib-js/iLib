/*
 * genscripts.js - ilib tool to generate the json data about ISO 15924 scripts
 * 
 * Copyright © 2012, JEDLSoft
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
	util.print("Usage: genscripts [-h] ISO-15924-file.txt Scripts.txt [toDir]\n" +
			"Generate the normalization data.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"ISO-15924-file.txt\n" +
			"  the Unicode script code definition file downloaded from the Unicode site\n" +
			"Scripts.txt\n" +
			"  the Unicode scripts definition file downloaded from the Unicode site\n" +
			"toDir\n" +
			"  directory to output the normalization json files. Default: current dir.\n");
	process.exit(1);
}

var unicodeFileName;
var scriptFileName;
var toDir = ".";

process.argv.forEach(function (val, index, array) {
	if (val === "-h" || val === "--help") {
		usage();
	}
});

if (process.argv.length < 4) {
	util.error('Error: not enough arguments');
	usage();
}

unicodeFileName = process.argv[2];
scriptFileName = process.argv[3];
if (process.argv.length > 4) {
	toDir = process.argv[4];
}

util.print("genscripts - generate scripts data.\n" +
		"Copyright (c) 2012 JEDLSoft\n");

fs.exists(unicodeFileName, function (exists) {
	if (!exists) {
		util.error("Could not access file " + unicodeFileName);
		usage();
	}
});
fs.exists(scriptFileName, function (exists) {
	if (!exists) {
		util.error("Could not access file " + scriptFileName);
		usage();
	}
});

fs.exists(toDir, function (exists) {
	if (!exists) {
		util.error("Could not access target directory " + toDir);
		usage();
	}
});

var scripts = {};
var fullToShortMap = {};

var uf = new UnicodeFile({path: unicodeFileName});
var len = uf.length();
var row;
var script;
var longCode;

for (var i = 0; i < len; i++ ) {
	row = uf.get(i);

	longCode = (row[4].length == 0) ? row[2] : row[4];
	longCode = longCode.replace(/ +/g, '_');
	script = {
		nb: parseInt(row[1], 10),
		nm: row[2],
		lid: longCode
	};
	
	scripts[row[0]] = script;
	if (longCode.length > 0) {
		fullToShortMap[longCode.toLowerCase()] = row[0];
	}
}

// the Unicode data has only the binary decompositions. That is, the first of 
// two chars of a decomposition may be itself decomposable. So, apply the 
// decompositions recursively here to pre-calculate the full decomposition 
// before writing out the files.

fs.writeFile(toDir + "/scripts.json", JSON.stringify(scripts), function (err) {
	if (err) {
		throw err;
	}
});

var scriptsFile = new UnicodeFile({path: scriptFileName});
var row, scriptName, rangeStart, rangeEnd, range;
var scriptToRange = {};
var ranges = [];
var rangeToScript = [];

for (var i = 0; i < scriptsFile.length(); i++) {
	row = scriptsFile.get(i);
	scriptName = row[1].trim();
	scriptName = fullToShortMap[scriptName.toLowerCase()] || scriptName;
	rangeStart = parseInt(row[0].match(/^[A-F0-9]+/)[0],16);
	rangeEnd = row[0].match(/\.\.[A-F0-9]+/);
	
	if (rangeEnd && rangeEnd.length > 0) {
		rangeEnd = parseInt(rangeEnd[0].substring(2), 16);
		range = [rangeStart, rangeEnd];
		ranges.push([scriptName, rangeStart, rangeEnd]);
	} else {
		range = [rangeStart];
		ranges.push([scriptName, rangeStart]);
	}

	if (!scriptToRange[scriptName]) {
		scriptToRange[scriptName] = [range];
	} else {
		scriptToRange[scriptName].push(range);
	}
}

for (script in scriptToRange) {
	if (script && scriptToRange[script]) {
		scriptToRange[script] = coelesce(scriptToRange[script], 0);
	}
}

function compareByStart(left, right) {
	return left[1] - right[1];
}

ranges.sort(compareByStart);
rangeToScript = coelesce(ranges, 1);

fs.writeFile(toDir + "/scriptToRange.json", JSON.stringify(scriptToRange), function (err) {
	if (err) {
		throw err;
	}
});

fs.writeFile(toDir + "/rangeToScript.json", JSON.stringify(rangeToScript), function (err) {
	if (err) {
		throw err;
	}
});
