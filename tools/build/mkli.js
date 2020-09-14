/* 
 * mkli.js - ilib tool to remove the non-json fragments
 *
 * Copyright © 2013, 2020 LGE
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

function usage() {
	console.log("Usage: mkli.js [-h] [locale_data_dir]\n" +
		"Make the localeinfo.json files from the jf fragment files.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"locale_data_dir\n" +
		'  the top level of the ilib locale data directory. Default "."');
	process.exit(1);
}

localeDirName = process.argv[2] || ".";
console.log("locale dir: " + localeDirName);
fs.exists(localeDirName, function (exists) {
	if (!exists) {
		console.log("Could not access locale data directory " + localeDirName);
		usage();
	}
});

function walk(dir, locale) {
	var results = [];
	var list = fs.readdirSync(dir);
	var merged = {};
	list.forEach(function (file) {
		var path = dir + '/' + file;
		var stat = fs.statSync(path);
		if (stat && stat.isDirectory()) {
			walk(path, (locale && locale !== "und" && locale !== '.') ? locale + "-" + file : file);
		} else {
			var obj = {};
			if (path.match(/[a-z]+\.jf/)) {
				try {
					var data = fs.readFileSync(path, 'utf8');
					if (data.length > 0) {
						obj = JSON.parse(data);
						merged = common.merge(merged, obj);
					}
				} catch (err) {
					console.log("File " + path + " is not readable or does not contain valid JSON.");
					console.log(err);
				}
			}
		}
	});

	var path = dir;
	if (!common.isEmpty(merged)) {
		if (merged.generated) {
			delete merged.generated;
		}
		merged.locale = locale;
		fs.writeFileSync(path + "/localeinfo.json", JSON.stringify(merged, true, 4), 'utf8');
		console.log(path + ": merged *.jf into localeinfo.json");
	} else {
		console.log(path + ": nothing to write");
	}

	return results;
}

walk(localeDirName, undefined);
