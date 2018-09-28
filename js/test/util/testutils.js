/*
 * testutils.js - test the utility routines
 * 
 * Copyright © 2012-2015, 2017-2018 JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}
if (typeof(Utils) === "undefined") {
    var Utils = require("../../lib/Utils.js");
}
if (typeof(SearchUtils) === "undefined") {
    var SearchUtils = require("../../lib/SearchUtils.js");
}
if (typeof(MathUtils) === "undefined") {
    var MathUtils = require("../../lib/MathUtils.js");
}
if (typeof(Locale) === "undefined") {
    var Locale = require("../../lib/Locale.js");
}
if (typeof(JSUtils) === "undefined") {
    var JSUtils = require("../../lib/JSUtils.js");
}

function strcmp(left, right) {
    return left.localeCompare(right);
}
function mockLoaderUtil(paths, sync, params, callback) {
    var data = [];

    var returnValues = {
        "none": {
            "foo.json": {
                "a": "b",
                "c": "d",
                "e": "f"
            },
            "en/foo.json": {
                "c": "x"
            },
            "en/US/foo.json": {
                "e": "y"
            },
            "und/US/foo.json": {
                "c": "m"
            },
            "de/foo.json": {
                "c": "de1"
            },
            "de/DE/foo.json": {
                "a": "a1"
            },
            "und/DE/foo.json": {
                "c": "de2"
            },
            "fr/foo.json": {
                "c": "fr1"
            },
            "bar.json": {
                "a": "barb",
                "c": "bard",
                "e": "barf"
            },
            "en/bar.json": {
                "c": "barx"
            },
            "en/US/bar.json": {
                "e": "bary"
            },
            "und/US/bar.json": {
                "c": "barm"
            },
            "foo.html": "<html><body>This is the generic, shared foo.</body></html>",
            "de/foo.html": "<html><body>Diese ist Foo auf Deutsch.</body></html>",
            "de/DE/foo.html": "<html><body>Diese ist Foo auf Deutsch fuer Deutschland.</body></html>",
            "und/DE/foo.html": "<html><body>Diese ist Foo fuer Deutschland.</body></html>",
            "fr/foo.html": "<html><body>Ceci est foo en francais.</body></html>"
        },
        "/usr/share/localization/myapp": {
            "foo.json": {
                "xxx": "yyy",
                "www": "zzz"
            },
            "en/foo.json": {
                "yyy": "vvv"
            },
            "en/US/foo.json": {
                "www": "xyz"
            },
            "und/US/foo.json": {
                "nnn": "mmm"
            }
        }
    };
    
    var root = (params && params.root) || "none";
    for (var i = 0; i < paths.length; i++) {
        data.push(returnValues[root][paths[i]]);
    }

    if (typeof(callback) !== 'undefined') {
        callback.call(this, data);  
    }
    
    return data;
}

var oldLoader = ilib._load;

module.exports.testutils = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    
    tearDown: function(callback) {
        ilib._load = oldLoader;
        callback();
    },

    testBsearch: function(test) {
        test.expect(1);
        var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
        
        test.equal(SearchUtils.bsearch(10, array), 5);
        test.done();
    },
    
    testBsearchEmptyArray: function(test) {
        test.expect(1);
        var array = [];
        
        test.equal(SearchUtils.bsearch(10, array), 0);
        test.done();
    },
    
    testBsearchUndefinedArray: function(test) {
        test.expect(1);
        test.equal(SearchUtils.bsearch(10, undefined), -1);
        test.done();
    },
    
    testBsearchUndefinedTarget: function(test) {
        test.expect(1);
        var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
        
        test.equal(SearchUtils.bsearch(undefined, array), -1);
        test.done();
    },
    
    testBsearchBefore: function(test) {
        test.expect(1);
        var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
        
        test.equal(SearchUtils.bsearch(0, array), 0);
        test.done();
    },
    
    testBsearchAfter: function(test) {
        test.expect(1);
        var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
        
        test.equal(SearchUtils.bsearch(20, array), 10);
        test.done();
    },
    
    testBsearchExact: function(test) {
        test.expect(1);
        var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
        
        // place it right after the exact match
        test.equal(SearchUtils.bsearch(15, array), 7);
        test.done();
    },
    
    testBsearchExactBeginning: function(test) {
        test.expect(1);
        var array = [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
        
        // place it right after the exact match
        test.equal(SearchUtils.bsearch(0, array), 0);
        test.done();
    },
    
    testBsearchExactEnd: function(test) {
        test.expect(1);
        var array = [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
        
        // place it right after the exact match
        test.equal(SearchUtils.bsearch(19, array), 10);
        test.done();
    },
    
    testBsearchMonthEdge: function(test) {
        test.expect(1);
        var array = [0,31,60,91,121,152,182,213,244,274,305,335,366];
        
        test.equal(SearchUtils.bsearch(182, array), 6);
        test.done();
    },
    
    testBsearchStrings: function(test) {
        test.expect(1);
        var array = [
            "barley", 
            "cardomum", 
            "eggs", 
            "garlic", 
            "jackfruit", 
            "limes", 
            "orange", 
            "quince", 
            "spaghetti", 
            "veal"
        ];
        
        test.equal(SearchUtils.bsearch("mango", array, strcmp), 6);
        test.done();
    },
    
    testBsearchStringsBefore: function(test) {
        test.expect(1);
        var array = [
            "barley", 
            "cardomum", 
            "eggs", 
            "garlic", 
            "jackfruit", 
            "limes", 
            "orange", 
            "quince", 
            "spaghetti", 
            "veal"
        ];
        
        test.equal(SearchUtils.bsearch("apple", array, strcmp), 0);
        test.done();
    },
    
    testBsearchStringsAfter: function(test) {
        test.expect(1);
        var array = [
            "barley", 
            "cardomum", 
            "eggs", 
            "garlic", 
            "jackfruit", 
            "limes", 
            "orange", 
            "quince", 
            "spaghetti", 
            "veal"
        ];
        
        test.equal(SearchUtils.bsearch("zucchini", array, strcmp), 10);
        test.done();
    },
    
    testBisectionSearchSimple: function(test) {
        var actual = SearchUtils.bisectionSearch(16, 0, 10, 1e-12, function linear(x) {
            return 2 * x + 5;
        });
        test.expect(1);
        test.roughlyEqual(actual, 5.5, 1e-12);
        test.done();
    },
    
    testBisectionSearchMoreComplex: function(test) {
        var actual = SearchUtils.bisectionSearch(16, 0, 10, 1e-12, function square(x) {
            return x * x;
        });
        test.expect(1);
        test.roughlyEqual(actual, 4, 1e-12);
        test.done();
    },
    
    testBisectionSearchTrig: function(test) {
        var actual = SearchUtils.bisectionSearch(0.5, 0, 90, 1e-11, function sinInDegrees(x) {
            return Math.sin(x * Math.PI / 180);
        });
        test.expect(1);
        test.roughlyEqual(actual, 30, 1e-9);
        test.done();
    },
    
    testBisectionSearchVeryComplex: function(test) {
        var actual = SearchUtils.bisectionSearch(0, -0.9, 0, 1e-13, function polynomial(x) {
            var coeff = [2, 5, 3];
            var xpow = 1;
            var ret = 0;
            for (var i = 0; i < coeff.length; i++) {
                ret += coeff[i] * xpow;
                xpow *= x;
            }
            return ret;
        });
        test.roughlyEqual(actual, -0.66666666666666, 1e-13);
        test.done();
    },
    
    testModSimple: function(test) {
        test.expect(1);
        test.equal(MathUtils.mod(2, 4), 2);
        test.done();
    },
    
    testModWrap: function(test) {
        test.expect(1);
        test.equal(MathUtils.mod(6, 4), 2);
        test.done();
    },
    
    testModWrapNeg: function(test) {
        test.expect(1);
        test.equal(MathUtils.mod(-6, 4), 2);
        test.done();
    },
    
    testModZeroModulus: function(test) {
        test.expect(1);
        test.equal(MathUtils.mod(6, 0), 0);
        test.done();
    },
    
    testModZeroNum: function(test) {
        test.expect(1);
        test.equal(MathUtils.mod(0, 6), 0);
        test.done();
    },
    
    testModReal: function(test) {
        test.expect(1);
        var actual = MathUtils.mod(2.234231, 4);
        test.roughlyEqual(actual, 2.234231, 0.0000001);
        test.done();
    },
    testModRealWrap: function(test) {
        test.expect(1);
        var actual = MathUtils.mod(6.234231, 4);
        test.roughlyEqual(actual, 2.234231, 0.0000001);
        test.done();
    },
    testModRealNeg: function(test) {
        test.expect(1);
        var actual = MathUtils.mod(-6.3, 4);
        test.roughlyEqual(actual, 1.7, 0.0000001);
        test.done();
    },
    
    testAmodSimple: function(test) {
        test.expect(1);
        test.equal(MathUtils.amod(2, 4), 2);
        test.done();
    },
    
    testAmodWrap: function(test) {
        test.expect(1);
        test.equal(MathUtils.amod(6, 4), 2);
        test.done();
    },
    
    testAmodWrapNeg: function(test) {
        test.expect(1);
        test.equal(MathUtils.amod(-6, 4), 2);
        test.done();
    },
    
    testAmodZeroModulus: function(test) {
        test.expect(1);
        test.equal(MathUtils.amod(6, 0), 0);
        test.done();
    },
    
    testAmodZeroNum: function(test) {
        test.expect(1);
        test.equal(MathUtils.amod(0, 6), 6);
        test.done();
    },
    
    testAmodReal: function(test) {
        test.expect(1);
        var actual = MathUtils.amod(2.234231, 4);
        test.roughlyEqual(actual, 2.234231, 0.0000001);
        test.done();
    },
    testAmodRealWrap: function(test) {
        test.expect(1);
        var actual = MathUtils.amod(6.234231, 4);
        test.roughlyEqual(actual, 2.234231, 0.0000001);
        test.done();
    },
    testAmodRealNeg: function(test) {
        test.expect(1);
        var actual = MathUtils.amod(-6.3, 4);
        test.roughlyEqual(actual, 1.7, 0.0000001);
        test.done();
    },
    
    testLog10: function(test) {
        test.expect(1);
        test.equal(Math.floor(MathUtils.log10(12345)), 4);
        test.done();
    },

    testLog10two: function(test) {
        test.expect(1);
        test.equal(Math.floor(MathUtils.log10(987654321)), 8);
        test.done();
    },

    testSignificant1: function(test) {
        test.expect(1);
        test.equal(MathUtils.significant(12345, 3), 12300);
        test.done();
    },

    testSignificant2: function(test) {
        test.expect(1);
        test.equal(MathUtils.significant(12345, 2), 12000);
        test.done();
    },

    testSignificant3: function(test) {
        test.expect(1);
        test.equal(MathUtils.significant(12345, 1), 10000);
        test.done();
    },

    testSignificantZero: function(test) {
        test.expect(1);
        test.equal(MathUtils.significant(12345, 0), 12345);
        test.done();
    },

    testSignificantNegativeDigits: function(test) {
        test.expect(1);
        test.equal(MathUtils.significant(12345, -234), 12345);
        test.done();
    },

    testSignificantNegativeNumber: function(test) {
        test.expect(1);
        test.equal(MathUtils.significant(-12345, 4), -12340);
        test.done();
    },

    testSignificantStradleDecimal: function(test) {
        test.expect(1);
        test.equal(MathUtils.significant(12.345, 4), 12.35);
        test.done();
    },

    testSignificantLessThanOne: function(test) {
        test.expect(1);
        test.equal(MathUtils.significant(0.123456, 2), 0.12);
        test.done();
    },

    testSignificantLessThanOneRound: function(test) {
        test.expect(1);
        test.equal(MathUtils.significant(0.123456, 4), 0.1235);
        test.done();
    },

    testSignificantLessThanOneSmall: function(test) {
        test.expect(1);
        test.equal(MathUtils.significant(0.000123456, 2), 0.00012);
        test.done();
    },

    testSignificantZero: function(test) {
        test.expect(1);
        test.equal(MathUtils.significant(0, 2), 0);
        test.done();
    },

    testMergeSimple: function(test) {
        test.expect(1);
        var object1 = {"a": "A", "b": "B"},
            object2 = {"c": "C", "d": "D"};
        
        var expected = {"a": "A", "b": "B", "c": "C", "d": "D"};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeSimpleNoSideEffects: function(test) {
        test.expect(2);
        var object1 = {"a": "A", "b": "B"},
            object2 = {"c": "C", "d": "D"};
        
        var x = JSUtils.merge(object1, object2);
        
        test.ok(typeof(x) !== "undefined");
        var expected = {"a": "A", "b": "B"};
        test.deepEqual(object1, expected);
        test.done();
    },
    
    testMergeArrays: function(test) {
        test.expect(1);
        var object1 = {"a": ["b", "c"]},
            object2 = {"a": ["d"]};
    
        var expected = {"a": ["b", "c", "d"]};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeArraysDups: function(test) {
        test.expect(1);
        var object1 = {"a": ["b", "c"]},
            object2 = {"a": ["c", "d"]};
        
        var expected = {"a": ["b", "c", "c", "d"]};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeArraysEmptySource: function(test) {
        test.expect(1);
        var object1 = {"a": []},
            object2 = {"a": ["d"]};
        
        var expected = {"a": ["d"]};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeArraysEmptyTarget: function(test) {
        test.expect(1);
        var object1 = {"a": ["b", "c"]},
            object2 = {"a": []};
        
        var expected = {"a": ["b", "c"]};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeArraysIncongruentTypes1: function(test) {
        test.expect(1);
        var object1 = {"a": ["b", "c"]},
            object2 = {"a": "d"};
        
        var expected = {"a": "d"};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeArraysIncongruentTypes2: function(test) {
        test.expect(1);
        var object1 = {"a": "b"},
            object2 = {"a": ["d"]};
        
        var expected = {"a": ["d"]};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeSimpleProperty: function(test) {
        test.expect(1);
        var object1 = {"a": "A", "b": "B"},
            object2 = {"b": "X"};
        
        var expected = {"a": "A", "b": "X"};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeComplexProperty: function(test) {
        test.expect(1);
        var object1 = {"a": "A", "b": {"x": "B"}},
            object2 = {"b": "X"};
        
        var expected = {"a": "A", "b": "X"};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeSubobjects: function(test) {
        test.expect(1);
        var object1 = {"b": {"x": "X", "y": "Y"}},
            object2 = {"b": {"x": "M", "y": "N"}};
        
        var expected = {"b": {"x": "M", "y": "N"}};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeSubobjectsLeaveObj1PropsUntouched: function(test) {
        test.expect(1);
        var object1 = {"a": "A", "b": {"x": "X", "y": "Y", "z": "Z"}},
            object2 = {"b": {"x": "M", "y": "N"}};
        
        var expected = {"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeSubobjectsAddProps: function(test) {
        test.expect(1);
        var object1 = {"a": "A", "b": {"x": "X", "y": "Y"}},
            object2 = {"b": {"x": "M", "y": "N", "z": "Z"}};
        
        var expected = {"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeSubobjectsAddProps: function(test) {
        test.expect(1);
        var object1 = {"a": "A", "b": {"x": "X", "y": "Y"}},
            object2 = {"b": {"x": "M", "y": "N", "z": "Z"}};
        
        var expected = {"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeBooleans: function(test) {
        test.expect(1);
        var object1 = {"a": true, "b": true},
            object2 = {"b": false};
        
        var expected = {"a": true, "b": false};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeAddBooleans: function(test) {
        test.expect(1);
        var object1 = {"a": true, "b": true},
            object2 = {"c": false};
        
        var expected = {"a": true, "b": true, "c": false};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeNumbers: function(test) {
        test.expect(1);
        var object1 = {"a": 1, "b": 2},
            object2 = {"b": 3};
        
        var expected = {"a": 1, "b": 3};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeNumbersWithZero: function(test) {
        test.expect(1);
        var object1 = {"a": 1, "b": 2},
            object2 = {"b": 0};
        
        var expected = {"a": 1, "b": 0};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testMergeNumbersAddZero: function(test) {
        test.expect(1);
        var object1 = {"a": 1, "b": 2},
            object2 = {"c": 0};
        
        var expected = {"a": 1, "b": 2, "c": 0};
        var actual = JSUtils.merge(object1, object2);
        test.deepEqual(actual, expected);
        test.done();
    },
    
    testIsEmptyFalse: function(test) {
        test.expect(1);
        var object = {"a": "A"};
        
        test.ok(!JSUtils.isEmpty(object));
        test.done();
    },
    
    testIsEmptyTrue: function(test) {
        test.expect(1);
        var object = {};
        
        test.ok(JSUtils.isEmpty(object));
        test.done();
    },
    
    testIsEmptyUndefined: function(test) {
        test.expect(1);
        test.ok(JSUtils.isEmpty(undefined));
        test.done();
    },
    
    testIsEmptyUndefinedProperties: function(test) {
        test.expect(1);
        var object = {"a": undefined};
        
        test.ok(JSUtils.isEmpty(object));
        test.done();
    },
    
    testIsEmptyFalsyValues: function(test) {
        test.expect(1);
        var object = {"a": false, "b": 0};
        
        test.ok(!JSUtils.isEmpty(object));
        test.done();
    },
    
    testShallowCopy: function(test) {
        test.expect(2);
        var src = {"a": "b"};
        var tgt = {};
        
        test.ok(typeof(tgt.a) === "undefined");
        
        JSUtils.shallowCopy(src, tgt);
        
        test.ok(typeof(tgt.a) !== "undefined");
        test.done();
    },
    
    testShallowCopyRightValues: function(test) {
        test.expect(4);
        var src = {
            "a": "b", 
            "c": {
                "d": "e", 
                "f": 23
            }
        };
        var tgt = {};
        
        test.ok(typeof(tgt.a) === "undefined");
        
        JSUtils.shallowCopy(src, tgt);
        
        test.equal(tgt.a, "b");
        test.equal(tgt.c.d, "e");
        test.equal(tgt.c.f, 23);
        test.done();
    },
    
    testShallowCopyUndefined: function(test) {
        test.expect(4);
        var src = undefined;
        var tgt = {};
        
        test.ok(typeof(tgt) !== "undefined");
        test.ok(JSUtils.isEmpty(tgt));
        
        JSUtils.shallowCopy(src, tgt);
        
        test.ok(typeof(tgt) !== "undefined");
        test.ok(JSUtils.isEmpty(tgt));
        test.done();
    },
    
    testShallowCopyToUndefined: function(test) {
        var src = {
            "a": "b", 
            "c": {
                "d": "e", 
                "f": 23
            }
        };
        var tgt = undefined;
        
        test.ok(typeof(tgt) === "undefined");
        
        try {
            JSUtils.shallowCopy(src, tgt);
            test.ok(typeof(tgt) === "undefined");
        } catch (e) {
            test.fail();
        }
        test.done();
    },
    
    testShallowCopyEmpty: function(test) {
        test.expect(2);
        var src = {};
        var tgt = {};
        
        test.ok(JSUtils.isEmpty(tgt));
        JSUtils.shallowCopy(src, tgt);
        test.ok(JSUtils.isEmpty(tgt));
        test.done();
    },
    
    testShallowCopyEmptyValues: function(test) {
        test.expect(4);
        var src = {
            "a": 0, 
            "b": "",
            "c": null,
            "d": undefined
        };
        var tgt = {};
        
        JSUtils.shallowCopy(src, tgt);
        
        test.equal(tgt.a, 0);
        test.equal(tgt.b, "");
        test.equal(tgt.c, null);
        test.equal(tgt.d, undefined);
        test.done();
    },
    
    testSignumPositive: function(test) {
        test.expect(1);
        test.equal(MathUtils.signum(1), 1);
        test.done();
    },
    
    testSignumPositiveLarge: function(test) {
        test.expect(1);
        test.equal(MathUtils.signum(1345234), 1);
        test.done();
    },
    
    testSignumNegative: function(test) {
        test.expect(1);
        test.equal(MathUtils.signum(-1), -1);
        test.done();
    },
    
    testSignumPositiveLarge: function(test) {
        test.expect(1);
        test.equal(MathUtils.signum(-13234), -1);
        test.done();
    },
    
    testSignumZero: function(test) {
        test.expect(1);
        test.equal(MathUtils.signum(0), 1);
        test.done();
    },
    
    testSignumStringNumberPositive: function(test) {
        test.expect(1);
        test.equal(MathUtils.signum("1345234"), 1);
        test.done();
    },
    
    testSignumStringNumberNegative: function(test) {
        test.expect(1);
        test.equal(MathUtils.signum("-1345234"), -1);
        test.done();
    },
    
    testSignumUndefined: function(test) {
        test.expect(1);
        test.equal(MathUtils.signum(), 1);
        test.done();
    },
    
    testSignumNull: function(test) {
        test.expect(1);
        test.equal(MathUtils.signum(null), 1);
        test.done();
    },
    
    testSignumStringNonNumber: function(test) {
        test.expect(1);
        test.equal(MathUtils.signum("rafgasdf"), 1);
        test.done();
    },
    
    testSignumBoolean: function(test) {
        test.expect(2);
        test.equal(MathUtils.signum(true), 1);
        test.equal(MathUtils.signum(false), 1);
        test.done();
    },
    
    testSignumFunction: function(test) {
        test.expect(1);
        test.equal(MathUtils.signum(function () { return -4; }), 1);
        test.done();
    },
    
    testGetSublocalesENUS: function(test) {
        test.expect(1);

        test.deepEqual(Utils.getSublocales("en-US"), ["root", "en", "und-US", "en-US"]);
        test.done();
    },

    testGetSublocalesESUS: function(test) {
        test.expect(1);

        test.deepEqual(Utils.getSublocales("es-US"), ["root", "es", "und-US", "es-US"]);
        test.done();
    },

    testGetSublocalesZHCN: function(test) {
        test.expect(1);

        test.deepEqual(Utils.getSublocales("zh-Hans-CN"), ["root", "zh", "und-CN", "zh-Hans", "zh-CN", "zh-Hans-CN"]);
        test.done();
    },

    testGetSublocalesWithVariant: function(test) {
        test.expect(1);

        test.deepEqual(Utils.getSublocales("es-US-ASDF"), ["root", "es", "und-US", "es-US", "und-US-ASDF", "es-US-ASDF"]);
        test.done();
    },

    testGetSublocalesWithScriptAndVariant: function(test) {
        test.expect(1);

        test.deepEqual(Utils.getSublocales("zh-Hans-CN-ASDF"), ["root", "zh", "und-CN", "zh-Hans", "zh-CN", "und-CN-ASDF", "zh-Hans-CN", "zh-CN-ASDF", "zh-Hans-CN-ASDF"]);
        test.done();
    },

    testMergeLocData: function(test) {
        test.expect(3);
        ilib.data.foobar = {
            a: "b",
            c: "d"
        };
        ilib.data.foobar_de = {
            a: "e"
        };
        ilib.data.foobar_de_DE = {
            c: "f"
        };
        ilib.data.foobar_de_Latn_DE = {
            g: "h"
        };
        ilib.data.foobar_de_Latn_DE_SAP = {
            g: "i"
        };
    
        var locale = new Locale("de-DE-Latn-SAP");
        var m = Utils.mergeLocData("foobar", locale);
        test.equal(m.a, "e");
        test.equal(m.c, "f");
        test.equal(m.g, "i");
        
        // clean up for the other tests
        ilib.data.foobar = ilib.data.foobar_de = ilib.data.foobar_de_DE = ilib.data.foobar_de_Latn_DE = ilib.data.foobar_de_Latn_DE_SAP = undefined;
        
        test.done();
    },
    
    testMergeLocDataNoLocale: function(test) {
        test.expect(3);
        ilib.data.foobar = {
            a: "b",
            c: "d"
        };
        ilib.data.foobar_de = {
            a: "e"
        };
        ilib.data.foobar_de_DE = {
            c: "f"
        };
        ilib.data.foobar_de_Latn_DE = {
            g: "h"
        };
        ilib.data.foobar_de_Latn_DE_SAP = {
            g: "i"
        };
    
        var locale = new Locale("-");
        var m = Utils.mergeLocData("foobar", locale);
        test.equal(m.a, "b");
        test.equal(m.c, "d");
        test.ok(typeof(m.g) === "undefined");
        
        // clean up for the other tests
        ilib.data.foobar = ilib.data.foobar_de = ilib.data.foobar_de_DE = ilib.data.foobar_de_Latn_DE = ilib.data.foobar_de_Latn_DE_SAP = undefined;
        
        test.done();
    },
    
    testMergeLocDataNonLeafLocale: function(test) {
        test.expect(3);
        ilib.data.foobar = {
            a: "b",
            c: "d"
        };
        ilib.data.foobar_de = {
            a: "e"
        };
        ilib.data.foobar_de_DE = {
            c: "f"
        };
        ilib.data.foobar_de_Latn_DE = {
            g: "h"
        };
        ilib.data.foobar_de_Latn_DE_SAP = {
            g: "i"
        };
    
        var locale = new Locale("de-DE");
        var m = Utils.mergeLocData("foobar", locale);
        test.equal(m.a, "e");
        test.equal(m.c, "f");
        test.ok(typeof(m.g) === "undefined");
        
        // clean up for the other tests
        ilib.data.foobar = ilib.data.foobar_de = ilib.data.foobar_de_DE = ilib.data.foobar_de_Latn_DE = ilib.data.foobar_de_Latn_DE_SAP = undefined;
        
        test.done();
    },
    
    testMergeLocDataMissingData: function(test) {
        test.expect(1);
        ilib.data.foobar = {
            a: "b",
            c: "d"
        };
        ilib.data.foobar_de = {
            a: "e"
        };
        ilib.data.foobar_de_DE = {
            c: "f"
        };
        ilib.data.foobar_de_Latn_DE = {
            g: "h"
        };
        ilib.data.foobar_de_Latn_DE_SAP = {
           g: "i"
        };
    
        var locale = new Locale("de-DE-Latn-SAP");
        var m = Utils.mergeLocData("asdf", locale);
        test.ok(m);
        
        // clean up for the other tests
        ilib.data.foobar = ilib.data.foobar_de = ilib.data.foobar_de_DE = ilib.data.foobar_de_Latn_DE = ilib.data.foobar_de_Latn_DE_SAP = undefined;
        
        test.done();
    },
    
    testMergeLocDataNoName: function(test) {
        test.expect(1);
        ilib.data.foobar = {
            a: "b",
            c: "d"
        };
        ilib.data.foobar_de = {
            a: "e"
        };
        ilib.data.foobar_de_DE = {
            c: "f"
        };
        ilib.data.foobar_de_Latn_DE = {
            g: "h"
        };
        ilib.data.foobar_de_Latn_DE_SAP = {
            g: "i"
        };
    
        var locale = new Locale("de-DE-Latn-SAP");
        var m = Utils.mergeLocData(undefined, locale);
        test.ok(m);
        
        // clean up for the other tests
        ilib.data.foobar = ilib.data.foobar_de = ilib.data.foobar_de_DE = ilib.data.foobar_de_Latn_DE = ilib.data.foobar_de_Latn_DE_SAP = undefined;
        
        test.done();
    },
    
    testMergeLocDataNoLocale: function(test) {
        test.expect(4);
        ilib.data.foobar = {
            a: "b",
            c: "d"
        };
        ilib.data.foobar_en = {
            a: "e"
        };
        ilib.data.foobar_en_US = {
            c: "f"
        };
        ilib.data.foobar_en_Latn_US = {
            g: "h"
        };
        ilib.data.foobar_en_Latn_US_SAP = {
            g: "i"
        };
    
        var m = Utils.mergeLocData("foobar"); // use the current locale -- en-US
        test.ok(typeof(m) !== "undefined");
        
        test.equal(m.a, "e");
        test.equal(m.c, "f");
        test.ok(typeof(m.g) === "undefined");
        
        // clean up for the other tests
        ilib.data.foobar = ilib.data.foobar_en = ilib.data.foobar_en_US = ilib.data.foobar_en_Latn_US = ilib.data.foobar_en_Latn_US_SAP = undefined;
        
        test.done();
    },
    
    testMergeLocDataNoSideEffects: function(test) {
        test.expect(4);
        ilib.data.foobar = {
            a: "b",
            c: "d"
        };
        ilib.data.foobar_de = {
            a: "e"
        };
        ilib.data.foobar_de_DE = {
            c: "f"
        };
        ilib.data.foobar_de_Latn_DE = {
            g: "h"
        };
        ilib.data.foobar_de_Latn_DE_SAP = {
            g: "i"
        };
    
        var locale = new Locale("de-DE-Latn-SAP");
        var m = Utils.mergeLocData("foobar", locale);
        test.ok(typeof(m) !== "undefined");
        test.equal(ilib.data.foobar.a, "b");
        test.equal(ilib.data.foobar.c, "d");
        test.ok(typeof(ilib.data.foobar.g) === "undefined");
        
        // clean up for the other tests
        ilib.data.foobar = ilib.data.foobar_de = ilib.data.foobar_de_DE = ilib.data.foobar_de_Latn_DE = ilib.data.foobar_de_Latn_DE_SAP = undefined;
        
        test.done();
    },
    
    testMergeLocDataNoBase: function(test) {
        test.expect(3);
        ilib.data.asdf_de = {
            a: "e"
        };
        ilib.data.asdf_de_DE = {
            c: "f"
        };
        ilib.data.asdf_de_Latn_DE = {
            g: "h"
        };
        ilib.data.asdf_de_Latn_DE_SAP = {
            g: "i"
        };
    
        var locale = new Locale("de-DE-Latn-SAP");
        var m = Utils.mergeLocData("asdf", locale);
        test.equal(m.a, "e");
        test.equal(m.c, "f");
        test.equal(m.g, "i");
        test.done();
        
        // clean up for the other tests
        ilib.data.asdf_de = ilib.data.asdf_de_DE = ilib.data.asdf_de_Latn_DE = ilib.data.asdf_de_Latn_DE_SAP = undefined;
    },
    
    testMergeLocDataMissingLocaleParts: function(test) {
        test.expect(3);
        ilib.data.foobar = {
            a: "b",
            c: "d"
        };
        ilib.data.foobar_de = {
            a: "e"
        };
        ilib.data.foobar_de_Latn = {
            g: "i"
        };
    
        var locale = new Locale("de-Latn");
        var m = Utils.mergeLocData("foobar", locale);
        test.equal(m.a, "e");
        test.equal(m.c, "d");
        test.equal(m.g, "i");
        
        // clean up for the other tests
        ilib.data.foobar = ilib.data.foobar_de = ilib.data.foobar_de_Latn = undefined;

        test.done();
    },
    
    testGetLocFilesLanguageOnly: function(test) {
        test.expect(2);
        var locale = new Locale("en");
        var f = Utils.getLocFiles(locale, "localeinfo.json");
        var expected = [
            "localeinfo.json",
            "en/localeinfo.json"
        ];
        
        test.equal(f.length, expected.length);
        test.deepEqual(f, expected);
        test.done();
    },
    
    testGetLocFilesRegionOnly: function(test) {
        test.expect(2);
        var locale = new Locale("US");
        var f = Utils.getLocFiles(locale, "localeinfo.json");
        var expected = [
            "localeinfo.json",
            "und/US/localeinfo.json"
        ];
        
        test.equal(f.length, expected.length);
        test.deepEqual(f, expected);
        test.done();
    },
    
    testGetLocFilesLangScript: function(test) {
        test.expect(2);
        var locale = new Locale("en-Latn");
        var f = Utils.getLocFiles(locale, "localeinfo.json");
        var expected = [
            "localeinfo.json",
            "en/localeinfo.json",
            "en/Latn/localeinfo.json"
        ];
        
        test.equal(f.length, expected.length);
        test.deepEqual(f, expected);
        test.done();
    },
    
    testGetLocFilesLangRegion: function(test) {
        test.expect(2);
        var locale = new Locale("en-US");
        var f = Utils.getLocFiles(locale, "localeinfo.json");
        var expected = [
            "localeinfo.json",
            "en/localeinfo.json",
            "und/US/localeinfo.json",
            "en/US/localeinfo.json"
        ];
        
        test.equal(f.length, expected.length);
        test.deepEqual(f, expected);
        test.done();
    },
    
    testGetLocFilesLangVariant: function(test) {
        test.expect(2);
        var locale = new Locale("en-govt");
        var f = Utils.getLocFiles(locale, "localeinfo.json");
        var expected = [
            "localeinfo.json",
            "en/localeinfo.json"
        ];
        
        test.equal(f.length, expected.length);
        test.deepEqual(f, expected);
        test.done();
    },
    
    testGetLocFilesScriptRegion: function(test) {
        test.expect(2);
        var locale = new Locale("Latn-US");
        var f = Utils.getLocFiles(locale, "localeinfo.json");
        var expected = [
            "localeinfo.json",
            "und/US/localeinfo.json"
        ];
        
        test.equal(f.length, expected.length);
        test.deepEqual(f, expected);
        test.done();
    },
    
    testGetLocFilesRegionVariant: function(test) {
        test.expect(2);
        var locale = new Locale("US-GOVT");
        var f = Utils.getLocFiles(locale, "localeinfo.json");
        var expected = [
            "localeinfo.json",
            "und/US/localeinfo.json",
            "und/US/GOVT/localeinfo.json"
        ];
        
        test.equal(f.length, expected.length);
        test.deepEqual(f, expected);
        test.done();
    },
    
    testGetLocFilesLangScriptRegion: function(test) {
        test.expect(2);
        var locale = new Locale("en-Latn-US");
        var f = Utils.getLocFiles(locale, "localeinfo.json");
        var expected = [
            "localeinfo.json",
            "en/localeinfo.json",
            "und/US/localeinfo.json",
            "en/Latn/localeinfo.json",
            "en/US/localeinfo.json",
            "en/Latn/US/localeinfo.json"
        ];
        
        test.equal(f.length, expected.length);
        test.deepEqual(f, expected);
        test.done();
    },
    
    testGetLocFilesLangScriptVariant: function(test) {
        test.expect(2);
        var locale = new Locale("en-Latn-govt");
        var f = Utils.getLocFiles(locale, "localeinfo.json");
        var expected = [
            "localeinfo.json",
            "en/localeinfo.json",
            "en/Latn/localeinfo.json"
        ];
        
        test.equal(f.length, expected.length);
        test.deepEqual(f, expected);
        test.done();
    },
    
    testGetLocFilesLangRegionVariant: function(test) {
        test.expect(2);
        var locale = new Locale("en-US-govt");
        var f = Utils.getLocFiles(locale, "localeinfo.json");
        var expected = [
            "localeinfo.json",
            "en/localeinfo.json",
            "und/US/localeinfo.json",
            "en/US/localeinfo.json",
            "und/US/govt/localeinfo.json",
            "en/US/govt/localeinfo.json"
        ];
        
        test.equal(f.length, expected.length);
        test.deepEqual(f, expected);
        test.done();
    },
    
    testGetLocFilesAll: function(test) {
        test.expect(2);
        var locale = new Locale("en-US-Latn-govt");
        var f = Utils.getLocFiles(locale, "localeinfo.json");
        var expected = [
            "localeinfo.json",
            "en/localeinfo.json",
            "und/US/localeinfo.json",
            "en/Latn/localeinfo.json",
            "en/US/localeinfo.json",
            "und/US/govt/localeinfo.json",
            "en/Latn/US/localeinfo.json",
            "en/US/govt/localeinfo.json",
            "en/Latn/US/govt/localeinfo.json"
        ];
        
        test.equal(f.length, expected.length);
        test.deepEqual(f, expected);
        test.done();
    },
    
    testGetLocFilesNoLocale: function(test) {
        test.expect(2);
        var locale = new Locale("-");
        var f = Utils.getLocFiles(locale, "localeinfo.json");
        var expected = [
            "localeinfo.json"
        ];
        
        test.equal(f.length, expected.length);
        test.deepEqual(f, expected);
        test.done();
    },
    
    testGetLocFilesNoBasename: function(test) {
        test.expect(2);
        var locale = new Locale("en-US-Latn-govt");
        var f = Utils.getLocFiles(locale, undefined);
        var expected = [
            "resources.json",
            "en/resources.json",
            "und/US/resources.json",
            "en/Latn/resources.json",
            "en/US/resources.json",
            "und/US/govt/resources.json",
            "en/Latn/US/resources.json",
            "en/US/govt/resources.json",
            "en/Latn/US/govt/resources.json"
        ];
        
        test.equal(f.length, expected.length);
        test.deepEqual(f, expected);
        test.done();
    },
    
    testGetLocFilesDefaultLocale: function(test) {
        test.expect(2);
        var f = Utils.getLocFiles(undefined, "localeinfo.json");
        var expected = [
            "localeinfo.json",
            "en/localeinfo.json",
            "und/US/localeinfo.json",
            "en/US/localeinfo.json"
        ];
        
        test.equal(f.length, expected.length);
        test.deepEqual(f, expected);
        test.done();
    },
    
    testHashCodeEmptyString: function(test) {
        test.expect(1);
        test.equal(JSUtils.hashCode(""), 0);
        test.done();
    },
    
    testHashCodeEmptyNumber: function(test) {
        test.expect(1);
        test.equal(JSUtils.hashCode(0), 48);
        test.done();
    },
    
    testHashCodeEmptyObject: function(test) {
        test.expect(1);
        test.equal(JSUtils.hashCode({}), 0);
        test.done();
    },
    
    testHashCodeEmptyBoolean: function(test) {
        test.expect(1);
        test.equal(JSUtils.hashCode(false), 0);
        test.done();
    },
    
    testHashCodeUndefined: function(test) {
        test.expect(1);
        test.equal(JSUtils.hashCode(undefined), 0);
        test.done();
    },
    
    testHashCodeNull: function(test) {
        test.expect(1);
        test.equal(JSUtils.hashCode(null), 0);
        test.done();
    },
    
    testHashCodeFunction: function(test) {
        test.expect(1);
        test.ok(0 < JSUtils.hashCode(function(asdf) { return asdf * 38; }));
        test.done();
    },
    
    testHashCodeEqualStrings: function(test) {
        test.expect(1);
        test.equal(JSUtils.hashCode("abcdef"), JSUtils.hashCode("abcdef"));
        test.done();
    },
    
    testHashCodeNotEqualStrings: function(test) {
        test.expect(1);
        test.notEqual(JSUtils.hashCode("abcdef"), JSUtils.hashCode("abcdefg"));
        test.done();
    },
    
    testHashCodeEqualNumbers: function(test) {
        test.expect(1);
        test.equal(JSUtils.hashCode(23455), JSUtils.hashCode(23455));
        test.done();
    },
    
    testHashCodeNotEqualNumbers: function(test) {
        test.expect(1);
        test.notEqual(JSUtils.hashCode(33455), JSUtils.hashCode(23455));
        test.done();
    },
    
    testHashCodeEqualBoolean: function(test) {
        test.expect(1);
        test.equal(JSUtils.hashCode(true), JSUtils.hashCode(true));
        test.done();
    },
    
    testHashCodeNotEqualBoolean: function(test) {
        test.expect(1);
        test.notEqual(JSUtils.hashCode(true), JSUtils.hashCode(false));
        test.done();
    },
    
    testHashCodeEqualFunction: function(test) {
        test.expect(1);
        var expected = JSUtils.hashCode(function a() { return "a"; });
        test.equal(JSUtils.hashCode(function a() { return "a"; }), expected);
        test.done();
    },
    
    testHashCodeEqualFunctionDifferentSpacing: function(test) {
        test.expect(1);
        var plat = ilib._getPlatform(); 
        if (plat === "qt" || plat === "rhino" || plat === "trireme") {
            // the qt javascript engine doesn't allow you to see the code of a function, so all 
            // functions should have the same hash. On Rhino, you can see the code, but the white
            // space is all normalized nicely to the same thing, so logically equivalent functions
            // that only differ in white space compare the same. (This seems the most logical to 
            // me out of all of these!)
            var expected = JSUtils.hashCode(function a () { return "a"; });
            test.equal(JSUtils.hashCode(function a(){return "a";}), expected);
        } else {
            var expected = JSUtils.hashCode(function a () { return "a"; });
            test.notEqual(JSUtils.hashCode(function a(){return "a";}), expected);
        }
        test.done();
    },
    
    testHashCodeNotEqualFunctionDifferentNames: function(test) {
        test.expect(1);
        if (ilib._getPlatform() === "qt") {
            // the qt javascript engine doesn't allow you to see the code of a function, so all 
            // functions should have the same hash
            var expected = JSUtils.hashCode(function a() { return "a"; });
            test.equal(JSUtils.hashCode(function b() { return "a"; }), expected);
        } else {
            var expected = JSUtils.hashCode(function a() { return "a"; });
            test.notEqual(JSUtils.hashCode(function b() { return "a"; }), expected);
        }
        test.done();
    },
    testHashCodeNotEqualFunctionDifferentContents: function(test) {
        test.expect(1);
        if (ilib._getPlatform() === "qt") {
            // the qt javascript engine doesn't allow you to see the code of a function, so all 
            // functions should have the same hash
            var expected = JSUtils.hashCode(function a() { return "a"; });
            test.equal(JSUtils.hashCode(function a() { return "b"; }), expected);
        } else {
            var expected = JSUtils.hashCode(function a() { return "a"; });
            test.notEqual(JSUtils.hashCode(function a() { return "b"; }), expected);
        }
        test.done();
    },
    
    testHashCodeEqualObjects: function(test) {
        test.expect(1);
        var expected = JSUtils.hashCode({name: "abcdef"});
        test.equal(JSUtils.hashCode({name: "abcdef"}), expected);
        test.done();
    },
    
    testHashCodeNotEqualObjectProperties: function(test) {
        test.expect(1);
        test.notEqual(JSUtils.hashCode({value: "abcdef"}), JSUtils.hashCode({name: "abcdef"}));
        test.done();
    },
    
    testHashCodeNotEqualObjectOneEmpty: function(test) {
        test.expect(1);
        test.notEqual(JSUtils.hashCode({value: "abcdef"}), JSUtils.hashCode({}));
        test.done();
    },
    
    testHashCodeNotEqualObjectValues: function(test) {
        test.expect(1);
        test.notEqual(JSUtils.hashCode({name: "abcdef"}), JSUtils.hashCode({name: "abcXdef"}));
        test.done();
    },
    
    testHashCodeEqualObjectScrambledProperties: function(test) {
        test.expect(1);
        var expected = JSUtils.hashCode({name: "abcdef", num: 3, value: "asdf"});
        test.equal(JSUtils.hashCode({value: "asdf", name: "abcdef", num: 3}), expected);
        test.done();
    },
    
    testHashCodeNotEqualObjectValuesComplex: function(test) {
        test.expect(1);
        var expected = JSUtils.hashCode({num: 3, apple: "jacks", type: false, name: "abcXdef"});
        test.notEqual(JSUtils.hashCode({name: "abcdef", apple: "jacks", num: 3, type: false}), expected);
        test.done();
    },
    
    testLoadDataCorrectType: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.foo = ilib.data.foo_en = ilib.data.foo_und_US = ilib.data.foo_en_US = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.json",
            object: "obj",
            locale: "en-US",
            type: "json",
            loadParams: {},
            sync: true,
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                test.expect(1);
                test.ok(typeof(results) === 'object');
                test.done();
            }
        });
    },
    
    testLoadDataCorrectItems: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.foo = ilib.data.foo_en = ilib.data.foo_und_US = ilib.data.foo_en_US = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.json",
            object: "obj",
            locale: "en-US",
            type: "json",
            loadParams: {},
            sync: true,
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                var expected = {"a": "b", "c": "m", "e": "y"};
                test.expect(1);
                test.deepEqual(results, expected);
                test.done();
            }
        });
    },
    
    testLoadDataWithLocale: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.foo = ilib.data.foo_en = ilib.data.foo_und_US = ilib.data.foo_en_US = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.json",
            object: "obj",
            locale: "de-DE",
            type: "json",
            loadParams: {},
            sync: true,
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                var expected = {"a": "a1", "c": "de2", "e": "f"};
                test.expect(1);
                test.deepEqual(results, expected);
                test.done();
            }
        });
    },
    
    testLoadDataWithLocaleMissingParts: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.foo = ilib.data.foo_en = ilib.data.foo_und_US = ilib.data.foo_en_US = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.json",
            object: "obj",
            locale: "fr-Latn-FR",
            type: "json",
            loadParams: {},
            sync: true,
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                var expected = {"a": "b", "c": "fr1", "e": "f"};
                test.expect(1);
                test.deepEqual(results, expected);
                test.done();
            }
        });
    },
    
    testLoadDataDefaultLocale: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.foo = ilib.data.foo_en = ilib.data.foo_und_US = ilib.data.foo_en_US = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.json",
            object: "obj",
            type: "json",
            loadParams: {},
            sync: true,
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                var expected = {"a": "b", "c": "m", "e": "y"};
                test.expect(1);
                test.deepEqual(results, expected);
                test.done();
            }
        });
    },
    
    
    testLoadDataNonJson: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        
        ilib.clearCache();
        ilib.data.foo = ilib.data.foo_en = ilib.data.foo_und_US = ilib.data.foo_en_US = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.json",
            object: "obj",
            locale: "en-US",
            type: "other",
            loadParams: {},
            sync: true,
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                var expected = {"e": "y"};
                test.expect(1);
                test.deepEqual(results, expected);
                test.done();
            }
        });
    },
    
    testLoadDataAsynch: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        
        ilib.clearCache();
        ilib.data.foo = ilib.data.foo_en = ilib.data.foo_und_US = ilib.data.foo_en_US = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.json",
            object: "obj",
            locale: "en-US",
            type: "json",
            loadParams: {},
            sync: false,
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                var expected = {"a": "b", "c": "m", "e": "y"};
                test.expect(1);
                test.deepEqual(results, expected);
                test.done();
            }
        });
    },
    
    testLoadDataDefaults: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.clearCache();
        ilib.data.foo = ilib.data.foo_en = ilib.data.foo_und_US = ilib.data.foo_en_US = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.json",
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                var expected = {"a": "b", "c": "m", "e": "y"};
                test.expect(1);
                test.deepEqual(results, expected);
                test.done();
            }
        });
    },
    
    testLoadDataNonJson_en_US: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.clearCache();
        ilib.data.foo = ilib.data.foo_en = ilib.data.foo_und_US = ilib.data.foo_en_US = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.html",
            type: "html",
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                test.expect(1);
                test.deepEqual(results, "<html><body>This is the generic, shared foo.</body></html>");
                test.done();
            }
        });
    },
    
    testLoadDataNonJson_de: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.foo = ilib.data.foo_de = ilib.data.foo_und_DE = ilib.data.foo_de_DE = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.html",
            type: "html",
            locale: "de",
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                test.expect(1);
                test.deepEqual(results, "<html><body>Diese ist Foo auf Deutsch.</body></html>");
                test.done();
            }
        });
    },
    
    testLoadDataNonJson_de_DE: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.foo = ilib.data.foo_de = ilib.data.foo_und_DE = ilib.data.foo_de_DE = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.html",
            type: "html",
            locale: "de-DE",
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                test.expect(1);
                test.deepEqual(results, "<html><body>Diese ist Foo auf Deutsch fuer Deutschland.</body></html>");
                test.done();
            }
        });
    },
    
    testLoadDataNonJson_DE: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.foo = ilib.data.foo_de = ilib.data.foo_und_DE = ilib.data.foo_de_DE = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.html",
            type: "html",
            locale: "DE",
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                test.expect(1);
                test.deepEqual(results, "<html><body>Diese ist Foo fuer Deutschland.</body></html>");
                test.done();
            }
        });
    },
    
    testLoadDataNonJsonWithFallbackToLanguage: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.foo = ilib.data.foo_fr = ilib.data.foo_und_FR = ilib.data.foo_fr_FR = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
    
        Utils.loadData({
            name: "foo.html",
            type: "html",
            locale: "fr-FR",
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                test.expect(1);
                test.deepEqual(results, "<html><body>Ceci est foo en francais.</body></html>");
                test.done();
            }
        });
    },
    
    testLoadDataNonJsonWithFallbackToRoot: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.foo = ilib.data.foo_es = ilib.data.foo_und_ES = ilib.data.foo_es_ES = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.html",
            type: "html",
            locale: "es-ES",
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                test.expect(1);
                test.deepEqual(results, "<html><body>This is the generic, shared foo.</body></html>");
                test.done();
            }
        });
    },
    
    testLoadDataNonJsonInferFileTypeFromExtension: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.foo = ilib.data.foo_de = ilib.data.foo_und_DE = ilib.data.foo_de_DE = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.html",
            locale: "de",
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                test.expect(1);
                test.deepEqual(results, "<html><body>Diese ist Foo auf Deutsch.</body></html>");
                test.done();
            }
        });
    },
    
    testLoadDataJsonInferFileTypeFromExtension: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.foo = ilib.data.foo_de = ilib.data.foo_und_DE = ilib.data.foo_de_DE = undefined;
        ilib.setLoaderCallback(mockLoaderUtil);
        Utils.loadData({
            name: "foo.json",
            locale: "de-DE",
            callback: function (results) {
                ilib.setLoaderCallback(oldLoader);
                var expected = {"a": "a1", "c": "de2", "e": "f"};
                test.expect(1);
                test.deepEqual(results, expected);
                test.done();
            }
        });
    },
    
    testMapStringDigits: function(test) {
        test.expect(1);
        var map = "abcdefghij".split("");
    
        test.equal(JSUtils.mapString("9876543210", map), "jihgfedcba");
        test.done();
    },
    
    testMapStringDigitsUnknown: function(test) {
        test.expect(1);
        var map = "abcde".split("");
    
        test.equal(JSUtils.mapString("9876543210", map), "98765edcba");
        test.done();
    },
    
    testMapStringHash: function(test) {
        test.expect(1);
        var map = {
            "a": "x",
            "b": "y",
            "c": "z"
        };
    
        test.equal(JSUtils.mapString("abccb", map), "xyzzy");
        test.done();
    },
    
    testMapStringUndefined: function(test) {
        test.expect(1);
        var map = {
            "a": "x",
            "b": "y",
            "c": "z"
        };
    
        test.ok(typeof(JSUtils.mapString(undefined, map)) === "undefined");
        test.done();
    },
    
    testMapStringUndefinedMap: function(test) {
        test.expect(1);
        test.equal(JSUtils.mapString("abccb", undefined), "abccb");
        test.done();
    },
    
    testMapStringHashUnknown: function(test) {
        test.expect(1);
        var map = {
            "a": "x",
            "b": "y",
            "c": "z"
        };
    
        test.equal(JSUtils.mapString("abcdefabc", map), "xyzdefxyz");
        test.done();
    },
    
    testMapStringHashMulti: function(test) {
        test.expect(1);
        var map = {
            "a": "xm",
            "b": "yn",
            "c": "zo"
        };
    
        test.equal(JSUtils.mapString("abcabc", map), "xmynzoxmynzo");
        test.done();
    },
    
    testIndexOf: function(test) {
        test.expect(1);
        var arr = ["a", "b", "c"];
        test.equal(JSUtils.indexOf(arr, "b"), 1);
        test.done();
    },
    
    testIndexOfNeg: function(test) {
        test.expect(1);
        var arr = ["a", "b", "c"];
        test.equal(JSUtils.indexOf(arr, "d"), -1);
        test.done();
    },
    
    testIndexOfBeginning: function(test) {
        test.expect(1);
        var arr = ["a", "b", "c"];
        test.equal(JSUtils.indexOf(arr, "a"), 0);
        test.done();
    },
    
    testIndexOfEnd: function(test) {
        test.expect(1);
        var arr = ["a", "b", "c"];
        test.equal(JSUtils.indexOf(arr, "c"), 2);
        test.done();
    },
    
    testIndexOfCaseSensitive: function(test) {
        test.expect(1);
        var arr = ["a", "b", "c"];
        test.equal(JSUtils.indexOf(arr, "C"), -1);
        test.done();
    },
    
    testIndexOfWrongObjectType: function(test) {
        test.expect(1);
        var arr = ["a", "b", "c"];
        test.equal(JSUtils.indexOf(arr, 2), -1);
        test.done();
    },
    
    testIndexOfUndefinedSearchTerm: function(test) {
        test.expect(1);
        var arr = ["a", "b", "c"];
        test.equal(JSUtils.indexOf(arr, undefined), -1);
        test.done();
    },
    
    testIndexOfUndefinedArray: function(test) {
        test.expect(1);
        test.equal(JSUtils.indexOf(undefined, "a"), -1);
        test.done();
    },
    
    testToHexStringSimple: function(test) {
        test.expect(1);
        test.equal(JSUtils.toHexString("a"), "0061");
        test.done();
    },
    
    testToHexStringWithLengthLimit2: function(test) {
        test.expect(1);
        test.equal(JSUtils.toHexString("a", 2), "61");
        test.done();
    },
    
    testToHexStringWithLengthLimit8: function(test) {
        test.expect(1);
        test.equal(JSUtils.toHexString("a", 8), "00000061");
        test.done();
    },
    
    testToHexStringChinese: function(test) {
        test.expect(1);
        test.equal(JSUtils.toHexString("㗀"), "35C0");
        test.done();
    },
    
    testToHexStringComplex: function(test) {
        test.expect(1);
        test.equal(JSUtils.toHexString("a㗀จఓ"), "006135C00E080C13");
        test.done();
    },
    
    testPad2lt10: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(1, 2), "01");
        test.done();
    },
    
    testPad2lt0: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(-1, 2), "-01");
        test.done();
    },
    
    testPad2gt10: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(11, 2), "11");
        test.done();
    },
    
    testPad2ltMinus10: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(-11, 2), "-11");
        test.done();
    },
    
    testPad2gt100: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(111, 2), "111");
        test.done();
    },
    
    testPad2ltMinus100: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(-111, 2), "-111");
        test.done();
    },
    
    testPad0: function(test) {
        test.expect(2);
        test.equal(JSUtils.pad(1, 0), "1");
        test.equal(JSUtils.pad(10, 0), "10");
        test.done();
    },
    
    testPad0Neg: function(test) {
        test.expect(2);
        test.equal(JSUtils.pad(-1, 0), "-1");
        test.equal(JSUtils.pad(-10, 0), "-10");
        test.done();
    },
    
    testPad4_1: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(6, 4), "0006");
        test.done();
    },
    
    testPad4_2: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(67, 4), "0067");
        test.done();
    },
    
    testPad4_3: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(679, 4), "0679");
        test.done();
    },
    
    testPad4_4: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(6792, 4), "6792");
        test.done();
    },
    
    testPad4_5: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(67925, 4), "67925");
        test.done();
    },
    
    testPad4_6: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(-1, 4), "-0001");
        test.done();
    },
    
    testPad4_7: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(-10, 4), "-0010");
        test.done();
    },
    
    testPad4_8: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(-112, 4), "-0112");
        test.done();
    },
    
    testPad4_9: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(-1123, 4), "-1123");
        test.done();
    },
    
    testPad4_10: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad(-11233, 4), "-11233");
        test.done();
    },
    
    testPad2lt10String: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad("1", 2), "01");
        test.done();
    },
    
    testPad2gt10String: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad("11", 2), "11");
        test.done();
    },
    
    testPad2gt100String: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad("111", 2), "111");
        test.done();
    },
    
    testPadRightSide4: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad("123", 6, true), "123000");
        test.done();
    },
    
    testPadRightSide4Decimal: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad("1.0", 6, true), "1.0000");
        test.done();
    },
    
    testPadRightSideEnough: function(test) {
        test.expect(1);
        test.equal(JSUtils.pad("1.234323", 4, true), "1.234323");
        test.done();
    }
    
};
