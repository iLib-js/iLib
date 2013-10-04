/*
 * normstring.js - ilib normalized string subclass definition
 * 
 * Copyright © 2013, JEDLSoft
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
 * @class
 * Create a new normalized string instance. This string inherits from 
 * the ilib.String class, and adds the normalize method. It can be
 * used anywhere that a normal Javascript string is used. <p>
 * 
 * Depends directive: !depends normstring.js
 * 
 * @constructor
 * @param {string|ilib.String=} str initialize this instance with this string 
 */
ilib.NormString = function (str) {
	ilib.NormString.baseConstructor.call(this, str);
	
};
ilib.NormString.prototype = new ilib.String();
ilib.NormString.prototype.constructor = ilib.NormString;
ilib.NormString.baseConstructor = ilib.String;
ilib.NormString.prototype.parent = ilib.String.prototype;

/**
 * Initialize the normalized string routines statically. This
 * is intended to be called in a dynamic-load version of ilib
 * to load the data need to normalize strings before any instances
 * of ilib.NormString are created.<p>
 * 
 * The options parameter may contain any of the following properties:
 * 
 * <ul>
 * <li><i>form</i> - {string} the normalization form to load
 * <li><i>script</i> - {string} load the normalization for this script. If the 
 * script is given as "all" then the normalization data for all scripts
 * is loaded at the same time
 * <li><i>sync</i> - {boolean} whether to load the files synchronously or not
 * <li><i>loadParams</i> - {Object} parameters to the loader function
 * <li><i>onLoad</i> - {function()} a function to call when the 
 * files are done being loaded
 * </ul>
 * 
 * @param {Object} options an object containing properties that govern 
 * how to initialize the data
 */
ilib.NormString.init = function(options) {
	if (!ilib._load || typeof(ilib._load) !== 'function') {
		// can't do anything
		return;
	}
	var form = "nfkc";
	var script = "all";
	var sync = true;
	var onLoad = undefined;
	var loadParams = undefined;
	if (options) {
		form = options.form || "nfkc";
		script = options.script || "all";
		sync = typeof(options.sync) !== 'undefined' ? options.sync : true;
		onLoad = typeof(options.onLoad) === 'function' ? options.onLoad : undefined;
		if (options.loadParams) {
			loadParams = options.loadParams;
		}
	}
	var formDependencies = {
		"nfd": ["nfd"],
		"nfc": ["nfc", "nfd"],
		"nfkd": ["nfkd", "nfd"],
		"nfkc": ["nfkd", "nfd", "nfc"]
	};
	var files = ["norm.ccc.json"];
	var forms = formDependencies[form];
	for (var f in forms) {
		files.push(forms[f] + "/" + script + ".json");
	}
	
	ilib._load(files, sync, loadParams, function(arr) {
		ilib.data.norm.ccc = arr[0];
		for (var i = 1; i < arr.length; i++) {
			if (typeof(arr[i]) !== 'undefined') {
				ilib.data.norm[forms[i-1]] = arr[i];
			}
		}
		
		if (onLoad) {
			onLoad(arr);
		}
	});
};

/**
 * @private
 * @static
 * 
 * Return true if the given character is a leading Jamo (Choseong) character.
 * 
 * @param {number} n code point to check
 * @return {boolean} true if the character is a leading Jamo character, 
 * false otherwise
 */
ilib.NormString._isJamoL = function (n) {
	return (n >= 0x1100 && n <= 0x1112);
};

/**
 * @private
 * @static
 * 
 * Return true if the given character is a vowel Jamo (Jungseong) character.
 * 
 * @param {number} n code point to check
 * @return {boolean} true if the character is a vowel Jamo character, 
 * false otherwise
 */
ilib.NormString._isJamoV = function (n) {
	return (n >= 0x1161 && n <= 0x1175);
};

/**
 * @private
 * @static
 * 
 * Return true if the given character is a trailing Jamo (Jongseong) character.
 * 
 * @param {number} n code point to check
 * @return {boolean} true if the character is a trailing Jamo character, 
 * false otherwise
 */
ilib.NormString._isJamoT = function (n) {
	return (n >= 0x11A8 && n <= 0x11C2);
};

/**
 * @private
 * @static
 * 
 * Return true if the given character is a precomposed Hangul character.
 * 
 * @param {number} n code point to check
 * @return {boolean} true if the character is a precomposed Hangul character, 
 * false otherwise
 */
ilib.NormString._isHangul = function (n) {
	return (n >= 0xAC00 && n <= 0xD7A3);
};

/**
 * @private
 * @static
 *
 * Algorithmically decompose a precomposed Korean syllabic Hangul 
 * character into its individual combining Jamo characters. The given 
 * character must be in the range of Hangul characters U+AC00 to U+D7A3.
 * 
 * @param {number} cp code point of a Korean Hangul character to decompose
 * @return {string} the decomposed string of Jamo characters
 */
ilib.NormString._decomposeHangul = function (cp) {
	var sindex = cp - 0xAC00;
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
 * Algorithmically compose an L and a V combining Jamo characters into
 * a precomposed Korean syllabic Hangul character. Both should already
 * be in the proper ranges for L and V characters. 
 * 
 * @param {number} lead the code point of the lead Jamo character to compose
 * @param {number} trail the code point of the trailing Jamo character to compose
 * @return {string} the composed Hangul character
 */
ilib.NormString._composeJamoLV = function (lead, trail) {
	var lindex = lead - 0x1100;
	var vindex = trail - 0x1161;
	return ilib.String.fromCodePoint(0xAC00 + (lindex * 21 + vindex) * 28);
};

/**
 * @private
 * @static
 *
 * Algorithmically compose a Hangul LV and a combining Jamo T character 
 * into a precomposed Korean syllabic Hangul character. 
 * 
 * @param {number} lead the code point of the lead Hangul character to compose
 * @param {number} trail the code point of the trailing Jamo T character to compose
 * @return {string} the composed Hangul character
 */
ilib.NormString._composeJamoLVT = function (lead, trail) {
	return ilib.String.fromCodePoint(lead + (trail - 0x11A7));
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
 * @return {string} the mapped character
 */
ilib.NormString._expand = function (ch, canon, compat) {
	var i, 
		expansion = "",
		n = ch.charCodeAt(0);
	if (ilib.NormString._isHangul(n)) {
		expansion = ilib.NormString._decomposeHangul(n);
	} else {
		var result = canon[ch];
		if (!result && compat) {
			result = compat[ch];
		}
		if (result && result !== ch) {
			for (i = 0; i < result.length; i++) {
				expansion += ilib.NormString._expand(result[i], canon, compat);
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
 * Compose one character out of a leading character and a 
 * trailing character. If the characters are Korean Jamo, they
 * will be composed algorithmically. If they are any other
 * characters, they will be looked up in the nfc tables.
 
 * @param {string} lead leading character to compose
 * @param {string} trail the trailing character to compose
 * @return {string} the fully composed character, or undefined if
 * there is no composition for those two characters
 */
ilib.NormString._compose = function (lead, trail) {
	var first = lead.charCodeAt(0);
	var last = trail.charCodeAt(0);
	if (ilib.NormString._isHangul(first) && ilib.NormString._isJamoT(last)) {
		return ilib.NormString._composeJamoLVT(first, last);
	} else if (ilib.NormString._isJamoL(first) && ilib.NormString._isJamoV(last)) {
		return ilib.NormString._composeJamoLV(first, last);
	}

	var c = lead + trail;
	return (ilib.data.norm.nfc && ilib.data.norm.nfc[c]);
};


/**
 * Perform the Unicode Normalization Algorithm upon the string and return 
 * the resulting new string. The current string is not modified.
 * 
 * <h2>Forms</h2>
 * 
 * The forms of possible normalizations are defined by the <a 
 * href="http://www.unicode.org/reports/tr15/">Unicode Standard
 * Annex (UAX) 15</a>. The form parameter is a string that may have one 
 * of the following values:
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
 * Normalization requires a fair amount of mapping data, much of which you may 
 * not need for the characters expected in your texts. It is possible to assemble
 * a copy of ilib that saves space by only including normalization data for 
 * those scripts that you expect to encounter in your data.<p>
 * 
 * The normalization data is organized by normalization form and within there
 * by script. To include the normalization data for a particular script with
 * a particular normalization form, use the directive:
 * 
 * <pre><code>
 * !depends &lt;form&gt;/&lt;script&gt;.js
 * </code></pre>
 * 
 * Where &lt;form&gt is the normalization form ("nfd", "nfc", "nfkd", or "nfkc"), and
 * &lt;script&gt; is the ISO 15924 code for the script you would like to
 * support. Example: to load in the NFC data for Cyrillic, you would use:
 * 
 * <pre><code>
 * !depends nfc/Cyrl.js
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
 * A special value for the script dependency is "all" which will cause the data for 
 * all scripts
 * to be loaded for that normalization form. This would be useful if you know that
 * you are going to normalize a lot of multilingual text or cannot predict which scripts
 * will appear in the input. Because the NFKC form depends on all others, you can 
 * get all of the data for all forms automatically by depending on "nfkc/all.js".
 * Note that the normalization data for practically all script automatically depend
 * on data for the Common script (code "Zyyy") which contains all of the characters
 * that are commonly used in many different scripts. Examples of characters in the
 * Common script are the ASCII punctuation characters, or the ASCII Arabic 
 * numerals "0" through "9".<p>
 * 
 * By default, none of the data for normalization is automatically 
 * included in the preassembled iliball.js file. 
 * If you would like to normalize strings, you must assemble
 * your own copy of ilib and explicitly include the normalization data
 * for those scripts as per the instructions above. This normalization method will 
 * produce output, even without the normalization data. However, the output will be 
 * simply the same thing as its input for all scripts 
 * except Korean Hangul and Jamo, which are decomposed and recomposed 
 * algorithmically and therefore do not rely on data.<p>
 * 
 * If characters are encountered for which there are no normalization data, they
 * will be passed through to the output string unmodified.
 * 
 * @param {string} form The normalization form requested
 * @return {ilib.String} a new instance of an ilib.String that has been normalized
 * according to the requested form. The current instance is not modified.
 */
ilib.NormString.prototype.normalize = function (form) {
	var i;
	
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
	
	if (nfkd) {
		var ch, it = this.parent.charIterator.call(this);
		while (it.hasNext()) {
			ch = it.next();
			decomp += ilib.NormString._expand(ch, ilib.data.norm.nfd, ilib.data.norm.nfkd);
		}
	} else {
		var ch, it = this.parent.charIterator.call(this);
		while (it.hasNext()) {
			ch = it.next();
			decomp += ilib.NormString._expand(ch, ilib.data.norm.nfd);
		}
	}

	// now put the combining marks in a fixed order by 
	// sorting on the combining class
	function compareByCCC(left, right) {
		return ilib.data.norm.ccc[left] - ilib.data.norm.ccc[right]; 
	}
	
	function ccc(c) {
		return ilib.data.norm.ccc[c] || 0;
	}
		
	var dstr = new ilib.String(decomp);
	var it = dstr.charIterator();
	var cpArray = [];

	// easier to deal with as an array of chars
	while (it.hasNext()) {
		cpArray.push(it.next());
	}
	
	i = 0;
	while (i < cpArray.length) {
		if (typeof(ilib.data.norm.ccc[cpArray[i]]) !== 'undefined' && ccc(cpArray[i]) !== 0) {
			// found a non-starter... rearrange all the non-starters until the next starter
			var end = i+1;
			while (end < cpArray.length &&
					typeof(ilib.data.norm.ccc[cpArray[end]]) !== 'undefined' && 
					ccc(cpArray[end]) !== 0) {
				end++;
			}
			
			// simple sort of the non-starter chars
			if (end - i > 1) {
				cpArray = cpArray.slice(0,i).concat(cpArray.slice(i, end).sort(compareByCCC), cpArray.slice(end));
			}
		}
		i++;
	}
	
	if (nfc) {
		i = 0;
		while (i < cpArray.length) {
			if (typeof(ilib.data.norm.ccc[cpArray[i]]) === 'undefined' || ilib.data.norm.ccc[cpArray[i]] === 0) {
				// found a starter... find all the non-starters until the next starter. Must include
				// the next starter because under some odd circumstances, two starters sometimes recompose 
				// together to form another character
				var end = i+1;
				var notdone = true;
				while (end < cpArray.length && notdone) {
					if (typeof(ilib.data.norm.ccc[cpArray[end]]) !== 'undefined' && 
						ilib.data.norm.ccc[cpArray[end]] !== 0) {
						if (ccc(cpArray[end-1]) < ccc(cpArray[end])) { 
							// not blocked 
							var testChar = ilib.NormString._compose(cpArray[i], cpArray[end]);
							if (typeof(testChar) !== 'undefined') {
								cpArray[i] = testChar;
								
								// delete the combining char
								cpArray.splice(end,1);	
								
								// restart the iteration, just in case there is more to recompose with the new char
								end = i;
							}
						}
						end++;
					} else {
						// found the next starter. See if this can be composed with the previous starter
						var testChar = ilib.NormString._compose(cpArray[i], cpArray[end]);
						if (ccc(cpArray[end-1]) === 0 && typeof(testChar) !== 'undefined') { 
							// not blocked and there is a mapping 
							cpArray[i] = testChar;
							
							// delete the combining char
							cpArray.splice(end,1);
							
							// restart the iteration, just in case there is more to recompose with the new char
							end = i+1;
						} else {
							// finished iterating 
							notdone = false;
						}
					}
				}
			}
			i++;
		}
	}
	
	return new ilib.String(cpArray.length > 0 ? cpArray.join("") : "");
};
	
/**
 * @override
 * Return an iterator that will step through all of the characters
 * in the string one at a time, taking care to step through decomposed 
 * characters and through surrogate pairs in UTF-16 encoding 
 * properly. <p>
 * 
 * The NormString class will return decomposed Unicode characters
 * as a single unit that a user might see on the screen. If the 
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
 * @return {Object} an iterator 
 * that iterates through all the characters in the string
 */
ilib.NormString.prototype.charIterator = function() {
	var it = this.parent.charIterator.call(this);
	
	/**
	 * @constructor
	 */
	function _chiterator (istring) {
		/**
		 * @private
		 */
		var ccc = function(c) {
			return ilib.data.norm.ccc[c] || 0;
		};

		this.index = 0;
		this.hasNext = function () {
			return !!this.nextChar || it.hasNext();
		};
		this.next = function () {
			var ch = this.nextChar || it.next(),
				prevCcc = ccc(ch),
				nextCcc,
				composed = ch;
			
			this.nextChar = undefined;
			
			if (ilib.data.norm.ccc && 
					(typeof(ilib.data.norm.ccc[ch]) === 'undefined' || ccc(ch) === 0)) {
				// found a starter... find all the non-starters until the next starter. Must include
				// the next starter because under some odd circumstances, two starters sometimes recompose 
				// together to form another character
				var notdone = true;
				while (it.hasNext() && notdone) {
					this.nextChar = it.next();
					nextCcc = ccc(this.nextChar);
					if (typeof(ilib.data.norm.ccc[this.nextChar]) !== 'undefined' && nextCcc !== 0) {
						ch += this.nextChar;
					} else {
						// found the next starter. See if this can be composed with the previous starter
						var testChar = ilib.NormString._compose(composed, this.nextChar);
						if (prevCcc === 0 && typeof(testChar) !== 'undefined') { 
							// not blocked and there is a mapping 
							composed = testChar;
							ch += this.nextChar;
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

