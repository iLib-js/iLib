/*
 * PluralUtils.js - Plural rule evaluation utilities
 *
 * Copyright © 2012-2015, 2018, 2021-2023 JEDLSoft
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

// !data plurals

var ilib = require("../index.js");
var Utils = require("./Utils.js");
var MathUtils = require("./MathUtils.js");
var Locale = require("./Locale.js");

var PluralUtils = {};

// build in the English rule
PluralUtils.plurals_default = {
    "one": {
        "and": [
            {
                "eq": [
                    "i",
                    1
                ]
            },
            {
                "eq": [
                    "v",
                    0
                ]
            }
        ]
    }
};

/**
 * Load the plural the definitions of plurals for the locale.
 * @param {boolean=} sync
 * @param {Locale|string=} locale
 * @param {Object=} loadParams
 * @param {function(*)=} onLoad
 */
PluralUtils.loadPlurals = function (sync, locale, loadParams, onLoad) {
    var loc = locale
        ? (typeof(locale) === 'string' ? new Locale(locale) : locale)
        : new Locale(ilib.getLocale());
    Utils.loadData({
        name: "plurals.json",
        object: "IString",
        locale: loc,
        sync: sync,
        loadParams: loadParams,
        callback: function(plurals) {
            plurals = plurals || PluralUtils.plurals_default;
            if (typeof(onLoad) === 'function') {
                onLoad(plurals);
            }
        }
    });
};

/**
 * @private
 */
var fn = PluralUtils._fncs = {
    /**
     * @private
     * @param {Object} obj
     * @return {string|undefined}
     */
    firstPropRule: function (obj) {
        if (Array.isArray(obj)) {
            return "inrange";
        } else if (typeof(obj) === 'object') {
            for (var p in obj) {
                if (p && obj[p]) {
                    return p;
                }
            }
        }
        return undefined; // should never get here
    },

    /**
     * @private
     * @param {Object} obj
     * @param {number|Object} n
     * @return {?}
     */
    getValue: function (obj, n) {
        if (typeof(obj) === 'object') {
            var subrule = fn.firstPropRule(obj);
            return subrule === "inrange" ? fn[subrule](obj, n) : fn[subrule](obj[subrule], n);
        } else if (typeof(obj) === 'string') {
            return typeof(n) === 'object' ? n[obj] : n;
        } else {
            return obj;
        }
    },

    /**
     * Test whether n falls within a CLDR range list. A range list mixes two
     * kinds of entries:
     *   - a nested array [lo, hi] is a continuous range lo..hi (e.g. [[3,10]])
     *   - top-level numbers are single values, EXCEPT when the list holds
     *     exactly two of them, in which case they denote a range lo..hi
     *     (e.g. [2,4] means 2..4, while [11,71,91] means the set {11,71,91}).
     *
     * KNOWN LIMITATION: a two-element list like [2,4] is ambiguous — it could be
     * the range 2..4 or the set {2,4}. The plurals.json generator collapses both
     * "2..4" and "2,4" to the same JSON [2,4] (see the note in
     * tools/cldr/genplurals.js), so the information needed to tell them apart is
     * already lost in the data. This function assumes "range", which is correct
     * for the common case (e.g. Russian i%10 = 2..4) but wrong for the few
     * locales that use a two-value set (e.g. Scottish Gaelic n = 2,12). Fixing
     * this properly requires regenerating the data in an unambiguous format;
     * until then, affected locales rely on Intl.PluralRules where available.
     *
     * @private
     * @param {number|Object} n
     * @param {Array.<number|Array.<number>>|Object} range
     * @return {boolean}
     */
    matchRangeContinuous: function(n, range) {
        // exactly two top-level numbers (and no nested arrays) => continuous range
        var topNums = 0, hasNested = false;
        for (var k in range) {
            if (range[k] === undefined) continue;
            if (typeof(range[k]) === 'number') topNums++;
            else if (Array.isArray(range[k])) hasNested = true;
        }
        var pairIsRange = (topNums === 2 && !hasNested);

        for (var num in range) {
            var obj = range[num];
            if (obj === undefined) continue;
            if (typeof(obj) === 'number') {
                if (n === obj) return true;
                if (pairIsRange && n >= range[0] && n <= range[1]) return true;
            } else if (Array.isArray(obj)) {
                if (n >= obj[0] && n <= obj[1]) return true;
            }
        }
        return false;
    },

    /**
     * Compute the CLDR plural operands (n, i, v, w, f, t, c, e) for a number.
     *
     * Limitation: CLDR defines v/w/f/t on the *visible* (formatted) fraction
     * digits, so trailing zeros are significant (1.50 and 1.5 differ). This
     * function only receives a JS number, whose string form never carries
     * trailing zeros, so it cannot reproduce those cases exactly. Fully correct
     * operands would require a formatted-string input. In practice this is a
     * fallback path — modern environments use Intl.PluralRules instead (see
     * IString._isIntlPluralAvailable), which handles these cases correctly.
     *
     * @private
     * @param {*} number
     * @return {Object}
     */
    calculateNumberDigits: function(number) {
        // CLDR plural operands are defined on the absolute value of the number
        number = Math.abs(number);

        var expStr = number.toExponential();
        var expIdx = expStr.indexOf("e");
        // read the whole exponent (including sign), not just its first digit
        var exp = expIdx !== -1 ? parseInt(expStr.slice(expIdx + 1), 10) : 0;

        var str = number.toString();
        var dotIdx = str.indexOf('.');

        if (dotIdx === -1) {
            // integer: use the number directly so large values in exponential
            // notation (e.g. 1e21) are not mangled by parseInt
            return { c: exp, e: exp, n: number, i: number, v: 0, w: 0, f: 0, t: 0 };
        }

        // Derive the fraction operands from the text after the decimal point.
        // Two known inaccuracies here, both only affecting values that never
        // occur in real plural contexts (see the limitation note above):
        //   - w always equals v and t always equals f, because a JS number's
        //     string form never carries trailing zeros (1.50 -> "1.5").
        //   - for very small/large decimals JS uses exponential notation
        //     (1.5e-9 -> "1.5e-9"), so decStr becomes "5e-9" and v/f are wrong.
        //     Correct handling would require expanding the exponent first.
        var decStr = str.slice(dotIdx + 1);
        var frac = parseInt(decStr, 10);
        return {
            c: exp,
            e: exp,
            n: number,
            i: parseInt(str.slice(0, dotIdx), 10),
            v: decStr.length,
            w: decStr.length,
            f: frac,
            t: frac
        };
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number} n
     * @return {boolean}
     */
    is: function(rule, n) {
        return fn.getValue(rule[0], n) === fn.getValue(rule[1], n);
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number} n
     * @return {boolean}
     */
    isnot: function(rule, n) {
        return fn.getValue(rule[0], n) !== fn.getValue(rule[1], n);
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number|Object} n
     * @return {boolean}
     */
    inrange: function(rule, n) {
        if (typeof(rule[0]) === 'number' || Array.isArray(rule[0])) {
            // the whole rule is a range list (e.g. [2,4] or [[3,4],9]); test n against it
            return fn.matchRangeContinuous(typeof(n) === 'object' ? n.n : n, rule);
        } else if (typeof(rule[0]) === 'undefined') {
            var subrule = fn.firstPropRule(rule);
            return fn[subrule](rule[subrule], n);
        } else {
            // [operand, range] pair (e.g. [{mod:[n,100]}, [3,10]])
            return fn.matchRangeContinuous(fn.getValue(rule[0], n), rule[1]);
        }
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number} n
     * @return {boolean}
     */
    notin: function(rule, n) {
        return !fn.matchRangeContinuous(fn.getValue(rule[0], n), rule[1]);
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number} n
     * @return {boolean}
     */
    within: function(rule, n) {
        return fn.matchRangeContinuous(fn.getValue(rule[0], n), rule[1]);
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number} n
     * @return {number}
     */
    mod: function(rule, n) {
        return MathUtils.mod(fn.getValue(rule[0], n), fn.getValue(rule[1], n));
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number} n
     * @return {number}
     */
    n: function(rule, n) {
        return n;
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number|Object} n
     * @return {boolean}
     */
    or: function(rule, n) {
        for (var i = 0; i < rule.length; i++) {
            if (fn.getValue(rule[i], n)) return true;
        }
        return false;
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number|Object} n
     * @return {boolean}
     */
    and: function(rule, n) {
        for (var i = 0; i < rule.length; i++) {
            if (!fn.getValue(rule[i], n)) return false;
        }
        return true;
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number|Object} n
     * @return {boolean}
     */
    eq: function(rule, n) {
        var valueLeft = fn.getValue(rule[0], n);
        var valueRight;

        if (typeof(rule[0]) === 'string') {
            if (typeof(n) === 'object') {
                valueRight = n[rule[0]];
                if (typeof(rule[1]) === 'number' ||
                        (typeof(rule[1]) === 'object' && fn.firstPropRule(rule[1]) === "inrange")) {
                    valueRight = fn.getValue(rule[1], n);
                }
            }
        } else {
            valueRight = fn.firstPropRule(rule[1]) === "inrange"
                ? fn.getValue(rule[1], valueLeft)  // mod
                : fn.getValue(rule[1], n);
        }
        return typeof(valueRight) === 'boolean' ? valueRight : valueLeft === valueRight;
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number|Object} n
     * @return {boolean}
     */
    neq: function(rule, n) {
        var valueLeft = fn.getValue(rule[0], n);
        var valueRight;

        if (typeof(rule[0]) === 'string') {
            if (typeof(n) === 'object') {
                valueRight = n[rule[0]];
                if (typeof(rule[1]) === 'number') {
                    valueRight = fn.getValue(rule[1], n);
                } else if (typeof(rule[1]) === 'object') {
                    var leftRange = rule[1][0];
                    var rightRange = rule[1][1];
                    if (typeof(leftRange) === 'number' && typeof(rightRange) === 'number') {
                        return !(valueLeft >= leftRange && valueLeft <= rightRange);
                    }
                }
            }
        } else {
            valueRight = fn.firstPropRule(rule[1]) === "inrange"
                ? fn.getValue(rule[1], valueLeft)  // mod
                : fn.getValue(rule[1], n);
        }
        return typeof(valueRight) === 'boolean' ? !valueRight : valueLeft !== valueRight;
    }
};

module.exports = PluralUtils;
