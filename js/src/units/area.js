/*
 * area.js - Unit conversions for Area
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
 * Create a new area measurement.
 * 
 * @class
 * @constructor
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling 
 * the construction of this instance
 */
ilib.Measurement.Area = function (options) {
	this.unit = "square km";
	this.amount = 0;
	this.aliases = ilib.Measurement.Area.aliases; // share this table in all instances
	
	if (options) {
		if (typeof(options.unit) !== 'undefined') {
			this.originalUnit = options.unit;
			this.unit = this.aliases[options.unit] || options.unit;
		}
		
		if (typeof(options.amount) === 'object') {
			if (options.amount.getMeasure() === "area") {
				this.amount = ilib.Measurement.Area.convert(this.unit, options.amount.getUnit(), options.amount.getAmount());
			} else {
				throw "Cannot convert unit " + options.amount.unit + " to area";
			}
		} else if (typeof(options.amount) !== 'undefined') {
			this.amount = parseFloat(options.amount);
		}
	}
	
	if (typeof(ilib.Measurement.Area.ratios[this.unit]) === 'undefined') {
		throw "Unknown unit: " + options.unit;
	}
};

ilib.Measurement.Area.ratios = {
    /*               index		square cm,		square meter,   hectare,   	square km, 	, square inch 	square foot, 		square yard, 	  	  		acre,			square mile			        */
    "square centimeter":[1,   	1,				0.0001,			1e-8,	    1e-10,        0.15500031,	0.00107639104,		0.000119599005,			2.47105381e-8,		3.86102159e-11 		],
    "square meter": 	[2,   	10000,			1,              1e-4,       1e-6,         1550,    	 	10.7639,    	  	1.19599,   				0.000247105,		3.861e-7     	    ],
    "hectare":      	[3,	 	100000000,  	10000,          1,          0.01,         1.55e+7, 	  	107639,     	 	11959.9,   				2.47105	,			0.00386102    	    ],
    "square km":    	[4,	  	10000000000, 	1e+6,          	100,        1,	          1.55e+9, 	  	1.076e+7,   	 	1.196e+6,  				247.105 ,   		0.386102     	    ],
    "square inch":  	[5,	  	6.4516,			0.00064516,     6.4516e-8,  6.4516e-10,   1,			0.000771605,	  	0.0007716051, 			1.5942e-7,			2.491e-10    	    ],
    "square foot":  	[6,		929.0304,		0.092903,       9.2903e-6,  9.2903e-8,    144,			1,          	  	0.111111,  				2.2957e-5,			3.587e-8    		],
    "square yard":  	[7,		8361.2736,		0.836127,       8.3613e-5,  8.3613e-7,    1296,    	  	9,          	  	1,         				0.000206612,		3.2283e-7    	    ],
    "acre":         	[8,		40468564.2,		4046.86,        0.404686,   0.00404686,   6.273e+6,	  	43560,      	  	4840,      				1,		    		0.0015625    	    ],
    "square mile":  	[9,	   	2.58998811e+10,	2.59e+6,        258.999,    2.58999,      4.014e+9,	 	2.788e+7,   	  	3.098e+6,  				640,     			1   	     		]
}

ilib.Measurement.Area.prototype = new ilib.Measurement({});
ilib.Measurement.Area.prototype.parent = ilib.Measurement;
ilib.Measurement.Area.prototype.constructor = ilib.Measurement.Area;

/**
 * @inheritDoc
 */ 
ilib.Measurement.Area.prototype.getMeasure = function() {
	return "area";
}; 

/**
 * Convert the current Area to another measure.
 * 
 * @inheritDoc
 */
ilib.Measurement.Area.prototype.convert = function(to) {
	if (!to || typeof(ilib.Measurement.Area.ratios[this.normalizeUnits(to)]) === 'undefined') {
		return undefined;
	}
	return new ilib.Measurement({
		unit: to, 
		amount: this
	});
};

ilib.Measurement.Area.aliases = {
    "square centimeter":"square centimeter",
    "square cm":"square centimeter",
    "sq cm":"square centimeter",
    "Square Cm":"square centimeter",
    "square Centimeters":"square centimeter",
    "square Centimeter":"square centimeter",
    "square Centimetre":"square centimeter",
    "square Centimetres":"square centimeter",
    "square centimeters":"square centimeter",
    "Square km": "square km",
	"Square kilometre":"square km",
	"square kilometer":"square km",
	"square kilometre":"square km",
	"square kilometers":"square km",
	"square kilometres":"square km",
	"sq km":"square km",
	"km2":"square km",
	"Hectare":"hectare",
	"hectare":"hectare",
	"ha":"hectare",
	"Square meter": "square meter",
	"Square meters":"square meter",
	"square meter": "square meter",
	"square meters":"square meter",
	"Square metre": "square meter",
	"Square metres":"square meter",
	"square metres": "square meter",
	"square metres":"square meter",
	"sqm":"square meter",
	"m2": "square meter",
	"Square mile":"square mile",
	"Square miles":"square mile",
	"square mile":"square mile",
	"square miles":"square mile",
	"square mi":"square mile",
	"Square mi":"square mile",
	"sq mi":"square mile",
	"mi2":"square mile",
	"Acre": "acre",
	"acre": "acre",
	"Acres":"acre",
	"acres":"acre",
	"Square yard": "square yard",
	"Square yards":"square yard",
	"square yard": "square yard",
	"square yards":"square yard",
	"yd2":"square yard",
	"Square foot": "square foot",
	"square foot": "square foot",
	"Square feet": "square foot",
	"Square feet": "square foot",
	"sq ft":"square foot",
	"ft2":"square foot",
	"Square inch":"square inch",
	"square inch":"square inch",
	"Square inches":"square inch",
	"square inches":"square inch",
	"in2":"square inch"
};

/**
 * Convert a Area to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param area {number} amount to be convert
 * @returns {number|undefined} the converted amount
 */
ilib.Measurement.Area.convert = function(to, from, area) {
    from = ilib.Measurement.Area.aliases[from] || from;
    to = ilib.Measurement.Area.aliases[to] || to;
	var fromRow = ilib.Measurement.Area.ratios[from];
	var toRow = ilib.Measurement.Area.ratios[to];
	if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
		return undefined;
	}
	return area* fromRow[toRow[0]];
};

/**
 * @private
 * @static
 */
ilib.Measurement.Area.getMeasures = function () {
	var ret = [];
	for (var m in ilib.Measurement.Area.ratios) {
		ret.push(m);
	}
	return ret;
};

ilib.Measurement.Area.metricSystem      = {"square centimeter":1,"square meter":2,"hectare":3,"square km":4};
ilib.Measurement.Area.imperialSystem    = {"square inch":5,"square foot":6,"square yard":7,"acre":8,"square mile":9};
ilib.Measurement.Area.uscustomarySystem = {"square inch":5,"square foot":6,"square yard":7,"acre":8,"square mile":9};

ilib.Measurement.Area.metricToUScustomary = {"square centimeter":"square inch","square meter":"square yard","hectare":"acre","square km":"square mile"};
ilib.Measurement.Area.usCustomaryToMetric = {"square inch":"square centimeter","square foot":"square meter","square yard":"square meter","acre":"hectare","square mile":"square km"};


/**
 * @inheritDoc
 * @param {string=} measurementsystem
 * @return {ilib.Measurement}
 */
ilib.Measurement.Area.prototype.scale = function(measurementsystem) {
    var fromRow = ilib.Measurement.Area.ratios[this.unit];
    var mSystem;

    if (measurementsystem === "metric" || (typeof(measurementsystem) === 'undefined'
        && typeof(ilib.Measurement.Area.metricSystem[this.unit]) !== 'undefined')) {
        mSystem = ilib.Measurement.Area.metricSystem;
    }

    else  if (measurementsystem === "uscustomary" || (typeof(measurementsystem) === 'undefined'
        && typeof(ilib.Measurement.Area.metricSystem[this.unit]) !== 'undefined')) {
        mSystem = ilib.Measurement.Area.uscustomarySystem;
    }

    else if (measurementsystem === "imperial" || (typeof(measurementsystem) === 'undefined'
        && typeof(ilib.Measurement.Area.metricSystem[this.unit]) !== 'undefined')) {
        mSystem = ilib.Measurement.Area.imperialSystem;
    }

    var area;
    var munit;

    for (var m in mSystem) {
        var tmp = this.amount * fromRow[mSystem[m]];
        if (tmp < 1) break;
        area = tmp;
        munit = m;
    }

    return new ilib.Measurement.Area({
        unit: munit,
        amount: area
    });
};

ilib.Measurement.Area.prototype.localize = function(locale) {
    var to;
    if (locale === "en-US" || locale === "en-UK") {
        to = ilib.Measurement.Area.metricToUScustomary[this.unit] || this.unit;
    } else {
        to = ilib.Measurement.Area.usCustomaryToMetric[this.unit] || this.unit;
    }
    return new ilib.Measurement.Area({
        unit: to,
        amount: this
    });
};


//register with the factory method
ilib.Measurement._constructors["area"] = ilib.Measurement.Area;
