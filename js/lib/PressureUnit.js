/*
 * PressureUnit.js - Unit conversions for pressure
 *
 * Copyright © 2021 JEDLSoft
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
 * Create a new pressure measurement instance.
 *
 * @constructor
 * @extends Measurement
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling
 * the construction of this instance
 */
var PressureUnit = function (options) {
    this.unit = "pascal";
    this.amount = 0;

    this.ratios = PressureUnit.ratios;
    this.aliases = PressureUnit.aliases;
    this.aliasesLower = PressureUnit.aliasesLower;
    this.systems = PressureUnit.systems;

    this.parent(options);
};

PressureUnit.prototype = new Measurement();
PressureUnit.prototype.parent = Measurement;
PressureUnit.prototype.constructor = PressureUnit;

// https://en.wikipedia.org/wiki/Pressure
PressureUnit.ratios = {
    /*                        index mPa           Pa            hPa           mbar          kPa          bar            MPa            GPa            atm          torr       lbs/in2            */
    "millipascal":           [ 1,   1,            1e-3,         1e-5,         1e-5,         1e-6,        1e-8,          1e-9,          1e-12,         9.8692e-9,   7.5006e-6, 1.45038e-7         ],
    "pascal":                [ 2,   1000,         1,            1e-2,         1e-2,         1e-3,        1e-5,          1e-6,          1e-9,          9.8692e-6,   7.5006e-3, 1.45038e-4         ],
    "hectopascal":           [ 3,   1e5,          1e2,          1,            1,            0.1,         1e-3,          1e-4,          1e-7,          9.8692e-4,   7.5006e-1, 1.45038e-2         ],
    "millibar":              [ 4,   1e5,          1e2,          1,            1,            0.1,         1e-3,          1e-4,          1e-7,          9.8692e-4,   7.5006e-1, 1.45038e-2         ],
    "kilopascal":            [ 5,   1e6,          1e3,          1e2,          1e2,          1,           1e-2,          1e-3,          1e-6,          9.8692e-3,   7.5006,    1.45038e-1         ],
    "bar":                   [ 6,   1e8,          1e5,          1e3,          1e3,          100,         1,             0.1,           1e-4,          9.8692e-1,   7.5006e2,  14.5038            ],
    "megapascal":            [ 7,   1e9,          1e6,          1e4,          1e4,          1e3,         10,            1,             1e-3,          9.8692,      7.5006e3,  145.038            ],
    "gigapascal":            [ 8,   1e12,         1e9,          1e7,          1e7,          1e6,         1e4,           1e3,           1,             9.8692e3,    7.5006e6,  1.45038e5          ],
    "atmosphere":            [ 9,   1.01325e8,    1.01325e5,    1.01325e3,    1.01325e3,    1.01325e2,   1.01325,       1.01325e-1,    1.01325e-4,    1,           760,       14.6959487755142   ],
    "torr":                  [ 10,  1.333224e5,   1.333224e2,   1.333224,     1.333224,     1.333224e-1, 1.333224e-3,   1.333224e-4,   1.333224e-2,   1.315789e-3, 1,         1.9336775e-2       ],
    "pound-per-square-inch": [ 11,  6.89475729e6, 6.89475729e3, 6.89475729e1, 6.89475729e1, 6.89475729,  6.89475729e-2, 6.89475729e-3, 6.89475729e-6, 6.8046e-2,   51.7149,   1                  ],
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
PressureUnit.prototype.getMeasure = function() {
    return "pressure";
};

/**
 * Return a new instance of this type of measurement.
 *
 * @param {Object} params parameters to the constructor
 * @return {Measurement} a measurement subclass instance
 */
PressureUnit.prototype.newUnit = function(params) {
    return new PressureUnit(params);
};

PressureUnit.systems = {
    "metric": [
        "millipascal",
        "pascal",
        "hectopascal",
        "millibar",
        "kilopascal",
        "bar",
        "megapascal",
        "gigapascal"
    ],
    "uscustomary": [
        "torr",
//        "inch-of-mercury",
//        "foot-sea-water",
        "pound-per-square-inch",
        "atmosphere"
    ],
    "imperial": [
//        "centimeter-of-water",
        "torr",
//        "millimeter-of-mercury",
//        "inch-of-mercury",
//        "foot-sea-water",
        "pound-per-square-inch",
//        "meter-sea-water",
        "atmosphere"
    ],
    "conversions": {
        "metric": {
            "uscustomary": {
                "millipascal": "torr",
                "pascal": "torr",
                "hectopascal": "torr",
                "millibar": "torr",
                "kilopascal": "inch-of-mercury",
                "bar": "pound-per-square-inch",
                "megapascal": "pound-per-square-inch",
                "gigapascal": "atmosphere"
            },
            "imperial": {
                "millipascal": "torr",
                "pascal": "torr",
                "hectopascal": "torr",
                "millibar": "torr",
                "kilopascal": "inch-of-mercury",
                "bar": "pound-per-square-inch",
                "megapascal": "pound-per-square-inch",
                "gigapascal": "atmosphere"
            }
        },
        "uscustomary": {
            "metric": {
                "torr": "pascal",
//                "inch-of-mercury": "kilopascal",
//                "foot-sea-water": "meter-sea-water",
                "pound-per-square-inch": "bar",
                "atmosphere": "bar"
            },
            "imperial": {
//                "centimeter-of-water": "torr",
//                "millimeter-of-mercury": "inch-of-mercury",
//               "meter-sea-water": "atmosphere"
            }
        },
        "imperial": {
            "metric": {
//                "centimeter-of-water": "pascal",
                "torr": "pascal",
//                "millimeter-of-mercury": "millibar",
//                "inch-of-mercury": "kilopascal",
//                "foot-sea-water": "meter-sea-water",
                "pound-per-square-inch": "bar",
//                "meter-sea-water": "foot-sea-water",
                "atmosphere": "bar"
            }
        }
    }
};

PressureUnit.aliases = {
    "Pa": "pascal",
    "㎩": "pascal",
    "pascals": "pascal",
    "hPa": "hectopascal",
    "㍱": "hectopascal",
    "mbar": "millibar",
    "kPa": "kilopascal",
    "㎪": "kilopascal",
    "MPa": "megapascal",
    "㎫": "megapascal",
    "GPa": "gigapascal",
    "㎬": "gigapascal",
    "t": "torr",
    "psi": "pound-per-square-inch",
    "pounds per square inch": "pound-per-square-inch",
    "pound per square inch": "pound-per-square-inch",
    "pound force per square inch": "pound-per-square-inch",
    "pounds per sq. in.": "pound-per-square-inch",
    "pound per sq. in.": "pound-per-square-inch",
    "lbs per square inch": "pound-per-square-inch",
    "lbf per square inch": "pound-per-square-inch",
    "lbs per sq. in.": "pound-per-square-inch",
    "lbf per sq. in.": "pound-per-square-inch",
    "pounds/square inch": "pound-per-square-inch",
    "pounds/sq. in.": "pound-per-square-inch",
    "lbs/square inch": "pound-per-square-inch",
    "lbf/square inch": "pound-per-square-inch",
    "lbs/sq. in.": "pound-per-square-inch",
    "lbf/sq. in.": "pound-per-square-inch",
    "pounds/inch²": "pound-per-square-inch",
    "pounds/in²": "pound-per-square-inch",
    "lbs/inch²": "pound-per-square-inch",
    "lbf/inch²": "pound-per-square-inch",
    "lbs/in²": "pound-per-square-inch",
    "lbf/in²": "pound-per-square-inch",
    "atmos": "atmosphere",
    "atm": "atmosphere",
    "mmHg": "millimeter-of-mercury",
    "inHg": "inch-of-mercury",
    "cmw": "centimeter-of-water",
    "fsw": "foot-sea-water",
    "msw": "meter-sea-water",
};

PressureUnit.aliasesLower = {};
for (var a in PressureUnit.aliases) {
    PressureUnit.aliasesLower[a.toLowerCase()] = PressureUnit.aliases[a];
}

/**
 * Convert a pressure to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param pressure {number} amount to be convert
 * @returns {number|undefined} the converted amount
 */
PressureUnit.convert = function(to, from, pressure) {
    from = Measurement.getUnitIdCaseInsensitive(PressureUnit, from) || from;
    to = Measurement.getUnitIdCaseInsensitive(PressureUnit, to) || to;
    var fromRow = PressureUnit.ratios[from];
    var toRow = PressureUnit.ratios[to];
    if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
        return undefined;
    }
    return pressure * fromRow[toRow[0]];
};

/**
 * @private
 * @static
 */
PressureUnit.getMeasures = function () {
    return Object.keys(PressureUnit.ratios);
};

//register with the factory method
Measurement._constructors["pressure"] = PressureUnit;

module.exports = PressureUnit;
