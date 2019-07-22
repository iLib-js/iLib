/*
 * geniddarea.js - ilib tool to generate the json numplan information from the libphonefmt-js
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
var ListFmt = require("../../js/lib/ListFmt.js");
var mkdirs = common.makeDirs;
var toDir = "tmp";


if (process.argv.length > 2) {
    toDir = process.argv[2];
}

function usage() {
    console.log("Usage: geniddarea.js [-h] [ output_dir ]\n" +
            "-h or --help\n" + "  this help\n");
    process.exit(1);
}

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

console.log("geniddarea.js - generate the iddarea.json file.\n");

var metadata = require("./libphonenumber-js/metadata.json");
var countries = require("../../js/data/locale/ctryreverse.json");

var callingCode = metadata.country_calling_codes;
var countryData = {};

var listfmt = new ListFmt({locale:"en-US", style:"unit", length:"full"});
var i, arrayCountry;

var hardCodeData = {
    "1": {
         "sn": "North America",
         "ln": "North America and the Caribbean Islands"
     },
     "65": {
         "sn": "Singapore",
         "ln": "Republic of Singapore" //Wikipedia
     },
     "86": {
         "sn": "China",
         "ln": "People's Republic of China" //Wikipedia
     },
     "886": {
         "sn": "Taiwan",
         "ln": "Republic of China" //Wikipedia
     }
}

for (number in callingCode) {

    if (!fs.existsSync(toDir)) {
        mkdirs(toDir);
    }

    if (hardCodeData.hasOwnProperty(number)) {
        countryData[number] = hardCodeData[number];
        continue;
    }

    countryData[number] = {};
    arrayCountry = [];
    countryCode = callingCode[number];
    
    countryData[number]["sn"] = countries[countryCode[0]];
    countryData[number]["ln"] = countries[countryCode[0]];
    numCountry = countryCode.length;

    i=0;
    while ((numCountry > 1) && (i < numCountry) ) {
        arrayCountry.push(countries[countryCode[i]]);
        i++;
    }

    if (numCountry == 1) {
        countryData[number]["ln"] = countries[countryCode[0]];
    } else {
        console.log("More than one country ......: ", number);
        countryData[number]["ln"] = listfmt.format(arrayCountry);    
    }
}

var file = path.join(toDir, "iddarea.json");
fs.writeFileSync(file, JSON.stringify(countryData, true, 4), "utf-8");
