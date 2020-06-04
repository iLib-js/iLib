/*
 * genlangreg.js - ilib tool to generate the langname and regionname json fragments from the CLDR
 * data files
 *
 * Copyright © 2013-2018, 2020 JEDLSoft
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
var common = require("./common");
var cldr = require("cldr-data");
var path = require("path");
var Locale = common.Locale;
var mkdirs = common.makeDirs;

function usage() {
    console.log("Usage: genlangreg [-h] [ locale_data_dir ]\n" +
        "Generate the langname.jf and regionname.jf files for each locale.\n" +
        "-h or --help\n" +
        "  this help\n" +
        "locale_data_dir\n" +
    "  the top level of the ilib locale data directory");
    process.exit(1);
}

var localeDirName;

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

localeDirName = process.argv[2] || "tmp";

console.log("genlangreg - generate language and region name data.\n" +
    "Copyright (c) 2013-2018, 2020 JEDLSoft");

console.log("locale dir: " + localeDirName);

if (!fs.existsSync(localeDirName)) {
    common.makeDirs(localeDirName);
}

var languagesData, regionData;
var languages, region, script;
var language_name = {
    generated: true
};
var region_name = {
    generated: true
};

var filename = "cldr-data/main/en/languages.json";

try {
    languagesData = require(filename);
    languages = languagesData.main.en.localeDisplayNames.languages;
} catch (e) {
    console.log("Error: Could not load file " + filename);
    process.exit(2);
}

console.log("Generating language name data");

for (var lang in languages) {
    if (lang.search(/[_-]/) === -1) {
        var langdir = path.join(localeDirName,lang);
        console.log(langdir + ": " + languages[lang]);
        mkdirs(langdir);
        language_name["language.name"] = languages[lang];
        language_name.generated = true;
        fs.writeFileSync(path.join(langdir, "langname.jf"), JSON.stringify(language_name, true, 4), "utf-8");
    }
}

try {
    regionsData = require("cldr-data/main/en/territories.json");
} catch (e) {
    console.log("Error: Could not load file cldr-data/main/en/territories.json");
    process.exit(2);
}
regions = regionsData.main.en.localeDisplayNames.territories;

for (region in regions) {
    if (region.search(/[_\-0123456789]/) === -1) {
        var regdir = path.join(localeDirName, "und", region);
        console.log(regdir + ": " + regions[region]);
        mkdirs(regdir);
        region_name["region.name"] = regions[region];
        region_name.generated = true;
        fs.writeFileSync(path.join(regdir, "regionname.jf"), JSON.stringify(region_name, true, 4), "utf-8");
    }
}
var xxRegion = {"region.name": "Unknown"};
var xxPath = path.join(localeDirName, "und", "XX");

if (!fs.existsSync(xxPath)) {
    mkdirs(xxPath);
}
fs.writeFileSync(path.join(xxPath, "regionname.jf"), JSON.stringify(xxRegion, true, 4), "utf-8");
