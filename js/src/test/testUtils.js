/*
 * testUtils.js - utilities used by the unit tests
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


/**
 * Check the actual result to see that every property that exists in the expected
 * object also exists in the actual object and that it has the same value. The actual
 * object may have more properties that do not exist in expected, but this function
 * is used to test for only the properties that the unit test cares about.
 * 
 * @param {Object} expected a set of properties to check in the actual result
 * @param {Object} actual the actual result
 * @param {string=} comment a comment to use if the test fails
 * @throws "actual does not contain expected properties" if the actual result does not 
 * contain all of the expected properties
 */
function assertObjectContains(expected, actual, comment) {
	var p;
	
	for (p in expected) {
		if (p && expected[p]) {
			if (!comment) {
				comment = "Testing the value of property " + p + "\n";
			}
			if (typeof(actual[p]) === 'undefined') {
				// "actual does not contain expected properties";
				assertNotUndefined(comment, actual[p]);
			} else if (typeof(expected[p]) === 'object') {
				assertObjectEquals(comment, expected[p], actual[p]);
			} else {
				assertEquals(comment, expected[p], actual[p]);
			}
		}
	}
}

/**
 * @constructor
 * @class
 * 
 * Create a new timed test.
 *
 * The options object may contain the following properties:
 *
 * <ul>
 * <li><i>fn</i> - the function to test. If the function is synchronous, then
 * the args will be passed and the entire function can be measured directly.
 * If the function is asynchronous, then 
 * 
 * <li><i>args</i> - arguments to pass to the test function on each iteration
 * 
 * <li><i>name</i> - the name of this test. This will be used later during 
 * the results calculation and in the reporting.
 * 
 * <li><i>iterations</i> - How many times to run this test.
 * 
 * <li><i>whole</i> - time the whole test function. If whole is false, then
 * the test function should call this.start() and this.stop() to start and
 * stop the timer at the right time.
 * </ul>
 * 
 * @param {Object} options options that configure how this timed test should 
 * work. Returns a timed test object.
 */
var TimedTest = function (options) {
	if (typeof(options) === 'object') {
		this.iterations = typeof(options.iterations) === 'number' && options.iterations > 0 ? options.iterations : 1;
		this.fn = typeof(options.fn) === 'function' ? options.fn : function () {};
		this.name = options.name || "test";
		this.whole = typeof(options.whole) === 'boolean' ? options.whole : true;
		this.args = options.args;
	}
	this.iterations = this.iterations || 1;
	this.fn = this.fn || function () {};
	this.name = this.name || "test";
	this.whole = typeof(this.whole) === 'undefined' ? true : this.whole;
	
	this.micros = 0;
	this.startTime = process.hrtime();
	this.started = false;
};

TimedTest.prototype = {
	run: function(results) {
		for (var i = 0; i < this.iterations; i++) {
			this.micros = 0;
			if (this.whole) this.start();
			this.fn(this.args);
			if (this.whole) this.stop();

			// record the results
			if (typeof(results[this.name]) === 'undefined') {
				results[this.name] = [this.micros];
			} else {
				results[this.name].push(this.micros);
			}
		}
	},
	
	start: function () {
		if (!this.started) {
			this.startTime = process.hrtime();
			this.started = true;
		}
	},
	
	stop: function() {
		if (this.started) {
			var t = process.hrtime(this.startTime);
			this.micros += Math.floor((t[0] * 1e9 + t[1])/1000);
			this.started = false;
		}
	}
};
