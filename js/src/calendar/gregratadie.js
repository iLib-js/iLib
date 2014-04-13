/*
 * gregratadie.js - Represent the RD date number in the Gregorian calendar
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
calendar/gregorian.js 
util/utils.js
util/search.js 
julianday.js 
*/

/**
 * @class
 * 
 * Construct a new Gregorian RD date number object. The constructor parameters can 
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
 * If the constructor is called with another Gregorian date instance instead of
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
 * Depends directive: !depends gregratadie.js
 * 
 * @constructor
 * @param {Object=} params parameters that govern the settings and behaviour of this Gregorian RD date
 */
ilib.Date.GregRataDie = function(params) {
	this.cal = new ilib.Cal.Gregorian();

	if (params) {
		if (typeof(params.date) !== 'undefined') {
			// accept JS Date classes or strings
			var date = params.date;
			if (!(date instanceof Date)) {
				date = new Date(date); // maybe a string initializer?
			}
			this._setTime(date.getTime());
		} else if (typeof(params.unixtime) !== 'undefined') {
			this._setTime(parseInt(params.unixtime, 10));
		} else if (typeof(params.julianday) !== 'undefined') {
			// JD time is defined to be UTC
			this._setJulianDay(parseFloat(params.julianday));
		} else if (params.year || params.month || params.day || params.hour ||
				params.minute || params.second || params.millisecond ) {
			this._setDateComponents(params);
		} else if (typeof(params.rd) !== 'undefined') {
			this.rd = (typeof(params.rd) === 'object' && params.rd instanceof ilib.DateFmt.GregRataDie) ? params.rd.rd : params.rd;
		}
	}
	
	if (typeof(this.rd) === 'undefined') {
		var now = new Date();
		this._setTime(now.getTime());
	}
};

/**
 * @private
 * @const
 * @type Array.<number>
 * the cumulative lengths of each month, for a non-leap year 
 */
ilib.Date.GregRataDie.cumMonthLengths = [
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
ilib.Date.GregRataDie.cumMonthLengthsLeap = [
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
ilib.Date.GregRataDie.epoch = 1721424.5;

/**
 * @private
 * Set the RD of this instance according to the given unix time. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970.
 * 
 * @param {number} millis the unix time to set this date to in milliseconds 
 */
ilib.Date.GregRataDie.prototype._setTime = function(millis) {
	this.rd = 719163 + millis / 86400000;
};

/**
 * @private
 * Set the date of this instance using a Julian Day.
 * @param {number} date the Julian Day to use to set this date
 */
ilib.Date.GregRataDie.prototype._setJulianDay = function (date) {
	var jd = (typeof(date) === 'number') ? new ilib.JulianDay(date) : date;
	
	this.rd = jd.getDate() - ilib.Date.GregRataDie.epoch; 	// Julian Days start at noon
};


/**
 * @private
 * Calculate the Rata Die (fixed day) number of the given date.
 * 
 * @param {Object} date the date components to calculate the RD from
 */
ilib.Date.GregRataDie.prototype._setDateComponents = function(date) {
	var year = parseInt(date.year, 10) || 0;
	var month = parseInt(date.month, 10) || 1;
	var day = parseInt(date.day, 10) || 1;
	var hour = parseInt(date.hour, 10) || 0;
	var minute = parseInt(date.minute, 10) || 0;
	var second = parseInt(date.second, 10) || 0;
	var millisecond = parseInt(date.millisecond, 10) || 0;

	var years = 365 * (year - 1) +
		Math.floor((year-1)/4) -
		Math.floor((year-1)/100) +
		Math.floor((year-1)/400);
	
	var dayInYear = (month > 1 ? ilib.Date.GregRataDie.cumMonthLengths[month-1] : 0) +
		day +
		(this.cal.isLeapYear(year) && month > 2 ? 1 : 0);
	var rdtime = (hour * 3600000 +
		minute * 60000 +
		second * 1000 +
		millisecond) / 
		86400000; 
	/*
	debug("getRataDie: converting " +  JSON.stringify(this));
	debug("getRataDie: year is " +  years);
	debug("getRataDie: day in year is " +  dayInYear);
	debug("getRataDie: rdtime is " +  rdtime);
	debug("getRataDie: rd is " +  (years + dayInYear + rdtime));
	*/
	this.rd = years + dayInYear + rdtime;
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @return {number} the day of the week
 */
ilib.Date.GregRataDie.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.rd);
	return ilib.mod(rd, 7);
};

/**
 * @private
 * Return the rd number of the particular day of the week on or before the 
 * given rd. eg. The Sunday on or before the given rd.
 * @param {number} rd the rata die date of the reference date
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the current date
 * @return {number} the rd of the day of the week
 */
ilib.Date.GregRataDie.prototype._onOrBeforeRd = function(rd, dayOfWeek) {
	return rd - ilib.mod(Math.floor(rd) - dayOfWeek, 7);
};

/**
 * Return the rd number of the particular day of the week on or before the current rd.
 * eg. The Sunday on or before the current rd.
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the current date
 * @return {number} the rd of the day of the week
 */
ilib.Date.GregRataDie.prototype.onOrBeforeRd = function(dayOfWeek) {
	return this._onOrBeforeRd(this.rd, dayOfWeek);
};

/**
 * Return the rd number of the particular day of the week on or before the current rd.
 * eg. The Sunday on or before the current rd.
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @return {number} the day of the week
 */
ilib.Date.GregRataDie.prototype.onOrAfterRd = function(dayOfWeek) {
	return this._onOrBeforeRd(this.rd+6, dayOfWeek);
};

/**
 * Return the rd number of the particular day of the week before the current rd.
 * eg. The Sunday before the current rd.
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @return {number} the day of the week
 */
ilib.Date.GregRataDie.prototype.beforeRd = function(dayOfWeek) {
	return this._onOrBeforeRd(this.rd-1, dayOfWeek);
};

/**
 * Return the rd number of the particular day of the week after the current rd.
 * eg. The Sunday after the current rd.
 * @param {number} dayOfWeek the day of the week that is being sought relative 
 * to the reference date
 * @return {number} the day of the week
 */
ilib.Date.GregRataDie.prototype.afterRd = function(dayOfWeek) {
	return this._onOrBeforeRd(this.rd+7, dayOfWeek);
};

/*
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week before the current date that is being sought
 * @return {ilib.Date.GregRataDie} the date being sought
 *
ilib.Date.GregRataDie.prototype.before = function (dow) {
	return new ilib.Date.GregRataDie({rd: this.beforeRd(this.rd, dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week after the current date that is being sought
 * @return {ilib.Date.GregRataDie} the date being sought
 *
ilib.Date.GregRataDie.prototype.after = function (dow) {
	return new ilib.Date.GregRataDie({rd: this.afterRd(this.rd, dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week on or before the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or before the current date that is being sought
 * @return {ilib.Date.GregRataDie} the date being sought
 *
ilib.Date.GregRataDie.prototype.onOrBefore = function (dow) {
	return new ilib.Date.GregRataDie({rd: this._onOrBeforeRd(this.rd, dow)});
};

/**
 * Return a new Gregorian date instance that represents the first instance of the 
 * given day of the week on or after the current date. The day of the week is encoded
 * as a number where 0 = Sunday, 1 = Monday, etc.
 * 
 * @param {number} dow the day of the week on or after the current date that is being sought
 * @return {ilib.Date.GregRataDie} the date being sought
 *
ilib.Date.GregRataDie.prototype.onOrAfter = function (dow) {
	return new ilib.Date.GregRataDie({rd: this.onOrAfterRd(this.rd, dow)});
};
*/

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
ilib.Date.GregRataDie.prototype.getTime = function() {
	// earlier than Jan 1, 1970
	// or later than Jan 19, 2038 at 3:14:07am
	if (this.rd < 719163 || this.rd > 744018.134803241) { 
		return -1;
	}

	// avoid the rounding errors in the floating point math by only using
	// the whole days from the rd, and then calculating the milliseconds directly
	return Math.round((this.rd - 719163) * 86400000);
};

/**
 * Return the Julian Day equivalent to this calendar date as a number.
 * This returns the julian day in the local time zone.
 * 
 * @return {number} the julian date equivalent of this date
 */
ilib.Date.GregRataDie.prototype.getJulianDay = function() {
	return this.rd + ilib.Date.GregRataDie.epoch;
};

/**
 * Return the Rata Die (fixed day) number of this RD date.
 * 
 * @return {number} the rd date as a number
 */
ilib.Date.GregRataDie.prototype.getRataDie = function() {
	return this.rd;
};

/**
 * Calculate date components for this RD date.
 * @return {Object} object containing the component fields
 */
ilib.Date.GregRataDie.prototype.getDateComponents = function () {
	var days400,
		days100,
		days4,
		years400,
		years100,
		years4,
		years1,
		remainder,
		cumulative,
		ret = {};
	
	years400 = Math.floor((this.rd - 1) / 146097);
	days400 = ilib.mod((this.rd - 1), 146097);
	years100 = Math.floor(days400 / 36524);
	days100 = ilib.mod(days400, 36524);
	years4 = Math.floor(days100 / 1461);
	days4 = ilib.mod(days100, 1461);
	years1 = Math.floor(days4 / 365);
	
	/*
	console.log("rd starts out " + this.rd);
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
	var yearStart = new ilib.Date.GregRataDie(ret);
	remainder = this.rd - yearStart.getRataDie() + 1;
	
	cumulative = this.cal.isLeapYear(ret.year) ? 
		ilib.Date.GregRataDie.cumMonthLengthsLeap : 
		ilib.Date.GregRataDie.cumMonthLengths; 
	
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

