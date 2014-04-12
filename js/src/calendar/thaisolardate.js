/*
 * thaisolardate.js - Represent a date in the ThaiSolar calendar
 * 
 * Copyright © 2013, JEDLSoft
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
calendar/gregoriandate.js
calendar/thaisolar.js
util/utils.js
util/search.js 
localeinfo.js 
julianday.js 
*/

/**
 * @class
 * 
 * Construct a new Thai solar date object. The constructor parameters can 
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
 * of this Thai solar date. The date/time is kept in the local time. The time zone
 * is used later if this date is formatted according to a different time zone and
 * the difference has to be calculated, or when the date format has a time zone
 * component in it.
 * 
 * <li><i>locale</i> - locale for this Thai solar date. If the time zone is not 
 * given, it can be inferred from this locale. For locales that span multiple
 * time zones, the one with the largest population is chosen as the one that 
 * represents the locale. 
 * </ul>
 *
 * If the constructor is called with another Thai solar date instance instead of
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
 * Depends directive: !depends thaisolardate.js
 * 
 * @constructor
 * @extends ilib.Date.GregDate
 * @param {Object=} params parameters that govern the settings and behaviour of this Thai solar date
 */
ilib.Date.ThaiSolarDate = function(params) {
	ilib.Date.GregDate.call(this, params);
	this.cal = new ilib.Cal.ThaiSolar();
};

ilib.Date.ThaiSolarDate.prototype = new ilib.Date.GregDate();
ilib.Date.ThaiSolarDate.prototype.parent = ilib.Date.GregDate.prototype;
ilib.Date.ThaiSolarDate.prototype.constructor = ilib.Date.ThaiSolarDate;

/**
 * @private
 * @const
 * @type number
 * the difference between a zero Julian day and the zero Thai Solar date.
 * This is some 543 years before the start of the Gregorian epoch. 
 */
ilib.Date.ThaiSolarDate.epoch = 1523097.5;

/**
 * @private
 * Return the Rata Die (fixed day) number for the given date.
 * @param {Object} parts the parts to calculate with
 * @return {number} the rd date as a number
 */
ilib.Date.ThaiSolarDate.prototype.calcRataDie = function(parts) {
	var gregorianRd = this.parent.calcRataDie.call(this, {
		year: parts.year - 543,
		month: parts.month,
		day: parts.day,
		hour: parts.hour,
		minute: parts.minute,
		second: parts.second,
		millisecond: parts.millisecond
	});
	// there is 198327 days difference between the Thai solar and 
	// Gregorian epochs which is equivalent to 543 years
	return gregorianRd + 198327;
};

/**
 * @private
 * Calculate date components for the given RD date.
 * @param {number} rd the RD date to calculate components for
 * @return {Object} object containing the component fields
 */
ilib.Date.ThaiSolarDate.prototype.calcComponents = function (rd) {
	// there is 198327 days difference between the Thai solar and 
	// Gregorian epochs which is equivalent to 543 years
	var gregorianComponents = this.parent.calcComponents.call(this, rd - 198327);
	
	gregorianComponents.year += 543;
	return gregorianComponents;
};

/**
 * Set the date of this instance using a Julian Day.
 * @param {number} date the Julian Day to use to set this date
 */
ilib.Date.ThaiSolarDate.prototype.setJulianDay = function (date) {
	var jd = (typeof(date) === 'number') ? new ilib.JulianDay(date) : date,
		rd;	// rata die -- # of days since the beginning of the calendar
	
	rd = jd.getDate() - ilib.Date.ThaiSolarDate.epoch; 	// Julian Days start at noon
	this.setRd(rd);
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @return {number} the day of the week
 */
ilib.Date.ThaiSolarDate.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.getRataDie() - 198327);
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
ilib.Date.ThaiSolarDate.prototype.onOrBeforeRd = function(rd, dayOfWeek) {
	return rd - ilib.mod(Math.floor(rd - 198327) - dayOfWeek, 7);
};

/**
 * Return the unix time equivalent to this ThaiSolar date instance. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970. This method only
 * returns a valid number for dates between midnight, Jan 1, 1970 and  
 * Jan 19, 2038 at 3:14:07am when the unix time runs out. If this instance 
 * encodes a date outside of that range, this method will return -1.
 * 
 * @return {number} a number giving the unix time, or -1 if the date is outside the
 * valid unix time range
 */
ilib.Date.ThaiSolarDate.prototype.getTime = function() {
	if (typeof(this.unixtime) === 'number') {
		return this.unixtime;
	}
	// not stored, so calculate it
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
	if (rd < 917490 || rd > 942345.134803241) { 
		return -1;
	}

	// avoid the rounding errors in the floating point math by only using
	// the whole days from the rd, and then calculating the milliseconds directly
	var seconds = Math.floor(rd - 917490) * 86400 + 
		this.hour * 3600 +
		this.minute * 60 +
		this.second;
	this.unixtime = seconds * 1000 + this.millisecond;
	
	return this.unixtime;
};

/**
 * Set the time of this instance according to the given unix time. Unix time is
 * the number of milliseconds since midnight on Jan 1, 1970.
 * 
 * @param {number} millis the unix time to set this date to in milliseconds 
 */
ilib.Date.ThaiSolarDate.prototype.setTime = function(millis) {
	var rd = 917490 + millis / 86400000;
	this.setRd(rd);
};

/**
 * Return the Julian Day equivalent to this calendar date as a number.
 * 
 * @return {number} the julian date equivalent of this date
 */
ilib.Date.ThaiSolarDate.prototype.getJulianDay = function() {
	return this.getRataDie() + ilib.Date.ThaiSolarDate.epoch;
};

/**
 * Return the name of the calendar that governs this date.
 * 
 * @return {string} a string giving the name of the calendar
 */
ilib.Date.ThaiSolarDate.prototype.getCalendar = function() {
	return "thaisolar";
};

//register with the factory method
ilib.Date._constructors["thaisolar"] = ilib.Date.ThaiSolarDate;

