/*
 * runtests.js - ilib CLI test framework to run the tests in a test suite
 * under Qt/QML
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

Qt.include("./runner.js");

function _runAllTests(path, results) {
	var tests = [];
	
	for (var func in this) {
		//console.log("Looking to see if " + func + " is a function.");
		if (func && this[func] && typeof(this[func]) === 'function' && func.substring(0,4) === "test") {
			tests.push(func);
		}
	}
	
	// console.log(tests.length + " tests found");
	//console.log("test JsUnit._validateArguments: " + typeof(JsUnit._validateArguments));
	tests.forEach(function (t) {
		//console.log(t + ": ");
		results.runs++;
		try {
			if (typeof(setUp) === 'function') {
				setUp(); 
			}
			this[t](results.timings);
			if (typeof(tearDown) === 'function') {
				tearDown(); 
			}
			// console.log("PASS: " + t + "\n");
			results.pass++;		
		} catch ( e ) {
			var msg = "FAIL: " + path + ":" + t + "()\n\t";
			if (typeof(e) === 'object' && e.isJsUnitFailure) {
				if (e.comment) {
					msg += t + ": " + e.comment;
				}
				if (e.jsUnitMessage) {
					msg += t + ": " + e.jsUnitMessage;
				}
				if (e.stackTrace) {
					msg += t + ": " + e.stackTrace;
				}
			} else {
				var extra = "";
				if (e.fileName) {
					extra += e.fileName;
				}
				if (e.lineNumber) {
					extra += "(" + e.linenumber + ")";
				}
				if (e.message) {
					if (extra.length > 0) {
						extra += ": " + e.message;
					}
					extra += e.message;
				}
				if (e.stack) {
					if (extra.length > 0) {
						extra += "\n";
					}
					extra += e.stack;
				}
				if (extra.length === 0) {
					extra += e.toString();
				}
				msg += extra;
			}
			
			console.log(msg);
			results.fail++;
			results.failures.push(msg + "\n");
		}
		
	}.bind(this));
}

function runTests(path, root, includes, results) {
	var subSuite;
	
	if (path) {
		Qt.include(root + "/tools/jsunit/app/jsUnitCore.js");
		//console.log("JsUnit.AssertionArgumentError is " + typeof(JsUnit.AssertionArgumentError)); // JSON.stringify(JsUnit.Util, undefined, 4)); // 
		includes.forEach(function (inc) {
			Qt.include(root + "/js/src/" + inc);
		}.bind(this));
		//console.log("Running " + root + "/js/src/" + path);
		Qt.include(root + "/js/src/" + path);
		if (typeof(suite) === 'function') {
			//console.log("found a subsuite. Dir is: " + Qt.resolvedUrl(".").toString());
			subSuite = suite();
		} else {
			//console.log("Running subtests.");
			_runAllTests(path, results);
		}
	}
	if (subSuite && subSuite.subSuites) {
		//console.log("TestRunner: running tests for subsuites.");
		subSuite.subSuites.forEach(function (suite) {
			suite.tests.applyIncludes(includes);
			suite.tests.runTests(results, root);
		});
	}
}