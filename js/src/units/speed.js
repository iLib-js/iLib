/*
 * Speed.js - Unit conversions for Speeds/speeds
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
 * Create a new speed measurement.
 * 
 * @class
 * @constructor
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling 
 * the construction of this instance
 */
ilib.Measurement.Speed = function (options) {
	this.unit = "meters/sec";
	this.amount = 0;
	this.aliases = ilib.Measurement.Speed.aliases; // share this table in all instances
	
	if (options) {
		if (typeof(options.unit) !== 'undefined') {
			this.originalUnit = options.unit;
			this.unit = this.aliases[options.unit] || options.unit;
		}
		
		if (typeof(options.amount) === 'object') {
			if (options.amount.getMeasure() === "speed") {
				this.amount = ilib.Measurement.Speed.convert(this.unit, options.amount.getUnit(), options.amount.getAmount());
			} else {
				throw "Cannot convert units " + options.unit + " to a speed";
			}
		} else if (typeof(options.amount) !== 'undefined') {
			this.amount = parseFloat(options.amount);
		}
	}
	
	if (typeof(ilib.Measurement.Speed.ratios[this.unit]) === 'undefined') {
		throw "Unknown unit: " + options.unit;
	}
};

ilib.Measurement.Speed.ratios = {
	/*                index, f/s          m/s        k/h          miles/h     knot  */           
	"feet/sec":     [ 1,     1,          0.3048,     1.09728,     0.681818,   0.592484 ],  
	"meters/sec":   [ 2,     3.28084,    1,          3.6,         2.236936,   1.94384  ],  
	"km/hour":      [ 3,     0.911344,   0.277778,   1,           0.621371,   0.539957 ],
	"miles/hour":   [ 4,     1.46667,    0.44704,    1.60934,     1,          0.868976 ],
	"knot":         [ 5,     1.68781,    0.514444,   1.852,       1.15078,    1        ]
};

ilib.Measurement.Speed.prototype = new ilib.Measurement({});
ilib.Measurement.Speed.prototype.parent = ilib.Measurement;
ilib.Measurement.Speed.prototype.constructor = ilib.Measurement.Speed;

/**
 * @override
 * @inheritDoc
 */
ilib.Measurement.Speed.prototype.getMeasure = function() {
	return "speed";
};

/**
 * Convert the current speed to another measure.
 * 
 * @override
 * @inheritDoc
 */
ilib.Measurement.Speed.prototype.convert = function(to) {
	if (!to || typeof(ilib.Measurement.Speed.ratios[this.normalizeUnits(to)]) === 'undefined') {
		return undefined;
	}
	return new ilib.Measurement({
		unit: to,
		amount: this
	});
};

ilib.Measurement.Speed.aliases = {
    "foot/sec":"feet/sec",
    "foot/s":"feet/sec",
    "feet/s":"feet/sec",
    "f/s":"feet/sec",
    "meter/sec":"meters/sec",
    "meter/s":"meters/sec",
    "meters/s":"meters/sec",
    "metre/sec":"meters/sec",
    "metre/s":"meters/sec",
    "metres/s":"meters/sec",
    "mt/sec":"meters/sec",
    "m/sec":"meters/sec",
    "mt/s":"meters/sec",
    "m/s":"meters/sec",
    "mps":"meters/sec",
    "kilometer/hour":"km/hour",
    "kilometers/hour":"km/hour",
    "kmh":"km/hour",
    "km/h":"km/hour",
    "kilometer/h":"km/hour",
    "kilometers/h":"km/hour",
    "km/hr":"km/hour",
    "kilometer/hr":"km/hour",
    "kilometers/hr":"km/hour",
    "mph": "miles/hour",
    "mile/hour": "miles/hour",
    "mile/hr": "miles/hour",
    "mile/h": "miles/hour",
    "miles/h": "miles/hour",
    "miles/hr": "miles/hour",
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
    "nauticalmiles/hour": "knot"
};

/**
 * Convert a speed to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param speed {number} amount to be convert
 * @returns {number} the converted amount
 */
ilib.Measurement.Speed.convert = function(to, from, speed) {
        from = this.aliases[from] || from;
        to = this.aliases[to] || to;
	var fromRow = ilib.Measurement.Speed.ratios[from];
	var toRow = ilib.Measurement.Speed.ratios[to];
	if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
		return undefined;
	}
	//console.log("fromRow is " + fromRow + " toRow is " + toRow);
	//console.log("fromRow[toRow[0]] is " + fromRow[toRow[0]]);
	var result = speed * fromRow[toRow[0]];
        result = + result.toFixed(5);
        return result;
};

/**
 * @private
 * @static
 */
ilib.Measurement.Speed.getMeasures = function () {
	var ret = [];
	for (var m in ilib.Measurement.Speed.ratios) {
		ret.push(m);
	}
	return ret;
};

//register with the factory method
ilib.Measurement._constructors["speed"] = ilib.Measurement.Speed;