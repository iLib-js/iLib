/*
 * BreakIterator.js - A class that locates boundaries in text, and acts as an iterator
 * over chunks of text between those boundaries.
 *
 * Copyright © 2018, JEDLSoft
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

// !data workbreak.json

/* !depends
ilib.js
Locale.js
LocaleInfo.js
NormString.js
IString.js
CType.js
*/

var ilib = require("./ilib.js");
var Locale = require("./Locale.js");
var LocaleInfo = require("./LocaleInfo.js");
var NormString = require("./NormString.js");
var IString = require("./IString.js");
var CType = require("./CType.js");

function isNewLine(string) {
    var c = IString.toCodePoint(string, 0);
    return c === 0x0B || c === 0x0C || c === 0x85 || c === 0x2028 || c === 0x2029;
}

function isExtend(string) {
    var c = IString.toCodePoint(string, 0);
    
    CType._inRange(string, "Mc") // Spacing mark
    && c !== 0x200D
}

function tokenize(string) {
    
}

/**
 * @class A class that locates boundaries in text, and acts as an iterator
 * over chunks of text between those boundaries.
 *
 * The options parameter can be an object that contains the following
 * properties:
 *
 * <ul>
 * <li><i>type</i> - specify the type of the iterator desired. The
 * list of valid values is "character", "glyph", "word", "sentence",
 * "line", and "paragraph". Default is "character".
 *
 * <li><i>locale</i> - the locale of this iterator, which controls the
 * grammatical rules behind things like what is a word and what is
 * not, and which punctuation ends a sentence and what are the exceptions
 * to those rules. Default is the current locale.
 * 
 * <li><i>maxLength</i> - set the maximum number of characters in a line.
 * This parameter is ignored if the type is not given as "line". Default is 80.
 *
 * <li><i>onLoad</i> - a callback function to call when the iterator is fully
 * loaded. When the onLoad option is given, the break iterator will attempt to
 * load any missing locale data using the ilib loader callback.
 * When the constructor is done (even if the data is already preassembled), the
 * onLoad function is called with the current instance as a parameter, so this
 * callback can be used with preassembled or dynamic loading or a mix of the two.
 *
 * <li><i>sync</i> - tell whether to load any missing locale data synchronously or
 * asynchronously. If this option is given as "false", then the "onLoad"
 * callback must be given, as the instance returned from this constructor will
 * not be usable for a while.
 *
 * <li><i>loadParams</i> - an object containing parameters to pass to the
 * loader callback function when locale data is missing. The parameters are not
 * interpretted or modified in any way. They are simply passed along. The object
 * may contain any property/value pairs as long as the calling code is in
 * agreement with the loader callback function as to what those parameters mean.
 * </ul>
 *
 * The locale controls the grammatical rules behind things like what parts of
 * a string form a word and which do not, and which punctuation characters
 * end a sentence and what are the exceptions to those. The actual text boundaries
 * are calculated using the rules from the Unicode Standard Annex #29, Text
 * Boundaries, and from the Unicode Standard Annex #14, Line Breaking Properties.
 * These documents can be found at http://www.unicode.org/reports/tr14/ and
 * http://www.unicode.org/reports/tr29/ <p>
 *
 * The way this break iterator works can be summarized as follows:<p>
 *
 * <ol>
 * <li>Once the iterator is created, it is immutable after that. If the code
 * would like to iterate over a different string, a new iterator must be created.
 * <li>The beginning and the end of the text count as boundaries.
 * <li>The iterator can move forwards or backwards to boundaries
 * <li>The iterator has a position on one of the boundaries in the text, and
 * returns the text of the chunk between the current boundary and the next
 * or previous boundary.
 * <li>Chunks are always at least one character in length.
 * <li>When the iterator reaches the end of the text, the next method returns
 * undefined as the chunk. Similarly, when the iterator is at the beginning
 * of the text, the previous method returns undefined.
 * </ol>
 *
 * When the type is given as "line", the text boundaries correspond to the
 * position in the text where a line break should be inserted such that the
 * resulting lines would be less than the max number of characters per line.
 * If a word occurs which is longer than the max length, it will be put on a
 * line of its own with the length of the line exceeding the max length.
 *
 * @constructor
 * @param {String} string the string to iterate over
 * @param {Object=} options options controlling the construction of this instance, or
 * undefined to use the default options
 */
var BreakIterator = function (string, options) {
    var locale,
        type,
        sync = true,
        instance;

    this.maxLength = 80;
    
    if (options) {
        if (options.locale) {
            locale = (typeof(options.locale) === 'string') ? new Locale(options.locale) : options.locale;
        }

        type = options.type;

        if (typeof(options.sync) === 'boolean') {
            sync = options.sync;
        }
        
        if (typeof(options.maxLength) === "number" && options.maxLength > 0) {
            this.maxLength = options.maxLength;
        }
    }

    if (!locale) {
        locale = new Locale();  // default locale
    }

    if (!type) {
        new LocaleInfo(locale, {
            sync: sync,
            loadParams: options && options.loadParams,
            onLoad: function(info) {
            }
        });
    } else {
    }
};

/**
 * Return true if there is another chunk available between
 * the current boundary in the text and the next boundary
 * in the text.
 *
 * @returns {boolean} true if there is another chunk to
 * return, or false otherwise
 */
BreakIterator.prototype.hasNext = function() {
    return false;
};


/**
 * Return the chunk of text between the current boundary
 * and the next boundary and advance the current position
 * to the next boundary. If the iterator is at the last
 * position in the text and there are no more chunks left to
 * return, then this method returns "undefined".
 *
 * @returns {String|undefined} the chunk of text between
 * the current boundary and the next boundary
 */
BreakIterator.prototype.next = function() {
    return undefined;
};

/**
 * Return the type of the current chunk of text between 
 * the current boundary and the previous boundary. The return
 * value is either the name of type of the iterator (ie. "character"
 * or "word", etc.) or "other" for chunks that do not fit into
 * the type. If the  iterator is at the first
 * position in the text then there are no more chunks previous to
 * that, then this method returns "undefined".
 *
 * @returns {String|undefined} the type of the previous chunk
 */
BreakIterator.prototype.type = function() {
    return undefined;
};

/**
 * Reset the current position to the beginning of the
 * the string and return the first chunk of text in the
 * string. The current position is set to the first
 * boundary at the beginning of the string. If there
 * are no chunks of text in the string, this method
 * returns "undefined".
 *
 * @returns {String|undefined} the first chunk of text
 * in the string, or undefined if there are no chunks
 * of text in the string
 */
BreakIterator.prototype.first = function() {
    return undefined;
};

/**
 * Reset the current position to the end of the
 * the string and return the last chunk of text in the
 * string. The current position is set to the last boundary
 * of the text which is at end of the string after the last
 * chunk. If there are no chunks of text in the string,
 * this method returns "undefined".
 *
 * @returns {String|undefined} the last chunk of text
 * in the string, or undefined if there are no chunks
 * of text in the string
 */
BreakIterator.prototype.last = function() {
    return undefined;
};

/**
 * Return the chunk of text between the current boundary
 * and the previous boundary and rewind the current position
 * to the previous boundary. If the iterator is at the first
 * position in the text and there are no more previous chunks
 * left to return, then this method returns "undefined".
 *
 * @returns {String|undefined} the chunk of text between
 * the current boundary and the previous boundary
 */
BreakIterator.prototype.previous = function() {
    return undefined;
};

module.exports = BreakIterator;
