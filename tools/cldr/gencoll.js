/*
 * gencoll.js - ilib tool to generate the json UCA data from the Unicode 
 * data files
 * 
 * Copyright © 2014, JEDLSoft
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
var path = require('path');
var uniData = require('./uniData.js');
var unifile = require('./unifile.js');
var common = require('./common.js');

// this is an odd cldr tool in that it requires ilib in order to operate.
// It was hard to replicate the functionality of the unicode normalization
// without this. Make sure that the top level dir of this project is built
// before trying to run this tool.
// var ilib = require('../../js/src');

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
	"Copyright (c) 2014 JEDLSoft\n");

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

/**
 * Create a new weight vector instance.
 * 
 * @param {Array.<number>|string|number?} primary
 * @param {string|number?} secondary
 * @param {string|number?} tertiary
 * @param {string|number?} quaternary
 */
var WeightVector = function(primary, secondary, tertiary, quaternary) {
	this.weights = [0, 0, 0, 0];
	
	if (typeof(primary) === 'object') {
		this.weights = primary.concat(this.weights.slice(primary.length));
	} else if (typeof(primary) === 'string') {
		var str = primary.replace(/\]/g, '');
		str = str.replace(/\[/g, '').trim();
		
		if (str.charAt(0) === '.' || str.charAt(0) === '*') {
			// alternate char... what to do about these?
			str = str.substring(1);
			this.alt = true; // what does this mean?
		}
		
		var weights = str.split(/\./g);
		for (var i = 0; i < weights.length; i++) {
			this.weights[i] = (weights[i] && weights[i].length > 0) ? parseInt(weights[i], 16) : 0;
		}
	} else if (typeof(primary) !== 'undefined') {
		this.weights[0] = primary;
		this.weights[1] = secondary;
		this.weights[2] = tertiary;
		this.weights[3] = quaternary;
	}
};

WeightVector.prototype = {
	set: function(position, amount) {
		this.weights[position] = amount;
	},
	
	add: function(position, amount) {
		this.weights[position] += amount;
		for (var i = position + 1; i < 4; i++) {
			this.weights[i] = 0;
		}
	},
	
	increment: function(position) {
		this.add(position, 1);
	},
	
	addPrimary: function(amount) {
		this.add(0, amount);
	},

	addSecondary: function(amount) {
		this.add(1, amount);
	},

	addTertiary: function(amount) {
		this.add(2, amount);
	},

	addQuaternary: function(amount) {
		this.add(3, amount);
	},
	
	compare: function(otherVector) {
		for (var i = 0; i < 4; i++) {
			if (this.weights[i] !== otherVector.weights[i]) {
				return i;
			}
		}
		return 4;
	},
	
	clone: function() {
		return new WeightVector(this.weights);
	},
	
	toString: function() {
		return JSON.stringify(this.weights);
	}
};

function parseWeightLine(weightLine) {
	//util.print("parsing weight line: " + weightLine + "\n");
	var chars = weightLine.trim().split(/\]\[/g);
	var weights = [];
	//util.print("chars is: " + JSON.stringify(chars) + "\n");
	for (var j = 0; j < chars.length; j++) {
		var str = chars[j].trim();
		if (str.length > 0) {
			weights.push(new WeightVector(str));
		}
	}
	//util.print("weights: " + JSON.stringify(weights) + "\n");
	
	return weights;
}

util.print("Reading DUCET code points and weights\n");

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

util.print("Attaching script codes to DUCET code points\n");

var elementsByScript = {};
var range;

var scriptMap = {
	"Hira": ["Jpan","Hrkt"],
	"Kana": ["Jpan","Hrkt"],
	"Hani": ["Jpan","Kore"],
	"Hang": ["Kore"]
};
for (var name in ducet) {
	if (name && name.length > 0) {
		// for multi-character codepoints, only get the script of the first character -- don't have to worry 
		// about expansions or contractions, because the first char gives the script anyways
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
			if (scriptMap[scriptName]) {
				var aliases = scriptMap[scriptName];
				for (var j = 0; j < aliases.length; j++) {
					if (typeof(elementsByScript[aliases[j]]) === 'undefined') {
						elementsByScript[aliases[j]] = [];
					}
					elementsByScript[aliases[j]].push(name);
				}
			}
		}
		//util.print("\n");
		ducet[name].script = scriptName;
	}
}


var scriptName = "Hrkt";
var elements = elementsByScript[scriptName];

function compareByWeights(left, right) {
	var l = ducet[left];
	var r = ducet[right];
	return l.weights[0].compare(r.weights[0]);
}

// elements.sort(compareByWeights);

util.print("Ducet table for " + scriptName + " is: " + JSON.stringify(elements) + "\n");

var i = 0;
var lastChar;
var operators = [
    "<",
    "<<",
    "<<<",
    "<<<<",
    "="
];

for (i = 0; i < elements.length; i++) {
	ch = elements[i];
	if (ch && ch.length > 0) {
		var row = ducet[ch];
		if (!row) {
			util.print("Not sure how this happened, but there is a char not in the ducet: " + ch + "\n");
		} else {
			if (lastChar) {
				util.print("comparing " + JSON.stringify(lastChar) + " and " + JSON.stringify(row.weights[0]) + "\n");
				var diff = lastChar.compare(row.weights[0]);
				util.print(operators[diff] + " " + ch + "\n");
			} else {
				util.print(ch + "\n");
			}
			lastChar = row.weights[0];
		}
	}
}

process.exit(0);

util.print("Ducet table is: \n");

var i = 0;
for (ch in ducet) {
	if (ch && ch.length > 0) {
		var row = ducet[ch];
		util.print(i + ": " + ch + " " + JSON.stringify(row) + "\n");
		i++;
	}
}

function compareWeightArray(left, right) {
	var i = 0; 
	while (i < left.length && i < right.length) {
		var diff = left[i].compare(right[i]);
		if (diff !== -1) {
			return diff;
		}
		i++;
	}
	
	return 0;
}

/* util.print("Ducet table for Hani is: " + JSON.stringify(elementsByScript["Hani"]) + "\n");
var hani = elementsByScript["Hani"];
var previousRow;
for (var i = 0; i < hani.length; i++) {
	var ch = hani[i];
	if (ch && ch.length > 0) {
		var row = ducet[ch];
		if (previousRow) {
			var diff = compareWeightArray(previousRow.weights, row.weights);
		}
		previousRow = row;
	}
}
*/

// first get ducet data

//util.print("Ducet table for Hani is: " + JSON.stringify(elementsByScript["Hani"]) + "\n");
var collPinyin = [];
var hani = elementsByScript["Hani"];
var previousRow;
var thisElement = new WeightVector(), lastElement;

for (var i = 0; i < hani.length; i++) {
	var ch = hani[i];
	if (ch && ch.length > 0) {
		var row = ducet[ch];
		if (previousRow) {
			var position = compareWeightArray(previousRow.weights, row.weights);
			thisElement = lastElement.clone();
			if (position !== -1) {
				// leave 2 bytes worth of space between each ducet char for tailoring
				// so that all of UCS-2 could be tailored between any two chars
				thisElement.add(position, 65536); 
			}
			collPinyin.push({
				char: ch,
				weights: thisElement,
				follows: []
			});
			
			// util.print("DUCET char " + ch + " has " + thisElement + "\n");
		}
		lastElement = thisElement;
		previousRow = row;
	}
}


// now parse the data
function isWhite(ch) {
	switch (ch) {
		case ' ':
		case '\t':
		case '\r':
		case '\n':
			return true;
		default:
			return false;
	}
}

var collationsDir = "../../js/data/collation/";
var collPinyinName = collationsDir + "zh/coll.pinyin.txt";

fs.exists(collPinyinName, function (exists) {
	if (!exists) {
		util.error("Could not access file " + collPinyinName);
		usage();
	}
});

var data = fs.readFileSync(collPinyinName, "utf-8");

var i = 0, ch, op = 0, current = 0, vector, element;
var collation = [];
//var collationHash = {};
var mode = "accumulate";

function skipWhite() {
	while (isWhite(data.charAt(i))) {
		i++;
	}
}

while (i < data.length) {
	skipWhite();
	ch = data.charAt(i++);
	
	if (ch === '<') {
		op = 0;
		mode = "accumulate";
		ch = (i < data.length) ? data.charAt(i) : "";
		if (ch === '<') {
			op = 1;
			i++;
			ch = (i < data.length) ? data.charAt(i) : "";
			if (ch === '<') {
				op = 2;
				i++;
				ch = (i < data.length) ? data.charAt(i) : "";
				if (ch === '<') {
					op = 3;
				}
			}
		}
		if (ch === '*') {
			mode = "separate";
			i++;
		}
		util.print("found op level " + op + "\n");
	} else if (ch === '#') {
		// skip comments
		while (i < data.length && data.charAt(i) !== '\n') {
			i++;
		}
	} else if (ch === '&') {
		var value = "";
		
		skipWhite();
		ch = data.charAt(i);
		while (ch !== '&' && ch !== '<' && ch !== '#' && !isWhite(ch)) {
			if (ch !== "'") {
				value += ch;
			}
			ch = data.charAt(++i);
		}
		util.print("Searching for string " + value + "\n");
		for (var j = 0; j < collPinyin.length; j++) {
			if (collPinyin[j].char === value.charAt(0)) {
				current = j;
				util.print("Found reference to string " + value + " at position " + j + "\n");
			}
		}
	} else {
		var f = collPinyin[current].follows;
		
		if (f.length > 0) {
			util.print("Adding collation element " + ch + " at position " + current + "[" + (f.length-1) + "] level " + op + "\n");
			vector = f[f.length-1].weights.clone();
		} else {
			util.print("Adding collation element " + ch + " at position " + (current+1) + " level " + op + "\n");
			vector = collPinyin[current].weights.clone();
		}
		
		vector.increment(op);
	
		element = {
			char: ch,
			weights: vector,
			follows: []
		};
		f.push(element);
		//collationHash[ch] = element;
	}
}

util.print("Pinyin collation is: \n");

var collation = {};

for (var i = 0; i < collPinyin.length; i++) {
	element = collPinyin[i];
	util.print('"' + element.char + '": ' + element.weights.toString() + "\n");
	collation[element.char] = element.weights;
	var follows = element.follows;
	for (var j = 0; j < follows.length; j++) {
		util.print('  "' + follows[j].char + '": ' + follows[j].weights.toString() + "\n");
		collation[follows[j].char] = follows[j].weights;
	}
}

var outputFileName = path.join(toDir, "collation.json");
fs.writeFileSync(outputFileName, JSON.stringify(collation, undefined, 4), "utf-8");

util.print("Output written to " + outputFileName + ".\nDone\n");

/*
 å         [1,0,0]
   <<<Å    [1,0,1]
<ä         [2,0,0]
    <<<Ä   [2,0,1]
  <<æ      [2,1,0]
    <<<Æ   [2,1,1]
  <<ę      [2,2,0]
    <<<Ę   [2,2,1]
<ö         [3,0,0]
    <<<Ö   [3,0,1]
  <<ø      [3,1,0]
    <<<Ø   [3,1,1]
  <<ő      [3,2,0]
    <<<Ő   [3,2,1]
  <<œ      [3,3,0]
    <<<Œ   [3,3,1]
  <<ô      [3,4,0]
    <<<Ô   [3,4,1]
*/