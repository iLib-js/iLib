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
     * @private
     * @param {number|Object} n
     * @param {Array.<number|Array.<number>>|Object} range
     * @return {boolean}
     */
    matchRangeContinuous: function(n, range) {
        for (var num in range) {
            var obj = range[num];
            if (obj === undefined) continue;
            if (typeof(obj) === 'number') {
                if (n === obj || (n >= range[0] && n <= range[1])) return true;
            } else if (Array.isArray(obj)) {
                if (n >= obj[0] && n <= obj[1]) return true;
            }
        }
        return false;
    },

    /**
     * @private
     * @param {*} number
     * @return {Object}
     */
    calculateNumberDigits: function(number) {
        var expStr = number.toExponential();
        var expIdx = expStr.indexOf("e");
        var exp = expIdx !== -1 ? parseInt(expStr[expIdx + 2]) : 0;

        var str = number.toString();
        var dotIdx = str.indexOf('.');

        if (dotIdx === -1) {
            return { c: exp, e: exp, n: parseInt(number, 10), i: number, v: 0, w: 0, f: 0, t: 0 };
        }

        var decStr = str.slice(dotIdx + 1);
        var decNoTrail = decStr.replace(/0+$/, '');
        return {
            c: exp,
            e: exp,
            n: parseFloat(number),
            i: parseInt(str.slice(0, dotIdx), 10),
            v: decStr.length,
            w: decNoTrail.length,
            f: parseInt(decStr, 10),
            t: decNoTrail.length > 0 ? parseInt(decNoTrail, 10) : 0
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
        if (typeof(rule[0]) === 'number') {
            return fn.matchRangeContinuous(typeof(n) === 'object' ? n.n : n, rule);
        } else if (typeof(rule[0]) === 'undefined') {
            var subrule = fn.firstPropRule(rule);
            return fn[subrule](rule[subrule], n);
        } else {
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
        } else {
            valueRight = fn.firstPropRule(rule[1]) === "inrange"
                ? fn.getValue(rule[1], valueLeft)  // mod
                : fn.getValue(rule[1], n);
        }
        return typeof(valueRight) === 'boolean' ? !valueRight : valueLeft !== valueRight;
    }
};

module.exports = PluralUtils;
