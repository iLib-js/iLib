/*
 * gennumplan.js - ilib tool to generate the json numplan information from the libphonefmt-js
 * library
 *
 * Copyright © 2019 JEDLSoft
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
var path = require('path');
var common = require('../cldr/common.js');
var mkdirs = common.makeDirs;
var toDir = "tmp";

if (process.argv.length > 2) {
    toDir = process.argv[2];
}

function usage() {
	console.log("Usage: genlikelyloc [-h] [ locale_data_dir ]\n" +
            "-h or --help\n" +
            "  this help\n" +
            "locale_data_dir\n" +
            "  the top level of the ilib locale data directory\n");
    process.exit(1);
}
console.log("gennumplan - generate the numplan.json file.\n");

var metadata = require("./metadata.json");
var countryData = metadata.countries;
var country, filename, exampleNums = {};

for (country in countryData) {
	var numPlanData = {};
	filename = path.join(toDir, 'und', country)
	if (!fs.existsSync(filename)) {
		mkdirs(filename);
	}
	numPlanData["region"] = country;
	numPlanData["countryCode"] = countryData[country]["phone_code"];
	numPlanData["iddCode"] = countryData[country]["idd_prefix"];
	numPlanData["trunkCode"] = countryData[country]["national_prefix"];
	
	exampleNums[country] = countryData[country]["examples"];

	var file1 = path.join(filename, "numplan.json");
	console.log("Creating " + filename + "/numplan.json")
	fs.writeFileSync(file1, JSON.stringify(numPlanData, true, 4), "utf-8");
}
var file2 = path.join(toDir, "exampleNums.json");
fs.writeFileSync(file2, JSON.stringify(exampleNums, true, 4), "utf-8");

