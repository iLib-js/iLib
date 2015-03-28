/*
 * unitfmt.js - Unit formatter class
 * 
 * Copyright © 2014-2015, JEDLSoft
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
resources.js 
localeinfo.js
strings.js
numfmt.js
util/utils.js
*/

// !data unitfmt

var ilib = require("./ilibglobal.js");
if (!ilib.bind) ilib.extend(ilib, require("./util/utils.js"));

if (!ilib.Locale) ilib.Locale = require("./locale.js");
if (!ilib.LocaleInfo) ilib.LocaleInfo = require("./localeinfo.js");
if (!ilib.ResBundle) ilib.ResBundle = require("./resources.js");
if (!ilib.String) ilib.String = require("./strings.js");
if (!ilib.NumFmt) ilib.NumFmt = require("./numfmt.js");

/**
 * @class
 * Create a new unit formatter instance. The unit formatter is immutable once
 * it is created, but can format as many different strings with different values
 * as needed with the same options. Create different unit formatter instances 
 * for different purposes and then keep them cached for use later if you have 
 * more than one unit string to format.<p>
 * 
 * The options may contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - locale to use when formatting the units. The locale also
 * controls the translation of the names of the units. If the locale is
 * not specified, then the default locale of the app or web page will be used.
 * 
 * <li><i>autoScale</i> - when true, automatically scale the amount to get the smallest
 * number greater than 1, where possible, possibly by converting units within the locale's
 * measurement system. For example, if the current locale is "en-US", and we have
 * a measurement containing 278 fluid ounces, then the number "278" can be scaled down
 * by converting the units to a larger one such as gallons. The scaled size would be
 * 2.17188 gallons. Since iLib does not have a US customary measure larger than gallons,
 * it cannot scale it down any further. If the amount is less than the smallest measure
 * already, it cannot be scaled down any further and no autoscaling will be applied.
 * Default for the autoScale property is "true", so it only needs to be specified when
 * you want to turn off autoscaling.
 * 
 * <li><i>autoConvert</i> - automatically convert the units to the nearest appropriate
 * measure of the same type in the measurement system used by the locale. For example, 
 * if a measurement of length is given in meters, but the current locale is "en-US" 
 * which uses the US Customary system, then the nearest appropriate measure would be 
 * "yards", and the amount would be converted from meters to yards automatically before
 * being formatted. Default for the autoConvert property is "true", so it only needs to 
 * be specified when you want to turn off autoconversion.
 * 
 * <li><i>maxFractionDigits</i> - the maximum number of digits that should appear in the
 * formatted output after the decimal. A value of -1 means unlimited, and 0 means only print
 * the integral part of the number.
 * 
 * <li><i>minFractionDigits</i> - the minimum number of fractional digits that should
 * appear in the formatted output. If the number does not have enough fractional digits
 * to reach this minimum, the number will be zero-padded at the end to get to the limit.
 * 
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
 * 
 * <li><i>onLoad</i> - a callback function to call when the date format object is fully 
 * loaded. When the onLoad option is given, the UnitFmt object will attempt to
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
 * Here is an example of how you might use the unit formatter to format a string with
 * the correct units.<p>
 * 
 * Depends directive: !depends unitfmt.js
 *  
 * @constructor
 * @param {Object} options options governing the way this date formatter instance works
 */
ilib.UnitFmt = function(options) {
	var sync = true, 
		loadParams = undefined;
	
    this.length = "long";
    this.scale  = true;
    this.measurementType = 'undefined';
    this.convert = true;
	this.locale = new ilib.Locale();

    if (options) {
    	if (options.locale) {
    		this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
    	}

    	if (typeof(options.sync) === 'boolean') {
    		sync = options.sync;
    	}

    	if (typeof(options.loadParams) !== 'undefined') {
    		loadParams = options.loadParams;
    	}

    	if (options.length) {
    		this.length = options.length;
    	}

    	if (typeof(options.autoScale) === 'boolean') {
    		this.scale = options.autoScale;
    	}

    	if (typeof(options.autoConvert) === 'boolean') {
    		this.convert = options.autoConvert;
    	}
        
        if (typeof(options.useNative) === 'boolean') {
    		this.useNative = options.useNative;
    	}

    	if (options.measurementSystem) {
    		this.measurementSystem = options.measurementSystem;
    	}
        
        if (typeof (options.maxFractionDigits) === 'number') {
            /** 
             * @private
             * @type {number|undefined} 
             */
            this.maxFractionDigits = options.maxFractionDigits;
        }
        if (typeof (options.minFractionDigits) === 'number') {
            /** 
             * @private
             * @type {number|undefined} 
             */
            this.minFractionDigits = options.minFractionDigits;
        }
        /** 
         * @private
         * @type {string} 
         */
        this.roundingMode = options.roundingMode;
    }

    if (!ilib.UnitFmt.cache) {
    	ilib.UnitFmt.cache = {};
    }

	ilib.loadData({
		object: ilib.UnitFmt, 
		locale: this.locale, 
		name: "unitfmt.json", 
		sync: sync, 
		loadParams: loadParams, 
		callback: ilib.bind(this, function (format) {                      
			var formatted = format;
			this.template = formatted["unitfmt"][this.length];
			if (options && typeof(options.onLoad) === 'function') {
				options.onLoad(this);
			}
		})
	});
};

ilib.UnitFmt.prototype = {
	
	/**
	 * Return the locale used with this formatter instance.
	 * @return {ilib.Locale} the ilib.Locale instance for this formatter
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
	 * @return {string} the format template for this formatter
	 */
	getTemplate: function() {
		return this.template;
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
    
	/**
	 * Return whether or not this formatter will auto-scale the units while formatting.
	 * @returns {boolean} true if auto-scaling is turned on
	 */
    getScale: function() {
        return this.scale;
    },

    /**
     * Return the measurement system that is used for this formatter.
     * @returns {string} the measurement system used in this formatter
     */
    getMeasurementSystem: function() {
        return this.measurementSystem;
    },

	/**
	 * Format a particular unit instance according to the settings of this
	 * formatter object.
	 * 
	 * @param {ilib.Measurement} measurement measurement to format	 
	 * @return {string} the formatted version of the given date instance
	 */
    format: function (measurement) {
    	var u = this.convert ? measurement.localize(this.locale.getSpec()) : measurement;
    	u = this.scale ? u.scale(this.measurementSystem) : u;
    	var formatted = new ilib.String(this.template[u.getUnit()]);
    	// make sure to use the right plural rules
    	formatted.setLocale(this.locale, true, undefined, undefined);
    	var numFmt = new ilib.NumFmt({
    		locale: this.locale,
    		useNative: this.useNative,
            maxFractionDigits: this.maxFractionDigits,
            minFractionDigits: this.minFractionDigits,
            roundingMode: this.roundingMode
    	});
    	formatted = formatted.formatChoice(u.amount,{n:numFmt.format(u.amount)});
    	return formatted.length > 0 ? formatted : u.amount +" " + u.unit;
    }
};

module.exports = ilib.UnitFmt;