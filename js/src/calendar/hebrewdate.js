/*
 * hebrewdate.js - Represent a date in the Hebrew calendar
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

/* !depends date.js calendar/hebrew.js util/utils.js */

/**
 * @class
 * 
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

		if (typeof(params.unixtime) != 'undefined') {
			this.setTime(parseInt(params.unixtime, 10));
		} else if (typeof(params.julianday) != 'undefined') {
			this.setJulianDay(parseFloat(params.julianday));
		} else if (params.year || params.month || params.day || params.hour ||
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

			this.parts = -1;
			
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

ilib.Date.HebrewDate.prototype = new ilib.Date();
ilib.Date.HebrewDate.prototype.parent = ilib.Date;
ilib.Date.HebrewDate.prototype.constructor = ilib.Date.HebrewDate;

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month for a non-leap year, without new years corrections
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
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month for a non-leap year, without new years corrections,
 * that can be used in reverse to map days to months
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
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month for a leap year, without new years corrections 
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
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month for a leap year, without new years corrections
 * that can be used in reverse to map days to months 
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
 * @private
 * @const
 * @type number
 * Number of days difference between RD 0 of the Gregorian calendar 
 * (Jan 1, 1 Gregorian = JD 1721057.5) and RD 0 of the Hebrew calendar
 * (September 7, -3760 Gregorian = JD 347997.25)
 */
ilib.Date.HebrewDate.GregorianDiff = 1373060.25;

/**
 * @private
 * @const
 * @type number
 * The difference between a zero Julian day and the first day of the Hebrew 
 * calendar: sunset on Monday, Tishri 1, 1 = September 7, 3760 BC Gregorian = JD 347997.25
 */
ilib.Date.HebrewDate.epoch = 347997.25;

/**
 * @private
 * Return the Rata Die (fixed day) number of the given date.
 * 
 * @param {Object} date hebrew date to calculate
 * @return {number} the rd date as a number
 */
ilib.Date.HebrewDate.prototype.calcRataDie = function(date) {
	var elapsed = ilib.Cal.Hebrew.elapsedDays(date.year);
	var days = elapsed +
		ilib.Cal.Hebrew.newYearsCorrection(date.year, elapsed) +
		date.day - 1;
	var i, sum = 0, table;
	
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
	var time;
	if (date.hour >= 18) {
		time = ((date.hour - 18 || 0) * 3600000 +
			(date.minute || 0) * 60000 +
			(date.second || 0) * 1000 +
			(date.millisecond || 0)) / 
			86400000;
	} else {
		time = 0.25 +	// 6 hours from 18:00 to midnight on the previous gregorian day
				((date.hour || 0) * 3600000 +
				(date.minute || 0) * 60000 +
				(date.second || 0) * 1000 +
				(date.millisecond || 0)) / 
				86400000;
	}
	
	//console.log("getRataDie: rd is " +  (days + time));
	return days + time;
};

/**
 * @private
 * Return the Rata Die (fixed day) number of this date.
 * 
 * @return {number} the rd date as a number
 */
ilib.Date.HebrewDate.prototype.getRataDie = function() {
	return this.calcRataDie(this);
};

/**
 * @private
 * Calculate date components for the given RD date.
 * @return {Object.<{year:number,month:number,day:number,hour:number,minute:number,second:number,millisecond:number}>} object containing the fields
 */
ilib.Date.HebrewDate.prototype.calcComponents = function (rd) {
	var ret = {},
		remainder,
		approximation,
		year,
		month,
		i,
		table,
		target,
		thisNewYear = 0,
		nextNewYear;
	
	// console.log("HebrewDate.calcComponents: calculating for rd " + rd);
	
	// divide by the average number of days per year in the Hebrew calendar
	// to approximate the year, then tweak it to get the real year
	approximation = Math.floor(rd / 365.246822206) + 1;
	
	// console.log("HebrewDate.calcComponents: approx is " + approximation);
	
	// search forward from approximation-1 for the year that actually contains this rd
	year = approximation;
	thisNewYear = ilib.Cal.Hebrew.newYear(year-1);
	nextNewYear = ilib.Cal.Hebrew.newYear(year);
	while (rd >= nextNewYear) {
		year++;
		thisNewYear = nextNewYear;
		nextNewYear = ilib.Cal.Hebrew.newYear(year);
	}
	ret.year = year-1;
	
	// console.log("HebrewDate.calcComponents: year is " + ret.year + " with starting rd " + thisNewYear);
	
	remainder = rd - thisNewYear;
	// console.log("HebrewDate.calcComponents: remainder is " + remainder);

	// take out new years corrections so we get the right month when we look it up in the table
	if (remainder >= 59) {
		if (remainder >= 88) {
			if (ilib.Cal.Hebrew.longKislev(ret.year)) {
				remainder--;
			}
		}
		if (ilib.Cal.Hebrew.longHeshvan(ret.year)) {
			remainder--;
		}
	}
	
	// console.log("HebrewDate.calcComponents: after new years corrections, remainder is " + remainder);
	
	table = this.cal.isLeapYear(ret.year) ? 
			ilib.Date.HebrewDate.cumMonthLengthsLeapReverse :
			ilib.Date.HebrewDate.cumMonthLengthsReverse;
	
	i = 0;
	target = Math.floor(remainder);
	while (i+1 < table.length && target >= table[i+1][0]) {
		i++;
	}
	
	ret.month = table[i][1];
	// console.log("HebrewDate.calcComponents: remainder is " + remainder);
	remainder -= table[i][0];
	
	// console.log("HebrewDate.calcComponents: month is " + ret.month + " and remainder is " + remainder);
	
	ret.day = Math.floor(remainder);
	remainder -= ret.day;
	ret.day++; // days are 1-based
	
	// console.log("HebrewDate.calcComponents: day is " + ret.day + " and remainder is " + remainder);

	// now convert to milliseconds for the rest of the calculation
	remainder = Math.round(remainder * 86400000);
	
	ret.hour = Math.floor(remainder/3600000);
	remainder -= ret.hour * 3600000;
	
	// the hours from 0 to 6 are actually 18:00 to midnight of the previous
	// gregorian day, so we have to adjust for that
	if (ret.hour >= 6) {
		ret.hour -= 6;
	} else {
		ret.hour += 18;
	}
		
	ret.minute = Math.floor(remainder/60000);
	remainder -= ret.minute * 60000;
	
	ret.second = Math.floor(remainder/1000);
	remainder -= ret.second * 1000;
	
	ret.millisecond = remainder;
	
	// console.log("HebrewDate.calcComponent: final result is " + JSON.stringify(ret));
	return ret;
};

/**
 * @private
 * Set the date components of this instance based on the given rd.
 * @param {number} rd the rata die date to set
 */
ilib.Date.HebrewDate.prototype.setRd = function (rd) {
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
ilib.Date.HebrewDate.prototype.setJulianDay = function (date) {
	var jd = (typeof(date) === 'number') ? new ilib.JulianDay(date) : date,
		rd;	// rata die -- # of days since the beginning of the calendar
	
	rd = jd.getDate() - ilib.Date.HebrewDate.epoch; 	// Julian Days start at noon
	this.setRd(rd);
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @return {number} the day of the week
 */
ilib.Date.HebrewDate.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.getRataDie());
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
 * @private
 * Return the rd of the particular day of the week on or before the given rd.
 * eg. The Sunday on or before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 */
ilib.Date.HebrewDate.prototype.onOrBeforeRd = function(rd, dayOfWeek) {
	return rd - ilib.mod(Math.floor(rd) - dayOfWeek + 1, 7);
};

/**
 * @private
 * Return the rd of the particular day of the week on or before the given rd.
 * eg. The Sunday on or before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 */
ilib.Date.HebrewDate.prototype.onOrAfterRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd+6, dayOfWeek);
};

/**
 * @private
 * Return the rd of the particular day of the week before the given rd.
 * eg. The Sunday before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 */
ilib.Date.HebrewDate.prototype.beforeRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd-1, dayOfWeek);
};

/**
 * @private
 * Return the rd of the particular day of the week after the given rd.
 * eg. The Sunday after the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 */
ilib.Date.HebrewDate.prototype.afterRd = function(rd, dayOfWeek) {
	return this.onOrBeforeRd(rd+7, dayOfWeek);
};

/**
 * @private
 * Return the rd of the first Sunday of the given ISO year.
 * @return the rd of the first Sunday of the ISO year
 */
ilib.Date.HebrewDate.prototype.firstSunday = function (year) {
	var tishri1 = this.calcRataDie({
		year: year,
		month: 7,
		day: 1,
		hour: 18,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	var firstThu = this.onOrAfterRd(tishri1, 4);
	return this.beforeRd(firstThu, 0);
};

/**
 * Return a new Hebrew date instance that represents the first instance of the 
 * given day of the week before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week before the current date that is being sought
 * @returns {ilib.Date.HebrewDate} the date being sought
 */
ilib.Date.HebrewDate.prototype.before = function (dow) {
	return new ilib.Date.HebrewDate({rd: this.beforeRd(this.getRataDie(), dow)});
};

/**
 * Return a new Hebrew date instance that represents the first instance of the 
 * given day of the week after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week after the current date that is being sought
 * @returns {ilib.Date.HebrewDate} the date being sought
 */
ilib.Date.HebrewDate.prototype.after = function (dow) {
	return new ilib.Date.HebrewDate({rd: this.afterRd(this.getRataDie(), dow)});
};

/**
 * Return a new Hebrew date instance that represents the first instance of the 
 * given day of the week on or before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or before the current date that is being sought
 * @returns {ilib.Date.HebrewDate} the date being sought
 */
ilib.Date.HebrewDate.prototype.onOrBefore = function (dow) {
	return new ilib.Date.HebrewDate({rd: this.onOrBeforeRd(this.getRataDie(), dow)});
};

/**
 * Return a new Hebrew date instance that represents the first instance of the 
 * given day of the week on or after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or after the current date that is being sought
 * @returns {ilib.Date.HebrewDate} the date being sought
 */
ilib.Date.HebrewDate.prototype.onOrAfter = function (dow) {
	return new ilib.Date.HebrewDate({rd: this.onOrAfterRd(this.getRataDie(), dow)});
};

/**
 * Return the week number in the current year for the current date. This is calculated
 * in a similar way to the ISO 8601 week for a Gregorian calendar, but is technically
 * not an actual ISO week number. That means in some years, the week starts in the
 * previous calendar year. The week number ranges from 1 to 55.
 * 
 * @return {number} the week number for the current date
 */
ilib.Date.HebrewDate.prototype.getWeekOfYear = function() {
	var rd = this.getRataDie(),
		yearStart = this.firstSunday(this.year),
		nextYear;
	
	// if we have a Tishri date, it may be in this year or the previous year
	if (rd < yearStart) {
		yearStart = this.firstSunday(this.year-1);
	} else if (this.month == 6 && this.day > 23) {
		// if we have a late Elul date, it may be in this year, or the next year
		nextYear = this.firstSunday(this.year+1);
		if (rd >= nextYear) {
			yearStart = nextYear;
		}
	}
	
	return Math.floor((rd-yearStart)/7) + 1;
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
		first = this.calcRataDie({
			year: this.year,
			month: this.month,
			day: 1,
			hour: 18,
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
 * Return the unix time equivalent to this Hebrew date instance. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970 (Gregorian). This method only
 * returns a valid number for dates between midnight, Jan 1, 1970 (Gregorian) and  
 * Jan 19, 2038 at 3:14:07am (Gregorian), when the unix time runs out. If this instance 
 * encodes a date outside of that range, this method will return -1.
 * 
 * @return {number} a number giving the unix time, or -1 if the date is outside the
 * valid unix time range
 */
ilib.Date.HebrewDate.prototype.getTime = function() {
	var jd = this.getJulianDay();
	var unix;

	// not earlier than Jan 1, 1970 (Gregorian)
	// or later than Jan 19, 2038 at 3:14:07am (Gregorian)
	if (jd < 2440587.5 || jd > 2465442.634803241) { 
		return -1;
	}

	// avoid the rounding errors in the floating point math by only using
	// the whole days from the rd, and then calculating the milliseconds directly
	var seconds = Math.floor(jd - 2440587.5) * 86400 +
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
ilib.Date.HebrewDate.prototype.setTime = function(millis) {
	var jd = 2440587.5 + millis / 86400000;
	this.setJulianDay(jd);
};

/**
 * Return a Javascript Date object that is equivalent to this Hebrew date
 * object.
 * 
 * @return {Date|undefined} a javascript Date object
 */
ilib.Date.HebrewDate.prototype.getJSDate = function() {
	var unix = this.getTime();
	return (unix === -1) ? undefined : new Date(unix); 
};

/**
 * Return the Julian Day equivalent to this calendar date as a number.
 * 
 * @return {number} the julian date equivalent of this date
 */
ilib.Date.HebrewDate.prototype.getJulianDay = function() {
	return this.getRataDie() + ilib.Date.HebrewDate.epoch;
};

/**
 * Return the name of the calendar that governs this date.
 * 
 * @return {string} a string giving the name of the calendar
 */
ilib.Date.HebrewDate.prototype.getCalendar = function() {
	return "hebrew";
};

/**
 * Return the time zone associated with this Hebrew date, or 
 * undefined if none was specified in the constructor.
 * 
 * @return {string|undefined} the name of the time zone for this date instance
 */
ilib.Date.HebrewDate.prototype.getTimeZone = function() {
	return this.timezone;
};

// register with the factory method
ilib.Date._constructors["hebrew"] = ilib.Date.HebrewDate;