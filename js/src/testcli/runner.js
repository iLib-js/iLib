/*
 * runner.js - ilib CLI test framework to run JsUnit tests under nodejs
 * 
 * Copyright © 2012, JEDLSoft
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

require("module");
var fs = require('fs');
var vm = require('vm');
var util = require("util");

function newSandbox() {
	return {
		top : {},
		window : {
			document : {}
		},
		navigator : {
			userAgent : "Nodejs"
		},
		console : console,
		require : require,
		global: global,
		process: process
	};
};

var load = function(path, context) {
    var code = fs.readFileSync(path, "utf-8");
    return vm.runInContext(code, context, path);
}.bind(this);

/**
 * @class
 * Create a new test suite instance. 
 * 
 * @constructor
 * @param {string|ilib.String=} string path to a js file that contains a suite of tests 
 */
function TestSuite(path) {
	this.tests = [];
	this.subSuites = [];
	this.includes = [];

	this.path = path;
};

TestSuite.prototype = {
	include: function (path) {
		this.includes.push(path);
	},

	applyIncludes: function (includes) {
		this.includes = this.includes.concat(includes);
	},

	addSuite: function (suite) {
		this.subSuites.push(suite);
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
				this[t]();
				if (typeof(this.tearDown) === 'function') {
					tearDown(); 
				}
				// console.log("PASS: " + t);
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
					msg = e.toString();
				}
				console.log(msg);
				results.fail++;
				results.failures.push(msg);
			}
			
		}.bind(this));
	},
	
	runTests: function(results, root) {
		// console.log("Suite " + this.path);
		if (this.path) {
			this.context = vm.createContext({
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
				global: global,
				path: this.path
			});
			if (this.setupCode) {
				// allow arbitrary set up before the includes and running the tests
				vm.runInContext(this.setupCode, this.context);
			}
			load(root + "/tools/jsunit/app/jsUnitCore.js", this.context);
			this.includes.forEach(function (inc) {
				load(inc, this.context);
			}.bind(this));
			load(this.path, this.context);
			if (typeof(this.context.suite) === 'function') {
				this.subSuites.push(this.context.suite());	
			} else {
				var code = '(' + this._runAllTests.toString() + ')();';
				vm.runInContext(code, this.context);
			}
		}
		this.subSuites.forEach(function (suite) {
			suite.applyIncludes(this.includes);
			suite.runTests(results, root);
		}.bind(this));
	}
};

/**
 * @class
 * Create a new test runner instance. This class runs the actual tests and
 * collects the results, and summarizes them when it is done. 
 * 
 * @constructor
 * @param {string|ilib.String=} string initialize this instance with this string 
 */
function TestRunner(root) {
	this.results = {
		pass: 0,
		fail: 0,
		runs: 0,
		failures: []
	};
	this.context = vm.createContext(newSandbox());
	this.subSuites = [];
	this.root = root || "../..";
};

TestRunner.prototype = {
	runTests: function() {
		this.subSuites.forEach(function (suite) {
			suite.runTests(this.results, this.root);
		}.bind(this));
		
		console.log("Summary - " + this.results.runs + " tests run, " + this.results.pass + " pass, " + this.results.fail + " fail.");
		process.exit(this.results.fail);
	},
	
	addSuite: function (suite) {
		this.subSuites.push(suite);
	}
};

exports.TestSuite = TestSuite;
exports.TestRunner = TestRunner;