/*
 * genctype.js - ilib tool to generate the json ctype information from the Unicode 
 * data files
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
var charIterator = common.charIterator;
var isMember = common.isMember;

function usage() {
	util.print("Usage: genctype [-h] DerivedGeneralCategory.txt [toDir]\n" +
			"Generate the character type data.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"DerivedGeneralCategory.txt\n" +
			"  the derived general character category database downloaded from the Unicode site\n" +
			"toDir\n" +
			"  directory to output the normalization json files. Default: current dir.\n");
	process.exit(1);
}

var unicodeFileName;
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

unicodeFileName = process.argv[2];
if (process.argv.length > 3) {
	toDir = process.argv[3];
}

util.print("genctype - generate ctype data.\n" +
		"Copyright (c) 2012 JEDLSoft\n");

fs.exists(unicodeFileName, function (exists) {
	if (!exists) {
		util.error("Could not access file " + unicodeFileName);
		usage();
	}
});

fs.exists(toDir, function (exists) {
	if (!exists) {
		util.error("Could not access target directory " + toDir);
		usage();
	}
});

var map = {};

var uf = new UnicodeFile({path: unicodeFileName});
var len = uf.length();
var row;
var range, rangeName, rangeStart, rangeEnd;
var rangeLetter;

for (var i = 0; i < len; i++ ) {
	row = uf.get(i);

	rangeName = row[1].trim();
	rangeStart = parseInt(row[0].match(/^[A-F0-9]+/)[0],16);
	rangeEnd = row[0].match(/\.\.[A-F0-9]+/);

	if (rangeEnd && rangeEnd.length > 0) {
		rangeEnd = parseInt(rangeEnd[0].substring(2), 16);
		range = [rangeStart, rangeEnd];
	} else {
		range = [rangeStart];
	}
	
	rangeLetter = rangeName.substring(0,1).toLowerCase();
	if (typeof(map[rangeLetter]) === 'undefined') {
		map[rangeLetter] = {};
	}
	if (typeof(map[rangeLetter][rangeName]) === 'undefined') {
		map[rangeLetter][rangeName] = [];
	}
	map[rangeLetter][rangeName].push(range);
}

for (letter in map) {
	if (letter && map[letter]) {
		fs.writeFile(toDir + "/ctype_" + letter + ".json", JSON.stringify(map[letter], true, 4), function (err) {
			if (err) {
				throw err;
			}
		});
	}
}
