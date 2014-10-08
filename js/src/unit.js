/*
 * unit.js - Unit class
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
localeinfo.js
*/


/**
 * Create a measurement instance. The measurement is immutable once
 * it is created, but can be converted to other measurements later.<p>
 * 
 * The options may contain any of the following properties:
 * 
 * <ul>
 * <li><i>amount</i> - either a numeric amount for this measurement given
 * as a number of the specified units, or another ilib.Measurement instance 
 * to convert to the requested units. If converting to new units, the type
 * of measure between the other instance's units and the current units
 * must be the same. That is, you can only convert one unit of mass to
 * another. You cannot convert a unit of mass into a unit of length. 
 * 
 * <li><i>unit</i> - units of this measurement. Use the 
 * static call {@link ilib.Measurement.getAvailableUnits}
 * to find out what units this version of ilib supports. If the given unit
 * is not a base unit, the amount will be normalized to the number of base units
 * and stored as that number of base units.
 * For example, if an instance is constructed with 1 kg, this will be converted
 * automatically into 1000 g, as grams are the base unit and kg is merely a 
 * commonly used scale of grams.
 * </ul>
 * 
 * Here are some examples of converting a length into new units. The first method
 * is via the constructor by passing the old measurement in as the amount property.
 * 
 * <code>
 * var measurement1 = new ilib.Measurement({
 *   amount: 5,
 *   units: "kilometers"
 * });
 * var measurement2 = new ilib.Measurement({
 *   amount: measurement1,
 *   units: "miles"
 * });
 * </code>
 * 
 * The value in measurement2 will end up being about 3.125 miles.
 * 
 * The second method will be using the convert method.
 * 
 * <code>
 * var measurement1 = new ilib.Measurement({
 *   amount: 5,
 *   units: "kilometers"
 * });
 * var measurement2 = measurement1.convert("miles");
 * });
 * </code>
 *
 * The value in measurement2 will again end up being about 3.125 miles.
 * 
 * @constructor
 * @class
 * @param {Object} options options that control the construction of this instance
 */
ilib.Measurement = function(options) {
	if (!options || typeof(options.unit) === 'undefined') {
		return undefined;
	}

	this.amount = options.amount || 0;
	var measure = undefined;

	for (var c in ilib.Measurement._constructors) {
		var measurement = ilib.Measurement._constructors[c];
		if (typeof(measurement.aliases[options.unit]) !== 'undefined') {
			measure = c;
			break;
		}
	}

	if (!measure || typeof(measure) === 'undefined') {
		return new ilib.Measurement.Unknown({
			unit: options.unit,
			amount: options.amount
		});                
	} else {
		return new ilib.Measurement._constructors[measure](options);
	}
};

/**
 * @private
 */
ilib.Measurement._constructors = {};

/**
 * Return a list of all possible units that this version of ilib supports.
 * Typically, the units are given as their full names in English. Unit names
 * are case-insensitive.
 * 
 * @static
 * @return {Array.<string>} an array of strings containing names of units available
 */
ilib.Measurement.getAvailableUnits = function () {
	var units = [];
	for (var c in ilib.Measurement._constructors) {
		var measure = ilib.Measurement._constructors[c];
		units.concat(measure.getMeasures());
	}
	return units;
};

ilib.Measurement.metricScales = {
	"femto": {"symbol": "f", "scale": -15},
	"pico": {"symbol": "p", "scale": -12},
	"nano": {"symbol": "n", "scale": -9},
	"micro": {"symbol": "µ", "scale": -6},
	"milli": {"symbol": "m", "scale": -3},
	"centi": {"symbol": "c", "scale": -2},
	"deci": {"symbol": "d", "scale": -1},
	"deca": {"symbol": "da", "scale": 1},
	"hecto": {"symbol": "h", "scale": 2},
	"kilo": {"symbol": "k", "scale": 3},
	"mega": {"symbol": "M", "scale": 6},
	"giga": {"symbol": "G", "scale": 9},
	"peta": {"symbol": "P", "scale": 12},
	"exa": {"symbol": "E", "scale": 18}
};

ilib.Measurement.prototype = {
	/**
	 * Return the normalized name of the given units. If the units are
	 * not recognized, this method returns its parameter unmodified.<p>
	 * 
	 * Examples:
	 * 
	 * <ui>
	 * <li>"metres" gets normalized to "meter"<br>
	 * <li>"ml" gets normalized to "milliliter"<br>
	 * <li>"foobar" gets normalized to "foobar" (no change because it is not recognized)
	 * </ul>
	 *  
	 * @param {string} name name of the units to normalize. 
	 * @returns {string} normalized name of the units
	 */
	normalizeUnits: function(name) {
		return this.aliases[name] || name;
	},

	/**
	 * Return the normalized units used in this measurement.
	 * @return {string} name of the unit of measurement 
	 */
	getUnit: function() {
		return this.unit;
	},
	
	/**
	 * Return the units originally used to construct this measurement
	 * before it was normalized.
	 * @return {string} name of the unit of measurement 
	 */
	getOriginalUnit: function() {
		return this.originalUnit;
	},
	
	/**
	 * Return the numeric amount of this measurement.
	 * @return {number} the numeric amount of this measurement
	 */
	getAmount: function() {
		return this.amount;
	},
	
	/**
	 * Return the type of this measurement. Examples are "mass",
	 * "length", "speed", etc. Measurements can only be converted
	 * to measurements of the same type.<p>
	 * 
	 * The type of the units is determined automatically from the 
	 * units. For example, the unit "grams" is type "mass". Use the 
	 * static call {@link ilib.Measurement.getAvailableUnits}
	 * to find out what units this version of ilib supports.
	 * 
	 * @abstract
	 * @return {string} the name of the type of this measurement
	 */
	getMeasure: function() {},
	
	/**
	 * Return a new measurement instance that is converted to a new
	 * measurement unit. Measurements can only be converted
	 * to measurements of the same type.<p>
	 * 
	 * @abstract
	 * @param {string} to The name of the units to convert to
	 * @return {ilib.Measurement|undefined} the converted measurement
	 * or undefined if the requested units are for a different
	 * measurement type
	 */
	convert: function(to) {},     
        
        /**
	 * Scale the measurement unit to an acceptable level. The scaling
	 * happens so that the integer part of the amount is as small as
	 * possible without being below zero. This will result in the 
	 * largest units that can represent this measurement without
	 * fractions. Measurements can only be scaled to other measurements 
	 * of the same type.
	 * 
	 * @abstract
	 * @param {string=} measurementsystem system to use (uscustomary|imperial|metric),
	 * or undefined if the system can be inferred from the current measure
	 * @return {ilib.Measurement} a new instance that is scaled to the 
	 * right level
	 */
	scale: function(measurementsystem) {},
        
        localize: function(locale) {}
};
