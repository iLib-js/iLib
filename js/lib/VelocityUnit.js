/*
 * VelocityUnit.js - Unit conversions for velocity/speed measurements
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
 * Create a new speed measurement instance.
 *
 * @constructor
 * @extends Measurement
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling
 * the construction of this instance
 */
var VelocityUnit = function (options) {
	this.unit = "meter-per-second";
	this.amount = 0;

	if (options) {
		if (typeof(options.unit) !== 'undefined') {
			this.originalUnit = options.unit;
			this.unit = this.normalizeUnits(options.unit) || options.unit;
		}

		if (typeof(options.amount) === 'object') {
			if (options.amount.getMeasure() === "speed") {
				this.amount = VelocityUnit.convert(this.unit, options.amount.getUnit(), options.amount.getAmount());
			} else {
				throw "Cannot convert units " + options.amount.unit + " to a speed";
			}
		} else if (typeof(options.amount) !== 'undefined') {
			this.amount = parseFloat(options.amount);
		}
	}

	if (typeof(VelocityUnit.ratios[this.unit]) === 'undefined') {
		throw "Unknown unit: " + options.unit;
	}
};

VelocityUnit.prototype = new Measurement();
VelocityUnit.prototype.parent = Measurement;
VelocityUnit.prototype.constructor = VelocityUnit;

VelocityUnit.ratios = {
    /*                    index,  k/h         f/s         miles/h      knot         m/s        km/s         miles/s */
    "kilometer-per-hour":   [ 1,  1,          0.911344,   0.621371,    0.539957,    0.277778,  2.77778e-4,  1.72603109e-4 ],
    "foot-per-second":      [ 2,  1.09728,    1,          0.681818,    0.592484,    0.3048,    3.048e-4,    1.89393939e-4 ],
    "mile-per-hour":        [ 3,  1.60934,    1.46667,    1,           0.868976,    0.44704,   4.4704e-4,   2.77777778e-4 ],
    "knot":                 [ 4,  1.852,      1.68781,    1.15078,     1,           0.514444,  5.14444e-4,  3.19660958e-4 ],
    "meter-per-second":     [ 5,  3.6,        3.28084,    2.236936,    1.94384,     1,         0.001,       6.21371192e-4 ],
    "kilometer-per-second": [ 6,  3600,       3280.8399,  2236.93629,  1943.84449,  1000,      1,           0.621371192   ],
    "mile-per-second":      [ 7,  5793.6384,  5280,       3600,        3128.31447,  1609.344,  1.609344,    1             ]
};

VelocityUnit.metricSystem = {
    "kilometer-per-hour": 1,
    "meter-per-second": 5,
    "kilometer-per-second": 6
};
VelocityUnit.imperialSystem = {
    "foot-per-second": 2,
    "mile-per-hour": 3,
    "knot": 4,
    "mile-per-second": 7
};
VelocityUnit.uscustomarySystem = {
    "foot-per-second": 2,
    "mile-per-hour": 3,
    "knot": 4,
    "mile-per-second": 7
};

VelocityUnit.metricToUScustomary = {
    "kilometer-per-hour": "mile-per-hour",
    "meter-per-second": "foot-per-second",
    "kilometer-per-second": "mile-per-second"
};
VelocityUnit.UScustomaryTometric = {
    "mile-per-hour": "kilometer-per-hour",
    "foot-per-second": "meter-per-second",
    "mile-per-second": "kilometer-per-second",
    "knot": "kilometer-per-hour"
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
VelocityUnit.prototype.getMeasure = function() {
	return "speed";
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
VelocityUnit.prototype.convert = function(to) {
	if (!to || typeof(VelocityUnit.ratios[this.normalizeUnits(to)]) === 'undefined') {
		return undefined;
	}
	return new VelocityUnit({
		unit: to,
		amount: this
	});
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
 * @param {String} style the style of autoscaling
 * @return {Measurement|Array.<Measurement>} a new instance that is scaled to the
 * right level, or an array of instances if the style is "list"
 */
VelocityUnit.prototype.scale = function(measurementsystem) {
	var mSystem;
	if (measurementsystem === "metric" ||
	    (typeof (measurementsystem) === 'undefined' && typeof (VelocityUnit.metricSystem[this.unit]) !== 'undefined')) {
		mSystem = VelocityUnit.metricSystem;
	} else if (measurementsystem === "imperial" ||
	    (typeof (measurementsystem) === 'undefined' && typeof (VelocityUnit.imperialSystem[this.unit]) !== 'undefined')) {
		mSystem = VelocityUnit.imperialSystem;
	} else if (measurementsystem === "uscustomary" ||
	    (typeof (measurementsystem) === 'undefined' && typeof (VelocityUnit.uscustomarySystem[this.unit]) !== 'undefined')) {
		mSystem = VelocityUnit.uscustomarySystem;
	} else {
		return new VelocityUnit({
		    unit: this.unit,
		    amount: this.amount
		});
	}

    var speed = this.amount;
    var munit = this.unit;
    var fromRow = VelocityUnit.ratios[this.unit];

    speed = 18446744073709551999;

    for ( var m in mSystem) {
        var tmp = this.amount * fromRow[mSystem[m]];
        if (tmp >= 1 && tmp < speed) {
            speed = tmp;
            munit = m;
        }
    }

    return new VelocityUnit({
        unit: munit,
        amount: speed
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
VelocityUnit.prototype.expand = function(measurementsystem) {
    var mSystem;
    if (measurementsystem === "metric" ||
            (typeof (measurementsystem) === 'undefined' && typeof (VelocityUnit.metricSystem[this.unit]) !== 'undefined')) {
        mSystem = VelocityUnit.metricSystem;
    } else if (measurementsystem === "imperial" ||
            (typeof (measurementsystem) === 'undefined' && typeof (VelocityUnit.imperialSystem[this.unit]) !== 'undefined')) {
        mSystem = VelocityUnit.imperialSystem;
    } else if (measurementsystem === "uscustomary" ||
            (typeof (measurementsystem) === 'undefined' && typeof (VelocityUnit.uscustomarySystem[this.unit]) !== 'undefined')) {
        mSystem = VelocityUnit.uscustomarySystem;
    } else {
        mSystem = VelocityUnit.metricSystem;
    }

    return this.list(Object.keys(mSystem), VelocityUnit.ratios).map(function(item) {
        return new VelocityUnit(item);
    });
}

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
VelocityUnit.prototype.localize = function(locale) {
    var to;
    if (locale === "en-US" || locale === "en-GB") {
        to = VelocityUnit.metricToUScustomary[this.unit] || this.unit;
    } else {
        to = VelocityUnit.UScustomaryTometric[this.unit] || this.unit;
    }
    return new VelocityUnit({
		unit: to,
		amount: this
    });
};

VelocityUnit.aliases = {
    "foot/sec": "foot-per-second",
    "foot/s": "foot-per-second",
    "feet/s": "foot-per-second",
    "f/s": "foot-per-second",
    "feet/second": "foot-per-second",
    "feet/sec": "foot-per-second",
    "meter/sec": "meter-per-second",
    "meter/s": "meter-per-second",
    "meters/s": "meter-per-second",
    "metre/sec": "meter-per-second",
    "metre/s": "meter-per-second",
    "metres/s": "meter-per-second",
    "mt/sec": "meter-per-second",
    "m/sec": "meter-per-second",
    "mt/s": "meter-per-second",
    "m/s": "meter-per-second",
    "mps": "meter-per-second",
    "meters/second": "meter-per-second",
    "meters/sec": "meter-per-second",
    "kilometer/hour": "kilometer-per-hour",
    "km/hour": "kilometer-per-hour",
    "kilometers/hour": "kilometer-per-hour",
    "kph": "kilometer-per-hour",
    "kmh": "kilometer-per-hour",
    "km/h": "kilometer-per-hour",
    "kilometer/h": "kilometer-per-hour",
    "kilometers/h": "kilometer-per-hour",
    "km/hr": "kilometer-per-hour",
    "kilometer/hr": "kilometer-per-hour",
    "kilometers/hr": "kilometer-per-hour",
    "kilometre/hour": "kilometer-per-hour",
    "mph": "mile-per-hour",
    "mile/hour": "mile-per-hour",
    "mile/hr": "mile-per-hour",
    "mile/h": "mile-per-hour",
    "miles/h": "mile-per-hour",
    "miles/hr": "mile-per-hour",
    "miles/hour": "mile-per-hour",
    "kn": "knot",
    "kt": "knot",
    "kts": "knot",
    "knots": "knot",
    "nm/h": "knot",
    "nm/hr": "knot",
    "nauticalmile/h": "knot",
    "nauticalmile/hr": "knot",
    "nauticalmile/hour": "knot",
    "nauticalmiles/hr": "knot",
    "nauticalmiles/hour": "knot",
    "nautical-mile/h": "knot",
    "nautical-mile/hr": "knot",
    "nautical-mile/hour": "knot",
    "nautical-miles/hr": "knot",
    "nautical-miles/hour": "knot",
    "knot": "knot",
    "kilometer/second": "kilometer-per-second",
    "kilometer/sec": "kilometer-per-second",
    "kilometre/sec": "kilometer-per-second",
    "Kilometre/sec": "kilometer-per-second",
    "kilometers/second": "kilometer-per-second",
    "kilometers/sec": "kilometer-per-second",
    "kilometres/sec": "kilometer-per-second",
    "Kilometres/sec": "kilometer-per-second",
    "km/sec": "kilometer-per-second",
    "Km/s": "kilometer-per-second",
    "km/s": "kilometer-per-second",
    "miles/second": "mile-per-second",
    "miles/sec": "mile-per-second",
    "miles/s": "mile-per-second",
    "mile/s": "mile-per-second",
    "mile/sec": "mile-per-second",
    "Mile/s": "mile-per-second"
};

/**
 * Convert a speed to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param speed {number} amount to be convert
 * @returns {number|undefined} the converted amount
 */
VelocityUnit.convert = function(to, from, speed) {
    from = Measurement.getUnitIdCaseInsensitive(VelocityUnit, from) || from;
    to = Measurement.getUnitIdCaseInsensitive(VelocityUnit, to) || to;
	var fromRow = VelocityUnit.ratios[from];
	var toRow = VelocityUnit.ratios[to];
	if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
		return undefined;
	}
	var result = speed * fromRow[toRow[0]];
    return result;
};

/**
 * @private
 * @static
 */
VelocityUnit.getMeasures = function () {
    return Object.keys(VelocityUnit.ratios);
};

//register with the factory method
Measurement._constructors["speed"] = VelocityUnit;
Measurement._constructors["velocity"] = VelocityUnit;

module.exports = VelocityUnit;