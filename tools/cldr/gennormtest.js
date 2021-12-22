/*
 * gennormtest.js - ilib tool to generate the UNA normalization test data from the Unicode 
 * data files
 * 
 * Copyright © 2012-2015, 2020-2021 JEDLSoft
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
var common = require('./common.js');

function usage() {
    console.log("Usage: gennormtest [-h] [toDir]\n" +
            "Generate the normalization test data.\n\n" +
            "-h or --help\n" +
            "  this help\n" +
            "toDir\n" +
            "  directory to output the output files. Default: current dir.");
    process.exit(1);
}

function sequenceToString(sequence) {
    if (!sequence) return undefined;

    return sequence.map(function(entry) {
        return common.hexToChar(entry);
    }).join('');
}

var toDir = ".";

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

if (process.argv.length < 2) {
    console.error('Error: not enough arguments');
    usage();
}

if (process.argv.length > 2) {
    toDir = process.argv[2];
}

console.log("gennorm - generate normalization test data.\n" +
        "Copyright © 2012-2015, 2020-2021 JEDLSoft");

if (!fs.existsSync(toDir)) {
    console.error("Could not access target directory " + toDir);
    usage();
}

var tests = [];

var ud = require("ucd-full/NormalizationTest.json").NormalizationTest;
var len = ud.length;

for (var i = 0; i < len; i++ ) {
    var entry = ud[i];
    if (entry.NFCSequence ||
            entry.NFDSequence ||
            entry.NFKCSequence ||
            entry.NFKDSequence) {
        tests.push([
            sequenceToString(entry.sourceSequence),
            sequenceToString(entry.NFCSequence),
            sequenceToString(entry.NFDSequence),
            sequenceToString(entry.NFKCSequence),
            sequenceToString(entry.NFKDSequence)
        ]);
    }
}

fs.writeFileSync(path.join(toDir, "normdata.js"),
    "var normtests = " + JSON.stringify(tests, true, 4) + ";\nif (typeof(module) !== 'undefined') module.exports=normtests;\n",
    "utf-8");
