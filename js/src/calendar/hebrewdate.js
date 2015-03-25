/*
 * hebrewdate.js - Represent a date in the Hebrew calendar
 * 
 * Copyright © 2012-2015, JEDLSoft
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
locale.js
localeinfo.js
timezone.js
date.js
util/math.js
calendar.js
calendar/hebrew.js
calendar/ratadie.js
*/

var ilib = ilib || {Date:{}};

/**
 * @class
 * Construct a new Hebrew RD date number object. The constructor parameters can 
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
 * <li><i>parts</i> - 0 to 1079. Specify the halaqim parts of an hour. Either specify 
 * the parts or specify the minutes, seconds, and milliseconds, but not both. 
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
 * If the constructor is called with another Hebrew date instance instead of
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
 * Depends directive: !depends hebrewdate.js
 * 
 * @private
 * @constructor
 * @extends ilib.Date.RataDie
 * @param {Object=} params parameters that govern the settings and behaviour of this Hebrew RD date
 */
ilib.Date.HebrewRataDie = function(params) {
	this.cal = params && params.cal || new ilib.Cal.Hebrew();
	this.rd = undefined;
	ilib.Date.RataDie.call(this, params);
};

ilib.Date.HebrewRataDie.prototype = new ilib.Date.RataDie();
ilib.Date.HebrewRataDie.prototype.parent = ilib.Date.RataDie;
ilib.Date.HebrewRataDie.prototype.constructor = ilib.Date.HebrewRataDie;

/**
 * The difference between a zero Julian day and the first day of the Hebrew 
 * calendar: sunset on Monday, Tishri 1, 1 = September 7, 3760 BC Gregorian = JD 347997.25
 * @private
 * @const
 * @type number
 */
ilib.Date.HebrewRataDie.prototype.epoch = 347997.25;

/**
 * Calculate the Rata Die (fixed day) number of the given date from the
 * date components.
 * 
 * @private
 * @param {Object} date the date components to calculate the RD from
 */
ilib.Date.HebrewRataDie.prototype._setDateComponents = function(date) {
	var elapsed = ilib.Cal.Hebrew.elapsedDays(date.year);
	var days = elapsed +
		ilib.Cal.Hebrew.newYearsCorrection(date.year, elapsed) +
		date.day - 1;
	var sum = 0, table;
	
	//console.log("getRataDie: converting " +  JSON.stringify(date));
	//console.log("getRataDie: days is " +  days);
	//console.log("getRataDie: new years correction is " +  ilib.Cal.Hebrew.newYearsCorrection(date.year, elapsed));
	
	table = this.cal.isLeapYear(date.year) ? 
				ilib.Date.HebrewDate.cumMonthLengthsLeap :
				ilib.Date.HebrewDate.cumMonthLengths;
	sum = table[date.month-1];
	
	// gets cumulative without correction, so now add in the correction
	if ((date.month < 7 || date.month > 8) && ilib.Cal.Hebrew.longHeshvan(date.year)) {
		sum++;
	}
	if ((date.month < 7 || date.month > 9) && ilib.Cal.Hebrew.longKislev(date.year)) {
		sum++;
	}
	// console.log("getRataDie: cum days is now " +  sum);
	
	days += sum;
	
	// the date starts at sunset, which we take as 18:00, so the hours from
	// midnight to 18:00 are on the current Gregorian day, and the hours from
	// 18:00 to midnight are on the previous Gregorian day. So to calculate the 
	// number of hours into the current day that this time represents, we have
	// to count from 18:00 to midnight first, and add in 6 hours if the time is
	// less than 18:00
	var minute, second, millisecond;
	
	if (typeof(date.parts) !== 'undefined') {
		// The parts (halaqim) of the hour. This can be a number from 0 to 1079.
		var parts = parseInt(date.parts, 10);
		var seconds = parseInt(parts, 10) * 3.333333333333;
		minute = Math.floor(seconds / 60);
		seconds -= minute * 60;
		second = Math.floor(seconds);
		millisecond = (seconds - second);	
	} else {
		minute = parseInt(date.minute, 10) || 0;
		second = parseInt(date.second, 10) || 0;
		millisecond = parseInt(date.millisecond, 10) || 0;
	}
		
	var time;
	if (date.hour >= 18) {
		time = ((date.hour - 18 || 0) * 3600000 +
			(minute || 0) * 60000 +
			(second || 0) * 1000 +
			(millisecond || 0)) / 
			86400000;
	} else {
		time = 0.25 +	// 6 hours from 18:00 to midnight on the previous gregorian day
				((date.hour || 0) * 3600000 +
				(minute || 0) * 60000 +
				(second || 0) * 1000 +
				(millisecond || 0)) / 
				86400000;
	}
	
	//console.log("getRataDie: rd is " +  (days + time));
	this.rd = days + time;
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
ilib.Date.HebrewRataDie.prototype._onOrBefore = function(rd, dayOfWeek) {
	return rd - ilib.mod(Math.floor(rd) - dayOfWeek + 1, 7);
};

/**
 * @class
 * Construct a new civil Hebrew date object. The constructor can be called
 * with a params object that can contain the following properties:<p>
 * 
 * <ul>
 * <li><i>julianday</i> - the Julian Day to set into this date
 * <li><i>year</i> - any integer except 0. Years go from -1 (BCE) to 1 (CE), skipping the zero year
 * <li><i>month</i> - 1 to 12, where 1 means Nisan, 2 means Iyyar, etc.
 * <li><i>day</i> - 1 to 30
 * <li><i>hour</i> - 0 to 23. A formatter is used to display 12 hour clocks, but this representation 
 * is always done with an unambiguous 24 hour representation
 * <li><i>parts</i> - 0 to 1079. Specify the halaqim parts of an hour. Either specify 
 * the parts or specify the minutes, seconds, and milliseconds, but not both. 
 * <li><i>minute</i> - 0 to 59
 * <li><i>second</i> - 0 to 59
 * <li><i>millisecond</i> - 0 to 999
 * <li><i>locale</i> - the ilib.TimeZone instance or time zone name as a string 
 * of this julian date. The date/time is kept in the local time. The time zone
 * is used later if this date is formatted according to a different time zone and
 * the difference has to be calculated, or when the date format has a time zone
 * component in it.
 * <li><i>timezone</i> - the time zone of this instance. If the time zone is not 
 * given, it can be inferred from this locale. For locales that span multiple
 * time zones, the one with the largest population is chosen as the one that 
 * represents the locale. 
 * 
 * <li><i>date</i> - use the given intrinsic Javascript date to initialize this one.
 * </ul>
 * 
 * If called with another Hebrew date argument, the date components of the given
 * date are copied into the current one.<p>
 * 
 * If the constructor is called with no arguments at all or if none of the 
 * properties listed above 
 * from <i>julianday</i> through <i>millisecond</i> are present, then the date 
 * components are 
 * filled in with the current date at the time of instantiation. Note that if
 * you do not give the time zone when defaulting to the current time and the 
 * time zone for all of ilib was not set with <i>ilib.setTimeZone()</i>, then the
 * time zone will default to UTC ("Universal Time, Coordinated" or "Greenwich 
 * Mean Time").<p>
 * 
 * Depends directive: !depends hebrewdate.js
 * 
 * @constructor
 * @extends ilib.Date
 * @param {Object=} params parameters that govern the settings and behaviour of this Hebrew date
 */
ilib.Date.HebrewDate = function(params) {
	this.cal = new ilib.Cal.Hebrew();
	
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

		if (params.year || params.month || params.day || params.hour ||
				params.minute || params.second || params.millisecond || params.parts ) {
			/**
			 * Year in the Hebrew calendar.
			 * @type number
			 */
			this.year = parseInt(params.year, 10) || 0;

			/**
			 * The month number, ranging from 1 to 13.
			 * @type number
			 */
			this.month = parseInt(params.month, 10) || 1;

			/**
			 * The day of the month. This ranges from 1 to 30.
			 * @type number
			 */
			this.day = parseInt(params.day, 10) || 1;
			
			/**
			 * The hour of the day. This can be a number from 0 to 23, as times are
			 * stored unambiguously in the 24-hour clock.
			 * @type number
			 */
			this.hour = parseInt(params.hour, 10) || 0;

			if (typeof(params.parts) !== 'undefined') {
				/**
				 * The parts (halaqim) of the hour. This can be a number from 0 to 1079.
				 * @type number
				 */
				this.parts = parseInt(params.parts, 10);
				var seconds = parseInt(params.parts, 10) * 3.333333333333;
				this.minute = Math.floor(seconds / 60);
				seconds -= this.minute * 60;
				this.second = Math.floor(seconds);
				this.millisecond = (seconds - this.second);	
			} else {
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
			}
				
			/**
			 * The day of the year. Ranges from 1 to 383.
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

ilib.Date.HebrewDate.prototype = new ilib.Date({noinstance: true});
ilib.Date.HebrewDate.prototype.parent = ilib.Date;
ilib.Date.HebrewDate.prototype.constructor = ilib.Date.HebrewDate;

/**
 * the cumulative lengths of each month for a non-leap year, without new years corrections
 * @private
 * @const
 * @type Array.<number>
 */
ilib.Date.HebrewDate.cumMonthLengths = [
	176,  /* Nisan */
	206,  /* Iyyar */
	235,  /* Sivan */
	265,  /* Tammuz */
	294,  /* Av */
	324,  /* Elul */
	0,    /* Tishri - Jewish New Year (Rosh HaShanah) starts in month 7 */
	30,   /* Heshvan */
	59,   /* Kislev */
	88,   /* Teveth */
	117,  /* Shevat */
	147   /* Adar I */
];

/**
 * the cumulative lengths of each month for a non-leap year, without new years corrections,
 * that can be used in reverse to map days to months
 * @private
 * @const
 * @type Array.<number>
 */
ilib.Date.HebrewDate.cumMonthLengthsReverse = [
//  [days, monthnumber],                                                
	[0,   7],  /* Tishri - Jewish New Year (Rosh HaShanah) starts in month 7 */
	[30,  8],  /* Heshvan */
	[59,  9],  /* Kislev */
	[88,  10], /* Teveth */
	[117, 11], /* Shevat */
	[147, 12], /* Adar I */
	[176, 1],  /* Nisan */
	[206, 2],  /* Iyyar */
	[235, 3],  /* Sivan */
	[265, 4],  /* Tammuz */
	[294, 5],  /* Av */
	[324, 6],  /* Elul */
	[354, 7]   /* end of year sentinel value */
];

/**
 * the cumulative lengths of each month for a leap year, without new years corrections 
 * @private
 * @const
 * @type Array.<number>
 */
ilib.Date.HebrewDate.cumMonthLengthsLeap = [
	206,  /* Nisan */
	236,  /* Iyyar */
	265,  /* Sivan */
	295,  /* Tammuz */
	324,  /* Av */
	354,  /* Elul */
	0,    /* Tishri - Jewish New Year (Rosh HaShanah) starts in month 7 */
	30,   /* Heshvan */
	59,   /* Kislev */
	88,   /* Teveth */
	117,  /* Shevat */
	147,  /* Adar I */
	177   /* Adar II */
];

/**
 * the cumulative lengths of each month for a leap year, without new years corrections
 * that can be used in reverse to map days to months 
 * 
 * @private
 * @const
 * @type Array.<number>
 */
ilib.Date.HebrewDate.cumMonthLengthsLeapReverse = [
//  [days, monthnumber],                                                
	[0,   7],  /* Tishri - Jewish New Year (Rosh HaShanah) starts in month 7 */
	[30,  8],  /* Heshvan */
	[59,  9],  /* Kislev */
	[88,  10], /* Teveth */
	[117, 11], /* Shevat */
	[147, 12], /* Adar I */
	[177, 13], /* Adar II */
	[206, 1],  /* Nisan */
	[236, 2],  /* Iyyar */
	[265, 3],  /* Sivan */
	[295, 4],  /* Tammuz */
	[324, 5],  /* Av */
	[354, 6],  /* Elul */
	[384, 7]   /* end of year sentinel value */
];

/**
 * Number of days difference between RD 0 of the Hebrew calendar 
 * (Jan 1, 1 Gregorian = JD 1721057.5) and RD 0 of the Hebrew calendar
 * (September 7, -3760 Gregorian = JD 347997.25)
 * @private
 * @const
 * @type number
 */
ilib.Date.HebrewDate.GregorianDiff = 1373060.25;

/**
 * Return a new RD for this date type using the given params.
 * @private
 * @param {Object=} params the parameters used to create this rata die instance
 * @returns {ilib.Date.RataDie} the new RD instance for the given params
 */
ilib.Date.HebrewDate.prototype.newRd = function (params) {
	return new ilib.Date.HebrewRataDie(params);
};

/**
 * Return the year for the given RD
 * @protected
 * @param {number} rd RD to calculate from 
 * @returns {number} the year for the RD
 */
ilib.Date.HebrewDate.prototype._calcYear = function(rd) {
	var year, approximation, nextNewYear;
	
	// divide by the average number of days per year in the Hebrew calendar
	// to approximate the year, then tweak it to get the real year
	approximation = Math.floor(rd / 365.246822206) + 1;
	
	// console.log("HebrewDate._calcYear: approx is " + approximation);
	
	// search forward from approximation-1 for the year that actually contains this rd
	year = approximation;
	nextNewYear = ilib.Cal.Hebrew.newYear(year);
	while (rd >= nextNewYear) {
		year++;
		nextNewYear = ilib.Cal.Hebrew.newYear(year);
	}
	return year - 1;
};

/**
 * Calculate date components for the given RD date.
 * @protected
 */
ilib.Date.HebrewDate.prototype._calcDateComponents = function () {
	var remainder,
		i,
		table,
		target,
		rd = this.rd.getRataDie();
	
	// console.log("HebrewDate.calcComponents: calculating for rd " + rd);

	if (typeof(this.offset) === "undefined") {
		this.year = this._calcYear(rd);
		
		// now offset the RD by the time zone, then recalculate in case we were 
		// near the year boundary
		if (!this.tz) {
			this.tz = new ilib.TimeZone({id: this.timezone});
		}
		this.offset = this.tz.getOffsetMillis(this) / 86400000;
	}

	if (this.offset !== 0) {
		rd += this.offset;
		this.year = this._calcYear(rd);
	}
	
	// console.log("HebrewDate.calcComponents: year is " + this.year + " with starting rd " + thisNewYear);
	
	remainder = rd - ilib.Cal.Hebrew.newYear(this.year);
	// console.log("HebrewDate.calcComponents: remainder is " + remainder);

	// take out new years corrections so we get the right month when we look it up in the table
	if (remainder >= 59) {
		if (remainder >= 88) {
			if (ilib.Cal.Hebrew.longKislev(this.year)) {
				remainder--;
			}
		}
		if (ilib.Cal.Hebrew.longHeshvan(this.year)) {
			remainder--;
		}
	}
	
	// console.log("HebrewDate.calcComponents: after new years corrections, remainder is " + remainder);
	
	table = this.cal.isLeapYear(this.year) ? 
			ilib.Date.HebrewDate.cumMonthLengthsLeapReverse :
			ilib.Date.HebrewDate.cumMonthLengthsReverse;
	
	i = 0;
	target = Math.floor(remainder);
	while (i+1 < table.length && target >= table[i+1][0]) {
		i++;
	}
	
	this.month = table[i][1];
	// console.log("HebrewDate.calcComponents: remainder is " + remainder);
	remainder -= table[i][0];
	
	// console.log("HebrewDate.calcComponents: month is " + this.month + " and remainder is " + remainder);
	
	this.day = Math.floor(remainder);
	remainder -= this.day;
	this.day++; // days are 1-based
	
	// console.log("HebrewDate.calcComponents: day is " + this.day + " and remainder is " + remainder);

	// now convert to milliseconds for the rest of the calculation
	remainder = Math.round(remainder * 86400000);
	
	this.hour = Math.floor(remainder/3600000);
	remainder -= this.hour * 3600000;
	
	// the hours from 0 to 6 are actually 18:00 to midnight of the previous
	// gregorian day, so we have to adjust for that
	if (this.hour >= 6) {
		this.hour -= 6;
	} else {
		this.hour += 18;
	}
		
	this.minute = Math.floor(remainder/60000);
	remainder -= this.minute * 60000;
	
	this.second = Math.floor(remainder/1000);
	remainder -= this.second * 1000;
	
	this.millisecond = Math.floor(remainder);
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @return {number} the day of the week
 */
ilib.Date.HebrewDate.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.rd.getRataDie() + (this.offset || 0));
	return ilib.mod(rd+1, 7);
};

/**
 * Get the Halaqim (parts) of an hour. There are 1080 parts in an hour, which means
 * each part is 3.33333333 seconds long. This means the number returned may not
 * be an integer.
 * 
 * @return {number} the halaqim parts of the current hour
 */
ilib.Date.HebrewDate.prototype.getHalaqim = function() {
	if (this.parts < 0) {
		// convert to ms first, then to parts
		var h = this.minute * 60000 + this.second * 1000 + this.millisecond;
		this.parts = (h * 0.0003);
	}
	return this.parts;
};

/**
 * Return the rd number of the first Sunday of the given ISO year.
 * @protected
 * @return the rd of the first Sunday of the ISO year
 */
ilib.Date.HebrewDate.prototype.firstSunday = function (year) {
	var tishri1 = this.newRd({
		year: year,
		month: 7,
		day: 1,
		hour: 18,
		minute: 0,
		second: 0,
		millisecond: 0,
		cal: this.cal
	});
	var firstThu = this.newRd({
		rd: tishri1.onOrAfter(4),
		cal: this.cal
	});
	return firstThu.before(0);
};

/**
 * Return the ordinal day of the year. Days are counted from 1 and proceed linearly up to 
 * 385, regardless of months or weeks, etc. That is, Tishri 1st is day 1, and 
 * Elul 29 is 385 for a leap year with a long Heshvan and long Kislev.
 * @return {number} the ordinal day of the year
 */
ilib.Date.HebrewDate.prototype.getDayOfYear = function() {
	var table = this.cal.isLeapYear(this.year) ? 
				ilib.Date.HebrewDate.cumMonthLengthsLeap : 
				ilib.Date.HebrewDate.cumMonthLengths;
	var days = table[this.month-1];
	if ((this.month < 7 || this.month > 8) && ilib.Cal.Hebrew.longHeshvan(this.year)) {
		days++;
	}
	if ((this.month < 7 || this.month > 9) && ilib.Cal.Hebrew.longKislev(this.year)) {
		days++;
	}

	return days + this.day;
};

/**
 * Return the ordinal number of the week within the month. The first week of a month is
 * the first one that contains 4 or more days in that month. If any days precede this
 * first week, they are marked as being in week 0. This function returns values from 0
 * through 6.<p>
 * 
 * The locale is a required parameter because different locales that use the same 
 * Hebrew calendar consider different days of the week to be the beginning of
 * the week. This can affect the week of the month in which some days are located.
 * 
 * @param {ilib.Locale|string} locale the locale or locale spec to use when figuring out 
 * the first day of the week
 * @return {number} the ordinal number of the week within the current month
 */
ilib.Date.HebrewDate.prototype.getWeekOfMonth = function(locale) {
	var li = new ilib.LocaleInfo(locale),
		first = this.newRd({
			year: this.year,
			month: this.month,
			day: 1,
			hour: 18,
			minute: 0,
			second: 0,
			millisecond: 0
		}),
		rd = this.rd.getRataDie(),
		weekStart = first.onOrAfter(li.getFirstDayOfWeek());
	
	if (weekStart - first.getRataDie() > 3) {
		// if the first week has 4 or more days in it of the current month, then consider
		// that week 1. Otherwise, it is week 0. To make it week 1, move the week start
		// one week earlier.
		weekStart -= 7;
	}
	return (rd < weekStart) ? 0 : Math.floor((rd - weekStart) / 7) + 1;
};

/**
 * Return the era for this date as a number. The value for the era for Hebrew 
 * calendars is -1 for "before the Hebrew era" and 1 for "the Hebrew era". 
 * Hebrew era dates are any date after Tishri 1, 1, which is the same as
 * September 7, 3760 BC in the Gregorian calendar. 
 * 
 * @return {number} 1 if this date is in the Hebrew era, -1 if it is before the 
 * Hebrew era 
 */
ilib.Date.HebrewDate.prototype.getEra = function() {
	return (this.year < 1) ? -1 : 1;
};

/**
 * Return the name of the calendar that governs this date.
 * 
 * @return {string} a string giving the name of the calendar
 */
ilib.Date.HebrewDate.prototype.getCalendar = function() {
	return "hebrew";
};

// register with the factory method
ilib.Date._constructors["hebrew"] = ilib.Date.HebrewDate;

module.exports = function(loader) {
	loader.require([
        "ilibglobal.js",
        "locale.js",
        "localeinfo.js",
        "timezone.js",
        "date.js",
        "util/math.js",
        "calendar.js",
        "calendar/hebrew.js",
        "calendar/ratadie.js"
    ]);
	return ilib;
};