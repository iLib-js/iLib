/*
 * runner.js - ilib CLI test framework to run JsUnit tests under Qt/QML
 * 
 * Copyright © 2015, JEDLSoft
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

/**
 * Create a new test runner instance. This class runs the actual tests and
 * collects the results, and summarizes them when it is done. 
 * 
 * @class
 * @constructor
 * @param {string|ilib.String=} string initialize this instance with this string 
 */
function TestRunner() {
	this.subSuites = [];
};

TestRunner.prototype = {
	runTests: function() {
        this.subSuites.forEach(function (suite) {
            console.log("[runner.js] runTests: running suite " + suite.path);
            suite.runTests();
		}.bind(this));
	},

	
	addSuite: function (suite) {
        //console.log("[runner.js] addSuite:  (" + suite.path + ")");
		this.subSuites.push(suite);
    }
};

if (!module) {
	var module = {
		exports: {}
	};
}
module.exports = TestRunner;
