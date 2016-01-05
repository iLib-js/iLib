/*
 * genlikelyloc.js - ilib tool to generate the likelylocales.json files from 
 * the CLDR data files
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
var common = require('./common');
var Locale = common.Locale;

function usage() {
	util.print("Usage: genlikelyloc [-h] CLDR_json_dir locale_data_dir\n" +
			"Generate likely locale information file.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"CLDR_json_dir\n" +
			"  the top level of the Unicode CLDR distribution in json format\n" +
			"locale_data_dir\n" +
			"  the top level of the ilib locale data directory\n");
	process.exit(1);
}

var cldrDirName;
var localeDirName;

process.argv.forEach(function (val, index, array) {
	if (val === "-h" || val === "--help") {
		usage();
	}
});

if (process.argv.length < 4) {
	util.error('Error: not enough arguments');
	usage();
}

cldrDirName = process.argv[2];
localeDirName = process.argv[3];

util.print("gendatefmts - generate date formats information files.\n" +
		"Copyright (c) 2013-2015 JEDLSoft\n");

util.print("CLDR dir: " + cldrDirName + "\n");
util.print("locale dir: " + localeDirName + "\n");

fs.exists(cldrDirName, function (exists) {
	if (!exists) {
		util.error("Could not access CLDR dir " + cldrDirName);
		usage();
	}
});

fs.exists(localeDirName, function (exists) {
	if (!exists) {
		util.error("Could not access locale data directory " + localeDirName);
		usage();
	}
});

var likelySubtags, filename, json;

util.print("Reading supplemental/likelySubtags.json\n");

try {
	filename = cldrDirName + "/supplemental/likelySubtags.json";
	json = fs.readFileSync(filename, "utf-8");
	likelySubtags = JSON.parse(json);
} catch (e) {
	util.print("Error: Could not load file " + filename + "\n");
	process.exist(2);
}

var likelylocales = {};
var likeySubtagsList = likelySubtags.supplemental.likelySubtags;

for (var partial in likeySubtagsList) {
	if (partial && likeySubtagsList[partial]
		 && partial.search(/[0-9]/) === -1) { // eleminate locale style with number (i.e und-002, und-005 etc. )
		var partloc = new Locale(partial.replace(/^und-/g, ""));
		var full = new Locale(likeySubtagsList[partial]);
		likelylocales[partloc.getSpec()] = full.getSpec(); 
	}
}

util.print("Writing likelylocales.json...\n");
// now write out the system resources

var filename = localeDirName + "/likelylocales.json";
fs.writeFile(filename, JSON.stringify(likelylocales, true, 4), function (err) {
	if (err) {
		console.log(err);
		throw err;
	}
});

util.print("Done.\n");