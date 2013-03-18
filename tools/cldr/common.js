/*
 * common.js - common routines shared amongst the cldr/unicode tools
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

var fs = require('fs');
var util = require('util');

/*
 * The 32-bit Unicode value:
 * 000u uuuu xxxx   xxxx xxxx xxxx
 * 
 * Is translated to the following UTF-16 sequence:
 * 1101 10ww wwxx xxxx   1101 11xx xxxx xxxx
 * 
 * Where wwww = uuuuu - 1
 */
exports.codePointToUTF16 = function codePointToUTF16(codepoint) {
	if (codepoint < 0x10000) {
		return String.fromCharCode(codepoint);
	} else {
		var high = Math.floor(codepoint / 0x10000) - 1;
		var low = codepoint & 0xFFFF;
		
		return String.fromCharCode(0xD800 | ((high & 0x000F) << 6) |  ((low & 0xFC00) >> 10)) +
			String.fromCharCode(0xDC00 | (low & 0x3FF));
	}
};

exports.UTF16ToCodePoint = function UTF16ToCodePoint(str) {
	if (!str || str.length === 0) {
		return -1;
	}
	var code = -1, high = str.charCodeAt(0);
	if (high >= 0xD800 && high <= 0xDBFF) {
		if (str.length > 1) {
			var low = str.charCodeAt(1);
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

exports.isSurrogate = function isSurrogate(ch) {
	var n = ch.charCodeAt(0);
	return ((n >= 0xDC00 && n <= 0xDFFF) || (n >= 0xD800 && n <= 0xDBFF));
};

exports.charIterator = function charIterator(string) {
	this.index = 0;
	this.hasNext = function () {
		return (this.index < string.length);
	};
	this.next = function () {
		var ch = undefined;
		if (this.index < string.length) {
			ch = string.charAt(this.index);
			if (exports.isSurrogate(ch) && 
					this.index+1 < string.length && 
					exports.isSurrogate(string.charAt(this.index+1))) {
				this.index++;
				ch += string.charAt(this.index);
			}
			this.index++;
		}
		return ch;
	};
};

/**
 * Return the character that is represented by the given hexadecimal encoding.
 * 
 * @param {string} hex the hexadecimal encoding of the code point of the character
 * @returns {string} the character that is equivalent to the hexadecimal
 */
exports.hexToChar = function hexToChar(hex) {
	return exports.codePointToUTF16(parseInt(hex,16));
};

/**
 * Re-encode the characters in a string as a space-separated sequence of 16-bit 
 * hex values.
 * 
 * @param {string} string string to re-encode 
 * @returns {string} the re-encoded string
 */
exports.toHexString = function toHexString(string) {
	var i, result = ""; 
	
	if (!string) {
		return "";
	}
	for (i = 0; i < string.length; i++) {
		var ch = string.charCodeAt(i).toString(16);
		result += "0000".substring(0, 4-ch.length) + ch;
		if (i < string.length - 1) {
			result += " ";
		}
	}
	return result.toUpperCase();
};

/**
 * Do a binary search of an array of ranges and single values to determine
 * whether or not the given value is encoded in that array. If an element
 * is a single number, it must match exactly for that element to be returned
 * as a match. If the element is a range array, then the range array
 * has the low end of the range encoded in the 0th element, and the
 * high end in the 1st element. The range array may contain more elements
 * after that, but the extra elements are ignored. They may be used to 
 * indicate other information about the range, such as a name for example. 
 * 
 * @param {Array.<{Array.<number>|number}>} arr array of number or array of number to search 
 * @param {number} num value to search for
 * @returns {number} the index in the array of the matching element or -1 to indicate no
 * match
 */
exports.findMember = function findMember(arr, num) {
	var high = arr.length - 1,
		low = 0,
		mid = 0,
		value;
	
	while (low <= high) {
		mid = Math.floor((high+low)/2);
		if (typeof(arr[mid]) === 'object') {
			if (num >= arr[mid][0] && num <= arr[mid][1]) {
				return mid;
			} else {
				value = arr[mid][0] - num;
			}
		} else {
			value = arr[mid] - num;
		}
		if (value > 0) {
			high = mid - 1;
		} else if (value < 0) {
			low = mid + 1;
		} else {
			return mid;
		}
	}
	
	return ((typeof(arr[mid]) === 'object') ? (num >= arr[mid][0] && num <= arr[mid][1]) : (arr[mid] == num)) ? mid : -1;
};

/**
 * Do a binary search of an array of ranges and single values to determine
 * whether or not the given character is encoded in that array.
 * 
 * @param {Array.<{Array.<number>|number}>} arr 
 * @param {number} num number to search for
 * @returns {boolean} true if the number is in the array or within a range in the array
 */
exports.isMember = function isMember(arr, num) {
	return exports.findMember(arr, num) !== -1;
};

/**
 * Coelesce ranges to shorten files and to make searching it more efficient. There are 4 cases:
 * 
 * 1. [A] followed by [A+1]
 * 2. [A] followed by [A+1, B]
 * 3. [A, B] followed by [B+1]
 * 4. [A, B] followed by [B+1, C]
 * 
 * where A, B, and C represent particular values. Handle each case properly.
 * 
 * @param {Array.<{Array.<string|number>}>} ranges an array of range arrays
 * @param {number} skip the number of elements to skip before the range.  
 * If it is 0, look at elements 0 and 1, and if it is 1, then the range is 
 * in elements 1 and 2.
 * @returns {Array.<{Array.<string|number>}>} a coelesced array of ranges
 */
exports.coelesce = function coelesce(ranges, skip) {
	var ret = [];
	
	for (var i = ranges.length-1; i >= 0; i--) {
		if (ranges[i] && ranges[i+1] && (skip === 0 || ranges[i][0] === ranges[i+1][0])) {
			if (ranges[i].length === 1+skip) {
				if (ranges[i][skip] === ranges[i+1][skip] - 1) {
					ranges[i].push(ranges[i+1][(ranges[i+1].length === 1+skip) ? skip : 1+skip]);
					ranges.splice(i+1, 1);
				}
			} else {
				if (ranges[i][1+skip] === ranges[i+1][skip] - 1) {
					ranges[i][1+skip] = ranges[i+1][(ranges[i+1].length === 1+skip) ? skip : 1+skip];
					ranges.splice(i+1, 1);
				}
			}
		}
	}
	
	for (var i = 0; i < ranges.length; i++) {
		if (ranges[i]) {
			ret.push(ranges[i]);
		}
	}
	
	return ret;
};

/**
 * Merge the properties of object2 into object1 in a deep manner and return a merged
 * object. If the property exists in both objects, the value in object2 will overwrite 
 * the value in object1. If a property exists in object1, but not in object2, its value
 * will not be touched. If a property exists in object2, but not in object1, it will be 
 * added to the merged result.<p>
 * 
 * Name1 and name2 are for creating debug output only. They are not necessary.<p>
 * 
 * Depends directive: !depends utils.js
 * 
 * @param {*} object1 the object to merge into
 * @param {*} object2 the object to merge
 * @param {string=} name1 name of the object being merged into
 * @param {string=} name2 name of the object being merged in
 * @returns {Object} the merged object
 */
exports.merge = function merge(object1, object2, name1, name2) {
	var prop = undefined,
		newObj = {};
	for (prop in object1) {
		if (prop && typeof(object1[prop]) !== 'undefined') {
			newObj[prop] = object1[prop];
		}
	}
	for (prop in object2) {
		if (prop && typeof(object2[prop]) !== 'undefined') {
			if (object1[prop] instanceof Array && object2[prop] instanceof Array) {
				newObj[prop] = new Array();
				newObj[prop] = newObj[prop].concat(object1[prop]);
				newObj[prop] = newObj[prop].concat(object2[prop]);
			} else if (typeof(object1[prop]) === 'object' && typeof(object2[prop]) === 'object') {
				newObj[prop] = exports.merge(object1[prop], object2[prop]);
			} else {
				// for debugging. Used to determine whether or not json files are overriding their parents unnecessarily
				if (name1 && name2 && newObj[prop] == object2[prop]) {
					console.log("Property " + prop + " in " + name1 + " is being overridden by the same value in " + name2);
				}
				newObj[prop] = object2[prop];
			}
		}
	}
	return newObj;
};

/**
 * @class
 * Create a new locale instance. Locales are specified either with a specifier string 
 * that follows the BCP-47 convention (roughly: "language-region-script-variant") or 
 * with 4 parameters that specify the language, region, variant, and script individually.<p>
 * 
 * The language is given as an ISO 639-1 two-letter, lower-case language code. You
 * can find a full list of these codes at 
 * <a href="http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes</a><p>
 * 
 * The region is given as an ISO 3166-1 two-letter, upper-case region code. You can
 * find a full list of these codes at 
 * <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2</a>.<p>
 * 
 * The variant is any string that does not contain a dash which further differentiates
 * locales from each other.<p>
 * 
 * The script is given as the ISO 15924 four-letter script code. In some locales,
 * text may be validly written in more than one script. For example, Serbian is often
 * written in both Latin and Cyrillic, though not usually mixed together. You can find a
 * full list of these codes at 
 * <a href="http://en.wikipedia.org/wiki/ISO_15924#List_of_codes">http://en.wikipedia.org/wiki/ISO_15924#List_of_codes</a>.<p>
 * 
 * As an example in ilib, the script can be used in the date formatter. Dates formatted 
 * in Serbian could have day-of-week names or month names written in the Latin
 * or Cyrillic script. Often one script is default such that sr-SR-Latn is the same
 * as sr-SR so the script code "Latn" can be left off of the locale spec.<p> 
 * 
 * Each part is optional, and an empty string in the specifier before or after a 
 * dash or as a parameter to the constructor denotes an unspecified value. In this
 * case, many of the ilib functions will treat the locale as generic. For example
 * the locale "en-" is equivalent to "en" and to "en--" and denotes a locale
 * of "English" with an unspecified region and variant, which typically matches
 * any region or variant.<p>
 * 
 * Without any arguments to the constructor, this function returns the locale of
 * the host Javascript engine.<p>
 * 
 * Depends directive: !depends locale.js
 * 
 * @constructor
 * @param {?string=} language the ISO 639 2-letter code for the language, or a full 
 * locale spec in BCP-47 format
 * @param {string=} region the ISO 3166 2-letter code for the region
 * @param {string=} variant the name of the variant of this locale, if any
 * @param {string=} script the ISO 15924 code of the script for this locale, if any
 */
exports.Locale = function(language, region, variant, script) {
	if (typeof(region) === 'undefined') {
		this.spec = language;
		var parts = this.spec.split('-');
        for ( var i = 0; i < parts.length; i++ ) {
        	if (exports.Locale.isLanguageCode(parts[i])) {
    			/** 
    			 * @private
    			 * @type {string|undefined}
    			 */
        		this.language = parts[i];
        	} else if (exports.Locale.isRegionCode(parts[i])) {
    			/** 
    			 * @private
    			 * @type {string|undefined}
    			 */
        		this.region = parts[i];
        	} else if (exports.Locale.isScriptCode(parts[i])) {
    			/** 
    			 * @private
    			 * @type {string|undefined}
    			 */
        		this.script = parts[i];
        	} else {
    			/** 
    			 * @private
    			 * @type {string|undefined}
    			 */
        		this.variant = parts[i];
        	}
        }
        this.language = this.language || undefined;
        this.region = this.region || undefined;
        this.script = this.script || undefined;
        this.variant = this.variant || undefined;
	} else {
		this.language = language.toLowerCase();
		this.region = region.toUpperCase();
		this.variant = variant;
		this.script = script;

		this.spec = this.language || "";
		
		if (this.region) {
			if (this.spec.length > 0) {
				this.spec += "-";
			}
			this.spec += region;
		}
		
		if (this.script) {
			if (this.spec.length > 0) {
				this.spec += "-";
			}
			this.spec += "-" + this.script;
		}
		
		if (this.variant) {
			if (this.spec.length > 0) {
				this.spec += "-";
			}
			this.spec += "-" + this.variant;
		}
	}
};

/**
 * @private
 * Tell whether or not the str does not start with a lower case ASCII char.
 * @param {string} str the char to check
 * @returns {boolean} true if the char is not a lower case ASCII char
 */
exports.Locale._notLower = function(str) {
	// do this with ASCII only so we don't have to depend on the CType functions
	var ch = str.charCodeAt(0);
	return ch < 97 || ch > 122;
};

/**
 * @private
 * Tell whether or not the str does not start with an upper case ASCII char.
 * @param {string} str the char to check
 * @returns {boolean} true if the char is a not an upper case ASCII char
 */
exports.Locale._notUpper = function(str) {
	// do this with ASCII only so we don't have to depend on the CType functions
	var ch = str.charCodeAt(0);
	return ch < 65 || ch > 90;
};

/**
 * Tell whether or not the given string has the correct syntax to be 
 * an ISO 639 language code.
 * 
 * @param {string} str the string to parse
 * @returns {boolean} true if the string could syntactically be a language code.
 */
exports.Locale.isLanguageCode = function isLanguageCode(str) {
	if (str.length < 2 || str.length > 3) {
		return false;
	}

	for (var i = 0; i < str.length; i++) {
		if (exports.Locale._notLower(str.charAt(i))) {
			return false;
		}
	}
	
	return true;
};

/**
 * Tell whether or not the given string has the correct syntax to be 
 * an ISO 639 language code.
 * 
 * @param {string} str the string to parse
 * @returns {boolean} true if the string could syntactically be a language code.
 */
exports.Locale.isRegionCode = function isRegionCode(str) {
	if (str.length != 2) {
		return false;
	}
	
	for (var i = 0; i < str.length; i++) {
		if (exports.Locale._notUpper(str.charAt(i))) {
			return false;
		}
	}
	
	return true;
};

/**
 * Tell whether or not the given string has the correct syntax to be 
 * an ISO 639 language code.
 * 
 * @param {string} str the string to parse
 * @returns {boolean} true if the string could syntactically be a language code.
 */
exports.Locale.isScriptCode = function isScriptCode(str)
{
	if (str.length != 4 || exports.Locale._notUpper(str.charAt(0))) {
		return false;
	}
	
	for (var i = 1; i < 4; i++) {
		if (exports.Locale._notLower(str.charAt(i))) {
			return false;
		}
	}
	
	return true;
};

exports.Locale.prototype = {
	/**
	 * Return the ISO 639 language code for this locale. 
	 * @returns {string|undefined} the language code for this locale 
	 */
	getLanguage: function() {
		return this.language;
	},
	
	/**
	 * Return the ISO 3166 region code for this locale.
	 * @returns {string|undefined} the region code of this locale
	 */
	getRegion: function() {
		return this.region;
	},
	
	/**
	 * Return the ISO 15924 script code for this locale
	 * @returns {string|undefined} the script code of this locale
	 */
	getScript: function () {
		return this.script;
	},
	
	/**
	 * Return the variant code for this locale
	 * @returns {string|undefined} the variant code of this locale, if any
	 */
	getVariant: function() {
		return this.variant;
	},
	
	/**
	 * Return the whole locale specifier as a string.
	 * @returns {string} the locale specifier
	 */
	getSpec: function() {
		return this.spec;
	},
	
	/**
	 * Express this locale object as a string. Currently, this simply calls the getSpec
	 * function to represent the locale as its specifier.
	 * 
	 * @returns {string} the locale specifier
	 */
	toString: function() {
		return this.getSpec();
	},
	
	/**
	 * Return true if the the other locale is exactly equal to the current one.
	 * @returns {boolean} whether or not the other locale is equal to the current one 
	 */
	equals: function(other) {
		return this.language === other.language &&
			this.region === other.region &&
			this.script === other.script &&
			this.variant === other.variant;
	},

	/**
	 * Return true if the current locale is the special pseudo locale.
	 * @returns {boolean} true if the current locale is the special pseudo locale
	 */
	isPseudo: function () {
		return (this.language === 'xx' && this.region === 'XX');
	},
	
	isCompatible: function (localeSpec) {
		var min = Math.min(localeSpec.length, this.spec.length);
		for (var i = 0; i < min; i++) {
			if (localeSpec.charAt(i) !== this.spec.charAt(i)) {
				return false;
			}
		}
		return true;
	}
};

exports.prune = function prune(parent, child) {
	var ret = {};
	for (var prop in child) {
		if (prop && typeof(child[prop]) !== 'undefined') {
			if (prop === 'generated') {
				ret[prop] = child[prop];
			} else if (typeof(parent[prop]) === 'object') {
				ret[prop] = exports.prune(parent[prop], child[prop]);
			} else if (typeof(parent[prop]) === 'undefined') {
				if (prop !== child[prop]) {
					ret[prop] = child[prop];
				}
			} else if (parent[prop] !== child[prop] && child[prop].toString().length > 0) {
				ret[prop] = child[prop];
			}
		}
	}
	return ret;
};

exports.mergeAndPrune = function mergeAndPrune(localeData) {
	if (localeData) {
		if (typeof(localeData.merged) === 'undefined') {
			// special case for the top level
			localeData.merged = localeData.data;
		}
		for (var prop in localeData) {
			if (prop && typeof(localeData[prop]) !== 'undefined' && prop !== 'data' && prop !== 'merged') {
				util.print(prop + " ");
				localeData[prop].merged = exports.merge(localeData.merged, localeData[prop].data);
				localeData[prop].data = exports.prune(localeData.merged, localeData[prop].data);
				exports.mergeAndPrune(localeData[prop]);
			}
		}
	}
};

exports.makeDirs = function makeDirs(path) {
	var parts = path.split("\/");
	
	for (var i = 1; i < parts.length; i++) {
		var p = parts.slice(0, i).join("/");
		if (!fs.existsSync(p)) {
			fs.mkdirSync(p);
		}
	}
};

