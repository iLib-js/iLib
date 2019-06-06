var nodeunit = (function(){
    var nodeunit = {};
    var reporter = {};
    var assert = this.assert = {};

    (function(exports){
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

        function _deepEqual(actual, expected) {
            // 7.1. All identical values are equivalent, as determined by ===.
            if (actual === expected) {
                return true;
            // 7.2. If the expected value is a Date object, the actual value is
            // equivalent if it is also a Date object that refers to the same time.
            } else if (actual instanceof Date && expected instanceof Date) {
                return actual.getTime() === expected.getTime();
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
        };

        function isUndefinedOrNull (value) {
            return value === null || value === undefined;
        };

        function isArguments (object) {
            return Object.prototype.toString.call(object) == '[object Arguments]';
        };

        /**
        * Added for browser compatibility
        */

        var _keys = function (obj) {
            if (Object.keys) {
                return Object.keys(obj);
            }
            var keys = [];
            for (var k in obj) {
                if (obj.hasOwnProperty(k)) {
                    keys.push(k);
                }
            }
            return keys;
        };

        var _copy = function (obj) {
            var nobj = {};
            var keys = _keys(obj);
            for (var i = 0; i <  keys.length; i += 1) {
                nobj[keys[i]] = obj[keys[i]];
            }
            return nobj;
        };

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
        };

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
                    for (var p in expected) {
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
    })(assert);

    (function(exports){
        var totalCaseNum = 0, assertionNum = 0;
        var failNum = 0, successNum = 0;
        var endTime = 0;
        var startTime = new Date().getTime();

        function getFailureDetails(assertion) {
            if (assertion.error && assertion.error.name === "AssertionError") {
                return "Expected that actual " + assertion.error.operator + " [[" + assertion.error.expected + "]] , but got [[" + assertion.error.actual + "]] instead.";
            } else if (assertion.message) {
                return assertion.message;
            }
            return "Unknown reason.";
        }
        
        exports.run = function (modules) {
            exports.runModules(modules, {
                moduleStart: function (name) {
                    console.log("moduleStart");
                },
                testDone: function (name, assertions) {
                    totalCaseNum++;
                    assertionNum = assertionNum + assertions.length;
                    for (var i=0; i < assertions.length; i++) {
                        var a = assertions[i];
                        if (a.failed()) {
                            failNum++;
                            //console.log("[" + name + "] assertions.failures() " + assertions.failures());
                            console.log("[" + name + "] assertion failed: " + getFailureDetails(a));
                        } else {
                            successNum++;
                            //console.log("[" + name + "] assertions.passed() " + assertions.passed());
                            //console.log("[" + name + "] assertion is passed");
                        }
                    }
                },
                done: function (assertions) {
                    console.log("done");
                }
            });
        };

        exports.options = function(opt){
            var optionalCallback = function(name) {
                opt[name] = opt[name] || function() {};
            };
            optionalCallback('moduleStart');
            optionalCallback('moduleDone');
            return opt;
        };

        exports.assertion = function(obj) {
            return {
                method: obj.method || '',
                message: obj.message || (obj.error && obj.error.message) || '',
                error: obj.error,
                passed: function() {
                    return !this.error;
                },
                failed: function() {
                    return Boolean(this.error);
                }
            }
        };

        /**
        * Creates an assertion list object representing a group of assertions.
        * Accepts an array of assertion objects.
        *
        * @param {Array} arr
        * @param {Number} duration
        * @api public
        */

        exports.assertionList = function (arr) {
            var that = arr || [];
            that.failures = function () {
                var failures = 0;
                for (var i = 0; i < this.length; i += 1) {
                    if (this[i].failed()) {
                        failures += 1;
                    }
                }
                return failures;
            };
            that.passed = function () {
                return that.length - that.failures();
            };

            return that;
        };

        var assertWrapper = function(callback) {
            return function(new_method, assert_method, arity){
                return function() {
                    var message = arguments[arity -1];
                    var a = exports.assertion({method: new_method, message: message});
                    try {
                       assert[assert_method].apply(null, arguments);
                    } catch (e) {
                        //console.log('[assertWrapper] ' + e);
                        a.error = e;
                    }
                    callback(a);
                };
            };
        };

        exports.test = function(name, options, callback) {
            var expecting;
            var a_list = [];

            var wrapAssert = assertWrapper(function (a) {
                a_list.push(a);
            });

            var test = {
                done: function (err) {
                    if (expecting !== undefined && expecting !== a_list.length) {
                        var e = new Error(
                            'Expected ' + expecting + ' assertions, ' +
                            a_list.length + ' ran'
                        );
                        var a1 = exports.assertion({method: 'expect', error: e});
                            a_list.push(a1);
                        }

                    var assertion_list = exports.assertionList(a_list);

                    options.testDone(name, assertion_list);
                    callback(null, a_list);
                },
                ok: wrapAssert('ok', 'ok', 2),
                same: wrapAssert('same', 'deepEqual', 3),
                equals: wrapAssert('equals', 'equal', 3),
                expect: function(num) {
                    expecting = num;
                }
            }
            // add all functions from the assert module
            for (var k in assert) {
                if (assert.hasOwnProperty(k)) {
                    test[k] = wrapAssert(k, k, assert[k].length);
                }
            }

            return test;
        };

        exports.runSuite = function (name, fn, opt, callback) {
            var prop = fn;
            var options = exports.options(opt);

            for (var prop in fn) {
                if (fn.hasOwnProperty(prop)) {
                    if (typeof fn[prop] === 'function') {
                        var test = exports.test(prop, options, callback);
                        try {
                            fn[prop](test);
                        } catch(e) {
                            //console.log("[exports.runSuite]" + e);
                            test.done(e);
                        }
                    }
                }
            }
        };
        
        exports.runModule = function(suite, options) {
            exports.runSuite(null, suite, options, function(err, a_list) {
                options.moduleDone();
            });
        };

        exports.runModules = function(modules, opt) {
            var options = exports.options(opt);
            for(var testSuite in modules) {
                if (modules.hasOwnProperty(testSuite)) {
                    exports.runModule(modules[testSuite], options);
                }
            }
        };
        
        exports.finish = function() {
            endTime = new Date().getTime();
            console.log("===========================================================================================");
            console.log("[Result] A total of " + totalCaseNum + " tests were performed.")
            console.log("[Result] " + successNum + " assertions of " + assertionNum + " passed, " + failNum + " failed");
            console.log("[Result] Test completed in " + (endTime - startTime)/1000 + " seconds");
            console.log("===========================================================================================");
            console.log("                                                                                           ");
        }

    })(reporter);

    nodeunit.reporter = reporter;
    nodeunit.run = reporter.run;
    nodeunit.start = reporter.start;
    nodeunit.finish = reporter.finish;

return nodeunit;

})();
