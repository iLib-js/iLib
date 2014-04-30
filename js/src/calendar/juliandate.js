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
 * Construct a new Julian RD date number object. The constructor parameters can 
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
 * <li><i>date</i> - use the given intrinsic Javascript date to initialize this one.
 * </ul>
 *
 * If the constructor is called with another Julian date instance instead of
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
 * Depends directive: !depends juliandate.js
 * 
 * @constructor
 * @param {Object=} params parameters that govern the settings and behaviour of this Julian RD date
 */
ilib.Date.JulianRataDie = function(params) {
	this.cal = params && params.cal || new ilib.Cal.Julian();
	this.rd = undefined;
	ilib.Date.RataDie.call(this, params);
};

ilib.Date.JulianRataDie.prototype = new ilib.Date.RataDie();
ilib.Date.JulianRataDie.prototype.parent = ilib.Date.RataDie;
ilib.Date.JulianRataDie.prototype.constructor = ilib.Date.JulianRataDie;

/**
 * @private
 * @const
 * @type number
 * The difference between a zero Julian day and the first Julian date
 * of Friday, July 16, 622 CE Julian. 
 */
ilib.Date.JulianRataDie.prototype.epoch = 1721422.5;

/**
 * @private
 * Calculate the Rata Die (fixed day) number of the given date from the
 * date components.
 * 
 * @param {Object} date the date components to calculate the RD from
 */
ilib.Date.JulianRataDie.prototype._setDateComponents = function(date) {
	var year = date.year + ((date.year < 0) ? 1 : 0);
	var years = 365 * (year - 1) + Math.floor((year-1)/4);
	var dayInYear = (date.month > 1 ? ilib.Date.JulDate.cumMonthLengths[date.month-1] : 0) +
		date.day +
		(this.cal.isLeapYear(date.year) && date.month > 2 ? 1 : 0);
	var rdtime = (date.hour * 3600000 +
		date.minute * 60000 +
		date.second * 1000 +
		date.millisecond) / 
		86400000;
	
	/*
	console.log("calcRataDie: converting " +  JSON.stringify(parts));
	console.log("getRataDie: year is " +  years);
	console.log("getRataDie: day in year is " +  dayInYear);
	console.log("getRataDie: rdtime is " +  rdtime);
	console.log("getRataDie: rd is " +  (years + dayInYear + rdtime));
	*/
	
	this.rd = years + dayInYear + rdtime;
};

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
 * 
 * <li><i>date</i> - use the given intrinsic Javascript date to initialize this one.
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
		if (params.locale) {
			this.locale = (typeof(params.locale) === 'string') ? new ilib.Locale(params.locale) : params.locale;
			var li = new ilib.LocaleInfo(this.locale);
			this.timezone = li.getTimeZone(); 
		}
		if (params.timezone) {
			this.timezone = params.timezone;
		}
		
		if (params.year || params.month || params.day || params.hour ||
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
 * Return a new RD for this date type using the given params.
 * @param {Object=} params the parameters used to create this rata die instance
 * @returns {ilib.Date.RataDie} the new RD instance for the given params
 */
ilib.Date.JulDate.prototype.newRd = function (params) {
	return new ilib.Date.JulianRataDie(params);
};

/**
 * @private
 * Return the year for the given RD
 * @param {number} rd RD to calculate from 
 * @returns {number} the year for the RD
 */
ilib.Date.JulDate.prototype._calcYear = function(rd) {
	var year = Math.floor((4*(Math.floor(rd)-1) + 1464)/1461);
	
	return (year <= 0) ? year - 1 : year;
};

/**
 * @private
 * Calculate date components for the given RD date.
 */
ilib.Date.JulDate.prototype._calcDateComponents = function () {
	var remainder,
		cumulative,
		rd = this.rd.getRataDie();
	
	this.year = this._calcYear(rd);

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
	
	var jan1 = this.newRd({
		year: this.year,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	remainder = rd + 1 - jan1.getRataDie();
	
	cumulative = this.cal.isLeapYear(this.year) ? 
		ilib.Date.JulDate.cumMonthLengthsLeap : 
		ilib.Date.JulDate.cumMonthLengths; 
	
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
	
	this.millisecond = remainder;
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @return {number} the day of the week
 */
ilib.Date.JulDate.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.rd.getRataDie() + (this.offset || 0));
	return ilib.mod(rd-2, 7);
};

/**
 * Return the name of the calendar that governs this date.
 * 
 * @return {string} a string giving the name of the calendar
 */
ilib.Date.JulDate.prototype.getCalendar = function() {
	return "julian";
};

//register with the factory method
ilib.Date._constructors["julian"] = ilib.Date.JulDate;