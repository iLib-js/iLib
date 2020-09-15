/*
 * gendatefmts2.js - ilib tool to generate the dateformats.json files from
 * the CLDR data files
 *
 * Copyright © 2013-2020, JEDLSoft
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
var cldr = require('cldr-data');
var dayPeriods = require('cldr-data/supplemental/dayPeriods.json');

var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;

var hardCodeData = {
    "zh": {
        "azh0": "凌晨",
        "azh1": "早上",
        "azh2": "上午",
        "azh3": "正午",
        "azh4": "下午",
        "azh5": "傍晚",
        "azh6": "晚上",
        "ordinalChoice": "#{num}天"
    },
    "am": {
      "a0-ethiopic": "ጥዋት",
      "a1-ethiopic": "ቀትር",
      "a2-ethiopic": "ከሰዓት",
      "a3-ethiopic": "ከምሽቱ",
      "a4-ethiopic": "ከሌሊቱ",
    },
    "de": {
        "ordinalChoice": "#{num}."
    }
}

var aux = require("./datefmts.js");

function usage() {
    console.log("Usage: gendatefmts [-h] [ locale_data_dir ]\n" +
        "Generate date formats information files.\n" +
        "-h or --help\n" +
        "  this help\n" +
        "locale_data_dir\n" +
    "  the top level of the ilib locale data directory");
    process.exit(1);
}

function calcLocalePath(language, script, region, filename) {
    var path = localeDirName + "/";
    if (language) {
        path += language + "/";
    }
    if (script) {
        path += script + "/";
    }
    if (region) {
        path += region + "/";
    }
    path += filename;
    return path;
}

function anyProperties(data) {
    var count = 0;
    for (var prop in data) {
        if (prop && data[prop]) {
            count++;
        }
        if (count > 1) {
            return true;
        }
    }
    return false;
}

function writeSystemResources(language, script, region, data) {
    var path = calcLocalePath(language, script, region, "");
    // if (data && data.generated) {
    if (anyProperties(data)) {
        console.log("Writing " + path );
        makeDirs(path);
        fs.writeFileSync(path + "/sysres.json", JSON.stringify(data, true, 4), "utf-8");
    } else {
        console.log("Skipping empty " + path );
    }
    // } else {
    // console.log("Skipping existing " + path );
    // }
}

var localeDirName;
var tmpDirName = "./tmp";
process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

localeDirName = process.argv[2];


console.log("gendatefmts2 - generate date and time formats information files.\n" +
"Copyright (c) 2013-2020 JEDLSoft\n");

console.log("locale dir: " + localeDirName);


if (!fs.existsSync(localeDirName)) {
    localeDirName = tmpDirName;
    // console.error("Could not access locale data directory " + localeDirName);
    // usage();
}

makeDirs(localeDirName);

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

//root is a special case -- if a calendar names another calendar, then it shares the formats with that
//calendar. Need to copy the formats over in that case, or else the merge will not work correctly.
for (var cal in dateFormats) {
    if (typeof(dateFormats[cal]) === "string" && typeof(dateFormats[dateFormats[cal]]) === "object") {
        dateFormats[cal] = dateFormats[dateFormats[cal]];
    }
}
aux.mergeFormats(dateFormats, dateFormats, []);
aux.mergeFormats(systemResources, systemResources, []);

console.log("\nReading CLDR data ...");

var list = cldr.availableLocales;
// uncomment for debugging:
// var list = ["as"];

//these locales have the wrong data in CLDR and need to be skipped for now
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

    console.log(file);
    var localeComponents = [];

    var language = locale.getLanguage(),
    script = locale.getScript(),
    region = locale.getRegion();
    var cal, newFormats, group;
    var units;

    if (language) localeComponents.push(language);
    if (script) localeComponents.push(script);
    if (region) localeComponents.push(region);

    var sourceDir = path.join("cldr-data/main", file);

    if (language === "fa") {
        // add the settings for the persian calendar as well
        cal = require(path.join(sourceDir, "ca-persian.json"));
        newFormats = aux.createDateFormats(language, script, region, cal.main[file].dates.calendars);
        // console.log("data is " + JSON.stringify(newFormats, undefined, 4) );
        group = aux.getFormatGroup(dateFormats, localeComponents);
        group.data = merge(group.data || {}, newFormats);

        newFormats = aux.createSystemResources(cal.main[file].dates.calendars, language);
        // console.log("data is " + JSON.stringify(newFormats, undefined, 4) );
        group = aux.getFormatGroup(systemResources, localeComponents);
        group.data = merge(group.data || {}, newFormats);

    } else if (language === "am") {
        // add the settings for the ethiopic calendar as well
        cal = require(path.join(sourceDir, "ca-ethiopic.json"));
        newFormats = aux.createDateFormats(language, script, region, cal.main[file].dates.calendars);
        // console.log("data is " + JSON.stringify(newFormats, undefined, 4) );
        group = aux.getFormatGroup(dateFormats, localeComponents);
        group.data = merge(group.data || {}, newFormats);

        newFormats = aux.createSystemResources(cal.main[file].dates.calendars, language);
        // console.log("data is " + JSON.stringify(newFormats, undefined, 4) );
        var group = aux.getFormatGroup(systemResources, localeComponents);
        group.data = merge(group.data || {}, newFormats);
    } else if (language === "th") {
        // format is the same as gregorian, so load and rename the gregorian settings
        cal = require(path.join(sourceDir, "ca-gregorian.json"));
        var cals = cal.main[file].dates.calendars;
        cals.thaisolar = cals.gregorian;
        // console.log("cals is " + JSON.stringify(cals, undefined, 4) );
        newFormats = aux.createDateFormats(language, script, region, cals);

        group = aux.getFormatGroup(dateFormats, localeComponents);
        group.data = merge(group.data || {}, newFormats);

        newFormats = aux.createSystemResources(cals, language);
        // console.log("data is " + JSON.stringify(newFormats, undefined, 4) );
        group = aux.getFormatGroup(systemResources, localeComponents);
        group.data = merge(group.data || {}, newFormats);
    }

    // do regular gregorian for all locales
    cal = require(path.join(sourceDir, "ca-gregorian.json"));
    newFormats = aux.createDateFormats(language, script, region, cal.main[file].dates.calendars);
    //console.log("data is " + JSON.stringify(newFormats, undefined, 4) );
    group = aux.getFormatGroup(dateFormats, localeComponents);
    group.data = merge(group.data || {}, newFormats);

    newFormats = aux.createSystemResources(cal.main[file].dates.calendars, language);
    //console.log("data is " + JSON.stringify(newFormats, undefined, 4) );
    group = aux.getFormatGroup(systemResources, localeComponents);
    group.data = merge(group.data || {}, newFormats);

    // date/time duration.
    units = require(path.join(sourceDir, "units.json"));
    newFormats = aux.createDurationResources(units.main[file].units, language, script);
    //console.log("Duration data is " + JSON.stringify(newFormats, undefined, 4) );
    group = aux.getFormatGroup(systemResources, localeComponents);
    group.data = merge(group.data || {}, newFormats);

    // relative time format
    dateFields = require(path.join(sourceDir, "dateFields.json"));
    newFormats = aux.createRelativeFormatResources(dateFields.main[file].dates.fields, language, script);
    //console.log("Relative format data is " + JSON.stringify(newFormats, undefined, 4) );
    group = aux.getFormatGroup(systemResources, localeComponents);
    group.data = merge(group.data || {}, newFormats);

    // separator
    seperator = require(path.join(sourceDir, "listPatterns.json"));
    newFormats = aux.createSeperatorResources(seperator.main[file].listPatterns, language);
    //console.log("listPattern data is " + JSON.stringify(newFormats, undefined, 4) );
    group = aux.getFormatGroup(systemResources, localeComponents);
    group.data = merge(group.data || {}, newFormats);

    if (hardCodeData.hasOwnProperty(language)) {
        group.data = merge(group.data || {}, hardCodeData[language]);
    }

    // day periods
    var periods = dayPeriods.supplemental.dayPeriodRuleSet;
    newFormats = aux.createDayPeriods(periods, cal.main[file].dates.calendars, language);
    group = aux.getFormatGroup(dateFormats, localeComponents);
    group.data = merge(group.data || {}, newFormats.periods);
    group = aux.getFormatGroup(systemResources, localeComponents);
    group.data = merge(group.data || {}, newFormats.sysres);
});

console.log("\nMerging formats forward ...");

//Need to merge forward because some of the locales added from CLDR are new and are
//not fully merged yet. Promoting and pruning do not work so well when the tree is
//not fully merged.
///aux.mergeFormats(dateFormats, dateFormats, []);
///aux.mergeFormats(systemResources, systemResources, []);

//console.log("en-CA is " + JSON.stringify(dateFormats.en.CA.data, undefined, 4) );

console.log("\nPromoting sublocales ...");

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

console.log("\nPruning duplicated formats ...");

//Don't prune the root. Iterate through the first level so we can
//skip the root and only prune the "language" level of the locale
//spec. (And recursively everything under it of course.)
///aux.pruneFormats(dateFormats);

//console.log("System resources before:\n" + JSON.stringify(systemResources, undefined, 4) );
//fs.writeFileSync("pre.sysres.json", JSON.stringify(systemResources, undefined, 4), "utf-8");
///aux.pruneFormats(systemResources);
//console.log("System resources after:\n" + JSON.stringify(systemResources, undefined, 4) );
//fs.writeFileSync("post.sysres.json", JSON.stringify(systemResources, undefined, 4), "utf-8");

console.log("\nWriting out final files ...");

console.log("dateformats.json: ");
aux.writeFormats(localeDirName, "dateformats.json", dateFormats, []);
console.log("");
console.log("sysres.json: ");
mergeAndPrune(systemResources);
for (language in systemResources) {
    if (language && systemResources[language] && language !== 'data' && language !== 'merged') {
        for (var subpart in systemResources[language]) {
            if (subpart && systemResources[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
                if (Locale.isScriptCode(subpart)) {
                    script = subpart;
                    for (region in systemResources[language][script]) {
                        if (region && systemResources[language][script][region] && region !== 'data' && region !== 'merged') {
                            delete systemResources[language][script][region].data['in {duration}'];
                            delete systemResources[language][script][region].data['{duration} ago'];
                            writeSystemResources(language, script, region, systemResources[language][script][region].data);
                        }
                    }
                    delete systemResources[language][script].data['in {duration}'];
                    delete systemResources[language][script].data['{duration} ago'];
                    writeSystemResources(language, script, undefined, systemResources[language][script].data);
                } else {
                    delete systemResources[language][subpart].data['in {duration}'];
                    delete systemResources[language][subpart].data['{duration} ago'];
                    writeSystemResources(language, undefined, subpart, systemResources[language][subpart].data);
                }
            }
        }
        delete systemResources[language].data['in {duration}'];
        delete systemResources[language].data['{duration} ago'];
        writeSystemResources(language, undefined, undefined, systemResources[language].data);
    }
}
writeSystemResources(undefined, undefined, undefined, systemResources.data);
//aux.writeFormats(localeDirName, "sysres.json", systemResources, []);
console.log("");

console.log("Done.");
