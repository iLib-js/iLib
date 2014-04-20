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
				// util.print("PASS: " + t);
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
					msg += e.toString();
				}
				util.print(msg);
				results.fail++;
				results.failures.push(msg);
			}
			
		}.bind(this));
	},
	
	runTests: function(results, root) {
		// util.print("runTests for suite " + this.path);
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
			// util.print("Running tests for subsuite " + JSON.stringify(suite));
			suite.tests.applyIncludes(this.includes);
			for (var i = 0; i < suite.iterations; i++) {
				suite.tests.runTests(results, root);
			}
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
		failures: [],
		timings: {}
	};
	this.context = vm.createContext(newSandbox());
	this.subSuites = [];
	this.root = root || "../..";
};

TestRunner.prototype = {
	_isEmpty: function (obj) {
		var prop = undefined;
		
		if (!obj) {
			return true;
		}
		
		for (prop in obj) {
			if (prop && typeof(obj[prop]) !== 'undefined') {
				return false;
			}
		}
		return true;
	},
	
	runTests: function() {
		var start = new Date();
		
		this.subSuites.forEach(function (suite) {
			suite.runTests(this.results, this.root);
		}.bind(this));
		
		var end = new Date();
		this.duration = (end.getTime() - start.getTime()) / 1000;
		
		this.report();
		process.exit(this.results.fail);
	},
	
	addSuite: function (suite) {
		this.subSuites.push(suite);
	},
	
	mean: function(measurements) {
		if (measurements.length < 1) return 0;
		var total = 0;
		for (var i = 0; i < measurements.length; i++) {
			total += measurements[i];
		}
		return total/measurements.length;
	},
	
	median: function(measurements) {
		return measurements.length > 0 ? measurements[Math.floor(measurements.length/2)] : 0;
	},
	
	max: function(measurements) {
		return measurements.length > 0 ? measurements[measurements.length-1] : 0;
	},
	
	min: function(measurements) {
		return measurements.length > 0 ? measurements[0] : 0;
	},
	
	standardDeviation: function(measurements) {
		if (measurements.length < 1) return 0;
		var mean = this.mean(measurements);
		var variance = 0;
		for (var i = 0; i < measurements.length; i++) {
			var diff = measurements[i] - mean;
			variance += diff * diff;
		}
		return Math.sqrt(variance/measurements.length);
	},
	
	histogram: function(measurements) {
		if (measurements.length < 1) return [];
		var max = measurements[measurements.length-1];
		var bucketSize = max/10;
		var buckets = [];
		var start, j = 0;
		var bucketBottom, bucketTop, bucket;
		
		function formatnum(num) {
			return num.toPrecision((num < 1 && num != 0) ? 4 : 5);
		}
		for (var i = 0; i < 9; i++) {
			bucketBottom = i * bucketSize;
			bucketTop = ((i+1) * bucketSize);
			bucket = { range: "[" + formatnum(bucketBottom) + ", " + formatnum(bucketTop) + ")"};
			start = j;
			while (j < measurements.length && measurements[j] < bucketTop) j++;
			bucket.count = j - start;
			buckets.push(bucket);
		}
		bucketBottom = 9 * bucketSize;
		bucketTop = 10 * bucketSize;
		bucket = { 
			range: "[" + formatnum(bucketBottom) + ", " + formatnum(bucketTop) + "]",
			count: measurements.length - j 
		};
		buckets.push(bucket);
		return buckets;
	},
	
	report: function() {
		if (!this._isEmpty(this.results.timings)) {
			var plusses = "+++++++++++++++++++++++++++++++++++++++";
			
			// bench mark tests were included
			// util.print("timings are:\n" + JSON.stringify(this.results.timings));
			for (var category in this.results.timings) {
				var m = this.results.timings[category];
				m.sort(function(left,right) {
					return left-right;
				});
				util.print("--------------------------------------------------------------------\n");
				util.print("Category " + category + "\n");
				util.print("Iter. : " + m.length + "\n");
				util.print("Mean  : " + this.mean(m) + "\n");
				util.print("Median: " + this.median(m) + "\n");
				util.print("Max   : " + this.max(m) + "\n");
				util.print("Min   : " + this.min(m) + "\n");
				util.print("Stddev: " + this.standardDeviation(m) + "\n");
				util.print("Histogram:\n");
				var hist = this.histogram(m);
				for (var i = 0; i < hist.length; i++) {
					util.print(hist[i].range + ": " + hist[i].count + " " + plusses.substring(0,Math.floor(40*hist[i].count/m.length+0.5)) + "\n");
				}
			}
		}
		util.print("Summary - " + this.results.runs + " tests run, " + this.results.pass + " pass, " + this.results.fail + " fail, " + this.duration + " seconds.\n");		
	}
};

exports.TestSuite = TestSuite;
exports.TestRunner = TestRunner;
