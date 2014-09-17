/*
 * volume.js - Unit conversions for volume
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
 * Create a new Volume measurement.
 * 
 * @class
 * @constructor
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling 
 * the construction of this instance
 */
ilib.Measurement.Volume = function (options) {
	this.unit = "cubic meter";
	this.amount = 0;
	this.aliases = ilib.Measurement.Volume.aliases; // share this table in all instances
	
	if (options) {
		if (typeof(options.unit) !== 'undefined') {
			this.originalUnit = options.unit;
			this.unit = this.aliases[options.unit] || options.unit;
		}
		
		if (typeof(options.amount) === 'object') {
			if (options.amount.getMeasure() === "volume") {
				this.amount = ilib.Measurement.Volume.convert(this.unit, options.amount.getUnit(), options.amount.getAmount());
			} else {
				throw "Cannot convert unit " + options.amount.unit + " to a volume";
			}
		} else if (typeof(options.amount) !== 'undefined') {
			this.amount = parseFloat(options.amount);
		}
	}
	
	if (typeof(ilib.Measurement.Volume.ratios[this.unit]) === 'undefined') {
		throw "Unknown unit: " + options.unit;
	}
};

ilib.Measurement.Volume.ratios = {
    /* 	                index, gallon,      quart,      pint,       cup,        ounce,       tbsp,     tsp,      cubic meter, liter,      milliliter, imperial gal, imperial quart,imperial pint, imperial ounce, imperial tbsp, imperial tsp, cubic foot,  cubic inch*/    
	"gallon":	       [1,     1,           4,          8,          16,         128,      256,      768,      0.00378541,  3.78541,    3785.41,    0.832674,     3.3307,        6.66139,       133.228,     213.165,       639.494,      0.133681,    231 	  ],
	"quart":	       [2,     0.25,        1,          2,          4,          32,       64,       192,      0.000946353, 0.946353,   946.353,    0.208168,     0.832674,      1.66535,       33.307,      53.2911,       159.873,      0.0334201,   57.75	  ],
	"pint":	           [3,     0.125,       0.5,        1,          2,          16,       32,       96,       0.000473176, 0.473176,   473.176,    0.104084,     0.416337,      0.832674,      16.6535,     26.6456,       79.9367,      0.0167101,   28.875   ],
	"cup":	           [4,     0.0625,      0.25,       0.5,        1,          8,        16,       48,       0.000236588, 0.236588,   236.588,    0.0520421,    0.208168,      0.416337,      8.32674,     13.3228,       39.9683,      0.00835503,  14.4375  ],
	"ounce":	       [5,     0.0078125,   0.0078125,  0.0625,     0.125,      1,        2,        6,        2.9574e-5,   0.0295735,  29.5735,    0.00650526,   0.0260211,     0.0520421,     1.04084,     1.04084,       4.99604,      0.00104438,  1.80469  ],
	"tbsp":	           [6,     0.00390625,  0.015625,   0.0312,     0.0625,     0.5,      1,        3,        1.4787e-5,   0.0147868,  14.7868,    0.00325263,   0.0130105,     0.0260211,     0.520421,    0.832674,      2.49802,      0.00052219,  0.902344 ],
	"tsp" :	           [7,     0.00130208,  0.00130208, 0.0104167,  0.0208333,  0.166667, 0.333333, 1,        4.9289e-6,   0.00492892, 4.92892,    0.00108421,   0.00433684,    0.00867369,    0.173474,    0.277558,      0.832674,     0.000174063, 0.300781 ],
	"cubic meter":     [8,     264.172,     1056.69,    2113.38,    4226.75,    33814,    67628,    202884,   1,           1000,       1e+6,       219.969,      879.877,       1759.75,       35195.1,     56312.1,       168936,       35.3147,     61023.7  ],
	"liter":	       [9,     0.264172,    1.05669,    2.11338,    4.22675,    33.814,   67.628,   202.884,  0.001,       1,          1000,       0.219969,     0.879877,      1.75975,       35.191,      56.3121,       56.3121,      0.0353147,   61.0237  ],
	"milliliter":	   [10,    0.000264172, 0.00105669, 0.00211338, 0.00422675, 0.033814, 0.067628, 0.202884, 1e-6,        0.001,      1,          0.000219969,  0.000879877,   0.00175975,    0.0351951,   0.0563121,     0.168936,     3.5315e-5,   0.0610237],
	"imperial gallon": [11,    1.20095,     4.8038,     9.6076,     19.2152,    153.722,  307.443,  922.33,   0.00454609,  4.54609,    4546.09,    1,            4,             8,             160,         256,           768,          0.160544,    277.42   ],
	"imperial quart":  [12,    0.300238,    1.20095,    2.4019,     4.8038,     38.4304,  76.8608,  230.582,  0.00113652,  1.13652,    1136.52,    0.25,         1,             2,             40,          64,            192,          0.0401359,   69.3549  ],
	"imperial pint":   [13,    0.150119,    0.600475,   1.20095,    2.4019,     19.2152,  38.4304,  115.291,  0.000568261, 0.568261,   568.261,    0.125,        0.5,           1,             20,          32,            96,           0.020068,    34.6774  ],
	"imperial ounce":	   [14,    0.00750594,  0.0300238,  0.0600475,  0.120095,   0.96076,  1.92152,  5.76456,  2.8413e-5,   0.0284131,  28.4131,    0.00625,      0.025,         0.05,          1,           1.6,           4.8,          0.0010034,   1.73387  ],
	"imperial tbsp":   [15,    0.00469121,  0.0187649,  0.0375297,  0.0750594,  0.600475, 1.20095,  3.60285,  1.7758e-5,   0.0177582,  17.7582,    0.00390625,   0.015625,      0.03125,       0.625,       1,             3,            0.000627124, 1.08367  ],
	"imperial tsp":    [16,    0.00156374,  0.00625495, 0.0125099,  0.0250198,  0.600475, 0.200158, 1.20095,  5.9194e-6,   0.00591939, 5.91939,    0.00130208,   0.00520833,    0.0104167,     0.208333,    0.333333,      1,            0.000209041, 0.361223 ],
	"cubic foot":	   [17,    7.48052,     29.9221,    59.8442,    119.688,    957.506,  1915.01,  5745.04,  0.0283168,   28.3168,    28316.8,    6.22883,      24.9153,       49.8307,       996.613,     1594.58,       4783.74,      1,           1728     ],
	"cubic inch":	   [18,    0.004329,    0.017316,   0.034632,   0.0692641,  0.554113, 1.10823,  3.32468,  1.6387e-5,   0.0163871,  16.3871,    0.00360465,   0.0144186,     0.0288372,     0.576744,    0.92279,       2.76837,      0.000578704, 1        ]	 		
}; 
  
ilib.Measurement.Volume.prototype = new ilib.Measurement({});
ilib.Measurement.Volume.prototype.parent = ilib.Measurement;
ilib.Measurement.Volume.prototype.constructor = ilib.Measurement.Volume;

/**
 * @inheritDoc
 */
ilib.Measurement.Volume.prototype.getMeasure = function() {
	return "volume";
};

/**
 * Convert the current volume to another measure.
 * 
 * @inheritDoc
 */
ilib.Measurement.Volume.prototype.convert = function(to) {
	if (!to || typeof(ilib.Measurement.Volume.ratios[this.normalizeUnits(to)]) === 'undefined') {
		return undefined;
	}
	return new ilib.Measurement({
		unit: to,
		amount: this
	});
};

ilib.Measurement.Volume.aliases = {
	"US gal":"gallon",
	"US gallon":"gallon",
	"US Gal":"gallon",
	"US Gallons":"gallon",
	"Gal(US)":"gallon",
	"gal(US)":"gallon",	    
	"US quart":"quart",
	"US quarts":"quart",
	"US Quart":"quart",
	"US Quarts":"quart",
	"US qt":"quart",
	"Qt(US)":"quart",
	"qt(US)":"quart",
	"US pint":"pint",
	"US Pint":"pint",
	"pint(US)":"pint",
	"Pint(US)":"pint",
	"US cup":"cup", 
	"US Cup":"cup",
	"cup(US)":"cup",
	"Cup(US)":"cup",
	"US ounce":"ounce",
	"℥":"ounce",
	"US Oz":"ounce",
	"oz(US)":"ounce",
	"Oz(US)":"ounce",
    "US tbsp":"tbsp",
	"tbsp(US)":"tbsp",
	"US tablespoon":"tbsp",
	"US tsp":"tsp",
	"tsp(US)":"tsp",
	"Cubic meter":"cubic meter",
	"cubic meter":"cubic meter",
    "Cubic metre":"cubic meter", 
    "cubic metre":"cubic meter", 
    "m3":"cubic meter",
	"Liter":"liter",
	"Liters":"liter",
	"liter":"liter",
	"L":"liter",
	"l":"liter",
	"Milliliter":"milliliter",
	"ML":"milliliter",
	"ml":"milliliter",
	"milliliter":"milliliter",
	"mL":"milliliter",
	"Imperial gal":"imperial gallon",
	"Imperial gallon":"imperial gallon",
	"gallon(imperial)":"imperial gallon",
	"gal(imperial)":"imperial gallon",
	"Imperial quart":"imperial quart",
	"Imperial Quart":"imperial quart",
	"IMperial qt":"imperial quart",
	"qt(Imperial)":"imperial quart",
	"quart(imperial)":"imperial quart",
	"Imperial pint":"imperial pint",
	"pint(Imperial)":"imperial pint",
	"imperial oz":"imperial ounce",
	"imperial ounce":"imperial ounce",
	"Imperial Ounce":"imperial ounce",
	"Imperial tbsp":"imperial tbsp",
	"tbsp(Imperial)":"imperial tbsp",
	"Imperial tsp":"imperial tsp",
	"tsp(Imperial)":"imperial tsp",
	"Cubic foot":"cubic foot",
	"Cubic Foot":"cubic foot",
	"Cubic feet":"cubic foot",
	"cubic Feet":"cubic foot",
	"cubic ft":"cubic foot",
	"ft3":"cubic foot",
	"Cubic inch":"cubic inch",
	"Cubic inches":"cubic inch",
	"cubic inches":"cubic inch",
	"cubic inches":"cubic inch",
	"cubic in":"cubic inch",
	"cu in":"cubic inch",
	"cu inch":"cubic inch",
	"inch³":"cubic inch",
	"in³":"cubic inch",
	"inch^3":"cubic inch",
	"in^3":"cubic inch",
	"c.i":"cubic inch",
	"CI":"cubic inch",
	"cui":"cubic inch"
};

/**
 * Convert a volume to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param volume {number} amount to be convert
 * @returns {number} the converted amount
 */
ilib.Measurement.Volume.convert = function(to, from, volume) {
    from = ilib.Measurement.Volume.aliases[from] || from;
    to = ilib.Measurement.Volume.aliases[to] || to;
	var fromRow = ilib.Measurement.Volume.ratios[from];
	var toRow = ilib.Measurement.Volume.ratios[to];
	if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
		return undefined;
	}	
	var result = volume * fromRow[toRow[0]];
    return result;
};

/**
 * @private
 * @static
 */
ilib.Measurement.Volume.getMeasures = function () {
	var ret = [];
	for (var m in ilib.Measurement.Volume.ratios) {
		ret.push(m);
	}
	return ret;
};

//register with the factory method
ilib.Measurement._constructors["volume"] = ilib.Measurement.Volume;
