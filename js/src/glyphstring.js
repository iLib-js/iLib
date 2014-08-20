/*
 * glyphstring.js - ilib string subclass that allows you to access 
 * whole glyphs at a time
 * 
 * Copyright © 2014, JEDLSoft
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

// !depends strings.js

/**
 * Create a new glyph string instance. This string inherits from 
 * the ilib.String class, and adds methods that allow you to access
 * whole glyphs at a time. <p>
 * 
 * In Unicode, various accented characters can be created by using
 * a base character and one or more combining characters following
 * it. These appear on the screen to the user as a single glyph.
 * For example, the Latin character "a" (U+0061) followed by the
 * combining diaresis character "¨" (U+0308) combine together to
 * form the "a with diaresis" glyph "ä", which looks like a single
 * character on the screen.<p>
 * 
 * The big problem with combining characters for web developers is
 * that many CSS engines do not ellipsize text between glyphs. They
 * only deal with single Unicode characters. So if a particular space 
 * only allows for 4 characters, the CSS engine will truncate a
 * string at 4 Unicode characters and then add the ellipsis (...)
 * character. What if the fourth Unicode character is the "a" and
 * the fifth one is the diaresis? Then a string like "xxxäxxx" that
 * is ellipsized at 4 characters will appear as "xxxa..." on the 
 * screen instead of "xxxä...".<p>
 * 
 * In the Latin script as it is commonly used, it is not so common
 * to form accented characters using combining accents, so the above
 * example is mostly for illustrative purposes. It is not unheard of
 * however. The situation is much, much worse in scripts such as Thai and 
 * Devanagari that normally make very heavy use of combining characters.
 * These scripts do so because Unicode does not include pre-composed 
 * versions of the accented characters like it does for Latin, so 
 * combining accents are the only way to create these accented and 
 * combined versions of the characters.<p>
 * 
 * The solution to thise problem is not to use the the CSS property 
 * "text-overflow: ellipsis" in your web site, ever. Instead, use
 * a glyph string to truncate text between glyphs instead of between
 * characters.<p>
 * 
 * Glyph strings are also useful for truncation, hyphenation, and 
 * line wrapping, as all of these should be done between glyphs instead
 * of between characters.<p>
 * 
 * The options parameter is optional, and may contain any combination
 * of the following properties:<p>
 * 
 * <ul>
 * <li><i>onLoad</i> - a callback function to call when the locale data are
 * fully loaded. When the onLoad option is given, this object will attempt to
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
 * 
 * Depends directive: !depends glyphstring.js
 * 
 * @class
 * @constructor
 * @param {string|ilib.String=} str initialize this instance with this string 
 */
ilib.GlyphString = function (str, options) {
	ilib.GlyphString.baseConstructor.call(this, str);
	
	var sync = true;
	var loadParams = {};
	if (options) {
		if (typeof(options.sync) === 'boolean') {
			sync = options.sync;
		}
		if (options.loadParams) {
			loadParams = options.loadParams;
		}
	}
	
	if (typeof(ilib.data.norm.ccc) === 'undefined') {
		ilib.loadData({
			object: ilib.GlyphString, 
			locale: "-", 
			name: "norm.ccc.json",
			nonlocale: true,
			sync: sync, 
			loadParams: loadParams, 
			callback: ilib.bind(this, function (ccc) {
				ilib.data.norm.ccc = ccc;
				if (options && typeof(options.onLoad) === 'function') {
					options.onLoad(this);
				}
			})
		});
	}
};

ilib.GlyphString.prototype = new ilib.String();
ilib.GlyphString.prototype.constructor = ilib.GlyphString;
ilib.GlyphString.baseConstructor = ilib.String;
ilib.GlyphString.prototype.parent = ilib.String.prototype;

ilib.GlyphString.prototype.iterator = function () {

};

/**
 * Return an iterator that will step through all of the characters
 * in the string one at a time, taking care to step through decomposed 
 * characters and through surrogate pairs in the UTF-16 encoding 
 * as single characters. <p>
 * 
 * The GlyphString class will return decomposed Unicode characters
 * as a single unit that a user might see on the screen as a single
 * glyph. If the 
 * next character in the iteration is a base character and it is 
 * followed by combining characters, the base and all its following 
 * combining characters are returned as a single unit.<p>
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
 * @override
 * @return {Object} an iterator 
 * that iterates through all the characters in the string
 */
ilib.GlyphString.prototype.charIterator = function() {
	var it = this.parent.charIterator.call(this);
	
	/**
	 * @constructor
	 */
	function _chiterator (istring) {
		this.index = 0;
		this.hasNext = function () {
			return !!this.nextChar || it.hasNext();
		};
		this.next = function () {
			var ch = this.nextChar || it.next(),
				prevCcc = ilib.data.norm.ccc[ch],
				nextCcc,
				composed = ch;
			
			this.nextChar = undefined;
			
			if (ilib.data.norm.ccc && 
					(typeof(ilib.data.norm.ccc[ch]) === 'undefined' || ilib.data.norm.ccc[ch] === 0)) {
				// found a starter... find all the non-starters until the next starter. Must include
				// the next starter because under some odd circumstances, two starters sometimes recompose 
				// together to form another character
				var notdone = true;
				while (it.hasNext() && notdone) {
					this.nextChar = it.next();
					nextCcc = this.ccc[this.nextChar];
					if (typeof(ilib.data.norm.ccc[this.nextChar]) !== 'undefined' && nextCcc !== 0) {
						ch += this.nextChar;
						this.nextChar = undefined;
					} else {
						// found the next starter. See if this can be composed with the previous starter
						var testChar = ilib.GlyphString._compose(composed, this.nextChar);
						if (prevCcc === 0 && typeof(testChar) !== 'undefined') { 
							// not blocked and there is a mapping 
							composed = testChar;
							ch += this.nextChar;
							this.nextChar = undefined;
						} else {
							// finished iterating, leave this.nextChar for the next next() call 
							notdone = false;
						}
					}
					prevCcc = nextCcc;
				}
			}
			return ch;
		};
	};
	return new _chiterator(this);
};

