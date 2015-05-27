/*
 * gendatefmts.js - ilib tool to generate the dateformats.json files from
 * the CLDR data files
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
var path = require('path');

var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;

var aux = require("./datefmts.js");

function usage() {
    util.print("Usage: gendatefmts [-h] CLDR_json_dir locale_data_dir\n" +
        "Generate date formats information files.\n" +
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
var tmpDirName = "./tmp";
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
util.print("gendatefmts - generate date and time formats information files.\n" +
    "Copyright (c) 2013-2015 JEDLSoft\n");
util.print("CLDR dir: " + cldrDirName + "\n");
util.print("locale dir: " + localeDirName + "\n");
if (!fs.existsSync(cldrDirName)) {
    util.error("Could not access CLDR dir " + cldrDirName);
    usage();
}
if (!fs.existsSync(localeDirName)) {
    util.error("Could not access locale data directory " + localeDirName);
    usage();
}

if (!fs.existsSync(tmpDirName)) {
	makeDirs(tmpDirName);
}

var filename, root, json, suppData, languageData, scripts = {};

var language, region, script;

util.print("\n\nReading existing locale data ...\n");

var dateFormats = {};
var systemResources = {};

aux.walkLocaleDir(dateFormats, /dateformats\.json$/, localeDirName, "");
aux.walkLocaleDir(systemResources, /sysres\.json$/, localeDirName, "");

util.print("\n\nMerging formats forward ...\n");

aux.mergeFormats(dateFormats, dateFormats, []);
aux.mergeFormats(systemResources, systemResources, []);

util.print("\n\nReading CLDR data ...\n");

var dir = path.join(cldrDirName, "main");
var list = fs.readdirSync(dir);

list.forEach(function (file) {
	var locale = file ? new Locale(file) : undefined;
	if (locale.getVariant()) {
		// ignore locales with variants for now
		return;
	}
	
	var sourcePath = path.join(dir, file);
	util.print(sourcePath + " ...\n");
	var stat = fs.statSync(sourcePath);
	if (stat && stat.isDirectory()) {
		var localeComponents = [];
		
		var language = locale.getLanguage(),
			script = locale.getScript(),
			region = locale.getRegion();
		
		if (language) localeComponents.push(language);
		if (script) localeComponents.push(script);
		if (region) localeComponents.push(region);
		
		if (language === "fa") {
			
		} else if (language === "am") {
			
		} else if (language === "th") {
			
		} else {
			// regular gregorian
			var greg = aux.loadFile(path.join(sourcePath, "ca-gregorian.json"));
			var newFormats = aux.createDateFormats(greg.main[file].dates.calendars);
			util.print("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
			var group = aux.getFormatGroup(dateFormats, localeComponents);
			group.data = merge(group.data || {}, newFormats);
			
			newFormats = aux.createSystemResources(greg.main[file].dates.calendars);
			util.print("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
			var group = aux.getFormatGroup(systemResources, localeComponents);
			group.data = merge(group.data || {}, newFormats);
		}
	}
});

util.print("\n\nPromoting sublocales to shared format status ...\n");

// aux.promoteFormats(dateFormats, []);

util.print("\n\nMerging formats forward again ...\n");

aux.mergeFormats(dateFormats, dateFormats, []);
aux.mergeFormats(systemResources, systemResources, []);

util.print("\n\nPruning duplicated formats ...\n");

// aux.pruneFormats(dateFormats, dateFormats, []);

util.print("\n\nWriting out final files ...\n");

aux.writeFormats(tmpDirName, "dateformats.json", dateFormats, []);
aux.writeFormats(tmpDirName, "sysres.json", systemResources, []);

process.exit(0);
