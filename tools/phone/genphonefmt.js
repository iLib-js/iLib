/*
 * genphonefmt.js - ilib tool to generate the json phonefmt information from the libphonefmt-js
 * library
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

var libphonefmt = require('libphonenumber-js/max');
var sampleNums = require("./tmp/exampleNums.json");

var numberTemplate =[];
var wholeTemplate = {};
var filename;
var testNumber, fixedlineNumber, mobileNumber, serviceNumber, i;
var trunkNumber;

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

for (country in sampleNums) {
    wholeTemplate = {};

    if (country === "001") break;
    console.log("\n-----------------------------------------------");

    filename = path.join(toDir, 'und', country)

    asYouType = new libphonefmt.AsYouType(country);
    numbers = sampleNums[country];
    
    fixedlineNumber = numbers["fixed_line"];
    mobileNumber = numbers ["mobile"];
    serviceNumber = numbers ["toll_free"];

    trunkNumber = (numbers["trunkCode"] ? numbers["trunkCode"] : "");
    console.log(country + "  trunkNumber .... " + trunkNumber);

    if (fixedlineNumber && (libphonefmt.parsePhoneNumber(fixedlineNumber, country).isValid())) {
        fixedlineNumber = trunkNumber + fixedlineNumber;
        asYouType.input(fixedlineNumber);

        if (asYouType.getTemplate() !== undefined) {
            console.log(country, " country has a valid Fixedline Number: " , fixedlineNumber, " ", asYouType.getTemplate());
            if (!fs.existsSync(filename)) {
               console.log("Create a directory....", filename);
               mkdirs(filename);
            }
            asYouType.reset();
            numberTemplate =[];

            for (i=1; i< fixedlineNumber.length; i++) {
                testNumber = fixedlineNumber.substring(0,i);
                inputNum = asYouType.input(testNumber);
                //console.log("###", ( typeof asYouType.getTemplate() !== "undefined" ? asYouType.getTemplate(): "x"));
                if (i == 1 && (typeof asYouType.getTemplate() === 'undefined')) {
                    numberTemplate.push("x");
                } else {
                    numberTemplate.push(asYouType.getTemplate());
                }
                asYouType.reset();
            }
            wholeTemplate["fixedline_example"] = fixedlineNumber;
            wholeTemplate["fixedline"] = numberTemplate;
        }
    }

    if (mobileNumber && (libphonefmt.parsePhoneNumber(mobileNumber, country).isValid())) {
        mobileNumber = trunkNumber + mobileNumber;
        asYouType.input(mobileNumber);

        if (asYouType.getTemplate() !== undefined) {
            console.log(country, " country has a valid Mobile Number: " , mobileNumber, " ", asYouType.getTemplate());
            if (!fs.existsSync(filename)) {
               console.log("Create a directory....", filename);
               mkdirs(filename);
            }

            asYouType.reset();
            numberTemplate =[];

            for (i=1; i< mobileNumber.length; i++) {
                testNumber = mobileNumber.substring(0,i);
                inputNum = asYouType.input(testNumber);
                //console.log("###", ( typeof asYouType.getTemplate() !== "undefined" ? asYouType.getTemplate(): "x"));
                if (i == 1 && (typeof asYouType.getTemplate() === 'undefined')) {
                    numberTemplate.push("x");
                } else {
                    numberTemplate.push(asYouType.getTemplate());
                }
                asYouType.reset();
            }
            wholeTemplate["mobile_example"] = mobileNumber;
            wholeTemplate["mobile"] = numberTemplate;
        }
    }

    if (serviceNumber && (libphonefmt.parsePhoneNumber(serviceNumber, country).isValid())) {
        serviceNumber = trunkNumber + serviceNumber;
        asYouType.input(serviceNumber);

        if (asYouType.getTemplate() !== undefined) {
            console.log(country, " country has a valid Service Number: " , serviceNumber, " ", asYouType.getTemplate());
            if (!fs.existsSync(filename)) {
               console.log("Create a directory....", filename);
               mkdirs(filename);
            }

            asYouType.reset();
            numberTemplate =[];

            for (i=1; i< serviceNumber.length; i++) {
                testNumber = serviceNumber.substring(0,i);
                inputNum = asYouType.input(testNumber);
                //console.log("###", ( typeof asYouType.getTemplate() !== "undefined" ? asYouType.getTemplate(): "x"));
                if (i == 1 && (typeof asYouType.getTemplate() === 'undefined')) {
                    numberTemplate.push("x");
                } else {
                    numberTemplate.push(asYouType.getTemplate());
                }
                asYouType.reset();
            }
            wholeTemplate["service_example"] = serviceNumber;
            wholeTemplate["service"] = numberTemplate;
        }
    }

    for (var key in wholeTemplate) {
        if (wholeTemplate.hasOwnProperty(key)) {
            writefile = path.join(filename, "phonefmt.json");
            console.log("Creating " + filename + "/phonefmt.json")
            fs.writeFileSync(writefile, JSON.stringify(wholeTemplate, true, 4), "utf-8");
            break;
        }
    }
 }