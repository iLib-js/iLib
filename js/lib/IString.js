/*
 * IString.js - ilib string subclass definition
 *
 * Copyright © 2012-2015, 2018, 2021-2023, 2026 JEDLSoft
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
var PluralUtils = require("./PluralUtils.js");
var IStringFmt = require("./IStringFmt");

/**
 * @class
 * Create a new ilib string instance. This string inherits from and
 * extends the Javascript String class. It can be
 * used almost anywhere that a normal Javascript string is used, though in
 * some instances you will need to call the [toString]{@link IString#toString} method when
 * a built-in Javascript string is needed. The formatting methods are
 * methods that are not in the intrinsic String class and are most useful
 * when localizing strings in an app or web site in combination with
 * the ResBundle class.<p>
 *
 * This class is named IString ("ilib string") so as not to conflict with the
 * built-in Javascript String class.
 *
 * @constructor
 * @param {string|IString=} string initialize this instance with this string
 */
var IString = function (string) {
    if (typeof(string) === 'object') {
        if (string instanceof IString) {
            this.str = string.str;
        } else {
            this.str = string.toString();
        }
    } else if (typeof(string) === 'string') {
        this.str = String(string); // copy it
    } else {
        this.str = "";
    }
    this.length = this.str.length;
    this.cpLength = -1;
    this.localeSpec = ilib.getLocale();
};

/**
 * Return true if the given character is a Unicode surrogate character,
 * either high or low.
 *
 * @private
 * @static
 * @param {string} ch character to check
 * @return {boolean} true if the character is a surrogate
 */
IString._isSurrogate = function (ch) {
    var n = ch.charCodeAt(0);
    return ((n >= 0xDC00 && n <= 0xDFFF) || (n >= 0xD800 && n <= 0xDBFF));
};

// backward-compatible aliases — implementation lives in PluralUtils.js
IString.plurals_default = PluralUtils.plurals_default;

/**
 * Convert a UCS-4 code point to a Javascript string. The codepoint can be any valid
 * UCS-4 Unicode character, including supplementary characters. Standard Javascript
 * only supports supplementary characters using the UTF-16 encoding, which has
 * values in the range 0x0000-0xFFFF. String.fromCharCode() will only
 * give you a string containing 16-bit characters, and will not properly convert
 * the code point for a supplementary character (which has a value > 0xFFFF) into
 * two UTF-16 surrogate characters. Instead, it will just just give you whatever
 * single character happens to be the same as your code point modulo 0x10000, which
 * is almost never what you want.<p>
 *
 * Similarly, that means if you use String.charCodeAt()
 * you will only retrieve a 16-bit value, which may possibly be a single
 * surrogate character that is part of a surrogate pair representing a character
 * in the supplementary plane. It will not give you a code point. Use
 * IString.codePointAt() to access code points in a string, or use
 * an iterator to walk through the code points in a string.
 *
 * @static
 * @param {number} codepoint UCS-4 code point to convert to a character
 * @return {string} a string containing the character represented by the codepoint
 */
IString.fromCodePoint = function (codepoint) {
    if (codepoint < 0x10000) {
        return String.fromCharCode(codepoint);
    } else {
        var high = Math.floor(codepoint / 0x10000) - 1;
        var low = codepoint & 0xFFFF;

        return String.fromCharCode(0xD800 | ((high & 0x000F) << 6) |  ((low & 0xFC00) >> 10)) +
            String.fromCharCode(0xDC00 | (low & 0x3FF));
    }
};

/**
 * Convert the character or the surrogate pair at the given
 * index into the intrinsic Javascript string to a Unicode
 * UCS-4 code point.
 *
 * @static
 * @param {string} str string to get the code point from
 * @param {number} index index into the string
 * @return {number} code point of the character at the
 * given index into the string
 */
IString.toCodePoint = function(str, index) {
    if (!str || str.length === 0) {
        return -1;
    }
    var code = -1, high = str.charCodeAt(index);
    if (high >= 0xD800 && high <= 0xDBFF) {
        if (str.length > index+1) {
            var low = str.charCodeAt(index+1);
            if (low >= 0xDC00 && low <= 0xDFFF) {
                code = (((high & 0x3C0) >> 6) + 1) << 16 |
                    (((high & 0x3F) << 10) | (low & 0x3FF));
            }
        }
    } else {
        code = high;
    }

    return code;
};

/**
 * Load the plural the definitions of plurals for the locale.
 * @param {boolean=} sync
 * @param {Locale|string=} locale
 * @param {Object=} loadParams
 * @param {function(*)=} onLoad
 */
IString.loadPlurals = PluralUtils.loadPlurals;

/** @private @static */
IString._fncs = PluralUtils._fncs;

IString.prototype = {
    /**
     * Return the length of this string in characters. This function defers to the regular
     * Javascript string class in order to perform the length function. Please note that this
     * method is a real method, whereas the length property of Javascript strings is
     * implemented by native code and appears as a property.<p>
     *
     * Example:
     *
     * <pre>
     * var str = new IString("this is a string");
     * console.log("String is " + str._length() + " characters long.");
     * </pre>
     * @private
     * @deprecated
     */
    _length: function () {
        return this.str.length;
    },

    // delegates
    /**
     * Same as String.toString()
     * @return {string} this instance as regular Javascript string
     */
    toString: function () {
        return this.str.toString();
    },

    /**
     * Same as String.valueOf()
     * @return {string} this instance as a regular Javascript string
     */
    valueOf: function () {
        return this.str.valueOf();
    },

    /**
     * Same as String.charAt()
     * @param {number} index the index of the character being sought
     * @return {IString} the character at the given index
     */
    charAt: function(index) {
        return new IString(this.str.charAt(index));
    },

    /**
     * Same as String.charCodeAt(). This only reports on
     * 2-byte UCS-2 Unicode values, and does not take into
     * account supplementary characters encoded in UTF-16.
     * If you would like to take account of those characters,
     * use codePointAt() instead.
     * @param {number} index the index of the character being sought
     * @return {number} the character code of the character at the
     * given index in the string
     */
    charCodeAt: function(index) {
        return this.str.charCodeAt(index);
    },

    /**
     * Same as String.concat()
     * @param {string} strings strings to concatenate to the current one
     * @return {IString} a concatenation of the given strings
     */
    concat: function(strings) {
        return new IString(this.str.concat(strings));
    },

    /**
     * Same as String.indexOf()
     * @param {string} searchValue string to search for
     * @param {number} start index into the string to start searching, or
     * undefined to search the entire string
     * @return {number} index into the string of the string being sought,
     * or -1 if the string is not found
     */
    indexOf: function(searchValue, start) {
        return this.str.indexOf(searchValue, start);
    },

    /**
     * Same as String.lastIndexOf()
     * @param {string} searchValue string to search for
     * @param {number} start index into the string to start searching, or
     * undefined to search the entire string
     * @return {number} index into the string of the string being sought,
     * or -1 if the string is not found
     */
    lastIndexOf: function(searchValue, start) {
        return this.str.lastIndexOf(searchValue, start);
    },

    /**
     * Same as String.match()
     * @param {string} regexp the regular expression to match
     * @return {Array.<string>} an array of matches
     */
    match: function(regexp) {
        return this.str.match(regexp);
    },

    /**
     * Same as String.matchAll()
     * @param {string} regexp the regular expression to match
     * @return {iterator} an iterator of the matches
     */
    matchAll: function(regexp) {
        return this.str.matchAll(regexp);
    },

    /**
     * Same as String.replace()
     * @param {string} searchValue a regular expression to search for
     * @param {string} newValue the string to replace the matches with
     * @return {IString} a new string with all the matches replaced
     * with the new value
     */
    replace: function(searchValue, newValue) {
        return new IString(this.str.replace(searchValue, newValue));
    },

    /**
     * Same as String.search()
     * @param {string} regexp the regular expression to search for
     * @return {number} position of the match, or -1 for no match
     */
    search: function(regexp) {
        return this.str.search(regexp);
    },

    /**
     * Same as String.slice()
     * @param {number} start first character to include in the string
     * @param {number} end include all characters up to, but not including
     * the end character
     * @return {IString} a slice of the current string
     */
    slice: function(start, end) {
        return new IString(this.str.slice(start, end));
    },

    /**
     * Same as String.split()
     * @param {string} separator regular expression to match to find
     * separations between the parts of the text
     * @param {number} limit maximum number of items in the final
     * output array. Any items beyond that limit will be ignored.
     * @return {Array.<string>} the parts of the current string split
     * by the separator
     */
    split: function(separator, limit) {
        return this.str.split(separator, limit);
    },

    /**
     * Same as String.substr()
     * @param {number} start the index of the character that should
     * begin the returned substring
     * @param {number} length the number of characters to return after
     * the start character.
     * @return {IString} the requested substring
     */
    substr: function(start, length) {
        var plat = ilib._getPlatform();
        if (plat === "rhino" || plat === "trireme") {
            // rhino and trireme have a broken implementation of substr(), so
            // work around it
            if (typeof(length) === "undefined") {
                length = this.str.length - start;
            }
        }
        return new IString(this.str.substr(start, length));
    },

    /**
     * Same as String.substring()
     * @param {number} from the index of the character that should
     * begin the returned substring
     * @param {number} to the index where to stop the extraction. If
     * omitted, extracts the rest of the string
     * @return {IString} the requested substring
     */
    substring: function(from, to) {
        return this.str.substring(from, to);
    },

    /**
     * Same as String.toLowerCase(). Note that this method is
     * not locale-sensitive.
     * @return {IString} a string with the first character
     * lower-cased
     */
    toLowerCase: function() {
        return this.str.toLowerCase();
    },

    /**
     * Same as String.toUpperCase(). Note that this method is
     * not locale-sensitive. Use toLocaleUpperCase() instead
     * to get locale-sensitive behaviour.
     * @return {IString} a string with the first character
     * upper-cased
     */
    toUpperCase: function() {
        return this.str.toUpperCase();
    },

    /**
     * Same as String.endsWith().
     * @return {boolean} true if the given characters are found at
     * the end of the string, and false otherwise
     */
    endsWith: function(searchString, length) {
        /* (note)length is optional. If it is omitted the default value is the length of string.
        *  But If length is omitted, it returns false on QT. (tested on QT 5.12.4 and 5.13.0)
        */
        if (typeof length === "undefined") {
            length = this.str.length;
        }
        return this.str.endsWith(searchString, length);
    },

    /**
     * Same as String.startsWith().
     * @return {boolean} true if the given characters are found at
     * the beginning of the string, and false otherwise
     */
    startsWith: function(searchString, length) {
        return this.str.startsWith(searchString, length);
    },

    /**
     * Same as String.includes().
     * @return {boolean} true if the search string is found anywhere
     * with the given string, and false otherwise
     */
    includes: function(searchString, position) {
        return this.str.includes(searchString, position);
    },

    /**
     * Same as String.normalize(). If this JS engine does not support
     * this method, then you can use the NormString class of ilib
     * to the same thing (albeit a little slower).
     *
     * @return {string} the string in normalized form
     */
    normalize: function(form) {
        return this.str.normalize(form);
    },

    /**
     * Same as String.padEnd().
     * @return {string} a string of the specified length with the
     * pad string applied at the end of the current string
     */
    padEnd: function(targetLength, padString) {
        return this.str.padEnd(targetLength, padString);
    },

    /**
     * Same as String.padStart().
     * @return {string} a string of the specified length with the
     * pad string applied at the end of the current string
     */
    padStart: function(targetLength, padString) {
        return this.str.padStart(targetLength, padString);
    },

    /**
     * Same as String.repeat().
     * @return {string} a new string containing the specified number
     * of copies of the given string
     */
    repeat: function(count) {
        return this.str.repeat(count);
    },

    /**
     * Same as String.toLocaleLowerCase(). If the JS engine does not support this
     * method, you can use the ilib CaseMapper class instead.
     * @return {string} a new string representing the calling string
     * converted to lower case, according to any locale-sensitive
     * case mappings
     */
    toLocaleLowerCase: function(locale) {
        return this.str.toLocaleLowerCase(locale);
    },

    /**
     * Same as String.toLocaleUpperCase(). If the JS engine does not support this
     * method, you can use the ilib CaseMapper class instead.
     * @return {string} a new string representing the calling string
     * converted to upper case, according to any locale-sensitive
     * case mappings
     */
    toLocaleUpperCase: function(locale) {
        return this.str.toLocaleUpperCase(locale);
    },

    /**
     * Same as String.trim().
     * @return {string} a new string representing the calling string stripped
     * of whitespace from both ends.
     */
    trim: function() {
        return this.str.trim();
    },

    /**
     * Same as String.trimEnd().
     * @return {string} a new string representing the calling string stripped
     * of whitespace from its (right) end.
     */
    trimEnd: function() {
        return this.str.trimEnd();
    },

    /**
     * Same as String.trimRight().
     * @return {string} a new string representing the calling string stripped
     * of whitespace from its (right) end.
     */
    trimRight: function() {
        return this.str.trimRight();
    },

    /**
     * Same as String.trimStart().
     * @return {string} A new string representing the calling string stripped
     * of whitespace from its beginning (left end).
     */
    trimStart: function() {
        return this.str.trimStart();
    },

    /**
     * Same as String.trimLeft().
     * @return {string} A new string representing the calling string stripped
     * of whitespace from its beginning (left end).
     */
    trimLeft: function() {
        return this.str.trimLeft();
    },

    /**
     * Convert the character or the surrogate pair at the given
     * index into the string to a Unicode UCS-4 code point.
     * @private
     * @param {number} index index into the string
     * @return {number} code point of the character at the
     * given index into the string
     */
    _toCodePoint: function (index) {
        return IString.toCodePoint(this.str, index);
    },

    /**
     * Call the callback with each character in the string one at
     * a time, taking care to step through the surrogate pairs in
     * the UTF-16 encoding properly.<p>
     *
     * The standard Javascript String's charAt() method only
     * returns a particular 16-bit character in the
     * UTF-16 encoding scheme.
     * If the index to charAt() is pointing to a low- or
     * high-surrogate character,
     * it will return the surrogate character rather
     * than the the character
     * in the supplementary planes that the two surrogates together
     * encode. This function will call the callback with the full
     * character, making sure to join two
     * surrogates into one character in the supplementary planes
     * where necessary.<p>
     *
     * @param {function(string)} callback a callback function to call with each
     * full character in the current string
     */
    forEach: function(callback) {
        if (typeof(callback) === 'function') {
            var it = this.charIterator();
            while (it.hasNext()) {
                callback(it.next());
            }
        }
    },

    /**
     * Call the callback with each numeric code point in the string one at
     * a time, taking care to step through the surrogate pairs in
     * the UTF-16 encoding properly.<p>
     *
     * The standard Javascript String's charCodeAt() method only
     * returns information about a particular 16-bit character in the
     * UTF-16 encoding scheme.
     * If the index to charCodeAt() is pointing to a low- or
     * high-surrogate character,
     * it will return the code point of the surrogate character rather
     * than the code point of the character
     * in the supplementary planes that the two surrogates together
     * encode. This function will call the callback with the full
     * code point of each character, making sure to join two
     * surrogates into one code point in the supplementary planes.<p>
     *
     * @param {function(string)} callback a callback function to call with each
     * code point in the current string
     */
    forEachCodePoint: function(callback) {
        if (typeof(callback) === 'function') {
            var it = this.iterator();
            while (it.hasNext()) {
                callback(it.next());
            }
        }
    },

    /**
     * Return an iterator that will step through all of the characters
     * in the string one at a time and return their code points, taking
     * care to step through the surrogate pairs in UTF-16 encoding
     * properly.<p>
     *
     * The standard Javascript String's charCodeAt() method only
     * returns information about a particular 16-bit character in the
     * UTF-16 encoding scheme.
     * If the index is pointing to a low- or high-surrogate character,
     * it will return a code point of the surrogate character rather
     * than the code point of the character
     * in the supplementary planes that the two surrogates together
     * encode.<p>
     *
     * The iterator instance returned has two methods, hasNext() which
     * returns true if the iterator has more code points to iterate through,
     * and next() which returns the next code point as a number.<p>
     *
     * @return {Object} an iterator
     * that iterates through all the code points in the string
     */
    iterator: function() {
        /**
         */
        function _iterator (istring) {
            this.index = 0;
            this.hasNext = function () {
                return (this.index < istring.str.length);
            };
            this.next = function () {
                if (this.index < istring.str.length) {
                    var num = istring._toCodePoint(this.index);
                    this.index += ((num > 0xFFFF) ? 2 : 1);
                } else {
                    num = -1;
                }
                return num;
            };
        };
        return new _iterator(this);
    },

    /**
     * Return an iterator that will step through all of the characters
     * in the string one at a time, taking
     * care to step through the surrogate pairs in UTF-16 encoding
     * properly.<p>
     *
     * The standard Javascript String's charAt() method only
     * returns information about a particular 16-bit character in the
     * UTF-16 encoding scheme.
     * If the index is pointing to a low- or high-surrogate character,
     * it will return that surrogate character rather
     * than the surrogate pair which represents a character
     * in the supplementary planes.<p>
     *
     * The iterator instance returned has two methods, hasNext() which
     * returns true if the iterator has more characters to iterate through,
     * and next() which returns the next character.<p>
     *
     * @return {Object} an iterator
     * that iterates through all the characters in the string
     */
    charIterator: function() {
        /**
         */
        function _chiterator (istring) {
            this.index = 0;
            this.hasNext = function () {
                return (this.index < istring.str.length);
            };
            this.next = function () {
                var ch;
                if (this.index < istring.str.length) {
                    ch = istring.str.charAt(this.index);
                    if (IString._isSurrogate(ch) &&
                            this.index+1 < istring.str.length &&
                            IString._isSurrogate(istring.str.charAt(this.index+1))) {
                        this.index++;
                        ch += istring.str.charAt(this.index);
                    }
                    this.index++;
                }
                return ch;
            };
        };
        return new _chiterator(this);
    },

    /**
     * Return the code point at the given index when the string is viewed
     * as an array of code points. If the index is beyond the end of the
     * array of code points or if the index is negative, -1 is returned.
     * @param {number} index index of the code point
     * @return {number} code point of the character at the given index into
     * the string
     */
    codePointAt: function (index) {
        if (index < 0) {
            return -1;
        }
        var count,
            it = this.iterator(),
            ch;
        for (count = index; count >= 0 && it.hasNext(); count--) {
            ch = it.next();
        }
        return (count < 0) ? ch : -1;
    },

    /**
     * Return the number of code points in this string. This may be different
     * than the number of characters, as the UTF-16 encoding that Javascript
     * uses for its basis returns surrogate pairs separately. Two 2-byte
     * surrogate characters together make up one character/code point in
     * the supplementary character planes. If your string contains no
     * characters in the supplementary planes, this method will return the
     * same thing as the length() method.
     * @return {number} the number of code points in this string
     */
    codePointLength: function () {
        if (this.cpLength === -1) {
            var it = this.iterator();
            this.cpLength = 0;
            while (it.hasNext()) {
                this.cpLength++;
                it.next();
            };
        }
        return this.cpLength;
    }
};

// restore the constructor reference lost when the prototype was replaced with
// an object literal above; IStringFmt.formatChoice relies on this.constructor
// to create new IString instances without requiring IString.js itself
IString.prototype.constructor = IString;

Object.assign(IString.prototype, IStringFmt);

module.exports = IString;
