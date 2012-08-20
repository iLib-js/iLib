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
	// !macro localelist
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