/*
 * BreakIteratorWord.js - A class that locates boundaries in text, and acts as an iterator
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
Utils.js
Locale.js
GlyphString.js
IString.js
SearchUtils.js
BreakIteratorFactory.js
*/

var ilib = require("./ilib.js");
var Utils = require("./Utils.js");
var Locale = require("./Locale.js");
var GlyphString = require("./GlyphString.js");
var IString = require("./IString.js");
var SearchUtils = require("./SearchUtils.js");
var BreakIteratorFactory = require("./BreakIteratorFactory.js");

/**
 * @class A class that locates boundaries in text, and acts as an iterator
 * over chunks of text between those boundaries.
 *
 * The options parameter can be an object that contains the following
 * properties:
 *
 * <ul>
 * <li><i>locale</i> - the locale of this iterator, which controls the
 * grammatical rules behind things like what is a word and what is
 * not, and which punctuation ends a sentence and what are the exceptions
 * to those rules. Default is the current locale.
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
 * @constructor
 * @param {String} string the string to iterate over
 * @param {Object=} options options controlling the construction of this instance, or
 * undefined to use the default options
 */
var BreakIteratorWord = function (string, options) {
    var locale,
        type,
        instance;

    this.maxLength = 80;
    this.sync = true;
    this.breakNumber = 0;
    this.string = string;

    if (options) {
        if (options.locale) {
            locale = (typeof(options.locale) === 'string') ? new Locale(options.locale) : options.locale;
        }

        if (typeof(options.sync) === 'boolean') {   
            this.sync = options.sync;
        }

        this.loadParams = options.loadParams;
    }

    if (!locale) {
        locale = new Locale();  // default locale
    }

    Utils.loadData({
        object: "BreakIteratorWord",
        locale: this.locale,
        name: "wordbreak.json",
        sync: this.sync,
        loadParams: this.loadParams,
        callback: ilib.bind(this, function (info) {
            this.info = info;
            
            this._parse(ilib.bind(this, function() {
                if (options && typeof(options.onLoad) === "function") {
                    options.onLoad(this);
                }
            }));
            
            /*
            if (!this.type) {
                new LocaleInfo(locale, {
                    sync: sync,
                    loadParams: options && options.loadParams,
                    onLoad: function(info) {
                    }
                });
            } else {
            }
            */
        })
    });
};

var compare = function(range, target) {
    if (target < range.s) {
        return range.s - target;
    }
    var top = (typeof(range.e) !== "undefined") ? range.e : range.s;
    return target > top ? top - target : 0;
};

/**
 * @private
 * Convert the given character into a token.
 * 
 * @param {number} codepoint the codepoint of the character to convert
 * @returns {string} the name of the token corresponding
 * to the character
 */
BreakIteratorWord.prototype._tokenize = function(codepoint) {
    var tokenEntry = SearchUtils.bsearch(codepoint, this.info.properties, compare);
    return tokenEntry > -1 &&
        tokenEntry < this.info.properties.length && 
        compare(this.info.properties[tokenEntry], codepoint) === 0 && 
        this.info.properties[tokenEntry].t;
};

/**
 * @private
 * Parse the given string according to the rules and properties of the
 * current iterator and store the array of break indices in the
 * current iterator object.
 *
 * @param {Function} cb a function to call when the parsing is done
 */
BreakIteratorWord.prototype._parse = function(cb) {
    var gs = new GlyphString(this.string, {
        locale: this.locale,
        sync: this.sync,
        loadParams: this.loadParams,
        onLoad: ilib.bind(this, function(gs) {
            var it = gs.charIterator();
            var state = "sot"; // start of text
            this.breaks = [];
            var index = 0;
            var buffer, nexttoken;
            
            while (buffer || it.hasNext()) {
                var ch = buffer || it.next();
                buffer = undefined;

                var token = this._tokenize(IString.toCodePoint(ch));
                var current = this.info.rules[state];

                // finite state machine
                if (!token || (!this.info.rules.Any[token] && !current[token] && !current.Any)) {
                    this.breaks.push(index);
                } else if (!this.info.rules.Any[token]) {
                    if (typeof(current[token]) === "object") {
                        buffer = it.next();
                        nexttoken = this._tokenize(IString.toCodePoint(buffer));
    
                        if (current[token][nexttoken]) {
                            token = nexttoken;
                            buffer = undefined;
                        } else {
                            this.breaks.push(index);
                        }
                    }
                }

                state = token || "Any";
                index++;
            }
            
            cb();
        })
    });
};

/**
 * Return true if there is another chunk available between
 * the current boundary in the text and the next boundary
 * in the text.
 *
 * @returns {boolean} true if there is another chunk to
 * return, or false otherwise
 */
BreakIteratorWord.prototype.hasNext = function() {
	return this.breakNumber < this.breaks.length;
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
BreakIteratorWord.prototype.next = function() {
    var ret;

    if (this.breakNumber < this.breaks.length) {
        ret = this.string.substring(this.breaks[this.breakNumber], this.breaks[++this.breakNumber]);
    }

    return ret;
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
BreakIteratorWord.prototype.first = function() {
    this.breakNumber = 0;
    return this.string.substring(0, this.breaks[1]);
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
BreakIteratorWord.prototype.last = function() {
    this.breakNumber = this.breaks.length;
    return this.string.substring(this.breaks[this.breakNumber-2], this.breaks[this.breakNumber-1]);
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
BreakIteratorWord.prototype.previous = function() {
    var ret;
    if (this.breakNumber > 0) {
        ret = this.string.substring(this.breaks[this.breakNumber-1], this.breaks[this.breakNumber--]);
    }
    return ret;
};

BreakIteratorFactory._constructors.word = BreakIteratorWord;

module.exports = BreakIteratorWord;
