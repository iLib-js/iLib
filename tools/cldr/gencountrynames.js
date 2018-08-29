/*
 * gencountrynames.js - ilib tool to generate the ctrynames.json files from
 * the CLDR data files
 *
 * Copyright © 2013-2018, JEDLSoft
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
var xml2json = require("xml2json");
var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;

function usage() {
    console.log("Usage: gencountrynames [-h] CLDR_xml_dir locale_data_dir\n" +
            "Generate localized country names from the CLDR data.\n\n" +
            "-h or --help\n" +
            "  this help\n" +
            "CLDR_xml_dir\n" +
            "  the top level of the Unicode CLDR distribution in xml format\n" +
            "locale_data_dir\n" +
            "  the top level of the ilib locale data directory\n");
    process.exit(1);
}

var cldrDirName;
var localeDirName;

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

if (process.argv.length < 4) {
    console.error('Error: not enough arguments');
    usage();
}

cldrDirName = process.argv[2];
localeDirName = process.argv[3];

console.log("gencountrynames - generate localized country names from the CLDR data.\n" +
        "Copyright (c) 2013-2018 JEDLSoft");
console.log("CLDR dir: " + cldrDirName);
console.log("locale dir: " + localeDirName);

if (!fs.existsSync(cldrDirName)) {
    console.error("Could not access CLDR dir " + cldrDirName);
    usage();
}

if (!fs.existsSync(localeDirName)) {
    console.error("Could not access locale data directory " + localeDirName);
    usage();
}

function loadFile(pathname) {
    var ret = undefined;

    if (fs.existsSync(pathname)) {
        json = fs.readFileSync(pathname, "utf-8");
        ret = JSON.parse(json);
    }

    return ret;
}

function filterCountries(countries, territories) {
    for (var country in territories) {
        if (country && territories[country] && (country !== territories[country])) {
            if (Locale.isRegionCode(country)) {
                countries[territories[country]] = country;
            }
        }
    }
    return countries;
}

function getCountryNames(localeData, pathname, locale) {
    try {
        var language = locale.getLanguage(),
            script = locale.getScript(),
            country = locale.getRegion();

        var data = require(path.join("cldr-data/main", locale.getSpec(), "territories.json"));

        var destfile = calcLocalePath(language, script, country, "ctrynames.json");
        var destdata = loadFile(destfile);

        // If the existing file is there and done by hand, just merge these things into that file rather
        // than overwriting it. If the file is previously generated, start from a blank slate.
        if (!destdata || typeof(destdata.generated) === 'undefined' || destdata.generated !== false) {
            destdata = {};
        } else {
            console.log("Merging into existing by-hand file\n");
        }

        if (script) {

            if (!localeData[language]) {
                localeData[language] = {};
            }
            if (!localeData[language][script]) {
                localeData[language][script] = {};
            }
            if (!localeData[language][script][country]) {
                localeData[language][script][country] = {};
            }
            if (country) {
                localeData[language][script][country].data = filterCountries(destdata, data.main[locale.getSpec()].localeDisplayNames.territories);
            } else {
                localeData[language][script].data = filterCountries(destdata, data.main[locale.getSpec()].localeDisplayNames.territories);
            }
        } else if (country) {
            if (!localeData[language]) {
                localeData[language] = {};
            }
            if (!localeData[language][country]) {
                localeData[language][country] = {};
            }
            localeData[language][country].data = filterCountries(destdata, data.main[locale.getSpec()].localeDisplayNames.territories);
        } else if (language) {
            if (!localeData[language]) {
                localeData[language] = {};
            }
            localeData[language].data = filterCountries(destdata, data.main[locale.getSpec()].localeDisplayNames.territories);
        } else {
            // root locale
            localeData.data = filterCountries(destdata, data.main[locale.getSpec()].localeDisplayNames.territories);
        }
    } catch (e) {
        return undefined;
    }

    return data;
}

function filterRegions(regions, subdivisions) {
    var ret = {};

    for (var i = 0; i < subdivisions.length; i++) {
        var type = subdivisions[i].type.toUpperCase();
        var country = type.substring(0,2);
        var region = type.substring(2);
        if (!ret[country]) ret[country] = {};
        ret[country][region] = subdivisions[i]["$t"];
    }

    return ret;
}

function getRegionNames(localeData, pathname, locale) {
    try {
        var language = locale.getLanguage(),
            script = locale.getScript(),
            country = locale.getRegion();

        var data, xmlData = fs.readFileSync(path.join(cldrDirName, "common/subdivisions", locale.getSpec() + ".xml"), "utf-8");
        if (xmlData) {
            data = xml2json.toJson(xmlData, {
                object: true,
                sanitize: true,
                reversible: true,
                trim: false
            });
        } else {
            return undefined;
        }

        var destdata = {};

        if (language && !localeData[language]) {
            localeData[language] = {};
        }
        if (script) {
            if (!localeData[language][script]) {
                localeData[language][script] = {};
            }
            if (country) {
                if (!localeData[language][script][country]) {
                    localeData[language][script][country] = {};
                }
                localeData[language][script][country].data = filterRegions(destdata, data.ldml.localeDisplayNames.subdivisions.subdivision);
            } else {
                localeData[language][script].data = filterRegions(destdata, data.ldml.localeDisplayNames.subdivisions.subdivision);
            }
        } else if (country) {
            if (!localeData[language][country]) {
                localeData[language][country] = {};
            }
            localeData[language][country].data = filterRegions(destdata, data.ldml.localeDisplayNames.subdivisions.subdivision);
        } else if (language) {
            localeData[language].data = filterRegions(destdata, data.ldml.localeDisplayNames.subdivisions.subdivision);
        }
    } catch (e) {
        return undefined;
    }

    return data;
}

function getMergedData(localeData, language, script, country) {
    var ret = localeData.data; // root
    if (language) {
        ret = merge(ret, localeData[language].data);
        if (script) {
            ret = merge(ret, localeData[language][script].data);
            if (country) {
                ret = merge(ret, localeData[language][script][country].data);
            }
        } else if (country) {
            ret = merge(ret, localeData[language][country].data);
        }
    }
    return ret;
}

function calcLocalePath(language, script, country, filename) {
    var pathname = localeDirName;
    if (!language && !script && !country) {
        return path.join(pathname, filename); // the root!
    }
    if (language) {
        pathname = path.join(pathname, language);
    } else {
        pathname = path.join(pathname, "und");
    }
    if (script) {
        pathname = path.join(pathname, script);
    }
    if (country) {
        pathname = path.join(pathname, country);
    }
    pathname = path.join(pathname, filename);
    return pathname;
}

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

function writeResources(language, script, country, data, filePrefix) {
    var pathname = calcLocalePath(language, script, country, "");
    var reverse = {};

    if (anyProperties(data)) {
        console.log("Writing " + pathname);
        if (pathname && pathname !== ".") makeDirs(pathname);
        //data = sortObject(data);
        fs.writeFileSync(path.join(pathname, filePrefix + "names.json"), JSON.stringify(data, true, 4), "utf-8");

        for (var ctry in data) {
            if (ctry && data[ctry]) {
                reverse[data[ctry]] = ctry;
            }
        }

        fs.writeFileSync(path.join(pathname, filePrefix + "reverse.json"), JSON.stringify(reverse, true, 4), "utf-8");
    } else {
        console.log("Skipping empty " + pathname);
    }
}

function writeCountryNameResources(language, script, country, data) {
    writeResources(language, script, country, data, "ctry");
}

function writeRegionNameResources(language, script, country, data) {
    writeResources(language, script, country, data, "region");
}

function sortObject(obj) {
    // sort data with value
    var keys = Object.keys(obj);
    var sortedInfoObj = {};
    var key;

    keys.sort(function(a, b){return obj[a] < obj[b] ? -1 : obj[a] > obj[b] ? 1 : 0;});

    for(var i = 0; i < keys.length; i++) {
        key = keys[i];
        sortedInfoObj[key] = obj[key];
    }
    return sortedInfoObj;
}

var localeDirs, localeData = {}, regionData = {};

try {
    localeDirs = require("cldr-data/availableLocales.json").availableLocales;
} catch (e) {
    console.log("Error: Could not load file cldr-data/availableLocales.json");
    process.exit(2);
}

console.log("Loading locale data...");

// get the information about scripts if necessary
for (var i = 0; i < localeDirs.length; i++) {
// for (var i = 0; i < 6; i++) {
    var localeSpec = localeDirs[i];
    var locale = new Locale(localeSpec);

    if (localeSpec !== "root") {
        getCountryNames(localeData, localeSpec, locale);
        getRegionNames(regionData, localeSpec, locale);
    }
}

//find the system resources
console.log("Merging and pruning locale data...");
mergeAndPrune(localeData);

// use English as the root language for regions
regionData.data = regionData.en.data;

mergeAndPrune(regionData);
console.log("Writing country and region name resources...");

// now write out the system resources

for (language in localeData) {
    if (language && localeData[language] && language !== 'data' && language !== 'merged') {
        for (var subpart in localeData[language]) {
            if (subpart && localeData[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
                if (Locale.isScriptCode(subpart)) {
                    script = subpart;
                    for (country in localeData[language][script]) {
                        if (country && localeData[language][script][country] && country !== 'data' && country !== 'merged') {
                            writeCountryNameResources(language, script, country, localeData[language][script][country].data);
                        }
                    }
                    writeCountryNameResources(language, script, undefined, localeData[language][script].data);
                } else {
                    writeCountryNameResources(language, undefined, subpart, localeData[language][subpart].data);
                }
            }
        }
        writeCountryNameResources(language, undefined, undefined, localeData[language].data);
    }
}
writeCountryNameResources(undefined, undefined, undefined, localeData.data);

for (language in regionData) {
    if (language && regionData[language] && language !== 'data' && language !== 'merged') {
        for (var subpart in regionData[language]) {
            if (subpart && regionData[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
                if (Locale.isScriptCode(subpart)) {
                    script = subpart;
                    for (country in regionData[language][script]) {
                        if (country && regionData[language][script][country] && country !== 'data' && country !== 'merged') {
                            writeRegionNameResources(language, script, country, regionData[language][script][country].data);
                        }
                    }
                    writeRegionNameResources(language, script, undefined, regionData[language][script].data);
                } else {
                    writeRegionNameResources(language, undefined, subpart, regionData[language][subpart].data);
                }
            }
        }
        writeRegionNameResources(language, undefined, undefined, regionData[language].data);
    }
}
writeRegionNameResources(undefined, undefined, undefined, regionData.data);
