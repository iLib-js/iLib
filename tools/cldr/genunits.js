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

function frameUnitsStringCompound(template, n, numerator, denominator) {
    var num = numerator["unitPattern-count-other"] || numerator["unitPattern-count-one"];
    if (num) {
        num = num.replace(/\{0\}/, n.trim());
    } else {
        num = n + numerator.displayName;
    }

    if (denominator.perUnitPattern) {
        return denominator.perUnitPattern.replace(/\{0\}/g, num).trim();
    }

    var den = (denominator["unitPattern-count-one"].replace(/\{0\}/, "") || denominator.displayName).trim();
    return template.replace(/\{0\}/g, num).replace(/\{1\}/g, den);
}

function isAsianLanguage(locale) {
    var l = new Locale(locale);
    return l.getLanguage() === "ja" || l.getLanguage() === "zh" || l.getLanguage() === "th";
}

function frameUnits(data, locale, localeData) {
    if (!localeData["unitfmt"]) {
        localeData["unitfmt"] = {};
    }
    ["long", "short"].forEach(function(size) {
        if (!localeData["unitfmt"][size]) {
            localeData["unitfmt"][size] = {};
        }
        for (var ufl in data["main"][locale]["units"][size]) {
            if (ufl !== "per") {
                var index = ufl.indexOf("-");
                var dispname = ufl.substring(index+1);
                localeData["unitfmt"][size][dispname] = frameUnitsString(data["main"][locale]["units"][size][ufl]);
                // special case - format is shared
                if (dispname === "ton") {
                    localeData["unitfmt"][size]["short-ton"] = localeData["unitfmt"][size]["ton"];
                }
            }
        }
    });

    // these don't exist in cdlr by themselves, but we can construct them
    var compounds = {
        "foot-per-second": ["length-foot", "duration-second"],
        "kilometer-per-second": ["length-kilometer", "duration-second"],
        "mile-per-second": ["length-mile", "duration-second"],
        "kilometer-per-liter": ["length-kilometer", "volume-liter"],
        "bit-per-second": ["digital-bit", "duration-second"],
        "kilobit-per-second": ["digital-kilobit", "duration-second"],
        "megabit-per-second": ["digital-megabit", "duration-second"],
        "gigabit-per-second": ["digital-gigabit", "duration-second"],
        "terabit-per-second": ["digital-terabit", "duration-second"],
        "byte-per-second": ["digital-byte", "duration-second"],
        "kilobyte-per-second": ["digital-kilobyte", "duration-second"],
        "megabyte-per-second": ["digital-megabyte", "duration-second"],
        "gigabyte-per-second": ["digital-gigabyte", "duration-second"],
        "terabyte-per-second": ["digital-terabyte", "duration-second"],
        "byte-per-hour": ["digital-byte", "duration-hour"],
        "kilobyte-per-hour": ["digital-kilobyte", "duration-hour"],
        "megabyte-per-hour": ["digital-megabyte", "duration-hour"],
        "gigabyte-per-hour": ["digital-gigabyte", "duration-hour"],
        "terabyte-per-hour": ["digital-terabyte", "duration-hour"]
    };

    var l = new Locale(locale);
    if (locale !== "root") {
        // English can inherit from root, so just ignore it
        //if (l.getLanguage() !== "en") {
            ["long", "short"].forEach(function(size) {
                var compoundTemplate = data.main[locale].units[size].per.compoundUnitPattern;
                var n = "{n}" + (isAsianLanguage(locale) ? "" : " ");

                for (var c in compounds) {
                    if (!localeData.unitfmt[size][c]) {
                        localeData.unitfmt[size][c] = "#" + frameUnitsStringCompound(
                            compoundTemplate,
                            n,
                            data.main[locale].units[size][compounds[c][0]],
                            data.main[locale].units[size][compounds[c][1]]
                            );
                    }
                }
            });
        //}
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
        localeData["unitfmt"]["long"]["cup-imperial"] = "one#{n} imperial cup|#{n} imperial cups";
        localeData["unitfmt"]["long"]["pint-imperial"] = "one#{n} imperial pint|#{n} imperial pints";
        localeData["unitfmt"]["long"]["quart-imperial"] = "one#{n} imperial quart|#{n} imperial quarts";
        localeData["unitfmt"]["long"]["kilometer-per-second"] = "1#{n} kilometer per second|#{n} kilometers per second";
        localeData["unitfmt"]["long"]["bit-per-second"] = "#{n} b/s";
        localeData["unitfmt"]["long"]["kilobit-per-second"] = "#{n} kb/s";
        localeData["unitfmt"]["long"]["megabit-per-second"] = "#{n} Mb/s";
        localeData["unitfmt"]["long"]["gigabit-per-second"] = "#{n} Gb/s";
        localeData["unitfmt"]["long"]["terabit-per-second"] = "#{n} Tb/s";
        localeData["unitfmt"]["long"]["petabit-per-second"] = "#{n} Pb/s";
        localeData["unitfmt"]["long"]["byte-per-second"] = "#{n} B/s";
        localeData["unitfmt"]["long"]["kilobyte-per-second"] = "#{n} kB/s";
        localeData["unitfmt"]["long"]["megabyte-per-second"] = "#{n} MB/s";
        localeData["unitfmt"]["long"]["gigabyte-per-second"] = "#{n} GB/s";
        localeData["unitfmt"]["long"]["terabyte-per-second"] = "#{n} TB/s";
        localeData["unitfmt"]["long"]["petabyte-per-second"] = "#{n} PB/s";
        localeData["unitfmt"]["long"]["byte-per-hour"] = "#{n} B/h";
        localeData["unitfmt"]["long"]["kilobyte-per-hour"] = "#{n} kB/h";
        localeData["unitfmt"]["long"]["megabyte-per-hour"] = "#{n} MB/h";
        localeData["unitfmt"]["long"]["gigabyte-per-hour"] = "#{n} GB/h";
        localeData["unitfmt"]["long"]["terabyte-per-hour"] = "#{n} TB/h";
        localeData["unitfmt"]["long"]["petabyte-per-hour"] = "#{n} PB/h";

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
        localeData["unitfmt"]["short"]["teaspoon-imperial"] = "one#{n} tsp(i)|#{n} tsp(i)";
        localeData["unitfmt"]["short"]["tablespoon-imperial"] = "one#{n} tbsp(i)|#{n} tbsp(i)";
        localeData["unitfmt"]["short"]["ounce-imperial"] = "one#{n} oz(i)|#{n} oz(i)";
        localeData["unitfmt"]["short"]["pint-imperial"] = "one#{n} pt(i)|#{n} pt(i)";
        localeData["unitfmt"]["short"]["quart-imperial"] = "one#{n} qt(i)|#{n} qt(i)";
        localeData["unitfmt"]["short"]["bit-per-second"] = "#{n} b/s";
        localeData["unitfmt"]["short"]["kilobit-per-second"] = "#{n} kb/s";
        localeData["unitfmt"]["short"]["megabit-per-second"] = "#{n} Mb/s";
        localeData["unitfmt"]["short"]["gigabit-per-second"] = "#{n} Gb/s";
        localeData["unitfmt"]["short"]["terabit-per-second"] = "#{n} Tb/s";
        localeData["unitfmt"]["short"]["petabit-per-second"] = "#{n} Pb/s";
        localeData["unitfmt"]["short"]["byte-per-second"] = "#{n} B/s";
        localeData["unitfmt"]["short"]["kilobyte-per-second"] = "#{n} kB/s";
        localeData["unitfmt"]["short"]["megabyte-per-second"] = "#{n} MB/s";
        localeData["unitfmt"]["short"]["gigabyte-per-second"] = "#{n} GB/s";
        localeData["unitfmt"]["short"]["terabyte-per-second"] = "#{n} TB/s";
        localeData["unitfmt"]["short"]["petabyte-per-second"] = "#{n} PB/s";
        localeData["unitfmt"]["short"]["byte-per-hour"] = "#{n} B/h";
        localeData["unitfmt"]["short"]["kilobyte-per-hour"] = "#{n} kB/h";
        localeData["unitfmt"]["short"]["megabyte-per-hour"] = "#{n} MB/h";
        localeData["unitfmt"]["short"]["gigabyte-per-hour"] = "#{n} GB/h";
        localeData["unitfmt"]["short"]["terabyte-per-hour"] = "#{n} TB/h";
        localeData["unitfmt"]["short"]["petabyte-per-hour"] = "#{n} PB/h";

        /*
        uncomment if we decide to support the "narrow" size
        localeData["unitfmt"]["narrow"]["decameter"] = "one#{n}dam|#{n}dam";
        localeData["unitfmt"]["narrow"]["hectometer"] = "one#{n}hm|#{n}hm";
        localeData["unitfmt"]["narrow"]["megameter"] = "one#{n}Mm|#{n}Mm";
        localeData["unitfmt"]["narrow"]["gigameter"] = "one#{n}Gm|#{n}Gm";
        localeData["unitfmt"]["narrow"]["petabit"] = "one#{n}pb|#{n}pb";
        localeData["unitfmt"]["narrow"]["petabyte"] = "one#{n}pB|#{n}pB";
        localeData["unitfmt"]["narrow"]["BTU"] = "one#{n}BTU|#{n}BTU";
        localeData["unitfmt"]["narrow"]["millijoule"] = "one#{n}mJ|#{n}mJ";
        localeData["unitfmt"]["narrow"]["watt-hour"] = "one#{n}Wh|#{n}Wh";
        localeData["unitfmt"]["narrow"]["megajoule"] = "one#{n}MJ|#{n}MJ";
        localeData["unitfmt"]["narrow"]["gigajoule"] = "one#{n}GJ|#{n}GJ";
        localeData["unitfmt"]["narrow"]["megawatt-hour"] = "one#{n}MWh|#{n}MWh";
        localeData["unitfmt"]["narrow"]["gigawatt-hour"] = "one#{n}GWh|#{n}GWh";
        localeData["unitfmt"]["narrow"]["kilometer-per-liter"] = "1#{n}km/l|#{n}km/l";
        localeData["unitfmt"]["narrow"]["short-ton"] = "1#{n}short ton|#{n}short tons";
        localeData["unitfmt"]["narrow"]["foot-per-second"] = "1#{n}ft/s|#{n}ft/s";
        localeData["unitfmt"]["narrow"]["kilometer-per-second"] = "1#{n}km/s|#{n}km/s";
        localeData["unitfmt"]["narrow"]["mile-per-second"] = "1#{n}mps|#{n}mps";
        localeData["unitfmt"]["narrow"]["decade"] = "one#{n}decade|#{n}decades";
        localeData["unitfmt"]["narrow"]["teaspoon-imperial"] = "one#{n}tsp(i)|#{n}tsp(i)";
        localeData["unitfmt"]["narrow"]["tablespoon-imperial"] = "one#{n}tbsp(i)|#{n}tbsp(i)";
        localeData["unitfmt"]["narrow"]["ounce-imperial"] = "one#{n}oz(i)|#{n}oz(i)";
        localeData["unitfmt"]["narrow"]["pint-imperial"] = "one#{n}pt(i)|#{n}pt(i)";
        localeData["unitfmt"]["narrow"]["quart-imperial"] = "one#{n}qt(i)|#{n}qt(i)";
        */

        localeData.usages = {
            "unitfmt": {
                "long": {
                    "g-force": "#{n} G",
                    "meter-per-second-squared": "#{n} m/s²",
                    "revolution": "#{n} rev",
                    "radian": "#{n} rad",
                    "degree": "#{n}°",
                    "arc-minute": "#{n}′",
                    "arc-second": "#{n}″",
                    "square-kilometer": "#{n} km²",
                    "hectare": "#{n} ha",
                    "square-meter": "#{n} m²",
                    "square-centimeter": "#{n} cm²",
                    "square-mile": "#{n} mi²",
                    "acre": "#{n} ac",
                    "square-yard": "#{n} yd²",
                    "square-foot": "#{n} ft²",
                    "square-inch": "#{n} in²",
                    "karat": "#{n} kt",
                    "milligram-per-deciliter": "#{n} mg/dL",
                    "millimole-per-liter": "#{n} mmol/L",
                    "part-per-million": "#{n} ppm",
                    "liter-per-kilometer": "#{n} L/km",
                    "liter-per-100kilometers": "#{n} L/100km",
                    "mile-per-gallon": "#{n} mpg US",
                    "mile-per-gallon-imperial": "#{n} mpg Imp.",
                    "terabyte": "#{n} TB",
                    "terabit": "#{n} Tb",
                    "gigabyte": "#{n} GB",
                    "gigabit": "#{n} Gb",
                    "megabyte": "#{n} MB",
                    "megabit": "#{n} Mb",
                    "kilobyte": "#{n} kB",
                    "kilobit": "#{n} kb",
                    "byte": "#{n} byte",
                    "bit": "#{n} bit",
                    "century": "#{n} c",
                    "year": "#{n} y",
                    "month": "#{n} m",
                    "week": "#{n} w",
                    "day": "#{n} d",
                    "hour": "#{n} h",
                    "minute": "#{n} min",
                    "second": "#{n} s",
                    "millisecond": "#{n} ms",
                    "microsecond": "#{n} μs",
                    "nanosecond": "#{n} ns",
                    "ampere": "#{n} A",
                    "milliampere": "#{n} mA",
                    "ohm": "#{n} Ω",
                    "volt": "#{n} V",
                    "kilocalorie": "#{n} kcal",
                    "calorie": "#{n} cal",
                    "foodcalorie": "#{n} Cal",
                    "kilojoule": "#{n} kJ",
                    "joule": "#{n} J",
                    "kilowatt-hour": "#{n} kWh",
                    "gigahertz": "#{n} GHz",
                    "megahertz": "#{n} MHz",
                    "kilohertz": "#{n} kHz",
                    "hertz": "#{n} Hz",
                    "kilometer": "#{n} km",
                    "meter": "#{n} m",
                    "decimeter": "#{n} dm",
                    "centimeter": "#{n} cm",
                    "millimeter": "#{n} mm",
                    "micrometer": "#{n} µm",
                    "nanometer": "#{n} nm",
                    "picometer": "#{n} pm",
                    "mile": "#{n} mi",
                    "yard": "#{n} yd",
                    "foot": "#{n} ft",
                    "inch": "#{n} in",
                    "parsec": "#{n} pc",
                    "light-year": "#{n} ly",
                    "astronomical-unit": "#{n} au",
                    "furlong": "#{n} fur",
                    "fathom": "#{n} fm",
                    "nautical-mile": "#{n} nmi",
                    "mile-scandinavian": "#{n} smi",
                    "point": "#{n} pt",
                    "lux": "#{n} lx",
                    "metric-ton": "#{n} t",
                    "kilogram": "#{n} kg",
                    "gram": "#{n} g",
                    "milligram": "#{n} mg",
                    "microgram": "#{n} µg",
                    "ton": "#{n} tn",
                    "short-ton": "1#{n} short ton|#{n} short tons",
                    "stone": "#{n} st",
                    "pound": "#{n} lb",
                    "ounce": "#{n} oz",
                    "ounce-troy": "#{n} oz t",
                    "carat": "#{n} CD",
                    "gigawatt": "#{n} GW",
                    "megawatt": "#{n} MW",
                    "kilowatt": "#{n} kW",
                    "watt": "#{n} W",
                    "milliwatt": "#{n} mW",
                    "horsepower": "#{n} hp",
                    "hectopascal": "#{n} hPa",
                    "millimeter-of-mercury": "#{n} mm Hg",
                    "pound-per-square-inch": "#{n} psi",
                    "inch-hg": "#{n} inHg",
                    "millibar": "#{n} mbar",
                    "kilometer-per-hour": "#{n} km/h",
                    "meter-per-second": "#{n} m/s",
                    "mile-per-hour": "#{n} mi/h",
                    "knot": "#{n} kn",
                    "generic": "#{n}°",
                    "celsius": "#{n}°C",
                    "fahrenheit": "#{n}°F",
                    "kelvin": "#{n} K",
                    "cubic-kilometer": "#{n} km³",
                    "cubic-meter": "#{n} m³",
                    "cubic-centimeter": "#{n} cm³",
                    "cubic-mile": "#{n} mi³",
                    "cubic-yard": "#{n} yd³",
                    "cubic-foot": "#{n} ft³",
                    "cubic-inch": "#{n} in³",
                    "megaliter": "#{n} ML",
                    "hectoliter": "#{n} hL",
                    "liter": "#{n} l",
                    "deciliter": "#{n} dL",
                    "centiliter": "#{n} cL",
                    "milliliter": "#{n} mL",
                    "pint-metric": "#{n} mpt",
                    "cup-metric": "#{n} mc",
                    "acre-foot": "#{n} ac ft",
                    "bushel": "#{n} bu",
                    "gallon": "#{n} gal US",
                    "gallon-imperial": "#{n} gal Imp.",
                    "quart": "#{n} qt",
                    "pint": "#{n} pt",
                    "cup": "#{n} c",
                    "fluid-ounce": "#{n} fl oz",
                    "tablespoon": "#{n} tbsp",
                    "teaspoon": "#{n} tsp",
                    "coordinateUnit": "",
                    "decameter": "one#{n} decameter|#{n} decameters",
                    "hectometer": "one#{n} hectometer|#{n} hectometers",
                    "megameter": "one#{n} megameter|#{n} megameters",
                    "gigameter": "one#{n} gigameter|#{n} gigameters",
                    "petabit": "one#{n} petabit|#{n} petabits",
                    "petabyte": "one#{n} petabyte|#{n} petabytes",
                    "BTU": "one#{n} BTU|#{n} BTU",
                    "millijoule": "one#{n} millijoule|#{n} millijoules",
                    "watt-hour": "one#{n} watt hour|#{n} watt hours",
                    "megajoule": "one#{n} megajoule|#{n} megajoules",
                    "gigajoule": "one#{n} gigajoule|#{n} gigajoules",
                    "megawatt-hour": "one#{n} megawatt hour|#{n} megawatt hours",
                    "gigawatt-hour": "one#{n} gigawatt hour|#{n} gigawatt hours",
                    "kilometer-per-liter": "1#{n} kilometer per liter|#{n} kilometers per liter",
                    "foot-per-second": "1#{n} foot per second|#{n} feet per second",
                    "kilometer-per-second": "1#{n} kilometer per second|#{n} kilometers per second",
                    "mile-per-second": "1#{n} mile per second|#{n} miles per second",
                    "decade": "one#{n} decade|#{n} decades",
                    "teaspoon-imperial": "one#{n} imperial teaspoon|#{n} imperial teaspoons",
                    "tablespoon-imperial": "one#{n} imperial tablespoon|#{n} imperial tablespoons",
                    "ounce-imperial": "one#{n} imperial ounce|#{n} imperial ounces",
                    "pint-imperial": "one#{n} imperial pint|#{n} imperial pints",
                    "quart-imperial": "one#{n} imperial quart|#{n} imperial quarts",
                    "bit-per-second": "#{n} b/s",
                    "kilobit-per-second": "#{n} kb/s",
                    "megabit-per-second": "#{n} Mb/s",
                    "gigabit-per-second": "#{n} Gb/s",
                    "terabit-per-second": "#{n} Tb/s",
                    "petabit-per-second": "#{n} Pb/s",
                    "byte-per-second": "#{n} B/s",
                    "kilobyte-per-second": "#{n} kB/s",
                    "megabyte-per-second": "#{n} MB/s",
                    "gigabyte-per-second": "#{n} GB/s",
                    "terabyte-per-second": "#{n} TB/s",
                    "petabyte-per-second": "#{n} PB/s",
                    "byte-per-hour": "#{n} B/h",
                    "kilobyte-per-hour": "#{n} kB/h",
                    "megabyte-per-hour": "#{n} MB/h",
                    "gigabyte-per-hour": "#{n} GB/h",
                    "terabyte-per-hour": "#{n} TB/h",
                    "petabyte-per-hour": "#{n} PB/h"
                },
                "short": {
                    "g-force": "#{n} G",
                    "meter-per-second-squared": "#{n} m/s²",
                    "revolution": "#{n} rev",
                    "radian": "#{n} rad",
                    "degree": "#{n}°",
                    "arc-minute": "#{n}′",
                    "arc-second": "#{n}″",
                    "square-kilometer": "#{n} km²",
                    "hectare": "#{n} ha",
                    "square-meter": "#{n} m²",
                    "square-centimeter": "#{n} cm²",
                    "square-mile": "#{n} mi²",
                    "acre": "#{n} ac",
                    "square-yard": "#{n} yd²",
                    "square-foot": "#{n} ft²",
                    "square-inch": "#{n} in²",
                    "karat": "#{n} kt",
                    "milligram-per-deciliter": "#{n} mg/dL",
                    "millimole-per-liter": "#{n} mmol/L",
                    "part-per-million": "#{n} ppm",
                    "liter-per-kilometer": "#{n} L/km",
                    "liter-per-100kilometers": "#{n} L/100km",
                    "mile-per-gallon": "#{n} mpg US",
                    "mile-per-gallon-imperial": "#{n} mpg Imp.",
                    "terabyte": "#{n} TB",
                    "terabit": "#{n} Tb",
                    "gigabyte": "#{n} GB",
                    "gigabit": "#{n} Gb",
                    "megabyte": "#{n} MB",
                    "megabit": "#{n} Mb",
                    "kilobyte": "#{n} kB",
                    "kilobit": "#{n} kb",
                    "byte": "#{n} byte",
                    "bit": "#{n} bit",
                    "century": "#{n} c",
                    "year": "#{n} y",
                    "month": "#{n} m",
                    "week": "#{n} w",
                    "day": "#{n} d",
                    "hour": "#{n} h",
                    "minute": "#{n} min",
                    "second": "#{n} s",
                    "millisecond": "#{n} ms",
                    "microsecond": "#{n} μs",
                    "nanosecond": "#{n} ns",
                    "ampere": "#{n} A",
                    "milliampere": "#{n} mA",
                    "ohm": "#{n} Ω",
                    "volt": "#{n} V",
                    "kilocalorie": "#{n} kcal",
                    "calorie": "#{n} cal",
                    "foodcalorie": "#{n} Cal",
                    "kilojoule": "#{n} kJ",
                    "joule": "#{n} J",
                    "kilowatt-hour": "#{n} kWh",
                    "gigahertz": "#{n} GHz",
                    "megahertz": "#{n} MHz",
                    "kilohertz": "#{n} kHz",
                    "hertz": "#{n} Hz",
                    "kilometer": "#{n} km",
                    "meter": "#{n} m",
                    "decimeter": "#{n} dm",
                    "centimeter": "#{n} cm",
                    "millimeter": "#{n} mm",
                    "micrometer": "#{n} µm",
                    "nanometer": "#{n} nm",
                    "picometer": "#{n} pm",
                    "mile": "#{n} mi",
                    "yard": "#{n} yd",
                    "foot": "#{n} ft",
                    "inch": "#{n} in",
                    "parsec": "#{n} pc",
                    "light-year": "#{n} ly",
                    "astronomical-unit": "#{n} au",
                    "furlong": "#{n} fur",
                    "fathom": "#{n} fm",
                    "nautical-mile": "#{n} nmi",
                    "mile-scandinavian": "#{n} smi",
                    "point": "#{n} pt",
                    "lux": "#{n} lx",
                    "metric-ton": "#{n} t",
                    "kilogram": "#{n} kg",
                    "gram": "#{n} g",
                    "milligram": "#{n} mg",
                    "microgram": "#{n} µg",
                    "ton": "#{n} tn",
                    "short-ton": "1#{n} short ton|#{n} short tons",
                    "stone": "#{n} st",
                    "pound": "#{n} lb",
                    "ounce": "#{n} oz",
                    "ounce-troy": "#{n} oz t",
                    "carat": "#{n} CD",
                    "gigawatt": "#{n} GW",
                    "megawatt": "#{n} MW",
                    "kilowatt": "#{n} kW",
                    "watt": "#{n} W",
                    "milliwatt": "#{n} mW",
                    "horsepower": "#{n} hp",
                    "hectopascal": "#{n} hPa",
                    "millimeter-of-mercury": "#{n} mm Hg",
                    "pound-per-square-inch": "#{n} psi",
                    "inch-hg": "#{n} inHg",
                    "millibar": "#{n} mbar",
                    "kilometer-per-hour": "#{n} km/h",
                    "meter-per-second": "#{n} m/s",
                    "mile-per-hour": "#{n} mi/h",
                    "knot": "#{n} kn",
                    "generic": "#{n}°",
                    "celsius": "#{n}°C",
                    "fahrenheit": "#{n}°F",
                    "kelvin": "#{n} K",
                    "cubic-kilometer": "#{n} km³",
                    "cubic-meter": "#{n} m³",
                    "cubic-centimeter": "#{n} cm³",
                    "cubic-mile": "#{n} mi³",
                    "cubic-yard": "#{n} yd³",
                    "cubic-foot": "#{n} ft³",
                    "cubic-inch": "#{n} in³",
                    "megaliter": "#{n} ML",
                    "hectoliter": "#{n} hL",
                    "liter": "#{n} l",
                    "deciliter": "#{n} dL",
                    "centiliter": "#{n} cL",
                    "milliliter": "#{n} mL",
                    "pint-metric": "#{n} mpt",
                    "cup-metric": "#{n} mc",
                    "acre-foot": "#{n} ac ft",
                    "bushel": "#{n} bu",
                    "gallon": "#{n} gal US",
                    "gallon-imperial": "#{n} gal Imp.",
                    "quart": "#{n} qt",
                    "pint": "#{n} pt",
                    "cup": "#{n} c",
                    "fluid-ounce": "#{n} fl oz",
                    "tablespoon": "#{n} tbsp",
                    "teaspoon": "#{n} tsp",
                    "coordinateUnit": "",
                    "decameter": "one#{n} dam|#{n} dam",
                    "hectometer": "one#{n} hm|#{n} hm",
                    "megameter": "one#{n} Mm|#{n} Mm",
                    "gigameter": "one#{n} Gm|#{n} Gm",
                    "petabit": "one#{n} pb|#{n} pb",
                    "petabyte": "one#{n} pB|#{n} pB",
                    "BTU": "one#{n} BTU|#{n} BTU",
                    "millijoule": "one#{n} mJ|#{n} mJ",
                    "watt-hour": "one#{n} Wh|#{n} Wh",
                    "megajoule": "one#{n} MJ|#{n} MJ",
                    "gigajoule": "one#{n} GJ|#{n} GJ",
                    "megawatt-hour": "one#{n} MWh|#{n} MWh",
                    "gigawatt-hour": "one#{n} GWh|#{n} GWh",
                    "kilometer-per-liter": "1#{n} km/l|#{n} km/l",
                    "foot-per-second": "1#{n} ft/s|#{n} ft/s",
                    "kilometer-per-second": "1#{n}  km/s|#{n}  km/s",
                    "mile-per-second": "1#{n} mps|#{n}  mps",
                    "decade": "one#{n} decade|#{n} decades",
                    "teaspoon-imperial": "one#{n} tsp(i)|#{n} tsp(i)",
                    "tablespoon-imperial": "one#{n} tbsp(i)|#{n} tbsp(i)",
                    "ounce-imperial": "one#{n} oz(i)|#{n} oz(i)",
                    "pint-imperial": "one#{n} pt(i)|#{n} pt(i)",
                    "quart-imperial": "one#{n} qt(i)|#{n} qt(i)",
                    "bit-per-second": "#{n} b/s",
                    "kilobit-per-second": "#{n} kb/s",
                    "megabit-per-second": "#{n} Mb/s",
                    "gigabit-per-second": "#{n} Gb/s",
                    "terabit-per-second": "#{n} Tb/s",
                    "petabit-per-second": "#{n} Pb/s",
                    "byte-per-second": "#{n} B/s",
                    "kilobyte-per-second": "#{n} kB/s",
                    "megabyte-per-second": "#{n} MB/s",
                    "gigabyte-per-second": "#{n} GB/s",
                    "terabyte-per-second": "#{n} TB/s",
                    "petabyte-per-second": "#{n} PB/s",
                    "byte-per-hour": "#{n} B/h",
                    "kilobyte-per-hour": "#{n} kB/h",
                    "megabyte-per-hour": "#{n} MB/h",
                    "gigabyte-per-hour": "#{n} GB/h",
                    "terabyte-per-hour": "#{n} TB/h",
                    "petabyte-per-hour": "#{n} PB/h"
                }
            },
            "usages": {
                "floorSpace": {
                    "description": "area of the floor of a house or building",
                    "type": "area",
                    "units": {
                        "metric": ["square-meter"],
                        "uscustomary": ["square-foot"],
                        "imperial": ["square-foot"]
                    },
                    "systems": {
                        "metric": {
                            "units": ["square-meter"],
                            "maxFractionDigits": 2
                        },
                        "uscustomary": {
                            "units": ["square-foot"],
                            "maxFractionDigits": 0
                        },
                        "imperial": {
                            "units": ["square-foot"],
                            "maxFractionDigits": 0
                        }
                    },
                    "style": "numeric"
                },
                "landArea": {
                    "description": "area of a piece of plot of land",
                    "type": "area",
                    "units": {
                        "metric": ["square-meter", "hectare"],
                        "uscustomary": ["square-foot", "acre", "square-mile"],
                        "imperial": ["square-foot", "acre", "square-mile"]
                    },
                    "maxFractionDigits": 0
                },
                "networkingSpeed": {
                    "description": "speed of transfer of data over a network",
                    "type": "digitalSpeed",
                    "system": "bitSystem",
                    "maxFractionDigits": 2,
                    "significantDigits": 3
                },
                "audioSpeed": {
                    "description": "speed of transfer of audio data",
                    "type": "digitalSpeed",
                    "system": "bitSystem",
                    "significantDigits": 3
                },
                "interfaceSpeed": {
                    "description": "speed of transfer of data over a computer interface such as a USB or SATA bus",
                    "type": "digitalSpeed",
                    "system": "byteSystem",
                    "significantDigits": 3
                },
                "foodEnergy": {
                    "description": "amount of energy contains in food",
                    "type": "energy",
                    "units": {
                        "metric": ["millijoule", "joule", "kilojoule", "megajoule", "gigajoule"],
                        "uscustomary": ["foodcalorie"],
                        "imperial": ["foodcalorie"]
                    },
                    "significantDigits": 3
                },
                "electricalEnergy": {
                    "description": "amount of energy in electricity",
                    "type": "energy",
                    "units": ["watt-hour", "kilowatt-hour", "megawatt-hour", "gigawatt-hour"]
                },
                "heatingEnergy": {
                    "description": "amount of energy required to heat things such as water or home interiors",
                    "type": "energy",
                    "units": {
                        "metric": ["millijoule", "joule", "kilojoule", "megajoule", "gigajoule"],
                        "uscustomary": ["BTU"],
                        "imperial": ["BTU"]
                    },
                    "significantDigits": 4
                },
                "nauticalDistance": {
                    "description": "distance traveled by a boat",
                    "type": "length",
                    "units": {
                        "metric": ["meter", "kilometer"],
                        "uscustomary": ["foot", "yard", "nautical-mile"],
                        "imperial": ["foot", "yard", "nautical-mile"]
                    },
                    "maxFractionDigits": 2,
                    "significantDigits": 4
                },
                "babyHeight": {
                    "description": "length of a baby",
                    "type": "length",
                    "units": {
                        "metric": ["centimeter"],
                        "uscustomary": ["inch"],
                        "imperial": ["inch"]
                    },
                    "significantDigits": 3
                },
                "personHeight": {
                    "description": "height of an adult or child (not a baby)",
                    "type": "length",
                    "units": {
                        "metric": ["meter"],
                        "uscustomary": ["inch", "foot"],
                        "imperial": ["inch", "foot"]
                    },
                    "systems": {
                        "metric": {
                            "units": ["meter", "centimeter"],
                            "maxFractionDigits": 2,
                            "style": "numeric"
                        },
                        "uscustomary": {
                            "units": ["inch", "foot"],
                            "maxFractionDigits": 0,
                            "style": "list"
                        },
                        "imperial": {
                            "units": ["inch", "foot"],
                            "maxFractionDigits": 0,
                            "style": "list"
                        }
                    }
                },
                "vehicleDistance": {
                    "description": "distance traveled by a vehicle or aircraft (except a boat)",
                    "type": "length",
                    "units": {
                        "metric": ["meter", "kilometer"],
                        "uscustomary": ["yard", "mile"],
                        "imperial": ["yard", "mile"]
                    },
                    "maxFractionDigits": 2,
                    "significantDigits": 4
                },
                "personWeight": {
                    "description": "weight/mass of an adult human or larger child",
                    "type": "mass",
                    "units": {
                        "metric": ["kilogram"],
                        "uscustomary": ["pound"],
                        "imperial": ["pound", "stone"]
                    },
                    "style": "list",
                    "maxFractionDigits": 0
                },
                "babyWeight": {
                    "description": "weight/mass of a baby or of small animals such as cats and dogs",
                    "type": "mass",
                    "units": {
                        "metric": ["kilogram"],
                        "uscustomary": ["ounce", "pound"],
                        "imperial": ["ounce", "pound"]
                    },
                    "style": "list",
                    "maxFractionDigits": 1
                },
                "vehicleWeight": {
                    "description": "weight/mass of a vehicle (including a boat)",
                    "type": "mass",
                    "units": {
                        "metric": ["kilogram", "metric-ton"],
                        "uscustomary": ["pound", "ton"],
                        "imperial": ["pound", "ton"]
                    },
                    "maxFractionDigits": 0
                },
                "drugWeight": {
                    "description": "weight/mass of a dose of a medicinal drug",
                    "type": "mass",
                    "units": {
                        "metric": ["microgram", "milligram", "gram"],
                        "uscustomary": ["milligram", "ounce"],
                        "imperial": ["milligram", "ounce"]
                    }
                },
                "vehicleSpeed": {
                    "description": "speed of travel of a vehicle, except boats",
                    "type": "velocity",
                    "units": {
                        "metric": ["kilometer-per-hour"],
                        "uscustomary": ["mile-per-hour"],
                        "imperial": ["mile-per-hour"]
                    },
                    "maxFractionDigits": 0
                },
                "nauticalSpeed": {
                    "description": "speed of travel of a boat",
                    "type": "velocity",
                    "units": {
                        "metric": ["kilometer-per-hour"],
                        "uscustomary": ["knot"],
                        "imperial": ["knot"]
                    },
                    "maxFractionDigits": 0
                },
                "dryFoodVolume": {
                    "description": "volume of a dry food substance in a recipe such as flour",
                    "type": "volume",
                    "units": {
                        "metric": ["milliliter", "liter"],
                        "uscustomary": ["teaspoon", "tablespoon", "cup", "gallon"],
                        "imperial": ["teaspoon-imperial", "tablespoon-imperial", "cup-imperial", "gallon-imperial"]
                    },
                    "style": "list",
                    "maxFractionDigits": 2
                },
                "liquidFoodVolume": {
                    "description": "volume of a liquid food substance in a recipe such as milk",
                    "type": "volume",
                    "units": {
                        "metric": ["milliliter", "liter"],
                        "uscustomary": ["teaspoon", "tablespoon", "fluid-ounce", "cup", "pint", "quart", "gallon"],
                        "imperial": ["teaspoon-imperial", "tablespoon-imperial", "ounce-imperial", "cup", "pint-imperial", "quart-imperial", "gallon-imperial"]
                    },
                    "style": "list",
                    "maxFractionDigits": 2
                },
                "drinkVolume": {
                    "description": "volume of a drink",
                    "type": "volume",
                    "units": {
                        "metric": ["milliliter", "liter"],
                        "uscustomary": ["fluid-ounce", "cup", "pint", "quart", "gallon"],
                        "imperial": ["ounce-imperial", "cup", "pint-imperial", "quart-imperial", "gallon-imperial"]
                    },
                    "maxFractionDigits": 2,
                    "style": "numeric"
                },
                "fuelVolume": {
                    "description": "volume of a vehicular fuel",
                    "type": "volume",
                    "units": {
                        "metric": ["liter"],
                        "uscustomary": ["gallon"],
                        "imperial": ["gallon-imperial"]
                    },
                    "maxFractionDigits": 2
                },
                "engineVolume": {
                    "description": "volume of an engine's combustion space",
                    "type": "volume",
                    "units": {
                        "metric": ["cubic-centimeter"],
                        "uscustomary": ["cubic-inch"],
                        "imperial": ["cubic-inch"]
                    },
                    "maxFractionDigits": 2
                },
                "storageVolume": {
                    "description": "volume of a mass storage tank",
                    "type": "volume",
                    "units": {
                        "metric": ["liter", "cubic-meter"],
                        "uscustomary": ["gallon", "cubic-foot"],
                        "imperial": ["gallon-imperial", "cubic-foot"]
                    },
                    "maxFractionDigits": 3,
                    "style": "numeric"
                },
                "gasVolume": {
                    "description": "volume of a gas such as natural gas used in a home a home might use",
                    "type": "volume",
                    "units": {
                        "metric": ["cubic-meter"],
                        "uscustomary": ["cubic-foot"],
                        "imperial": ["cubic-foot"]
                    },
                    "maxFractionDigits": 3
                }
            }
        };
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
