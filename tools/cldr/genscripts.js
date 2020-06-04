/*
 * genscripts.js - ilib tool to generate the json data about ISO 15924 scripts
 * 
 * Copyright © 2013 - 2017, 2020 JEDLSoft
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
var unifile = require('./unifile.js');
var common = require('./common.js');
var UnicodeFile = unifile.UnicodeFile;
var coelesce = common.coelesce;

function usage() {
	console.log("Usage: genscripts [-h] ISO-15924-file.txt ScriptMetadata.txt UCD-dir  [toDir]\n" +
			"Generate the normalization data.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"ISO-15924-file.txt\n" +
			"  the Unicode script code definition file downloaded from the Unicode site at\n" +
			"  https://unicode.org/iso15924/iso15924-text.html\n" +
			"scriptMetadata.txt\n" +
			"  path to the scriptMetadata.txt file downloaded from the Unicode site\n" +
			"  i.e) http://unicode.org/Public/cldr/36/ --> common/properties/scriptMetadata.txt\n" +
			"UCD-dir\n" +
			"  path to the Unicode Character Database files downloaded from the Unicode site\n" +
			"  i.e) https://unicode.org/Public/13.0.0/ucd/ \n" +
			"toDir\n" +
			"  directory to output the normalization json files. Default: current dir.");
	process.exit(1);
}

var iso15924FileName;
var scriptFileName;
var scriptMetaDataFileName;
var ucdDir;
var toDir = ".";

process.argv.forEach(function (val, index, array) {
	if (val === "-h" || val === "--help") {
		usage();
	}
});

if (process.argv.length < 4) {
	console.error('Error: not enough arguments');
	usage();
}

iso15924FileName = process.argv[2];
scriptMetaDataFileName = process.argv[3];
ucdDir = process.argv[4];

if (process.argv.length > 5) {
	toDir = process.argv[5];
}

console.log("genscripts - generate scripts data.\n" +
		"Copyright (c) 2012 - 2017, 2020 JEDLSoft");

// TODO: these should call fs.existsSync instead
fs.exists(iso15924FileName, function (exists) {
	if (!exists) {
		console.error("Could not access file " + iso15924FileName);
		usage();
	}
});

fs.exists(ucdDir, function (exists) {
	if (!exists) {
		console.error("Could not access UCD directory " + ucdDir);
		usage();
	}
});

fs.exists(scriptMetaDataFileName, function (exists) {
	if (!exists) {
		console.error("Could not access file " + scriptMetaDataFileName);
		usage();
	}
});

fs.exists(toDir, function (exists) {
	if (!exists) {
		console.error("Could not access target directory " + toDir);
		usage();
	}
});

scriptFileName = ucdDir + "/Scripts.txt";

fs.exists(scriptFileName, function (exists) {
	if (!exists) {
		console.error("Could not access file " + scriptFileName);
		usage();
	}
});

var scripts = {};
var fullToShortMap = {};

var iso15924 = new UnicodeFile({path: iso15924FileName});
var len = iso15924.length();
var row;
var script;
var longCode;
var code;

for (var i = 0; i < len; i++ ) {
	row = iso15924.get(i);
	code = row[0];

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

var scriptMetaData = new UnicodeFile({path: scriptMetaDataFileName});
var len = scriptMetaData.length();

for (var i = 0; i < len; i++ ) {
	row = scriptMetaData.get(i);
	code = row[0];
	console.log(code + " isrtl " + row[6]);

	// is this script written right-to-left?
	scripts[code].rtl = (row[6] === " YES" ? true : false);
	
	// does this script require an IME to enter text?
	scripts[code].ime = (row[9] === " YES" ? true : false);
	
	// does this script have the concept of upper- and lower-case?
	scripts[code].casing = (row[10] === " YES" ? true : false);
}

// the Unicode data has only the binary decompositions. That is, the first of 
// two chars of a decomposition may be itself decomposable. So, apply the 
// decompositions recursively here to pre-calculate the full decomposition 
// before writing out the files.

fs.writeFile(toDir + "/scripts.json", JSON.stringify(scripts, true, 4), function (err) {
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

fs.writeFile(toDir + "/scriptToRange.json", JSON.stringify(scriptToRange, true, 4), function (err) {
	if (err) {
		throw err;
	}
});

fs.writeFile(toDir + "/rangeToScript.json", JSON.stringify(rangeToScript, true, 4), function (err) {
	if (err) {
		throw err;
	}
});
