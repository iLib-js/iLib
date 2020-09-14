/*#
 * genclockprefs.js - ilib tool to generate the  clock json fragments from
 * the CLDR data files
 *
 * Copyright © 2013-2018, 2020 LGE
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
/*#
 * This code is intended to be run under node.js
 */
var fs = require('fs');
var cldr = require("cldr-data");

var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;
var path = require("path");

function usage() {
    console.log("Usage: genclockprefs [-h] locale_data_dir\n" +
        "Generate clock preferences information files.\n\n" +
        "-h or --help\n" +
        "  this help\n" +
        "locale_data_dir\n" +
    "  the top level of the ilib locale data directory");
    process.exit(1);
}
var cldrDirName;
var localeDirName;
process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});
localeDirName = process.argv[2] || "tmp";

var locales = cldr.availableLocales;

console.log("genclockprefs - generate clock preferences information files.\n" +
"Copyright (c) 2013-2018 LGE\n");
console.log("locale dir: " + localeDirName);

if (!fs.existsSync(localeDirName)) {
    common.makeDirs(localeDirName);
}
var languageData;

function loadFile(pathname) {
    var ret = undefined;
    if (fs.existsSync(pathname)) {
        var json = fs.readFileSync(pathname, "utf-8");
        ret = JSON.parse(json);
        //console.log("pathname is :"+pathname);#
    }
    return ret;
}

function calcLocalePath(language, script, region, filename) {
    var pathname = localeDirName;
    if (language) {
        pathname = path.join(pathname, language);
    }
    if (script) {
        pathname = path.join(pathname, script);
    }
    if (region) {
        pathname = path.join(pathname, region);
    }
    pathname = path.join(pathname, filename);
    return pathname;
}

var localeData = {};

function setLocaleData(data, locale) {
    try {
        if (locale.getScript()) {
            if (locale.getRegion()) {
                if (!localeData[locale.getLanguage()]) {
                    localeData[locale.getLanguage()] = {};
                }
                if (!localeData[locale.getLanguage()][locale.getScript()]) {
                    localeData[locale.getLanguage()][locale.getScript()] = {};
                }
                if (!localeData[locale.getLanguage()][locale.getScript()][locale.getRegion()]) {
                    localeData[locale.getLanguage()][locale.getScript()][locale.getRegion()] = {};
                }
                localeData[locale.getLanguage()][locale.getScript()][locale.getRegion()].data = data;
            }
        } else if (locale.getRegion()) {
            if (!localeData[locale.getLanguage()]) {
                localeData[locale.getLanguage()] = {};
            }
            if (!localeData[locale.getLanguage()][locale.getRegion()]) {
                localeData[locale.getLanguage()][locale.getRegion()] = {};
            }
            localeData[locale.getLanguage()][locale.getRegion()].data = data;
        } else if (locale.getLanguage()) {
            if (!localeData[locale.getLanguage()]) {
                localeData[locale.getLanguage()] = {};
            }
            localeData[locale.getLanguage()].data = data;
        } else {
            // root locale#
            localeData.data = data;
        }
    } catch (e) {
        return undefined;
    }
    return data;
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

function writeClockPrefs(language, script, region, data) {
    var pathname = calcLocalePath(language, script, region, "");
    //console.log("data to be written into jf files" + pathname + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(data));
    if (data.generated) {
        if (anyProperties(data)) {
            console.log("Writing " + pathname);
            makeDirs(pathname);
            //console.log("data to be written into jf files" + pathname + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringifyta["clock"]));#
            if (typeof (data["clock"]) != 'undefined') {
                data.generated = true;
                makeDirs(pathname);
                fs.writeFileSync(path.join(pathname, "clock.jf"), JSON.stringify(data, true, 4), "utf-8");
            }
        } else {
            console.log("Skipping empty " + pathname);
        }
    } else {
        console.log("Skipping existing " + pathname);
    }
}

function getClockPrefs(locale) {
    clockprefs = {
        generated: true
    };
    // always read the gregorian calendar settings to make it easy, because none of the locales use different
    // time formats depending on the calendar
    var greg, timeformat;
    if (locale.substring(0,2) === "ku") {
        greg = require(path.join("cldr-data/main", "ckb", "ca-gregorian.json"));
        timeformat = greg.main["ckb"].dates.calendars.gregorian.timeFormats.short;
    } else {
        greg = require(path.join("cldr-data/main", locale, "ca-gregorian.json"));
        timeformat = greg.main[locale].dates.calendars.gregorian.timeFormats.short;
    }

    if (timeformat.indexOf("H") != -1) {
        clockprefs["clock"] = "24";
    } else if (timeformat.indexOf("h") != -1) {
        clockprefs["clock"] = "12";
    } else {
        console.log("could not find default clock preference for locale " + locale);
    }
    //console.log("time format is :"+JSON.stringify(timeformat));
    //console.log("clock preference is :"+JSON.stringify(clockprefs));
    return clockprefs;
}

var language, region, script, files;

console.log("Reading locale data into memory...");
for (var i = 0; i < locales.length; i++) {
    var pref = getClockPrefs(locales[i]);
    if (locales[i] === "root") {
        // special case because "root" is not a valid locale specifier#
        localeData.data = pref;
    } else {
        var l = new Locale(locales[i]);
        setLocaleData(pref, l);
    }
}

console.log("Merging and pruning locale data...");
mergeAndPrune(localeData);

for (language in localeData) {
    if (language && localeData[language] && language !== 'data' && language !== 'merged') {
        for (var subpart in localeData[language]) {
            if (subpart && localeData[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
                if (Locale.isScriptCode(subpart)) {
                    script = subpart;
                    for (region in localeData[language][script]) {
                        if (region && localeData[language][script][region] && region !== 'data' && region !== 'merged') {
                            writeClockPrefs(language, script, region, localeData[language][script][region].data);
                        }
                    }
                    writeClockPrefs(language, script, undefined, localeData[language][script].data);
                } else {
                    writeClockPrefs(language, undefined, subpart, localeData[language][subpart].data);
                }
            }
        }
        writeClockPrefs(language, undefined, undefined, localeData[language].data);
    }
}
writeClockPrefs(undefined, undefined, undefined, localeData.data);
process.exit(0);
