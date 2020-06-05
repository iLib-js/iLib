/*
 * genlist.js - ilib tool to generate the ilib format list data from cldr
 *
 * Copyright © 2017-2020, JEDLSoft
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
var path = require("path");
var common = require('./common.js');
var coelesce = common.coelesce;
var Locale = common.Locale;
var aux = require("./datefmts.js");

var cldr = require("cldr-data");

function usage() {
    console.log("Usage: genlist [-h] [toDir]\n" +
        "Generate the list formatting data.\n\n" +
        "-h or --help\n" +
        "  this help\n" +
        "toDir\n" +
        "  directory to output the normalization json files. Default: current dir.");
    process.exit(1);
}

var toDir = ".";

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

toDir = process.argv[2] || "tmp";

console.log("genlist - generate list formatter data.\n" +
    "Copyright (c) 2017-2020 JEDLSoft");

console.log("output dir: " + toDir);

if (!fs.existsSync(toDir)) {
    common.makeDirs(toDir);
}

function comparePatterns(left, right) {
    return (left && right &&
        (left["2"] !== right["2"] ||
            left.start !== right.start ||
            left.middle !== right.middle ||
            left.end !== right.end));
}

var locales = require("cldr-data/availableLocales.json").availableLocales;

console.log("Locales:" + JSON.stringify(locales));

var localePatterns = {};

locales.forEach(function(locale) {
    var data = require(path.join("cldr-data/main", locale, "listPatterns.json"));
    var cldrPatterns = data.main[locale].listPatterns;

    var patterns = {
        standard: {}
    };

    if (cldrPatterns["listPattern-type-standard"]) {
        patterns.standard.short = cldrPatterns["listPattern-type-standard"];
        patterns.standard.medium = cldrPatterns["listPattern-type-standard"];
        patterns.standard.long = cldrPatterns["listPattern-type-standard"];
        patterns.standard.full = cldrPatterns["listPattern-type-standard"];

        if (cldrPatterns["listPattern-type-standard-short"]) {
            patterns.standard.short = cldrPatterns["listPattern-type-standard-short"];
            patterns.standard.medium = cldrPatterns["listPattern-type-standard-short"];
        }

        if (cldrPatterns["listPattern-type-standard-narrow"]) {
            patterns.standard.short = cldrPatterns["listPattern-type-standard-narrow"];
        }
    }

    if (cldrPatterns["listPattern-type-or"]) {
        patterns.or = {};
        patterns.or.short = cldrPatterns["listPattern-type-or"];
        patterns.or.medium = cldrPatterns["listPattern-type-or"];
        patterns.or.long = cldrPatterns["listPattern-type-or"];
        patterns.or.full = cldrPatterns["listPattern-type-or"];

        if (cldrPatterns["listPattern-type-or-short"]) {
            patterns.or.short = cldrPatterns["listPattern-type-or-short"];
            patterns.or.medium = cldrPatterns["listPattern-type-or-short"];
        }

        if (cldrPatterns["listPattern-type-or-narrow"]) {
            patterns.or.short = cldrPatterns["listPattern-type-or-narrow"];
        }
    }

    if (cldrPatterns["listPattern-type-unit"]) {
        patterns.unit = {};
        patterns.unit.short = cldrPatterns["listPattern-type-unit"];
        patterns.unit.medium = cldrPatterns["listPattern-type-unit"];
        patterns.unit.long = cldrPatterns["listPattern-type-unit"];
        patterns.unit.full = cldrPatterns["listPattern-type-unit"];

        if (cldrPatterns["listPattern-type-unit-short"]) {
            patterns.unit.short = cldrPatterns["listPattern-type-unit-short"];
            patterns.unit.medium = cldrPatterns["listPattern-type-unit-short"];
        }
        if (cldrPatterns["listPattern-type-unit-narrow"]) {
            patterns.unit.short = cldrPatterns["listPattern-type-unit-narrow"];
        }
    }

    console.log(locale + "...");

    var l = new Locale(locale);
    var position = localePatterns;

    [l.getLanguage(), l.getScript(), l.getRegion()].forEach(function(prop) {
        if (prop) {
            if (!position[prop]) {
                position[prop] = {};
            }
            position = position[prop];
        }
    });

    position.data = patterns;
});

console.log("\n\nMerging formats forward ...");

aux.mergeFormats(localePatterns, localePatterns, []);

console.log("\n\nPromoting sublocales ...");

for (var language in localePatterns) {
    if (language !== "und" && language !== "data") {
        aux.promoteFormats(localePatterns[language], language, "list.json");
    }
}

console.log("\n\nPruning duplicated formats ...");

//Don't prune the root. Iterate through the first level so we can
//skip the root and only prune the "language" level of the locale
//spec. (And recursively everything under it of course.)

aux.pruneFormats(localePatterns);

console.log("");

aux.writeFormats(toDir, "list.json", localePatterns, []);
