/*
 * gennormtest.js - ilib tool to generate the UNA normalization test data from the Unicode 
 * data files
 * 
 * Copyright © 2012-2015, 2020 JEDLSoft
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
var UnicodeFile = unifile.UnicodeFile;
var common = require('./common.js');
var fromCodePoint = common.codePointToUTF16;

function usage() {
	console.log("Usage: gennormtest [-h] NormalizationTest.txt [toDir]\n" +
			"Generate the normalization test data.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"NormalizationTest.txt\n" +
			"  the normalization test data from the Unicode character database\n" +
			"toDir\n" +
			"  directory to output the output files. Default: current dir.");
	process.exit(1);
}

function sequenceToString(sequence) {
	var chars = sequence.split(' ');
	var result = "";
	chars.forEach(function (val, index, array) {
		result += fromCodePoint(parseInt(val, 16));
	});
	return result;
}

var unicodeFileName;
var toDir = ".";

process.argv.forEach(function (val, index, array) {
	if (val === "-h" || val === "--help") {
		usage();
	}
});

if (process.argv.length < 3) {
	console.error('Error: not enough arguments');
	usage();
}

unicodeFileName = process.argv[2];
if (process.argv.length > 3) {
	toDir = process.argv[3];
}

console.log("gennorm - generate normalization test data.\n" +
		"Copyright (c) 2013 JEDLSoft");

fs.exists(unicodeFileName, function (exists) {
	if (!exists) {
		console.error("Could not access file " + unicodeFileName);
		usage();
	}
});

fs.exists(toDir, function (exists) {
	if (!exists) {
		console.error("Could not access target directory " + toDir);
		usage();
	}
});

var tests = [];

var ud = new UnicodeFile({path: unicodeFileName});
var len = ud.length();
var row;
for (var i = 0; i < len; i++ ) {
	row = ud.get(i);
	tests.push([
		sequenceToString(row[0]),
		sequenceToString(row[1]),
		sequenceToString(row[2]),
		sequenceToString(row[3]),
		sequenceToString(row[4])
	]);
}

fs.writeFile(toDir + "/normdata.js", "var normtests = " + JSON.stringify(tests, true, 4) + ";\nmodule.exports=normtests;", function (err) {
	if (err) {
		throw err;
	}
});
