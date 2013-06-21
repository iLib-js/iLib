/*
 * genlangreg.js - ilib tool to generate the langname and regionname json fragments from the CLDR
 * data files
 *
 * Copyright © 2013, JEDLSoft
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
var common = require("./common");
var Locale = common.Locale;

function usage() {
	util.print("Usage: genlangreg [-h] CLDR_json_dir locale_data_dir\n" +
		"Generate the langname.jf and regionname.jf files for each locale.\n\n" +
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

util.print("genlangreg - generate language and region name data.\n" +
	"Copyright (c) 2013 JEDLSoft\n");

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

var english;
var language_name = {};
var region_name = {};
try {
	var enData = fs.readFileSync(cldrDirName + "/main/en.json", "utf-8");
	english = JSON.parse(enData);
} catch (e) {
	util.print("Error: Could not load file " + cldrDirName + "/main/en.json\n");
	process.exist(2);
}

var lang, region, script, languages = fs.readdirSync(localeDirName);
for (var i = 0; i < languages.length; i++) {
	lang = languages[i];
	var langdir = localeDirName + "/" + lang;
	if (Locale.isRegionCode(lang) && fs.existsSync(langdir)) {
		region = lang;
		filename = langdir + "/regionname.jf";
		if (typeof (english.localeDisplayNames.territories[region]) !== 'undefined') {
			util.print("\t" + filename + ": " + english.localeDisplayNames.territories[region] + "\n");
			region_name["region.name"] = english.localeDisplayNames.territories[region];
			fs.writeFileSync(filename, JSON.stringify(region_name), "utf-8");
		}
	} else if (Locale.isLanguageCode(lang) && fs.existsSync(langdir)) {
		var filename = langdir + "/langname.jf";
		if (typeof (english.localeDisplayNames.languages[lang]) !== 'undefined') {
			util.print(filename + ": " + english.localeDisplayNames.languages[lang] + "\n");
			language_name["language.name"] = english.localeDisplayNames.languages[lang];
			fs.writeFileSync(filename, JSON.stringify(language_name), "utf-8");
			var regions = fs.readdirSync(langdir);
			for (var j = 0; j < regions.length; j++) {
				var region = regions[j];
				var regiondir = langdir + "/" + region;
				if (Locale.isRegionCode(region) && fs.existsSync(regiondir)) {
					filename = regiondir + "/regionname.jf";
					if (typeof (english.localeDisplayNames.territories[region]) !== 'undefined') {
						util.print("\t" + filename + ": " + english.localeDisplayNames.territories[region] + "\n");
						region_name["region.name"] = english.localeDisplayNames.territories[region];
						fs.writeFileSync(filename, JSON.stringify(region_name), "utf-8");
					}
				} else if (Locale.isScriptCode(region) && fs.existsSync(regiondir)) {
					var scriptregions = fs.readdirSync(regiondir);
					for (var k = 0; k < scriptregions.length; k++) {
						var scriptregion = scriptregions[k];
						var scriptregiondir = regiondir + "/" + scriptregion;
						if (Locale.isRegionCode(scriptregion) && fs.existsSync(scriptregiondir)) {
							filename = scriptregiondir + "/regionname.jf";
							if (typeof (english.localeDisplayNames.territories[scriptregion]) !== 'undefined') {
								util.print("\t" + filename + ": " + english.localeDisplayNames.territories[scriptregion] + "\n");
								region_name["region.name"] = english.localeDisplayNames.territories[region];
								fs.writeFileSync(filename, JSON.stringify(region_name), "utf-8");
							}
						}
					}
				}
			}
		}
	}
}
