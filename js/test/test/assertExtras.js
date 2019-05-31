/*
 * assertExtras.js - extra assertion types to use with nodeunit
 *
 * Copyright © 2018, JEDLSoft
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

var assert = require("nodeunit/lib/assert");

// monkey patch some extra assertions in there for convenience

function fail(actual, expected, message, operator, stackStartFunction) {
    throw new assert.AssertionError({
        message: message,
        actual: actual,
        expected: expected,
        operator: operator,
        stackStartFunction: stackStartFunction
    });
}

function isUndefinedOrNull (value) {
    return value === null || value === undefined;
}

function isArguments (object) {
    return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv (a, b) {
    if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
        return false;
    // an identical "prototype" property.
    if (a.prototype !== b.prototype) return false;
    //~~~I've managed to break Object.keys through screwy arguments passing.
    //   Converting to array solves the problem.
    if (isArguments(a)) {
        if (!isArguments(b)) {
            return false;
        }
        a = pSlice.call(a);
        b = pSlice.call(b);
        return _deepEqual(a, b);
    }
    try{
        var ka = _keys(a),
        kb = _keys(b),
        key, i;
    } catch (e) {//happens when one is a string literal and the other isn't
        return false;
    }
    // having the same number of owned properties (keys incorporates hasOwnProperty)
    if (ka.length != kb.length)
        return false;
    //the same set of keys (although not necessarily the same order),
    ka.sort();
    kb.sort();
    //~~~cheap key test
    for (i = ka.length - 1; i >= 0; i--) {
        if (ka[i] != kb[i])
            return false;
    }
    //equivalent values for every corresponding key, and
    //~~~possibly expensive deep test
    for (i = ka.length - 1; i >= 0; i--) {
        key = ka[i];
        if (!_deepEqual(a[key], b[key] ))
            return false;
    }
    return true;
}

function _deepEqual(actual, expected) {
    // 7.1. All identical values are equivalent, as determined by ===.
    if (actual === expected)
        return true;

    // Convert to primitives, if supported
    actual = actual.valueOf ? actual.valueOf() : actual;
    expected = expected.valueOf ? expected.valueOf() : expected;

    // 7.2. If the expected value is a Date object, the actual value is
    // equivalent if it is also a Date object that refers to the same time.
    if (actual instanceof Date && expected instanceof Date) {
        return actual.getTime() === expected.getTime();

        // 7.2.1 If the expcted value is a RegExp object, the actual value is
        // equivalent if it is also a RegExp object that refers to the same source and options
    } else if (actual instanceof RegExp && expected instanceof RegExp) {
        return actual.source === expected.source &&
        actual.global === expected.global &&
        actual.ignoreCase === expected.ignoreCase &&
        actual.multiline === expected.multiline;

    } else if (Buffer && actual instanceof Buffer && expected instanceof Buffer) {
        return (function() {
            var i, len;

            for (i = 0, len = expected.length; i < len; i++) {
                if (actual[i] !== expected[i]) {
                    return false;
                }
            }
            return actual.length === expected.length;
        })();
        // 7.3. Other pairs that do not both pass typeof value == "object",
        // equivalence is determined by ==.
    } else if (typeof actual != 'object' && typeof expected != 'object') {
        return actual == expected;

        // 7.4. For all other Object pairs, including Array objects, equivalence is
        // determined by having the same number of owned properties (as verified
        // with Object.prototype.hasOwnProperty.call), the same set of keys
        // (although not necessarily the same order), equivalent values for every
        // corresponding key, and an identical "prototype" property. Note: this
        // accounts for both named and indexed properties on Arrays.
    } else {
        return objEquiv(actual, expected);
    }
}

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
                if (_deepEqual(actual[j], expected[i])) {
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
        fail("Invalid expected argument to equalIgnoringOrder.");
    } else if (isArray(actual)) {
        if (isEqualIgnoringOrder(actual, expected) === false) {
            fail(actual, expected, message, "equalIgnoringOrder", assert.equalIgnoringOrder);
        }
    } else {
        fail(actual, expected, message, "equalIgnoringOrder", assert.equalIgnoringOrder);
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
        fail("Invalid expected argument to roughlyEquals.");
    } else if (Math.abs(expected - actual) >= tolerance) {
        fail(actual, expected, message, "roughlyEquals", assert.roughlyEquals);
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
            fail("Invalid expected argument to contains.");
        }

        if (typeof(expected) === "object") {
            fail(actual, expected, message + " Expected is object and actual is array.", "contains", assert.contains);
        } else if (isArray(expected)) {
            for (var i = 0; i < expected.length; i++) {
                if (actual.indexOf(expected[i]) < 0) {
                    fail(actual, expected, message + " Actual array does not contain array index " + i + " of expected.", "contains", assert.contains);
                }
            }
        } else {
            // primitive type -- check to see if it is in the actual array
            if (actual.indexOf(expected) < 0) {
                fail(actual, expected, message + " Expected value " + expected + " is not contained in the array in actual.", "contains", assert.contains);
            }
        }
    } else if (typeof(actual) === "object") {
        if (typeof(expected) === "object") {
            for (p in expected) {
                if (p && expected.hasOwnProperty(p)) {
                    if (typeof(actual[p]) === 'undefined') {
                        // "actual does not contain expected properties";
                        fail(actual[p], expected[p], message + " Expected contains property " + p + " and actual does not.", "contains", assert.contains);
                    } else if (typeof(expected[p]) === 'object') {
                        if (!_deepEqual(actual[p], expected[p])) {
                            fail(actual, expected, message, "contains", assert.notDeepEqual);
                        }
                    } else {
                        if (actual[p] != expected[p]) {
                            fail(actual, expected, message, "contains", assert.notDeepEqual);
                        }
                    }
                }
            }
        } else if (isArray(expected)) {
            fail(actual, expected, message + " Expected is array and actual is object.", "contains", assert.contains);
        } else if (typeof(expected) === "string") {
            if (typeof(actual[p]) === "undefined") {
                fail(actual[p], expected[p], message + " Expected is looking for property " + expected + " and actual does not contain it.", "contains", assert.contains);
            }
        } else {
            fail("Invalid expected argument to contains.");
        }
    } else if (typeof(actual) === "string") {
        if (actual.indexOf(expected) === -1) {
            fail(actual, expected, message + " Actual stirng " + actual + " is not contained within expected property " + expected);
        }
    } else {
        fail("Invalid expected argument to contains.");
    }
    return;
};

module.exports = assert;