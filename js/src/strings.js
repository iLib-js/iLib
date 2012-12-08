/*
 * strings.js - ilib string subclass definition
 * 
 * Copyright © 2012, JEDLSoft
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

// !depends ilibglobal.js locale.js

// !data norm.nfd norm.nfkd norm.ccc

/**
 * @class
 * Create a new string instance. This string inherits from the Javascript
 * String class, and adds two more methods, fmt and fmtChoice. It can be
 * used anywhere that a normal Javascript string is used. The formatting
 * methods are of course most useful when localizing strings in an app
 * or web site in combination with the ilib.ResBundle class.<p>
 * 
 * Depends directive: !depends strings.js
 * 
 * @constructor
 * @param {string|ilib.String=} string initialize this instance with this string 
 */
ilib.String = function (string) {
	if (typeof(string) === 'object') {
		this.str = string.str;
	} else if (typeof(string) === 'string') {
		this.str = new String(string);
	} else {
		this.str = "";
	}
	this.length = this.str.length;
	this.cpLength = -1;
};

/**
 * @static
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
 * ilib.String.codePointAt() to access code points in a string, or use 
 * an iterator to walk through the code points in a string. 
 * 
 * @param {number} codepoint UCS-4 code point to convert to a character
 * @returns {string} a string containing the character represented by the codepoint
 */
ilib.String.fromCodePoint = function (codepoint) {
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
 * @private
 * @static
 *
 * Algorithmically decompose a precomposed Korean syllabic Hangul 
 * character into its individual combining Jamo characters. The given 
 * character must be in the range of Hangul characters U+AC00 to U+D7A3.
 * 
 * @param {string} ch Korean Hangul characters to decompose
 * @returns {string} the decomposed string of Jamo characters
 */
ilib.String._decomposeHangul = function (ch) {
	var cp = ch.charCodeAt(0);
	var sindex = cp - 0xAC00;
	if (sindex < 0 || sindex > 11172) {
		return ch;
	}
	var result = String.fromCharCode(0x1100 + sindex / 588) + 
			String.fromCharCode(0x1161 + (sindex % 588) / 28);
	var t = sindex % 28;
	if (t !== 0) {
		result += String.fromCharCode(0x11A7 + t);
	}
	return result;
};

/**
 * @private
 * @static
 *
 * Algorithmically compose a string of combining Jamo characters into
 * a precomposed Korean syllabic Hangul character. The given string 
 * must contain characters in the range of Jamo characters U+1100 to U+3CA4.
 * 
 * @param {string} str Korean Jamo characters to compose
 * @returns {string} the composed string of Hangul characters
 */
ilib.String._composeJamo = function (str) {
	if (typeof(str) !== 'string' || str.length === 0) {
		return "";
	}
	
	var result = str.charAt(0);
	var last = str.charCodeAt(0);
	
	for (var i = 1; i < str.length; i++) {
		var c = str.charCodeAt(i);
		var lindex = last - 0x1100;
		if (lindex >= 0 && lindex < 19) {
			var vindex = c - 0x1161;
			if (vindex >= 0 && vindex < 21) {
				last = 0xAC00 + (lindex * 21 + vindex) * 28;
				result += last;
			}
		}
	}
	
	return result;
};

/**
 * @private
 * @static
 * 
 * Expand one character according to the given canonical and 
 * compatibility mappings.
 * @param {string} ch character to map
 * @param {Object} canon the canonical mappings to apply
 * @param {Object=} compat the compatibility mappings to apply, or undefined
 * if only the canonical mappings are needed
 * @returns {string} the mapped character
 */
ilib.String._expand = function (ch, canon, compat) {
	var i, 
		expansion = "",
		cp = ch.charCodeAt(0);
	if (cp >= 0xAC00 && cp <= 0xD7A3) {
		expansion = ilib.String._decomposeHangul(ch);
	} else {
		var result = canon[ch];
		if (!result && compat) {
			result = compat[ch];
		}
		if (result && result !== ch) {
			for (i = 0; i < result.length; i++) {
				expansion += ilib.String._expand(result[i], canon, compat);
			}
		} else {
			expansion = ch;
		}
	}
	return expansion;
};

/**
 * @private
 * @static
 * 
 * Return true if the given character is a Unicode surrogate character,
 * either high or low.
 * 
 * @param {String} ch character to check
 * @returns {boolean} true if the character is a surrogate
 */
ilib.String.isSurrogate = function (ch) {
	var n = ch.charCodeAt(0);
	return ((n >= 0xDC00 && n <= 0xDFFF) || (n >= 0xD800 && n <= 0xDBFF));
};


ilib.String.prototype = {
	/**
	 * @private
	 * Return the length of this string in characters. This function defers to the regular
	 * Javascript string class in order to perform the length function. Please note that this
	 * method is a real method, whereas the length property of Javascript strings is 
	 * implemented by native code and appears as a property.<p>
	 * 
	 * Example:
	 * 
	 * <pre>
	 * var str = new ilib.String("this is a string");
	 * console.log("String is " + str._length() + " characters long.");
	 * </pre>
	 */
	_length: function () {
		return this.str.length;
	},
	
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
	 * var str = new ilib.String("There are {num} objects.");
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
	 * var str = new ilib.String("There are {num} objects in the {container}.");
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
	 * @return a new ilib.String instance with as many replacement parameters filled
	 * out as possible with real values.
	 */
	format: function (params) {
		var formatted = this.str;
		if (params) {
			for (var p in params) {
				if (typeof(params[p]) !== 'undefined') {
					formatted = formatted.replace("\{"+p+"\}", params[p]);
				}
			}
		}
		return formatted.toString();
	},
	
	/**
	 * Format a string as one of a choice of strings dependent on the value of
	 * a particular argument index.<p>
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
	 * var str = new ilib.String("0#There are no objects.|1#There is one object.|2#There are {number} objects.");
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
	 * using the fmt() method above and the params argument as a source of values
	 * to use while formatting those variables.<p>
	 * 
	 * If the criterion for a particular choice is empty, that choice will be used
	 * as the default one for use when none of the other choice's criteria match.<p>
	 * 
	 * Example string:
	 * 
	 * <pre>
	 * var num = 22;
	 * var str = new ilib.String("0#There are no objects.|1#There is one object.|#There are {number} objects.");
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
	 * </ul>
	 * 
	 * If the argument index is a boolean, the values "true" and "false" may appear
	 * as the choice patterns.<p>
	 * 
	 * If the argument index is of type string, then the choice patterns may contain
	 * regular expressions, or static strings as degenerate regexps.
	 * 
	 * @param {*} argIndex The index into the choice array of the current parameter
	 * @param {Object} params The hash of parameter values that replace the replacement 
	 * variables in the string
	 * @throws "syntax error in choice format pattern: " if there is a syntax error
	 * @returns {string} the formatted string
	 */
	formatChoice: function(argIndex, params) {
		var choices = this.str.split("|");
		var type = typeof(argIndex);
		var limits = [];
		var strings = [];
		var i;
		var parts;
		var limit;
		var arg;
		var result = undefined;
		var defaultCase = "";
	
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
		
		// then apply the argument index
		for (i = 0; i < limits.length; i++) {
			if (limits[i].length === 0) {
				// this is default case
				defaultCase = new ilib.String(strings[i]);			
			} else {
				switch (type) {
					case 'number':
						arg = parseInt(argIndex, 10);
											
						if (limits[i].substring(0,2) === "<=") {						
							limit = parseFloat(limits[i].substring(2));
							if (arg <= limit) {
								result = new ilib.String(strings[i]);
								i = limits.length;
							}
						} else if (limits[i].substring(0,2) === ">=") {						
							limit = parseFloat(limits[i].substring(2));
							if (arg >= limit) {
								result = new ilib.String(strings[i]);
								i = limits.length;
							}
						} else if (limits[i].charAt(0) === "<") {						
							limit = parseFloat(limits[i].substring(1));
							if (arg < limit) {
								result = new ilib.String(strings[i]);
								i = limits.length;
							}
						} else if (limits[i].charAt(0) === ">") {						
							limit = parseFloat(limits[i].substring(1));
							if (arg > limit) {
								result = new ilib.String(strings[i]);
								i = limits.length;
							}
						} else {
							var dash = limits[i].indexOf("-");
							if (dash !== -1) {							
								// range
								var start = limits[i].substring(0, dash);
								var end = limits[i].substring(dash+1);							
								if (arg >= parseInt(start, 10) && arg <= parseInt(end, 10)) {								
									result = new ilib.String(strings[i]);
									i = limits.length;
								}
							} else if (arg === parseInt(limits[i], 10)) {							
								// exact amount
								result = new ilib.String(strings[i]);
								i = limits.length;
							}
						}
						break;
					case 'boolean':					
						if (limits[i] === "true" && argIndex === true) {						
							result = new ilib.String(strings[i]);
							i = limits.length;
						} else if (limits[i] === "false" && argIndex === false) {						
							result = new ilib.String(strings[i]);
							i = limits.length;
						}
						break;
					case 'string':					
						var regexp = new RegExp(limits[i], "i");
						if (regexp.test(argIndex)) {
							result = new ilib.String(strings[i]);
							i = limits.length;
						}
						break;
					case 'object':
						throw "syntax error: fmtChoice parameter for the argument index cannot be an object";
				}
			}
		}
		
		if (!result) {		
			result = defaultCase || new ilib.String("");
		}
		
		result = result.format(params);
		
		return result.toString();
	},
	
	/**
	 * Perform a Unicode normalization upon the string and return the result.
	 * 
	 * <h2>Forms</h2>
	 * 
	 * The forms of possible normalizations are defined by the <a 
	 * href="http://www.unicode.org/reports/tr15/">Unicode Standard
	 * Annex (UAX) 15</a>. The form parameter may have one of the
	 * following values:
	 * 
	 * <ul>
	 * <li>nfd - Canonical decomposition. This decomposes characters into
	 * their exactly equivalent forms. For example, "&uuml;" would decompose
	 * into a "u" followed by the combining diaeresis character. 
	 * <li>nfc - Canonical decomposition followed by canonical composition.
	 * This decomposes and then recomposes character into their shortest
	 * exactly equivalent forms by recomposing as many combining characters
	 * as possible. For example, "&uuml;" followed by a combining 
	 * macron character would decompose into a "u" followed by the combining 
	 * macron characters the combining diaeresis character, and then be recomposed into
	 * the u with macron and diaeresis "&#x1E7B;" character. The reason that
	 * the "nfc" form decomposes and then recomposes is that combining characters
	 * have a specific order under the Unicode Normalization Algorithm, and
	 * partly composed characters such as the "&uuml;" followed by combining
	 * marks may change the order of the combining marks when decomposed and
	 * recomposed.
	 * <li>nfkd - Compatibility decomposition. This decomposes characters
	 * into compatible forms that may not be exactly equivalent semantically,
	 * as well as performing canonical decomposition as well.
	 * For example, the "&oelig;" ligature character decomposes to the two
	 * characters "oe" because they are compatible even though they are not 
	 * exactly the same semantically. 
	 * <li>nfkc - Compatibility decomposition followed by canonical composition.
	 * This decomposes characters into compatible forms, then recomposes
	 * characters using the canonical composition. That is, it breaks down
	 * characters into the compatible forms, and then recombines all combining
	 * marks it can with their base characters. For example, the character
	 * "&#x01FD;" would be normalized to "a&eacute;" by first decomposing
	 * the character into "a" followed by "e" followed by the combining acute accent
	 * combining mark, and then recomposed to an "a" followed by the "e"
	 * with acute accent.
	 * </ul>
	 * 
	 * <h2>Operation</h2>
	 * 
	 * Two strings a and b can be said to be canonically equivalent if 
	 * normalize(a) = normalize(b)
	 * under the nfc normalization form. Two strings can be said to be compatible if
	 * normalize(a) = normalize(b) under the nfkc normalization form.<p>
	 * 
	 * The canonical normalization is often used to see if strings are 
	 * equivalent to each other, and thus is useful when implementing parsing 
	 * algorithms or exact matching algorithms. It can also be used to ensure
	 * that any string output produces a predictable sequence of characters.<p>
	 * 
	 * Compatibility normalization 
	 * does not always preserve the semantic meaning of all the characters, 
	 * although this is sometimes the behaviour that you are after. It is useful, 
	 * for example, when doing searches of user-input against text in documents 
	 * where the matches are supposed to "fuzzy". In this case, both the query
	 * string and the document string would be mapped to their compatibility 
	 * normalized forms, and then compared.<p>
	 * 
	 * Compatibility normalization also does not guarantee round-trip conversion
	 * to and from legacy character sets as the normalization is "lossy". It is 
	 * akin to doing a lower- or upper-case conversion on text -- after casing,
	 * you cannot tell what case each character is in the original string. It is 
	 * good for matching and searching, but it rarely good for output because some 
	 * distinctions or meanings in the original text have been lost.<p>
	 * 
	 * Note that W3C normalization for HTML also escapes and unescapes
	 * HTML character entities such as "&amp;uuml;" for u with diaeresis. This
	 * method does not do such escaping or unescaping. If normalization is required
	 * for HTML strings with entities, unescaping should be performed on the string 
	 * prior to calling this method.<p>
	 * 
	 * <h2>Data</h2>
	 * 
	 * Normalization requires a large amount of mapping data, much of which you may 
	 * not need for the characters expected in your texts. It is possible to assemble
	 * a copy of ilib that saves space by only including normalization data for 
	 * those scripts that you expect to encounter in your data.<p>
	 * 
	 * The normalization data is organized by normalization form and within there
	 * by script. To include the normalization data for a particular script with
	 * a particular normalization form, use the directive:
	 * 
	 * <pre><code>
	 * !data &lt;form&gt;/&lt;script&gt;
	 * </code></pre>
	 * 
	 * Where &lt;form&gt is the normalization form ("nfd", "nfc", "nfkd", or "nfkc"), and
	 * &lt;script&gt; is the ISO 15924 code for the script you would like to
	 * support. Example: to load in the NFC data for Cyrillic, you would use:
	 * 
	 * <pre><code>
	 * !data nfc/Cyrl
	 * </code></pre>
	 * 
	 * Note that because certain normalization forms include others in their algorithm, 
	 * their data also depends on the data for the other forms. For example, if you 
	 * include the "nfc" data for a script, you will automatically get the "nfd" data 
	 * for that same script as well because the NFC algorithm does NFD normalization 
	 * first. Here are the dependencies:<p>
	 * 
	 * <ul>
	 * <li>NFD -> no dependencies
	 * <li>NFC -> NFD
	 * <li>NFKD -> NFD
	 * <li>NFKC -> NFKD, NFD, NFC
	 * </ul>
	 * 
	 * A special value for the script is "all" which will cause the data for all scripts
	 * to be loaded for that normalization form. This would be useful if you know that
	 * you are going to normalize a lot of multilingual text or cannot predict which scripts
	 * there are in the input.<p>
	 * 
	 * By default, only the data for the Latin script (ISO code "Latn") is automatically 
	 * included in the preassembled ilib file. 
	 * If you would like to normalize strings with other scripts, you must assemble
	 * your own copy of ilib and explicitly include the normalization data
	 * for those scripts. <p>
	 * 
	 * If characters are encountered for which there are no normalization data, they
	 * will be passed through to the output string unmodified.
	 * 
	 * @param {string} form The type of normalization requested
	 * @returns {ilib.String} a new instance of an ilib.String that has been normalized
	 * according to the requested form. The current instance is not modified.
	 */
	normalize: function (form) {
		var i, j, k, str = "";
		
		if (typeof(form) !== 'string' || this.str.length === 0) {
			return new ilib.String(this.str);
		}
		
		var nfc = false,
			nfkd = false;
		
		switch (form) {
		default:
			break;
			
		case "nfc":
			nfc = true;
			break;
			
		case "nfkd":
			nfkd = true;
			break;
			
		case "nfkc":
			nfkd = true;
			nfc = true;
			break;
		}

		// decompose
		var decomp = "";
		
		if (nfkd && ilib.data.norm.nfd && ilib.data.norm.nfkd) {
			var ch, it = this.charIterator();
			while (it.hasNext()) {
				ch = it.next();
				decomp += ilib.String._expand(ch, ilib.data.norm.nfd, ilib.data.norm.nfkd);
			}
		} else if (ilib.data.norm.nfd) {
			var ch, it = this.charIterator();
			while (it.hasNext()) {
				ch = it.next();
				decomp += ilib.String._expand(ch, ilib.data.norm.nfd);
			}
		} else {
			// no decomposition available?
			decomp = this.str;
		}

		// now put the combining marks in a fixed order by 
		// sorting on the combining class
		function compareByCCC(left, right) {
			return ilib.data.norm.ccc[left] - ilib.data.norm.ccc[right]; 
		}
		
		var dstr = new ilib.String(decomp);
		var c, it = dstr.charIterator();
		var start;
		
		while (it.hasNext()) {
			start = it.index;
			c = it.next();
			if (typeof(ilib.data.norm.ccc[c]) !== 'undefined' && ilib.data.norm.ccc[c] !== 0) {
				// found a non-starter... rearrange all the non-starters until the next starter
				var cpArray = [];
				var end = start;
				while (typeof(c) !== 'undefined' &&
						typeof(ilib.data.norm.ccc[c]) !== 'undefined' && 
						ilib.data.norm.ccc[c] !== 0) {
					cpArray.push(c);
					end = it.index;
					c = it.next();
				}
				
				// simple sort of the non-starter chars
				if (cpArray.length > 1) {
					cpArray.sort(compareByCCC);
					decomp = decomp.substring(0,start) + cpArray.join("") + decomp.substring(end);
				}
			}
		}
		
		str = decomp;
		
		/* finally, compose if necessary
		if (nfc) {
			
		}
		*/
		
		return new ilib.String(str || "");
	},
	
	// delegates
	toString: function () {
		return this.str.toString();
	},
	valueOf: function () {
		return this.str.valueOf();
	},
	charAt: function(index) {
		return this.str.charAt(index);
	},
	charCodeAt: function(index) {
		return this.str.charCodeAt(index);
	},
	concat: function(strings) {
		return this.str.concat(strings);
	},
	indexOf: function(searchValue, start) {
		return this.str.indexOf(searchValue, start);
	},
	lastIndexOf: function(searchValue, start) {
		return this.str.lastIndexOf(searchValue, start);
	},
	match: function(regexp) {
		return this.str.match(regexp);
	},
	replace: function(searchValue, newValue) {
		return this.str.replace(searchValue, newValue);
	},
	search: function(regexp) {
		return this.str.search(regexp);
	},
	slice: function(start, end) {
		return this.str.slice(start, end);
	},
	split: function(separator, limit) {
		return this.str.split(separator, limit);
	},
	substr: function(start, length) {
		return this.str.substr(start, length);
	},
	substring: function(from, to) {
		return this.str.substring(from, to);
	},
	toLowerCase: function() {
		return this.str.toLowerCase();
	},
	toUpperCase: function() {
		return this.str.toUpperCase();
	},
	toLocaleLowerCase: function() {
		// TODO make this sensitive to the default ilib locale
		return this.str.toLowerCase();
	},
	toLocaleUpperCase: function() {
		// TODO make this sensitive to the default ilib locale
		return this.str.toUpperCase();
	},
	
	/**
	 * @private
	 * Convert the character or the surrogate pair at the given
	 * index into the string to a Unicode UCS-4 code point.
	 * @param {number} index index into the string
	 * @returns {number} code point of the character at the
	 * given index into the string
	 */
	_toCodePoint: function (index) {
		if (this.str.length === 0) {
			return -1;
		}
		var code = -1, high = this.str.charCodeAt(index);
		if (high >= 0xD800 && high <= 0xDBFF) {
			if (this.str.length > index+1) {
				var low = this.str.charCodeAt(index+1);
				if (low >= 0xDC00 && low <= 0xDFFF) {
					code = (((high & 0x3C0) >> 6) + 1) << 16 |
						(((high & 0x3F) << 10) | (low & 0x3FF));
				}
			}
		} else {
			code = high;
		}
		
		return code;
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
	 * @returns {Object} an iterator 
	 * that iterates through all the code points in the string
	 */
	iterator: function() {
		/**
		 * @constructor
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
	 * @returns {Object} an iterator 
	 * that iterates through all the characters in the string
	 */
	charIterator: function() {
		/**
		 * @constructor
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
					if (ilib.String.isSurrogate(ch) && 
							this.index+1 < istring.str.length && 
							ilib.String.isSurrogate(istring.str.charAt(this.index+1))) {
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
	 * @returns {number} the number of code points in this string
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