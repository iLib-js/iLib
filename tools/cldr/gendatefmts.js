/*
 * gendatefmts.js - ilib tool to generate the dateformats.json files and the date json fragments from
 * the CLDR data files
 *
 * Copyright © 2013, 2020 JEDLSoft
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
var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;

function usage() {
    console.log("Usage: gendatefmts [-h] CLDR_json_dir locale_data_dir\n" +
        "Generate date formats information files.\n" +
        "-h or --help\n" +
        "  this help\n" +
        "CLDR_json_dir\n" +
        "  the top level of the Unicode CLDR distribution in json format\n" +
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
if (process.argv.length < 4) {
    console.error('Error: not enough arguments');
    usage();
}
cldrDirName = process.argv[2];
localeDirName = process.argv[3];
console.log("gendatefmts - generate date and time formats information files.\n" +
    "Copyright (c) 2013 JEDLSoft");
console.log("CLDR dir: " + cldrDirName);
console.log("locale dir: " + localeDirName);
fs.exists(cldrDirName, function (exists) {
    if (!exists) {
        console.error("Could not access CLDR dir " + cldrDirName);
        usage();
    }
});
fs.exists(localeDirName, function (exists) {
    if (!exists) {
        console.error("Could not access locale data directory " + localeDirName);
        usage();
    }
});
var filename, root, json, suppData, languageData, scripts = {};
try {
    filename = cldrDirName + "/main/en.json";
    json = fs.readFileSync(filename, "utf-8");
    root = JSON.parse(json);
    filename = cldrDirName + "/supplemental/supplementalData.json";
    json = fs.readFileSync(filename, "utf-8");
    suppData = JSON.parse(json);
    languageData = suppData.languageData;
} catch (e) {
    console.log("Error: Could not load file " + filename);
    process.exit(2);
}
// get the information about scripts if necessary
for (var locale in languageData) {
    if (locale && languageData[locale]) {

        //console.log("languageData[locale][@scripts] === " + JSON.stringify(languageData[locale]["@scripts"]));
        if (typeof (languageData[locale]["@scripts"]) === 'string') {
            var language = (locale.length <= 3) ? locale : locale.split(/-/)[0];

            if (typeof (scripts[language]) === 'undefined') {
                scripts[language] = [];
            }

            var newLangs = languageData[locale]["@scripts"].split(/ /g);
            if (locale.length <= 3) {
                // console.log("language " + language + " prepending " + JSON.stringify(newLangs));
                scripts[language] = newLangs.concat(scripts[language]);

            } else {
                // console.log("language " + language + " appending " + JSON.stringify(newLangs));
                scripts[language] = scripts[language].concat(newLangs);
            }

        }
    }
}

function loadFile(path) {
    var ret = undefined;
    if (fs.existsSync(path)) {
        json = fs.readFileSync(path, "utf-8");
        ret = JSON.parse(json);
    }
    return ret;
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

function checkifHandwritten(language, script, region, filename) {

    if (language) {
        if (language == 'en') {
            return false;
        }
        if (script && region) {

            var file = localeDirName + "/" + language + "/" + script + "/" + filename;
            var obj = loadFile(file);

            if (typeof (obj) !== 'undefined') {
                if (typeof (obj.generated) === 'undefined' || obj.generated === false) {
                    return false;
                }
            } else {
                file = localeDirName + "/" + language + "/" + filename;

                obj = loadFile(file);

                if (typeof (obj) !== 'undefined') {

                    if (typeof (obj.generated) === 'undefined' || obj.generated === false) {

                        return false;
                    }
                }

            }
        } else {
            if (script || region) {

                file = localeDirName + "/" + language + "/" + filename;

                obj = loadFile(file);
                if (typeof (obj) !== 'undefined') {
                    if (typeof (obj.generated) === 'undefined' || obj.generated === false) {
                        return false;
                    }
                }
            }
        }

    }
    return true;
}

function loadFileNonGenerated(language, script, region, filename) {
    var path = calcLocalePath(language, script, region, filename);
    var obj = loadFile(path);
    var flag;
    if (typeof (language) != 'undefined') {

        flag = checkifHandwritten(language, script, region, filename);

    }

    if (typeof (obj) !== 'undefined' && (typeof (obj.generated) === 'undefined' || obj.generated === false)) {
        // only return non-generated files
        return obj;
    }

    // else if (typeof (obj) !== 'undefined' && obj.generated) {
    // if (typeof (obj) !== 'undefined') {
    //var flag= checkifHandwritten(language, script, region, filename) ;
    //if (typeof (obj) !== 'undefined') {
    if (typeof (flag) == 'undefined' || flag == false) {
        var obj = {};
        obj.generated = false;
        return obj;
    }
    //}
    //}
    return undefined;
}
var localeData = {};

function getLocaleData(path, language, script, region) {
    var data;
    try {
        filename = cldrDirName + "/main/" + path;
        data = loadFile(filename);
        console.log(language + " ");
        if (script) {
            if (region) {
                if (!localeData[language]) {
                    localeData[language] = {};
                }
                if (!localeData[language][script]) {
                    localeData[language][script] = {};
                }
                if (!localeData[language][script][region]) {
                    localeData[language][script][region] = {};
                }
                localeData[language][script][region].data = data;
            }
        } else if (region) {
            if (!localeData[language]) {
                localeData[language] = {};
            }
            if (!localeData[language][region]) {
                localeData[language][region] = {};
            }
            localeData[language][region].data = data;
        } else if (language) {
            if (!localeData[language]) {
                localeData[language] = {};
            }
            localeData[language].data = data;
        } else {
            // root locale
            localeData.data = data;
        }
    } catch (e) {
        return undefined;
    }
    return data;
}

function getMergedData(language, script, region) {
    var ret = localeData.data; // root
    if (language) {
        ret = merge(ret, localeData[language].data);
        if (script) {
            ret = merge(ret, localeData[language][script].data);
            if (region) {
                ret = merge(ret, localeData[language][script][region].data);
            }
        } else if (region) {
            ret = merge(ret, localeData[language][region].data);
        }
    }
    return ret;
}

function getDefaultScript(language) {
    return scripts[language] ? scripts[language][0] : undefined;
}

function initialCap(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
}

function initialLower(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
}

function leaveSame(str) {
    return str;
}

function getSystemResources(language, script, region, data) {
    // if it is already there and non-generated, return it
    //console.log("language is " + language);
    var sysres = loadFileNonGenerated(language, script, region, "sysres.json");
    if (sysres && !sysres.generated) {
        console.log("\nLoaded existing resources from " + calcLocalePath(language, script, region, "sysres.json"));
        sysres.generated = false;
        return sysres;
    }
    // else generate a new one
    sysres = {
        generated: true
    };
    // from https://meta.wikimedia.org/wiki/Capitalization_of_Wiktionary_pages#Capitalization_of_month_names
    var capitalizedMonthLocales = {
        "af": 1,
        "br": 1,
        "cy": 1,
        "el": 1,
        "en": 1,
        "de": 1,
        "bar": 1,
        "gsw": 1,
        "ksh": 1,
        "lb": 1,
        "nds": 1,
        "pfl": 1,
        "hz": 1,
        "id": 1,
        "la": 1,
        "ms": 1,
        "pt": 1,
        "ve": 1,
        "xh": 1,
        "zu": 1,
    };
    var lowercasedMonthLocales = {
        "bs": 1,
        "bg": 1,
        "hr": 1,
        "ca": 1,
        "cs": 1,
        "da": 1,
        "dsb": 1,
        "eo": 1,
        "es": 1,
        "et": 1,
        "fi": 1,
        "fr": 1,
        "hr": 1,
        "hsb": 1,
        "hu": 1,
        "hy": 1,
        "is": 1,
        "it": 1,
        "li": 1,
        "lv": 1,
        "lt": 1,
        "mk": 1,
        "no": 1,
        "nn": 1,
        "nl": 1,
        "pl": 1,
        "BR": 1,
        "ro": 1,
        "ru": 1,
        "os": 1,
        "sr": 1,
        "sk": 1,
        "sl": 1,
        "sv": 1,
        "tr": 1,
        "uk": 1,
        "vi": 1,
        "wa": 1
    };
    var str = "";
    var parent = typeof (data.dates.calendars.gregorian.months.format) === 'undefined' ?
        data.dates.calendars.gregorian.months.standalone :
        data.dates.calendars.gregorian.months.format;
    var capFunction = (typeof (lowercasedMonthLocales[language]) !== 'undefined' || typeof (lowercasedMonthLocales[region]) !== 'undefined') ? initialLower :
        (typeof (capitalizedMonthLocales[language]) !== 'undefined' ? initialCap : leaveSame);
    table = parent.narrow;
    for (var i = 1; i < 13; i++) {
        sysres["N" + i] = str;
    }
    table = parent.abbreviated;
    for (var i = 1; i < 13; i++) {
        sysres["NN" + i] = capFunction(table[i].substring(0, 2));
    }
    for (var i = 1; i < 13; i++) {
        sysres["MMM" + i] = capFunction(table[i]);
    }
    table = parent.wide;
    for (var i = 1; i < 13; i++) {
        sysres["MMMM" + i] = capFunction(table[i]);
    }
    // from https://meta.wikimedia.org/wiki/Capitalization_of_Wiktionary_pages#Capitalization_of_month_names
    var capitalizedDayLocales = {
        "af": 1,
        "br": 1,
        "cy": 1,
        "en": 1,
        "de": 1,
        "bar": 1,
        "gsw": 1,
        "ksh": 1,
        "lb": 1,
        "nds": 1,
        "pfl": 1,
        "el": 1,
        "hz": 1,
        "id": 1,
        "la": 1,
        "ve": 1,
        "xh": 1,
        "zu": 1,
    };
    var lowercasedDayLocales = {
        "bs": 1,
        "bg": 1,
        "hr": 1,
        "ca": 1,
        "cs": 1,
        "dsb": 1,
        "eo": 1,
        "fi": 1,
        "fr": 1,
        "hsb": 1,
        "hu": 1,
        "hy": 1,
        "it": 1,
        "li": 1,
        "lv": 1,
        "lt": 1,
        "mk": 1,
        "no": 1,
        "nn": 1,
        "nl": 1,
        "os": 1,
        "pl": 1,
        "pt": 1,
        "ro": 1,
        "ru": 1,
        "sr": 1,
        "sk": 1,
        "sv": 1,
        "vi": 1,
        "wa": 1
    };
    var dayProperties = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    var parent = typeof (data.dates.calendars.gregorian.days.format) === 'undefined' ?
        data.dates.calendars.gregorian.days.standalone :
        data.dates.calendars.gregorian.days.format;
    capFunction = (typeof (capitalizedDayLocales[language]) !== 'undefined') ? initialCap :
        (typeof (lowercasedDayLocales[language]) !== 'undefined') ? initialLower :
        leaveSame;
    table = parent.narrow;
    for (var i = 0; i < 7; i++) {
        sysres["E" + i] = table[dayProperties[i]];
    }
    table = parent.short;
    for (var i = 0; i < 7; i++) {
        sysres["EE" + i] = capFunction(table[dayProperties[i]].substring(0, 2));
    }
    table = parent.abbreviated;
    for (var i = 0; i < 7; i++) {
        sysres["EEE" + i] = capFunction(table[dayProperties[i]]);
    }
    table = parent.wide;
    for (var i = 0; i < 7; i++) {
        sysres["EEEE" + i] = capFunction(table[dayProperties[i]]);
    }
    var periodProperties = ["am", "pm"];
    parent = typeof (data.dates.calendars.gregorian.dayPeriods.format) === 'undefined' ?
        data.dates.calendars.gregorian.dayPeriods.standalone :
        data.dates.calendars.gregorian.dayPeriods.format;
    table = parent.wide;
    for (var i = 0; i < 2; i++) {
        sysres["a" + i] = table[periodProperties[i]];
    }
    table = data.dates.calendars.gregorian.eras.eraAbbr;
    sysres["G-1"] = table["0"];
    sysres["G1"] = table["1"];

    function truncToSize(str, size) {
        var i = str.indexOf("{0}");
        if (i >= 0) {
            i += 3;
            while (str.charAt(i) === ' ') {
                i++;
            }
            if (i + size <= str.length) {
                if (i + size + 1 === str.length) {
                    return str.substring(0, i + size + 1);
                }
                return str.substring(0, i + size);
            }
            return undefined;
        }
        return undefined;
    }

    function clip(shortStr, longStr, size) {
        var truncated = undefined;
        if (shortStr) {
            truncated = truncToSize(shortStr, size);
        }
        if (truncated) {
            return truncated;
        }
        if (longStr) {
            truncated = truncToSize(longStr, size);
        }
        if (truncated) {
            return truncated;
        }
        return shortStr || longStr;
    }

    function clipForMedium(shortStr, longStr) {
        return clip(shortStr, longStr, 2);
    }

    function clipForLong(longStr) {
        return clip(longStr, undefined, 3);
    }
    var durationPropertiesFull = {
        "second": "1#1 second|#{num} seconds",
        "minute": "1#1 minute|#{num} minutes",
        "hour": "1#1 hour|#{num} hours",
        "day": "1#1 day|#{num} days",
        "week": "1#1 week|#{num} weeks",
        "month": "1#1 month|#{num} months",
        "year": "1#1 year|#{num} years"
    };
    var durationPropertiesLong = {
        "second": "1#1 sec|#{num} sec",
        "minute": "1#1 min|#{num} min",
        "hour": "1#1 hr|#{num} hrs",
        "day": "durationLongDays",
        "week": "1#1 wk|#{num} wks",
        "month": "1#1 mon|#{num} mons",
        "year": "1#1 yr|#{num} yrs"
    };
    var durationPropertiesMedium = {
        "second": "1#1 se|#{num} sec",
        "minute": "1#1 mi|#{num} min",
        "hour": "durationMediumHours",
        "day": "1#1 dy|#{num} dys",
        "week": "durationMediumWeeks",
        "month": "1#1 mo|#{num} mos",
        "year": "durationMediumYears"
    };
    var durationPropertiesShort = {
        "second": "#{num}s",
        "minute": "durationShortMinutes",
        "hour": "#{num}h",
        "day": "#{num}d",
        "week": "#{num}w",
        "month": "durationShortMonths",
        "year": "#{num}y"
    };
    table = data.units;
    for (duration in durationPropertiesMedium) {
        if (duration && durationPropertiesMedium[duration]) {
            var unit = table[duration];
            var shortStr = unit["unitPattern-count-one"];
            if (!shortStr) {
                shortStr = unit["unitPattern-count-other"];
            }
            if (shortStr) {
                var unitOnly = shortStr.replace("{0}", "");
                var initial = unitOnly.trim().charAt(0);
                shortStr = shortStr.replace(unitOnly, initial).replace("{0}", "{num}");
                if (shortStr.length > 0) {
                    sysres[durationPropertiesShort[duration]] = "#" + shortStr;
                }
            }
            var mediumOther = "",
                longOther = "",
                fullOther = "";
            var temp, mediumClipped, longClipped, mediumStr = "",
                longStr = "",
                fullStr = "";
            if (typeof (unit["unitPattern-count-other-alt-short"]) !== 'undefined') {
                mediumOther = clipForMedium(
                    unit["unitPattern-count-other-alt-short"],
                    unit["unitPattern-count-other"]);
            }
            if (typeof (unit["unitPattern-count-other"]) !== 'undefined') {
                longOther = clipForLong(unit["unitPattern-count-other"]);
                fullOther = unit["unitPattern-count-other"];
            }
            var unitNames = [
                "0",
                "1",
                "zero",
                "one",
                "two",
                "few",
                "many"
            ];
            for (var j = 0; j < unitNames.length; j++) {
                name = unitNames[j];
                mediumClipped = clipForMedium(
                    unit["unitPattern-count-" + name + "-alt-short"],
                    unit["unitPattern-count-" + name]);
                if (typeof (unit["unitPattern-count-" + name + "-alt-short"]) !== 'undefined' &&
                    mediumClipped !== mediumOther) {
                    if (mediumStr.length > 0) {
                        mediumStr += "|";
                    }
                    temp = mediumClipped.replace("{0}", "{num}");
                    mediumStr += name + "#" + temp;
                }
                longClipped = clipForLong(unit["unitPattern-count-" + name]);
                if (typeof (unit["unitPattern-count-" + name]) !== 'undefined' &&
                    longClipped !== longOther) {
                    if (longStr.length > 0) {
                        longStr += "|";
                    }
                    temp = longClipped.replace("{0}", "{num}");
                    longStr += name + "#" + temp;
                }
                if (typeof (unit["unitPattern-count-" + name]) !== 'undefined' &&
                    unit["unitPattern-count-" + name] !== fullOther) {
                    if (fullStr.length > 0) {
                        fullStr += "|";
                    }
                    fullStr += name + "#" + unit["unitPattern-count-" + name].replace("{0}", "{num}");
                }
            }
            if (typeof (unit["unitPattern-count-other-alt-short"]) !== 'undefined') {
                if (mediumStr.length > 0) {
                    mediumStr += "|";
                }
                temp = clipForMedium(unit["unitPattern-count-other-alt-short"], unit["unitPattern-count-other"]).replace("{0}", "{num}");
                mediumStr += "#" + temp;
            }
            if (typeof (unit["unitPattern-count-other"]) !== 'undefined') {
                if (longStr.length > 0) {
                    longStr += "|";
                }
                if (fullStr.length > 0) {
                    fullStr += "|";
                }
                temp = clipForLong(unit["unitPattern-count-other"]).replace("{0}", "{num}");
                longStr += "#" + temp;
                fullStr += "#" + unit["unitPattern-count-other"].replace("{0}", "{num}");
            }
            if (mediumStr.length > 0) {
                sysres[durationPropertiesMedium[duration]] = mediumStr;
            }
            if (longStr.length > 0) {
                sysres[durationPropertiesLong[duration]] = longStr;
            }
            if (fullStr.length > 0) {
                sysres[durationPropertiesFull[duration]] = fullStr;
            }
        }
    }
    unit = table;
    str = "";
    if (typeof (unit["day-past"]["unitPattern-count-one"]) !== 'undefined' || typeof (unit["day-past"]["unitPattern-count-other"]) !== 'undefined') {
        var day = table["day"]["unitPattern-count-one"] || table["day"]["unitPattern-count-other"];
        var dayPast = table["day-past"]["unitPattern-count-one"] || table["day-past"]["unitPattern-count-other"];
        //console.log("day"+ dayPast);
        //console.log("dayPast"+ dayPast);
        if (dayPast.indexOf(day) != -1) {
            sysres["{duration} ago"] = dayPast.replace(day, "{duration}").toLowerCase();
        } else {
           /* var dayPast_few = table["day-past"]["unitPattern-count-few"] || table["day-past"]["unitPattern-count-other"];
            if (dayPast_few != dayPast) {
                dayPast_few = dayPast_few.replace("{0}", "");
                dayPast = dayPast.replace("{0}", "");
                arr_dayPast_few = dayPast_few.split(" ");
                arr_dayPast = dayPast.split(" ");
                var mismatch;
                for (var i = 0; i < arr_dayPast.length; i++) {
                    if (arr_dayPast_few[i] != arr_dayPast[i]) {
                        mismatch = arr_dayPast[i];
                    }
                }*/
                //if(language === "th"){
                //console.log("dayPast"+ dayPast);
                //console.log("dayPast_few"+ dayPast_few);
                //console.log("mismatch"+ mismatch);
                //}
                //sysres["{duration} ago"] = dayPast.replace(mismatch, "{duration}").toLowerCase();
               // sysres["{duration} ago"] = sysres["{duration} ago"].replace("  ", " ");
                //if (sysres["{duration} ago"].indexOf("{duration}") === -1) {
                    //sysres["{duration} ago"] = "XXXXX";
                //}
            //} else {
                sysres["{duration} ago"] = "-{duration}";
           // }
        }
    }


    unit = table;
    str = "";
    if (typeof (table["day-future"]["unitPattern-count-one"]) !== 'undefined' || typeof (table["day-future"]["unitPattern-count-other"]) !== 'undefined') {
        var day = table["day"]["unitPattern-count-one"] || table["day"]["unitPattern-count-other"];
        var dayFuture = table["day-future"]["unitPattern-count-one"] || table["day-future"]["unitPattern-count-other"];
        if (dayFuture.indexOf(day) != -1) {
            sysres["in {duration}"] = dayFuture.replace(day, "{duration}").toLowerCase();
        } else {
           /* var dayFuture_few = table["day-future"]["unitPattern-count-few"] || table["day-future"]["unitPattern-count-other"];
            if (dayFuture_few != dayFuture) {
                dayFuture_few = dayFuture_few.replace("{0}", "");
                dayFuture = dayFuture.replace("{0}", "");
                arr_dayFuture_few = dayFuture_few.split(" ");
                arr_dayFuture = dayFuture.split(" ");
                var mismatch;
                for (var i = 0; i < arr_dayFuture.length; i++) {
                    if (arr_dayFuture_few[i] != arr_dayFuture[i]) {
                        mismatch = arr_dayFuture[i];
                    }
                }
                sysres["in {duration}"] = dayFuture.replace(mismatch, "{duration}").toLowerCase();
                sysres["in {duration}"] = sysres["in {duration}"].replace("  ", " ");
                if (sysres["in {duration}"].indexOf("{duration}") === -1) {
                    sysres["in {duration}"] = "XXXXX";
                }*/
           // } else {
                sysres["in {duration}"] = "+{duration}";
            //}
        }
    }
    var listProperties = {
        "separatorFull": "middle",
        "finalSeparatorFull": "end"
    };
    table = data.listPatterns.listPattern;
    for (pattern in listProperties) {
        if (pattern && listProperties[pattern]) {
            var unit = table[listProperties[pattern]];
            if (unit.length > 0) {
                sysres[pattern] = unit.replace(/\{.\}/g, "");
            }
        }
    }
    sysres["separatorShort"] = " ";
    sysres["separatorMedium"] = " ";
    sysres["separatorLong"] = " ";
    return sysres;
}
//code getting implemented

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
    if (data.generated) {
        if (anyProperties(data)) {
            console.log("Writing " + path);
            makeDirs(path);
            fs.writeFileSync(path + "/sysres.json", JSON.stringify(data, true, 4), "utf-8");
        } else {
            console.log("Skipping empty " + path);
        }
    } else {
        console.log("Skipping existing " + path);
    }
}
// for each locale, get the data
var language, region, script, file,
    files = fs.readdirSync(cldrDirName + "/main/");
console.log("Reading locale data into memory...");
for (var i = 0; i < files.length; i++) {
    file = files[i];
    if (file === "root.json") {
        // special case because "root" is not a valid locale specifier
        getLocaleData(file, undefined, undefined, undefined);
    } else {
        locale = file.split(/\./)[0].replace(/_/g, "-");
        var l = new Locale(locale);
        if (typeof (l.getVariant()) === 'undefined') {
            getLocaleData(file, l.getLanguage(), l.getScript(), l.getRegion());
        }
    }
}
console.log("");
// find the system resources
console.log("Merging and pruning locale data...");
mergeAndPrune(localeData);
var resources = {};
var resources_dateformat_data = {};
console.log("\nCalculating system resources...");
resources.data = getSystemResources(undefined, undefined, undefined, localeData.data);
//resources_dateformat_data=resources.data;
for (language in localeData) {
    if (language && localeData[language] && language !== 'data' && language !== 'merged') {
        resources[language] = resources[language] || {};
        console.log(language + " ");
        for (var subpart in localeData[language]) {
            if (subpart && localeData[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
                resources[language][subpart] = resources[language][subpart] || {};
                if (Locale.isScriptCode(subpart)) {
                    script = subpart;
                    for (region in localeData[language][script]) {
                        resources[language][script][region] = resources[language][script][region] || {};
                        if (region && localeData[language][script][region] && region !== 'data' && region !== 'merged') {
                            resources[language][script][region].data = getSystemResources(language, script, region, localeData[language][script][region].merged);
                        }
                    }
                }
                resources[language][subpart].data = getSystemResources(language, subpart, undefined, localeData[language][subpart].merged);
            }
        }
        resources[language].data = getSystemResources(language, undefined, undefined, localeData[language].merged);
    }
}
console.log("\nMerging and pruning resources...");
mergeAndPrune(resources);
console.log("\nWriting system resources...");

for (language in resources) {
    if (language && resources[language] && language !== 'data' && language !== 'merged') {
        for (var subpart in resources[language]) {
            if (subpart && resources[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
                if (Locale.isScriptCode(subpart)) {
                    script = subpart;
                    for (region in resources[language][script]) {
                        if (region && resources[language][script][region] && region !== 'data' && region !== 'merged') {
                            writeSystemResources(language, script, region, resources[language][script][region].data);
                        }
                    }
                    writeSystemResources(language, script, undefined, resources[language][script].data);
                } else {
                    writeSystemResources(language, undefined, subpart, resources[language][subpart].data);
                }
            }
        }
        writeSystemResources(language, undefined, undefined, resources[language].data);
    }
}
writeSystemResources(undefined, undefined, undefined, resources.data);

resources_dateformat_data.data = getDateFormats(undefined, undefined, undefined, localeData.data);
for (language in localeData) {
    if (language && localeData[language] && language !== 'data' && language !== 'merged') {
        resources_dateformat_data[language] = resources_dateformat_data[language] || {};
        console.log(language + " ");
        for (var subpart in localeData[language]) {
            if (subpart && localeData[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
                resources_dateformat_data[language][subpart] = resources_dateformat_data[language][subpart] || {};
                if (Locale.isScriptCode(subpart)) {
                    script = subpart;
                    for (region in localeData[language][script]) {
                        resources_dateformat_data[language][script][region] = resources_dateformat_data[language][script][region] || {};
                        if (region && localeData[language][script][region] && region !== 'data' && region !== 'merged') {
                            resources_dateformat_data[language][script][region].data = getDateFormats(language, script, region, localeData[language][script][region].merged);
                        }
                    }
                }
                resources_dateformat_data[language][subpart].data = getDateFormats(language, subpart, undefined, localeData[language][subpart].merged);
            }
        }
        resources_dateformat_data[language].data = getDateFormats(language, undefined, undefined, localeData[language].merged);
    }
}
console.log("\nMerging and pruning data for dateformats.");
mergeAndPrune(resources_dateformat_data);

function getDateFormats(language, script, region, data) {
    // if it is already there and non-generated, return it
    var dates = loadFileNonGenerated(language, script, region, "dateformats.json");
    // console.log("language: " + language);
    //  console.log("script: " + script);
    // console.log("region: " + region);
    if (dates && (typeof (dates.generated) === 'undefined' || !dates.generated)) {
        console.log("\nLoaded existing dateformats from " + calcLocalePath(language, script, region, "dateformats.json"));
        dates.generated = false;
        return dates;
    }
    // else generate a new one
    dates = {
        generated: true
    };
    var default_calendar = data.dates.calendars["default"];
    //console.log("default calendar is :" + default_calendar);
    var gregorian_order = data.dates.calendars[default_calendar]["dateTimeFormats"]["full"]["dateTimeFormat"]["pattern"];
    //console.log("default format is :" + JSON.stringify(gregorian_order_formats));
    //var gregorian_order_full = gregorian_order_formats[full] ;//full"]["dateTimeFormat"]["pattern"];
    //var gregorian_order = gregorian_order_full["dateTimeFormat"]["pattern"];
    //console.log("default calendar format pattern is " + gregorian_order);
    var gregorian = {};
    //var output = {};
    //output["gregorian"]="gregorian";
    if (gregorian_order == "{0} {1}") {
        //console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
        gregorian["order"] = "{date} {time}";
    } else {
        gregorian["order"] = "{time} {date}";
    }
    //console.log("gregorian calendar order is :" + gregorian["order"]);
    var date_formats = data.dates.calendars[default_calendar]["dateFormats"];
    var available_formats = data.dates.calendars[default_calendar]["dateTimeFormats"]["availableFormats"];
    // console.log("available formats are :" + JSON.stringify(available_formats) + "+++++++++++++++++++++");
    available_formats = JSON.parse(JSON.stringify(available_formats).replace(/L/g, "M"));
    available_formats = JSON.parse(JSON.stringify(available_formats).replace(/G/g, ""));
    //available_formats = JSON.parse(JSON.stringify(available_formats).replace(/'[^']+'/g, ""));
    //console.log("available formats after conversion :" + JSON.stringify(available_formats) + "++++++++++++++++++++++++++++++++++++++++++++");
    var keys_dateformats = Object.keys(available_formats);
    //var values_dateformats = JSON.stringify(keys_dateformats);
    var arr_values = [];
    //console.log("date fomat keys are :" + keys_dateformats + "*********************************");
    for (var i = 0; i < keys_dateformats.length; i++) {
        arr_values[i] = available_formats[keys_dateformats[i]];

    }
    //console.log("date fomat keys are :" + JSON.stringify(arr_values) + "*********************************");


    var date = {};
    var dm = {};
    var dmwy = {};
    var dmy = {};
    var dmw = {};
    var my = {};
    var d = {};
    var m = {};
    var y = {};
    var n = {};
    //for (var i=0;i<keys_dateformats.length;i++)
    //{
    if (available_formats["Md"] || available_formats["Mdd"]) {
        dm["s"] = available_formats["Md"] || available_formats["Mdd"];
        //break;
    } else if ((available_formats["Md"] === undefined) && (available_formats["Md"] === undefined)) {
        var flag = false;
        for (var j = 0; j < arr_values.length; j++) {
            if (((arr_values[j].split("M").length - 1) == 1) && ((arr_values[j].split("d").length - 1) == 1)) {
                dm["s"] = (arr_values[j].indexOf("M") > arr_values[j].indexOf("d")) ? (arr_values[j].substring(arr_values[j].indexOf("d"), 1 + arr_values[j].lastIndexOf(
                    "M"))) : (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].lastIndexOf("d")));
                //}
                flag = true;
                break;
            }
        }
        if (flag == false) {
            var short = date_formats["short"]["dateFormat"]["pattern"];
            dm["s"] = (short.indexOf("d") < short.indexOf("M")) ? short.substring(short.indexOf("d"), 1 + short.lastIndexOf("M")) : short.substring(short.indexOf("M"),
                1 + short.lastIndexOf("d"));
        }
    }
    //end of short
    if (available_formats["MMdd"] || available_formats["MMd"]) {
        //if(available_formats["MMdd"]!=undefined)
        //{
        dm["m"] = available_formats["MMdd"] || available_formats["MMd"];
        //}
        //else
        //dm["m"]=available_formats["MMd"];
    } else if ((available_formats["MMdd"] === undefined) && (available_formats["MMd"] === undefined)) {
        var flag = false;
        for (var j = 0; j < arr_values.length; j++) {
            if (((arr_values[j].split("M").length - 1) == 2) && ((arr_values[j].split("d").length - 1) >= 1)) {
                dm["m"] = (arr_values[j].indexOf("M") > arr_values[j].indexOf("d")) ? (arr_values[j].substring(arr_values[j].indexOf("d"), 1 + arr_values[j].indexOf("M"))) :
                    (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].lastIndexOf("d")));
                flag = true;
                break;
            }
        }
        if (flag == false) {
            var medium = date_formats["medium"]["dateFormat"]["pattern"];
            dm["m"] = (medium.indexOf("M") < medium.indexOf("d")) ? medium.substring(medium.indexOf("M"), 1 + medium.lastIndexOf("d")) : medium.substring(medium.indexOf(
                "d"), 1 + medium.lastIndexOf("M"));
        }
    }
    if (available_formats["MMMd"] || available_formats["MMMdd"]) {
        dm["l"] = available_formats["MMMd"] || available_formats["MMMdd"];
    } else if ((available_formats["MMMdd"] === undefined) && (available_formats["MMMd"] === undefined)) {
        var flag = false;
        for (var j = 0; j < arr_values.length; j++) {
            if (((arr_values[j].split("M").length - 1) == 3) && ((arr_values[j].split("d").length - 1) >= 1)) {
                dm["l"] = (arr_values[j].indexOf("M") > arr_values[j].indexOf("d")) ? (arr_values[j].substring(arr_values[j].indexOf("d"), 1 + arr_values[j].lastIndexOf(
                    "M"))) : (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].lastIndexOf("d")));
                flag = true;
                break;
            }
        }
        if (flag == false) {
            var long = date_formats["long"]["dateFormat"]["pattern"];
            dm["l"] = (long.indexOf("M") < long.indexOf("d")) ? long.substring(long.indexOf("M"), 1 + long.lastIndexOf("d")) : (long.substring(long.indexOf("d"), 1 +
                long.lastIndexOf("M")));
        }
    }
    if (available_formats["MMMMd"] || available_formats["MMMMdd"]) {
        dm["f"] = available_formats["MMMMd"] || available_formats["MMMMdd"];
    } else if ((available_formats["MMMMdd"] === undefined) && (available_formats["MMMMd"] === undefined)) {
        var flag = false;
        for (var j = 0; j < arr_values.length; j++) {
            if (((arr_values[j].split("M").length - 1) == 4) && ((arr_values[j].split("d").length - 1) >= 1)) {
                dm["f"] = (arr_values[j].indexOf("M") > arr_values[j].indexOf("d")) ? (arr_values[j].substring(arr_values[j].indexOf("d"), 1 + arr_values[j].lastIndexOf(
                    "M"))) : (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].lastIndexOf("d")));
                flag = true;
                break;
            }
        }
        if (flag == false) {
            var full = date_formats["long"]["dateFormat"]["pattern"];
            dm["f"] = full.indexOf("M") < (full.indexOf("d")) ? full.substring(full.indexOf("M"), 1 + full.lastIndexOf("d")) : full.substring(full.indexOf("d"), 1 +
                full.lastIndexOf("M"));
        }
    }
    //end of combination dm
    if (available_formats["yM"] || available_formats["yyM"] || available_formats["yyyyM"]) {
        my["s"] = available_formats["yM"] || available_formats["yyM"] || available_formats["yyyyM"];
    } else if ((available_formats["yM"] === undefined) && (available_formats["yyM"] === undefined) && (available_formats["yyyyM"] === undefined)) {
        var flag = false;
        for (var j = 0; j < arr_values.length; j++) {
            if (((arr_values[j].split("M").length - 1) == 1) && ((arr_values[j].split("y").length - 1) >= 1)) {
                my["s"] = (arr_values[j].indexOf("y") > arr_values[j].indexOf("M")) ? (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].lastIndexOf(
                    "y"))) : (arr_values[j].substring(arr_values[j].indexOf("y"), 1 + arr_values[j].lastIndexOf("M")));
                flag = true;
                break;
            }
        }
        if (flag == false) {
            var short = date_formats["short"]["dateFormat"]["pattern"];
            my["s"] = (short.indexOf("M") < short.indexOf("y")) ? short.substring(short.indexOf("M"), 1 + short.lastIndexOf("y")) : short.substring(short.indexOf("y"),
                1 + short.lastIndexOf("M"));
        }
    }
    if (available_formats["yyyyMM"] || available_formats["yyMM"] || available_formats["yMM"]) {
        my["m"] = available_formats["yyyyMM"] || available_formats["yyMM"] || available_formats["yMM"];
    } else if ((available_formats["yMM"] === undefined) && (available_formats["yyMM"] === undefined) && (available_formats["yyyyMM"] === undefined)) {
        var flag = false;
        for (var j = 0; j < arr_values.length; j++) {
            if (((arr_values[j].split("M").length - 1) == 2) && ((arr_values[j].split("y").length - 1) >= 1)) {
                my["m"] = (arr_values[j].indexOf("y") > arr_values[j].indexOf("M")) ? (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].lastIndexOf(
                    "y"))) : (arr_values[j].substring(arr_values[j].indexOf("y"), 1 + arr_values[j].lastIndexOf("M")));
                flag = true;
                break;
            }
        }
        if (flag == false) {
            var medium = date_formats["medium"]["dateFormat"]["pattern"];
            my["m"] = medium.indexOf("M") < medium.indexOf("y") ? medium.substring(medium.indexOf("M"), 1 + medium.lastIndexOf("y")) : medium.substring(medium.indexOf(
                "y"), 1 + medium.lastIndexOf("M"));
        }
    }
    if (available_formats["yMMM"] || available_formats["yyMMM"] || available_formats["yyyyMMM"]) {
        my["l"] = available_formats["yMMM"] || available_formats["yyMMM"] || available_formats["yyyyMMM"];
    } else if ((available_formats["yMMM"] === undefined) && (available_formats["yyMMM"] === undefined) && (available_formats["yyyyMMM"] === undefined)) {
        var flag = false;
        for (var j = 0; j < arr_values.length; j++) {
            if (((arr_values[j].split("M").length - 1) == 3) && ((arr_values[j].split("y").length - 1) >= 1)) {
                my["l"] = (arr_values[j].indexOf("y") > arr_values[j].indexOf("M")) ? (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].lastIndexOf(
                    "y"))) : (arr_values[j].substring(arr_values[j].indexOf("y"), 1 + arr_values[j].lastIndexOf("M")));
                flag = true;
                break;
            }
        }
        if (flag == false) {
            var long = date_formats["long"]["dateFormat"]["pattern"];
            my["l"] = (long.indexOf("M") < long.indexOf("y")) ? long.substring(long.indexOf("M"), 1 + long.lastIndexOf("y")) : long.substring(long.indexOf("y"), 1 +
                long.lastIndexOf("M"));
        }
    }
    if (available_formats["yyyyMMMM"] || available_formats["yyMMMM"] || available_formats["yMMMM"]) {
        my["f"] = available_formats["yyyyMMMM"] || available_formats["yyMMMM"] || available_formats["yMMMM"];
    } else if ((available_formats["yyyyMMMM"] === undefined) && (available_formats["yyMMMM"] === undefined) && (available_formats["yMMMM"] === undefined)) {
        var flag = false;
        for (var j = 0; j < arr_values.length; j++) {
            if (((arr_values[j].split("M").length - 1) == 4) && ((arr_values[j].split("y").length - 1) >= 1)) {
                my["f"] = (arr_values[j].indexOf("y") > arr_values[j].indexOf("M")) ? (arr_values[j].substring(arr_values[j].indexOf("M"), 1 + arr_values[j].lastIndexOf(
                    "y"))) : (arr_values[j].substring(arr_values[j].indexOf("y"), 1 + arr_values[j].lastIndexOf("M")));
                flag = true;
                break;
            }
        }
        if (flag == false) {
            var full = date_formats["full"]["dateFormat"]["pattern"];
            my["f"] = (full.indexOf("M") < full.indexOf("y")) ? full.substring(full.indexOf("M"), 1 + full.lastIndexOf("y")) : full.substring(full.indexOf("y"), 1 +
                full.lastIndexOf("M"));
        }
    }
    //end of my combination
    if (available_formats["yyyyMd"] || available_formats["yMd"]) {
        dmy["s"] = available_formats["yyyyMd"] || available_formats["yMd"];
    } else if (available_formats["yyyyMd"] === undefined) {
        var flag = false;
        for (var j = 0; j < arr_values.length; j++) {
            if (((arr_values[j].split("M").length - 1) == 1) && ((arr_values[j].split("y").length - 1) >= 1) && ((arr_values[j].split("d").length - 1) >= 1)) {
                index_of_d = arr_values[j].indexOf("d");
                index_of_m = arr_values[j].indexOf("M");
                index_of_y = arr_values[j].indexOf("y");
                var max_index = Math.max(index_of_d, index_of_m, index_of_y);
                var min_index = Math.min(index_of_d, index_of_m, index_of_y);
                dmy["s"] = arr_values[j].substring(min_index, 1 + arr_values[j].lastIndexOf(arr_values[j].charAt(max_index)));
                flag = true;
                break;
            }
        }
        if (flag == false) {
            var short = date_formats["short"]["dateFormat"]["pattern"];
            index_of_d = short.indexOf("d");
            index_of_m = short.indexOf("M");
            index_of_y = short.indexOf("y");
            var max_index = Math.max(index_of_d, index_of_m, index_of_y);
            var min_index = Math.min(index_of_d, index_of_m, index_of_y);
            dmy["s"] = short.substring(min_index, 1 + short.lastIndexOf(short.charAt(max_index)));
        }
    }
    if (available_formats["yyMMdd"]) {
        dmy["m"] = available_formats["yyMMdd"];
    } else if (available_formats["yyMMdd"] === undefined) {
        var flag = false;
        for (var j = 0; j < arr_values.length; j++) {
            if (((arr_values[j].split("M").length - 1) == 2) && ((arr_values[j].split("y").length - 1) >= 1) && ((arr_values[j].split("d").length - 1) >= 1)) {
                index_of_d = arr_values[j].indexOf("d");
                index_of_m = arr_values[j].indexOf("M");
                index_of_y = arr_values[j].indexOf("y");
                var max_index = Math.max(index_of_d, index_of_m, index_of_y);
                var min_index = Math.min(index_of_d, index_of_m, index_of_y);
                dmy["m"] = arr_values[j].substring(min_index, 1 + arr_values[j].lastIndexOf(arr_values[j].charAt(max_index)));
                flag = true;
                break;
            }
        }
        if (flag == false) {
            var medium = date_formats["medium"]["dateFormat"]["pattern"];
            index_of_d = medium.indexOf("d");
            index_of_m = medium.indexOf("M");
            index_of_y = medium.indexOf("y");
            var max_index = Math.max(index_of_d, index_of_m, index_of_y);
            var min_index = Math.min(index_of_d, index_of_m, index_of_y);
            dmy["m"] = medium.substring(min_index, 1 + medium.lastIndexOf(medium.charAt(max_index)));
        }
    }
    if (available_formats["yyMMMd"] || available_formats["yyyyMMMd"] || available_formats["yMMMd"]) {
        dmy["l"] = available_formats["yyMMMd"] || available_formats["yyyyMMMd"] || available_formats["yMMMd"];
    } else if ((available_formats["yyMMMd"] === undefined) && (available_formats["yyyyMMMd"] === undefined) && (available_formats["yMMMd"] === undefined)) {
        var flag = false;
        for (var j = 0; j < arr_values.length; j++) {
            if (((arr_values[j].split("M").length - 1) == 3) && ((arr_values[j].split("y").length - 1) >= 1) && ((arr_values[j].split("d").length - 1) >= 1)) {
                index_of_d = arr_values[j].indexOf("d");
                index_of_m = arr_values[j].indexOf("M");
                index_of_y = arr_values[j].indexOf("y");
                var max_index = Math.max(index_of_d, index_of_m, index_of_y);
                var min_index = Math.min(index_of_d, index_of_m, index_of_y);
                dmy["l"] = arr_values[j].substring(min_index, 1 + arr_values[j].lastIndexOf(arr_values[j].charAt(max_index)));
                flag = true;
                break;
            }
        }
        if (flag == false) {
            var long = date_formats["long"]["dateFormat"]["pattern"];
            index_of_d = long.indexOf("d");
            index_of_m = long.indexOf("M");
            index_of_y = long.indexOf("y");
            var max_index = Math.max(index_of_d, index_of_m, index_of_y);
            var min_index = Math.min(index_of_d, index_of_m, index_of_y);
            dmy["l"] = long.substring(min_index, 1 + long.lastIndexOf(long.charAt(max_index)));
        }
    }
    if (available_formats["yMMMMd"]) {
        dmy["f"] = available_formats["yMMMMd"];
    } else if (available_formats["yMMMMd"] === undefined) {
        var flag = false;
        for (var j = 0; j < arr_values.length; j++) {
            if (((arr_values[j].split("M").length - 1) == 4) && ((arr_values[j].split("y").length - 1) >= 1) && ((arr_values[j].split("d").length - 1) >= 1)) {
                index_of_d = arr_values[j].indexOf("d");
                index_of_m = arr_values[j].indexOf("M");
                index_of_y = arr_values[j].indexOf("y");
                var max_index = Math.max(index_of_d, index_of_m, index_of_y);
                var min_index = Math.min(index_of_d, index_of_m, index_of_y);
                dmy["f"] = arr_values[j].substring(min_index, 1 + arr_values[j].lastIndexOf(arr_values[j].charAt(max_index)));
                flag = true;
                break;
            }
        }
        if (flag == false) {
            var full = date_formats["full"]["dateFormat"]["pattern"];
            index_of_d = full.indexOf("d");
            index_of_m = full.indexOf("M");
            index_of_y = full.indexOf("y");
            var max_index = Math.max(index_of_d, index_of_m, index_of_y);
            var min_index = Math.min(index_of_d, index_of_m, index_of_y);
            dmy["f"] = full.substring(min_index, 1 + full.lastIndexOf(full.charAt(max_index)));
        }
    }
    //console.log("DMY combination"+JSON.stringify(dmy));
    //end of dmy combination
    if (available_formats["d"]) {
        d["s"] = available_formats["d"];
        d["s"] = d["s"].replace(/\./, "");
        d["m"] = d["l"] = d["f"] = d["s"];
    }
    if (available_formats["d"] === undefined) {
        //var flag=false;
        for (var j = 0; j < arr_values.length; j++) {
            if ((arr_values[j].split("d").length - 1) == 1) {
                d["s"] = "d";
                d["m"] = "d";
                d["l"] = "d";
                d["f"] = "d";
                break;
            }
        }
    }
    //if(d["s"]!="d")
    //{
    for (var j = 0; j < arr_values.length; j++) {
        if ((arr_values[j].split("d").length - 1) == 2) {
            if (d["s"] != "d") {
                d["s"] = "dd";
            }
            d["m"] = "dd";
            d["l"] = "dd";
            d["f"] = "dd";
            break;
        }
    }

    //d = JSON.stringify(d).replace(/./g,"");
    //}
    //}
    //end of d combination
    if (available_formats["M"]) {
        m["s"] = available_formats["M"];
        m["s"] = m["l"] = m["m"] = m["f"];
    } else if (available_formats["M"] === undefined) {
        //var flag=false;
        for (var j = 0; j < arr_values.length; j++) {
            if ((arr_values[j].split("M").length - 1) == 1) {
                m["s"] = "M";
                m["m"] = "M";
                m["l"] = "M";
                m["f"] = "M";
                break;
            }
        }
    }
    //if(m["s"]!="M")
    //{
    for (var j = 0; j < arr_values.length; j++) {
        if ((arr_values[j].split("M").length - 1) == 2) {
            if (m["s"] != "M") {
                m["s"] = "MM";
            }
            m["m"] = "MM";
            m["l"] = "MM";
            m["f"] = "MM";
            break;
        }
    }
    //}
    if (available_formats["MMM"]) {
        m["l"] = available_formats["MMM"];
        m["f"] = m["l"];
    } else if (available_formats["MMM"] === undefined) {
        for (var j = 0; j < arr_values.length; j++) {
            if ((arr_values[j].split("M").length - 1) == 3) {
                m["l"] = "MMM";
                m["f"] = "MMM";
                break;
            }
        }
    }
    //if(m["l"]!="MMM")
    //{
    for (var j = 0; j < arr_values.length; j++) {
        if ((arr_values[j].split("M").length - 1) == 4) {
            if (m["l"] != "MMM") {
                m["l"] = "MMMM";
            }
            m["f"] = "MMMM";
            //d["l"]="dd";
            //d["f"]="dd";
            break;
        }
    }
    //}
    //end of m combination
    if (available_formats["y"]) {
        //console.log("debugging");
        y["s"] = available_formats["y"];
        y["s"] = y["m"] = y["l"] = y["f"];
        //console.log("year format is " +JSON.stringify(y));
    }
    //if(y["s"]!="y")
    //{
    for (var j = 0; j < arr_values.length; j++) {
        if ((arr_values[j].split("y").length - 1) == 2) {
            //if (y["s"] != "y") {
            y["s"] = "yy";
            //}
            y["m"] = "yy";
            break;
        } else {
            y["s"] = y["m"] = "yyyy";
        }
    }

    y["l"] = "yyyy";
    y["f"] = "yyyy";



    //console.log("year format is " +JSON.stringify(y));
    //end of y combination
    if (available_formats["MEd"]) {
        dmw["s"] = available_formats["MEd"];
        dmw["m"] = available_formats["MEd"].replace(/E+/g, "EE");
    } else if (available_formats["MEd"] === undefined) {
        dmw["s"] = "E" + " " + dm["s"];
        dmw["m"] = "EE" + " " + dm["m"];
    }
    //dmw["m"]="E"+dm["s"];
    if (available_formats["MMMEd"]) {
        dmw["l"] = available_formats["MMMEd"].replace(/E+/g, "EEEE");;
        dmw["f"] = available_formats["MMMEd"].replace(/E+/g, "EEEE");
    } else if (available_formats["MMMEd"] === undefined) {
        dmw["l"] = "EEE" + " " + dm["l"];
        dmw["f"] = "EEEE" + " " + dm["f"];
    }
    //dmw["l"]="EEE"+dm["l"];
    //end of dmw
    if (available_formats["yMEd"]) {
        dmwy["s"] = available_formats["yMEd"];
        dmwy["m"] = available_formats["yMEd"].replace(/E+/g, "EE");
    } else if (available_formats["yMEd"] === undefined) {
        dmw["s"] = "EE" + " " + dmy["s"];
    }
    if (available_formats["yMMMEd"]) {
        dmwy["l"] = available_formats["yMMMEd"].replace(/E+/g, "EEE");
        dmwy["f"] = available_formats["yMMMEd"].replace(/E+/g, "EEEE");
    } else if (available_formats["yMMMEd"] === undefined) {
        dmwy["l"] = "EEE" + " " + dmy["l"];
        dmwy["f"] = "EEEE" + " " + dmy["f"];
    }
    n["s"] = "N";
    n["m"] = "N";
    n["l"] = "MMM";
    n["f"] = "MMMM";
    //}
    /* var allkeys_datefmts = [dm, my, dmy, d, m, y, dmw, dmwy];
    for (var i = 0; i < allkeys_datefmts.length; i++) {
        var array_keys = Object.keys(allkeys_datefmts[i]);
        for (var j = 0; j < array_keys.length; j++) {
            if (typeof (allkeys_datefmts[i][array_keys[j]]) === 'undefined') {
                allkeys_datefmts[i][array_keys[j]] = "XXXXX";
            }
        }
    }*/

    var keys_datefmts = [my, dmy, y, dmwy];
    //var values_dateformats = JSON.stringify(keys_dateformats);
    //var datefmt_values = [];
    //console.log("date fomat keys are :" + keys_dateformats + "*********************************");
    for (var i = 0; i < keys_datefmts.length; i++) {
        if (typeof (keys_datefmts[i] != 'undefined')) {
            key = keys_datefmts[i];
            //console.log("date fomat key are :" + JSON.stringify(key) + "*********************************");

            // if ((key["s"].split(/y/g).length - 1 != 2) && (key["s"].split(/y/g).length - 1 != 4)) {
            // if (key["m"].split(/y/g).length - 1 == 2) {
            //  key["s"] = key["s"].replace(/[y]+/g, "yy");
            //}
            //

            key["s"] = key["s"].replace(/[y]+/g, "yy");


            if (key["m"].split(/y/g).length - 1 == 4) {
                key["m"] = key["m"].replace(/[y]+/g, "yyyy");
            } else {
                key["m"] = key["m"].replace(/[y]+/g, "yy");
            }
            //}
            if ((key["l"].split(/y/g).length - 1 != 2) && (key["l"].split(/y/g).length - 1 != 4)) {
                key["l"] = key["l"].replace(/[y]+/g, "yyyy");
            }
            if ((key["f"].split(/y/g).length - 1 != 2) && (key["f"].split(/y/g).length - 1 != 4)) {
                key["f"] = key["f"].replace(/[y]+/g, "yyyy");
            }
        }
    }
    date["dm"] = dm;
    date["my"] = my;
    date["dmy"] = dmy;
    date["d"] = d;
    date["m"] = m;
    date["y"] = y;
    date["dmw"] = dmw;
    date["dmwy"] = dmwy;
    date["n"] = n;
    gregorian["date"] = date;

    //dates["gregorian"]=gregorian;
    //}
    //console.log("gregorian date formats are :"+JSON.stringify(gregorian)+"++++++++++++++++++++++++++++++++++++++++++++");
    //code to map Time Formats
    var time_24 = {};
    var time_12 = {};
    var time_fmt = {};
    available_formats = JSON.parse(JSON.stringify(available_formats).replace(/HH/g, "H"));
    var timeformat = data.dates.calendars[default_calendar]["timeFormats"];
    //console.log("time formats are :"+JSON.stringify(timeformat)+"++++++++++++++++++++++++++++++++++++++++++++");
    if (available_formats["Hms"]) {
        //var index_of_a = available_formats["hms"].indexOf("a");
        //var index_of_h = available_formats["hms"].indexOf("h");
        //var max_index = Math.max(index_of_a, index_of_h);
        //available_formats["Hms"] = available_formats["Hms"].replace(/h/g, "H");
        //available_formats["Hms"] = available_formats["Hms"].substring(available_formats["Hms"].indexOf("H"), 1 + available_formats["Hms"].lastIndexOf("s"));
        available_formats["Hms"] == available_formats["Hms"].replace(/a/g, "");
        //if (max_index == index_of_a) {
        //time["ahmsz"] = available_formats["Hms"]  + " " + "z";
        //time["ahms"] = available_formats["HH:mm:ssHms"] ;
        //} else {
        //time_24["ahmsz"] = "XXXXX" + available_formats["Hms"] + " " + "z";
        time_24["ahmsz"] = timeformat["long"]["timeFormat"]["pattern"].replace(/a/g, "");
        time_24["ahmsz"] = time_24["ahmsz"].replace(/h/g, "H");
        time_24["ahms"] = available_formats["Hms"];
        //}
	time_24["hmsz"] = time_24["ahmsz"];
        time_24["hms"] = available_formats["Hms"];
        //time_24["ms"] = available_formats["Hms"].substring(available_formats["Hms"].indexOf("m"), 1 + available_formats["Hms"].lastIndexOf("s"));
        time_24["ms"] = available_formats["Hms"].substring(available_formats["Hms"].indexOf("m"), available_formats["Hms"].length);
    }
    if (available_formats["Hm"]) {
        //var index_of_a = available_formats["Hm"].indexOf("a");
        //var index_of_h = available_formats["Hm"].indexOf("H");
        //var max_index = Math.max(index_of_a, index_of_h);
        //available_formats["hm"] = available_formats["hm"].replace(/h/g, "H");
        // available_formats["Hm"] = available_formats["Hm"].substring(available_formats["Hm"].indexOf("H"), 1 + available_formats["Hm"].lastIndexOf("m"));
        available_formats["Hm"] = available_formats["Hm"].replace(/a/g, ""); //.substring(available_formats["Hm"].indexOf("H"), available_formats["Hm"].indexOf("s") - 1);
        //if (max_index == index_of_a) {
        //time_24["ahmz"] = available_formats["Hm"]  + " " + "z";
        //time_24["ahm"] = available_formats["Hm"] ;
        //time_24["ah"] = "H";
        //} else {
        //time_24["ahmz"] = "XXXXX " + available_formats["Hm"] + " " + "z";
        if (time_24["ahmsz"].indexOf(":ss") != -1) {
            time_24["ahmz"] = time_24["ahmsz"].replace(":ss", "");
        } else {
            time_24["ahmz"] = time_24["ahmsz"].replace(".ss", "");
        }
        time_24["ahm"] = available_formats["Hm"];
        time_24["hmz"] = time_24["ahmz"];
        time_24["ah"] = available_formats["H"];
        time_24["h"] = available_formats["H"];
        //}
        time_24["hm"] = available_formats["Hm"];
    }
    time_24["m"] = "mm";
    time_24["s"] = "ss";
    time_fmt["24"] = time_24;
    //code for 12 hour clock setting
    if (available_formats["hms"]) {
        //available_formats["Hms"] = available_formats["Hms"].substring(available_formats["Hms"].indexOf("H"), 1 + available_formats["Hms"].lastIndexOf("s"));
        //time_12["ahmsz"] = "XXXXX" + available_formats["hms"] + " " + "z";
        if (timeformat["long"]["timeFormat"]["pattern"].indexOf("HH:mm:ss") != -1) {
            time_12["ahmsz"] = timeformat["long"]["timeFormat"]["pattern"].replace("HH:mm:ss", available_formats["hms"]);
            // console.log("HHMMSS" + time_12["ahmsz"]);
        } else {
            time_12["ahmsz"] = timeformat["long"]["timeFormat"]["pattern"].replace("H:mm:ss", available_formats["hms"]);
            //console.log("HMMSS" + time_12["ahmsz"]);
        }
        time_12["ahmsz"] = time_12["ahmsz"].replace(/H/g, "h");
        time_12["hmsz"] = time_12["ahmsz"].replace("\\s?a", "");
        time_12["ahms"] = available_formats["hms"].replace(/H/g, "h");;
        time_12["hms"] = available_formats["hms"].replace("\\s?a", "").replace(/H/g, "h");
        //time_12["ms"] = available_formats["hms"].substring(available_formats["hms"].indexOf("m"), available_formats["hms"].lastIndexOf("s"));
        time_12["ms"] = available_formats["hms"].substring(available_formats["hms"].indexOf("m"), 1 + available_formats["Hms"].lastIndexOf("s")).replace(/H/g, "h");
    }
    if (available_formats["hm"]) {
        //time_12["ahmz"] = "XXXXX" + available_formats["hm"] + " " + "z";
        if (time_12["ahmsz"].indexOf(":ss") != -1) {
            time_12["ahmz"] = time_12["ahmsz"].replace(":ss", "");
        } else {
            time_12["ahmz"] = time_12["ahmsz"].replace(".ss", "");
        }
        time_12["ahm"] = available_formats["hm"].replace(/H/g, "h");
        time_12["hm"] = available_formats["hm"].replace("\\s?a", "").replace(/H/g, "h");
    }
    time_12["hmz"] = time_12["ahmz"].replace("\\s?a", "");
    time_12["ah"] = available_formats["h"];
    time_12["h"] = available_formats["H"].replace(/H/g,"h");
        //}
    time_12["m"] = "mm";
    time_12["s"] = "ss";
    time_fmt["12"] = time_12;
    time_fmt = JSON.parse(JSON.stringify(time_fmt).replace(/  /g, " "));
    gregorian["time"] = time_fmt;
    //console.log("gregorian date formats are :" + JSON.stringify(gregorian.time) + "++++++++++++++++++++++++++++++++++++++++++++");
    //code to get the date range
    var range = {};
    var intervalFormats = data.dates.calendars[default_calendar]["dateTimeFormats"]["intervalFormats"];
    intervalFormats = JSON.parse(JSON.stringify(intervalFormats).replace(/L/g, "M"));
    intervalFormats = JSON.parse(JSON.stringify(intervalFormats).replace(/G/g, ""));
    //intervalFormats =JSON.parse(JSON.stringify(intervalFormats).replace(/'[^']+'/, ""));
    //console.log("interval formats  "+JSON.stringify(intervalFormats)+"++++++++++++++++++++++++++++++++++++++++++++");
    //intervalFormats=JSON.parse(JSON.stringify(intervalFormats).replace(/[^.–\s\/Mdy]/g,""));
    //var start_time = intervalFormats["Hm"]["H"].substring(0, intervalFormats["Hm"]["H"].length / 2);
    //var end_time = intervalFormats["Hm"]["H"].substring(intervalFormats["Hm"]["H"].length / 2 + 1, intervalFormats["Hm"]["H"].length);
    //intervalFormats["Hm"]["H"] = intervalFormats["Hm"]["H"].replace(start_time, "");
    //intervalFormats["Hm"]["H"] = intervalFormats["Hm"]["H"].replace(end_time, "");
    intervalFormats["Hm"]["H"] = intervalFormats["intervalFormatFallback"].charAt((intervalFormats["intervalFormatFallback"].length - 1) / 2);
    //console.log("time format after replace "+intervalFormats["Hm"]["H"]+"++++++++++++++++++++++++++++++++++++++++++++");
    var ymd_d = intervalFormats["yMd"]["d"]; //.replace(/'[^']+'/g, "");
    var ymd_m = intervalFormats["yMd"]["M"]; //.replace(/'[^']+'/g, "");
    var ymd_y = intervalFormats["yMd"]["y"]; //.replace(/'[^']+'/g, "");
    var ymmmd_d = intervalFormats["yMMMd"]["d"]; //.replace(/'[^']+'/g, "");
    var ymmmd_m = intervalFormats["yMMMd"]["M"]; //.replace(/'[^']+'/g, "");
    var ymmmd_y = intervalFormats["yMMMd"]["y"]; //.replace(/'[^']+'/g, "");
    //var ym_d=intervalFormats["yM"]["d"];
    var ym_m = intervalFormats["yM"]["M"]; //.replace(/'[^']+'/g, "");
    var ym_y = intervalFormats["yM"]["y"]; //.replace(/'[^']+'/g, "");
    //var ymmm_d=intervalFormats["yMMM"]["d"];
    var ymmm_m = intervalFormats["yMMM"]["M"]; //.replace(/'[^']+'/g, "");
    var ymmm_y = intervalFormats["yMMM"]["y"]; //.replace(/'[^']+'/g, "");
    var ymmmm_m = intervalFormats["yMMMM"]["M"]; //.replace(/'[^']+'/g, "");
    var ymmmm_y = intervalFormats["yMMMM"]["y"]; //.replace(/'[^']+'/g, "");
    //for coo
    //intervalFormats =JSON.parse(JSON.stringify(intervalFormats).replace(/'[^']+'/g, ""));
    var c00 = {};
    var c01 = {};
    var c02 = {};
    var c03 = {};
    var c10 = {};
    var c11 = {};
    var c12 = {};
    var c20 = {};
    var c30 = {};
    //var s_sd = [];
    //var s_sm = [];
    //var s_sy = [];
    //var array=[date["dmy"]["s"],date["dmy"]["m"],date["dmy"]["l"],date["dmy"]["f"]]
    var array = [dmy["s"], dmy["m"], dmy["l"], dmy["f"]];
    //var arr_dm = [];
    //var arr_y = [];
    for (var i = 0; i < array.length; i++) {

        var k;
        var arr = array[i].split("'");

        if (arr.length > 1) {
            if (array[i].indexOf("'") != 0) {
                k = 0;
            } else {

                k = 1;
            }
            //var count = 0;

            for (; k < arr.length; k = k + 2) {
                // count++;

                arr[k] = arr[k].replace(/[d]+/g, "{sd}");
                arr[k] = arr[k].replace(/[M]+/g, "{sm}");
                arr[k] = arr[k].replace(/[y]+/g, "{sy}");

            }

            array[i] = arr.join("");
        } else {
            array[i] = array[i].replace(/[d]+/g, "{sd}");
            array[i] = array[i].replace(/[M]+/g, "{sm}");
            array[i] = array[i].replace(/[y]+/g, "{sy}");
        }
    }
    /*
    for (var i = 0; i < array.length; i++) {
        var index_of_st = array[i].indexOf("{st}");
        var index_of_sd = array[i].indexOf("{sd}");
        var index_of_sm = array[i].indexOf("{sm}");
        var index_of_sm = array[i].indexOf("{sy}");
    }
    */
    var array_interval_dmy = [ymd_d, ymd_m, ymd_y, ymmmd_d, ymmmd_m, ymmmd_y];
    var start_dmy = [];
    var end_dmy = [];
    var start_my = [];
    var end_my = [];
    var index_of_sd, index_of_sm, index_of_sy;
    var last_index_of_sd = -1,
        last_index_of_sm = -1,
        last_index_of_sy = -1;
    //var sy=[];
    for (var i = 0; i < array_interval_dmy.length; i++) {

        array_interval_dmy[i] = array_interval_dmy[i].replace(intervalFormats["Hm"]["H"], "–");
        array_interval_dmy[i] = array_interval_dmy[i].replace(/[-]+/g, "–");

        var k;
        var arr = array_interval_dmy[i].split("'");

        if (arr.length > 1) {
            if (array_interval_dmy[i].indexOf("'") != 0) {
                k = 0;
            } else {

                k = 1;
            }
            //var count = 0;

            for (; k < arr.length; k = k + 2) {
                //count++;

                arr[k] = arr[k].replace(/[^Mdy–.\/\s]/g, "");
                arr[k] = arr[k].replace(/[d]+/g, "{sd}");
                arr[k] = arr[k].replace(/[M]+/g, "{sm}");
                arr[k] = arr[k].replace(/[y]+/g, "{sy}");

            }

            array_interval_dmy[i] = arr.join("");
        } else {
            array_interval_dmy[i] = array_interval_dmy[i].replace(/[^Mdy–.,\/\s]/g, "");
            array_interval_dmy[i] = array_interval_dmy[i].replace(/[d]+/g, "{sd}");
            array_interval_dmy[i] = array_interval_dmy[i].replace(/[M]+/g, "{sm}");
            array_interval_dmy[i] = array_interval_dmy[i].replace(/[y]+/g, "{sy}");
        }
        // console.log("array_interval_dmy " + array_interval_dmy[i]);

        index_of_sd = array_interval_dmy[i].indexOf("{sd}");
        index_of_sm = array_interval_dmy[i].indexOf("{sm}");
        index_of_sy = array_interval_dmy[i].indexOf("{sy}");
        if (array_interval_dmy[i].indexOf("{sd}") != array_interval_dmy[i].lastIndexOf("{sd}")) {
            last_index_of_sd = array_interval_dmy[i].lastIndexOf("{sd}");
        }
        if (array_interval_dmy[i].indexOf("{sm}") != array_interval_dmy[i].lastIndexOf("{sm}")) {
            last_index_of_sm = array_interval_dmy[i].lastIndexOf("{sm}");
        }
        if (array_interval_dmy[i].indexOf("{sy}") != array_interval_dmy[i].lastIndexOf("{sy}")) {
            last_index_of_sy = array_interval_dmy[i].lastIndexOf("{sy}");
        }
        var arr_min = [ /*index_of_sd,index_of_sm,index_of_sy,*/ last_index_of_sd, last_index_of_sm, last_index_of_sy];

        var arr_max = [index_of_sd, index_of_sm, index_of_sy];
        var minimum = arr_min.filter(function (x) {
            return x >= 0;
        })
            .reduce(function (a, b) {
                return Math.min(a, b);
            }, Infinity);

        var curr = arr_max[0];
        var diff = Math.abs(minimum - curr);

        for (var val = 0; val < arr_max.length; val++) {
            var newdiff = Math.abs(minimum - arr_max[val]);
            if ((newdiff < diff) && (minimum > arr_max[val])) {
                diff = newdiff;
                curr = arr_max[val];
            }
        }
        var maximum = curr;

        // console.log("Minimum Index is :" + minimum);
        //console.log("Maximum Index is :" + maximum);

        separaor_substring = array_interval_dmy[i].substring(maximum + 5, minimum);
        // console.log(" separaor_substring" + separaor_substring);
        index_of_separator = maximum + 5 + separaor_substring.indexOf("–");
        //console.log(" index_of_separator" + index_of_separator);
        //console.log("start_interval_dmy " + start_dmy[i]);
        start_dmy[i] = array_interval_dmy[i].substring(0, index_of_separator);
        //console.log("start_interval_dmy " + start_dmy[i]);
        end_dmy[i] = array_interval_dmy[i].substring(1 + index_of_separator, array_interval_dmy[i].length);
        end_dmy[i] = end_dmy[i].replace("{sd}", "{ed}");
        end_dmy[i] = end_dmy[i].replace("{sm}", "{em}");
        end_dmy[i] = end_dmy[i].replace("{sy}", "{ey}");
        //end_dmy[i] = end_dmy[i].replace("{sy}", "{ey}");
        //end_dmy[i] = end_dmy[i].replace("{sy}", "{ey}");
        if (start_dmy[i].charAt(start_dmy[i].length - 1) === " ") {
            start_dmy[i] = start_dmy[i].slice(0, -1);
            intervalFormats["Hm"]["H"] = " " + intervalFormats["Hm"]["H"] + " ";
            end_dmy[i] = end_dmy[i].slice(1);
        }

        if (start_dmy[i].charAt(0) === " ") {
            start_dmy[i] = start_dmy[i].slice(1);
        }

        if (end_dmy[i].charAt(0) === "–") {
            end_dmy[i] = end_dmy[i].slice(1);
        }
        //console.log("array_interval_dmy " + array_interval_dmy[i]);
        // console.log("start_interval_dmy " + i + start_dmy[i]);
        //console.log("end_interval_dmy " + i + end_dmy[i]);
    }
    last_index_of_sd = -1, last_index_of_sm = -1, last_index_of_sy = -1;
    maximum = minimum = 0;
    var array_interval_my = [ym_m, ym_y, ymmm_m, ymmm_y, ymmmm_m, ymmmm_y];
    for (var i = 0; i < array_interval_my.length; i++) {

        array_interval_my[i] = array_interval_my[i].replace(intervalFormats["Hm"]["H"], "–");
        array_interval_my[i] = array_interval_my[i].replace(/[-]+/g, "–");
        var k;
        var arr = array_interval_my[i].split("'");

        if (arr.length > 1) {
            if (array_interval_my[i].indexOf("'") != 0) {
                k = 0;
            } else {

                k = 1;
            }
            //var count = 0;

            for (; k < arr.length; k = k + 2) {
                // count++;

                arr[k] = arr[k].replace(/[^Mdy–.\/\s]/g, "");
                arr[k] = arr[k].replace(/[d]+/g, "{sd}");
                arr[k] = arr[k].replace(/[M]+/g, "{sm}");
                arr[k] = arr[k].replace(/[y]+/g, "{sy}");

            }

            array_interval_my[i] = arr.join("");
        } else {
            array_interval_my[i] = array_interval_my[i].replace(/[^Mdy–.\/\s]/g, "");
            //array_interval_my[i] = array_interval_my[i].replace(/[d]+/g, "{sd}");
            array_interval_my[i] = array_interval_my[i].replace(/[M]+/g, "{sm}");
            array_interval_my[i] = array_interval_my[i].replace(/[y]+/g, "{sy}");
        }
        //index_of_sd = array_interval_my[i].lastIndexOf("{sd}");
        index_of_sm = array_interval_my[i].indexOf("{sm}");
        index_of_sy = array_interval_my[i].indexOf("{sy}");
        //if ( array_interval_dmy[i].indexOf("{sd}") != array_interval_dmy[i].lastIndexOf("{sd}") ) {
        //last_index_of_sd = array_interval_dmy[i].lastIndexOf("{sd}");
        //	}
        if (array_interval_my[i].indexOf("{sm}") != array_interval_my[i].lastIndexOf("{sm}")) {
            last_index_of_sm = array_interval_my[i].lastIndexOf("{sm}");
        }
        if (array_interval_my[i].indexOf("{sy}") != array_interval_my[i].lastIndexOf("{sy}")) {
            last_index_of_sy = array_interval_my[i].lastIndexOf("{sy}");
        }
        var arr_min = [ /*index_of_sd,index_of_sm,index_of_sy,last_index_of_sd,*/ last_index_of_sm, last_index_of_sy];

        var arr_max = [index_of_sm, index_of_sy];
        minimum = arr_min.filter(function (x) {
            return x >= 0;
        })
            .reduce(function (a, b) {
                return Math.min(a, b);
            }, Infinity);

        var curr = arr_max[0];
        var diff = Math.abs(minimum - curr);
        //console.log("Minimum Index is :" + minimum);
        // console.log(" Index of sm is :" + index_of_sm);
        // console.log(" Index of sy is :" + index_of_sy);
        //console.log("Maximum Index is :" + maximum);
        //var maximum = arr_max.filter(function (x) { return x < minimum; })
        // .reduce(function (a, b) { return Math.max(a, b); }, Infinity);
        for (var val = 0; val < arr_max.length; val++) {
            var newdiff = Math.abs(minimum - arr_max[val]);
            if (newdiff < diff) {
                diff = newdiff;
                curr = arr_max[val];
            }
        }
        maximum = curr;
        // console.log("Maximum Index is :" + maximum);
        //index_of_separator = array_interval_my[i].indexOf("–");
        //index_of_separator = Math.min(index_of_sd,index_of_sm,index_of_sy);
        //start_my[i] = array_interval_my[i].substring(0, index_of_separator);
        //end_my[i] = array_interval_my[i].substring(1 + index_of_separator, array_interval_my[i].length);
        separaor_substring = array_interval_my[i].substring(maximum + 5, minimum);
        //console.log(" separaor_substring" + separaor_substring);
        index_of_separator = maximum + 5 + separaor_substring.indexOf("–");
        // console.log(" index_of_separator" + index_of_separator);
        start_my[i] = array_interval_my[i].substring(0, index_of_separator);
        //console.log("start_interval_my " + start_my[i]);
        end_my[i] = array_interval_my[i].substring(1 + index_of_separator, array_interval_my[i].length);
        end_my[i] = end_my[i].replace("{sd}", "{ed}");
        end_my[i] = end_my[i].replace("{sm}", "{em}");
        end_my[i] = end_my[i].replace("{sy}", "{ey}");
        /*if (start_my[i].charAt(start_my[i].length - 1) === " ") {
            start_my[i] = start_my[i].slice(0, -1);
            //intervalFormats["Hm"]["H"] = " "+ intervalFormats["Hm"]["H"] + " ";
            end_my[i] = end_my[i].slice(1);
        }*/

        if (start_my[i].charAt(start_my[i].length - 1) === " ") {
            start_my[i] = start_my[i].slice(0, -1);

            intervalFormats["Hm"]["H"] = " " + intervalFormats["Hm"]["H"] + " ";
            end_my[i] = end_my[i].slice(1);
        }
        if (end_my[i].charAt(0) === "–") {
            end_my[i] = end_my[i].slice(1);
        }
        //console.log("array_interval_my " + array_interval_my[i]);
        //console.log("start_interval_my " + start_my[i]);
        //console.log("end_interval_my " + end_my[i]);
    }
    //c01
    //c01["s"]=array_interval_dmy[0]+
    if (gregorian["order"] === "{time} {date}") {
        c00["s"] = "{st}" + intervalFormats["Hm"]["H"] + "{et}" + " " + array[0];
        c00["m"] = "{st}" + intervalFormats["Hm"]["H"] + "{et}" + " " + array[1];
        c00["l"] = "{st}" + intervalFormats["Hm"]["H"] + "{et}" + " " + array[2];
        c00["f"] = "{st}" + intervalFormats["Hm"]["H"] + "{et}" + " " + array[3];
    } else {
        c00["s"] = array[0] + " " + "{st}" + intervalFormats["Hm"]["H"] + "{et}";
        c00["m"] = array[1] + " " + "{st}" + intervalFormats["Hm"]["H"] + "{et}";
        c00["l"] = array[2] + " " + "{st}" + intervalFormats["Hm"]["H"] + "{et}";
        c00["f"] = array[3] + " " + "{st}" + intervalFormats["Hm"]["H"] + "{et}";
    }
    //for c01
    if (gregorian["order"] === "{time} {date}") {
        c01["s"] = "{st}" + " " + start_dmy[0] + intervalFormats["Hm"]["H"] + "{et}" + " " + end_dmy[0];
        c01["l"] = "{st}" + " " + start_dmy[3] + intervalFormats["Hm"]["H"] + "{et}" + " " + end_dmy[3];
    } else {
        c01["s"] = start_dmy[0] + " " + "{st}" + intervalFormats["Hm"]["H"] + end_dmy[0] + " " + "{et}";
        c01["l"] = start_dmy[3] + " " + "{st}" + intervalFormats["Hm"]["H"] + end_dmy[3] + " " + "{et}";
    }
    c01["m"] = c01["s"];
    c01["f"] = c01["l"];
    //for c02
    if (gregorian["order"] === "{time} {date}") {
        c02["s"] = "{st}" + " " + start_dmy[1] + intervalFormats["Hm"]["H"] + "{et}" + " " + end_dmy[1];
        c02["l"] = "{st}" + " " + start_dmy[4] + intervalFormats["Hm"]["H"] + "{et}" + " " + end_dmy[4];
    } else {
        c02["s"] = start_dmy[1] + " " + "{st}" + intervalFormats["Hm"]["H"] + end_dmy[1] + " " + "{et}";
        c02["l"] = start_dmy[4] + " " + "{st}" + intervalFormats["Hm"]["H"] + end_dmy[4] + " " + "{et}";
    }
    c02["f"] = c02["l"];
    c02["m"] = c02["s"];
    //for c03
    if (gregorian["order"] === "{time} {date}") {
        c03["s"] = "{st}" + " " + start_dmy[2] + intervalFormats["Hm"]["H"] + "{et}" + " " + end_dmy[2];
        c03["l"] = "{st}" + " " + start_dmy[5] + intervalFormats["Hm"]["H"] + "{et}" + " " + end_dmy[5];
    } else {
        c03["s"] = start_dmy[2] + " " + "{st}" + intervalFormats["Hm"]["H"] + end_dmy[2] + " " + "{et}";
        c03["l"] = start_dmy[5] + " " + "{st}" + intervalFormats["Hm"]["H"] + end_dmy[5] + " " + "{et}";
    }
    c03["f"] = c03["l"];
    c03["m"] = c03["s"];
    //for c10
    c10["s"] = start_dmy[0] + intervalFormats["Hm"]["H"] + end_dmy[0];
    c10["l"] = start_dmy[3] + intervalFormats["Hm"]["H"] + end_dmy[3];
    c10["f"] = c10["l"];
    c10["m"] = c10["s"];
    //for c11
    c11["s"] = start_dmy[1] + intervalFormats["Hm"]["H"] + end_dmy[1];
    c11["m"] = c11["s"];
    c11["l"] = start_dmy[4] + intervalFormats["Hm"]["H"] + end_dmy[4];
    c11["f"] = c11["l"];
    //for c12
    c12["s"] = start_dmy[2] + intervalFormats["Hm"]["H"] + end_dmy[2];
    c12["m"] = c12["s"];
    c12["l"] = start_dmy[5] + intervalFormats["Hm"]["H"] + end_dmy[5];
    c12["f"] = c12["l"];
    //for c20
    c20["s"] = start_my[1] + intervalFormats["Hm"]["H"] + end_my[1];
    c20["m"] = c20["s"];
    c20["l"] = start_my[3] + intervalFormats["Hm"]["H"] + end_my[3];
    c20["f"] = start_my[5] + intervalFormats["Hm"]["H"] + end_my[5];
    //for c30
    c30 = "{sy}" + intervalFormats["Hm"]["H"] + "{ey}";
    //var array_intervalcodes=[c00,c01,c02,c10,c11,c12,c20];
    /*for(var i=0;i<array_intervalcodes.length;i++){
	range["\""+array_intervalcodes[i]+"\""]=array_intervalcodes[i];
	}*/
    range["c00"] = c00;
    range["c01"] = c01;
    range["c02"] = c02;
    range["c10"] = c10;
    range["c11"] = c11;
    range["c12"] = c12;
    range["c20"] = c20;
    range["c30"] = c30;
    range = JSON.parse(JSON.stringify(range).replace(/[ ]+/g, " "));
    //range["c00"]=c00;
    //var start_time=JSON.stringify(intervalFormats["Hm"]["H"]).replace(start_time_fmt,"st");
    //r end_time=intervalFormats["Hm"]["H"].substring(1+intervalFormats["Hm"]["H"].lastIndexOf("–"),intervalFormats["Hm"]["H"].length).replace("et");
    /*console.log("s_sd :"+s_sd+"++++++++++++++++++++++++++++++++++++++++++++");
	console.log("s_sm:"+s_sm+"++++++++++++++++++++++++++++++++++++++++++++");
	console.log("s_sy:"+s_sy+"++++++++++++++++++++++++++++++++++++++++++++");
	console.log("START TIME:"+start_time+"++++++++++++++++++++++++++++++++++++++++++++");
	console.log("END TIME:"+end_time+"++++++++++++++++++++++++++++++++++++++++++++");
	console.log("START DATE:"+start_date+"++++++++++++++++++++++++++++++++++++++++++++");
	console.log("END DATE:"+end_date+"++++++++++++++++++++++++++++++++++++++++++++");
	console.log("START MONTH:"+start_month+"++++++++++++++++++++++++++++++++++++++++++++");
	console.log("END MONTH:"+end_month+"++++++++++++++++++++++++++++++++++++++++++++");
	console.log("START YEAR:"+start_year+"++++++++++++++++++++++++++++++++++++++++++++");
	console.log("END YEAR:"+end_year+"++++++++++++++++++++++++++++++++++++++++++++");*/
    //console.log("END TIME :"+end_time+"++++++++++++++++++++++++++++++++++++++++++++");
    //console.log("c00:"+JSON.stringify(c00)+"++++++++++++++++++++++++++++++++++++++++++++");
    //console.log("interval codes are "+JSON.stringify(range)+"++++++++++++++++++++++++++++++++++++++++++++");
    gregorian["range"] = range;
    dates[default_calendar] = gregorian;
    //console.log("gregorian date formats are :"+JSON.stringify(gregorian)+"++++++++++++++++++++++++++++++++++++++++++++");
    return dates;
}
//console.log("\nMerging and pruning resources...");

function writeDateFormats(language, script, region, data) {
    var path = calcLocalePath(language, script, region, "");
    if (data.generated) {
        if (anyProperties(data)) {
            if (data.gregorian) {
                def_calendar = "gregorian";
            } else {
                def_calendar = "buddhist";
            }
            //console.log("date formats are :"+JSON.stringify(data)+"++++++++++++++++++++++++++++++++++++++++++++");
            // console.log("default calendar is :"+def_calendar+"++++++++++++++++++++++++++++++++++++++++++++");

            var empty_data = data[def_calendar]["date"];
            //var empty_data_time = data["gregorian"]["time"];
            var dateFormat = {};
            var gregorian = {};
            var date = {};
            var time_fmt = data[def_calendar]["time"];
            var time = {};
            var range = data[def_calendar]["range"];
            //console.log("gregorian range formats are :"+JSON.stringify(range)+"++++++++++++++++++++++++++++++++++++++++++++");
            var range_fmt = {};
            //var time_12={};
            if (data[def_calendar]["order"] != undefined)
                gregorian["order"] = data[def_calendar]["order"];
            if (empty_data) {
                var arr_data = ["dm", "dmy", "my", "m", "d", "y", "dmwy", "dmw", "n"];
                var arr_keys = [empty_data["dm"], empty_data["dmy"], empty_data["my"], empty_data["m"], empty_data["d"], empty_data["y"], empty_data["dmwy"], empty_data[
                    "dmw"], empty_data["n"]];
                for (var i = 0; i < arr_data.length; i++) {
                    if (!common.isEmpty(arr_keys[i])) {
                        date[arr_data[i]] = arr_keys[i];
                    }
                }
            }
            if (!common.isEmpty(date)) {
                gregorian["date"] = date;
            }
            if (data[def_calendar]["time"]) {
                time_fmt["24"] = data[def_calendar]["time"]["24"];
                if (!common.isEmpty(data[def_calendar]["time"]["24"])) {
                    time["24"] = data[def_calendar]["time"]["24"];
                    //gregorian["time"]= time_24;
                }
                if (!common.isEmpty(data[def_calendar]["time"]["12"])) {
                    time["12"] = data[def_calendar]["time"]["12"];
                    //gregorian["time"]= time_12;
                }
            }
            if (!common.isEmpty(time)) {
                gregorian["time"] = time;
            }
            if (range) {
                var range_keys = ["c00", "c01", "c02", "c10", "c11", "c12", "c20"];
                var array_range_codes = [range["c00"], range["c01"], range["c02"], range["c10"], range["c11"], range["c12"], range["c20"]];
                for (var i = 0; i < range_keys.length; i++) {
                    //console.log("gregorian range formats are :"+JSON.stringify(array_range_codes[i])+"++++++++++++++++++++++++++++++++++++++++++++");
                    if ((!common.isEmpty(array_range_codes[i]))) {
                        range_fmt[range_keys[i]] = array_range_codes[i];
                    }
                }
                if (range["c30"]) {
                    range_fmt["c30"] = range["c30"];
                }
            }
            if (!common.isEmpty(range_fmt)) {
                gregorian["range"] = range_fmt;
            }
            if (common.isEmpty(gregorian)) {
                console.log("Skipping empty " + path);
                return;
            }
            makeDirs(path);
            //gregorian["date"]=date;
            dateFormat[def_calendar] = gregorian;
            dateFormat["generated"] = true;
            console.log("Writing " + path + "dateformats.json");
            fs.writeFileSync(path + "/dateformats.json", JSON.stringify(dateFormat, true, 4), "utf-8");
        } else {
            console.log("Skipping empty " + path + "dateformats.json");
        }
    } else {
        console.log("Skipping existing " + path + "dateformats.json");
    }
}
writeDateFormats(undefined, undefined, undefined, resources_dateformat_data.data);
for (language in resources_dateformat_data) {
    if (language && resources_dateformat_data[language] && language !== 'data' && language !== 'merged') {
        for (var subpart in resources_dateformat_data[language]) {
            if (subpart && resources_dateformat_data[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
                if (Locale.isScriptCode(subpart)) {
                    script = subpart;
                    for (region in resources_dateformat_data[language][script]) {
                        if (region && resources_dateformat_data[language][script][region] && region !== 'data' && region !== 'merged') {
                            writeDateFormats(language, script, region, resources_dateformat_data[language][script][region].data);
                        }
                    }
                    writeDateFormats(language, script, undefined, resources_dateformat_data[language][script].data);
                } else {
                    writeDateFormats(language, undefined, subpart, resources_dateformat_data[language][subpart].data);
                }
            }
        }
        writeDateFormats(language, undefined, undefined, resources_dateformat_data[language].data);
    }
}
//writeDateFormats(undefined, undefined, undefined, resources_dateformat_data.data);
process.exit(0);
