/*
 * handate.js - Represent a date in the Han algorithmic calendar
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

/* !depends 
date.js
calendar/gregratadie.js 
calendar/gregoriandate.js 
calendar/han.js
util/utils.js
util/search.js
util/math.js
localeinfo.js 
julianday.js 
*/

/**
 * Construct a new Han RD date number object. The constructor parameters can 
 * contain any of the following properties:
 * 
 * <ul>
 * <li><i>unixtime<i> - sets the time of this instance according to the given 
 * unix time. Unix time is the number of milliseconds since midnight on Jan 1, 1970, Gregorian
 * 
 * <li><i>julianday</i> - sets the time of this instance according to the given
 * Julian Day instance or the Julian Day given as a float
 * 
 * <li><i>cycle</i> - any integer giving the number of 60-year cycle in which the date is located.
 * If the cycle is not given but the year is, it is assumed that the year parameter is a fictitious 
 * linear count of years since the beginning of the epoch, much like other calendars. This linear
 * count is never used. If both the cycle and year are given, the year is wrapped to the range 0 
 * to 60 and treated as if it were a year in the regular 60-year cycle.
 * 
 * <li><i>year</i> - any integer, including 0
 * 
 * <li><i>month</i> - 1 to 12, where 1 means Farvardin, 2 means Ordibehesht, etc.
 * 
 * <li><i>day</i> - 1 to 31
 * 
 * <li><i>hour</i> - 0 to 23. A formatter is used to display 12 hour clocks, but this representation 
 * is always done with an unambiguous 24 hour representation
 * 
 * <li><i>minute</i> - 0 to 59
 * 
 * <li><i>second</i> - 0 to 59
 * 
 * <li><i>millisecond</i> - 0 to 999
 * 
 * <li><i>date</i> - use the given intrinsic Javascript date to initialize this one.
 * </ul>
 *
 * If the constructor is called with another Han date instance instead of
 * a parameter block, the other instance acts as a parameter block and its
 * settings are copied into the current instance.<p>
 * 
 * If the constructor is called with no arguments at all or if none of the 
 * properties listed above are present, then the RD is calculate based on 
 * the current date at the time of instantiation. <p>
 * 
 * If any of the properties from <i>year</i> through <i>millisecond</i> are not
 * specified in the params, it is assumed that they have the smallest possible
 * value in the range for the property (zero or one).<p>
 * 
 * Depends directive: !depends handate.js
 * 
 * @private
 * @class
 * @constructor
 * @extends ilib.Date.RataDie
 * @param {Object=} params parameters that govern the settings and behaviour of this Han RD date
 */
ilib.Date.HanRataDie = function(params) {
	this.cal = params && params.cal || new ilib.Cal.Han();
	this.rd = undefined;
	ilib.Date.RataDie.call(this, params);
};

ilib.Date.HanRataDie.prototype = new ilib.Date.RataDie();
ilib.Date.HanRataDie.prototype.parent = ilib.Date.RataDie;
ilib.Date.HanRataDie.prototype.constructor = ilib.Date.HanRataDie;

/**
 * The difference between a zero Julian day and the first Han date
 * which is February 15, -2636 (Gregorian).
 * @private
 * @const
 * @type number
 */
ilib.Date.HanRataDie.epoch = 758325.5;

/**
 * Calculate the Rata Die (fixed day) number of the given date from the
 * date components.
 *
 * @protected
 * @param {Object} date the date components to calculate the RD from
 */
ilib.Date.HanRataDie.prototype._setDateComponents = function(date) {
	var calc = ilib.Cal.Han._leapYearCalc(date.year, date.cycle);
	var m2 = ilib.Date.HanDate._newMoonOnOrAfter(calc.m1+1);
	var newYears;
	var isLeapYear = (Math.round((calc.m2 - calc.m1) / 29.530588853000001) === 12);
	if (isLeapYear && (ilib.Date.HanDate._noMajorST(calc.m1) || ilib.Date.HanDate._noMajorST(m2)) ) {
		newYears = ilib.Date.HanDate._newMoonOnOrAfter(m2+1);
	} else {
		newYears = m2;
	}

	var p = ilib.Date.HanDate._newMoonOnOrAfter(newYears + (date.month-1) * 29);
	var m = ilib.Date.HanDate._newMoonBefore(p + 1);
	
	var month = ilib.amod(ilib._roundFnc.halfdown((calc.m2 - calc.m1) / 29.530588853000001) - (isLeapYear && ilib.Date.HanDate._priorLeapMonth(calc.m1, m)) ? 1 : 0, 12);
	var priorNewMoon = (month === date.month && isLeapYear) ? p : ilib.Date.HanDate._newMoonOnOrAfter(p+1);
		
	var rdtime = (date.hour * 3600000 +
		date.minute * 60000 +
		date.second * 1000 +
		date.millisecond) /
		86400000;
	
	
	console.log("getRataDie: converting " +  JSON.stringify(date) + " to an RD");
	console.log("getRataDie: year is " +  date.year + " plus cycle " + date.cycle);
	console.log("getRataDie: isLeapYear is " +  isLeapYear);
	console.log("getRataDie: priorNewMoon is " +  priorNewMoon);
	console.log("getRataDie: day in month is " +  date.day);
	console.log("getRataDie: rdtime is " +  rdtime);
	console.log("getRataDie: rd is " +  (priorNewMoon + date.day - 1 + rdtime));
	
	
	this.rd = priorNewMoon + date.day - 1 + rdtime;
};

/**
 * Return the rd number of the particular day of the week on or before the 
 * given rd. eg. The Sunday on or before the given rd.
 * @private
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the current date
 * @return {number} the rd of the day of the week
 */
ilib.Date.HanRataDie.prototype._onOrBefore = function(rd, dayOfWeek) {
	return rd - ilib.mod(Math.floor(rd) - dayOfWeek - 3, 7);
};


/**
 * @class
 * 
 * Construct a new Han date object. The constructor parameters can 
 * contain any of the following properties:
 * 
 * <ul>
 * <li><i>unixtime<i> - sets the time of this instance according to the given 
 * unix time. Unix time is the number of milliseconds since midnight on Jan 1, 1970, Gregorian
 * 
 * <li><i>julianday</i> - sets the time of this instance according to the given
 * Julian Day instance or the Julian Day given as a float
 * 
 * <li><i>cycle</i> - any integer giving the number of 60-year cycle in which the date is located.
 * If the cycle is not given but the year is, it is assumed that the year parameter is a fictitious 
 * linear count of years since the beginning of the epoch, much like other calendars. This linear
 * count is never used. If both the cycle and year are given, the year is wrapped to the range 0 
 * to 60 and treated as if it were a year in the regular 60-year cycle.
 * 
 * <li><i>year</i> - any integer, including 0
 * 
 * <li><i>month</i> - 1 to 12, where 1 means Farvardin, 2 means Ordibehesht, etc.
 * 
 * <li><i>day</i> - 1 to 31
 * 
 * <li><i>hour</i> - 0 to 23. A formatter is used to display 12 hour clocks, but this representation 
 * is always done with an unambiguous 24 hour representation
 * 
 * <li><i>minute</i> - 0 to 59
 * 
 * <li><i>second</i> - 0 to 59
 * 
 * <li><i>millisecond</i> - 0 to 999
 * 
 * <li><i>timezone</i> - the ilib.TimeZone instance or time zone name as a string 
 * of this han date. The date/time is kept in the local time. The time zone
 * is used later if this date is formatted according to a different time zone and
 * the difference has to be calculated, or when the date format has a time zone
 * component in it.
 * 
 * <li><i>locale</i> - locale for this han date. If the time zone is not 
 * given, it can be inferred from this locale. For locales that span multiple
 * time zones, the one with the largest population is chosen as the one that 
 * represents the locale.
 * 
 * <li><i>date</i> - use the given intrinsic Javascript date to initialize this one.
 * </ul>
 *
 * If the constructor is called with another Han date instance instead of
 * a parameter block, the other instance acts as a parameter block and its
 * settings are copied into the current instance.<p>
 * 
 * If the constructor is called with no arguments at all or if none of the 
 * properties listed above 
 * from <i>unixtime</i> through <i>millisecond</i> are present, then the date 
 * components are 
 * filled in with the current date at the time of instantiation. Note that if
 * you do not give the time zone when defaulting to the current time and the 
 * time zone for all of ilib was not set with <i>ilib.setTimeZone()</i>, then the
 * time zone will default to UTC ("Universal Time, Coordinated" or "Greenwich 
 * Mean Time").<p>
 * 
 * If any of the properties from <i>year</i> through <i>millisecond</i> are not
 * specified in the params, it is assumed that they have the smallest possible
 * value in the range for the property (zero or one).<p>
 * 
 * Depends directive: !depends handate.js
 * 
 * @constructor
 * @extends ilib.Date
 * @param {Object=} params parameters that govern the settings and behaviour of this Han date
 */
ilib.Date.HanDate = function(params) {
	this.cal = new ilib.Cal.Han();
	this.timezone = "local";
	
	if (params) {
		if (params.locale) {
			this.locale = (typeof(params.locale) === 'string') ? new ilib.Locale(params.locale) : params.locale;
			var li = new ilib.LocaleInfo(this.locale);
			this.timezone = li.getTimeZone(); 
		}
		if (params.timezone) {
			this.timezone = params.timezone;
		}
		
		if (params.year || params.month || params.day || params.hour ||
				params.minute || params.second || params.millisecond || params.cycle) {
			/**
			 * Cycle number in the Han calendar.
			 * @type number
			 */
			this.cycle = parseInt(params.cycle, 10) || 0;

			/**
			 * Year in the Han calendar.
			 * @type number
			 */
			this.year = parseInt(params.year, 10) || 0;

			if (typeof(params.cycle) !== 'undefined' && typeof(params.year) !== 'undefined') {
				this.year = ilib.amod(this.year, 60);
			}
			
			/**
			 * The month number, ranging from 1 to 12
			 * @type number
			 */
			this.month = parseInt(params.month, 10) || 1;

			/**
			 * The day of the month. This ranges from 1 to 31.
			 * @type number
			 */
			this.day = parseInt(params.day, 10) || 1;
			
			/**
			 * The hour of the day. This can be a number from 0 to 23, as times are
			 * stored unambiguously in the 24-hour clock.
			 * @type number
			 */
			this.hour = parseInt(params.hour, 10) || 0;

			/**
			 * The minute of the hours. Ranges from 0 to 59.
			 * @type number
			 */
			this.minute = parseInt(params.minute, 10) || 0;

			/**
			 * The second of the minute. Ranges from 0 to 59.
			 * @type number
			 */
			this.second = parseInt(params.second, 10) || 0;

			/**
			 * The millisecond of the second. Ranges from 0 to 999.
			 * @type number
			 */
			this.millisecond = parseInt(params.millisecond, 10) || 0;
			
			/**
			 * The day of the year. Ranges from 1 to 366.
			 * @type number
			 */
			this.dayOfYear = parseInt(params.dayOfYear, 10);

			if (typeof(params.dst) === 'boolean') {
				this.dst = params.dst;
			}
			
			this.rd = this.newRd(this);
			
			// add the time zone offset to the rd to convert to UTC
			if (!this.tz) {
				this.tz = new ilib.TimeZone({id: this.timezone});
			}
			// getOffsetMillis requires that this.year, this.rd, and this.dst 
			// are set in order to figure out which time zone rules apply and 
			// what the offset is at that point in the year
			this.offset = this.tz._getOffsetMillisWallTime(this) / 86400000;
			if (this.offset !== 0) {
				this.rd = this.newRd({
					rd: this.rd.getRataDie() - this.offset
				});
			}
		}
	}

	if (!this.rd) {
		this.rd = this.newRd(params);
		this._calcDateComponents();
	}
};

ilib.Date.HanDate.prototype = new ilib.Date({noinstance: true});
ilib.Date.HanDate.prototype.parent = ilib.Date;
ilib.Date.HanDate.prototype.constructor = ilib.Date.HanDate;

/**
 * Return a new RD for this date type using the given params.
 * @protected
 * @param {Object=} params the parameters used to create this rata die instance
 * @returns {ilib.Date.RataDie} the new RD instance for the given params
 */
ilib.Date.HanDate.prototype.newRd = function (params) {
	return new ilib.Date.HanRataDie(params);
};

/**
 * @protected
 * @static
 * @param {number} rd RD to calculate from
 * @returns {number} the current major solar term
 */
ilib.Date.HanDate._chineseTZ = function(rd) {
	var year = ilib.Date.GregDate._calcYear(rd);
	return year < 1929 ? 465.6666666666666666 : 480;
};

/**
 * @protected
 * @static
 * @param {number} rd RD to calculate from
 * @returns {number} the current major solar term
 */
ilib.Date.HanDate._currentMajorST = function(rd) {
	var s = ilib.Date._solarLongitude(ilib.Date._universalFromLocal(rd, ilib.Date.HanDate._chineseTZ(rd)) + ilib.Date.RataDie.gregorianEpoch);
	return ilib.amod(2 + Math.floor(s/30), 12);
};

/**
 * @protected
 * @static
 * @param {number} rd RD to calculate from
 * @returns {boolean} true if there is no major solar term in the same year
 */
ilib.Date.HanDate._noMajorST = function(rd) {
	return ilib.Date.HanDate._currentMajorST(rd) === ilib.Date.HanDate._currentMajorST(ilib.Date.HanDate._newMoonOnOrAfter(rd+1));
};

/**
 * @protected
 * @static
 * @param {number} rd1  
 * @param {number} rd2  
 * @returns {boolean} true if there is a leap month earlier in the same year 
 * as the given months 
 */
ilib.Date.HanDate._priorLeapMonth = function(rd1, rd2) {
	return rd2 >= rd1 &&
		(ilib.Date.HanDate._priorLeapMonth(rd1, ilib.Date.HanDate._newMoonBefore(rd2)) ||
				ilib.Date.HanDate._noMajorST(rd2));
};

/**
 * @protected
 * @static
 * @param {number} rd RD to calculate from 
 * @returns {number} the same RD at midnight in China
 */
ilib.Date.HanDate._chinaRD = function(rd) {
	var tz = ilib.Date.HanDate._chineseTZ(rd);
	return ilib.Date._universalFromLocal(rd, tz)
};

/**
 * @protected
 * @static
 * @param {number} rd RD to calculate from 
 * @returns {number} the rd of previous new moon before the given RD date
 */
ilib.Date.HanDate._newMoonBefore = function(rd) {
	var tz = ilib.Date.HanDate._chineseTZ(rd);
	var uni = ilib.Date._universalFromLocal(rd, tz);
	var moon = ilib.Date._newMoonBefore(uni + ilib.Date.RataDie.gregorianEpoch);
	return Math.floor(ilib.Date._localFromUniversal(moon - ilib.Date.RataDie.gregorianEpoch, tz));
};

/**
 * @protected
 * @static
 * @param {number} rd RD to calculate from 
 * @returns {number} the rd of next new moon on or after the given RD date
 */
ilib.Date.HanDate._newMoonOnOrAfter = function(rd) {
	var tz = ilib.Date.HanDate._chineseTZ(rd);
	var uni = ilib.Date._universalFromLocal(rd, tz);
	var moon = ilib.Date._newMoonAtOrAfter(uni + ilib.Date.RataDie.gregorianEpoch);
	return Math.floor(ilib.Date._localFromUniversal(moon - ilib.Date.RataDie.gregorianEpoch, tz));
};

/**
 * @protected
 * @static
 * @param {number} rd RD to calculate from
 * @param {number} longitude longitude to seek 
 * @returns {number} the RD of the next time that the solar longitude 
 * is a multiple of the given longitude
 */
ilib.Date.HanDate._hanNextSolarLongitude = function(rd, longitude) {
	var tz = ilib.Date.HanDate._chineseTZ(rd);
	var uni = ilib.Date._universalFromLocal(rd, tz);
	var sol = ilib.Date._nextSolarLongitude(uni + ilib.Date.RataDie.gregorianEpoch, longitude);
	return ilib.Date._localFromUniversal(sol - ilib.Date.RataDie.gregorianEpoch, tz);
};

/**
 * @protected
 * @static
 * @param {number} rd RD to calculate from 
 * @returns {number} the major solar term for the RD
 */
ilib.Date.HanDate._majorSTOnOrAfter = function(rd) {
	var tz = ilib.Date.HanDate._chineseTZ(rd);
	var uni = ilib.Date._universalFromLocal(rd, tz);
	var next = ilib.Date._fixangle(30 * Math.ceil(ilib.Date._solarLongitude(uni + ilib.Date.RataDie.gregorianEpoch)/30));
	return ilib.Date.HanDate._hanNextSolarLongitude(rd, next);
};

/**
 * @protected
 * @static
 * @param {number} rd RD to calculate from 
 * @returns {number} the current minor solar term for the RD
 */
ilib.Date.HanDate._currentMinorST = function(rd) {
	var slong = ilib.Date._solarLongitude(rd + ilib.Date.RataDie.gregorianEpoch);
	return ilib.amod(3 + Math.floor((slong - 15) / 30), 12);
};

/**
 * @protected
 * @static
 * @param {number} rd RD to calculate from 
 * @returns {number} the next minor solar term for the RD
 */
ilib.Date.HanDate._minorSTOnOrAfter = function(rd) {
	var chineseDate = ilib.Date._universalFromLocal(rd, ilib.Date.HanDate._chineseTZ(rd)); 
	var longitude = ilib.Date._fixangle(
		30 * 
		Math.ceil((ilib.Date._solarLongitude(chineseDate + ilib.Date.RataDie.gregorianEpoch) - 15) / 30) + 15
	);
	return ilib.Date.HanDate._hanNextSolarLongitude(rd, longitude);
};

/**
 * Return the year for the given RD
 * @protected
 * @param {number} rd RD to calculate from 
 * @returns {number} the year for the RD
 */
ilib.Date.HanDate.prototype._calcYear = function(rd) {
	return this.year;
};

/**
 * @private
 * Calculate date components for the given RD date.
 */
ilib.Date.HanDate.prototype._calcDateComponents = function () {
	var remainder,
		rd = this.rd.getRataDie();

	console.log("HanDate._calcDateComponents: calculating for rd " + rd);

	if (typeof(this.offset) === "undefined") {
		// now offset the RD by the time zone, then recalculate in case we were 
		// near the year boundary
		if (!this.tz) {
			this.tz = new ilib.TimeZone({id: this.timezone});
		}
		this.offset = this.tz.getOffsetMillis(this) / 86400000;
	}
	
	if (this.offset !== 0) {
		rd += this.offset;
	}

	// use the Gregorian calendar objects as a convenient way to short-cut some
	// of the date calculations
	
	var gregdate = new ilib.Date.GregDate({
		julianday: this.rd.getJulianDay() + this.offset, 
		timezone: "Etc/UTC"
	});
	var lastYearsST = new ilib.Date.GregRataDie({
		year: gregdate.year - 1,
		month: 12,
		day: 15,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	var thisYearsST = new ilib.Date.GregRataDie({
		year: gregdate.year,
		month: 12,
		day: 15,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	var nextYearsST = new ilib.Date.GregRataDie({
		year: gregdate.year + 1,
		month: 12,
		day: 15,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	var thisYearJul1 = new ilib.Date.GregRataDie({
		year: gregdate.year,
		month: 7,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	var solstice1 = ilib.Date.HanDate._majorSTOnOrAfter(lastYearsST.getRataDie());
	var solstice2 = ilib.Date.HanDate._majorSTOnOrAfter(thisYearsST.getRataDie());
	var m1 = (solstice1 <= rd && rd < solstice2) ? ilib.Date.HanDate._newMoonOnOrAfter(solstice1 + 1) : ilib.Date.HanDate._newMoonOnOrAfter(solstice2 + 1);
	var m2 = (solstice1 <= rd && rd < solstice2) ? ilib.Date.HanDate._newMoonBefore(solstice2 + 1) : ilib.Date.HanDate._newMoonBefore(ilib.Date.HanDate._majorSTOnOrAfter(nextYearsST.getRataDie()) + 1);
	var m = ilib.Date.HanDate._newMoonBefore(rd + 1);
	this.isLeapYear = (ilib._roundFnc.halfdown((m2 - m1) / 29.530588853000001) === 12);
	this.month = ilib.amod(ilib._roundFnc.halfdown((m - m1) / 29.530588853000001) - (this.isLeapYear && ilib.Date.HanDate._priorLeapMonth(m1, m)) ? 1 : 0, 12);
	this.isLeapMonth = (this.isLeapYear && ilib.Date.HanDate._noMajorST(m) && !ilib.Date.HanDate._priorLeapMonth(m1, ilib.Date.HanDate._newMoonBefore(m)));
	this.year = gregdate.year + 2696 + (this.month < 11 || rd > thisYearJul1.getRataDie()) ? 1 : 0;
	this.cycle = Math.floor((this.year - 1) / 60) + 1;
	this.cycleYear = ilib.amod(this.year, 60);
	this.day = rd - m + 1;

	console.log("HanDate._calcDateComponents: year is " + this.year);
	console.log("HanDate._calcDateComponents: isLeapYear is " + this.isLeapYear);
	console.log("HanDate._calcDateComponents: cycle is " + this.cycle);
	console.log("HanDate._calcDateComponents: cycleYear is " + this.cycleYear);
	console.log("HanDate._calcDateComponents: month is " + this.month);
	console.log("HanDate._calcDateComponents: isLeapMonth is " + this.isLeapMonth);
	console.log("HanDate._calcDateComponents: day is " + this.day);
	
	remainder = rd - Math.floor(rd);
	
	console.log("HanDate._calcDateComponents: time remainder is " + remainder);
	
	// now convert to milliseconds for the rest of the calculation
	remainder = Math.round(remainder * 86400000);
	
	this.hour = Math.floor(remainder/3600000);
	remainder -= this.hour * 3600000;
	
	this.minute = Math.floor(remainder/60000);
	remainder -= this.minute * 60000;
	
	this.second = Math.floor(remainder/1000);
	remainder -= this.second * 1000;
	
	this.millisecond = remainder;
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @return {number} the day of the week
 */
ilib.Date.HanDate.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.getRataDie());
	return ilib.mod(rd-3, 7);
};

/**
 * Return the ordinal day of the year. Days are counted from 1 and proceed linearly up to 
 * 365, regardless of months or weeks, etc. That is, Farvardin 1st is day 1, and 
 * December 31st is 365 in regular years, or 366 in leap years.
 * @return {number} the ordinal day of the year
 */
ilib.Date.HanDate.prototype.getDayOfYear = function() {
	return ilib.Date.HanDate.cumMonthLengths[this.month-1] + this.day;
};

/**
 * Return the era for this date as a number. The value for the era for Han 
 * calendars is -1 for "before the han era" (BP) and 1 for "the han era" (anno 
 * persico or AP). 
 * BP dates are any date before Farvardin 1, 1 AP. In the proleptic Han calendar, 
 * there is a year 0, so any years that are negative or zero are BP.
 * @return {number} 1 if this date is in the common era, -1 if it is before the 
 * common era 
 */
ilib.Date.HanDate.prototype.getEra = function() {
	return (this.year < 1) ? -1 : 1;
};

/**
 * Return the name of the calendar that governs this date.
 * 
 * @return {string} a string giving the name of the calendar
 */
ilib.Date.HanDate.prototype.getCalendar = function() {
	return "han";
};

// register with the factory method
ilib.Date._constructors["han"] = ilib.Date.HanDate;