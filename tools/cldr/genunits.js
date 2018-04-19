/*
 * genunits.js - ilib tool to generate the json data about unit formats
 *
 * Copyright © 2013, 2018 JEDLSoft
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
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;

var cldrData = require("cldr-data");

function usage() {
    console.log("Usage: gencountrynames [-h] locale_data_dir\n" +
            "Generate unit formats from the CLDR data.\n\n" +
            "-h or --help\n" +
            "  this help\n" +
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

if (process.argv.length < 3) {
    util.error('Error: not enough arguments');
    usage();
}

localeDirName = process.argv[2];

console.log("genunits - tool to generate the json data about unit formats from the CLDR data.\n" +
        "Copyright (c) 2013, 2018 JEDLSoft\n");

console.log("locale dir: " + localeDirName + "\n");

if (!fs.existsSync(localeDirName)) {
    util.error("Could not access locale data directory " + localeDirName);
    usage();
}

function calcLocalePath(language, script, region) {
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
    return path;
}

function writeUnits(data, language, script, region) {
    var path = calcLocalePath(language, script, region);
    console.log("Writing " + path);
    makeDirs(path);
    fs.writeFileSync(path + "unitfmt.json", JSON.stringify(data, true, 4), "utf-8");
}

function frameUnitsString(data) {
    var choices = [];
    if (data["unitPattern-count-zero"])
        choices.push("zero#" + data["unitPattern-count-zero"]);
    if (data["unitPattern-count-one"])
        choices.push("one#" + data["unitPattern-count-one"]);
    if (data["unitPattern-count-two"])
        choices.push("two#" + data["unitPattern-count-two"]);
    if (data["unitPattern-count-few"])
        choices.push("few#" + data["unitPattern-count-few"]);
    if (data["unitPattern-count-many"])
        choices.push("many#" + data["unitPattern-count-many"]);
    if (data["unitPattern-count-other"])
        choices.push("#" + data["unitPattern-count-other"]);
    return choices.join("|").replace(/\{0\}/g, "{n}");
}

function frameUnitsStringCompound(template, numerator, denominator) {
    var d = denominator["unitPattern-count-one"] || denominator.displayName;
    return template.replace(/\{0\}/g, numerator.displayName).replace(/\{1\}/g, d.replace(/\{0\}/, "").trim());
}

function isAsianLanguage(locale) {
    var l = new Locale(locale);
    return l.getLanguage() === "ja" || l.getLanguage() === "zh" || l.getLanguage() === "th";
}

function frameUnits(data, locale, localeData) {
    if (!localeData["unitfmt"]) {
        localeData["unitfmt"] = {};
    }
    if (!localeData["unitfmt"]["long"]) {
        localeData["unitfmt"]["long"] = {};
    }
    if (!localeData["unitfmt"]["short"]) {
        localeData["unitfmt"]["short"] = {};
    }
    for (var ufl in data["main"][locale]["units"]["long"]) {
        if (ufl !== "per") {
            var index = ufl.indexOf("-");
            var dispname = ufl.substring(index+1);
            localeData["unitfmt"]["long"][dispname] = frameUnitsString(data["main"][locale]["units"]["long"][ufl]);
            // special case - format is shared
            if (dispname === "ton") {
                localeData["unitfmt"]["long"]["short-ton"] = localeData["unitfmt"]["long"]["ton"];
            }
        }
    }
    for (var ufs in data["main"][locale]["units"]["short"]) {
        if (ufs !== "per") {
            var index = ufs.indexOf("-");
            var dispname = ufs.substring(index+1);
            localeData["unitfmt"]["short"][dispname] = frameUnitsString(data["main"][locale]["units"]["short"][ufs]);
            // special case - format is shared
            if (dispname === "ton") {
                localeData["unitfmt"]["short"]["short-ton"] = localeData["unitfmt"]["short"]["ton"];
            }
        }
    }

    // compound measures
    var l = new Locale(locale);
    if (locale !== "root") {
        // English can inherit from root, so just ignore it
        if (l.getLanguage() !== "en") {
            var shortCompoundTemplate = "#{n}" + (isAsianLanguage(locale) ? "" : " ") + data.main[locale].units.short.per.compoundUnitPattern;
            var longCompoundTemplate = "#{n}" + (isAsianLanguage(locale) ? "" : " ") + data.main[locale].units.long.per.compoundUnitPattern;
        
            // these don't exist in cdlr by themselves, but we can construct them
            var compounds = {
                "foot-per-second": ["length-foot", "duration-second"],
                "kilometer-per-second": ["length-kilometer", "duration-second"],
                "mile-per-second": ["length-mile", "duration-second"],
                "kilometer-per-liter": ["length-kilometer", "volume-liter"],
            };
        
            for (var c in compounds) {
                if (!localeData.unitfmt.short[c]) {
                    localeData.unitfmt.short[c] = frameUnitsStringCompound(
                        shortCompoundTemplate,
                        data.main[locale].units.short[compounds[c][0]],
                        data.main[locale].units.short[compounds[c][1]]
                        );
                }
                if (!localeData.unitfmt.long[c]) {
                    localeData.unitfmt.long[c] = frameUnitsStringCompound(
                        shortCompoundTemplate,
                        data.main[locale].units.long[compounds[c][0]],
                        data.main[locale].units.long[compounds[c][1]]
                        );
                }
            }
        }
    } else {
        // these don't exist in cldr yet, so we have to default to English
        localeData["unitfmt"]["long"]["decameter"] = "one#{n} decameter|#{n} decameters";
        localeData["unitfmt"]["long"]["hectometer"] = "one#{n} hectometer|#{n} hectometers";
        localeData["unitfmt"]["long"]["megameter"] = "one#{n} megameter|#{n} megameters";
        localeData["unitfmt"]["long"]["gigameter"] = "one#{n} gigameter|#{n} gigameters";
        localeData["unitfmt"]["long"]["petabit"] = "one#{n} petabit|#{n} petabits";
        localeData["unitfmt"]["long"]["petabyte"] = "one#{n} petabyte|#{n} petabytes";
        localeData["unitfmt"]["long"]["BTU"] = "one#{n} BTU|#{n} BTU";
        localeData["unitfmt"]["long"]["millijoule"] = "one#{n} millijoule|#{n} millijoules";
        localeData["unitfmt"]["long"]["watt-hour"] = "one#{n} watt hour|#{n} watt hours";
        localeData["unitfmt"]["long"]["megajoule"] = "one#{n} megajoule|#{n} megajoules";
        localeData["unitfmt"]["long"]["gigajoule"] = "one#{n} gigajoule|#{n} gigajoules";
        localeData["unitfmt"]["long"]["megawatt-hour"] = "one#{n} megawatt hour|#{n} megawatt hours";
        localeData["unitfmt"]["long"]["gigawatt-hour"] = "one#{n} gigawatt hour|#{n} gigawatt hours";
        localeData["unitfmt"]["long"]["kilometer-per-liter"] = "1#{n} kilometer per liter|#{n} kilometers per liter";
        localeData["unitfmt"]["long"]["short-ton"] = "1#{n} short ton|#{n} short tons";
        localeData["unitfmt"]["long"]["foot-per-second"] = "1#{n} foot per second|#{n} feet per second";
        localeData["unitfmt"]["long"]["kilometer-per-second"] = "1#{n} kilometer per second|#{n} kilometers per second";
        localeData["unitfmt"]["long"]["mile-per-second"] = "1#{n} mile per second|#{n} miles per second";
        localeData["unitfmt"]["long"]["decade"] = "one#{n} decade|#{n} decades";
        localeData["unitfmt"]["long"]["teaspoon-imperial"] = "one#{n} imperial teaspoon|#{n} imperial teaspoons";
        localeData["unitfmt"]["long"]["tablespoon-imperial"] = "one#{n} imperial tablespoon|#{n} imperial tablespoons";
        localeData["unitfmt"]["long"]["ounce-imperial"] = "one#{n} imperial ounce|#{n} imperial ounces";
        localeData["unitfmt"]["long"]["pint-imperial"] = "one#{n} imperial pint|#{n} imperial pints";
        localeData["unitfmt"]["long"]["quart-imperial"] = "one#{n} imperial quart|#{n} imperial quarts";
        localeData["unitfmt"]["long"]["kilometer-per-second"] = "1#{n} kilometer per second|#{n} kilometers per second";

        localeData["unitfmt"]["short"]["decameter"] = "one#{n} dam|#{n} dam";
        localeData["unitfmt"]["short"]["hectometer"] = "one#{n} hm|#{n} hm";
        localeData["unitfmt"]["short"]["megameter"] = "one#{n} Mm|#{n} Mm";
        localeData["unitfmt"]["short"]["gigameter"] = "one#{n} Gm|#{n} Gm";
        localeData["unitfmt"]["short"]["petabit"] = "one#{n} pb|#{n} pb";
        localeData["unitfmt"]["short"]["petabyte"] = "one#{n} pB|#{n} pB";
        localeData["unitfmt"]["short"]["BTU"] = "one#{n} BTU|#{n} BTU";
        localeData["unitfmt"]["short"]["millijoule"] = "one#{n} mJ|#{n} mJ";
        localeData["unitfmt"]["short"]["watt-hour"] = "one#{n} Wh|#{n} Wh";
        localeData["unitfmt"]["short"]["megajoule"] = "one#{n} MJ|#{n} MJ";
        localeData["unitfmt"]["short"]["gigajoule"] = "one#{n} GJ|#{n} GJ";
        localeData["unitfmt"]["short"]["megawatt-hour"] = "one#{n} MWh|#{n} MWh";
        localeData["unitfmt"]["short"]["gigawatt-hour"] = "one#{n} GWh|#{n} GWh";
        localeData["unitfmt"]["short"]["kilometer-per-liter"] = "1#{n} km/l|#{n} km/l";
        localeData["unitfmt"]["short"]["short-ton"] = "1#{n} short ton|#{n} short tons";
        localeData["unitfmt"]["short"]["foot-per-second"] = "1#{n} ft/s|#{n} ft/s";
        localeData["unitfmt"]["short"]["kilometer-per-second"] = "1#{n}  km/s|#{n}  km/s";
        localeData["unitfmt"]["short"]["mile-per-second"] = "1#{n} mps|#{n}  mps";
        localeData["unitfmt"]["short"]["decade"] = "one#{n} decade|#{n} decades";
        localeData["unitfmt"]["short"]["teaspoon-imperial"] = "one#{n} imperial tsp|#{n} imperial tsp";
        localeData["unitfmt"]["short"]["tablespoon-imperial"] = "one#{n} imperial tbsp|#{n} imperial tbsp";
        localeData["unitfmt"]["short"]["ounce-imperial"] = "one#{n} imperial oz|#{n} imperial oz";
        localeData["unitfmt"]["short"]["pint-imperial"] = "one#{n} imperial pt|#{n} imperial pt";
        localeData["unitfmt"]["short"]["quart-imperial"] = "one#{n} imperial qt|#{n} imperial qt";
    }
    return localeData;
}

console.log("Loading locale data...\n");

cldrData.availableLocales.forEach(function(locale) {
    var path = "main/" + locale + "/units";
    var data = cldrData(path);
    var localeData = {};
    var l = new Locale(locale);

    localeData = frameUnits(data, locale, localeData);

    // now special case for the root
    if (locale === "root") {
        writeUnits(localeData);
    } else {
        var l = new Locale(locale);
        writeUnits(localeData, l.getLanguage(), l.getScript(), l.getRegion());
    }
});
