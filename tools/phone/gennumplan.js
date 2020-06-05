/*
 * gennumplan.js - ilib tool to generate the json numplan information from the libphonenumber-js library
 *
 * Copyright © 2019-2020 JEDLSoft
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

/*
*  Following country lists are having verified data. especially 'dialingPlan'.
*  To avoid breaking test cases, I don't generate data for the following countries.
*/
var skipCountry = ["KR", "US", "GB", "ES", "MX", "AR", "CO", "BR", "CA", "FR", "IT", "DE",
                   "RU", "JP", "CN", "TW", "NL", "AU", "IN", "BE", "LU", "IE", "NZ", "HK"];
/*
* Following countries are following a number plan other countries.
* So it does't need to create numplan.json file.
*/
var sharedNumplan = ["AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM",
                    "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI",
                    "GF", "MQ", "GP", "BL", "MF", "RE", "YT", "KZ", "GG", "IM", "JE", "SJ",
                    "CC", "CX", "EH","TA", "AX", "BL", "MF", "BQ"];

if (process.argv.length > 2) {
    toDir = process.argv[2];
}

function usage() {
    console.log("Usage: gengeoinfo.js [-h] [ output_dir ]\n" +
            "-h or --help\n" + "  this help");
    process.exit(1);
}

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

console.log("gennumplan.js - generate the numplan.json file.");

var metadata = require("./libphonenumber-js/metadata.json");
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
    if (country === "001" ||
       (skipCountry.indexOf(country) !== -1) ||
       (sharedNumplan.indexOf(country) !== -1)) {
        console.log("skip country.... : ", country)
        continue;
    }

    var numPlanData = {};
    var regx = RegExp(/[\!|\?|\:]/);
    var phoneMetadata = countryData[country];

    filename = path.join(toDir, 'und', country)
    if (!fs.existsSync(filename)) {
        mkdirs(filename);
    }
    numPlanData["region"] = country;
    numPlanData["countryCode"] = phoneMetadata["phone_code"];

    if (regx.test(countryData[country]["idd_prefix"])){
        numPlanData["iddCode"] = phoneMetadata["idd_prefix"] + "  - It's a regular expression. It needs to be checked";
    } else {
        numPlanData["iddCode"] = phoneMetadata["idd_prefix"];
    }
    numPlanData["trunkCode"] = phoneMetadata["national_prefix"];
    numPlanData["skipTrunk"] = (phoneMetadata["national_prefix"] ? true : false);

    /*
    *  No info in metadata. Just set default value
    * "dialingPlan": "closed"
    */
    numPlanData["dialingPlan"] = "closed";

    numPlanData["commonFormatChars"] = getFormatChars(phoneMetadata);

    var fieldLength = {
        "areaCode": 0,
        "cic": 0,
        "vsc": 0,
        "mobilePrefix": 0,
        "serviceCode": 0,
        "personal": 0,
        "minLocalLength": 0,
        "maxLocalLength": 8,
        "emergency": 0,
        "special": 0
    };

    if (phoneMetadata["types"]["fixed_line"] && phoneMetadata["types"]["fixed_line"]["possible_lengths"]) {
        countLength = phoneMetadata["types"]["fixed_line"]["possible_lengths"];
        if (countLength.length == 1) {
            fieldLength["maxLocalLength"] = countLength[0];
        } else {
            fieldLength["minLocalLength"] = countLength[0];
            fieldLength["maxLocalLength"] = countLength[countLength.length-1];
        }
    }

    numPlanData["fieldLengths"] = fieldLength;

    exampleNums[country]= phoneMetadata["examples"];
    if (typeof phoneMetadata["national_prefix"] !== "undefined") {
        exampleNums[country]["trunkCode"] = phoneMetadata["national_prefix"];
    }

    var file1 = path.join(filename, "numplan.json");
    console.log("Creating " + filename + "/numplan.json")
    fs.writeFileSync(file1, JSON.stringify(numPlanData, true, 4), "utf-8");
}

var file2 = path.join(toDir, "exampleNums.json");
fs.writeFileSync(file2, JSON.stringify(exampleNums, true, 4), "utf-8");

console.log("Done.");