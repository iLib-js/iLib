/*
 * Length.js - Unit conversions for Lengths/lengths
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
 * Create a new length measurement.
 * 
 * @class
 * @constructor
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling 
 * the construction of this instance
 */
ilib.Measurement.Length = function (options) {
	this.unit = "meter";
	this.amount = 0;
	this.aliases = ilib.Measurement.Length.aliases; // share this table in all instances
	
	if (options) {
		if (typeof(options.unit) !== 'undefined') {
			this.originalUnit = options.unit;
			this.unit = this.aliases[options.unit] || options.unit;
		}
		
		if (typeof(options.amount) === 'object') {
			if (options.amount.getMeasure() === "length") {
				this.amount = ilib.Measurement.Length.convert(this.unit, options.amount.getUnit(), options.amount.getAmount());
			} else {
				throw "Cannot convert units " + options.unit + " to a length";
			}
		} else if (typeof(options.amount) !== 'undefined') {
			this.amount = parseFloat(options.amount);
		}
	}
	
	if (typeof(ilib.Measurement.Length.ratios[this.unit]) === 'undefined') {
		throw "Unknown unit: " + options.unit;
	}
};

ilib.Measurement.Length.ratios = {
	/*                index, µm          mm          cm           dm          m            dam           hm             km             Mm             Gm              n.m.         mile         yard         foot         inch */ 
	"micrometer":   [ 1,     1,          1e-3,       1e-4,        1e-5,       1e-6,        1e-7,         1e-8,          1e-9,          1e-12,         1e-15,          5.39957e-10, 6.21373e-10, 1.09361e-6,  3.28084e-6,  3.93701e-5 ],
	"millimeter":   [ 2,     1000,       1,          0.1,         0.01,       0.001,       1e-4,         1e-5,          1e-6,          1e-9,          1e-12,          5.39957e-7,  6.21373e-7,  1.09361e-3,  0.00328084,  0.0393701  ],
	"centimeter":   [ 3,     1e4,        10,         1,           0.1,        0.01,        0.001,        1e-4,          1e-5,          1e-8,          1e-9,           5.39957e-6,  6.21373e-6,  0.0109361,   0.0328084,   0.393701   ],
	"decimeter":    [ 4,     1e5,        100,        10,          1,          0.1,         0.01,         0.001,         1e-4,          1e-7,          1e-8,           5.39957e-5,  6.21373e-5,  0.109361,    0.328084,    3.93701    ],
	"meter":        [ 5,     1e6,        1000,       100,         10,         1,           0.1,          0.01,          0.001,         1e-6,          1e-7,           5.39957e-4,  6.213712e-4 ,  1.09361,     3.28084,     39.3701    ],
	"decameter":    [ 6,     1e7,        1e4,        1000,        100,        10,          1,            0.1,           0.01,          1e-5,          1e-6,           5.39957e-3,  6.21373e-3,  10.9361,     32.8084,     393.701    ],
	"hectometer":   [ 7,     1e8,        1e5,        1e4,         1000,       100,         10,           1,             0.1,           1e-4,          1e-5,           0.0539957,   0.0621373,   109.361,     328.084,     3937.01    ],
	"kilometer":    [ 8,     1e9,        1e6,        1e5,         1e4,        1000,        100,          10,            1,             0.001,         1e-4,           0.539957,    0.621373,    1093.61,     3280.84,     39370.1    ],
	"megameter":    [ 9,     1e12,       1e9,        1e6,         1e5,        1e4,         1000,         100,           10,            1,             0.001,          539.957,     621.373,     1.09361e6,   3.28084e6,   3.93701e7  ],
	"gigameter":    [ 10,    1e15,       1e12,       1e9,         1e8,        1e7,         1e6,          1e5,           1e4,           1000,          1,              539957.0,    621373.0,    1.09361e9,   3.28084e9,   3.93701e10 ],
	"nauticalmile": [ 11,    1.852e9,    1.852e6,    1.852e5,     1.852e4,    1852,        185.2,        18.52,         1.852,         1.852e-3,      1.852e-6,       1,           0.868976,    2025.37,     6076.12,     72913.4    ],
	"mile":         [ 12,    1.60934e9,  1.60934e6,  1.60934e5,   1.60934e4,  1609.34,     160.934,      16.0934,       1.60934,       1.60934e-3,    1.60934e-6,     1.15078,     1,           1760,        5280,        63360      ],
	"yard":         [ 13,    914402.758, 914.402758, 91.4402758,  9.14402758, 0.914402758, 0.0914402758, 9.14402758e-3, 9.14402758e-4, 9.14402758e-7, 9.14402758e-10, 4.93737e-4,  5.68182e-4,  1,           3,           36         ],
	"foot":         [ 14,    304799.99,  304.79999,  30.479999,   3.0479999,  0.30479999,  0.030479999,  3.0479999e-3,  3.0479999e-4,  3.0479999e-7,  3.0479999e-10,  1.64579e-4,  1.89394e-4,  0.33333333,  1,           12         ],
	"inch":         [ 15,    25399.986,  25.399986,  2.5399986,   0.25399986, 0.025399986, 2.5399986e-3, 2.5399986e-4,  2.5399986e-5,  2.5399986e-8,  2.5399986e-11,  1.3715e-5,   1.5783e-5,   0.027777778, 0.083333333, 1          ]
};

ilib.Measurement.Length.prototype = new ilib.Measurement({});
ilib.Measurement.Length.prototype.parent = ilib.Measurement;
ilib.Measurement.Length.prototype.constructor = ilib.Measurement.Length;

/**
 * @override
 * @inheritDoc
 */
ilib.Measurement.Length.prototype.getMeasure = function() {
	return "length";
};

/**
 * Convert the current length to another measure.
 * 
 * @override
 * @inheritDoc
 */
ilib.Measurement.Length.prototype.convert = function(to) {
	if (!to || typeof(ilib.Measurement.Length.ratios[this.normalizeUnits(to)]) === 'undefined') {
		return undefined;
	}
	return new ilib.Measurement({
		unit: to,
		amount: this
	});
};

ilib.Measurement.Length.aliases = {
	"miles": "mile",
	"nauticalmiles": "nauticalmile",
	"nautical mile": "nauticalmile",
	"nautical miles": "nauticalmile",
	"yards": "yard",
	"feet": "foot",
	"inches": "inch",
	"meters": "meter",
	"metre": "meter",
	"metres": "meter",
	"m": "meter",
	"micrometers": "micrometer",
	"micrometres": "micrometer",
	"micrometre": "micrometer",
	"µm": "micrometer",
	"millimeters": "millimeter",
	"millimetres": "millimeter",
	"millimetre": "millimeter",
	"mm": "millimeter",
	"centimeters": "centimeter",
	"centimetres": "centimeter",
	"centimetre": "centimeter",
	"cm": "centimeter",
	"decimeters": "decimeter",
	"decimetres": "decimeter",
	"decimetre": "decimeter",
	"dm": "decimeter",
	"decameters": "decameter",
	"decametres": "decameter",
	"decametre": "decameter",
	"dam": "decameter",
	"hectometers": "hectometer",
	"hectometres": "hectometer",
	"hectometre": "hectometer",
	"hm": "hectometer",
	"kilometers": "kilometer",
	"kilometres": "kilometer",
	"kilometre": "kilometer",
	"km": "kilometer",
	"megameters": "megameter",
	"megametres": "megameter",
	"megametre": "megameter",
	"Mm": "megameter",
	"gigameters": "gigameter",
	"gigametres": "gigameter",
	"gigametre": "gigameter",
	"Gm": "gigameter"
};

/**
 * Convert a length to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param length {number} amount to be convert
 * @returns {number} the converted amount
 */
ilib.Measurement.Length.convert = function(to, from, length) {
        from = this.aliases[from] || from;
        to = this.aliases[to] || to;
	var fromRow = ilib.Measurement.Length.ratios[from];
	var toRow = ilib.Measurement.Length.ratios[to];
	if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
		return undefined;
	}
	//console.log("fromRow is " + fromRow + " toRow is " + toRow);
	//console.log("fromRow[toRow[0]] is " + fromRow[toRow[0]]);
	return length * fromRow[toRow[0]];
};

/**
 * @private
 * @static
 */
ilib.Measurement.Length.getMeasures = function () {
	var ret = [];
	for (var m in ilib.Measurement.Length.ratios) {
		ret.push(m);
	}
	return ret;
};

//register with the factory method
ilib.Measurement._constructors["length"] = ilib.Measurement.Length;