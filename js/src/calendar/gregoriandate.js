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
calendar/gregratadie.js
timezone.js
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
 * <li><i>dst</i> - boolean used to specify whether the given time components are
 * intended to be in daylight time or not. This is only used in the overlap
 * time when transitioning from DST to standard time, and the time components are 
 * ambiguous. Otherwise at all other times of the year, this flag is ignored.
 * If you specify the date using unix time (UTC) or a julian day, then the time is
 * already unambiguous and this flag does not need to be specified.
 * <p>
 * For example, in the US, the transition out of daylight savings time 
 * in 2014 happens at Nov 2, 2014 2:00am Daylight Time, when the time falls 
 * back to Nov 2, 2014 1:00am Standard Time. If you give a date/time components as 
 * "Nov 2, 2014 1:30am", then there are two 1:30am times in that day, and you would 
 * have to give the standard flag to indicate which of those two you mean. 
 * (dst=true means daylight time, dst=false means standard time).   
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
		
		if (typeof(params.date) !== 'undefined') {
			// accept JS Date classes or strings
			var date = params.date;
			if (!(date instanceof Date)) {
				date = new Date(date);
			}
			this.setTime(date.getTime());
		} else if (typeof(params.unixtime) !== 'undefined') {
			// unix time is defined to be UTC
			this.timezone = "Etc/UTC";
			this.setTime(parseInt(params.unixtime, 10));
		} else if (typeof(params.julianday) !== 'undefined') {
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
			if (typeof(params.dst) === 'boolean') {
				this.dst = params.dst;
			}
			this.rd = new ilib.Date.GregRataDie(params);
			
			// add the time zone offset to the rd to convert to UTC
			var offset = 0;
			if (this.timezone === "local") {
				var d = new Date(this.year, this.month-1, this.day, this.hour, this.minute, this.second, this.millisecond);
				offset = d.getTimezoneOffset() / 1440;
			} else {
				if (!this.tz) {
					this.tz = new ilib.TimeZone({id: this.timezone});
				}
				// getOffsetMillis requires that this.year, this.rd, and this.dst 
				// are set in order to figure out which time zone rules apply and 
				// what the offset is at that point in the year
				offset = -this.tz.getOffsetMillis(this) / 86400000;
			}
			if (offset !== 0) {
				this.rd = new ilib.Date.GregRataDie({
					rd: this.rd.getRataDie() + offset
				});
			}
		} else if (typeof(params.rd) !== 'undefined') {
			// private parameter. Do not document this!
			// RD time is defined to be UTC
			this.timezone = "Etc/UTC";
			this.setRd(params.rd);
		}
	} 

	if (!this.tz) {
		this.tz = new ilib.TimeZone({id: this.timezone});
	}
	
	if (!this.rd) {
		var now = new Date();
		this.setTime(now.getTime());
	}
};

ilib.Date.GregDate.prototype = new ilib.Date();
ilib.Date.GregDate.prototype.parent = ilib.Date;
ilib.Date.GregDate.prototype.constructor = ilib.Date.GregDate;

/**
 * @private
 * Return the Rata Die (fixed day) number of this date.
 * 
 * @return {number} the rd date as a number
 */
ilib.Date.GregDate.prototype.getRataDie = function() {
	return this.rd.getRataDie();
};

/**
 * @private
 * Set the date components of this instance based on the given rd.
 * @param {number} rd the rata die date to set
 */
ilib.Date.GregDate.prototype.setRd = function (rd) {
	this.rd = new ilib.Date.GregRataDie({rd: rd});
	this.calcDateComponents();
};

/**
 * @private
 * Calculate the date components for the current time zone
 */
ilib.Date.GregDate.prototype.calcDateComponents = function () {
	if (this.timezone === "local" && (this.rd.getRataDie() >= 719163 || this.rd.getRataDie() <= 744018.134803241)) {
		// use the intrinsic JS Date object to do the tz conversion for us, which 
		// guarantees that it follows the system tz database settings 
		var d = new Date(this.rd.getTime());
	
		/**
		 * Year in the Gregorian calendar.
		 * @type number
		 */
		this.year = d.getFullYear();
		
		/**
		 * The month number, ranging from 1 (January) to 12 (December).
		 * @type number
		 */
		this.month = d.getMonth()+1;
		
		/**
		 * The day of the month. This ranges from 1 to 31.
		 * @type number
		 */
		this.day = d.getDate();
		
		/**
		 * The hour of the day. This can be a number from 0 to 23, as times are
		 * stored unambiguously in the 24-hour clock.
		 * @type number
		 */
		this.hour = d.getHours();
		
		/**
		 * The minute of the hours. Ranges from 0 to 59.
		 * @type number
		 */
		this.minute = d.getMinutes();
		
		/**
		 * The second of the minute. Ranges from 0 to 59.
		 * @type number
		 */
		this.second = d.getSeconds();
		
		/**
		 * The millisecond of the second. Ranges from 0 to 999.
		 * @type number
		 */
		this.millisecond = d.getMilliseconds();
	} else {
		function calcYear(rd) {
			var days400,
				days100,
				days4,
				years400,
				years100,
				years4,
				years1,
				year;

			years400 = Math.floor((rd - 1) / 146097);
			days400 = ilib.mod((rd - 1), 146097);
			years100 = Math.floor(days400 / 36524);
			days100 = ilib.mod(days400, 36524);
			years4 = Math.floor(days100 / 1461);
			days4 = ilib.mod(days100, 1461);
			years1 = Math.floor(days4 / 365);
			
			year = 400 * years400 + 100 * years100 + 4 * years4 + years1;
			if (years100 !== 4 && years1 !== 4) {
				year++;
			}
			return year;
		}
			
		this.year = calcYear(this.rd.getRataDie());
		
		// now offset the RD by the time zone, then recalculate in case we were 
		// near the year boundary
		if (!this.tz) {
			this.tz = new ilib.TimeZone({id: this.timezone});
		}
		var offset = this.tz.getOffsetMillis(this) / 86400000;
		var rd = this.rd.getRataDie();
		if (offset !== 0) {
			rd += offset;
			this.year = calcYear(rd);
		}
		
		var yearStartRd = new ilib.Date.GregRataDie({
			year: this.year,
			month: 1,
			day: 1
		});
		
		// remainder is days into the year
		var remainder = rd - yearStartRd.getRataDie() + 1;
		
		var cumulative = ilib.Cal.Gregorian.prototype.isLeapYear.call(this.cal, this.year) ? 
			ilib.Date.GregRataDie.cumMonthLengthsLeap : 
			ilib.Date.GregRataDie.cumMonthLengths; 
		
		this.month = ilib.bsearch(Math.floor(remainder), cumulative);
		remainder = remainder - cumulative[this.month-1];
		
		this.day = Math.floor(remainder);
		remainder -= this.day;
		// now convert to milliseconds for the rest of the calculation
		remainder = Math.round(remainder * 86400000);
		
		this.hour = Math.floor(remainder/3600000);
		remainder -= this.hour * 3600000;
		
		this.minute = Math.floor(remainder/60000);
		remainder -= this.minute * 60000;
		
		this.second = Math.floor(remainder/1000);
		remainder -= this.second * 1000;
		
		this.millisecond = Math.floor(remainder);
	}
};

/**
 * Set the date of this instance using a Julian Day.
 * @param {number|ilib.JulianDay} date the Julian Day to use to set this date
 */
ilib.Date.GregDate.prototype.setJulianDay = function (date) {
	this.rd = new ilib.Date.GregRataDie({julianday: (typeof(date) === 'object') ? date.getDate() : date});
	this.calcDateComponents();
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @return {number} the day of the week
 */
ilib.Date.GregDate.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.rd.getRataDie());
	return ilib.mod(rd, 7);
};

/**
 * @private
 * Return the rd number of the first Sunday of the given ISO year.
 * @param {number} year the year for which the first Sunday is being sought
 * @return {number} the rd of the first Sunday of the ISO year
 */
ilib.Date.GregDate.prototype.firstSunday = function (year) {
	var jan1 = new ilib.Date.GregRataDie({
		year: year,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	var firstThu = new ilib.Date.GregRataDie({rd: jan1.onOrAfterRd(4)});
	return firstThu.beforeRd(0);
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
	return this.cal.newDateInstance({rd: this.rd.beforeRd(dow)});
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
	return this.cal.newDateInstance({rd: this.rd.afterRd(dow)});
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
	return this.cal.newDateInstance({rd: this.rd.onOrBeforeRd(dow)});
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
	return this.cal.newDateInstance({rd: this.rd.onOrAfterRd(dow)});
};

/**
 * Return the ISO 8601 week number in the current year for the current date. The week
 * number ranges from 1 to 53, as some years have 53 weeks assigned to them, and most
 * only 52.
 * 
 * @return {number} the week number for the current date
 */
ilib.Date.GregDate.prototype.getWeekOfYear = function() {
	var rd = Math.floor(this.rd.getRataDie()),
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
		ilib.Date.GregRataDie.cumMonthLengthsLeap : 
		ilib.Date.GregRataDie.cumMonthLengths; 
		
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
		first = new ilib.Date.GregRataDie({
			year: this.year,
			month: this.month,
			day: 1,
			hour: 0,
			minute: 0,
			second: 0,
			millisecond: 0
		}),
		weekStart = first.onOrAfterRd(li.getFirstDayOfWeek());
	if (weekStart - first.getRataDie() > 3) {
		// if the first week has 4 or more days in it of the current month, then consider
		// that week 1. Otherwise, it is week 0. To make it week 1, move the week start
		// one week earlier.
		weekStart -= 7;
	}
	return Math.floor((this.rd.getRataDie() - weekStart) / 7) + 1;
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
	return this.rd.getTime(); 
};

/**
 * Set the time of this instance according to the given unix time. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970.
 * 
 * @param {number} millis the unix time to set this date to in milliseconds 
 */
ilib.Date.GregDate.prototype.setTime = function(millis) {
	this.rd = new ilib.Date.GregRataDie({unixtime: millis});
	this.calcDateComponents();
};

/**
 * Return a Javascript Date object that is equivalent to this Gregorian date
 * object.
 * 
 * @return {Date|undefined} a javascript Date object
 */
ilib.Date.GregDate.prototype.getJSDate = function() {
	var unix = this.rd.getTime();
	return (unix === -1) ? undefined : new Date(unix); 
};

/**
 * Return the Julian Day equivalent to this calendar date as a number.
 * This returns the julian day in the local time zone.
 * 
 * @return {number} the julian date equivalent of this date
 */
ilib.Date.GregDate.prototype.getJulianDay = function() {
	return this.rd.getJulianDay();
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
		this.tz = undefined;
	} else if (typeof(tzName) === 'string') {
		this.timezone = tzName;
		this.tz = undefined;
		// assuming the same UTC time, but a new time zone, now we have to 
		// recalculate what the date components are
		this.calcDateComponents();
	}
};

// register with the factory method
ilib.Date._constructors["gregorian"] = ilib.Date.GregDate;