/*
 * gennumplan.js - ilib tool to generate the json numplan information from the libphonefmt-js
 * library
 *
 * Copyright © 2019-2020 JEDLSoft
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

var common = require('../cldr/common.js');
var path = require('../../js/lib/Path.js');

var metadata = require("./libphonenumber-js/metadata.json");

var mkdirs = common.makeDirs;
var toDir = "tmp";

if (process.argv.length > 2) {
    toDir = process.argv[2];
}

function usage() {
	console.log("Usage: gengeoinfo.js [-h] [ output_dir ]\n" +
            "-h or --help\n" + "  this help");
    process.exit(1);
}

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

console.log("gengeoinfo.js - generate the areaInfo.json file.");

function getCountry(file) {
    var country;
    var fileLength = file.length;
    var lastIndex = file.lastIndexOf("/") +1;
    var filename = file.substring(lastIndex, fileLength-4);

    country = metadata["country_calling_codes"][filename];

    if (country.length > 1) {
        console.log("");
        console.log("country is more than one......: ", country.length);
        for (var i=0; i < country.length; i++) {
            console.log("Country..... ", country[i]);
        }
        console.log("#######################################")
    } else {

    }
    return country[0];
}

dirPath = "./libphonenumber/resources/geocoding";
var numGeoInfo = {};
walk(dirPath, "");

function walk(root, dir) {
    var list = fs.readdirSync(path.join(root, dir));

    list.forEach(function (file) {
        var sourcePathRelative = path.join(dir, file);
        var sourcePath = path.join(root, sourcePathRelative);

        var stat = fs.statSync(sourcePath);
        
        if (stat && stat.isDirectory()) {
            walk(root, sourcePathRelative);
        } else {
            if (file.match(/\.txt$/)) {
                console.log("file: ", sourcePath);
                numGeoInfo = {};

                var country = getCountry(file);
                filename = path.join(toDir, 'und', country);

                if (!fs.existsSync(filename)) {
                    mkdirs(filename);
                }

                var rawdata = fs.readFileSync(sourcePath, 'utf8');
                var textByLine = rawdata.split("\n")
                var firstChar, data;
                var countryNum = file.replace(".txt", "");

                for (var i=0; i< textByLine.length; i++) {
                    firstChar = textByLine[i][0];
                    if (firstChar !== undefined && firstChar.search(/[0-9]/) === 0)  {
                        //console.log("firstChar: ", firstChar);
                        data = textByLine[i].split("|");
                        data[0] = data[0].replace(countryNum,""); //Remove country number in numbers. ie. South Korea: 82
                        numGeoInfo[data[0]] = data[1];
                    }
                }
                console.log("numGeoInfo: ", numGeoInfo);
                var file = path.join(filename, "areaInfo.json");
                console.log("Creating " + filename + "/areaInfo.json\n")
                fs.writeFileSync(file, JSON.stringify(numGeoInfo, true, 4), "utf-8");
            }
        }
    });
}
