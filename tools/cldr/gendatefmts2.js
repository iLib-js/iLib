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

util.print("dateformats.json: ");
aux.walkLocaleDir(dateFormats, /dateformats\.json$/, localeDirName, "");
util.print("\n\n");
util.print("sysres.json: ");
aux.walkLocaleDir(systemResources, /sysres\.json$/, localeDirName, "");

util.print("\n\nMerging formats forward ...\n");

// root is a special case -- if a calendar names another calendar, then it shares the formats with that
// calendar. Need to copy the formats over in that case, or else the merge will not work correctly.
for (var cal in dateFormats) {
	if (typeof(dateFormats[cal]) === "string" && typeof(dateFormats[dateFormats[cal]]) === "object") {
		dateFormats[cal] = dateFormats[dateFormats[cal]];
	} 
}
aux.mergeFormats(dateFormats, dateFormats, []);
aux.mergeFormats(systemResources, systemResources, []);

// util.print("en-CA before cldr and merge is " + JSON.stringify(dateFormats.en.CA.data, undefined, 4) + "\n");

util.print("\n\nReading CLDR data ...\n");

var dir = path.join(cldrDirName, "main");
var list = fs.readdirSync(dir);
// var list = ["as"];

// these locales have the wrong data in CLDR and need to be skipped for now
var skipList = ["en-CA"];

list.forEach(function (file) {
	var locale = file ? new Locale(file) : undefined;
	if (locale.getVariant()) {
		// ignore locales with variants for now
		return;
	}
	
	if (skipList.indexOf(file) > -1) {
		// skip these, as the CLDR data has problems
		return;
	}
	
	var sourcePath = path.join(dir, file);
	util.print(file + " ");
	var stat = fs.statSync(sourcePath);
	if (stat && stat.isDirectory()) {
		var localeComponents = [];
		
		var language = locale.getLanguage(),
			script = locale.getScript(),
			region = locale.getRegion();
		var cal, newFormats, group;
		var units;
		
		if (language) localeComponents.push(language);
		if (script) localeComponents.push(script);
		if (region) localeComponents.push(region);
		
		if (language === "fa") {
			// add the settings for the persian calendar as well
			cal = aux.loadFile(path.join(sourcePath, "ca-persian.json"));
			newFormats = aux.createDateFormats(language, script, cal.main[file].dates.calendars);
			// util.print("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
			group = aux.getFormatGroup(dateFormats, localeComponents);
			group.data = merge(group.data || {}, newFormats);
			
			newFormats = aux.createSystemResources(cal.main[file].dates.calendars, language);
			// util.print("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
			group = aux.getFormatGroup(systemResources, localeComponents);
			group.data = merge(group.data || {}, newFormats);
			
		} else if (language === "am") {
			// add the settings for the ethiopic calendar as well
			cal = aux.loadFile(path.join(sourcePath, "ca-ethiopic.json"));
			newFormats = aux.createDateFormats(language, script, cal.main[file].dates.calendars);
			// util.print("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
			group = aux.getFormatGroup(dateFormats, localeComponents);
			group.data = merge(group.data || {}, newFormats);
			
			newFormats = aux.createSystemResources(cal.main[file].dates.calendars, language);
			// util.print("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
			var group = aux.getFormatGroup(systemResources, localeComponents);
			group.data = merge(group.data || {}, newFormats);
		} else if (language === "th") {
			// format is the same as gregorian, so load and rename the gregorian settings
			cal = aux.loadFile(path.join(sourcePath, "ca-gregorian.json"));
			var cals = cal.main[file].dates.calendars;
			cals.thaisolar = cals.gregorian;
			// util.print("cals is " + JSON.stringify(cals, undefined, 4) + "\n");
			newFormats = aux.createDateFormats(language, script, cals);

			group = aux.getFormatGroup(dateFormats, localeComponents);
			group.data = merge(group.data || {}, newFormats);
			
			newFormats = aux.createSystemResources(cals, language);
			// util.print("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
			group = aux.getFormatGroup(systemResources, localeComponents);
			group.data = merge(group.data || {}, newFormats);
		}
		
		// do regular gregorian for all locales
		cal = aux.loadFile(path.join(sourcePath, "ca-gregorian.json"));
		newFormats = aux.createDateFormats(language, script, cal.main[file].dates.calendars);
		//util.print("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
		group = aux.getFormatGroup(dateFormats, localeComponents);
		group.data = merge(group.data || {}, newFormats);
		
		newFormats = aux.createSystemResources(cal.main[file].dates.calendars, language);
		//util.print("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
		group = aux.getFormatGroup(systemResources, localeComponents);
		group.data = merge(group.data || {}, newFormats);

		// date/time duration.
		units = aux.loadFile(path.join(sourcePath, "units.json"));
		newFormats = aux.createDurationResources(sourcePath, units.main[file].units, language, script);
		//util.print("Duration data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
		group = aux.getFormatGroup(systemResources, localeComponents);
		group.data = merge(group.data || {}, newFormats);

		// separator
		seperator = aux.loadFile(path.join(sourcePath, "listPatterns.json"));
		newFormats = aux.createSeperatorResources(sourcePath, seperator.main[file].listPatterns, language);
		//util.print("listPattern data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
		group = aux.getFormatGroup(systemResources, localeComponents);
		group.data = merge(group.data || {}, newFormats);

	}
});

util.print("\n\nMerging formats forward ...\n");

// Need to merge forward because some of the locales added from CLDR are new and are
// not fully merged yet. Promoting and pruning do not work so well when the tree is
// not fully merged.
aux.mergeFormats(dateFormats, dateFormats, []);
aux.mergeFormats(systemResources, systemResources, []);

// util.print("en-CA is " + JSON.stringify(dateFormats.en.CA.data, undefined, 4) + "\n");

util.print("\n\nPromoting sublocales ...\n");

for (var language in dateFormats) {
	if (language !== "und" && language !== "data") {
		aux.promoteFormats(dateFormats[language], language, "dateformats.json");
	}
}
for (var language in systemResources) {
	if (language !== "und" && language !== "data") {
		aux.promoteFormats(systemResources[language], language, "sysres.json");
	}
}

util.print("\n\nPruning duplicated formats ...\n");

// Don't prune the root. Iterate through the first level so we can
// skip the root and only prune the "language" level of the locale 
// spec. (And recursively everything under it of course.)
aux.pruneFormats(dateFormats);

// util.print("System resources before:\n" + JSON.stringify(systemResources, undefined, 4) + "\n");
// fs.writeFileSync("pre.sysres.json", JSON.stringify(systemResources, undefined, 4), "utf-8");
aux.pruneFormats(systemResources);
// util.print("System resources after:\n" + JSON.stringify(systemResources, undefined, 4) + "\n");
// fs.writeFileSync("post.sysres.json", JSON.stringify(systemResources, undefined, 4), "utf-8");

util.print("\n\nWriting out final files ...\n");

util.print("dateformats.json: ");
aux.writeFormats(tmpDirName, "dateformats.json", dateFormats, []);
util.print("\n\n");
util.print("sysres.json: ");
aux.writeFormats(tmpDirName, "sysres.json", systemResources, []);
util.print("\n");

util.print("Done.");
process.exit(0);
