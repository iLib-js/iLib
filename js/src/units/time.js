/*
 * Time.js - Unit conversions for Times/times
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
 * Create a new time measurement.
 * 
 * @class
 * @constructor
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling 
 * the construction of this instance
 */
ilib.Measurement.Time = function (options) {
	this.unit = "ns";
	this.amount = 0;
	this.aliases = ilib.Measurement.Time.aliases; // share this table in all instances
	
	if (options) {
		if (typeof(options.unit) !== 'undefined') {
			this.originalUnit = options.unit;
			this.unit = this.aliases[options.unit] || options.unit;
		}
		
		if (typeof(options.amount) === 'object') {
			if (options.amount.getMeasure() === "time") {
				this.amount = ilib.Measurement.Time.convert(this.unit, options.amount.getUnit(), options.amount.getAmount());
			} else {
				throw "Cannot convert units " + options.amount.unit + " to a time";
			}
		} else if (typeof(options.amount) !== 'undefined') {
			this.amount = parseFloat(options.amount);
		}
	}
	
	if (typeof(ilib.Measurement.Time.ratios[this.unit]) === 'undefined') {
		throw "Unknown unit: " + options.unit;
	}
};

ilib.Measurement.Time.ratios = {
	/*              index  nsec        msec        mlsec       sec        min          hour          day           week         month        year         decade        century    */           
	"nanosecond":   [ 1,   1,          0.001,      1e-6,       1e-9,      1.6667e-11,  2.7778e-13,   1.1574e-14,   1.6534e-15,  3.8027e-16,  3.1689e-17,  3.1689e-18,   3.1689e-19  ],  
	"microsecond":  [ 2,   1000,       1,          0.001,      1e-6,      1.6667e-8,   2.7778e-10,   1.1574e-11,   1.6534e-12,  3.8027e-13,  3.1689e-14,  3.1689e-15,   3.1689e-16  ],  
	"millisecond":  [ 3,   1e+6,       1000,       1,          0.001,     1.6667e-5,   2.7778e-7,    1.1574e-8,    1.6534e-9,   3.8027e-10,  3.1689e-11,  3.1689e-12,   3.1689e-13  ],
	"second":       [ 4,   1e+9,       1e+6,       1000,       1,         0.0166667,   0.000277778,  1.1574e-5,    1.6534e-6,   3.8027e-7,   3.1689e-8,   3.1689e-9,    3.1689e-10  ],
	"minute":       [ 5,   6e+10,      6e+7,       60000,      60,        1,           0.0166667,    0.000694444,  9.9206e-5,   2.2816e-5,   1.9013e-6,   1.9013e-7,    1.9013e-8   ],
        "hour":         [ 6,   3.6e+12,    3.6e+9,     3.6e+6,     3600,      60,          1,            0.0416667,    0.00595238,  0.00136895,  0.00011408,  1.1408e-5,    1.1408e-6   ],
        "day":          [ 7,   8.64e+13,   8.64e+10,   8.64e+7,    86400,     1440,        24,           1,            0.142857,    0.0328549,   0.00273791,  0.000273791,  2.7379e-5   ],
        "week":         [ 8,   6.048e+14,  6.048e+11,  6.048e+8,   604800,    10080,       168,          7,            1,           0.229984,    0.0191654,   0.00191654,   0.000191654 ],
        "month":        [ 9,   2.63e+15,   2.63e+12,   2.63e+9,    2.63e+6,   43829.1,     730.484,      30.4368,      4.34812,     1,           0.0833333,   0.00833333,   0.000833333 ],
        "year":         [ 10,  3.156e+16,  3.156e+13,  3.156e+10,  3.156e+7,  525949,      8765.81,      365.242,      52.1775,     12,          1,           0.1,          0.01        ],
        "decade":       [ 11,  3.156e+17,  3.156e+14,  3.156e+11,  3.156e+8,  5.259e+6,    87658.1,      3652.42,      521.775,     120,         10,          1,            0.1         ],
        "century":      [ 12,  3.156e+18,  3.156e+18,  3.156e+12,  3.156e+9,  5.259e+7,    876581,       36524.2,      5217.75,     1200,        100,         10,           1           ]
};

ilib.Measurement.Time.prototype = new ilib.Measurement({});
ilib.Measurement.Time.prototype.parent = ilib.Measurement;
ilib.Measurement.Time.prototype.constructor = ilib.Measurement.Time;

/**
 * @inheritDoc
 */
ilib.Measurement.Time.prototype.getMeasure = function() {
	return "time";
};

/**
 * Convert the current time to another measure.
 * 
 * @inheritDoc
 */
ilib.Measurement.Time.prototype.convert = function(to) {
	if (!to || typeof(ilib.Measurement.Time.ratios[this.normalizeUnits(to)]) === 'undefined') {
		return undefined;
	}
	return new ilib.Measurement({
		unit: to,
		amount: this
	});
};

ilib.Measurement.Time.aliases = {
    "ns":"nanosecond",
    "NS":"nanosecond",
    "nS":"nanosecond",
    "Ns":"nanosecond",
    "Nanosecond":"nanosecond",
    "Nanoseconds":"nanosecond",
    "nanosecond":"nanosecond",
    "nanoseconds":"nanosecond",
    "NanoSecond":"nanosecond",
    "NanoSeconds":"nanosecond",
    "μs":"microsecond",
    "μS":"microsecond",
    "microsecond":"microsecond",
    "microseconds":"microsecond",
    "Microsecond":"microsecond",
    "Microseconds":"microsecond",
    "MicroSecond":"microsecond",
    "MicroSeconds":"microsecond",
    "ms":"millisecond",
    "MS":"millisecond",
    "mS":"millisecond",
    "Ms":"millisecond",
    "millisecond":"millisecond",
    "milliseconds":"millisecond",
    "Millisecond":"millisecond",
    "Milliseconds":"millisecond",
    "MilliSecond":"millisecond",
    "MilliSeconds":"millisecond",
    "s":"second",
    "S":"second",
    "sec":"second",
    "second":"second",
    "seconds":"second",
    "Second":"second",
    "Seconds":"second",
    "min":"minute",
    "Min":"minute",
    "minute":"minute",
    "minutes":"minute",
    "Minute":"minute",
    "Minutes":"minute",
    "h":"hour",
    "H":"hour",
    "hr":"hour",
    "Hr":"hour",
    "hR":"hour",
    "HR":"hour",
    "hour":"hour",
    "hours":"hour",
    "Hour":"hour",
    "Hours":"hour",
    "Hrs":"hour",
    "hrs":"hour",
    "day":"day",
    "days":"day",
    "Day":"day",
    "Days":"day",
    "week":"week",
    "weeks":"week",
    "Week":"week",
    "Weeks":"week",
    "month":"month",
    "Month":"month",
    "months":"month",
    "Months":"month",
    "year":"year",
    "years":"year",
    "Year":"year",
    "Years":"year",
    "yr":"year",
    "Yr":"year",
    "yrs":"year",
    "Yrs":"year",
    "decade":"decade",
    "decades":"decade",
    "Decade":"decade",
    "Decades":"decade",
    "century":"century",
    "centuries":"century",
    "Century":"century",
    "Centuries":"century"
};

/**
 * Convert a time to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param time {number} amount to be convert
 * @returns {number|undefined} the converted amount
 */
ilib.Measurement.Time.convert = function(to, from, time) {
    from = ilib.Measurement.Time.aliases[from] || from;
    to = ilib.Measurement.Time.aliases[to] || to;
    var fromRow = ilib.Measurement.Time.ratios[from];
    var toRow = ilib.Measurement.Time.ratios[to];
    if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
        return undefined;
    }	
    return time * fromRow[toRow[0]];
};

ilib.Measurement.Time.prototype.localize = function(locale) {
    return new ilib.Measurement.Time({
        unit: this.unit,
        amount: this.amount
    });
};

/**
 * @inheritDoc
 * @param {string=} measurementsystem
 * @return {ilib.Measurement}
 */
ilib.Measurement.Time.prototype.scale = function(measurementsystem) {

    var fromRow = ilib.Measurement.Time.ratios[this.unit];
    var time;
    var munit;
    var i=1;

    for (var m in ilib.Measurement.Time.ratios) {
        var tmp = this.amount * fromRow[i];
        if (tmp < 1) break;
        time = tmp;
        munit = m;
        ++i
    }

    return new ilib.Measurement.Time({
        unit: munit,
        amount: time
    });
};
/**
 * @private
 * @static
 */
ilib.Measurement.Time.getMeasures = function () {
	var ret = [];
	for (var m in ilib.Measurement.Time.ratios) {
		ret.push(m);
	}
	return ret;
};

//register with the factory method
ilib.Measurement._constructors["time"] = ilib.Measurement.Time;
