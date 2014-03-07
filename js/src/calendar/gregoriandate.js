/*
 * gregoriandate.js - Represent a date in the Gregorian calendar
 * 
 * Copyright © 2012-2013, JEDLSoft
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
calendar/gregorian.js 
util/utils.js
util/search.js 
localeinfo.js 
julianday.js 
*/

/**
 * @class
 * 
 * Construct a new Gregorian date object. The constructor parameters can 
 * contain any of the following properties:
 * 
 * <ul>
 * <li><i>unixtime<i> - sets the time of this instance according to the given 
 * unix time. Unix time is the number of milliseconds since midnight on Jan 1, 1970.
 * 
 * <li><i>julianday</i> - sets the time of this instance according to the given
 * Julian Day instance or the Julian Day given as a float
 * 
 * <li><i>year</i> - any integer, including 0
 * 
 * <li><i>month</i> - 1 to 12, where 1 means January, 2 means February, etc.
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
 * of this gregorian date. The date/time is kept in the local time. The time zone
 * is used later if this date is formatted according to a different time zone and
 * the difference has to be calculated, or when the date format has a time zone
 * component in it.
 * 
 * <li><i>locale</i> - locale for this gregorian date. If the time zone is not 
 * given, it can be inferred from this locale. For locales that span multiple
 * time zones, the one with the largest population is chosen as the one that 
 * represents the locale.
 * 
 * <li><i>date</i> - use the given intrinsic Javascript date to initialize this one.
 * </ul>
 *
 * If the constructor is called with another Gregorian date instance instead of
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
 * Depends directive: !depends gregoriandate.js
 * 
 * @constructor
 * @extends ilib.Date
 * @param {Object=} params parameters that govern the settings and behaviour of this Gregorian date
 */
ilib.Date.GregDate = function(params) {
	this.cal = new ilib.Cal.Gregorian();

	if (params) {
		if (params.timezone) {
			this.timezone = params.timezone;
		}
		if (params.locale) {
			this.locale = (typeof(params.locale) === 'string') ? new ilib.Locale(params.locale) : params.locale;
			if (!this.timezone) {
				var li = new ilib.LocaleInfo(this.locale);
				this.timezone = li.getTimeZone(); 
			}
		}
		
		if (typeof(params.date) !== 'undefined') {
			// accept JS Date classes or strings
			var date = params.date;
			if (!(date instanceof Date)) {
				date = new Date(date);
			}
			this.timezone = "Etc/UTC";
			this.setTime(date.getTime());
		} else if (typeof(params.unixtime) != 'undefined') {
			this.setTime(parseInt(params.unixtime, 10));
		} else if (typeof(params.julianday) != 'undefined') {
			// JD time is defined to be UTC
			this.timezone = "Etc/UTC";
			this.setJulianDay(parseFloat(params.julianday));
		} else if (params.year || params.month || params.day || params.hour ||
				params.minute || params.second || params.millisecond ) {
			this.year = parseInt(params.year, 10) || 0;
			this.month = parseInt(params.month, 10) || 1;
			this.day = parseInt(params.day, 10) || 1;
			this.hour = parseInt(params.hour, 10) || 0;
			this.minute = parseInt(params.minute, 10) || 0;
			this.second = parseInt(params.second, 10) || 0;
			this.millisecond = parseInt(params.millisecond, 10) || 0;
		} else if (typeof(params.rd) != 'undefined') {
			// private parameter. Do not document this!
			// RD time is defined to be UTC
			this.setRd(params.rd);
		} else {
			var now = new Date();
			this.setTime(now.getTime());
		}
	} else {
		var now = new Date();
		this.setTime(now.getTime());
	}
};

ilib.Date.GregDate.prototype = new ilib.Date();
ilib.Date.GregDate.prototype.parent = ilib.Date;
ilib.Date.GregDate.prototype.constructor = ilib.Date.GregDate;

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month, for a non-leap year 
 */
ilib.Date.GregDate.cumMonthLengths = [
    0,   /* Jan */
	31,  /* Feb */
	59,  /* Mar */
	90,  /* Apr */
	120, /* May */
	151, /* Jun */
	181, /* Jul */
	212, /* Aug */
	243, /* Sep */
	273, /* Oct */
	304, /* Nov */
	334, /* Dec */
	365
];

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month, for a leap year 
 */
ilib.Date.GregDate.cumMonthLengthsLeap = [
	0,   /* Jan */
	31,  /* Feb */
	60,  /* Mar */
	91,  /* Apr */
	121, /* May */
	152, /* Jun */
	182, /* Jul */
	213, /* Aug */
	244, /* Sep */
	274, /* Oct */
	305, /* Nov */
	335, /* Dec */
	366
];

/**
 * @private
 * @const
 * @type number
 * the difference between a zero Julian day and the zero Gregorian date. 
 */
ilib.Date.GregDate.epoch = 1721424.5;

/**
 * @private
 * Return the Rata Die (fixed day) number of the given date.
 * 
 * @param {Object} date the date components to calculate
 * @return {number} the rd date as a number
 */
ilib.Date.GregDate.prototype.calcRataDie = function(date) {
	var years = 365 * (date.year - 1) +
		Math.floor((date.year-1)/4) -
		Math.floor((date.year-1)/100) +
		Math.floor((date.year-1)/400);
	// explicitly call the gregorian leap year calculator so that it doesn't conflict
	// with the calculator of possible subclasses 
	var dayInYear = (date.month > 1 ? ilib.Date.GregDate.cumMonthLengths[date.month-1] : 0) +
		date.day +
		(ilib.Cal.Gregorian.prototype.isLeapYear.call(this.cal, date.year) && date.month > 2 ? 1 : 0);
	var rdtime = (date.hour * 3600000 +
		date.minute * 60000 +
		date.second * 1000 +
		date.millisecond) / 
		86400000; 
	/*
	debug("getRataDie: converting " +  JSON.stringify(this));
	debug("getRataDie: year is " +  years);
	debug("getRataDie: day in year is " +  dayInYear);
	debug("getRataDie: rdtime is " +  rdtime);
	debug("getRataDie: rd is " +  (years + dayInYear + rdtime));
	*/
	return years + dayInYear + rdtime;
};

/**
 * @private
 * Return the Rata Die (fixed day) number of this date.
 * 
 * @return {number} the rd date as a number
 */
ilib.Date.GregDate.prototype.getRataDie = function() {
	return this.calcRataDie(this);
};

/**
 * @private
 * Calculate date components for the given RD date.
 * @param {number} rd the RD date to calculate components for
 * @return {Object} object containing the component fields
 */
ilib.Date.GregDate.prototype.calcComponents = function (rd) {
	var days400,
		days100,
		days4,
		days1,
		years400,
		years100,
		years4,
		years1,
		remainder,
		cumulative,
		ret = {};
	
	years400 = Math.floor((rd - 1) / 146097);
	days400 = ilib.mod((rd - 1), 146097);
	years100 = Math.floor(days400 / 36524);
	days100 = ilib.mod(days400, 36524);
	years4 = Math.floor(days100 / 1461);
	days4 = ilib.mod(days100, 1461);
	years1 = Math.floor(days4 / 365);
	days1 = ilib.mod(days4, 365) + 1;

	/*
	console.log("rd starts out " + rd);
	console.log("years400 is " + years400);
	console.log("days400 is " + days400);
	console.log("years100 is " + years100);
	console.log("days100 is " + days100);
	console.log("years4 is " + years4);
	console.log("days4 is " + days4);
	console.log("years1 is " + years1);
	console.log("days1 is " + days1);
	*/
	
	ret.year = 400 * years400 + 100 * years100 + 4 * years4 + years1;
	if (years100 !== 4 && years1 !== 4) {
		ret.year++;
	}
	ret.month = 1;
	ret.day = 1;
	ret.hour = 0;
	ret.minute = 0;
	ret.second = 0;
	ret.millisecond = 0;
	
	// explicitly call the gregorian rd calculator instead of any 
	// possible overloaded ones from subclasses
	remainder = rd - ilib.Date.GregDate.prototype.calcRataDie.call(this, ret) + 1;
	
	cumulative = ilib.Cal.Gregorian.prototype.isLeapYear.call(this.cal, ret.year) ? 
		ilib.Date.GregDate.cumMonthLengthsLeap : 
		ilib.Date.GregDate.cumMonthLengths; 
	
	ret.month = ilib.bsearch(Math.floor(remainder), cumulative);
	remainder = remainder - cumulative[ret.month-1];
	
	ret.day = Math.floor(remainder);
	remainder -= ret.day;
	// now convert to milliseconds for the rest of the calculation
	remainder = Math.round(remainder * 86400000);
	
	ret.hour = Math.floor(remainder/3600000);
	remainder -= ret.hour * 3600000;
	
	ret.minute = Math.floor(remainder/60000);
	remainder -= ret.minute * 60000;
	
	ret.second = Math.floor(remainder/1000);
	remainder -= ret.second * 1000;
	
	ret.millisecond = remainder;
	
	return ret;
};

/**
 * @private
 * Set the date components of this instance based on the given rd.
 * @param {number} rd the rata die date to set
 */
ilib.Date.GregDate.prototype.setRd = function (rd) {
	var fields = this.calcComponents(rd);
	
	/**
	 * Year in the Gregorian calendar.
	 * @type number
	 */
	this.year = fields.year;
	
	/**
	 * The month number, ranging from 1 (January) to 12 (December).
	 * @type number
	 */
	this.month = fields.month;
	
	/**
	 * The day of the month. This ranges from 1 to 31.
	 * @type number
	 */
	this.day = fields.day;
	
	/**
	 * The hour of the day. This can be a number from 0 to 23, as times are
	 * stored unambiguously in the 24-hour clock.
	 * @type number
	 */
	this.hour = fields.hour;
	
	/**
	 * The minute of the hours. Ranges from 0 to 59.
	 * @type number
	 */
	this.minute = fields.minute;
	
	/**
	 * The second of the minute. Ranges from 0 to 59.
	 * @type number
	 */
	this.second = fields.second;
	
	/**
	 * The millisecond of the second. Ranges from 0 to 999.
	 * @type number
	 */
	this.millisecond = fields.millisecond;
};

/**
 * Set the date of this instance using a Julian Day.
 * @param {number} date the Julian Day to use to set this date
 */
ilib.Date.GregDate.prototype.setJulianDay = function (date) {
	var jd = (typeof(date) === 'number') ? new ilib.JulianDay(date) : date,
		rd;	// rata die -- # of days since the beginning of the calendar
	
	rd = jd.getDate() - ilib.Date.GregDate.epoch; 	// Julian Days start at noon
	this.setRd(rd);
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @return {number} the day of the week
 */
ilib.Date.GregDate.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.getRataDie());
	return ilib.mod(rd, 7);
};

/**
 * @private
 * Return the rd of the particular day of the week on or before the given rd.
 * eg. The Sunday on or before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @return {number} the day of the week
 */
ilib.Date.GregDate.prototype.onOrBeforeRd = function(rd, dayOfWeek) {
	return rd - ilib.mod(Math.floor(rd) - dayOfWeek, 7);
};

/**
 * @private
 * Return the rd of the particular day of the week on or before the given rd.
 * eg. The Sunday on or before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @return {number} the day of the week
 */
ilib.Date.GregDate.prototype.onOrAfterRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd+6, dayOfWeek);
};

/**
 * @private
 * Return the rd of the particular day of the week before the given rd.
 * eg. The Sunday before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @return {number} the day of the week
 */
ilib.Date.GregDate.prototype.beforeRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd-1, dayOfWeek);
};

/**
 * @private
 * Return the rd of the particular day of the week after the given rd.
 * eg. The Sunday after the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @return {number} the day of the week
 */
ilib.Date.GregDate.prototype.afterRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd+7, dayOfWeek);
};

/**
 * @private
 * Return the rd of the first Sunday of the given ISO year.
 * @param {number} year the year for which the first Sunday is being sought
 * @return the rd of the first Sunday of the ISO year
 */
ilib.Date.GregDate.prototype.firstSunday = function (year) {
	var jan1 = this.calcRataDie({
		year: year,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	var firstThu = this.onOrAfterRd(jan1, 4);
	return this.beforeRd(firstThu, 0);
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week before the current date that is being sought
 * @return {ilib.Date} the date being sought
 */
ilib.Date.GregDate.prototype.before = function (dow) {
	return this.cal.newDateInstance({rd: this.beforeRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week after the current date that is being sought
 * @return {ilib.Date} the date being sought
 */
ilib.Date.GregDate.prototype.after = function (dow) {
	return this.cal.newDateInstance({rd: this.afterRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week on or before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or before the current date that is being sought
 * @return {ilib.Date} the date being sought
 */
ilib.Date.GregDate.prototype.onOrBefore = function (dow) {
	return this.cal.newDateInstance({rd: this.onOrBeforeRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week on or after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or after the current date that is being sought
 * @return {ilib.Date} the date being sought
 */
ilib.Date.GregDate.prototype.onOrAfter = function (dow) {
	return this.cal.newDateInstance({rd: this.onOrAfterRd(this.getRataDie(), dow)});
};

/**
 * Return the ISO 8601 week number in the current year for the current date. The week
 * number ranges from 1 to 53, as some years have 53 weeks assigned to them, and most
 * only 52.
 * 
 * @return {number} the week number for the current date
 */
ilib.Date.GregDate.prototype.getWeekOfYear = function() {
	var rd = Math.floor(this.getRataDie()),
		yearStart = this.firstSunday(this.year),
		nextYear;
	
	// if we have a January date, it may be in this ISO year or the previous year
	if (rd < yearStart) {
		yearStart = this.firstSunday(this.year-1);
	} else if (this.month == 12 && this.day > 25) {
		// if we have a late December date, it may be in this ISO year, or the next year
		nextYear = this.firstSunday(this.year+1);
		if (rd >= nextYear) {
			yearStart = nextYear;
		}
	}
	
	return Math.floor((rd-yearStart)/7) + 1;
};

/**
 * Return the ordinal day of the year. Days are counted from 1 and proceed linearly up to 
 * 365, regardless of months or weeks, etc. That is, January 1st is day 1, and 
 * December 31st is 365 in regular years, or 366 in leap years.
 * @return {number} the ordinal day of the year
 */
ilib.Date.GregDate.prototype.getDayOfYear = function() {
	var cumulativeMap = this.cal.isLeapYear(this.year) ? 
		ilib.Date.GregDate.cumMonthLengthsLeap : 
		ilib.Date.GregDate.cumMonthLengths; 
		
	return cumulativeMap[this.month-1] + this.day;
};

/**
 * Return the ordinal number of the week within the month. The first week of a month is
 * the first one that contains 4 or more days in that month. If any days precede this
 * first week, they are marked as being in week 0. This function returns values from 0
 * through 6.<p>
 * 
 * The locale is a required parameter because different locales that use the same 
 * Gregorian calendar consider different days of the week to be the beginning of
 * the week. This can affect the week of the month in which some days are located.
 * 
 * @param {ilib.Locale|string} locale the locale or locale spec to use when figuring out 
 * the first day of the week
 * @return {number} the ordinal number of the week within the current month
 */
ilib.Date.GregDate.prototype.getWeekOfMonth = function(locale) {
	var li = new ilib.LocaleInfo(locale),
		first = this.calcRataDie({
			year: this.year,
			month: this.month,
			day: 1,
			hour: 0,
			minute: 0,
			second: 0,
			millisecond: 0
		}),
		rd = this.getRataDie(),
		weekStart = this.onOrAfterRd(first, li.getFirstDayOfWeek());
	if (weekStart - first > 3) {
		// if the first week has 4 or more days in it of the current month, then consider
		// that week 1. Otherwise, it is week 0. To make it week 1, move the week start
		// one week earlier.
		weekStart -= 7;
	}
	return Math.floor((rd - weekStart) / 7) + 1;
};

/**
 * Return the era for this date as a number. The value for the era for Gregorian 
 * calendars is -1 for "before the common era" (BCE) and 1 for "the common era" (CE). 
 * BCE dates are any date before Jan 1, 1 CE. In the proleptic Gregorian calendar, 
 * there is a year 0, so any years that are negative or zero are BCE. In the Julian
 * calendar, there is no year 0. Instead, the calendar goes straight from year -1 to 
 * 1.
 * @return {number} 1 if this date is in the common era, -1 if it is before the 
 * common era 
 */
ilib.Date.GregDate.prototype.getEra = function() {
	return (this.year < 1) ? -1 : 1;
};

/**
 * Return the unix time equivalent to this Gregorian date instance. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970. This method only
 * returns a valid number for dates between midnight, Jan 1, 1970 and  
 * Jan 19, 2038 at 3:14:07am when the unix time runs out. If this instance 
 * encodes a date outside of that range, this method will return -1. This method
 * returns the time in the local time zone, not in UTC.
 * 
 * @return {number} a number giving the unix time, or -1 if the date is outside the
 * valid unix time range
 */
ilib.Date.GregDate.prototype.getTime = function() {
	var rd = this.calcRataDie({
		year: this.year,
		month: this.month,
		day: this.day,
		hour: this.hour,
		minute: this.minute,
		second: this.second,
		millisecond: 0
	});

	// earlier than Jan 1, 1970
	// or later than Jan 19, 2038 at 3:14:07am
	if (rd < 719163 || rd > 744018.134803241) { 
		return -1;
	}

	// avoid the rounding errors in the floating point math by only using
	// the whole days from the rd, and then calculating the milliseconds directly
	var seconds = Math.floor(rd - 719163) * 86400 + 
		this.hour * 3600 +
		this.minute * 60 +
		this.second;
	var millis = seconds * 1000 + this.millisecond;
	
	return millis;
};

/**
 * Set the time of this instance according to the given unix time. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970.
 * 
 * @param {number} millis the unix time to set this date to in milliseconds 
 */
ilib.Date.GregDate.prototype.setTime = function(millis) {
	var rd = 719163 + millis / 86400000;
	this.setRd(rd);
};

/**
 * Return a Javascript Date object that is equivalent to this Gregorian date
 * object.
 * 
 * @return {Date|undefined} a javascript Date object
 */
ilib.Date.GregDate.prototype.getJSDate = function() {
	var unix = this.getTime();
	return (unix === -1) ? undefined : new Date(unix); 
};

/**
 * Return the Julian Day equivalent to this calendar date as a number.
 * This returns the julian day in the local time zone.
 * 
 * @return {number} the julian date equivalent of this date
 */
ilib.Date.GregDate.prototype.getJulianDay = function() {
	return this.getRataDie() + ilib.Date.GregDate.epoch;
};

/**
 * Return the name of the calendar that governs this date.
 * 
 * @return {string} a string giving the name of the calendar
 */
ilib.Date.GregDate.prototype.getCalendar = function() {
	return "gregorian";
};

/**
 * Return the time zone associated with this Gregorian date, or 
 * undefined if none was specified in the constructor.
 * 
 * @return {string|undefined} the name of the time zone for this date instance
 */
ilib.Date.GregDate.prototype.getTimeZone = function() {
	return this.timezone || "local";
};

/**
 * Set the time zone associated with this Gregorian date.
 * @param {string} tzName the name of the time zone to set into this date instance,
 * or "undefined" to unset the time zone 
 */
ilib.Date.GregDate.prototype.setTimeZone = function (tzName) {
	if (!tzName || tzName === "") {
		// same as undefining it
		this.timezone = undefined;
	} else if (typeof(tzName) === 'string') {
		this.timezone = tzName;
	}
};

// register with the factory method
ilib.Date._constructors["gregorian"] = ilib.Date.GregDate;