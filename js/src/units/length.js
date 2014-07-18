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


ilib.Measurement.Length = function () {
};

ilib.Measurement.Length.ratios = {
	"meter": {
		"nauticalmile": 0.000539957,
		"mile": 0.000621373,
		"yard": 1.09361,
		"foot": 3.28084,
		"inch": 39.3701
	},
	"nauticalmile": {
		"mile": 1.15078,
		"meter": 1852,
		"yard": 2025.37,
		"foot": 6076.12,
		"inch": 72913.4
	},
	"mile": {
		"nauticalmile": 0.868976,
		"meter": 1609.34,
		"yard": 1760,
		"foot": 5280,
		"inch": 63360
	},
	"yard": {
		"nauticalmile": 0.000493737,
		"mile": 0.000568182,
		"meter": 0.914402758,
		"foot": 3,
		"inch": 36
	},
	"foot": {
		"nauticalmile": 0.000164579,
		"mile": 0.000189394,
		"meter": 0.30479999,
		"yard": 0.33333333,
		"inch": 12
	},
	"inch": {
		"nauticalmile": 0.000013715,
		"mile": 0.000015783,
		"meter": 0.025399986,
		"yard": 0.027777778,
		"foot": 0.083333333
	}
};

ilib.Measurement.Length.prototype = new ilib.Measurement();
ilib.Measurement.Length.prototype.parent = ilib.Measurement;
ilib.Measurement.Length.prototype.constructor = ilib.Measurement.Length;

/**
 * @inheritDoc
 */
ilib.Measurement.Length.prototype.getMeasure = function() {
	return "length";
};
	
ilib.Measurement.Length.prototype.aliases = {
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
	"m": "meter"
};

ilib.Measurement.Length.prototype.convert = function(to, from, length) {
	if (typeof(ilib.Measurement.Length.ratios[from]) === 'undefined' ||
		typeof(ilib.Measurement.Length.ratios[from][to]) === 'undefined') {
		return undefined;
	}
	return length * ilib.Measurement.Length.ratios[from][to];
};
	
ilib.Measurement.Length.prototype.getMeasures = function () {
	var ret = [];
	for (var m in ilib.Measurement.Length.prototype.aliases) {
		ret.push(m);
	}
	return ret;
};

//register with the factory method
ilib.Measurement._constructors["length"] = ilib.Measurement.Length;