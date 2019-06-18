/*
 * gennumplan.js - ilib tool to generate the json numplan information from the libphonefmt-js
 * library
 *
 * Copyright © 2019 JEDLSoft
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
var path = require('path');
var common = require('../cldr/common.js');
var mkdirs = common.makeDirs;
var toDir = "tmp";

if (process.argv.length > 2) {
    toDir = process.argv[2];
}

function usage() {
	console.log("Usage: genlikelyloc [-h] [ locale_data_dir ]\n" +
            "-h or --help\n" +
            "  this help\n" +
            "locale_data_dir\n" +
            "  the top level of the ilib locale data directory\n");
    process.exit(1);
}
console.log("gennumplan - generate the numplan.json file.\n");

var metadata = require("./metadata.json");
var countryData = metadata.countries;
var country, filename, exampleNums = {};

function getFormatChars(phonedata) {
    var formats = phonedata.formats;
    if (!formats) return "";

    var numformats = formats.length;
    var combineString = "", uniqChars = "";
    var i;

    for (i=0; i< numformats; i++) {
        combineString += formats[i].format;
    }

    trimString = combineString.replace(/[\$[0-9]|[0-9]*/g, "").replace(/\s+/g," ");

    if (trimString.length >1) {
        for (i=0; i < trimString.length; i++) {
            if (uniqChars.indexOf(trimString[i]) == -1) {
                uniqChars += trimString[i];
            }
        }
    }
    return uniqChars ? uniqChars : trimString;
}

for (country in countryData) {
    var numPlanData = {};
    var regx = RegExp(/[\!|\?|\:]/);

    filename = path.join(toDir, 'und', country)
    if (!fs.existsSync(filename)) {
        mkdirs(filename);
    }
    numPlanData["region"] = country;
    numPlanData["countryCode"] = countryData[country]["phone_code"];

    if (regx.test(countryData[country]["idd_prefix"])){
        numPlanData["iddCode"] = "It's regular expression. Need to be checked";
    } else {
        numPlanData["iddCode"] = countryData[country]["idd_prefix"];
    }

    numPlanData["trunkCode"] = countryData[country]["national_prefix"];
    numPlanData["commonFormatChars"] = getFormatChars(countryData[country]);

    exampleNums[country] = countryData[country]["examples"];

    var file1 = path.join(filename, "numplan.json");
    console.log("Creating " + filename + "/numplan.json")
    fs.writeFileSync(file1, JSON.stringify(numPlanData, true, 4), "utf-8");
}

var file2 = path.join(toDir, "exampleNums.json");
fs.writeFileSync(file2, JSON.stringify(exampleNums, true, 4), "utf-8");