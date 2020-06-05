/*
 * genpapersizes.js - ilib tool to generate the json data about paper sizes
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
var path = require('path');
var suppData = require("cldr-data/supplemental/measurementData.json");

var unifile = require('./unifile.js');
var common = require('./common.js');
var UnicodeFile = unifile.UnicodeFile;
var coelesce = common.coelesce;
var mkdirs = common.makeDirs;


function usage() {
    console.log("Usage: genpapersize [-h] [toDir]\n" +
        "Generate the papersizes.jf files for each locale.\n" +
        "-h or --help\n" +
        "  this help\n" +
        "toDir\n" +
        "  directory to output the papersize.jf json files. Default: current dir.");
    process.exit(1);
}

var measurementDataFileName;
var toDir = ".";

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

/*
cldrDirName = process.argv[2]+"cldr-core";
 */
if (process.argv.length > 2) {
    toDir = process.argv[2];
}

console.log("genpapersizes - generate the localeinfo papersize.jf files.\n" +
    "Copyright (c) 2013-2018 JEDLSoft");

console.log("output dir: " + toDir);

if (!fs.existsSync(toDir)) {
    console.error("Could not access target directory " + toDir);
    usage();
}

measurementData = suppData.supplemental.measurementData;
var paperSizeData = measurementData.paperSize;

var paperSizes = {};
var papersize = {};

for (var territories in paperSizeData) {
    var territories_US_Letter,
        directory, filename;
    if (paperSizeData[territories] === "US-Letter") {
        directory = path.join(toDir, 'und', territories);
        filename = path.join(directory, "papersizes.jf");
        //console.log(filename );
        paperSizes["regular"] = "8x11";

        if (!fs.existsSync(directory)) {
            mkdirs(directory);
            //console.log(territories );
        }
        papersize["paperSizes"] = paperSizes;
        papersize.generated = true;
        
        fs.writeFileSync(filename, JSON.stringify(papersize, true, 4));
        console.log(filename);
    } else {
        // deal with "001": "A4". - code 001 indicates World.

        filename = path.join(toDir, "papersizes.jf");
        if (!fs.existsSync(toDir)) {
            fs.mkdirSync(toDir);
        }
        paperSizes["regular"] = "A4";
        papersize["paperSizes"] = paperSizes;
        papersize.generated = true;
        fs.writeFileSync(filename, JSON.stringify(papersize, true, 4));
        console.log(filename);
    }
}
