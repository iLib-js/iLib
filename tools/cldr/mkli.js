/* 
 * mkli.js - ilib tool to remove the non-json fragments
 *
 * Copyright © 2013, LGE
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

function usage() {
	util.print("Usage: mkli.jss [-h] locale_data_dir\n" +
		"remove non-json files.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"locale_data_dir\n" +
		"  the top level of the ilib locale data directory\n");
	process.exit(1);
}

localeDirName = process.argv[2];
util.print("locale dir: " + localeDirName + "\n");
fs.exists(localeDirName, function (exists) {
	if (!exists) {
		util.print("Could not access locale data directory " + localeDirName);
		usage();
	}
});

if (process.argv.length < 3) {
	util.print('Error: not enough arguments');
	usage();
}

function walk(dir) {
	var results = [];
	var list = fs.readdirSync(dir);
	list.forEach(function (file) {
		file = dir + '/' + file;
		var merged = {};
		var stat = fs.statSync(file);
		if (stat && stat.isDirectory())(walk(file));

		else {
			var obj = {};
			if (file.match(/[a-z]+\.jf/)) {
				var data = fs.readFileSync(file, 'utf8');
				try {
					obj = JSON.parse(data);
				} catch (err) {
					fs.unlink(file);
					file = '[]';
				}

				if (file != '[]') {
					results.push(file);
				}
			}
		}
	});

	for (var i = 0; i < results.length; i++) {
		var json = fs.readFileSync(results[i], 'utf8');
		var root = JSON.parse(json);
		merged = common.merge(merged, root);
	}
	var path = dir;
	if (Object.keys(merged).length != 0) {
		fs.writeFileSync(path + "/localeinfo.json", JSON.stringify(merged), 'utf8');
	}

	return results;
}

if (process.argv.length < 3) {
	util.print('Error: not enough arguments');
	usage();
}

walk(localeDirName);