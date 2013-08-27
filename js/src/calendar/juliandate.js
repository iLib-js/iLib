/*
 * juliandate.js - Represent a date in the Julian calendar
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
calendar/julian.js 
util/utils.js
util/search.js 
localeinfo.js 
julianday.js 
*/

/**
 * @class
 * 
 * Construct a new date object for the Julian Calendar. The constructor can be called
 * with a parameter object that contains any of the following properties:
 * 
 * <ul>
 * <li><i>unixtime<i> - sets the time of this instance according to the given 
 * unix time. Unix time is the number of milliseconds since midnight on Jan 1, 1970 (Gregorian).
 * <li><i>julianday</i> - the Julian Day to set into this date
 * <li><i>year</i> - any integer except 0. Years go from -1 (BCE) to 1 (CE), skipping the zero 
 * year which doesn't exist in the Julian calendar
 * <li><i>month</i> - 1 to 12, where 1 means January, 2 means February, etc.
 * <li><i>day</i> - 1 to 31
 * <li><i>hour</i> - 0 to 23. A formatter is used to display 12 hour clocks, but this representation 
 * is always done with an unambiguous 24 hour representation
 * <li><i>minute</i> - 0 to 59
 * <li><i>second</i> - 0 to 59
 * <li><i>millisecond<i> - 0 to 999
 * <li><i>locale</i> - the ilib.TimeZone instance or time zone name as a string 
 * of this julian date. The date/time is kept in the local time. The time zone
 * is used later if this date is formatted according to a different time zone and
 * the difference has to be calculated, or when the date format has a time zone
 * component in it.
 * <li><i>timezone</i> - the time zone of this instance. If the time zone is not 
 * given, it can be inferred from this locale. For locales that span multiple
 * time zones, the one with the largest population is chosen as the one that 
 * represents the locale. 
 * </ul>
 * 
 * NB. The <a href="http://en.wikipedia.org/wiki/Julian_date">Julian Day</a> 
 * (ilib.JulianDay) object is a <i>different</i> object than a 
 * <a href="http://en.wikipedia.org/wiki/Julian_calendar">date in
 * the Julian calendar</a> and the two are not to be confused. The Julian Day 
 * object represents time as a number of whole and fractional days since the 
 * beginning of the epoch, whereas a date in the Julian 
 * calendar is a regular date that signifies year, month, day, etc. using the rules
 * of the Julian calendar. The naming of Julian Days and the Julian calendar are
 * unfortunately close, and come from history.<p>
 *  
 * If called with another Julian date argument, the date components of the given
 * date are copied into the current one.<p>
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
 * Depends directive: !depends juliandate.js
 * 
 * @constructor
 * @extends ilib.Date
 * @param {Object=} params parameters that govern the settings and behaviour of this Julian date
 */
ilib.Date.JulDate = function(params) {
	this.cal = new ilib.Cal.Julian();
	
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

		if (typeof(params.unixtime) != 'undefined') {
			this.setTime(parseInt(params.unixtime, 10));
		} else if (typeof(params.julianday) != 'undefined') {
			this.setJulianDay(parseFloat(params.julianday));
		} else if (params.year || params.month || params.day || params.hour ||
				params.minute || params.second || params.millisecond ) {
			/**
			 * Year in the Julian calendar.
			 * @type number
			 */
			this.year = parseInt(params.year, 10) || 0;
			/**
			 * The month number, ranging from 1 (January) to 12 (December).
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
		} else if (typeof(params.rd) != 'undefined') {
			// private parameter. Do not document this!
			this.setRd(params.rd);
		} else {
			// Date.getTime() gets unix time in UTC
			var now = new Date();
			this.setTime(now.getTime() - now.getTimezoneOffset()*60000);
		}
	} else {
		// Date.getTime() gets unix time in UTC
		var now = new Date();
		this.setTime(now.getTime() - now.getTimezoneOffset()*60000);
	}
};

ilib.Date.JulDate.prototype = new ilib.Date();
ilib.Date.JulDate.prototype.parent = ilib.Date;
ilib.Date.JulDate.prototype.constructor = ilib.Date.JulDate;

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month, for a non-leap year 
 */
ilib.Date.JulDate.cumMonthLengths = [
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
ilib.Date.JulDate.cumMonthLengthsLeap = [
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
 * the difference between a zero Julian day and the first Julian date. */
ilib.Date.JulDate.epoch = 1721422.5;

/**
 * @private
 * Return the Rata Die (fixed day) number for the given date.
 * @param {Object} parts the parts to calculate with
 * @return {number} the rd date as a number
 */
ilib.Date.JulDate.prototype.calcRataDie = function(parts) {
	var year = parts.year + ((parts.year < 0) ? 1 : 0);
	var years = 365 * (year - 1) + Math.floor((year-1)/4);
	var dayInYear = (parts.month > 1 ? ilib.Date.JulDate.cumMonthLengths[parts.month-1] : 0) +
	parts.day +
		(this.cal.isLeapYear(parts.year) && parts.month > 2 ? 1 : 0);
	var rdtime = (parts.hour * 3600000 +
		parts.minute * 60000 +
		parts.second * 1000 +
		parts.millisecond) / 
		86400000;
	// the arithmetic is not more accurage than this, so just round it to make nice numbers
	rdtime = Math.round(rdtime*10000000)/10000000; 
	
	/*
	console.log("calcRataDie: converting " +  JSON.stringify(parts));
	console.log("getRataDie: year is " +  years);
	console.log("getRataDie: day in year is " +  dayInYear);
	console.log("getRataDie: rdtime is " +  rdtime);
	console.log("getRataDie: rd is " +  (years + dayInYear + rdtime));
	*/
	
	return years + dayInYear + rdtime;
};

/**
 * @private
 * Return the Rata Die (fixed day) number of this date.
 * 
 * @return {number} the rd date as a number
 */
ilib.Date.JulDate.prototype.getRataDie = function() {
	return this.calcRataDie(this);
};

/**
 * @private
 * Calculate date components for the given RD date.
 * @param {number} rd the RD date to calculate components for
 * @return {Object} object containing the component fields
 */
ilib.Date.JulDate.prototype.calcComponents = function (rd) {
	var year,
		remainder,
		cumulative,
		ret = {};
	
	year = Math.floor((4*(Math.floor(rd)-1) + 1464)/1461);
	
	ret.year = (year <= 0) ? year - 1 : year;
	
	remainder = rd + 1 - this.calcRataDie({
		year: ret.year,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	
	cumulative = this.cal.isLeapYear(ret.year) ? 
		ilib.Date.JulDate.cumMonthLengthsLeap : 
		ilib.Date.JulDate.cumMonthLengths; 
	
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
ilib.Date.JulDate.prototype.setRd = function (rd) {
	var fields = this.calcComponents(rd);
	
	this.year = fields.year;
	this.month = fields.month;
	this.day = fields.day;
	this.hour = fields.hour;
	this.minute = fields.minute;
	this.second = fields.second;
	this.millisecond = fields.millisecond;
};

/**
 * Set the date of this instance using a Julian Day.
 * @param {number} date the Julian Day to use to set this date
 */
ilib.Date.JulDate.prototype.setJulianDay = function (date) {
	var jd = (typeof(date) === 'number') ? new ilib.JulianDay(date) : date,
		rd;	// rata die -- # of days since the beginning of the calendar
	
	rd = jd.getDate() - ilib.Date.JulDate.epoch; 	// Julian Days start at noon
	this.setRd(rd);
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @return {number} the day of the week
 */
ilib.Date.JulDate.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.getRataDie());
	return ilib.mod(rd-2, 7);
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
ilib.Date.JulDate.prototype.onOrBeforeRd = function(rd, dayOfWeek) {
	return rd - ilib.mod(Math.floor(rd) - dayOfWeek - 2, 7);
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
ilib.Date.JulDate.prototype.onOrAfterRd = function(rd, dayOfWeek) {
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
ilib.Date.JulDate.prototype.beforeRd = function(rd, dayOfWeek) {
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
ilib.Date.JulDate.prototype.afterRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd+7, dayOfWeek);
};

/**
 * @private
 * Return the rd of the first Sunday of the given ISO year.
 * @param {number} year the year for which the first Sunday is being sought
 * @return the rd of the first Sunday of the ISO year
 */
ilib.Date.JulDate.prototype.firstSunday = function (year) {
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
 * @return {ilib.Date.JulDate} the date being sought
 */
ilib.Date.JulDate.prototype.before = function (dow) {
	return new ilib.Date.JulDate({rd: this.beforeRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week after the current date that is being sought
 * @return {ilib.Date.JulDate} the date being sought
 */
ilib.Date.JulDate.prototype.after = function (dow) {
	return new ilib.Date.JulDate({rd: this.afterRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week on or before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or before the current date that is being sought
 * @return {ilib.Date.JulDate} the date being sought
 */
ilib.Date.JulDate.prototype.onOrBefore = function (dow) {
	return new ilib.Date.JulDate({rd: this.onOrBeforeRd(this.getRataDie(), dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week on or after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or after the current date that is being sought
 * @return {ilib.Date.JulDate} the date being sought
 */
ilib.Date.JulDate.prototype.onOrAfter = function (dow) {
	return new ilib.Date.JulDate({rd: this.onOrAfterRd(this.getRataDie(), dow)});
};

/**
 * Return the unix time equivalent to this Julian date instance. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970. This method only
 * returns a valid number for dates between midnight, Jan 1, 1970 and  
 * Jan 19, 2038 at 3:14:07am when the unix time runs out. If this instance 
 * encodes a date outside of that range, this method will return -1.
 * 
 * @return {number} a number giving the unix time, or -1 if the date is outside the
 * valid unix time range
 */
ilib.Date.JulDate.prototype.getTime = function() {
	var rd = this.calcRataDie({
		year: this.year,
		month: this.month,
		day: this.day,
		hour: this.hour,
		minute: this.minute,
		second: this.second,
		millisecond: 0
	});
	var unix;

	// earlier than Jan 1, 1970
	// or later than Jan 19, 2038 at 3:14:07am
	if (rd < 719165 || rd > 744020.134803241) { 
		return -1;
	}

	// avoid the rounding errors in the floating point math by only using
	// the whole days from the rd, and then calculating the milliseconds directly
	var seconds = Math.floor(rd - 719165) * 86400 + 
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
ilib.Date.JulDate.prototype.setTime = function(millis) {
	var rd = 719165 + millis / 86400000;
	this.setRd(rd);
};

/**
 * Return a Javascript Date object that is equivalent to this Julian date
 * object. If the julian date object represents a date that cannot be represented
 * by a Javascript Date object, the value undefined is returned
 * 
 * @return {Date|undefined} a javascript Date object, or undefined if the date is out of range
 */
ilib.Date.JulDate.prototype.getJSDate = function() {
	var unix = this.getTime();
	return (unix === -1) ? undefined : new Date(unix); 
};

/**
 * Return the Julian Day equivalent to this calendar date as a number.
 * 
 * @return {number} the julian date equivalent of this date
 */
ilib.Date.JulDate.prototype.getJulianDay = function() {
	return this.getRataDie() + ilib.Date.JulDate.epoch;
};

/**
 * Return the name of the calendar that governs this date.
 * 
 * @return {string} a string giving the name of the calendar
 */
ilib.Date.JulDate.prototype.getCalendar = function() {
	return "julian";
};

/**
 * Return the time zone associated with this Julian date, or 
 * undefined if none was specified in the constructor.
 * 
 * @return {string|undefined} the name of the time zone for this date instance
 */
ilib.Date.JulDate.prototype.getTimeZone = function() {
	return this.timezone;
};

/**
 * Set the time zone associated with this Julian date.
 * @param {string} tzName the name of the time zone to set into this date instance,
 * or "undefined" to unset the time zone 
 */
ilib.Date.JulDate.prototype.setTimeZone = function (tzName) {
	if (!tzName || tzName === "") {
		// same as undefining it
		this.timezone = undefined;
	} else if (typeof(tzName) === 'string') {
		this.timezone = tzName;
	}
};

//register with the factory method
ilib.Date._constructors["julian"] = ilib.Date.JulDate;