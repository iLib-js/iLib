/*
 * IStringFmt.js - String formatting methods for IString
 *
 * Copyright © 2026 JEDLSoft
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
var Locale = require("./Locale.js");
var PluralUtils = require("./PluralUtils.js");

var IStringFmt = {};

/**
 * Implementation of IString.prototype.format; see the JSDoc on that
 * delegating stub in IString.js for the full public documentation.
 * @private
 */
IStringFmt.format = function (params) {
    var formatted = this.str;
    if (params) {
        var regex;
        for (var p in params) {
            if (typeof(params[p]) !== 'undefined') {
                regex = new RegExp("\{"+p+"\}", "g");
                formatted = formatted.replace(regex, params[p]);
            }
        }
    }
    return formatted.toString();
};

/** @private */
IStringFmt._testChoice = function(index, limit) {
    var operandValue = {};

    switch (typeof(index)) {
        case 'number':
            operandValue = PluralUtils._fncs.calculateNumberDigits(index);

            if (limit.substring(0,2) === "<=") {
                limit = parseFloat(limit.substring(2));
                return operandValue.n <= limit;
            } else if (limit.substring(0,2) === ">=") {
                limit = parseFloat(limit.substring(2));
                return operandValue.n >= limit;
            } else if (limit.charAt(0) === "<") {
                limit = parseFloat(limit.substring(1));
                return operandValue.n < limit;
            } else if (limit.charAt(0) === ">") {
                limit = parseFloat(limit.substring(1));
                return operandValue.n > limit;
            } else {
                this.locale = this.locale || new Locale(this.localeSpec);
                switch (limit) {
                    case "zero":
                    case "one":
                    case "two":
                    case "few":
                    case "many":
                        // CLDR locale-dependent number classes
                        var ruleset = ilib.data["plurals_" + this.locale.getLanguage()+ "_" + this.locale.getRegion()] || ilib.data["plurals_" + this.locale.getLanguage()]|| PluralUtils.plurals_default;
                        if (ruleset) {
                            var rule = ruleset[limit];
                            return PluralUtils._fncs.getValue(rule, operandValue);
                        }
                        break;
                    case "":
                    case "other":
                        // matches anything
                        return true;
                    default:
                        var dash = limit.indexOf("-");
                        if (dash !== -1) {
                            // range
                            var start = limit.substring(0, dash);
                            var end = limit.substring(dash+1);
                            return operandValue.n >= parseInt(start, 10) && operandValue.n <= parseInt(end, 10);
                        } else {
                            return operandValue.n === parseInt(limit, 10);
                        }
                }
            }
            break;
        case 'boolean':
            return (limit === "true" && index === true) || (limit === "false" && index === false);

        case 'string':
            var regexp = new RegExp(limit, "i");
            return regexp.test(index);

        case 'object':
            throw "syntax error: formatChoice parameter for the argument index cannot be an object";
    }

    return false;
};

/** @private */
IStringFmt._isIntlPluralAvailable = function(locale) {
    if (typeof (locale.getVariant()) !== 'undefined'){
        return false;
    }

    if (typeof(Intl) !== 'undefined' &&
            typeof(Intl.PluralRules) !== 'undefined' &&
            typeof(Intl.PluralRules.supportedLocalesOf) !== 'undefined') {
        if (ilib._getPlatform() === 'nodejs') {
            var version = process.versions["node"];
            if (!version) return false;
            var majorVersion = version.split(".")[0];
            if (Number(majorVersion) >= 10 && (Intl.PluralRules.supportedLocalesOf(locale.getSpec()).length > 0)) {
                return true;
            }
            return false;
        } else if (Intl.PluralRules.supportedLocalesOf(locale.getSpec()).length > 0) {
            return true;
        } else {
            return false;
        }
    }
    return false;
};

/**
 * Implementation of IString.prototype.formatChoice; see the JSDoc on that
 * delegating stub in IString.js for the full public documentation.
 * @private
 */
IStringFmt.formatChoice = function(argIndex, params, useIntlPlural) {
    var choices = this.str.split("|");
    var limits = [];
    var strings = [];
    var limitsArr = [];
    var i;
    var parts;
    var result = undefined;
    var defaultCase = "";
    var checkArgsType;
    var useIntl = typeof(useIntlPlural) !== 'undefined' ? useIntlPlural : true;
    if (this.str.length === 0) {
        // nothing to do
        return "";
    }

    // first parse all the choices
    for (i = 0; i < choices.length; i++) {
        parts = choices[i].split("#");
        if (parts.length > 2) {
            limits[i] = parts[0];
            parts = parts.shift();
            strings[i] = parts.join("#");
        } else if (parts.length === 2) {
            limits[i] = parts[0];
            strings[i] = parts[1];
        } else {
            // syntax error
            throw "syntax error in choice format pattern: " + choices[i];
        }
    }

    var args = (ilib.isArray(argIndex)) ? argIndex : [argIndex];

    checkArgsType = args.filter(ilib.bind(this, function(item){
        if (typeof(item) !== "number") {
            return false;
        }
        return true;
    }));

    if (useIntl && this.intlPlural && (args.length === checkArgsType.length)){
        this.cateArr = [];
        for(i = 0; i < args.length;i++) {
            var r = this.intlPlural.select(args[i]);
            this.cateArr.push(r);
        }
        if (args.length === 1) {
            var idx = limits.indexOf(this.cateArr[0]);
            if (idx == -1) {
                idx = limits.indexOf("");
            }
            result = new this.constructor(strings[idx]);
        } else {
            if (limits.length === 0) {
                defaultCase = new this.constructor(strings[i]);
            } else {
                this.findOne = false;

                for(i = 0; !this.findOne && i < limits.length; i++){
                    limitsArr = (limits[i].indexOf(",") > -1) ? limits[i].split(",") : [limits[i]];

                    if (limitsArr.length > 1 && (limitsArr.length < this.cateArr.length)){
                        this.cateArr = this.cateArr.slice(0,limitsArr.length);
                    }
                    limitsArr = limitsArr.map(function(item){
                        return item.trim();
                    })
                    limitsArr.filter(ilib.bind(this, function(element, idx, arr){
                        if (JSON.stringify(arr) === JSON.stringify(this.cateArr)){
                            this.number = i;
                            this.fineOne = true;
                        }
                    }));
                }
                if (this.number === -1){
                    this.number = limits.indexOf("");
                }
                result = new this.constructor(strings[this.number]);
            }
        }
    } else {
        // then apply the argument index (or indices)
        for (i = 0; i < limits.length; i++) {
            if (limits[i].length === 0) {
                // this is default case
                defaultCase = new this.constructor(strings[i]);
            } else {
                limitsArr = (limits[i].indexOf(",") > -1) ? limits[i].split(",") : [limits[i]];

                var applicable = true;
                for (var j = 0; applicable && j < args.length && j < limitsArr.length; j++) {
                    applicable = IStringFmt._testChoice.call(this, args[j], limitsArr[j]);
                }

                if (applicable) {
                    result = new this.constructor(strings[i]);
                    i = limits.length;
                }
            }
        }
    }
    if (!result) {
        result = defaultCase || new this.constructor("");
    }

    result = result.format(params);

    return result.toString();
};

/**
 * Implementation of IString.prototype.setLocale; see the JSDoc on that
 * delegating stub in IString.js for the full public documentation.
 * @private
 */
IStringFmt.setLocale = function (locale, sync, loadParams, onLoad) {
    if (typeof(locale) === 'object') {
        this.locale = locale;
    } else {
        this.localeSpec = locale;
        this.locale = new Locale(locale);
    }

    if (IStringFmt._isIntlPluralAvailable(this.locale)){
        this.intlPlural = new Intl.PluralRules(this.locale.getSpec());
    }

    PluralUtils.loadPlurals(typeof(sync) !== 'undefined' ? sync : true, this.locale, loadParams, onLoad);
};

/**
 * Implementation of IString.prototype.getLocale; see the JSDoc on that
 * delegating stub in IString.js for the full public documentation.
 * @private
 */
IStringFmt.getLocale = function () {
    return (this.locale ? this.locale.getSpec() : this.localeSpec) || ilib.getLocale();
};

module.exports = IStringFmt;
