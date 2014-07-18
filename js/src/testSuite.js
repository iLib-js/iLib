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

var JsUnit = require("./testcli/runner.js");

var runner = new JsUnit.TestRunner("../..");

var suites = [
	"util/test/testSuite.js",
	"test/testSuite.js",
	"calendar/test/testSuite.js",
	"maps/test/testSuite.js",
	"units/test/testSuite.js"
];

// override the possible node environment to make the tests uniform
process.env.TZ = "";
process.env.LANG = "";
process.env.LC_ALL = "";

var functions = {
	dynamic_uncompiled: function dynamic_uncompiled() {
		var ts;
		for (suite in suites) {
			ts = new JsUnit.TestSuite(suites[suite]);
			ts.include("ilib-dyn-ut.js");
			ts.include("testglue.js");
			runner.addSuite(ts);
		}
	},
	
	dynamic_compiled: function dynamic_compiled() {
		var ts;
		for (suite in suites) {
			ts = new JsUnit.TestSuite(suites[suite]);
			ts.include("ilib-dyn-ut-compiled.js");
			ts.include("testglue.js");
			runner.addSuite(ts);
		}
	},
	
	assembled_uncompiled: function assembled_uncompiled() {
		var ts;
		for (suite in suites) {
			ts = new JsUnit.TestSuite(suites[suite]);
			ts.include("ilib-ut.js");
			runner.addSuite(ts);
		}
	},
	
	assembled_compiled: function assembled_compiled() {
		var ts;
		for (suite in suites) {
			ts = new JsUnit.TestSuite(suites[suite]);
			ts.include("ilib-ut-compiled.js");
			runner.addSuite(ts);
		}
	}
};

if (process.argv.length > 2) {
	util.print("Only running test " + process.argv[2] + "\n");
	functions[process.argv[2]]();
} else {
	// do all of them
	util.print("Running all tests\n");
	functions.assembled_compiled();
	functions.assembled_uncompiled();
	functions.dynamic_compiled();
	functions.dynamic_uncompiled();
}

runner.runTests();