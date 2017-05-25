/*
 * gendatefmts2.js - ilib tool to generate the dateformats.json files from
 * the CLDR data files
 *
 * Copyright © 2013-2017, JEDLSoft
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
var path = require('path');

var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;

var aux = require("./datefmts.js");

function usage() {
    console.log("Usage: gendatefmts [-h] CLDR_date_dir locale_data_dir\n" +
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

if (process.argv.length < 3) {
    console.error('Error: not enough arguments');
    usage();
}

if (!fs.existsSync(process.argv[2])) {
    console.error("Could not access CLDR dir " + process.argv[2]);
    usage();
}

cldrDateDirName = process.argv[2] + "cldr-dates-full/";
cldrUnitDirName = process.argv[2] + "cldr-units-full/";
cldrMiscDirName = process.argv[2] + "cldr-misc-full/";
cldrpersianCalDirName = process.argv[2] + "cldr-cal-persian-full/";
cldrethiopicCalDirName = process.argv[2] + "cldr-cal-ethiopic-full/";
localeDirName = process.argv[3];


console.log("gendatefmts - generate date and time formats information files.\n" +
    "Copyright (c) 2013-2017 JEDLSoft\n");

console.log("CLDR dates dir: " + cldrDateDirName);
console.log("CLDR units dir: " + cldrUnitDirName);
console.log("CLDR misc dir: " + cldrMiscDirName);
console.log("CLDR persian dir: " + cldrpersianCalDirName);
console.log("CLDR ethiopic dir: " + cldrethiopicCalDirName);
console.log("locale dir: " + localeDirName);


if (!fs.existsSync(cldrUnitDirName)) {
    console.error("Could not access CLDR dir " + cldrUnitDirName);
    usage();
}
if (!fs.existsSync(cldrMiscDirName)) {
    console.error("Could not access CLDR dir " + cldrMiscDirName);
    usage();
}
if (!fs.existsSync(localeDirName)) {
    console.error("Could not access locale data directory " + localeDirName);
    usage();
}

if (!fs.existsSync(tmpDirName)) {
	makeDirs(tmpDirName);
}

var filename, root, json, suppData, languageData, scripts = {};

var language, region, script;

console.log("Reading existing locale data ...");

var dateFormats = {};
var systemResources = {};

console.log("dateformats.json: ");
aux.walkLocaleDir(dateFormats, /dateformats\.json$/, localeDirName, "");
console.log("sysres.json: ");
aux.walkLocaleDir(systemResources, /sysres\.json$/, localeDirName, "");

console.log("\nMerging formats forward ...");

// root is a special case -- if a calendar names another calendar, then it shares the formats with that
// calendar. Need to copy the formats over in that case, or else the merge will not work correctly.
for (var cal in dateFormats) {
	if (typeof(dateFormats[cal]) === "string" && typeof(dateFormats[dateFormats[cal]]) === "object") {
		dateFormats[cal] = dateFormats[dateFormats[cal]];
	} 
}
aux.mergeFormats(dateFormats, dateFormats, []);
aux.mergeFormats(systemResources, systemResources, []);

console.log("\nReading CLDR data ...\n");

//svar dir = path.join(cldrDirName, "main");
var dateDir = path.join(cldrDateDirName, "main");
var unitDir = path.join(cldrUnitDirName, "main");
var miscDir = path.join(cldrMiscDirName, "main");
var persianDir = path.join(cldrpersianCalDirName, "main");
var ethiopicDir = path.join(cldrethiopicCalDirName, "main");

var list = fs.readdirSync(dateDir); //list will be same regardless package.
// var list = ["as"];

// these locales have the wrong data in CLDR and need to be skipped for now
var skipList = [""];

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
	
	var sourcePath = path.join(dateDir, file);
	var sourceUnitPath = path.join(unitDir, file);
	var sourceMiscPath = path.join(miscDir, file);
	var sourcePersianPath = path.join(persianDir, file);
	var sourceEthiopicPath = path.join(ethiopicDir, file);

	console.log(file);
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
			cal = aux.loadFile(path.join(sourcePersianPath, "ca-persian.json"));
			newFormats = aux.createDateFormats(language, script, region, cal.main[file].dates.calendars);
			// console.log("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
			group = aux.getFormatGroup(dateFormats, localeComponents);
			group.data = merge(group.data || {}, newFormats);
			
			newFormats = aux.createSystemResources(cal.main[file].dates.calendars, language);
			// console.log("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
			group = aux.getFormatGroup(systemResources, localeComponents);
			group.data = merge(group.data || {}, newFormats);
			
		} else if (language === "am") {
			// add the settings for the ethiopic calendar as well
			cal = aux.loadFile(path.join(sourceEthiopicPath, "ca-ethiopic.json"));
			newFormats = aux.createDateFormats(language, script, region, cal.main[file].dates.calendars);
			// console.log("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
			group = aux.getFormatGroup(dateFormats, localeComponents);
			group.data = merge(group.data || {}, newFormats);
			
			newFormats = aux.createSystemResources(cal.main[file].dates.calendars, language);
			// console.log("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
			var group = aux.getFormatGroup(systemResources, localeComponents);
			group.data = merge(group.data || {}, newFormats);
		} else if (language === "th") {
			// format is the same as gregorian, so load and rename the gregorian settings
			cal = aux.loadFile(path.join(sourcePath, "ca-gregorian.json"));
			var cals = cal.main[file].dates.calendars;
			cals.thaisolar = cals.gregorian;
			// console.log("cals is " + JSON.stringify(cals, undefined, 4) + "\n");
			newFormats = aux.createDateFormats(language, script, region, cals);

			group = aux.getFormatGroup(dateFormats, localeComponents);
			group.data = merge(group.data || {}, newFormats);
			
			newFormats = aux.createSystemResources(cals, language);
			// console.log("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
			group = aux.getFormatGroup(systemResources, localeComponents);
			group.data = merge(group.data || {}, newFormats);
		}
		
		// do regular gregorian for all locales
		cal = aux.loadFile(path.join(sourcePath, "ca-gregorian.json"));
		newFormats = aux.createDateFormats(language, script, region, cal.main[file].dates.calendars);
		//console.log("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
		group = aux.getFormatGroup(dateFormats, localeComponents);
		group.data = merge(group.data || {}, newFormats);
		
		newFormats = aux.createSystemResources(cal.main[file].dates.calendars, language);
		//console.log("data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
		group = aux.getFormatGroup(systemResources, localeComponents);
		group.data = merge(group.data || {}, newFormats);

		// date/time duration.
		units = aux.loadFile(path.join(sourceUnitPath, "units.json"));
		newFormats = aux.createDurationResources(sourceUnitPath, sourcePath,units.main[file].units, language, script);
		//console.log("Duration data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
		group = aux.getFormatGroup(systemResources, localeComponents);
		group.data = merge(group.data || {}, newFormats);

		// separator
		seperator = aux.loadFile(path.join(sourceMiscPath, "listPatterns.json"));
		newFormats = aux.createSeperatorResources(sourcePath, seperator.main[file].listPatterns, language);
		//console.log("listPattern data is " + JSON.stringify(newFormats, undefined, 4) + "\n");
		group = aux.getFormatGroup(systemResources, localeComponents);
		group.data = merge(group.data || {}, newFormats);

	}
});

console.log("\nMerging formats forward ...\n");

// Need to merge forward because some of the locales added from CLDR are new and are
// not fully merged yet. Promoting and pruning do not work so well when the tree is
// not fully merged.
///aux.mergeFormats(dateFormats, dateFormats, []);
///aux.mergeFormats(systemResources, systemResources, []);

// console.log("en-CA is " + JSON.stringify(dateFormats.en.CA.data, undefined, 4) + "\n");

console.log("\nPromoting sublocales ...\n");

/*for (var language in dateFormats) {
	if (language !== "und" && language !== "data") {
		aux.promoteFormats(dateFormats[language], language, "dateformats.json");
	}
}
for (var language in systemResources) {
	if (language !== "und" && language !== "data") {
		aux.promoteFormats(systemResources[language], language, "sysres.json");
	}
}*/

console.log("\nPruning duplicated formats ...\n");

// Don't prune the root. Iterate through the first level so we can
// skip the root and only prune the "language" level of the locale 
// spec. (And recursively everything under it of course.)
///aux.pruneFormats(dateFormats);

// console.log("System resources before:\n" + JSON.stringify(systemResources, undefined, 4) + "\n");
// fs.writeFileSync("pre.sysres.json", JSON.stringify(systemResources, undefined, 4), "utf-8");
///aux.pruneFormats(systemResources);
// console.log("System resources after:\n" + JSON.stringify(systemResources, undefined, 4) + "\n");
// fs.writeFileSync("post.sysres.json", JSON.stringify(systemResources, undefined, 4), "utf-8");

console.log("\nWriting out final files ...\n");

console.log("dateformats.json: ");
aux.writeFormats(tmpDirName, "dateformats.json", dateFormats, []);
console.log("\n");
console.log("sysres.json: ");
aux.writeFormats(tmpDirName, "sysres.json", systemResources, []);
console.log("\n");

console.log("Done.");
process.exit(0);
