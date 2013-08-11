/*
 * localematch.js - Locale matcher definition
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

// !depends ilibglobal.js locale.js
// !data likelylocales

/**
 * @class
 * Create a new locale matcher instance.  

 * Depends directive: !depends locale.js
 * 
 * @constructor
 * @param {string|ilib.Locale} locale the locale to match
 */
ilib.LocaleMatcher = function(locale) {
	this.locale = (typeof(locale) === 'string') ? new ilib.Locale(locale) : locale;
};


ilib.LocaleMatcher.prototype = {
	/**
	 * Return the locale used to construct this instance. 
	 * @return {ilib.Locale|undefined} the locale for this matcher
	 */
	getLocale: function() {
		return this.locale;
	},
	
	/**
	 * Return an ilib.Locale instance that is fully specified based on partial information
	 * given to the constructor of this locale matcher instance. For example, if the locale
	 * spec given to this locale matcher instance is simply "ru" (for the Russian language), 
	 * then it will fill in the missing region and script tags and return a locale with 
	 * the specifier "ru-Cyrl-RU". (ie. Russian language, Cyrillic, Russian Federation).
	 * Any one or two of the language, script, or region parts may be left unspecified,
	 * and the other one or two parts will be filled in automatically. If this
	 * class has no information about the given locale, then the locale of this
	 * locale matcher instance is returned unchanged.
	 * 
	 * @returns {ilib.Locale} the most likely completion of the partial locale given
	 * to the constructor of this locale matcher instance
	 */
	getLikelyLocale: function () {
		if (typeof(ilib.data.likelylocales[this.locale.getSpec()]) === 'undefined') {
			return this.locale;
		}
		
		return new ilib.Locale(ilib.data.likelylocales[this.locale.getSpec()]);
	}
};

