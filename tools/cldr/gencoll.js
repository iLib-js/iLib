/*
 * gencoll.js - ilib tool to generate the json UCA data from the Unicode 
 * data files
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
var uniData = require('./uniData.js');
var unifile = require('./unifile.js');
var common = require('./common.js');
var UnicodeData = uniData.UnicodeData;
var CharacterInfo = uniData.CharacterInfo;
var UnicodeFile = unifile.UnicodeFile;
var charIterator = common.charIterator;
var isMember = common.isMember;
var coelesce = common.coelesce;
var hexStringUTF16String = common.hexStringUTF16String;

function usage() {
	util.print("Usage: gencoll [-h] ISO-15924-file.txt UCD-dir CLDR-dir [toDir]\n" +
			"Generate the collation data.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"ISO-15924-file.txt\n" +
			"  the Unicode script code definition file downloaded from the Unicode site\n" +
			"UCD-dir\n" +
			"  path to the Unicode Character Database files downloaded from the Unicode site\n" +
			"CLDR-dir\n" +
			"  path to the json CLDR files downloaded from the Unicode site\n" +
			"toDir\n" +
			"  directory to output the normalization json files. Default: current dir.\n");
	process.exit(1);
}

var iso15924FileName;
var scriptFileName;
var ducetFileName;

var ucdDir;
var cldrDir;
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

iso15924FileName = process.argv[2];
ucdDir = process.argv[3];
cldrDir = process.argv[4];
if (process.argv.length > 5) {
	toDir = process.argv[5];
}

util.print("gencoll - generate collation data.\n" +
	"Copyright (c) 2013 JEDLSoft\n");

fs.exists(iso15924FileName, function (exists) {
	if (!exists) {
		util.error("Could not access file " + iso15924FileName);
		usage();
	}
});
fs.exists(ucdDir, function (exists) {
	if (!exists) {
		util.error("Could not access UCD directory " + ucdDir);
		usage();
	}
});
fs.exists(cldrDir, function (exists) {
	if (!exists) {
		util.error("Could not access CLDR directory " + cldrDir);
		usage();
	}
});

fs.exists(toDir, function (exists) {
	if (!exists) {
		util.error("Could not access target directory " + toDir);
		usage();
	}
});

scriptFileName = ucdDir + "/Scripts.txt";

fs.exists(scriptFileName, function (exists) {
	if (!exists) {
		util.error("Could not access file " + scriptFileName);
		usage();
	}
});

ducetFileName = cldrDir + "/common/uca/allkeys_DUCET.txt";

fs.exists(ducetFileName, function (exists) {
	if (!exists) {
		util.error("Could not access file " + ducetFileName);
		usage();
	}
});

var scripts = {};
var fullToShortMap = {};

var iso15924 = new UnicodeFile({path: iso15924FileName});
var len = iso15924.length();
var row;
var longCode;
var code;

for (var i = 0; i < len; i++ ) {
	row = iso15924.get(i);
	code = row[0];

	longCode = (row[4].length == 0) ? row[2] : row[4];
	longCode = longCode.replace(/ +/g, '_');
	
	if (longCode.length > 0) {
		fullToShortMap[longCode.toLowerCase()] = code;
		// util.print("Mapping " + longCode.toLowerCase() + " to " + code + "\n");
	}
}

var scriptsFile = new UnicodeFile({path: scriptFileName});
var row, scriptName, rangeStart, rangeEnd, range;
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
		ranges.push([rangeStart, rangeEnd, scriptName]);
		// util.print("pushing range [" + rangeStart + "," + rangeEnd + "," + scriptName + "]\n");
	} else {
		ranges.push([rangeStart, rangeStart, scriptName]);
		// util.print("pushing range [" + rangeStart + "," + rangeStart + "," + scriptName + "]\n");
	}
}

function compareByStart(left, right) {
	return left[0] - right[0];
}

ranges.sort(compareByStart);
// rangeToScript = coelesce(ranges, 0);
rangeToScript = ranges;

// util.print("Sorted and coelesced ranges are:\n");
// util.print(JSON.stringify(rangeToScript));

function parseWeight(weight) {
	var ch = weight.trim();
	if (ch.length > 0) {
		if (ch.charAt(0) === '.' || ch.charAt(0) === '*') {
			// alternate char... what to do about these?
			ch = ch.substring(1);
		}
		var weights = ch.split(/\./g);
		var weightVector = [];
		for (var i = 0; i < weights.length; i++) {
			weightVector.push((weights[i] && weights[i].length > 0) ? parseInt(weights[i], 16) : 0);
		}
		return weightVector;
	}
	return undefined;
}

function parseWeightLine(weightLine) {
	//util.print("parsing weight line: " + weightLine + "\n");
	weightLine = weightLine.replace(/\]/g, '');
	var chars = weightLine.split(/\[/g);
	var weights = [];
	//util.print("chars is: " + JSON.stringify(chars) + "\n");
	for (var j = 0; j < chars.length; j++) {
		var weightVector = parseWeight(chars[j]);
		if (weightVector) {
			weights.push(weightVector);
		}
	}
	//util.print("weights: " + JSON.stringify(weights) + "\n");
	
	return weights;
}

util.print("Reading DUCET weights\n");

var ducet = {};

var ch;
var ducetFile = new UnicodeFile({path: ducetFileName});
len = ducetFile.length();

for (var i = 0; i < len; i++ ) {
	row = ducetFile.get(i);
	ch = hexStringUTF16String(row[0]);

	ducet[ch] = {
		weights: parseWeightLine(row[1])
	};
}

var elementsByScript = {};
var range;

for (var name in ducet) {
	if (name && name.length > 0) {
		// only get the script of the first character -- don't have to worry about expansions or contractions, 
		// because the first char gives the script anyways
		ch = common.UTF16ToCodePoint(name);
		
		// util.print("Checking char " + ch + ": ");
		range = common.findMember(rangeToScript, ch);
		if (typeof(range) !== 'undefined' && range !== -1) {
			scriptName = rangeToScript[range][2];
			// util.print(scriptName);
			if (typeof(elementsByScript[scriptName]) === 'undefined') {
				elementsByScript[scriptName] = [];
			}
			elementsByScript[scriptName].push(name);
		}
		//util.print("\n");
		ducet[name].script = scriptName;
	}
}

/*
util.print("Ducet table for Latin is: " + JSON.stringify(elementsByScript["Latn"]) + "\n");

util.print("Ducet table is: \n");

var i = 0;
for (ch in ducet) {
	if (ch && ch.length > 0) {
		var row = ducet[ch];
		util.print(i + ": " + ch + " " + JSON.stringify(row) + "\n");
		i++;
	}
}
*/

function completeWeight(vector) {
	var ret = [0, 0, 0, 0];
	if (vector.length < ret.length) {
		vector = vector.concat(ret.slice(ret.length));
	}
	return vector;
}
function compareWeights(left, right) {
	var i = 0; 
	while (i < left.length && i < right.length) {
		var leftWeight = completeWeight(left[i]);
		var rightWeight = completeWeight(right[i]);
		
		if (leftWeight[0] < rightWeight[0]) {
			return "<";
		} else if (leftWeight[1] < rightWeight[1]) {
			return "<<";
		} else if (leftWeight[2] < rightWeight[2]) {
			return "<<<";
		} else if (leftWeight[3] < rightWeight[3]) {
			return "<<<<";
		}
		i++;
	}
	
	return "=";
}

// util.print("Ducet table for Hani is: " + JSON.stringify(elementsByScript["Hani"]) + "\n");
var hani = elementsByScript["Hani"];
var previousRow;
for (var i = 0; i < hani.length; i++) {
	var ch = hani[i];
	if (ch && ch.length > 0) {
		var row = ducet[ch];
		if (previousRow) {
			util.print(compareWeights(previousRow.weights, row.weights));
		}
		util.print(ch + "\n");
		previousRow = row;
	}
}
