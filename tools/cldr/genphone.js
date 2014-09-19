/*
 * genphone.js - ilib tool to generate the json data for parsing and
 * formatting phone numbers
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
var fs = require("fs");
var util = require('util');
var path = require('path');
var common = require('./common.js');
var unifile = require("./unifile.js");
var mkdirs = common.makeDirs;
var UnicodeFile = unifile.UnicodeFile;

function usage() {
	util.print("Usage: genphone [-h] phone_data_dir [toDir]\n" +
		"Generate the locale data for phone numbers.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"phone_data_dir\n" +
		"  directory with raw phone number source files\n" +
		"toDir\n" +
		"  directory to output the json files. Default: current dir.\n");
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
	util.error('Error: not enough arguments');
	usage();
}

phoneDir = process.argv[2];
if (process.argv.length > 3) {
	toDir = process.argv[3];
}

util.print("genpapaersizes - generate the localeinfo papaersize.jf files.\n" +
	"Copyright (c) 2013 JEDLSoft\n");

util.print("Phone data dir: " + phoneDir + "\n");
util.print("output dir: " + toDir + "\n");

if (!fs.existsSync(phoneDir)) {
	util.error("Could not access phone data directory " + phoneDir);
	usage();
}

if (!fs.existsSync(toDir)) {
	util.error("Could not access target directory " + toDir);
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

function processFile(file) {
	var f = new UnicodeFile({
		path: file, 
		splitChar: '\t'
	});
	var trie = [], current;
	var area = {};
	
	for (var i = 0; i < f.length(); i++) {
		var fields = f.get(i);
		if (fields.length > 1) {
			var digits = fields[0];
			var state = states.indexOf(fields[1]);
			current = trie;
			util.print("Encoding " + digits + "\n");
			for (var j = 0; j < digits.length-1; j++) {
				var ch = getCharacterCode(digits.charAt(j));
				if (ch >= 0) {
					util.print("doing " + ch + "\n");
					if (!current[ch]) {
						current[ch] = [];
					}
					current = current[ch];
				}
			}
			// now we have reached the final state
			var ch = getCharacterCode(digits.charAt(digits.length - 1));
			current[ch] = state;
			if (state === 7) {
				area[digits] = {
					sn: fields[2],
					ln: fields[3]
				}
			}
		}
	}
	
	var baseDir = path.join(toDir, "und", path.basename(file, ".txt"));
	mkdirs(baseDir);
	var stateFileName = path.join(baseDir, "states.json");
	var areaFileName = path.join(baseDir, "area.json");
	
	fs.writeFileSync(stateFileName, JSON.stringify(trie, undefined, 4), "utf-8");
	fs.writeFileSync(areaFileName, JSON.stringify(area, undefined, 4), "utf-8");
}

var list = fs.readdirSync(phoneDir);
list.forEach(function (file) {
	if (file.match(/\.txt$/)) {
		processFile(path.join(phoneDir, file));
	}
});
