/*
 * customjsoncompress.js - ilib tool to remove the whitespace from json files
 *
 * Copyright © 2013-2015, JEDLSoft
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
var path = require('path');

function usage() {
	util.print("Usage: customjsoncompress.js [-h] [source_dir] [target_dir] [custom_dir] [locale_list]\n" +
		"Find all json files and compress all the whitespace out of them.\n" +
		"It is possible if you want to overwrite the some of locale data.\n" +
		"you can choose the locale list only you want to copy.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"source_dir\n" +
		'  Where to put the results. Default "."\n' +
		"target_dir\n" +
		'  Where to put the results. Default "compressed"\n' +
		"custom_dir\n" +
		'  Where to put the results. Default "."\n' +
		"locale_list\n" +
		'  locale list. Need to write down with at least one locale."\n');
	process.exit(1);
}

var sourcedir = ".",
	targetdir = "compressed",
	localedir = ".";

function localeParsing(localeinfo) {
	var tempStr;
	tempStr = localeinfo.replace(/(\s*)/g,"");
	localedir =tempStr.split(/,|-/);
	localedir.push('zoneinfo');
	localedir.push('nfkd');
}

if (process.argv.length > 2) {
	if (process.argv[2] == '-h' || process.argv[2] == '-H' || process.argv[2] == '--help') {
		usage();
	}
	sourcedir = process.argv[2] || ".";
	if (process.argv.length > 3) {
		targetdir = process.argv[3];
		customdir = process.argv[4] || ".";
		localeinfo = process.argv[5] || "";
		localeParsing(localeinfo);
	}
}

fs.exists(sourcedir, function (exists) {
	if (!exists) {
		util.print("Could not access source directory " + sourcedir + "\n");
		usage();
	}
});

fs.exists(targetdir, function (exists) {
	if (!exists) {
		try {
			common.makeDirs(targetdir);
		} catch (e) {
			util.print("Could not access or create target directory " + targetdir + "\nError: " + e + "\n");
			usage();
		}
	}
});

util.print("source dir: " + sourcedir + "\n");
util.print("target dir: " + targetdir + "\n");

function walk(root, dir) {
	var results = [];
	var list = fs.readdirSync(path.join(root, dir));

	list.forEach(function (file) {
		var sourcePathRelative = path.join(dir, file);
		var sourcePath = path.join(root, sourcePathRelative);
		var customDirPath = path.join(customdir, sourcePathRelative);
		var stat = fs.statSync(sourcePath);
		var sourcePathParse = sourcePath.split("/");
		//util.print("localedir : " +  localedir + "\n");

		if (stat && stat.isDirectory()) {
			if (localedir.indexOf(sourcePathParse[0]) >-1 || sourcePath ==='und') {
				walk(root, sourcePathRelative);
			} else if (localedir.indexOf(sourcePathParse[1]) >-1) {
				walk(root, sourcePathRelative);
			}
		} else {
			var obj;
			if (file.match(/\.json$/)) {
				try {
					var data = fs.readFileSync(sourcePath, 'utf8');
					if (data.length > 0) {
						obj = JSON.parse(data);
						try {
							var customData = fs.readFileSync(customDirPath, 'utf8');
							customObj = JSON.parse(customData);
							util.print("Overide date in customDirPath: " + customDirPath + "\n");

							var length = Object.keys(customObj).length;
							var keys = Object.keys(customObj);

							for (i=0; i < length; i++) {
								obj[keys[i]] = customObj[keys[i]];
							}
						} catch (e) {
							//util.print("No date to be overide\n");
						}

						var targetPath = path.join(targetdir, sourcePathRelative);
						//util.print("compress " + sourcePath + " -> " + targetPath + "\n");

						var targetDir = path.dirname(targetPath);
						//util.print("dirname is " + targetDir + "\n");
						common.makeDirs(targetDir);

						//util.print("writing file " + targetPath + "\n");

						fs.writeFileSync(targetPath, JSON.stringify(obj), 'utf8');
					}
				} catch (err) {
					util.print("File " + sourcePath + " is not readable or does not contain valid JSON.\n");
					util.print(err + "\n");
					process.exit(2);
				}
			}
		}
	});
	return results;
}

walk(sourcedir, "");
