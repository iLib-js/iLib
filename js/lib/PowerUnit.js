/*
 * Power.js - Unit conversions for Power
 *
 * Copyright © 2018-2019, JEDLSoft
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
 * Create a new power measurement instance.
 * 
 * @constructor
 * @extends Measurement
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling
 * the construction of this instance
 */
var PowerUnit = function (options) {
    this.unit = "watt";
    this.amount = 0;

    this.ratios = PowerUnit.ratios;
    this.aliases = PowerUnit.aliases;
    this.aliasesLower = PowerUnit.aliasesLower;
    this.systems = PowerUnit.systems;

    this.parent(options);
};

PowerUnit.prototype = new Measurement();
PowerUnit.prototype.parent = Measurement;
PowerUnit.prototype.constructor = PowerUnit;

PowerUnit.ratios = {
    /*                        index mW              W               kW                MW                 GW                 ft-lb/h                HP             BTU/h             */
    "milliwatt":             [ 1,   1,              1e-3,           1e-6,             1e-9,              1e-12,             737.562149277e-4,      1.34102209e-6, 3.412142450123e-3   ],
    "watt":                  [ 2,   1e3,            1,              1e-3,             1e-6,              1e-9,              0.737562149277,        1.34102209e-3, 3.412142450123      ],
    "kilowatt":              [ 3,   1e6,            1e3,            1,                1e-3,              1e-6,              7.37562149277e+2,      1.34102209,    3.412142450123e+3   ],
    "megawatt":              [ 4,   1e9,            1e6,            1e3,              1,                 1e-3,              7.37562149277e+5,      1.34102209e+3, 3.412142450123e+6   ],
    "gigawatt":              [ 5,   1e12,           1e9,            1e6,              1e3,               1,                 7.37562149277e+8,      1.34102209e+6, 3.412142450123e+9   ],
    "foot-pound-per-hour":   [ 6,   1.35581795e+3,  1.35581795,     1.35581795e-3,    1.35581795e-6,     1.35581795e-9,     1,                     5.05051e-7,    1.285067782e-3      ],
    "horsepower":            [ 7,   745701.0335416, 745.7010335416, 0.7457010335416,  7.457010335416e-4, 7.457010335416e-7, 1.9799999829594917e+6, 1,             2.54443418687714e+3 ],
    "btu-per-hour":          [ 8,   293.071,        0.293071,       2.93071e-3,       2.93071e-6,        2.93071e-9,        778.169069245845,      3.93014685e-4, 1                   ]
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
PowerUnit.prototype.getMeasure = function() {
    return "power";
};

/**
 * Return a new instance of this type of measurement.
 * 
 * @param {Object} params parameters to the constructor
 * @return {Measurement} a measurement subclass instance
 */
PowerUnit.prototype.newUnit = function(params) {
    return new PowerUnit(params);
};

PowerUnit.systems = {
    "metric": [
        "milliwatt",
        "watt",
        "kilowatt",
        "megawatt",
        "gigawatt"
    ],
    "uscustomary": [
        "milliwatt",
        "foot-pound-per-hour",
        "watt",
        "btu-per-hour",
        "kilowatt",
        "horsepower",
        "megawatt",
        "gigawatt"
    ],
    "imperial": [
        "milliwatt",
        "foot-pound-per-hour",
        "watt",
        "btu-per-hour",
        "kilowatt",
        "horsepower",
        "megawatt",
        "gigawatt"
    ],
    "conversions": {
        "uscustomary": {
            "metric": {
                "foot-pound-per-hour": "watt",
                "btu-per-hour": "watt",
                "refridgeration-ton": "kilowatt",
                "horsepower": "kilowatt"
            }
        },
        "imperial": {
            "metric": {
                "foot-pound-per-hour": "watt",
                "btu-per-hour": "watt",
                "refridgeration-ton": "kilowatt",
                "horsepower": "kilowatt"
            }
        }
    }
};

PowerUnit.aliases = {
    "milli joule/second": "milliwatt",
    "milli joule/s": "milliwatt",
    "millijoule/second": "milliwatt",
    "millijoule/s": "milliwatt",
    "milliJ/second": "milliwatt",
    "milliJ/s": "milliwatt",
    "mJ/s": "milliwatt",
    "joule per second": "watt",
    "joules per second": "watt",
    "joule/second": "watt",
    "joules/second": "watt",
    "joule/s": "watt",
    "joules/s": "watt",
    "J/s": "watt",
    "kilojoule/second": "kilowatt",
    "kilojoule/s": "kilowatt",
    "kiloJ/second": "kilowatt",
    "kiloJ/s": "kilowatt",
    "kJ/s": "kilowatt",
    "BTU/h": "btu-per-hour",
    "British Thermal Unit per hour": "btu-per-hour",
    "British Thermal Units per hour": "btu-per-hour",
    "British Thermal Unit/hour": "btu-per-hour",
    "British Thermal Units/hour": "btu-per-hour",
    "BTU per hour": "btu-per-hour",
    "BTUs per hour": "btu-per-hour",
    "BTU/hour": "btu-per-hour",
    "BTUs/hour": "btu-per-hour",
    "BTU/h": "btu-per-hour",
    "milli watt": "milliwatt",
    "mW": "milliwatt",
    "kilo watt": "kilowatt",
    "kW": "kilowatt",
    "W": "watt",
    "mega watt": "megawatt",
    "mW": "megawatt",
    "giga watt": "gigawatt",
    "gW": "gigawatt",
    "foot pound per hour": "foot-pound-per-hour",
    "foot pound/hour": "foot-pound-per-hour",
    "foot pound/h": "foot-pound-per-hour",
    "foot lb/hour": "foot-pound-per-hour",
    "foot lb/h": "foot-pound-per-hour",
    "ft lbf/h": "foot-pound-per-hour",
    "ft lb/h": "foot-pound-per-hour",
    "ft lbs/h": "foot-pound-per-hour",
    "ft-lb/h": "foot-pound-per-hour",
    "ft-lbs/h": "foot-pound-per-hour",
    "f lb/h": "foot-pound-per-hour",
    "horse power": "horsepower",
    "hp": "horsepower",
    "british thermal units per hour": "btu-per-hour",
    "BTU per hour": "btu-per-hour",
    "BTUs per hour": "btu-per-hour",
    "british thermal units/hour": "btu-per-hour",
    "british thermal unit/hour": "btu-per-hour",
    "british thermal units/hr": "btu-per-hour",
    "british thermal unit/hr": "btu-per-hour",
    "BTU/hour": "btu-per-hour",
    "BTUs/hour": "btu-per-hour",
    "BTU/hr": "btu-per-hour",
    "BTUs/hr": "btu-per-hour",
    "BTU/h": "btu-per-hour",
    "BTUs/h": "btu-per-hour"
};

PowerUnit.aliasesLower = {};
for (var a in PowerUnit.aliases) {
    PowerUnit.aliasesLower[a.toLowerCase()] = PowerUnit.aliases[a];
}

/**
 * Convert a power to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param power {number} amount to be convert
 * @returns {number|undefined} the converted amount
 */
PowerUnit.convert = function(to, from, power) {
    from = Measurement.getUnitIdCaseInsensitive(PowerUnit, from) || from;
    to = Measurement.getUnitIdCaseInsensitive(PowerUnit, to) || to;
    var fromRow = PowerUnit.ratios[from];
    var toRow = PowerUnit.ratios[to];
    if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
        return undefined;
    }
    return power * fromRow[toRow[0]];
};

/**
 * @private
 * @static
 */
PowerUnit.getMeasures = function () {
    return Object.keys(PowerUnit.ratios);
};

//register with the factory method
Measurement._constructors["power"] = PowerUnit;

module.exports = PowerUnit;