/**
 * This file is based on the node.js assert module, but with some small
 * changes for browser-compatibility
 * THIS FILE SHOULD BE BROWSER-COMPATIBLE JS!
 */


/**
 * Added for browser compatibility
 */

var _keys = function(obj){
    if(Object.keys) return Object.keys(obj);
    if (typeof obj != 'object' && typeof obj != 'function') {
        throw new TypeError('-');
    }
    var keys = [];
    for(var k in obj){
        if(obj.hasOwnProperty(k)) keys.push(k);
    }
    return keys;
};



// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


var pSlice = Array.prototype.slice;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = exports;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({message: message, actual: actual, expected: expected})

assert.AssertionError = function AssertionError (options) {
  this.name = "AssertionError";
  this.message = options.message;
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
};
// code from util.inherits in node
assert.AssertionError.super_ = Error;


// EDITED FOR BROWSER COMPATIBILITY: replaced Object.create call
// TODO: test what effect this may have
var ctor = function () { this.constructor = assert.AssertionError; };
ctor.prototype = Error.prototype;
assert.AssertionError.prototype = new ctor();


assert.AssertionError.prototype.toString = function() {
  if (this.message) {
    return [this.name+":", this.message].join(' ');
  } else {
    return [ this.name+":"
           , typeof this.expected !== 'undefined' ? JSON.stringify(this.expected) : 'undefined'
           , this.operator
           , typeof this.actual !== 'undefined' ? JSON.stringify(this.actual) : 'undefined'
           ].join(" ");
  }
};

// assert.AssertionError instanceof Error

assert.AssertionError.__proto__ = Error.prototype;

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

assert.ok = function ok(value, message) {
  if (!!!value) fail(value, true, message, "==", assert.ok);
};

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, "==", assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, "!=", assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, "deepEqual", assert.deepEqual);
  }
};

var Buffer = null;
if (typeof require !== 'undefined' && typeof process !== 'undefined') {
    try {
        Buffer = require('buffer').Buffer;
    }
    catch (e) {
        // May be a CommonJS environment other than Node.js
        Buffer = null;
    }
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

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, "notDeepEqual", assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, "===", assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as determined by !==.
// assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, "!==", assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (expected instanceof RegExp) {
    return expected.test(actual.message || actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail('Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail('Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function (err) { if (err) {throw err;}};


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
    } else {
        fail("Invalid expected argument to contains.");
    }
    return;
};

