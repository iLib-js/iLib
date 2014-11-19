/*
 * Energy.js - Unit conversions for Energys/energys
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
 * Create a new energy measurement.
 *
 * @class
 * @constructor
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling
 * the construction of this instance
 */
ilib.Measurement.Energy = function (options) {
	this.unit = "ns";
	this.amount = 0;
	this.aliases = ilib.Measurement.Energy.aliases; // share this table in all instances

	if (options) {
		if (typeof(options.unit) !== 'undefined') {
			this.originalUnit = options.unit;
			this.unit = this.aliases[options.unit] || options.unit;
		}

		if (typeof(options.amount) === 'object') {
			if (options.amount.getMeasure() === "energy") {
				this.amount = ilib.Measurement.Energy.convert(this.unit, options.amount.getUnit(), options.amount.getAmount());
			} else {
				throw "Cannot convert units " + options.amount.unit + " to a energy";
			}
		} else if (typeof(options.amount) !== 'undefined') {
			this.amount = parseFloat(options.amount);
		}
	}

	if (typeof(ilib.Measurement.Energy.ratios[this.unit]) === 'undefined') {
		throw "Unknown unit: " + options.unit;
	}
};

ilib.Measurement.Energy.ratios = {
   /*                index mJ          J           BTU               kJ          Wh                Cal               MJ             kWh                gJ             MWh                 GWh         */
    "millijoule":   [ 1,   1,          0.001,      9.4781707775e-7,  1e-6,       2.7777777778e-7,  2.3884589663e-7,  1.0e-9,        2.7777777778e-10,  1.0e-12,       2.7777777778e-13,   2.7777777778e-16  ],
    "joule":        [ 2,   1000,       1,          9.4781707775e-4,  0.001,      2.7777777778e-4,  2.3884589663e-4,  1.0e-6,        2.7777777778e-7,   1.0e-9,        2.7777777778e-10,   2.7777777778e-13  ],
    "BTU":          [ 3,   1055055.9,  1055.0559,  1,                1.0550559,  0.29307108333,    0.25199577243,    1.0550559e-3,  2.9307108333e-4,   1.0550559e-6,  2.9307108333e-7,    2.9307108333e-10  ],
    "kilojoule":    [ 4,   1000000,    1000,       0.94781707775,    1,          0.27777777778,    0.23884589663,    0.001,         2.7777777778e-4,   1.0e-6,        2.7777777778e-7,    2.7777777778e-10  ],
    "watt hour":    [ 5,   3.6e+6,     3600,       3.4121414799,     3.6,        1,                0.85984522786,    0.0036,        0.001,             3.6e-6,        1.0e-6,             1.0e-9            ],
    "calorie":      [ 6,   4.868e+5,   4186.8,     3.9683205411,     4.1868,     1.163,            1,                4.1868e-3,     1.163e-3,          4.1868e-6,     1.163e-6,           1.163e-9          ],
    "megajoule":    [ 7,   1e+9,       1e+6,       947.81707775,     1000,       277.77777778,     238.84589663,     1,             0.27777777778,     0.001,         2.7777777778e-4,    2.7777777778e-7   ],
    "kilowatt hour":[ 8,   3.6e+9,     3.6e+6,     3412.1414799,     3600,       1000,             859.84522786,     3.6,           1,                 3.6e-3,        0.001,              1e-6              ],
    "gigajoule":    [ 9,   1e+12,      1e+9,       947817.07775,     1e+6,       277777.77778,     238845.89663,     1000,          277.77777778,      1,             0.27777777778,      2.7777777778e-4   ],
    "megawatt hour":[ 10,  3.6e+12,    3.6e+9,     3412141.4799,     3.6e+6,     1e+6,             859845.22786,     3600,          1000,              3.6,           1,                  0.001             ],
    "gigawatt hour":[ 11,  3.6e+15,    3.6e+12,    3412141479.9,     3.6e+9,     1e+9,             859845227.86,     3.6e+6,        1e+6,              3600,          1000,               1                 ]
};

ilib.Measurement.Energy.prototype = new ilib.Measurement({});
ilib.Measurement.Energy.prototype.parent = ilib.Measurement;
ilib.Measurement.Energy.prototype.constructor = ilib.Measurement.Energy;

/**
 * @inheritDoc
 */
ilib.Measurement.Energy.prototype.getMeasure = function() {
	return "energy";
};

/**
 * Convert the current energy to another measure.
 *
 * @inheritDoc
 */
ilib.Measurement.Energy.prototype.convert = function(to) {
	if (!to || typeof(ilib.Measurement.Energy.ratios[this.normalizeUnits(to)]) === 'undefined') {
		return undefined;
	}
	return new ilib.Measurement({
		unit: to,
		amount: this
	});
};

ilib.Measurement.Energy.aliases = {
    "milli joule": "millijoule",
    "millijoule": "millijoule",
    "MilliJoule": "millijoule",
    "milliJ": "millijoule",
    "joule": "joule",
    "J": "joule",
    "j": "joule",
    "Joule": "joule",
    "Joules": "joule",
    "joules": "joule",
    "BTU": "BTU",
    "btu": "BTU",
    "British thermal unit": "BTU",
    "british thermal unit": "BTU",
    "kilo joule": "kilojoule",
    "kJ": "kilojoule",
    "kj": "kilojoule",
    "Kj": "kilojoule",
    "kiloJoule": "kilojoule",
    "kilojoule": "kilojoule",
    "kjoule": "kilojoule",
    "watt hour": "watt hour",
    "Wh": "watt hour",
    "wh": "watt hour",
    "watt-hour": "watt hour",
    "calorie": "calorie",
    "Cal": "calorie",
    "cal": "calorie",
    "Calorie": "calorie",
    "calories": "calorie",
    "mega joule": "megajoule",
    "MJ": "megajoule",
    "megajoule": "megajoule",
    "megajoules": "megajoule",
    "Megajoules": "megajoule",
    "megaJoules": "megajoule",
    "MegaJoules": "megajoule",
    "megaJoule": "megajoule",
    "MegaJoule": "megajoule",
    "kilo Watt hour": "kilowatt hour",
    "kWh": "kilowatt hour",
    "kiloWh": "kilowatt hour",
    "KiloWh": "kilowatt hour",
    "KiloWatt-hour": "kilowatt hour",
    "kilowatt hour": "kilowatt hour",
    "kilowatt-hour": "kilowatt hour",
    "KiloWatt-hours": "kilowatt hour",
    "kilowatt-hours": "kilowatt hour",
    "Kilo Watt-hour": "kilowatt hour",
    "Kilo Watt-hours": "kilowatt hour",
    "giga joule": "gigajoule",
    "gJ": "gigajoule",
    "GJ": "gigajoule",
    "GigaJoule": "gigajoule",
    "gigaJoule": "gigajoule",
    "gigajoule": "gigajoule",
    "gigajoule": "gigajoule",
    "GigaJoules": "gigajoule",
    "gigaJoules": "gigajoule",
    "Gigajoules": "gigajoule",
    "gigajoules": "gigajoule",
    "mega watt hour": "megawatt hour",
    "MWh": "megawatt hour",
    "MegaWh": "megawatt hour",
    "megaWh": "megawatt hour",
    "megaWatthour": "megawatt hour",
    "megaWatt-hour": "megawatt hour",
    "mega Watt-hour": "megawatt hour",
    "megaWatt hour": "megawatt hour",
    "megawatt hour": "megawatt hour",
    "mega Watt hour": "megawatt hour",
    "giga watt hour": "gigawatt hour",
    "gWh": "gigawatt hour",
    "GWh": "gigawatt hour",
    "gigaWh": "gigawatt hour",
    "gigaWatt-hour": "gigawatt hour",
    "gigawatt-hour": "gigawatt hour",
    "gigaWatt hour": "gigawatt hour",
    "gigawatt hour": "gigawatt hour",
    "gigawatthour": "gigawatt hour"
};

/**
 * Convert a energy to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param energy {number} amount to be convert
 * @returns {number|undefined} the converted amount
 */
ilib.Measurement.Energy.convert = function(to, from, energy) {
    from = ilib.Measurement.Energy.aliases[from] || from;
    to = ilib.Measurement.Energy.aliases[to] || to;
    var fromRow = ilib.Measurement.Energy.ratios[from];
    var toRow = ilib.Measurement.Energy.ratios[to];
    if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
        return undefined;
    }
    return energy * fromRow[toRow[0]];
};

/**
 * @private
 * @static
 */
ilib.Measurement.Energy.getMeasures = function () {
	var ret = [];
	for (var m in ilib.Measurement.Energy.ratios) {
		ret.push(m);
	}
	return ret;
};

ilib.Measurement.Energy.metricJouleSystem = {
    "millijoule": 1,
    "joule": 2,
    "kilojoule": 4,
    "megajoule": 7,
    "gigajoule": 9
};
ilib.Measurement.Energy.metricWattHourSystem = {
    "watt hour": 5,
    "kilowatt hour": 8,
    "megawatt hour": 10,
    "gigawatt hour": 11
};

ilib.Measurement.Energy.imperialSystem = {
	"BTU": 3
};
ilib.Measurement.Energy.uscustomarySystem = {
	"calorie": 6
};

ilib.Measurement.Energy.metricToImperial = {
    "millijoule": "BTU",
    "joule": "BTU",
    "kilojoule": "BTU",
    "megajoule": "BTU",
    "gigajoule": "BTU"
};
ilib.Measurement.Energy.imperialToMetric = {
	"BTU": "joule"
};

/**
 * @inheritDoc
 */
ilib.Measurement.Energy.prototype.localize = function(locale) {
	var to;
	if (locale === "en-GB") {
		to = ilib.Measurement.Energy.metricToImperial[this.unit] || this.unit;
	} else {
		to = ilib.Measurement.Energy.imperialToMetric[this.unit] || this.unit;
	}

	return new ilib.Measurement.Energy({
	    unit: to,
	    amount: this
	});
};

/**
 * @inheritDoc
 * @param {string|undefined} measurementsystem
 */
ilib.Measurement.Energy.prototype.scale = function(measurementsystem) {
    var fromRow = ilib.Measurement.Energy.ratios[this.unit];
    var mSystem;

    if ((measurementsystem === "metric" && typeof(ilib.Measurement.Energy.metricJouleSystem[this.unit]) !== 'undefined')|| (typeof(measurementsystem) === 'undefined'
        && typeof(ilib.Measurement.Energy.metricJouleSystem[this.unit]) !== 'undefined')) {
        mSystem = ilib.Measurement.Energy.metricJouleSystem;
    }
    else if ((measurementsystem === "metric" && typeof(ilib.Measurement.Energy.metricWattHourSystem[this.unit]) !== 'undefined')|| (typeof(measurementsystem) === 'undefined'
        && typeof(ilib.Measurement.Energy.metricWattHourSystem[this.unit]) !== 'undefined')) {
        mSystem = ilib.Measurement.Energy.metricWattHourSystem;
    }

    else  if (measurementsystem === "uscustomary" || (typeof(measurementsystem) === 'undefined'
        && typeof(ilib.Measurement.Energy.uscustomarySystem[this.unit]) !== 'undefined')) {
        mSystem = ilib.Measurement.Energy.uscustomarySystem;
    }
    else if (measurementsystem === "imperial"|| (typeof(measurementsystem) === 'undefined'
        && typeof(ilib.Measurement.Energy.imperialSystem[this.unit]) !== 'undefined')) {
        mSystem = ilib.Measurement.Energy.imperialSystem;
    }

    var energy = this.amount;
    var munit = this.unit;

    for (var m in mSystem) {
        var tmp = this.amount * fromRow[mSystem[m]];
        if (tmp < 1) break;
        energy = tmp;
        munit = m;
    }

    return new ilib.Measurement.Energy({
        unit: munit,
        amount: energy
    });
};
//register with the factory method
ilib.Measurement._constructors["energy"] = ilib.Measurement.Energy;
