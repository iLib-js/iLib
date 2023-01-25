/*
 * gendatefmts2.js - ilib tool to generate the dateformats.json files from
 * the CLDR data files
 *
 * Copyright © 2013-2022, JEDLSoft
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
var locales = require('cldr-core/availableLocales.json').availableLocales.full;
var dayPeriods = require('cldr-core/supplemental/dayPeriods.json');
var stringify = require('json-stable-stringify');

var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;
var sortTree = common.sortTree;

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
    },
    "my": {
        "1#1 sec|#{num} sec": "#{num} စက္ကန့်"
    },
    "ig":{
        "1#1 millisecond|#{num} milliseconds": "#{num} millisekọnd",
        "1#1 second|#{num} seconds": "#{num} sekọnd",
        "1#1 minute|#{num} minutes": "#{num} Nkeji",
        "1#1 hour|#{num} hours": "one#{num} elekere|#awa {num}",
        "1#1 day|#{num} days": "one#{num} ụbọchị|#Ụbọchị {num}",
        "1#1 week|#{num} weeks": "one#{num} izu|#Izu {num}",
        "1#1 month|#{num} months": "one#{num} ọnwa|#Ọnwa {num}",
        "1#1 year|#{num} years": "one#{num} afọ|#Afọ {num}"
    },
    "tg": {
        "1#1 millisecond|#{num} milliseconds": "#{num} миллисекундҳо",
        "1#1 second|#{num} seconds": "#{num} сония",
        "1#1 minute|#{num} minutes": "#{num} дақиқа",
        "1#1 hour|#{num} hours": "#{num} соат",
        "1#1 day|#{num} days": "#{num} рӯз",
        "1#1 week|#{num} weeks": "#{num} ҳафта",
        "1#1 month|#{num} months": "#{num} моҳ",
        "1#1 year|#{num} years": "#{num} сол",
        "#{num} ms": "#{num} мил",
        "1#1 sec|#{num} sec": "#{num} сон",
        "1#1 min|#{num} min": "#{num} дақ",
        "1#1 hr|#{num} hrs": "#{num} соа",
        "durationLongDays": "#{num} рӯз",
        "1#1 wk|#{num} wks": "#{num} ҳаф",
        "1#1 mon|#{num} mons": "#{num} моҳ",
        "1#1 yr|#{num} yrs": "#{num} сол",
        "durationMediumMillis": "#{num} ми",
        "1#1 se|#{num} sec": "#{num} со",
        "1#1 mi|#{num} min": "#{num} да",
        "durationMediumHours": "#{num} со",
        "1#1 dy|#{num} dys": "#{num} рӯ",
        "durationMediumWeeks": "#{num} ҳа",
        "1#1 mo|#{num} mos": "#{num} мо",
        "durationMediumYears": "#{num} со",
        "durationShortMillis": "#{num} м",
        "#{num}s": "#{num} с",
        "durationShortMinutes": "#{num} д",
        "#{num}h": "#{num} с",
        "#{num}d": "#{num} р",
        "#{num}w": "#{num} ҳ",
        "durationShortMonths": "#{num} м",
        "#{num}y": "#{num} с"
    },
    "mt": {
        "1#1 second|#{num} seconds": "one#{num} sekonda|few#{num} sekondi|many#{num}-il sekonda|#{num} sekonda",
        "1#1 minute|#{num} minutes": "one#{num} minuta|few#{num} minuti|many#{num}-il minuta|#{num} minuta",
        "1#1 hour|#{num} hours": "one#{num} siegħa|few#{num} sigħat|many#{num}-il siegħa|#{num} siegħa",
        "1#1 day|#{num} days": "one#{num} jum|few#{num} ijiem|many#{num}-il jum|#{num} jum",
        "1#1 week|#{num} weeks": "one#Ġimgħa|few#{num} ġimgħat|many#{num}-il ġimgħa|#{num} ġimgħa",
        "1#1 month|#{num} months": "one#Xahar|few#{num} xhur|many#{num}-il xahar|#{num} xahar",
        "1#1 year|#{num} years": "one#Sena|few#{num} snin|many#{num}-il sena|#{num} sena",
        "1#1 sec|#{num} sec": "one#{num} sek.|few#{num} sek.|many#{num}-il sek.|#{num} sek.",
        "1#1 min|#{num} min": "one#{num} min.|few#{num} min.|many#{num}-il min.|#{num} min.",
        "1#1 hr|#{num} hrs": "one#{num} sie.|few#{num} sig.|many#{num}-il sie.|#{num} sie.",
        "durationLongDays": "one#{num} jum|few#{num} iji.|many#{num}-il jum|#{num} jum",
        "1#1 wk|#{num} wks": "one#Ġim.|few#{num} ġim.|many#{num}-il ġim.|#{num} ġim.",
        "1#1 mon|#{num} mons": "one#Xah.|few#{num} xhu.|many#{num}-il xah.|#{num} xah.",
        "1#1 yr|#{num} yrs": "one#Sen.|few#{num} sni.|many#{num}-il sen.|#{num} sen.",
        "1#1 se|#{num} sec": "one#{num} se.|few#{num} se.|many#{num}-il se.|#{num} se.",
        "1#1 mi|#{num} min": "one#{num} mi.|few#{num} mi.|many#{num}-il mi.|#{num} mi.",
        "durationMediumHours": "one#{num} si.|few#{num} si.|many#{num}-il si.|#{num} si.",
        "1#1 dy|#{num} dys": "one#{num} ju.|few#{num} ij.|many#{num}-il ju.|#{num} ju.",
        "durationMediumWeeks": "one#Ġi.|few#{num} ġi.|many#{num}-il ġi.|#{num} ġi.",
        "1#1 mo|#{num} mos": "one#Xa.|few#{num} xh.|many#{num}-il xa.|#{num} xa.",
        "durationMediumYears": "one#Se.|few#{num} sn.|many#{num}-il se.|#{num} se.",
        "1#1 se|#{num} sec": "one#{num} se.|few#{num} se.|many#{num}-il se.|#{num} se.",
        "1#1 mi|#{num} min": "one#{num} mi.|few#{num} mi.|many#{num}-il mi.|#{num} mi.",
        "durationMediumHours": "one#{num} si.|few#{num} si.|many#{num}-il si.|#{num} si.",
        "1#1 dy|#{num} dys": "one#{num} ju.|few#{num} ij.|many#{num}-il ju.|#{num} ju.",
        "durationMediumWeeks": "one#Ġi.|few#{num} ġi.|many#{num}-il ġi.|#{num} ġi.",
        "1#1 mo|#{num} mos": "one#Xa.|few#{num} xh.|many#{num}-il xa.|#{num} xa.",
        "durationMediumYears": "one#Se.|few#{num} sn.|many#{num}-il se.|#{num} se.",
        "durationShortMinutes": "#{num} m",
        "#{num}h": "#{num} s",
        "#{num}d": "#{num} j",
        "#{num}w": "#{num} g",
        "durationShortMonths": "#{num} x",
        "#{num}y": "#{num} s"
    },
    "fa": {
        "1#1 se|#{num} sec": "one#{num} ث|#{num} ث",
        "1#1 mi|#{num} min": "one#{num} دقیقه|#{num} دقیقه",
        "durationMediumHours": "one#{num} ساعت|#{num} ساعت",
        "#{num}s": "one#{num} ث|#{num} ث",
        "durationShortMinutes": "one#{num} دقیقه|#{num} دقیقه",
        "#{num}h": "one#{num} ساعت|#{num} ساعت"
    },
    "wo": {
        "1#1 second|#{num} seconds": "#{num} saa",
        "1#1 minute|#{num} minutes": "#{num} simili",
        "1#1 hour|#{num} hours": "#{num} waxtu",
        "1#1 day|#{num} days": "#{num} bés",
        "1#1 week|#{num} weeks": "#{num} ayubés",
        "1#1 month|#{num} months": "#{num} weer",
        "1#1 year|#{num} years": "#{num} at",
        "1#1 sec|#{num} sec": "#{num} saa",
        "1#1 min|#{num} min": "#{num} sim",
        "1#1 hr|#{num} hrs": "#{num} wax",
        "durationLongDays": "#{num} bés",
        "1#1 wk|#{num} wks": "#{num} ayu",
        "1#1 mon|#{num} mons": "#{num} wee",
        "1#1 yr|#{num} yrs": "#{num} at",
        "1#1 se|#{num} sec": "#{num} sa",
        "1#1 mi|#{num} min": "#{num} si",
        "durationMediumHours": "#{num} wa",
        "1#1 dy|#{num} dys": "#{num} bé",
        "durationMediumWeeks": "#{num} ay",
        "1#1 mo|#{num} mos": "#{num} we",
        "durationMediumYears": "#{num} at",
        "#{num}s": "#{num} sa",
        "durationShortMinutes": "#{num} si",
        "#{num}h": "#{num} wa",
        "#{num}d": "#{num} b",
        "#{num}w": "#{num} ay",
        "durationShortMonths": "#{num} we",
        "#{num}y": "#{num} at"
    },
    "zu": {
        "1#1 year|#{num} years": "one#{num} unyaka|#{num} iminyaka",
        "1#1 yr|#{num} yrs": "one#{num} nyk|#{num} nyk",
        "1#1 dy|#{num} dys": "one#{num} suku|#{num} suku",
        "durationMediumWeeks": "one#{num} v|#{num} v",
        "1#1 mo|#{num} mos": "one#{num} ng|#{num} ng",
        "durationMediumYears": "one#{num} nk|#{num} nk",
        "#{num}d": "one#{num} suku|#{num} suku",
        "#{num}w": "one#{num} v|#{num} v",
        "durationShortMonths": "one#{num} ng|#{num} ng",
        "#{num}y": "one#{num} nk|#{num} nk"
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
        fs.writeFileSync(path + "/sysres.json", stringify(data, {space: 4}), "utf-8");
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
"Copyright (c) 2013-2022 JEDLSoft\n");

console.log("locale dir: " + localeDirName);


if (!fs.existsSync(localeDirName)) {
    localeDirName = tmpDirName;
    // console.error("Could not access locale data directory " + localeDirName);
    // usage();
}

makeDirs(localeDirName);

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

//these locales have the wrong data in CLDR and need to be skipped for now
var skipList = ["ku"];

locales.forEach(function (file) {
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

    var sourceDir = path.join("cldr-dates-full/main", file);
    var filename = path.join(sourceDir, "ca-gregorian.json");
    try {
        if (language === "fa" || (language === "ps" && region !== "PK")) {
            // add the settings for the persian calendar as well
            filename = path.join("cldr-cal-persian-full/main", file, "ca-persian.json");
            cal = require(filename);
            newFormats = aux.createDateFormats(language, script, region, cal.main[file].dates.calendars);
            // console.log("data is " + JSON.stringify(newFormats, undefined, 4) );
            group = aux.getFormatGroup(dateFormats, localeComponents);
            group.data = merge(group.data || {}, newFormats);

            newFormats = aux.createSystemResources(cal.main[file].dates.calendars, language, script);
            // console.log("data is " + JSON.stringify(newFormats, undefined, 4) );
            group = aux.getFormatGroup(systemResources, localeComponents);
            group.data = merge(group.data || {}, newFormats);

        } else if (language === "am") {
            // add the settings for the ethiopic calendar as well
            filename = path.join("cldr-cal-ethiopic-full/main", file, "ca-ethiopic.json");
            cal = require(filename);
            newFormats = aux.createDateFormats(language, script, region, cal.main[file].dates.calendars);
            // console.log("data is " + JSON.stringify(newFormats, undefined, 4) );
            group = aux.getFormatGroup(dateFormats, localeComponents);
            group.data = merge(group.data || {}, newFormats);

            newFormats = aux.createSystemResources(cal.main[file].dates.calendars, language, script);
            // console.log("data is " + JSON.stringify(newFormats, undefined, 4) );
            var group = aux.getFormatGroup(systemResources, localeComponents);
            group.data = merge(group.data || {}, newFormats);
        } else if (language === "th") {
            // format is the same as gregorian, so load and rename the gregorian settings
            cal = require(filename);
            var cals = cal.main[file].dates.calendars;
            cals.thaisolar = cals.gregorian;
            // console.log("cals is " + JSON.stringify(cals, undefined, 4) );
            newFormats = aux.createDateFormats(language, script, region, cals);

            group = aux.getFormatGroup(dateFormats, localeComponents);
            group.data = merge(group.data || {}, newFormats);

            newFormats = aux.createSystemResources(cals, language, script);
            // console.log("data is " + JSON.stringify(newFormats, undefined, 4) );
            group = aux.getFormatGroup(systemResources, localeComponents);
            group.data = merge(group.data || {}, newFormats);
        }

        // do regular gregorian for all locales
        filename = path.join(sourceDir, "ca-gregorian.json");
        cal = require(filename);
        newFormats = aux.createDateFormats(language, script, region, cal.main[file].dates.calendars);
        //console.log("data is " + JSON.stringify(newFormats, undefined, 4) );
        group = aux.getFormatGroup(dateFormats, localeComponents);
        group.data = merge(group.data || {}, newFormats);

        newFormats = aux.createSystemResources(cal.main[file].dates.calendars, language, script);
        //console.log("data is " + JSON.stringify(newFormats, undefined, 4) );
        group = aux.getFormatGroup(systemResources, localeComponents);
        group.data = merge(group.data || {}, newFormats);

        // date/time duration.
        filename = path.join("cldr-units-full/main", locale.toString(), "units.json")
        units = require(filename);
        newFormats = aux.createDurationResources(units.main[file].units, language, script);
        //console.log("Duration data is " + JSON.stringify(newFormats, undefined, 4) );
        group = aux.getFormatGroup(systemResources, localeComponents);
        group.data = merge(group.data || {}, newFormats);

        // relative time format
        filename = path.join(sourceDir, "dateFields.json");
        dateFields = require(filename);
        newFormats = aux.createRelativeFormatResources(dateFields.main[file].dates.fields, language, script);
        //console.log("Relative format data is " + JSON.stringify(newFormats, undefined, 4) );
        group = aux.getFormatGroup(systemResources, localeComponents);
        group.data = merge(group.data || {}, newFormats);

        // separator
        filename = path.join("cldr-misc-full/main", locale.toString(), "listPatterns.json");
        seperator = require(filename);
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
        if (newFormats) {
            group = aux.getFormatGroup(dateFormats, localeComponents);
            group.data.dayPeriods = newFormats.periods.dayPeriods;
            group = aux.getFormatGroup(systemResources, localeComponents);
            group.data = merge(group.data || {}, newFormats.sysres);
        }
    } catch (e) {
        console.log("Could not find the file " + filename + " ... skipping.");
    }
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
mergeAndPrune(dateFormats);

console.log("\nWriting out final files ...");

console.log("dateformats.json: ");
// sortTree(dateFormats);
aux.writeFormats(localeDirName, "dateformats.json", dateFormats, []);
console.log("");
console.log("sysres.json: ");
mergeAndPrune(systemResources);
// sortTree(systemResources);
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
