/*
 * unitfmt.js - Unit formatter class
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

/*
!depends 
ilibglobal.js 
locale.js 
resources.js 
localeinfo.js
*/

// !data unitformats sysres

/**
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
 * @class
 * @constructor
 * @param {Object} options options governing the way this date formatter instance works
 */
ilib.UnitFmt = function(options) {
	var sync = true, 
		loadParams = undefined;
        var length = "long";
        this.scale  = true;
        this.measurementType = 'undefined';
	
	this.locale = new ilib.Locale();
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (typeof(options.sync) === 'boolean') {
			sync = options.sync;
		}
		
		loadParams = options.loadParams;
                
        if (options.length) {
            length = options.length;
        }
        
        if (typeof(options.autoScale) === 'boolean') {
            this.scale = options.autoScale;
        }
        
        if (options.measurementSystem) {
            this.measurementSystem = options.measurementSystem;
        }
	}
        
	if (!ilib.UnitFmt.cache) {
		ilib.UnitFmt.cache = {};
	}

	new ilib.LocaleInfo(this.locale, {
		sync: sync,
		loadParams: loadParams,
		onLoad: ilib.bind(this, function (li) {
			var templates = {"long": "{n} {u}", "short": "{n}{u}"};
			if (li) {
				this.localeInfo = li;
				templates = this.localeInfo.getUnitFormat();
			}
            this.template = new ilib.String(templates[length]);
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
		var u = this.scale ? measurement.scale(this.measurementSystem) : measurement;            
		return this.template.format({
			n: u.amount,
			u: u.unit
		});
	}
};
