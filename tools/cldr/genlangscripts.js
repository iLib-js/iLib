/*
 * genlangscripts.js - ilib tool to generate the json data about ISO 15924 scripts
 *
 * Copyright © 2013-2018, 2020-2022, 2024 JEDLSoft
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
var stringify = require('json-stable-stringify');

var common = require('./common.js');
var coelesce = common.coelesce;

function usage() {
    console.log("Usage: genlangscripts [-h] [toDir]\n" +
        "Generate the scripts.jf files for each language.\n" +
        "-h or --help\n" +
        "  this help\n" +
        "toDir\n" +
    "  directory to output the scripts.jf files. Default: current dir.");
    process.exit(1);
}

var toDir = ".";

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

toDir = process.argv[2] || "tmp";

console.log("genlangscripts - generate the localeinfo scripts.jf files.\n" +
    "Copyright (c) 2013-2018, 2020-2022, 2024 JEDLSoft");

console.log("output dir: " + toDir);

if (!fs.existsSync(toDir)) {
    console.error("Could not access locale data directory " + toDir);
    usage();
}

var supplementalData = require("cldr-core/supplemental/languageData.json");

var scripts = {};
var scripts_name = {};
var languageData = supplementalData.supplemental.languageData;

function anyProperties(data) {
    var count = 0;
    for (var prop in data) {
        if (prop && data[prop]) {
            count++;
        }
        if (count >= 1) {
            return true;
        }
    }
    return false;
}

for (var locale in languageData) {
    if (locale && languageData[locale]) {
        if (typeof (languageData[locale]["_scripts"]) === 'object') {
            var language = (locale.length <= 3) ? locale : locale.split(/-/)[0];
            if (typeof (scripts[language]) === 'undefined') {
                scripts[language] = [];
            }
            var newLangs = languageData[locale]["_scripts"];

            if (locale.length <= 3) {
                console.log("language " + language + " prepending " + JSON.stringify(newLangs));
                scripts[language] = newLangs;
            } else {
                console.log("language " + language + " appending " + JSON.stringify(newLangs));
                if (anyProperties(scripts[language])) {
                    for (i=0; i < newLangs.length; i++) {
                        scripts[language].push(newLangs[i]);
                    }
                } else {
                    scripts[language] = newLangs;
                }
            }
        }
    }
}

for (var language in scripts) {
    if (language && scripts[language]) {
        var filename = toDir + '/' + language;
        if (!fs.existsSync(filename)) {
            fs.mkdirSync(filename);
        }
        // special cases where we disagree with CLDR
        if (language === 'az' || language === 'ms' || language === 'kk' || language === 'pa'|| language === 'tk'|| language === 'ha' || language === 'uz') {
            scripts[language] = scripts[language].reverse();
        } else if (language == 'ky'|| language == 'tg') {
            var lang = scripts[language];
            var tmp = lang[0];
            lang[0] = lang[1];
            lang[1] = tmp;
        }
        console.log(language + ':\t"scripts": ' + JSON.stringify(scripts[language]) + ',');
        scripts_name["scripts"] = scripts[language];
        scripts_name.generated = true;
        fs.writeFile(filename + "/scripts.jf", stringify(scripts_name, {space: 4}), function (err) {
            if (err) {
                console.log(err);
                throw err;
            }
        });
    }
}