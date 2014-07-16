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
 * is not a base unit, the amount will be converted to the number of base units.
 * For example, if an instance is constructed with 1 kg, this will be converted
 * automatically into 1000 g, as grams are the base unit and kg is merely a 
 * commonly used scale of grams.
 * </ul>
 * 
 * Here is an example of converting a length into new units:
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
 * @constructor
 * @class
 * @param {Object} options options that control the construction of this instance
 */
ilib.Measurement = function(options) {
	
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
	
};

ilib.Measurement.prototype = {
	/**
	 * Return the units used in this measurement.
	 * @return {string} name of the unit of measurement 
	 */
	getUnit: function() {},
	
	/**
	 * Return the numeric amount of this measurement.
	 * @return {number} the numeric amount of this measurement
	 */
	getAmount: function() {},
	
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
	 * @return {string} the name of the type of this measurement
	 */
	getMeasure: function() {}
};