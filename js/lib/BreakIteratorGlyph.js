/*
 * BreakIteratorGlyph.js - A class that locates character boundaries in text, and acts 
 * as an iterator over chunks of text between those boundaries.
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

/* !depends
ilib.js
GlyphString.js
*/

var ilib = require("./ilib.js");
var GlyphString = require("./GlyphString.js");
var BreakIteratorFactory = require("./BreakIteratorFactory.js");

/**
 * @class A class that locates character boundaries in text, and acts as an iterator
 * over chunks of text between those boundaries.
 *
 * The options parameter can be an object that contains the following
 * properties:
 *
 * <ul>
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
var BreakIteratorGlyph = function (string, options) {
    this.sync = true;
    this.breakNumber = 0;
    this.string = new GlyphString(string, options);

    if (options) {
        if (typeof(options.sync) === 'boolean') {
            this.sync = options.sync;
        }

        this.loadParams = options.loadParams;
    }

    var it = this.string.charIterator();
    
    this.boundaries = [];
    
    while (it.hasNext()) {
        this.boundaries.push(it.next());
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
BreakIteratorGlyph.prototype.hasNext = function() {
	return this.breakNumber < this.boundaries.length;
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
BreakIteratorGlyph.prototype.next = function() {
    var ret;
    if (this.breakNumber < this.boundaries.length) {
        ret = this.boundaries[this.breakNumber++];
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
BreakIteratorGlyph.prototype.first = function() {
    this.breakNumber = 0;
    return this.boundaries[0];
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
BreakIteratorGlyph.prototype.last = function() {
    this.breakNumber = this.boundaries.length - 1;
    return this.boundaries[this.breakNumber];
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
BreakIteratorGlyph.prototype.previous = function() {
    var ret;
    if (this.breakNumber > 0) {
        ret = this.boundaries[--this.breakNumber];
    }
    return ret;
};

BreakIteratorFactory._constructors.glyph = BreakIteratorGlyph;

module.exports = BreakIteratorGlyph;
