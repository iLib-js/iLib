/*
 * util/utils.js - Misc utility routines
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

// !depends ilibglobal.js

/**
 * Binary search a sorted array for a particular target value.
 * If the exact value is not found, it returns the index of the smallest 
 * entry that is greater than the given target value.<p> 
 * 
 * The comparator
 * parameter is a function that knows how to compare elements of the 
 * array and the target. The function should return a value greater than 0
 * if the array element is greater than the target, a value less than 0 if
 * the array element is less than the target, and 0 if the array element 
 * and the target are equivalent.<p>
 * 
 * If the comparator function is not specified, this function assumes
 * the array and the target are numeric values and should be compared 
 * as such.<p>
 * 
 * Depends directive: !depends utils.js
 * 
 * 
 * @param {*} target element being sought 
 * @param {Array} arr the array being searched
 * @param {?function(*,*)=} comparator a comparator that is appropriate for comparing two entries
 * in the array  
 * @return the index of the array into which the value would fit if 
 * inserted, or -1 if given array is not an array or the target is not 
 * a number
 */
ilib.bsearch = function(target, arr, comparator) {
	if (typeof(arr) === 'undefined' || !arr || typeof(target) === 'undefined') {
		return -1;
	}
	
	var high = arr.length - 1,
		low = 0,
		mid = 0,
		value,
		cmp = comparator || ilib.bsearch.numbers;
	
	while (low <= high) {
		mid = Math.floor((high+low)/2);
		value = cmp(arr[mid], target);
		if (value > 0) {
			high = mid - 1;
		} else if (value < 0) {
			low = mid + 1;
		} else {
			return mid;
		}
	}
	
	return low;
};

/**
 * @private
 * Returns whether or not the given element is greater than, less than,
 * or equal to the given target.<p>
 * 
 * Depends directive: !depends utils.js
 * 
 * @param {number} element the element being tested
 * @param {number} target the target being sought
 */
ilib.bsearch.numbers = function(element, target) {
	return element - target;
};

/**
 * Do a proper modulo function. The Javascript % operator will give the truncated
 * division algorithm, but for calendrical calculations, we need the Euclidean
 * division algorithm where the remainder of any division, whether the dividend
 * is negative or not, is always a positive number between 0 and the modulus.<p>
 * 
 * Depends directive: !depends utils.js
 * 
 * @param {number} dividend the number being divided
 * @param {number} modulus the number dividing the dividend. This should always be a positive number.
 * @return the remainder of dividing the dividend by the modulus.  
 */
ilib.mod = function (dividend, modulus) {
	if (modulus == 0) {
		return 0;
	}
	var x = dividend % modulus;
	return (x < 0) ? x + modulus : x;
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
ilib.merge = function (object1, object2, name1, name2) {
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
				newObj[prop] = ilib.merge(object1[prop], object2[prop]);
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
 * Find and merge all the locale data for a particular prefix in the given locale
 * and return it as a single javascript object. This merges the data in the 
 * correct order:
 * 
 * <ol>
 * <li>shared data (usually English)
 * <li>data for language
 * <li>data for language + region
 * <li>data for language + region + script
 * <li>data for language + region + script + variant
 * </ol>
 * 
 * It is okay for any of the above to be missing. This function will just skip the 
 * missing data. However, if everything except the shared data is missing, this 
 * function returns undefined, allowing the caller to go and dynamically load the
 * data instead.
 *  
 * @param {string} prefix prefix under ilib.data of the data to merge
 * @param {ilib.Locale} locale locale of the data being sought
 * @returns {Object?} the merged locale data
 */
ilib.mergeLocData = function (prefix, locale) {
	var data = undefined;
	var loc = locale || new ilib.Locale();
	var foundLocaleData = false;
	var property = prefix;
	data = ilib.data[prefix] || {};
	
	if (loc.getLanguage()) {
		property = prefix + '_' + loc.getLanguage();
		if (ilib.data[property]) {
			foundLocaleData = true;
			data = ilib.merge(data, ilib.data[property]);
		}
	}
	
	if (loc.getRegion()) {
		property = prefix + '_' + loc.getRegion();
		if (ilib.data[property]) {
			foundLocaleData = true;
			data = ilib.merge(data, ilib.data[property]);
		}
	}
	
	if (loc.getLanguage()) {
		property = prefix + '_' + loc.getLanguage();
		
		if (loc.getScript()) {
			property = prefix + '_' + loc.getLanguage() + '_' + loc.getScript();
			if (ilib.data[property]) {
				foundLocaleData = true;
				data = ilib.merge(data, ilib.data[property]);
			}
		}
		
		if (loc.getRegion()) {
			property = prefix + '_' + loc.getLanguage() + '_' + loc.getRegion();
			if (ilib.data[property]) {
				foundLocaleData = true;
				data = ilib.merge(data, ilib.data[property]);
			}
		}
		
	}
	
	if (loc.getRegion() && loc.getVariant()) {
		property = prefix + '_' + loc.getLanguage() + '_' + loc.getVariant();
		if (ilib.data[property]) {
			foundLocaleData = true;
			data = ilib.merge(data, ilib.data[property]);
		}
	}

	if (loc.getLanguage() && loc.getScript() && loc.getRegion()) {
		property = prefix + '_' + loc.getLanguage() + '_' + loc.getScript() + '_' + loc.getRegion();
		if (ilib.data[property]) {
			foundLocaleData = true;
			data = ilib.merge(data, ilib.data[property]);
		}
	}

	if (loc.getLanguage() && loc.getRegion() && loc.getVariant()) {
		property = prefix + '_' + loc.getLanguage() + '_' + loc.getRegion() + '_' + loc.getVariant();
		if (ilib.data[property]) {
			foundLocaleData = true;
			data = ilib.merge(data, ilib.data[property]);
		}
	}

	if (loc.getLanguage() && loc.getScript() && loc.getRegion() && loc.getVariant()) {
		property = prefix + '_' + loc.getLanguage() + '_' + loc.getScript() + '_' + loc.getRegion() + '_' + loc.getVariant();
		if (ilib.data[property]) {
			foundLocaleData = true;
			data = ilib.merge(data, ilib.data[property]);
		}
	}

	return foundLocaleData ? data : undefined;
};

/**
 * Return an array of relative path names for the json
 * files that represent the data for the given locale. Only
 * language and region are top-level directories.
 * 
 * Variations
 * 
 * only language and region specified:
 * 
 * language
 * region
 * language/region
 * 
 * only language and script specified:
 * 
 * language
 * language/script
 * 
 * only script and region specified:
 * 
 * region
 * 
 * only region and variant specified:
 * 
 * region
 * region/variant
 *
 * only language, script, and region specified:
 * 
 * language
 * region
 * language/script
 * language/region
 * language/script/region
 * 
 * only language, region, and variant specified:
 * 
 * language
 * region
 * language/region
 * region/variant
 * language/region/variant
 * 
 * all parts specified:
 * 
 * language
 * region
 * language/script
 * language/region
 * region/variant
 * language/script/region
 * language/region/variant
 * language/script/region/variant
 * 
 * @param {ilib.Locale} locale load the json files for this locale
 * @param {string=} basename the base name of each json file to load
 * @returns {Array.<string>} An array of relative path names
 * for the json files that contain the locale data
 */
ilib.getLocFiles = function(locale, basename) {
	var dir = "";
	var files = [];
	var filename = basename || "resources";
	filename += ".json";
	var loc = locale || new ilib.Locale();
	
	var language = loc.getLanguage();
	var region = loc.getRegion();
	var script = loc.getScript();
	var variant = loc.getVariant();
	
	files.push(filename); // generic shared file
	
	if (language) {
		dir = language + "/";
		files.push(dir + filename);
	}
	
	if (region) {
		dir = region + "/";
		files.push(dir + filename);
	}
	
	if (language) {
		if (script) {
			dir = language + "/" + script + "/";
			files.push(dir + filename);
		}
		if (region) {
			dir = language + "/" + region + "/";
			files.push(dir + filename);
		}
	}
	
	if (region && variant) {
		dir = region + "/" + variant + "/";
		files.push(dir + filename);
	}

	if (language && script && region) {
		dir = language + "/" + script + "/" + region + "/";
		files.push(dir + filename);
	}

	if (language && region && variant) {
		dir = language + "/" + region + "/" + variant + "/";
		files.push(dir + filename);
	}

	if (language && script && region && variant) {
		dir = language + "/" + script + "/" + region + "/" + variant + "/";
		files.push(dir + filename);
	}
	
	/*
	dir += loc.getLanguage() + "/";
	files.push(dir + filename + ".json");
	if (loc.getVariant()) {
		var dir2 = dir;
		dir2 += loc.getVariant() + "/";
		files.push(dir2 + filename + ".json");
	}
	if (loc.getRegion()) {
		var dir2 = dir;
		dir2 += loc.getRegion() + "/";
		files.push(dir2 + filename + ".json");
		if (loc.getVariant()) {
			dir2 += loc.getVariant() + "/";
			files.push(dir2 + filename + ".json");
		}
	}
	if (loc.getScript()) {
		var dir2 = dir;
		dir2 += loc.getScript() + "/";
		files.push(dir2 + filename + ".json");
		if (loc.getRegion()) {
			dir2 += loc.getRegion() + "/";
			files.push(dir2 + filename + ".json");
			if (loc.getVariant()) {
				dir2 += loc.getVariant() + "/";
				files.push(dir2 + filename + ".json");
			}
		}
	}
	*/
	
	return files;
};

/**
 * Return true if the given object has no properties.<p>
 * 
 * Depends directive: !depends utils.js
 * 
 * @param {Object} obj the object to check
 * @returns {boolean} true if the given object has no properties, false otherwise
 */
ilib.isEmpty = function (obj) {
	var prop = undefined;
	
	if (!obj) {
		return true;
	}
	
	for (prop in obj) {
		if (prop && obj[prop]) {
			return false;
		}
	}
	return true;
};


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
			if (prop !== undefined && source[prop]) {
				target[prop] = source[prop];
			}
		}
	}
};

/**
 * Return the sign of the given number. If the sign is negative, this function
 * returns -1. If the sign is positive or zero, this function returns 1.
 * @param {number} num the number to test
 * @returns {number} -1 if the number is negative, and 1 otherwise
 */
ilib.signum = function (num) {
	var n = num;
	if (typeof(num) === 'string') {
		n = parseInt(num, 10);
	} else if (typeof(num) !== 'number') {
		return 1;
	}
	return (n < 0) ? -1 : 1;
};


/**
 * @private
 */
ilib._roundFnc = {
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	floor: function (num) {
		return Math.floor(num);
	},
	
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	ceiling: function (num) {
		return Math.ceil(num);
	},
	
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	down: function (num) {
		return (num < 0) ? Math.ceil(num) : Math.floor(num);
	},
	
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	up: function (num) {
		return (num < 0) ? Math.floor(num) : Math.ceil(num);
	},
	
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	halfup: function (num) {
		return (num < 0) ? Math.ceil(num - 0.5) : Math.floor(num + 0.5);
	},
	
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	halfdown: function (num) {
		return (num < 0) ? Math.floor(num + 0.5) : Math.ceil(num - 0.5);
	},
	
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	halfeven: function (num) {
		return (Math.floor(num) % 2 === 0) ? Math.ceil(num - 0.5) : Math.floor(num + 0.5);
	},
	
	/**
	 * @private
	 * @param {number} num number to round
	 * @returns {number} rounded number
	 */
	halfodd: function (num) {
		return (Math.floor(num) % 2 !== 0) ? Math.ceil(num - 0.5) : Math.floor(num + 0.5);
	}
};


/**
 * Find locale data or load it in. If the data with the given name is preassembled, it will
 * find the data in ilib.data. If the data is not preassembled but there is a loader function,
 * this function will call it to load the data. Otherwise, the callback will be called with
 * undefined as the data. This function will create a cache under the given class object.
 * If data was successfully loaded, it will be set into the cache so that future access to 
 * the same data for the same locale is much quicker. 
 * 
 * @param {Object} object The class attempting to load data. The cache is stored inside of here.
 * @param {ilib.Locale} locale The locale to use to find or load the data.
 * @param {string} name The name of the locale data to load.
 * @param {function(Object?):undefined} callback Call back function to call when the data is available.
 */
ilib.loadData = function(object, locale, name, sync, callback) {
	if (!object.cache) {
		object.cache = {};
	}

	var spec = locale.getSpec().replace(/-/g, '_');
	if (typeof(object.cache[spec]) === 'undefined') {
		var data = ilib.mergeLocData(name, locale);
		if (data) {
			object.cache[spec] = data;
			callback(data);
		} else if (typeof(ilib._load) === 'function') {
			// the data is not preassembled, so attempt to load it dynamically
			var files = ilib.getLocFiles(locale, name);
			
			ilib._load(files, sync, function(arr) {
				data = {};
				for (var i = 0; i < arr.length; i++) {
					if (typeof(arr[i]) !== 'undefined') {
						data = ilib.merge(data, arr[i]);
					}
				}
				
				callback(data);
			}.bind(this));
		} else {
			// no data other than the generic shared data
			callback(data);
		}
	} else {
		callback(object.cache[spec]);
	}
};
