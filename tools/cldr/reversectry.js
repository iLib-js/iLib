/* 
 * reversectry.js - ilib tool to generate the ctryreverse.json from 
 * ctrynames.json files for LG specific country data
 *
 * Copyright © 2017, 2020 LGE
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
var path = require('../../js/lib/Path.js');

function usage() {
	console.log("Usage: reversectry.js [-h] [source_dir]\n" +
		"Find ctrynames.json files and reverse json schema for generating ctryreverse.json.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"source_dir\n" +
		'  Where to find json files to compress. Default "."');
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
		console.log("Could not access source directory " + sourcedir );
		usage();
	}
});

console.log("source dir: " + sourcedir );

function walk(root, dir) {
	var reverse = {};
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
				if(sourcePath.indexOf('ctrynames.json') !== -1) {
					try {
						var data = fs.readFileSync(sourcePath, 'utf8');
						if (data.length > 0) {
							obj = JSON.parse(data);
							for (var ctry in obj) {
        					    if (ctry && obj[ctry]) {
        					        reverse[obj[ctry]] = ctry;
        					    }
        					}
        					reversePath = sourcePath.replace('ctrynames', 'ctryreverse');
        					console.log(reversePath);
							fs.writeFileSync(reversePath, JSON.stringify(reverse, true, 4), 'utf8');
						}
					} catch (err) {
						console.log("File " + sourcePath + " is not readable or does not contain valid JSON.\n");
						console.log(err );
						process.exit(2);
					}
				}
			}
		}
	});

	return;
}

walk(sourcedir, "");
