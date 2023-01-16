/*
 * ForceUnit.js - Unit conversions for force
 *
 * Copyright © 2018-2022 JEDLSoft
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
 * Create a new force measurement instance.
 *
 * @constructor
 * @extends Measurement
 * @param {Object} options Options controlling the construction of this instance
 * @param {string} options.unit
 * @param {number|string|undefined} options.amount
 */
var ForceUnit = function (options) {
    this.unit = "newton";
    this.amount = 0;

    this.ratios = ForceUnit.ratios;
    this.aliases = ForceUnit.aliases;
    this.aliasesLower = ForceUnit.aliasesLower;
    this.systems = ForceUnit.systems;

    this.parent(options);
};

ForceUnit.prototype = new Measurement();
ForceUnit.prototype.parent = Measurement;
ForceUnit.prototype.constructor = ForceUnit;

// https://en.wikipedia.org/wiki/Force
ForceUnit.ratios = {
    /*                        index dyne       mN          N           kN         MN         GN         kilogram-force pound-force poundal     */
    "dyne":                  [ 1,   1,         1e-2,       1e-5,       1e-8,      1e-11,     1e-14,     1.01972e-6,    2.24809e-6, 7.23301e-5   ],
    "millinewton":           [ 2,   100,       1,          1e-3,       1e-6,      1e-9,      1e-12,     1.01972e-4,    2.24809e-4, 7.23301e-3   ],
    "newton":                [ 3,   1e5,       1000,       1,          1e-3,      1e-6,      1e-9,      0.101972,      0.224809,   7.23301      ],
    "kilonewton":            [ 4,   1e8,       1e6,        1000,       1,         1e-3,      1e-6,      101.972,       224.809,    7.23301e3    ],
    "meganewton":            [ 5,   1e11,      1e9,        1e6,        1000,      1,         1e-3,      1.01972e5,     2.24809e5,  7.23301e6    ],
    "giganewton":            [ 6,   1e14,      1e12,       1e9,        1e6,       1000,      1,         1.01972e8,     2.24809e8,  7.23301e9    ],
    "kilogram-force":        [ 7,   9.80665e5, 9.80665e-3, 9.80665,    9.80665e3, 9.80665e6, 9.80665e9, 1,             2.20462,    70.9316      ],
    "pound-force":           [ 8,   4.44822e5, 4.44822e-3, 4.44822,    4.44822e3, 4.44822e6, 4.44822e9, 0.453592,      1,          32.174       ],
    "poundal":               [ 9,   1.38255e4, 1.38255e-4, 1.38255e-1, 1.38255e2, 1.38255e5, 1.38255e8, 0.0140981,     0.031081,   1            ]
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
ForceUnit.prototype.getMeasure = function() {
    return "force";
};

/**
 * Return a new instance of this type of measurement.
 *
 * @param {Object} params parameters to the constructor
 * @return {Measurement} a measurement subclass instance
 */
ForceUnit.prototype.newUnit = function(params) {
    return new ForceUnit(params);
};

ForceUnit.systems = {
    "metric": [
        "dyne",
        "millinewton",
        "newton",
        "kilonewton",
        "meganewton",
        "giganewton"
    ],
    "uscustomary": [
        "poundal",
        "pound-force"
    ],
    "imperial": [
        "poundal",
        "pound-force"
    ],
    "conversions": {
        "metric": {
            "uscustomary": {
                "millinewton": "pound-force",
                "newton": "pound-force",
                "kilonewton": "pound-force",
                "meganewton": "pound-force",
                "giganewton": "pound-force",
                "dyne": "pound-force",
                "kilogram-force": "pound-force"
            },
            "imperial": {
                "millinewton": "pound-force",
                "newton": "pound-force",
                "kilonewton": "pound-force",
                "meganewton": "pound-force",
                "giganewton": "pound-force",
                "dyne": "pound-force",
                "kilogram-force": "pound-force"
            }
        },
        "uscustomary": {
            "metric": {
                "poundal": "newton",
                "pound-force": "newton"
            }
        },
        "imperial": {
            "uscustomary": {
                "poundal": "newton",
                "pound-force": "newton"
            }
        }
    }
};

ForceUnit.aliases = {
    "N": "newton",
    "newtons": "newton",
    "milli newtons": "millinewton",
    "milli newton": "millinewton",
    "milli-newton": "millinewton",
    "mN": "millinewton",
    "kilo newtons": "kilonewton",
    "kilo newton": "kilonewton",
    "kilo-newton": "kilonewton",
    "kN": "kilonewton",
    "mega newtons": "meganewton",
    "mega newton": "meganewton",
    "mega-newton": "meganewton",
    "MN": "meganewton",
    "giga newtons": "giganewton",
    "giga newton": "giganewton",
    "giga-newton": "giganewton",
    "giga-newton": "giganewton",
    "GN": "giganewton",
    "dynes": "dyne",
    "dyn": "dyne",
    "kilopond": "kilogram-force",
    "kiloponds": "kilogram-force",
    "kilogram force": "kilogram-force",
    "kilograms force": "kilogram-force",
    "kilograms-force": "kilogram-force",
    "kp": "kilogram-force",
    "poundals": "poundal",
    "pdl": "poundal",
    "pound force": "pound-force",
    "pounds force": "pound-force",
    "lb force": "pound-force",
    "pounds force": "pound-force",
    "lbs force": "pound-force",
    "lbf": "pound-force"
};

ForceUnit.aliasesLower = {};
for (var a in ForceUnit.aliases) {
    ForceUnit.aliasesLower[a.toLowerCase()] = ForceUnit.aliases[a];
}

/**
 * Convert a force to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param force {number} amount to be convert
 * @returns {number|undefined} the converted amount
 */
ForceUnit.convert = function(to, from, force) {
    from = Measurement.getUnitIdCaseInsensitive(ForceUnit, from) || from;
    to = Measurement.getUnitIdCaseInsensitive(ForceUnit, to) || to;
    var fromRow = ForceUnit.ratios[from];
    var toRow = ForceUnit.ratios[to];
    if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
        return undefined;
    }
    return force * fromRow[toRow[0]];
};

/**
 * @private
 * @static
 */
ForceUnit.getMeasures = function () {
    return Object.keys(ForceUnit.ratios);
};

//register with the factory method
Measurement._constructors["force"] = ForceUnit;

module.exports = ForceUnit;
