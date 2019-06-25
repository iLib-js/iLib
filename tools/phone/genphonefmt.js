/*
 * genphonefmt.js - ilib tool to generate the json phonefmt information from the libphonefmt-js
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

var libphonefmt = require('libphonenumber-js/max');
var sampleNums = require("./exampleNums.json");

var numberTemplate =[];
var wholeTemplate = {};
var filename;
var testNumber, i, fixedlineNumber, mobileNumber;

for (country in sampleNums) {
    if (country === "001") break;

    filename = path.join(toDir, 'und', country)

    asYouType = new libphonefmt.AsYouType(country);
    numbers = sampleNums[country];
    
    asYouType = new libphonefmt.AsYouType(country);
    fixedlineNumber = numbers["fixed_line"];
    mobileNumber = numbers ["mobile"];

    if (fixedlineNumber && (libphonefmt.parsePhoneNumber(fixedlineNumber, country).isValid())) {
        asYouType.input(fixedlineNumber);

        if (asYouType.getTemplate() !== undefined) {
            console.log(country, " country has a validNumber:  " , fixedlineNumber, "  ", asYouType.getTemplate());
            if (!fs.existsSync(filename)) {
               mkdirs(filename);
            }

            asYouType.reset();
            numberTemplate =[];

            for (i=1; i< fixedlineNumber.length; i++) {
                testNumber = fixedlineNumber.substring(0,i);
                inputNum = asYouType.input(testNumber);
                console.log("###", asYouType.getTemplate());
                numberTemplate.push(asYouType.getTemplate());
                asYouType.reset();
            }
            wholeTemplate["fixedline_exampleNumber"] = fixedlineNumber;
            wholeTemplate["fixedline_template"] = numberTemplate;
        }
    }

    if (mobileNumber && (libphonefmt.parsePhoneNumber(mobileNumber, country).isValid())) {
        asYouType.input(mobileNumber);

        if (asYouType.getTemplate() !== undefined) {
            console.log(country, " country has a valid Mobile Number:  " , mobileNumber, "  ", asYouType.getTemplate());
            if (!fs.existsSync(filename)) {
               mkdirs(filename);
            }

            asYouType.reset();
            numberTemplate =[];

            for (i=1; i< mobileNumber.length; i++) {
                testNumber = mobileNumber.substring(0,i);
                inputNum = asYouType.input(testNumber);
                console.log("###", asYouType.getTemplate());
                numberTemplate.push(asYouType.getTemplate());
                asYouType.reset();
            }
            wholeTemplate["mobile_exampleNumber"] = mobileNumber;
            wholeTemplate["mobile_template"] = numberTemplate;
        }       
    }

    var writefile = path.join(filename, "phonefmt.json");
    console.log("Creating " + filename + "/phonefmt.json")
    fs.writeFileSync(writefile, JSON.stringify(wholeTemplate, true, 4), "utf-8");
 }