/*
 * genphone.js - ilib tool to generate the json data for parsing and
 * formatting phone numbers
 *
 * Copyright © 2014, 2020 JEDLSoft
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
var fs = require("fs");
var path = require('path');
var common = require('./common.js');
var unifile = require("./unifile.js");
var mkdirs = common.makeDirs;
var UnicodeFile = unifile.UnicodeFile;

function usage() {
	console.log("Usage: genphone [-h] phone_data_dir [toDir]\n" +
		"Generate the locale data for phone numbers.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"phone_data_dir\n" +
		"  directory with raw phone number source files\n" +
		"toDir\n" +
		"  directory to output the json files. Default: current dir.");
	process.exit(1);
}

var phoneDir;
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

phoneDir = process.argv[2];
if (process.argv.length > 3) {
	toDir = process.argv[3];
}

console.log("genphone - generate the phone parsing/geolocation data files.\n" +
	"Copyright (c) 2014 JEDLSoft");

console.log("Phone data dir: " + phoneDir);
console.log("output dir: " + toDir);

if (!fs.existsSync(phoneDir)) {
	console.error("Could not access phone data directory " + phoneDir);
	usage();
}

if (!fs.existsSync(toDir)) {
	console.error("Could not access target directory " + toDir);
	usage();
}

/* Defines the numerical order of the states */
var states = [
	"none",
	"unknown",
	"plus",
	"idd",
	"cic",
	"service",
	"cell",
	"area",
	"vsc",
	"country",
	"personal",
	"special",
	"trunk",
	"premium",
	"emergency",
	"service2",
	"service3",
	"service4",
	"cic2",
	"cic3",
	"start",
	"local"
];

function getCharacterCode(ch) {
	if (ch >= '0' && ch <= '9') {
		return ch - '0';
	}
	switch (ch) {
	case '+':
		return 10;
	case '*':
		return 11;
	case '#':
		return 12;
	case '^':
		return 13;
	case '.':
		return 14;
	case 'p':		// pause chars
	case 'P':
	case 't':
	case 'T':
	case 'w':
	case 'W':
		return -1;
	case 'x':
	case 'X':		// extension char
		return -1;
	}
	return -2;
};

var areaCodes = {};
var a = 'a'.charCodeAt(0);
var zero = '0'.charCodeAt(0);

function addHash(hash, newValue) {
	// co-prime numbers creates a nicely distributed hash
	hash *= 65543;
	hash += newValue;
	hash %= 2147483647; 
	return hash;
}


function addAreaCode(name) {
	if (name && !areaCodes[name]) {
		// compute a hash as the unique id for this string
		var hash = 0;
		for (var i = 0; i < name.length; i++) {
			hash = addHash(hash, name.charCodeAt(i));
		}
		var base26 = hash.toString(26);
		var hashString = "";
		for (var i = 0; i < base26.length; i++) {
			var ch = base26.charCodeAt(i);
			hashString += String.fromCharCode(ch < a ? ch - zero + a : ch + 10); 
		}
		areaCodes[name] = "ilib.geo." + hashString;
	}
}

function processFile(file) {
	var f = new UnicodeFile({
		path: file, 
		splitChar: '\t',
		commentString: "//"
	});
	var trie = {}, current;
	var area = {};
	var ch;
	
	console.log("processing file " + file);
	for (var i = 0; i < f.length(); i++) {
		var fields = f.get(i);
		if (fields.length > 1) {
			var digits = fields[0];
			var state = states.indexOf(fields[1]);
			if (state === -1) {
				console.log("Error: could not get type in line " + i + ": " + f.getLine(i));
			} else {
				current = trie;
				//console.log("Encoding " + digits + " in state " + state + "(" + fields[1] + ")");
				for (var j = 0; j < digits.length-1; j++) {
					ch = getCharacterCode(digits.charAt(j));
					if (ch >= 0) {
						// console.log("doing " + ch);
						if (typeof(current.s) === 'undefined') {
							current.s = [];
						}
						if (!current.s[ch]) {
							current.s[ch] = {
								//digits: digits.substring(0,digits.length-1),
								s: []
							};
						} else if (typeof(current.s[ch]) === 'number') {
							// transform it into a node instead
							var node = {
								//digits: digits.substring(0,digits.length-1),
								l: current.s[ch],
								s: []
							};
							current.s[ch] = node;
						}
						current = current.s[ch];
					}
				}
				// if (!current) {
				// 	console.log("current is undefined. trie is\n" + JSON.stringify(trie, undefined, 4));
				// }
				// now we have reached the final state
				ch = getCharacterCode(digits.charAt(digits.length - 1));
				if (typeof(current.s) === 'undefined') {
					current.s = [];
				}
				if (!current.s[ch]) {
					current.s[ch] = state;
				} else {
					//current.s[ch].digits = digits;
					current.s[ch].l = state;
				}
				if (state === 7 || state === 9) {
					area[digits] = {
						sn: fields[2],
						ln: fields[3]
					};
				}
				
				addAreaCode(fields[2]);
				addAreaCode(fields[3]);
			}
		}
	}

	function deNullify(arr) {
		// console.log("denullifying an object");
		var node = {};
		if (typeof(arr.digits) !== 'undefined') {
			node.digits = arr.digits;
		}
		if (typeof(arr.l) !== 'undefined') {
			node.l = arr.l;
		}
		if (typeof(arr.s) !== 'undefined') {
			// console.log("denullifying an array");
			node.s = [];
			for (var i = 0; i < arr.s.length; i++) {
				var value = arr.s[i];
				// console.log("value " + i + " is " + value);
				if (value === null || typeof(value) === 'undefined') {
					node.s.push(0);
				} else if (typeof(value) === 'number') {
					node.s.push(value);
				} else {
					node.s.push(deNullify(value));	
				}
			}
		}
		return node;
	}
	
	trie = deNullify(trie);
	var extended = file.match(/.geo.txt$/);
	var basename = path.basename(file,  extended ? ".geo.txt" : ".txt");
	var baseDir;
	var stateFileName;
	var areaFileName;
	if (basename.length === 2) {
		// region name
		baseDir = path.join(toDir, "und", basename);
		stateFileName = path.join(baseDir, extended ? "extstates.json" : "states.json");
		areaFileName = path.join(baseDir, extended ? "extarea.json" : "area.json");
	} else {
		baseDir = toDir;
		stateFileName = path.join(toDir, basename + ".json");
		areaFileName = path.join(toDir, basename + "area.json");
	}
	mkdirs(baseDir);
	
	fs.writeFileSync(stateFileName, JSON.stringify(trie, undefined, 4), "utf-8");
	fs.writeFileSync(areaFileName, JSON.stringify(area, undefined, 4), "utf-8");
}

var list = fs.readdirSync(phoneDir);
list.forEach(function (file) {
	if (file.match(/\.txt$/)) {
		processFile(path.join(phoneDir, file));
	}
});

// now produce file for localization

var output = "";
for (var code in areaCodes) {
	if (code && areaCodes[code]) {
		output += areaCodes[code] + "\t" + code + "\n";
	}
}

fs.writeFileSync(path.join(toDir, "areaCodes.csv"), output, "utf-8");
