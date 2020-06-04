/* 
 * mkmf.js - ilib tool to create the manifest file for locale data
 *
 * Copyright © 2013, 2020 JEDLSoft
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
var common = require('../cldr/common');
var path = require('../../js/lib/Path.js');

function usage() {
	console.log("Usage: mkmf.js [-h] source_dir\n" +
		"Create an ilibmanifest.json file out of the existing locale data.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"source_dir\n" +
		'  Dir to scan. Default "."');
	process.exit(1);
}


var sourcedir = ".";

if (process.argv.length > 2) {
	if (process.argv[2] == '-h' || process.argv[2] == '-H' || process.argv[2] == '--help') {
		usage();
	}
	sourcedir = process.argv[2] || ".";
}

fs.exists(sourcedir, function (exists) {
	if (!exists) {
		console.log("Could not access directory " + sourcedir);
		usage();
	}
});

console.log("source dir: " + sourcedir);

var manifest = {
	files: []
};

function walk(root, dir) {
	var list = fs.readdirSync(path.join(root, dir));
	list.forEach(function (file) {
		var sourcePathRelative = path.join(dir, file);
		var sourcePath = path.join(root, sourcePathRelative);
		var stat = fs.statSync(sourcePath);
		if (stat && stat.isDirectory()) {
			walk(root, sourcePathRelative);
		} else {
			if (file.match(/\.json$/)) {
				manifest.files.push(sourcePathRelative);
			}
		}
	});
}

walk(sourcedir, "");

try {
	var targetPath = path.join(sourcedir, "ilibmanifest.json");
	console.log("Writing " + targetPath);
	fs.writeFileSync(targetPath, JSON.stringify(manifest), 'utf8');
} catch (err) {
	console.log("Could not write target manifest file: " + targetPath);
	console.log(err);
}
