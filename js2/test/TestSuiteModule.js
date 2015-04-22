/*
 * TestSuiteModule.js - ilib CLI test framework to run JsUnit tests under nodejs
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

var mod = require("module");
var fs = require('fs');
var vm = require('vm');
var util = require("util");
var path = require("path");

var load = function(pathname, context) {
    var code = fs.readFileSync(pathname, "utf-8");
    return vm.runInContext(code, context, pathname);
}.bind(this);

/**
 * Create a new test suite instance. 
 * 
 * @class
 * @constructor
 * @param {string|ilib.String=} string path to a js file that contains a suite of tests 
 */
function TestSuite(pathname) {
	this.tests = [];
	this.subSuites = [];
	this.includes = [];
	this.contextBits = {};
	
	this.path = pathname;
};

TestSuite.prototype = {
	include: function (pathname) {
		this.includes.push(pathname);
	},

	applyIncludes: function (includes) {
		this.includes = this.includes.concat(includes);
	},

	/**
	 * Add the given subsuite, and run it for the given number of
	 * iterations. If iterations is not specified or if it is a number
	 * less than 0, iterations will assumed to be 1.
	 * 
	 * @param suite {TestSuite} suite to add
	 * @param iterations {number|undefined} number of times to run the suite
	 */
	addSuite: function (suite, iterations) {
		this.subSuites.push({
			tests: suite,
			iterations: (typeof(iterations) === 'number' && iterations > 0) ? iterations : 1
		});
	},
	
	addTest: function (test) {
		this.tests.push(test);
	},
	
	getTests: function() {
		return this.tests;
	},
	
	addSetup: function(code) {
		this.setupCode = code;
	},
	
	merge: function(to, from) {
		for (var p in from) {
			if (typeof(from[p]) !== 'undefined') {
				to[p] = from[p];
			}
		}
	},
	
	addToContext: function(obj) {
		this.merge(this.contextBits, obj);
	},
	
	_runAllTests: function() {
		var tests = [];
		
		for (var func in this) {
			if (func && this[func] && typeof(this[func]) === 'function' && func.substring(0,4) === "test") {
				tests.push(func);
			}
		}
		
		tests.forEach(function (t) {
			results.runs++;
			try {
				if (typeof(this.setUp) === 'function') {
					setUp(); 
				}
				this[t](results.timings);
				if (typeof(this.tearDown) === 'function') {
					tearDown(); 
				}
				// util.print("PASS: " + t + "\n");
				results.pass++;		
			} catch ( e ) {
				var msg = "FAIL: " + this.path + ":" + t + "()\n\t";
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
				msg += '\n';
				util.print(msg);
				results.fail++;
				results.failures.push(msg);
			}
			
		}.bind(this));
	},
	
	runTests: function(results, root) {
		// util.print("runTests for suite " + this.path);
		if (this.path) {
			var contextInit = {
				top: {},
				window: {
					document: {}
				},
				navigator: {
					userAgent: "Nodejs"
				},
				console: console,
				require: require,
				results: results,
				process: process,
				util: util,
				global: global,
				path: this.path,
				module: new mod(module.id, module.parent)
			};
			//console.log("contextInit.module is " + util.inspect(contextInit.module));
			
			this.merge(contextInit, this.contextBits);
			this.context = vm.createContext(contextInit);
			if (this.setupCode) {
				// allow arbitrary set up before the includes and running the tests
				vm.runInContext(this.setupCode, this.context);
			}
			load(root + "/tools/jsunit/app/jsUnitCore.js", this.context);
			this.includes.forEach(function (inc) {
				//console.log("runner: including file " + inc + " before the test.");
				load(inc, this.context);
			}.bind(this));
			load(this.path, this.context);
			if (typeof(this.context.suite) === 'function') {
				this.subSuites.push({
					tests: this.context.suite(),
					iterations: 1
				});
			} else {
				var code = '(' + this._runAllTests.toString() + ')();';
				vm.runInContext(code, this.context);
			}
		}
		this.subSuites.forEach(function (suite) {
			// util.print("Running tests for subsuite " + JSON.stringify(suite.path) + "\n");
			suite.tests.addToContext(this.contextBits);
			suite.tests.applyIncludes(this.includes);
			for (var i = 0; i < suite.iterations; i++) {
				suite.tests.runTests(results, root);
			}
		}.bind(this));
	}
};

module.exports = TestSuite;
