/*
 * ListFmt.js - Represent a list formatter.
 * 
 * Copyright © 2017, JEDLSoft
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
ilib.js 
Utils.js
Locale.js 
*/

// !data listfmt

var ilib = require("./ilib.js");
var Utils = require("./Utils.js");
var Locale = require("./Locale.js");


/**
 * @class
 * Create a new list formatter object that formats lists of items according to 
 * the options.<p>
 * 
 * The options object can contain zero or more of the following parameters:
 *
 * <ul>
 * <li><i>locale</i> locale to use to format this list, or undefined to use the 
 * default locale
 * 
 * <li><i>style</i> the name of style to use to format the list, or undefined 
 * to use the default style
 *
 * <li><i>onLoad</i> - a callback function to call when the locale data is fully loaded and the address has been 
 * parsed. When the onLoad option is given, the address formatter object 
 * will attempt to load any missing locale data using the ilib loader callback.
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
 * @constructor
 * @param {Object} options properties that control how this formatter behaves
 */
var ListFmt = function(options) {
	this.sync = true;
	this.styleName = 'default',
	this.loadParams = {};

	var locale = new Locale();

	if (options) {
		if (options.locale) {
			locale = options.locale;
		}

		if (typeof(options.sync) !== 'undefined') {
			this.sync = (options.sync == true);
		}

		if (options.loadParams) {
			this.loadParams = options.loadParams;
		}

		if (options.style) {
			this.style = options.style;
		}
	}

	Utils.loadData({
		name: "listfmt.json",
		object: ListFmt,
		locale: this.locale, 
		sync: this.sync,
		loadParams: this.loadParams,
		callback: ilib.bind(this, function (fmtdata) {
			this.fmtdata = fmtdata;
			
			if (options && typeof(options.onLoad) === 'function') {
				options.onLoad(this);
			}
		})
	});
};


/**
 * Format a list of strings as grammatical text that is appropriate 
 * for the locale of this formatter.
 * 
 * @param {Array.<String>} items an array of strings to format in
 * order that you would like them to appear
 * @returns {String} a string containing the list of items that
 * is grammatically correct for the locale of this formatter
 */
ListFmt.prototype.format = function(items) {
	
};

/**
 * Return the locale of this formatter.
 * 
 * @returns {String} the locale of this formatter
 */
ListFmt.prototype.getLocale = function() {
	
};

module.exports = ListFmt;