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
    var loc;
    if (locale) {
        loc = (typeof(locale) === 'string') ? new Locale(locale) : locale;
    } else {
        loc = new Locale(ilib.getLocale());
    }
    Utils.loadData({
        name: "plurals.json",
        object: "IString",
        locale: loc,
        sync: sync,
        loadParams: loadParams,
        callback: ilib.bind(this, function(plurals) {
            plurals = plurals || PluralUtils.plurals_default;
            if (onLoad && typeof(onLoad) === 'function') {
                onLoad(plurals);
            }
        })
    });
};

/**
 * @private
 */
PluralUtils._fncs = {
    /**
     * @private
     * @param {Object} obj
     * @return {string|undefined}
     */
    firstProp: function (obj) {
        for (var p in obj) {
            if (p && obj[p]) {
                return p;
            }
        }
        return undefined; // should never get here
    },

    /**
     * @private
     * @param {Object} obj
     * @return {string|undefined}
     */
    firstPropRule: function (obj) {
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            return "inrange";
        } else if (Object.prototype.toString.call(obj) === '[object Object]') {
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
            var subrule = PluralUtils._fncs.firstPropRule(obj);
            if (subrule === "inrange") {
                return PluralUtils._fncs[subrule](obj, n);
            }
            return PluralUtils._fncs[subrule](obj[subrule], n);
        } else if (typeof(obj) === 'string') {
            if (typeof(n) === 'object'){
                return n[obj];
            }
            return n;
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
            if (typeof(num) !== 'undefined' && typeof(range[num]) !== 'undefined') {
                var obj = range[num];
                if (typeof(obj) === 'number') {
                    if (n === range[num]) {
                        return true;
                    } else if (n >= range[0] && n <= range[1]) {
                        return true;
                    }
                } else if (Object.prototype.toString.call(obj) === '[object Array]') {
                    if (n >= obj[0] && n <= obj[1]) {
                        return true;
                    }
                }
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
        var numberToString = number.toString();
        var parts = [];
        var numberDigits =  {};
        var operandSymbol =  {};

        var exponentialNum = number.toExponential();
        var exponentialIndex = exponentialNum.indexOf("e");
        if (exponentialIndex !== -1) {
            operandSymbol.c = parseInt(exponentialNum[exponentialIndex+2]);
            operandSymbol.e = parseInt(exponentialNum[exponentialIndex+2]);
        } else {
            operandSymbol.c = 0;
            operandSymbol.e = 0;
        }

        if (numberToString.indexOf('.') !== -1) { //decimal
            parts = numberToString.split('.', 2);
            numberDigits.integerPart = parseInt(parts[0], 10);
            numberDigits.decimalPartLength = parts[1].length;
            numberDigits.decimalPart = parseInt(parts[1], 10);

            operandSymbol.n = parseFloat(number);
            operandSymbol.i = numberDigits.integerPart;
            operandSymbol.v = numberDigits.decimalPartLength;
            operandSymbol.w = numberDigits.decimalPartLength;
            operandSymbol.f = numberDigits.decimalPart;
            operandSymbol.t = numberDigits.decimalPart;

        } else {
            numberDigits.integerPart = number;
            numberDigits.decimalPartLength = 0;
            numberDigits.decimalPart = 0;

            operandSymbol.n = parseInt(number, 10);
            operandSymbol.i = numberDigits.integerPart;
            operandSymbol.v = 0;
            operandSymbol.w = 0;
            operandSymbol.f = 0;
            operandSymbol.t = 0;

        }
        return operandSymbol
    },

    /**
     * @private
     * @param {number|Object} n
     * @param {Array.<number|Array.<number>>|Object} range
     * @return {boolean}
     */
    matchRange: function(n, range) {
        return PluralUtils._fncs.matchRangeContinuous(n, range);
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number} n
     * @return {boolean}
     */
    is: function(rule, n) {
        var left = PluralUtils._fncs.getValue(rule[0], n);
        var right = PluralUtils._fncs.getValue(rule[1], n);
        return left === right;
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number} n
     * @return {boolean}
     */
    isnot: function(rule, n) {
        return PluralUtils._fncs.getValue(rule[0], n) !== PluralUtils._fncs.getValue(rule[1], n);
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number|Object} n
     * @return {boolean}
     */
    inrange: function(rule, n) {
        if (typeof(rule[0]) === 'number') {
            if(typeof(n) === 'object') {
                return PluralUtils._fncs.matchRange(n.n,rule);
            }
            return PluralUtils._fncs.matchRange(n,rule);
        } else if (typeof(rule[0]) === 'undefined') {
            var subrule = PluralUtils._fncs.firstPropRule(rule);
            return PluralUtils._fncs[subrule](rule[subrule], n);
        } else {
            return PluralUtils._fncs.matchRange(PluralUtils._fncs.getValue(rule[0], n), rule[1]);
        }
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number} n
     * @return {boolean}
     */
    notin: function(rule, n) {
        return !PluralUtils._fncs.matchRange(PluralUtils._fncs.getValue(rule[0], n), rule[1]);
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number} n
     * @return {boolean}
     */
    within: function(rule, n) {
        return PluralUtils._fncs.matchRangeContinuous(PluralUtils._fncs.getValue(rule[0], n), rule[1]);
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number} n
     * @return {number}
     */
    mod: function(rule, n) {
        return MathUtils.mod(PluralUtils._fncs.getValue(rule[0], n), PluralUtils._fncs.getValue(rule[1], n));
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
        var ruleLength = rule.length;
        var result, i;
        for (i=0; i < ruleLength; i++) {
            result = PluralUtils._fncs.getValue(rule[i], n);
            if (result) {
                return true;
            }
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
        var ruleLength = rule.length;
        var result, i;
        for (i=0; i < ruleLength; i++) {
            result= PluralUtils._fncs.getValue(rule[i], n);
            if (!result) {
                return false;
            }
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
        var valueLeft = PluralUtils._fncs.getValue(rule[0], n);
        var valueRight;

        if (typeof(rule[0]) === 'string') {
            if (typeof(n) === 'object'){
                valueRight = n[rule[0]];
                if (typeof(rule[1])=== 'number'){
                    valueRight = PluralUtils._fncs.getValue(rule[1], n);
                } else if (typeof(rule[1])=== 'object' && (PluralUtils._fncs.firstPropRule(rule[1]) === "inrange" )){
                    valueRight = PluralUtils._fncs.getValue(rule[1], n);
                }
            }
        } else {
            if (PluralUtils._fncs.firstPropRule(rule[1]) === "inrange") { // mod
                valueRight = PluralUtils._fncs.getValue(rule[1], valueLeft);
            } else {
                valueRight = PluralUtils._fncs.getValue(rule[1], n);
            }
        }
        if(typeof(valueRight) === 'boolean') {
            return (valueRight ? true : false);
        } else {
            return (valueLeft === valueRight ? true :false);
        }
    },

    /**
     * @private
     * @param {Object} rule
     * @param {number|Object} n
     * @return {boolean}
     */
    neq: function(rule, n) {
        var valueLeft = PluralUtils._fncs.getValue(rule[0], n);
        var valueRight;
        var leftRange;
        var rightRange;

        if (typeof(rule[0]) === 'string') {
            valueRight = n[rule[0]];
            if (typeof(rule[1])=== 'number'){
                valueRight = PluralUtils._fncs.getValue(rule[1], n);
            } else if (typeof(rule[1]) === 'object') {
                leftRange = rule[1][0];
                rightRange =  rule[1][1];
                if (typeof(leftRange) === 'number' &&
                    typeof(rightRange) === 'number'){

                    if (valueLeft >= leftRange && valueRight <= rightRange) {
                        return false
                    } else {
                        return true;
                    }
                }
            }
        } else {
            if (PluralUtils._fncs.firstPropRule(rule[1]) === "inrange") { // mod
                valueRight = PluralUtils._fncs.getValue(rule[1], valueLeft);
            } else {
                valueRight = PluralUtils._fncs.getValue(rule[1], n);
            }
        }

        if(typeof(valueRight) === 'boolean') {//mod
            return (valueRight? false : true);
        } else {
            return (valueLeft !== valueRight ? true :false);
        }

    }
};

module.exports = PluralUtils;
