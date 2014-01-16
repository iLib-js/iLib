/*
 * toupper.js - define and load a locale-sensitive upper-case mapper
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

// !depends mapper.js locale.js
// !data toupper

/**
 * @class
 * Create a new string mapper instance that maps strings to upper
 * case. This mapping will work for any string as characters 
 * that have no case will be returned unchanged.<p>
 * 
 * The options may contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - locale to use when loading the mapper. Some maps are 
 * locale-dependent, and this locale selects the right one. Default if this is
 * not specified is the current locale.
 * 
 * <li><i>onLoad</i> - a callback function to call when this object is fully 
 * loaded. When the onLoad option is given, this object will attempt to
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
 * Depends directive: !depends toupper.js
 * 
 * @constructor
 * @param {Object=} options options to initialize this string mapper 
 */
ilib.ToUpperMapper = function (options) {
	var sync = true,
		loadParams = undefined;

	this.locale = new ilib.Locale();
	
	if (options) {
		if (typeof(options.locale) !== 'undefined') {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		sync = options.sync;
		loadParams = options.loadParams;
	}
	
	new ilib.StringMapper({
		name: "toupper",
		sync: sync,
		loadParams: loadParams,
		locale: this.locale,
		mapFunction: function (c) {
			return c.toUpperCase();
		},
		onLoad: ilib.bind(this, function (mapper) {
			if (!mapper || ilib.isEmpty(mapper.mapData)) {
				this.mapper = function(string) {
					return string.toUpperCase();
				};
			} else {
				this.mapper = ilib.bind(mapper, mapper.map);
			}
			if (options && options.onLoad) {
				options.onLoad(this);
			}
		})
	});
};

ilib.ToUpperMapper.prototype = {
	/**
	 * Return the locale that this mapper was constructed with. 
	 * @returns {ilib.Locale} the locale that this mapper was constructed with
	 */
	getLocale: function () {
		return this.locale;
	},
		
	/**
	 * Map a string to upper case in a locale-sensitive manner.
	 * 
	 * @param {string|undefined} string
	 * @return {string|undefined}
	 */
	map: function (string) {
		return this.mapper(string);
	}	
};