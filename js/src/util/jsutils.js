/*
 * util/jsutils.js - Misc utilities to work around Javascript engine differences
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

// !depends ilibglobal.js

/**
 * Perform a shallow copy of the source object to the target object. This only 
 * copies the assignments of the source properties to the target properties, 
 * but not recursively from there.<p>
 * 
 * Depends directive: !depends utils.js
 * 
 * @param {Object} source the source object to copy properties from
 * @param {Object} target the target object to copy properties into
 */
ilib.shallowCopy = function (source, target) {
	var prop = undefined;
	if (source && target) {
		for (prop in source) {
			if (prop !== undefined && typeof(source[prop]) !== 'undefined') {
				target[prop] = source[prop];
			}
		}
	}
};

/**
 * @static
 * 
 * Map a string to the given set of alternate characters. If the target set
 * does not contain a particular character in the input string, then that
 * character will be copied to the output unmapped.
 * 
 * @param {string} str a string to map to an alternate set of characters
 * @param {Array.<string>|Object} map a mapping to alternate characters
 * @return {string} the source string where each character is mapped to alternate characters
 */
ilib.mapString = function (str, map) {
	var mapped = "";
	if (map && str) {
		for (var i = 0; i < str.length; i++) {
			var c = str.charAt(i); // TODO use a char iterator?
			mapped += map[c] || c; 
		}
	} else {
		mapped = str;
	}
	return mapped;
};

/**
 * @static
 * 
 * Check if an object is a memory of the given array. This works in older
 * browsers as well.
 * 
 * @param {Array.<Object>} array array to search
 * @param {Object} obj object to search for
 * @return {number} index of the object in the array, or -1 if it is not in the array
 */
ilib.indexOf = function(array, obj) {
	if (!array || !obj) {
		return -1;
	}
	if (typeof(array.indexOf) === 'function') {
		return array.indexOf(obj);
	} else {
		for (var i = 0; i < array.length; i++) {
	        if (array[i] === obj) {
	            return i;
	        }
	    }
	    return -1;
	}
};