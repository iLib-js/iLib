/*
 * assertSupplement.js - supplemental convenience assertions to use with nodeunit
 *
 * Copyright © 2017, JEDLSoft
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

if (typeof(assert) === "undefined") {
    var assert = require("assert");
}

/*
 * This monkey-patches the nodeunit assert object to add in a number of
 * missing assertions types.
 */

/**
 * Return true if every element in the expected array also exists in the the actual
 * array. The actual array may contain more elements that are not in the expected
 * array. This implementation is very simple and not very efficient (Order(n^2)) so
 * do not call this to compare large arrays.
 *
 * @param {Array.<Object>} actual The actual array to test
 * @param {Array.<Object>} expected The array to test against
 * @returns True if every element of the expected array exists in the actual array.
 */
function isEqualIgnoringOrder(actual, expected) {
    var found = false;
    for (var i = 0; i < expected.length; i++) {
        var found = false;
        for (var j = 0; j < actual.length; j++) {
            try {
                if (actual[j] === expected[i]) {
                    found = true;
                    break;
                }
            } catch (ignored) {
            }
        }
        if (!found) {
            return false;
        }
    }
    return true;
}

function isArray(object) {
    return typeof(object) === 'object' && Object.prototype.toString.call(object) === '[object Array]';
};

/**
 * Performs a deep comparison of arrays, ignoring the order of the
 * elements of the array. Essentially, this ensure that they have the same
 * contents, possibly in a different order. Each of the elements of the
 * array is compared with a deep equals. If this is called with objects
 * that are not arrays, the assertion fails.
 *
 * @example // passing assertions
 * assert.equalIgnoringOrder([5, 2, 8, 3], [2, 4, 5, 9]);
 * assert.equalIgnoringOrder(["apples", "bananas", "oranges"], ["oranges", "apples", "bananas"]);
 *
 * @param {Object} actual The actual value
 * @param {Object} expected The expected value
 * @throws ArgumentsError
 * @throws AssertionError
 */
assert.equalIgnoringOrder = function(actual, expected, message) {
    if (!isArray(expected)) {
        assert.fail("Invalid expected argument to equalIgnoringOrder.");
    } else if (isArray(actual)) {
        if (isEqualIgnoringOrder(actual, expected) === false) {
            assert.fail(actual, expected, message, "equalIgnoringOrder", assert.equalIgnoringOrder);
        }
    } else {
        assert.fail(actual, expected, message, "equalIgnoringOrder", assert.equalIgnoringOrder);
    }
    return;
};

/**
 * Performs a numeric equivalence within the given tolerance. If the
 * difference between the arguments is within that tolerance, the assertion
 * passes. Otherwise, it fails.
 *
 * @example // passing assertion
 * assert.roughlyEqual(5.23456789, 5.2345947, 0.001);
 *
 * @param {Number} actual The actual value
 * @param {Number} expected The expected value
 * @param {Number} tolerance The tolerance for the difference between the two
 * @throws ArgumentsError
 * @throws AssertionError
 */
assert.roughlyEqual = function(actual, expected, tolerance, message) {
    if (typeof(actual) !== "number" || typeof(expected) !== "number" || typeof(tolerance) !== "number") {
        assert.fail("Invalid expected argument to roughlyEquals.");
    } else if (Math.abs(expected - actual) >= tolerance) {
        assert.fail(actual, expected, message, "roughlyEqual", assert.roughlyEqual);
    }
    return;
};

/**
 * Check the actual result to see that every property that exists in the expected
 * object also exists in the actual object and that it has the same value. If the
 * expected object is a string, it names the property that should exist without
 * giving the value. If the expected object is an array, each item in the expected
 * array should exist in the actual array. If expected is an object, then the actual
 * object must have all properties that the expected object has and with the same
 * value. The actual object may have more properties that do not exist in
 * expected, but this function
 * is used to test for only the properties that the unit test cares about.
 *
 * @example // passing assertion
 * assert.contains({a: 2, b: 3}, "b");
 *
 * @param {Object} actual The actual value to test which may be an array or an object
 * @param {*} expected The name of the property that is expected to be within the object in the actual parameter
 * @param {string} message message to print when the assertion fails
 * @throws ArgumentsError
 * @throws AssertionError
 */
assert.contains = function(actual, expected, message) {
    if (isArray(actual)) {
        if (typeof(expected) === "undefined") {
            assert.fail("Invalid expected argument to contains.");
        }

        if (typeof(expected) === "object") {
            assert.fail(actual, expected, message + " Expected is object and actual is array.", "contains", assert.contains);
        } else if (isArray(expected)) {
            for (var i = 0; i < expected.length; i++) {
                if (actual.indexOf(expected[i]) < 0) {
                    assert.fail(actual, expected, message + " Actual array does not contain array index " + i + " of expected.", "contains", assert.contains);
                }
            }
        } else {
            // primitive type -- check to see if it is in the actual array
            if (actual.indexOf(expected) < 0) {
                assert.fail(actual, expected, message + " Expected value " + expected + " is not contained in the array in actual.", "contains", assert.contains);
            }
        }
    } else if (typeof(actual) === "object") {
        if (typeof(expected) === "object") {
            for (p in expected) {
                if (p && expected.hasOwnProperty(p)) {
                    if (typeof(actual[p]) === 'undefined') {
                        // "actual does not contain expected properties";
                        assert.fail(actual[p], expected[p], message + " Expected contains property " + p + " and actual does not.", "contains", assert.contains);
                    } else if (typeof(expected[p]) === 'object') {
                        if (!_deepEqual(actual[p], expected[p])) {
                            assert.fail(actual, expected, message, "contains", assert.contains);
                        }
                    } else {
                        if (actual[p] != expected[p]) {
                            assert.fail(actual, expected, message, "contains", assert.contains);
                        }
                    }
                }
            }
        } else if (isArray(expected)) {
            assert.fail(actual, expected, message + " Expected is array and actual is object.", "contains", assert.contains);
        } else if (typeof(expected) === "string") {
            if (typeof(actual[p]) === "undefined") {
                assert.fail(actual[p], expected[p], message + " Expected is looking for property " + expected + " and actual does not contain it.", "contains", assert.contains);
            }
        } else {
            assert.fail("Invalid expected argument to contains.");
        }
    } else {
        assert.fail("Invalid expected argument to contains.");
    }
    return;
};

module.exports = assert;
