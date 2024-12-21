/*
 * gencountrynames.js - ilib tool to generate the ctrynames.json files from
 * the CLDR data files
 *
 * Copyright © 2013-2024 JEDLSoft
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
var makeDirs = common.makeDirs;
var stringify = require('json-stable-stringify');
var Collator = require("../../js/lib/Collator.js");

function usage() {
    console.log("Usage: gencountrynames [-h] CLDR_xml_dir [locale_data_dir]\n" +
            "Generate localized country names from the CLDR data.\n\n" +
            "-h or --help\n" +
            "  this help\n" +
            "CLDR_xml_dir\n" +
            "  the top level of the Unicode CLDR distribution in xml format\n" +
            "locale_data_dir\n" +
            "  the top level of the ilib locale data directory");
    process.exit(1);
}

var cldrDirName;
var localeDirName;

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

if (process.argv.length < 3) {
    console.error('Error: not enough arguments');
    usage();
}


// Since the HK data has been removed from the common/subdivisions/en.xml file in CLDR v46,
// we need to add this data back to preserve it.
var HKRegionData = {
    "HK" : [
        {
            "code": "",
            "name": "Hong Kong SAR China"
        }
    ]
}

cldrDirName = process.argv[2];
localeDirName = process.argv[3] || "tmp";

console.log("gencountrynames - generate localized country names from the CLDR data.\n" +
        "Copyright (c) 2013-2024 JEDLSoft");
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

        var data = require(path.join("cldr-localenames-full/main", locale.getSpec(), "territories.json"));

        var destfile = calcLocalePath(language, script, country, "ctrynames.json");
        var destdata = loadFile(destfile);

        // If the existing file is there and done by hand, just merge these things into that file rather
        // than overwriting it. If the file is previously generated, start from a blank slate.
        if (!destdata || typeof(destdata.generated) === 'undefined' || destdata.generated !== false) {
            destdata = {};
        } else {
            console.log("Merging into existing by-hand file");
        }

        if (script) {
            if (!localeData[language]) {
                localeData[language] = {};
            }
            if (!localeData[language][script]) {
                localeData[language][script] = {};
            }
            if (country && !localeData[language][script][country]) {
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

function sortRegions(regions, locale) {
    // Do a locale-specific sort -- each country may sort
    // their list of regions in a different way, and not just
    // alphabetically.

    var collator = new Collator({
        locale: locale,
        sensitivity: "case"
    });
    var langComparator = collator.getComparator();

    for (country in regions) {
        // If the region code is numeric, sort by the region code.
        // Otherwise, sort by the translated region name
        var comparator = regions[country].every(function(region) {
                return !isNaN(Number(region.code));
            }) ?
            function(left, right) {
                return Number(left.code) - Number(right.code);
            } :
            function(left, right) {
                return langComparator(left.name, right.name);
            };

        regions[country].sort(function(left, right) {
            return comparator(left, right);
        });
    }

    return regions;
}

function filterRegions(subdivisions, locale) {
    var region, country, regions = {};

    for (var i = 0; i < subdivisions.length; i++) {
        var type = subdivisions[i].type.toUpperCase();
        country = type.substring(0,2);
        region = type.substring(2);
        if (!regions[country]) regions[country] = [];
        regions[country].push({
            code: region,
            name: subdivisions[i]["$t"]
        });
    }

    return regions;
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
                localeData[language][script][country].data = filterRegions(data.ldml.localeDisplayNames.subdivisions.subdivision);
            } else {
                localeData[language][script].data = filterRegions(data.ldml.localeDisplayNames.subdivisions.subdivision);
            }
        } else if (country) {
            if (!localeData[language][country]) {
                localeData[language][country] = {};
            }
            localeData[language][country].data = filterRegions(data.ldml.localeDisplayNames.subdivisions.subdivision);
        } else if (language) {
            localeData[language].data = filterRegions(data.ldml.localeDisplayNames.subdivisions.subdivision);
        }
    } catch (e) {
        return undefined;
    }

    return localeData;
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

function writeResources(language, script, country, data, filePrefix, writeReverse) {
    var pathname = calcLocalePath(language, script, country, "");
    var reverse = {};

    if (anyProperties(data)) {
        console.log("Writing " + pathname);
        if (pathname && pathname !== ".") makeDirs(pathname);

        if (filePrefix === "ctry") {
            fs.writeFileSync(path.join(pathname, filePrefix + "names.json"), stringify(data, {space: 4,
                cmp: function(a, b) {
                     return data[a] < data[b] ? -1 : data[a] > data[b] ? 1 : 0;
                 }
            }), "utf-8");
        } else {
            fs.writeFileSync(path.join(pathname, filePrefix + "names.json"), stringify(data, {space: 4}), "utf-8");
        }

        if (writeReverse) {
            for (var ctry in data) {
                if (ctry && data[ctry]) {
                    reverse[data[ctry]] = ctry;
                }
            }

            fs.writeFileSync(path.join(pathname, filePrefix + "reverse.json"), stringify(reverse, {space: 4}), "utf-8");
        }
    } else {
        console.log("Skipping empty " + pathname);
    }
}

function writeCountryNameResources(language, script, country, data) {
    writeResources(language, script, country, data, "ctry", true);
}

function writeRegionNameResources(language, script, country, data) {
    writeResources(language, script, country, data, "region", false);
}

function mergeArrays(array1, array2) {
    var set = {};
    var ret = [];
    for (var i = 0; i < array1.length; i++) {
        set[array1[i].code] = array1[i].name;
    }

    for (var i = 0; i < array2.length; i++) {
        set[array2[i].code] = array2[i].name;
    }

    for (var p in set) {
        ret.push({
            name: set[p],
            code: p
        });
    }

    return ret;
}

function mergeRegions(object1, object2) {
    var prop = undefined,
    newObj = {};
    for (prop in object1) {
        if (prop && typeof(object1[prop]) !== 'undefined') {
            newObj[prop] = object1[prop];
        }
    }
    for (prop in object2) {
        if (prop && typeof(object2[prop]) !== 'undefined') {
            // value of each prop should be an array
            if (!common.isArray(object1[prop])) {
                throw "Error: object1 contains a non-array";
            }
            if (!common.isArray(object2[prop])) {
                throw "Error: object2 contains a non-array";
            }
            newObj[prop] = mergeArrays(object1[prop], object2[prop]);
        }
    }
    return newObj;
}

function mergeByValue(object1, object2) {
    var tmp = {};
    for (var p in object1) {
        tmp[object1[p]] = p;
    }
    for (p in object2) {
        tmp[object2[p]] = p;
    }

    var ret = {};
    for (p in tmp) {
        ret[tmp[p]] = p;
    }

    return ret;
}

function mergeAndSortRegions(localeData) {
    if (localeData) {
        if (typeof(localeData.merged) === 'undefined') {
            // special case for the top level
            localeData.merged = localeData.data;
        }
        for (var prop in localeData) {
            // console.log("merging " + prop);
            if (prop && typeof(localeData[prop]) !== 'undefined' && prop !== 'data' && prop !== 'merged') {
                // console.log(prop + " ");
                localeData[prop].merged = mergeRegions(localeData.merged || {}, localeData[prop].data || {});
                localeData[prop].data = sortRegions(localeData[prop].merged);
                // console.log("recursing");
                mergeAndSortRegions(localeData[prop]);
            }
        }
    }
}

function sortCountries(localeData, locale) {
    if (localeData) {
        if (localeData.data) {
            var loc = (locale === "und") ? "en-US" : locale;
            var collator = new Collator({
                locale: loc,
                sensitivity: "case"
            });
            var langComparator = collator.getComparator();

            var countries = [];
            for (var country in localeData.data) {
                countries.push({
                    code: localeData.data[country],
                    name: country
                });
            }

            countries.sort(function(left, right) {
                return langComparator(left.name, right.name);
            });

            localeData.data = {};
            countries.forEach(function(country) {
                localeData.data[country.name] = country.code;
            });
        }

        for (var prop in localeData) {
            // console.log("merging " + prop);
            if (prop && typeof(localeData[prop]) !== 'undefined' && prop !== 'data' && prop !== 'merged') {
                // console.log(prop + " ");
                sortCountries(localeData[prop], (locale !== "und") ? locale + '-' + prop : prop);
            }
        }
    }
}

function mergeCountries(localeData) {
    if (localeData) {
        if (typeof(localeData.merged) === 'undefined') {
            // special case for the top level
            localeData.merged = localeData.data;
        }
        for (var prop in localeData) {
            // console.log("merging " + prop);
            if (prop && typeof(localeData[prop]) !== 'undefined' && prop !== 'data' && prop !== 'merged') {
                // console.log(prop + " ");
                localeData[prop].merged = mergeByValue(localeData.merged || {}, localeData[prop].data || {});
                localeData[prop].data = localeData[prop].merged;
                // console.log("recursing");
                mergeCountries(localeData[prop]);
            }
        }
    }
}

var localeDirs, localeData = {}, regionData = {};

try {
    localeDirs = require("cldr-core/availableLocales.json").availableLocales.full;
} catch (e) {
    console.log("Error: Could not load file cldr-core/availableLocales.json");
    process.exit(2);
}

console.log("Loading locale data...");

// get the information about scripts if necessary
for (var i = 0; i < localeDirs.length; i++) {
// for (var i = 0; i < 6; i++) {
    var localeSpec = localeDirs[i];
    var locale = new Locale(localeSpec);

    if (localeSpec !== "und") {
        getCountryNames(localeData, localeSpec, locale);
        getRegionNames(regionData, localeSpec, locale);
    }
}

//find the system resources
console.log("Merging and pruning locale data...");
localeData.data = localeData.en.data;

mergeCountries(localeData);
sortCountries(localeData, "und");

// use English as the root language for regions
regionData.data = regionData.en.data;

mergeAndSortRegions(regionData);
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

regionData["en"].data = merge(regionData["en"].data, HKRegionData)

for (language in regionData) {
    if (language && regionData[language] && language !== 'data' && language !== 'merged') {
        for (var subpart in regionData[language]) {
            if (subpart && regionData[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
                if (Locale.isScriptCode(subpart)) {
                    script = subpart;
                    for (country in regionData[language][script]) {
                        if (country && regionData[language][script][country] && country !== 'data' && country !== 'merged') {
                            sortRegions(regionData[language][script][country].data, new Locale(language, country, undefined, script));
                            writeRegionNameResources(language, script, country, regionData[language][script][country].data);
                        }
                    }
                    sortRegions(regionData[language][script].data, new Locale(language, undefined, undefined, script));
                    writeRegionNameResources(language, script, undefined, regionData[language][script].data);
                } else {
                    country = subpart;
                    sortRegions(regionData[language][country].data, new Locale(language, country, undefined, undefined));
                    writeRegionNameResources(language, undefined, subpart, regionData[language][country].data);
                }
            }
        }
        sortRegions(regionData[language].data, new Locale(language, undefined, undefined, undefined));
        writeRegionNameResources(language, undefined, undefined, regionData[language].data);
    }
}
sortRegions(regionData.data, new Locale("en-US"));
writeRegionNameResources(undefined, undefined, undefined, regionData.data);