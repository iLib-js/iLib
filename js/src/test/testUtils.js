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