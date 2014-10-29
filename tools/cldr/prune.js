/* 
 * prune.js - ilib tool to remove properties from lower-level json files
 * when the values of those lower-level properties match the parent.
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
var common = require('./common');

function usage() {
	util.print("Usage: prune.js [-h] [locale_data_dir]\n" +
		"Prune json files to remove extraneous properties.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"locale_data_dir\n" +
		'  the top level of the ilib locale data directory. Default "."\n');
	process.exit(1);
}

localeDirName = process.argv[2] || ".";
util.print("locale dir: " + localeDirName + "\n");
fs.exists(localeDirName, function (exists) {
	if (!exists) {
		util.print("Could not access locale data directory " + localeDirName);
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
			if (path.match(/[a-z]+\.json/)) {
				try {
					var data = fs.readFileSync(path, 'utf8');
					if (data.length > 0) {
						obj = JSON.parse(data);
						merged = common.merge(merged, obj);
					}
				} catch (err) {
					util.print("File " + path + " is not readable or does not contain valid JSON.\n");
					util.print(err + "\n");
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
		util.print(path + ": merged *.jf into localeinfo.json\n");
	} else {
		util.print(path + ": nothing to write\n");
	}

	return results;
}

walk(localeDirName, undefined);
