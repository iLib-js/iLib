/*
 * Unknown.js - Unit conversions for Unknowns/Unknowns
 * 
 * Copyright © 2012-2014, JEDLSoft
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
*/

/**
 * Create a new Unknown measurement.
 * 
 * @class
 * @constructor
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling 
 * the construction of this instance
 */
ilib.Measurement.Unknown = function (options) {
	this.unit = options.unit;
	this.amount = options.amount;
};

ilib.Measurement.Unknown.prototype = new ilib.Measurement({});
ilib.Measurement.Unknown.prototype.parent = ilib.Measurement;
ilib.Measurement.Unknown.prototype.constructor = ilib.Measurement.Unknown;

ilib.Measurement.Unknown.aliases = {
	"unknown":"unknown"
}


/**
 * @override
 * @inheritDoc
 */
ilib.Measurement.Unknown.prototype.getMeasure = function() {
	return "unknown";
};

/**
 * Convert the current Unknown to another measure.
 * 
 * @override
 * @inheritDoc
 */
ilib.Measurement.Unknown.prototype.convert = function(to) {
	return undefined;
};

/**
 * Convert a Unknown to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param Unknown {number} amount to be convert
 * @returns {number} the converted amount
 */
ilib.Measurement.Unknown.convert = function(to, from, Unknown) {
    return undefined;
};

/**
 * @private
 * @static
 */
ilib.Measurement.Unknown.getMeasures = function () {
	var ret = [];
	return ret;
};

//register with the factory method
ilib.Measurement._constructors["unknown"] = ilib.Measurement.Unknown;

