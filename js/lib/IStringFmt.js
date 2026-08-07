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
 * Format this string instance as a message, replacing the parameters with
 * the given values.<p>
 *
 * The string can contain any text that a regular Javascript string can
 * contain. Replacement parameters have the syntax:
 *
 * <pre>
 * {name}
 * </pre>
 *
 * Where "name" can be any string surrounded by curly brackets. The value of
 * "name" is taken from the parameters argument.<p>
 *
 * Example:
 *
 * <pre>
 * var str = new IString("There are {num} objects.");
 * console.log(str.format({
 *   num: 12
 * });
 * </pre>
 *
 * Would give the output:
 *
 * <pre>
 * There are 12 objects.
 * </pre>
 *
 * If a property is missing from the parameter block, the replacement
 * parameter substring is left untouched in the string, and a different
 * set of parameters may be applied a second time. This way, different
 * parts of the code may format different parts of the message that they
 * happen to know about.<p>
 *
 * Example:
 *
 * <pre>
 * var str = new IString("There are {num} objects in the {container}.");
 * console.log(str.format({
 *   num: 12
 * });
 * </pre>
 *
 * Would give the output:<p>
 *
 * <pre>
 * There are 12 objects in the {container}.
 * </pre>
 *
 * The result can then be formatted again with a different parameter block that
 * specifies a value for the container property.
 *
 * @param params a Javascript object containing values for the replacement
 * parameters in the current string
 * @return a new IString instance with as many replacement parameters filled
 * out as possible with real values.
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
 * Format a string as one of a choice of strings dependent on the value of
 * a particular argument index or array of indices.<p>
 *
 * The syntax of the choice string is as follows. The string contains a
 * series of choices separated by a vertical bar character "|". Each choice
 * has a value or range of values to match followed by a hash character "#"
 * followed by the string to use if the variable matches the criteria.<p>
 *
 * Example string:
 *
 * <pre>
 * var num = 2;
 * var str = new IString("0#There are no objects.|1#There is one object.|2#There are {number} objects.");
 * console.log(str.formatChoice(num, {
 *   number: num
 * }));
 * </pre>
 *
 * Gives the output:
 *
 * <pre>
 * "There are 2 objects."
 * </pre>
 *
 * The strings to format may contain replacement variables that will be formatted
 * using the format() method above and the params argument as a source of values
 * to use while formatting those variables.<p>
 *
 * If the criterion for a particular choice is empty, that choice will be used
 * as the default one for use when none of the other choice's criteria match.<p>
 *
 * Example string:
 *
 * <pre>
 * var num = 22;
 * var str = new IString("0#There are no objects.|1#There is one object.|#There are {number} objects.");
 * console.log(str.formatChoice(num, {
 *   number: num
 * }));
 * </pre>
 *
 * Gives the output:
 *
 * <pre>
 * "There are 22 objects."
 * </pre>
 *
 * If multiple choice patterns can match a given argument index, the first one
 * encountered in the string will be used. If no choice patterns match the
 * argument index, then the default choice will be used. If there is no default
 * choice defined, then this method will return an empty string.<p>
 *
 * <b>Special Syntax</b><p>
 *
 * For any choice format string, all of the patterns in the string should be
 * of a single type: numeric, boolean, or string/regexp. The type of the
 * patterns is determined by the type of the argument index parameter.<p>
 *
 * If the argument index is numeric, then some special syntax can be used
 * in the patterns to match numeric ranges.<p>
 *
 * <ul>
 * <li><i>&gt;x</i> - match any number that is greater than x
 * <li><i>&gt;=x</i> - match any number that is greater than or equal to x
 * <li><i>&lt;x</i> - match any number that is less than x
 * <li><i>&lt;=x</i> - match any number that is less than or equal to x
 * <li><i>start-end</i> - match any number in the range [start,end)
 * <li><i>zero</i> - match any number in the class "zero". (See below for
 * a description of number classes.)
 * <li><i>one</i> - match any number in the class "one"
 * <li><i>two</i> - match any number in the class "two"
 * <li><i>few</i> - match any number in the class "few"
 * <li><i>many</i> - match any number in the class "many"
 * <li><i>other</i> - match any number in the other or default class
 * </ul>
 *
 * A number class defines a set of numbers that receive a particular syntax
 * in the strings. For example, in Slovenian, integers ending in the digit
 * "1" are in the "one" class, including 1, 21, 31, ... 101, 111, etc.
 * Similarly, integers ending in the digit "2" are in the "two" class.
 * Integers ending in the digits "3" or "4" are in the "few" class, and
 * every other integer is handled by the default string.<p>
 *
 * The definition of what numbers are included in a class is locale-dependent.
 * They are defined in the data file plurals.json. If your string is in a
 * different locale than the default for ilib, you should call the setLocale()
 * method of the string instance before calling this method.<p>
 *
 * <b>Other Pattern Types</b><p>
 *
 * If the argument index is a boolean, the string values "true" and "false"
 * may appear as the choice patterns.<p>
 *
 * If the argument index is of type string, then the choice patterns may contain
 * regular expressions, or static strings as degenerate regexps.<p>
 *
 * <b>Multiple Indexes</b><p>
 *
 * If you have 2 or more indexes to format into a string, you can pass them as
 * an array. When you do that, the patterns to match should be a comma-separate
 * list of patterns as per the rules above.<p>
 *
 * Example string:
 *
 * <pre>
 * var str = new IString("zero,zero#There are no objects on zero pages.|one,one#There is 1 object on 1 page.|other,one#There are {number} objects on 1 page.|#There are {number} objects on {pages} pages.");
 * var num = 4, pages = 1;
 * console.log(str.formatChoice([num, pages], {
 *   number: num,
 *   pages: pages
 * }));
 * </pre>
 *
 * Gives the output:<p>
 *
 * <pre>
 * "There are 4 objects on 1 page."
 * </pre>
 *
 * Note that when there is a single index, you would typically leave the pattern blank to
 * indicate the default choice. When there are multiple indices, sometimes one of the
 * patterns has to be the default case when the other is not. Rather than leaving one or
 * more of the patterns blank with commas that look out-of-place in the middle of it, you
 * can use the word "other" to indicate a match with the default or other choice. The above example
 * shows the use of the "other" pattern. That said, you are allowed to leave the pattern
 * blank if you so choose. In the example above, the pattern for the third string could
 * easily have been written as ",one" instead of "other,one" and the result will be the same.
 *
 * @param {*|Array.<*>} argIndex The index into the choice array of the current parameter,
 * or an array of indices
 * @param {Object} params The hash of parameter values that replace the replacement
 * variables in the string
 * * @param {boolean} useIntlPlural [optional] true if you are willing to use Intl.PluralRules object
 * If it is omitted, the default value is true
 * @throws "syntax error in choice format pattern: " if there is a syntax error
 * @return {string} the formatted string
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
                    applicable = this._testChoice(args[j], limitsArr[j]);
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
 * Set the locale to use when processing choice formats. The locale
 * affects how number classes are interpretted. In some cultures,
 * the limit "few" maps to "any integer that ends in the digits 2 to 9" and
 * in yet others, "few" maps to "any integer that ends in the digits
 * 3 or 4".
 * @param {Locale|string} locale locale to use when processing choice
 * formats with this string
 * @param {boolean=} sync [optional] whether to load the locale data synchronously
 * or not
 * @param {Object=} loadParams [optional] parameters to pass to the loader function
 * @param {function(*)=} onLoad [optional] function to call when the loading is done
 */
IStringFmt.setLocale = function (locale, sync, loadParams, onLoad) {
    if (typeof(locale) === 'object') {
        this.locale = locale;
    } else {
        this.localeSpec = locale;
        this.locale = new Locale(locale);
    }

    if (this._isIntlPluralAvailable(this.locale)){
        this.intlPlural = new Intl.PluralRules(this.locale.getSpec());
    }

    PluralUtils.loadPlurals(typeof(sync) !== 'undefined' ? sync : true, this.locale, loadParams, onLoad);
};

/**
 * Return the locale to use when processing choice formats. The locale
 * affects how number classes are interpretted. In some cultures,
 * the limit "few" maps to "any integer that ends in the digits 2 to 9" and
 * in yet others, "few" maps to "any integer that ends in the digits
 * 3 or 4".
 * @return {string} localespec to use when processing choice
 * formats with this string
 */
IStringFmt.getLocale = function () {
    return (this.locale ? this.locale.getSpec() : this.localeSpec) || ilib.getLocale();
};

module.exports = IStringFmt;
