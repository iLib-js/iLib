/* 
 * jsondiff.js - ilib tool to diff a set of json files and only
 * output the unique strings 
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
var common = require('./common.js');
var path = require('path');

function usage() {
	util.print("Usage: jsondiff.js [-h] [parent_json_files] json_file output_file\n" +
		"Output a json file that contains only the things that are different from the\n" + 
		"parent json files.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"parent_json_files\n" +
		'  list of parent json files from most senior to least senior.\n' +
		"json_file\n" +
		'  json file to remove entries from if they are the same as the parents\n');
	process.exit(1);
}


var sourcePath = "", 
	targetPath = "",
	parents;

if (process.argv.length > 4) {
	if (process.argv[2] == '-h' || process.argv[2] == '-H' || process.argv[2] == '--help') {
		usage();
	}
	
	parents = process.argv.slice(2, process.argv.length);
	sourcePath = parents[parents.length-2];
	targetPath = parents[parents.length-1];
	parents = parents.slice(0, -2);
} else {
	usage();
}

if (!fs.existsSync(sourcePath)) {
	util.print("Could not access source file " + sourcePath + "\n");
	usage();
}

for (var i = 0; i < parents.length; i++ ) {
	if (!fs.existsSync(parents[i])) {
		util.print("Could not access parent file " + parents[i] + "\n");
		usage();
	}
}


util.print("source: " + sourcePath + "\n");
util.print("target: " + targetPath + "\n");

var merged = {};
var data, obj;

for (var i = 0; i < parents.length; i++ ) {
	data = fs.readFileSync(parents[i], 'utf8');
	if (data.length > 0) {
		obj = JSON.parse(data);
		merged = common.merge(merged, obj, "merged", parents[i]);
	}
}

var source, target;

data = fs.readFileSync(sourcePath, 'utf8');
if (data.length > 0) {
	source = JSON.parse(data);
}

fs.writeFileSync(targetPath, JSON.stringify(common.prune(merged, source), undefined, 4), "utf8");
