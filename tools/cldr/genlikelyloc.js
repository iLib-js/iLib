/*
 * genlikelyloc.js - ilib tool to generate the localematch.json files from 
 * the CLDR data files
 * 
 * Copyright © 2013-2020, JEDLSoft
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
var common = require('./common');
var Locale = common.Locale;

var likelySubtags = require('cldr-data/supplemental/likelySubtags');
var territoryContainment = require('cldr-data/supplemental/territoryContainment');

function usage() {
    console.log("Usage: genlikelyloc [-h] [ locale_data_dir ]\n" +
            "Generate likely locale match information file.\n" +
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

console.log("genlikelyloc - generate the localematch.json file.\n" +
        "Copyright (c) 2013-2019 JEDLSoft");

console.log("locale dir: " + localeDirName);

if (!fs.existsSync(localeDirName)) {
    console.error("Could not access locale data directory " + localeDirName);
    usage();
}

var likelySubtags, likelySubtagsData, filename, json;

var localematch = {};

// Likely Locales

var likelylocales = {};
likelySubtagsData = likelySubtags.supplemental;

for (var partial in likelySubtagsData.likelySubtags) {
    if (partial && likelySubtagsData.likelySubtags[partial]) {
        var partialLoc = new Locale(partial);
        var full = new Locale(likelySubtagsData.likelySubtags[partial]);
        if (partialLoc.language === "und") {
            var cleanloc = new Locale(undefined, partialLoc.script, partialLoc.region);

            // add them with and without the "und" part
            likelylocales[cleanloc.getSpec()] = full.getSpec();
            likelylocales[partial] = full.getSpec();

            if (!partialLoc.script) {
                // this is the official locale for the region
                var langscript = new Locale(full.language, full.script);
                if (!likelylocales[langscript.getSpec()]) {
                    likelylocales[langscript.getSpec()] = full.getSpec();
                }
                var langregion = new Locale(full.language, undefined, full.region);
                if (!likelylocales[langregion.getSpec()]) {
                    likelylocales[langregion.getSpec()] = full.getSpec();
                }
            }
        } else {
            likelylocales[partial] = full.getSpec();
            if (!partialLoc.script && !partialLoc.region) {
                // this is the default locale for the language. Now generate the language + script for this and the
                // language + region because sometimes cldr does not contain them for some reason
                var langscript = new Locale(full.language, full.script);
                if (!likelylocales[langscript.getSpec()]) {
                    likelylocales[langscript.getSpec()] = full.getSpec();
                }
                var langregion = new Locale(full.language, undefined, full.region);
                if (!likelylocales[langregion.getSpec()]) {
                    likelylocales[langregion.getSpec()] = full.getSpec();
                }
            }
        }
    }
}

// fill in the gaps left by cldr -- these should be submitted to cldr for consideration
var additional = JSON.parse(fs.readFileSync("likelyLocalesAdditional.json", "utf-8"));
for (var territory in additional) {
    var fullspec = additional[territory];
    var full = new Locale(fullspec);

    if (territory && !likelylocales[territory]) {
        likelylocales[territory] = fullspec;
    }

    if (full.region && !likelylocales[full.region]) {
        likelylocales[full.region] = fullspec;
    }

    if (full.language && !likelylocales[full.language]) {
        likelylocales[full.language] = fullspec;
    }

    var langscript = new Locale(full.language, full.script);
    if (!likelylocales[langscript.getSpec()]) {
        likelylocales[langscript.getSpec()] = fullspec;
    }

    if (full.region) {
        if (!likelylocales["und-" + full.region]) {
            likelylocales["und-" + full.region] = fullspec;
        }

        var langregion = new Locale(full.language, undefined, full.region);
        if (!likelylocales[langregion.getSpec()]) {
            likelylocales[langregion.getSpec()] = fullspec;
        }

        var scriptregion = new Locale(undefined, full.script, full.region);
        if (!likelylocales[scriptregion.getSpec()]) {
            likelylocales[scriptregion.getSpec()] = fullspec;
        }
    }
}

function sortObject(obj) {
    var ret = {};
    Object.keys(obj).sort().forEach(function(prop) {
        ret[prop] = obj[prop];
    });
    return ret;
}

localematch.likelyLocales = sortObject(likelylocales);

// territory containments
var containment = {};
var containmentReverse = {};
var parentsHash = {};
var data = territoryContainment.supplemental.territoryContainment;

for (var territory in data) {
    if (territory.indexOf("-status") === -1) {
        var t = territory + "-status-grouping";
        if (data[t]) {
            containment[territory] = data[t]["_contains"].concat(data[territory]["_contains"]);
        } else {
            containment[territory] = data[territory]["_contains"];
        }
        
        containment[territory].forEach(function(region) {
            if (!parentsHash[region]) parentsHash[region] = [];
            parentsHash[region].push(territory);
        });
    }
}

function reverseArray(arr) {
    var ret = [];
    for (var i = arr.length-1; i > -1; i--) {
        ret.push(arr[i]);
    }
    return ret;
}

function toArray(set) {
    // convert from set to array
    var elements = [];
    set.forEach(function(element) {
        elements.push(element);
    });
    
    return elements;
}

function getAncestors(region) {
    // already calculated previously
    if (containmentReverse[region]) return containmentReverse[region];
    
    if (!parentsHash[region]) return []; // only the whole world has no parents
    
    // get all the ancestors of the current region...
    var parentsArray = parentsHash[region].map(function(parent) {
        return getAncestors(parent).concat([parent]);
    });

    // then add the biggest territories first as measured by the smallest
    // number of steps to the root of the tree
    parentsArray.sort(function(left, right) {
        return left.length - right.length;
    });
    
    // take care of duplicates using a set
    var set = new Set();
    // do a breadth-first insert into the set so that the largest territories
    // get added before smaller ones do
    var max = parentsArray.reduce(function(accumulator, currentValue) {
        return (currentValue.length > accumulator) ? currentValue.length : accumulator;
    }, 0);
    for (var i = 0; i < max; i++) {
        parentsArray.forEach(function(arr) {
            if (i < arr.length) {
                set.add(arr[i]);
            }
        });
    }
    
    containmentReverse[region] = toArray(set);
    return containmentReverse[region];
}

// make sure to calculate the ancestors of all regions
for (var region in parentsHash) {
    getAncestors(region);
}

localematch.territoryContainment = sortObject(containment);
localematch.territoryContainmentReverse = sortObject(containmentReverse);

// macro languages
var ml = JSON.parse(fs.readFileSync("macroLanguages.json", "utf-8"));

var mlReverse = {};
for (var macrolang in ml) {
    ml[macrolang].sort();
    ml[macrolang].forEach(function(lang) {
        mlReverse[lang] = macrolang;
    });
}

localematch.macroLanguages = sortObject(ml);
localematch.macroLanguagesReverse = sortObject(mlReverse);

// mutual intelligibility

var mi = JSON.parse(fs.readFileSync("mutualIntelligibility.json", "utf-8"));

localematch.mutualIntelligibility = mi;

console.log("Writing localematch.json...");

// now write out the system resources

var filename = localeDirName + "/localematch.json";
fs.writeFile(filename, JSON.stringify(localematch, true, 4), function (err) {
    if (err) {
        console.log(err);
        throw err;
    }
});

console.log("Done.");
