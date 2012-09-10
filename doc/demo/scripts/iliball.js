/*
 * ilibglobal.js - define the ilib name space
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

/**
 * @namespace The global namespace that contains all ilib functions and classes.
 */
var ilib = ilib || {};

/**
 * Return the current version of ilib.
 * 
 * @returns {string} a version string for this instance of ilib
 */
ilib.getVersion = function () {
	// increment this for each release
	return "1.1";
};

/*
 * Place where resources and such are eventually assigned.
 */
ilib.data = {};

window["ilib"] = ilib;

/**
 * Sets the default locale for all of ilib. This locale will be used
 * when no explicit locale is passed to any ilib class. If the default
 * locale is not set, ilib will attempt to use the locale of the
 * environment it is running in, if it can find that. If not, it will
 * default to the locale "en-US".<p>
 * 
 * Depends directive: !depends ilibglobal.js
 * 
 * @param {string} spec the locale specifier for the default locale
 */
ilib.setLocale = function (spec) {
	ilib.locale = spec || ilib.locale;
};

/**
 * Return the default locale for all of ilib if one has been set. This 
 * locale will be used when no explicit locale is passed to any ilib 
 * class. If the default
 * locale is not set, ilib will attempt to use the locale of the
 * environment it is running in, if it can find that. If not, it will
 * default to the locale "en-US".<p>
 * 
 * Depends directive: !depends ilibglobal.js 
 * 
 * @returns {string} the locale specifier for the default locale
 */
ilib.getLocale = function () {
	return ilib.locale || "en-US";
};

/**
 * Sets the default time zone for all of ilib. This time zone will be used when
 * no explicit time zone is passed to any ilib class. If the default time zone
 * is not set, ilib will attempt to use the time zone of the
 * environment it is running in, if it can find that. If not, it will
 * default to the the UTC zone "Europe/London".<p>
 * 
 * Depends directive: !depends ilibglobal.js
 * 
 * @param {string} tz the name of the time zone to set as the default time zone
 */
ilib.setTimeZone = function (tz) {
	ilib.tz = tz || ilib.tz;
};

/**
 * Return the default time zone for all of ilib if one has been set. This 
 * time zone will be used when no explicit time zone is passed to any ilib 
 * class. If the default time zone
 * is not set, ilib will attempt to use the locale of the
 * environment it is running in, if it can find that. If not, it will
 * default to the the UTC zone "Europe/London".<p>
 * 
 * Depends directive: !depends ilibglobal.js
 * 
 * @returns {string} the default time zone for ilib
 */
ilib.getTimeZone = function() {
	return ilib.tz || "Europe/London";
};

/*
 * locale.js - Locale specifier definition
 * 
 * Copyright © 2012, JEDL Software, Inc.
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
 * @class
 * Create a new locale instance. Locales are specified either with a string 
 * with this syntax "language-region-variant" or with 3 parameters that specify
 * the language, region, and variant separately.<p>
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
 * @param {?string=} language the ISO 639 name of the language
 * @param {string=} region the ISO 3166 name of the region
 * @param {string=} variant the name of the variant of this locale, if any
 */
ilib.Locale = function(language, region, variant) {
	this.variant = undefined;
	if (typeof(region) === 'undefined') {
		var spec = language || ilib.getLocale();
		this.spec = spec;
		var parts = spec.split('-');
		if (parts.length > 0) {
			this.language = parts[0].toLowerCase();
		}
		if (parts.length > 1) {
			this.region = parts[1].toUpperCase();
		}
		if (parts.length > 2) {
			this.variant = parts[2];
		}
	} else {
		this.language = language.toLowerCase();
		this.region = region.toUpperCase();
		this.variant = variant;
		
		this.spec = this.language;
		if (this.region) {
			this.spec += "-" + this.region;
			if (this.variant) {
				this.spec += "-" + this.variant;
			}
		} else if (this.variant) {
			this.spec += "--" + this.variant;
		}
	}
	
	this.language = this.language || "";
	this.region = this.region || "";
};

ilib.Locale.prototype = {
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
		return this.variant === other.variant &&
			this.region === other.region &&
			this.language === other.language;
	},

	/**
	 * Return true if the current locale is the special pseudo locale.
	 * @returns {boolean} true if the current locale is the special pseudo locale
	 */
	isPseudo: function () {
		return (this.language === 'xx' && this.region === 'XX');
	}
};

// static functions
/**
 * @private
 */
ilib.Locale.locales = [
	"en-US","en-CA","fr-CA","es-MX","es-AR","pt-BR","zh-CN","ja-JP","ko-KR","en-IN","id-ID","ru-RU","en-AU","en-GB","fr-FR","de-DE","it-IT","en-ZA","en-NG","en-PH","es-ES","en-PK","vi-VN","xx-XX","tr-TR"
];

/**
 * Return the list of available locales that this iLib file was assembled
 * with. The list that this file was assembled with may be much smaller
 * than the list of all available locales in the iLib repository. The
 * assembly tool will automatically fill in the list.
 * 
 * @returns {Array.<string>} this is an array of locale specs for which 
 * this iLib file has locale data for
 */
ilib.Locale.getAvailableLocales = function () {
	return ilib.Locale.locales;
};
/*
 * date.js - Represent a date in any calendar. This class is subclassed for each calendar.
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

/* !depends ilibglobal.js */

/**
 * @class
 * Construct a new date object. Each parameter is a numeric value, but its 
 * accepted range can vary depending on the subclass of this date. For example,
 * Gregorian months can be from 1 to 12, whereas months in the Hebrew calendar
 * can be from 1 to 13.<p>
 * 
 * Depends directive: !depends date.js
 * 
 * @constructor
 * @param {Object=} options The date components to initialize this date with
 */
ilib.Date = function(options) {
	this.year = options && options.year || 0;
	this.month = options && options.month || 1;
	this.day = options && options.day || 1;
	this.hour = options && options.hour || 0;
	this.minute = options && options.minute || 0;
	this.second = options && options.second || 0;
	this.millisecond = options && options.millisecond || 0;
};

/**
 * Factory method to create a new instance of a date subclass.<p>
 * 
 * The options parameter can be an object that contains the following
 * properties:
 * 
 * <ul>
 * <li><i>type</i> - specify the type of the date desired. The
 * list of valid values changes depending on which calendars are 
 * defined. When assembling your iliball.js, include those date type 
 * you wish to use in your program or web page, and they will register 
 * themselves with this factory method. The "gregorian",
 * and "julian" calendars are all included by default, as they are the
 * standard calendars for much of the world.
 * </ul>
 * 
 * The options object is also passed down to the date constructor, and 
 * thus can contain the same properties as the date object being instantiated.
 *  
 * @param {Object=} options options controlling the construction of this instance, or
 * undefined to use the default options
 * @returns an instance of a calendar object of the appropriate type */
ilib.Date.newInstance = function(options) {
	var locale = options && options.locale,
		type = options && options.type,
		cons;

	if (!locale) {
		locale = new ilib.Locale();	// default locale
	}
	
	if (!type) {
		var info = new ilib.LocaleInfo(locale);
		type = info.getCalendar();
	}

	cons = ilib.Date._constructors[type];
	
	// pass the same options through to the constructor so the subclass
	// has the ability to do something with if it needs to
	return cons && new cons(options);
};

/* place for the subclasses to put their constructors so that the factory method
 * can find them. Do this to add your date after it's defined: 
 * ilib.Date._constructors["mytype"] = ilib.Date.MyTypeConstructor;
 */
ilib.Date._constructors = {};

ilib.Date.prototype = {
	getType: function() {
		return "ilib.Date";
	},
	
	getDays: function() {
		return this.day;
	},
	getMonths: function() {
		return this.month;
	},
	getYears: function() {
		return this.year;
	},
	
	getHours: function() {
		return this.hour;
	},
	getMinutes: function() {
		return this.minute;
	},
	getSeconds: function() {
		return this.second;
	},
	getMilliseconds: function() {
		return this.millisecond;
	},

	setDays: function(day) {
		this.day = day;
	},
	setMonths: function(month) {
		this.month = month;
	},
	setYears: function(year) {
		this.year = year;
	},
	
	setHours: function(hour) {
		this.hour = hour;
	},
	setMinutes: function(minute) {
		this.minute = minute;
	},
	setSeconds: function(second) {
		this.second = second;
	},
	setMilliseconds: function(milli) {
		this.millisecond = milli;
	}
};

/*
 * strings.js - ilib string subclass definition
 * 
 * Copyright © 2012, JEDL Software, Inc.
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
	} else {
		this.str = string ? new String(string) : "";
	}
};

ilib.String.prototype.toString = function () {
	return this.str.toString();
};
ilib.String.prototype.valueOf = function () {
	return this.str.valueOf();
};

/**
 * Return the length of this string in characters. This function defers to the regular
 * Javascript string class in order to perform the length function. Please note that this
 * method is a real method, whereas the length property of Javascript strings is 
 * implemented by native code and appears to be a property.<p>
 * 
 * Example:
 * 
 * <pre>
 * var str = new ilib.String("this is a string");
 * console.log("String is " + str.length() + " characters long.");
 * </pre>
 */
ilib.String.prototype.length = function () {
	return this.str.length;
};


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
ilib.String.prototype.format = function (params) {
	var p, formatted = this.str;
	if (params) {
		for (p in params) {
			if (typeof(params[p]) !== 'undefined') {
				formatted = formatted.replace("\{"+p+"\}", params[p]);
			}
		}
	}
	return formatted.toString();
};

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
ilib.String.prototype.formatChoice = function(argIndex, params) {
	var choices = this.str.split("|");
	var type = typeof(argIndex);
	var limits = [];
	var strings = [];
	var i;
	var parts;
	var limit;
	var arg;
	var result;
	var defaultCase;

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
};

/*
 * util/utils.js - Misc utility routines
 * 
 * Copyright © 2012, JEDL Software, Inc.
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
	var prop,
		newObj = {},
		i;
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
 * Return true if the given object has no properties.<p>
 * 
 * Depends directive: !depends utils.js
 * 
 * @param {Object} obj the object to check
 * @returns {boolean} true if the given object has no properties, false otherwise
 */
ilib.isEmpty = function (obj) {
	var prop;
	
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
	var prop;
	if (source && target) {
		for (prop in source) {
			if (prop !== undefined && source[prop]) {
				target[prop] = source[prop];
			}
		}
	}
}

/*
 * resources.js - Resource bundle definition
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ilibglobal.js locale.js strings.js util/utils.js

/**
 * @class
 * Create a new resource bundle instance. The resource bundle loads strings
 * appropriate for a particular locale and provides them via the getString 
 * method.<p>
 * 
 * The options object may contain any (or none) of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - The locale of the strings to load. If not specified, the default
 * locale is the the default for the web page or app in which the bundle is 
 * being loaded.
 * <li><i>name</i> - Base name of the resource bundle to load. If not specified the default
 * base name is "resources".
 * <li><i>type</i> - Name the type of strings this bundle contains. Valid values are 
 * "xml", "html", "text", or "raw". The default is "text". If the type is "xml" or "html",
 * then XML/HTML entities and tags are not pseudo-translated. During a real translation, 
 * HTML character entities are translated to their corresponding characters in a source
 * string before looking that string up in the translations. Also, the characters "<", ">",
 * and "&" are converted to entities again in the output, but characters are left as they
 * are. If the type is "xml", "html", or "text" types, then the replacement parameter names
 * are not pseudo-translated as well so that the output can be used for formatting with 
 * the ilib.String class. If the type is raw, all characters are pseudo-translated, 
 * including replacement parameters as well as XML/HTML tags and entities.  
 * <li><i>lengthen</i> - when pseudo-translating the string, tell whether or not to 
 * automatically lengthen the string to simulate "long" languages such as German
 * or French. This is a boolean value. Default is false. 
 * </ul>
 * 
 * The locale option may be given as a locale spec string or as an 
 * ilib.Locale object. If the locale option is not specified, then strings for
 * the default locale will be loaded.<p> 
 * 
 * The name option can be used to put groups of strings together in a
 * single bundle. The strings will then appear together in a JS object in
 * a JS file that can be included before the ilib.<p>
 * 
 * A resource bundle with a particular name is actually a set of bundles
 * that are each specific to a language, a language plus a region, or a language
 * plus a region plus a variant. All bundles with the same base name should
 * contain the same set of source strings, but with different translations for 
 * the given locale. The user of the bundle does not need to be aware of 
 * the locale of the bundle, as long as it contains values for the strings 
 * it needs.<p>
 * 
 * Strings in bundles for a particular locale are inherited from parent bundles
 * that are more generic. In general, the hierarchy is as follows:
 * 
 * <ol>
 * <li>base_language_region_variant inherits from
 * <li>base_language_region inherits from
 * <li>base_language inherits from
 * <li>base
 * </ol>
 * 
 * That is, if the translation for a string does not exist in the current
 * locale, the more-generic parent locale is searched for the string. In the
 * worst case scenario, the string is not found in the base locale's strings. 
 * In this case, the original source is returned as the translation. This allows
 * developers to create code with new or changed strings in it and check in that
 * code without waiting for the translations to be done first. The translated
 * version of the app or web site will still function properly, but will show 
 * a spurious untranslated string here and there until the translations are 
 * done and also checked in.<p>   
 *  
 * The base is whatever language your developers use to code in. For
 * a German web site, strings in the source code may be written in German 
 * for example. Often this base is English, as many web sites are coded in
 * English, but that is not required.<p>
 * 
 * The strings can be extracted with the ilib localization tool. Once the strings
 * have been translated, the set of translated files can be generated with the
 * same tool. The output from the tool can be used as input to the ResBundle
 * object. It is up to the web page or app to make sure the JS file that defines
 * the bundle is included before creating the ResBundle instance.<p>
 * 
 * A special locale "xx-XX" is used as the pseudo-translation locale because
 * xx and XX are not a valid ISO language or country specifiers. 
 * Pseudo-translation is a locale where the translations are generated on
 * the fly based on the contents of the source string. Characters in the source 
 * string are replaced with accented versions of those characters and returned. 
 * This allows the strings to be readable in the UI (if somewhat funky-looking), 
 * and yet a tester can easily verify that the string is properly externalized 
 * and loaded from a resource bundle without waiting for any translations to 
 * be completed.<p>
 * 
 * Example. If the source string is:
 * 
 * <pre>
 * "This is a string"
 * </pre>
 * 
 * then the pseudo-translated version might look something like this: 
 * 
 * <pre>
 * "Ţħïş ïş á şţřïñĝ"
 * </pre>
 *<p>
 * 
 * When the "lengthen" property is set to true in the options, the 
 * pseudotranslation code will add digits to the end of the string to simulate
 * the lengthening that occurs when translating to other languages. The above 
 * example will come out like this:
 * 
 * <pre>
 * "Ţħïş ïş á şţřïñĝ76543210"
 * </pre>
 * 
 * The string is lengthened according to the length of the source string. If
 * the source string is less than 20 characters long, the string is lengthened 
 * by 50%. If the source string is 20-40 
 * characters long, the string is lengthened by 33%. If te string is greater
 * than 40 characters long, the string is lengthened by 20%.<p>
 * 
 * The pseudotranslation always ends a string with the digit "0". If you do
 * not see the digit "0" in the UI for your app, you know that truncation
 * has occurred, and the number you see at the end of the string tells you 
 * how many characters were truncated.<p>
 * 
 * Depends directive: !depends resources.js
 * 
 * @constructor
 * @param {?Object} options Options controlling how the bundle is created
 */
ilib.ResBundle = function (options) {
	var name, lookupLocale;
	
	this.locale = new ilib.Locale();	// use the default locale
	this.baseName = "resources";
	this.type = "text";
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? 
					new ilib.Locale(options.locale) :
					options.locale;
		}
		if (options.name) {
			this.baseName = options.name;
		}
		if (options.type) {
			this.type = options.type;
		}
		this.lengthen = options.lengthen || false;
	}
	
	this.map = {};

	lookupLocale = this.locale.isPseudo() ? new ilib.Locale(ilib.getLocale()) : this.locale;
	
	name = this.baseName;
	if (ilib.data[name]) {
		this.map = ilib.merge(this.map, ilib.data[name]);
	}
	if (lookupLocale.getLanguage()) {
		name += "_" + lookupLocale.getLanguage();
		if (ilib.data[name]) {
			this.map = ilib.merge(this.map, ilib.data[name], this.baseName, name);
		}
		if (lookupLocale.getRegion()) {
			name += "_" + lookupLocale.getRegion();		
			if (ilib.data[name]) {
				this.map = ilib.merge(this.map, ilib.data[name], this.baseName + "_" + this.locale.getLanguage(), name);
			}
			if (lookupLocale.getVariant()) {
				name += "_" + lookupLocale.getVariant();
				if (ilib.data[name]) {
					this.map = ilib.merge(this.map, ilib.data[name], this.baseName + "_" + this.locale.getLanguage() + "_" + this.locale.getRegion(), name);
				}
			}
		}
	}
	
	// console.log("Merged resources " + this.locale.toString() + " are: " + JSON.stringify(this.map));
	if (!this.locale.isPseudo() && ilib.isEmpty(this.map)) {
		console.log("Resources for bundle " + this.baseName + " locale " + this.locale.toString() + " are not available.");
	}
};

/**
 * @private
 * @const
 * @type Object.<string, string> 
 * Mapping for psuedo-translation 
 */
ilib.ResBundle._pseudoMap = {
	"a": "à",	
	"c": "ç",	
	"d": "ð",	
	"e": "ë",	
	"g": "ğ",	
	"h": "ĥ",
	"i": "í",	
	"j": "ĵ",	
	"k": "ķ",	
	"l": "ľ",	
	"n": "ñ",	
	"o": "õ",	
	"p": "þ",	
	"r": "ŕ",	
	"s": "š",	
	"t": "ţ",	
	"u": "ü",	
	"w": "ŵ",	
	"y": "ÿ",	
	"z": "ž",	
	"A": "Ã",
	"B": "ß",
	"C": "Ç",	
	"D": "Ð",	
	"E": "Ë",	
	"G": "Ĝ",	
	"H": "Ħ",
	"I": "Ï",	
	"J": "Ĵ",	
	"K": "ĸ",	
	"L": "Ľ",	
	"N": "Ň",	
	"O": "Ø",	
	"R": "Ŗ",	
	"S": "Š",	
	"T": "Ť",	
	"U": "Ú",	
	"W": "Ŵ",	
	"Y": "Ŷ",	
	"Z": "Ż"	
};

ilib.ResBundle.prototype = {
	/**
	 * Return the locale of this resource bundle.
	 * @returns {ilib.Locale} the locale of this resource bundle object 
	 */
	getLocale: function () {
		return this.locale;
	},
	
	/**
	 * Return the name of this resource bundle. This corresponds to the name option
	 * given to the constructor.
	 * @returns {string} name of the the current instance
	 */
	getName: function () {
		return this.baseName;
	},
	
	/**
	 * Return the type of this resource bundle. This corresponds to the type option
	 * given to the constructor.
	 * @returns {string} type of the the current instance
	 */
	getType: function () {
		return this.type;
	},

	/*
	 * @private
	 * Pseudo-translate a string
	 */
	pseudo: function (str) {
		if (!str) {
			return undefined;
		}
		var ret = "", i;
		for (i = 0; i < str.length; i++) {
			if (this.type !== "raw") {
				if (this.type === "html" || this.type === "xml") {
					if (str.charAt(i) === '<') {
						ret += str.charAt(i++);
						while (i < str.length && str.charAt(i) !== '>') {
							ret += str.charAt(i++);
						}
						if (i < str.length) {
							ret += str.charAt(i++);
						}
					} else if (str.charAt(i) === '&') {
						ret += str.charAt(i++);
						while (i < str.length && str.charAt(i) !== ';' && str.charAt(i) !== ' ') {
							ret += str.charAt(i++);
						}
						if (i < str.length) {
							ret += str.charAt(i++);
						}
					}
				}
				if (i < str.length) { 
					if (str.charAt(i) === '{') {
						ret += str.charAt(i++);
						while (i < str.length && str.charAt(i) !== '}') {
							ret += str.charAt(i++);
						}
						if (i < str.length) {
							ret += str.charAt(i);
						}
					} else {
						ret += ilib.ResBundle._pseudoMap[str.charAt(i)] || str.charAt(i);
					}
				}
			} else {
				ret += ilib.ResBundle._pseudoMap[str.charAt(i)] || str.charAt(i);
			}
		}
		if (this.lengthen) {
			var add;
			if (ret.length <= 20) {
				add = Math.round(ret.length / 2);
			} else if (ret.length > 20 && ret.length <= 40) {
				add = Math.round(ret.length / 3);
			} else {
				add = Math.round(ret.length / 5);
			}
			for (i = add-1; i >= 0; i--) {
				ret += (i % 10);
			}
		}
		return ret;
	},
	
	/*
	 * @private
	 * Escape html characters in the output.
	 */
	escape: function (str) {
		str = str.replace(/&/g, '&amp;');
		str = str.replace(/</g, '&lt;');
		str = str.replace(/>/g, '&gt;');
		return str;
	},

	/*
	 * @private
	 * @param {string} str the string to unescape
	 */
	unescape: function (str) {
		str = str.replace(/&amp;/g, '&');
		str = str.replace(/&lt;/g, '<');
		str = str.replace(/&gt;/g, '>');
		return str;
	},
	
	/*
	 * @private
	 * Create a key name out of a source string. All this does so far is 
	 * compress sequences of white space into a single space on the assumption
	 * that this doesn't really change the meaning of the string, and therefore
	 * all such strings that compress to the same thing should share the same
	 * translation.
	 * @param {string} source the source string to make a key out of
	 */
	makeKey: function (source) {
		var key = source.replace(/\s+/gm, ' ');
		return (this.type === "xml" || this.type === "html") ? this.unescape(key) : key;
	},
	
	/**
	 * Return a localized string. If the string is not found in the loaded set of
	 * resources, the original source string is returned. If the key is not given,
	 * then the source string itself is used as the key. In the case where the 
	 * source string is used as the key, the whitespace is compressed down to 1 space
	 * each, and the whitespace at the beginning and end of the string is trimmed.
	 * 
	 * @param {?string=} source the source string to translate
	 * @param {?string=} key optional name of the key, if any
	 * @returns {ilib.String|undefined} the translation of the given source/key or undefined 
	 * if the translation is not found and the source is undefined 
	 */
	getString: function (source, key) {
		if (!source && !key) return undefined;
		
		if (this.locale.isPseudo()) {
			var str = source ? source : this.map[key],
				ret = this.pseudo(str);
			return ret ? new ilib.String(ret) : undefined;
		}
		
		var keyName = key || this.makeKey(source);
		var trans = typeof(this.map[keyName]) !== 'undefined' ? this.map[keyName] : source;
		return trans === undefined ? undefined : new ilib.String((this.type === "xml" || this.type === "html") ? this.escape(trans) : trans);
	},
	
	/**
	 * Return the merged resources as an entire object. When loading resources for a
	 * locale that are not just a set of translated strings, but instead an entire 
	 * structured object, you can gain access to that object via this call. This method
	 * will ensure that all the of the parts of the object are correct for the locale.
	 * It starts by loading <i>ilib.data[name]</i>, where <i>name</i> is the base name
	 * for this set of resources. Then, it successively overwrites objects in the base
	 * data using locale-specific data. It loads it in this order from <i>ilib.data</i>:
	 * 
	 * <ol>
	 * <li> name + "_" + language
	 * <li> name + "_" + language + "_" + region
	 * <li> name + "_" + language + "_" + region + "_" + variant
	 * 
	 * Loading the resources this way allows the program to share resources between all
	 * locales that share a common language, or a common language and region. As a 
	 * general rule-of-thumb, resources should be as generic as possible in order to
	 * cover as many locales as possible.
	 * 
	 * @returns {Object} returns the object that is the basis for this resources instance
	 */
	getResObj: function () {
		return this.map;
	}
};

ilib.data.localeinfo = {
	"clock": "24",
	"currencyFormats": {
		"common": "{s}{n}",
		"iso": "{s} {n}"
	},
	"units": "metric",
	"calendar": "gregorian",
	"firstDayOfWeek": 0,
	"currency": "USD",
	"timezone": "Europe/London",
	"numfmt": {
		"decimalChar": ",",
		"groupChar": ".",
		"groupSize": 3,
		"pctFmt": "{n}%",
		"pctChar": "%"
	},
	"locale": "."
}
;
ilib.data.localeinfo_en = {
	"units": "metric",
	"clock": "24",
	"calendar": "gregorian",
	"firstDayOfWeek": 0,
	"language.name": "English",
	"numfmt": {
		"decimalChar": ".",
		"groupChar": ",",
		"groupSize": 3,
		"pctFmt": "{n}%"
	},
	"locale": "en"
}
;
ilib.data.localeinfo_en_US = {
	"clock": "12",
	"currency": "USD",
	"paperSizes": {
		"regular": "8x11",
		"photo": "3x5"
	},
	"region.name": "United States",
	"timezone": "America/New_York",
	"units": "uscustomary",
	"locale": "en-US"
}
;
ilib.data.localeinfo_en_CA = {
	"clock": "12",
	"currency": "CAD",
	"paperSizes": {
		"regular": "8x11",
		"photo": "3x5"
	},
	"region.name": "Canada",
	"timezone": "America/Toronto",
	"locale": "en-CA"
}
;
ilib.data.localeinfo_fr = {
	"calendar": "gregorian",
	"firstDayOfWeek": 1,
	"clock": "24",
	"currencyFormats": {
		"common": "{n} {s}",
		"iso": "{n} {s}"
	},
	"units": "metric",
	"paperSizes": {
		"regular": "A4",
		"photo": "4x6"
	},
	"language.name": "French",
	"numfmt": {
		"decimalChar": ",",
		"groupChar": " ",
		"groupSize": 3,
		"pctFmt": "{n}%"
	},
	"timezone": "Europe/Paris",
	"locale": "fr"
}
;
ilib.data.localeinfo_fr_CA = {
	"clock": "12",
	"currency": "CAD",
	"paperSizes": {
		"regular": "8x11",
		"photo": "3x5"
	},
	"region.name": "Canada",
	"timezone": "America/Toronto",
	"locale": "fr-CA"
}
;
ilib.data.localeinfo_es = {
	"clock": "24",
	"calendar": "gregorian",
	"firstDayOfWeek": 1,
	"units": "metric",
	"timezone": "Europe/Madrid",
	"paperSizes": {
		"regular": "A4",
		"photo": "4x6"
	},
	"language.name": "Spanish",
"numfmt": {
	"decimalChar": ",",
	"groupChar": ".",
	"groupSize": 3,
	"pctFmt": "{n}%",
	"pctChar": "%"
},

	"locale": "es"
}
;
ilib.data.localeinfo_es_MX = {
	"clock": "12",
	"currency": "MXN",
	"region.name": "Mexico",
	"timezone": "America/Mexico_City",
	"locale": "es-MX"
}
;
ilib.data.localeinfo_es_AR = {
	"currency": "ARS",
	"region.name": "Argentina",
	"timezone": "America/Argentina/Buenos_Aires",
	"locale": "es-AR"
}
;
ilib.data.localeinfo_pt = {
	"language.name": "Portuguese",
"numfmt": {
	"decimalChar": ",",
	"groupChar": ".",
	"groupSize": 3,
	"pctFmt": "{n}%",
	"pctChar": "%"
},

	"locale": "pt"
}
;
ilib.data.localeinfo_pt_BR = {
	"currency": "BRL",
	"region.name": "Brazil",
	"timezone": "America/Sao_Paulo",
	"locale": "pt-BR"
}
;
ilib.data.localeinfo_zh = {
	"clock": "12",
	"currencyFormats": {
		"common": "{n}{s}",
		"iso": "{s}{n}"
	},
	"language.name": "Chinese",
	"numfmt": {
		"decimalChar": ".",
		"groupChar": ",",
		"groupSize": 3,
		"pctFmt": "{n}％"
	},
	"locale": "zh"
}
;
ilib.data.localeinfo_zh_CN = {
	"currency": "CNY",
	"region.name": "China",
	"timezone": "Asia/Shanghai",
	"locale": "zh-CN"
}
;
ilib.data.localeinfo_ja = {
	"clock": "24",
	"calendar": "gregorian",
	"firstDayOfWeek": 0,
	"units": "metric",
	"paperSizes": {
		"regular": "A4",
		"photo": "L"
	},
	"language.name": "Japanese",
	"numfmt": {
		"decimalChar": ".",
		"groupChar": "",
		"groupSize": 0,
		"pctFmt": "{n}％"
	},
	"locale": "ja"
}
;
ilib.data.localeinfo_ja_JP = {
	"currency": "JPY",
	"timezone": "Asia/Tokyo",
	"locale": "ja-JP"
}
;
ilib.data.localeinfo_ko = {
	"clock": "12",
	"calendar": "gregorian",
	"firstDayOfWeek": 0,
	"units": "metric",
	"paperSizes": {
		"regular": "A4",
		"photo": "3R"
	},
	"language.name": "Korean",
	"numfmt": {
		"decimalChar": ".",
		"groupChar": ",",
		"groupSize": 3,
		"pctFmt": "{n} %"
	},
	"locale": "ko"
}
;
ilib.data.localeinfo_ko_KR = {
	"currency": "KRW",
	"region.name": "Republic of Korea",
	"timezone": "Asia/Seoul",
	"locale": "ko-KR"
}
;
ilib.data.localeinfo_en_IN = {
	"currency": "INR",
	"timezone": "Asia/Kolkata",
	"locale": "en-IN"
}
;
ilib.data.localeinfo_id = {
	"language.name": "Indonesian",
"numfmt": {
	"decimalChar": ",",
	"groupChar": ".",
	"groupSize": 3,
	"pctFmt": "{n}%",
	"pctChar": "%"
},

	"locale": "id"
}
;
ilib.data.localeinfo_id_ID = {
	"currency": "IDR",
	"timezone": "Asia/Jakarta",
	"locale": "id-ID"
}
;
ilib.data.localeinfo_ru = {
	"language.name": "Russian",
	"numfmt": {
		"decimalChar": ",",
		"groupChar": " ",
		"groupSize": 3,
		"pctFmt": "{n} %"
	},
	"locale": "ru"
}
;
ilib.data.localeinfo_ru_RU = {
	"currency": "RUB",
	"region.name": "Russia",
	"timezone": "Europe/Moscow",
	"locale": "ru-RU"
}
;
ilib.data.localeinfo_en_AU = {
	"clock": "12",	"currency": "AUD",
	"region.name": "Australia",
	"timezone": "Australia/Sydney",
	"locale": "en-AU"
}
;
ilib.data.localeinfo_en_GB = {
	"currency": "GBP",
	"timezone": "Europe/London",
	"units": "imperial",
	"paperSizes": {
		"regular": "A4",
		"photo": "24x16"
	},
	"locale": "en-GB"
}
;
ilib.data.localeinfo_fr_FR = {
	"currency": "EUR",
	"timezone": "Europe/Paris",
	"locale": "fr-FR"
}
;
ilib.data.localeinfo_de = {
	"clock": "24",
	"calendar": "gregorian",
	"firstDayOfWeek": 1,
	"units": "metric",
	"timezone": "Europe/Berlin",
	"paperSizes": {
		"regular": "A4",
		"photo": "4x6"
	},
	"language.name": "German",
	"numfmt": {
		"pctFmt": "{n} %"
	},
	"locale": "de"
}
;
ilib.data.localeinfo_de_DE = {
	"currency": "EUR",
	"timezone": "Europe/Berlin",
	"locale": "de-DE"
}
;
ilib.data.localeinfo_it = {
	"clock": "24",
	"calendar": "gregorian",
	"firstDayOfWeek": 1,
	"units": "metric",
	"timezone": "Europe/Rome",
	"paperSizes": {
		"regular": "A4",
		"photo": "4x6"
	},
	"language.name": "Italian",
"numfmt": {
	"decimalChar": ",",
	"groupChar": ".",
	"groupSize": 3,
	"pctFmt": "{n}%",
	"pctChar": "%"
},

	"locale": "it"
}
;
ilib.data.localeinfo_it_IT = {
	"currency": "EUR",
	"timezone": "Europe/Rome",
	"locale": "it-IT"
}
;
ilib.data.localeinfo_en_ZA = {
	"clock": "12",	"currency": "ZAR",
	"region.name": "South Africa",
	"timezone": "Africa/Johannesburg",
	"locale": "en-ZA"
}
;
ilib.data.localeinfo_en_NG = {
	"currency": "NGN",
	"region.name": "Nigeria",
	"timezone": "Africa/Lagos",
	"locale": "en-NG"
}
;
ilib.data.localeinfo_en_PH = {
	"clock": "12",	"currency": "PHP",
	"region.name": "Philippines",
	"timezone": "Asia/Manila",
	"locale": "en-PH"
}
;
ilib.data.localeinfo_es_ES = {
	"currency": "EUR",
	"region.name": "Spain",
	"timezone": "Europe/Madrid",
	"locale": "es-ES"
}
;
ilib.data.localeinfo_en_PK = {
	"currency": "PKR",
	"region.name": "Pakistan",
	"timezone": "Asia/Karachi",
	"locale": "en-PK"
}
;
ilib.data.localeinfo_vi = {
	"language.name": "Vietnamese",
"numfmt": {
	"decimalChar": ",",
	"groupChar": ".",
	"groupSize": 3,
	"pctFmt": "{n}%",
	"pctChar": "%"
},

	"locale": "vi"
}
;
ilib.data.localeinfo_vi_VN = {
	"currency": "VND",
	"region.name": "Vietnam",
	"timezone": "Asia/Ho_Chi_Minh",
	"locale": "vi-VN"
}
;
ilib.data.localeinfo_xx = {
	"language.name": "Unknown",
	"numfmt": {
		"roundingMode": "halfeven"
	},
	"locale": "xx"
}
;
ilib.data.localeinfo_tr = {
	"currencyFormats": {
		"common": "{n} {s}",
		"iso": "{n} {s}"
	},
	"language.name": "Turkish",
	"numfmt": {
		"decimalChar": ",",
		"groupChar": ".",
		"groupSize": 3,
		"pctFmt": "% {n}",
		"pctChar": "%",
		"roundingMode": "halfup"
	},

	"locale": "tr"
}
;
ilib.data.localeinfo_tr_TR = {
	"currency": "TRY",
	"region.name": "Turkey",
	"timezone": "Europe/Istanbul",
	"locale": "tr-TR"
}
;
/*
 * localeinfo.js - Encode locale-specific defaults
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !data localeinfo

/**
 * @class
 * Create a new locale info instance. Locale info instances give information about
 * the default settings for a particular locale. These settings may be overridden
 * by various parts of the code, and should be used as a fall-back setting of last
 * resort. <p>
 * 
 * Depends directive: !depends localeinfo.js
 * 
 * @constructor
 * @param {ilib.Locale|string=} locale the locale for which the info is sought, or undefined for
 * the current locale
 */
ilib.LocaleInfo = function(locale) {
	/* these are all the defaults. Essentially, en-US */
	this.info = {
		units: "metric",
		clock: "24",
		calendar: "gregorian",
		firstDayOfWeek: 0,
		timezone: "America/Los_Angeles",
		numfmt: {
			decimalChar: ".",
			groupChar: "",
			groupSize: 0,
			pctFmt: "{n}%",
			pctChar: "%",
			roundingMode: "halfdown"
		},
		currencyFormats: {
			common: "{s}{n}",
			iso: "{s} {n}"
		},
		currency: "USD"
	};
	
	switch (typeof(locale)) {
		case "string":
			this.locale = new ilib.Locale(locale);
			break;
		default:
		case "undefined":
			this.locale = new ilib.Locale();
			break;
		case "object":
			this.locale = locale;
			break;
	}

	if (ilib.data["localeinfo"]) {
		this.info = ilib.merge(this.info, ilib.data["localeinfo"]);
	}
	if (ilib.data["localeinfo_" + this.locale.getLanguage()]) {
		this.info = ilib.merge(this.info, ilib.data["localeinfo_" + this.locale.getLanguage()]);
	}
	if (ilib.data["localeinfo_" + this.locale.getLanguage() + "_" + this.locale.getRegion()]) {
		this.info = ilib.merge(this.info, ilib.data["localeinfo_" + this.locale.getLanguage() + "_" + this.locale.getRegion()]);
	}
	if (ilib.data["localeinfo_" + this.locale.getLanguage() + "_" + this.locale.getRegion() + "_" + this.locale.getVariant()]) {
		this.info = ilib.merge(this.info, ilib.data["localeinfo_" + this.locale.getLanguage() + "_" + this.locale.getRegion() + "_" + this.locale.getVariant()]);
	}
};

ilib.LocaleInfo.prototype = {
	/**
	 * Return whether this locale commonly uses the 12- or the 24-hour clock.
	 *  
	 * @returns {string} "12" if the locale commonly uses a 12-hour clock, or "24"
	 * if the locale commonly uses a 24-hour clock. 
	 */
	getClock: function() {
		return this.info.clock;
	},

	/**
	 * Return the locale that this info object was created with.
	 * @returns {ilib.Locale} The locale spec of the locale used to construct this info instance
	 */
	getLocale: function () {
		return this.locale;
	},
	
	/**
	 * Return the name of the measuring system that is commonly used in the given locale.
	 * Valid values are "uscustomary", "imperial", and "metric".
	 * 
	 * @returns {string} The name of the measuring system commonly used in the locale
	 */
	getUnits: function () {
		return this.info.units;
	},
	
	/**
	 * Return the name of the calendar that is commonly used in the given locale.
	 * 
	 * @returns {string} The name of the calendar commonly used in the locale
	 */
	getCalendar: function () {
		return this.info.calendar;
	},
	
	/**
	 * Return the day of week that starts weeks in the current locale. Days are still
	 * numbered the standard way with 0 for Sunday through 6 for Saturday, but calendars 
	 * should be displayed and weeks calculated with the day of week returned from this 
	 * function as the first day of the week.
	 * 
	 * @returns {number} the day of the week that starts weeks in the current locale.
	 */
	getFirstDayOfWeek: function () {
		return this.info.firstDayOfWeek;
	},
	
	/**
	 * Return the default time zone for this locale. Many locales span across multiple
	 * time zones. In this case, the time zone with the largest population is chosen
	 * to represent the locale. This is obviously not that accurate, but then again,
	 * this method's return value should only be used as a default anyways.
	 * @returns {string} the default time zone for this locale.
	 */
	getTimeZone: function () {
		return this.info.timezone;
	},
	
	/**
	 * Return the decimal separator for formatted numbers in this locale.
	 * @returns {string} the decimal separator char
	 */
	getDecimalSeparator: function () {
		return this.info.numfmt.decimalChar;
	},
	
	/**
	 * Return the separator character used to separate groups of digits on the 
	 * integer side of the decimal character.
	 * @returns {string} the grouping separator char
	 */
	getGroupingSeparator: function () {
		return this.info.numfmt.groupChar;
	},
	
	/**
	 * Return the minimum number of digits grouped together on the integer side. 
	 * In western European cultures, groupings are in 1000s, so the number of digits
	 * is 3. In other cultures, the groupings are in 10000s so the number is 4.
	 * @returns {number} the number of digits in a grouping, or 0 for no grouping
	 */
	getGroupingDigits: function () {
		return this.info.numfmt.groupSize;
	},
	
	/**
	 * Return the format template used to format percentages in this locale.
	 * @returns {string} the format template for formatting percentages
	 */
	getPercentageFormat: function () {
		return this.info.numfmt.pctFmt;
	},
	
	/**
	 * Return the symbol used for percentages in this locale.
	 * @returns {string} the symbol used for percentages in this locale
	 */
	getPercentageSymbol: function () {
		return this.info.numfmt.pctChar || "%";
	},

	/**
	 * Return an object containing the format templates for formatting currencies
	 * in this locale. The object has a number of properties in it that each are
	 * a particular style of format. Normally, this contains a "common" and an "iso"
	 * style, but may contain others in the future.
	 * @returns {Object} an object containing the format templates for currencies
	 */
	getCurrencyFormats: function () {
		return this.info.currencyFormats;
	},

	/**
	 * Return the currency that is legal in the locale, or which is most commonly 
	 * used in regular commerce.
	 * @returns {string} the ISO 4217 code for the currency of this locale
	 */
	getCurrency: function () {
		return this.info.currency;
	},
	
	/**
	 * If this locale typically uses a different type of rounding for numeric
	 * formatting other than halfdown, especially for currency, then it can be 
	 * specified in the localeinfo. If the locale uses the default, then this 
	 * method returns undefined. The locale's rounding method overrides the 
	 * rounding method for the currency itself, which can sometimes shared 
	 * between various locales so it is less specific.
	 * @returns {string} the name of the rounding mode typically used in this
	 * locale, or "halfdown" if the locale does not override the default
	 */
	getRoundingMode: function () {
		return this.info.numfmt.roundingMode;
	}
};

/*
 * calendar.js - Represent a calendar object.
 * 
 * Copyright © 2012, JEDL Software, Inc.
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
ilibglobal.js
locale.js
localeinfo.js
*/

/**
 * Interface that all calendars must implement.
 * 
 * Depends directive: !depends calendar.js
 * 
 * @interface
 * @protected
 */
ilib.Cal = function() {
};

/**
 * Factory method to create a new instance of a calendar subclass.<p>
 * 
 * The options parameter can be an object that contains the following
 * properties:
 * 
 * <ul>
 * <li><i>type</i> - specify the type of the calendar desired. The
 * list of valid values changes depending on which calendars are 
 * defined. When assembling your iliball.js, include those calendars 
 * you wish to use in your program or web page, and they will register 
 * themselves with this factory method. The "official", "gregorian",
 * and "julian" calendars are all included by default, as they are the
 * standard calendars for much of the world.
 * <li><i>locale</i> - some calendars vary depending on the locale.
 * For example, the "official" calendar transitions from a Julian-style
 * calendar to a Gregorian-style calendar on a different date for
 * each country, as the governments of those countries decided to
 * adopt the Gregorian calendar at different times. 
 * </ul>
 * 
 * If a locale is specified, but no type, then the calendar that is default for
 * the locale will be instantiated and returned. If neither the type nor
 * the locale are specified, then the calendar for the default locale will
 * be used. 
 * 
 * @param {Object=} options options controlling the construction of this instance, or
 * undefined to use the default options
 * @returns an instance of a calendar object of the appropriate type
 */
ilib.Cal.newInstance = function (options) {
	var locale = options && options.locale,
	type = options && options.type,
	cons;

	if (!locale) {
		locale = new ilib.Locale();	// default locale
	}
	
	if (!type) {
		var info = new ilib.LocaleInfo(locale);
		type = info.getCalendar();
	}
	
	cons = ilib.Cal._constructors[type];
	
	// pass the same options through to the constructor so the subclass
	// has the ability to do something with if it needs to
	return cons && new cons(options);
};

/* place for the subclasses to put their constructors so that the factory method
 * can find them. Do this to add your calendar after it's defined: 
 * ilib.Cal._constructors["mytype"] = ilib.Cal.MyTypeConstructor;
 */
ilib.Cal._constructors = {};

/**
 * Return an array of known calendar types that the factory method can instantiate.
 * 
 * @returns {Array.<string>} an array of calendar types
 */
ilib.Cal.getCalendars = function () {
	var arr = [],
		c;
	
	for (c in ilib.Cal._constructors) {
		if (c && ilib.Cal._constructors[c]) {
			arr.push(c); // code like a pirate
		}
	}
	
	return arr;
};

ilib.Cal.prototype = {
	/**
	 * Return the type of this calendar.
	 * 
	 * @returns {string} the name of the type of this calendar 
	 */
	getType: function() {
		throw "Cannot call methods of abstract class ilib.Cal";
	},
	
	/**
	 * Return the number of months in the given year. The number of months in a year varies
	 * for some luni-solar calendars because in some years, an extra month is needed to extend the 
	 * days in a year to an entire solar year. The month is represented as a 1-based number
	 * where 1=first month, 2=second month, etc.
	 * 
	 * @param {number} year a year for which the number of months is sought
	 * @returns {number} The number of months in the given year
	 */
	getNumMonths: function(year) {
		throw "Cannot call methods of abstract class ilib.Cal";
	},
	
	/**
	 * Return the number of days in a particular month in a particular year. This function
	 * can return a different number for a month depending on the year because of things
	 * like leap years.
	 * 
	 * @param {number} month the month for which the length is sought
	 * @param {number} year the year within which that month can be found
	 * @returns {number} the number of days within the given month in the given year
	 */
	getMonLength: function(month, year) {
		throw "Cannot call methods of abstract class ilib.Cal";
	},
	
	/**
	 * Return true if the given year is a leap year in this calendar.
	 * The year parameter may be given as a number.
	 * 
	 * @param {number} year the year for which the leap year information is being sought
	 * @returns {boolean} true if the given year is a leap year
	 */
	isLeapYear: function(year) {
		throw "Cannot call methods of abstract class ilib.Cal";
	}
};

/*
 * julianday.js - A Julian date object.
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

/* !depends locale.js */

/**
 * @class
 * A Julian Day class. A Julian Day is a date based on the Julian Day count
 * of time invented by Joseph Scaliger in 1583 for use with astronomical calculations. 
 * Do not confuse it with a date in the Julian calendar, which it has very
 * little in common with. The naming is unfortunately close, and comes from history.<p>
 * 
 * Depends directive: !depends julianday.js
 * 
 * @constructor
 * @param {number} num the Julian Day expressed as a floating point number 
 */
ilib.JulianDay = function(num) {
	this.jd = num;
	this.days = Math.floor(this.jd);
	this.frac = num - this.days;
};

ilib.JulianDay.prototype = {
	/**
	 * Return the integral portion of this Julian Day instance. This corresponds to
	 * the number of days since the beginning of the epoch.
	 * 
	 * @returns {number} the integral portion of this Julian Day
	 */
	getDays: function() {
		return this.days;
	},
	
	/**
	 * Set the date of this Julian Day instance.
	 * 
	 * @param {number} days the julian date expressed as a floating point number
	 */
	setDays: function(days) {
		this.days = Math.floor(days);
		this.jd = this.days + this.frac;
	},
	
	/**
	 * Return the fractional portion of this Julian Day instance. This portion 
	 * corresponds to the time of day for the instance.
	 */
	getDayFraction: function() {
		return this.frac;
	},
	
	/**
	 * Set the fractional part of the Julian Day. The fractional part represents
	 * the portion of a fully day. Julian dates start at noon, and proceed until
	 * noon of the next day. That would mean midnight is represented as a fractional
	 * part of 0.5.
	 * 
	 * @param {number} fraction The fractional part of the Julian date
	 */
	setDayFraction: function(fraction) {
		var t = Math.floor(fraction);
		this.frac = fraction - t;
		this.jd = this.days + this.frac;
	},
	
	/** 
	 * Return the Julian Day expressed as a floating point number.
	 * @returns {number} the Julian Day as a number
	 */
	getDate: function () {
		return this.jd;
	},
	
	/**
	 * Set the date of this Julian Day instance.
	 * 
	 * @param {number} num the numeric Julian Day to set into this instance
	 */
	setDate: function (num) {
		this.jd = num;
	},
	
	/**
	 * Add an offset to the current date instance. The offset should be expressed in
	 * terms of Julian days. That is, each integral unit represents one day of time, and
	 * fractional part represents a fraction of a regular 24-hour day.
	 * 
	 * @param {number} offset an amount to add (or subtract) to the current result instance.
	 */
	addDate: function(offset) {
		if (typeof(offset) === 'number') {
			this.jd += offset;
			this.days = Math.floor(this.jd);
			this.frac = this.jd - this.days;
		}
	}
};

/*
 * gregorian.js - Represent a Gregorian calendar object.
 * 
 * Copyright © 2012, JEDL Software, Inc.
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


/* !depends calendar.js locale.js date.js julianday.js util/utils.js */

/**
 * @class
 * Construct a new Gregorian calendar object. This class encodes information about
 * a Gregorian calendar.<p>
 * 
 * Depends directive: !depends gregorian.js
 * 
 * @constructor
 * @implements ilib.Cal
 */
ilib.Cal.Gregorian = function() {
	this.type = "gregorian";
};

/**
 * @private
 * @const
 * @type Array.<number> 
 * the lengths of each month 
 */
ilib.Cal.Gregorian.monthLengths = [
	31,  /* Jan */
	28,  /* Feb */
	31,  /* Mar */
	30,  /* Apr */
	31,  /* May */
	30,  /* Jun */
	31,  /* Jul */
	31,  /* Aug */
	30,  /* Sep */
	31,  /* Oct */
	30,  /* Nov */
	31   /* Dec */
];

/**
 * Return the number of months in the given year. The number of months in a year varies
 * for some luni-solar calendars because in some years, an extra month is needed to extend the 
 * days in a year to an entire solar year. The month is represented as a 1-based number
 * where 1=first month, 2=second month, etc.
 * 
 * @param {number} year a year for which the number of months is sought
 * @returns {number} The number of months in the given year
 */
ilib.Cal.Gregorian.prototype.getNumMonths = function(year) {
	return 12;
};

/**
 * Return the number of days in a particular month in a particular year. This function
 * can return a different number for a month depending on the year because of things
 * like leap years.
 * 
 * @param {number} month the month for which the length is sought
 * @param {number} year the year within which that month can be found
 * @returns {number} the number of days within the given month in the given year
 */
ilib.Cal.Gregorian.prototype.getMonLength = function(month, year) {
	if (month !== 2 || !this.isLeapYear(year)) {
		return ilib.Cal.Gregorian.monthLengths[month-1];
	} else {
		return 29;
	}
};

/**
 * Return true if the given year is a leap year in the Gregorian calendar.
 * The year parameter may be given as a number, or as a GregDate object.
 * @param {number|ilib.Date.GregDate} year the year for which the leap year information is being sought
 * @returns {boolean} true if the given year is a leap year
 */
ilib.Cal.Gregorian.prototype.isLeapYear = function(year) {
	var y = (typeof(year) === 'number' ? year : year.getYears());
	var centuries = ilib.mod(y, 400);
	return (ilib.mod(y, 4) === 0 && centuries !== 100 && centuries !== 200 && centuries !== 300);
};

/**
 * Return the type of this calendar.
 * 
 * @returns {string} the name of the type of this calendar 
 */
ilib.Cal.Gregorian.prototype.getType = function() {
	return this.type;
};

/**
 * Return a date instance for this calendar type using the given
 * options.
 * @param {Object} options options controlling the construction of 
 * the date instance
 * @returns {ilib.Date} a date appropriate for this calendar type
 */
ilib.Cal.Gregorian.prototype.newDateInstance = function (options) {
	return new ilib.Date.GregDate(options);
};

/* register this calendar for the factory method */
ilib.Cal._constructors["gregorian"] = ilib.Cal.Gregorian;

/*
 * gregoriandate.js - Represent a date in the Gregorian calendar
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

/* !depends date.js calendar/gregorian.js util/utils.js localeinfo.js julianday.js */

/**
 * @class
 * 
 * Construct a new Gregorian date object. The constructor parameters can 
 * contain any of the following properties:
 * 
 * <ul>
 * <li><i>unixtime<i> - sets the time of this instance according to the given 
 * unix time. Unix time is the number of milliseconds since midnight on Jan 1, 1970.
 * 
 * <li><i>julianday</i> - sets the time of this instance according to the given
 * Julian Day instance or the Julian Day given as a float
 * 
 * <li><i>year</i> - any integer, including 0
 * 
 * <li><i>month</i> - 1 to 12, where 1 means January, 2 means February, etc.
 * 
 * <li><i>day</i> - 1 to 31
 * 
 * <li><i>hour</i> - 0 to 23. A formatter is used to display 12 hour clocks, but this representation 
 * is always done with an unambiguous 24 hour representation
 * 
 * <li><i>minute</i> - 0 to 59
 * 
 * <li><i>second</i> - 0 to 59
 * 
 * <li><i>millisecond</i> - 0 to 999
 * 
 * <li><i>timezone</i> - the ilib.TimeZone instance or time zone name as a string 
 * of this gregorian date. The date/time is kept in the local time. The time zone
 * is used later if this date is formatted according to a different time zone and
 * the difference has to be calculated, or when the date format has a time zone
 * component in it.
 * 
 * <li><i>locale</i> - locale for this gregorian date. If the time zone is not 
 * given, it can be inferred from this locale. For locales that span multiple
 * time zones, the one with the largest population is chosen as the one that 
 * represents the locale. 
 * </ul>
 *
 * If the constructor is called with another Gregorian date instance instead of
 * a parameter block, the other instance acts as a parameter block and its
 * settings are copied into the current instance.<p>
 * 
 * If the constructor is called with no arguments at all or if none of the 
 * properties listed above 
 * from <i>unixtime</i> through <i>millisecond</i> are present, then the date 
 * components are 
 * filled in with the current date at the time of instantiation. Note that if
 * you do not give the time zone when defaulting to the current time and the 
 * time zone for all of ilib was not set with <i>ilib.setTimeZone()</i>, then the
 * time zone will default to UTC ("Universal Time, Coordinated" or "Greenwich 
 * Mean Time").<p>
 * 
 * If any of the properties from <i>year</i> through <i>millisecond</i> are not
 * specified in the params, it is assumed that they have the smallest possible
 * value in the range for the property (zero or one).<p>
 * 
 * Depends directive: !depends gregoriandate.js
 * 
 * @constructor
 * @extends ilib.Date
 * @param {Object=} params parameters that govern the settings and behaviour of this Gregorian date
 */
ilib.Date.GregDate = function(params) {
	this.cal = new ilib.Cal.Gregorian();

	if (params) {
		if (params.timezone) {
			this.timezone = params.timezone;
		}
		if (params.locale) {
			this.locale = (typeof(params.locale) === 'string') ? new ilib.Locale(params.locale) : params.locale;
			if (!this.timezone) {
				var li = new ilib.LocaleInfo(this.locale);
				this.timezone = li.getTimeZone(); 
			}
		}
		
		if (typeof(params.unixtime) != 'undefined') {
			this.setTime(parseInt(params.unixtime, 10));
		} else if (typeof(params.julianday) != 'undefined') {
			this.setJulianDay(parseFloat(params.julianday));
		} else if (params.year || params.month || params.day || params.hour ||
				params.minute || params.second || params.millisecond ) {
			this.year = parseInt(params.year, 10) || 0;
			this.month = parseInt(params.month, 10) || 1;
			this.day = parseInt(params.day, 10) || 1;
			this.hour = parseInt(params.hour, 10) || 0;
			this.minute = parseInt(params.minute, 10) || 0;
			this.second = parseInt(params.second, 10) || 0;
			this.millisecond = parseInt(params.millisecond, 10) || 0;
		} else if (typeof(params.rd) != 'undefined') {
			// private parameter. Do not document this!
			this.setRd(params.rd);
		} else {
			// Date.getTime() gets unix time in UTC
			var now = new Date();
			this.setTime(now.getTime() - now.getTimezoneOffset()*60000);
		}
	} else {
		// Date.getTime() gets unix time in UTC
		var now = new Date();
		this.setTime(now.getTime() - now.getTimezoneOffset()*60000);
	}
};

ilib.Date.GregDate.prototype = new ilib.Date();
ilib.Date.GregDate.prototype.parent = ilib.Date;
ilib.Date.GregDate.prototype.constructor = ilib.Date.GregDate;

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month, for a non-leap year 
 */
ilib.Date.GregDate.cumMonthLengths = [
    0,   /* Jan */
	31,  /* Feb */
	59,  /* Mar */
	90,  /* Apr */
	120, /* May */
	151, /* Jun */
	181, /* Jul */
	212, /* Aug */
	243, /* Sep */
	273, /* Oct */
	304, /* Nov */
	334, /* Dec */
	365
];

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month, for a leap year 
 */
ilib.Date.GregDate.cumMonthLengthsLeap = [
	0,   /* Jan */
	31,  /* Feb */
	60,  /* Mar */
	91,  /* Apr */
	121, /* May */
	152, /* Jun */
	182, /* Jul */
	213, /* Aug */
	244, /* Sep */
	274, /* Oct */
	305, /* Nov */
	335, /* Dec */
	366
];

/**
 * @private
 * @const
 * @type number
 * the difference between a zero Julian day and the first Gregorian date. 
 */
ilib.Date.GregDate.epoch = 1721424.5;

/**
 * @private
 * Return the Rata Die (fixed day) number of the given date.
 * 
 * @param {Object} date the date components to calculate
 * @returns {number} the rd date as a number
 */
ilib.Date.GregDate.prototype.calcRataDie = function(date) {
	var years = 365 * (date.year - 1) +
		Math.floor((date.year-1)/4) -
		Math.floor((date.year-1)/100) +
		Math.floor((date.year-1)/400);
	var dayInYear = (date.month > 1 ? ilib.Date.GregDate.cumMonthLengths[date.month-1] : 0) +
		date.day +
		(this.cal.isLeapYear(date.year) && date.month > 2 ? 1 : 0);
	var rdtime = (date.hour * 3600000 +
		date.minute * 60000 +
		date.second * 1000 +
		date.millisecond) / 
		86400000; 
	/*
	debug("getRataDie: converting " +  JSON.stringify(this));
	debug("getRataDie: year is " +  years);
	debug("getRataDie: day in year is " +  dayInYear);
	debug("getRataDie: rdtime is " +  rdtime);
	debug("getRataDie: rd is " +  (years + dayInYear + rdtime));
	*/
	return years + dayInYear + rdtime;
};

/**
 * @private
 * Return the Rata Die (fixed day) number of this date.
 * 
 * @returns {number} the rd date as a number
 */
ilib.Date.GregDate.prototype.getRataDie = function() {
	return this.calcRataDie(this);
};

/**
 * @private
 * Calculate date components for the given RD date.
 * @param {number} rd the RD date to calculate components for
 * @returns {Object} object containing the component fields
 */
ilib.Date.GregDate.prototype.calcComponents = function (rd) {
	var days400,
		days100,
		days4,
		days1,
		day,
		years400,
		years100,
		years4,
		years1,
		year,
		month,
		remainder,
		jdstart,
		cumulative,
		ret = {};
	
	years400 = Math.floor((rd - 1) / 146097);
	days400 = ilib.mod((rd - 1), 146097);
	years100 = Math.floor(days400 / 36524);
	days100 = ilib.mod(days400, 36524);
	years4 = Math.floor(days100 / 1461);
	days4 = ilib.mod(days100, 1461);
	years1 = Math.floor(days4 / 365);
	days1 = ilib.mod(days4, 365) + 1;

	/*
	console.log("rd starts out " + rd);
	console.log("years400 is " + years400);
	console.log("days400 is " + days400);
	console.log("years100 is " + years100);
	console.log("days100 is " + days100);
	console.log("years4 is " + years4);
	console.log("days4 is " + days4);
	console.log("years1 is " + years1);
	console.log("days1 is " + days1);
	*/
	
	ret.year = 400 * years400 + 100 * years100 + 4 * years4 + years1;
	if (years100 !== 4 && years1 !== 4) {
		ret.year++;
	}
	ret.month = 1;
	ret.day = 1;
	ret.hour = 0;
	ret.minute = 0;
	ret.second = 0;
	ret.millisecond = 0;
	
	remainder = rd - this.calcRataDie(ret) + 1;
	
	cumulative = this.cal.isLeapYear(ret.year) ? 
		ilib.Date.GregDate.cumMonthLengthsLeap : 
		ilib.Date.GregDate.cumMonthLengths; 
	
	ret.month = ilib.bsearch(remainder, cumulative);
	remainder = remainder - cumulative[ret.month-1];
	
	ret.day = Math.floor(remainder);
	remainder -= ret.day;
	// now convert to milliseconds for the rest of the calculation
	remainder = Math.round(remainder * 86400000);
	
	ret.hour = Math.floor(remainder/3600000);
	remainder -= ret.hour * 3600000;
	
	ret.minute = Math.floor(remainder/60000);
	remainder -= ret.minute * 60000;
	
	ret.second = Math.floor(remainder/1000);
	remainder -= ret.second * 1000;
	
	ret.millisecond = remainder;
	
	return ret;
};

/**
 * @private
 * Set the date components of this instance based on the given rd.
 * @param {number} rd the rata die date to set
 */
ilib.Date.GregDate.prototype.setRd = function (rd) {
	var fields = this.calcComponents(rd);
	
	/**
	 * Year in the Gregorian calendar.
	 * @type number
	 */
	this.year = fields.year;
	
	/**
	 * The month number, ranging from 1 (January) to 12 (December).
	 * @type number
	 */
	this.month = fields.month;
	
	/**
	 * The day of the month. This ranges from 1 to 31.
	 * @type number
	 */
	this.day = fields.day;
	
	/**
	 * The hour of the day. This can be a number from 0 to 23, as times are
	 * stored unambiguously in the 24-hour clock.
	 * @type number
	 */
	this.hour = fields.hour;
	
	/**
	 * The minute of the hours. Ranges from 0 to 59.
	 * @type number
	 */
	this.minute = fields.minute;
	
	/**
	 * The second of the minute. Ranges from 0 to 59.
	 * @type number
	 */
	this.second = fields.second;
	
	/**
	 * The millisecond of the second. Ranges from 0 to 999.
	 * @type number
	 */
	this.millisecond = fields.millisecond;
};

/**
 * Set the date of this instance using a Julian Day.
 * @param {number} date the Julian Day to use to set this date
 */
ilib.Date.GregDate.prototype.setJulianDay = function (date) {
	var jd = (typeof(date) === 'number') ? new ilib.JulianDay(date) : date,
		rd;	// rata die -- # of days since the beginning of the calendar
	
	rd = jd.getDate() - ilib.Date.GregDate.epoch; 	// Julian Days start at noon
	this.setRd(rd);
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @returns {number} the day of the week
 */
ilib.Date.GregDate.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.getRataDie());
	return ilib.mod(rd, 7);
};

/**
 * @private
 * Return the rd of the particular day of the week on or before the given rd.
 * eg. The Sunday on or before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @returns {number} the day of the week
 */
ilib.Date.GregDate.prototype.onOrBeforeRd = function(rd, dayOfWeek) {
	return rd - ilib.mod(Math.floor(rd) - dayOfWeek, 7);
};

/**
 * @private
 * Return the rd of the particular day of the week on or before the given rd.
 * eg. The Sunday on or before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @returns {number} the day of the week
 */
ilib.Date.GregDate.prototype.onOrAfterRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd+6, dayOfWeek);
};

/**
 * @private
 * Return the rd of the particular day of the week before the given rd.
 * eg. The Sunday before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @returns {number} the day of the week
 */
ilib.Date.GregDate.prototype.beforeRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd-1, dayOfWeek);
};

/**
 * @private
 * Return the rd of the particular day of the week after the given rd.
 * eg. The Sunday after the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @returns {number} the day of the week
 */
ilib.Date.GregDate.prototype.afterRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd+7, dayOfWeek);
};

/**
 * @private
 * Return the rd of the first Sunday of the given ISO year.
 * @param {number} year the year for which the first Sunday is being sought
 * @returns the rd of the first Sunday of the ISO year
 */
ilib.Date.GregDate.prototype.firstSunday = function (year) {
	var jan1 = this.calcRataDie({
		year: year,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	var firstThu = this.onOrAfterRd(jan1, 4);
	return this.beforeRd(firstThu, 0);
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week before the current date that is being sought
 * @returns {ilib.Date.GregDate} the date being sought
 */
ilib.Date.GregDate.prototype.before = function (dow) {
	return new ilib.Date.GregDate({rd: this.beforeRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week after the current date that is being sought
 * @returns {ilib.Date.GregDate} the date being sought
 */
ilib.Date.GregDate.prototype.after = function (dow) {
	return new ilib.Date.GregDate({rd: this.afterRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week on or before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or before the current date that is being sought
 * @returns {ilib.Date.GregDate} the date being sought
 */
ilib.Date.GregDate.prototype.onOrBefore = function (dow) {
	return new ilib.Date.GregDate({rd: this.onOrBeforeRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week on or after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or after the current date that is being sought
 * @returns {ilib.Date.GregDate} the date being sought
 */
ilib.Date.GregDate.prototype.onOrAfter = function (dow) {
	return new ilib.Date.GregDate({rd: this.onOrAfterRd(this.getRataDie(), dow)});
};

/**
 * Return the ISO 8601 week number in the current year for the current date. The week
 * number ranges from 1 to 53, as some years have 53 weeks assigned to them, and most
 * only 52.
 * 
 * @returns {number} the week number for the current date
 */
ilib.Date.GregDate.prototype.getWeekOfYear = function() {
	var rd = Math.floor(this.getRataDie()),
		yearStart = this.firstSunday(this.year),
		nextYear;
	
	// if we have a January date, it may be in this ISO year or the previous year
	if (rd < yearStart) {
		yearStart = this.firstSunday(this.year-1);
	} else if (this.month == 12 && this.day > 25) {
		// if we have a late December date, it may be in this ISO year, or the next year
		nextYear = this.firstSunday(this.year+1);
		if (rd >= nextYear) {
			yearStart = nextYear;
		}
	}
	
	return Math.floor((rd-yearStart)/7) + 1;
};

/**
 * Return the ordinal day of the year. Days are counted from 1 and proceed linearly up to 
 * 365, regardless of months or weeks, etc. That is, January 1st is day 1, and 
 * December 31st is 365 in regular years, or 366 in leap years.
 * @returns {number} the ordinal day of the year
 */
ilib.Date.GregDate.prototype.getDayOfYear = function() {
	var cumulativeMap = this.cal.isLeapYear(this.year) ? 
		ilib.Date.GregDate.cumMonthLengthsLeap : 
		ilib.Date.GregDate.cumMonthLengths; 
		
	return cumulativeMap[this.month-1] + this.day;
};

/**
 * Return the ordinal number of the week within the month. The first week of a month is
 * the first one that contains 4 or more days in that month. If any days precede this
 * first week, they are marked as being in week 0. This function returns values from 0
 * through 6.<p>
 * 
 * The locale is a required parameter because different locales that use the same 
 * Gregorian calendar consider different days of the week to be the beginning of
 * the week. This can affect the week of the month in which some days are located.
 * 
 * @param {ilib.Locale|string} locale the locale or locale spec to use when figuring out 
 * the first day of the week
 * @returns {number} the ordinal number of the week within the current month
 */
ilib.Date.GregDate.prototype.getWeekOfMonth = function(locale) {
	var li = new ilib.LocaleInfo(locale),
		first = this.calcRataDie({
			year: this.year,
			month: this.month,
			day: 1,
			hour: 0,
			minute: 0,
			second: 0,
			millisecond: 0
		}),
		rd = this.getRataDie(),
		weekStart = this.onOrAfterRd(first, li.getFirstDayOfWeek());
	if (weekStart - first > 3) {
		// if the first week has 4 or more days in it of the current month, then consider
		// that week 1. Otherwise, it is week 0. To make it week 1, move the week start
		// one week earlier.
		weekStart -= 7;
	}
	return Math.floor((rd - weekStart) / 7) + 1;
};

/**
 * Return the era for this date as a number. The value for the era for Gregorian 
 * calendars is -1 for "before the common era" (BCE) and 1 for "the common era" (CE). 
 * BCE dates are any date before Jan 1, 1 CE. In the proleptic Gregorian calendar, 
 * there is a year 0, so any years that are negative or zero are BCE. In the Julian
 * calendar, there is no year 0. Instead, the calendar goes straight from year -1 to 
 * 1.
 * @returns {number} 1 if this date is in the common era, -1 if it is before the 
 * common era 
 */
ilib.Date.GregDate.prototype.getEra = function() {
	return (this.year < 1) ? -1 : 1;
};

/**
 * Return the unix time equivalent to this Gregorian date instance. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970. This method only
 * returns a valid number for dates between midnight, Jan 1, 1970 and  
 * Jan 19, 2038 at 3:14:07am when the unix time runs out. If this instance 
 * encodes a date outside of that range, this method will return -1.
 * 
 * @returns {number} a number giving the unix time, or -1 if the date is outside the
 * valid unix time range
 */
ilib.Date.GregDate.prototype.getTime = function() {
	var rd = this.calcRataDie({
		year: this.year,
		month: this.month,
		day: this.day,
		hour: this.hour,
		minute: this.minute,
		second: this.second,
		millisecond: 0
	});
	var unix;

	// earlier than Jan 1, 1970
	// or later than Jan 19, 2038 at 3:14:07am
	if (rd < 719163 || rd > 744018.134803241) { 
		return -1;
	}

	// avoid the rounding errors in the floating point math by only using
	// the whole days from the rd, and then calculating the milliseconds directly
	var seconds = Math.floor(rd - 719163) * 86400 + 
		this.hour * 3600 +
		this.minute * 60 +
		this.second;
	var millis = seconds * 1000 + this.millisecond;
	
	return millis;
};

/**
 * Set the time of this instance according to the given unix time. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970.
 * 
 * @param {number} millis the unix time to set this date to in milliseconds 
 */
ilib.Date.GregDate.prototype.setTime = function(millis) {
	var rd = 719163 + millis / 86400000;
	this.setRd(rd);
};

/**
 * Return a Javascript Date object that is equivalent to this Gregorian date
 * object.
 * 
 * @returns {Date|undefined} a javascript Date object
 */
ilib.Date.GregDate.prototype.getJSDate = function() {
	var unix = this.getTime();
	return (unix === -1) ? undefined : new Date(unix); 
};

/**
 * Return the Julian Day equivalent to this calendar date as a number.
 * 
 * @return {number} the julian date equivalent of this date
 */
ilib.Date.GregDate.prototype.getJulianDay = function() {
	return this.getRataDie() + ilib.Date.GregDate.epoch;
};

/**
 * Return the name of the calendar that governs this date.
 * 
 * @return {string} a string giving the name of the calendar
 */
ilib.Date.GregDate.prototype.getCalendar = function() {
	return "gregorian";
};

/**
 * Return the time zone associated with this Gregorian date, or 
 * undefined if none was specified in the constructor.
 * 
 * @return {string|undefined} the name of the time zone for this date instance
 */
ilib.Date.GregDate.prototype.getTimeZone = function() {
	return this.timezone;
};

// register with the factory method
ilib.Date._constructors["gregorian"] = ilib.Date.GregDate;
ilib.data.timezones = {"Europe/Sofia":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Africa/Douala":{"o":"1:0","f":"WAT"},"America/Dawson":{"o":"-8:0","f":"P{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Asia/Bangkok":{"o":"7:0","f":"ICT"},"Asia/Yerevan":{"o":"4:0","f":"AMT"},"America/Bogota":{"o":"-5:0","f":"CO{c}T","e":{"m":4,"r":"4","t":"0:0"},"s":{"m":5,"r":"3","t":"0:0","v":"1:0","c":"S"}},"Asia/Colombo":{"o":"5:30","f":"IST"},"Africa/Kampala":{"o":"3:0","f":"EAT"},"Africa/Blantyre":{"o":"2:0","f":"CAT"},"Europe/Volgograd":{"o":"4:0","f":"VOLT"},"Atlantic/St_Helena":{"o":"0:0","f":"GMT"},"Africa/Malabo":{"o":"1:0","f":"WAT"},"Asia/Nicosia":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Resolute":{"o":"-6:0","f":"C{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Danmarkshavn":{"o":"0:0","f":"GMT"},"America/Regina":{"o":"-6:0","f":"CST"},"America/Anguilla":{"o":"-4:0","f":"AST"},"Asia/Amman":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l5","t":"0:0","z":"s"},"s":{"m":3,"r":"l4","t":"24:0","v":"1:0","c":"S"}},"Europe/Brussels":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Europe/Simferopol":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Argentina/Ushuaia":{"o":"-3:0","f":"ART"},"America/North_Dakota/Center":{"o":"-6:0","f":"C{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Indian/Kerguelen":{"o":"5:0","f":"TFT"},"Europe/Istanbul":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Pacific/Chuuk":{"o":"10:0","f":"CHUT"},"Etc/UTC":{"o":"0:0","f":"UTC"},"America/Bahia_Banderas":{"o":"-6:0","f":"C{c}T","e":{"m":10,"r":"l0","t":"2:0","c":"S"},"s":{"m":4,"r":"0>1","t":"2:0","v":"1:0","c":"D"}},"Pacific/Rarotonga":{"o":"-10:0","f":"CK{c}T","e":{"m":3,"r":"0>1","t":"0:0"},"s":{"m":10,"r":"l0","t":"0:0","v":"0:30","c":"HS"}},"Asia/Hebron":{"o":"2:0","f":"EET"},"Australia/Broken_Hill":{"o":"9:30","f":"CST","s":{"m":10,"r":"0>1","t":"2:0","z":"s","v":"1:0"},"e":{"m":4,"r":"0>1","t":"2:0","z":"s"}},"PST8PDT":{"o":"-8:0","f":"P{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Antarctica/Casey":{"o":"8:0","f":"WST"},"Europe/Stockholm":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Africa/Bamako":{"o":"0:0","f":"GMT"},"America/St_Johns":{"o":"-3:30","f":"N{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Africa/Dar_es_Salaam":{"o":"3:0","f":"EAT"},"Asia/Novosibirsk":{"o":"7:0","f":"NOVT"},"America/Argentina/Tucuman":{"o":"-3:0","f":"AR{c}T","e":{"m":3,"r":"0>15","t":"0:0"},"s":{"m":10,"r":"0>15","t":"0:0","v":"1:0","c":"S"}},"Asia/Sakhalin":{"o":"11:0","f":"SAKT"},"America/Curacao":{"o":"-4:0","f":"AST"},"Europe/Budapest":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Africa/Tunis":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"2:0","z":"s"},"s":{"m":3,"r":"l0","t":"2:0","z":"s","v":"1:0","c":"S"}},"Pacific/Guam":{"o":"10:0","f":"ChST"},"Africa/Asmara":{"o":"3:0","f":"EAT"},"Africa/Maseru":{"o":"2:0","f":"SAST"},"America/Asuncion":{"o":"-4:0","f":"PY{c}T","e":{"m":4,"r":"0>8","t":"0:0"},"s":{"m":10,"r":"0>1","t":"0:0","v":"1:0","c":"S"}},"America/Indiana/Winamac":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Europe/Vaduz":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Asia/Ulaanbaatar":{"o":"8:0","f":"ULA{c}T","s":{"m":3,"r":"l6","t":"2:0","v":"1:0","c":"S"},"e":{"m":9,"r":"l6","t":"2:0"}},"Asia/Vientiane":{"o":"7:0","f":"ICT"},"Africa/Niamey":{"o":"1:0","f":"WAT"},"America/Thunder_Bay":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Asia/Brunei":{"o":"8:0","f":"BNT"},"Africa/Djibouti":{"o":"3:0","f":"EAT"},"Asia/Tbilisi":{"o":"4:0","f":"GET"},"America/Merida":{"o":"-6:0","f":"C{c}T","e":{"m":10,"r":"l0","t":"2:0","c":"S"},"s":{"m":4,"r":"0>1","t":"2:0","v":"1:0","c":"D"}},"America/Recife":{"o":"-3:0","f":"BRT"},"Indian/Reunion":{"o":"4:0","f":"RET"},"Asia/Oral":{"o":"5:0","f":"ORAT"},"Africa/Lusaka":{"o":"2:0","f":"CAT"},"America/Tortola":{"o":"-4:0","f":"AST"},"Africa/Ouagadougou":{"o":"0:0","f":"GMT"},"Asia/Kuching":{"o":"8:0","f":"MYT"},"America/Tegucigalpa":{"o":"-6:0","f":"C{c}T","e":{"m":8,"r":"1>1","t":"0:0","c":"S"},"s":{"m":5,"r":"0>1","t":"0:0","v":"1:0","c":"D"}},"Asia/Novokuznetsk":{"o":"7:0","f":"NOVT"},"Asia/Bishkek":{"o":"6:0","f":"KGT"},"Europe/Vilnius":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Moncton":{"o":"-4:0","f":"A{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Maceio":{"o":"-3:0","f":"BRT"},"Africa/Dakar":{"o":"0:0","f":"GMT"},"America/Belize":{"o":"-6:0","f":"C{c}T","e":{"m":2,"r":"12","t":"0:0","c":"S"},"s":{"m":12,"r":"18","t":"0:0","v":"1:0","c":"D"}},"Etc/GMT":{"o":"0:0","f":"GMT"},"America/Cuiaba":{"o":"-4:0","f":"AM{c}T","e":{"m":2,"r":"0>15","t":"0:0"},"s":{"m":10,"r":"0>15","t":"0:0","v":"1:0","c":"S"}},"Asia/Tashkent":{"o":"5:0","f":"UZT"},"Atlantic/Canary":{"o":"0:0","f":"WE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Rankin_Inlet":{"o":"-6:0","f":"C{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Asia/Jerusalem":{"o":"2:0","f":"I{c}T","e":{"m":9,"r":"13","t":"2:0","c":"S"},"s":{"m":3,"r":"5>26","t":"2:0","v":"1:0","c":"D"}},"Antarctica/Rothera":{"o":"-3:0","f":"ROTT"},"Indian/Cocos":{"o":"6:30","f":"CCT"},"America/Glace_Bay":{"o":"-4:0","f":"A{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Atlantic/Cape_Verde":{"o":"-1:0","f":"CVT"},"America/Cambridge_Bay":{"o":"-7:0","f":"M{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Indian/Mauritius":{"o":"4:0","f":"MU{c}T","e":{"m":3,"r":"l0","t":"2:0"},"s":{"m":10,"r":"l0","t":"2:0","v":"1:0","c":"S"}},"Etc/GMT-14":{"o":"14:0","f":"GMT-14"},"Australia/Brisbane":{"o":"10:0","f":"EST","e":{"m":3,"r":"0>1","t":"2:0","z":"s"},"s":{"m":10,"r":"l0","t":"2:0","z":"s","v":"1:0"}},"Etc/GMT-13":{"o":"13:0","f":"GMT-13"},"Etc/GMT-12":{"o":"12:0","f":"GMT-12"},"Etc/GMT-11":{"o":"11:0","f":"GMT-11"},"America/Grenada":{"o":"-4:0","f":"AST"},"Etc/GMT-10":{"o":"10:0","f":"GMT-10"},"Antarctica/Vostok":{"o":"6:0","f":"VOST"},"Etc/GMT+11":{"o":"-11:0","f":"GMT+11"},"Etc/GMT+12":{"o":"-12:0","f":"GMT+12"},"Pacific/Auckland":{"o":"12:0","f":"NZ{c}T","e":{"m":4,"r":"0>1","t":"2:0","z":"s","c":"S"},"s":{"m":9,"r":"l0","t":"2:0","z":"s","v":"1:0","c":"D"}},"Antarctica/DumontDUrville":{"o":"10:0","f":"DDUT"},"Etc/GMT+10":{"o":"-10:0","f":"GMT+10"},"Africa/Nairobi":{"o":"3:0","f":"EAT"},"Pacific/Norfolk":{"o":"11:30","f":"NFT"},"Europe/Paris":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Asia/Irkutsk":{"o":"9:0","f":"IRKT"},"Pacific/Apia":{"o":"13:0","f":"WST"},"America/Caracas":{"o":"-4:30","f":"VET"},"Pacific/Chatham":{"o":"12:45","f":"CHA{c}T","e":{"m":4,"r":"0>1","t":"2:45","z":"s","c":"S"},"s":{"m":9,"r":"l0","t":"2:45","z":"s","v":"1:0","c":"D"}},"Africa/Maputo":{"o":"2:0","f":"CAT"},"America/Metlakatla":{"o":"-8:0","f":"MeST"},"Atlantic/South_Georgia":{"o":"-2:0","f":"GST"},"Asia/Baghdad":{"o":"3:0","f":"A{c}T","e":{"m":10,"r":"1","t":"3:0","z":"s","c":"S"},"s":{"m":4,"r":"1","t":"3:0","z":"s","v":"1:0","c":"D"}},"Pacific/Saipan":{"o":"10:0","f":"ChST"},"Asia/Dhaka":{"o":"6:0","f":"BD{c}T","e":{"m":12,"r":"31","t":"23:59"},"s":{"m":6,"r":"19","t":"23:0","v":"1:0","c":"S"}},"Asia/Singapore":{"o":"8:0","f":"SGT"},"Africa/Cairo":{"o":"2:0","f":"EE{c}T","e":{"m":9,"r":"l4","t":"23:0","z":"s"},"s":{"m":9,"r":"10","t":"0:0","v":"1:0","c":"S"}},"Europe/Belgrade":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Europe/Moscow":{"o":"4:0","f":"MSK"},"America/Inuvik":{"o":"-7:0","f":"M{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Pacific/Funafuti":{"o":"12:0","f":"TVT"},"Africa/Bissau":{"o":"0:0","f":"GMT"},"Atlantic/Faroe":{"o":"0:0","f":"WE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Asia/Taipei":{"o":"8:0","f":"C{c}T","e":{"m":9,"r":"30","t":"0:0","c":"S"},"s":{"m":6,"r":"30","t":"0:0","v":"1:0","c":"D"}},"America/Argentina/Catamarca":{"o":"-3:0","f":"ART"},"Pacific/Majuro":{"o":"12:0","f":"MHT"},"EET":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Indian/Comoro":{"o":"3:0","f":"EAT"},"America/Manaus":{"o":"-4:0","f":"AMT"},"Asia/Shanghai":{"o":"8:0","f":"C{c}T","s":{"m":4,"r":"0>10","t":"0:0","v":"1:0","c":"D"},"e":{"m":9,"r":"0>11","t":"0:0","c":"S"}},"America/Indiana/Vevay":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Australia/Hobart":{"o":"10:0","f":"EST","e":{"m":4,"r":"0>1","t":"2:0","z":"s"},"s":{"m":10,"r":"0>1","t":"2:0","z":"s","v":"1:0"}},"Asia/Dili":{"o":"9:0","f":"TLT"},"America/Indiana/Marengo":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Asia/Aqtobe":{"o":"5:0","f":"AQTT"},"Australia/Sydney":{"o":"10:0","f":"EST","s":{"m":10,"r":"0>1","t":"2:0","z":"s","v":"1:0"},"e":{"m":4,"r":"0>1","t":"2:0","z":"s"}},"Indian/Chagos":{"o":"6:0","f":"IOT"},"America/Phoenix":{"o":"-7:0","f":"MST"},"Europe/Luxembourg":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Asia/Makassar":{"o":"8:0","f":"CIT"},"Asia/Phnom_Penh":{"o":"7:0","f":"ICT"},"Australia/Currie":{"o":"10:0","f":"EST","e":{"m":4,"r":"0>1","t":"2:0","z":"s"},"s":{"m":10,"r":"0>1","t":"2:0","z":"s","v":"1:0"}},"America/Argentina/Cordoba":{"o":"-3:0","f":"AR{c}T","e":{"m":3,"r":"0>15","t":"0:0"},"s":{"m":10,"r":"0>15","t":"0:0","v":"1:0","c":"S"}},"America/Cancun":{"o":"-6:0","f":"C{c}T","e":{"m":10,"r":"l0","t":"2:0","c":"S"},"s":{"m":4,"r":"0>1","t":"2:0","v":"1:0","c":"D"}},"Asia/Baku":{"o":"4:0","f":"AZ{c}T","e":{"m":10,"r":"l0","t":"5:0"},"s":{"m":3,"r":"l0","t":"4:0","v":"1:0","c":"S"}},"Asia/Seoul":{"o":"9:0","f":"K{c}T","e":{"m":10,"r":"0>8","t":"0:0","c":"S"},"s":{"m":5,"r":"0>8","t":"0:0","v":"1:0","c":"D"}},"WET":{"o":"0:0","f":"WE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Antarctica/McMurdo":{"o":"12:0","f":"NZ{c}T","e":{"m":4,"r":"0>1","t":"2:0","z":"s","c":"S"},"s":{"m":9,"r":"l0","t":"2:0","z":"s","v":"1:0","c":"D"}},"America/Lima":{"o":"-5:0","f":"PE{c}T","e":{"m":4,"r":"1","t":"0:0"},"s":{"m":1,"r":"1","t":"0:0","v":"1:0","c":"S"}},"Atlantic/Stanley":{"o":"-3:0","f":"FKST"},"Europe/Rome":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Dawson_Creek":{"o":"-7:0","f":"MST"},"Europe/Helsinki":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Asia/Anadyr":{"o":"12:0","f":"ANAT"},"America/Matamoros":{"o":"-6:0","f":"C{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Argentina/San_Juan":{"o":"-3:0","f":"ART"},"America/Denver":{"o":"-7:0","f":"M{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Australia/Eucla":{"o":"8:45","f":"CWST","e":{"m":3,"r":"l0","t":"2:0","z":"s"},"s":{"m":10,"r":"l0","t":"2:0","z":"s","v":"1:0"}},"America/Detroit":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Campo_Grande":{"o":"-4:0","f":"AM{c}T","e":{"m":2,"r":"0>15","t":"0:0"},"s":{"m":10,"r":"0>15","t":"0:0","v":"1:0","c":"S"}},"America/Indiana/Tell_City":{"o":"-6:0","f":"C{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Hermosillo":{"o":"-7:0","f":"MST"},"America/Boise":{"o":"-7:0","f":"M{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Whitehorse":{"o":"-8:0","f":"P{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/St_Kitts":{"o":"-4:0","f":"AST"},"America/Pangnirtung":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"MET":{"o":"1:0","f":"ME{c}T","e":{"m":10,"r":"l0","t":"2:0","z":"s"},"s":{"m":3,"r":"l0","t":"2:0","z":"s","v":"1:0","c":"S"}},"Asia/Tehran":{"o":"3:30","f":"IR{c}T","e":{"m":9,"r":"21","t":"0:0","c":"S"},"s":{"m":3,"r":"21","t":"0:0","v":"1:0","c":"D"}},"Asia/Almaty":{"o":"6:0","f":"ALMT"},"America/Santa_Isabel":{"o":"-8:0","f":"P{c}T","e":{"m":10,"r":"l0","t":"2:0","c":"S"},"s":{"m":4,"r":"0>1","t":"2:0","v":"1:0","c":"D"}},"America/Chicago":{"o":"-6:0","f":"C{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Asia/Ho_Chi_Minh":{"o":"7:0","f":"ICT"},"America/Boa_Vista":{"o":"-4:0","f":"AMT"},"America/Mazatlan":{"o":"-7:0","f":"M{c}T","e":{"m":10,"r":"l0","t":"2:0","c":"S"},"s":{"m":4,"r":"0>1","t":"2:0","v":"1:0","c":"D"}},"America/Indiana/Petersburg":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Iqaluit":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Africa/Algiers":{"o":"1:0","f":"CET"},"America/Araguaina":{"o":"-3:0","f":"BRT"},"America/St_Lucia":{"o":"-4:0","f":"AST"},"Pacific/Kiritimati":{"o":"14:0","f":"LINT"},"Asia/Yakutsk":{"o":"10:0","f":"YAKT"},"Indian/Mahe":{"o":"4:0","f":"SCT"},"Asia/Hong_Kong":{"o":"8:0","f":"HK{c}T","e":{"m":10,"r":"0>16","t":"3:30"},"s":{"m":5,"r":"0>8","t":"3:30","v":"1:0","c":"S"}},"America/Panama":{"o":"-5:0","f":"EST"},"America/Scoresbysund":{"o":"-1:0","f":"EG{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Europe/Gibraltar":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Aruba":{"o":"-4:0","f":"AST"},"Asia/Muscat":{"o":"4:0","f":"GST"},"Africa/Freetown":{"o":"0:0","f":"{c}","e":{"m":9,"r":"1","t":"0:0","c":"GMT"},"s":{"m":6,"r":"1","t":"0:0","v":"1:0","c":"SLST"}},"America/Argentina/San_Luis":{"o":"-4:0","f":"WAR{c}T","s":{"m":10,"r":"0>8","t":"0:0","v":"1:0","c":"S"},"e":{"m":3,"r":"0>8","t":"0:0"}},"America/Paramaribo":{"o":"-3:0","f":"SRT"},"Australia/Lindeman":{"o":"10:0","f":"EST","e":{"m":3,"r":"0>1","t":"2:0","z":"s"},"s":{"m":10,"r":"l0","t":"2:0","z":"s","v":"1:0"}},"Asia/Hovd":{"o":"7:0","f":"HOV{c}T","s":{"m":3,"r":"l6","t":"2:0","v":"1:0","c":"S"},"e":{"m":9,"r":"l6","t":"2:0"}},"America/Bahia":{"o":"-3:0","f":"BR{c}T","e":{"m":2,"r":"0>15","t":"0:0"},"s":{"m":10,"r":"0>15","t":"0:0","v":"1:0","c":"S"}},"Pacific/Pohnpei":{"o":"11:0","f":"PONT"},"Pacific/Guadalcanal":{"o":"11:0","f":"SBT"},"Australia/Perth":{"o":"8:0","f":"WST","e":{"m":3,"r":"l0","t":"2:0","z":"s"},"s":{"m":10,"r":"l0","t":"2:0","z":"s","v":"1:0"}},"Pacific/Pago_Pago":{"o":"-11:0","f":"SST"},"Antarctica/Syowa":{"o":"3:0","f":"SYOT"},"America/Edmonton":{"o":"-7:0","f":"M{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Los_Angeles":{"o":"-8:0","f":"P{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Creston":{"o":"-7:0","f":"MST"},"Africa/Nouakchott":{"o":"0:0","f":"GMT"},"America/Noronha":{"o":"-2:0","f":"FNT"},"Asia/Riyadh89":{"o":"3:7","f":"zzz"},"Asia/Riyadh88":{"o":"3:7","f":"zzz"},"America/La_Paz":{"o":"-4:0","f":"BOT"},"America/Dominica":{"o":"-4:0","f":"AST"},"Asia/Riyadh87":{"o":"3:7","f":"zzz"},"Antarctica/Macquarie":{"o":"11:0","f":"MIST"},"MST7MDT":{"o":"-7:0","f":"M{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Africa/Ceuta":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Africa/El_Aaiun":{"o":"0:0","f":"WET"},"Europe/Andorra":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Africa/Luanda":{"o":"1:0","f":"WAT"},"Africa/Addis_Ababa":{"o":"3:0","f":"EAT"},"America/Atikokan":{"o":"-5:0","f":"EST"},"America/Argentina/Salta":{"o":"-3:0","f":"ART"},"Asia/Beirut":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"0:0"},"s":{"m":3,"r":"l0","t":"0:0","v":"1:0","c":"S"}},"Pacific/Nauru":{"o":"12:0","f":"NRT"},"Africa/Brazzaville":{"o":"1:0","f":"WAT"},"America/Guadeloupe":{"o":"-4:0","f":"AST"},"Africa/Bangui":{"o":"1:0","f":"WAT"},"Asia/Kamchatka":{"o":"12:0","f":"PETT"},"Asia/Aqtau":{"o":"5:0","f":"AQTT"},"America/Eirunepe":{"o":"-4:0","f":"AMT"},"Antarctica/Palmer":{"o":"-4:0","f":"CL{c}T","s":{"m":10,"r":"0>9","t":"4:0","z":"u","v":"1:0","c":"S"},"e":{"m":3,"r":"0>9","t":"3:0","z":"u"}},"Africa/Lubumbashi":{"o":"2:0","f":"CAT"},"Asia/Kolkata":{"o":"5:30","f":"IST"},"Pacific/Galapagos":{"o":"-6:0","f":"GALT"},"America/Monterrey":{"o":"-6:0","f":"C{c}T","e":{"m":10,"r":"l0","t":"2:0","c":"S"},"s":{"m":4,"r":"0>1","t":"2:0","v":"1:0","c":"D"}},"Europe/London":{"o":"0:0","f":"GMT/BST","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Europe/Samara":{"o":"4:0","f":"SAMT"},"Europe/Monaco":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Indiana/Indianapolis":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Atlantic/Bermuda":{"o":"-4:0","f":"A{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Indian/Christmas":{"o":"7:0","f":"CXT"},"Pacific/Tarawa":{"o":"12:0","f":"GILT"},"America/Yakutat":{"o":"-9:0","f":"AK{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Europe/Vienna":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/St_Vincent":{"o":"-4:0","f":"AST"},"America/Port-au-Prince":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/New_York":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Africa/Mogadishu":{"o":"3:0","f":"EAT"},"Asia/Qatar":{"o":"3:0","f":"AST"},"Pacific/Niue":{"o":"-11:0","f":"NUT"},"Africa/Gaborone":{"o":"2:0","f":"CAT"},"America/Antigua":{"o":"-4:0","f":"AST"},"Australia/Lord_Howe":{"o":"10:30","f":"LHST","s":{"m":10,"r":"0>1","t":"2:0","v":"0:30"},"e":{"m":4,"r":"0>1","t":"2:0"}},"Europe/Lisbon":{"o":"0:0","f":"WE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Montevideo":{"o":"-3:0","f":"UY{c}T","e":{"m":3,"r":"0>8","t":"2:0"},"s":{"m":10,"r":"0>1","t":"2:0","v":"1:0","c":"S"}},"Europe/Zurich":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Winnipeg":{"o":"-6:0","f":"C{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Guyana":{"o":"-4:0","f":"GYT"},"America/Santarem":{"o":"-3:0","f":"BRT"},"Asia/Macau":{"o":"8:0","f":"C{c}T","s":{"m":4,"r":"0>10","t":"0:0","v":"1:0","c":"D"},"e":{"m":9,"r":"0>11","t":"0:0","c":"S"}},"Europe/Dublin":{"o":"0:0","f":"GMT/IST","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Asia/Vladivostok":{"o":"11:0","f":"VLAT"},"Europe/Zaporozhye":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Indian/Mayotte":{"o":"3:0","f":"EAT"},"America/Tijuana":{"o":"-8:0","f":"P{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Africa/Ndjamena":{"o":"1:0","f":"WAT"},"Pacific/Tahiti":{"o":"-10:0","f":"TAHT"},"Africa/Monrovia":{"o":"0:0","f":"GMT"},"Asia/Qyzylorda":{"o":"6:0","f":"QYZT"},"Europe/Copenhagen":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Thule":{"o":"-4:0","f":"A{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Europe/Amsterdam":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Asia/Thimphu":{"o":"6:0","f":"BTT"},"America/Chihuahua":{"o":"-7:0","f":"M{c}T","e":{"m":10,"r":"l0","t":"2:0","c":"S"},"s":{"m":4,"r":"0>1","t":"2:0","v":"1:0","c":"D"}},"America/Yellowknife":{"o":"-7:0","f":"M{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Africa/Windhoek":{"o":"1:0","f":"WA{c}T","e":{"m":4,"r":"0>1","t":"2:0"},"s":{"m":9,"r":"0>1","t":"2:0","v":"1:0","c":"S"}},"Antarctica/Davis":{"o":"7:0","f":"DAVT"},"America/Cayman":{"o":"-5:0","f":"EST"},"Europe/Berlin":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Asia/Omsk":{"o":"7:0","f":"OMST"},"Africa/Kinshasa":{"o":"1:0","f":"WAT"},"Asia/Kathmandu":{"o":"5:45","f":"NPT"},"Europe/Chisinau":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Asia/Choibalsan":{"o":"8:0","f":"CHO{c}T","s":{"m":3,"r":"l6","t":"2:0","v":"1:0","c":"S"},"e":{"m":9,"r":"l6","t":"2:0"}},"Etc/UCT":{"o":"0:0","f":"UCT"},"CET":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"2:0","z":"s"},"s":{"m":3,"r":"l0","t":"2:0","z":"s","v":"1:0","c":"S"}},"Europe/Prague":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Toronto":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Africa/Harare":{"o":"2:0","f":"CAT"},"America/Montserrat":{"o":"-4:0","f":"AST"},"Pacific/Honolulu":{"o":"-10:0","f":"HST"},"America/Miquelon":{"o":"-3:0","f":"PM{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Africa/Sao_Tome":{"o":"0:0","f":"GMT"},"America/Kentucky/Louisville":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Asia/Pyongyang":{"o":"9:0","f":"KST"},"America/Porto_Velho":{"o":"-4:0","f":"AMT"},"America/Costa_Rica":{"o":"-6:0","f":"C{c}T","e":{"m":3,"r":"15","t":"0:0","c":"S"},"s":{"m":1,"r":"6>15","t":"0:0","v":"1:0","c":"D"}},"America/Fortaleza":{"o":"-3:0","f":"BRT"},"America/Mexico_City":{"o":"-6:0","f":"C{c}T","e":{"m":10,"r":"l0","t":"2:0","c":"S"},"s":{"m":4,"r":"0>1","t":"2:0","v":"1:0","c":"D"}},"America/El_Salvador":{"o":"-6:0","f":"C{c}T","e":{"m":9,"r":"l0","t":"0:0","c":"S"},"s":{"m":5,"r":"0>1","t":"0:0","v":"1:0","c":"D"}},"Europe/Kaliningrad":{"o":"3:0","f":"FET"},"Asia/Kashgar":{"o":"8:0","f":"C{c}T","s":{"m":4,"r":"0>10","t":"0:0","v":"1:0","c":"D"},"e":{"m":9,"r":"0>11","t":"0:0","c":"S"}},"Asia/Damascus":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l5","t":"0:0"},"s":{"m":3,"r":"l5","t":"0:0","v":"1:0","c":"S"}},"America/Port_of_Spain":{"o":"-4:0","f":"AST"},"America/Kentucky/Monticello":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"CST6CDT":{"o":"-6:0","f":"C{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Halifax":{"o":"-4:0","f":"A{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Asia/Karachi":{"o":"5:0","f":"PK{c}T","e":{"m":11,"r":"1","t":"0:0"},"s":{"m":4,"r":"15","t":"0:0","v":"1:0","c":"S"}},"America/North_Dakota/Beulah":{"o":"-6:0","f":"C{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"EST5EDT":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Managua":{"o":"-6:0","f":"C{c}T","e":{"m":10,"r":"0>1","t":"1:0","c":"S"},"s":{"m":4,"r":"30","t":"2:0","v":"1:0","c":"D"}},"Pacific/Wallis":{"o":"12:0","f":"WFT"},"America/Nome":{"o":"-9:0","f":"AK{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Africa/Bujumbura":{"o":"2:0","f":"CAT"},"America/Rio_Branco":{"o":"-4:0","f":"AMT"},"America/Santiago":{"o":"-4:0","f":"CL{c}T","s":{"m":10,"r":"0>9","t":"4:0","z":"u","v":"1:0","c":"S"},"e":{"m":3,"r":"0>9","t":"3:0","z":"u"}},"America/Vancouver":{"o":"-8:0","f":"P{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Asia/Bahrain":{"o":"3:0","f":"AST"},"America/Indiana/Vincennes":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Pacific/Enderbury":{"o":"13:0","f":"PHOT"},"Pacific/Wake":{"o":"12:0","f":"WAKT"},"Europe/Oslo":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Guatemala":{"o":"-6:0","f":"C{c}T","e":{"m":10,"r":"1","t":"0:0","c":"S"},"s":{"m":4,"r":"30","t":"0:0","v":"1:0","c":"D"}},"America/Montreal":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Asia/Dubai":{"o":"4:0","f":"GST"},"Asia/Harbin":{"o":"8:0","f":"C{c}T","s":{"m":4,"r":"0>10","t":"0:0","v":"1:0","c":"D"},"e":{"m":9,"r":"0>11","t":"0:0","c":"S"}},"Africa/Johannesburg":{"o":"2:0","f":"SAST","e":{"m":3,"r":"0>15","t":"2:0"},"s":{"m":9,"r":"0>15","t":"2:0","v":"1:0"}},"Europe/Tallinn":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Ojinaga":{"o":"-7:0","f":"M{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Europe/Uzhgorod":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Barbados":{"o":"-4:0","f":"A{c}T","e":{"m":9,"r":"25","t":"2:0","c":"S"},"s":{"m":4,"r":"0>15","t":"2:0","v":"1:0","c":"D"}},"Asia/Urumqi":{"o":"8:0","f":"C{c}T","s":{"m":4,"r":"0>10","t":"0:0","v":"1:0","c":"D"},"e":{"m":9,"r":"0>11","t":"0:0","c":"S"}},"Asia/Gaza":{"o":"2:0","f":"EET"},"Atlantic/Azores":{"o":"-1:0","f":"AZO{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Asia/Kuwait":{"o":"3:0","f":"AST"},"Africa/Lagos":{"o":"1:0","f":"WAT"},"Africa/Porto-Novo":{"o":"1:0","f":"WAT"},"Africa/Accra":{"o":"0:0","f":"{c}","e":{"m":12,"r":"31","t":"0:0","c":"GMT"},"s":{"m":9,"r":"1","t":"0:0","v":"0:20","c":"GHST"}},"Pacific/Port_Moresby":{"o":"10:0","f":"PGT"},"America/Blanc-Sablon":{"o":"-4:0","f":"AST"},"Africa/Juba":{"o":"3:0","f":"EAT"},"America/Indiana/Knox":{"o":"-6:0","f":"C{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Europe/Kiev":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Pacific/Noumea":{"o":"11:0","f":"NC{c}T","e":{"m":3,"r":"2","t":"2:0","z":"s"},"s":{"m":12,"r":"1","t":"2:0","z":"s","v":"1:0","c":"S"}},"Asia/Dushanbe":{"o":"5:0","f":"TJT"},"HST":{"o":"-10:0","f":"HST"},"America/Jamaica":{"o":"-5:0","f":"EST"},"Asia/Tokyo":{"o":"9:0","f":"J{c}T","s":{"m":5,"r":"0>1","t":"2:0","v":"1:0","c":"D"},"e":{"m":9,"r":"6>8","t":"2:0","c":"S"}},"Indian/Maldives":{"o":"5:0","f":"MVT"},"Africa/Abidjan":{"o":"0:0","f":"GMT"},"Pacific/Pitcairn":{"o":"-8:0","f":"PST"},"Europe/Malta":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Atlantic/Reykjavik":{"o":"0:0","f":"GMT"},"Europe/Madrid":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Asia/Magadan":{"o":"12:0","f":"MAGT"},"Asia/Kabul":{"o":"4:30","f":"AFT"},"America/Argentina/Rio_Gallegos":{"o":"-3:0","f":"ART"},"Australia/Melbourne":{"o":"10:0","f":"EST","s":{"m":10,"r":"0>1","t":"2:0","z":"s","v":"1:0"},"e":{"m":4,"r":"0>1","t":"2:0","z":"s"}},"Indian/Antananarivo":{"o":"3:0","f":"EAT"},"Asia/Pontianak":{"o":"7:0","f":"WIT"},"Africa/Mbabane":{"o":"2:0","f":"SAST"},"Pacific/Kwajalein":{"o":"12:0","f":"MHT"},"Africa/Banjul":{"o":"0:0","f":"GMT"},"America/Argentina/Jujuy":{"o":"-3:0","f":"ART"},"America/Anchorage":{"o":"-9:0","f":"AK{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Argentina/La_Rioja":{"o":"-3:0","f":"ART"},"Africa/Tripoli":{"o":"2:0","f":"EET"},"Africa/Khartoum":{"o":"3:0","f":"EAT"},"Pacific/Marquesas":{"o":"-9:30","f":"MART"},"Asia/Rangoon":{"o":"6:30","f":"MMT"},"Europe/Bucharest":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Europe/Athens":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Puerto_Rico":{"o":"-4:0","f":"AST"},"America/Swift_Current":{"o":"-6:0","f":"CST"},"America/Nassau":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Havana":{"o":"-5:0","f":"C{c}T","s":{"m":3,"r":"0>8","t":"0:0","z":"s","v":"1:0","c":"D"},"e":{"m":10,"r":"l0","t":"0:0","z":"s","c":"S"}},"Asia/Jayapura":{"o":"9:0","f":"EIT"},"Pacific/Gambier":{"o":"-9:0","f":"GAMT"},"America/Argentina/Mendoza":{"o":"-3:0","f":"ART"},"America/Rainy_River":{"o":"-6:0","f":"C{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Belem":{"o":"-3:0","f":"BRT"},"America/Sao_Paulo":{"o":"-3:0","f":"BR{c}T","e":{"m":2,"r":"0>15","t":"0:0"},"s":{"m":10,"r":"0>15","t":"0:0","v":"1:0","c":"S"}},"Pacific/Easter":{"o":"-6:0","f":"EAS{c}T","s":{"m":10,"r":"0>9","t":"4:0","z":"u","v":"1:0","c":"S"},"e":{"m":3,"r":"0>9","t":"3:0","z":"u"}},"America/Menominee":{"o":"-6:0","f":"C{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Juneau":{"o":"-9:0","f":"AK{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Pacific/Fakaofo":{"o":"14:0","f":"TKT"},"America/Martinique":{"o":"-4:0","f":"AST"},"Africa/Conakry":{"o":"0:0","f":"GMT"},"America/North_Dakota/New_Salem":{"o":"-6:0","f":"C{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Adak":{"o":"-10:0","f":"HA{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"America/Godthab":{"o":"-3:0","f":"WG{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Africa/Libreville":{"o":"1:0","f":"WAT"},"Pacific/Kosrae":{"o":"11:0","f":"KOST"},"America/St_Thomas":{"o":"-4:0","f":"AST"},"Etc/GMT+7":{"o":"-7:0","f":"GMT+7"},"Etc/GMT+6":{"o":"-6:0","f":"GMT+6"},"Europe/Minsk":{"o":"3:0","f":"FET"},"Etc/GMT+5":{"o":"-5:0","f":"GMT+5"},"Etc/GMT+4":{"o":"-4:0","f":"GMT+4"},"Pacific/Efate":{"o":"11:0","f":"VU{c}T","e":{"m":1,"r":"0>23","t":"0:0"},"s":{"m":10,"r":"0>23","t":"0:0","v":"1:0","c":"S"}},"Etc/GMT+3":{"o":"-3:0","f":"GMT+3"},"MST":{"o":"-7:0","f":"MST"},"Etc/GMT+2":{"o":"-2:0","f":"GMT+2"},"Etc/GMT+1":{"o":"-1:0","f":"GMT+1"},"Asia/Yekaterinburg":{"o":"6:0","f":"YEKT"},"Pacific/Tongatapu":{"o":"13:0","f":"TO{c}T","e":{"m":1,"r":"l0","t":"2:0"},"s":{"m":11,"r":"0>1","t":"2:0","v":"1:0","c":"S"}},"Europe/Riga":{"o":"2:0","f":"EE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Guayaquil":{"o":"-5:0","f":"ECT"},"America/Grand_Turk":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Asia/Manila":{"o":"8:0","f":"PH{c}T","e":{"m":9,"r":"21","t":"0:0"},"s":{"m":3,"r":"22","t":"0:0","v":"1:0","c":"S"}},"Asia/Jakarta":{"o":"7:0","f":"WIT"},"Asia/Ashgabat":{"o":"5:0","f":"TMT"},"Africa/Kigali":{"o":"2:0","f":"CAT"},"America/Santo_Domingo":{"o":"-4:0","f":"AST"},"America/Argentina/Buenos_Aires":{"o":"-3:0","f":"AR{c}T","e":{"m":3,"r":"0>15","t":"0:0"},"s":{"m":10,"r":"0>15","t":"0:0","v":"1:0","c":"S"}},"Antarctica/Mawson":{"o":"5:0","f":"MAWT"},"EST":{"o":"-5:0","f":"EST"},"America/Goose_Bay":{"o":"-4:0","f":"A{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Europe/Tirane":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"America/Nipigon":{"o":"-5:0","f":"E{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Asia/Chongqing":{"o":"8:0","f":"C{c}T","s":{"m":4,"r":"0>10","t":"0:0","v":"1:0","c":"D"},"e":{"m":9,"r":"0>11","t":"0:0","c":"S"}},"America/Cayenne":{"o":"-3:0","f":"GFT"},"Asia/Samarkand":{"o":"5:0","f":"UZT"},"Pacific/Fiji":{"o":"12:0","f":"FJ{c}T","e":{"m":1,"r":"22","t":"3:0"},"s":{"m":10,"r":"23","t":"2:0","v":"1:0","c":"S"}},"Australia/Darwin":{"o":"9:30","f":"CST","e":{"m":3,"r":"l0","t":"2:0"},"s":{"m":10,"r":"3","t":"2:0","v":"1:0"}},"Etc/GMT-1":{"o":"1:0","f":"GMT-1"},"Australia/Adelaide":{"o":"9:30","f":"CST","s":{"m":10,"r":"0>1","t":"2:0","z":"s","v":"1:0"},"e":{"m":4,"r":"0>1","t":"2:0","z":"s"}},"Etc/GMT-5":{"o":"5:0","f":"GMT-5"},"Etc/GMT-4":{"o":"4:0","f":"GMT-4"},"Asia/Riyadh":{"o":"3:0","f":"AST"},"Etc/GMT-3":{"o":"3:0","f":"GMT-3"},"Etc/GMT-2":{"o":"2:0","f":"GMT-2"},"Asia/Aden":{"o":"3:0","f":"AST"},"Etc/GMT-9":{"o":"9:0","f":"GMT-9"},"Asia/Krasnoyarsk":{"o":"8:0","f":"KRAT"},"Africa/Casablanca":{"o":"0:0","f":"WE{c}T","e":{"m":9,"r":"l0","t":"3:0"},"s":{"m":4,"r":"l0","t":"2:0","v":"1:0","c":"S"}},"Etc/GMT-8":{"o":"8:0","f":"GMT-8"},"Pacific/Johnston":{"o":"-10:0","f":"HST"},"Etc/GMT-7":{"o":"7:0","f":"GMT-7"},"Pacific/Midway":{"o":"-11:0","f":"SST"},"Etc/GMT-6":{"o":"6:0","f":"GMT-6"},"Etc/GMT+8":{"o":"-8:0","f":"GMT+8"},"Etc/GMT+9":{"o":"-9:0","f":"GMT+9"},"Pacific/Palau":{"o":"9:0","f":"PWT"},"Asia/Kuala_Lumpur":{"o":"8:0","f":"MYT"},"Europe/Warsaw":{"o":"1:0","f":"CE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}},"Africa/Lome":{"o":"0:0","f":"GMT"},"America/Sitka":{"o":"-9:0","f":"AK{c}T","e":{"m":11,"r":"0>1","t":"2:0","c":"S"},"s":{"m":3,"r":"0>8","t":"2:0","v":"1:0","c":"D"}},"Atlantic/Madeira":{"o":"0:0","f":"WE{c}T","e":{"m":10,"r":"l0","t":"1:0","z":"u"},"s":{"m":3,"r":"l0","t":"1:0","z":"u","v":"1:0","c":"S"}}};
/*
 * timezone.js - Definition of a time zone class
 * 
 * Copyright © 2012, JEDL Software, Inc.
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
!depends 
ilibglobal.js 
locale.js
localeinfo.js
calendar/gregoriandate.js
*/

// !data timezones

/**
 * @class Create a time zone information instance. 
 * 
 * This class reports and transforms
 * information about particular time zones.<p>
 * 
 * The options parameter may contain any of the following properties:
 * 
 * <ul>
 * <li><i>id</i> - The id of the requested time zone such as "Europe/London" or 
 * "America/Los_Angeles"
 * <li><i>locale</i> - The locale for this time zone.
 * <li><i>offset</i> - Choose the time zone based on the offset from UTC given in
 * number of minutes. In some cases, there are multiple time zones that correspond
 * to the given offset, and the first one encountered in the list is the one taken.
 * If a more specific time zone is needed, use the "id" property to identify the
 * time zone instead.
 * </ul>
 * 
 * If the id is not given, the default time zone for the locale is retrieved from
 * the locale info. If the locale is not specified, the default locale for the
 * library is used.
 * <p>
 * 
 * Depends directive: !depends timezone.js
 * 
 * @constructor
 * @param {Object} options Options guiding the construction of this time zone instance
 */
ilib.TimeZone = function(options) {
	var arr, i, bad, res, formats, type, zones;
	
	this.locale = new ilib.Locale();
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (options.id) {
			this.id = options.id;
		// TODO: } else if (options.offset) {
		}
	}

	//console.log("timezone: locale is " + this.locale);
	
	if (!this.id) {
		this.locinfo = new ilib.LocaleInfo(this.locale);
		this.id = this.locinfo.getTimeZone();
	}

	//console.log("localeinfo is: " + JSON.stringify(this.locinfo));
	//console.log("id is: " + JSON.stringify(this.id));
	
	if (!ilib.TimeZone.zones) {
		res = new ilib.ResBundle({
			locale: this.locale,
			name: "timezones"
		});

		ilib.TimeZone.zones = res.getResObj();
	}
	
	/** 
	 * @private
	 * @type {{o:string,f:string,e:Object.<{m:number,r:string,t:string,z:string}>,s:Object.<{m:number,r:string,t:string,z:string,v:string,c:string}>}} 
	 */
	this.zone = ilib.TimeZone.zones[this.id];
	if (!this.zone) {
		this.id = "Europe/London";
		this.zone = ilib.TimeZone.zones[this.id];
	}
};

/**
 * Return an array of available zone ids that the constructor knows about.
 * @returns {Array.<string>} an array of zone id strings
 */
ilib.TimeZone.getAvailableIds = function () {
	var res, tz, ids = [];
	
	if (!ilib.TimeZone.zones) {
		res = new ilib.ResBundle({
			name: "timezones"
		});

		ilib.TimeZone.zones = res.getResObj();
	}
	
	for (tz in ilib.TimeZone.zones) {
		if (tz) {
			ids.push(tz);
		}
	}
	
	return ids;
};

/**
 * Return the id used to uniquely identify this time zone.
 * @returns {string} a unique id for this time zone
 */
ilib.TimeZone.prototype.getId = function () {
	return this.id;
};

/**
 * Return the abbreviation that is used for the current time zone on the given date.
 * The date may be in DST or during standard time, and many zone names have different
 * abbreviations depending on whether or not the date is falls within DST.<p>
 * 
 * There are two styles that are supported:
 * 
 * <ol>
 * <li>standard - returns the 3 to 5 letter abbreviation of the time zone name such 
 * as "CET" for "Central European Time" or "PDT" for "Pacific Daylight Time"
 * <li>rfc822 - returns an RFC 822 style time zone specifier, which specifies more
 * explicitly what the offset is from UTC
 * </ol>
 *  
 * @param {ilib.Date} date a date to determine if it is in daylight time or standard time
 * @param {string} style one of "standard" or "rfc822". Default if not specified is "standard"
 * @returns {string} the name of the time zone, abbreviated according to the style 
 */
ilib.TimeZone.prototype.getDisplayName = function (date, style) {
	style = style || "standard";
	switch (style) {
		default:
		case 'standard':
			if (this.zone.f && this.zone.f !== "zzz") {
				if (this.zone.f.indexOf("{c}") !== -1) {
					var letter = "";
					letter = this.inDaylightTime(date) ? this.zone.s.c : this.zone.e.c; 
					var temp = new ilib.String(this.zone.f);
					return temp.format({c: letter || ""});
				}
				return this.zone.f;
			} else {
				var temp = "GMT" + this.zone.o;
				if (this.inDaylightTime(date)) {
					temp += "+" + this.zone.s.v;
				}
				return temp;
			}
			break;
		case 'rfc822':
			var offset = this.getOffset(date), // includes the DST if applicable
				ret = "UTC",
				hour = offset.h || 0,
				minute = offset.m || 0;
			
			ret += (hour > 0) ? "+" : "-";
			if (hour < 10) {
				ret += "0";
			}
			ret += (hour < 0) ? -hour : hour;
			if (minute < 10) {
				ret += "0";
			}
			ret += minute;
			return ret; 
	}
};

/**
 * @private
 * Convert the offset string to an object with an h, m, and possibly s property
 * to indicate the hours, minutes, and seconds.
 * 
 * @param {string} str the offset string to convert to an object
 * @returns {Object.<{h:number,m:number,s:number}>} an object giving the offset for the zone at 
 * the given date/time, in hours, minutes, and seconds
 */
ilib.TimeZone.prototype._offsetStringToObj = function (str) {
	var offsetParts = (typeof(str) === 'string') ? str.split(":") : [],
		ret = {h:0},
		temp;
	
	if (offsetParts.length > 0) {
		ret.h = parseInt(offsetParts[0], 10);
		if (offsetParts.length > 1) {
			temp = parseInt(offsetParts[1], 10);
			if (temp) {
				ret.m = temp;
			}
			if (offsetParts.length > 2) {
				temp = parseInt(offsetParts[2], 10);
				if (temp) {
					ret.s = temp;
				}
			}
		}
	}

	return ret;
};

/**
 * Returns the offset of this time zone from UTC at the given date/time. If daylight saving 
 * time is in effect at the given date/time, this method will return the offset value 
 * adjusted by the amount of daylight saving.
 * @param {ilib.Date} date the date for which the offset is needed
 * @return {Object.<{h:number,m:number,s:number}>} an object giving the offset for the zone at 
 * the given date/time, in hours, minutes, and seconds  
 */
ilib.TimeZone.prototype.getOffset = function (date) {
	var ret = {};
	if (this.zone.o) {
		var offsetParts = this._offsetStringToObj(this.zone.o);
		
		if (date && this.inDaylightTime(date)) {
			var saveParts = this._offsetStringToObj(this.zone.s.v),
				temp,
				minutes;
			
			//console.log("standard offset is " + JSON.stringify(offsetParts));
			//console.log("savings is " + JSON.stringify(saveParts));
			
			// convert to number of seconds in the day and then back again 
			// to hours:min:seconds so that we get the arithmetic right when
			// we add the savings time, which may be a non-whole-hour size
			temp = (offsetParts.m || 0) * 60 + (offsetParts.s || 0);
			if (offsetParts.h < 0) {
				temp += -offsetParts.h * 3600;
				temp = -temp;
			} else {
				temp += offsetParts.h * 3600;
			}
			
			//console.log("standard offset in seconds: " + temp);

			temp += saveParts.h * 3600 + (saveParts.m || 0) * 60 + (saveParts.s || 0);
			
			//console.log("less savings, leaves this in seconds: " + temp);
			
			ret.h = Math.floor(temp / 3600);
			temp -= (ret.h * 3600);
			minutes = Math.floor(temp / 60);
			temp -= (minutes * 60);
			if (minutes) {
				ret.m = minutes;
			}
			if (temp !== 0) {
				ret.s = temp;
			}
			
			return ret;
		} else {
			ret.h = offsetParts.h;
			if (offsetParts.m) {
				ret.m = offsetParts.m;
			}
			if (offsetParts.s) {
				ret.s = offsetParts.s;
			}
		}
		return ret;
	}
	return {h:0};
};

/**
 * Returns the offset of this time zone from UTC at the given date/time. If daylight saving 
 * time is in effect at the given date/time, this method will return the offset value 
 * adjusted by the amount of daylight saving.
 * @param {ilib.Date} date the date for which the offset is needed
 * @return {string} the offset for the zone at the given date/time as a string in the 
 * format "h:m:s" 
 */
ilib.TimeZone.prototype.getOffsetStr = function (date) {
	var offset = this.getOffset(date),
		ret;
	
	ret = offset.h;
	if (typeof(offset.m) !== 'undefined') {
		ret += ":" + offset.m;
		if (typeof(offset.s) !== 'undefined') {
			ret += ":" + offset.s;
		}
	} else {
		ret += ":0";
	}
	
	return ret;
};

/**
 * Gets the offset from UTC for this time zone.
 * @returns {Object.<{h:number,m:number,s:number}>} an object giving the offset from 
 * UTC for this time zone, in hours, minutes, and seconds 
 */
ilib.TimeZone.prototype.getRawOffset = function () {
	return this._offsetStringToObj(this.zone.o);
};

/**
 * Gets the offset from UTC for this time zone.
 * @returns {string} the offset from UTC for this time zone, in the format "h:m:s" 
 */
ilib.TimeZone.prototype.getRawOffsetStr = function () {
	return this.zone.o || "0:0";
};

/**
 * Return the amount of time in hours:minutes that the clock is advanced during
 * daylight savings time.
 * @returns {Object.<{h:number,m:number,s:number}>} the amount of time that the 
 * clock advances for DST in hours, minutes, and seconds 
 */
ilib.TimeZone.prototype.getDSTSavings = function () {
	if (this.zone.s) {
		return this._offsetStringToObj(this.zone.s.v);	// this.zone.start.savings
	}
	return {h:0};
};

/**
 * Return the amount of time in hours:minutes that the clock is advanced during
 * daylight savings time.
 * @returns {string} the amount of time that the clock advances for DST in the
 * format "h:m:s"
 */
ilib.TimeZone.prototype.getDSTSavingsStr = function () {
	if (this.zone.s) {
		return this.zone.s.v;	// this.zone.start.savings
	}
	return "0:0";
};

/**
 * @private
 * return the rd of the start of DST transition for the given year
 * @param {Object} rule set of rules
 * @param {number} year year to check
 * @returns {number} the rd of the start of DST for the year
 */
ilib.TimeZone.prototype._calcRuleStart = function (rule, year) {
	var type, 
		weekday = 0, 
		day, 
		refDay, 
		cal, 
		rd, 
		hour = 0, 
		minute = 0, 
		second = 0,
		time,
		i;
	
	if (rule.r.charAt(0) == 'l' || rule.r.charAt(0) == 'f') {
		cal = ilib.Cal.newInstance({type: "gregorian"});
		type = rule.r.charAt(0);
		weekday = parseInt(rule.r.substring(1), 10);
		day = (type === 'l') ? cal.getMonLength(rule.m, year) : 1;
		//console.log("_calcRuleStart: Calculating the " + 
		//		(rule.r.charAt(0) == 'f' ? "first " : "last ") + weekday + 
		//		" of month " + rule.m);
	} else {
		type = "=";
		
		i = rule.r.indexOf('<');
		if (i == -1) {
			i = rule.r.indexOf('>');
		}
		
		if (i != -1) {
			type = rule.r.charAt(i);
			weekday = parseInt(rule.r.substring(0, i), 10);
			day = parseInt(rule.r.substring(i+1), 10); 
			//console.log("_calcRuleStart: Calculating the " + weekday + 
			//		type + day + " of month " + rule.m);
		} else {
			day = parseInt(rule.r, 10);
			//console.log("_calcRuleStart: Calculating the " + day + " of month " + rule.m);
		}
	}

	if (rule.t) {
		time = rule.t.split(":");
		hour = parseInt(time[0], 10);
		if (time.length > 1) {
			minute = parseInt(time[1], 10);
			if (time.length > 2) {
				second = parseInt(time[2], 10);
			}
		}
	}
	//console.log("calculating rd of " + year + "/" + rule.m + "/" + day);
	refDay = new ilib.Date.GregDate({
		year: year, 
		month: rule.m, 
		day: day, 
		hour: hour, 
		minute: minute, 
		second: second
	});
	rd = refDay.getRataDie();
	//console.log("rd is " + rd);
	
	switch (type) {
		case 'l':
		case '<':
			//console.log("returning " + refDay.onOrBeforeRd(rd, weekday));
			return refDay.onOrBeforeRd(rd, weekday);		
		case 'f':
		case '>':
			//console.log("returning " + refDay.onOrAfterRd(rd, weekday));
			return refDay.onOrAfterRd(rd, weekday);		
		default:
			//console.log("returning rd unchanged");
			return rd;
	}
};

/**
 * Returns whether or not the given date is in daylight saving time for the current
 * zone. Note that daylight savings time is observed for the summer. Because
 * the seasons are reversed, daylight savings time in the southern hemisphere usually
 * runs from the end of the year through New Years into the first few months of the
 * next year. This method will correctly calculate the start and end of DST for any
 * location.
 * 
 * @param {ilib.Date} date a date for which the info about daylight time is being sought
 * @return {boolean} true if the given date is in DST for the current zone, and false
 * otherwise.
 */
ilib.TimeZone.prototype.inDaylightTime = function (date) {
	var year, rd, startRd, endRd;
	
	// if we aren't using daylight time in this zone, then where are never in daylight
	// time, no matter what the date is
	if (!this.useDaylightTime()) {
		return false;
	}
	
	rd = date.getRataDie();
	startRd = this._calcRuleStart(this.zone.s, date.year);
	endRd = this._calcRuleStart(this.zone.e, date.year);
	
	// In the northern hemisphere, the start comes first some time in spring (Feb-Apr), 
	// then the end some time in the fall (Sept-Nov). In the southern
	// hemisphere, it is the other way around because the seasons are reversed. Standard
	// time is still in the winter, but the winter months are May-Aug, and daylight 
	// savings time usually starts Aug-Oct of one year and runs through Mar-May of the 
	// next year.
	
	if (startRd < endRd) {
		// northern hemisphere
		return (rd >= startRd && rd < endRd) ? true : false;
	} else {
		// southern hemisphere
		return (rd >= startRd || rd < endRd) ? true : false;
	}
};

/**
 * Returns true if this time zone switches to daylight savings time at some point
 * in the year, and false otherwise.
 * @returns {boolean} true if the time zone uses daylight savings time
 */
ilib.TimeZone.prototype.useDaylightTime = function () {
	// this zone uses daylight savings time iff there is a rule defining when to start
	// and when to stop the DST
	return (this.zone && 
			typeof(this.zone.s) !== 'undefined' && 
			typeof(this.zone.e) !== 'undefined');
};

ilib.data.dateformats = {
	"gregorian": {
		"order": "{date} {time}",
		"date": {
			"dmwy": {
				"s": "EE d/M/yy",
				"m": "EEE d/MM/yyyy",
				"l": "EEE d MMM yyyy",
				"f": "EEEE d MMMM yyyy"
			},
			"dmy": {
				"s": "d/M/yy",
				"m": "d/MM/yyyy",
				"l": "d MMM yyyy",
				"f": "d MMMM yyyy"
			},
			"dmw": {
				"s": "EE d/M",
				"m": "EE d/MM",
				"l": "EEE d MMM",
				"f": "EEEE d MMMM"
			},
			"dm": {
				"s": "d/M",
				"m": "d/MM",
				"l": "d MMM",
				"f": "d MMMM"
			},
			"my": {
				"s": "M/yy",
				"m": "MM/yyyy",
				"l": "MMM yyyy",
				"f": "MMMM yyyy"
			},
			"dw": {
				"s": "EE d",
				"m": "EE d",
				"l": "EEE d",
				"f": "EEEE d"
			},
			"d": "dd",
			"m": {
				"s": "M",
				"m": "MM",
				"l": "MMM",
				"f": "MMMM"
			},
			"y": {
				"s": "yy",
				"m": "yyyy",
				"l": "yyyy",
				"f": "yyyy"
			},
			"n": {
				"s": "N",
				"m": "NN",
				"l": "MMM",
				"f": "MMMM"
			},
			"w": {
				"s": "E",
				"m": "EE",
				"l": "EEE",
				"f": "EEEE"
			}
		},
		"time": {
			"ahmsz": "H:mm:ssa z",
			"ahms": "H:mm:ssa",
			"hmsz": "H:mm:ss z",
			"hms": "H:mm:ss",
			"ahmz": "H:mma z",
			"ahm": "H:mma",
			"hmz": "H:mm z",
			"ah": "Ha",
			"hm": "H:mm",
			"ms": "mm:ss",
			"h": "H",
			"m": "mm",
			"s": "ss"
		},
		"range": {
			"c00": {
				"s": "{st} - {et} {sd}/{sm}/{sy}",
				"m": "{st} - {et}, {sd}/{sm}/{sy}",
				"l": "{st} - {et}, {sd} {sm} {sy}",
				"f": "{st} - {et}, {sd} {sm} {sy}"
			},
			"c01": {
				"s": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
				"m": "{sd}/{sm} {st} - {ed}/{em} {et}, {sy}",
				"l": "{sd} {st} - {ed} {et}, {sm} {sy}",
				"f": "{sd} {st} - {ed} {et}, {sm} {sy}"
			},
			"c02": {
				"s": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
				"m": "{sd}/{sm} {st} - {ed}/{em} {et}, {sy}",
				"l": "{sd} {sm} {st} - {ed} {em} {et}, {sy}",
				"f": "{sd} {sm} {st} - {ed} {em} {et}, {sy}"
			},
			"c03": {
				"s": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
				"m": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
				"l": "{sd} {sm} {sy} {st} - {ed} {em} {ey} {et}",
				"f": "{sd} {sm} {sy} {st} - {ed} {em} {ey} {et}"
			},
			"c10": {
				"s": "{sd}-{ed}/{sm}/{sy}",
				"m": "{sd}-{ed}/{sm}/{sy}",
				"l": "{sd}-{ed} {sm} {sy}",
				"f": "{sd}-{ed} {sm} {sy}"
			},
			"c11": {
				"s": "{sd}/{sm}-{ed}/{em} {sy}",
				"m": "{sd}/{sm} - {ed}/{em} {sy}",
				"l": "{sd} {sm} - {ed} {em} {sy}",
				"f": "{sd} {sm} - {ed} {em} {sy}"
			},
			"c12": {
				"s": "{sd}/{sm}/{sy}-{ed}/{em}/{ey}",
				"m": "{sd}/{sm}/{sy} - {ed}/{em}/{ey}",
				"l": "{sd} {sm} {sy} - {ed} {em} {ey}",
				"f": "{sd} {sm} {sy} - {ed} {em} {ey}"
			},
			"c20": {
				"s": "{sm}/{sy}-{em}/{ey}",
				"m": "{sm}/{sy} - {em}/{ey}",
				"l": "{sm} {sy} - {em} {ey}",
				"f": "{sm} {sy} - {em} {ey}"
			},
			"c30": "{sy} - {ey}"
		}
	},
	"islamic": "gregorian",
	"hebrew": "gregorian",
	"julian": "gregorian"
};
ilib.data.dateformats_en_US = {
	"gregorian": {
		"date": {
			"dmwy": {
				"s": "EE M/d/yy",
				"m": "EEE M/dd/yyyy",
				"l": "EEE MMM d, yyyy",
				"f": "EEEE MMMM d, yyyy"
			},
			"dmy": {
				"s": "M/d/yy",
				"m": "M/d/yyyy",
				"l": "MMM d, yyyy",
				"f": "MMMM d, yyyy"
			},
			"dmw": {
				"s": "EE M/d",
				"m": "EE M/d",
				"l": "EEE MMM d",
				"f": "EEEE MMMM d"
			},
			"dm": {
				"s": "M/d",
				"m": "M/d",
				"l": "MMM d",
				"f": "MMMM d"
			}
		},
		"time": {
			"ahmsz": "h:mm:ssa z",
			"ahms": "h:mm:ssa",
			"hmsz": "h:mm:ss z",
			"hms": "h:mm:ss",
			"ahmz": "h:mma z",
			"ahm": "h:mma",
			"hmz": "h:mm z",
			"ah": "ha",
			"hm": "h:mm",
			"ms": "mm:ss",
			"h": "h",
			"m": "mm",
			"s": "ss"
		},
		"range": {
			"c00": {
				"s": "{st} - {et} {sm}/{sd}/{sy}",
				"m": "{st} - {et}, {sm}/{sd}/{sy}",
				"l": "{st} - {et}, {sm} {sd}, {sy}",
				"f": "{st} - {et}, {sm} {sd}, {sy}"
			},
			"c01": {
				"s": "{sm}/{sd}/{sy} {st} - {em}/{ed}/{ey} {et}",
				"m": "{sm}/{sd}/{sy} {st} - {em}/{ed}/{ey} {et}",
				"l": "{sm} {sd} {st} - {ed} {et}, {sy}",
				"f": "{sm} {sd} {st} - {ed} {et}, {sy}"
			},
			"c02": {
				"s": "{sm}/{sd}/{sy} {st} - {em}/{ed}/{ey} {et}",
				"m": "{sm}/{sd} {st} - {em}/{ed} {et}, {sy}",
				"l": "{sm} {sd} {st} - {em} {ed} {et}, {sy}",
				"f": "{sm} {sd} {st} - {em} {ed} {et}, {sy}"
			},
			"c03": {
				"s": "{sm}/{sd}/{sy} {st} - {em}/{ed}/{ey} {et}",
				"m": "{sm}/{sd}/{sy} {st} - {em}/{ed}/{ey} {et}",
				"l": "{sm} {sd}, {sy} {st} - {em} {ed}, {ey} {et}",
				"f": "{sm} {sd}, {sy} {st} - {em} {ed}, {ey} {et}"
			},
			"c10": {
				"s": "{sm}/{sd}/{sy} - {em}/{ed}/{ey}",
				"m": "{sm}/{sd}/{sy} - {em}/{ed}/{ey}",
				"l": "{sm} {sd}-{ed}, {sy}",
				"f": "{sm} {sd}-{ed}, {sy}"
			},
			"c11": {
				"s": "{sm}/{sd}/{sy} - {em}/{ed}/{ey}",
				"m": "{sm}/{sd} - {em}/{ed}, {sy}",
				"l": "{sm} {sd} - {em} {ed}, {sy}",
				"f": "{sm} {sd} - {em} {ed}, {sy}"
			},
			"c12": {
				"s": "{sm}/{sd}/{sy} - {em}/{ed}/{ey}",
				"m": "{sm}/{sd}/{sy} - {em}/{ed}/{ey}",
				"l": "{sm} {sd}, {sy} - {em} {ed}, {ey}",
				"f": "{sm} {sd}, {sy} - {em} {ed}, {ey}"
			},
			"c20": {
				"s": "{sm}/{sy} - {em}/{ey}",
				"m": "{sm}/{sy} - {em}/{ey}",
				"l": "{sm} {sy} - {em} {ey}",
				"f": "{sm} {sy} - {em} {ey}"
			},
			"c30": "{sy} - {ey}"
		}
	}
};
ilib.data.dateformats_en_CA = {
	"gregorian": {
		"date": {
			"dmwy": {
				"l": "EEE d MMM, yyyy",
				"f": "EEEE d MMMM, yyyy"
			},
			"dmy": {
				"l": "d MMM, yyyy",
				"f": "d MMMM, yyyy"
			}
		},
		"time": {
			"ahmsz": "h:mm:ssa z",
			"ahms": "h:mm:ssa",
			"hmsz": "h:mm:ss z",
			"hms": "h:mm:ss",
			"ahmz": "h:mma z",
			"ahm": "h:mma",
			"hmz": "h:mm z",
			"ah": "ha",
			"hm": "h:mm",
			"h": "h"
		},
		"range": {
			"c00": {
				"l": "{st} - {et}, {sd} {sm}, {sy}",
				"f": "{st} - {et}, {sd} {sm}, {sy}"
			},
			"c01": {
				"l": "{sd} {st} - {ed} {et} {sm}, {sy}",
				"f": "{sd} {st} - {ed} {et} {sm}, {sy}"
			},
			"c10": {
				"l": "{sd}-{ed} {sm}, {sy}",
				"f": "{sd}-{ed} {sm}, {sy}"
			},
			"c11": {
				"l": "{sd} {sm} - {ed} {em}, {sy}",
				"f": "{sd} {sm} - {ed} {em}, {sy}"
			},
			"c12": {
				"l": "{sd} {sm}, {sy} - {ed} {em}, {ey}",
				"f": "{sd} {sm}, {sy} - {ed} {em}, {ey}"
			},
			"c20": {
				"l": "{sm}, {sy} - {em}, {ey}",
				"f": "{sm}, {sy} - {em}, {ey}"
			}
		}
	}
};
ilib.data.dateformats_fr = {
	"gregorian": {
		"order": "{time} {date}",
		"date": {
			"dmwy": {
				"s": "EE d/MM/yy",
				"m": "EE d/MM/yyyy",
				"l": "EEE d MMM yyyy",
				"f": "EEEE d MMMM yyyy"
			},
			"dmy": {
				"s": "d/MM/yy",
				"m": "d/MM/yyyy",
				"l": "d MMM yyyy",
				"f": "d MMMM yyyy"
			},
			"dmw": {
				"s": "EE d/MM",
				"m": "EE d/MM",
				"l": "EEE d MMM",
				"f": "EEEE d MMMM"
			},
			"dm": {
				"s": "d/MM",
				"m": "d/MM",
				"l": "d MMM",
				"f": "d MMMM"
			},
			"my": {
				"s": "MM/yy",
				"m": "MM/yyyy",
				"l": "MMM yyyy",
				"f": "MMMM yyyy"
			},
			"d": "dd",
			"m": {
				"s": "MM",
				"m": "MM",
				"l": "MMM",
				"f": "MMMM"
			},
			"y": {
				"s": "yy",
				"m": "yyyy",
				"l": "yyyy",
				"f": "yyyy"
			},
			"n": {
				"s": "N",
				"m": "NN",
				"l": "MMM",
				"f": "MMMM"
			}
		},
		"time": {
			"ahmsz": "HH:mm:ss a z",
			"ahms": "HH:mm:ss a",
			"hmsz": "HH:mm:ss z",
			"hms": "HH:mm:ss",
			"ahmz": "HH:mm a z",
			"ahm": "HH:mm a",
			"hmz": "HH:mm z",
			"ah": "HH",
			"hm": "HH:mm",
			"ms": "mm:ss",
			"h": "HH",
			"m": "mm",
			"s": "ss"
		},
		"range": {
			"c00": {
				"s": "{st} - {et} {sd}/{sm}/{sy}",
				"m": "{st} - {et} {sd}/{sm}/{sy}",
				"l": "{st} - {et} {sd} {sm} {sy}",
				"f": "{st} - {et} {sd} {sm} {sy}"
			},
			"c01": {
				"s": "{st} {sd}/{sm} - {et} {ed}/{em}/{ey}",
				"m": "{st} {sd}/{sm} - {et} {ed}/{em}/{sy}",
				"l": "{st} {sd} {sm} - {et} {ed} {em} {sy}",
				"f": "{st} {sd} {sm} - {et} {ed} {em} {sy}"
			},
			"c02": {
				"s": "{st} {sd}/{sm} - {et} {ed}/{em}/{ey}",
				"m": "{st} {sd}/{sm} - {et} {ed}/{em}/{sy}",
				"l": "{st} {sd} {sm} - {et} {ed} {em} {sy}",
				"f": "{st} {sd} {sm} - {et} {ed} {em} {sy}"
			},
			"c03": {
				"s": "{st} {sd}/{sm}/{sy} - {et} {ed}/{em}/{ey}",
				"m": "{st} {sd}/{sm}/{sy} - {et} {ed}/{em}/{ey}",
				"l": "{st} {sd} {sm} {sy} - {et} {ed} {em} {ey}",
				"f": "{st} {sd} {sm} {sy} - {et} {ed} {em} {ey}"
			},
			"c10": {
				"s": "{sd}/{sm}/{sy} - {ed}/{em}/{ey}",
				"m": "{sd}/{sm}/{sy} - {ed}/{em}/{ey}",
				"l": "{sd}-{ed} {sm} {sy}",
				"f": "{sd}-{ed} {sm} {sy}"
			},
			"c11": {
				"s": "{sd}/{sm} - {ed}/{em}/{ey}",
				"m": "{sd}/{sm} - {ed}/{em}/{sy}",
				"l": "{sd} {sm} - {ed} {em} {sy}",
				"f": "{sd} {sm} - {ed} {em} {sy}"
			},
			"c12": {
				"s": "{sd}/{sm}/{sy} - {ed}/{em}/{ey}",
				"m": "{sd}/{sm}/{sy} - {ed}/{em}/{ey}",
				"l": "{sd} {sm} {sy} - {ed} {em} {ey}",
				"f": "{sd} {sm} {sy} - {ed} {em} {ey}"
			},
			"c20": {
				"s": "{sm}/{sy} - {em}/{ey}",
				"m": "{sm}/{sy} - {em}/{ey}",
				"l": "{sm} {sy} - {em} {ey}",
				"f": "{sm} {sy} - {em} {ey}"
			},
			"c30": "{sy} - {ey}"
		}
	}
};
ilib.data.dateformats_fr_CA = {
	"gregorian": {
		"time": {
			"ahmsz": "h:mm:ssa z",
			"ahms": "h:mm:ssa",
			"hmsz": "h:mm:ss z",
			"hms": "h:mm:ss",
			"ahmz": "h:mma z",
			"ahm": "h:mma",
			"hmz": "h:mm z",
			"ah": "ha",
			"hm": "h:mm",
			"h": "h"
		}
	}
};
ilib.data.dateformats_es = {
	"gregorian": {
		"order": "{date} {time}",
		"date": {
			"dmwy": {
				"s": "EE dd/MM/yy",
				"m": "EEE dd/MM/yyyy",
				"l": "EEE dd 'de' MMM yyyy",
				"f": "EEEE dd 'de' MMMM yyyy"
			},
			"dmy": {
				"s": "dd/MM/yy",
				"m": "dd/MM/yyyy",
				"l": "dd 'de' MMM yyyy",
				"f": "dd 'de' MMMM yyyy"
			},
			"dmw": {
				"s": "EE dd/MM",
				"m": "EE dd/MM",
				"l": "EEE dd 'de' MMM",
				"f": "EEEE dd 'de' MMMM"
			},
			"dm": {
				"s": "dd/MM",
				"m": "dd/MM",
				"l": "dd 'de' MMM",
				"f": "dd 'de' MMMM"
			},
			"my": {
				"s": "MM/yy",
				"m": "MM/yyyy",
				"l": "MMM yy",
				"f": "MMMM yyyy"
			},
			"dw": {
				"s": "EE dd",
				"m": "EEE dd",
				"l": "EEE dd",
				"f": "EEEE dd"
			},
			"d": "dd",
			"m": {
				"s": "M",
				"m": "MM",
				"l": "MMM",
				"f": "MMMM"
			},
			"y": {
				"s": "yy",
				"m": "yy",
				"l": "yyyy",
				"f": "yyyy G"
			},
			"n": {
				"s": "N",
				"m": "NN",
				"l": "MMM",
				"f": "MMMM"
			}
		},
		"time": {
			"ahmsz": "hh:mm:ssa z",
			"ahms": "hh:mm:ssa",
			"hmsz": "HH:mm:ss z",
			"hms": "HH:mm:ss",
			"ahmz": "hh:mma z",
			"ahm": "hh:mma",
			"hmz": "HH:mm z",
			"ah": "HH",
			"hm": "HH:mm",
			"ms": "mm:ss",
			"h": "HH",
			"m": "mm",
			"s": "ss"
		}
	}
};
ilib.data.dateformats_es_MX = {
	"gregorian": {
		"time": {
			"ahmsz": "h:mm:ssa z",
			"ahms": "h:mm:ssa",
			"hmsz": "h:mm:ss z",
			"hms": "h:mm:ss",
			"ahmz": "h:mma z",
			"ahm": "h:mma",
			"hmz": "h:mm z",
			"ah": "ha",
			"hm": "h:mm",
			"h": "h"
		}
	}
};
ilib.data.dateformats_es_AR = {
	"gregorian": {
		"time": {
			"ahmsz": "HH'h'mm:ss a Z",
			"ahms": "HH'h'mm:ss a",
			"hmsz": "HH'h'mm:ss Z",
			"ahmz": "HH'h'mm a Z",
			"hms": "HH'h'mm:ss",
			"ahm": "HH'h'mm a",
			"hmz": "HH'h'mm Z",
			"ah": "HH",
			"hm": "HH'h'mm",
			"ms": "mm:ss",
			"h": "HH",
			"m": "mm",
			"s": "ss"
		}
	}
}
;
ilib.data.dateformats_pt = {
	"gregorian": {
		"date": {
			"dmwy": {
				"s": "E, dd/MM/yy",
				"m": "EE, dd/MM/yyyy",
				"l": "EEE, dd 'de' MMM 'de' yyyy",
				"f": "EEEE, dd 'de' MMMM 'de' yyyy"
			},
			"dmy": {
				"s": "dd/MM/yy",
				"m": "dd/MM/yyyy",
				"l": "dd 'de' MMM 'de' yyyy",
				"f": "dd 'de' MMMM 'de' yyyy"
			},
			"dmw": {
				"s": "E, dd/MM",
				"m": "EE, dd/MM",
				"l": "EEE, dd 'de' MMM",
				"f": "EEEE, dd 'de' MMMM"
			},
			"dm": {
				"s": "dd/MM",
				"m": "dd/MM",
				"l": "dd 'de' MMM",
				"f": "dd 'de' MMMM"
			},
			"my": {
				"s": "MM/yy",
				"m": "MM/yyyy",
				"l": "MMM yyyy",
				"f": "MMMM yyyy"
			},
			"dw": {
				"s": "EE, dd",
				"m": "EE, dd",
				"l": "EEE, dd",
				"f": "EEEE, dd"
			},
			"d": {
				"s": "dd",
				"m": "dd",
				"l": "dd",
				"f": "dd"
			},
			"m": {
				"s": "M",
				"m": "MM",
				"l": "MMM",
				"f": "MMMM"
			},
			"y": {
				"s": "yy",
				"m": "yyyy",
				"l": "yyyy",
				"f": "yyyy"
			},
			"n": {
				"s": "N",
				"m": "NN",
				"l": "MMM",
				"f": "MMMM"
			}
		},
		"time": {
			"ahmsz": "HH'h'mm'min'ss's' a z",
			"ahms": "HH'h'mm'min'ss's' a",
			"hmsz": "HH'h'mm'min'ss's' z",
			"ahmz": "HH'h'mm'min' a z",
			"hms": "HH'h'mm'min'ss's'",
			"ahm": "HH'h'mm'min' a",
			"hmz": "HH'h'mm'min' z",
			"ah": "HH",
			"hm": "HH'h'mm'min'",
			"ms": "mm'min'ss's'",
			"h": "HH",
			"m": "mm",
			"s": "ss"
		},
		"range": {
			"c00": {
				"s": "{sd}/{sm}/{sy} {st} - {et}",
				"m": "{sd}/{sm}/{sy} {st} - {et}",
				"l": "{sd}/{sm}/{sy} {st} - {et}",
				"f": "{sd} 'de' {sm} 'de' {sy} {st} - {et} "
			},
			"c01": {
				"s": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
				"m": "{sd}/{sm} {st} - {ed}/{em} {et}, {sy}",
				"l": "{sd} {st} - {ed} {et}, {sm} {sy}",
				"f": "{sd} {st} - {ed} {et},  'de' {sm} {sy}"
			},
			"c02": {
				"s": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
				"m": "{sd}/{sm} {st} - {ed}/{em} {et}, {sy}",
				"l": "{sd} 'de' {sm} {st} - {ed} 'de' {em} {et}, {sy}",
				"f": "{sd} 'de' {sm} {st} - {ed} 'de' {em} {et}, {sy}"
			},
			"c03": {
				"s": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
				"m": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
				"l": "{sd} 'de' {sm} 'de' {sy} {st} - {ed} 'de' {em} 'de' {ey} {et}",
				"f": "{sd} 'de' {sm} 'de' {sy} {st} - {ed} 'de' {em} 'de' {ey} {et}"
			},
			"c10": {
				"s": "{sd}/{sm}/{sy} - {ed}/{em}/{ey}",
				"m": "{sd}/{sm}/{sy} - {ed}/{em}/{ey}",
				"l": "{sd}-{ed} 'de' {sm} 'de' {sy}",
				"f": "{sd}-{ed} 'de' {sm} 'de' {sy}"
			},
			"c11": {
				"s": "{sd}/{sm}/{sy} - {ed}/{em}/{ey}",
				"m": "{sd}/{sm}/{sy} - {ed}/{em}/{ey}",
				"l": "{sd} 'de' {sm} - {ed} 'de' {em} 'de' {sy}",
				"f": "{sd} 'de' {sm} - {ed} 'de' {em} 'de' {sy}"
			},
			"c12": {
				"s": "{sd}/{sm}/{sy} - {ed}/{em}/{ey}",
				"m": "{sd}/{sm}/{sy} - {ed}/{em}/{ey}",
				"l": "{sd} 'de' {sm} 'de' {sy} - {ed} 'de' {em} 'de' {ey}",
				"f": "{sd} 'de' {sm} 'de' {sy} - {ed} 'de' {em} 'de' {ey}"
			},
			"c20": {
				"s": "{sm}/{sy} - {em}/{ey}",
				"m": "{sm}/{sy} - {em}/{ey}",
				"l": "{sm} 'de' {sy} - {em} 'de' {ey}",
				"f": "{sm} 'de' {sy} - {em} 'de' {ey}"
			},
			"c30": "{sy} - {ey}"
		}
	}
}
;
ilib.data.dateformats_zh = {
	"gregorian": {
		"order": {
			"s": "{date} {time}",
			"m": "{date} {time}",
			"l": "{date}{time}",
			"f": "{date}{time}"
		},
		"date": {
			"dmwy": {
				"s": "yy-MM-dd(E)",
				"m": "yyyy-MM-dd(EE)",
				"l": "yy年MMM月d日(EEE)",
				"f": "yyyy年MMMM月d日(EEEE)"
			},
			"dmy": {
				"s": "yy-MM-dd",
				"m": "yyyy-MM-dd",
				"l": "yy年MMM月d日",
				"f": "yyyy年MMMM月d日"
			},
			"dmw": {
				"s": "MM-dd(E)",
				"m": "MM-dd(EE)",
				"l": "MMM月d日(EEE)",
				"f": "MMMM月d日(EEEE)"
			},
			"dm": {
				"s": "MM-dd",
				"m": "MM-dd",
				"l": "MMM月d日",
				"f": "MMMM月d日"
			},
			"my": {
				"s": "yy-MM",
				"m": "yyyy-MM",
				"l": "yy年MMM月",
				"f": "yyyy年MMMM月"
			},
			"dw": {
				"s": "d日(E)",
				"m": "d日(EE)",
				"l": "d日(EEE)",
				"f": "d日(EEEE)"
			},
			"d": {
				"s": "d",
				"m": "dd",
				"l": "d日",
				"f": "d日"
			},
			"m": {
				"s": "M",
				"m": "MM",
				"l": "MMM月",
				"f": "MMMM月"
			},
			"y": {
				"s": "yy",
				"m": "yyyy",
				"l": "yy年",
				"f": "yyyy年"
			},
			"n": {
				"s": "N",
				"m": "NN",
				"l": "MMM月",
				"f": "MMMM月"
			}
		},
		"time": {
			"ahmsz": "ahh:mm:ssz",
			"ahms": "ahh:mm:ss",
			"hmsz": "hh:mm:ssz",
			"hms": "hh:mm:ss",
			"ahmz": "ahh:mmz",
			"ahm": "ahh:mm",
			"hmz": "hh:mmz",
			"ah": "ahh",
			"hm": "hh:mm",
			"ms": "mm:ss",
			"h": "hh",
			"m": "mm",
			"s": "ss"
		},
		"range": {
			"c00": {
				"s": "{sy}-{sm}-{sd}，{st}至{et}",
				"m": "{sy}-{sm}-{sd}，{st}至{et}",
				"l": "{sy}{sm}{sd}，{st}至{et}",
				"f": "{sy}{sm}{sd}，{st}至{et}"
			},
			"c01": {
				"s": "{sy}-{sm}-{sd}，{st}至{ey}-{em}-{ed}，{et}",
				"m": "{sy}-{sm}-{sd}，{st}至{ey}-{em}-{ed}，{et}",
				"l": "{sy}{sm}{sd}{st}至{ed}{et}",
				"f": "{sy}{sm}{sd}{st}至{ed}{et}"
			},
			"c02": {
				"s": "{sy}-{sm}-{sd}，{st}至{ey}-{em}-{ed}，{et}",
				"m": "{sy}-{sm}-{sd}，{st}至{ey}-{em}-{ed}，{et}",
				"l": "{sy}{sm}{sd}，{st}至{em}{ed}日，{et}",
				"f": "{sy}{sm}{sd}，{st}至{em}{ed}日，{et}"
			},
			"c03": {
				"s": "{sy}-{sm}-{sd}，{st}至{ey}-{em}-{ed}，{et}",
				"m": "{sy}-{sm}-{sd}，{st}至{ey}-{em}-{ed}，{et}",
				"l": "{sy}{sm}{sd}，{st}至{ey}{em}{ed}，{et}",
				"f": "{sy}{sm}{sd}，{st}至{ey}{em}{ed}，{et}"
			},
			"c10": {
				"s": "{sy}-{sm}-{sd}至{ed}",
				"m": "{sy}-{sm}-{sd}至{ed}",
				"l": "{sy}{sm}{sd}至{ed}",
				"f": "{sy}{sm}{sd}至{ed}"
			},
			"c11": {
				"s": "{sy}-{sm}-{sd}至{em}-{ed}",
				"m": "{sy}-{sm}-{sd}至{em}-{ed}",
				"l": "{sy}{sm}{sd}至{em}{ed}",
				"f": "{sy}{sm}{sd}至{em}{ed}"
			},
			"c12": {
				"s": "{sy}-{sm}-{sd}至{ey}-{em}-{ed}",
				"m": "{sy}-{sm}-{sd}至{ey}-{em}-{ed}",
				"l": "{sy}{sm}{sd}至{ey}{em}{ed}",
				"f": "{sy}{sm}{sd}至{ey}{em}{ed}"
			},
			"c20": {
				"s": "{sy}-{sm}至{ey}-{em}",
				"m": "{sy}-{sm}至{ey}-{em}",
				"l": "{sy}{sm}至{ey}{em}",
				"f": "{sy}{sm}至{ey}{em}"
			},
			"c30": "{sy}至{ey}"
		}
	}
};
ilib.data.dateformats_ja = {
	"gregorian": {
		"order": "{date}、{time}",
		"date": {
			"dmwy": {
				"s": "Eyy/MM/d",
				"m": "EEyyyy/MM/d",
				"l": "EEEyyyy年MMM月d日",
				"f": "yyyy年MMMM月d日（EEEE）"
			},
			"dmy": {
				"s": "yy/MM/d",
				"m": "yyyy/MM/d",
				"l": "yyyy年MMM月d日",
				"f": "yyyy年MMMM月d日"
			},
			"dmw": {
				"s": "EMM/d",
				"m": "EEMM/d",
				"l": "EEEMMM月d日",
				"f": "MMMM月d日（EEEE）"
			},
			"dm": {
				"s": "MM/d",
				"m": "MM/d",
				"l": "MMM月d日",
				"f": "MMMM月d日"
			},
			"my": {
				"s": "yy/MM",
				"m": "yyyy/MM",
				"l": "yyyy年MMM月",
				"f": "yyyy年MMMM月"
			},
			"dw": {
				"s": "EEd",
				"m": "EEd",
				"l": "EEEd",
				"f": "EEEEd"
			},
			"d": "dd",
			"m": {
				"s": "M",
				"m": "MM",
				"l": "MMM",
				"f": "MMMM"
			},
			"y": {
				"s": "yy",
				"m": "yyyy",
				"l": "yyyy",
				"f": "yyyy"
			},
			"n": {
				"s": "N",
				"m": "NN",
				"l": "MMM",
				"f": "MMMM"
			}
		},
		"time": {
			"ahmsz": "aHH:mm:ss z",
			"ahms": "aHH:mm:ss",
			"hmsz": "HH:mm:ss z",
			"hms": "HH:mm:ss",
			"ahmz": "aHH:mm z",
			"ahm": "aHH:mm",
			"hmz": "HH:mm z",
			"ah": "HH",
			"hm": "HH:mm",
			"ms": "mm:ss",
			"h": "HH",
			"m": "mm",
			"s": "ss"
		},
		"range": {
			"c00": {
				"s": "{sy}/{sm}/{sd}、{st}-{et}",
				"m": "{sy}/{sm}/{sd}、{st}-{et}",
				"l": "{sy}年{sm}月{sd}日{st}-{et}",
				"f": "{sy}年{sm}月{sd}日{st}-{et}"
			},
			"c01": {
				"s": "{sy}/{sm}/{sd}、{st}-{ey}/{em}/{ed}、{et}",
				"m": "{sy}/{sm}/{sd}、{st}-{ey}/{em}/{ed}、{et}",
				"l": "{sy}年{sm}月{sd}日{st}-{ed}日{et}",
				"f": "{sy}年{sm}月{sd}日{st}-{ed}日{et}"
			},
			"c02": {
				"s": "{sy}/{sm}/{sd}、{st}-{ey}/{em}/{ed}、{et}",
				"m": "{sy}/{sm}/{sd}、{st}-{ey}/{em}/{ed}、{et}",
				"l": "{sy}年{sm}月{sd}日{st}-{em}月{ed}日{et}",
				"f": "{sy}年{sm}月{sd}日{st}-{em}月{ed}日{et}"
			},
			"c03": {
				"s": "{sy}/{sm}/{sd}、{st}-{ey}/{em}/{ed}、{et}",
				"m": "{sy}/{sm}/{sd}、{st}-{ey}/{em}/{ed}、{et}",
				"l": "{sy}年{sm}月{sd}日{st}-{ey}年{em}月{ed}日{et}",
				"f": "{sy}年{sm}月{sd}日{st}-{ey}年{em}月{ed}日{et}"
			},
			"c10": {
				"s": "{sy}/{sm}/{sd}-{ed}",
				"m": "{sy}/{sm}/{sd}-{ed}",
				"l": "{sy}年{sm}月{sd}-{ed}日",
				"f": "{sy}年{sm}月{sd}-{ed}日"
			},
			"c11": {
				"s": "{sy}/{sm}/{sd}-{ey}/{em}/{ed}",
				"m": "{sy}/{sm}/{sd}-{ey}/{em}/{ed}",
				"l": "{sy}年{sm}月{sd}日-{em}月{ed}日",
				"f": "{sy}年{sm}月{sd}日-{em}月{ed}日"
			},
			"c12": {
				"s": "{sy}/{sm}/{sd}-{ey}/{em}/{ed}",
				"m": "{sy}/{sm}/{sd}-{ey}/{em}/{ed}",
				"l": "{sy}年{sm}月{sd}日-{ey}年{em}月{ed}日",
				"f": "{sy}年{sm}月{sd}日-{ey}年{em}月{ed}日"
			},
			"c20": {
				"s": "{sy}/{sm}-{ey}/{em}",
				"m": "{sy}/{sm}-{ey}/{em}",
				"l": "{sy}年{sm}月-{ey}年{em}月",
				"f": "{sy}年{sm}月-{ey}年{em}月"
			},
			"c30": "{sy}-{ey}"
		}
	}
};
ilib.data.dateformats_ko = {
	"gregorian": {
		"order": "{date} {time}",
		"date": {
			"dmwy": {
				"s": "E yy. MM. dd",
				"m": "EE yyyy. MM. dd",
				"l": "EEE yyyy년 MMM월 d일",
				"f": "yyyy년 MMM월 d일 (EEEE)"
			},
			"dmy": {
				"s": "yy. MM. dd",
				"m": "yyyy. MM. dd",
				"l": "yyyy년 MMM월 d일",
				"f": "yyyy년 MMM월 d일"
			},
			"dmw": {
				"s": "E MM. dd",
				"m": "EE MM. dd",
				"l": "EEE MMM월 d일",
				"f": "MMM월 d일 (EEEE)"
			},
			"dm": {
				"s": "MM. dd",
				"m": "MM. dd",
				"l": "MMM월 d일",
				"f": "MMM월 d일"
			},
			"my": {
				"s": "yy. MM.",
				"m": "yyyy. MM.",
				"l": "yyyy년 MMM월",
				"f": "yyyy년 MMM월"
			},
			"dw": {
				"s": "EE dd",
				"m": "EE dd",
				"l": "EEE d일",
				"f": "d일(EEEE)"
			},
			"d": "dd",
			"m": {
				"s": "M",
				"m": "MM",
				"l": "MMM",
				"f": "MMMM"
			},
			"y": {
				"s": "yy",
				"m": "yyyy",
				"l": "yyyy",
				"f": "yyyy"
			},
			"n": {
				"s": "N",
				"m": "NN",
				"l": "MMM",
				"f": "MMMM"
			}
		},
		"time": {
			"ahmsz": "a h:mm:ss z",
			"ahms": "a h:mm:ss",
			"hmsz": "h:mm:ss z",
			"hms": "h:mm:ss",
			"ahmz": "a h:mm z",
			"ahm": "a h:mm",
			"hmz": "h:mm z",
			"ah": "a h",
			"hm": "h:mm",
			"ms": "mm:ss",
			"h": "h",
			"m": "mm",
			"s": "ss"
		},
		"range": {
			"c00": {
				"s": "{sy}. {sm}. {sd} {st}에서 {et}까지",
				"m": "{sy}. {sm}. {sd} {st}에서 {et}까지",
				"l": "{sy}년 {sm}월 {sd}일 {st}에서 {et}까지",
				"f": "{sy}년 {sm}월 {sd}일 {st}에서 {et}까지"
			},
			"c01": {
				"s": "{sy}. {sm}. {sd} {st}에서 {ed} {et}까지",
				"m": "{sy}. {sm}. {sd} {st}에서 {ed} {et}까지",
				"l": "{sy}년 {sm}월 {sd}일 {st}에서 {ed}일 {et}까지",
				"f": "{sy}년 {sm}월 {sd}일 {st}에서 {ed}일 {et}까지"
			},
			"c02": {
				"s": "{sy}. {sm}. {sd} {st}에서 {em}. {ed} {et}까지",
				"m": "{sy}. {sm}. {sd} {st}에서 {em}. {ed} {et}까지",
				"l": "{sy}년 {sm}월 {sd}일 {st}에서 {em}월 {ed}일 {et}까지",
				"f": "{sy}년 {sm}월 {sd}일 {st}에서 {em}월 {ed}일 {et}까지"
			},
			"c03": {
				"s": "{sy}. {sm}. {sd} {st}에서 {ey}. {em}. {ed} {et}까지",
				"m": "{sy}. {sm}. {sd} {st}에서 {ey}. {em}. {ed} {et}까지",
				"l": "{sy}년 {sm}월 {sd}일 {st}에서 {ey}년 {em}월 {ed}일 {et}까지",
				"f": "{sy}년 {sm}월 {sd}일 {st}에서 {ey}년 {em}월 {ed}일 {et}까지"
			},
			"c10": {
				"s": "{sy}. {sm}. {sd}에서 {ed}까지",
				"m": "{sy}. {sm}. {sd}에서 {ed}까지",
				"l": "{sy}년 {sm}월 {sd}일에서 {ed}일까지",
				"f": "{sy}년 {sm}월 {sd}일에서 {ed}일까지"
			},
			"c11": {
				"s": "{sy}. {sm}. {sd}에서 {em}. {ed}까지",
				"m": "{sy}. {sm}. {sd}에서 {em}. {ed}까지",
				"l": "{sy}년 {sm}월 {sd}일에서 {em}월 {ed}일까지",
				"f": "{sy}년 {sm}월 {sd}일에서 {em}월 {ed}일까지"
			},
			"c12": {
				"s": "{sy}. {sm}. {sd}에서 {ey}. {em}. {ed}까지",
				"m": "{sy}. {sm}. {sd}에서 {ey}. {em}. {ed}까지",
				"l": "{sy}년 {sm}월 {sd}일에서 {ey}년 {em}월 {ed}일까지",
				"f": "{sy}년 {sm}월 {sd}일에서 {ey}년 {em}월 {ed}일까지"
			},
			"c20": {
				"s": "{sy}. {sm}.에서 {ey}. {em}.까지",
				"m": "{sy}. {sm}.에서 {ey}. {em}.까지",
				"l": "{sy}년 {sm}월에서 {ey}년 {em}월까지",
				"f": "{sy}년 {sm}월에서 {ey}년 {em}월까지"
			},
			"c30": "{sy}년에서 {ey}년까지"
		}
	}
};
ilib.data.dateformats_id = {
	"gregorian": {
		"date": {
			"dmwy": {
				"s": "E d/M/yy",
				"m": "EE, d/M/yyyy",
				"l": "EEE, d MMM yyyy",
				"f": "EEEE, d MMMM yyyy"
			},
			"dmy": {
				"s": "d/M/yy",
				"m": "d/M/yyyy",
				"l": "d MMM yyyy",
				"f": "d MMMM yyyy"
			},
			"dmw": {
				"s": "E d/M",
				"m": "EE, d/M",
				"l": "EEE, d MMM",
				"f": "EEEE, d MMMM"
			},
			"dm": {
				"s": "d/M",
				"m": "d/M",
				"l": "d MMM",
				"f": "d MMMM"
			},
			"my": {
				"s": "M/yy",
				"m": "M/yyyy",
				"l": "MMM yyyy",
				"f": "MMMM yyyy"
			},
			"dw": {
				"s": "E d",
				"m": "EE, d",
				"l": "EEE, d",
				"f": "EEEE, d"
			},
			"d": {
				"s": "d",
				"m": "d",
				"l": "d",
				"f": "d"
			},
			"m": {
				"s": "M",
				"m": "M",
				"l": "MMM",
				"f": "MMMM"
			},
			"y": {
				"s": "yy",
				"m": "yyyy",
				"l": "yyyy",
				"f": "yyyy"
			},
			"n": {
				"s": "N",
				"m": "N",
				"l": "MMM",
				"f": "MMMM"
			}
		},
		"time": {
			"ahmsz": "H:mm:ss a z",
			"ahms": "H:mm:ss a",
			"hmsz": "H:mm:ss z",
			"ahmz": "H:mm a z",
			"hms": "HH:mm:ss",
			"ahm": "H:mm a",
			"hmz": "H:mm z",
			"ah": "Ha",
			"hm": "H:mm",
			"ms": "mm:ss",
			"h": "H",
			"m": "mm",
			"s": "ss"
		},
		"range": {
			"c00": {
				"s": "{sd}/{sm}/{sy} {st} – {et}",
				"m": "{sd}/{sm}/{sy} {st} – {et}",
				"l": "{sd} {sm} {sy} {st} – {et}",
				"f": "{sd} {sm} {sy} {st} – {et} "
			},
			"c01": {
				"s": "{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}",
				"m": "{sd}/{sm} {st} – {ed}/{em} {et}, {sy}",
				"l": "{sd} {st} – {ed} {et}, {sm} {sy}",
				"f": "{sd} {st} – {ed} {et}, {sm} {sy}"
			},
			"c02": {
				"s": "{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}",
				"m": "{sd}/{sm} {st} – {ed}/{em} {et}, {sy}",
				"l": "{sd} {sm} {st} – {ed} {em} {et}, {sy}",
				"f": "{sd} {sm} {st} – {ed} {em} {et}, {sy}"
			},
			"c03": {
				"s": "{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}",
				"m": "{sd}/{sm}/{sy} {st} – {ed}/{em}/{ey} {et}",
				"l": "{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}",
				"f": "{sd} {sm} {sy} {st} – {ed} {em} {ey} {et}"
			},
			"c10": {
				"s": "{sd}/{sm}/{sy} – {ed}/{em}/{ey}",
				"m": "{sd}/{sm}/{sy} – {ed}/{em}/{ey}",
				"l": "{sd}–{ed} {sm} {sy}",
				"f": "{sd}–{ed} {sm} {sy}"
			},
			"c11": {
				"s": "{sd}/{sm}/{sy} – {ed}/{em}/{ey}",
				"m": "{sd}/{sm}/{sy} – {ed}/{em}/{ey}",
				"l": "{sd} {sm} – {ed} {em} {sy}",
				"f": "{sd} {sm} – {ed} {em} {sy}"
			},
			"c12": {
				"s": "{sd}/{sm}/{sy} – {ed}/{em}/{ey}",
				"m": "{sd}/{sm}/{sy} – {ed}/{em}/{ey}",
				"l": "{sd} {sm} {sy} – {ed} {em} {ey}",
				"f": "{sd} {sm} {sy} – {ed} {em} {ey}"
			},
			"c20": {
				"s": "{sm}/{sy} – {em}/{ey}",
				"m": "{sm}/{sy} – {em}/{ey}",
				"l": "{sm} {sy} – {em} {ey}",
				"f": "{sm} {sy} – {em} {ey}"
			},
			"c30": "{sy}–{ey}"
		}
	}
}
;
ilib.data.dateformats_ru = {
	"gregorian": {
		"date": {
			"dmwy": {
				"s": "E, dd.MM.yy",
				"m": "EE, dd.MM.yyyy",
				"l": "EEE, d MMM yyyy",
				"f": "EEEE, d MMMM yyyy 'г'."
			},
			"dmy": {
				"s": "dd.MM.yy",
				"m": "dd.MM.yyyy",
				"l": "d MMM yyyy",
				"f": "d MMMM yyyy 'г'."
			},
			"dmw": {
				"s": "E, dd.MM",
				"m": "EE, dd.MM",
				"l": "EEE, d MMM",
				"f": "EEEE, d MMMM"
			},
			"dm": {
				"s": "dd.MM",
				"m": "dd.MM",
				"l": "d MMM",
				"f": "d MMMM"
			},
			"my": {
				"s": "MM.yy",
				"m": "MM.yyyy",
				"l": "MMM yyyy",
				"f": "MMMM yyyy 'г'."
			},
			"dw": {
				"s": "EE, d",
				"m": "EE, d",
				"l": "EEE, d",
				"f": "EEEE, d"
			},
			"d": {
				"s": "d",
				"m": "d",
				"l": "d",
				"f": "d"
			},
			"m": {
				"s": "MM",
				"m": "MM",
				"l": "MMM",
				"f": "MMMM"
			},
			"y": {
				"s": "yy",
				"m": "yyyy",
				"l": "yyyy",
				"f": "yyyy"
			},
			"n": {
				"s": "N",
				"m": "NN",
				"l": "MMM",
				"f": "MMMM"
			}
		},
		"time": {
			"ahmsz": "H:mm:ss a z",
			"ahms": "H:mm:ss a",
			"hmsz": "H:mm:ss z",
			"ahmz": "H:mm a z",
			"hms": "H:mm:ss",
			"ahm": "H:mm a",
			"hmz": "H:mm z",
			"ah": "H a",
			"hm": "H:mm",
			"ms": "mm:ss",
			"h": "H",
			"m": "mm",
			"s": "ss"
		},
		"range": {
			"c00": {
				"s": "{sd}.{sm}.{sy} {st}-{et}",
				"m": "{sd}.{sm}.{sy} {st}-{et}",
				"l": "{sd}.{sm}.{sy} {st}-{et}",
				"f": "{sd} {sm} {sy} 'г'. {st}-{et} "
			},
			"c01": {
				"s": "{sd}.{sm} {st} - {ed}.{em} {et}, {sy}",
				"m": "{sd}.{sm} {st} - {ed}.{em} {et}, {sy}",
				"l": "{sd} {st} - {ed} {et}, {sm} {sy}",
				"f": "{sd} {st} - {ed} {et}, {sm} {sy} 'г'."
			},
			"c02": {
				"s": "{sd}.{sm}.{sy} {st} - {ed}.{em}.{ey} {et}",
				"m": "{sd}.{sm} {st} - {ed}.{em} {et}, {sy}",
				"l": "{sd} {sm} {st} - {ed} {em} {et}, {sy}",
				"f": "{sd} {sm} {st} - {ed} {em} {et}, {sy} 'г'."
			},
			"c03": {
				"s": "{sd}.{sm}.{sy} {st} - {ed}.{em}.{ey} {et}",
				"m": "{sd}.{sm}.{sy} {st} - {ed}.{em}.{ey} {et}",
				"l": "{sd} {sm} {sy} {st} - {ed} {em} {ey} {et}",
				"f": "{sd} {sm} {sy} 'г'. {st} - {ed} {em} {ey} 'г'. {et}"
			},
			"c10": {
				"s": "{sd}.{sm}.{sy} - {ed}.{em}.{ey}",
				"m": "{sd}.{sm}.{sy} - {ed}.{em}.{ey}",
				"l": "{sd}-{ed} {sm} {sy} 'г'.",
				"f": "{sd}-{ed} {sm} {sy} 'г'."
			},
			"c11": {
				"s": "{sd}.{sm}.{sy} - {ed}.{em}.{ey}",
				"m": "{sd}.{sm}.{sy} - {ed}.{em}.{ey}",
				"l": "{sd} {sm} - {ed} {em} {sy} 'г'.",
				"f": "{sd} {sm} - {ed} {em} {sy} 'г'."
			},
			"c12": {
				"s": "{sd}.{sm}.{sy} - {ed}.{em}.{ey}",
				"m": "{sd}.{sm}.{sy} - {ed}.{em}.{ey}",
				"l": "{sd} {sm} {sy} - {ed} {em} {ey} 'г'.",
				"f": "{sd} {sm} {sy} - {ed} {em} {ey} 'г'."
			},
			"c20": {
				"s": "{sm}.{sy} - {em}.{ey}",
				"m": "{sm}.{sy} - {em}.{ey}",
				"l": "{sm} {sy} - {em} {ey} 'г'.",
				"f": "{sm} {sy} - {em} {ey} 'г'."
			},
			"c30": "{sy}-{ey}"
		}
	}
}
;
ilib.data.dateformats_en_AU = {
	"gregorian": {
		"time": {
			"ahmsz": "h:mm:ssa z",
			"ahms": "h:mm:ssa",
			"hmsz": "h:mm:ss z",
			"hms": "h:mm:ss",
			"ahmz": "h:mma z",
			"ahm": "h:mma",
			"hmz": "h:mm z",
			"ah": "ha",
			"hm": "h:mm",
			"h": "h"
		}
	}
};
ilib.data.dateformats_de = {
	"gregorian": {
		"order": "{time} {date}",
		"date": {
			"dmwy": {
				"s": "EE dd.MM.yy",
				"m": "EE dd.MM.yyyy",
				"l": "EEE dd. MMM yyyy",
				"f": "EEEE dd. MMMM yyyy"
			},
			"dmy": {
				"s": "dd.MM.yy",
				"m": "dd.MM.yyyy",
				"l": "dd. MMM yyyy",
				"f": "dd. MMMM yyyy"
			},
			"dmw": {
				"s": "EE dd.MM",
				"m": "EE dd.MM",
				"l": "EEE dd. MMM",
				"f": "EEEE dd. MMMM"
			},
			"dm": {
				"s": "dd.MM",
				"m": "dd.MM",
				"l": "dd. MMM",
				"f": "dd. MMMM"
			},
			"my": {
				"s": "MM.yy",
				"m": "MM.yyyy",
				"l": "MMM yyyy",
				"f": "MMMM yyyy"
			},
			"dw": {
				"s": "EE dd",
				"m": "EEE dd",
				"l": "EEE dd",
				"f": "EEEE dd"
			},
			"d": "dd.",
			"m": {
				"s": "MM",
				"m": "MM",
				"l": "MMM",
				"f": "MMMM"
			},
			"y": {
				"s": "yy",
				"m": "yyyy",
				"l": "yyyy",
				"f": "yyyy"
			},
			"n": {
				"s": "N",
				"m": "NN",
				"l": "MMM",
				"f": "MMMM"
			}
		},
		"time": {
			"ahmsz": "HH:mm:ss a z",
			"ahms": "HH:mm:ss a",
			"hmsz": "HH:mm:ss z",
			"hms": "HH:mm:ss",
			"ahmz": "HH:mm a z",
			"ahm": "HH:mm a",
			"hmz": "HH:mm z",
			"ah": "HH",
			"hm": "HH:mm",
			"ms": "mm:ss",
			"h": "HH",
			"m": "mm",
			"s": "ss"
		},
		"range": {
			"c00": {
				"s": "{st} - {et} {sd}{sm}.{sy}",
				"m": "{st} - {et} {sd}{sm}.{sy}",
				"l": "{st} - {et} {sd} {sm} {sy}",
				"f": "{st} - {et} {sd} {sm} {sy}"
			},
			"c01": {
				"s": "{st} {sd}{sm}.{sy} - {et} {ed}{em}.{ey}",
				"m": "{st} {sd}{sm} - {et} {ed}{em} {sy}",
				"l": "{st} {sd} {sm} - {et} {ed} {em} {sy}",
				"f": "{st} {sd} {sm} - {et} {ed} {em} {sy}"
			},
			"c02": {
				"s": "{st} {sd}{sm}.{sy} - {et} {ed}{em}.{ey}",
				"m": "{st} {sd}{sm} - {et} {ed}{em} {sy}",
				"l": "{st} {sd} {sm} - {et} {ed} {em} {sy}",
				"f": "{st} {sd} {sm} - {et} {ed} {em} {sy}"
			},
			"c03": {
				"s": "{st} {sd}{sm}.{sy} - {et} {ed}{em}.{ey}",
				"m": "{st} {sd}{sm}.{sy} - {et} {ed}{em}.{ey}",
				"l": "{st} {sd} {sm} {sy} - {et} {ed} {em} {ey}",
				"f": "{st} {sd} {sm} {sy} - {et} {ed} {em} {ey}"
			},
			"c10": {
				"s": "{sd}{sm}.{sy} - {ed}{em}.{ey}",
				"m": "{sd}{sm}.{sy} - {ed}{em}.{ey}",
				"l": "{sd}-{ed} {sm} {sy}",
				"f": "{sd}-{ed} {sm} {sy}"
			},
			"c11": {
				"s": "{sd}{sm}.{sy} - {ed}{em}.{ey}",
				"m": "{sd}{sm} - {ed}{em} {sy}",
				"l": "{sd} {sm} - {ed} {em} {sy}",
				"f": "{sd} {sm} - {ed} {em} {sy}"
			},
			"c12": {
				"s": "{sd}{sm}.{sy} - {ed}{em}.{ey}",
				"m": "{sd}{sm}.{sy} - {ed}{em}.{ey}",
				"l": "{sd} {sm} {sy} - {ed} {em} {ey}",
				"f": "{sd} {sm} {sy} - {ed} {em} {ey}"
			},
			"c20": {
				"s": "{sm}.{sy} - {em}.{ey}",
				"m": "{sm}.{sy} - {em}.{ey}",
				"l": "{sm} {sy} - {em} {ey}",
				"f": "{sm} {sy} - {em} {ey}"
			},
			"c30": "{sy} - {ey}"
		}
	}
};
ilib.data.dateformats_it = {
	"gregorian": {
		"order": "{date} {time}",
		"date": {
			"dmwy": {
				"s": "EE dd/MM/yy",
				"m": "EEE dd/MM/yyyy",
				"l": "EEE dd MMM yyyy",
				"f": "EEEE dd MMMM yyyy"
			},
			"dmy": {
				"s": "dd/MM/yy",
				"m": "dd/MM/yyyy",
				"l": "dd MMM yyyy",
				"f": "dd MMMM yyyy"
			},
			"dmw": {
				"s": "EE dd/MM",
				"m": "EE dd/MM",
				"l": "EEE dd MMM",
				"f": "EEEE dd MMMM"
			},
			"dm": {
				"s": "dd/MM",
				"m": "dd/MM",
				"l": "dd MMM",
				"f": "dd MMMM"
			},
			"my": {
				"s": "MM/yy",
				"m": "MM/yyyy",
				"l": "MMM yy",
				"f": "MMMM yyyy"
			},
			"dw": {
				"s": "EE dd",
				"m": "EEE dd",
				"l": "EEE dd",
				"f": "EEEE dd"
			},
			"d": "dd",
			"m": {
				"s": "M",
				"m": "MM",
				"l": "MMM",
				"f": "MMMM"
			},
			"y": {
				"s": "yy",
				"m": "yy",
				"l": "yyyy",
				"f": "yyyy G"
			},
			"n": {
				"s": "N",
				"m": "NN",
				"l": "MMM",
				"f": "MMMM"
			}
		},
		"time": {
			"ahmsz": "hh.mm.ss a z",
			"ahms": "hh.mm.ss a",
			"hmsz": "HH.mm.ss z",
			"hms": "HH.mm.ss",
			"ahmz": "hh.mm a z",
			"ahm": "hh.mm a",
			"hmz": "HH.mm z",
			"ah": "HH",
			"hm": "HH.mm",
			"ms": "mm.ss",
			"h": "HH",
			"m": "mm",
			"s": "ss"
		},
		"range": {
			"c00": {
				"s": "{st} - {et} {sd}/{sm}/{sy}",
				"m": "{st} - {et} {sd}/{sm}/{sy}",
				"l": "{st} - {et} {sd} {sm} {sy}",
				"f": "{st} - {et} {sd} {sm} {sy}"
			},
			"c01": {
				"s": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
				"m": "{sd}/{sm} {st} - {ed}/{em} {et} {sy}",
				"l": "{sd} {st} - {ed} {et} {sm} {sy}",
				"f": "{sd} {st} - {ed} {et} {sm} {sy}"
			},
			"c02": {
				"s": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
				"m": "{sd}/{sm} {st} - {ed}/{em} {et} {sy}",
				"l": "{sd} {sm} {st} - {ed} {em} {et} {sy}",
				"f": "{sd} {sm} {st} - {ed} {em} {et} {sy}"
			},
			"c03": {
				"s": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
				"m": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
				"l": "{sd} {sm} {sy} {st} - {ed} {em} {ey} {et}",
				"f": "{sd} {sm} {sy} {st} - {ed} {em} {ey} {et}"
			},
			"c10": {
				"s": "{sd}-{ed}/{sm}/{sy}",
				"m": "{sd}-{ed}/{sm}/{sy}",
				"l": "{sd}-{ed} {sm} {sy}",
				"f": "{sd}-{ed} {sm} {sy}"
			},
			"c11": {
				"s": "{sd}/{sm}-{ed}/{em} {sy}",
				"m": "{sd}/{sm} - {ed}/{em} {sy}",
				"l": "{sd} {sm} - {ed} {em} {sy}",
				"f": "{sd} {sm} - {ed} {em} {sy}"
			},
			"c12": {
				"s": "{sd}/{sm}/{sy}-{ed}/{em}/{ey}",
				"m": "{sd}/{sm}/{sy} - {ed}/{em}/{ey}",
				"l": "{sd} {sm} {sy} - {ed} {em} {ey}",
				"f": "{sd} {sm} {sy} - {ed} {em} {ey}"
			},
			"c20": {
				"s": "{sm}/{sy}-{em}/{ey}",
				"m": "{sm}/{sy} - {em}/{ey}",
				"l": "{sm} {sy} - {em} {ey}",
				"f": "{sm} {sy} - {em} {ey}"
			},
			"c30": "{sy} - {ey}"
		}
	}
};
ilib.data.dateformats_en_ZA = {
	"gregorian": {
		"order": "{date} {time}",
		"date": {
			"dmwy": {
				"s": "E yy/MM/dd",
				"m": "EE yyyy/MM/dd",
				"l": "EEE dd MMM yy",
				"f": "EEEE dd MMMM yyyy"
			},
			"dmy": {
				"s": "yy/MM/dd",
				"m": "yyyy/MM/dd",
				"l": "dd MMM yy",
				"f": "dd MMMM yyyy"
			},
			"dmw": {
				"s": "E MM/dd",
				"m": "EE MM/dd",
				"l": "EEE dd MMM",
				"f": "EEEE dd MMMM"
			},
			"dm": {
				"s": "MM/dd",
				"m": "MM/dd",
				"l": "dd MMM",
				"f": "dd MMMM"
			},
			"my": {
				"s": "yy/MM",
				"m": "yyyy/MM",
				"l": "MMM yy",
				"f": "MMMM yyyy"
			},
			"d": {
				"s": "dd",
				"m": "dd",
				"l": "dd",
				"f": "dd"
			},
			"m": {
				"s": "M",
				"m": "MM",
				"l": "MMM",
				"f": "MMMM"
			},
			"y": {
				"s": "yy",
				"m": "yy",
				"l": "yyyy",
				"f": "yyyy"
			},
			"n": {
				"s": "N",
				"m": "NN",
				"l": "MMM",
				"f": "MMMM"
			}
		},
		"time": {
			"ahmsz": "h:mm:ss a Z",
			"ahms": "h:mm:ss a ",
			"hmsz": "h:mm:ss Z",
			"ahmz": "h:mm a Z",
			"hms": "h:mm:ss",
			"ahm": "h:mm a",
			"hmz": "h:mm Z",
			"ah": "h a",
			"hm": "h:mm",
			"ms": "mm:ss",
			"h": "h",
			"m": "mm",
			"s": "ss"
		},
		"range": {
			"c00": {
				"s": "{sy}/{sm}/{sd}, {st} - {et}",
				"m": "{sy}/{sm}/{sd}, {st} - {et}",
				"l": "{sd} {sm} {sy}, {st} - {et}",
				"f": "{sd} {sm} {sy}, {st} - {et}"
			},
			"c01": {
				"s": "{sy}/{sm}/{sd} {st} – {ed} {et}",
				"m": "{sy}/{sm}/{sd} {st} – {ed} {et}",
				"l": "{sd} {sm} {sy} {st} – {ed} {em} {et}",
				"f": "{sd} {sm} {sy} {st} – {ed} {em} {et}"
			},
			"c02": {
				"s": "{sm}/{sd} {st} - {em}/{ed} {et}, {sy}",
				"m": "{sm}/{sd} {st} - {em}/{ed} {et}, {sy}",
				"l": "{sd} {sm} {st} - {ed} {em} {et}, {sy}",
				"f": "{sd} {sm} {st} - {ed} {em} {et}, {sy}"
			},
			"c03": {
				"s": "{sy}/{sm}/{sd} {st} - {ey}/{em}/{ed} {et}",
				"m": "{sy}/{sm}/{sd} {st} - {ey}/{em}/{ed} {et}",
				"l": "{sd} {sm} {sy}, {st} - {ed} {em} {ey}, {et}",
				"f": "{sd} {sm} {sy}, {st} - {ed} {em} {ey}, {et}"
			},
			"c10": {
				"s": "{sy}/{sm}/{sd} – {ed}",
				"m": "{sy}/{sm}/{sd} – {ed}",
				"l": "{sd} – {ed} {sm} {sy}",
				"f": "{sd} – {ed} {sm} {sy}"
			},
			"c11": {
				"s": "{sy}/{sm}/{sd} – {em}/{ed}",
				"m": "{sy}/{sm}/{sd} – {em}/{ed}",
				"l": "{sd} {sm} – {ed} {em} {sy}",
				"f": "{sd} {sm} – {ed} {em} {sy}"
			},
			"c12": {
				"s": "{sy}/{sm}/{sd} – {ey}/{em}/{ed}",
				"m": "{sy}/{sm}/{sd} – {ey}/{em}/{ed}",
				"l": "{sd} {sm} {sy} – {ed} {em} {ey}",
				"f": "{sd} {sm} {sy} – {ed} {em} {ey}"
			},
			"c20": {
				"s": "{sy}/{sm} – {ey}/{em}",
				"m": "{sy}/{sm} – {ey}/{em}",
				"l": "{sm} {sy} – {em} {ey}",
				"f": "{sm} {sy} – {em} {ey}"
			},
			"c30": "{sy} – {ey}"
		}
	}
}
;
ilib.data.dateformats_en_PH = {
	"gregorian": {
		"time": {
			"ahmsz": "h:mm:ssa z",
			"ahms": "h:mm:ssa",
			"hmsz": "h:mm:ss z",
			"hms": "h:mm:ss",
			"ahmz": "h:mma z",
			"ahm": "h:mma",
			"hmz": "h:mm z",
			"ah": "ha",
			"hm": "h:mm",
			"h": "h"
		}
	}
};
ilib.data.dateformats_vi = {
	"gregorian": {
		"order": "{time} {date}",
		"date": {
			"dmwy": {
				"s": "E dd/MM/yy",
				"m": "EE dd/MM/yyyy",
				"l": "EEE dd MMM yyyy",
				"f": "EEEE 'ngày' dd MMMM 'năm' yyyy"
			},
			"dmy": {
				"s": "d/M/yy",
				"m": "dd/MM/yyyy",
				"l": "dd MMM yyyy",
				"f": "'ngày' dd MMMM 'năm' yyyy"
			},
			"dmw": {
				"s": "E d/M",
				"m": "EE dd/MM",
				"l": "EEE dd MMM",
				"f": "EEEE 'ngày' dd MMMM"
			},
			"dw": {
				"s": "E dd",
				"m": "EE dd",
				"l": "EEE dd",
				"f": "EEEE 'ngày' dd"
			},
			"dm": {
				"s": "d/M",
				"m": "dd/MM",
				"l": "dd MMM",
				"f": "'ngày' dd MMMM"
			},
			"my": {
				"s": "M/yy",
				"m": "MM/yyyy",
				"l": "MMM yyyy",
				"f": "MMMM 'năm' yyyy"
			},
			"d": {
				"s": "dd",
				"m": "dd",
				"l": "dd",
				"f": "'ngày' dd"
			},
			"m": {
				"s": "M",
				"m": "MM",
				"l": "MMM",
				"f": "MMMM"
			},
			"y": {
				"s": "yy",
				"m": "yyyy",
				"l": "yyyy",
				"f": "'năm' yyyy"
			},
			"n": {
				"s": "N",
				"m": "NN",
				"l": "MMM",
				"f": "MMMM"
			}
		},
		"time": {
			"ahmsz": "HH'h'mm:ss a Z",
			"ahms": "HH'h'mm:ss a",
			"hmsz": "HH'h'mm:ss Z",
			"ahmz": "HH'h'mm a Z",
			"hms": "HH'h'mm:ss",
			"ahm": "HH'h'mm a",
			"hmz": "HH'h'mm Z",
			"ah": "HH",
			"hm": "HH'h'mm",
			"ms": "mm:ss",
			"h": "HH",
			"m": "mm",
			"s": "ss"
		},
		"range": {
			"c00": {
				"s": "{st} – {et} {sd}/{sm}/{sy}",
				"m": "{st} – {et} {sd}/{sm}/{sy}",
				"l": "{st} – {et} {sd} {sm} {sy}",
				"f": "vào lúc {st} – {et} {sd} {sm} {sy}"
			},
			"c01": {
				"s": "{st} {sd}/{sm}/{sy} – {et} {ed}/{em}/{ey}",
				"m": "{st} {sd}/{sm}/{sy} – {et} {ed}/{em}/{ey}",
				"l": "{st} {sd} – {et} {ed} {em} {ey}",
				"f": "vào lúc {st} {sd} – vào lúc {et} {ed} {em} {ey}"
			},
			"c02": {
				"s": "{st} {sd}/{sm}/{sy} – {et} {ed}/{em}/{ey}",
				"m": "{st} {sd}/{sm}/{sy} – {et} {ed}/{em}/{ey}",
				"l": "{st} {sd} {sm} {sy} – {et} {ed} {em} {ey}",
				"f": "vào lúc {st} {sd} {sm} – vào lúc {et} {ed} {em} {ey}"
			},
			"c03": {
				"s": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
				"m": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
				"l": "{sd} {sm} {sy} {st} - {ed} {em} {ey} {et}",
				"f": "vào lúc {st} {sd} {sm} {sy} – vào lúc {et} {ed} {em} {ey}"
			},
			"c10": {
				"s": "{sd} – {ed}/{em}/{ey}",
				"m": "{sd} – {ed}/{em}/{ey}",
				"l": "{sd} – {ed} {sm} {sy}",
				"f": "{sd} – {ed} {sm} {sy}"
			},
			"c11": {
				"s": "{sd}/{sm} – {ed}/{em}/{ey}",
				"m": "{sd}/{sm} – {ed}/{em}/{ey}",
				"l": "{sd} {sm} – {ed} {em} {sy}",
				"f": "{sd} {sm} – {ed} {em} {sy}"
			},
			"c12": {
				"s": "{sd}/{sm}/{sy} – {ed}/{em}/{ey}",
				"m": "{sd}/{sm}/{sy} – {ed}/{em}/{ey}",
				"l": "{sd} {sm} {sy} – {ed} {em} {ey}",
				"f": "{sd} {sm} {sy} – {ed} {em} {ey}"
			},
			"c20": {
				"s": "{sm}/{sy} – {em}/{ey}",
				"m": "{sm}/{sy} – {em}/{ey}",
				"l": "{sm} {sy} – {em} {ey}",
				"f": "{sm} {sy} – {em} {ey}"
			},
			"c30": {
				"s": "{sy} – {ey}",
				"m": "{sy} – {ey}",
				"l": "{sy} – {ey}",
				"f": "{sy} – {ey}"
			}
		}
	}
}
;
ilib.data.dateformats_xx = {
	"gregorian": {
		"order": "{date} {time}",
		"date": {
			"dmwy": {
				"s": "EE d/MM/yy",
				"m": "EEE d/MM/yyyy",
				"l": "EEE d MMM, yyyy",
				"f": "EEEE d MMMM, yyyy"
			},
			"dmy": {
				"s": "d/MM/yy",
				"m": "d/MM/yyyy",
				"l": "d MMM, yyyy",
				"f": "d MMMM, yyyy"
			},
			"dmw": {
				"s": "EE d/M",
				"m": "EE d/MM",
				"l": "EEE d MMM",
				"f": "EEEE d MMMM"
			},
			"dm": {
				"s": "d/M",
				"m": "d/M",
				"l": "d MMM",
				"f": "d MMMM"
			},
			"my": {
				"s": "M/yy",
				"m": "MM/yyyy",
				"l": "MMM yy",
				"f": "MMMM yyyy"
			},
			"d": "dd",
			"m": {
				"s": "M",
				"m": "MM",
				"l": "MMM",
				"f": "MMMM"
			},
			"y": {
				"s": "yy",
				"m": "yy",
				"l": "yyyy",
				"f": "yyyy G"
			},
			"n": {
				"s": "N",
				"m": "NN",
				"l": "MMM",
				"f": "MMMM"
			}
		},
		"time": {
			"ahmsz": "h:mm:ssa Z",
			"ahms": "h:mm:ssa",
			"hmsz": "h:mm:ss Z",
			"hms": "h:mm:ss",
			"ahmz": "h:mma Z",
			"ahm": "h:mma",
			"hmz": "h:mm Z",
			"ah": "ha",
			"hm": "h:mm",
			"ms": "mm:ss",
			"h": "h",
			"m": "mm",
			"s": "ss"
		}
	},
	"julian": "gregorian"
};
ilib.data.dateformats_tr = {
	"gregorian": {
		"order": "{date} {time}",
		"date": {
			"dmwy": {
				"s": "dd.MM.yyyy, E",
				"m": "dd.MM.yyyy, EE",
				"l": "dd MMM yyyy, EEE",
				"f": "dd MMMM yyyy EEEE"
			},
			"dmy": {
				"s": "dd.MM.yyyy",
				"m": "dd.MM.yyyy",
				"l": "dd MMM yyyy",
				"f": "dd MMMM yyyy"
			},
			"dmw": {
				"s": "dd.MM, E",
				"m": "dd.MM, EE",
				"l": "dd MMM, EEE",
				"f": "dd MMMM, EEEE"
			},
			"dm": {
				"s": "dd.MM",
				"m": "dd.MM",
				"l": "dd MMM",
				"f": "dd MMMM"
			},
			"my": {
				"s": "MM.yy",
				"m": "MM.yyyy",
				"l": "MMM yy",
				"f": "MMMM yyyy"
			},
			"dw": {
				"s": "dd EE",
				"m": "dd EE",
				"l": "dd EEE",
				"f": "dd EEEE"
			},
			"d": {
				"s": "dd",
				"m": "dd",
				"l": "dd",
				"f": "dd"
			},
			"m": {
				"s": "M",
				"m": "MM",
				"l": "MMM",
				"f": "MMMM"
			},
			"y": {
				"s": "yy",
				"m": "yyyy",
				"l": "yy",
				"f": "yyyy"
			},
			"n": {
				"s": "N",
				"m": "NN",
				"l": "MMM",
				"f": "MMMM"
			}
		},
		"time": {
			"ahmsz": "HH:mm:ss a Z",
			"ahms": "HH:mm:ss a",
			"hmsz": "HH:mm:ss Z",
			"ahmz": "HH:mm a Z",
			"hms": "HH:mm:ss",
			"ahm": "HH:mm a",
			"hmz": "HH:mm Z",
			"ah": "HH",
			"hm": "HH:mm",
			"ms": "mm:ss",
			"h": "HH",
			"m": "mm",
			"s": "ss"
		},
		"range": {
			"c00": {
				"s": "{sd}.{sm}.{sy} {st} - {et}",
				"m": "{sd}.{sm}.{sy} {st} - {et}",
				"l": "{sd} {sm} {sy} {st} - {et}",
				"f": "{sd} {sm} {sy} {st} - {et} "
			},
			"c01": {
				"s": "{sd}.{sm}.{sy} {st} - {ed}.{em}.{ey} {et}",
				"m": "{sd}.{sm}.{sy} {st} - {ed}.{em}.{ey} {et}",
				"l": "{sd} {sm} {st} - {ed} {em} {et} {ey}",
				"f": "{sd} {sm} {st} - {ed} {em} {et} {ey}"
			},
			"c02": {
				"s": "{sd}.{sm}.{sy} {st} - {ed}.{em}.{ey} {et}",
				"m": "{sd}.{sm}.{sy} {st} - {ed}.{em}.{ey} {et}",
				"l": "{sd} {sm} {st} - {ed} {em} {et}, {sy} ",
				"f": "{sd} {sm} {st} - {ed} {em} {et}, {sy}"
			},
			"c03": {
				"s": "{sd}.{sm}.{sy} {st} - {ed}.{em}.{ey} {et}",
				"m": "{sd}.{sm}.{sy} {st} - {ed}.{em}.{ey} {et}",
				"l": "{sd} {sm} {sy} {st} - {ed} {em} {ey} {et}",
				"f": "{sd} {sm} {sy} {st} - {ed} {em} {ey} {et}"
			},
			"c10": {
				"s": "{sd} - {ed}.{sm}.{sy}",
				"m": "{sd} - {ed}.{sm}.{sy}",
				"l": "{sd} - {ed} {sm} {sy}",
				"f": "{sd} - {ed} {sm} {sy}"
			},
			"c11": {
				"s": "{sd}.{sm} - {ed}.{em} {ey}",
				"m": "{sd}.{sm} - {ed}.{em} {ey}",
				"l": "{sd} {sm} - {ed} {em} {sy}",
				"f": "{sd} {sm} - {ed} {em} {sy}"
			},
			"c12": {
				"s": "{sd}.{sm}.{sy} - {ed}.{em}.{ey}",
				"m": "{sd}.{sm}.{sy} - {ed}.{em}.{ey}",
				"l": "{sd} {sm} {sy} - {ed} {em} {ey}",
				"f": "{sd} {sm} {sy} - {ed} {em} {ey}"
			},
			"c20": {
				"s": "{sm}.{sy} - {em}.{ey}",
				"m": "{sm}.{sy} - {em}.{ey}",
				"l": "{sm} {sy} - {em} {ey}",
				"f": "{sm} {sy} - {em} {ey}"
			},
			"c30": "{sy} - {ey}"
		}
	}
}
;
ilib.data.sysres = {
	"MMMM1": "January",
	"MMM1": "Jan",
	"NN1": "Ja",
	"N1": "J",
	"MMMM2": "February",
	"MMM2": "Feb",
	"NN2": "Fe",
	"N2": "F",
	"MMMM3": "March",
	"MMM3": "Mar",
	"NN3": "Ma",
	"N3": "M",
	"MMMM4": "April",
	"MMM4": "Apr",
	"NN4": "Ap",
	"N4": "A",
	"MMMM5": "May",
	"MMM5": "May",
	"NN5": "Ma",
	"N5": "M",
	"MMMM6": "June",
	"MMM6": "Jun",
	"NN6": "Ju",
	"N6": "J",
	"MMMM7": "July",
	"MMM7": "Jul",
	"NN7": "Ju",
	"N7": "J",
	"MMMM8": "August",
	"MMM8": "Aug",
	"NN8": "Au",
	"N8": "A",
	"MMMM9": "September",
	"MMM9": "Sep",
	"NN9": "Se",
	"N9": "S",
	"MMMM10": "October",
	"MMM10": "Oct",
	"NN10": "Oc",
	"N10": "O",
	"MMMM11": "November",
	"MMM11": "Nov",
	"NN11": "No",
	"N11": "N",
	"MMMM12": "December",
	"MMM12": "Dec",
	"NN12": "De",
	"N12": "D",
	"EEEE0": "Sunday",
	"EEE0": "Sun",
	"EE0": "Su",
	"E0": "S",
	"EEEE1": "Monday",
	"EEE1": "Mon",
	"EE1": "Mo",
	"E1": "M",
	"EEEE2": "Tuesday",
	"EEE2": "Tue",
	"EE2": "Tu",
	"E2": "T",
	"EEEE3": "Wednesday",
	"EEE3": "Wed",
	"EE3": "We",
	"E3": "W",
	"EEEE4": "Thursday",
	"EEE4": "Thu",
	"EE4": "Th",
	"E4": "T",
	"EEEE5": "Friday",
	"EEE5": "Fri",
	"EE5": "Fr",
	"E5": "F",
	"EEEE6": "Saturday",
	"EEE6": "Sat",
	"EE6": "Sa",
	"E6": "S",
	"ordinalChoice": "1#1st|2#2nd|3#3rd|21#21st|22#22nd|23#23rd|31#31st|#{num}th",
	"a0": "am",
	"a1": "pm",
	"G-1": "BCE",
	"G1": "CE",
	
	"N1-hebrew": "N",
	"N2-hebrew": "I",
	"N3-hebrew": "S",
	"N4-hebrew": "T",
	"N5-hebrew": "A",
	"N6-hebrew": "E",
	"N7-hebrew": "T",
	"N8-hebrew": "Ḥ",
	"N9-hebrew": "K",
	"N10-hebrew": "T",
	"N11-hebrew": "S",
	"N12-hebrew": "A",
	"N13-hebrew": "A",

	"NN1-hebrew": "Ni",
	"NN2-hebrew": "Iy",
	"NN3-hebrew": "Si",
	"NN4-hebrew": "Ta",
	"NN5-hebrew": "Av",
	"NN6-hebrew": "El",
	"NN7-hebrew": "Ti",
	"NN8-hebrew": "Ḥe",
	"NN9-hebrew": "Ki",
	"NN10-hebrew": "Te",
	"NN11-hebrew": "Sh",
	"NN12-hebrew": "Ad",
	"NN13-hebrew": "A2",

	"MMM1-hebrew": "Nis",
	"MMM2-hebrew": "Iyy",
	"MMM3-hebrew": "Siv",
	"MMM4-hebrew": "Tam",
	"MMM5-hebrew": "Av",
	"MMM6-hebrew": "Elu",
	"MMM7-hebrew": "Tis",
	"MMM8-hebrew": "Ḥes",
	"MMM9-hebrew": "Kis",
	"MMM10-hebrew": "Tev",
	"MMM11-hebrew": "She",
	"MMM12-hebrew": "Ada",
	"MMM13-hebrew": "Ad2",

	"MMMM1-hebrew": "Nisan",
	"MMMM2-hebrew": "Iyyar",
	"MMMM3-hebrew": "Sivan",
	"MMMM4-hebrew": "Tammuz",
	"MMMM5-hebrew": "Av",
	"MMMM6-hebrew": "Elul",
	"MMMM7-hebrew": "Tishri",
	"MMMM8-hebrew": "Ḥeshvan",
	"MMMM9-hebrew": "Kislev",
	"MMMM10-hebrew": "Teveth",
	"MMMM11-hebrew": "Shevat",
	"MMMM12-hebrew": "Adar",
	"MMMM13-hebrew": "Adar II",

	"E0-hebrew": "R",
	"E1-hebrew": "S",
	"E2-hebrew": "S",
	"E3-hebrew": "R",
	"E4-hebrew": "Ḥ",
	"E5-hebrew": "S",
	"E6-hebrew": "S",

	"EE0-hebrew": "ri",
	"EE1-hebrew": "se",
	"EE2-hebrew": "sl",
	"EE3-hebrew": "rv",
	"EE4-hebrew": "ḥa",
	"EE5-hebrew": "si",
	"EE6-hebrew": "sa",

	"EEE0-hebrew": "ris",
	"EEE1-hebrew": "she",
	"EEE2-hebrew": "shl",
	"EEE3-hebrew": "rvi",
	"EEE4-hebrew": "ḥam",
	"EEE5-hebrew": "shi",
	"EEE6-hebrew": "sha",
	
	"EEEE0-hebrew": "yom rishon",
	"EEEE1-hebrew": "yom sheni",
	"EEEE2-hebrew": "yom shlishi",
	"EEEE3-hebrew": "yom r'vi‘i",
	"EEEE4-hebrew": "yom ḥamishi",
	"EEEE5-hebrew": "yom shishi",
	"EEEE6-hebrew": "yom shabbat",

	"N1-islamic": "M",
	"N2-islamic": "Ṣ",
	"N3-islamic": "R",
	"N4-islamic": "R",
	"N5-islamic": "J",
	"N6-islamic": "J",
	"N7-islamic": "R",
	"N8-islamic": "Š",
	"N9-islamic": "R",
	"N10-islamic": "Š",
	"N11-islamic": "Q",
	"N12-islamic": "Ḥ",

	"NN1-islamic": "Mu",
	"NN2-islamic": "Ṣa",
	"NN3-islamic": "Rb",
	"NN4-islamic": "R2",
	"NN5-islamic": "Ju",
	"NN6-islamic": "J2",
	"NN7-islamic": "Ra",
	"NN8-islamic": "Šh",
	"NN9-islamic": "Ra",
	"NN10-islamic": "Ša",
	"NN11-islamic": "Qa",
	"NN12-islamic": "Ḥi",

	"MMM1-islamic": "Muḥ",
	"MMM2-islamic": "Ṣaf",
	"MMM3-islamic": "Rab",
	"MMM4-islamic": "Ra2",
	"MMM5-islamic": "Jum",
	"MMM6-islamic": "Ju2",
	"MMM7-islamic": "Raj",
	"MMM8-islamic": "Šha",
	"MMM9-islamic": "Ram",
	"MMM10-islamic": "Šaw",
	"MMM11-islamic": "Qad",
	"MMM12-islamic": "Ḥij",

	"MMMM1-islamic": "Muḥarram",
	"MMMM2-islamic": "Ṣafar",
	"MMMM3-islamic": "Rabī‘ I",
	"MMMM4-islamic": "Rabī‘ II",
	"MMMM5-islamic": "Jumādā I",
	"MMMM6-islamic": "Jumādā II",
	"MMMM7-islamic": "Rajab",
	"MMMM8-islamic": "Šha'bān",
	"MMMM9-islamic": "Ramaḍān",
	"MMMM10-islamic": "Šawwāl",
	"MMMM11-islamic": "Ḏu al-Qa‘da",
	"MMMM12-islamic": "Ḏu al-Ḥijja",
	
	"E0-islamic": "A",
	"E1-islamic": "I",
	"E2-islamic": "T",
	"E3-islamic": "A",
	"E4-islamic": "K",
	"E5-islamic": "J",
	"E6-islamic": "S",

	"EE0-islamic": "ah",
	"EE1-islamic": "it",
	"EE2-islamic": "th",
	"EE3-islamic": "ar",
	"EE4-islamic": "kh",
	"EE5-islamic": "ju",
	"EE6-islamic": "sa",

	"EEE0-islamic": "aha",
	"EEE1-islamic": "ith",
	"EEE2-islamic": "tha",
	"EEE3-islamic": "arb",
	"EEE4-islamic": "kha",
	"EEE5-islamic": "jum",
	"EEE6-islamic": "sab",
	
	"EEEE0-islamic": "yawn al-ahad",
	"EEEE1-islamic": "yawn al-ithnaya",
	"EEEE2-islamic": "yawn uth-thalathaa",
	"EEEE3-islamic": "yawn al-arba‘a",
	"EEEE4-islamic": "yawn al-khamis",
	"EEEE5-islamic": "yawn al-jum‘a",
	"EEEE6-islamic": "yawn as-sabt"
};
ilib.data.sysres_en_CA = {
	"a0": "AM",
	"a1": "PM"
};
ilib.data.sysres_fr = {
	"MMMM1": "janvier",
	"MMM1": "jan",
	"NN1": "ja",
	"MMMM2": "février",
	"MMM2": "fev",
	"NN2": "fe",
	"MMMM3": "mars",
	"MMM3": "mar",
	"NN3": "ma",
	"MMMM4": "avril",
	"MMM4": "avr",
	"NN4": "av",
	"MMMM5": "mai",
	"MMM5": "mai",
	"NN5": "ma",
	"MMMM6": "juin",
	"MMM6": "jui",
	"NN6": "ju",
	"MMMM7": "juillet",
	"MMM7": "jul",
	"NN7": "ju",
	"MMMM8": "août",
	"MMM8": "aoû",
	"NN8": "ao",
	"MMMM9": "septembre",
	"MMM9": "sep",
	"NN9": "se",
	"MMMM10": "octobre",
	"MMM10": "oct",
	"NN10": "oc",
	"MMMM11": "novembre",
	"MMM11": "nov",
	"NN11": "no",
	"MMMM12": "décembre",
	"MMM12": "déc",
	"NN12": "dé",
	"EEEE0": "dimanche",
	"EEE0": "dim",
	"EE0": "di",
	"E0": "D",
	"EEEE1": "lundi",
	"EEE1": "lun",
	"EE1": "lu",
	"E1": "L",
	"EEEE2": "mardi",
	"EEE2": "mar",
	"EE2": "ma",
	"E2": "M",
	"EEEE3": "mercredi",
	"EEE3": "mer",
	"EE3": "me",
	"E3": "M",
	"EEEE4": "jeudi",
	"EEE4": "jeu",
	"EE4": "je",
	"E4": "J",
	"EEEE5": "vendredi",
	"EEE5": "ven",
	"EE5": "ve",
	"E5": "V",
	"EEEE6": "samedi",
	"EEE6": "sam",
	"EE6": "sa",
	"ordinalChoice": "1#1er|#{num}e",
	"a0": "matin",
	"a1": "soir",
	
	"durationShortMillis": "#{num}ms",
	"#{num}s": "#{num}s",
	"durationShortMinutes": "#{num}m",
	"#{num}h": "#{num}h",
	"#{num}d": "#{num}j",
	"#{num}w": "#{num}sm",
	"durationShortMonths": "#{num}mo",
	"#{num}y": "#{num}a",

	"#{num} ms": "#{num} Ms",
	"1#1 se|#{num} sec": "1#1 se|#{num} ses",
	"1#1 mi|#{num} min": "1#1 mn|#{num} mns",
	"durationMediumHours": "1#1 hr|#{num} hrs",
	"1#1 dy|#{num} dys": "1#1 jr|#{num} jrs",
	"durationMediumWeeks": "1#1 sm|#{num} sms",
	"1#1 mo|#{num} mos": "1#1 mo|#{num} mos",
	"durationMediumYears": "1#1 an|#{num} ans",

	"1#1 sec|#{num} sec": "1#1 sec|#{num} secs",
	"1#1 min|#{num} min": "1#1 min|#{num} mins",
	"1#1 hr|#{num} hrs": "1#1 hr|#{num} hrs",
	"durationLongDays": "1#1 jr|#{num} jrs",
	"1#1 wk|#{num} wks": "1#1 sem|#{num} sems",
	"1#1 mon|#{num} mons": "1#1 mois|#{num} mois",
	"1#1 yr|#{num} yrs": "1#1 an|#{num} ans",
	
	"1#1 millisecond|#{num} milliseconds": "1#1 milliseconde|#{num} millisecondes",
	"1#1 second|#{num} seconds": "1#1 seconde|#{num} secondes",
	"1#1 minute|#{num} minutes": "1#1 minute|#{num} minutes",
	"1#1 hour|#{num} hours": "1#1 heure|#{num} heures",
	"1#1 day|#{num} days": "1#1 jour|#{num} jours",
	"1#1 week|#{num} weeks": "1#1 semaine|#{num} semaines",
	"1#1 month|#{num} months": "#{num} mois",
	"1#1 year|#{num} years": "1#1 an|#{num} ans",
	
	"{duration} ago": "il ya {duration}",
	"in {duration}": "en {duration}",
	
	"separatorShort": " ",
	"separatorMedium": " ",
	"separatorLong": " ",
	"separatorFull": ", ",
	"finalSeparatorFull": ", et "
};
ilib.data.sysres_es = {
	"MMMM1": "enero",
	"MMM1": "ene",
	"NN1": "en",
	"N1": "E",
	"MMMM2": "febrero",
	"MMM2": "feb",
	"NN2": "fe",
	"MMMM3": "marzo",
	"MMM3": "mar",
	"NN3": "ma",
	"MMMM4": "abril",
	"MMM4": "abr",
	"NN4": "ab",
	"MMMM5": "mayo",
	"MMM5": "may",
	"NN5": "ma",
	"MMMM6": "junio",
	"MMM6": "jun",
	"NN6": "ju",
	"MMMM7": "julio",
	"MMM7": "jul",
	"NN7": "ju",
	"MMMM8": "agosto",
	"MMM8": "ago",
	"NN8": "ag",
	"MMMM9": "septiembre",
	"MMM9": "sep",
	"NN9": "se",
	"MMMM10": "octubre",
	"MMM10": "oct",
	"NN10": "oc",
	"MMMM11": "noviembre",
	"MMM11": "nov",
	"NN11": "no",
	"MMMM12": "diciembre",
	"MMM12": "dic",
	"NN12": "di",
	"EEEE0": "domingo",
	"EEE0": "dom",
	"EE0": "do",
	"E0": "D",
	"EEEE1": "lunes",
	"EEE1": "lun",
	"EE1": "lu",
	"E1": "L",
	"EEEE2": "martes",
	"EEE2": "mar",
	"EE2": "ma",
	"E2": "M",
	"EEEE3": "miércoles",
	"EEE3": "mié",
	"EE3": "mi",
	"E3": "M",
	"EEEE4": "jueves",
	"EEE4": "jue",
	"EE4": "ju",
	"E4": "J",
	"EEEE5": "viernes",
	"EEE5": "vie",
	"EE5": "vi",
	"E5": "V",
	"EEEE6": "sábado",
	"EEE6": "sáb",
	"EE6": "sá",
	"ordinalChoice": "#{num} º",
	"a0": "AM",
	"a1": "PM",
	"durationShortMillis": "#{num}ms",
	"#{num}s": "#{num}s",
	"durationShortMinutes": "#{num}m",
	"#{num}h": "#{num}h",
	"#{num}d": "#{num}d",
	"#{num}w": "#{num}sm",
	"durationShortMonths": "#{num}me",
	"#{num}y": "#{num}a",

	"#{num} ms": "#{num} ms",
	"1#1 se|#{num} sec": "1#1 sg|#{num} sgs",
	"1#1 mi|#{num} min": "1#1 mn|#{num} mns",
	"durationMediumHours": "1#1 hr|#{num} hrs",
	"1#1 dy|#{num} dys": "1#1 dí|#{num} dís",
	"durationMediumWeeks": "1#1 sm|#{num} sms",
	"1#1 mo|#{num} mos": "1#1 me|#{num} mss",
	"durationMediumYears": "1#1 añ|#{num} añs",

	"1#1 sec|#{num} sec": "1#1 seg|#{num} segs",
	"1#1 min|#{num} min": "1#1 min|#{num} mins",
	"1#1 hr|#{num} hrs": "1#1 hor|#{num} hors",
	"durationLongDays": "1#1 día|#{num} días",
	"1#1 wk|#{num} wks": "1#1 sem|#{num} sems",
	"1#1 mon|#{num} mons": "1#1 mes|#{num} mss",
	"1#1 yr|#{num} yrs": "1#1 año|#{num} años",
	
	"1#1 millisecond|#{num} milliseconds": "1#1 millisegundo|#{num} millisegundos",
	"1#1 second|#{num} seconds": "1#1 segundo|#{num} segundos",
	"1#1 minute|#{num} minutes": "1#1 minuto|#{num} minutos",
	"1#1 hour|#{num} hours": "1#1 hora|#{num} horas",
	"1#1 day|#{num} days": "1#1 día|#{num} días",
	"1#1 week|#{num} weeks": "1#1 semana|#{num} semanas",
	"1#1 month|#{num} months": "1#1 mes|#{num} meses",
	"1#1 year|#{num} years": "1#1 año|#{num} años",
	
	"{duration} ago": "hace {duration}",
	"in {duration}": "en {duration}",
	
	"separatorShort": " ",
	"separatorMedium": " ",
	"separatorLong": " ",
	"separatorFull": ", ",
	"finalSeparatorFull": ", y "
};
ilib.data.sysres_pt = {
	"MMMM1": "janeiro",
	"MMM1": "jan",
	"NN1": "ja",
	"MMMM2": "fevereiro",
	"MMM2": "fev",
	"NN2": "fe",
	"MMMM3": "março",
	"MMM3": "mar",
	"NN3": "ma",
	"MMMM4": "abril",
	"MMM4": "abr",
	"NN4": "ab",
	"MMMM5": "maio",
	"MMM5": "mai",
	"NN5": "ma",
	"MMMM6": "junho",
	"MMM6": "jun",
	"NN6": "ju",
	"MMMM7": "julho",
	"MMM7": "jul",
	"NN7": "ju",
	"MMMM8": "agosto",
	"MMM8": "ago",
	"NN8": "ag",
	"MMMM9": "setembro",
	"MMM9": "set",
	"NN9": "se",
	"MMMM10": "outubro",
	"MMM10": "out",
	"NN10": "ou",
	"MMMM11": "novembro",
	"MMM11": "nov",
	"NN11": "no",
	"MMMM12": "dezembro",
	"MMM12": "dez",
	"NN12": "de",
	"EEEE0": "Domingo",
	"EEE0": "Dom",
	"EE0": "Do",
	"E0": "D",
	"EEEE1": "Segunda",
	"EEE1": "Seg",
	"EE1": "Se",
	"E1": "S",
	"EEEE2": "Terça",
	"EEE2": "Ter",
	"EE2": "Te",
	"EEEE3": "Quarta",
	"EEE3": "Qua",
	"EE3": "Qu",
	"E3": "Q",
	"EEEE4": "Quinta",
	"EEE4": "Qui",
	"EE4": "Qu",
	"E4": "Q",
	"EEEE5": "Sexta",
	"EEE5": "Sex",
	"EE5": "Se",
	"E5": "S",
	"EEEE6": "Sábado",
	"EEE6": "Sáb",
	"EE6": "Sá",
	"ordinalChoice": "#{num}",
	"a0": "AM",
	"a1": "PM",

	"durationShortMillis": "#{num}ms",
	"#{num}s": "#{num}s",
	"durationShortMinutes": "#{num}m",
	"#{num}h": "#{num}h",
	"#{num}d": "#{num}d",
	"#{num}w": "#{num}sm",
	"durationShortMonths": "#{num}me",
	"#{num}y": "#{num}a",

	"#{num} ms": "#{num} ms",
	"1#1 se|#{num} sec": "1#1 sg|#{num} sgs",
	"1#1 mi|#{num} min": "1#1 mn|#{num} mns",
	"durationMediumHours": "1#1 hr|#{num} hrs",
	"1#1 dy|#{num} dys": "1#1 di|#{num} dis",
	"durationMediumWeeks": "1#1 sm|#{num} sms",
	"1#1 mo|#{num} mos": "1#1 mê|#{num} mes",
	"durationMediumYears": "1#1 an|#{num} ans",

	"1#1 sec|#{num} sec": "1#1 seg|#{num} segs",
	"1#1 min|#{num} min": "1#1 min|#{num} mins",
	"1#1 hr|#{num} hrs": "1#1 hor|#{num} hors",
	"durationLongDays": "1#1 dia|#{num} dias",
	"1#1 wk|#{num} wks": "1#1 sem|#{num} sems",
	"1#1 mon|#{num} mons": "1#1 mês|#{num} mss",
	"1#1 yr|#{num} yrs": "1#1 ano|#{num} anos",
	
	"1#1 millisecond|#{num} milliseconds": "1#1 millisegundo|#{num} millisegundos",
	"1#1 second|#{num} seconds": "1#1 segundo|#{num} segundos",
	"1#1 minute|#{num} minutes": "1#1 minuto|#{num} minutos",
	"1#1 hour|#{num} hours": "1#1 hora|#{num} horas",
	"1#1 day|#{num} days": "1#1 dia|#{num} dias",
	"1#1 week|#{num} weeks": "1#1 semana|#{num} semanas",
	"1#1 month|#{num} months": "1#1 mês|#{num} meses",
	"1#1 year|#{num} years": "1#1 ano|#{num} anos",
                                                 	  	"{duration} ago": "{duration} atrás",  	"in {duration}": "em {duration}",  	  	"separatorShort": " ",  	"separatorMedium": " ",  	"separatorLong": " ",  	"separatorFull": ", ",  	"finalSeparatorFull": ", e "
};
ilib.data.sysres_zh = {
	"MMMM1": "1",
	"MMM1": "1",
	"NN1": "01",
	"N1": "1",
	"MMMM2": "2",
	"MMM2": "2",
	"NN2": "02",
	"N2": "2",
	"MMMM3": "3",
	"MMM3": "3",
	"NN3": "03",
	"N3": "3",
	"MMMM4": "4",
	"MMM4": "4",
	"NN4": "04",
	"N4": "4",
	"MMMM5": "5",
	"MMM5": "5",
	"NN5": "05",
	"N5": "5",
	"MMMM6": "6",
	"MMM6": "6",
	"NN6": "06",
	"N6": "6",
	"MMMM7": "7",
	"MMM7": "7",
	"NN7": "07",
	"N7": "7",
	"MMMM8": "8",
	"MMM8": "8",
	"NN8": "08",
	"N8": "8",
	"MMMM9": "9",
	"MMM9": "9",
	"NN9": "09",
	"N9": "9",
	"MMMM10": "10",
	"MMM10": "10",
	"NN10": "10",
	"N10": "1O",
	"MMMM11": "11",
	"MMM11": "11",
	"NN11": "11",
	"N11": "11",
	"MMMM12": "12",
	"MMM12": "12",
	"NN12": "12",
	"N12": "12",
	"EEEE0": "星期日",
	"EEE0": "周日",
	"EE0": "周日",
	"E0": "周日",
	"EEEE1": "星期一",
	"EEE1": "周一",
	"EE1": "周一",
	"E1": "周一",
	"EEEE2": "星期二",
	"EEE2": "周二",
	"EE2": "周二",
	"E2": "周二",
	"EEEE3": "星期三",
	"EEE3": "周三",
	"EE3": "周三",
	"E3": "周三",
	"EEEE4": "星期四",
	"EEE4": "周四",
	"EE4": "周四",
	"E4": "周四",
	"EEEE5": "星期五",
	"EEE5": "周五",
	"EE5": "周五",
	"E5": "周五",
	"EEEE6": "星期六",
	"EEE6": "周六",
	"EE6": "周六",
	"E6": "周六",
	"ordinalChoice": "#{num}天",
	"azh0": "凌晨",
	"azh1": "早上",
	"azh2": "上午",
	"azh3": "中午",
	"azh4": "下午",
	"azh5": "傍晚",
	"azh6": "晚上",
	"G-1": "公元前",
	"G1": "公元",
	
	"durationShortMillis": "#{num}毫秒",
	"#{num}s": "#{num}秒",
	"durationShortMinutes": "#{num}分钟",
	"#{num}h": "#{num}小时",
	"#{num}d": "#{num}天",
	"#{num}w": "#{num}周",
	"durationShortMonths": "#{num}个月",
	"#{num}y": "#{num}年",

	"#{num} ms": "#{num}毫秒",
	"1#1 se|#{num} sec": "#{num}秒",
	"1#1 mi|#{num} min": "#{num}分钟",
	"durationMediumHours": "#{num}小时",
	"1#1 dy|#{num} dys": "#{num}天",
	"durationMediumWeeks": "#{num}周",
	"1#1 mo|#{num} mos": "#{num}个月",
	"durationMediumYears": "#{num}年",

	"1#1 sec|#{num} sec": "#{num}秒",
	"1#1 min|#{num} min": "#{num}分钟",
	"1#1 hr|#{num} hrs": "#{num}小时",
	"durationLongDays": "#{num}天",
	"1#1 wk|#{num} wks": "#{num}周",
	"1#1 mon|#{num} mons": "#{num}个月",
	"1#1 yr|#{num} yrs": "#{num}年",
	
	"1#1 millisecond|#{num} milliseconds": "#{num}毫秒",
	"1#1 second|#{num} seconds": "#{num}秒",
	"1#1 minute|#{num} minutes": "#{num}分钟",
	"1#1 hour|#{num} hours": "#{num}小时",
	"1#1 day|#{num} days": "#{num}天",
	"1#1 week|#{num} weeks": "#{num}周",
	"1#1 month|#{num} months": "#{num}个月",
	"1#1 year|#{num} years": "#{num}年",
	
	"{duration} ago": "{duration}前",
	"in {duration}": "{duration}后",
	
	"separatorShort": "",
	"separatorMedium": "",
	"separatorLong": "",
	"separatorFull": "",
	"finalSeparatorFull": ""
};
ilib.data.sysres_ja = {
	"MMMM1": "一",
	"MMM1": "1",
	"NN1": "1",
	"N1": "1",
	"MMMM2": "二",
	"MMM2": "2",
	"NN2": "2",
	"N2": "2",
	"MMMM3": "三",
	"MMM3": "3",
	"NN3": "3",
	"N3": "3",
	"MMMM4": "四",
	"MMM4": "4",
	"NN4": "4",
	"N4": "4",
	"MMMM5": "五",
	"MMM5": "5",
	"NN5": "5",
	"N5": "5",
	"MMMM6": "六",
	"MMM6": "6",
	"NN6": "6",
	"N6": "6",
	"MMMM7": "七",
	"MMM7": "7",
	"NN7": "7",
	"N7": "7",
	"MMMM8": "八",
	"MMM8": "8",
	"NN8": "8",
	"N8": "8",
	"MMMM9": "九",
	"MMM9": "9",
	"NN9": "9",
	"N9": "9",
	"MMMM10": "十",
	"MMM10": "10",
	"NN10": "10",
	"N10": "1O",
	"MMMM11": "十一",
	"MMM11": "11",
	"NN11": "11",
	"N11": "11",
	"MMMM12": "十二",
	"MMM12": "12",
	"NN12": "12",
	"N12": "12",
 	"EEEE0": "日曜日",
	"EEE0": "日曜日",
	"EE0": "日",
	"E0": "日",
	"EEEE1": "月曜日",
	"EEE1": "月曜日",
	"EE1": "月",
	"E1": "月",
	"EEEE2": "火曜日",
	"EEE2": "火曜日",
	"EE2": "火",
	"E2": "火",
	"EEEE3": "水曜日",
	"EEE3": "水曜日",
	"EE3": "水",
	"E3": "水",
	"EEEE4": "木曜日",
	"EEE4": "木曜日",
	"EE4": "木",
	"E4": "木",
	"EEEE5": "金曜日",
	"EEE5": "金曜日",
	"EE5": "金",
	"E5": "金",
	"EEEE6": "土曜日",
	"EEE6": "土曜日",
	"EE6": "土",
	"E6": "土",
	
	"ordinalChoice": "#{num}",
	"a0": "午前",
	"a1": "午後",
	"G-1": "紀元前",
	"G1": "紀元",
	
	"durationShortMillis": "#{num}ミリ秒",
	"#{num}s": "#{num}秒",
	"durationShortMinutes": "#{num}分",
	"#{num}h": "#{num}時間",
	"#{num}d": "#{num}日",
	"#{num}w": "#{num}週間",
	"durationShortMonths": "#{num}ヶ月",
	"#{num}y": "#{num}年",

	"#{num} ms": "#{num}ミリ秒",
	"1#1 se|#{num} sec": "#{num}秒",
	"1#1 mi|#{num} min": "#{num}分",
	"durationMediumHours": "#{num}時間",
	"1#1 dy|#{num} dys": "#{num}日",
	"durationMediumWeeks": "#{num}週間",
	"1#1 mo|#{num} mos": "#{num}ヶ月",
	"durationMediumYears": "#{num}年",

	"1#1 sec|#{num} sec": "#{num}秒",
	"1#1 min|#{num} min": "#{num}分",
	"1#1 hr|#{num} hrs": "#{num}時間",
	"durationLongDays": "#{num}日",
	"1#1 wk|#{num} wks": "#{num}週間",
	"1#1 mon|#{num} mons": "#{num}ヶ月",
	"1#1 yr|#{num} yrs": "#{num}年",
	
	"1#1 millisecond|#{num} milliseconds": "#{num}ミリ秒",
	"1#1 second|#{num} seconds": "#{num}秒",
	"1#1 minute|#{num} minutes": "#{num}分",
	"1#1 hour|#{num} hours": "#{num}時間",
	"1#1 day|#{num} days": "#{num}日",
	"1#1 week|#{num} weeks": "#{num}週間",
	"1#1 month|#{num} months": "#{num}ヶ月",
	"1#1 year|#{num} years": "#{num}年",
	
	"{duration} ago": "{duration}前",
	"in {duration}": "{duration}で",
	
	"separatorShort": "",
	"separatorMedium": "",
	"separatorLong": "、",
	"separatorFull": "、",
	"finalSeparatorFull": "、"
};
ilib.data.sysres_ko = {
	"MMMM1": "일",
	"MMM1": "1",
	"NN1": "1",
	"N1": "1",
	"MMMM2": "이",
	"MMM2": "2",
	"NN2": "2",
	"N2": "2",
	"MMMM3": "삼",
	"MMM3": "3",
	"NN3": "3",
	"N3": "3",
	"MMMM4": "사",
	"MMM4": "4",
	"NN4": "4",
	"N4": "4",
	"MMMM5": "오",
	"MMM5": "5",
	"NN5": "5",
	"N5": "5",
	"MMMM6": "유",
	"MMM6": "6",
	"NN6": "6",
	"N6": "6",
	"MMMM7": "칠",
	"MMM7": "7",
	"NN7": "7",
	"N7": "7",
	"MMMM8": "팔",
	"MMM8": "8",
	"NN8": "8",
	"N8": "8",
	"MMMM9": "구",
	"MMM9": "9",
	"NN9": "9",
	"N9": "9",
	"MMMM10": "시",
	"MMM10": "10",
	"NN10": "10",
	"N10": "1O",
	"MMMM11": "십일",
	"MMM11": "11",
	"NN11": "11",
	"N11": "11",
	"MMMM12": "십이",
	"MMM12": "12",
	"NN12": "12",
	"N12": "12",
 	"EEEE0": "일요일",
	"EEE0": "일요일",
	"EE0": "일",
	"E0": "일",
	"EEEE1": "월요일",
	"EEE1": "월요일",
	"EE1": "월",
	"E1": "월",
	"EEEE2": "화요일",
	"EEE2": "화요일",
	"EE2": "화",
	"E2": "화",
	"EEEE3": "수요일",
	"EEE3": "수요일",
	"EE3": "수",
	"E3": "수",
	"EEEE4": "목요일",
	"EEE4": "목요일",
	"EE4": "목",
	"E4": "목",
	"EEEE5": "금요일",
	"EEE5": "금요일",
	"EE5": "금",
	"E5": "금",
	"EEEE6": "토요일",
	"EEE6": "토요일",
	"EE6": "토",
	"E6": "토",
	
	"ordinalChoice": "#{num}",
	"a0": "오전",
	"a1": "오후",
	"G-1": "기원전",
	"G1": "기원후",
	
	"durationShortMillis": "#{num}밀리초",
	"#{num}s": "#{num}초 및",
	"durationShortMinutes": "#{num}분",
	"#{num}h": "#{num}시간",
	"#{num}d": "#{num}일",
	"#{num}w": "#{num}주",
	"durationShortMonths": "#{num}개월",
	"#{num}y": "#{num}년",

	"#{num} ms": "#{num}밀리초",
	"1#1 se|#{num} sec": "#{num}초 및",
	"1#1 mi|#{num} min": "#{num}분",
	"durationMediumHours": "#{num}시간",
	"1#1 dy|#{num} dys": "#{num}일",
	"durationMediumWeeks": "#{num}주",
	"1#1 mo|#{num} mos": "#{num}개월",
	"durationMediumYears": "#{num}년",

	"1#1 sec|#{num} sec": "#{num}秒",
	"1#1 min|#{num} min": "#{num}초 및",
	"1#1 hr|#{num} hrs": "#{num}시간",
	"durationLongDays": "#{num}일",
	"1#1 wk|#{num} wks": "#{num}주",
	"1#1 mon|#{num} mons": "#{num}개월",
	"1#1 yr|#{num} yrs": "#{num}년",
	
	"1#1 millisecond|#{num} milliseconds": "#{num}밀리초",
	"1#1 second|#{num} seconds": "#{num}초 및",
	"1#1 minute|#{num} minutes": "#{num}분",
	"1#1 hour|#{num} hours": "#{num}시간",
	"1#1 day|#{num} days": "#{num}일",
	"1#1 week|#{num} weeks": "#{num}주",
	"1#1 month|#{num} months": "#{num}개월",
	"1#1 year|#{num} years": "#{num}년",
	
	"{duration} ago": "{duration}전",
	"in {duration}": "{duration}에",
	
	"separatorShort": " ",
	"separatorMedium": " ",
	"separatorLong": ", ",
	"separatorFull": ", ",
	"finalSeparatorFull": " 및 "
};
ilib.data.sysres_id = {
	"NN5": "Me",
	"NN8": "Ag",
	"NN10": "Ok",
	"MMM5": "Mei",
	"MMM8": "Agt",
	"MMM10": "Okt",
	"MMM12": "Des",
	"MMMM1": "Januari",
	"MMMM2": "Februari",
	"MMMM3": "Maret",
	"MMMM5": "Mei",
	"MMMM6": "Juni",
	"MMMM7": "Juli",
	"MMMM8": "Agustus",
	"MMMM10": "Oktober",
	"MMMM12": "Desember",
	"E0": "M",
	"E1": "S",
	"E2": "S",
	"E3": "R",
	"E4": "K",
	"E5": "J",
	"EE0": "Mi",
	"EE1": "Se",
	"EE2": "Se",
	"EE3": "Ra",
	"EE4": "Ka",
	"EE5": "Ju",
	"EEE0": "Min",
	"EEE1": "Sen",
	"EEE2": "Sel",
	"EEE3": "Rab",
	"EEE4": "Kam",
	"EEE5": "Jum",
	"EEE6": "Sab",
	"EEEE0": "Minggu",
	"EEEE1": "Senin",
	"EEEE2": "Selasa",
	"EEEE3": "Rabu",
	"EEEE4": "Kamis",
	"EEEE5": "Jumat",
	"EEEE6": "Sabtu",
	"a0": "AM",
	"a1": "PM",
	"G-1": "SM",
	"G1": "M",
	"in {duration}": "dalam {duration}",
	"{duration} ago": "{duration} yang lalu",
	"1#1 year|#{num} years": "#{num} tahun",
	"1#1 month|#{num} months": "#{num} bulan",
	"1#1 week|#{num} weeks": "#{num} minggu",
	"1#1 day|#{num} days": "#{num} hari",
	"1#1 hour|#{num} hours": "#{num} jam",
	"1#1 minute|#{num} minutes": "#{num} menit",
	"1#1 second|#{num} seconds": "#{num} detik",
	"1#1 yr|#{num} yrs": "#{num} thn",
	"1#1 mon|#{num} mons": "#{num} bln",
	"1#1 wk|#{num} wks": "#{num} mggu",
	"durationLongDays": "#{num} hr",
	"1#1 hr|#{num} hrs": "#{num} jam",
	"1#1 min|#{num} min": "#{num} mnt",
	"1#1 sec|#{num} sec": "#{num} dtk",
	"durationMediumYears": "#{num} th",
	"1#1 mo|#{num} mos": "#{num} bl",
	"durationMediumWeeks": "#{num} mg",
	"1#1 dy|#{num} dys": "#{num} hr",
	"durationMediumHours": "#{num} ja",
	"1#1 mi|#{num} min": "#{num} mn",
	"1#1 se|#{num} sec": "#{num} dt",
	"#{num}y": "#{num}t",
	"durationShortMonths": "#{num}b",
	"#{num}w": "#{num}m",
	"#{num}d": "#{num}h",
	"#{num}h": "#{num}j",
	"durationShortMinutes": "#{num}m",
	"#{num}s": "#{num}d",
	"separatorShort": " ",
	"separatorMedium": " ",
	"separatorLong": " ",
	"separatorFull": ", ",
	"finalSeparatorFull": ", dan ",
	"durationShortMillis": "#{num}m"
}
;
ilib.data.sysres_ru = {
	"N1": "Я",
	"N2": "Ф",
	"N3": "М",
	"N4": "А",
	"N5": "М",
	"N6": "И",
	"N7": "И",
	"N8": "А",
	"N9": "С",
	"N10": "О",
	"N11": "Н",
	"N12": "Д",
	"NN1": "ян",
	"NN2": "фе",
	"NN3": "ма",
	"NN4": "ап",
	"NN5": "ма",
	"NN6": "ию",
	"NN7": "ию",
	"NN8": "ав",
	"NN9": "се",
	"NN10": "ок",
	"NN11": "но",
	"NN12": "де",
	"MMM1": "янв.",
	"MMM2": "февр.",
	"MMM3": "марта",
	"MMM4": "апр.",
	"MMM5": "мая",
	"MMM6": "июня",
	"MMM7": "июля",
	"MMM8": "авг.",
	"MMM9": "сент.",
	"MMM10": "окт.",
	"MMM11": "нояб.",
	"MMM12": "дек.",
	"MMMM1": "января",
	"MMMM2": "февраля",
	"MMMM3": "марта",
	"MMMM4": "апреля",
	"MMMM5": "мая",
	"MMMM6": "июня",
	"MMMM7": "июля",
	"MMMM8": "августа",
	"MMMM9": "сентября",
	"MMMM10": "октября",
	"MMMM11": "ноября",
	"MMMM12": "декабря",
	"E0": "В",
	"E1": "П",
	"E2": "В",
	"E3": "С",
	"E4": "Ч",
	"E5": "П",
	"E6": "С",
	"EE0": "Вс",
	"EE1": "Пн",
	"EE2": "Вт",
	"EE3": "Ср",
	"EE4": "Чт",
	"EE5": "Пт",
	"EE6": "Сб",
	"EEE0": "вс",
	"EEE1": "пн",
	"EEE2": "вт",
	"EEE3": "ср",
	"EEE4": "чт",
	"EEE5": "пт",
	"EEE6": "сб",
	"EEEE0": "воскресенье",
	"EEEE1": "понедельник",
	"EEEE2": "вторник",
	"EEEE3": "среда",
	"EEEE4": "четверг",
	"EEEE5": "пятница",
	"EEEE6": "суббота",
	"a0": "до полудня",
	"a1": "после полудня",
	"G-1": "до н.э.",
	"G1": "н.э.",
	"in {duration}": "Через {duration}",
	"{duration} ago": "{duration} назад",
	"1#1 year|#{num} years": "1#{num} год|2#{num} года|3#{num} года|4#{num} года|#{num} года",
	"1#1 month|#{num} months": "1#{num} месяц|2#{num} месяца|3#{num} месяца|4#{num} месяца|#{num} месяца",
	"1#1 week|#{num} weeks": "1#{num} неделя|2#{num} недели|3#{num} недели|4#{num} недели|#{num} недели",
	"1#1 day|#{num} days": "1#{num} день|2#{num} дня|3#{num} дня|4#{num} дня|#{num} дня",
	"1#1 hour|#{num} hours": "1#{num} час|2#{num} часа|3#{num} часа|4#{num} часа|#{num} часа",
	"1#1 minute|#{num} minutes": "1#{num} минута|2#{num} минуты|3#{num} минуты|4#{num} минуты|#{num} минуты",
	"1#1 second|#{num} seconds": "1#{num} секунда|2#{num} секунды|3#{num} секунды|4#{num} секунды|#{num} секунды",
	"1#1 yr|#{num} yrs": "1#{num} г.|2#{num} г.|3#{num} г.|4#{num} г.|#{num} г.",
	"1#1 mon|#{num} mons": "1#{num} мес.|2#{num} мес.|3#{num} мес.|4#{num} мес.|#{num} мес.",
	"1#1 wk|#{num} wks": "1#{num} нед.|2#{num} нед.|3#{num} нед.|4#{num} нед.|#{num} нед.",
	"durationLongDays": "1#{num} дн.|2#{num} дн.|3#{num} дн.|4#{num} дн.|#{num} дн.",
	"1#1 hr|#{num} hrs": "1#{num} ч.|2#{num} ч.|3#{num} ч.|4#{num} ч.|#{num} ч.",
	"1#1 min|#{num} min": "1#{num} мин.|2#{num} мин.|3#{num} мин.|4#{num} мин.|#{num} мин.",
	"1#1 sec|#{num} sec": "1#{num} сек.|2#{num} сек.|3#{num} сек.|4#{num} сек.|#{num} сек.",
	"durationMediumYears": "1#{num} г.|2#{num} г.|3#{num} г.|4#{num} г.|#{num} г.",
	"1#1 mo|#{num} mos": "1#{num} ме|2#{num} ме|3#{num} ме|4#{num} ме|#{num} ме",
	"durationMediumWeeks": "1#{num} не|2#{num} не|3#{num} не|4#{num} не|#{num} не",
	"1#1 dy|#{num} dys": "1#{num} дн|2#{num} дн|3#{num} дн|4#{num} дн|#{num} дн",
	"durationMediumHours": "1#{num} ч.|2#{num} ч.|3#{num} ч.|4#{num} ч.|#{num} ч.",
	"1#1 mi|#{num} min": "1#{num} ми|2#{num} ми|3#{num} ми|4#{num} ми|#{num} ми",
	"1#1 se|#{num} sec": "1#{num} се|2#{num} се|3#{num} се|4#{num} се|#{num} се",
	"#{num}y": "#{num}г",
	"durationShortMonths": "#{num}м",
	"#{num}w": "#{num}н",
	"#{num}d": "#{num}д",
	"#{num}h": "#{num}ч",
	"durationShortMinutes": "#{num}м",
	"#{num}s": "#{num}с",
	"separatorShort": " ",
	"separatorMedium": " ",
	"separatorLong": " ",
	"separatorFull": ", ",
	"finalSeparatorFull": " и ",
	"durationShortMillis": "#{num}мс"
}
;
ilib.data.sysres_en_GB = {
	"a0": "AM",
	"a0": "PM"
};
ilib.data.sysres_de = {
	"MMMM1": "Januar",
	"MMMM2": "Februar",
	"MMMM3": "März",
	"MMM3": "Mär",
	"NN3": "Mä",
	"MMMM5": "Mai",
	"MMM5": "Mai",
	"MMMM6": "Juni",
	"MMMM7": "Juli",
	"MMMM10": "Oktober",
	"MMM10": "Okt",
	"NN10": "Ok",
	"MMMM12": "Dezember",
	"MMM12": "Dez",
	"EEEE0": "Sonntag",
	"EEE0": "So.",
	"EE0": "So",
	"EEEE1": "Monntag",
	"EEE1": "Mo.",
	"EEEE2": "Dienstag",
	"EEE2": "Di.",
	"EE2": "Di",
	"E2": "D",
	"EEEE3": "Mittwoch",
	"EEE3": "Mi.",
	"EE3": "Mi",
	"E3": "M",
	"EEEE4": "Donnerstag",
	"EEE4": "Do.",
	"EE4": "Do",
	"E4": "D",
	"EEEE5": "Freitag",
	"EEE5": "Fr.",
	"EEEE6": "Samstag",
	"EEE6": "Sa.",
	"ordinalChoice": "#{num}.",
	"a0": "vorm.",
	"a1": "nachm.",

	"durationShortMillis": "#{num}Ms",
	"#{num}s": "#{num}S",
	"durationShortMinutes": "#{num}M",
	"#{num}h": "#{num}St",
	"#{num}d": "#{num}T",
	"#{num}w": "#{num}W",
	"durationShortMonths": "#{num}Mo",
	"#{num}y": "#{num}J",

	"#{num} ms": "#{num} Ms.",
	"1#1 se|#{num} sec": "#{num} Se.",
	"1#1 mi|#{num} min": "#{num} Mi.",
	"durationMediumHours": "#{num} St.",
	"1#1 dy|#{num} dys": "#{num} Ta.",
	"durationMediumWeeks": "#{num} Wo.",
	"1#1 mo|#{num} mos": "#{num} Mo.",
	"durationMediumYears": "#{num} Ja.",

	"1#1 sec|#{num} sec": "#{num} Sek.",
	"1#1 min|#{num} min": "#{num} Min.",
	"1#1 hr|#{num} hrs": "#{num} Std.",
	"durationLongDays": "1#1 Tag|#{num} Tage",
	"1#1 wk|#{num} wks": "#{num} Wch.",
	"1#1 mon|#{num} mons": "#{num} Mon.",
	"1#1 yr|#{num} yrs": "#{num} Jhr.",
	
	"1#1 millisecond|#{num} milliseconds": "1#1 Millisekunde|#{num} Millisekunden",
	"1#1 second|#{num} seconds": "1#1 Sekunde|#{num} Sekunden",
	"1#1 minute|#{num} minutes": "1#1 Minute|#{num} Minuten",
	"1#1 hour|#{num} hours": "1#1 Stunde|#{num} Stunden",
	"1#1 day|#{num} days": "1#1 Tag|#{num} Tage",
	"1#1 week|#{num} weeks": "1#1 Woche|#{num} Wochen",
	"1#1 month|#{num} months": "1#1 Monat|#{num} Monate",
	"1#1 year|#{num} years": "1#1 Jahr|#{num} Jahre",
	
	"{duration} ago": "vor {duration}",
	"in {duration}": "in {duration}",
	
	"separatorShort": " ",
	"separatorMedium": " ",
	"separatorLong": ", ",
	"separatorFull": ", ",
	"finalSeparatorFull": ", und "
};
ilib.data.sysres_it = {
	"MMMM1": "gennaio",
	"MMM1": "gen",
	"NN1": "ge",
	"N1": "G",
	"MMMM2": "febbraio",
	"MMM2": "feb",
	"NN2": "fe",
	"MMMM3": "marzo",
	"MMM3": "mar",
	"NN3": "ma",
	"MMMM4": "aprile",
	"MMM4": "apr",
	"NN4": "ap",
	"MMMM5": "maggio",
	"MMM5": "mag",
	"NN5": "ma",
	"MMMM6": "giugno",
	"MMM6": "giu",
	"NN6": "gi",
	"N6": "G",
	"MMMM7": "luglio",
	"MMM7": "lug",
	"NN7": "lu",
	"N7": "L",
	"MMMM8": "agosto",
	"MMM8": "ago",
	"NN8": "ag",
	"MMMM9": "settembre",
	"MMM9": "set",
	"NN9": "se",
	"MMMM10": "ottobre",
	"MMM10": "ott",
	"NN10": "ot",
	"MMMM11": "novembre",
	"MMM11": "nov",
	"NN11": "no",
	"MMMM12": "dicembre",
	"MMM12": "dic",
	"NN12": "di",
	"EEEE0": "Domenica ",
	"EEE0": "Dom",
	"EE0": "Do",
	"E0": "D",
	"EEEE1": "Lunedi ",
	"EEE1": "Lun",
	"EE1": "Lu",
	"E1": "L",
	"EEEE2": "Martedì",
	"EEE2": "Mar",
	"EE2": "Ma",
	"E2": "M",
	"EEEE3": "Mercoledì",
	"EEE3": "Mer",
	"EE3": "Me",
	"E3": "M",
	"EEEE4": "Giovedi",
	"EEE4": "Gio",
	"EE4": "Gi",
	"E4": "G",
	"EEEE5": "Venerdì",
	"EEE5": "Ven",
	"EE5": "Ve",
	"E5": "V",
	"EEEE6": "Sabato",
	"EEE6": "Sab",
	"ordinalChoice": "#{num} º",
	
	"durationShortMillis": "#{num}ms",
	"#{num}s": "#{num}s",
	"durationShortMinutes": "#{num}m",
	"#{num}h": "#{num}o",
	"#{num}d": "#{num}g",
	"#{num}w": "#{num}st",
	"durationShortMonths": "#{num}me",
	"#{num}y": "#{num}a",

	"#{num} ms": "#{num} ms",
	"1#1 se|#{num} sec": "#{num} se",
	"1#1 mi|#{num} min": "#{num} mn",
	"durationMediumHours": "#{num} or",
	"1#1 dy|#{num} dys": "#{num} gi",
	"durationMediumWeeks": "#{num} set",
	"1#1 mo|#{num} mos": "#{num} me",
	"durationMediumYears": "#{num} an",

	"1#1 sec|#{num} sec": "#{num} sec",
	"1#1 min|#{num} min": "#{num} min",
	"1#1 hr|#{num} hrs": "1#1 ora|#{num} ore",
	"durationLongDays": "#{num} gio",
	"1#1 wk|#{num} wks": "#{num} set",
	"1#1 mon|#{num} mons": "1#1 mese|#{num} mesi",
	"1#1 yr|#{num} yrs": "1#1 anno|#{num} anni",
	
	"1#1 millisecond|#{num} milliseconds": "1#1 millisecondo|#{num} millisecondi",
	"1#1 second|#{num} seconds": "1#1 secondo|#{num} secondi",
	"1#1 minute|#{num} minutes": "1#1 minuto|#{num} minuti",
	"1#1 hour|#{num} hours": "1#1 ora|#{num} ore",
	"1#1 day|#{num} days": "1#1 giorno|#{num} giorni",
	"1#1 week|#{num} weeks": "1#1 settimana|#{num} settimane",
	"1#1 month|#{num} months": "1#1 mese|#{num} mesi",
	"1#1 year|#{num} years": "1#1 anno|#{num} anni",
	
	"{duration} ago": "{duration} fa",
	
	"separatorShort": " ",
	"separatorMedium": " ",
	"separatorLong": " ",
	"separatorFull": ", ",
	"finalSeparatorFull": " e "
};
ilib.data.sysres_vi = {
	"N1": "1",
	"N2": "2",
	"N3": "3",
	"N4": "4",
	"N5": "5",
	"N6": "6",
	"N7": "7",
	"N8": "8",
	"N9": "9",
	"N10": "10",
	"N11": "11",
	"N12": "12",
	"NN1": "1",
	"NN2": "2",
	"NN3": "3",
	"NN4": "4",
	"NN5": "5",
	"NN6": "6",
	"NN7": "7",
	"NN8": "8",
	"NN9": "9",
	"NN10": "10",
	"NN11": "11",
	"NN12": "12",
    "MMM1": "Th.1",
    "MMM2": "Th.2",
    "MMM3": "Th.3",
    "MMM4": "Th.4",
    "MMM5": "Th.5",
    "MMM6": "Th.6",
    "MMM7": "Th.7",
    "MMM8": "Th.8",
    "MMM9": "Th.9",
    "MMM10": "Th.10",
    "MMM11": "Th.11",
    "MMM12": "Th.12",
	"MMMM1": "tháng một",
	"MMMM2": "tháng hai",
	"MMMM3": "tháng ba",
	"MMMM4": "tháng tư",
	"MMMM5": "tháng năm",
	"MMMM6": "tháng sáu",
	"MMMM7": "tháng bảy",
	"MMMM8": "tháng tám",
	"MMMM9": "tháng chín",
	"MMMM10": "tháng mười",
	"MMMM11": "tháng mười một",
	"MMMM12": "tháng mười hai",
	"E0": "CN",
	"E1": "T2",
	"E2": "T3",
	"E3": "T4",
	"E4": "T5",
	"E5": "T6",
	"E6": "T7",
	"EE0": "CN",
	"EE1": "T2",
	"EE2": "T3",
	"EE3": "T4",
	"EE4": "T5",
	"EE5": "T6",
	"EE6": "T7",
    "EEE0": "CNh",
    "EEE1": "hai",
    "EEE2": "ba",
    "EEE3": "tư",
    "EEE4": "năm",
    "EEE5": "sáu",
    "EEE6": "bảy",
	"EEEE0": "chủ nhật",
	"EEEE1": "thứ hai",
	"EEEE2": "thứ ba",
	"EEEE3": "thứ tư",
	"EEEE4": "thứ năm",
	"EEEE5": "thứ sáu",
	"EEEE6": "thứ bảy",
	"a0": "SA",
	"a1": "CH",
	"G-1": "tr. CN",
	"G1": "sau CN",
	"in {duration}": "Trong {duration}",
	"{duration} ago": "{duration} trước",
	"1#1 year|#{num} years": "#{num} năm",
	"1#1 month|#{num} months": "#{num} tháng",
	"1#1 week|#{num} weeks": "#{num} tuần",
	"1#1 day|#{num} days": "#{num} ngày",
	"1#1 hour|#{num} hours": "#{num} giờ",
	"1#1 minute|#{num} minutes": "#{num} phút",
	"1#1 second|#{num} seconds": "#{num} giây",
	"1#1 yr|#{num} yrs": "#{num} năm",
	"1#1 mon|#{num} mons": "#{num} tháng",
	"1#1 wk|#{num} wks": "#{num} tuần",
	"durationLongDays": "#{num} ngày",
	"1#1 hr|#{num} hrs": "#{num} g",
	"1#1 min|#{num} min": "#{num} ph",
	"1#1 sec|#{num} sec": "#{num} s",
	"durationMediumYears": "#{num} nă",
	"1#1 mo|#{num} mos": "#{num} th",
	"durationMediumWeeks": "#{num} tu",
	"1#1 dy|#{num} dys": "#{num} ng",
	"durationMediumHours": "#{num} g",
	"1#1 mi|#{num} min": "#{num} ph",
	"1#1 se|#{num} sec": "#{num} s",
	"#{num}y": "#{num}n",
	"durationShortMonths": "#{num}t",
	"#{num}w": "#{num}t",
	"#{num}d": "#{num}n",
	"#{num}h": "#{num}g",
	"durationShortMinutes": "#{num}p",
	"#{num}s": "#{num}g",
	"separatorShort": " ",
	"separatorMedium": " ",
	"separatorLong": " ",
	"separatorFull": ", ",
	"finalSeparatorFull": " và "
}
;
ilib.data.sysres_tr = {
	"N1": "O",
	"N2": "Ş",
	"N4": "N",
	"N6": "H",
	"N7": "T",
	"N9": "E",
	"N10": "E",
	"N11": "K",
	"N12": "A",
	"NN1": "Oc",
	"NN2": "Şu",
	"NN4": "Ni",
	"NN6": "Ha",
	"NN7": "Te",
	"NN8": "Ağ",
	"NN9": "Ey",
	"NN10": "Ek",
	"NN11": "Ka",
	"NN12": "Ar",
	"MMM1": "Oca",
	"MMM2": "Şub",
	"MMM4": "Nis",
	"MMM6": "Haz",
	"MMM7": "Tem",
	"MMM8": "Ağu",
	"MMM9": "Eyl",
	"MMM10": "Eki",
	"MMM11": "Kas",
	"MMM12": "Ara",
	"MMMM1": "Ocak",
	"MMMM2": "Şubat",
	"MMMM3": "Mart",
	"MMMM4": "Nisan",
	"MMMM5": "Mayıs",
	"MMMM6": "Haziran",
	"MMMM7": "Temmuz",
	"MMMM8": "Ağustos",
	"MMMM9": "Eylül",
	"MMMM10": "Ekim",
	"MMMM11": "Kasım",
	"MMMM12": "Aralık",
	"E0": "P",
	"E1": "P",
	"E2": "S",
	"E3": "Ç",
	"E4": "P",
	"E5": "C",
	"E6": "C",
	"EE0": "Paz",
	"EE1": "Pzt",
	"EE2": "Sal",
	"EE3": "Çar",
	"EE4": "Per",
	"EE5": "Cum",
	"EE6": "Cmt",
	"EEE0": "Paz",
	"EEE1": "Pzt",
	"EEE2": "Sal",
	"EEE3": "Çar",
	"EEE4": "Per",
	"EEE5": "Cum",
	"EEE6": "Cmt",
	"EEEE0": "Pazar",
	"EEEE1": "Pazartesi",
	"EEEE2": "Salı",
	"EEEE3": "Çarşamba",
	"EEEE4": "Perşembe",
	"EEEE5": "Cuma",
	"EEEE6": "Cumartesi",
	"a0": "AM",
	"a1": "PM",
	"G-1": "MÖ",
	"G1": "MS",
	"in {duration}": "{duration} sonra",
	"{duration} ago": "{duration} önce",
	"1#1 year|#{num} years": "#{num} yıl",
	"1#1 month|#{num} months": "#{num} ay",
	"1#1 week|#{num} weeks": "#{num} hafta",
	"1#1 day|#{num} days": "#{num} gün",
	"1#1 hour|#{num} hours": "#{num} saat",
	"1#1 minute|#{num} minutes": "#{num} dakika",
	"1#1 second|#{num} seconds": "#{num} saniye",
	"1#1 yr|#{num} yrs": "#{num} yıl",
	"1#1 mon|#{num} mons": "#{num} ay",
	"1#1 wk|#{num} wks": "#{num} hafta",
	"durationLongDays": "#{num} gün",
	"1#1 hr|#{num} hrs": "#{num} sa.",
	"1#1 min|#{num} min": "#{num} dk.",
	"1#1 sec|#{num} sec": "#{num} sn.",
	"durationMediumYears": "#{num} yı",
	"1#1 mo|#{num} mos": "#{num} ay",
	"durationMediumWeeks": "#{num} ha",
	"1#1 dy|#{num} dys": "#{num} gü",
	"durationMediumHours": "#{num} sa",
	"1#1 mi|#{num} min": "#{num} dk",
	"1#1 se|#{num} sec": "#{num} sn",
	"#{num}y": "#{num}y",
	"durationShortMonths": "#{num}a",
	"#{num}w": "#{num}h",
	"#{num}d": "#{num}g",
	"#{num}h": "#{num}s",
	"durationShortMinutes": "#{num}d",
	"#{num}s": "#{num}s",
	"separatorShort": " ",
	"separatorMedium": " ",
	"separatorLong": " ",
	"separatorFull": ", ",
	"finalSeparatorFull": " ve ",
	"#{num} ms": "#{num} ms",
	"1#1 millisecond|#{num} milliseconds": "#{num} milisaniye"
}
;
/*
 * datefmt.js - Date formatter definition
 * 
 * Copyright © 2012, JEDL Software, Inc.
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
!depends 
ilibglobal.js 
locale.js 
date.js 
strings.js 
resources.js 
calendar.js
localeinfo.js
timezone.js
*/

// !data dateformats sysres

/**
 * @class
 * 
 * Create a new date formatter instance. The date formatter is immutable once
 * it is created, but can format as many different dates as needed with the same
 * options. Create different date formatter instances for different purposes
 * and then keep them cached for use later if you have more than one date to
 * format.<p>
 * 
 * The options may contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - locale to use when formatting the date/time. If the locale is
 * not specified, then the default locale of the app or web page will be used.
 * 
 * <li><i>calendar</i> - the type of calendar to use for this format. The value should
 * be a sting containing the name of the calendar. Currently, the supported
 * types are "gregorian", "julian", "arabic", "hebrew", or "chinese". If the
 * calendar is not specified, then the default calendar for the locale is used. When the
 * calendar type is specified, then the format method must be called with an instance of
 * the appropriate date type. (eg. Gregorian calendar means that the format method must 
 * be called with a GregDate instance.)
 *  
 * <li><i>timezone</i> - time zone to use when formatting times. This may be a time zone
 * instance or a time zone specifier string in RFC 822 format. If not specified, the
 * default time zone for the locale is used. If both the date object and this formatter
 * instance contain time zones and those time zones are different from each other, the 
 * formatter will calculate the offset between the time zones and subtract it from the 
 * date before formatting the result for the current time zone. The theory is that a date
 * object that contains a time zone specifies a specific instant in time that is valid
 * around the world, whereas a date object without one is a local time and can only be
 * used for doing things in the local time zone of the user.
 * 
 * <li><i>type</i> - Specify whether this formatter should format times only, dates only, or
 * both times and dates together. Valid values are "time", "date", and "datetime". Note that
 * in some locales, the standard format uses the order "time followed by date" and in others, 
 * the order is exactly opposite, so it is better to create a single "datetime" formatter 
 * than it is to create a time formatter and a date formatter separately and concatenate the 
 * results. A "datetime" formatter will get the order correct for the locale.<p>
 * 
 * The default type if none is specified in with the type option is "date".
 * 
 * <li><i>length</i> - Specify the length of the format to use. The length is the approximate size of the 
 * formatted string.
 * 
 * <ul>
 * <li><i>short</i> - use a short representation of the time. This is the most compact format possible for the locale.
 * <li><i>medium</i> - use a medium length representation of the time. This is a slightly longer format.
 * <li><i>long</i> - use a long representation of the time. This is a fully specified format, but some of the textual 
 * components may still be abbreviated
 * <li><i>full</i> - use a full representation of the time. This is a fully specified format where all the textual 
 * components are spelled out completely
 * </ul>
 * 
 * eg. The "short" format for an en_US date may be "MM/dd/yy", whereas the long format might be "d MMM, yyyy". In the long
 * format, the month name is textual instead of numeric and is longer, the year is 4 digits instead of 2, and the format 
 * contains slightly more spaces and formatting characters.<p>
 * 
 * Note that the length parameter does not specify which components are to be formatted. Use the "date" and the "time"
 * properties to specify the components. Also, very few of the components of a time format differ according to the length,
 * so this property has little to no affect on time formatting.
 * 
 * <li><i>date</i> - This property tells
 * which components of a date format to use. For example,
 * sometimes you may wish to format a date that only contains the month and date
 * without the year, such as when displaying a person's yearly birthday. The value
 * of this property allows you to specify only those components you want to see in the
 * final output, ordered correctly for the locale. <p>
 * 
 * Valid values are:
 * 
 * <ul>
 * <li><i>dmwy</i> - format all components, weekday, date, month, and year
 * <li><i>dmy</i> - format only date, month, and year
 * <li><i>dmw</i> - format only weekday, date, and month
 * <li><i>dm</i> - format only date and month
 * <li><i>my</i> - format only month and year
 * <li><i>dw</i> - format only the weekday and date
 * <li><i>d</i> - format only the date
 * <li><i>m</i> - format only the month, in numbers for shorter lengths, and letters for 
 * longer lengths
 * <li><i>n</i> - format only the month, in letters only for all lengths
 * <li><i>y</i> - format only the year
 * </ul>
 * Default components, if this property is not specified, is "dmy". This property may be specified
 * but has no affect if the current formatter is for times only.
 * 
 * <li><i>time</i> - This property gives which components of a time format to use. The time will be formatted 
 * correctly for the locale with only the time components requested. For example, a clock might only display 
 * the hour and minute and not need the seconds or the am/pm component. In this case, the time property should be set 
 * to "hm". <p>
 * 
 * Valid values for this property are:
 * 
 * <ul>
 * <li><i>ahmsz</i> - format the hours, minutes, seconds, am/pm (if using a 12 hour clock), and the time zone
 * <li><i>ahms</i> - format the hours, minutes, seconds, and am/pm (if using a 12 hour clock)
 * <li><i>hmsz</i> - format the hours, minutes, seconds, and the time zone
 * <li><i>hms</i> - format the hours, minutes, and seconds
 * <li><i>ahmz</i> - format the hours, minutes, am/pm (if using a 12 hour clock), and the time zone
 * <li><i>ahm</i> - format the hours, minutes, and am/pm (if using a 12 hour clock)
 * <li><i>hmz</i> - format the hours, minutes, and the time zone
 * <li><i>ah</i> - format only the hours and am/pm if using a 12 hour clock
 * <li><i>hm</i> - format only the hours and minutes
 * <li><i>ms</i> - format only the minutes and seconds
 * <li><i>h</i> - format only the hours
 * <li><i>m</i> - format only the minutes
 * <li><i>s</i> - format only the seconds
 * </ul>
 * 
 * If you want to format a length of time instead of a particular instant
 * in time, use the duration formatter object (ilib.DurFmt) instead because this
 * formatter is geared towards instants. A date formatter will make sure that each component of the 
 * time is within the normal range
 * for that component. That is, the minutes will always be between 0 and 59, no matter
 * what is specified in the date to format. A duration format will allow the number
 * of minutes to exceed 59 if, for example, you were displaying the length of
 * a movie of 198 minutes.<p>
 * 
 * Default value if this property is not specified is "hma".
 * 
 * <li><i>clock</i> - specify that the time formatter should use a 12 or 24 hour clock. 
 * Valid values are "12" and "24".<p>
 * 
 * In some locales, both clocks are used. For example, in en_US, the general populace uses
 * a 12 hour clock with am/pm, but in the US military or in nautical or aeronautical or 
 * scientific writing, it is more common to use a 24 hour clock. This property allows you to
 * construct a formatter that overrides the default for the locale.<p>
 * 
 * If this property is not specified, the default is to use the most widely used convention
 * for the locale.
 *  
 * <li><i>template</i> - use the given template string as a fixed format when formatting 
 * the date/time. Valid codes to use in a template string are as follows:
 * 
 * <ul>
 * <li><i>a</i> - am/pm marker
 * <li><i>d</i> - 1 or 2 digit date of month, not padded
 * <li><i>dd</i> - 1 or 2 digit date of month, 0 padded to 2 digits
 * <li><i>O</i> - ordinal representation of the date of month (eg. "1st", "2nd", etc.)
 * <li><i>D</i> - 1 to 3 digit day of year
 * <li><i>DD</i> - 1 to 3 digit day of year, 0 padded to 2 digits
 * <li><i>DDD</i> - 1 to 3 digit day of year, 0 padded to 3 digits
 * <li><i>M</i> - 1 or 2 digit month number, not padded
 * <li><i>MM</i> - 1 or 2 digit month number, 0 padded to 2 digits
 * <li><i>N</i> - 1 character month name abbreviation
 * <li><i>NN</i> - 2 character month name abbreviation
 * <li><i>MMM</i> - 3 character month month name abbreviation
 * <li><i>MMMM</i> - fully spelled out month name
 * <li><i>yy</i> - 2 digit year
 * <li><i>yyyy</i> - 4 digit year
 * <li><i>E</i> - day-of-week name, abbreviated to a single character
 * <li><i>EE</i> - day-of-week name, abbreviated to a max of 2 characters
 * <li><i>EEE</i> - day-of-week name, abbreviated to a max of 3 characters
 * <li><i>EEEE</i> - day-of-week name fully spelled out 
 * <li><i>G</i> - era designator
 * <li><i>w</i> - week number in year
 * <li><i>ww</i> - week number in year, 0 padded to 2 digits
 * <li><i>W</i> - week in month
 * <li><i>h</i> - hour (1 to 12)
 * <li><i>hh</i> - hour (1 to 12), 0 padded to 2 digits
 * <li><i>k</i> - hour (1 to 24)
 * <li><i>kk</i> - hour (1 to 24), 0 padded to 2 digits
 * <li><i>H</i> - hour (0 to 23)
 * <li><i>HH</i> - hour (0 to 23), 0 padded to 2 digits
 * <li><i>K</i> - hour (0 to 11)
 * <li><i>KK</i> - hour (0 to 11), 0 padded to 2 digits
 * <li><i>m</i> - minute in hour
 * <li><i>mm</i> - minute in hour, 0 padded to 2 digits
 * <li><i>s</i> - second in minute
 * <li><i>ss</i> - second in minute, 0 padded to 2 digits
 * <li><i>S</i> - millisecond (1 to 3 digits)
 * <li><i>SSS</i> - millisecond, 0 padded to 3 digits
 * <li><i>z</i> - general time zone
 * <li><i>Z</i> - RFC 822 time zone
 * </ul>
 * </ul>
 * 
 * Any substring containing letters within single or double quotes will be used 
 * as-is in the final output and will not be interpretted for codes as above.<p>
 * 
 * Example: a date format in Spanish might be given as: "'El' d. 'de' MMMM", where
 * the 'El' and the 'de' are left as-is in the output because they are quoted. Typical 
 * output for this example template might be, "El 5. de Mayo".
 * 
 * The following options will be used when formatting a date/time with an explicit
 * template:
 * 
 * <ul>
 * <li>locale - the locale is only used for 
 * translations of things like month names or day-of-week names.
 * <li>calendar - used to translate a date instance into date/time component values 
 * that can be formatted into the template
 * <li>timezone - used to figure out the offset to add or subtract from the time to
 * get the final time component values
 * <li>clock - used to figure out whether to format times with a 12 or 24 hour clock.
 * If this option is specified, it will override the hours portion of a time format.
 * That is, "hh" is switched with "HH" and "kk" is switched with "KK" as appropriate. 
 * If this option is not specified, the 12/24 code in the template will dictate whether 
 * to use the 12 or 24 clock, and the 12/24 default in the locale will be ignored.
 * </ul>
 * 
 * All other options will be ignored and their corresponding getter methods will
 * return the empty string.<p>
 * 
 * Depends directive: !depends datefmt.js
 * 
 * @constructor
 * @param {Object} options options governing the way this date formatter instance works
 */
ilib.DateFmt = function(options) {
	var arr, i, bad, res, formats, type;
	
	this.locale = new ilib.Locale();
	this.type = "date";
	this.length = "s";
	this.dateComponents = "dmy";
	this.timeComponents = "ahm";
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (options.type) {
			if (options.type === 'date' || options.type === 'time' || options.type === 'datetime') {
				this.type = options.type;
			}
		}
		
		if (options.calendar) {
			this.calName = options.calendar;
		}
		
		if (options.length) {
			if (options.length === 'short' ||
				options.length === 'medium' ||
				options.length === 'long' ||
				options.length === 'full') {
				// only use the first char to save space in the json files
				this.length = options.length.charAt(0);
			}
		}
		
		if (options.date) {
			arr = options.date.split("");
			arr.sort(function (left, right) {
				return (left < right) ? -1 : ((right < left) ? 1 : 0);
			});
			bad = false;
			for (i = 0; i < arr.length; i++) {
				if (arr[i] !== 'd' && arr[i] !== 'm' && arr[i] !== 'y' && arr[i] !== 'w' && arr[i] !== 'n') {
					bad = true;
					break;
				}
			}
			if (!bad) {
				this.dateComponents = arr.join("");
			}
		}

		if (options.time) {
			arr = options.time.split("");
			arr.sort(function (left, right) {
				return (left < right) ? -1 : ((right < left) ? 1 : 0);
			});
			this.badTime = false;
			for (i = 0; i < arr.length; i++) {
				if (arr[i] !== 'h' && arr[i] !== 'm' && arr[i] !== 's' && arr[i] !== 'a' && arr[i] !== 'z') {
					this.badTime = true;
					break;
				}
			}
			if (!this.badTime) {
				this.timeComponents = arr.join("");
			}
		}
		
		if (options.clock && (options.clock === '12' || options.clock === '24')) {
			this.clock = options.clock;
		}
		
		if (options.template) {
			// many options are not useful when specifying the template directly, so zero
			// them out.
			this.type = "";
			this.length = "";
			this.dateComponents = "";
			this.timeComponents = "";
			
			this.template = options.template;
		}
		
		if (options.timezone) {
			this.tz = new ilib.TimeZone({
				locale: this.locale, 
				id: options.timezone
			});
		}
	}
	
	this.locinfo = new ilib.LocaleInfo(this.locale);
	
	// get the default calendar name from the locale, and if the locale doesn't define
	// one, use the hard-coded gregorian as the last resort
	this.calName = this.calName || this.locinfo.getCalendar() || "gregorian";
	switch (this.calName) {
		case 'julian':
			this.cal = new ilib.Cal.Julian();
			break;
		default:
			// just use the default Gregorian instead
			this.cal = new ilib.Cal.Gregorian();
			break;
	}

	/**
	 * @protected
	 * @param {(string|{s:string,m:string,l:string,f:string})} obj Object to search
	 * @param {string} length Length of the requested format
	 * @returns {(string|undefined)} the requested format
	 */
	this._getLengthFormat = function getLengthFormat(obj, length) {
		if (typeof(obj) === 'string') {
			return obj;
		} else if (obj[length]) {
			return obj[length];
		}
		return undefined;
	};

	/**
	 * @protected
	 * @param {Object.<string, (string|{s:string,m:string,l:string,f:string})>} obj Object to search
	 * @param {string} components Format components to search
	 * @param {string} length Length of the requested format
	 * @returns {string|undefined} the requested format
	 */
	this._getFormat = function getFormat(obj, components, length) {
		if (typeof(components) !== 'undefined' && obj[components]) {
			return this._getLengthFormat(obj[components], length);
		}
		return undefined;
	};

	/**
	 * @protected
	 * Convert the template into an array of date components separated by formatting chars.
	 * @param {string} template Format template to tokenize into components
	 * @returns {Array.<string>} a tokenized array of date format components
	 */
	this._tokenize = function (template) {
		var i = 0, start, ch, letter, arr = [];
		
		// console.log("_tokenize: tokenizing template " + template);
		if (template) {
			while (i < template.length) {
				ch = template.charAt(i);
				start = i;
				if (ch === "'") {
					// console.log("found quoted string");
					i++;
					// escaped string - push as-is, then dequote later
					while (i < template.length && template.charAt(i) !== "'") {
						i++;
					}
					if (i < template.length) {
						i++;	// grab the other quote too
					}
				} else if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
					letter = template.charAt(i);
					// console.log("found letters " + letter);
					while (i < template.length && ch === letter) {
						ch = template.charAt(++i);
					}
				} else {
					// console.log("found other");
					while (i < template.length && ch !== "'" && (ch < 'a' || ch > 'z') && (ch < 'A' || ch > 'Z')) {
						ch = template.charAt(++i);
					}
				}
				arr.push(template.substring(start,i));
				// console.log("start is " + start + " i is " + i + " and substr is " + template.substring(start,i));
			}
		}
		return arr;
	};

	if (this.timeComponents &&
			(this.clock === '24' || 
			(!this.clock && this.locinfo.getClock() === "24"))) {
		// make sure we don't have am/pm in 24 hour mode unless the user specifically
		// requested it in the time component option
		this.timeComponents = this.timeComponents.replace("a", "");
	}

	if (!this.template) {
		res = new ilib.ResBundle({
			locale: this.locale,
			name: "dateformats"
		});
		
		formats = res.getResObj();
		if (formats[this.calName]) {
			/** 
			 * @private
			 * @type {{order:(string|{s:string,m:string,l:string,f:string}),date:Object.<string, (string|{s:string,m:string,l:string,f:string})>,time:Object.<string,(string|{s:string,m:string,l:string,f:string})>,range:Object.<string, (string|{s:string,m:string,l:string,f:string})>}}
			 */
			this.formats = formats[this.calName];
			if (typeof(this.formats) === "string") {
				// alias to another calendar type
				this.formats = res.getResObj()[this.formats];
			}
			
			this.template = "";
			
			switch (this.type) {
				case "datetime":
					this.template = (this.formats && this._getLengthFormat(this.formats.order, this.length)) || "{date} {time}";
					this.template = this.template.replace("{date}", this._getFormat(this.formats.date, this.dateComponents, this.length));
					this.template = this.template.replace("{time}", this._getFormat(this.formats.time, this.timeComponents, this.length));
					break;
				case "date":
					this.template = this._getFormat(this.formats.date, this.dateComponents, this.length);
					break;
				case "time":
					this.template = this._getFormat(this.formats.time, this.timeComponents, this.length);
					break;
			}
		} else {
			throw "No formats available for calendar " + this.calName + " in locale " + this.locale.toString();
		}
	}
	if (this.clock && this.template) {
		// explicitly set the hours to the requested type
		var temp = "";
		switch (this.clock) {
			case "24":
				for (i = 0; i < this.template.length; i++) {
					if (this.template.charAt(i) == "'") {
						temp += this.template.charAt(i++);
						while (i < this.template.length && this.template.charAt(i) !== "'") {
							temp += this.template.charAt(i++);
						}
						if (i < this.template.length) {
							temp += this.template.charAt(i);
						}
					} else if (this.template.charAt(i) == 'K') {
						temp += 'k';
					} else if (this.template.charAt(i) == 'h') {
						temp += 'H';
					} else {
						temp += this.template.charAt(i);
					}
				}
				this.template = temp;
				break;
			case "12":
				for (i = 0; i < this.template.length; i++) {
					if (this.template.charAt(i) == "'") {
						temp += this.template.charAt(i++);
						while (i < this.template.length && this.template.charAt(i) !== "'") {
							temp += this.template.charAt(i++);
						}
						if (i < this.template.length) {
							temp += this.template.charAt(i);
						}
					} else if (this.template.charAt(i) == 'k') {
						temp += 'K';
					} else if (this.template.charAt(i) == 'H') {
						temp += 'h';
					} else {
						temp += this.template.charAt(i);
					}
				}
				this.template = temp;
				break;
		}
	}
	
	// tokenize it now for easy formatting
	this.templateArr = this._tokenize(this.template);
	
	// load the strings used to translate the components
	this.sysres = new ilib.ResBundle({
		locale: this.locale,
		name: "sysres"
	});	
};

// used in getLength
ilib.DateFmt.lenmap = {
	"s": "short",
	"m": "medium",
	"l": "long",
	"f": "full"
};

ilib.DateFmt.zeros = "0000";

ilib.DateFmt.prototype = {
	/**
	 * Return the locale used with this formatter instance.
	 * @returns {ilib.Locale} the ilib.Locale instance for this formatter
	 */
	getLocale: function() {
		return this.locale;
	},
	
	/**
	 * Return the template string that is used to format date/times for this
	 * formatter instance. This will work, even when the template property is not explicitly 
	 * given in the options to the constructor. Without the template option, the constructor 
	 * will build the appropriate template according to the options and use that template
	 * in the format method. 
	 * 
	 * @returns {string} the format template for this formatter
	 */
	getTemplate: function() {
		return this.template;
	},
	
	/**
	 * Return the type of this formatter. The type is a string that has one of the following
	 * values: "time", "date", "datetime".
	 * @returns {string} the type of the formatter
	 */
	getType: function() {
		return this.type;
	},
	
	/**
	 * Return the name of the calendar used to format date/times for this
	 * formatter instance.
	 * @returns {string} the name of the calendar used by this formatter
	 */
	getCalendar: function () {
		return this.cal.getType();
	},
	
	/**
	 * Return the length used to format date/times in this formatter. This is either the
	 * value of the length option to the constructor, or the default value.
	 * 
	 * @returns {string} the length of formats this formatter returns
	 */
	getLength: function () {
		return ilib.DateFmt.lenmap[this.length] || "";
	},
	
	/**
	 * Return the date components that this formatter formats. This is either the 
	 * value of the date option to the constructor, or the default value. If this
	 * formatter is a time-only formatter, this method will return the empty 
	 * string. The date component letters may be specified in any order in the 
	 * constructor, but this method will reorder the given components to a standard 
	 * order.
	 * 
	 * @returns {string} the date components that this formatter formats
	 */
	getDateComponents: function () {
		return this.dateComponents || "";
	},

	/**
	 * Return the time components that this formatter formats. This is either the 
	 * value of the time option to the constructor, or the default value. If this
	 * formatter is a date-only formatter, this method will return the empty 
	 * string. The time component letters may be specified in any order in the 
	 * constructor, but this method will reorder the given components to a standard 
	 * order.
	 * 
	 * @returns {string} the time components that this formatter formats
	 */
	getTimeComponents: function () {
		return this.timeComponents || "";
	},

	/**
	 * Return the time zone used to format date/times for this formatter
	 * instance.
	 * @return a string naming the time zone
	 */
	getTimeZone: function () {
		// Lazy load the time zone. If it wasn't explicitly set up before, set 
		// it up now, but use the 
		// default TZ for the locale. This way, if the caller never uses the
		// time zone in their format, we never have to load up a TimeZone
		// instance into this formatter.
		if (!this.tz) {
			this.tz = new ilib.TimeZone({locale: this.locale});
		}
		return this.tz;
	},
	
	/**
	 * Return the clock option set in the constructor. If the clock option was
	 * not given, the default from the locale is returned instead.
	 * @returns {string} "12" or "24" depending on whether this formatter uses
	 * the 12-hour or 24-hour clock
	 */
	getClock: function () {
		return this.clock || this.locinfo.getClock();
	},
	
	/**
	 * Convert this formatter to a string representation by returning the
	 * format template. This method delegates to getTemplate.
	 * 
	 * @return {string} the format template
	 */
	toString: function() {
		return this.getTemplate();
	},
	
	/*
	 * @private
	 * Left pad the str to the given length of digits with zeros
	 * @param {string} str the string to pad
	 * @param {number} length the desired total length of the output string, padded 
	 */
	_pad: function (str, length) {
		if (typeof(str) !== 'string') {
			str = "" + str;
		}
		return (str.length >= length) ? str : ilib.DateFmt.zeros.substring(0,length-str.length) + str;
	},
	
	/*
	 * @private
	 * Format a date according to a sequence of components. 
	 * @param {ilib.Date} date a date/time object to format
	 * @param {Array.<string>} templateArr an array of components to format
	 * @returns {string} the formatted date
	 */
	_formatTemplate: function (date, templateArr) {
		var i, key, temp, tz, str = "";
		for (i = 0; i < templateArr.length; i++) {
			switch (templateArr[i]) {
				case 'd':
					str += (date.day || 1);
					break;
				case 'dd':
					str += this._pad(date.day || 1, 2);
					break;
				case 'yy':
					temp = "" + (date.year || 1);
					str += this._pad(temp.substring(2,4), 2);
					break;
				case 'yyyy':
					str += this._pad(date.year || 1, 4);
					break;
				case 'M':
					str += (date.month || 1);
					break;
				case 'MM':
					str += this._pad(date.month || 1, 2);
					break;

				case 'h':
					temp = (date.hour || 0) % 12;
					if (temp == 0) {
						temp = "12";
					}
					str += temp; 
					break;
				case 'hh':
					temp = (date.hour || 0) % 12;
					if (temp == 0) {
						temp = "12";
					}
					str += this._pad(temp, 2);
					break;
				case 'K':
					temp = (date.hour || 0) % 12;
					str += temp; 
					break;
				case 'KK':
					temp = (date.hour || 0) % 12;
					str += this._pad(temp, 2);
					break;

				case 'H':
					str += (date.hour || 0);
					break;
				case 'HH':
					str += this._pad(date.hour || 0, 2);
					break;
				case 'k':
					str += (date.hour == 0 ? "24" : date.hour);
					break;
				case 'kk':
					temp = (date.hour == 0 ? "24" : date.hour);
					str += this._pad(temp, 2);
					break;

				case 'm':
					str += (date.minute || 0);
					break;
				case 'mm':
					str += this._pad(date.minute || 0, 2);
					break;
				case 's':
					str += (date.minute || 0);
					break;
				case 'ss':
					str += this._pad(date.second || 0, 2);
					break;
				case 'S':
					str += (date.millisecond || 0);
					break;
				case 'SSS':
					str += this._pad(date.millisecond || 0, 3);
					break;

				case 'N':
				case 'NN':
				case 'MMM':
				case 'MMMM':
					key = templateArr[i] + (date.month || 1);
					str += (this.sysres.getString(undefined, key + "-" + this.calName) || this.sysres.getString(undefined, key));
					break;

				case 'E':
				case 'EE':
				case 'EEE':
				case 'EEEE':
					key = templateArr[i] + date.getDayOfWeek();
					//console.log("finding " + key + " in the resources");
					str += (this.sysres.getString(undefined, key + "-" + this.calName) || this.sysres.getString(undefined, key));
					break;
					
				case 'a':
					if (this.locale.getLanguage() === 'zh') {
						if (date.hour < 6) {
							key = "azh0";
						} else if (date.hour < 9) {
							key = "azh1";
						} else if (date.hour < 12) {
							key = "azh2";
						} else if (date.hour < 13) {
							key = "azh3";
						} else if (date.hour < 18) {
							key = "azh4";
						} else if (date.hour < 21) {
							key = "azh5";
						} else {
							key = "azh6";
						}
					} else {
						key = date.hour < 12 ? "a0" : "a1";
					}
					//console.log("finding " + key + " in the resources");
					str += (this.sysres.getString(undefined, key + "-" + this.calName) || this.sysres.getString(undefined, key));
					break;
					
				case 'w':
					str += date.getWeekOfYear();
					break;
				case 'ww':
					str += this._pad(date.getWeekOfYear(), 2);
					break;

				case 'D':
					str += date.getDayOfYear();
					break;
				case 'DD':
					str += this._pad(date.getDayOfYear(), 2);
					break;
				case 'DDD':
					str += this._pad(date.getDayOfYear(), 3);
					break;
				case 'W':
					str += date.getWeekOfMonth(this.locale);
					break;

				case 'G':
					key = "G" + date.getEra();
					str += (this.sysres.getString(undefined, key + "-" + this.calName) || this.sysres.getString(undefined, key));
					break;

				case 'O':
					temp = this.sysres.getString("1#1st|2#2nd|3#3rd|21#21st|22#22nd|23#23rd|31#31st|#{num}th", "ordinalChoice");
					str += temp.formatChoice(date.day, {num: date.day});
					break;
					
				case 'z': // general time zone
					tz = this.getTimeZone(); // lazy-load the tz
					str += tz.getDisplayName(date, "standard");
					break;
				case 'Z': // RFC 822 time zone
					tz = this.getTimeZone(); // lazy-load the tz
					str += tz.getDisplayName(date, "rfc822");
					break;

				default:
					str += templateArr[i].replace(/'/g, "");
					break;
			}
		}
		return str;
	},
	
	/**
	 * Format a particular date instance according to the settings of this
	 * formatter object. The type of the date instance being formatted must 
	 * correspond exactly to the calendar type with which this formatter was 
	 * constructed. If the types are not compatible, this formatter will
	 * produce bogus results.
	 * 
	 * @param {ilib.Date} date a date to format
	 * @returns {string} the formatted version of the given date instance
	 */
	format: function (date) {
		if (!date.getCalendar || date.getCalendar() !== this.calName) {
			throw "Wrong date type passed to ilib.DateFmt.format()";
		}
		
		// convert to the time zone of this formatter before formatting
		if (date.timezone && this.tz) {
			// console.log("Differing time zones " + date.timezone + " and " + this.tz.getId() + ". Converting...");
			
			var datetz = new ilib.TimeZone({
				locale: date.locale,
				id: date.timezone
			});
			
			var dateOffset = datetz.getOffset(date),
				fmtOffset = this.tz.getOffset(date),
				// relative offset in seconds
				offset = (dateOffset.h || 0)*60*60 + (dateOffset.m || 0)*60 + (dateOffset.s || 0) -
					((fmtOffset.h || 0)*60*60 + (fmtOffset.m || 0)*60 + (fmtOffset.s || 0));
			
			//console.log("Date offset is " + JSON.stringify(dateOffset));
			//console.log("Formatter offset is " + JSON.stringify(fmtOffset));
			//console.log("Relative offset is " + offset + " seconds.");
			
			var newDate = ilib.Date.newInstance({
				type: this.calName,
				rd: date.getRataDie() - (offset / 86400) // 86400 seconds in a day
			});
			
			date = newDate;
		}
		return this._formatTemplate(date, this.templateArr);
	},
	
	/**
	 * Return a string that describes a date relative to the given 
	 * reference date. The string returned is text that for the locale that
	 * was specified when the formatter instance was constructed.<p>
	 * 
	 * The date can be in the future relative to the reference date or in
	 * the past, and the formatter will generate the appropriate string.<p>
	 * 
	 * The text used to describe the relative reference depends on the length
	 * of time between the date and the reference. If the time was in the
	 * past, it will use the "ago" phrase, and in the future, it will use
	 * the "in" phrase. Examples:<p>
	 * 
	 * <ul>
	 * <li>within a minute: either "X seconds ago" or "in X seconds"
	 * <li>within an hour: either "X minutes ago" or "in X minutes"
	 * <li>within a day: either "X hours ago" or "in X hours"
	 * <li>within 2 weeks: either "X days ago" or "in X days"
	 * <li>within 12 weeks (~3 months): either "X weeks ago" or "in X weeks"
	 * <li>within two years: either "X months ago" or "in X months"
	 * <li>longer than 2 years: "X years ago" or "in X years"
	 * </ul>
	 * 
	 * @param {ilib.Date} reference a date that the date parameter should be relative to
	 * @param {ilib.Date} date a date being formatted
	 * @throws "Wrong calendar type" when the start or end dates are not the same
	 * calendar type as the formatter itself
	 * @return {string} the formatted relative date
	 */
	formatRelative: function(reference, date) {
		var referenceRd, dateRd, fmt, time, diff, num;
		
		if (typeof(reference) !== 'object' || !reference.getCalendar || reference.getCalendar() !== this.calName ||
			typeof(date) !== 'object' || !date.getCalendar || date.getCalendar() !== this.calName) {
			throw "Wrong calendar type";
		}
		
		referenceRd = reference.getRataDie();
		dateRd = date.getRataDie();
		
		if (dateRd < referenceRd) {
			diff = referenceRd - dateRd;
			fmt = this.sysres.getString("{duration} ago");
		} else {
			diff = dateRd - referenceRd;
			fmt = this.sysres.getString("in {duration}");
		}
		
		if (diff < 0.000694444) {
			num = Math.round(diff * 86400);
			switch (this.length) {
				case 's':
					time = this.sysres.getString("#{num}s");
					break;
				case 'm':
					time = this.sysres.getString("1#1 se|#{num} sec");
					break;
				case 'l':
					time = this.sysres.getString("1#1 sec|#{num} sec");
					break;
				default:
				case 'f':
					time = this.sysres.getString("1#1 second|#{num} seconds");
					break;
			}
		} else if (diff < 0.041666667) {
			num = Math.round(diff * 1440);
			switch (this.length) {
				case 's':
					time = this.sysres.getString("#{num}m", "durationShortMinutes");
					break;
				case 'm':
					time = this.sysres.getString("1#1 mi|#{num} min");
					break;
				case 'l':
					time = this.sysres.getString("1#1 min|#{num} min");
					break;
				default:
				case 'f':
					time = this.sysres.getString("1#1 minute|#{num} minutes");
					break;
			}
		} else if (diff < 1) {
			num = Math.round(diff * 24);
			switch (this.length) {
				case 's':
					time = this.sysres.getString("#{num}h");
					break;
				case 'm':
					time = this.sysres.getString("1#1 hr|#{num} hrs", "durationMediumHours");
					break;
				case 'l':
					time = this.sysres.getString("1#1 hr|#{num} hrs");
					break;
				default:
				case 'f':
					time = this.sysres.getString("1#1 hour|#{num} hours");
					break;
			}
		} else if (diff < 14) {
			num = Math.round(diff);
			switch (this.length) {
				case 's':
					time = this.sysres.getString("#{num}d");
					break;
				case 'm':
					time = this.sysres.getString("1#1 dy|#{num} dys");
					break;
				case 'l':
					time = this.sysres.getString("1#1 day|#{num} days", "durationLongDays");
					break;
				default:
				case 'f':
					time = this.sysres.getString("1#1 day|#{num} days");
					break;
			}
		} else if (diff < 84) {
			num = Math.round(diff/7);
			switch (this.length) {
				case 's':
					time = this.sysres.getString("#{num}w");
					break;
				case 'm':
					time = this.sysres.getString("1#1 wk|#{num} wks", "durationMediumWeeks");
					break;
				case 'l':
					time = this.sysres.getString("1#1 wk|#{num} wks");
					break;
				default:
				case 'f':
					time = this.sysres.getString("1#1 week|#{num} weeks");
					break;
			}
		} else if (diff < 730) {
			num = Math.round(diff/30.4);
			switch (this.length) {
				case 's':
					time = this.sysres.getString("#{num}m", "durationShortMonths");
					break;
				case 'm':
					time = this.sysres.getString("1#1 mo|#{num} mos");
					break;
				case 'l':
					time = this.sysres.getString("1#1 mon|#{num} mons");
					break;
				default:
				case 'f':
					time = this.sysres.getString("1#1 month|#{num} months");
					break;
			}
		} else {
			num = Math.round(diff/365);
			switch (this.length) {
				case 's':
					time = this.sysres.getString("#{num}y");
					break;
				case 'm':
					time = this.sysres.getString("1#1 yr|#{num} yrs", "durationMediumYears");
					break;
				case 'l':
					time = this.sysres.getString("1#1 yr|#{num} yrs");
					break;
				default:
				case 'f':
					time = this.sysres.getString("1#1 year|#{num} years");
					break;
			}
		}
		return fmt.format({duration: time.formatChoice(num, {num: num})});
	}
};

/*
 * datefmt.js - Date formatter definition
 * 
 * Copyright © 2012, JEDL Software, Inc.
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
!depends 
ilibglobal.js 
locale.js 
date.js 
strings.js 
resources.js 
calendar.js
localeinfo.js
timezone.js
datefmt.js
*/

// !data dateformats sysres

/**
 * @class
 * 
 * Create a new date range formatter instance. The date range formatter is immutable once
 * it is created, but can format as many different date ranges as needed with the same
 * options. Create different date range formatter instances for different purposes
 * and then keep them cached for use later if you have more than one range to
 * format.<p>
 * 
 * The options may contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - locale to use when formatting the date/times in the range. If the 
 * locale is not specified, then the default locale of the app or web page will be used.
 * 
 * <li><i>calendar</i> - the type of calendar to use for this format. The value should
 * be a sting containing the name of the calendar. Currently, the supported
 * types are "gregorian", "julian", "arabic", "hebrew", or "chinese". If the
 * calendar is not specified, then the default calendar for the locale is used. When the
 * calendar type is specified, then the format method must be called with an instance of
 * the appropriate date type. (eg. Gregorian calendar means that the format method must 
 * be called with a GregDate instance.)
 *  
 * <li><i>timezone</i> - time zone to use when formatting times. This may be a time zone
 * instance or a time zone specifier string in RFC 822 format. If not specified, the
 * default time zone for the locale is used.
 * 
 * <li><i>length</i> - Specify the length of the format to use as a string. The length 
 * is the approximate size of the formatted string.
 * 
 * <ul>
 * <li><i>short</i> - use a short representation of the time. This is the most compact format possible for the locale.
 * <li><i>medium</i> - use a medium length representation of the time. This is a slightly longer format.
 * <li><i>long</i> - use a long representation of the time. This is a fully specified format, but some of the textual 
 * components may still be abbreviated. (eg. "Tue" instead of "Tuesday")
 * <li><i>full</i> - use a full representation of the time. This is a fully specified format where all the textual 
 * components are spelled out completely.
 * </ul>
 * 
 * eg. The "short" format for an en_US range may be "MM/yy - MM/yy", whereas the long format might be 
 * "MMM, yyyy - MMM, yyyy". In the long format, the month name is textual instead of numeric 
 * and is longer, the year is 4 digits instead of 2, and the format contains slightly more 
 * spaces and formatting characters.<p>
 * 
 * Note that the length parameter does not specify which components are to be formatted. The
 * components that are formatted depend on the length of time in the range.
 * 
 * <li><i>clock</i> - specify that formatted times should use a 12 or 24 hour clock if the
 * format happens to include times. Valid values are "12" and "24".<p>
 * 
 * In some locales, both clocks are used. For example, in en_US, the general populace uses
 * a 12 hour clock with am/pm, but in the US military or in nautical or aeronautical or 
 * scientific writing, it is more common to use a 24 hour clock. This property allows you to
 * construct a formatter that overrides the default for the locale.<p>
 * 
 * If this property is not specified, the default is to use the most widely used convention
 * for the locale.
 * </ul>
 * <p>
 * 
 * Depends directive: !depends daterangefmt.js
 * 
 * @constructor
 * @param {Object} options options governing the way this date range formatter instance works
 */
ilib.DateRngFmt = function(options) {
	var arr, i, bad, res, formats, type;
	
	this.locale = new ilib.Locale();
	this.length = "s";
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (options.length) {
			if (options.length === 'short' ||
				options.length === 'medium' ||
				options.length === 'long' ||
				options.length === 'full') {
				// only use the first char to save space in the json files
				this.length = options.length.charAt(0);
			}
		}
	}
	
	this.locinfo = new ilib.LocaleInfo(this.locale);
	
	// get the default calendar name from the locale, and if the locale doesn't define
	// one, use the hard-coded gregorian as the last resort
	this.calName = this.calName || this.locinfo.getCalendar() || "gregorian";
	switch (this.calName) {
		case 'julian':
			this.cal = new ilib.Cal.Julian();
			break;
		default:
			// just use the default Gregorian instead
			this.cal = new ilib.Cal.Gregorian();
			break;
	}

	// delegate a bunch of the formatting to this formatter
	this.dateFmt = new ilib.DateFmt(options);
	
	this.timeTemplate = this.dateFmt._getFormat(this.dateFmt.formats.time, this.dateFmt.timeComponents, this.length) || "hh:mm";
	this.timeTemplateArr = this.dateFmt._tokenize(this.timeTemplate);
};

ilib.DateRngFmt.prototype = {
	/**
	 * Return the locale used with this formatter instance.
	 * @returns {ilib.Locale} the ilib.Locale instance for this formatter
	 */
	getLocale: function() {
		return this.locale;
	},
	
	/**
	 * Return the name of the calendar used to format date/times for this
	 * formatter instance.
	 * @returns {string} the name of the calendar used by this formatter
	 */
	getCalendar: function () {
		return this.dateFmt.getCalendar();
	},
	
	/**
	 * Return the length used to format date/times in this formatter. This is either the
	 * value of the length option to the constructor, or the default value.
	 * 
	 * @returns {string} the length of formats this formatter returns
	 */
	getLength: function () {
		return ilib.DateFmt.lenmap[this.length] || "";
	},
	
	/**
	 * Return the time zone used to format date/times for this formatter
	 * instance.
	 * @return {ilib.TimeZone} a string naming the time zone
	 */
	getTimeZone: function () {
		return this.dateFmt.getTimeZone();
	},
	
	/**
	 * Return the clock option set in the constructor. If the clock option was
	 * not given, the default from the locale is returned instead.
	 * @returns {string} "12" or "24" depending on whether this formatter uses
	 * the 12-hour or 24-hour clock
	 */
	getClock: function () {
		return this.dateFmt.getClock();
	},
	
	/**
	 * Format a date/time range according to the settings of the current
	 * formatter. The range is specified as being from the "start" date until
	 * the "end" date. <p>
	 * 
	 * The template that the date/time range uses depends on the
	 * length of time between the dates, on the premise that a long date range
	 * which is too specific is not useful. For example, when giving
	 * the dates of the 100 Years War, in most situations it would be more 
	 * appropriate to format the range as "1337 - 1453" than to format it as 
	 * "10:37am November 9, 1337 - 4:37pm July 17, 1453", as the latter format 
	 * is much too specific given the length of time that the range represents.
	 * If a very specific, but long, date range really is needed, the caller 
	 * should format two specific dates separately and put them 
	 * together as you might with other normal strings.<p>
	 * 
	 * The format used for a date range contains the following date components,
	 * where the order of those components is rearranged and the component values 
	 * are translated according to each locale:
	 * 
	 * <ul>
	 * <li>within 3 days: the times of day, dates, months, and years
	 * <li>within 730 days (2 years): the dates, months, and years
	 * <li>within 3650 days (10 years): the months and years
	 * <li>longer than 10 years: the years only 
	 * </ul>
	 * 
	 * In general, if any of the date components share a value between the
	 * start and end date, that component is only given once. For example,
	 * if the range is from November 15, 2011 to November 26, 2011, the 
	 * start and end dates both share the same month and year. The 
	 * range would then be formatted as "November 15-26, 2011". <p>
	 * 
	 * If you want to format a length of time instead of a particular range of
	 * time (for example, the length of an event rather than the specific start time
	 * and end time of that event), then use a duration formatter instance 
	 * (ilib.DurFmt) instead. The formatRange method will make sure that each component 
	 * of the date/time is within the normal range for that component. For example, 
	 * the minutes will always be between 0 and 59, no matter what is specified in 
	 * the date to format, because that is the normal range for minutes. A duration 
	 * format will allow the number of minutes to exceed 59. For example, if you 
	 * were displaying the length of a movie that is 198 minutes long, the minutes
	 * component of a duration could be 198.<p>
	 * 
	 * @param {ilib.Date} start the starting date/time of the range. This must be of 
	 * the same calendar type as the formatter itself. 
	 * @param {ilib.Date} end the ending date/time of the range. This must be of the 
	 * same calendar type as the formatter itself.
	 * @throws "Wrong calendar type" when the start or end dates are not the same
	 * calendar type as the formatter itself
	 * @return {string} a date range formatted for the locale
	 */
	format: function (start, end) {
		var startRd, endRd, fmt = "", yearTemplate, monthTemplate, dayTemplate;
		
		if (typeof(start) !== 'object' || !start.getCalendar || start.getCalendar() !== this.calName ||
			typeof(end) !== 'object' || !end.getCalendar || end.getCalendar() !== this.calName) {
			throw "Wrong calendar type";
		}
		
		startRd = start.getRataDie();
		endRd = end.getRataDie();
		
		// 
		// legend:
		// c00 - difference is less than 3 days. Year, month, and date are same, but time is different
		// c01 - difference is less than 3 days. Year and month are same but date and time are different
		// c02 - difference is less than 3 days. Year is same but month, date, and time are different. (ie. it straddles a month boundary)
		// c03 - difference is less than 3 days. Year, month, date, and time are all different. (ie. it straddles a year boundary)
		// c10 - difference is less than 2 years. Year and month are the same, but date and time are different.
		// c11 - difference is less than 2 years. Year is the same, but month, date, and time are different.
		// c12 - difference is less than 2 years. All fields are different. (ie. straddles a year boundary)
		// c20 - difference is less than 10 years. All fields are different.
		// c30 - difference is more than 10 years. All fields are different.
		//
		
		if (endRd - startRd < 3) {
			if (start.year === end.year) {
				if (start.month === end.month) {
					if (start.day === end.day) {
						fmt = new ilib.String(this.dateFmt._getFormat(this.dateFmt.formats.range, "c00", this.length));
					} else {
						fmt = new ilib.String(this.dateFmt._getFormat(this.dateFmt.formats.range, "c01", this.length));
					}
				} else {
					fmt = new ilib.String(this.dateFmt._getFormat(this.dateFmt.formats.range, "c02", this.length));
				}
			} else {
				fmt = new ilib.String(this.dateFmt._getFormat(this.dateFmt.formats.range, "c03", this.length));
			}
		} else if (endRd - startRd < 730) {
			if (start.year === end.year) {
				if (start.month === end.month) {
					fmt = new ilib.String(this.dateFmt._getFormat(this.dateFmt.formats.range, "c10", this.length));
				} else {
					fmt = new ilib.String(this.dateFmt._getFormat(this.dateFmt.formats.range, "c11", this.length));
				}
			} else {
				fmt = new ilib.String(this.dateFmt._getFormat(this.dateFmt.formats.range, "c12", this.length));
			}
		} else if (endRd - startRd < 3650) {
			fmt = new ilib.String(this.dateFmt._getFormat(this.dateFmt.formats.range, "c20", this.length));
		} else {
			fmt = new ilib.String(this.dateFmt._getFormat(this.dateFmt.formats.range, "c30", this.length));
		}

		yearTemplate = this.dateFmt._tokenize(this.dateFmt._getFormat(this.dateFmt.formats.date, "y", this.length) || "yyyy");
		monthTemplate = this.dateFmt._tokenize(this.dateFmt._getFormat(this.dateFmt.formats.date, "m", this.length) || "MM");
		dayTemplate = this.dateFmt._tokenize(this.dateFmt._getFormat(this.dateFmt.formats.date, "d", this.length) || "dd");
		
		/*
		console.log("fmt is " + fmt.toString());
		console.log("year template is " + yearTemplate);
		console.log("month template is " + monthTemplate);
		console.log("day template is " + dayTemplate);
		*/
		
		return fmt.format({
			sy: this.dateFmt._formatTemplate(start, yearTemplate),
			sm: this.dateFmt._formatTemplate(start, monthTemplate),
			sd: this.dateFmt._formatTemplate(start, dayTemplate),
			st: this.dateFmt._formatTemplate(start, this.timeTemplateArr),
			ey: this.dateFmt._formatTemplate(end, yearTemplate),
			em: this.dateFmt._formatTemplate(end, monthTemplate),
			ed: this.dateFmt._formatTemplate(end, dayTemplate),
			et: this.dateFmt._formatTemplate(end, this.timeTemplateArr)
		});
	}
};

/*
 * hebrew.js - Represent a Hebrew calendar object.
 * 
 * Copyright © 2012, JEDL Software, Inc.
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


/* !depends calendar.js locale.js date.js julianday.js util/utils.js */

/**
 * @class
 * Construct a new Hebrew calendar object. This class encodes information about
 * the Hebrew (Jewish) calendar. The Hebrew calendar is a tabular hebrew 
 * calendar where the dates are calculated by arithmetic rules. This differs from 
 * the religious Hebrew calendar which is used to mark the beginning of particular 
 * holidays. The religious calendar depends on the first sighting of the new 
 * crescent moon to determine the first day of the new month. Because humans and 
 * weather are both involved, the actual time of sighting varies, so it is not 
 * really possible to precalculate the religious calendar. Certain groups, such 
 * as the Hebrew Society of North America, decreed in in 2007 that they will use
 * a calendar based on calculations rather than observations to determine the 
 * beginning of lunar months, and therefore the dates of holidays.<p>
 * 
 * Depends directive: !depends hebrew.js
 * 
 * @constructor
 * @implements ilib.Cal
 */
ilib.Cal.Hebrew = function() {
	this.type = "hebrew";
};


/**
 * @private
 * Return the number of days elapsed in the Hebrew calendar before the
 * given year starts.
 * @param {number} year the year for which the number of days is sought
 * @return {number} the number of days elapsed in the Hebrew calendar before the
 * given year starts
 */
ilib.Cal.Hebrew.elapsedDays = function(year) {
	var months = Math.floor(((235*year) - 234)/19);
	var parts = 204 + 793 * ilib.mod(months, 1080);
	var hours = 11 + 12 * months + 793 * Math.floor(months/1080) + 
		Math.floor(parts/1080);
	var days = 29 * months + Math.floor(hours/24);
	return (ilib.mod(3 * (days + 1), 7) < 3) ? days + 1 : days;
};

/**
 * @private
 * Return the number of days that the New Year's (Rosh HaShanah) in the Hebrew 
 * calendar will be corrected for the given year. Corrections are caused because New 
 * Year's is not allowed to start on certain days of the week. To deal with 
 * it, the start of the new year is corrected for the next year by adding a 
 * day to the 8th month (Heshvan) and/or the 9th month (Kislev) in the current
 * year to make them 30 days long instead of 29.
 * 
 * @param {number} year the year for which the correction is sought
 * @param {number} elapsed number of days elapsed up to this year
 * @return {number} the number of days correction in the current year to make sure
 * Rosh HaShanah does not fall on undesirable days of the week
 */
ilib.Cal.Hebrew.newYearsCorrection = function(year, elapsed) {
	var lastYear = ilib.Cal.Hebrew.elapsedDays(year-1),
		thisYear = elapsed,
		nextYear = ilib.Cal.Hebrew.elapsedDays(year+1);
	
	return (nextYear - thisYear) == 356 ? 2 : ((thisYear - lastYear) == 382 ? 1 : 0);
}

/**
 * @private
 * Return the rata die date of the new year for the given hebrew year.
 * @param {number} year the year for which the new year is needed
 * @return {number} the rata die date of the new year
 */
ilib.Cal.Hebrew.newYear = function(year) {
	var elapsed = ilib.Cal.Hebrew.elapsedDays(year); 
	
	return elapsed + ilib.Cal.Hebrew.newYearsCorrection(year, elapsed);
};

/**
 * @private
 * Return the number of days in the given year. Years contain a variable number of
 * days because the date of Rosh HaShanah (New Year's) changes so that it doesn't
 * fall on particular days of the week. Days are added to the months of Heshvan
 * and/or Kislev in the previous year in order to prevent the current year's New
 * Year from being on Sunday, Wednesday, or Friday.
 * 
 * @param {number} year the year for which the length is sought
 * @return {number} number of days in the given year
 */
ilib.Cal.Hebrew.daysInYear = function(year) {
	return ilib.Cal.Hebrew.newYear(year+1) - ilib.Cal.Hebrew.newYear(year);
};

/**
 * @private
 * Return true if the given year contains a long month of Heshvan. That is,
 * it is 30 days instead of 29.
 * 
 * @param {number} year the year in which that month is questioned
 * @return {boolean} true if the given year contains a long month of Heshvan
 */
ilib.Cal.Hebrew.longHeshvan = function(year) {
	return ilib.mod(ilib.Cal.Hebrew.daysInYear(year), 10) === 5;
};

/**
 * @private
 * Return true if the given year contains a long month of Kislev. That is,
 * it is 30 days instead of 29.
 * 
 * @param {number} year the year in which that month is questioned
 * @return {boolean} true if the given year contains a short month of Kislev
 */
ilib.Cal.Hebrew.longKislev = function(year) {
	return ilib.mod(ilib.Cal.Hebrew.daysInYear(year), 10) !== 3;
};

/**
 * @private
 * Return the date of the last day of the month for the given year. The date of
 * the last day of the month is variable because a number of months gain an extra 
 * day in leap years, and it is variable which months gain a day for each leap 
 * year and which do not.
 * 
 * @param {number} month the month for which the number of days is sought
 * @param {number} year the year in which that month is
 * @return {number} the number of days in the given month and year
 */
ilib.Cal.Hebrew.prototype.lastDayOfMonth = function(month, year) {
	switch (month) {
		case 2: 
		case 4: 
		case 6: 
		case 10: 
			return 29;
		case 13:
			return this.isLeapYear(year) ? 29 : 0;
		case 8:
			return ilib.Cal.Hebrew.longHeshvan(year) ? 30 : 29;
		case 9:
			return ilib.Cal.Hebrew.longKislev(year) ? 30 : 29;
		case 12:
		case 1:
		case 3:
		case 5:
		case 7:
		case 11:
			return 30;
		default:
			return 0;
	}
};

/**
 * Return the number of months in the given year. The number of months in a year varies
 * for luni-solar calendars because in some years, an extra month is needed to extend the 
 * days in a year to an entire solar year. The month is represented as a 1-based number
 * where 1=first month, 2=second month, etc.
 * 
 * @param {number} year a year for which the number of months is sought
 */
ilib.Cal.Hebrew.prototype.getNumMonths = function(year) {
	return this.isLeapYear(year) ? 13 : 12;
};

/**
 * Return the number of days in a particular month in a particular year. This function
 * can return a different number for a month depending on the year because of leap years.
 *
 * @param {number} month the month for which the length is sought
 * @param {number} year the year within which that month can be found
 * @returns {number} the number of days within the given month in the given year, or
 * 0 for an invalid month in the year
 */
ilib.Cal.Hebrew.prototype.getMonLength = function(month, year) {
	if (month < 1 || month > 13 || (month == 13 && !this.isLeapYear(year))) {
		return 0;
	}
	return this.lastDayOfMonth(month, year);
};

/**
 * Return true if the given year is a leap year in the Hebrew calendar.
 * The year parameter may be given as a number, or as a HebrewDate object.
 * @param {number|Object} year the year for which the leap year information is being sought
 * @returns {boolean} true if the given year is a leap year
 */
ilib.Cal.Hebrew.prototype.isLeapYear = function(year) {
	var y = (typeof(year) == 'number') ? year : year.year;
	return (ilib.mod(1 + 7 * y, 19) < 7);
};

/**
 * Return the type of this calendar.
 * 
 * @returns {string} the name of the type of this calendar 
 */
ilib.Cal.Hebrew.prototype.getType = function() {
	return this.type;
};

/**
 * Return a date instance for this calendar type using the given
 * options.
 * @param {Object} options options controlling the construction of 
 * the date instance
 * @returns {ilib.Date} a date appropriate for this calendar type
 */
ilib.Cal.Hebrew.prototype.newDateInstance = function (options) {
	return new ilib.Date.HebrewDate(options);
};

/*register this calendar for the factory method */
ilib.Cal._constructors["hebrew"] = ilib.Cal.Hebrew;

/*
 * hebrewdate.js - Represent a date in the Hebrew calendar
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

/* !depends date.js calendar/hebrew.js util/utils.js */

/**
 * @class
 * 
 * Construct a new civil Hebrew date object. The constructor can be called
 * with a params object that can contain the following properties:<p>
 * 
 * <ul>
 * <li><i>julianday</i> - the Julian Day to set into this date
 * <li><i>year</i> - any integer except 0. Years go from -1 (BCE) to 1 (CE), skipping the zero year
 * <li><i>month</i> - 1 to 12, where 1 means Nisan, 2 means Iyyar, etc.
 * <li><i>day</i> - 1 to 30
 * <li><i>hour</i> - 0 to 23. A formatter is used to display 12 hour clocks, but this representation 
 * is always done with an unambiguous 24 hour representation
 * <li><i>parts</i> - 0 to 1079. Specify the halaqim parts of an hour. Either specify 
 * the parts or specify the minutes, seconds, and milliseconds, but not both. 
 * <li><i>minute</i> - 0 to 59
 * <li><i>second</i> - 0 to 59
 * <li><i>millisecond</i> - 0 to 999
 * <li><i>locale</i> - the ilib.TimeZone instance or time zone name as a string 
 * of this julian date. The date/time is kept in the local time. The time zone
 * is used later if this date is formatted according to a different time zone and
 * the difference has to be calculated, or when the date format has a time zone
 * component in it.
 * <li><i>timezone</i> - the time zone of this instance. If the time zone is not 
 * given, it can be inferred from this locale. For locales that span multiple
 * time zones, the one with the largest population is chosen as the one that 
 * represents the locale. 
 * </ul>
 * 
 * If called with another Hebrew date argument, the date components of the given
 * date are copied into the current one.<p>
 * 
 * If the constructor is called with no arguments at all or if none of the 
 * properties listed above 
 * from <i>julianday</i> through <i>millisecond</i> are present, then the date 
 * components are 
 * filled in with the current date at the time of instantiation. Note that if
 * you do not give the time zone when defaulting to the current time and the 
 * time zone for all of ilib was not set with <i>ilib.setTimeZone()</i>, then the
 * time zone will default to UTC ("Universal Time, Coordinated" or "Greenwich 
 * Mean Time").<p>
 * 
 * Depends directive: !depends hebrewdate.js
 * 
 * @constructor
 * @extends ilib.Date
 * @param {Object=} params parameters that govern the settings and behaviour of this Hebrew date
 */
ilib.Date.HebrewDate = function(params) {
	this.cal = new ilib.Cal.Hebrew();
	
	if (params) {
		if (params.timezone) {
			this.timezone = params.timezone;
		}
		if (params.locale) {
			this.locale = (typeof(params.locale) === 'string') ? new ilib.Locale(params.locale) : params.locale;
			if (!this.timezone) {
				var li = new ilib.LocaleInfo(this.locale);
				this.timezone = li.getTimeZone(); 
			}
		}

		if (typeof(params.unixtime) != 'undefined') {
			this.setTime(parseInt(params.unixtime, 10));
		} else if (typeof(params.julianday) != 'undefined') {
			this.setJulianDay(parseFloat(params.julianday));
		} else if (params.year || params.month || params.day || params.hour ||
				params.minute || params.second || params.millisecond || params.parts ) {
			/**
			 * Year in the Hebrew calendar.
			 * @type number
			 */
			this.year = parseInt(params.year, 10) || 0;

			/**
			 * The month number, ranging from 1 to 13.
			 * @type number
			 */
			this.month = parseInt(params.month, 10) || 1;

			/**
			 * The day of the month. This ranges from 1 to 30.
			 * @type number
			 */
			this.day = parseInt(params.day, 10) || 1;
			
			/**
			 * The hour of the day. This can be a number from 0 to 23, as times are
			 * stored unambiguously in the 24-hour clock.
			 * @type number
			 */
			this.hour = parseInt(params.hour, 10) || 0;

			this.parts = -1;
			
			if (typeof(params.parts) !== 'undefined') {
				/**
				 * The parts (halaqim) of the hour. This can be a number from 0 to 1079.
				 * @type number
				 */
				this.parts = parseInt(params.parts, 10);
				var seconds = parseInt(params.parts, 10) * 3.333333333333;
				this.minute = Math.floor(seconds / 60);
				seconds -= this.minute * 60;
				this.second = Math.floor(seconds);
				this.millisecond = (seconds - this.second);	
			} else {
				/**
				 * The minute of the hours. Ranges from 0 to 59.
				 * @type number
				 */
				this.minute = parseInt(params.minute, 10) || 0;
	
				/**
				 * The second of the minute. Ranges from 0 to 59.
				 * @type number
				 */
				this.second = parseInt(params.second, 10) || 0;
	
				/**
				 * The millisecond of the second. Ranges from 0 to 999.
				 * @type number
				 */
				this.millisecond = parseInt(params.millisecond, 10) || 0;
			}
				
			/**
			 * The day of the year. Ranges from 1 to 383.
			 * @type number
			 */
			this.dayOfYear = parseInt(params.dayOfYear, 10);
		} else if (typeof(params.rd) != 'undefined') {
			// private parameter. Do not document this!
			this.setRd(params.rd);
		} else {
			// Date.getTime() gets unix time in UTC
			var now = new Date();
			this.setTime(now.getTime() - now.getTimezoneOffset()*60000);
		}
	} else {
		// Date.getTime() gets unix time in UTC
		var now = new Date();
		this.setTime(now.getTime() - now.getTimezoneOffset()*60000);
	}
};

ilib.Date.HebrewDate.prototype = new ilib.Date();
ilib.Date.HebrewDate.prototype.parent = ilib.Date;
ilib.Date.HebrewDate.prototype.constructor = ilib.Date.HebrewDate;

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month for a non-leap year, without new years corrections
 */
ilib.Date.HebrewDate.cumMonthLengths = [
	176,  /* Nisan */
	206,  /* Iyyar */
	235,  /* Sivan */
	265,  /* Tammuz */
	294,  /* Av */
	324,  /* Elul */
	0,    /* Tishri - Jewish New Year (Rosh HaShanah) starts in month 7 */
	30,   /* Heshvan */
	59,   /* Kislev */
	88,   /* Teveth */
	117,  /* Shevat */
	147   /* Adar I */
];

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month for a non-leap year, without new years corrections,
 * that can be used in reverse to map days to months
 */
ilib.Date.HebrewDate.cumMonthLengthsReverse = [
//  [days, monthnumber],                                                
	[0,   7],  /* Tishri - Jewish New Year (Rosh HaShanah) starts in month 7 */
	[30,  8],  /* Heshvan */
	[59,  9],  /* Kislev */
	[88,  10], /* Teveth */
	[117, 11], /* Shevat */
	[147, 12], /* Adar I */
	[176, 1],  /* Nisan */
	[206, 2],  /* Iyyar */
	[235, 3],  /* Sivan */
	[265, 4],  /* Tammuz */
	[294, 5],  /* Av */
	[324, 6],  /* Elul */
	[354, 7]   /* end of year sentinel value */
];

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month for a leap year, without new years corrections 
 */
ilib.Date.HebrewDate.cumMonthLengthsLeap = [
	206,  /* Nisan */
	236,  /* Iyyar */
	265,  /* Sivan */
	295,  /* Tammuz */
	324,  /* Av */
	354,  /* Elul */
	0,    /* Tishri - Jewish New Year (Rosh HaShanah) starts in month 7 */
	30,   /* Heshvan */
	59,   /* Kislev */
	88,   /* Teveth */
	117,  /* Shevat */
	147,  /* Adar I */
	177   /* Adar II */
];

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month for a leap year, without new years corrections
 * that can be used in reverse to map days to months 
 */
ilib.Date.HebrewDate.cumMonthLengthsLeapReverse = [
//  [days, monthnumber],                                                
	[0,   7],  /* Tishri - Jewish New Year (Rosh HaShanah) starts in month 7 */
	[30,  8],  /* Heshvan */
	[59,  9],  /* Kislev */
	[88,  10], /* Teveth */
	[117, 11], /* Shevat */
	[147, 12], /* Adar I */
	[177, 13], /* Adar II */
	[206, 1],  /* Nisan */
	[236, 2],  /* Iyyar */
	[265, 3],  /* Sivan */
	[295, 4],  /* Tammuz */
	[324, 5],  /* Av */
	[354, 6],  /* Elul */
	[384, 7]   /* end of year sentinel value */
];

/**
 * @private
 * @const
 * @type number
 * Number of days difference between RD 0 of the Gregorian calendar 
 * (Jan 1, 1 Gregorian = JD 1721057.5) and RD 0 of the Hebrew calendar
 * (September 7, -3760 Gregorian = JD 347997.25)
 */
ilib.Date.HebrewDate.GregorianDiff = 1373060.25;

/**
 * @private
 * @const
 * @type number
 * The difference between a zero Julian day and the first day of the Hebrew 
 * calendar: sunset on Monday, Tishri 1, 1 = September 7, 3760 BC Gregorian = JD 347997.25
 */
ilib.Date.HebrewDate.epoch = 347997.25;

/**
 * @private
 * Return the Rata Die (fixed day) number of the given date.
 * 
 * @param {Object} date hebrew date to calculate
 * @return {number} the rd date as a number
 */
ilib.Date.HebrewDate.prototype.calcRataDie = function(date) {
	var elapsed = ilib.Cal.Hebrew.elapsedDays(date.year);
	var days = elapsed +
		ilib.Cal.Hebrew.newYearsCorrection(date.year, elapsed) +
		date.day - 1;
	var i, sum = 0, table;
	
	//console.log("getRataDie: converting " +  JSON.stringify(date));
	//console.log("getRataDie: days is " +  days);
	//console.log("getRataDie: new years correction is " +  ilib.Cal.Hebrew.newYearsCorrection(date.year, elapsed));
	
	table = this.cal.isLeapYear(date.year) ? 
				ilib.Date.HebrewDate.cumMonthLengthsLeap :
				ilib.Date.HebrewDate.cumMonthLengths;
	sum = table[date.month-1];
	
	// gets cumulative without correction, so now add in the correction
	if ((date.month < 7 || date.month > 8) && ilib.Cal.Hebrew.longHeshvan(date.year)) {
		sum++;
	}
	if ((date.month < 7 || date.month > 9) && ilib.Cal.Hebrew.longKislev(date.year)) {
		sum++;
	}
	// console.log("getRataDie: cum days is now " +  sum);
	
	days += sum;
	
	// the date starts at sunset, which we take as 18:00, so the hours from
	// midnight to 18:00 are on the current Gregorian day, and the hours from
	// 18:00 to midnight are on the previous Gregorian day. So to calculate the 
	// number of hours into the current day that this time represents, we have
	// to count from 18:00 to midnight first, and add in 6 hours if the time is
	// less than 18:00
	var time;
	if (date.hour >= 18) {
		time = ((date.hour - 18 || 0) * 3600000 +
			(date.minute || 0) * 60000 +
			(date.second || 0) * 1000 +
			(date.millisecond || 0)) / 
			86400000;
	} else {
		time = 0.25 +	// 6 hours from 18:00 to midnight on the previous gregorian day
				((date.hour || 0) * 3600000 +
				(date.minute || 0) * 60000 +
				(date.second || 0) * 1000 +
				(date.millisecond || 0)) / 
				86400000;
	}
	
	//console.log("getRataDie: rd is " +  (days + time));
	return days + time;
};

/**
 * @private
 * Return the Rata Die (fixed day) number of this date.
 * 
 * @return {number} the rd date as a number
 */
ilib.Date.HebrewDate.prototype.getRataDie = function() {
	return this.calcRataDie(this);
};

/**
 * @private
 * Calculate date components for the given RD date.
 * @return {Object.<{year:number,month:number,day:number,hour:number,minute:number,second:number,millisecond:number}>} object containing the fields
 */
ilib.Date.HebrewDate.prototype.calcComponents = function (rd) {
	var ret = {},
		remainder,
		approximation,
		year,
		month,
		i,
		table,
		target,
		thisNewYear = 0,
		nextNewYear;
	
	// console.log("HebrewDate.calcComponents: calculating for rd " + rd);
	
	// divide by the average number of days per year in the Hebrew calendar
	// to approximate the year, then tweak it to get the real year
	approximation = Math.floor(rd / 365.246822206) + 1;
	
	// console.log("HebrewDate.calcComponents: approx is " + approximation);
	
	// search forward from approximation-1 for the year that actually contains this rd
	year = approximation;
	thisNewYear = ilib.Cal.Hebrew.newYear(year-1);
	nextNewYear = ilib.Cal.Hebrew.newYear(year);
	while (rd >= nextNewYear) {
		year++;
		thisNewYear = nextNewYear;
		nextNewYear = ilib.Cal.Hebrew.newYear(year);
	}
	ret.year = year-1;
	
	// console.log("HebrewDate.calcComponents: year is " + ret.year + " with starting rd " + thisNewYear);
	
	remainder = rd - thisNewYear;
	// console.log("HebrewDate.calcComponents: remainder is " + remainder);

	// take out new years corrections so we get the right month when we look it up in the table
	if (remainder >= 59) {
		if (remainder >= 88) {
			if (ilib.Cal.Hebrew.longKislev(ret.year)) {
				remainder--;
			}
		}
		if (ilib.Cal.Hebrew.longHeshvan(ret.year)) {
			remainder--;
		}
	}
	
	// console.log("HebrewDate.calcComponents: after new years corrections, remainder is " + remainder);
	
	table = this.cal.isLeapYear(ret.year) ? 
			ilib.Date.HebrewDate.cumMonthLengthsLeapReverse :
			ilib.Date.HebrewDate.cumMonthLengthsReverse;
	
	i = 0;
	target = Math.floor(remainder);
	while (i+1 < table.length && target >= table[i+1][0]) {
		i++;
	}
	
	ret.month = table[i][1];
	// console.log("HebrewDate.calcComponents: remainder is " + remainder);
	remainder -= table[i][0];
	
	// console.log("HebrewDate.calcComponents: month is " + ret.month + " and remainder is " + remainder);
	
	ret.day = Math.floor(remainder);
	remainder -= ret.day;
	ret.day++; // days are 1-based
	
	// console.log("HebrewDate.calcComponents: day is " + ret.day + " and remainder is " + remainder);

	// now convert to milliseconds for the rest of the calculation
	remainder = Math.round(remainder * 86400000);
	
	ret.hour = Math.floor(remainder/3600000);
	remainder -= ret.hour * 3600000;
	
	// the hours from 0 to 6 are actually 18:00 to midnight of the previous
	// gregorian day, so we have to adjust for that
	if (ret.hour >= 6) {
		ret.hour -= 6;
	} else {
		ret.hour += 18;
	}
		
	ret.minute = Math.floor(remainder/60000);
	remainder -= ret.minute * 60000;
	
	ret.second = Math.floor(remainder/1000);
	remainder -= ret.second * 1000;
	
	ret.millisecond = remainder;
	
	// console.log("HebrewDate.calcComponent: final result is " + JSON.stringify(ret));
	return ret;
};

/**
 * @private
 * Set the date components of this instance based on the given rd.
 * @param {number} rd the rata die date to set
 */
ilib.Date.HebrewDate.prototype.setRd = function (rd) {
	var fields = this.calcComponents(rd);
	
	this.year = fields.year;
	this.month = fields.month;
	this.day = fields.day;
	this.hour = fields.hour;
	this.minute = fields.minute;
	this.second = fields.second;
	this.millisecond = fields.millisecond;
};

/**
 * Set the date of this instance using a Julian Day.
 * @param {number} date the Julian Day to use to set this date
 */
ilib.Date.HebrewDate.prototype.setJulianDay = function (date) {
	var jd = (typeof(date) === 'number') ? new ilib.JulianDay(date) : date,
		rd;	// rata die -- # of days since the beginning of the calendar
	
	rd = jd.getDate() - ilib.Date.HebrewDate.epoch; 	// Julian Days start at noon
	this.setRd(rd);
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @return {number} the day of the week
 */
ilib.Date.HebrewDate.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.getRataDie());
	return ilib.mod(rd+1, 7);
};

/**
 * Get the Halaqim (parts) of an hour. There are 1080 parts in an hour, which means
 * each part is 3.33333333 seconds long. This means the number returned may not
 * be an integer.
 * 
 * @return {number} the halaqim parts of the current hour
 */
ilib.Date.HebrewDate.prototype.getHalaqim = function() {
	if (this.parts < 0) {
		// convert to ms first, then to parts
		var h = this.minute * 60000 + this.second * 1000 + this.millisecond;
		this.parts = (h * 0.0003);
	}
	return this.parts;
};

/**
 * @private
 * Return the rd of the particular day of the week on or before the given rd.
 * eg. The Sunday on or before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 */
ilib.Date.HebrewDate.prototype.onOrBeforeRd = function(rd, dayOfWeek) {
	return rd - ilib.mod(Math.floor(rd) - dayOfWeek + 1, 7);
};

/**
 * @private
 * Return the rd of the particular day of the week on or before the given rd.
 * eg. The Sunday on or before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 */
ilib.Date.HebrewDate.prototype.onOrAfterRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd+6, dayOfWeek);
};

/**
 * @private
 * Return the rd of the particular day of the week before the given rd.
 * eg. The Sunday before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 */
ilib.Date.HebrewDate.prototype.beforeRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd-1, dayOfWeek);
};

/**
 * @private
 * Return the rd of the particular day of the week after the given rd.
 * eg. The Sunday after the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 */
ilib.Date.HebrewDate.prototype.afterRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd+7, dayOfWeek);
};

/**
 * @private
 * Return the rd of the first Sunday of the given ISO year.
 * @return the rd of the first Sunday of the ISO year
 */
ilib.Date.HebrewDate.prototype.firstSunday = function (year) {
	var tishri1 = this.calcRataDie({
		year: year,
		month: 7,
		day: 1,
		hour: 18,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	var firstThu = this.onOrAfterRd(tishri1, 4);
	return this.beforeRd(firstThu, 0);
};

/**
 * Return a new Hebrew date instance that represents the first instance of the 
 * given day of the week before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week before the current date that is being sought
 * @returns {ilib.Date.HebrewDate} the date being sought
 */
ilib.Date.HebrewDate.prototype.before = function (dow) {
	return new ilib.Date.HebrewDate({rd: this.beforeRd(this.getRataDie(), dow)});
};

/**
 * Return a new Hebrew date instance that represents the first instance of the 
 * given day of the week after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week after the current date that is being sought
 * @returns {ilib.Date.HebrewDate} the date being sought
 */
ilib.Date.HebrewDate.prototype.after = function (dow) {
	return new ilib.Date.HebrewDate({rd: this.afterRd(this.getRataDie(), dow)});
};

/**
 * Return a new Hebrew date instance that represents the first instance of the 
 * given day of the week on or before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or before the current date that is being sought
 * @returns {ilib.Date.HebrewDate} the date being sought
 */
ilib.Date.HebrewDate.prototype.onOrBefore = function (dow) {
	return new ilib.Date.HebrewDate({rd: this.onOrBeforeRd(this.getRataDie(), dow)});
};

/**
 * Return a new Hebrew date instance that represents the first instance of the 
 * given day of the week on or after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or after the current date that is being sought
 * @returns {ilib.Date.HebrewDate} the date being sought
 */
ilib.Date.HebrewDate.prototype.onOrAfter = function (dow) {
	return new ilib.Date.HebrewDate({rd: this.onOrAfterRd(this.getRataDie(), dow)});
};

/**
 * Return the week number in the current year for the current date. This is calculated
 * in a similar way to the ISO 8601 week for a Gregorian calendar, but is technically
 * not an actual ISO week number. That means in some years, the week starts in the
 * previous calendar year. The week number ranges from 1 to 55.
 * 
 * @return {number} the week number for the current date
 */
ilib.Date.HebrewDate.prototype.getWeekOfYear = function() {
	var rd = this.getRataDie(),
		yearStart = this.firstSunday(this.year),
		nextYear;
	
	// if we have a Tishri date, it may be in this year or the previous year
	if (rd < yearStart) {
		yearStart = this.firstSunday(this.year-1);
	} else if (this.month == 6 && this.day > 23) {
		// if we have a late Elul date, it may be in this year, or the next year
		nextYear = this.firstSunday(this.year+1);
		if (rd >= nextYear) {
			yearStart = nextYear;
		}
	}
	
	return Math.floor((rd-yearStart)/7) + 1;
};

/**
 * Return the ordinal day of the year. Days are counted from 1 and proceed linearly up to 
 * 385, regardless of months or weeks, etc. That is, Tishri 1st is day 1, and 
 * Elul 29 is 385 for a leap year with a long Heshvan and long Kislev.
 * @return {number} the ordinal day of the year
 */
ilib.Date.HebrewDate.prototype.getDayOfYear = function() {
	var table = this.cal.isLeapYear(this.year) ? 
				ilib.Date.HebrewDate.cumMonthLengthsLeap : 
				ilib.Date.HebrewDate.cumMonthLengths;
	var days = table[this.month-1];
	if ((this.month < 7 || this.month > 8) && ilib.Cal.Hebrew.longHeshvan(this.year)) {
		days++;
	}
	if ((this.month < 7 || this.month > 9) && ilib.Cal.Hebrew.longKislev(this.year)) {
		days++;
	}

	return days + this.day;
};

/**
 * Return the ordinal number of the week within the month. The first week of a month is
 * the first one that contains 4 or more days in that month. If any days precede this
 * first week, they are marked as being in week 0. This function returns values from 0
 * through 6.<p>
 * 
 * The locale is a required parameter because different locales that use the same 
 * Hebrew calendar consider different days of the week to be the beginning of
 * the week. This can affect the week of the month in which some days are located.
 * 
 * @param {ilib.Locale|string} locale the locale or locale spec to use when figuring out 
 * the first day of the week
 * @return {number} the ordinal number of the week within the current month
 */
ilib.Date.HebrewDate.prototype.getWeekOfMonth = function(locale) {
	var li = new ilib.LocaleInfo(locale),
		first = this.calcRataDie({
			year: this.year,
			month: this.month,
			day: 1,
			hour: 18,
			minute: 0,
			second: 0,
			millisecond: 0
		}),
		rd = this.getRataDie(),
		weekStart = this.onOrAfterRd(first, li.getFirstDayOfWeek());
	
	if (weekStart - first > 3) {
		// if the first week has 4 or more days in it of the current month, then consider
		// that week 1. Otherwise, it is week 0. To make it week 1, move the week start
		// one week earlier.
		weekStart -= 7;
	}
	return (rd < weekStart) ? 0 : Math.floor((rd - weekStart) / 7) + 1;
};

/**
 * Return the era for this date as a number. The value for the era for Hebrew 
 * calendars is -1 for "before the Hebrew era" and 1 for "the Hebrew era". 
 * Hebrew era dates are any date after Tishri 1, 1, which is the same as
 * September 7, 3760 BC in the Gregorian calendar. 
 * 
 * @return {number} 1 if this date is in the Hebrew era, -1 if it is before the 
 * Hebrew era 
 */
ilib.Date.HebrewDate.prototype.getEra = function() {
	return (this.year < 1) ? -1 : 1;
};

/**
 * Return the unix time equivalent to this Hebrew date instance. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970 (Gregorian). This method only
 * returns a valid number for dates between midnight, Jan 1, 1970 (Gregorian) and  
 * Jan 19, 2038 at 3:14:07am (Gregorian), when the unix time runs out. If this instance 
 * encodes a date outside of that range, this method will return -1.
 * 
 * @return {number} a number giving the unix time, or -1 if the date is outside the
 * valid unix time range
 */
ilib.Date.HebrewDate.prototype.getTime = function() {
	var jd = this.getJulianDay();
	var unix;

	// not earlier than Jan 1, 1970 (Gregorian)
	// or later than Jan 19, 2038 at 3:14:07am (Gregorian)
	if (jd < 2440587.5 || jd > 2465442.634803241) { 
		return -1;
	}

	// avoid the rounding errors in the floating point math by only using
	// the whole days from the rd, and then calculating the milliseconds directly
	var seconds = Math.floor(jd - 2440587.5) * 86400 +
		this.hour * 3600 + 
		this.minute * 60 +
		this.second;
	var millis = seconds * 1000 + this.millisecond;
	
	return millis;
};

/**
 * Set the time of this instance according to the given unix time. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970.
 * 
 * @param {number} millis the unix time to set this date to in milliseconds 
 */
ilib.Date.HebrewDate.prototype.setTime = function(millis) {
	var jd = 2440587.5 + millis / 86400000;
	this.setJulianDay(jd);
};

/**
 * Return a Javascript Date object that is equivalent to this Hebrew date
 * object.
 * 
 * @return {Date|undefined} a javascript Date object
 */
ilib.Date.HebrewDate.prototype.getJSDate = function() {
	var unix = this.getTime();
	return (unix === -1) ? undefined : new Date(unix); 
};

/**
 * Return the Julian Day equivalent to this calendar date as a number.
 * 
 * @return {number} the julian date equivalent of this date
 */
ilib.Date.HebrewDate.prototype.getJulianDay = function() {
	return this.getRataDie() + ilib.Date.HebrewDate.epoch;
};

/**
 * Return the name of the calendar that governs this date.
 * 
 * @return {string} a string giving the name of the calendar
 */
ilib.Date.HebrewDate.prototype.getCalendar = function() {
	return "hebrew";
};

/**
 * Return the time zone associated with this Hebrew date, or 
 * undefined if none was specified in the constructor.
 * 
 * @return {string|undefined} the name of the time zone for this date instance
 */
ilib.Date.HebrewDate.prototype.getTimeZone = function() {
	return this.timezone;
};

// register with the factory method
ilib.Date._constructors["hebrew"] = ilib.Date.HebrewDate;
/*
 * islamic.js - Represent a Islamic calendar object.
 * 
 * Copyright © 2012, JEDL Software, Inc.
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


/* !depends calendar.js locale.js date.js julianday.js util/utils.js */

/**
 * @class
 * Construct a new Islamic calendar object. This class encodes information about
 * the civil Islamic calendar. The civil Islamic calendar is a tabular islamic 
 * calendar where the dates are calculated by arithmetic rules. This differs from 
 * the religious Islamic calendar which is used to mark the beginning of particular 
 * holidays. The religious calendar depends on the first sighting of the new 
 * crescent moon to determine the first day of the new month. Because humans and 
 * weather are both involved, the actual time of sighting varies, so it is not 
 * really possible to precalculate the religious calendar. Certain groups, such 
 * as the Islamic Society of North America, decreed in in 2007 that they will use
 * a calendar based on calculations rather than observations to determine the 
 * beginning of lunar months, and therefore the dates of holidays.<p>
 * 
 * Depends directive: !depends islamic.js
 * 
 * @constructor
 * @implements ilib.Cal
 */
ilib.Cal.Islamic = function() {
	this.type = "islamic";
};

/**
 * @private
 * @const
 * @type Array.<number>
 * the lengths of each month 
 */
ilib.Cal.Islamic.monthLengths = [
	30,  /* Muharram */
	29,  /* Saffar */
	30,  /* Rabi'I */
	29,  /* Rabi'II */
	30,  /* Jumada I */
	29,  /* Jumada II */
	30,  /* Rajab */
	29,  /* Sha'ban */
	30,  /* Ramadan */
	29,  /* Shawwal */
	30,  /* Dhu al-Qa'da */
	29   /* Dhu al-Hijja */
];


/**
 * Return the number of months in the given year. The number of months in a year varies
 * for luni-solar calendars because in some years, an extra month is needed to extend the 
 * days in a year to an entire solar year. The month is represented as a 1-based number
 * where 1=first month, 2=second month, etc.
 * 
 * @param {number} year a year for which the number of months is sought
 */
ilib.Cal.Islamic.prototype.getNumMonths = function(year) {
	return 12;
};

/**
 * Return the number of days in a particular month in a particular year. This function
 * can return a different number for a month depending on the year because of things
 * like leap years.
 *
 * @param {number} month the month for which the length is sought
 * @param {number} year the year within which that month can be found
 * @returns {number} the number of days within the given month in the given year
 */
ilib.Cal.Islamic.prototype.getMonLength = function(month, year) {
	if (month !== 12) {
		return ilib.Cal.Islamic.monthLengths[month-1];
	} else {
		return this.isLeapYear(year) ? 30 : 29;
	}
};

/**
 * Return true if the given year is a leap year in the Islamic calendar.
 * The year parameter may be given as a number, or as a IslamicDate object.
 * @param {number} year the year for which the leap year information is being sought
 * @returns {boolean} true if the given year is a leap year
 */
ilib.Cal.Islamic.prototype.isLeapYear = function(year) {
	return (ilib.mod((14 + 11 * year), 30) < 11);
};

/**
 * Return the type of this calendar.
 * 
 * @returns {string} the name of the type of this calendar 
 */
ilib.Cal.Islamic.prototype.getType = function() {
	return this.type;
};

/**
 * Return a date instance for this calendar type using the given
 * options.
 * @param {Object} options options controlling the construction of 
 * the date instance
 * @returns {ilib.Date} a date appropriate for this calendar type
 */
ilib.Cal.Islamic.prototype.newDateInstance = function (options) {
	return new ilib.Date.IslamicDate(options);
};

/*register this calendar for the factory method */
ilib.Cal._constructors["islamic"] = ilib.Cal.Islamic;

/*
 * islamicdate.js - Represent a date in the Islamic calendar
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

/* !depends date.js calendar/islamic.js util/utils.js */

/**
 * @class
 * 
 * Construct a new civil Islamic date object. The constructor can be called
 * with a params object that can contain the following properties:<p>
 * 
 * <ul>
 * <li><i>julianday</i> - the Julian Day to set into this date
 * <li><i>year</i> - any integer except 0. Years go from -1 (BCE) to 1 (CE), skipping the zero year
 * <li><i>month</i> - 1 to 12, where 1 means Muharram, 2 means Saffar, etc.
 * <li><i>day</i> - 1 to 30
 * <li><i>hour</i> - 0 to 23. A formatter is used to display 12 hour clocks, but this representation 
 * is always done with an unambiguous 24 hour representation
 * <li><i>minute</i> - 0 to 59
 * <li><i>second</i> - 0 to 59
 * <li><i>millisecond</i> - 0 to 999
 * <li><i>locale</i> - the ilib.TimeZone instance or time zone name as a string 
 * of this julian date. The date/time is kept in the local time. The time zone
 * is used later if this date is formatted according to a different time zone and
 * the difference has to be calculated, or when the date format has a time zone
 * component in it.
 * <li><i>timezone</i> - the time zone of this instance. If the time zone is not 
 * given, it can be inferred from this locale. For locales that span multiple
 * time zones, the one with the largest population is chosen as the one that 
 * represents the locale. 
 * </ul>
 * 
 * If called with another Islamic date argument, the date components of the given
 * date are copied into the current one.<p>
 * 
 * If the constructor is called with no arguments at all or if none of the 
 * properties listed above 
 * from <i>julianday</i> through <i>millisecond</i> are present, then the date 
 * components are 
 * filled in with the current date at the time of instantiation. Note that if
 * you do not give the time zone when defaulting to the current time and the 
 * time zone for all of ilib was not set with <i>ilib.setTimeZone()</i>, then the
 * time zone will default to UTC ("Universal Time, Coordinated" or "Greenwich 
 * Mean Time").<p>
 * 
 * Depends directive: !depends islamicdate.js
 * 
 * @constructor
 * @extends ilib.Date
 * @param {Object=} params parameters that govern the settings and behaviour of this Islamic date
 */
ilib.Date.IslamicDate = function(params) {
	this.cal = new ilib.Cal.Islamic();
	
	if (params) {
		if (params.timezone) {
			this.timezone = params.timezone;
		}
		if (params.locale) {
			this.locale = (typeof(params.locale) === 'string') ? new ilib.Locale(params.locale) : params.locale;
			if (!this.timezone) {
				var li = new ilib.LocaleInfo(this.locale);
				this.timezone = li.getTimeZone(); 
			}
		}

		if (typeof(params.unixtime) != 'undefined') {
			this.setTime(parseInt(params.unixtime, 10));
		} else if (typeof(params.julianday) != 'undefined') {
			this.setJulianDay(parseFloat(params.julianday));
		} else if (params.year || params.month || params.day || params.hour ||
				params.minute || params.second || params.millisecond ) {
			/**
			 * Year in the Islamic calendar.
			 * @type number
			 */
			this.year = parseInt(params.year, 10) || 0;

			/**
			 * The month number, ranging from 1 to 12 (December).
			 * @type number
			 */
			this.month = parseInt(params.month, 10) || 1;

			/**
			 * The day of the month. This ranges from 1 to 30.
			 * @type number
			 */
			this.day = parseInt(params.day, 10) || 1;
			
			/**
			 * The hour of the day. This can be a number from 0 to 23, as times are
			 * stored unambiguously in the 24-hour clock.
			 * @type number
			 */
			this.hour = parseInt(params.hour, 10) || 0;

			/**
			 * The minute of the hours. Ranges from 0 to 59.
			 * @type number
			 */
			this.minute = parseInt(params.minute, 10) || 0;

			/**
			 * The second of the minute. Ranges from 0 to 59.
			 * @type number
			 */
			this.second = parseInt(params.second, 10) || 0;

			/**
			 * The millisecond of the second. Ranges from 0 to 999.
			 * @type number
			 */
			this.millisecond = parseInt(params.millisecond, 10) || 0;
			
			/**
			 * The day of the year. Ranges from 1 to 355.
			 * @type number
			 */
			this.dayOfYear = parseInt(params.dayOfYear, 10);
		} else if (typeof(params.rd) != 'undefined') {
			// private parameter. Do not document this!
			this.setRd(params.rd);
		} else {
			// Date.getTime() gets unix time in UTC
			var now = new Date();
			this.setTime(now.getTime() - now.getTimezoneOffset()*60000);
		}
	} else {
		// Date.getTime() gets unix time in UTC
		var now = new Date();
		this.setTime(now.getTime() - now.getTimezoneOffset()*60000);
	}
};

ilib.Date.IslamicDate.prototype = new ilib.Date();
ilib.Date.IslamicDate.prototype.parent = ilib.Date;
ilib.Date.IslamicDate.prototype.constructor = ilib.Date.IslamicDate;

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month, for a non-leap year 
 */
ilib.Date.IslamicDate.cumMonthLengths = [
	0,  /* Muharram */
	30,  /* Saffar */
	59,  /* Rabi'I */
	89,  /* Rabi'II */
	118,  /* Jumada I */
	148,  /* Jumada II */
	177,  /* Rajab */
	207,  /* Sha'ban */
	236,  /* Ramadan */
	266,  /* Shawwal */
	295,  /* Dhu al-Qa'da */
	325,  /* Dhu al-Hijja */
	354
];

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month, for a leap year 
 */
ilib.Date.IslamicDate.cumMonthLengthsLeap = [
	0,  /* Muharram */
	30,  /* Saffar */
	59,  /* Rabi'I */
	89,  /* Rabi'II */
	118,  /* Jumada I */
	148,  /* Jumada II */
	177,  /* Rajab */
	207,  /* Sha'ban */
	236,  /* Ramadan */
	266,  /* Shawwal */
	295,  /* Dhu al-Qa'da */
	325,  /* Dhu al-Hijja */
	355
];

/**
 * @private
 * @const
 * @type number
 * Number of days difference between RD 0 of the Gregorian calendar and
 * RD 0 of the Islamic calendar. 
 */
ilib.Date.IslamicDate.GregorianDiff = 227015;

/**
 * @private
 * @const
 * @type number
 * The difference between a zero Julian day and the first Islamic date
 * of Friday, July 16, 622 CE Julian. 
 */
ilib.Date.IslamicDate.epoch = 1948439.5;

/**
 * @private
 * Return the Rata Die (fixed day) number of the given date.
 * 
 * @param {Object} date islamic date to calculate
 * @return {number} the rd date as a number
 */
ilib.Date.IslamicDate.prototype.calcRataDie = function(date) {
	var days = (date.year - 1) * 354 +
		Math.ceil(29.5 * (date.month - 1)) +
		date.day +
		Math.floor((3 + 11 * date.year) / 30) - 1;
	var time = (date.hour * 3600000 +
		date.minute * 60000 +
		date.second * 1000 +
		date.millisecond) / 
		86400000; 
	
	//console.log("getRataDie: converting " +  JSON.stringify(date));
	//console.log("getRataDie: days is " +  days);
	//console.log("getRataDie: time is " +  time);
	//console.log("getRataDie: rd is " +  (days + time));
	
	return days + time;
};

/**
 * @private
 * Return the Rata Die (fixed day) number of this date.
 * 
 * @return {number} the rd date as a number
 */
ilib.Date.IslamicDate.prototype.getRataDie = function() {
	return this.calcRataDie(this);
};

/**
 * @private
 * Calculate date components for the given RD date.
 * @return {Object.<{year:number,month:number,day:number,hour:number,minute:number,second:number,millisecond:number}>} object containing the fields
 */
ilib.Date.IslamicDate.prototype.calcComponents = function (rd) {
	var ret = {},
		remainder,
		m;
	
	ret.year = Math.floor((30 * rd + 10646) / 10631);
	
	//console.log("IslamicDate.calcComponent: calculating for rd " + rd);
	//console.log("IslamicDate.calcComponent: year is " + ret.year);
	remainder = rd - this.calcRataDie({
		year: ret.year,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	}) + 1;
	
	ret.dayOfYear = remainder;
	
	//console.log("IslamicDate.calcComponent: remainder is " + remainder);
	
	ret.month = ilib.bsearch(remainder, ilib.Date.IslamicDate.cumMonthLengths);
	remainder -= ilib.Date.IslamicDate.cumMonthLengths[ret.month-1];

	//console.log("IslamicDate.calcComponent: month is " + ret.month + " and remainder is " + remainder);
	
	ret.day = Math.floor(remainder);
	remainder -= ret.day;

	//console.log("IslamicDate.calcComponent: day is " + ret.day + " and remainder is " + remainder);

	// now convert to milliseconds for the rest of the calculation
	remainder = Math.round(remainder * 86400000);
	
	ret.hour = Math.floor(remainder/3600000);
	remainder -= ret.hour * 3600000;
	
	ret.minute = Math.floor(remainder/60000);
	remainder -= ret.minute * 60000;
	
	ret.second = Math.floor(remainder/1000);
	remainder -= ret.second * 1000;
	
	ret.millisecond = remainder;
	
	return ret;
};

/**
 * @private
 * Set the date components of this instance based on the given rd.
 * @param {number} rd the rata die date to set
 */
ilib.Date.IslamicDate.prototype.setRd = function (rd) {
	var fields = this.calcComponents(rd);
	
	this.year = fields.year;
	this.month = fields.month;
	this.day = fields.day;
	this.hour = fields.hour;
	this.minute = fields.minute;
	this.second = fields.second;
	this.millisecond = fields.millisecond;
};

/**
 * Set the date of this instance using a Julian Day.
 * @param {number} date the Julian Day to use to set this date
 */
ilib.Date.IslamicDate.prototype.setJulianDay = function (date) {
	var jd = (typeof(date) === 'number') ? new ilib.JulianDay(date) : date,
		rd;	// rata die -- # of days since the beginning of the calendar
	
	rd = jd.getDate() - ilib.Date.IslamicDate.epoch; 	// Julian Days start at noon
	this.setRd(rd);
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @return {number} the day of the week
 */
ilib.Date.IslamicDate.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.getRataDie());
	return ilib.mod(rd-2, 7);
};


/**
 * @private
 * Return the rd of the particular day of the week on or before the given rd.
 * eg. The Sunday on or before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 */
ilib.Date.IslamicDate.prototype.onOrBeforeRd = function(rd, dayOfWeek) {
	return rd - ilib.mod(Math.floor(rd) - dayOfWeek - 2, 7);
};

/**
 * @private
 * Return the rd of the particular day of the week on or before the given rd.
 * eg. The Sunday on or before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 */
ilib.Date.IslamicDate.prototype.onOrAfterRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd+6, dayOfWeek);
};

/**
 * @private
 * Return the rd of the particular day of the week before the given rd.
 * eg. The Sunday before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 */
ilib.Date.IslamicDate.prototype.beforeRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd-1, dayOfWeek);
};

/**
 * @private
 * Return the rd of the particular day of the week after the given rd.
 * eg. The Sunday after the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 */
ilib.Date.IslamicDate.prototype.afterRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd+7, dayOfWeek);
};

/**
 * @private
 * Return the rd of the first Sunday of the given ISO year.
 * @return the rd of the first Sunday of the ISO year
 */
ilib.Date.IslamicDate.prototype.firstSunday = function (year) {
	var jan1 = this.calcRataDie({
		year: year,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	var firstThu = this.onOrAfterRd(jan1, 4);
	return this.beforeRd(firstThu, 0);
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week before the current date that is being sought
 * @returns {ilib.Date.IslamicDate} the date being sought
 */
ilib.Date.IslamicDate.prototype.before = function (dow) {
	return new ilib.Date.IslamicDate({rd: this.beforeRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week after the current date that is being sought
 * @returns {ilib.Date.IslamicDate} the date being sought
 */
ilib.Date.IslamicDate.prototype.after = function (dow) {
	return new ilib.Date.IslamicDate({rd: this.afterRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week on or before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or before the current date that is being sought
 * @returns {ilib.Date.IslamicDate} the date being sought
 */
ilib.Date.IslamicDate.prototype.onOrBefore = function (dow) {
	return new ilib.Date.IslamicDate({rd: this.onOrBeforeRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week on or after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or after the current date that is being sought
 * @returns {ilib.Date.IslamicDate} the date being sought
 */
ilib.Date.IslamicDate.prototype.onOrAfter = function (dow) {
	return new ilib.Date.IslamicDate({rd: this.onOrAfterRd(this.getRataDie(), dow)});
};

/**
 * Return the week number in the current year for the current date. This is calculated
 * similar to the ISO 8601 for a Gregorian calendar, but is not an ISO week number. 
 * The week number ranges from 1 to 51.
 * 
 * @return {number} the week number for the current date
 */
ilib.Date.IslamicDate.prototype.getWeekOfYear = function() {
	var rd = Math.floor(this.getRataDie()),
		yearStart = this.firstSunday(this.year),
		nextYear;
	
	// if we have a Muh date, it may be in this year or the previous year
	if (rd < yearStart) {
		yearStart = this.firstSunday(this.year-1);
	} else if (this.month == 12 && this.day > 25) {
		// if we have a late Dhu al'Hijja date, it may be in this year, or the next year
		nextYear = this.firstSunday(this.year+1);
		if (rd >= nextYear) {
			yearStart = nextYear;
		}
	}
	
	return Math.floor((rd-yearStart)/7) + 1;
};

/**
 * Return the ordinal day of the year. Days are counted from 1 and proceed linearly up to 
 * 354 or 355, regardless of months or weeks, etc. That is, Muharran 1st is day 1, and 
 * Dhu al-Hijja 29 is 354.
 * @return {number} the ordinal day of the year
 */
ilib.Date.IslamicDate.prototype.getDayOfYear = function() {
	return ilib.Date.IslamicDate.cumMonthLengths[this.month-1] + this.day;
};

/**
 * Return the ordinal number of the week within the month. The first week of a month is
 * the first one that contains 4 or more days in that month. If any days precede this
 * first week, they are marked as being in week 0. This function returns values from 0
 * through 6.<p>
 * 
 * The locale is a required parameter because different locales that use the same 
 * Islamic calendar consider different days of the week to be the beginning of
 * the week. This can affect the week of the month in which some days are located.
 * 
 * @param {ilib.Locale|string} locale the locale or locale spec to use when figuring out 
 * the first day of the week
 * @return {number} the ordinal number of the week within the current month
 */
ilib.Date.IslamicDate.prototype.getWeekOfMonth = function(locale) {
	var li = new ilib.LocaleInfo(locale),
		first = this.calcRataDie({
			year: this.year,
			month: this.month,
			day: 1,
			hour: 0,
			minute: 0,
			second: 0,
			millisecond: 0
		}),
		rd = this.getRataDie(),
		weekStart = this.onOrAfterRd(first, li.getFirstDayOfWeek());
	if (weekStart - first > 3) {
		// if the first week has 4 or more days in it of the current month, then consider
		// that week 1. Otherwise, it is week 0. To make it week 1, move the week start
		// one week earlier.
		weekStart -= 7;
	}
	return Math.floor((rd - weekStart) / 7) + 1;
};

/**
 * Return the era for this date as a number. The value for the era for Islamic 
 * calendars is -1 for "before the Islamic era" and 1 for "the Islamic era". 
 * Islamic era dates are any date after Muharran 1, 1, which is the same as
 * July 16, 622 CE in the Gregorian calendar. 
 * 
 * @return {number} 1 if this date is in the common era, -1 if it is before the 
 * common era 
 */
ilib.Date.IslamicDate.prototype.getEra = function() {
	return (this.year < 1) ? -1 : 1;
};

/**
 * Return the unix time equivalent to this Islamic date instance. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970 Gregorian. This method only
 * returns a valid number for dates between midnight, Jan 1, 1970 and  
 * Jan 19, 2038 at 3:14:07am when the unix time runs out. If this instance 
 * encodes a date outside of that range, this method will return -1.
 * 
 * @return {number} a number giving the unix time, or -1 if the date is outside the
 * valid unix time range
 */
ilib.Date.IslamicDate.prototype.getTime = function() {
	var rd = this.calcRataDie({
		year: this.year,
		month: this.month,
		day: this.day,
		hour: this.hour,
		minute: this.minute,
		second: this.second,
		millisecond: 0
	});
	var unix;

	// earlier than Jan 1, 1970
	// or later than Jan 19, 2038 at 3:14:07am
	if (rd < 492148 || rd > 517003.134803241) { 
		return -1;
	}

	// avoid the rounding errors in the floating point math by only using
	// the whole days from the rd, and then calculating the milliseconds directly
	var seconds = Math.floor(rd - 492148) * 86400 + 
		this.hour * 3600 +
		this.minute * 60 +
		this.second;
	var millis = seconds * 1000 + this.millisecond;
	
	return millis;
};

/**
 * Set the time of this instance according to the given unix time. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970.
 * 
 * @param {number} millis the unix time to set this date to in milliseconds 
 */
ilib.Date.IslamicDate.prototype.setTime = function(millis) {
	var rd = 492148 + millis / 86400000;
	this.setRd(rd);
};

/**
 * Return a Javascript Date object that is equivalent to this Islamic date
 * object.
 * 
 * @return {Date|undefined} a javascript Date object
 */
ilib.Date.IslamicDate.prototype.getJSDate = function() {
	var unix = this.getTime();
	return (unix === -1) ? undefined : new Date(unix); 
};

/**
 * Return the Julian Day equivalent to this calendar date as a number.
 * 
 * @return {number} the julian date equivalent of this date
 */
ilib.Date.IslamicDate.prototype.getJulianDay = function() {
	return this.getRataDie() + ilib.Date.IslamicDate.epoch;
};

/**
 * Return the name of the calendar that governs this date.
 * 
 * @return {string} a string giving the name of the calendar
 */
ilib.Date.IslamicDate.prototype.getCalendar = function() {
	return "islamic";
};

/**
 * Return the time zone associated with this Islamic date, or 
 * undefined if none was specified in the constructor.
 * 
 * @return {string|undefined} the name of the time zone for this date instance
 */
ilib.Date.IslamicDate.prototype.getTimeZone = function() {
	return this.timezone;
};

//register with the factory method
ilib.Date._constructors["islamic"] = ilib.Date.IslamicDate;
/*
 * julian.js - Represent a Julian calendar object.
 * 
 * Copyright © 2012, JEDL Software, Inc.
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


/* !depends calendar.js locale.js date.js julianday.js util/utils.js */

/**
 * @class
 * Construct a new Julian calendar object. This class encodes information about
 * a Julian calendar.<p>
 * 
 * Depends directive: !depends julian.js
 * 
 * @constructor
 * @implements ilib.Cal
 */
ilib.Cal.Julian = function() {
	this.type = "julian";
};

/* the lengths of each month */
ilib.Cal.Julian.monthLengths = [
	31,  /* Jan */
	28,  /* Feb */
	31,  /* Mar */
	30,  /* Apr */
	31,  /* May */
	30,  /* Jun */
	31,  /* Jul */
	31,  /* Aug */
	30,  /* Sep */
	31,  /* Oct */
	30,  /* Nov */
	31   /* Dec */
];

/**
 * Return the number of months in the given year. The number of months in a year varies
 * for lunar calendars because in some years, an extra month is needed to extend the 
 * days in a year to an entire solar year. The month is represented as a 1-based number
 * where 1=Jaunary, 2=February, etc. until 12=December.
 * 
 * @param {number} year a year for which the number of months is sought
 */
ilib.Cal.Julian.prototype.getNumMonths = function(year) {
	return 12;
};

/**
 * Return the number of days in a particular month in a particular year. This function
 * can return a different number for a month depending on the year because of things
 * like leap years.
 * 
 * @param {number} month the month for which the length is sought
 * @param {number} year the year within which that month can be found
 * @returns {number} the number of days within the given month in the given year
 */
ilib.Cal.Julian.prototype.getMonLength = function(month, year) {
	if (month !== 2 || !this.isLeapYear(year)) {
		return ilib.Cal.Julian.monthLengths[month-1];
	} else {
		return 29;
	}
};

/**
 * Return true if the given year is a leap year in the Julian calendar.
 * The year parameter may be given as a number, or as a JulDate object.
 * @param {number|ilib.Date.JulDate} year the year for which the leap year information is being sought
 * @returns {boolean} true if the given year is a leap year
 */
ilib.Cal.Julian.prototype.isLeapYear = function(year) {
	var y = (typeof(year) === 'number' ? year : year.year);
	return ilib.mod(y, 4) === ((year > 0) ? 0 : 3);
};

/**
 * Return the type of this calendar.
 * 
 * @returns {string} the name of the type of this calendar 
 */
ilib.Cal.Julian.prototype.getType = function() {
	return this.type;
};

/**
 * Return a date instance for this calendar type using the given
 * options.
 * @param {Object} options options controlling the construction of 
 * the date instance
 * @returns {ilib.Date} a date appropriate for this calendar type
 */
ilib.Cal.Julian.prototype.newDateInstance = function (options) {
	return new ilib.Date.JulDate(options);
};

/* register this calendar for the factory method */
ilib.Cal._constructors["julian"] = ilib.Cal.Julian;
/*
 * juliandate.js - Represent a date in the Julian calendar
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

/* !depends date.js calendar/julian.js util/utils.js localeinfo.js julianday.js */

/**
 * @class
 * 
 * Construct a new date object for the Julian Calendar. The constructor can be called
 * with a parameter object that contains any of the following properties:
 * 
 * <ul>
 * <li><i>unixtime<i> - sets the time of this instance according to the given 
 * unix time. Unix time is the number of milliseconds since midnight on Jan 1, 1970 (Gregorian).
 * <li><i>julianday</i> - the Julian Day to set into this date
 * <li><i>year</i> - any integer except 0. Years go from -1 (BCE) to 1 (CE), skipping the zero 
 * year which doesn't exist in the Julian calendar
 * <li><i>month</i> - 1 to 12, where 1 means January, 2 means February, etc.
 * <li><i>day</i> - 1 to 31
 * <li><i>hour</i> - 0 to 23. A formatter is used to display 12 hour clocks, but this representation 
 * is always done with an unambiguous 24 hour representation
 * <li><i>minute</i> - 0 to 59
 * <li><i>second</i> - 0 to 59
 * <li><i>millisecond<i> - 0 to 999
 * <li><i>locale</i> - the ilib.TimeZone instance or time zone name as a string 
 * of this julian date. The date/time is kept in the local time. The time zone
 * is used later if this date is formatted according to a different time zone and
 * the difference has to be calculated, or when the date format has a time zone
 * component in it.
 * <li><i>timezone</i> - the time zone of this instance. If the time zone is not 
 * given, it can be inferred from this locale. For locales that span multiple
 * time zones, the one with the largest population is chosen as the one that 
 * represents the locale. 
 * </ul>
 * 
 * NB. The <a href="http://en.wikipedia.org/wiki/Julian_date">Julian Day</a> 
 * (ilib.JulianDay) object is a <i>different</i> object than a 
 * <a href="http://en.wikipedia.org/wiki/Julian_calendar">date in
 * the Julian calendar</a> and the two are not to be confused. The Julian Day 
 * object represents time as a number of whole and fractional days since the 
 * beginning of the epoch, whereas a date in the Julian 
 * calendar is a regular date that signifies year, month, day, etc. using the rules
 * of the Julian calendar. The naming of Julian Days and the Julian calendar are
 * unfortunately close, and come from history.<p>
 *  
 * If called with another Julian date argument, the date components of the given
 * date are copied into the current one.<p>
 * 
 * If the constructor is called with no arguments at all or if none of the 
 * properties listed above 
 * from <i>unixtime</i> through <i>millisecond</i> are present, then the date 
 * components are 
 * filled in with the current date at the time of instantiation. Note that if
 * you do not give the time zone when defaulting to the current time and the 
 * time zone for all of ilib was not set with <i>ilib.setTimeZone()</i>, then the
 * time zone will default to UTC ("Universal Time, Coordinated" or "Greenwich 
 * Mean Time").<p>
 * 
 * Depends directive: !depends juliandate.js
 * 
 * @constructor
 * @extends ilib.Date
 * @param {Object=} params parameters that govern the settings and behaviour of this Julian date
 */
ilib.Date.JulDate = function(params) {
	this.cal = new ilib.Cal.Julian();
	
	if (params) {
		if (params.timezone) {
			this.timezone = params.timezone;
		}
		if (params.locale) {
			this.locale = (typeof(params.locale) === 'string') ? new ilib.Locale(params.locale) : params.locale;
			if (!this.timezone) {
				var li = new ilib.LocaleInfo(this.locale);
				this.timezone = li.getTimeZone(); 
			}
		}

		if (typeof(params.unixtime) != 'undefined') {
			this.setTime(parseInt(params.unixtime, 10));
		} else if (typeof(params.julianday) != 'undefined') {
			this.setJulianDay(parseFloat(params.julianday));
		} else if (params.year || params.month || params.day || params.hour ||
				params.minute || params.second || params.millisecond ) {
			/**
			 * Year in the Julian calendar.
			 * @type number
			 */
			this.year = parseInt(params.year, 10) || 0;
			/**
			 * The month number, ranging from 1 (January) to 12 (December).
			 * @type number
			 */
			this.month = parseInt(params.month, 10) || 1;
			/**
			 * The day of the month. This ranges from 1 to 31.
			 * @type number
			 */
			this.day = parseInt(params.day, 10) || 1;
			/**
			 * The hour of the day. This can be a number from 0 to 23, as times are
			 * stored unambiguously in the 24-hour clock.
			 * @type number
			 */
			this.hour = parseInt(params.hour, 10) || 0;
			/**
			 * The minute of the hours. Ranges from 0 to 59.
			 * @type number
			 */
			this.minute = parseInt(params.minute, 10) || 0;
			/**
			 * The second of the minute. Ranges from 0 to 59.
			 * @type number
			 */
			this.second = parseInt(params.second, 10) || 0;
			/**
			 * The millisecond of the second. Ranges from 0 to 999.
			 * @type number
			 */
			this.millisecond = parseInt(params.millisecond, 10) || 0;
		} else if (typeof(params.rd) != 'undefined') {
			// private parameter. Do not document this!
			this.setRd(params.rd);
		} else {
			// Date.getTime() gets unix time in UTC
			var now = new Date();
			this.setTime(now.getTime() - now.getTimezoneOffset()*60000);
		}
	} else {
		// Date.getTime() gets unix time in UTC
		var now = new Date();
		this.setTime(now.getTime() - now.getTimezoneOffset()*60000);
	}
};

ilib.Date.JulDate.prototype = new ilib.Date();
ilib.Date.JulDate.prototype.parent = ilib.Date;
ilib.Date.JulDate.prototype.constructor = ilib.Date.JulDate;

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month, for a non-leap year 
 */
ilib.Date.JulDate.cumMonthLengths = [
    0,   /* Jan */
	31,  /* Feb */
	59,  /* Mar */
	90,  /* Apr */
	120, /* May */
	151, /* Jun */
	181, /* Jul */
	212, /* Aug */
	243, /* Sep */
	273, /* Oct */
	304, /* Nov */
	334, /* Dec */
	365
];

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month, for a leap year 
 */
ilib.Date.JulDate.cumMonthLengthsLeap = [
	0,   /* Jan */
	31,  /* Feb */
	60,  /* Mar */
	91,  /* Apr */
	121, /* May */
	152, /* Jun */
	182, /* Jul */
	213, /* Aug */
	244, /* Sep */
	274, /* Oct */
	305, /* Nov */
	335, /* Dec */
	366
];

/**
 * @private
 * @const
 * @type number
 * the difference between a zero Julian day and the first Julian date. */
ilib.Date.JulDate.epoch = 1721422.5;

/**
 * @private
 * Return the Rata Die (fixed day) number for the given date.
 * @param {Object} parts the parts to calculate with
 * @return {number} the rd date as a number
 */
ilib.Date.JulDate.prototype.calcRataDie = function(parts) {
	var year = parts.year + ((parts.year < 0) ? 1 : 0);
	var years = 365 * (year - 1) + Math.floor((year-1)/4);
	var dayInYear = (parts.month > 1 ? ilib.Date.JulDate.cumMonthLengths[parts.month-1] : 0) +
	parts.day +
		(this.cal.isLeapYear(parts.year) && parts.month > 2 ? 1 : 0);
	var rdtime = (parts.hour * 3600000 +
		parts.minute * 60000 +
		parts.second * 1000 +
		parts.millisecond) / 
		86400000;
	// the arithmetic is not more accurage than this, so just round it to make nice numbers
	rdtime = Math.round(rdtime*10000000)/10000000; 
	
	/*
	console.log("calcRataDie: converting " +  JSON.stringify(parts));
	console.log("getRataDie: year is " +  years);
	console.log("getRataDie: day in year is " +  dayInYear);
	console.log("getRataDie: rdtime is " +  rdtime);
	console.log("getRataDie: rd is " +  (years + dayInYear + rdtime));
	*/
	
	return years + dayInYear + rdtime;
};

/**
 * @private
 * Return the Rata Die (fixed day) number of this date.
 * 
 * @returns {number} the rd date as a number
 */
ilib.Date.JulDate.prototype.getRataDie = function() {
	return this.calcRataDie(this);
};

/**
 * @private
 * Calculate date components for the given RD date.
 * @param {number} rd the RD date to calculate components for
 * @returns {Object} object containing the component fields
 */
ilib.Date.JulDate.prototype.calcComponents = function (rd) {
	var jd,
		year,
		remainder,
		cumulative,
		ret = {};
	
	year = Math.floor((4*(rd-1) + 1464)/1461);
	
	ret.year = (year <= 0) ? year - 1 : year;
	
	remainder = rd + 1 - this.calcRataDie({
		year: ret.year,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	
	cumulative = this.cal.isLeapYear(ret.year) ? 
		ilib.Date.JulDate.cumMonthLengthsLeap : 
		ilib.Date.JulDate.cumMonthLengths; 
	
	ret.month = ilib.bsearch(remainder, cumulative);
	remainder = remainder - cumulative[ret.month-1];
	
	ret.day = Math.floor(remainder);
	remainder -= ret.day;
	// now convert to milliseconds for the rest of the calculation
	remainder = Math.round(remainder * 86400000);
	
	ret.hour = Math.floor(remainder/3600000);
	remainder -= ret.hour * 3600000;
	
	ret.minute = Math.floor(remainder/60000);
	remainder -= ret.minute * 60000;
	
	ret.second = Math.floor(remainder/1000);
	remainder -= ret.second * 1000;
	
	ret.millisecond = remainder;
	
	return ret;
};

/**
 * @private
 * Set the date components of this instance based on the given rd.
 * @param {number} rd the rata die date to set
 */
ilib.Date.JulDate.prototype.setRd = function (rd) {
	var fields = this.calcComponents(rd);
	
	this.year = fields.year;
	this.month = fields.month;
	this.day = fields.day;
	this.hour = fields.hour;
	this.minute = fields.minute;
	this.second = fields.second;
	this.millisecond = fields.millisecond;
};

/**
 * Set the date of this instance using a Julian Day.
 * @param {number} date the Julian Day to use to set this date
 */
ilib.Date.JulDate.prototype.setJulianDay = function (date) {
	var jd = (typeof(date) === 'number') ? new ilib.JulianDay(date) : date,
		rd;	// rata die -- # of days since the beginning of the calendar
	
	rd = jd.getDate() - ilib.Date.JulDate.epoch; 	// Julian Days start at noon
	this.setRd(rd);
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @returns {number} the day of the week
 */
ilib.Date.JulDate.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.getRataDie());
	return ilib.mod(rd-2, 7);
};

/**
 * @private
 * Return the rd of the particular day of the week on or before the given rd.
 * eg. The Sunday on or before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @returns {number} the day of the week
 */
ilib.Date.JulDate.prototype.onOrBeforeRd = function(rd, dayOfWeek) {
	return rd - ilib.mod(Math.floor(rd) - dayOfWeek - 2, 7);
};

/**
 * @private
 * Return the rd of the particular day of the week on or before the given rd.
 * eg. The Sunday on or before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @returns {number} the day of the week
 */
ilib.Date.JulDate.prototype.onOrAfterRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd+6, dayOfWeek);
};

/**
 * @private
 * Return the rd of the particular day of the week before the given rd.
 * eg. The Sunday before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @returns {number} the day of the week
 */
ilib.Date.JulDate.prototype.beforeRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd-1, dayOfWeek);
};

/**
 * @private
 * Return the rd of the particular day of the week after the given rd.
 * eg. The Sunday after the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @returns {number} the day of the week
 */
ilib.Date.JulDate.prototype.afterRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd+7, dayOfWeek);
};

/**
 * @private
 * Return the rd of the first Sunday of the given ISO year.
 * @param {number} year the year for which the first Sunday is being sought
 * @returns the rd of the first Sunday of the ISO year
 */
ilib.Date.JulDate.prototype.firstSunday = function (year) {
	var jan1 = this.calcRataDie({
		year: year,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	var firstThu = this.onOrAfterRd(jan1, 4);
	return this.beforeRd(firstThu, 0);
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week before the current date that is being sought
 * @returns {ilib.Date.JulDate} the date being sought
 */
ilib.Date.JulDate.prototype.before = function (dow) {
	return new ilib.Date.JulDate({rd: this.beforeRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week after the current date that is being sought
 * @returns {ilib.Date.JulDate} the date being sought
 */
ilib.Date.JulDate.prototype.after = function (dow) {
	return new ilib.Date.JulDate({rd: this.afterRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week on or before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or before the current date that is being sought
 * @returns {ilib.Date.JulDate} the date being sought
 */
ilib.Date.JulDate.prototype.onOrBefore = function (dow) {
	return new ilib.Date.JulDate({rd: this.onOrBeforeRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week on or after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or after the current date that is being sought
 * @returns {ilib.Date.JulDate} the date being sought
 */
ilib.Date.JulDate.prototype.onOrAfter = function (dow) {
	return new ilib.Date.JulDate({rd: this.onOrAfterRd(this.getRataDie(), dow)});
};

/**
 * Return the unix time equivalent to this Julian date instance. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970. This method only
 * returns a valid number for dates between midnight, Jan 1, 1970 and  
 * Jan 19, 2038 at 3:14:07am when the unix time runs out. If this instance 
 * encodes a date outside of that range, this method will return -1.
 * 
 * @returns {number} a number giving the unix time, or -1 if the date is outside the
 * valid unix time range
 */
ilib.Date.JulDate.prototype.getTime = function() {
	var rd = this.calcRataDie({
		year: this.year,
		month: this.month,
		day: this.day,
		hour: this.hour,
		minute: this.minute,
		second: this.second,
		millisecond: 0
	});
	var unix;

	// earlier than Jan 1, 1970
	// or later than Jan 19, 2038 at 3:14:07am
	if (rd < 719165 || rd > 744020.134803241) { 
		return -1;
	}

	// avoid the rounding errors in the floating point math by only using
	// the whole days from the rd, and then calculating the milliseconds directly
	var seconds = Math.floor(rd - 719165) * 86400 + 
		this.hour * 3600 +
		this.minute * 60 +
		this.second;
	var millis = seconds * 1000 + this.millisecond;
	
	return millis;
};

/**
 * Set the time of this instance according to the given unix time. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970.
 * 
 * @param {number} millis the unix time to set this date to in milliseconds 
 */
ilib.Date.JulDate.prototype.setTime = function(millis) {
	var rd = 719165 + millis / 86400000;
	this.setRd(rd);
};

/**
 * Return a Javascript Date object that is equivalent to this Julian date
 * object. If the julian date object represents a date that cannot be represented
 * by a Javascript Date object, the value undefined is returned
 * 
 * @returns {Date|undefined} a javascript Date object, or undefined if the date is out of range
 */
ilib.Date.JulDate.prototype.getJSDate = function() {
	var unix = this.getTime();
	return (unix === -1) ? undefined : new Date(unix); 
};

/**
 * Return the Julian Day equivalent to this calendar date as a number.
 * 
 * @return {number} the julian date equivalent of this date
 */
ilib.Date.JulDate.prototype.getJulianDay = function() {
	return this.getRataDie() + ilib.Date.JulDate.epoch;
};

/**
 * Return the name of the calendar that governs this date.
 * 
 * @return {string} a string giving the name of the calendar
 */
ilib.Date.JulDate.prototype.getCalendar = function() {
	return "julian";
};

/**
 * Return the time zone associated with this Julian date, or 
 * undefined if none was specified in the constructor.
 * 
 * @return {string|undefined} the name of the time zone for this date instance
 */
ilib.Date.JulDate.prototype.getTimeZone = function() {
	return this.timezone;
};

//register with the factory method
ilib.Date._constructors["julian"] = ilib.Date.JulDate;
ilib.data.ctype = {
	"ideograph": [
		[4352,4607],
		[12353,12447],
		[12449,12543],
		[12549,12589],
		[12593,12686],
		[12704,12727],
		[12784,12799],
		[13312,19893],
		[19968,40907],
		[40960,42124],
		[43360,43388],
		[44032,55203],
		[55216,55291],
		[63744,64217],
		[65382,65437],
		[65440,65500]
	],
	
	"ideoother": [
		[12294,12294],
		[12348,12348],
		[12352,12352],
		[12448,12448],
		[12544,12548],
		[12590,12591],
		[12592,12592],
		[12687,12687],
		[12800,13055],
		[13056,13183],
		[13184,13311],
		[40908,40959],
		[42125,42191],
		[43389,43391],
		[55292,55295],
		[64218,64255]
	],

	"ascii": [
		[32, 127]
	],

	"digit": [ 
	    [48, 57]
	],
	
	"xdigit": [ 
	    [48, 57],
	    [65, 70],
	    [97, 102]
	],
	
	"blank": [ 
  	    [9, 9],
	    [32, 32]
	],
	
	"space": [
  		[9, 13],
		[133],
		[8232, 8233]
	],
	

    "latin": [
        [
            0,
            591
        ],
        [
            7680,
            7935
        ],
        [
            11360,
            11391
        ],
        [
            42784,
            43007
        ]
    ],
    "ipa": [
        [
            592,
            687
        ],
        [
            7424,
            7551
        ],
        [
            7552,
            7615
        ]
    ],
    "operators": [
        [
            8704,
            8959
        ],
        [
            10752,
            11007
        ]
    ],
    "greek": [
        [
            880,
            1023
        ],
        [
            7936,
            8191
        ]
    ],
    "cyrillic": [
        [
            1024,
            1327
        ],
        [
            11744,
            11775
        ],
        [
            42560,
            42655
        ]
    ],
    "arabic": [
        [
            1536,
            1791
        ],
        [
            1872,
            1919
        ],
        [
            64336,
            65023
        ],
        [
            65136,
            65279
        ]
    ],
    "devanagari": [
        [
            2304,
            2431
        ],
        [
            43232,
            43263
        ]
    ],
    "myanmar": [
        [
            4096,
            4255
        ],
        [
            43616,
            43647
        ]
    ],
    "hangul": [
        [
            4352,
            4607
        ],
        [
            44032,
            55215
        ],
        [
            43360,
            43391
        ],
        [
            55216,
            55295
        ],
        [
            12592,
            12687
        ]
    ],
    "ethiopic": [
        [
            4608,
            5023
        ],
        [
            11648,
            11743
        ],
        [
            43776,
            43823
        ]
    ],
    "canadian": [
        [
            5120,
            5759
        ],
        [
            6320,
            6399
        ]
    ],
    "combining": [
        [
            768,
            879
        ],
        [
            7616,
            7679
        ],
        [
            8400,
            8447
        ]
    ],
    "arrows": [
        [
            8592,
            8703
        ],
        [
            11008,
            11263
        ],
        [
            10224,
            10239
        ],
        [
            10496,
            10623
        ]
    ],
    "cjk": [
        [
            19968,
            40959
        ],
        [
            13312,
            19903
        ],
        [
            131072,
            173791
        ],
        [
            173824,
            177983
        ],
        [
            177984,
            178207
        ],
        [
            12272,
            12287
        ]
    ],
    "cjkcompatibility": [
        [
            13056,
            13311
        ],
        [
            63744,
            64255
        ],
        [
            65072,
            65103
        ],
        [
            194560,
            195103
        ]
    ],
    "mathematical": [
        [
            119808,
            120831
        ],
        [
            10176,
            10223
        ],
        [
            10624,
            10751
        ]
    ],
    "privateuse": [
        [
            57344,
            63743
        ],
        [
            983040,
            1048575
        ],
        [
            1048576,
            1114111
        ]
    ],
    "variations": [
        [
            65024,
            65039
        ],
        [
            917760,
            917999
        ]
    ],
    "bamum": [
        [
            42656,
            42751
        ],
        [
            92160,
            92735
        ]
    ],
    "georgian": [
        [
            4256,
            4351
        ],
        [
            11520,
            11567
        ]
    ],
    "punctuation": [
        [
            8192,
            8303
        ],
        [
            11776,
            11903
        ]
    ],
    "katakana": [
        [
            12448,
            12543
        ],
        [
            12784,
            12799
        ],
        [
            110592,
            110847
        ]
    ],
    "bopomofo": [
        [
            12544,
            12591
        ],
        [
            12704,
            12735
        ]
    ],
    "enclosedalpha": [
        [
            9312,
            9471
        ],
        [
            127232,
            127487
        ]
    ],
    "cjkradicals": [
        [
            11904,
            12031
        ],
        [
            12032,
            12255
        ]
    ],
    "yi": [
        [
            40960,
            42127
        ],
        [
            42128,
            42191
        ]
    ],
    "highsurrogates": [
        [
            55296,
            56191
        ],
        [
            56192,
            56319
        ]
    ],
    "linearb": [
        [
            65536,
            65663
        ],
        [
            65664,
            65791
        ]
    ],
    "enclosedcjk": [
        [
            12800,
            13055
        ],
        [
            127488,
            127743
        ]
    ],
    "spacing": [
        [
            688,
            767
        ]
    ],
    "armenian": [
        [
            1328,
            1423
        ]
    ],
    "hebrew": [
        [
            1424,
            1535
        ]
    ],
    "syriac": [
        [
            1792,
            1871
        ]
    ],
    "thaana": [
        [
            1920,
            1983
        ]
    ],
    "nko": [
        [
            1984,
            2047
        ]
    ],
    "samaritan": [
        [
            2048,
            2111
        ]
    ],
    "mandaic": [
        [
            2112,
            2143
        ]
    ],
    "bengali": [
        [
            2432,
            2559
        ]
    ],
    "gurmukhi": [
        [
            2560,
            2687
        ]
    ],
    "gujarati": [
        [
            2688,
            2815
        ]
    ],
    "oriya": [
        [
            2816,
            2943
        ]
    ],
    "tamil": [
        [
            2944,
            3071
        ]
    ],
    "telugu": [
        [
            3072,
            3199
        ]
    ],
    "kannada": [
        [
            3200,
            3327
        ]
    ],
    "malayalam": [
        [
            3328,
            3455
        ]
    ],
    "sinhala": [
        [
            3456,
            3583
        ]
    ],
    "thai": [
        [
            3584,
            3711
        ]
    ],
    "lao": [
        [
            3712,
            3839
        ]
    ],
    "tibetan": [
        [
            3840,
            4095
        ]
    ],
    "cherokee": [
        [
            5024,
            5119
        ]
    ],
    "ogham": [
        [
            5760,
            5791
        ]
    ],
    "runic": [
        [
            5792,
            5887
        ]
    ],
    "tagalog": [
        [
            5888,
            5919
        ]
    ],
    "hanunoo": [
        [
            5920,
            5951
        ]
    ],
    "buhid": [
        [
            5952,
            5983
        ]
    ],
    "tagbanwa": [
        [
            5984,
            6015
        ]
    ],
    "khmer": [
        [
            6016,
            6143
        ]
    ],
    "mongolian": [
        [
            6144,
            6319
        ]
    ],
    "limbu": [
        [
            6400,
            6479
        ]
    ],
    "taile": [
        [
            6480,
            6527
        ]
    ],
    "newtailue": [
        [
            6528,
            6623
        ]
    ],
    "khmersymbols": [
        [
            6624,
            6655
        ]
    ],
    "buginese": [
        [
            6656,
            6687
        ]
    ],
    "taitham": [
        [
            6688,
            6831
        ]
    ],
    "balinese": [
        [
            6912,
            7039
        ]
    ],
    "sundanese": [
        [
            7040,
            7103
        ]
    ],
    "batak": [
        [
            7104,
            7167
        ]
    ],
    "lepcha": [
        [
            7168,
            7247
        ]
    ],
    "olchiki": [
        [
            7248,
            7295
        ]
    ],
    "vedic": [
        [
            7376,
            7423
        ]
    ],
    "supersub": [
        [
            8304,
            8351
        ]
    ],
    "currency": [
        [
            8352,
            8399
        ]
    ],
    "letterlike": [
        [
            8448,
            8527
        ]
    ],
    "numbers": [
        [
            8528,
            8591
        ]
    ],
    "misc": [
        [
            8960,
            9215
        ]
    ],
    "controlpictures": [
        [
            9216,
            9279
        ]
    ],
    "ocr": [
        [
            9280,
            9311
        ]
    ],
    "box": [
        [
            9472,
            9599
        ]
    ],
    "block": [
        [
            9600,
            9631
        ]
    ],
    "geometric": [
        [
            9632,
            9727
        ]
    ],
    "miscsymbols": [
        [
         	9728,
         	9983
        ],
        [
            127744,
            128511
        ]
    ],
    "dingbats": [
        [
            9984,
            10175
        ]
    ],
    "braille": [
        [
            10240,
            10495
        ]
    ],
    "glagolitic": [
        [
            11264,
            11359
        ]
    ],
    "coptic": [
        [
            11392,
            11519
        ]
    ],
    "tifinagh": [
        [
            11568,
            11647
        ]
    ],
    "cjkpunct": [
        [
            12288,
            12351
        ]
    ],
    "hiragana": [
        [
            12352,
            12447
        ]
    ],
    "kanbun": [
        [
            12688,
            12703
        ]
    ],
    "yijing": [
        [
            19904,
            19967
        ]
    ],
    "cjkstrokes": [
        [
            12736,
            12783
        ]
    ],
    "lisu": [
        [
            42192,
            42239
        ]
    ],
    "vai": [
        [
            42240,
            42559
        ]
    ],
    "modifiertone": [
        [
            42752,
            42783
        ]
    ],
    "sylotinagri": [
        [
            43008,
            43055
        ]
    ],
    "indicnumber": [
        [
            43056,
            43071
        ]
    ],
    "phagspa": [
        [
            43072,
            43135
        ]
    ],
    "saurashtra": [
        [
            43136,
            43231
        ]
    ],
    "kayahli": [
        [
            43264,
            43311
        ]
    ],
    "rejang": [
        [
            43312,
            43359
        ]
    ],
    "javanese": [
        [
            43392,
            43487
        ]
    ],
    "cham": [
        [
            43520,
            43615
        ]
    ],
    "taiviet": [
        [
            43648,
            43743
        ]
    ],
    "meeteimayek": [
        [
            43968,
            44031
        ]
    ],
    "lowsurrogates": [
        [
            56320,
            57343
        ]
    ],
    "presentation": [
        [
            64256,
            64335
        ]
    ],
    "vertical": [
        [
            65040,
            65055
        ]
    ],
    "halfmarks": [
        [
            65056,
            65071
        ]
    ],
    "small": [
        [
            65104,
            65135
        ]
    ],
    "width": [
        [
            65280,
            65519
        ]
    ],
    "specials": [
        [
            65520,
            65535
        ]
    ],
    "aegean": [
        [
            65792,
            65855
        ]
    ],
    "ancient": [
        [
            65936,
            65999
        ]
    ],
    "phaistosdisc": [
        [
            66000,
            66047
        ]
    ],
    "lycian": [
        [
            66176,
            66207
        ]
    ],
    "carian": [
        [
            66208,
            66271
        ]
    ],
    "olditalic": [
        [
            66304,
            66351
        ]
    ],
    "gothic": [
        [
            66352,
            66383
        ]
    ],
    "ugaritic": [
        [
            66432,
            66463
        ]
    ],
    "oldpersian": [
        [
            66464,
            66527
        ]
    ],
    "deseret": [
        [
            66560,
            66639
        ]
    ],
    "shavian": [
        [
            66640,
            66687
        ]
    ],
    "osmanya": [
        [
            66688,
            66735
        ]
    ],
    "cypriot": [
        [
            67584,
            67647
        ]
    ],
    "aramaic": [
        [
            67648,
            67679
        ]
    ],
    "phoenician": [
        [
            67840,
            67871
        ]
    ],
    "lydian": [
        [
            67872,
            67903
        ]
    ],
    "kharoshthi": [
        [
            68096,
            68191
        ]
    ],
    "oldsoutharabian": [
        [
            68192,
            68223
        ]
    ],
    "avestan": [
        [
            68352,
            68415
        ]
    ],
    "parthian": [
        [
            68416,
            68447
        ]
    ],
    "pahlavi": [
        [
            68448,
            68479
        ]
    ],
    "oldturkic": [
        [
            68608,
            68687
        ]
    ],
    "ruminumerals": [
        [
            69216,
            69247
        ]
    ],
    "brahmi": [
        [
            69632,
            69759
        ]
    ],
    "kaithi": [
        [
            69760,
            69839
        ]
    ],
    "cuneiform": [
        [
            73728,
            74751
        ]
    ],
    "cuneiformnumbers": [
        [
            74752,
            74879
        ]
    ],
    "hieroglyphs": [
        [
            77824,
            78895
        ]
    ],
    "byzantine musical": [
        [
            118784,
            119039
        ]
    ],
    "musicalsymbols": [
        [
            119040,
            119295
        ]
    ],
    "taixuanjing": [
        [
            119552,
            119647
        ]
    ],
    "rodnumerals": [
        [
            119648,
            119679
        ]
    ],
    "mahjong": [
        [
            126976,
            127023
        ]
    ],
    "domino": [
        [
            127024,
            127135
        ]
    ],
    "playingcards": [
        [
            127136,
            127231
        ]
    ],
    "emoticons": [
        [
            128512,
            128591
        ]
    ],
    "mapsymbols": [
        [
            128640,
            128767
        ]
    ],
    "alchemic": [
        [
            128768,
            128895
        ]
    ],
    "tags": [
        [
            917504,
            917631
        ]
    ],
    "greeknumbers": [
        [
            65856,
            65935
        ]
    ],
    "greekmusic": [
        [
            119296,
            119375
        ]
    ]
};
/*
 * ctype.js - Character type definitions
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !data ctype

/**
 * @namespace
 * Provides a set of static routines that return information about characters.
 * These routines emulate the C-library ctype functions. The characters must be 
 * encoded in utf-8, as no other charsets are currently supported. Only the first
 * character of the given string is tested.
 */
ilib.CType = {
	/**
	 * @protected
	 * Actual implementation for withinRange. Searches the given object for ranges.
	 * The range names are taken from the Unicode range names in 
	 * http://www.unicode.org/Public/UNIDATA/extracted/DerivedGeneralCategory.txt
	 * 
	 * <ul>
	 * <li>cn - Unassigned
	 * <li>lu - Uppercase_Letter
	 * <li>ll - Lowercase_Letter
	 * <li>lt - Titlecase_Letter
	 * <li>lm - Modifier_Letter
	 * <li>lo - Other_Letter
	 * <li>mn - Nonspacing_Mark
	 * <li>me - Enclosing_Mark
	 * <li>mc - Spacing_Mark
	 * <li>nd - Decimal_Number
	 * <li>nl - Letter_Number
	 * <li>no - Other_Number
	 * <li>zs - Space_Separator
	 * <li>zl - Line_Separator
	 * <li>zp - Paragraph_Separator
	 * <li>cc - Control
	 * <li>cf - Format
	 * <li>co - Private_Use
	 * <li>cs - Surrogate
	 * <li>pd - Dash_Punctuation
	 * <li>ps - Open_Punctuation
	 * <li>pe - Close_Punctuation
	 * <li>pc - Connector_Punctuation
	 * <li>po - Other_Punctuation
	 * <li>sm - Math_Symbol
	 * <li>sc - Currency_Symbol
	 * <li>sk - Modifier_Symbol
	 * <li>so - Other_Symbol
	 * <li>pi - Initial_Punctuation
	 * <li>pf - Final_Punctuation
	 * </ul>
	 * 
	 * @param {string} ch character to examine
	 * @param {string} rangeName the name of the range to check
	 * @param {Object} obj object containing the character range data
	 * @return {boolean} true if the first character is within the named
	 * range
	 */
	_inRange: function(ch, rangeName, obj) {
		var range, i, num;
		if (!ch || ch.length === 0 || !rangeName || typeof(obj) === 'undefined') {
			return false;
		}
		
		num = ch.charCodeAt(0);
		range = obj[rangeName.toLowerCase()];
		if (!range) {
			return false;
		}
		
		for (i = 0; i < range.length; i++) {
			// JS only supports the BMP (chars from 0x0000 to 0xFFFF), but the
			// data is includes ranges above that for use with other languages
			// that do support all ISO 10646 characters. So, check if the range
			// is less than the max first.
			if (range[i][0] < 0x10000) {
				if (range[i].length === 1) {
					// single character range
					if (num === range[i][0]) {
						return true;
					}
				} else if (num >= range[i][0] && num <= range[i][1]) {
					// multi-character range
					return true;
				}
			}
		}
		
		return false;
	},
	
	/**
	 * Return whether or not the first character is within the named range
	 * of Unicode characters. The valid list of range names are taken from 
	 * the Unicode 6.0 spec. Only those ranges which have characters in the 
	 * Basic Multilingual Plane (BMP) are supported. Currently, this method 
	 * supports the following range names:
	 * 
	 * <ul>
	 * <li><i>ascii</i> - basic ASCII
	 * <li><i>latin</i> - Latin, Latin Extended Additional, Latin Extended-C, Latin Extended-D
	 * <li><i>armenian</i>
	 * <li><i>greek</i> - Greek, Greek Extended
	 * <li><i>cyrillic</i> - Cyrillic, Cyrillic Extended-A, Cyrillic Extended-B
	 * <li><i>georgian</i> - Georgian, Georgian Supplement
	 * <li><i>glagolitic</i>
	 * <li><i>gothic</i>
	 * <li><i>ogham</i>
	 * <li><i>oldpersian</i>
	 * <li><i>runic</i>
	 * <li><i>ipa</i> - IPA, Phonetic Extensions, Phonetic Extensions Supplement
	 * <li><i>phonetic</i>
	 * <li><i>modifiertone</i> - Modifier Tone Letters
	 * <li><i>spacing</i>
	 * <li><i>diacritics</i>
	 * <li><i>halfmarks</i> - Combining Half Marks
	 * <li><i>small</i> - Small Form Variants
	 * <li><i>bamum</i> - Bamum, Bamum Supplement
	 * <li><i>ethiopic</i> - Ethiopic, Ethiopic Extended, Ethiopic Extended-A
	 * <li><i>nko</i>
	 * <li><i>osmanya</i>
	 * <li><i>tifinagh</i>
	 * <li><i>val</i>
	 * <li><i>arabic</i> - Arabic, Arabic Supplement, Arabic Presentation Forms-A, 
	 * Arabic Presentation Forms-B
	 * <li><i>carlan</i>
	 * <li><i>hebrew</i>
	 * <li><i>mandaic</i>
	 * <li><i>samaritan</i>
	 * <li><i>syriac</i>
	 * <li><i>mongolian</i>
	 * <li><i>phagspa</i>
	 * <li><i>tibetan</i>
	 * <li><i>bengali</i>
	 * <li><i>devanagari</i> - Devanagari, Devanagari Extended
	 * <li><i>gujarati</i>
	 * <li><i>gurmukhi</i>
	 * <li><i>kannada</i>
	 * <li><i>lepcha</i>
	 * <li><i>limbu</i>
	 * <li><i>malayalam</i>
	 * <li><i>meetaimayek</i>
	 * <li><i>olchiki</i>
	 * <li><i>oriya</i>
	 * <li><i>saurashtra</i>
	 * <li><i>sinhala</i>
	 * <li><i>sylotinagri</i> - Syloti Nagri
	 * <li><i>tamil</i>
	 * <li><i>telugu</i>
	 * <li><i>thaana</i>
	 * <li><i>vedic</i>
	 * <li><i>batak</i>
	 * <li><i>balinese</i>
	 * <li><i>buginese</i>
	 * <li><i>cham</i>
	 * <li><i>javanese</i>
	 * <li><i>kayahli</i>
	 * <li><i>khmer</i>
	 * <li><i>lao</i>
	 * <li><i>myanmar</i> - Myanmar, Myanmar Extended-A
	 * <li><i>newtailue</i>
	 * <li><i>rejang</i>
	 * <li><i>sundanese</i>
	 * <li><i>taile</i>
	 * <li><i>taitham</i>
	 * <li><i>taiviet</i>
	 * <li><i>thai</i>
	 * <li><i>buhld</i>
	 * <li><i>hanunoo</i>
	 * <li><i>tagalog</i>
	 * <li><i>tagbanwa</i>
	 * <li><i>bopomofo</i> - Bopomofo, Bopomofo Extended
	 * <li><i>cjk</i> - the CJK unified ideographs (Han), CJK Unified Ideographs
	 *  Extension A, CJK Unified Ideographs Extension B, CJK Unified Ideographs 
	 *  Extension C, CJK Unified Ideographs Extension D, Ideographic Description 
	 *  Characters (=isIdeo())
	 * <li><i>cjkcompatibility</i> - CJK Compatibility, CJK Compatibility 
	 * Ideographs, CJK Compatibility Forms, CJK Compatibility Ideographs Supplement
	 * <li><i>cjkradicals</i> - the CJK radicals, KangXi radicals
	 * <li><i>hangul</i> - Hangul Jamo, Hangul Syllables, Hangul Jamo Extended-A, 
	 * Hangul Jamo Extended-B, Hangul Compatibility Jamo
	 * <li><i>cjkpunct</i> - CJK symbols and punctuation
	 * <li><i>cjkstrokes</i> - CJK strokes
	 * <li><i>hiragana</i>
	 * <li><i>katakana</i> - Katakana, Katakana Phonetic Extensions, Kana Supplement
	 * <li><i>kanbun</i>
	 * <li><i>lisu</i>
	 * <li><i>yi</i> - Yi Syllables, Yi Radicals
	 * <li><i>cherokee</i>
	 * <li><i>canadian</i> - Unified Canadian Aboriginal Syllabics, Unified Canadian 
	 * Aboriginal Syllabics Extended
	 * <li><i>presentation</i> - Alphabetic presentation forms
	 * <li><i>vertical</i> - Vertical Forms
	 * <li><i>width</i> - Halfwidth and Fullwidth Forms
	 * <li><i>punctuation</i> - General punctuation, Supplemental Punctuation
	 * <li><i>box</i> - Box Drawing
	 * <li><i>block</i> - Block Elements
	 * <li><i>letterlike</i> - Letterlike symbols
	 * <li><i>mathematical</i> - Mathematical alphanumeric symbols, Miscellaneous 
	 * Mathematical Symbols-A, Miscellaneous Mathematical Symbols-B
	 * <li><i>enclosedalpha</i> - Enclosed alphanumerics, Enclosed Alphanumeric Supplement
	 * <li><i>enclosedcjk</i> - Enclosed CJK letters and months, Enclosed Ideographic Supplement
	 * <li><i>cjkcompatibility</i> - CJK compatibility
	 * <li><i>apl</i> - APL symbols
	 * <li><i>controlpictures</i> - Control pictures
	 * <li><i>misc</i> - Miscellaneous technical
	 * <li><i>ocr</i> - Optical character recognition (OCR)
	 * <li><i>combining</i> - Combining Diacritical Marks, Combining Diacritical Marks 
	 * for Symbols, Combining Diacritical Marks Supplement
	 * <li><i>digits</i> - ASCII digits (=isDigit())
	 * <li><i>indicnumber</i> - Common Indic Number Forms
	 * <li><i>numbers</i> - Number dorms
	 * <li><i>supersub</i> - Super- and subscripts
	 * <li><i>arrows</i> - Arrows, Miscellaneous Symbols and Arrows, Supplemental Arrows-A,
	 * Supplemental Arrows-B
	 * <li><i>operators</i> - Mathematical operators, supplemental 
	 * mathematical operators 
	 * <li><i>geometric</i> - Geometric shapes
	 * <li><i>ancient</i> - Ancient symbols
	 * <li><i>braille</i> - Braille patterns
	 * <li><i>currency</i> - Currency symbols
	 * <li><i>dingbats</i>
	 * <li><i>gamesymbols</i>
	 * <li><i>yijing</i> - Yijing Hexagram Symbols
	 * <li><i>specials</i>
	 * <li><i>variations</i> - Variation Selectors, Variation Selectors Supplement
	 * <li><i>privateuse</i> - Private Use Area, Supplementary Private Use Area-A, 
	 * Supplementary Private Use Area-B
	 * <li><i>supplementarya</i> - Supplementary private use area-A
	 * <li><i>supplementaryb</i> - Supplementary private use area-B
	 * <li><i>highsurrogates</i> - High Surrogates, High Private Use Surrogates
	 * <li><i>lowsurrogates</i>
	 * <li><i>reserved</i>
	 * <li><i>noncharacters</i>
	 * </ul><p>
	 * 
	 * Depends directive: !depends ctype.js
	 * 
	 * @param {string} ch character to examine
	 * @param {string} rangeName the name of the range to check
	 * @return {boolean} true if the first character is within the named
	 * range
	 */
	withinRange: function(ch, rangeName) {
		return ilib.CType._inRange(ch, rangeName, ilib.data.ctype);
	}
};

/*
 * ctype.isdigit.js - Character type is digit
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ctype.js

// !data ctype

/**
 * Return whether or not the first character is a digit character in the
 * Latin script.<p>
 * 
 * Depends directive: !depends ctype.isdigit.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is a digit character in the
 * Latin script. 
 */
ilib.CType.isDigit = function (ch) {
	return ilib.CType._inRange(ch, 'digit', ilib.data.ctype);
};

ilib.data.ctype_z = {
	"zs": [
		[32],
		[160],
		[5760],
		[6158],
		[8192, 8202],
		[8239],
		[8287],
		[12288]
	],
	"zl": [
		[8232]
	],
	"zp": [
		[8233]
	]
}
;
/*
 * ctype.isspace.js - Character type is space char
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ctype.js

// !data ctype ctype_z

/**
 * Return whether or not the first character is a whitespace character.<p>
 * 
 * Depends directive: !depends ctype.isspace.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is a whitespace character.
 */
ilib.CType.isSpace = function (ch) {
	return ilib.CType._inRange(ch, 'space', ilib.data.ctype) ||
		ilib.CType._inRange(ch, 'zs', ilib.data.ctype_z) ||
		ilib.CType._inRange(ch, 'zl', ilib.data.ctype_z) ||
		ilib.CType._inRange(ch, 'zp', ilib.data.ctype_z);
};

/*
 * numprs.js - Parse a number in any locale
 * 
 * Copyright © 2012, JEDL Software, Inc.
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
!depends 
ilibglobal.js 
locale.js 
strings.js 
resources.js 
ctype.isdigit.js 
ctype.isspace.js
*/

/**
 * @class
 * Parse a string as a number, ignoring all locale-specific formatting.<p>
 * 
 * This class is different from the standard Javascript parseInt() and parseFloat() 
 * functions in that the number to be parsed can have formatting characters in it 
 * that are not supported by those two
 * functions, and it handles numbers written in other locales properly. For example, 
 * if you pass the string "203,231.23" to the parseFloat() function in Javascript, it 
 * will return you the number 203. The ilib.Number class will parse it correctly and 
 * the value() function will return the number 203231.23. If you pass parseFloat() the 
 * string "203.231,23" with the locale set to de-DE, it will return you 203 again. This
 * class will return the correct number 203231.23 again.<p>
 * 
 * The options object may contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - specify the locale of the string to parse. This is used to
 * figure out what the decimal point character is. If not specified, the default locale
 * for the app or browser is used.
 * <li><i>type</i> - specify whether this string should be interpretted as a number,
 * currency, or percentage amount. When the number is interpretted as a currency
 * amount, the getCurrency() method will return something useful, otherwise it will
 * return undefined. If
 * the number is to be interpretted as percentage amount and there is a percentage sign
 * in the string, then the number will be returned
 * as a fraction from the valueOf() method. If there is no percentage sign, then the 
 * number will be returned as a regular number. That is "58.3%" will be returned as the 
 * number 0.583 but "58.3" will be returned as 58.3. Valid values for this property 
 * are "number", "currency", and "percentage". Default if this is not specified is
 * "number".
 * </ul>
 * <p>
 * 
 * Depends directive: !depends numprs.js
 * 
 * @constructor
 * @param {string|number|Number|ilib.Number|undefined} str a string to parse as a number, or a number value
 * @param {Object} options Options controlling how the instance should be created 
 */
ilib.Number = function (str, options) {
	var li, i, stripped = "";
	
	this.locale = new ilib.Locale();
	this.type = "number";
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		if (options.type) {
			switch (options.type) {
				case "number":
				case "currency":
				case "percentage":
					this.type = options.type;
					break;
				default:
					break;
			}
		}
	}
	
	
	li = new ilib.LocaleInfo(this.locale);
	this.decimal = li.getDecimalSeparator();
	
	switch (typeof(str)) {
	case 'string':
		// stripping should work for all locales, because you just ignore all the
		// formatting except the decimal char
		var unary = true, // looking for the unary minus still?
			negative = false;
		this.str = str || "0";
		i = 0;
		for (i = 0; i < this.str.length; i++) {
			if (unary && this.str.charAt(i) === '-') {
				negative = true;
				unary = false;
				stripped += this.str.charAt(i);
			} else if (ilib.CType.isDigit(this.str.charAt(i))) {
				stripped += this.str.charAt(i);
				unary = false;
			} else if (this.str.charAt(i) === this.decimal) {
				stripped += "."; // always convert to period
				unary = false;
			} // else ignore
		}
		this.value = parseFloat(stripped);
		break;
	case 'number':
		this.str = "" + str;
		this.value = str;
		break;
		
	case 'object':
		this.value = /** @type {number} */ str.valueOf();
		this.str = "" + this.value;
		break;
		
	case 'undefined':
		this.value = 0;
		this.str = "0";
		break;
	}
	
	switch (this.type) {
		default:
			// don't need to do anything special for other types
			break;
		case "percentage":
			if (this.str.indexOf(li.getPercentageSymbol()) !== -1) {
				this.value /= 100;
			}
			break;
		case "currency":
			stripped = "";
			i = 0;
			while (i < this.str.length &&
				   !ilib.CType.isDigit(this.str.charAt(i)) &&
				   !ilib.CType.isSpace(this.str.charAt(i))) {
				stripped += this.str.charAt(i++);
			}
			if (stripped.length === 0) {
				while (i < this.str.length && 
					   ilib.CType.isDigit(this.str.charAt(i)) ||
					   ilib.CType.isSpace(this.str.charAt(i)) ||
					   this.str.charAt(i) === '.' ||
					   this.str.charAt(i) === ',' ) {
					i++;
				}
				while (i < this.str.length && 
					   !ilib.CType.isDigit(this.str.charAt(i)) &&
					   !ilib.CType.isSpace(this.str.charAt(i))) {
					stripped += this.str.charAt(i++);
				}
			}
			this.currency = new ilib.Currency({locale: this.locale, sign: stripped});
			break;
	}
};

ilib.Number.prototype = {
	/**
	 * Return the locale for this formatter instance.
	 * @returns {ilib.Locale} the locale instance for this formatter
	 */
	getLocale: function () {
		return this.locale;
	},
	
	/**
	 * Return the original string that this number instance was created with.
	 * @return {string} the original string
	 */
	toString: function () {
		return this.str;
	},
	
	/**
	 * If the type of this Number instance is "currency", then the parser will attempt
	 * to figure out which currency this amount represents. The amount can be written
	 * with any of the currency signs or ISO 4217 codes that are currently
	 * recognized by ilib, and the currency signs may occur before or after the
	 * numeric portion of the string. If no currency can be recognized, then the 
	 * default currency for the locale is returned. If multiple currencies can be
	 * recognized (for example if the currency sign is "$"), then this method 
	 * will prefer the one for the current locale. If multiple currencies can be
	 * recognized, but none are used in the current locale, then the first currency
	 * encountered will be used. This may produce random results, though the larger
	 * currencies occur earlier in the list. For example, if the sign found in the
	 * string is "$" and that is not the sign of the currency of the current locale
	 * then the US dollar will be recognized, as it is the largest currency that uses
	 * the "$" as its sign.
	 * 
	 * @return {ilib.Currency|undefined} the currency instance for this amount, or 
	 * undefined if this Number object is not of type currency
	 */
	getCurrency: function () {
		return this.currency;
	},
	
	/**
	 * Return the value of this number object as a primitive number instance.
	 * @return {number} the value of this number instance
	 */
	valueOf: function () {
		return this.value;
	}
};

ilib.data.currency = {
	"USD": {
		"name": "US Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"CHF": {
		"name": "Swiss Franc",
		"decimals": 2,
		"sign": "Fr"
	},
	"RON": {
		"name": "Leu",
		"decimals": 2,
		"sign": "L"
	},
	"RUB": {
		"name": "Russian Ruble",
		"decimals": 2,
		"sign": "руб."
	},
	"SEK": {
		"name": "Swedish Krona",
		"decimals": 2,
		"sign": "kr"
	},
	"GBP": {
		"name": "Pound Sterling",
		"decimals": 2,
		"sign": "£"
	},
	"PKR": {
		"name": "Pakistan Rupee",
		"decimals": 2,
		"sign": "₨"
	},
	"KES": {
		"name": "Kenyan Shilling",
		"decimals": 2,
		"sign": "Sh"
	},
	"AED": {
		"name": "UAE Dirham",
		"decimals": 2,
		"sign": "د.إ"
	},
	"KRW": {
		"name": "Won",
		"decimals": 0,
		"sign": "₩"
	},
	"AFN": {
		"name": "Afghani",
		"decimals": 2,
		"sign": "؋"
	},
	"ALL": {
		"name": "Lek",
		"decimals": 2,
		"sign": "L"
	},
	"AMD": {
		"name": "Armenian Dram",
		"decimals": 2,
		"sign": "դր."
	},
	"ANG": {
		"name": "Netherlands Antillean Guilder",
		"decimals": 2,
		"sign": "ƒ"
	},
	"AOA": {
		"name": "Kwanza",
		"decimals": 2,
		"sign": "Kz"
	},
	"ARS": {
		"name": "Argentine Peso",
		"decimals": 2,
		"sign": "$"
	},
	"AUD": {
		"name": "Australian Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"AWG": {
		"name": "Aruban Florin",
		"decimals": 2,
		"sign": "ƒ"
	},
	"AZN": {
		"name": "Azerbaijanian Manat",
		"decimals": 2,
		"sign": "AZN"
	},
	"BAM": {
		"name": "Convertible Mark",
		"decimals": 2,
		"sign": "КМ"
	},
	"BBD": {
		"name": "Barbados Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"BDT": {
		"name": "Taka",
		"decimals": 2,
		"sign": "৳"
	},
	"BGN": {
		"name": "Bulgarian Lev",
		"decimals": 2,
		"sign": "лв"
	},
	"BHD": {
		"name": "Bahraini Dinar",
		"decimals": 3,
		"sign": ".د.ب"
	},
	"BIF": {
		"name": "Burundi Franc",
		"decimals": 0,
		"sign": "Fr"
	},
	"BMD": {
		"name": "Bermudian Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"BND": {
		"name": "Brunei Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"BOB": {
		"name": "Boliviano",
		"decimals": 2,
		"sign": "Bs."
	},
	"BRL": {
		"name": "Brazilian Real",
		"decimals": 2,
		"sign": "R$"
	},
	"BSD": {
		"name": "Bahamian Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"BTN": {
		"name": "Ngultrum",
		"decimals": 2,
		"sign": "Nu."
	},
	"BWP": {
		"name": "Pula",
		"decimals": 2,
		"sign": "P"
	},
	"BYR": {
		"name": "Belarussian Ruble",
		"decimals": 0,
		"sign": "Br"
	},
	"BZD": {
		"name": "Belize Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"CAD": {
		"name": "Canadian Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"CDF": {
		"name": "Congolese Franc",
		"decimals": 2,
		"sign": "Fr"
	},
	"CLP": {
		"name": "Chilean Peso",
		"decimals": 0,
		"sign": "$"
	},
	"CNY": {
		"name": "Yuan Renminbi",
		"decimals": 2,
		"sign": "元"
	},
	"COP": {
		"name": "Colombian Peso",
		"decimals": 2,
		"sign": "$"
	},
	"CRC": {
		"name": "Costa Rican Colon",
		"decimals": 2,
		"sign": "₡"
	},
	"CUP": {
		"name": "Cuban Peso",
		"decimals": 2,
		"sign": "$"
	},
	"CVE": {
		"name": "Cape Verde Escudo",
		"decimals": 2,
		"sign": "$"
	},
	"CZK": {
		"name": "Czech Koruna",
		"decimals": 2,
		"sign": "Kč"
	},
	"DJF": {
		"name": "Djibouti Franc",
		"decimals": 0,
		"sign": "Fr"
	},
	"DKK": {
		"name": "Danish Krone",
		"decimals": 2,
		"sign": "kr"
	},
	"DOP": {
		"name": "Dominican Peso",
		"decimals": 2,
		"sign": "$"
	},
	"DZD": {
		"name": "Algerian Dinar",
		"decimals": 2,
		"sign": "د.ج"
	},
	"EGP": {
		"name": "Egyptian Pound",
		"decimals": 2,
		"sign": "£"
	},
	"ERN": {
		"name": "Nakfa",
		"decimals": 2,
		"sign": "Nfk"
	},
	"ETB": {
		"name": "Ethiopian Birr",
		"decimals": 2,
		"sign": "Br"
	},
	"EUR": {
		"name": "Euro",
		"decimals": 2,
		"sign": "€"
	},
	"FJD": {
		"name": "Fiji Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"FKP": {
		"name": "Falkland Islands Pound",
		"decimals": 2,
		"sign": "£"
	},
	"GEL": {
		"name": "Lari",
		"decimals": 2,
		"sign": "ლ"
	},
	"GHS": {
		"name": "Cedi",
		"decimals": 2,
		"sign": "₵"
	},
	"GIP": {
		"name": "Gibraltar Pound",
		"decimals": 2,
		"sign": "£"
	},
	"GMD": {
		"name": "Dalasi",
		"decimals": 2,
		"sign": "D"
	},
	"GNF": {
		"name": "Guinea Franc",
		"decimals": 0,
		"sign": "Fr"
	},
	"GTQ": {
		"name": "Quetzal",
		"decimals": 2,
		"sign": "Q"
	},
	"GYD": {
		"name": "Guyana Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"HKD": {
		"name": "Hong Kong Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"HNL": {
		"name": "Lempira",
		"decimals": 2,
		"sign": "L"
	},
	"HRK": {
		"name": "Croatian Kuna",
		"decimals": 2,
		"sign": "kn"
	},
	"HTG": {
		"name": "Gourde",
		"decimals": 2,
		"sign": "G"
	},
	"HUF": {
		"name": "Forint",
		"decimals": 2,
		"sign": "Ft"
	},
	"IDR": {
		"name": "Rupiah",
		"decimals": 2,
		"sign": "Rp"
	},
	"ILS": {
		"name": "New Israeli Sheqel",
		"decimals": 2,
		"sign": "₪"
	},
	"INR": {
		"name": "Indian Rupee",
		"decimals": 2,
		"sign": "INR"
	},
	"IQD": {
		"name": "Iraqi Dinar",
		"decimals": 3,
		"sign": "ع.د"
	},
	"IRR": {
		"name": "Iranian Rial",
		"decimals": 2,
		"sign": "﷼"
	},
	"ISK": {
		"name": "Iceland Krona",
		"decimals": 0,
		"sign": "kr"
	},
	"JMD": {
		"name": "Jamaican Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"JOD": {
		"name": "Jordanian Dinar",
		"decimals": 3,
		"sign": "د.ا"
	},
	"JPY": {
		"name": "Yen",
		"decimals": 0,
		"sign": "¥"
	},
	"KGS": {
		"name": "Som",
		"decimals": 2,
		"sign": "лв"
	},
	"KHR": {
		"name": "Riel",
		"decimals": 2,
		"sign": "៛"
	},
	"KMF": {
		"name": "Comoro Franc",
		"decimals": 0,
		"sign": "Fr"
	},
	"KPW": {
		"name": "North Korean Won",
		"decimals": 2,
		"sign": "₩"
	},
	"KWD": {
		"name": "Kuwaiti Dinar",
		"decimals": 3,
		"sign": "د.ك"
	},
	"KYD": {
		"name": "Cayman Islands Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"KZT": {
		"name": "Tenge",
		"decimals": 2,
		"sign": "₸"
	},
	"LAK": {
		"name": "Kip",
		"decimals": 2,
		"sign": "₭"
	},
	"LBP": {
		"name": "Lebanese Pound",
		"decimals": 2,
		"sign": "ل.ل"
	},
	"LKR": {
		"name": "Sri Lanka Rupee",
		"decimals": 2,
		"sign": "Rs"
	},
	"LRD": {
		"name": "Liberian Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"LSL": {
		"name": "Loti",
		"decimals": 2,
		"sign": "L"
	},
	"LTL": {
		"name": "Lithuanian Litas",
		"decimals": 2,
		"sign": "Lt"
	},
	"LVL": {
		"name": "Latvian Lats",
		"decimals": 2,
		"sign": "Ls"
	},
	"LYD": {
		"name": "Libyan Dinar",
		"decimals": 3,
		"sign": "ل.د"
	},
	"MAD": {
		"name": "Moroccan Dirham",
		"decimals": 2,
		"sign": "د.م."
	},
	"MDL": {
		"name": "Moldovan Leu",
		"decimals": 2,
		"sign": "L"
	},
	"MGA": {
		"name": "Malagasy Ariary",
		"decimals": 2,
		"sign": "Ar"
	},
	"MKD": {
		"name": "Denar",
		"decimals": 2,
		"sign": "ден"
	},
	"MMK": {
		"name": "Kyat",
		"decimals": 2,
		"sign": "K"
	},
	"MNT": {
		"name": "Tugrik",
		"decimals": 2,
		"sign": "₮"
	},
	"MOP": {
		"name": "Pataca",
		"decimals": 2,
		"sign": "P"
	},
	"MRO": {
		"name": "Ouguiya",
		"decimals": 2,
		"sign": "UM"
	},
	"MUR": {
		"name": "Mauritius Rupee",
		"decimals": 2,
		"sign": "₨"
	},
	"MVR": {
		"name": "Rufiyaa",
		"decimals": 2,
		"sign": ".ރ"
	},
	"MWK": {
		"name": "Kwacha",
		"decimals": 2,
		"sign": "MK"
	},
	"MXN": {
		"name": "Mexican Peso",
		"decimals": 2,
		"sign": "$"
	},
	"MYR": {
		"name": "Malaysian Ringgit",
		"decimals": 2,
		"sign": "RM"
	},
	"MZN": {
		"name": "Metical",
		"decimals": 2,
		"sign": "MT"
	},
	"NAD": {
		"name": "Namibia Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"NGN": {
		"name": "Naira",
		"decimals": 2,
		"sign": "₦"
	},
	"NIO": {
		"name": "Cordoba Oro",
		"decimals": 2,
		"sign": "C$"
	},
	"NOK": {
		"name": "Norwegian Krone",
		"decimals": 2,
		"sign": "kr"
	},
	"NPR": {
		"name": "Nepalese Rupee",
		"decimals": 2,
		"sign": "₨"
	},
	"NZD": {
		"name": "New Zealand Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"OMR": {
		"name": "Rial Omani",
		"decimals": 3,
		"sign": "ر.ع."
	},
	"PAB": {
		"name": "Balboa",
		"decimals": 2,
		"sign": "B/."
	},
	"PEN": {
		"name": "Nuevo Sol",
		"decimals": 2,
		"sign": "S/."
	},
	"PGK": {
		"name": "Kina",
		"decimals": 2,
		"sign": "K"
	},
	"PHP": {
		"name": "Philippine Peso",
		"decimals": 2,
		"sign": "₱"
	},
	"PLN": {
		"name": "Zloty",
		"decimals": 2,
		"sign": "zł"
	},
	"PYG": {
		"name": "Guarani",
		"decimals": 0,
		"sign": "₲"
	},
	"QAR": {
		"name": "Qatari Rial",
		"decimals": 2,
		"sign": "ر.ق"
	},
	"RSD": {
		"name": "Serbian Dinar",
		"decimals": 2,
		"sign": "дин."
	},
	"RWF": {
		"name": "Rwanda Franc",
		"decimals": 0,
		"sign": "Fr"
	},
	"SAR": {
		"name": "Saudi Riyal",
		"decimals": 2,
		"sign": "ر.س"
	},
	"SBD": {
		"name": "Solomon Islands Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"SCR": {
		"name": "Seychelles Rupee",
		"decimals": 2,
		"sign": "₨"
	},
	"SDG": {
		"name": "Sudanese Pound",
		"decimals": 2,
		"sign": "£"
	},
	"SGD": {
		"name": "Singapore Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"SHP": {
		"name": "Saint Helena Pound",
		"decimals": 2,
		"sign": "£"
	},
	"SLL": {
		"name": "Leone",
		"decimals": 2,
		"sign": "Le"
	},
	"SOS": {
		"name": "Somali Shilling",
		"decimals": 2,
		"sign": "Sh"
	},
	"SRD": {
		"name": "Surinam Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"SSP": {
		"name": "South Sudanese Pound",
		"decimals": 2,
		"sign": ""
	},
	"STD": {
		"name": "Dobra",
		"decimals": 2,
		"sign": "Db"
	},
	"SYP": {
		"name": "Syrian Pound",
		"decimals": 2,
		"sign": "£"
	},
	"SZL": {
		"name": "Lilangeni",
		"decimals": 2,
		"sign": "L"
	},
	"THB": {
		"name": "Baht",
		"decimals": 2,
		"sign": "฿"
	},
	"TJS": {
		"name": "Somoni",
		"decimals": 2,
		"sign": "ЅМ"
	},
	"TMT": {
		"name": "New Manat",
		"decimals": 2,
		"sign": "m"
	},
	"TND": {
		"name": "Tunisian Dinar",
		"decimals": 3,
		"sign": "د.ت"
	},
	"TOP": {
		"name": "Pa’anga",
		"decimals": 2,
		"sign": "T$"
	},
	"TRY": {
		"name": "Turkish Lira",
		"decimals": 2,
		"sign": "TL"
	},
	"TTD": {
		"name": "Trinidad and Tobago Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"TWD": {
		"name": "New Taiwan Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"TZS": {
		"name": "Tanzanian Shilling",
		"decimals": 2,
		"sign": "Sh"
	},
	"UAH": {
		"name": "Hryvnia",
		"decimals": 2,
		"sign": "₴"
	},
	"UGX": {
		"name": "Uganda Shilling",
		"decimals": 2,
		"sign": "Sh"
	},
	"UYU": {
		"name": "Peso Uruguayo",
		"decimals": 2,
		"sign": "$"
	},
	"UZS": {
		"name": "Uzbekistan Sum",
		"decimals": 2,
		"sign": "лв"
	},
	"VEF": {
		"name": "Bolivar Fuerte",
		"decimals": 2,
		"sign": "Bs F"
	},
	"VND": {
		"name": "Dong",
		"decimals": 0,
		"sign": "₫"
	},
	"VUV": {
		"name": "Vatu",
		"decimals": 0,
		"sign": "Vt"
	},
	"WST": {
		"name": "Tala",
		"decimals": 2,
		"sign": "T"
	},
	"XAF": {
		"name": "CFA Franc BEAC",
		"decimals": 0,
		"sign": "Fr"
	},
	"XCD": {
		"name": "East Caribbean Dollar",
		"decimals": 2,
		"sign": "$"
	},
	"XOF": {
		"name": "CFA Franc BCEAO",
		"decimals": 0,
		"sign": "Fr"
	},
	"XPF": {
		"name": "CFP Franc",
		"decimals": 0,
		"sign": "Fr"
	},
	"YER": {
		"name": "Yemeni Rial",
		"decimals": 2,
		"sign": "﷼"
	},
	"ZAR": {
		"name": "Rand",
		"decimals": 2,
		"sign": "R"
	},
	"ZMK": {
		"name": "Zambian Kwacha",
		"decimals": 2,
		"sign": "ZK"
	},
	"ZWL": {
		"name": "Zimbabwe Dollar",
		"decimals": 2,
		"sign": "$"
	}
}
;
/*
 * currency.js - Currency definition
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !data currency

/**
 * @class
 * Create a new currency information instance. Instances of this class encode 
 * information about a particular currency.<p> 
 * 
 * The options can contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - specify the locale for this instance
 * <li><i>code</i> - find info on a specific currency with the given ISO 4217 code 
 * <li><i>sign</i> - search for a currency that uses this sign
 * </ul>
 * 
 * When searching for a currency by its sign, this class cannot guarantee 
 * that it will return info about a specific currency. The reason is that currency 
 * signs are sometimes shared between different currencies and the sign is 
 * therefore ambiguous. If you need a 
 * guarantee, find the currency using the code instead.<p>
 * 
 * The way this class finds a currency by sign is the following. If the sign is 
 * unambiguous, then
 * the currency is returned. If there are multiple currencies that use the same
 * sign, and the current locale uses that sign, then the default currency for
 * the current locale is returned. If there are multiple, but the current locale
 * does not use that sign, then the currency with the largest circulation is
 * returned. For example, if you are in the en-GB locale, and the sign is "$",
 * then this class will notice that there are multiple currencies with that
 * sign (USD, CAD, AUD, HKD, MXP, etc.) Since "$" is not used in en-GB, it will 
 * pick the one with the largest circulation, which in this case is the US Dollar
 * (USD).<p>
 * 
 * If neither the code or sign property is set, the currency that is most common 
 * for the locale
 * will be used instead. If the locale is not set, the default locale will be used.
 * If the code is given, but it is not found in the list of known currencies, this
 * constructor will throw an exception. If the sign is given, but it is not found,
 * this constructor will default to the currency for the current locale. If both
 * the code and sign properties are given, then the sign property will be ignored
 * and only the code property used. If the locale is given, but it is not a known
 * locale, this class will default to the default locale instead.<p>
 * 
 * Depends directive: !depends currency.js
 * 
 * @constructor
 * @param options {Object} a set of properties to govern how this instance is constructed.
 * @throws "currency xxx is unknown" when the given currency code is not in the list of 
 * known currencies. xxx is replaced with the requested code.
 */
ilib.Currency = function (options) {
	var li, currencies, currInfo, sign, cur;
	
	if (options) {
		if (options.code) {
			this.code = options.code;
		}
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		if (options.sign) {
			sign = options.sign;
		}
	}
	
	this.locale = this.locale || new ilib.Locale();
	li = new ilib.LocaleInfo(this.locale);
		
	currencies = new ilib.ResBundle({
		locale: this.locale,
		name: "currency"
	}).getResObj();

	if (this.code) {
		currInfo = currencies[this.code];
		if (!currInfo) {
			throw "currency " + this.code + " is unknown";
		}
	} else if (sign) {
		currInfo = currencies[sign]; // maybe it is really a code...
		if (typeof(currInfo) !== 'undefined') {
			this.code = sign;
		} else {
			this.code = li.getCurrency();
			currInfo = currencies[this.code];
			if (currInfo.sign !== sign) {
				// current locale does not use the sign, so search for it
				for (cur in currencies) {
					if (cur && currencies[cur]) {
						currInfo = currencies[cur];
						if (currInfo.sign === sign) {
							// currency data is already ordered so that the currency with the
							// largest circulation is at the beginning, so all we have to do
							// is take the first one in the list that matches
							this.code = cur;
							break;
						}
					}
				}
			}
		}
	}
	
	if (!currInfo || !this.code) {
		this.code = li.getCurrency();
		currInfo = currencies[this.code];
	}
	
	this.name = currInfo.name;
	this.fractionDigits = currInfo.decimals;
	this.sign = currInfo.sign;
};

/**
 * @static
 * Return an array of the ids for all ISO 4217 currencies that
 * this copy of ilib knows about.
 * @returns {Array.<string>} an array of currency ids that this copy of ilib knows about.
 */
ilib.Currency.getAvailableCurrencies = function() {
	var ret = [],
		cur,
		currencies = new ilib.ResBundle({
			name: "currency"
		}).getResObj();
	
	for (cur in currencies) {
		if (cur && currencies[cur]) {
			ret.push(cur);
		}
	}
	
	return ret;
};

ilib.Currency.prototype = {
	/**
	 * Return the ISO 4217 currency code for this instance.
	 * @returns {string} the ISO 4217 currency code for this instance
	 */
	getCode: function () {
		return this.code;
	},
	
	/**
	 * Return the default number of fraction digits that is typically used
	 * with this type of currency.
	 * @returns {number} the number of fraction digits for this currency
	 */
	getFractionDigits: function () {
		return this.fractionDigits;
	},
	
	/**
	 * Return the sign commonly used to represent this currency.
	 * @returns {string} the sign commonly used to represent this currency
	 */
	getSign: function () {
		return this.sign;
	},
	
	/**
	 * Return the name of the currency in English.
	 * @returns {string} the name of the currency in English
	 */
	getName: function () {
		return this.name;
	},
	
	/**
	 * Return the locale for this currency. If the options to the constructor 
	 * included a locale property in order to find the currency that is appropriate
	 * for that locale, then the locale is returned here. If the options did not
	 * include a locale, then this method returns undefined.
	 * @returns {ilib.Locale} the locale used in the constructor of this instance,
	 * or undefined if no locale was given in the constructor
	 */
	getLocale: function () {
		return this.locale;
	}
};

/*
 * numfmt.js - Number formatter definition
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ilibglobal.js locale.js strings.js resources.js currency.js

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
 * @class
 * Create a new number formatter instance. Locales differ in the way that digits
 * in a formatted number are grouped, in the way the decimal character is represented, 
 * etc. Use this formatter to get it right for any locale.<p>
 * 
 * This formatter can format plain numbers, currency amounts, and percentage amounts.<p>  
 * 
 * As with all formatters, the recommended
 * practice is to create one formatter and use it multiple times to format various
 * numbers.<p>
 * 
 * The options can contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - use the conventions of the specified locale when figuring out how to
 * format a number.
 * <li><i>type</i> - the type of this formatter. Valid values are "number", "currency", or 
 * "percentage". If this property is not specified, the default is "number".
 * <li><i>currency</i> - the ISO 4217 3-letter currency code to use when the formatter type 
 * is "currency". This property is required for currency formatting. If the type property 
 * is "currency" and the currency property is not specified, the constructor will throw a
 * an exception. 
 * <li><i>maxFractionDigits</i> - the maximum number of digits that should appear in the
 * formatted output after the decimal. A value of -1 means unlimited, and 0 means only print
 * the integral part of the number. 
 * <li><i>minFractionDigits</i> - the minimum number of fractional digits that should
 * appear in the formatted output. If the number does not have enough fractional digits
 * to reach this minimum, the number will be zero-padded at the end to get to the limit.
 * If the type of the formatter is "currency" and this
 * property is not specified, then the minimum fraction digits is set to the normal number
 * of digits used with that currency, which is almost always 0, 2, or 3 digits.
 * <li><i>roundingMode</i> - When the maxFractionDigits or maxIntegerDigits is specified,
 * this property governs how the least significant digits are rounded to conform to that
 * maximum. The value of this property is a string with one of the following values:
 * <ul>
 *   <li><i>up</i> - round away from zero
 *   <li><i>down</i> - round towards zero. This has the effect of truncating the number
 *   <li><i>ceiling</i> - round towards positive infinity
 *   <li><i>floor</i> - round towards negative infinity
 *   <li><i>halfup</i> - round towards nearest neighbour. If equidistant, round up.
 *   <li><i>halfdown</i> - round towards nearest neighbour. If equidistant, round down.
 *   <li><i>halfeven</i> - round towards nearest neighbour. If equidistant, round towards the even neighbour
 *   <li><i>halfodd</i> - round towards nearest neighbour. If equidistant, round towards the odd neighbour
 * </ul>
 * When the type of the formatter is "currency" and the <i>roundingMode</i> property is not
 * set, then the standard legal rounding rules for the locale are followed. If the type
 * is "number" or "percentage" and the <i>roundingMode</i> property is not set, then the 
 * default mode is "halfdown".</i>.
 * <li><i>style</i> - When the type of this formatter is "currency", the currency amount
 * can be formatted in the following styles: "common" and "iso". The common style is the
 * one commonly used in every day writing where the currency unit is represented using a 
 * symbol. eg. "$57.35" for fifty-seven dollars and thirty five cents. The iso style is 
 * the international style where the currency unit is represented using the ISO 4217 code.
 * eg. "USD 57.35" for the same amount. The default is "common" style if the style is
 * not specified.<p>
 * 
 * When the type of this formatter is "number",
 * the style can be either "standard" or "scientific". A "standard" style means a fully
 * specified floating point number formatted for the locale, whereas "scientific" uses
 * scientific notation for all numbers. That is, 1 integral digit, followed by a number
 * of fractional digits, followed by an "e" which denotes exponentiation, followed digits
 * which give the power of 10 in the exponent. Note that if you specify a maximum number
 * of integral digits, the formatter with a standard style will give you standard 
 * formatting for smaller numbers and scientific notation for larger numbers. The default
 * is standard style if this is not specified. 
 * </ul>
 * <p>
 * 
 * Depends directive: !depends numfmt.js
 * 
 * @constructor
 * @param {Object.<string,*>} options A set of options that govern how the formatter will behave 
 */
ilib.NumFmt = function (options) {
	this.locale = new ilib.Locale();
	this.type = "number";
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (options.type) {
			if (options.type === 'number' || 
				options.type === 'currency' || 
				options.type === 'percentage') {
				this.type = options.type;
			}
		}
		
		if (options.currency) {
			this.currency = options.currency;
		}
		
		if (typeof(options.maxFractionDigits) === 'number') {
			this.maxFractionDigits = this._toPrimitive(options.maxFractionDigits);
		}
		if (typeof(options.minFractionDigits) === 'number') {
			this.minFractionDigits = this._toPrimitive(options.minFractionDigits);
		}
		if (options.style) {
			this.style = options.style;
		}
	}
	
	this.localeInfo = new ilib.LocaleInfo(this.locale);
	switch (this.type) {
		case "currency":
			var templates,
				curopts;
			
			if (!this.currency || typeof(this.currency) != 'string') {
				throw "A currency property is required in the options to the number formatter constructor when the type property is set to currency.";
			}
			
			curopts = {
				locale: this.locale,
				code: this.currency		
			};
			this.currencyInfo = new ilib.Currency(curopts);
			if (this.style !== "common" && this.style !== "iso") {
				this.style = "common";
			}
			
			if (typeof(this.maxFractionDigits) !== 'number' && typeof(this.minFractionDigits) !== 'number') {
				this.minFractionDigits = this.maxFractionDigits = this.currencyInfo.getFractionDigits();
			}
			
			templates = this.localeInfo.getCurrencyFormats();
			this.template = new ilib.String(templates[this.style]);
			this.sign = (this.style === "iso") ? this.currencyInfo.getCode() : this.currencyInfo.getSign(); 
			break;
		case "percentage":
			this.template = new ilib.String(this.localeInfo.getPercentageFormat());
			break;
		default:
			break;
	}
	
	if (this.maxFractionDigits < this.minFractionDigits) {
		this.minFractionDigits = this.maxFractionDigits;
	}
	
	this.roundingMode = options && options.roundingMode;
	if (!this.roundingMode) {
		this.roundingMode = this.localeInfo.getRoundingMode();
	}
	if (!this.roundingMode) {
		this.roundingMode = this.currencyInfo && this.currencyInfo.roundingMode;
	}
	if (!this.roundingMode) {
		this.roundingMode = "halfdown";
	}
	
	// set up the function, so we only have to figure it out once
	// and not every time we do format()
	this.round = ilib._roundFnc[this.roundingMode];
	if (!this.round) {
		this.roundingMode = "halfdown";
		this.round = ilib._roundFnc[this.roundingMode];
	}
};

/**
 * Return an array of available locales that this formatter can format
 * @returns {Array.<ilib.Locale>|undefined} an array of available locales
 */
ilib.NumFmt.getAvailableLocales = function () {
	return undefined;
};

/**
 * @private
 * @const
 * @type string
 */
ilib.NumFmt.zeros = "0000000000000000000000000000000000000000000000000000000000000000000000";


ilib.NumFmt.prototype = {
	/*
	 * @private
	 */
	_pad: function (str, length, left) {
		return (str.length >= length) ? 
			str : 
			(left ? 
				ilib.NumFmt.zeros.substring(0,length-str.length) + str : 
				str + ilib.NumFmt.zeros.substring(0,length-str.length));  
	},
	
	/**
	 * @private
	 * @param {Number|ilib.Number|string|number} num object, string, or number to convert to a primitive number
	 * @returns {number} the primitive number equivalent of the argument
	 */
	_toPrimitive: function (num) {
		var n = 0;
		
		switch (typeof(num)) {
		case 'number':
			n = num;
			break;
		case 'string':
			n = parseFloat(num);
			break;
		case 'object':
			// Number.valueOf() is incorrectly documented as being of type "string" rather than "number", so coerse 
			// the type here to shut the type checker up
			n = /** @type {number} */ num.valueOf();
			break;
		}
		
		return n;
	},
	
	/**
	 * @private
	 * @param {number} num the number to format
	 * @returns {string} the formatted number 
	 */
	_formatScientific: function (num) {
		var n = new Number(num);
		var formatted;
		if (typeof(this.maxFractionDigits) !== 'undefined') {
			// if there is fraction digits, round it to the right length first
			// divide or multiply by 10 by manipulating the exponent so as to
			// avoid the rounding errors of floating point numbers
			var e, 
				factor,
				str = n.toExponential(),
				parts = str.split("e"),
				significant = parts[0];
			
			e = parts[1];	
			factor = Math.pow(10, this.maxFractionDigits);
			significant = this.round(significant * factor) / factor;
			formatted = "" + significant + "e" + e;
		} else {
			formatted = n.toExponential(this.minFractionDigits);
		}
		return formatted;
	},
	
	/**
	 * @private 
	 * @param {number} num the number to format
	 * @returns {string} the formatted number
	 */ 
	_formatStandard: function (num) {
		var i;
		
		// console.log("_formatNumberStandard: formatting number " + num);
		if (typeof(this.maxFractionDigits) !== 'undefined' && this.maxFractionDigits > -1) {
			var factor = Math.pow(10, this.maxFractionDigits);
			num = this.round(num * factor) / factor;
		}

		var negative = (num < 0);
		if (negative) {
			num = -num;
		}
		
		var parts = ("" + num).split("."),
			integral = parts[0],
			fraction = parts[1],
			cycle,
			groupSize = this.localeInfo.getGroupingDigits(),
			formatted;
		
		
		if (this.minFractionDigits > 0) {
			fraction = this._pad(fraction || "", this.minFractionDigits, false);
		}

		if (groupSize > 0) {
			cycle = ilib.mod(integral.length-1, groupSize);
			formatted = negative ? "-" : "";
			for (i = 0; i < integral.length-1; i++) {
				formatted += integral.charAt(i);
				if (cycle === 0) {
					formatted += this.localeInfo.getGroupingSeparator();
				}
				cycle = ilib.mod(cycle - 1, groupSize);
			}
			formatted += integral.charAt(integral.length-1);
		} else {
			formatted = (negative ? "-" : "") + integral;
		}
		
		if (fraction && (typeof(this.maxFractionDigits) === 'undefined' || this.maxFractionDigits > 0)) {
			formatted += this.localeInfo.getDecimalSeparator();
			formatted += fraction;
		}
		
		// console.log("_formatNumberStandard: returning " + formatted);
		return formatted;
	},
	
	/**
	 * Format a number according to the settings of this number formatter instance.
	 * @param num {number|string|Number|ilib.Number} a floating point number to format
	 * @returns {string} a string containing the formatted number
	 */
	format: function (num) {
		var formatted, n;

		if (typeof(num) === 'undefined') {
			return "";
		}
		
		// convert to a real primitive number type
		n = this._toPrimitive(num);
		
		if (this.type === "number") {
			formatted = (this.style === "scientific") ? 
					this._formatScientific(n) : 
					this._formatStandard(n);
		} else {			
			formatted = this.template.format({n: this._formatStandard(n), s: this.sign});
		}
		
		return formatted;
	},
	
	/**
	 * Return the type of formatter. Valid values are "number", "currency", and
	 * "percentage".
	 * 
	 * @returns {string} the type of formatter
	 */
	getType: function () {
		return this.type;
	},
	
	/**
	 * Return the locale for this formatter instance.
	 * @returns {ilib.Locale} the locale instance for this formatter
	 */
	getLocale: function () {
		return this.locale;
	},
	
	/**
	 * Returns true if this formatter groups together digits in the integral 
	 * portion of a number, based on the options set up in the constructor. In 
	 * most western European cultures, this means separating every 3 digits 
	 * of the integral portion of a number with a particular character.
	 * 
	 * @returns {boolean} true if this formatter groups digits in the integral
	 * portion of the number
	 */
	isGroupingUsed: function () {
		var c = this.localeInfo.getGroupingSeparator();
		return (c !== 'undefined' && c.length > 0);
	},
	
	/**
	 * Returns the maximum fraction digits set up in the constructor.
	 * 
	 * @returns {number} the maximum number of fractional digits this
	 * formatter will format, or -1 for no maximum
	 */
	getMaxFractionDigits: function () {
		return typeof(this.maxFractionDigits) !== 'undefined' ? this.maxFractionDigits : -1;
	},
	
	/**
	 * Returns the minimum fraction digits set up in the constructor. If
	 * the formatter has the type "currency", then the minimum fraction
	 * digits is the amount of digits that is standard for the currency
	 * in question unless overridden in the options to the constructor.
	 * 
	 * @returns {number} the minimum number of fractional digits this
	 * formatter will format, or -1 for no minimum
	 */
	getMinFractionDigits: function () {
		return typeof(this.minFractionDigits) !== 'undefined' ? this.minFractionDigits : -1;
	},

	/**
	 * Returns the ISO 4217 code for the currency that this formatter formats.
	 * IF the typeof this formatter is not "currency", then this method will
	 * return undefined.
	 * 
	 * @returns {string} the ISO 4217 code for the currency that this formatter
	 * formats, or undefined if this not a currency formatter
	 */
	getCurrency: function () {
		return this.currencyInfo && this.currencyInfo.getCode();
	},
	
	/**
	 * Returns the rounding mode set up in the constructor. The rounding mode
	 * controls how numbers are rounded when the integral or fraction digits 
	 * of a number are limited.
	 * 
	 * @returns {string} the name of the rounding mode used in this formatter
	 */
	getRoundingMode: function () {
		return this.roundingMode;
	},
	
	/**
	 * If this formatter is a currency formatter, then the style determines how the
	 * currency is denoted in the formatted output. This method returns the style
	 * that this formatter will produce. (See the constructor comment for more about
	 * the styles.)
	 * @returns {string} the name of the style this formatter will use to format
	 * currency amounts, or "undefined" if this formatter is not a currency formatter
	 */
	getStyle: function () {
		return this.style;
	}
};

/*
 * durfmt.js - Date formatter definition
 * 
 * Copyright © 2012, JEDL Software, Inc.
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
!depends 
ilibglobal.js 
locale.js 
date.js 
strings.js 
resources.js 
localeinfo.js
*/

// !data dateformats sysres
// !resbundle sysres

/**
 * @class
 * 
 * Create a new duration formatter instance. The duration formatter is immutable once
 * it is created, but can format as many different durations as needed with the same
 * options. Create different duration formatter instances for different purposes
 * and then keep them cached for use later if you have more than one duration to
 * format.<p>
 * 
 * Duration formatters format lengths of time. The duration formatter is meant to format 
 * durations of such things as the length of a song or a movie or a meeting, or the 
 * current position in that song or movie while playing it. If you wish to format a 
 * period of time that has a specific start and end date/time, then use a
 * [ilib.DateRngFmt] instance instead and call its format method.<p>
 *  
 * The options may contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - locale to use when formatting the duration. If the locale is
 * not specified, then the default locale of the app or web page will be used.
 * 
 * <li><i>length</i> - Specify the length of the format to use. The length is the approximate size of the 
 * formatted string.
 * 
 * <ul>
 * <li><i>short</i> - use a short representation of the duration. This is the most compact format possible for the locale. eg. 1y 1m 1w 1d 1:01:01
 * <li><i>medium</i> - use a medium length representation of the duration. This is a slightly longer format. eg. 1 yr 1 mo 1 wk 1 dy 1 hr 1 mi 1 se
 * <li><i>long</i> - use a long representation of the duration. This is a fully specified format, but some of the textual 
 * parts may still be abbreviated. eg. 1 yr 1 mo 1 wk 1 day 1 hr 1 min 1 sec
 * <li><i>full</i> - use a full representation of the duration. This is a fully specified format where all the textual 
 * parts are spelled out completely. eg. 1 year, 1 month, 1 week, 1 day, 1 hour, 1 minute and 1 second
 * </ul>
 * 
 * <li><i>style<i> - whether hours, minutes, and seconds should be formatted as a text string
 * or as a regular time as on a clock. eg. text is "1 hour, 15 minutes", whereas clock is "1:15:00". Valid
 * values for this property are "text" or "clock". Default if this property is not specified
 * is "text".
 * </ul>
 * <p>
 * 
 * Depends directive: !depends duration.js
 * 
 * @constructor
 * @param {?Object} options options governing the way this date formatter instance works
 */
ilib.DurFmt = function(options) {
	this.locale = new ilib.Locale();
	this.length = "short";
	this.style = "text";
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (options.length) {
			if (options.length === 'short' ||
				options.length === 'medium' ||
				options.length === 'long' ||
				options.length === 'full') {
				this.length = options.length;
			}
		}
		
		if (options.style) {
			if (options.style === 'text' || options.style === 'clock') {
				this.style = options.style;
			}
		}
	}
	
	this.locinfo = new ilib.LocaleInfo(this.locale);
	var sysres = new ilib.ResBundle({
		locale: this.locale,
		name: "sysres"
	});
	
	switch (this.length) {
		case 'short':
			this.components = {
				year: sysres.getString("#{num}y"),
				month: sysres.getString("#{num}m", "durationShortMonths"),
				week: sysres.getString("#{num}w"),
				day: sysres.getString("#{num}d"),
				hour: sysres.getString("#{num}h"),
				minute: sysres.getString("#{num}m", "durationShortMinutes"),
				second: sysres.getString("#{num}s"),
				millisecond: sysres.getString("#{num}m", "durationShortMillis"),
				separator: sysres.getString(" ", "separatorShort"),
				finalSeparator: "" // not used at this length
			};
			break;
			
		case 'medium':
			this.components = {
				year: sysres.getString("1#1 yr|#{num} yrs", "durationMediumYears"),
				month: sysres.getString("1#1 mo|#{num} mos"),
				week: sysres.getString("1#1 wk|#{num} wks", "durationMediumWeeks"),
				day: sysres.getString("1#1 dy|#{num} dys"),
				hour: sysres.getString("1#1 hr|#{num} hrs", "durationMediumHours"),
				minute: sysres.getString("1#1 mi|#{num} min"),
				second: sysres.getString("1#1 se|#{num} sec"),
				millisecond: sysres.getString("#{num} ms"),
				separator: sysres.getString(" ", "separatorMedium"),
				finalSeparator: "" // not used at this length
			};
			break;
			
		case 'long':
			this.components = {
				year: sysres.getString("1#1 yr|#{num} yrs"),
				month: sysres.getString("1#1 mon|#{num} mons"),
				week: sysres.getString("1#1 wk|#{num} wks"),
				day: sysres.getString("1#1 day|#{num} days", "durationLongDays"),
				hour: sysres.getString("1#1 hr|#{num} hrs"),
				minute: sysres.getString("1#1 min|#{num} min"),
				second: sysres.getString("1#1 sec|#{num} sec"),
				millisecond: sysres.getString("#{num} ms"),
				separator: sysres.getString(", ", "separatorLong"),
				finalSeparator: "" // not used at this length
			};
			break;
			
		case 'full':
			this.components = {
				year: sysres.getString("1#1 year|#{num} years"),
				month: sysres.getString("1#1 month|#{num} months"),
				week: sysres.getString("1#1 week|#{num} weeks"),
				day: sysres.getString("1#1 day|#{num} days"),
				hour: sysres.getString("1#1 hour|#{num} hours"),
				minute: sysres.getString("1#1 minute|#{num} minutes"),
				second: sysres.getString("1#1 second|#{num} seconds"),
				millisecond: sysres.getString("1#1 millisecond|#{num} milliseconds"),
				separator: sysres.getString(", ", "separatorFull"),
				finalSeparator: sysres.getString(" and ", "finalSeparatorFull")
			};
			break;
	}
	
	if (this.style === 'clock') {
		this.timeFmtMS = new ilib.DateFmt({
			locale: this.locale,
			type: "time",
			time: "ms"
		});
		this.timeFmtHM = new ilib.DateFmt({
			locale: this.locale,
			type: "time",
			time: "hm"
		});
		this.timeFmtHMS = new ilib.DateFmt({
			locale: this.locale,
			type: "time",
			time: "hms"
		});
		// munge with the template to make sure that the hours are not formatted mod 12
		this.timeFmtHM.template = this.timeFmtHM.template.replace(/hh?/, 'H');
		this.timeFmtHM.templateArr = this.timeFmtHM._tokenize(this.timeFmtHM.template);
		this.timeFmtHMS.template = this.timeFmtHMS.template.replace(/hh?/, 'H');
		this.timeFmtHMS.templateArr = this.timeFmtHMS._tokenize(this.timeFmtHMS.template);
	}
};

/**
 * @private
 * @static
 */
ilib.DurFmt.complist = {
	"text": ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"],
	"clock": ["year", "month", "week", "day"]
};

/**
 * Format a duration according to the format template of this formatter instance.<p>
 * 
 * The components parameter should be an object that contains any or all of these 
 * numeric properties:
 * 
 * <ul>
 * <li>year
 * <li>month
 * <li>week
 * <li>day
 * <li>hour
 * <li>minute
 * <li>second
 * </ul>
 * <p>
 *
 * When a property is left out of the components parameter or has a value of 0, it will not
 * be formatted into the output string, except for times that include 0 minutes and 0 seconds.
 * 
 * This formatter will not ensure that numbers for each component property is within the
 * valid range for that component. This allows you to format durations that are longer
 * than normal range. For example, you could format a duration has being "33 hours" rather
 * than "1 day, 9 hours".
 * 
 * @param {Object} components date/time components to be formatted into a duration string
 * @returns {ilib.String} a string with the duration formatted according to the style and 
 * locale set up for this formatter instance. If the components parameter is empty or 
 * undefined, an empty string is returned.
 */
ilib.DurFmt.prototype.format = function (components) {
	var i, list, temp, fmt, secondlast = true, str = "";
	
	list = ilib.DurFmt.complist[this.style];
	//for (i = 0; i < list.length; i++) {
	for (i = list.length-1; i >= 0; i--) {
		//console.log("Now dealing with " + list[i]);
		if (typeof(components[list[i]]) !== 'undefined' && components[list[i]] != 0) {
			if (str.length > 0) {
				str = ((this.length === 'full' && secondlast) ? this.components.finalSeparator : this.components.separator) + str;
				secondlast = false;
			}
			str = this.components[list[i]].formatChoice(components[list[i]], {num: components[list[i]]}) + str;
		}
	}

	if (this.style === 'clock') {
		if (typeof(components.hour) !== 'undefined') {
			fmt = (typeof(components.second) !== 'undefined') ? this.timeFmtHMS : this.timeFmtHM;
		} else {
			fmt = this.timeFmtMS;
		}
				
		if (str.length > 0) {
			str += this.components.separator;
		}
		str += fmt._formatTemplate(components, fmt.templateArr);
	}
	
	return new ilib.String(str);
};

/**
 * Return the locale that was used to construct this duration formatter object. If the
 * locale was not given as parameter to the constructor, this method returns the default
 * locale of the system.
 * 
 * @returns {ilib.Locale} locale that this duration formatter was constructed with
 */
ilib.DurFmt.prototype.getLocale = function () {
	return this.locale;
};

/**
 * Return the length that was used to construct this duration formatter object. If the
 * length was not given as parameter to the constructor, this method returns the default
 * length. Valid values are "short", "medium", "long", and "full".
 * 
 * @returns {string} length that this duration formatter was constructed with
 */
ilib.DurFmt.prototype.getLength = function () {
	return this.length;
};

/**
 * Return the style that was used to construct this duration formatter object. Returns
 * one of "text" or "clock".
 * 
 * @returns {string} style that this duration formatter was constructed with
 */
ilib.DurFmt.prototype.getStyle = function () {
	return this.style;
};

ilib.data.ctype_l = {
	"lu": [
		[65, 90],
		[192, 214],
		[216, 222],
		[256],
		[258],
		[260],
		[262],
		[264],
		[266],
		[268],
		[270],
		[272],
		[274],
		[276],
		[278],
		[280],
		[282],
		[284],
		[286],
		[288],
		[290],
		[292],
		[294],
		[296],
		[298],
		[300],
		[302],
		[304],
		[306],
		[308],
		[310],
		[313],
		[315],
		[317],
		[319],
		[321],
		[323],
		[325],
		[327],
		[330],
		[332],
		[334],
		[336],
		[338],
		[340],
		[342],
		[344],
		[346],
		[348],
		[350],
		[352],
		[354],
		[356],
		[358],
		[360],
		[362],
		[364],
		[366],
		[368],
		[370],
		[372],
		[374],
		[376, 377],
		[379],
		[381],
		[385, 386],
		[388],
		[390, 391],
		[393, 395],
		[398, 401],
		[403, 404],
		[406, 408],
		[412, 413],
		[415, 416],
		[418],
		[420],
		[422, 423],
		[425],
		[428],
		[430, 431],
		[433, 435],
		[437],
		[439, 440],
		[444],
		[452],
		[455],
		[458],
		[461],
		[463],
		[465],
		[467],
		[469],
		[471],
		[473],
		[475],
		[478],
		[480],
		[482],
		[484],
		[486],
		[488],
		[490],
		[492],
		[494],
		[497],
		[500],
		[502, 504],
		[506],
		[508],
		[510],
		[512],
		[514],
		[516],
		[518],
		[520],
		[522],
		[524],
		[526],
		[528],
		[530],
		[532],
		[534],
		[536],
		[538],
		[540],
		[542],
		[544],
		[546],
		[548],
		[550],
		[552],
		[554],
		[556],
		[558],
		[560],
		[562],
		[570, 571],
		[573, 574],
		[577],
		[579, 582],
		[584],
		[586],
		[588],
		[590],
		[880],
		[882],
		[886],
		[902],
		[904, 906],
		[908],
		[910, 911],
		[913, 929],
		[931, 939],
		[975],
		[978, 980],
		[984],
		[986],
		[988],
		[990],
		[992],
		[994],
		[996],
		[998],
		[1000],
		[1002],
		[1004],
		[1006],
		[1012],
		[1015],
		[1017, 1018],
		[1021, 1071],
		[1120],
		[1122],
		[1124],
		[1126],
		[1128],
		[1130],
		[1132],
		[1134],
		[1136],
		[1138],
		[1140],
		[1142],
		[1144],
		[1146],
		[1148],
		[1150],
		[1152],
		[1162],
		[1164],
		[1166],
		[1168],
		[1170],
		[1172],
		[1174],
		[1176],
		[1178],
		[1180],
		[1182],
		[1184],
		[1186],
		[1188],
		[1190],
		[1192],
		[1194],
		[1196],
		[1198],
		[1200],
		[1202],
		[1204],
		[1206],
		[1208],
		[1210],
		[1212],
		[1214],
		[1216, 1217],
		[1219],
		[1221],
		[1223],
		[1225],
		[1227],
		[1229],
		[1232],
		[1234],
		[1236],
		[1238],
		[1240],
		[1242],
		[1244],
		[1246],
		[1248],
		[1250],
		[1252],
		[1254],
		[1256],
		[1258],
		[1260],
		[1262],
		[1264],
		[1266],
		[1268],
		[1270],
		[1272],
		[1274],
		[1276],
		[1278],
		[1280],
		[1282],
		[1284],
		[1286],
		[1288],
		[1290],
		[1292],
		[1294],
		[1296],
		[1298],
		[1300],
		[1302],
		[1304],
		[1306],
		[1308],
		[1310],
		[1312],
		[1314],
		[1316],
		[1318],
		[1329, 1366],
		[4256, 4293],
		[7680],
		[7682],
		[7684],
		[7686],
		[7688],
		[7690],
		[7692],
		[7694],
		[7696],
		[7698],
		[7700],
		[7702],
		[7704],
		[7706],
		[7708],
		[7710],
		[7712],
		[7714],
		[7716],
		[7718],
		[7720],
		[7722],
		[7724],
		[7726],
		[7728],
		[7730],
		[7732],
		[7734],
		[7736],
		[7738],
		[7740],
		[7742],
		[7744],
		[7746],
		[7748],
		[7750],
		[7752],
		[7754],
		[7756],
		[7758],
		[7760],
		[7762],
		[7764],
		[7766],
		[7768],
		[7770],
		[7772],
		[7774],
		[7776],
		[7778],
		[7780],
		[7782],
		[7784],
		[7786],
		[7788],
		[7790],
		[7792],
		[7794],
		[7796],
		[7798],
		[7800],
		[7802],
		[7804],
		[7806],
		[7808],
		[7810],
		[7812],
		[7814],
		[7816],
		[7818],
		[7820],
		[7822],
		[7824],
		[7826],
		[7828],
		[7838],
		[7840],
		[7842],
		[7844],
		[7846],
		[7848],
		[7850],
		[7852],
		[7854],
		[7856],
		[7858],
		[7860],
		[7862],
		[7864],
		[7866],
		[7868],
		[7870],
		[7872],
		[7874],
		[7876],
		[7878],
		[7880],
		[7882],
		[7884],
		[7886],
		[7888],
		[7890],
		[7892],
		[7894],
		[7896],
		[7898],
		[7900],
		[7902],
		[7904],
		[7906],
		[7908],
		[7910],
		[7912],
		[7914],
		[7916],
		[7918],
		[7920],
		[7922],
		[7924],
		[7926],
		[7928],
		[7930],
		[7932],
		[7934],
		[7944, 7951],
		[7960, 7965],
		[7976, 7983],
		[7992, 7999],
		[8008, 8013],
		[8025],
		[8027],
		[8029],
		[8031],
		[8040, 8047],
		[8120, 8123],
		[8136, 8139],
		[8152, 8155],
		[8168, 8172],
		[8184, 8187],
		[8450],
		[8455],
		[8459, 8461],
		[8464, 8466],
		[8469],
		[8473, 8477],
		[8484],
		[8486],
		[8488],
		[8490, 8493],
		[8496, 8499],
		[8510, 8511],
		[8517],
		[8579],
		[11264, 11310],
		[11360],
		[11362, 11364],
		[11367],
		[11369],
		[11371],
		[11373, 11376],
		[11378],
		[11381],
		[11390, 11392],
		[11394],
		[11396],
		[11398],
		[11400],
		[11402],
		[11404],
		[11406],
		[11408],
		[11410],
		[11412],
		[11414],
		[11416],
		[11418],
		[11420],
		[11422],
		[11424],
		[11426],
		[11428],
		[11430],
		[11432],
		[11434],
		[11436],
		[11438],
		[11440],
		[11442],
		[11444],
		[11446],
		[11448],
		[11450],
		[11452],
		[11454],
		[11456],
		[11458],
		[11460],
		[11462],
		[11464],
		[11466],
		[11468],
		[11470],
		[11472],
		[11474],
		[11476],
		[11478],
		[11480],
		[11482],
		[11484],
		[11486],
		[11488],
		[11490],
		[11499],
		[11501],
		[42560],
		[42562],
		[42564],
		[42566],
		[42568],
		[42570],
		[42572],
		[42574],
		[42576],
		[42578],
		[42580],
		[42582],
		[42584],
		[42586],
		[42588],
		[42590],
		[42592],
		[42594],
		[42596],
		[42598],
		[42600],
		[42602],
		[42604],
		[42624],
		[42626],
		[42628],
		[42630],
		[42632],
		[42634],
		[42636],
		[42638],
		[42640],
		[42642],
		[42644],
		[42646],
		[42786],
		[42788],
		[42790],
		[42792],
		[42794],
		[42796],
		[42798],
		[42802],
		[42804],
		[42806],
		[42808],
		[42810],
		[42812],
		[42814],
		[42816],
		[42818],
		[42820],
		[42822],
		[42824],
		[42826],
		[42828],
		[42830],
		[42832],
		[42834],
		[42836],
		[42838],
		[42840],
		[42842],
		[42844],
		[42846],
		[42848],
		[42850],
		[42852],
		[42854],
		[42856],
		[42858],
		[42860],
		[42862],
		[42873],
		[42875],
		[42877, 42878],
		[42880],
		[42882],
		[42884],
		[42886],
		[42891],
		[42893],
		[42896],
		[42912],
		[42914],
		[42916],
		[42918],
		[42920],
		[65313, 65338],
		[66560, 66599],
		[119808, 119833],
		[119860, 119885],
		[119912, 119937],
		[119964],
		[119966, 119967],
		[119970],
		[119973, 119974],
		[119977, 119980],
		[119982, 119989],
		[120016, 120041],
		[120068, 120069],
		[120071, 120074],
		[120077, 120084],
		[120086, 120092],
		[120120, 120121],
		[120123, 120126],
		[120128, 120132],
		[120134],
		[120138, 120144],
		[120172, 120197],
		[120224, 120249],
		[120276, 120301],
		[120328, 120353],
		[120380, 120405],
		[120432, 120457],
		[120488, 120512],
		[120546, 120570],
		[120604, 120628],
		[120662, 120686],
		[120720, 120744],
		[120778]
	],
	"ll": [
		[97, 122],
		[170],
		[181],
		[186],
		[223, 246],
		[248, 255],
		[257],
		[259],
		[261],
		[263],
		[265],
		[267],
		[269],
		[271],
		[273],
		[275],
		[277],
		[279],
		[281],
		[283],
		[285],
		[287],
		[289],
		[291],
		[293],
		[295],
		[297],
		[299],
		[301],
		[303],
		[305],
		[307],
		[309],
		[311, 312],
		[314],
		[316],
		[318],
		[320],
		[322],
		[324],
		[326],
		[328, 329],
		[331],
		[333],
		[335],
		[337],
		[339],
		[341],
		[343],
		[345],
		[347],
		[349],
		[351],
		[353],
		[355],
		[357],
		[359],
		[361],
		[363],
		[365],
		[367],
		[369],
		[371],
		[373],
		[375],
		[378],
		[380],
		[382, 384],
		[387],
		[389],
		[392],
		[396, 397],
		[402],
		[405],
		[409, 411],
		[414],
		[417],
		[419],
		[421],
		[424],
		[426, 427],
		[429],
		[432],
		[436],
		[438],
		[441, 442],
		[445, 447],
		[454],
		[457],
		[460],
		[462],
		[464],
		[466],
		[468],
		[470],
		[472],
		[474],
		[476, 477],
		[479],
		[481],
		[483],
		[485],
		[487],
		[489],
		[491],
		[493],
		[495, 496],
		[499],
		[501],
		[505],
		[507],
		[509],
		[511],
		[513],
		[515],
		[517],
		[519],
		[521],
		[523],
		[525],
		[527],
		[529],
		[531],
		[533],
		[535],
		[537],
		[539],
		[541],
		[543],
		[545],
		[547],
		[549],
		[551],
		[553],
		[555],
		[557],
		[559],
		[561],
		[563, 569],
		[572],
		[575, 576],
		[578],
		[583],
		[585],
		[587],
		[589],
		[591, 659],
		[661, 687],
		[881],
		[883],
		[887],
		[891, 893],
		[912],
		[940, 974],
		[976, 977],
		[981, 983],
		[985],
		[987],
		[989],
		[991],
		[993],
		[995],
		[997],
		[999],
		[1001],
		[1003],
		[1005],
		[1007, 1011],
		[1013],
		[1016],
		[1019, 1020],
		[1072, 1119],
		[1121],
		[1123],
		[1125],
		[1127],
		[1129],
		[1131],
		[1133],
		[1135],
		[1137],
		[1139],
		[1141],
		[1143],
		[1145],
		[1147],
		[1149],
		[1151],
		[1153],
		[1163],
		[1165],
		[1167],
		[1169],
		[1171],
		[1173],
		[1175],
		[1177],
		[1179],
		[1181],
		[1183],
		[1185],
		[1187],
		[1189],
		[1191],
		[1193],
		[1195],
		[1197],
		[1199],
		[1201],
		[1203],
		[1205],
		[1207],
		[1209],
		[1211],
		[1213],
		[1215],
		[1218],
		[1220],
		[1222],
		[1224],
		[1226],
		[1228],
		[1230, 1231],
		[1233],
		[1235],
		[1237],
		[1239],
		[1241],
		[1243],
		[1245],
		[1247],
		[1249],
		[1251],
		[1253],
		[1255],
		[1257],
		[1259],
		[1261],
		[1263],
		[1265],
		[1267],
		[1269],
		[1271],
		[1273],
		[1275],
		[1277],
		[1279],
		[1281],
		[1283],
		[1285],
		[1287],
		[1289],
		[1291],
		[1293],
		[1295],
		[1297],
		[1299],
		[1301],
		[1303],
		[1305],
		[1307],
		[1309],
		[1311],
		[1313],
		[1315],
		[1317],
		[1319],
		[1377, 1415],
		[7424, 7467],
		[7522, 7543],
		[7545, 7578],
		[7681],
		[7683],
		[7685],
		[7687],
		[7689],
		[7691],
		[7693],
		[7695],
		[7697],
		[7699],
		[7701],
		[7703],
		[7705],
		[7707],
		[7709],
		[7711],
		[7713],
		[7715],
		[7717],
		[7719],
		[7721],
		[7723],
		[7725],
		[7727],
		[7729],
		[7731],
		[7733],
		[7735],
		[7737],
		[7739],
		[7741],
		[7743],
		[7745],
		[7747],
		[7749],
		[7751],
		[7753],
		[7755],
		[7757],
		[7759],
		[7761],
		[7763],
		[7765],
		[7767],
		[7769],
		[7771],
		[7773],
		[7775],
		[7777],
		[7779],
		[7781],
		[7783],
		[7785],
		[7787],
		[7789],
		[7791],
		[7793],
		[7795],
		[7797],
		[7799],
		[7801],
		[7803],
		[7805],
		[7807],
		[7809],
		[7811],
		[7813],
		[7815],
		[7817],
		[7819],
		[7821],
		[7823],
		[7825],
		[7827],
		[7829, 7837],
		[7839],
		[7841],
		[7843],
		[7845],
		[7847],
		[7849],
		[7851],
		[7853],
		[7855],
		[7857],
		[7859],
		[7861],
		[7863],
		[7865],
		[7867],
		[7869],
		[7871],
		[7873],
		[7875],
		[7877],
		[7879],
		[7881],
		[7883],
		[7885],
		[7887],
		[7889],
		[7891],
		[7893],
		[7895],
		[7897],
		[7899],
		[7901],
		[7903],
		[7905],
		[7907],
		[7909],
		[7911],
		[7913],
		[7915],
		[7917],
		[7919],
		[7921],
		[7923],
		[7925],
		[7927],
		[7929],
		[7931],
		[7933],
		[7935, 7943],
		[7952, 7957],
		[7968, 7975],
		[7984, 7991],
		[8000, 8005],
		[8016, 8023],
		[8032, 8039],
		[8048, 8061],
		[8064, 8071],
		[8080, 8087],
		[8096, 8103],
		[8112, 8116],
		[8118, 8119],
		[8126],
		[8130, 8132],
		[8134, 8135],
		[8144, 8147],
		[8150, 8151],
		[8160, 8167],
		[8178, 8180],
		[8182, 8183],
		[8458],
		[8462, 8463],
		[8467],
		[8495],
		[8500],
		[8505],
		[8508, 8509],
		[8518, 8521],
		[8526],
		[8580],
		[11312, 11358],
		[11361],
		[11365, 11366],
		[11368],
		[11370],
		[11372],
		[11377],
		[11379, 11380],
		[11382, 11388],
		[11393],
		[11395],
		[11397],
		[11399],
		[11401],
		[11403],
		[11405],
		[11407],
		[11409],
		[11411],
		[11413],
		[11415],
		[11417],
		[11419],
		[11421],
		[11423],
		[11425],
		[11427],
		[11429],
		[11431],
		[11433],
		[11435],
		[11437],
		[11439],
		[11441],
		[11443],
		[11445],
		[11447],
		[11449],
		[11451],
		[11453],
		[11455],
		[11457],
		[11459],
		[11461],
		[11463],
		[11465],
		[11467],
		[11469],
		[11471],
		[11473],
		[11475],
		[11477],
		[11479],
		[11481],
		[11483],
		[11485],
		[11487],
		[11489],
		[11491, 11492],
		[11500],
		[11502],
		[11520, 11557],
		[42561],
		[42563],
		[42565],
		[42567],
		[42569],
		[42571],
		[42573],
		[42575],
		[42577],
		[42579],
		[42581],
		[42583],
		[42585],
		[42587],
		[42589],
		[42591],
		[42593],
		[42595],
		[42597],
		[42599],
		[42601],
		[42603],
		[42605],
		[42625],
		[42627],
		[42629],
		[42631],
		[42633],
		[42635],
		[42637],
		[42639],
		[42641],
		[42643],
		[42645],
		[42647],
		[42787],
		[42789],
		[42791],
		[42793],
		[42795],
		[42797],
		[42799, 42801],
		[42803],
		[42805],
		[42807],
		[42809],
		[42811],
		[42813],
		[42815],
		[42817],
		[42819],
		[42821],
		[42823],
		[42825],
		[42827],
		[42829],
		[42831],
		[42833],
		[42835],
		[42837],
		[42839],
		[42841],
		[42843],
		[42845],
		[42847],
		[42849],
		[42851],
		[42853],
		[42855],
		[42857],
		[42859],
		[42861],
		[42863],
		[42865, 42872],
		[42874],
		[42876],
		[42879],
		[42881],
		[42883],
		[42885],
		[42887],
		[42892],
		[42894],
		[42897],
		[42913],
		[42915],
		[42917],
		[42919],
		[42921],
		[43002],
		[64256, 64262],
		[64275, 64279],
		[65345, 65370],
		[66600, 66639],
		[119834, 119859],
		[119886, 119892],
		[119894, 119911],
		[119938, 119963],
		[119990, 119993],
		[119995],
		[119997, 120003],
		[120005, 120015],
		[120042, 120067],
		[120094, 120119],
		[120146, 120171],
		[120198, 120223],
		[120250, 120275],
		[120302, 120327],
		[120354, 120379],
		[120406, 120431],
		[120458, 120485],
		[120514, 120538],
		[120540, 120545],
		[120572, 120596],
		[120598, 120603],
		[120630, 120654],
		[120656, 120661],
		[120688, 120712],
		[120714, 120719],
		[120746, 120770],
		[120772, 120777],
		[120779]
	],
	"lt": [
		[453],
		[456],
		[459],
		[498],
		[8072, 8079],
		[8088, 8095],
		[8104, 8111],
		[8124],
		[8140],
		[8188]
	],
	"lm": [
		[688, 705],
		[710, 721],
		[736, 740],
		[748],
		[750],
		[884],
		[890],
		[1369],
		[1600],
		[1765, 1766],
		[2036, 2037],
		[2042],
		[2074],
		[2084],
		[2088],
		[2417],
		[3654],
		[3782],
		[4348],
		[6103],
		[6211],
		[6823],
		[7288, 7293],
		[7468, 7521],
		[7544],
		[7579, 7615],
		[8305],
		[8319],
		[8336, 8348],
		[11389],
		[11631],
		[11823],
		[12293],
		[12337, 12341],
		[12347],
		[12445, 12446],
		[12540, 12542],
		[40981],
		[42232, 42237],
		[42508],
		[42623],
		[42775, 42783],
		[42864],
		[42888],
		[43471],
		[43632],
		[43741],
		[65392],
		[65438, 65439]
	],
	"lo": [
		[443],
		[448, 451],
		[660],
		[1488, 1514],
		[1520, 1522],
		[1568, 1599],
		[1601, 1610],
		[1646, 1647],
		[1649, 1747],
		[1749],
		[1774, 1775],
		[1786, 1788],
		[1791],
		[1808],
		[1810, 1839],
		[1869, 1957],
		[1969],
		[1994, 2026],
		[2048, 2069],
		[2112, 2136],
		[2308, 2361],
		[2365],
		[2384],
		[2392, 2401],
		[2418, 2423],
		[2425, 2431],
		[2437, 2444],
		[2447, 2448],
		[2451, 2472],
		[2474, 2480],
		[2482],
		[2486, 2489],
		[2493],
		[2510],
		[2524, 2525],
		[2527, 2529],
		[2544, 2545],
		[2565, 2570],
		[2575, 2576],
		[2579, 2600],
		[2602, 2608],
		[2610, 2611],
		[2613, 2614],
		[2616, 2617],
		[2649, 2652],
		[2654],
		[2674, 2676],
		[2693, 2701],
		[2703, 2705],
		[2707, 2728],
		[2730, 2736],
		[2738, 2739],
		[2741, 2745],
		[2749],
		[2768],
		[2784, 2785],
		[2821, 2828],
		[2831, 2832],
		[2835, 2856],
		[2858, 2864],
		[2866, 2867],
		[2869, 2873],
		[2877],
		[2908, 2909],
		[2911, 2913],
		[2929],
		[2947],
		[2949, 2954],
		[2958, 2960],
		[2962, 2965],
		[2969, 2970],
		[2972],
		[2974, 2975],
		[2979, 2980],
		[2984, 2986],
		[2990, 3001],
		[3024],
		[3077, 3084],
		[3086, 3088],
		[3090, 3112],
		[3114, 3123],
		[3125, 3129],
		[3133],
		[3160, 3161],
		[3168, 3169],
		[3205, 3212],
		[3214, 3216],
		[3218, 3240],
		[3242, 3251],
		[3253, 3257],
		[3261],
		[3294],
		[3296, 3297],
		[3313, 3314],
		[3333, 3340],
		[3342, 3344],
		[3346, 3386],
		[3389],
		[3406],
		[3424, 3425],
		[3450, 3455],
		[3461, 3478],
		[3482, 3505],
		[3507, 3515],
		[3517],
		[3520, 3526],
		[3585, 3632],
		[3634, 3635],
		[3648, 3653],
		[3713, 3714],
		[3716],
		[3719, 3720],
		[3722],
		[3725],
		[3732, 3735],
		[3737, 3743],
		[3745, 3747],
		[3749],
		[3751],
		[3754, 3755],
		[3757, 3760],
		[3762, 3763],
		[3773],
		[3776, 3780],
		[3804, 3805],
		[3840],
		[3904, 3911],
		[3913, 3948],
		[3976, 3980],
		[4096, 4138],
		[4159],
		[4176, 4181],
		[4186, 4189],
		[4193],
		[4197, 4198],
		[4206, 4208],
		[4213, 4225],
		[4238],
		[4304, 4346],
		[4352, 4680],
		[4682, 4685],
		[4688, 4694],
		[4696],
		[4698, 4701],
		[4704, 4744],
		[4746, 4749],
		[4752, 4784],
		[4786, 4789],
		[4792, 4798],
		[4800],
		[4802, 4805],
		[4808, 4822],
		[4824, 4880],
		[4882, 4885],
		[4888, 4954],
		[4992, 5007],
		[5024, 5108],
		[5121, 5740],
		[5743, 5759],
		[5761, 5786],
		[5792, 5866],
		[5888, 5900],
		[5902, 5905],
		[5920, 5937],
		[5952, 5969],
		[5984, 5996],
		[5998, 6000],
		[6016, 6067],
		[6108],
		[6176, 6210],
		[6212, 6263],
		[6272, 6312],
		[6314],
		[6320, 6389],
		[6400, 6428],
		[6480, 6509],
		[6512, 6516],
		[6528, 6571],
		[6593, 6599],
		[6656, 6678],
		[6688, 6740],
		[6917, 6963],
		[6981, 6987],
		[7043, 7072],
		[7086, 7087],
		[7104, 7141],
		[7168, 7203],
		[7245, 7247],
		[7258, 7287],
		[7401, 7404],
		[7406, 7409],
		[8501, 8504],
		[11568, 11621],
		[11648, 11670],
		[11680, 11686],
		[11688, 11694],
		[11696, 11702],
		[11704, 11710],
		[11712, 11718],
		[11720, 11726],
		[11728, 11734],
		[11736, 11742],
		[12294],
		[12348],
		[12353, 12438],
		[12447],
		[12449, 12538],
		[12543],
		[12549, 12589],
		[12593, 12686],
		[12704, 12730],
		[12784, 12799],
		[13312, 19893],
		[19968, 40907],
		[40960, 40980],
		[40982, 42124],
		[42192, 42231],
		[42240, 42507],
		[42512, 42527],
		[42538, 42539],
		[42606],
		[42656, 42725],
		[43003, 43009],
		[43011, 43013],
		[43015, 43018],
		[43020, 43042],
		[43072, 43123],
		[43138, 43187],
		[43250, 43255],
		[43259],
		[43274, 43301],
		[43312, 43334],
		[43360, 43388],
		[43396, 43442],
		[43520, 43560],
		[43584, 43586],
		[43588, 43595],
		[43616, 43631],
		[43633, 43638],
		[43642],
		[43648, 43695],
		[43697],
		[43701, 43702],
		[43705, 43709],
		[43712],
		[43714],
		[43739, 43740],
		[43777, 43782],
		[43785, 43790],
		[43793, 43798],
		[43808, 43814],
		[43816, 43822],
		[43968, 44002],
		[44032, 55203],
		[55216, 55238],
		[55243, 55291],
		[63744, 64045],
		[64048, 64109],
		[64112, 64217],
		[64285],
		[64287, 64296],
		[64298, 64310],
		[64312, 64316],
		[64318],
		[64320, 64321],
		[64323, 64324],
		[64326, 64433],
		[64467, 64829],
		[64848, 64911],
		[64914, 64967],
		[65008, 65019],
		[65136, 65140],
		[65142, 65276],
		[65382, 65391],
		[65393, 65437],
		[65440, 65470],
		[65474, 65479],
		[65482, 65487],
		[65490, 65495],
		[65498, 65500],
		[65536, 65547],
		[65549, 65574],
		[65576, 65594],
		[65596, 65597],
		[65599, 65613],
		[65616, 65629],
		[65664, 65786],
		[66176, 66204],
		[66208, 66256],
		[66304, 66334],
		[66352, 66368],
		[66370, 66377],
		[66432, 66461],
		[66464, 66499],
		[66504, 66511],
		[66640, 66717],
		[67584, 67589],
		[67592],
		[67594, 67637],
		[67639, 67640],
		[67644],
		[67647, 67669],
		[67840, 67861],
		[67872, 67897],
		[68096],
		[68112, 68115],
		[68117, 68119],
		[68121, 68147],
		[68192, 68220],
		[68352, 68405],
		[68416, 68437],
		[68448, 68466],
		[68608, 68680],
		[69635, 69687],
		[69763, 69807],
		[73728, 74606],
		[77824, 78894],
		[92160, 92728],
		[110592, 110593],
		[131072, 173782],
		[173824, 177972],
		[177984, 178205],
		[194560, 195101]
	]
}
;
/*
 * ctype.islpha.js - Character type is alphabetic
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ctype.js

// !data ctype_l

/**
 * Return whether or not the first character is alphabetic.<p>
 * 
 * Depends directive: !depends ctype.isalnum.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is alphabetic.
 */
ilib.CType.isAlpha = function (ch) {
	return ilib.CType._inRange(ch, 'lu', ilib.data.ctype_l) ||
		ilib.CType._inRange(ch, 'll', ilib.data.ctype_l) ||
		ilib.CType._inRange(ch, 'lt', ilib.data.ctype_l) ||
		ilib.CType._inRange(ch, 'lm', ilib.data.ctype_l) ||
		ilib.CType._inRange(ch, 'lo', ilib.data.ctype_l);
};

/*
 * ctype.isalnum.js - Character type alphanumeric
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ctype.js ctype.isalpha.js ctype.isdigit.js

/**
 * Return whether or not the first character is alphabetic or numeric.<p>
 * 
 * Depends directive: !depends ctype.isalnum.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is alphabetic or numeric
 */
ilib.CType.isAlnum = function isAlnum(ch) {
	return ilib.CType.isAlpha(ch) || ilib.CType.isDigit(ch);
};

/*
 * ctype.isascii.js - Character type is ASCII
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ctype.js

// !data ctype

/**
 * Return whether or not the first character is in the ASCII range.<p>
 * 
 * Depends directive: !depends ctype.isascii.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is in the ASCII range.
 */
ilib.CType.isAscii = function (ch) {
	return ilib.CType._inRange(ch, 'ascii', ilib.data.ctype);
};

/*
 * ctype.isblank.js - Character type is blank
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ctype.js

// !data ctype

/**
 * Return whether or not the first character is a blank character.<p>
 * 
 * Depends directive: !depends ctype.isblank.js
 * 
 * ie. a space or a tab.
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is a blank character.
 */
ilib.CType.isBlank = function (ch) {
	return ilib.CType._inRange(ch, 'blank', ilib.data.ctype);
};

ilib.data.ctype_c = {
	"cn": [
		[888, 889],
		[895, 899],
		[907],
		[909],
		[930],
		[1320, 1328],
		[1367, 1368],
		[1376],
		[1416],
		[1419, 1424],
		[1480, 1487],
		[1515, 1519],
		[1525, 1535],
		[1540, 1541],
		[1564, 1565],
		[1806],
		[1867, 1868],
		[1970, 1983],
		[2043, 2047],
		[2094, 2095],
		[2111],
		[2140, 2141],
		[2143, 2303],
		[2424],
		[2432],
		[2436],
		[2445, 2446],
		[2449, 2450],
		[2473],
		[2481],
		[2483, 2485],
		[2490, 2491],
		[2501, 2502],
		[2505, 2506],
		[2511, 2518],
		[2520, 2523],
		[2526],
		[2532, 2533],
		[2556, 2560],
		[2564],
		[2571, 2574],
		[2577, 2578],
		[2601],
		[2609],
		[2612],
		[2615],
		[2618, 2619],
		[2621],
		[2627, 2630],
		[2633, 2634],
		[2638, 2640],
		[2642, 2648],
		[2653],
		[2655, 2661],
		[2678, 2688],
		[2692],
		[2702],
		[2706],
		[2729],
		[2737],
		[2740],
		[2746, 2747],
		[2758],
		[2762],
		[2766, 2767],
		[2769, 2783],
		[2788, 2789],
		[2800],
		[2802, 2816],
		[2820],
		[2829, 2830],
		[2833, 2834],
		[2857],
		[2865],
		[2868],
		[2874, 2875],
		[2885, 2886],
		[2889, 2890],
		[2894, 2901],
		[2904, 2907],
		[2910],
		[2916, 2917],
		[2936, 2945],
		[2948],
		[2955, 2957],
		[2961],
		[2966, 2968],
		[2971],
		[2973],
		[2976, 2978],
		[2981, 2983],
		[2987, 2989],
		[3002, 3005],
		[3011, 3013],
		[3017],
		[3022, 3023],
		[3025, 3030],
		[3032, 3045],
		[3067, 3072],
		[3076],
		[3085],
		[3089],
		[3113],
		[3124],
		[3130, 3132],
		[3141],
		[3145],
		[3150, 3156],
		[3159],
		[3162, 3167],
		[3172, 3173],
		[3184, 3191],
		[3200, 3201],
		[3204],
		[3213],
		[3217],
		[3241],
		[3252],
		[3258, 3259],
		[3269],
		[3273],
		[3278, 3284],
		[3287, 3293],
		[3295],
		[3300, 3301],
		[3312],
		[3315, 3329],
		[3332],
		[3341],
		[3345],
		[3387, 3388],
		[3397],
		[3401],
		[3407, 3414],
		[3416, 3423],
		[3428, 3429],
		[3446, 3448],
		[3456, 3457],
		[3460],
		[3479, 3481],
		[3506],
		[3516],
		[3518, 3519],
		[3527, 3529],
		[3531, 3534],
		[3541],
		[3543],
		[3552, 3569],
		[3573, 3584],
		[3643, 3646],
		[3676, 3712],
		[3715],
		[3717, 3718],
		[3721],
		[3723, 3724],
		[3726, 3731],
		[3736],
		[3744],
		[3748],
		[3750],
		[3752, 3753],
		[3756],
		[3770],
		[3774, 3775],
		[3781],
		[3783],
		[3790, 3791],
		[3802, 3803],
		[3806, 3839],
		[3912],
		[3949, 3952],
		[3992],
		[4029],
		[4045],
		[4059, 4095],
		[4294, 4303],
		[4349, 4351],
		[4681],
		[4686, 4687],
		[4695],
		[4697],
		[4702, 4703],
		[4745],
		[4750, 4751],
		[4785],
		[4790, 4791],
		[4799],
		[4801],
		[4806, 4807],
		[4823],
		[4881],
		[4886, 4887],
		[4955, 4956],
		[4989, 4991],
		[5018, 5023],
		[5109, 5119],
		[5789, 5791],
		[5873, 5887],
		[5901],
		[5909, 5919],
		[5943, 5951],
		[5972, 5983],
		[5997],
		[6001],
		[6004, 6015],
		[6110, 6111],
		[6122, 6127],
		[6138, 6143],
		[6159],
		[6170, 6175],
		[6264, 6271],
		[6315, 6319],
		[6390, 6399],
		[6429, 6431],
		[6444, 6447],
		[6460, 6463],
		[6465, 6467],
		[6510, 6511],
		[6517, 6527],
		[6572, 6575],
		[6602, 6607],
		[6619, 6621],
		[6684, 6685],
		[6751],
		[6781, 6782],
		[6794, 6799],
		[6810, 6815],
		[6830, 6911],
		[6988, 6991],
		[7037, 7039],
		[7083, 7085],
		[7098, 7103],
		[7156, 7163],
		[7224, 7226],
		[7242, 7244],
		[7296, 7375],
		[7411, 7423],
		[7655, 7675],
		[7958, 7959],
		[7966, 7967],
		[8006, 8007],
		[8014, 8015],
		[8024],
		[8026],
		[8028],
		[8030],
		[8062, 8063],
		[8117],
		[8133],
		[8148, 8149],
		[8156],
		[8176, 8177],
		[8181],
		[8191],
		[8293, 8297],
		[8306, 8307],
		[8335],
		[8349, 8351],
		[8378, 8399],
		[8433, 8447],
		[8586, 8591],
		[9204, 9215],
		[9255, 9279],
		[9291, 9311],
		[9984],
		[10187],
		[10189],
		[11085, 11087],
		[11098, 11263],
		[11311],
		[11359],
		[11506, 11512],
		[11558, 11567],
		[11622, 11630],
		[11633, 11646],
		[11671, 11679],
		[11687],
		[11695],
		[11703],
		[11711],
		[11719],
		[11727],
		[11735],
		[11743],
		[11826, 11903],
		[11930],
		[12020, 12031],
		[12246, 12271],
		[12284, 12287],
		[12352],
		[12439, 12440],
		[12544, 12548],
		[12590, 12592],
		[12687],
		[12731, 12735],
		[12772, 12783],
		[12831],
		[13055],
		[19894, 19903],
		[40908, 40959],
		[42125, 42127],
		[42183, 42191],
		[42540, 42559],
		[42612, 42619],
		[42648, 42655],
		[42744, 42751],
		[42895],
		[42898, 42911],
		[42922, 43001],
		[43052, 43055],
		[43066, 43071],
		[43128, 43135],
		[43205, 43213],
		[43226, 43231],
		[43260, 43263],
		[43348, 43358],
		[43389, 43391],
		[43470],
		[43482, 43485],
		[43488, 43519],
		[43575, 43583],
		[43598, 43599],
		[43610, 43611],
		[43644, 43647],
		[43715, 43738],
		[43744, 43776],
		[43783, 43784],
		[43791, 43792],
		[43799, 43807],
		[43815],
		[43823, 43967],
		[44014, 44015],
		[44026, 44031],
		[55204, 55215],
		[55239, 55242],
		[55292, 55295],
		[64046, 64047],
		[64110, 64111],
		[64218, 64255],
		[64263, 64274],
		[64280, 64284],
		[64311],
		[64317],
		[64319],
		[64322],
		[64325],
		[64450, 64466],
		[64832, 64847],
		[64912, 64913],
		[64968, 65007],
		[65022, 65023],
		[65050, 65055],
		[65063, 65071],
		[65107],
		[65127],
		[65132, 65135],
		[65141],
		[65277, 65278],
		[65280],
		[65471, 65473],
		[65480, 65481],
		[65488, 65489],
		[65496, 65497],
		[65501, 65503],
		[65511],
		[65519, 65528],
		[65534, 65535],
		[65548],
		[65575],
		[65595],
		[65598],
		[65614, 65615],
		[65630, 65663],
		[65787, 65791],
		[65795, 65798],
		[65844, 65846],
		[65931, 65935],
		[65948, 65999],
		[66046, 66175],
		[66205, 66207],
		[66257, 66303],
		[66335],
		[66340, 66351],
		[66379, 66431],
		[66462],
		[66500, 66503],
		[66518, 66559],
		[66718, 66719],
		[66730, 67583],
		[67590, 67591],
		[67593],
		[67638],
		[67641, 67643],
		[67645, 67646],
		[67670],
		[67680, 67839],
		[67868, 67870],
		[67898, 67902],
		[67904, 68095],
		[68100],
		[68103, 68107],
		[68116],
		[68120],
		[68148, 68151],
		[68155, 68158],
		[68168, 68175],
		[68185, 68191],
		[68224, 68351],
		[68406, 68408],
		[68438, 68439],
		[68467, 68471],
		[68480, 68607],
		[68681, 69215],
		[69247, 69631],
		[69710, 69713],
		[69744, 69759],
		[69826, 73727],
		[74607, 74751],
		[74851, 74863],
		[74868, 77823],
		[78895, 92159],
		[92729, 110591],
		[110594, 118783],
		[119030, 119039],
		[119079, 119080],
		[119262, 119295],
		[119366, 119551],
		[119639, 119647],
		[119666, 119807],
		[119893],
		[119965],
		[119968, 119969],
		[119971, 119972],
		[119975, 119976],
		[119981],
		[119994],
		[119996],
		[120004],
		[120070],
		[120075, 120076],
		[120085],
		[120093],
		[120122],
		[120127],
		[120133],
		[120135, 120137],
		[120145],
		[120486, 120487],
		[120780, 120781],
		[120832, 126975],
		[127020, 127023],
		[127124, 127135],
		[127151, 127152],
		[127167, 127168],
		[127184],
		[127200, 127231],
		[127243, 127247],
		[127279],
		[127338, 127343],
		[127387, 127461],
		[127491, 127503],
		[127547, 127551],
		[127561, 127567],
		[127570, 127743],
		[127777, 127791],
		[127798],
		[127869, 127871],
		[127892, 127903],
		[127941],
		[127947, 127967],
		[127985, 127999],
		[128063],
		[128065],
		[128248],
		[128253, 128255],
		[128318, 128335],
		[128360, 128506],
		[128512],
		[128529],
		[128533],
		[128535],
		[128537],
		[128539],
		[128543],
		[128550, 128551],
		[128556],
		[128558, 128559],
		[128564],
		[128577, 128580],
		[128592, 128639],
		[128710, 128767],
		[128884, 131071],
		[173783, 173823],
		[177973, 177983],
		[178206, 194559],
		[195102, 917504],
		[917506, 917535],
		[917632, 917759],
		[918000, 983039],
		[1048574, 1048575],
		[1114110, 1114111]
	],
	"cc": [
		[0, 31],
		[127, 159]
	],
	"cf": [
		[173],
		[1536, 1539],
		[1757],
		[1807],
		[6068, 6069],
		[8203, 8207],
		[8234, 8238],
		[8288, 8292],
		[8298, 8303],
		[65279],
		[65529, 65531],
		[69821],
		[119155, 119162],
		[917505],
		[917536, 917631]
	],
	"co": [
		[57344, 63743],
		[983040, 1048573],
		[1048576, 1114109]
	],
	"cs": [
		[55296, 57343]
	]
}
;
/*
 * ctype.iscntrl.js - Character type is control character
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ctype.js

// !data ctype_c

/**
 * Return whether or not the first character is a control character.<p>
 * 
 * Depends directive: !depends ctype.iscntrl.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is a control character.
 */
ilib.CType.isCntrl = function (ch) {
	return ilib.CType._inRange(ch, 'cc', ilib.data.ctype_c);
};

/*
 * ctype.isgraph.js - Character type is graph char
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ctype.js ctype.isspace.js ctype.iscntrl.js

/**
 * Return whether or not the first character is any printable character
 * other than space.<p>
 * 
 * Depends directive: !depends ctype.isgraph.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is any printable character
 * other than space. 
 */
ilib.CType.isGraph = function (ch) {
	return typeof(ch) !== 'undefined' && ch.length > 0 && !ilib.CType.isSpace(ch) && !ilib.CType.isCntrl(ch);
};

/*
 * ctype.js - Character type definitions
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ctype.js

// !data ctype

/**
 * Return whether or not the first character is an ideographic character.<p>
 * 
 * Depends directive: !depends ctype.isideo.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is an ideographic character.
 */
ilib.CType.isIdeo = function (ch) {
	return ilib.CType._inRange(ch, 'cjk', ilib.data.ctype) ||
		ilib.CType._inRange(ch, 'cjkradicals', ilib.data.ctype) ||
		ilib.CType._inRange(ch, 'enclosedcjk', ilib.data.ctype) ||
		ilib.CType._inRange(ch, 'cjkpunct', ilib.data.ctype) ||
		ilib.CType._inRange(ch, 'cjkcompatibility', ilib.data.ctype);
	
};

/*
 * ctype.islower.js - Character type is lower case letter
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ctype.js

// !data ctype_l

/**
 * Return whether or not the first character is lower-case. For alphabetic
 * characters in scripts that do not make a distinction between upper- and 
 * lower-case, this function always returns true.<p>
 * 
 * Depends directive: !depends ctype.islower.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is lower-case.
 */
ilib.CType.isLower = function (ch) {
	return ilib.CType._inRange(ch, 'll', ilib.data.ctype_l);
};

/*
 * ctype.isprint.js - Character type is printable char
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ctype.js ctype.iscntrl.js

/**
 * Return whether or not the first character is any printable character,
 * including space.<p>
 * 
 * Depends directive: !depends ctype.isprint.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is printable.
 */
ilib.CType.isPrint = function (ch) {
	return typeof(ch) !== 'undefined' && ch.length > 0 && !ilib.CType.isCntrl(ch);
};

ilib.data.ctype_p = {
	"pd": [
		[45],
		[1418],
		[1470],
		[5120],
		[6150],
		[8208, 8213],
		[11799],
		[11802],
		[12316],
		[12336],
		[12448],
		[65073, 65074],
		[65112],
		[65123],
		[65293]
	],
	"ps": [
		[40],
		[91],
		[123],
		[3898],
		[3900],
		[5787],
		[8218],
		[8222],
		[8261],
		[8317],
		[8333],
		[9001],
		[10088],
		[10090],
		[10092],
		[10094],
		[10096],
		[10098],
		[10100],
		[10181],
		[10214],
		[10216],
		[10218],
		[10220],
		[10222],
		[10627],
		[10629],
		[10631],
		[10633],
		[10635],
		[10637],
		[10639],
		[10641],
		[10643],
		[10645],
		[10647],
		[10712],
		[10714],
		[10748],
		[11810],
		[11812],
		[11814],
		[11816],
		[12296],
		[12298],
		[12300],
		[12302],
		[12304],
		[12308],
		[12310],
		[12312],
		[12314],
		[12317],
		[64830],
		[65047],
		[65077],
		[65079],
		[65081],
		[65083],
		[65085],
		[65087],
		[65089],
		[65091],
		[65095],
		[65113],
		[65115],
		[65117],
		[65288],
		[65339],
		[65371],
		[65375],
		[65378]
	],
	"pe": [
		[41],
		[93],
		[125],
		[3899],
		[3901],
		[5788],
		[8262],
		[8318],
		[8334],
		[9002],
		[10089],
		[10091],
		[10093],
		[10095],
		[10097],
		[10099],
		[10101],
		[10182],
		[10215],
		[10217],
		[10219],
		[10221],
		[10223],
		[10628],
		[10630],
		[10632],
		[10634],
		[10636],
		[10638],
		[10640],
		[10642],
		[10644],
		[10646],
		[10648],
		[10713],
		[10715],
		[10749],
		[11811],
		[11813],
		[11815],
		[11817],
		[12297],
		[12299],
		[12301],
		[12303],
		[12305],
		[12309],
		[12311],
		[12313],
		[12315],
		[12318, 12319],
		[64831],
		[65048],
		[65078],
		[65080],
		[65082],
		[65084],
		[65086],
		[65088],
		[65090],
		[65092],
		[65096],
		[65114],
		[65116],
		[65118],
		[65289],
		[65341],
		[65373],
		[65376],
		[65379]
	],
	"pc": [
		[95],
		[8255, 8256],
		[8276],
		[65075, 65076],
		[65101, 65103],
		[65343]
	],
	"po": [
		[33, 35],
		[37, 39],
		[42],
		[44],
		[46, 47],
		[58, 59],
		[63, 64],
		[92],
		[161],
		[183],
		[191],
		[894],
		[903],
		[1370, 1375],
		[1417],
		[1472],
		[1475],
		[1478],
		[1523, 1524],
		[1545, 1546],
		[1548, 1549],
		[1563],
		[1566, 1567],
		[1642, 1645],
		[1748],
		[1792, 1805],
		[2039, 2041],
		[2096, 2110],
		[2142],
		[2404, 2405],
		[2416],
		[3572],
		[3663],
		[3674, 3675],
		[3844, 3858],
		[3973],
		[4048, 4052],
		[4057, 4058],
		[4170, 4175],
		[4347],
		[4961, 4968],
		[5741, 5742],
		[5867, 5869],
		[5941, 5942],
		[6100, 6102],
		[6104, 6106],
		[6144, 6149],
		[6151, 6154],
		[6468, 6469],
		[6686, 6687],
		[6816, 6822],
		[6824, 6829],
		[7002, 7008],
		[7164, 7167],
		[7227, 7231],
		[7294, 7295],
		[7379],
		[8214, 8215],
		[8224, 8231],
		[8240, 8248],
		[8251, 8254],
		[8257, 8259],
		[8263, 8273],
		[8275],
		[8277, 8286],
		[11513, 11516],
		[11518, 11519],
		[11632],
		[11776, 11777],
		[11782, 11784],
		[11787],
		[11790, 11798],
		[11800, 11801],
		[11803],
		[11806, 11807],
		[11818, 11822],
		[11824, 11825],
		[12289, 12291],
		[12349],
		[12539],
		[42238, 42239],
		[42509, 42511],
		[42611],
		[42622],
		[42738, 42743],
		[43124, 43127],
		[43214, 43215],
		[43256, 43258],
		[43310, 43311],
		[43359],
		[43457, 43469],
		[43486, 43487],
		[43612, 43615],
		[43742, 43743],
		[44011],
		[65040, 65046],
		[65049],
		[65072],
		[65093, 65094],
		[65097, 65100],
		[65104, 65106],
		[65108, 65111],
		[65119, 65121],
		[65128],
		[65130, 65131],
		[65281, 65283],
		[65285, 65287],
		[65290],
		[65292],
		[65294, 65295],
		[65306, 65307],
		[65311, 65312],
		[65340],
		[65377],
		[65380, 65381],
		[65792, 65793],
		[66463],
		[66512],
		[67671],
		[67871],
		[67903],
		[68176, 68184],
		[68223],
		[68409, 68415],
		[69703, 69709],
		[69819, 69820],
		[69822, 69825],
		[74864, 74867]
	],
	"pi": [
		[171],
		[8216],
		[8219, 8220],
		[8223],
		[8249],
		[11778],
		[11780],
		[11785],
		[11788],
		[11804],
		[11808]
	],
	"pf": [
		[187],
		[8217],
		[8221],
		[8250],
		[11779],
		[11781],
		[11786],
		[11789],
		[11805],
		[11809]
	]
}
;
/*
 * ctype.ispunct.js - Character type is punctuation
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ctype.js

// !data ctype_p

/**
 * Return whether or not the first character is punctuation.<p>
 * 
 * Depends directive: !depends ctype.isprint.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is punctuation.
 */
ilib.CType.isPunct = function (ch) {
	return ilib.CType._inRange(ch, 'pd', ilib.data.ctype_p) ||
		ilib.CType._inRange(ch, 'ps', ilib.data.ctype_p) ||
		ilib.CType._inRange(ch, 'pe', ilib.data.ctype_p) ||
		ilib.CType._inRange(ch, 'pc', ilib.data.ctype_p) ||
		ilib.CType._inRange(ch, 'po', ilib.data.ctype_p) ||
		ilib.CType._inRange(ch, 'pi', ilib.data.ctype_p) ||
		ilib.CType._inRange(ch, 'pf', ilib.data.ctype_p);
};

/*
 * ctype.isupper.js - Character type is upper-case letter
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ctype.js

// !data ctype_l

/**
 * Return whether or not the first character is upper-case. For alphabetic
 * characters in scripts that do not make a distinction between upper- and 
 * lower-case, this function always returns true.<p>
 * 
 * Depends directive: !depends ctype.isupper.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is upper-case.
 */
ilib.CType.isUpper = function (ch) {
	return ilib.CType._inRange(ch, 'lu', ilib.data.ctype_l);
};

/*
 * ctype.isdigit.js - Character type is digit
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ctype.js

// !data ctype

/**
 * Return whether or not the first character is a hexadecimal digit written
 * in the Latin script. (0-9 or A-F)<p>
 * 
 * Depends directive: !depends ctype.isxdigit.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is a hexadecimal digit written
 * in the Latin script.
 */
ilib.CType.isXdigit = function (ch) {
	return ilib.CType._inRange(ch, 'xdigit', ilib.data.ctype);
};

/**
 * @license
 * Copyright © 2012, JEDL Software, Inc.
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
 * ilib.js - metafile that includes all other js files
 */

/* !depends
ilibglobal.js
daterangefmt.js
date.js
calendar/hebrewdate.js
calendar/hebrew.js
calendar/islamic.js
calendar/islamicdate.js
calendar/julian.js
calendar/juliandate.js
calendar/gregorian.js
calendar/gregoriandate.js
numprs.js
numfmt.js
julianday.js
datefmt.js
calendar.js
util/utils.js
locale.js
strings.js
durfmt.js
resources.js
ctype.js
localeinfo.js
daterangefmt.js
ctype.isalnum.js
ctype.isalpha.js
ctype.isascii.js
ctype.isblank.js
ctype.iscntrl.js
ctype.isdigit.js
ctype.isgraph.js
ctype.isideo.js
ctype.islower.js
ctype.isprint.js
ctype.ispunct.js
ctype.isspace.js
ctype.isupper.js
ctype.isxdigit.js
*/
