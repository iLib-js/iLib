var nodeunit = (function(){
    var nodeunit = {};
    var reporter = {};
    var types = {};
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
    })(assert);

    (function(exports){
        var totalCaseNum = 0, assertionNum = 0;
        var failNum = 0, successNum = 0;
        var startTime = 0, endTime = 0;

        exports.run = function (modules, options) {
            options = options || {};

            startTime = new Date().getTime();
    
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
                            successNum++;
                            console.log("[" + name + "] assertions.failures() " + assertions.failures());
                        } else {
                            failNum++;
                            console.log("[" + name + "] assertions.passed() " + assertions.passed());
                        }
                    }
                },
                done: function (assertions) {
                    console.log("done");
                }
            });
        };

        exports.options = function(opt) {
            var optionalCallback = function(name) {
                opt[name] = opt[name] || function() {};
            };
            optionalCallback('moduleStart');
            optionalCallback('moduleDone');
            optionalCallback('testStart');
            optionalCallback('testDone');
            return opt;
        },

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

        exports.assertionList = function (arr, duration) {
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
            that.duration = duration || 0;
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

        exports.test = function(name, start, options, callback) {
            var expecting;
            var a_list = [];

            var wrapAssert = assertWrapper(function (a) {
                a_list.push(a);
            });

            var test = {
                done: function (err) {
                    var end = new Date().getTime();
                    var assertion_list = exports.assertionList(a_list, end - start);

                    options.testDone(name, assertion_list);
                    callback(null, a_list);
                },
                ok: function (value, message) {
                },
                same: function() {

                },
                equals: function() {

                }, 
                expect: function() {

                }
            }
            for (var k in assert) {
                if (assert.hasOwnProperty(k)) {
                    test[k] = wrapAssert(k, k, assert[k].length);
                }
            }

            return test;
        },
        exports.runSuite = function (name, fn, opt, callback) {
            var prop = fn;
            var options = exports.options(opt);
            var start = new Date().getTime();

            for (var prop in fn) {
                if (fn.hasOwnProperty(prop)) {
                    if (typeof fn[prop] === 'function') {
                        var test = exports.test(prop, start, options, callback);
                        try {
                            fn[prop](test);
                        } catch(e) {
                            //console.log("[exports.runSuite]" + e);
                            test.done(e);
                        }
                    }
                }
            }
        },
        
        exports.runModule = function(suite, options) {
            exports.runSuite(null, suite, options, function(err, a_list) {
                options.moduleDone();
            });
        },

        exports.runModules = function(modules, opt) {
            var options = exports.options(opt);
            exports.runModule(modules[0], options);
        }
        
        exports.finish = function() {
            endTime = new Date().getTime();
            console.log("\n[Result] A total of " + totalCaseNum + " tests were performed.")
            console.log("[Result] " + successNum + " assertions of " + assertionNum + " passed, " + failNum + " failed");
            console.log("[Result] Test compledted in " + (endTime - startTime) + " milliseconds");
        }

    })(reporter);

    nodeunit.reporter = reporter;
    nodeunit.run = reporter.run;
    nodeunit.start = reporter.start;
    nodeunit.finish = reporter.finish;

return nodeunit; 
})();

