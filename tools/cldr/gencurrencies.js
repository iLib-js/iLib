/*
 * gencurrency.js - ilib tool to generate the json data about currency
 *
 * Copyright © 2016, LGE
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
var unifile = require('./unifile.js');
var common = require('./common.js');
var UnicodeFile = unifile.UnicodeFile;
var coelesce = common.coelesce;
var mkdirs = common.makeDirs;
var path = require("path");

function usage() {
    console.log("Usage: gencurrency [-h] CLDR_dir [toDir]\n" +
        "Generate the currency.jf files for each country.\n\n" +
        "-h or --help\n" +
        "  this help\n" +
        "CLDR_dir\n" +
        "  directory with CLDR represented in json format downloaded from the Unicode site\n" +
        "toDir\n" +
        "  directory to output the currency.jf json files. Default: current dir.\n");
    process.exit(1);
}

function getUsingCurrency(object) {
    var i, curObj, cur, ret = [];
    for (i = 0; i < object.length; i++) {
        for (curObj in object[i]) {
            if(object[i][curObj]._to === undefined && object[i][curObj]._from !== undefined) {
                ret.push(curObj);
            }
        }
    }
    return ret;
}

function getDecimals(currency, fractions) {
    var cur;
    for(cur in fractions) {
        if(cur === currency) {
            return Number(fractions[cur]._digits);
        }
    }

    // in CLDR, default _digits value is 2
    // "DEFAULT": {
    //      "_rounding": "0",
    //      "_digits": "2"
    //}
    return 2;
}

function getNameAndSign(currency, cldrData, ilibData) {
    var cur, arr = [];

    for(cur in cldrData) {
        if(cur === currency) {
            if(cldrData[cur]['symbol-alt-narrow'] !== undefined) {
                arr['sign'] = cldrData[cur]['symbol-alt-narrow'];
            } else if(cldrData[cur]['symbol-alt-variant'] !== undefined && cldrData[cur]['symbol-alt-narrow'] === undefined) {
                arr['sign'] = cldrData[cur]['symbol-alt-variant'];
            } else if(cldrData[cur]['symbol-alt-variant'] === undefined && cldrData[cur]['symbol-alt-narrow'] === undefined) {
                arr['sign'] = ilibData[cur]['sign'];
            } else {
                arr['sign'] = cldrData[cur]['symbol'];
            }

            if(arr['sign'] === undefined) {
                arr['sign'] = currency;
            }

            arr['name'] = cldrData[cur].displayName;
            return arr;
        }
    }
    return undefined;
}

var cldrDir, currencyDataFileName;
var toDir = ".";

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

if (process.argv.length < 3) {
    console.error('Error: not enough arguments');
    usage();
}

cldrDir = process.argv[2];

if (process.argv.length > 3) {
    toDir = process.argv[3];
}

console.log("gencurrency - generate currency information files.\n" + "Copyright (c) 2016 LGE\n");
console.log("CLDR dir: " + cldrDir + "\n");
console.log("output dir: " + toDir + "\n");

var ilibDataFileName = "../../js/data/locale/currency.json";
var currencyDataFileName = path.join(cldrDir, "supplemental/currencyData.json");
var currencyDisplayFileName = path.join(cldrDir, "main/en-US/currencies.json");

if (!fs.existsSync(currencyDataFileName)) {
    console.log("Could not access CLDR supplemental data file " + currencyDataFileName);
    usage();
}
if (!fs.existsSync(currencyDisplayFileName)) {
    console.log("Could not access CLDR region data file " + currencyDisplayFileName);
    usage();
}
if (!fs.existsSync(toDir)) {
    console.log("Could not access target directory " + toDir);
    usage();
}

var ilibDataString = fs.readFileSync(ilibDataFileName, "utf-8");
var currencyDataString = fs.readFileSync(currencyDataFileName, "utf-8");
var currencyDisplayString = fs.readFileSync(currencyDisplayFileName, "utf-8");
var ilibData = JSON.parse(ilibDataString);
var supplementalData = JSON.parse(currencyDataString);
var mainData = JSON.parse(currencyDisplayString);
var currencyData = supplementalData.supplemental.currencyData;
var currencyDispData = mainData.main['en-US'].numbers.currencies;
var currencyObj = {}; // for saving currency.jf in each directory
var currencyInfoObj = {}; // currency information object for currency.json
var filename, nameAndSign = [], cur = [];

for (var region in currencyData.region) {
    if (region && currencyData.region[region]) {
        if (region == "150") { // 150 code: europe
            continue;
        } else {
            filename = path.join(toDir, 'und', region);
        }
        if (!fs.existsSync(filename)) {
            mkdirs(filename);
        }

        cur = getUsingCurrency(currencyData.region[region]);

        if(cur.length === 0) {
            continue;
        }
        for (var i = 0; i < cur.length; i++) {
            nameAndSign = getNameAndSign(cur[i], currencyDispData, ilibData);
            currencyObj.currency = cur[i];
            currencyInfoObj[cur[i]] = {};
            console.log(region + '/' + cur[i]);
            currencyInfoObj[cur[i]].name = nameAndSign['name'];
            currencyInfoObj[cur[i]].decimals = getDecimals(cur[i], currencyData.fractions);
            currencyInfoObj[cur[i]].sign = nameAndSign['sign'];
            fn = path.join(filename, "currency.jf");
            fs.writeFileSync(fn, JSON.stringify(currencyObj, true, 4), "utf-8");
        }
    }
}

var keys = Object.keys(currencyInfoObj);
var fnJson = path.join(toDir, "currency.json");
var sortedInfoObj = {};
var key;
var primaryCur = [];

keys.sort();
// for currency that has large circulation
for(var i = keys.length-1; i >= 0; i--) {
    if(keys[i] === "USD") {
        primaryCur.push(keys[i]);
        keys.splice(i, 1);
    }
    if(keys[i] === "CHF") {
        primaryCur.push(keys[i]);
        keys.splice(i, 1);
    }
    if(keys[i] === "RON") {
        primaryCur.push(keys[i]);
        keys.splice(i, 1);
    }
    if(keys[i] === "RUB") {
        primaryCur.push(keys[i]);
        keys.splice(i, 1);
    }
    if(keys[i] === "SEK") {
        primaryCur.push(keys[i]);
        keys.splice(i, 1);
    }
    if(keys[i] === "GBP") {
        primaryCur.push(keys[i]);
        keys.splice(i, 1);
    }
    if(keys[i] === "PKR") {
        primaryCur.push(keys[i]);
        keys.splice(i, 1);
    }
    if(keys[i] === "KES") {
        primaryCur.push(keys[i]);
        keys.splice(i, 1);
    }
    if(keys[i] === "KRW") {
        primaryCur.push(keys[i]);
        keys.splice(i, 1);
    }
}
for(var i = primaryCur.length-1; i >= 0; i--) {
    keys.unshift(primaryCur[i]);
}
for(var i = 0; i < keys.length; i++) {
    key = keys[i];
    sortedInfoObj[key] = {};
    sortedInfoObj[key].name = currencyInfoObj[key].name
    sortedInfoObj[key].decimals = currencyInfoObj[key].decimals
    sortedInfoObj[key].sign = currencyInfoObj[key].sign
}
fs.writeFileSync(fnJson, JSON.stringify(sortedInfoObj, true, 4), "utf-8");