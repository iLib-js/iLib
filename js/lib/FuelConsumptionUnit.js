/*
 * FuelConsumptionUnit.js - Unit conversions for fuel consumption measurements
 *
 * Copyright © 2014-2015, 2018 JEDLSoft
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
Measurement.js
*/

var Measurement = require("./Measurement.js");

/**
 * @class
 * Create a new fuelconsumption measurement instance.
 *
 * @constructor
 * @extends Measurement
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling
 * the construction of this instance
 */
var FuelConsumptionUnit = function(options) {
    this.unit = "liter-per-100kilometers";
    this.amount = 0;

    if (options) {
        if (typeof(options.unit) !== 'undefined') {
            this.originalUnit = options.unit;
            this.unit = this.normalizeUnits(options.unit) || options.unit;
        }

        if (typeof(options.amount) === 'object') {
            if (options.amount.getMeasure() === "fuelconsumption") {
                this.amount = FuelConsumptionUnit.convert(this.unit, options.amount.getUnit(), options.amount.getAmount());
            } else {
                throw "Cannot convert unit " + options.amount.unit + " to fuelconsumption";
            }
        } else if (typeof(options.amount) !== 'undefined') {
            this.amount = parseFloat(options.amount);
        }
    }
};

FuelConsumptionUnit.prototype = new Measurement();
FuelConsumptionUnit.prototype.parent = Measurement;
FuelConsumptionUnit.prototype.constructor = FuelConsumptionUnit;

FuelConsumptionUnit.ratios = {
    /*                         index    km/L        L/km        L/100km           mpg         mpgi       inverse? */
     "kilometer-per-liter":      [ 1,   1,          1,          100,              2.35215,    2.82481,   false ],
     "liter-per-kilometer":      [ 2,   1,          1,          0.01,             2.35215,    2.82481,   true  ],
     "liter-per-100kilometers":  [ 3,   100,        0.01,       1,                235.215,    282.481,   true  ],
     "mile-per-gallon":          [ 4,   0.425144,   2.35215,    235.215,          1,          1.20095,   false ],
     "mile-per-gallon-imperial": [ 5,   0.354006,   2.82481,    282.481,          0.8326741,  1,         false ]
};

/**
 * Return the type of this measurement. Examples are "mass",
 * "length", "speed", etc. Measurements can only be converted
 * to measurements of the same type.<p>
 *
 * The type of the units is determined automatically from the
 * units. For example, the unit "grams" is type "mass". Use the
 * static call {@link Measurement.getAvailableUnits}
 * to find out what units this version of ilib supports.
 *
 * @return {string} the name of the type of this measurement
 */
FuelConsumptionUnit.prototype.getMeasure = function() {
    return "fuelconsumption";
};

/**
 * Return a new measurement instance that is converted to a new
 * measurement unit. Measurements can only be converted
 * to measurements of the same type.<p>
 *
 * @param {string} to The name of the units to convert to
 * @return {Measurement|undefined} the converted measurement
 * or undefined if the requested units are for a different
 * measurement type
 */
FuelConsumptionUnit.prototype.convert = function(to) {
    if (!to || typeof(FuelConsumptionUnit.ratios[this.normalizeUnits(to)]) === 'undefined') {
        return undefined;
    }
    return new FuelConsumptionUnit({
        unit: to,
        amount: this
    });
};

FuelConsumptionUnit.aliases = {
    "Km/liter": "kilometer-per-liter",
    "KM/Liter": "kilometer-per-liter",
    "KM/L": "kilometer-per-liter",
    "Kilometers Per Liter": "kilometer-per-liter",
    "kilometers per liter": "kilometer-per-liter",
    "km/l": "kilometer-per-liter",
    "Kilometers/Liter": "kilometer-per-liter",
    "Kilometer/Liter": "kilometer-per-liter",
    "kilometers/liter": "kilometer-per-liter",
    "kilometer/liter": "kilometer-per-liter",
    "km/liter": "kilometer-per-liter",
    "Liter/100km": "liter-per-100kilometers",
    "Liters/100km": "liter-per-100kilometers",
    "Liter/100kms": "liter-per-100kilometers",
    "Liters/100kms": "liter-per-100kilometers",
    "liter/100km": "liter-per-100kilometers",
    "liters/100kms": "liter-per-100kilometers",
    "liters/100km": "liter-per-100kilometers",
    "liter/100kms": "liter-per-100kilometers",
    "Liter/100KM": "liter-per-100kilometers",
    "Liters/100KM": "liter-per-100kilometers",
    "L/100km": "liter-per-100kilometers",
    "L/100KM": "liter-per-100kilometers",
    "l/100KM": "liter-per-100kilometers",
    "l/100km": "liter-per-100kilometers",
    "l/100kms": "liter-per-100kilometers",
    "Liter/km": "liter-per-kilometer",
    "Liters/km": "liter-per-kilometer",
    "Liter/kms": "liter-per-kilometer",
    "Liters/kms": "liter-per-kilometer",
    "liter/km": "liter-per-kilometer",
    "liters/kms": "liter-per-kilometer",
    "liters/km": "liter-per-kilometer",
    "liter/kms": "liter-per-kilometer",
    "Liter/KM": "liter-per-kilometer",
    "Liters/KM": "liter-per-kilometer",
    "L/km": "liter-per-kilometer",
    "L/KM": "liter-per-kilometer",
    "l/KM": "liter-per-kilometer",
    "l/km": "liter-per-kilometer",
    "l/kms": "liter-per-kilometer",
    "MPG(US)": "mile-per-gallon",
    "USMPG ": "mile-per-gallon",
    "mpg": "mile-per-gallon",
    "mpgUS": "mile-per-gallon",
    "mpg(US)": "mile-per-gallon",
    "mpg(us)": "mile-per-gallon",
    "mpg-us": "mile-per-gallon",
    "mpg Imp": "mile-per-gallon-imperial",
    "MPG(imp)": "mile-per-gallon-imperial",
    "mpg(imp)": "mile-per-gallon-imperial",
    "mpg-imp": "mile-per-gallon-imperial"
};

FuelConsumptionUnit.metricToUScustomary = {
    "liter-per-kilometer": "mile-per-gallon",
    "kilometer-per-liter": "mile-per-gallon",
    "liter-per-100kilometers": "mile-per-gallon"
};
FuelConsumptionUnit.metricToImperial = {
    "liter-per-kilometer": "mile-per-gallon-imperial",
    "kilometer-per-liter": "mile-per-gallon-imperial",
    "liter-per-100kilometers": "mile-per-gallon-imperial"
};

FuelConsumptionUnit.imperialToMetric = {
    "mile-per-gallon-imperial": "liter-per-100kilometers"
};
FuelConsumptionUnit.imperialToUScustomary = {
    "mile-per-gallon-imperial": "mile-per-gallon"
};

FuelConsumptionUnit.uScustomaryToImperial = {
    "mile-per-gallon": "mile-per-gallon-imperial"
};
FuelConsumptionUnit.uScustomarylToMetric = {
    "mile-per-gallon": "liter-per-100kilometers"
};

/**
 * Localize the measurement to the commonly used measurement in that locale. For example
 * If a user's locale is "en-US" and the measurement is given as "60 kmh",
 * the formatted number should be automatically converted to the most appropriate
 * measure in the other system, in this case, mph. The formatted result should
 * appear as "37.3 mph".
 *
 * @param {string} locale current locale string
 * @returns {Measurement} a new instance that is converted to locale
 */
FuelConsumptionUnit.prototype.localize = function(locale) {
    var to;
    var system = Measurement.getMeasurementSystemForLocale(locale);
    if (system === "uscustomary") {
        to = FuelConsumptionUnit.metricToUScustomary[this.unit] ||
             FuelConsumptionUnit.imperialToUScustomary[this.unit] ||
             this.unit;
    } else if (system === "imperial") {
        to = FuelConsumptionUnit.metricToImperial[this.unit] ||
             FuelConsumptionUnit.uScustomaryToImperial[this.unit] ||
             this.unit;
    } else {
        to = FuelConsumptionUnit.uScustomarylToMetric[this.unit] ||
             FuelConsumptionUnit.imperialToMetric[this.unit] ||
             this.unit;
    }
    return new FuelConsumptionUnit({
        unit: to,
        amount: this
    });
};

/**
 * Convert a FuelConsumption to another measure.
 *
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param fuelConsumption {number} amount to be convert
 * @returns {number|undefined} the converted amount
 */
FuelConsumptionUnit.convert = function(to, from, fuelConsumption) {
    from = Measurement.getUnitIdCaseInsensitive(FuelConsumptionUnit, from) || from;
    to = Measurement.getUnitIdCaseInsensitive(FuelConsumptionUnit, to) || to;
    var fromRow = FuelConsumptionUnit.ratios[from];
    var toRow = FuelConsumptionUnit.ratios[to];
    if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
        return undefined;
    }

    if (fromRow[6] !== toRow[6]) {
        // inverses of each other. Avoid the divide by 0.
        return fuelConsumption ? (fromRow[toRow[0]] / fuelConsumption) : 0;
    }

    // not inverses, so just multiply by the factor
    return fuelConsumption * fromRow[toRow[0]];
};

/**
 * Scale the measurement unit to an acceptable level. The scaling
 * happens so that the integer part of the amount is as small as
 * possible without being below zero. This will result in the
 * largest units that can represent this measurement without
 * fractions. Measurements can only be scaled to other measurements
 * of the same type.
 *
 * @param {string=} measurementsystem system to use (uscustomary|imperial|metric),
 * or undefined if the system can be inferred from the current measure
 * @return {Measurement} a new instance that is scaled to the
 * right level
 */
FuelConsumptionUnit.prototype.scale = function(measurementsystem) {
    return new FuelConsumptionUnit({
        unit: this.unit,
        amount: this.amount
    });
};

/**
 * Expand the current measurement such that any fractions of the current unit
 * are represented in terms of smaller units in the same system instead of fractions
 * of the current unit. For example, "6.25 feet" may be represented as
 * "6 feet 4 inches" instead. The return value is an array of measurements which
 * are progressively smaller until the smallest unit in the system is reached
 * or until there is a whole number of any unit along the way.
 *
 * @param {string=} measurementsystem system to use (uscustomary|imperial|metric),
 * or undefined if the system can be inferred from the current measure
 * @return {Array.<Measurement>} an array of new measurements in order from
 * the current units to the smallest units in the system which together are the
 * same measurement as this one
 */
FuelConsumptionUnit.prototype.expand = function(measurementsystem) {
    return [this]; // nothing to expand
};

/**
 * @private
 * @static
 */
FuelConsumptionUnit.getMeasures = function() {
    return Object.keys(FuelConsumptionUnit.ratios);
};

//register with the factory method
Measurement._constructors["fuelconsumption"] = FuelConsumptionUnit;

module.exports = FuelConsumptionUnit;