/* 
 * gendelimiters.js - ilib tool to generate delimiters json fragments from  
 * the CLDR data files 
 *  
 * Copyright © 2013-2018, 2020 LGE 
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
var util = require('util');
var cldr = require('cldr-data');

var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;

function usage() {
    console.log("Usage: gendelimiters [-h] [ locale_data_dir ]\n" +
        "Generate delimiters information files.\n\n" +
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

console.log("gendelimiters - generate delimiters information files.\n" +
"Copyright (c) 2013 - 2018 LGE\n");

console.log("locale dir: " + localeDirName);

if (!fs.existsSync(localeDirName)) {
    console.error("Could not access locale data directory " + localeDirName);
    usage();
}

var language, region, script, files;
var localeDirs = cldr.availableLocales;
var localeData = {};

console.log("Reading locale data into memory...");

for (var i = 0; i < localeDirs.length; i++) {
    var dirname = localeDirs[i];
    if (dirname === "root") {
        // special case because "root" is not a valid locale specifier 
        getLocaleData(dirname, undefined);
    } else {
        var locale = new Locale(dirname);
        if(typeof(locale.getVariant()) === 'undefined') {
            getLocaleData(dirname, locale);
        }
    }
}

function loadFile_jf(path) {
    var ret = undefined;

    if (fs.existsSync(path)) {
        //console.log("path is :" + path);
        var json = fs.readFileSync(path, "utf-8");
        ret = JSON.parse(json);
    }
    return ret;
}

function calcLocalePath(language, script, region, filename) {
    var path = localeDirName + "/";
    if (language) {
        path += language + "/";
    }
    if (script) {
        path += script + "/";
    }
    if (region) {
        path += region + "/";
    }
    path += filename;
    return path;
}

function loadFileNonGenerated(language, script, region) {
    var path = calcLocalePath(language, script, region, "delimiters.jf");
    var obj = loadFile_jf(path);
    if (typeof (obj) !== 'undefined' && (typeof (obj.generated) === 'undefined' || obj.generated === false)) {
        // only return non-generated files 
        return obj;
    }
    return undefined;
}

function getLocaleData(dirname, locale) {
    var data;
    try {
        var language = undefined,
        script = undefined,
        region = undefined,
        spec = undefined;

        if (locale !== undefined)	 {
            language = locale.getLanguage(),
            script = locale.getScript(),
            region = locale.getRegion();
            spec = locale.getSpec();	
        } else {
            spec = "root";
        }

        var filename = path.join("cldr-data/main", dirname, "delimiters.json");
        var data = require(filename);
        var numData = data.main[spec].delimiters;

        if (script) {
            if (region) {
                if (!localeData[language]) {
                    localeData[language] = {};
                }
                if (!localeData[language][script]) {
                    localeData[language][script] = {};
                }
                if (!localeData[language][script][region]) {
                    localeData[language][script][region] = {};
                }
                localeData[language][script][region].data = numData;
            }
        } else if (region) {
            if (!localeData[language]) {
                localeData[language] = {};
            }
            if (!localeData[language][region]) {
                localeData[language][region] = {};
            }
            localeData[language][region].data = numData;
        } else if (language) {
            if (!localeData[language]) {
                localeData[language] = {};
            }
            localeData[language].data = numData;
        } else {
            // root locale 
            localeData.data = numData;
        }
    } catch (e) {
        return undefined;
    }

    return numData;
}

function anyProperties(data) {
    var count = 0;
    for (var prop in data) {
        if (prop && data[prop]) {
            count++;
        }
        if (count > 1) {
            return true;
        }
    }
    return false;
}

function writeQuotationChars(language, script, region, data) {

    var path = calcLocalePath(language, script, region, "");
    //console.log("data to be written into jf files" + path + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(data));
    if (data.generated) {
        if (anyProperties(data)) {
            console.log("Writing " + path);
            //var delimiters={};
            //makeDirs(path);
            if ((Object.keys(data["delimiter"]).length !== 0))	{
                data.generated=true;
                makeDirs(path);
                //if(data=undefined){
                fs.writeFileSync(path + "/delimiters.jf", JSON.stringify(data, true, 4) , "utf-8");
            }
            //}
        } else {
            console.log("Skipping empty " + path);
        }
    } else {
        console.log("Skipping existing " + path);
    }
}

function getQuotationChars(language, script, region, data) {
    // if it is already there and non-generated, return it 
    var delimiters = loadFileNonGenerated(language, script, region);

    if (delimiters) {
        console.log("Loaded existing resources from " + calcLocalePath(language, script, region, "delimiters.jf"));
        //console.log("\nLoaded existing resources data " + JSON.stringify(delimiters));
        delimiters.generated = false;
        return delimiters;
    }
    var delimiter_symbol={};
    // else generate a new one 
    delimiters = {
        generated: true
    };
    var delimiter_chars=data;
    delimiter_symbol["quotationStart"]=delimiter_chars["quotationStart"];
    delimiter_symbol["quotationEnd"]=delimiter_chars["quotationEnd"];
    delimiter_symbol["alternateQuotationStart"]=delimiter_chars["alternateQuotationStart"];
    delimiter_symbol["alternateQuotationEnd"]=delimiter_chars["alternateQuotationEnd"];

    //console.log("the delimiters are :"+JSON.stringify(delimiter_symbol));
    delimiters["delimiter"]=delimiter_symbol;
    return delimiters;
}

console.log("Merging and pruning locale data...");

mergeAndPrune(localeData);

var resources = {};

resources.data = getQuotationChars(undefined, undefined, undefined, localeData.data);
for (language in localeData) {
    if (language && localeData[language] && language !== 'data' && language !== 'merged') {
        resources[language] = resources[language] || {};
        console.log(language + " "); 
        for (var subpart in localeData[language]) {
            if (subpart && localeData[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
                resources[language][subpart] = resources[language][subpart] || {};
                if (Locale.isScriptCode(subpart)) {
                    script = subpart;
                    for (region in localeData[language][script]) {
                        resources[language][script][region] = resources[language][script][region] || {};
                        if (region && localeData[language][script][region] && region !== 'data' && region !== 'merged') {
                            resources[language][script][region].data = getQuotationChars(language, script, region, localeData[language][script][region].merged);
                        }
                    }
                }
                resources[language][subpart].data = getQuotationChars(language, subpart, undefined, localeData[language][subpart].merged);
            }
        }
        resources[language].data = getQuotationChars(language, undefined, undefined, localeData[language].merged);
    }
}

//resources.data = getQuotationChars(undefined, undefined, undefined, localeData.data); 
console.log("Merging and pruning r...");
//console.log("\nLoaded existing resources " + JSON.stringify(resources));
//writeQuotationChars(undefined, undefined, undefined, resources.data); 
//console.log("\ndata before merge and pruning\n"+JSON.stringify(resources));
mergeAndPrune(resources);
//console.log("\ndata after merge and pruning\n"+JSON.stringify(resources));
//writeQuotationChars(undefined, undefined, undefined, resources.data);

for (language in resources) {
    if (language && resources[language] && language !== 'data' && language !== 'merged') {
        for (var subpart in resources[language]) {
            if (subpart && resources[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
                if (Locale.isScriptCode(subpart)) {
                    script = subpart;
                    for (region in resources[language][script]) {
                        if (region && resources[language][script][region] && region !== 'data' && region !== 'merged') {
                            writeQuotationChars(language, script, region, resources[language][script][region].data);
                        }
                    }
                    writeQuotationChars(language, script, undefined, resources[language][script].data);
                } else {
                    writeQuotationChars(language, undefined, subpart, resources[language][subpart].data);
                }
            }
        }
        writeQuotationChars(language, undefined, undefined, resources[language].data);
    }
}

writeQuotationChars(undefined, undefined, undefined, resources.data); 
process.exit(0);
