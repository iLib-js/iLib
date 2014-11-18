/*
 * Mass.js - Unit conversions for Mass/mass
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
 * Create a new mass measurement.
 * 
 * @class
 * @constructor
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling 
 * the construction of this instance
 */
ilib.Measurement.Mass = function (options) {
	this.unit = "ns";
	this.amount = 0;
	this.aliases = ilib.Measurement.Mass.aliases; // share this table in all instances
	
	if (options) {
		if (typeof(options.unit) !== 'undefined') {
			this.originalUnit = options.unit;
			this.unit = this.aliases[options.unit] || options.unit;
		}
		
		if (typeof(options.amount) === 'object') {
			if (options.amount.getMeasure() === "mass") {
				this.amount = ilib.Measurement.Mass.convert(this.unit, options.amount.getUnit(), options.amount.getAmount());
			} else {
				throw "Cannot convert units " + options.amount.unit + " to a mass";
			}
		} else if (typeof(options.amount) !== 'undefined') {
			this.amount = parseFloat(options.amount);
		}
	}
	
	if (typeof(ilib.Measurement.Mass.ratios[this.unit]) === 'undefined') {
		throw "Unknown unit: " + options.unit;
	}
};

ilib.Measurement.Mass.ratios = {
	/*             index  µg          mg         g          oz          lp           kg          st            sh ton       mt ton        ln ton      */           
	"microgram":   [ 1,   1,          0.001,     1e-6,      3.5274e-8,  2.2046e-9,   1e-9,       1.5747e-10,   1.1023e-12,  1e-12,        9.8421e-13   ],  
	"milligram":   [ 2,   1000,       1,         0.001,     3.5274e-5,  2.2046e-6,   1e-6,       1.5747e-7,    1.1023e-9,   1e-9,         9.8421e-10   ],  
	"gram":        [ 3,   1e+6,       1000,      1,         0.035274,   0.00220462,  0.001,      0.000157473,  1.1023e-6,   1e-6,         9.8421e-7    ],
	"ounce":       [ 4,   2.835e+7,   28349.5,   28.3495,   1,          0.0625,      0.0283495,  0.00446429,   3.125e-5,    2.835e-5,     2.7902e-5    ],
	"pound":       [ 5,   4.536e+8,   453592,    453.592,   16,         1,           0.453592,   0.0714286,    0.0005,      0.000453592,  0.000446429  ],
    "kilogram":    [ 6,   1e+9,       1e+6,      1000,      35.274,     2.20462,     1,          0.157473,     0.00110231,  0.001,        0.000984207  ],
    "stone":       [ 7,   6.35e+9,    6.35e+6,   6350.29,   224,        14,          6.35029,    1,            0.007,       0.00635029,   0.00625      ],
    "short ton":   [ 8,   9.072e+11,  9.072e+8,  907185,    32000,      2000,        907.185,    142.857,      1,           0.907185,     0.892857     ],
    "metric ton":  [ 9,   1e+12,      1e+9,      1e+6,      35274,      2204.62,     1000,       157.473,      1.10231,     1,            0.984207     ],
    "long ton":    [ 10,  1.016e+12,  1.016e+9,  1.016e+6,  35840,      2240,        1016.05,    160,          1.12,        1.01605,      1            ]
};

ilib.Measurement.Mass.metricSystem = {
    "microgram": 1,
    "milligram": 2,
    "gram": 3,
    "kilogram": 6,
    "metric ton": 9
};
ilib.Measurement.Mass.imperialSystem = {
    "ounce": 4,
    "pound": 5,
    "stone": 7,
    "long ton": 10
};
ilib.Measurement.Mass.uscustomarySystem = {
    "ounce": 4,
    "pound": 5,
    "short ton": 8
};

ilib.Measurement.Mass.metricToUScustomary = {
    "microgram": "ounce",
    "milligram": "ounce",
    "gram": "ounce",
    "kilogram": "pound",
    "metric ton": "long ton"
};
ilib.Measurement.Mass.metricToImperial = {
    "microgram": "ounce",
    "milligram": "ounce",
    "gram": "ounce",
    "kilogram": "pound",
    "metric ton": "short ton"
};

ilib.Measurement.Mass.imperialToMetric = {
    "ounce": "gram",
    "pound": "kilogram",
    "stone": "kilogram",
    "short ton": "metric ton"
};
ilib.Measurement.Mass.imperialToUScustomary = {
    "ounce": "ounce",
    "pound": "pound",
    "stone": "stone",
    "short ton": "long ton"
};

ilib.Measurement.Mass.uScustomaryToImperial = {
    "ounce": "ounce",
    "pound": "pound",
    "stone": "stone",
    "long ton": "short ton"
};
ilib.Measurement.Mass.uScustomarylToMetric = {
    "ounce": "gram",
    "pound": "kilogram",
    "stone": "kilogram",
    "long ton": "metric ton"
};


ilib.Measurement.Mass.prototype = new ilib.Measurement({});
ilib.Measurement.Mass.prototype.parent = ilib.Measurement;
ilib.Measurement.Mass.prototype.constructor = ilib.Measurement.Mass;

/**
 * @inheritDoc
 */
ilib.Measurement.Mass.prototype.localize = function(locale) {
	var to;
	if (locale === "en-US") {
		to = ilib.Measurement.Mass.metricToUScustomary[this.unit] ||
		    ilib.Measurement.Mass.imperialToUScustomary[this.unit] || this.unit;
	} else if (locale === "en-GB") {
		to = ilib.Measurement.Mass.metricToImperial[this.unit] ||
		    ilib.Measurement.Mass.uScustomaryToImperial[this.unit] || this.unit;
	} else {
		to = ilib.Measurement.Mass.uScustomarylToMetric[this.unit] ||
		    ilib.Measurement.Mass.imperialToUScustomary[this.unit] || this.unit;
	}
	return new ilib.Measurement.Mass({
	    unit: to,
	    amount: this
	});
};

/**
 * @inheritDoc
 */
ilib.Measurement.Mass.prototype.getMeasure = function() {
	return "mass";
};

/**
 * Convert the current mass to another measure.
 * 
 * @inheritDoc
 */
ilib.Measurement.Mass.prototype.convert = function(to) {
	if (!to || typeof(ilib.Measurement.Mass.ratios[this.normalizeUnits(to)]) === 'undefined') {
		return undefined;
	}
	return new ilib.Measurement({
		unit: to,
		amount: this
	});
};

ilib.Measurement.Mass.aliases = {
    "µg":"microgram",
    "microgram":"microgram",
    "mcg":"microgram",  
    "milligram":"milligram",
    "mg":"milligram",
    "milligrams":"milligram",
    "Milligram":"milligram",
    "Milligrams":"milligram",
    "MilliGram":"milligram",
    "MilliGrams":"milligram",
    "g":"gram",
    "gram":"gram",
    "grams":"gram",
    "Gram":"gram",
    "Grams":"gram",
    "ounce":"ounce",
    "oz":"ounce",
    "Ounce":"ounce",
    "℥":"ounce",
    "pound":"pound",
    "poundm":"pound",
    "℔":"pound",
    "lb":"pound",
    "pounds":"pound",
    "Pound":"pound",
    "Pounds":"pound",
    "kilogram":"kilogram",
    "kg":"kilogram",
    "kilograms":"kilogram",
    "kilo grams":"kilogram",
    "kilo gram":"kilogram",
    "Kilogram":"kilogram",    
    "Kilograms":"kilogram",
    "KiloGram":"kilogram",
    "KiloGrams":"kilogram",
    "Kilo gram":"kilogram",
    "Kilo grams":"kilogram",
    "Kilo Gram":"kilogram",
    "Kilo Grams":"kilogram",
    "stone":"stone",
    "st":"stone",
    "stones":"stone",
    "Stone":"stone",
    "short ton":"short ton",
    "Short ton":"short ton",
    "Short Ton":"short ton",
    "metric ton":"metric ton",
    "metricton":"metric ton",
    "t":"metric ton",
    "tonne":"metric ton",
    "Tonne":"metric ton",
    "Metric Ton":"metric ton",
    "MetricTon":"metric ton",    
    "long ton":"long ton",
    "longton":"long ton",
    "Longton":"long ton",
    "Long ton":"long ton",
    "Long Ton":"long ton",
    "ton":"long ton",
    "Ton":"long ton"
};

/**
 * Convert a mass to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param mass {number} amount to be convert
 * @returns {number|undefined} the converted amount
 */
ilib.Measurement.Mass.convert = function(to, from, mass) {
    from = ilib.Measurement.Mass.aliases[from] || from;
    to = ilib.Measurement.Mass.aliases[to] || to;
    var fromRow = ilib.Measurement.Mass.ratios[from];
    var toRow = ilib.Measurement.Mass.ratios[to];
    if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
        return undefined;
    }	
    return mass * fromRow[toRow[0]];    
};

/**
 * @inheritDoc
 * @param {string=} measurementsystem
 * @return {ilib.Measurement}
 */
ilib.Measurement.Mass.prototype.scale = function(measurementsystem) {
    var mSystem;    
    if (measurementsystem === "metric" || (typeof(measurementsystem) === 'undefined' 
            && typeof(ilib.Measurement.Mass.metricSystem[this.unit]) !== 'undefined')) {
        mSystem = ilib.Measurement.Mass.metricSystem;
    } else if (measurementsystem === "imperial" || (typeof(measurementsystem) === 'undefined' 
            && typeof(ilib.Measurement.Mass.imperialSystem[this.unit]) !== 'undefined')) {
        mSystem = ilib.Measurement.Mass.imperialSystem;
    } else if (measurementsystem === "uscustomary" || (typeof(measurementsystem) === 'undefined' 
            && typeof(ilib.Measurement.Mass.uscustomarySystem[this.unit]) !== 'undefined')) {
        mSystem = ilib.Measurement.Mass.uscustomarySystem;
    } else {
        return new ilib.Measurement.Mass({
			unit: this.unit,
			amount: this.amount
		});
    }    
    
    var mass = this.amount;
    var munit = this.amount;
    var fromRow = ilib.Measurement.Mass.ratios[this.unit];
    
    for (var m in mSystem) {
        var tmp = this.amount * fromRow[mSystem[m]];
        if (tmp < 1) break;
        mass = tmp;
        munit = m;
    }
    
    return new ilib.Measurement.Mass({
		unit: munit,
		amount: mass
    });
};

/**
 * @private
 * @static
 */
ilib.Measurement.Mass.getMeasures = function () {
	var ret = [];
	for (var m in ilib.Measurement.Mass.ratios) {
		ret.push(m);
	}
	return ret;
};

//register with the factory method
ilib.Measurement._constructors["mass"] = ilib.Measurement.Mass;
