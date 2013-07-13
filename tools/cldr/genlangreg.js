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
var mkdirs = common.makeDirs;

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
var language_name = {
	generated: true
};
var region_name = {
	generated: true
};
try {
	var enData = fs.readFileSync(cldrDirName + "/main/en.json", "utf-8");
	english = JSON.parse(enData);
} catch (e) {
	util.print("Error: Could not load file " + cldrDirName + "/main/en.json\n");
	process.exist(2);
}

util.print("Generating language name data\n");

var lang, region, script, 
	languages = english.localeDisplayNames.languages,
	regions = english.localeDisplayNames.territories;

for (var lang in languages) {
	if (lang.search(/[_-]/) === -1) {
		var langdir = localeDirName + "/" + lang;
		var filename = langdir + "/langname.jf";
		util.print(filename + ": " + languages[lang] + "\n");
		mkdirs(langdir);
		language_name["language.name"] = languages[lang];
		language_name.generated = true;
		fs.writeFileSync(filename, JSON.stringify(language_name), "utf-8");
	}
}

for (region in regions) {
	if (region.search(/[_\-0123456789]/) === -1) {
		var regdir = localeDirName + "/und/" + region;
		var filename = regdir + "/regionname.jf";
		util.print(filename + ": " + regions[region] + "\n");
		mkdirs(regdir);
		region_name["region.name"] = regions[region];
		region_name.generated = true;
		fs.writeFileSync(filename, JSON.stringify(region_name), "utf-8");
	}
}

