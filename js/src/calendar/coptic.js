/*
 * coptic.js - Represent a Coptic calendar object.
 * 
 * Copyright © 2015, JEDLSoft
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


/* !depends calendar.js locale.js date.js julianday.js util/utils.js util/math.js */

/**
 * @class
 * Construct a new Coptic calendar object. This class encodes information about
 * a Coptic calendar.<p>
 * 
 * Depends directive: !depends coptic.js
 * 
 * @constructor
 * @implements ilib.Cal
 */
ilib.Cal.Coptic = function() {
	this.type = "coptic";
};

/* the lengths of each month */
ilib.Cal.Coptic.monthLengths = [
	31,  /* Jan */
	28,  /* Feb */
	31,  /* Mar */
	30,  /* Apr */
	31,  /* May */
	30,  /* Jun */
	31,  /* Jul */
	31,  /* Aug */
	30,  /* Sep */
	31,  /* Oct */
	30,  /* Nov */
	31   /* Dec */
];

/**
 * Return the number of months in the given year. The number of months in a year varies
 * for lunar calendars because in some years, an extra month is needed to extend the 
 * days in a year to an entire solar year. The month is represented as a 1-based number
 * where 1=Jaunary, 2=February, etc. until 12=December.
 * 
 * @param {number} year a year for which the number of months is sought
 */
ilib.Cal.Coptic.prototype.getNumMonths = function(year) {
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
ilib.Cal.Coptic.prototype.getMonLength = function(month, year) {
	if (month !== 2 || !this.isLeapYear(year)) {
		return ilib.Cal.Coptic.monthLengths[month-1];
	} else {
		return 29;
	}
};

/**
 * Return true if the given year is a leap year in the Coptic calendar.
 * The year parameter may be given as a number, or as a JulDate object.
 * @param {number|ilib.Date.JulDate} year the year for which the leap year information is being sought
 * @return {boolean} true if the given year is a leap year
 */
ilib.Cal.Coptic.prototype.isLeapYear = function(year) {
	var y = (typeof(year) === 'number' ? year : year.year);
	return ilib.mod(y, 4) === ((year > 0) ? 0 : 3);
};

/**
 * Return the type of this calendar.
 * 
 * @return {string} the name of the type of this calendar 
 */
ilib.Cal.Coptic.prototype.getType = function() {
	return this.type;
};

/**
 * Return a date instance for this calendar type using the given
 * options.
 * @param {Object} options options controlling the construction of 
 * the date instance
 * @return {ilib.Date} a date appropriate for this calendar type
 */
ilib.Cal.Coptic.prototype.newDateInstance = function (options) {
	return new ilib.Date.JulDate(options);
};

/* register this calendar for the factory method */
ilib.Cal._constructors["coptic"] = ilib.Cal.Coptic;