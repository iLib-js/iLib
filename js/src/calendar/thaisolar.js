/*
 * thaisolar.js - Represent a Thai solar calendar object.
 * 
 * Copyright © 2013-2014, JEDLSoft
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


/* !depends calendar.js locale.js date.js julianday.js calendar/gregorian.js util/utils.js */

/**
 * Construct a new Thai solar calendar object. This class encodes information about
 * a Thai solar calendar.<p>
 * 
 * Depends directive: !depends thaisolar.js
 * 
 * @class
 * @constructor
 * @implements ilib.Cal
 */
ilib.Cal.ThaiSolar = function() {
	this.type = "thaisolar";
};

ilib.Cal.ThaiSolar.prototype = new ilib.Cal.Gregorian();
ilib.Cal.ThaiSolar.prototype.parent = ilib.Cal.Gregorian;
ilib.Cal.ThaiSolar.prototype.constructor = ilib.Cal.ThaiSolar;

/**
 * Return true if the given year is a leap year in the Thai solar calendar.
 * The year parameter may be given as a number, or as a ThaiSolarDate object.
 * @param {number|ilib.Date.ThaiSolarDate} year the year for which the leap year information is being sought
 * @return {boolean} true if the given year is a leap year
 */
ilib.Cal.ThaiSolar.prototype.isLeapYear = function(year) {
	var y = (typeof(year) === 'number' ? year : year.getYears());
	y -= 543;
	var centuries = ilib.mod(y, 400);
	return (ilib.mod(y, 4) === 0 && centuries !== 100 && centuries !== 200 && centuries !== 300);
};

/**
 * Return a date instance for this calendar type using the given
 * options.
 * @param {Object} options options controlling the construction of 
 * the date instance
 * @return {ilib.Date} a date appropriate for this calendar type
 */
ilib.Cal.ThaiSolar.prototype.newDateInstance = function (options) {
	return new ilib.Date.ThaiSolarDate(options);
};

/* register this calendar for the factory method */
ilib.Cal._constructors["thaisolar"] = ilib.Cal.ThaiSolar;