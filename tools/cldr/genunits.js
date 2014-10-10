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
    fs.writeFileSync(path + "/unitfmt.jf", JSON.stringify(data, true, 4), "utf-8");
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

function frameUnits(data, language) {
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
            var dispname = data["main"][language]["units"]["long"][ufl].displayName;
            localeData["unitfmt"]["long"][dispname] = frameUnitsString(data["main"][language]["units"]["long"][ufl]);
        }
    }
    for (var ufs in data["main"][language]["units"]["short"]) {
        if (ufs !== "per") {
            var dispname = data["main"][language]["units"]["short"][ufs].displayName;
            localeData["unitfmt"]["short"][dispname] = frameUnitsString(data["main"][language]["units"]["short"][ufs]);
        }
    }
}

var localeFiles, localeData = {};

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
    }

    var data = loadFile(path);
    frameUnits(data, filename);
    writeUnits(localeData, language,region);
}
