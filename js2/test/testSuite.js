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

var TestSuite = require("./TestSuiteModule.js");
var TestRunner = require("./runner.js");

var runner = new TestRunner("../..");

var suiteDefinitions = {
	"legacy": {
		"core": {
	        "util": "util/legacy/testSuite.js",
	        ".": "root/legacy/testSuite.js"
		},
		"standard": {
	        "util": "util/legacy/testSuite.js",
	        ".": "root/legacy/testSuite.js",
		    "calendar": "calendar/legacy/testSuite.js",
		    "date1": "date/legacy/testSuite.js",
		    "date2": "date/legacy/testSuite2.js",
		    "date3": "date/legacy/testSuite3.js",
		    "daterange1": "daterange/legacy/testSuite.js",
		    "daterange2": "daterange/legacy/testSuite2.js",
		    "daterange3": "daterange/legacy/testSuite3.js",
		    "durfmt": "durfmt/legacy/testSuite.js",
		    "number": "number/legacy/testSuite.js",
		    "maps": "maps/legacy/testSuite.js",
		    "ctype": "ctype/legacy/testSuite.js"
		},
		"full": {
	        "util": "util/legacy/testSuite.js",
	        ".": "root/legacy/testSuite.js",
		    "calendar": "calendar/legacy/testSuite.js",
		    "date1": "date/legacy/testSuite.js",
		    "date2": "date/legacy/testSuite2.js",
		    "date3": "date/legacy/testSuite3.js",
		    "daterange1": "daterange/legacy/testSuite.js",
		    "daterange2": "daterange/legacy/testSuite2.js",
		    "daterange3": "daterange/legacy/testSuite3.js",
		    "durfmt": "durfmt/legacy/testSuite.js",
		    "number": "number/legacy/testSuite.js",
		    "maps": "maps/legacy/testSuite.js",
		    "ctype": "ctype/legacy/testSuite.js",
		    "strings-ext": "strings-ext/legacy/testSuite.js",
		    "phone1": "phone/legacy/testSuite.js",
		    "phone2": "phone/legacy/testSuite2.js",
		    "phone3": "phone/legacy/testSuite3.js",
		    "units": "units/legacy/testSuite.js",
		    "name": "name/legacy/testSuite.js",
		    "address1": "address/legacy/testSuite.js",
		    "address2": "address/legacy/testSuite2.js",
		    "address3": "address/legacy/testSuite3.js",
		    "collate": "collate/legacy/testSuite.js",
		}
	},
	"modular": {
		"core": {
	        "util": "util/test/testSuite.js",
	        ".": "root/test/testSuite.js"
		},
		"standard": {
	        "util": "util/test/testSuite.js",
	        ".": "root/test/testSuite.js",
		    "calendar": "calendar/test/testSuite.js",
		    "date1": "date/test/testSuite.js",
		    "date2": "date/test/testSuite2.js",
		    "date3": "date/test/testSuite3.js",
		    "daterange1": "daterange/test/testSuite.js",
		    "daterange2": "daterange/test/testSuite2.js",
		    "daterange3": "daterange/test/testSuite3.js",
		    "durfmt": "durfmt/test/testSuite.js",
		    "number": "number/test/testSuite.js",
		    "maps": "maps/test/testSuite.js",
		    "ctype": "ctype/test/testSuite.js"
		},
		"full": {
	        "util": "util/test/testSuite.js",
	        ".": "root/test/testSuite.js",
		    "calendar": "calendar/test/testSuite.js",
		    "date1": "date/test/testSuite.js",
		    "date2": "date/test/testSuite2.js",
		    "date3": "date/test/testSuite3.js",
		    "daterange1": "daterange/test/testSuite.js",
		    "daterange2": "daterange/test/testSuite2.js",
		    "daterange3": "daterange/test/testSuite3.js",
		    "durfmt": "durfmt/test/testSuite.js",
		    "number": "number/test/testSuite.js",
		    "maps": "maps/test/testSuite.js",
		    "ctype": "ctype/test/testSuite.js",
		    "strings-ext": "strings-ext/test/testSuite.js",
		    "phone1": "phone/test/testSuite.js",
		    "phone2": "phone/test/testSuite2.js",
		    "phone3": "phone/test/testSuite3.js",
		    "units": "units/test/testSuite.js",
		    "name": "name/test/testSuite.js",
		    "address1": "address/test/testSuite.js",
		    "address2": "address/test/testSuite2.js",
		    "address3": "address/test/testSuite3.js",
		    "collate": "collate/test/testSuite.js"
		}
	}
};

// override the possible node environment to make the tests uniform
process.env.TZ = "";
process.env.LANG = "";
process.env.LC_ALL = "";

var assembly = "dynamic";
var compilation = "uncompiled";
var size = "full";
var suite = suiteDefinitions.modular.full;
var set = "modular";

// Usage: testSuite.js [assembly_style [compilation_style [suite_name_or_collection]]]
if (process.argv.length > 2) {
	if (process.argv.length > 3) {
		if (process.argv.length > 4) {
			if (process.argv.length > 5) {
				set = process.argv[5];
			}
			
			size = process.argv[4];
			switch (size) {
				case "core":
				case "standard":
				case "full":
					suite = suiteDefinitions[set][size];
					break;
				default:
					suite = size;
					if (!suiteDefinitions[set].full[suite] && suite !== "all") {
						util.print("Suite " + suite + " is unrecognized. Testing all suites by default.\n");
						suite = suiteDefinitions[set].full;
					} else {
						util.print("Only running test " + size + "\n");
						suite = {};
						suite[size] = suiteDefinitions[set].full[size];
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
	if (assembly !== "assembled" && assembly !== "dynamicdata" && assembly !== "dynamic") {
		// assembled: pre-assembled code and locale data together in one file
		// dynamicdata: pre-assembled code, but dynamically loaded locale data
		// dynamic: dynamically loaded code and locale data
		util.print("Assembly " + assembly + " is unknown. Using 'dynamic' by default.\n");
		compilation = "dynamic";
	}
}

util.print("Running " + compilation + " " + assembly + " suites: " + JSON.stringify(Object.keys(suite)) + "\n");

var s;
for (s in suite) {
	var inc, ts;
	
	ts = new TestSuite(suite[s]);
	
	if (assembly === "dynamic") {
		ts.include("../bin/ilib-test-dyn.js");
	} else {
		inc = "../output/js/ilib-ut" + ((assembly === "dynamicdata") ? "-dyn" : "") + ((compilation === "compiled") ? "-compiled" : "") + ".js";
		ts.include(inc);
		ts.include("../bin/ilib-test.js");
		ts.include(set === "legacy" ? "../lib/ilib-stubs.js" : "../lib/ilib-stubs-map.js");
	}
	runner.addSuite(ts);
	// util.print("Adding suite " + suite[s] + " and including ilib file " + inc + "\n");
}

runner.runTests();