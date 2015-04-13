/*
 * persianastro.js - Represent a Persian astronomical (Hijjri) calendar object.
 * 
 * Copyright © 2014-2015, JEDLSoft
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


/* !depends 
calendar/astro.js 
calendar.js 
calendar/persratadie.js 
ilibglobal.js
util/math.js
*/

var ilib = require("../ilibglobal.js");
if (!ilib.signum || ilib.signum.stub) ilib.extend(ilib, require("../util/math.js"));

if (!ilib.Date || ilib.Date.stub) ilib.Date = require("../date.js");
if (!ilib.Cal || ilib.Cal.stub) ilib.Cal = require("../calendar.js");

if (!ilib.Date.initAstro || ilib.Date.initAstro.stub) ilib.extend(ilib.Date, require("./astro.js"));
if (!ilib.Date.PersAstroRataDie || ilib.Date.PersAstroRataDie.stub) ilib.Date.PersAstroRataDie = require("./persratadie.js");

/**
 * @class
 * Construct a new Persian astronomical (Hijjri) calendar object. This class encodes 
 * information about a Persian calendar. This class differs from the 
 * Persian calendar in that the leap years are calculated based on the
 * astronomical observations of the sun in Teheran, instead of calculating
 * the leap years based on a regular cyclical rhythm algorithm.<p>
 * 
 * Depends directive: !depends persianastro.js
 * 
 * @constructor
 * @implements ilib.Cal
 */
ilib.Cal.Persian = function() {
	this.type = "persian";
};

/**
 * @private
 * @const
 * @type Array.<number> 
 * the lengths of each month 
 */
ilib.Cal.Persian.monthLengths = [
	31,  // Farvardin
	31,  // Ordibehesht
	31,  // Khordad
	31,  // Tir
	31,  // Mordad
	31,  // Shahrivar
	30,  // Mehr
	30,  // Aban
	30,  // Azar
	30,  // Dey
	30,  // Bahman
	29   // Esfand
];

/**
 * Return the number of months in the given year. The number of months in a year varies
 * for some luni-solar calendars because in some years, an extra month is needed to extend the 
 * days in a year to an entire solar year. The month is represented as a 1-based number
 * where 1=first month, 2=second month, etc.
 * 
 * @param {number} year a year for which the number of months is sought
 * @return {number} The number of months in the given year
 */
ilib.Cal.Persian.prototype.getNumMonths = function(year) {
	return 12;
};

/**
 * Return the number of days in a particular month in a particular year. This function
 * can return a different number for a month depending on the year because of things
 * like leap years.
 * 
 * @param {number} month the month for which the length is sought
 * @param {number} year the year within which that month can be found
 * @return {number} the number of days within the given month in the given year
 */
ilib.Cal.Persian.prototype.getMonLength = function(month, year) {
	if (month !== 12 || !this.isLeapYear(year)) {
		return ilib.Cal.Persian.monthLengths[month-1];
	} else {
		// Month 12, Esfand, has 30 days instead of 29 in leap years
		return 30;
	}
};

/**
 * Return true if the given year is a leap year in the Persian astronomical calendar.
 * @param {number} year the year for which the leap year information is being sought
 * @return {boolean} true if the given year is a leap year
 */
ilib.Cal.Persian.prototype.isLeapYear = function(year) {
	var rdNextYear = new ilib.Date.PersAstroRataDie({
		cal: this,
		year: year + 1,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	var rdThisYear = new ilib.Date.PersAstroRataDie({
		cal: this,
		year: year,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	}); 
    return (rdNextYear.getRataDie() - rdThisYear.getRataDie()) > 365;
};

/**
 * Return the type of this calendar.
 * 
 * @return {string} the name of the type of this calendar 
 */
ilib.Cal.Persian.prototype.getType = function() {
	return this.type;
};

/**
 * Return a date instance for this calendar type using the given
 * options.
 * @param {Object} options options controlling the construction of 
 * the date instance
 * @return {ilib.Date} a date appropriate for this calendar type
 */
ilib.Cal.Persian.prototype.newDateInstance = function (options) {
	if (!ilib.Date.PersDate || ilib.Date.PersDate.stub) require("./persianastrodate.js");
	return new ilib.Date.PersDate(options);
};

/* register this calendar for the factory method */
ilib.Cal._constructors["persian"] = ilib.Cal.Persian;

module.exports = ilib.Cal.Persian;