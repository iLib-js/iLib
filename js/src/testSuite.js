/*
 * testSuite.js - top level test suite
 * 
 * Copyright © 2013, JEDLSoft
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

var util = require("util");
var path = require("path");

var JsUnit = require("./testcli/runner.js");

var runner = new JsUnit.TestRunner("../..");

/*
var suites = [
	"util/test/testSuite.js",
	"test/testSuite.js",
	"calendar/test/testSuite.js",
	"maps/test/testSuite.js",
	"phone/test/testSuite.js",
	"units/test/testSuite.js"
];
*/

var suiteDefinitions = {
	"core": [
        "util",
        "."
	],
	"standard": [
	    "util",
	    ".",
	    "calendar",
	    "date",
	    "number",
	    "maps",
	    "ctype"
	],
	"full": [
	    "util",
	    ".",
	    "calendar",
	    "date",
	    "number",
	    "maps",
	    "ctype",
	    "strings-ext",
	    "phone",
	    "units",
	    "name",
	    "address",
	    "collate"
    ]
};

// override the possible node environment to make the tests uniform
process.env.TZ = "";
process.env.LANG = "";
process.env.LC_ALL = "";

var assembly = "dynamic";
var compilation = "uncompiled";
var size = "full";
var suite = suiteDefinitions.full;

if (process.argv.length > 2) {
	if (process.argv.length > 3) {
		if (process.argv.length > 4) {
			size = process.argv[4];
			switch (size) {
				case "core":
				case "standard":
				case "full":
					suite = suiteDefinitions[size];
					break;
				default:
					suite = size;
					if (suiteDefinitions.full.indexOf(suite) === -1 && suite !== "all") {
						util.print("Suite " + suite + " is unrecognized. Testing all suites by default.\n");
						suite = suiteDefinitions.full;
					} else {
						util.print("Only running test " + suite + "\n");
						suite = [ suite ];
					}
					break;
			}
		}
		compilation = process.argv[3];
		if (compilation !== "uncompiled" && compilation !== "compiled") {
			util.print("Compilation " + compilation + " is unknown. Using 'compiled' by default.\n");
			compilation = "compiled";
		}
	}
	assembly = process.argv[2];
	if (assembly !== "assembled" && assembly !== "dynamic") {
		util.print("Assembly " + assembly + " is unknown. Using 'dynamic' by default.\n");
		compilation = "dynamic";
	}
}

util.print("Running " + compilation + " " + assembly + " suites: " + JSON.stringify(suite) + "\n");

for (s in suite) {
	var ts;
	
	ts = new JsUnit.TestSuite(path.join(suite[s], "test", "testSuite.js"));
	// ts.addToContext({ilib: require("./ilib-dyn-ut.js").ilib});
	var inc = "./ilib" + ((assembly === "dynamic") ? "-dyn" : "") + "-ut" + ((compilation === "compiled") ? "-compiled" : "") + ".js";
	ts.include(inc); 
	ts.include("testglue.js");
	runner.addSuite(ts);
	// util.print("Adding suite " + suite[s] + " and including ilib file " + inc + "\n");
}

runner.runTests();