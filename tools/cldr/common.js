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

/*
 * The 32-bit Unicode value:
 * 000u uuuu xxxx   xxxx xxxx xxxx
 * 
 * Is translated to the following UTF-16 sequence:
 * 1101 10ww wwxx xxxx   1101 11xx xxxx xxxx
 * 
 * Where wwww = uuuuu - 1
 */

exports.codePointToUTF16 = function (codepoint) {
	if (codepoint < 0x10000) {
		return String.fromCharCode(codepoint);
	} else {
		var high = Math.floor(codepoint / 0x10000) - 1;
		var low = codepoint & 0xFFFF;
		
		return String.fromCharCode(0xD800 | ((high & 0x000F) << 6) |  ((low & 0xFC00) >> 10)) +
			String.fromCharCode(0xDC00 | (low & 0x3FF));
	}
};

exports.UTF16ToCodePoint = function (str) {
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

exports.isSurrogate = function (ch) {
	var n = ch.charCodeAt(0);
	return ((n >= 0xDC00 && n <= 0xDFFF) || (n >= 0xD800 && n <= 0xDBFF));
};

exports.charIterator = function (string) {
	this.index = 0;
	this.hasNext = function () {
		return (this.index < string.length);
	};
	this.next = function () {
		var ch;
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
exports.hexToChar = function (hex) {
	return exports.codePointToUTF16(parseInt(hex,16));
};

/**
 * Re-encode the characters in a string as a space-separated sequence of 16-bit 
 * hex values.
 * 
 * @param {string} string string to re-encode 
 * @returns {string} the re-encoded string
 */
exports.toHexString = function (string) {
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
exports.findMember = function (arr, num) {
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
exports.isMember = function (arr, num) {
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
exports.coelesce = function (ranges, skip) {
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
