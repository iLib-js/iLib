/*
 * digitalStorage.js - Unit conversions for Digital Storage
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
 * Create a new DigitalStorage measurement.
 * 
 * @class
 * @constructor
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling 
 * the construction of this instance
 */
ilib.Measurement.DigitalStorage = function (options) {
	this.unit = "Bit";
	this.amount = 0;
	this.aliases = ilib.Measurement.DigitalStorage.aliases; // share this table in all instances
	
	if (options) {
		if (typeof(options.unit) !== 'undefined') {
			this.originalUnit = options.unit;
			this.unit = this.aliases[options.unit] || options.unit;
		}
		
		if (typeof(options.amount) === 'object') {
			if (options.amount.getMeasure() === "digitalStorage") {
				this.amount = ilib.Measurement.DigitalStorage.convert(this.unit, options.amount.getUnit(), options.amount.getAmount());
			} else {
				throw "Cannot convert units " + options.unit + " to a digitalStorage";
			}
		} else if (typeof(options.amount) !== 'undefined') {
			this.amount = parseFloat(options.amount);
		}
	}
	
	if (typeof(ilib.Measurement.DigitalStorage.ratios[this.unit]) === 'undefined') {
		throw "Unknown unit: " + options.unit;
	}
};

ilib.Measurement.DigitalStorage.ratios = {
    /*                bit          byte         kb             kB           mb           mB              gb           gB            tb            tB             pb            pB   */           
    "Bit":      [ 1,   1,          0.125,      0.000976563,  0.00012207,   9.5367e-7,    1.1921e-7,     9.3132e-10,   1.1642e-10,   9.0949e-13,   1.1369e-13,   8.8818e-16,   1.1102e-16  ],
    "Byte":     [ 2,   8,          1,          0.0078125,    0.000976563,  7.6294e-6,    9.5367e-7,     7.4506e-9,    9.3132e-10,   7.276e-12,    9.0949e-13,   7.1054e-15,   8.8818e-16  ],  
    "Kilobit":  [ 3,   1024,       128,        1,            0.125,        0.000976563,  0.00012207,    9.5367e-7,    1.1921e-7,    9.3132e-10,   1.1642e-10,   9.0949e-13,   1.1369e-13  ],
    "Kilobyte": [ 4,   8192,       1024,       8,            1,            0.0078125,    0.0009765631,  7.6294e-6,    9.5367e-7,    7.4506e-9,    9.3132e-10,   7.276e-12,    9.0949e-13  ],
    "Megabit":  [ 5,   1.049e+6,   131072,     1024,         128,          1,            0.125,         0.000976563,  0.00012207,   9.5367e-7,    1.1921e-7,    9.3132e-10,   1.1642e-10  ],
    "Megabyte": [ 6,   8.389e+6,   1.049e+6,   8192,         1024,         8,            1,             0.0078125,    0.000976563,  7.6294e-6,    9.5367e-7,    7.4506e-9,    9.3132e-10  ],
    "Gigabit":  [ 7,   1.074e+9,   1.342e+8,   1.049e+6,     131072,       1024,         128,           1,            0.125,        0.000976563,  0.00012207,   9.5367e-7,    1.1921e-7   ],
    "Gigabyte": [ 8,   8.59e+9,    1.074e+9,   8.389e+6,     1.049e+6,     8192,         1024,          8,            1,            0.0078125,    0.000976563,  7.6294e-6,    9.5367e-7   ],
    "Terabit":  [ 9,   1.1e+12,    1.374e+11,  1.074e+9,     1.342e+8,     1.049e+6,     131072,        1024,         128,          1,            0.125,        0.000976563,  0.00012207  ],
    "Terabyte": [ 10,  8.796e+12,  1.1e+12,    8.59e+9,      1.074e+9,     8.389e+6,     1.049e+6,      8192,         1024,         8,            1,            0.0078125,    0.000976563 ],
    "Petabit":  [ 11,  1.126e+15,  1.407e+14,  1.1e+12,      1.374e+11,    1.074e+9,     1.342e+8,      1.049e+6,     131072,       1024,         128,          1,            0.125       ],
    "Petabyte": [ 12,  9.007e+15,  1.126e+15,  8.796e+12,    1.1e+12,      8.59e+9,      1.074e+9,      8.389e+6,     1.049e+6,     8192,         1024,         8,            1           ] 
};

ilib.Measurement.DigitalStorage.prototype = new ilib.Measurement({});
ilib.Measurement.DigitalStorage.prototype.parent = ilib.Measurement;
ilib.Measurement.DigitalStorage.prototype.constructor = ilib.Measurement.DigitalStorage;

/**
 * @override
 * @inheritDoc
 */
ilib.Measurement.DigitalStorage.prototype.getMeasure = function() {
	return "digitalStorage";
};

/**
 * Convert the current digitalStorage to another measure.
 * 
 * @override
 * @inheritDoc
 */
ilib.Measurement.DigitalStorage.prototype.convert = function(to) {
	if (!to || typeof(ilib.Measurement.DigitalStorage.ratios[this.normalizeUnits(to)]) === 'undefined') {
		return undefined;
	}
	return new ilib.Measurement({
		unit: to,
		amount: this
	});
};

ilib.Measurement.DigitalStorage.aliases = {
        "bits":"Bit",
        "bit":"Bit",
        "Bits":"Bit",
        "Bit":"Bit",
        "byte":"Byte",
        "bytes":"Byte",
        "Byte":"Byte",
        "Bytes":"Byte",
        "kilobits":"Kilobit",
        "Kilobits":"Kilobit",
        "KiloBits":"Kilobit",
        "kiloBits":"Kilobit",
        "kilobit":"Kilobit",
        "Kilobit":"Kilobit",
        "kiloBit":"Kilobit",
        "KiloBit":"Kilobit",
        "kb":"Kilobit",
        "Kb":"Kilobit",
        "kilobyte":"Kilobyte",
        "Kilobyte":"Kilobyte",
        "kiloByte":"Kilobyte",
        "KiloByte":"Kilobyte",
        "kilobytes":"Kilobyte",
        "Kilobytes":"Kilobyte",
        "kiloBytes":"Kilobyte",
        "KiloBytes":"Kilobyte",
        "kB":"Kilobyte",
        "KB":"Kilobyte",
        "megabit":"Megabit",
        "Megabit":"Megabit",
        "megaBit":"Megabit",
        "MegaBit":"Megabit",
        "megabits":"Megabit",
        "Megabits":"Megabit",
        "megaBits":"Megabit",
        "MegaBits":"Megabit",
        "Mb":"Megabit",
        "mb":"Megabit",
        "megabyte":"Megabyte",
        "Megabyte":"Megabyte",
        "megaByte":"Megabyte",
        "MegaByte":"Megabyte",
        "megabytes":"Megabyte",
        "Megabytes":"Megabyte",
        "megaBytes":"Megabyte",
        "MegaBytes":"Megabyte",
        "MB":"Megabyte",
        "mB":"Megabyte",
        "gigabit":"Gigabit",
        "Gigabit":"Gigabit",
        "gigaBit":"Gigabit",
        "GigaBit":"Gigabit",
        "gigabits":"Gigabit",
        "Gigabits":"Gigabit",
        "gigaBits":"Gigabyte",
        "GigaBits":"Gigabit",
        "Gb":"Gigabit",
        "gb":"Gigabit",        
        "gigabyte":"Gigabyte",
        "Gigabyte":"Gigabyte",
        "gigaByte":"Gigabyte",
        "GigaByte":"Gigabyte",
        "gigabytes":"Gigabyte",
        "Gigabytes":"Gigabyte",
        "gigaBytes":"Gigabyte",
        "GigaBytes":"Gigabyte",
        "GB":"Gigabyte",
        "gB":"Gigabyte",
        "terabit":"Terabit",
        "Terabit":"Terabit",
        "teraBit":"Terabit",
        "TeraBit":"Terabit",
        "terabits":"Terabit",
        "Terabits":"Terabit",
        "teraBits":"Terabit",
        "TeraBits":"Terabit",
        "tb":"Terabit",
        "Tb":"Terabit",
        "terabyte":"Terabyte",
        "Terabyte":"Terabyte",
        "teraByte":"Terabyte",
        "TeraByte":"Terabyte",
        "terabytes":"Terabyte",
        "Terabytes":"Terabyte",
        "teraBytes":"Terabyte",
        "TeraBytes":"Terabyte",
        "TB":"Terabyte",
        "tB":"Terabyte",
        "petabit":"Petabit",
        "Petabit":"Petabit",
        "petaBit":"Petabit",
        "PetaBit":"Petabit",
        "petabits":"Petabit",
        "Petabits":"Petabit",
        "petaBits":"Petabit",
        "PetaBits":"Petabit",
        "pb":"Petabit",
        "Pb":"Petabit",
        "petabyte":"Petabyte",
        "Petabyte":"Petabyte",
        "petaByte":"Petabyte",
        "PetaByte":"Petabyte",
        "petabytes":"Petabyte",
        "Petabytes":"Petabyte",
        "petaBytes":"Petabyte",
        "PetaBytes":"Petabyte",
        "PB":"Petabyte",
        "pB":"Petabyte"
};

/**
 * Convert a digitalStorage to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param digitalStorage {number} amount to be convert
 * @returns {number} the converted amount
 */
ilib.Measurement.DigitalStorage.convert = function(to, from, digitalStorage) {
        from = this.aliases[from] || from;
        to = this.aliases[to] || to;
	var fromRow = ilib.Measurement.DigitalStorage.ratios[from];
	var toRow = ilib.Measurement.DigitalStorage.ratios[to];
	if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
		return undefined;
	}	
	var result = digitalStorage * fromRow[toRow[0]];
        result = + result.toFixed(3);
        return result;
};

/**
 * @private
 * @static
 */
ilib.Measurement.DigitalStorage.getMeasures = function () {
	var ret = [];
	for (var m in ilib.Measurement.DigitalStorage.ratios) {
		ret.push(m);
	}
	return ret;
};

//register with the factory method
ilib.Measurement._constructors["digitalStorage"] = ilib.Measurement.DigitalStorage;