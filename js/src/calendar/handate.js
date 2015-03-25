/*
 * handate.js - Represent a date in the Han algorithmic calendar
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
date.js
calendar/gregoriandate.js 
calendar/han.js
calendar/astro.js 
util/utils.js
util/math.js
localeinfo.js 
locale.js
timezone.js
*/

var ilib = ilib || {Date:{}};

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
	this.rd = undefined;
	if (params && params.cal) {
		this.cal = params.cal;
		ilib.Date.RataDie.call(this, params);
		if (params && typeof(params.callback) === 'function') {
			params.callback(this);
		}
	} else {
		new ilib.Cal.Han({
			sync: params && params.sync,
			loadParams: params && params.loadParams,
			callback: ilib.bind(this, function(c) {
				this.cal = c;
				ilib.Date.RataDie.call(this, params);
				if (params && typeof(params.callback) === 'function') {
					params.callback(this);
				}
			})
		});
	}
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
	var m2 = ilib.Cal.Han._newMoonOnOrAfter(calc.m1+1);
	var newYears;
	this.leapYear = (Math.round((calc.m2 - calc.m1) / 29.530588853000001) === 12);
	if (this.leapYear && (ilib.Cal.Han._noMajorST(calc.m1) || ilib.Cal.Han._noMajorST(m2)) ) {
		newYears = ilib.Cal.Han._newMoonOnOrAfter(m2+1);
	} else {
		newYears = m2;
	}

	var priorNewMoon = ilib.Cal.Han._newMoonOnOrAfter(calc.m1 + date.month * 29); // this is a julian day
	this.priorLeapMonth = ilib.Date.HanDate._priorLeapMonth(newYears, ilib.Cal.Han._newMoonBefore(priorNewMoon));
	this.leapMonth = (this.leapYear && ilib.Cal.Han._noMajorST(priorNewMoon) && !this.priorLeapMonth);

	var rdtime = (date.hour * 3600000 +
		date.minute * 60000 +
		date.second * 1000 +
		date.millisecond) /
		86400000;
	
	/*
	console.log("getRataDie: converting " +  JSON.stringify(date) + " to an RD");
	console.log("getRataDie: year is " +  date.year + " plus cycle " + date.cycle);
	console.log("getRataDie: isLeapYear is " +  this.leapYear);
	console.log("getRataDie: priorNewMoon is " +  priorNewMoon);
	console.log("getRataDie: day in month is " +  date.day);
	console.log("getRataDie: rdtime is " +  rdtime);
	console.log("getRataDie: rd is " +  (priorNewMoon + date.day - 1 + rdtime));
	*/
	
	this.rd = priorNewMoon + date.day - 1 + rdtime - ilib.Date.RataDie.gregorianEpoch;
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
	return rd - ilib.mod(Math.floor(rd) - dayOfWeek, 7);
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
	}
	
	new ilib.Cal.Han({
		sync: params && typeof(params) === 'boolean' ? params.sync : true,
		loadParams: params && params.loadParams,
		callback: ilib.bind(this, function (cal) {
			this.cal = cal;
	
			if (params && (params.year || params.month || params.day || params.hour ||
				params.minute || params.second || params.millisecond || params.cycle || params.cycleYear)) {
				if (typeof(params.cycle) !== 'undefined') {
					/**
					 * Cycle number in the Han calendar.
					 * @type number
					 */
					this.cycle = parseInt(params.cycle, 10) || 0;
					
					var year = (typeof(params.year) !== 'undefined' ? parseInt(params.year, 10) : parseInt(params.cycleYear, 10)) || 0;
					
					/**
					 * Year in the Han calendar.
					 * @type number
					 */
					this.year = ilib.Cal.Han._getElapsedYear(year, this.cycle);
				} else {
					if (typeof(params.year) !== 'undefined') {
						this.year = parseInt(params.year, 10) || 0;
						this.cycle = Math.floor((this.year - 1) / 60);
					} else {
						this.year = this.cycle = 0;
					}
				}	
				
				/**
				 * The month number, ranging from 1 to 13
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
			
				// derived properties
				
				/**
				 * Year in the cycle of the Han calendar
				 * @type number
				 */
				this.cycleYear = ilib.amod(this.year, 60); 

				/**
				 * The day of the year. Ranges from 1 to 384.
				 * @type number
				 */
				this.dayOfYear = parseInt(params.dayOfYear, 10);
	
				if (typeof(params.dst) === 'boolean') {
					this.dst = params.dst;
				}
				
				this.newRd({
					cal: this.cal,
					cycle: this.cycle,
					year: this.year,
					month: this.month,
					day: this.day,
					hour: this.hour,
					minute: this.minute,
					second: this.second,
					millisecond: this.millisecond,
					sync: params && typeof(params.sync) === 'boolean' ? params.sync : true,
					loadParams: params && params.loadParams,
					callback: ilib.bind(this, function (rd) {
						if (rd) {
							this.rd = rd;
							
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
									cal: this.cal,
									rd: this.rd.getRataDie() - this.offset
								});
								this._calcLeap();
							} else {
								// re-use the derived properties from the RD calculations
								this.leapMonth = this.rd.leapMonth;
								this.priorLeapMonth = this.rd.priorLeapMonth;
								this.leapYear = this.rd.leapYear;
							}
						}
						
						if (!this.rd) {
							this.rd = this.newRd(ilib.merge(params || {}, {
								cal: this.cal
							}));
							this._calcDateComponents();
						}
						
						if (params && typeof(params.onLoad) === 'function') {
							params.onLoad(this);
						}
					})
				});
			} else {
				if (!this.rd) {
					this.rd = this.newRd(ilib.merge(params || {}, {
						cal: this.cal
					}));
					this._calcDateComponents();
				}
				
				if (params && typeof(params.onLoad) === 'function') {
					params.onLoad(this);
				}
			}
		})
	});

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
 * @param {number} jd1 first julian day
 * @param {number} jd2 second julian day
 * @returns {boolean} true if there is a leap month earlier in the same year 
 * as the given months 
 */
ilib.Date.HanDate._priorLeapMonth = function(jd1, jd2) {
	return jd2 >= jd1 &&
		(ilib.Date.HanDate._priorLeapMonth(jd1, ilib.Cal.Han._newMoonBefore(jd2)) ||
				ilib.Cal.Han._noMajorST(jd2));
};

/**
 * Return the year for the given RD
 * @protected
 * @param {number} rd RD to calculate from 
 * @returns {number} the year for the RD
 */
ilib.Date.HanDate.prototype._calcYear = function(rd) {
	var gregdate = new ilib.Date.GregDate({
		rd: rd,
		timezone: this.timezone
	});
	var hanyear = gregdate.year + 2697;
	var newYears = this.cal.newYears(hanyear);
	return hanyear - ((rd + ilib.Date.RataDie.gregorianEpoch < newYears) ? 1 : 0);
};

/** 
 * @private 
 * Calculate the leap year and months from the RD.
 */
ilib.Date.HanDate.prototype._calcLeap = function() {
	var jd = this.rd.getRataDie() + ilib.Date.RataDie.gregorianEpoch;
	
	var calc = ilib.Cal.Han._leapYearCalc(this.year);
	var m2 = ilib.Cal.Han._newMoonOnOrAfter(calc.m1+1);
	this.leapYear = Math.round((calc.m2 - calc.m1) / 29.530588853000001) === 12;
	
	var newYears = (this.leapYear &&
		(ilib.Cal.Han._noMajorST(calc.m1) || ilib.Cal.Han._noMajorST(m2))) ?
				ilib.Cal.Han._newMoonOnOrAfter(m2+1) : m2;
	
	var m = ilib.Cal.Han._newMoonBefore(jd + 1);
	this.priorLeapMonth = ilib.Date.HanDate._priorLeapMonth(newYears, ilib.Cal.Han._newMoonBefore(m));
	this.leapMonth = (this.leapYear && ilib.Cal.Han._noMajorST(m) && !this.priorLeapMonth);
};

/**
 * @private
 * Calculate date components for the given RD date.
 */
ilib.Date.HanDate.prototype._calcDateComponents = function () {
	var remainder,
		jd = this.rd.getRataDie() + ilib.Date.RataDie.gregorianEpoch;

	// console.log("HanDate._calcDateComponents: calculating for jd " + jd);

	if (typeof(this.offset) === "undefined") {
		// now offset the jd by the time zone, then recalculate in case we were 
		// near the year boundary
		if (!this.tz) {
			this.tz = new ilib.TimeZone({id: this.timezone});
		}
		this.offset = this.tz.getOffsetMillis(this) / 86400000;
	}
	
	if (this.offset !== 0) {
		jd += this.offset;
	}

	// use the Gregorian calendar objects as a convenient way to short-cut some
	// of the date calculations
	
	var gregyear = ilib.Date.GregDate._calcYear(this.rd.getRataDie());
	this.year = gregyear + 2697;
	var calc = ilib.Cal.Han._leapYearCalc(this.year);
	var m2 = ilib.Cal.Han._newMoonOnOrAfter(calc.m1+1);
	this.leapYear = Math.round((calc.m2 - calc.m1) / 29.530588853000001) === 12;
	var newYears = (this.leapYear &&
		(ilib.Cal.Han._noMajorST(calc.m1) || ilib.Cal.Han._noMajorST(m2))) ?
				ilib.Cal.Han._newMoonOnOrAfter(m2+1) : m2;
	
	// See if it's between Jan 1 and the Chinese new years of that Gregorian year. If
	// so, then the Han year is actually the previous one
	if (jd < newYears) {
		this.year--;
		calc = ilib.Cal.Han._leapYearCalc(this.year);
		m2 = ilib.Cal.Han._newMoonOnOrAfter(calc.m1+1);
		this.leapYear = Math.round((calc.m2 - calc.m1) / 29.530588853000001) === 12;
		newYears = (this.leapYear &&
			(ilib.Cal.Han._noMajorST(calc.m1) || ilib.Cal.Han._noMajorST(m2))) ?
					ilib.Cal.Han._newMoonOnOrAfter(m2+1) : m2;
	}
	// month is elapsed month, not the month number + leap month boolean
	var m = ilib.Cal.Han._newMoonBefore(jd + 1);
	this.month = Math.round((m - calc.m1) / 29.530588853000001);
	
	this.priorLeapMonth = ilib.Date.HanDate._priorLeapMonth(newYears, ilib.Cal.Han._newMoonBefore(m));
	this.leapMonth = (this.leapYear && ilib.Cal.Han._noMajorST(m) && !this.priorLeapMonth);
	
	this.cycle = Math.floor((this.year - 1) / 60);
	this.cycleYear = ilib.amod(this.year, 60);
	this.day = ilib.Date._floorToJD(jd) - m + 1;

	/*
	console.log("HanDate._calcDateComponents: year is " + this.year);
	console.log("HanDate._calcDateComponents: isLeapYear is " + this.leapYear);
	console.log("HanDate._calcDateComponents: cycle is " + this.cycle);
	console.log("HanDate._calcDateComponents: cycleYear is " + this.cycleYear);
	console.log("HanDate._calcDateComponents: month is " + this.month);
	console.log("HanDate._calcDateComponents: isLeapMonth is " + this.leapMonth);
	console.log("HanDate._calcDateComponents: day is " + this.day);
	*/

	// floor to the start of the julian day
	remainder = jd - ilib.Date._floorToJD(jd);
	
	// console.log("HanDate._calcDateComponents: time remainder is " + remainder);
	
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
 * Return the year within the Chinese cycle of this date. Cycles are 60 
 * years long, and the value returned from this method is the number of the year 
 * within this cycle. The year returned from getYear() is the total elapsed 
 * years since the beginning of the Chinese epoch and does not include 
 * the cycles. 
 * 
 * @return {number} the year within the current Chinese cycle
 */
ilib.Date.HanDate.prototype.getCycleYears = function() {
	return this.cycleYear;
};

/**
 * Return the Chinese cycle number of this date. Cycles are 60 years long,
 * and the value returned from getCycleYear() is the number of the year 
 * within this cycle. The year returned from getYear() is the total elapsed 
 * years since the beginning of the Chinese epoch and does not include 
 * the cycles. 
 * 
 * @return {number} the current Chinese cycle
 */
ilib.Date.HanDate.prototype.getCycles = function() {
	return this.cycle;
};

/**
 * Return whether the year of this date is a leap year in the Chinese Han 
 * calendar. 
 * 
 * @return {boolean} true if the year of this date is a leap year in the 
 * Chinese Han calendar. 
 */
ilib.Date.HanDate.prototype.isLeapYear = function() {
	return this.leapYear;
};

/**
 * Return whether the month of this date is a leap month in the Chinese Han 
 * calendar.
 * 
 * @return {boolean} true if the month of this date is a leap month in the 
 * Chinese Han calendar.
 */
ilib.Date.HanDate.prototype.isLeapMonth = function() {
	return this.leapMonth;
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @return {number} the day of the week
 */
ilib.Date.HanDate.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.rd.getRataDie() + (this.offset || 0));
	return ilib.mod(rd, 7);
};

/**
 * Return the ordinal day of the year. Days are counted from 1 and proceed linearly up to 
 * 365, regardless of months or weeks, etc. That is, Farvardin 1st is day 1, and 
 * December 31st is 365 in regular years, or 366 in leap years.
 * @return {number} the ordinal day of the year
 */
ilib.Date.HanDate.prototype.getDayOfYear = function() {
	var newYears = this.cal.newYears(this.year);
	var priorNewMoon = ilib.Cal.Han._newMoonOnOrAfter(newYears + (this.month -1) * 29);
	return priorNewMoon - newYears + this.day;
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

module.exports = function(loader) {
	loader.require([
        "ilibglobal.js",
        "locale.js",
        "localeinfo.js",
        "timezone.js",
        "date.js",
        "util/math.js",
        "util/utils.js",
        "calendar/han.js",
        "calendar/gregoriandate.js"
        "calendar/astro.js" 
    ]);
	return ilib;
};