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

var JsUnit = require("./testcli/runner.js");

var runner = new JsUnit.TestRunner("../..");

var suites = [
	"util/test/testSuite.js",
	"test/testSuite.js",
	"calendar/test/testSuite.js"
];

// override the possible node environment to make the tests uniform
process.env.TZ = "";
process.env.LANG = "";
process.env.LC_ALL = "";

//dynamic uncompiled
var ts;
for (suite in suites) {
	ts = new JsUnit.TestSuite(suites[suite]);
	ts.include("ilib-dyn-ut.js");
	ts.include("testglue.js");
	runner.addSuite(ts);
}

// dynamic compiled
var ts;
for (suite in suites) {
	ts = new JsUnit.TestSuite(suites[suite]);
	ts.include("ilib-dyn-ut-compiled.js");
	ts.include("testglue.js");
	runner.addSuite(ts);
}

// uncompiled
var ts;
for (suite in suites) {
	ts = new JsUnit.TestSuite(suites[suite]);
	ts.include("ilib-ut.js");
	runner.addSuite(ts);
}

// compiled
var ts;
for (suite in suites) {
	ts = new JsUnit.TestSuite(suites[suite]);
	ts.include("ilib-ut-compiled.js");
	runner.addSuite(ts);
}

runner.runTests();