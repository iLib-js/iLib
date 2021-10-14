/*
 * genlang2charset.js - ilib tool to generate the mapping between languages
 * and charsets that support that language
 * 
 * Copyright © 2018, 2020 JEDLSoft
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
var common = require('./common.js');
var path = require('path');

var Locale = common.Locale;

var ilib = require("../../js/lib/ilib-node.js"); // installs the node loader
var LocaleMatcher = require("../../js/lib/LocaleMatcher.js");

function usage() {
    console.log("Usage: genlang2charset [path_to_locale_data]\n" +
            "Generate the map between language codes and the charsets that support those languages.\n\n" +
            "-h or --help\n" +
            "  this help\n" +
            "path_to_locale_data\n" +
            "  path to ilib's js/data/locale directory. Default: ../../js/data/locale");
    process.exit(1);
}

var localeDir = "../../js/data/locale";

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

if (process.argv[2]) {
    localeDir = process.argv[2];
}

//trick to get ilib to load the right data
ilib._load._exists(localeDir, "localematch.json");


console.log("genlang2charset - generate language to charset mapping data.\n" +
        "Copyright (c) 2018 JEDLSoft\n");

if (!fs.existsSync(localeDir)) {
    console.error("Could not access locale dir " + localeDir);
    usage();
}

function toArray(set) {
    var ret = [];
    if (!set) return ret;
    set.forEach(function(element) {
        ret.push(element);
    });
    return ret;
}

var charsetsDir = path.join(localeDir, "charset");
var files = fs.readdirSync(charsetsDir);

var map = {};

files.filter(function(file) {
    return file && file.endsWith(".json");
}).forEach(function(file) {
    var data = JSON.parse(fs.readFileSync(path.join(charsetsDir, file), "utf-8"));
    var charset = path.basename(file, ".json");
    if (data && data.locales) {
        data.locales.forEach(function(locale) {
            var lang;
            
            // star means "all locales"
            if (locale !== "*") {
                var l = new Locale(locale);
                var lm = new LocaleMatcher({locale: locale});
                var full = lm.getLikelyLocale();
                lang = full.getLanguage();
                if (lang && l.getScript()) {
                    lang += "-" + l.getScript();
                }
            }
            
            if (lang) {
                if (!map[lang]) {
                    map[lang] = new Set();
                }
                map[lang].add(charset);
            }
        });
    }
});

var output = {};

Object.keys(map).sort().forEach(function(lang) {
    output[lang] = toArray(map[lang]);
});

// this is for all languages
output["*"] = [
    "UTF-8",
    "UTF-16",
    "UTF-16BE",
    "UTF-16LE"
];

fs.writeFileSync(path.join(localeDir, "lang2charset.json"), JSON.stringify(output, undefined, 4), "utf-8");

console.log("Done.");