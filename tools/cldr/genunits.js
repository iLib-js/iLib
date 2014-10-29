/*
 * genscripts.js - ilib tool to generate the json data about ISO 15924 scripts
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
var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;

function usage() {
    util.print("Usage: gencountrynames [-h] CLDR_json_dir locale_data_dir\n" +
            "Generate localized country names from the CLDR data.\n\n" +
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

util.print("gencountrynames - generate localized country names from the CLDR data.\n" +
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

function loadFile(path) {
    var ret = undefined;

    if (fs.existsSync(path)) {
        json = fs.readFileSync(path, "utf-8");
        ret = JSON.parse(json);
    }

    return ret;
}

function calcLocalePath(language, region) {
    var path = localeDirName + "/";
    if (language) {
        path += language + "/";
    }
    if (region) {
        path += region + "/";
    }
    return path;
}

function writeUnits(data, language, region) {
    var path = calcLocalePath(language, region);
    util.print("Writing " + path + "\n");
    makeDirs(path);
    fs.writeFileSync(path + "unitfmt.json", JSON.stringify(data, true, 4), "utf-8");
}

function frameUnitsString(data) {
    var ufStr = "";
    if (data["unitPattern-count-one"])
        ufStr += "1#" + data["unitPattern-count-one"] + "|";
    if (data["unitPattern-count-few"])
        ufStr += "few#" + data["unitPattern-count-few"] + "|";
    if (data["unitPattern-count-many"])
        ufStr += "many#" + data["unitPattern-count-many"] + "|";
    if (data["unitPattern-count-other"])
        ufStr += "#" + data["unitPattern-count-other"] + "|";
    return ufStr.substr(0, ufStr.length - 1).replace(/\{0\}/g, "{n}");
}

var unitMap = {
        "nautical-mile":"nauticalmile",
        "square-centimeter":"square centimeter",
        "square-meter":"square meter",
        "square-kilometer":"square km",
        "square-inch":"square inch",
        "square-foot":"square foot",
        "square-yard":"square yard",
        "square-mile":"square mile",
        "foodcalorie":"calorie",
        "kilowatt-hour": "kilowatt hour",
        "mile-per-gallon":"mpg",
        "metric-ton":"metric ton",
        "ton":"long ton",
        "kilometer-per-hour":"kilometer/hour",
        "mile-per-hour":"miles/hour",
        "meter-per-second":"meters/second",
        "teaspoon":"tsp" ,
        "tablespoon":"tbsp",
        "cubic-inch": "cubic inch",
        "fluid-ounce":"ounce", 
        "cubic-foot":"cubic foot",
        "cubic-meter":"cubic meter",
	"fluid-ounce":"us ounce"     
};

function frameUnits(data, language, localeData) {
    if (!localeData["unitfmt"]) {
        localeData["unitfmt"] = {};
    }
    if (!localeData["unitfmt"]["long"]) {
        localeData["unitfmt"]["long"] = {};
    }
    if (!localeData["unitfmt"]["short"]) {
        localeData["unitfmt"]["short"] = {};
    }
    for (var ufl in data["main"][language]["units"]["long"]) {
        if (ufl !== "per") {
            var index = ufl.indexOf("-");
            var dispname = ufl.substr(index+1,ufl.length);
            dispname = unitMap[dispname] || dispname;
            localeData["unitfmt"]["long"][dispname] = frameUnitsString(data["main"][language]["units"]["long"][ufl]);
        }
    }
    for (var ufs in data["main"][language]["units"]["short"]) {
        if (ufs !== "per") {
            var index = ufs.indexOf("-");
            var dispname = ufs.substr(index+1,ufs.length);
            dispname = unitMap[dispname] || dispname;
            localeData["unitfmt"]["short"][dispname] = frameUnitsString(data["main"][language]["units"]["short"][ufs]);
        }
    }

    localeData["unitfmt"]["long"]["decameter"] = "1#{n} decameter|#{n} decameters";
    localeData["unitfmt"]["long"]["hectometer"] = "1#{n} hectometer|#{n} hectometers";  
    localeData["unitfmt"]["long"]["megameter"] = "1#{n} megameter|#{n} megameters"; 
    localeData["unitfmt"]["long"]["gigameter"] = "1#{n} gigameter|#{n} gigameters";    
    localeData["unitfmt"]["long"]["petabit"] = "1#{n} petabit|#{n} petabits";
    localeData["unitfmt"]["long"]["petabyte"] = "1#{n} petabyte|#{n} petabytes";
    localeData["unitfmt"]["long"]["BTU"] = "1#{n} BTU|#{n} BTU";
    localeData["unitfmt"]["long"]["millijoule"] = "1#{n} millijoule|#{n} millijoules";
    localeData["unitfmt"]["long"]["watt hour"] = "1#{n} watt hour|#{n} watt hours";
    localeData["unitfmt"]["long"]["megajoule"] = "1#{n} megajoule|#{n} megajoules";
    localeData["unitfmt"]["long"]["gigajoule"] = "1#{n} gigajoule|#{n} gigajoules";
    localeData["unitfmt"]["long"]["megawatt hour"] = "1#{n} megawatt hour|#{n} megawatt hours";
    localeData["unitfmt"]["long"]["gigawatt hour"] = "1#{n} gigawatt hour|#{n} gigawatt hours";
    localeData["unitfmt"]["long"]["km/liter"] = "1#{n} kilometer per liter|#{n} kilometers per liter";
    localeData["unitfmt"]["long"]["liter/100km"] = "1#{n} liter per 100km|#{n} liters per 100km";
    localeData["unitfmt"]["long"]["mpg(imp)"] = "1#{n} mile per gallon (Imp)|#{n} miles per gallon (Imp)";
    localeData["unitfmt"]["long"]["short ton"] = "1#{n} short ton|#{n} short tons";
    localeData["unitfmt"]["long"]["feet/second"] = "1#{n} foot per second|#{n} feet per second";
    localeData["unitfmt"]["long"]["knot"] = "1#{n} knot|#{n} knots";
    localeData["unitfmt"]["long"]["kilometer/second"] = "1#{n} kilometer per second|#{n} kilometers per second";
    localeData["unitfmt"]["long"]["miles/second"] = "1#{n} mile per second|#{n} miles per second";
    localeData["unitfmt"]["long"]["decade"] = "1#{n} decade|#{n} decades";
    localeData["unitfmt"]["long"]["century"] = "1#{n} century|#{n} centuries";
    localeData["unitfmt"]["long"]["imperial tsp"] = "1#{n} imperial teaspoon|#{n} imperial teaspoons";
    localeData["unitfmt"]["long"]["imperial tbsp"] = "1#{n} imperial tablespoon|#{n} imperial tablespoons";
    localeData["unitfmt"]["long"]["imperial ounce"] = "1#{n} imperial ounce|#{n} imperial ounces";
    localeData["unitfmt"]["long"]["imperial pint"] = "1#{n} imperial pint|#{n} imperial pints";
    localeData["unitfmt"]["long"]["imperial quart"] = "1#{n} imperial quart|#{n} imperial quarts";
    localeData["unitfmt"]["long"]["imperial gallon"] = "1#{n} imperial gallon|#{n} imperial gallons";

    localeData["unitfmt"]["short"]["decameter"] = "1#{n} dam|#{n} dam";
    localeData["unitfmt"]["short"]["hectometer"] = "1#{n} hm|#{n} hm";
    localeData["unitfmt"]["short"]["megameter"] = "1#{n} Mm|#{n} Mm";
    localeData["unitfmt"]["short"]["gigameter"] = "1#{n} Gm|#{n} Gm"; 
    localeData["unitfmt"]["short"]["petabit"] = "1#{n} pb|#{n} pb";
    localeData["unitfmt"]["short"]["petabyte"] = "1#{n} pB|#{n} pB";
    localeData["unitfmt"]["short"]["BTU"] = "1#{n} BTU|#{n} BTU";
    localeData["unitfmt"]["short"]["millijoule"] = "1#{n} mJ|#{n} mJ";
    localeData["unitfmt"]["short"]["watt hour"] = "1#{n} Wh|#{n} Wh";
    localeData["unitfmt"]["short"]["megajoule"] = "1#{n} MJ|#{n} MJ";
    localeData["unitfmt"]["short"]["gigajoule"] = "1#{n} GJ|#{n} GJ";
    localeData["unitfmt"]["short"]["megawatt hour"] = "1#{n} MWh|#{n} MWh";
    localeData["unitfmt"]["short"]["gigawatt hour"] = "1#{n} GWh|#{n} GWh";
    localeData["unitfmt"]["short"]["km/liter"] = "1#{n} km/l|#{n} km/l";
    localeData["unitfmt"]["short"]["liter/100km"] = "1#{n} L/100km|#{n} L/100km";
    localeData["unitfmt"]["short"]["mpg(imp)"] = "1#{n} mpg(Imp).|#{n} mmpg(Imp)";
    localeData["unitfmt"]["short"]["short ton"] = "1#{n} short ton|#{n} short tons";
    localeData["unitfmt"]["short"]["feet/second"] = "1#{n} ft/s|#{n} ft/s";
    localeData["unitfmt"]["short"]["knot"] = "1#{n} kn|#{n} kn";
    localeData["unitfmt"]["short"]["kilometer/second"] = "1#{n}  km/s|#{n}  km/s";
    localeData["unitfmt"]["short"]["miles/second"] = "1#{n} mps|#{n}  mps";
    localeData["unitfmt"]["short"]["decade"] = "1#{n} decade|#{n} decades";
    localeData["unitfmt"]["short"]["century"] = "1#{n} century|#{n} centuries";
    localeData["unitfmt"]["short"]["imperial tsp"] = "1#{n} imperial tsp|#{n} imperial tsp";
    localeData["unitfmt"]["short"]["imperial tbsp"] = "1#{n} imperial tbsp|#{n} imperial tbsp";
    localeData["unitfmt"]["short"]["imperial ounce"] = "1#{n} imperial oz|#{n} imperial oz";
    localeData["unitfmt"]["short"]["imperial pint"] = "1#{n} imperial pt|#{n} imperial pt";
    localeData["unitfmt"]["short"]["imperial quart"] = "1#{n} imperial qt|#{n} imperial qt";
    localeData["unitfmt"]["short"]["imperial gallon"] = "1#{n} imperial gal|#{n} imperial gal";
    return localeData;
}

var localeFiles;

try {
    localeFiles = fs.readdirSync(cldrDirName + "/main");
} catch (e) {
    util.print("Error: Could not load file " + cldrDirName + "/main" + "\n");
    process.exit(2);
}

util.print("Loading locale data...\n");

// get the information about scripts if necessary
for (var i = 0; i < localeFiles.length; i++) {
    var filename = localeFiles[i];
    var path = cldrDirName + "/main/" + filename + "/units.json";
    var index = filename.indexOf("-");
    var language, region;
    if (index > -1) {
        language = filename.substr(0, index);
        region = filename.substr(index + 1, filename.length);
    } else {
        language = filename;
        region = undefined;
    }

    var data = loadFile(path);
    var localeData = {};
    localeData = frameUnits(data, filename,localeData);
    writeUnits(localeData, language,region);
}
