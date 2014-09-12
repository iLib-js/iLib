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
	this.unit = "Square km";
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
/*index	   : 	Square km, 	Hectare,	Square meter,	Square mile,     Acre,	 Square yard,	Square foot,	Square inch */ 

"Square km":	[1, 1	       	, 	100       , 	1e+6        , 	0.386102   ,	247.105    ,	1.196e+6  , 1.076e+7   , 1.55e+9 ],
"Hectare"  :	[2, 0.01       	, 	1         , 	10000       , 	0.00386102 ,	2.47105    ,	11959.9   , 107639     , 1.55e+7 ],
"Square meter": [3, 1e-6	, 	1e-4      , 	1	    , 	3.861e-7   ,	0.000247105,	1.19599   , 10.7639    , 1550    ],
"Square mile" : [4, 2.58999    	,	258.999   , 	2.59e+6     , 	1	   ,	640	   ,  	3.098e+6  , 2.788e+7   , 4.014e+9],
"Acre"	   :	[5, 0.00404686 	, 	0.404686  ,	4046.86     ,	0.0015625  , 	1          ,  	4840	  , 43560      , 6.273e+6],
"Square yard":	[6, 8.3613e-7  	, 	8.3613e-5 ,	0.836127    ,	3.2283e-7  ,	0.000206612,    1	  , 9          , 1296    ],
"Square foot":  [7, 9.2903e-8  	,  	9.2903e-6 ,	0.092903    ,	3.587e-8   ,	2.2957e-5  ,	0.111111  , 1	       , 144	 ],
"Square inch":	[8, 6.4516e-10 	,	6.4516e-8 ,	0.00064516  ,	2.491e-10  ,	1.5942e-7  ,	0.000771605, 0.000771605, 1	 ]

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
	"Square km": "Square km",
	"Square kilometre":"Square km",
	"square kilometer":"Square km",
	"square kilometre":"Square km",
	"square kilometers":"Square km",
	"square kilometres":"Square km",
	"sq km":"Square km",
	"km2":"Square km",

	"Hectare":"Hectare",
	"hectare":"Hectare",
	"ha":"Hectare",

	"Square meter": "Square meter",
	"Square meters":"Square meter",
	"square meter": "Square meter",
	"square meters":"Square meter",
	"Square metre": "Square meter",
	"Square metres":"Square meter",
	"square metres": "Square meter",
	"square metres":"Square meter",
	"sqm":"Square meter",
	"m2": "Square meter",

	"Square mile":"Square mile",
	"Square miles":"Square mile",
	"square mile":"Square mile",
	"square miles":"Square mile",
	"square mi":"Square mile",
	"Square mi":"Square mile",
	"sq mi":"Square mile",
	"mi2":"Square mile",

	"Acre": "Acre",
	"acre": "Acre",
	"Acres":"Acre",
	"acres":"Acre",

	"Square yard": "Square yard",
	"Square yards":"Square yard",
	"square yard": "Square yard",
	"square yards":"Square yard",
	"yd2":"Square yard",

	"Square foot": "Square foot",
	"square foot": "Square foot",
	"Square feet": "Square foot",
	"Square feet": "Square foot",
	"sq ft":"Square foot",
	"ft2":"Square foot",

	"Square inch":"Square inch",
	"square inch":"Square inch",
	"Square inches":"Square inch",
	"square inches":"Square inch",
	"in2":"Square inch"
};

/**
 * Convert a Area to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param area {number} amount to be convert
 * @returns {number} the converted amount
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

//register with the factory method
ilib.Measurement._constructors["area"] = ilib.Measurement.Area;
