/* 
 * jsoncompress.js - ilib tool to remove the whitespace from json files
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
	console.log("Usage: jsoncompress.js [-h] [source_dir [target_dir]]\n" +
		"Find all json files and compress all the whitespace out of them.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"source_dir\n" +
		'  Where to find json files to compress. Default "."\n' +
		"target_dir\n" +
		'  Where to put the results. Default "compressed"');
	process.exit(1);
}


var sourcedir = ".", 
	targetdir = "compressed";

if (process.argv.length > 2) {
	if (process.argv[2] == '-h' || process.argv[2] == '-H' || process.argv[2] == '--help') {
		usage();
	}
	sourcedir = process.argv[2] || ".";
	if (process.argv.length > 3) {
		targetdir = process.argv[3];
	}
}

fs.exists(sourcedir, function (exists) {
	if (!exists) {
		console.log("Could not access source directory " + sourcedir);
		usage();
	}
});

fs.exists(targetdir, function (exists) {
	if (!exists) {
		try {
			common.makeDirs(targetdir);
		} catch (e) {
			console.log("Could not access or create target directory " + targetdir + "\nError: " + e);
			usage();
		}
	}
});

console.log("source dir: " + sourcedir);
console.log("target dir: " + targetdir);

//escape some of these Unicode characters because Google Closure Compiler doesn't like them
function escape(str) {
	var output = "";
	
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		var c = str.charCodeAt(i);
		if ((c >= 0x2028 && c <= 0x2030) ||  // punct
			(c >= 0xDC00 && c <= 0xDFFF) ||  // high surrogates
			(c >= 0xD800 && c <= 0xDB7F)) {  // low surrogates
			output += "\\u" + common.toHexString(ch);
		} else {
			output += ch;
		}
	}
	
	return output;
}

function walk(root, dir) {
	var results = [];
	var list = fs.readdirSync(path.join(root, dir));
	list.forEach(function (file) {
		var sourcePathRelative = path.join(dir, file);
		var sourcePath = path.join(root, sourcePathRelative);
		var stat = fs.statSync(sourcePath);
		if (stat && stat.isDirectory()) {
			walk(root, sourcePathRelative);
		} else {
			var obj;
			if (file.match(/\.json$/)) {
				try {
					var data = fs.readFileSync(sourcePath, 'utf8');
					if (data.length > 0) {
						// before parsing, first remove comments which are not valid in real json
						data = data.replace(/\/\/[^\n]*\n/g, "\n").replace(/\/\*(\*[^\/]|[^\*])*\*\//g, "");
						
						obj = JSON.parse(data);
						var targetPath = path.join(targetdir, sourcePathRelative);
						
						console.log("compress " + sourcePath + " -> " + targetPath);
						
						var targetDir = path.dirname(targetPath);
						//console.log("dirname is " + targetDir);
						common.makeDirs(targetDir);
						
						//console.log("writing file " + targetPath);
						fs.writeFileSync(targetPath, escape(JSON.stringify(obj)), 'utf8');
					}
				} catch (err) {
					console.log("File " + sourcePath + " is not readable or does not contain valid JSON.");
					console.log(err);
					process.exit(2);
				}
			}
		}
	});

	return results;
}

walk(sourcedir, "");
