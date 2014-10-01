/*
 * fuelconsumption.js - Unit conversions for FuelConsumption
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
 * Create a new fuelconsumption measurement.
 *
 * @class
 * @constructor
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling
 * the construction of this instance
 */
ilib.Measurement.FuelConsumption = function(options) {
    this.unit = "km/liter";
    this.amount = 0;
    this.aliases = ilib.Measurement.FuelConsumption.aliases; // share this table in all instances

    if (options) {
        if (typeof(options.unit) !== 'undefined') {
            this.originalUnit = options.unit;
            this.unit = this.aliases[options.unit] || options.unit;
        }

        if (typeof(options.amount) === 'object') {
            if (options.amount.getMeasure() === "fuelconsumption") {
                this.amount = ilib.Measurement.FuelConsumption.convert(this.unit, options.amount.getUnit(), options.amount.getAmount());
            } else {
                throw "Cannot convert unit " + options.amount.unit + " to fuelconsumption";
            }
        } else if (typeof(options.amount) !== 'undefined') {
            this.amount = parseFloat(options.amount);
        }
    }
};

ilib.Measurement.FuelConsumption.ratios = ["km/liter", "liter/100km", "mpg", "mpg(imp)"];

ilib.Measurement.FuelConsumption.prototype = new ilib.Measurement({});
ilib.Measurement.FuelConsumption.prototype.parent = ilib.Measurement;
ilib.Measurement.FuelConsumption.prototype.constructor = ilib.Measurement.FuelConsumption;

/**
 * @inheritDoc
 */
ilib.Measurement.FuelConsumption.prototype.getMeasure = function() {
    return "fuelconsumption";
};

/**
 * Convert the current FuelConsumption to another measure.
 *
 * @inheritDoc
 */
ilib.Measurement.FuelConsumption.prototype.convert = function(to) {
    if (!to || typeof(ilib.Measurement.FuelConsumption.ratios[this.normalizeUnits(to)]) === 'undefined') {
        return undefined;
    }
    return new ilib.Measurement({
        unit: to,
        amount: this
    });
};
/*["km/liter", "liter/100km", "mpg", "mpg(imp)"*/
ilib.Measurement.FuelConsumption.aliases = {
	"Km/liter": "km/liter",
	"KM/Liter": "km/liter",
	"KM/L": "km/liter",
	"Kilometers Per Liter": "km/liter",
	"kilometers per liter": "km/liter",
	"km/l": "km/liter",
	"Kilometers/Liter": "km/liter",
	"Kilometer/Liter": "km/liter",
	"kilometers/liter": "km/liter",
	"kilometer/liter": "km/liter",
	"Liter/100km":"liter/100km",
	"Liters/100km":"liter/100km",
	"Liter/100kms":"liter/100km",
	"Liters/100kms":"liter/100km",
	"liter/100km":"liter/100km",
	"liters/100kms":"liter/100km",
	"liters/100km":"liter/100km",
	"liter/100kms":"liter/100km",
	"Liter/100KM":"liter/100km",
	"Liters/100KM":"liter/100km",
	"L/100km":"liter/100km",
	"L/100KM":"liter/100km",
	"l/100KM":"liter/100km",
	"l/100km":"liter/100km",
	"l/100kms":"liter/100km",
	"MPG(US)":"mpg",
    "USMPG ": "mpg",
	"mpgUS":"mpg",
	"mpg(US)":"mpg",
	"mpg(us)":"mpg",
	"mpg-us":"mpg",
	"mpg Imp":"mpg(imp)",
	"MPG(imp)":"mpg(imp)",
	"mpg(imp)":"mpg(imp)",
	"mpg-imp":"mpg(imp)"
};

/**
 * Convert a FuelConsumption to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param fuelConsumption {number} amount to be convert
 * @returns {number|undefined} the converted amount
 */
ilib.Measurement.FuelConsumption.convert = function(to, from, fuelConsumption) {
    from = ilib.Measurement.FuelConsumption.aliases[from] || from;
    to = ilib.Measurement.FuelConsumption.aliases[to] || to;
    var returnValue = 0;

    switch (from) {
        case "km/liter":
            switch (to) {
                case "km/liter":
                    returnValue = fuelConsumption * 1;
                    break;
                case "liter/100km":
                    returnValue = 100 / fuelConsumption;
                    break;
                case "mpg":
                    returnValue = fuelConsumption * 2.35215;
                    break;
                case "mpg(imp)":
                    returnValue = fuelConsumption * 2.82481;
                    break;
            }
            break;
        case "liter/100km":
            switch (to) {
                case "km/liter":
                    returnValue = 100 / fuelConsumption;
                    break;
                case "liter/100km":
                    returnValue = fuelConsumption * 1;
                    break;
                case "mpg":
                    returnValue = 235.215 / fuelConsumption;
                    break;
                case "mpg(imp)":
                    returnValue = 282.481 / fuelConsumption;
                    break;
            }
            break;
        case "mpg":
            switch (to) {
                case "km/liter":
                    returnValue = fuelConsumption * 0.425144;
                    break;
                case "liter/100km":
                    returnValue = 235.215 / fuelConsumption;
                    break;
                case "mpg":
                    returnValue = 1 * fuelConsumption;
                    break;
                case "mpg(imp)":
                    returnValue = 1.20095 * fuelConsumption;
                    break;
            }
            break;
        case "mpg(imp)":
            switch (to) {
                case "km/liter":
                    returnValue = fuelConsumption * 0.354006;
                    break;
                case "liter/100km":
                    returnValue = 282.481 / fuelConsumption;
                    break;
                case "mpg":
                    returnValue = 0.832674 * fuelConsumption;
                    break;
                case "mpg(imp)":
                    returnValue = 1 * fuelConsumption;
                    break;
            }
            break;
    }
    return returnValue;
};

/**
 * @inheritDoc
 * @param {string=} measurementsystem
 * @return {ilib.Measurement}
 */
ilib.Measurement.FuelConsumption.prototype.scale = function(measurementsystem) {
    return new ilib.Measurement.FuelConsumption({
        unit: this.unit,
        amount: this.amount
    }); 
};

/**
 * @private
 * @static
 */
ilib.Measurement.FuelConsumption.getMeasures = function() {
    var ret = [];
    ret.push("km/liter");
    ret.push("liter/100km");
    ret.push("mpg");
    ret.push("mpg(imp)");
    
    return ret;
};

//register with the factory method
ilib.Measurement._constructors["fuelconsumption"] = ilib.Measurement.FuelConsumption;
