/*
 * genscripts.js - ilib tool to generate the json data about ISO 15924 scripts
 * 
 * Copyright © 2013 - 2017, 2020-2021 JEDLSoft
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
var coelesce = common.coelesce;
var scriptMetaData = require("cldr-core/scriptMetadata.json").scriptMetadata;
var scriptsFile = require("ucd-full/Scripts.json").Scripts;

function usage() {
    console.log("Usage: genscripts [-h] [toDir]\n" +
            "Generate the normalization data.\n\n" +
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

if (process.argv.length < 2) {
    console.error('Error: not enough arguments');
    usage();
}

if (process.argv.length > 1) {
    toDir = process.argv[2];
}

console.log("genscripts - generate scripts data.\n" +
        "Copyright (c) 2012-2017, 2020-2021 JEDLSoft");

if (!fs.existsSync(toDir)) {
    console.error("Could not access target directory " + toDir);
    usage();
}

var scripts = {};
var fullToShortMap = {};

var iso15924;
var entry;
var script;
var longCode;
var row, scriptName, range;
var scriptToRange = {};
var ranges = [];
var rangeToScript = [];

function compareByStart(left, right) {
    return left[1] - right[1];
}

import("iso-15924").then(function(isoModule) {
    var iso15924 = isoModule.iso15924;
    var len = iso15924.length;

    for (var i = 0; i < len; i++ ) {
        entry = iso15924[i];
    
        longCode = entry.pva || entry.name;
        longCode = longCode.replace(/ +/g, '_');
        script = {
            nb: parseInt(entry.numeric, 10),
            nm: entry.name,
            lid: longCode
        };
    
        scripts[entry.code] = script;
        if (longCode.length > 0) {
            fullToShortMap[longCode.toLowerCase()] = entry.code;
        }
    }
    
    for (var scriptName in scriptMetaData) {
        var entry = scriptMetaData[scriptName];
        console.log(scriptName + " isrtl " + entry.rtl);
    
        // is this script written right-to-left?
        scripts[scriptName].rtl = (entry.rtl === "YES");
    
        // does this script require an IME to enter text?
        scripts[scriptName].ime = (entry.ime === "YES");
    
        // does this script have the concept of upper- and lower-case?
        scripts[scriptName].casing = (entry.hasCase === "YES");
    }
    
    // the Unicode data has only the binary decompositions. That is, the first of 
    // two chars of a decomposition may be itself decomposable. So, apply the 
    // decompositions recursively here to pre-calculate the full decomposition 
    // before writing out the files.
    
    fs.writeFileSync(path.join(toDir, "scripts.json"), JSON.stringify(scripts, true, 4), "utf-8");
    
    for (var i = 0; i < scriptsFile.length; i++) {
        entry = scriptsFile[i];
        scriptName = fullToShortMap[entry.script.toLowerCase()] || entry.script;
        range = entry.range.map(function(element) {
            return parseInt(element, 16);
        });
    
        if (range.length > 1) {
            ranges.push([scriptName, range[0], range[1]]);
        } else {
            ranges.push([scriptName, range[0]]);
        }
    
        if (!scriptToRange[scriptName]) {
            scriptToRange[scriptName] = [range];
        } else {
            scriptToRange[scriptName].push(range);
        }
    }
    
    for (script in scriptToRange) {
        if (script && scriptToRange[script]) {
            scriptToRange[script] = coelesce(scriptToRange[script], 0);
        }
    }
    
    ranges.sort(compareByStart);
    rangeToScript = coelesce(ranges, 1);
    
    fs.writeFileSync(path.join(toDir, "scriptToRange.json"), JSON.stringify(scriptToRange, true, 4), "utf-8");
    fs.writeFileSync(path.join(toDir, "rangeToScript.json"), JSON.stringify(rangeToScript, true, 4), "utf-8");
});