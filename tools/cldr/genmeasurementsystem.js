/*
 * genmeasurementsystem.js - ilib tool to generate the json data about day of the week
 *
 * Copyright © 2013, 2018, 2020 JEDLSoft
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
 * See the License for the specific day_of_week governing permissions and
 * limitations under the License.
 */
/*
 * This code is intended to be run under node.js
 */
var fs = require('fs');
var path = require('path');
var unifile = require('./unifile.js');
var common = require('./common.js');
var mkdirs = common.makeDirs;

function usage() {
    console.log("Usage: genmeasurementsystem [-h] [toDir]\n" +
        "Generate the units.jf files for measurement systems.\n\n" +
        "-h or --help\n" +
        "  this help\n" +
        "toDir\n" +
        "  directory to output the units.jf json files. Default: current dir.");
    process.exit(1);
}

var toDir = ".";

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

if (process.argv.length < 2) {
    console.log('Error: not enough arguments');
    usage();
}

if (process.argv.length > 2) {
    toDir = process.argv[2];
}

console.log("genmeasurementsystem - generate the localeinfo units.jf files.\n" +
"Copyright (c) 2013, 2018 JEDLSoft");

console.log("output dir: " + toDir );

if (!fs.existsSync(toDir)) {
    console.log("Could not access target directory " + toDir);
    usage();
}

var metric = {
    generated: true,
    units: "metric"
};

// hard-code these because CLDR has incorrect data
// See https://en.wikipedia.org/wiki/Metrication#Overview
var systems = {
    "uscustomary": ["US", "FM", "MH", "LR", "PR", "PW", "GU", "WS", "AS", "VI", "MP"],
    "imperial": ["GB", "MM"]
};

// root is metric
fs.writeFileSync(path.join(toDir, "units.jf"), JSON.stringify(metric, true, 4), "utf-8");

for (var system in systems) {
    var content = {
        generated: true,
        units: system
    };
    systems[system].forEach(function(country) {
        var dirname = path.join(toDir, "und", country);
        var filename = path.join(dirname, "units.jf");
        if (!fs.existsSync(dirname)) {
            mkdirs(dirname);
        }
        fs.writeFileSync(filename, JSON.stringify(content, true, 4), "utf-8");
    });
}