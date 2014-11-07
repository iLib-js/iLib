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
var path = require('path');

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
if (!fs.existsSync(localeDirName)) {
	util.print("Could not access locale data directory " + localeDirName);
	usage();
}

function readJson(path) {
	if (!fs.existsSync(path)) {
		return undefined;
	}
	var data = fs.readFileSync(path);
	if (data.length > 0) {
		return JSON.parse(data); 
	}
	return {};
}


var likelyLocaleFileName = path.join(localeDirName, "likelylocales.json");
var likelylocales = {};

var temp = readJson(likelyLocaleFileName);
if (temp) {
	for (var part in temp) {
		if (part && temp[part]) {
			likelylocale[part] = new common.Locale(temp[part]);
		}
	}
}

var fileTypes = [
	"address.json",
	"calendar.jf",
	"clock.jf",
	"countries.json",
	"ctrynames.json",
	"currency.jf",
	"currency.json",
	"dateformats.json",
	"delimiters.jf",
	"empty.jf",
	"firstdayofweek.jf",
	"langname.jf",
	"name.json",
	"nativecountries.json",
	"numfmt.jf",
	"papersizes.jf",
	"phoneres.json",
	"plurals.json",
	"scripts.jf",
	"sysres.json",
	"timezone.jf",
	"unitfmt.json",
	"units.jf"
];

function walk(dir, locale) {
	var results = [];
	var list = fs.readdirSync(dir);
	var merged = {};
	var thisloc = new common.Locale(locale);
	
	// special case -- und is the undetermined language, so leave it off
	var lookupSpec = (thisloc.getLanguage() === 'und') ? thisloc.getRegion() : thisloc.getSpec();

	fileTypes.forEach(function (type) {
		var json;
		var thispath = path.join(dir, type);
		if (!fs.existsSync(thispath)) {
			// try to find the base locale's version of the file and use that instead
			var loc;
			loc = likelylocales[lookupSpec];
			if (loc) {
				var filename = path.join(dir, loc.getLanguage(), loc.getRegion(), type);
				if (fs.existsSync(filename)) {
					json = readJson(filename);
				} else {
					filename = path.join(dir, loc.getLanguage(), loc.getScript(), loc.getRegion(), type);
					if (fs.existsSync(filename)) {
						json = readJson(filename);
					} else {
						filename = path.join(dir, loc.getLanguage(), loc.getScript(), type);
						if (fs.existsSync(filename)) {
							json = readJson(filename);
						}
					}
				}				
			}
		}
	});
	
	list.forEach(function (file) {
		var thispath = dir + '/' + file;
		var stat = fs.statSync(thispath);
		if (stat && stat.isDirectory()) {
			walk(thispath, (locale && locale !== "und" && locale !== '.') ? locale + "-" + file : file);
		} else {
			var obj = {};
			if (fileTypes.indexOf(file) !== -1) {
				try {
					
				} catch (err) {
					util.print("File " + thispath + " is not readable or does not contain valid JSON.\n");
					util.print(err + "\n");
				}
			}
		}
	});

	var thispath = dir;
	if (!common.isEmpty(merged)) {
		if (merged.generated) {
			delete merged.generated;
		}
		merged.locale = locale;
		fs.writeFileSync(thispath + "/localeinfo.json", JSON.stringify(merged, true, 4), 'utf8');
		util.print(thispath + ": merged *.jf into localeinfo.json\n");
	} else {
		util.print(thispath + ": nothing to write\n");
	}

	return results;
}

walk(localeDirName, undefined);
