/*
 * han.js - Represent a Han Chinese Lunar calendar object.
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
ilibglobal.js 
calendar.js 
date.js 
util/utils.js 
util/math.js 
calendar/astro.js
calendar/gregoriandate.js
calendar/gregratadie.js
*/

var ilib = require("../ilibglobal.js");
if (!ilib.bind || ilib.bind.stub) ilib.extend(ilib, require("../util/utils.js"));
if (!ilib.signum || ilib.signum.stub) ilib.extend(ilib, require("../util/math.js"));

if (!ilib.Date || ilib.Date.stub) ilib.Date = require("../date.js");
if (!ilib.Cal || ilib.Cal.stub) ilib.Cal = require("../calendar.js");

if (!ilib.Date.initAstro || ilib.Date.initAstro.stub) ilib.extend(ilib.Date, require("./astro.js"));
if (!ilib.Date.GregDate || ilib.Date.GregDate.stub) ilib.Date.GregDate = require("./gregoriandate.js");
if (!ilib.Date.GregRataDie || ilib.Date.GregRataDie.stub) ilib.Date.GregRataDie = require("./gregratadie.js");

/**
 * @class
 * Construct a new Han algorithmic calendar object. This class encodes information about
 * a Han algorithmic calendar.<p>
 * 
 * Depends directive: !depends han.js
 * 
 * @constructor
 * @param {Object=} params optional parameters to load the calendrical data
 * @implements ilib.Cal
 */
ilib.Cal.Han = function(params) {
	this.type = "han";
	var sync = params && typeof(params.sync) === 'boolean' ? params.sync : true;
	
	ilib.Date.initAstro(sync, params && params.loadParams, /** @type {function ((Object|null)=): ?} */ ilib.bind(this, function (x) {
		if (params && typeof(params.callback) === 'function') {
			params.callback(this);
		}
	}));
};

/**
 * @protected
 * @static
 * @param {number} year
 * @param {number=} cycle
 * @return {number}
 */
ilib.Cal.Han._getElapsedYear = function(year, cycle) {
	var elapsedYear = year || 0;
	if (typeof(year) !== 'undefined' && year < 61 && typeof(cycle) !== 'undefined') {
		elapsedYear = 60 * cycle + year;
	}
	return elapsedYear;
};

/**
 * @protected
 * @static
 * @param {number} jd julian day to calculate from
 * @param {number} longitude longitude to seek 
 * @returns {number} the julian day of the next time that the solar longitude 
 * is a multiple of the given longitude
 */
ilib.Cal.Han._hanNextSolarLongitude = function(jd, longitude) {
	var tz = ilib.Cal.Han._chineseTZ(jd);
	var uni = ilib.Date._universalFromLocal(jd, tz);
	var sol = ilib.Date._nextSolarLongitude(uni, longitude);
	return ilib.Date._localFromUniversal(sol, tz);
};

/**
 * @protected
 * @static
 * @param {number} jd julian day to calculate from 
 * @returns {number} the major solar term for the julian day
 */
ilib.Cal.Han._majorSTOnOrAfter = function(jd) {
	var tz = ilib.Cal.Han._chineseTZ(jd);
	var uni = ilib.Date._universalFromLocal(jd, tz);
	var next = ilib.Date._fixangle(30 * Math.ceil(ilib.Date._solarLongitude(uni)/30));
	return ilib.Cal.Han._hanNextSolarLongitude(jd, next);
};

/**
 * @protected
 * @static
 * @param {number} year the year for which the leap year information is being sought
 * @param {number=} cycle if the given year < 60, this can specify the cycle. If the
 * cycle is not given, then the year should be given as elapsed years since the beginning
 * of the epoch
 */
ilib.Cal.Han._solsticeBefore = function (year, cycle) {
	var elapsedYear = ilib.Cal.Han._getElapsedYear(year, cycle);
	var gregyear = elapsedYear - 2697;
	var rd = new ilib.Date.GregRataDie({
		year: gregyear-1, 
		month: 12, 
		day: 15, 
		hour: 0, 
		minute: 0, 
		second: 0, 
		millisecond: 0
	});
	return ilib.Cal.Han._majorSTOnOrAfter(rd.getRataDie() + ilib.Date.RataDie.gregorianEpoch);
};

/**
 * @protected
 * @static
 * @param {number} jd julian day to calculate from
 * @returns {number} the current major solar term
 */
ilib.Cal.Han._chineseTZ = function(jd) {
	var year = ilib.Date.GregDate._calcYear(jd - ilib.Date.RataDie.gregorianEpoch);
	return year < 1929 ? 465.6666666666666666 : 480;
};

/**
 * @protected
 * @static
 * @param {number} jd julian day to calculate from 
 * @returns {number} the julian day of next new moon on or after the given julian day date
 */
ilib.Cal.Han._newMoonOnOrAfter = function(jd) {
	var tz = ilib.Cal.Han._chineseTZ(jd);
	var uni = ilib.Date._universalFromLocal(jd, tz);
	var moon = ilib.Date._newMoonAtOrAfter(uni);
	// floor to the start of the julian day
	return ilib.Date._floorToJD(ilib.Date._localFromUniversal(moon, tz)); 
};

/**
 * @protected
 * @static
 * @param {number} jd julian day to calculate from 
 * @returns {number} the julian day of previous new moon before the given julian day date
 */
ilib.Cal.Han._newMoonBefore = function(jd) {
	var tz = ilib.Cal.Han._chineseTZ(jd);
	var uni = ilib.Date._universalFromLocal(jd, tz);
	var moon = ilib.Date._newMoonBefore(uni);
	// floor to the start of the julian day
	return ilib.Date._floorToJD(ilib.Date._localFromUniversal(moon, tz));
};

/**
 * @static
 * @protected
 * @param {number} year the year for which the leap year information is being sought
 * @param {number=} cycle if the given year < 60, this can specify the cycle. If the
 * cycle is not given, then the year should be given as elapsed years since the beginning
 * of the epoch
 */
ilib.Cal.Han._leapYearCalc = function(year, cycle) {
	var ret = {
		elapsedYear: ilib.Cal.Han._getElapsedYear(year, cycle)
	};
	ret.solstice1 = ilib.Cal.Han._solsticeBefore(ret.elapsedYear);
	ret.solstice2 = ilib.Cal.Han._solsticeBefore(ret.elapsedYear+1);
	// ceil to the end of the julian day
	ret.m1 = ilib.Cal.Han._newMoonOnOrAfter(ilib.Date._ceilToJD(ret.solstice1));
	ret.m2 = ilib.Cal.Han._newMoonBefore(ilib.Date._ceilToJD(ret.solstice2));
	
	return ret;
};

/**
 * @protected
 * @static
 * @param {number} jd julian day to calculate from
 * @returns {number} the current major solar term
 */
ilib.Cal.Han._currentMajorST = function(jd) {
	var s = ilib.Date._solarLongitude(ilib.Date._universalFromLocal(jd, ilib.Cal.Han._chineseTZ(jd)));
	return ilib.amod(2 + Math.floor(s/30), 12);
};

/**
 * @protected
 * @static
 * @param {number} jd julian day to calculate from
 * @returns {boolean} true if there is no major solar term in the same year
 */
ilib.Cal.Han._noMajorST = function(jd) {
	return ilib.Cal.Han._currentMajorST(jd) === ilib.Cal.Han._currentMajorST(ilib.Cal.Han._newMoonOnOrAfter(jd+1));
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
	return this.isLeapYear(year, cycle) ? 13 : 12;
};

/**
 * Return the number of days in a particular month in a particular year. This function
 * can return a different number for a month depending on the year because of things
 * like leap years.
 * 
 * @param {number} month the elapsed month for which the length is sought
 * @param {number} year the elapsed year within which that month can be found
 * @return {number} the number of days within the given month in the given year
 */
ilib.Cal.Han.prototype.getMonLength = function(month, year) {
	// distance between two new moons in Nanjing China
	var calc = ilib.Cal.Han._leapYearCalc(year);
	var priorNewMoon = ilib.Cal.Han._newMoonOnOrAfter(calc.m1 + month * 29);
	var postNewMoon = ilib.Cal.Han._newMoonOnOrAfter(priorNewMoon + 1);
	return postNewMoon - priorNewMoon;
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
	var calc = ilib.Cal.Han._leapYearCalc(year, cycle);
	return Math.round((calc.m2 - calc.m1) / 29.530588853000001) === 12;
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
	var calc = ilib.Cal.Han._leapYearCalc(year, cycle);
	
	if (Math.round((calc.m2 - calc.m1) / 29.530588853000001) != 12) {
		return -1; // no leap month
	}
	
	// search between rd1 and rd2 for the first month with no major solar term. That is our leap month.
	var month = 0;
	var m = ilib.Cal.Han._newMoonOnOrAfter(calc.m1+1);
	while (!ilib.Cal.Han._noMajorST(m)) {
		month++;
		m = ilib.Cal.Han._newMoonOnOrAfter(m+1);
	}
	
	// return the number of the month that is doubled
	return month; 
};

/**
 * Return the date of Chinese New Years in the given calendar year.
 * 
 * @param {number} year the Chinese year for which the new year information is being sought
 * @param {number=} cycle if the given year < 60, this can specify the cycle. If the
 * cycle is not given, then the year should be given as elapsed years since the beginning
 * of the epoch
 * @return {number} the julian day of the beginning of the given year 
 */
ilib.Cal.Han.prototype.newYears = function(year, cycle) {
	var calc = ilib.Cal.Han._leapYearCalc(year, cycle);
	var m2 = ilib.Cal.Han._newMoonOnOrAfter(calc.m1+1);
	if (Math.round((calc.m2 - calc.m1) / 29.530588853000001) === 12 &&
			(ilib.Cal.Han._noMajorST(calc.m1) || ilib.Cal.Han._noMajorST(m2)) ) {
		return ilib.Cal.Han._newMoonOnOrAfter(m2+1);
	}
	return m2;
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
	if (!ilib.Date.HanDate || ilib.Date.HanDate.stub) require("./handate.js");
	return new ilib.Date.HanDate(options);
};

/* register this calendar for the factory method */
ilib.Cal._constructors["han"] = ilib.Cal.Han;

module.exports = ilib.Cal.Han;