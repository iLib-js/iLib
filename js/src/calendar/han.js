/*
 * han.js - Represent a Han Chinese Lunar calendar object.
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


/* !depends calendar.js locale.js date.js julianday.js util/utils.js util/math.js */

/**
 * @class
 * Construct a new Han algorithmic calendar object. This class encodes information about
 * a Han algorithmic calendar.<p>
 * 
 * Depends directive: !depends han.js
 * 
 * @constructor
 * @implements ilib.Cal
 */
ilib.Cal.Han = function() {
	this.type = "han";
};

/**
 * @protected
 * @static
 * @param {number} year
 * @param {number=} cycle
 * @return {number}
 */
ilib.Cal.Han._getElapsedYear = function(year, cycle) {
	var elapsedYear = year;
	if (year > 60 && typeof(cycle) !== 'undefined') {
		elapsedYear = 60 * (cycle - 1) + year;
	}
	return elapsedYear;
};

/**
 * Return the number of months in the given year. The number of months in a year varies
 * for some luni-solar calendars because in some years, an extra month is needed to extend the 
 * days in a year to an entire solar year. The month is represented as a 1-based number
 * where 1=first month, 2=second month, etc.
 * 
 * @param {number} year a year for which the number of months is sought
 * @param {number=} cycle if the given year < 60, this can specify the cycle. If the
 * cycle is not given, then the year should be given as elapsed years since the beginning
 * of the epoch
 * @return {number} The number of months in the given year
 */
ilib.Cal.Han.prototype.getNumMonths = function(year, cycle) {
	return this.isLeapYear(ilib.Cal.Han._getElapsedYear(year, cycle)) ? 13 : 12;
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
ilib.Cal.Han.prototype.getMonLength = function(month, year) {
	// distance between two new moons in Nanjing China
	return 30;
};

/**
 * Return the equivalent year in the 2820 year cycle that begins on 
 * Far 1, 474. This particular cycle obeys the cycle-of-years formula 
 * whereas the others do not specifically. This cycle can be used as
 * a proxy for other years outside of the cycle by shifting them into 
 * the cycle.   
 * @param {number} year year to find the equivalent cycle year for
 * @returns {number} the equivalent cycle year
 */
ilib.Cal.Han.prototype.equivalentCycleYear = function(year) {
	var y = year - (year >= 0 ? 474 : 473);
	return ilib.mod(y, 2820) + 474;
};

/**
 * Return true if the given year is a leap year in the Han calendar.
 * If the year is given as a year/cycle combination, then the year should be in the 
 * range [1,60] and the given cycle is the cycle in which the year is located. If 
 * the year is greater than 60, then
 * it represents the total number of years elapsed in the proleptic calendar since
 * the beginning of the Chinese epoch in on 15 Feb, -2636 (Gregorian). In this 
 * case, the cycle parameter is ignored.
 * 
 * @param {number} year the year for which the leap year information is being sought
 * @param {number=} cycle if the given year < 60, this can specify the cycle. If the
 * cycle is not given, then the year should be given as elapsed years since the beginning
 * of the epoch
 * @return {boolean} true if the given year is a leap year
 */
ilib.Cal.Han.prototype.isLeapYear = function(year, cycle) {
	var elapsedYear = ilib.Cal.Han._getElapsedYear(year, cycle);
	var gregyear = elapsedYear - 2697;
	var rd1 = new ilib.Date.GregRataDie({
		year: gregyear-1, 
		month: 12, 
		day: 15, 
		hour: 0, 
		minute: 0, 
		second: 0, 
		millisecond: 0
	});
	var rd2 = new ilib.Date.GregRataDie({
		year: gregyear, 
		month: 12, 
		day: 15, 
		hour: 0, 
		minute: 0, 
		second: 0, 
		millisecond: 0
	});
	var solstice1 = ilib.Date.HanDate._majorSTOnOrAfter(rd1.getRataDie());
	var solstice2 = ilib.Date.HanDate._majorSTOnOrAfter(rd2.getRataDie());
	var m1 = ilib.Date.HanDate._newMoonOnOrAfter(solstice1+1);
	var m2 = ilib.Date.HanDate._newMoonBefore(solstice2+1);
	return Math.round((m2 - m1) / 29.530588853000001) === 12;
};

/**
 * Return the month of the year that is the leap month. If the given year is
 * not a leap year, then this method will return -1.
 * 
 * @param {number} year the year for which the leap year information is being sought
 * @param {number=} cycle if the given year < 60, this can specify the cycle. If the
 * cycle is not given, then the year should be given as elapsed years since the beginning
 * of the epoch
 * @return {number} the number of the month that is doubled in this leap year, or -1
 * if this is not a leap year
 */
ilib.Cal.Han.prototype.getLeapMonth = function(year, cycle) {
	var elapsedYear = ilib.Cal.Han._getElapsedYear(year, cycle);
	return -1;
};

/**
 * Return the type of this calendar.
 * 
 * @return {string} the name of the type of this calendar 
 */
ilib.Cal.Han.prototype.getType = function() {
	return this.type;
};

/**
 * Return a date instance for this calendar type using the given
 * options.
 * @param {Object} options options controlling the construction of 
 * the date instance
 * @return {ilib.Date} a date appropriate for this calendar type
 */
ilib.Cal.Han.prototype.newDateInstance = function (options) {
	return new ilib.Date.HanDate(options);
};

/* register this calendar for the factory method */
ilib.Cal._constructors["han"] = ilib.Cal.Han;
