/*
 * testpluralutils.js - test the PluralUtils object
 *
 * Copyright © 2026, JEDLSoft
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
if (typeof(Locale) === "undefined") {
    var Locale = require("../../lib/Locale.js");
}
if (typeof(IString) === "undefined") {
    var IString = require("../../lib/IString.js");
}
// PluralUtils is an internal utility, so it is not exposed as a global in the
// assembled/dynamicdata test builds, and requiring it by relative path fails in
// those builds (files are geval'd from testRunner.js, so the path resolves
// wrongly, and require may be undefined). Its entire API is re-exported on
// IString with the same object references, and IString IS available in every
// build, so we derive PluralUtils from it rather than requiring it directly.
var PluralUtils = {
    _fncs: IString._fncs,
    loadPlurals: IString.loadPlurals,
    plurals_default: IString.plurals_default
};

var fn = PluralUtils._fncs;

// the Russian ruleset exercises every rule primitive (mod, ranges, and/or, eq/neq)
var pluralsRu = {
    "few": {
        "and": [
            { "eq": ["v", 0] },
            { "eq": [{ "mod": ["i", 10] }, [2, 4]] },
            { "neq": [{ "mod": ["i", 100] }, [12, 14]] }
        ]
    },
    "many": {
        "or": [
            { "and": [{ "eq": ["v", 0] }, { "eq": [{ "mod": ["i", 10] }, 0] }] },
            { "and": [{ "eq": ["v", 0] }, { "eq": [{ "mod": ["i", 10] }, [5, 9]] }] },
            { "and": [{ "eq": ["v", 0] }, { "eq": [{ "mod": ["i", 100] }, [11, 14]] }] }
        ]
    },
    "one": {
        "and": [
            { "eq": ["v", 0] },
            { "eq": [{ "mod": ["i", 10] }, 1] },
            { "neq": [{ "mod": ["i", 100] }, 11] }
        ]
    }
};

// Breton exercises the trickier range forms: a 3-value set [11,71,91],
// a mixed list [[3,4],9], and nested ranges [[10,19],[70,79],[90,99]].
var pluralsBr = {
    "few": {
        "and": [
            { "eq": [{ "mod": ["n", 10] }, [[3, 4], 9]] },
            { "neq": [{ "mod": ["n", 100] }, [[10, 19], [70, 79], [90, 99]]] }
        ]
    },
    "many": {
        "and": [
            { "neq": ["n", 0] },
            { "eq": [{ "mod": ["n", 1000000] }, 0] }
        ]
    },
    "one": {
        "and": [
            { "eq": [{ "mod": ["n", 10] }, 1] },
            { "neq": [{ "mod": ["n", 100] }, [11, 71, 91]] }
        ]
    },
    "two": {
        "and": [
            { "eq": [{ "mod": ["n", 10] }, 2] },
            { "neq": [{ "mod": ["n", 100] }, [12, 72, 92]] }
        ]
    }
};

/**
 * Return the CLDR plural category of a number for the given ruleset.
 */
function categorize(ruleset, number) {
    var ops = fn.calculateNumberDigits(number);
    var categories = ["zero", "one", "two", "few", "many"];
    for (var i = 0; i < categories.length; i++) {
        var cat = categories[i];
        if (ruleset[cat] && fn.getValue(ruleset[cat], ops)) {
            return cat;
        }
    }
    return "other";
}

module.exports.testpluralutils = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // --------- module shape ---------

    testPluralUtilsExists: function(test) {
        test.expect(1);
        test.ok(typeof(PluralUtils) !== "undefined");
        test.done();
    },

    testPluralUtilsHasDefaultRules: function(test) {
        test.expect(2);
        test.ok(typeof(PluralUtils.plurals_default) === "object");
        // the default (English) rule: one when i==1 and v==0
        test.ok(typeof(PluralUtils.plurals_default.one) === "object");
        test.done();
    },

    testPluralUtilsHasFncs: function(test) {
        test.expect(1);
        test.ok(typeof(PluralUtils._fncs) === "object");
        test.done();
    },

    testPluralUtilsHasLoadPlurals: function(test) {
        test.expect(1);
        test.ok(typeof(PluralUtils.loadPlurals) === "function");
        test.done();
    },

    // --------- calculateNumberDigits ---------

    testCalculateNumberDigitsInteger: function(test) {
        test.expect(8);
        var ops = fn.calculateNumberDigits(1);
        test.equal(ops.n, 1);
        test.equal(ops.i, 1);
        test.equal(ops.v, 0);
        test.equal(ops.w, 0);
        test.equal(ops.f, 0);
        test.equal(ops.t, 0);
        test.equal(ops.c, 0);
        test.equal(ops.e, 0);
        test.done();
    },

    testCalculateNumberDigitsZero: function(test) {
        test.expect(4);
        var ops = fn.calculateNumberDigits(0);
        test.equal(ops.n, 0);
        test.equal(ops.i, 0);
        test.equal(ops.v, 0);
        test.equal(ops.f, 0);
        test.done();
    },

    testCalculateNumberDigitsLargeInteger: function(test) {
        test.expect(3);
        var ops = fn.calculateNumberDigits(123);
        test.equal(ops.n, 123);
        test.equal(ops.i, 123);
        test.equal(ops.v, 0);
        test.done();
    },

    testCalculateNumberDigitsSimpleDecimal: function(test) {
        test.expect(6);
        var ops = fn.calculateNumberDigits(1.5);
        test.equal(ops.n, 1.5);
        test.equal(ops.i, 1);
        test.equal(ops.v, 1);
        test.equal(ops.w, 1);
        test.equal(ops.f, 5);
        test.equal(ops.t, 5);
        test.done();
    },

    testCalculateNumberDigitsMultipleDecimals: function(test) {
        test.expect(5);
        var ops = fn.calculateNumberDigits(1.23);
        test.equal(ops.i, 1);
        test.equal(ops.v, 2);
        test.equal(ops.w, 2);
        test.equal(ops.f, 23);
        test.equal(ops.t, 23);
        test.done();
    },

    testCalculateNumberDigitsTrailingZeros: function(test) {
        test.expect(5);
        // trailing zeros count in v/f but not w/t
        var ops = fn.calculateNumberDigits(1.230);
        // JS normalizes 1.230 to 1.23, so trailing zero is already gone
        test.equal(ops.i, 1);
        test.equal(ops.v, 2);
        test.equal(ops.w, 2);
        test.equal(ops.f, 23);
        test.equal(ops.t, 23);
        test.done();
    },

    testCalculateNumberDigitsNegativeInteger: function(test) {
        test.expect(4);
        // CLDR operands are defined on the absolute value
        var ops = fn.calculateNumberDigits(-1);
        test.equal(ops.n, 1);
        test.equal(ops.i, 1);
        test.equal(ops.v, 0);
        test.equal(ops.f, 0);
        test.done();
    },

    testCalculateNumberDigitsNegativeDecimal: function(test) {
        test.expect(4);
        var ops = fn.calculateNumberDigits(-1.5);
        test.equal(ops.n, 1.5);
        test.equal(ops.i, 1);
        test.equal(ops.v, 1);
        test.equal(ops.f, 5);
        test.done();
    },

    testCalculateNumberDigitsSmallExponentSingleDigit: function(test) {
        test.expect(2);
        // 1e-7 -> exponent is -7
        var ops = fn.calculateNumberDigits(1e-7);
        test.equal(ops.c, -7);
        test.equal(ops.e, -7);
        test.done();
    },

    testCalculateNumberDigitsSmallExponentMultiDigit: function(test) {
        test.expect(2);
        // regression: multi-digit exponent must be read in full, not just its first digit
        var ops = fn.calculateNumberDigits(1e-21);
        test.equal(ops.c, -21);
        test.equal(ops.e, -21);
        test.done();
    },

    testCalculateNumberDigitsLargeExponent: function(test) {
        test.expect(4);
        // regression: exponent read in full and n/i not mangled by parseInt
        var ops = fn.calculateNumberDigits(1e21);
        test.equal(ops.c, 21);
        test.equal(ops.e, 21);
        test.equal(ops.n, 1e21);
        test.equal(ops.i, 1e21);
        test.done();
    },

    // --------- firstPropRule ---------

    testFirstPropRuleArrayIsInrange: function(test) {
        test.expect(1);
        test.equal(fn.firstPropRule([2, 4]), "inrange");
        test.done();
    },

    testFirstPropRuleObject: function(test) {
        test.expect(1);
        test.equal(fn.firstPropRule({ mod: ["i", 10] }), "mod");
        test.done();
    },

    testFirstPropRuleFirstTruthyProp: function(test) {
        test.expect(1);
        test.equal(fn.firstPropRule({ eq: [1, 1] }), "eq");
        test.done();
    },

    // --------- getValue ---------

    testGetValueLiteralNumber: function(test) {
        test.expect(1);
        test.equal(fn.getValue(5, 10), 5);
        test.done();
    },

    testGetValueOperandString: function(test) {
        test.expect(1);
        var ops = fn.calculateNumberDigits(1.5);
        // "i" operand should resolve to the integer part
        test.equal(fn.getValue("i", ops), 1);
        test.done();
    },

    testGetValueOperandStringWithPlainNumber: function(test) {
        test.expect(1);
        // when n is not an object, a string operand returns n itself
        test.equal(fn.getValue("n", 7), 7);
        test.done();
    },

    // --------- is / isnot ---------

    testIsTrue: function(test) {
        test.expect(1);
        test.ok(fn.is([1, 1], 0));
        test.done();
    },

    testIsFalse: function(test) {
        test.expect(1);
        test.ok(!fn.is([1, 2], 0));
        test.done();
    },

    testIsnotTrue: function(test) {
        test.expect(1);
        test.ok(fn.isnot([1, 2], 0));
        test.done();
    },

    testIsnotFalse: function(test) {
        test.expect(1);
        test.ok(!fn.isnot([1, 1], 0));
        test.done();
    },

    // --------- inrange / notin / within ---------

    testInrangeContinuousInside: function(test) {
        test.expect(1);
        // inrange(range, value): is value within the range?
        test.ok(fn.inrange([2, 4], 3));
        test.done();
    },

    testInrangeContinuousOutside: function(test) {
        test.expect(1);
        test.ok(!fn.inrange([2, 4], 5));
        test.done();
    },

    testInrangeBoundaries: function(test) {
        test.expect(2);
        test.ok(fn.inrange([2, 4], 2));
        test.ok(fn.inrange([2, 4], 4));
        test.done();
    },

    testNotinTrue: function(test) {
        test.expect(1);
        test.ok(fn.notin([5, [2, 4]], 0));
        test.done();
    },

    testNotinFalse: function(test) {
        test.expect(1);
        test.ok(!fn.notin([3, [2, 4]], 0));
        test.done();
    },

    testWithinTrue: function(test) {
        test.expect(1);
        test.ok(fn.within([3, [2, 4]], 0));
        test.done();
    },

    testWithinFalse: function(test) {
        test.expect(1);
        test.ok(!fn.within([5, [2, 4]], 0));
        test.done();
    },

    // --------- mod ---------

    testMod: function(test) {
        test.expect(1);
        test.equal(fn.mod([23, 10], 0), 3);
        test.done();
    },

    testModExact: function(test) {
        test.expect(1);
        test.equal(fn.mod([20, 10], 0), 0);
        test.done();
    },

    // --------- n ---------

    testNReturnsNumber: function(test) {
        test.expect(1);
        test.equal(fn.n(undefined, 42), 42);
        test.done();
    },

    // --------- or / and ---------

    testOrTrue: function(test) {
        test.expect(1);
        test.ok(fn.or([{ eq: [1, 2] }, { eq: [2, 2] }], 0));
        test.done();
    },

    testOrFalse: function(test) {
        test.expect(1);
        test.ok(!fn.or([{ eq: [1, 2] }, { eq: [3, 2] }], 0));
        test.done();
    },

    testAndTrue: function(test) {
        test.expect(1);
        test.ok(fn.and([{ eq: [1, 1] }, { eq: [2, 2] }], 0));
        test.done();
    },

    testAndFalse: function(test) {
        test.expect(1);
        test.ok(!fn.and([{ eq: [1, 1] }, { eq: [2, 3] }], 0));
        test.done();
    },

    // --------- eq / neq with operands ---------

    testEqOperandNumber: function(test) {
        test.expect(2);
        var ops = fn.calculateNumberDigits(1);
        test.ok(fn.eq(["v", 0], ops));
        var ops2 = fn.calculateNumberDigits(1.5);
        test.ok(!fn.eq(["v", 0], ops2));
        test.done();
    },

    testEqModWithRange: function(test) {
        test.expect(2);
        var ops = fn.calculateNumberDigits(22);
        // i mod 10 == 2, which is in [2,4]
        test.ok(fn.eq([{ mod: ["i", 10] }, [2, 4]], ops));
        var ops2 = fn.calculateNumberDigits(25);
        // i mod 10 == 5, not in [2,4]
        test.ok(!fn.eq([{ mod: ["i", 10] }, [2, 4]], ops2));
        test.done();
    },

    testNeqOperandNumber: function(test) {
        test.expect(2);
        var ops = fn.calculateNumberDigits(1.5);
        test.ok(fn.neq(["v", 0], ops));
        var ops2 = fn.calculateNumberDigits(1);
        test.ok(!fn.neq(["v", 0], ops2));
        test.done();
    },

    testNeqModWithRange: function(test) {
        test.expect(2);
        var ops = fn.calculateNumberDigits(12);
        // i mod 100 == 12, which is in [12,14] -> neq is false
        test.ok(!fn.neq([{ mod: ["i", 100] }, [12, 14]], ops));
        var ops2 = fn.calculateNumberDigits(22);
        // i mod 100 == 22, not in [12,14] -> neq is true
        test.ok(fn.neq([{ mod: ["i", 100] }, [12, 14]], ops2));
        test.done();
    },

    testEqNeqSymmetryWithStringOperand: function(test) {
        test.expect(2);
        // eq and neq must stay logically opposite. With a string operand and a
        // plain-number n (not an operand object), neq now mirrors eq's
        // typeof(n) === 'object' guard, so the two return opposite results.
        test.equal(fn.eq(["i", 1], 5), false);
        test.equal(fn.neq(["i", 1], 5), true);
        test.done();
    },

    // --------- end-to-end rule evaluation (English default) ---------

    testDefaultRulesOne: function(test) {
        test.expect(1);
        test.equal(categorize(PluralUtils.plurals_default, 1), "one");
        test.done();
    },

    testDefaultRulesOther: function(test) {
        test.expect(3);
        test.equal(categorize(PluralUtils.plurals_default, 0), "other");
        test.equal(categorize(PluralUtils.plurals_default, 2), "other");
        test.equal(categorize(PluralUtils.plurals_default, 1.5), "other");
        test.done();
    },

    testDefaultRulesNegative: function(test) {
        test.expect(2);
        // operands use the absolute value, so -1 categorizes like 1 (matches Intl.PluralRules)
        test.equal(categorize(PluralUtils.plurals_default, -1), "one");
        test.equal(categorize(PluralUtils.plurals_default, -2), "other");
        test.done();
    },

    // --------- end-to-end rule evaluation (Russian) ---------

    testRussianRulesOne: function(test) {
        test.expect(3);
        test.equal(categorize(pluralsRu, 1), "one");
        test.equal(categorize(pluralsRu, 21), "one");
        test.equal(categorize(pluralsRu, 101), "one");
        test.done();
    },

    testRussianRulesFew: function(test) {
        test.expect(3);
        test.equal(categorize(pluralsRu, 2), "few");
        test.equal(categorize(pluralsRu, 3), "few");
        test.equal(categorize(pluralsRu, 22), "few");
        test.done();
    },

    testRussianRulesMany: function(test) {
        test.expect(4);
        test.equal(categorize(pluralsRu, 5), "many");
        test.equal(categorize(pluralsRu, 11), "many");
        test.equal(categorize(pluralsRu, 12), "many");
        test.equal(categorize(pluralsRu, 100), "many");
        test.done();
    },

    testRussianRulesOther: function(test) {
        test.expect(2);
        // fractions fall through to "other"
        test.equal(categorize(pluralsRu, 1.5), "other");
        test.equal(categorize(pluralsRu, 2.7), "other");
        test.done();
    },

    // --------- range list forms: sets, mixed and nested (Breton) ---------

    testMatchRangeContinuousTwoValueRange: function(test) {
        test.expect(3);
        // exactly two numbers => continuous range 2..4
        test.ok(fn.matchRangeContinuous(3, [2, 4]));
        test.ok(fn.matchRangeContinuous(2, [2, 4]));
        test.ok(!fn.matchRangeContinuous(5, [2, 4]));
        test.done();
    },

    testMatchRangeContinuousThreeValueSet: function(test) {
        test.expect(4);
        // three numbers => set {11,71,91}; values between must NOT match
        test.ok(fn.matchRangeContinuous(11, [11, 71, 91]));
        test.ok(fn.matchRangeContinuous(71, [11, 71, 91]));
        test.ok(fn.matchRangeContinuous(91, [11, 71, 91]));
        test.ok(!fn.matchRangeContinuous(40, [11, 71, 91]));
        test.done();
    },

    testMatchRangeContinuousNestedRanges: function(test) {
        test.expect(4);
        // nested arrays are continuous ranges; union of [3..10] and [13..19]
        test.ok(fn.matchRangeContinuous(5, [[3, 10], [13, 19]]));
        test.ok(fn.matchRangeContinuous(15, [[3, 10], [13, 19]]));
        test.ok(!fn.matchRangeContinuous(11, [[3, 10], [13, 19]]));
        test.ok(!fn.matchRangeContinuous(20, [[3, 10], [13, 19]]));
        test.done();
    },

    testMatchRangeContinuousMixedList: function(test) {
        test.expect(4);
        // mixed: nested range [3,4] plus single value 9
        test.ok(fn.matchRangeContinuous(3, [[3, 4], 9]));
        test.ok(fn.matchRangeContinuous(4, [[3, 4], 9]));
        test.ok(fn.matchRangeContinuous(9, [[3, 4], 9]));
        test.ok(!fn.matchRangeContinuous(5, [[3, 4], 9]));
        test.done();
    },

    testInrangeNestedAndMixedList: function(test) {
        test.expect(3);
        // inrange must treat a whole nested/mixed list as the range list
        test.ok(fn.inrange([[3, 10], [13, 19]], 15));
        test.ok(fn.inrange([[3, 4], 9], 9));
        test.ok(!fn.inrange([[3, 4], 9], 5));
        test.done();
    },

    testBretonRulesOne: function(test) {
        test.expect(4);
        // n%10==1 and n%100 not in {11,71,91}. Regression: 21/31/41 were
        // previously mis-categorized as "other" because [11,71,91] was read
        // as the range 11..91.
        test.equal(categorize(pluralsBr, 1), "one");
        test.equal(categorize(pluralsBr, 21), "one");
        test.equal(categorize(pluralsBr, 31), "one");
        test.equal(categorize(pluralsBr, 41), "one");
        test.done();
    },

    testBretonRulesFew: function(test) {
        test.expect(3);
        // n%10 in {3,4,9}. Regression: the mixed list [[3,4],9] previously
        // dropped one branch in inrange, so 3/9 fell through to "other".
        test.equal(categorize(pluralsBr, 3), "few");
        test.equal(categorize(pluralsBr, 4), "few");
        test.equal(categorize(pluralsBr, 9), "few");
        test.done();
    },

    testBretonRulesTwoAndOther: function(test) {
        test.expect(4);
        test.equal(categorize(pluralsBr, 2), "two");
        test.equal(categorize(pluralsBr, 11), "other");
        test.equal(categorize(pluralsBr, 71), "other");
        test.equal(categorize(pluralsBr, 1000000), "many");
        test.done();
    },

    // --------- loadPlurals ---------

    testLoadPluralsSyncReturnsRules: function(test) {
        test.expect(2);
        PluralUtils.loadPlurals(true, new Locale("ru-RU"), undefined, function(plurals) {
            test.ok(typeof(plurals) === "object");
            // Russian has a "few" category
            test.ok(typeof(plurals.few) !== "undefined");
            test.done();
        });
    },

    testLoadPluralsSyncDefaultLocale: function(test) {
        test.expect(1);
        PluralUtils.loadPlurals(true, undefined, undefined, function(plurals) {
            test.ok(typeof(plurals) === "object");
            test.done();
        });
    },

    testLoadPluralsAcceptsStringLocale: function(test) {
        test.expect(1);
        PluralUtils.loadPlurals(true, "ru-RU", undefined, function(plurals) {
            test.ok(typeof(plurals.few) !== "undefined");
            test.done();
        });
    }
};