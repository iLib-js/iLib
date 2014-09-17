/*
 * temperature.js - Unit conversions for Temperature/temperature
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
*/

/**
 * Create a new Temperature measurement.
 * 
 * @class
 * @constructor
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling 
 * the construction of this instance
 */
ilib.Measurement.Temperature = function (options) {
	this.unit = "celsius";
	this.amount = 0;
	this.aliases = ilib.Measurement.Temperature.aliases; // share this table in all instances

	if (options) {
		if (typeof(options.unit) !== 'undefined') {
			this.originalUnit = options.unit;
			this.unit = this.aliases[options.unit] || options.unit;
		}

		if (typeof(options.amount) === 'object') {
			if (options.amount.getMeasure() === "temperature") {
				this.amount = ilib.Measurement.Temperature.convert(this.unit, options.amount.getUnit(), options.amount.getAmount());
			} else {
				throw "Cannot convert unit " + options.amount.unit + " to a temperature";
			}
		} else if (typeof(options.amount) !== 'undefined') {
			this.amount = parseFloat(options.amount);
		}
	}
};

ilib.Measurement.Temperature.prototype = new ilib.Measurement({});
ilib.Measurement.Temperature.prototype.parent = ilib.Measurement;
ilib.Measurement.Temperature.prototype.constructor = ilib.Measurement.Temperature;

/**
 * @inheritDoc
 */
ilib.Measurement.Temperature.prototype.getMeasure = function() {
	return "temperature";
};

ilib.Measurement.Temperature.aliases = {
	"Celsius": "celsius",
	"celsius": "celsius",
	"C": "celsius",
	"centegrade": "celsius",
	"Centegrade": "celsius",
	"centigrade": "celsius",
	"Centigrade": "celsius",
	"fahrenheit": "fahrenheit",
	"Fahrenheit": "fahrenheit",
	"F": "fahrenheit",
	"kelvin": "kelvin",
	"K": "kelvin",
	"Kelvin": "kelvin",
    "°F": "fahrenheit",
    "℉" : "fahrenheit",
    "℃": "celsius",
    "°C": "celsius"
};

/**
 * Convert a temperature to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param temperature {number} amount to be convert
 * @returns {number|undefined} the converted amount
 */
ilib.Measurement.Temperature.convert = function(to, from, temperature) {
	var result = 0;
	from = ilib.Measurement.Temperature.aliases[from] || from;
	to = ilib.Measurement.Temperature.aliases[to] || to;

	if (from === "celsius") {
		if (to === "fahrenheit") {
			result = ((temperature * 9 / 5) + 32);
		} else if (to === "kelvin") {
			result = (temperature + 273.15);
		}
	} else if (from === "fahrenheit") {
		if (to === "celsius") {
			result = ((5 / 9 * (temperature - 32)));
		} else if (to === "kelvin") {
			result = ((temperature + 459.67) * 5 / 9);
		}
	} else if (from === "kelvin") {
		if (to === "celsius") {
			result = (temperature - 273.15);
		} else if (to === "fahrenheit") {
			result = ((temperature * 9 / 5) - 459.67);
		}
	}
	
	return result;
};
/**
 * @private
 * @static
 */
ilib.Measurement.Temperature.getMeasures = function () {
	return ["celsius", "kelvin", "fahrenheit"];
};

//register with the factory method
ilib.Measurement._constructors["temperature"] = ilib.Measurement.Temperature;
