/*#
 * genclockprefs.js - ilib tool to generate the  clock json fragments from
 * the CLDR data files
 *
 * Copyright © 2013-2022 LGE
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
/*#
 * This code is intended to be run under node.js
 */
var fs = require('fs');

var common = require('./common');
var Locale = common.Locale;
var makeDirs = common.makeDirs;
var path = require("path");
var supplementalData = require("cldr-core/supplemental/timeData.json").supplemental;

function usage() {
    console.log("Usage: genclockprefs [-h] locale_data_dir\n" +
        "Generate clock preferences information files.\n\n" +
        "-h or --help\n" +
        "  this help\n" +
        "locale_data_dir\n" +
    "  the top level of the ilib locale data directory");
    process.exit(1);
}

process.argv.forEach(function (val) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});
resultDir = process.argv[2] || "tmp";
var timeData = supplementalData.timeData;

console.log("genclockprefs - generate clock preferences information files.\n" +
"Copyright (c) 2013-2022 JEDLSoft\n");

if (!fs.existsSync(resultDir)) {
    common.makeDirs(resultDir);
}

function getPreferClock(char){
    if (!char) return;
    return (char === "H") ? "24" : "12";
}

var rootClockPref = getPreferClock(timeData["001"]["_preferred"]);

clockprefs = {
    generated: true
};

clockprefs["clock"] = rootClockPref;
fs.writeFileSync(path.join(resultDir, "clock.jf"), JSON.stringify(clockprefs, true, 4), "utf-8");

for(var locale in timeData){
    clockprefs = {
        generated: true
    };

    var lo = new Locale(locale);
    var loStr=lo.getSpec();

    if (loStr === "001") continue;
    var clock = timeData[locale]["_preferred"];
    var outPath = "", fullPath = "";

    if (Locale.isRegionCode(loStr)){
        outPath = path.join("und", locale);
    } else {
        if (loStr.indexOf("001") > -1){
            outPath = lo.getLanguage();
        } else {
            outPath = path.join(lo.getLanguage(), lo.getRegion());
        }
    }
    fullPath = path.join(resultDir, outPath);
    if (!fs.existsSync(fullPath)){
        makeDirs(fullPath);
    }
    clockprefs["clock"] = getPreferClock(clock);
    console.log("Writing file : " + path.join(fullPath, "clock.jf"));
    fs.writeFileSync(path.join(fullPath, "clock.jf"), JSON.stringify(clockprefs, true, 4), "utf-8");
}

console.log("DONE.");
process.exit(0);