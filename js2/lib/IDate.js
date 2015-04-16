/*
 * IDate.js - Represent a date in any calendar. This class is subclassed for each calendar.
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

/* !depends ilib.js Locale.js LocaleInfo.js JulianDay.js JSUtils.js Calendar.js */

var ilib = require("./ilib.js");
var JSUtils = require("./JSUtils.js");

var Locale = require("./Locale.js");
var LocaleInfo = require("./LocaleInfo.js");
var JulianDay = require("./JulianDay.js");
var Calendar = require("./Calendar.js");

/**
 * @class
 * Construct a new date object. Each parameter is a numeric value, but its 
 * accepted range can vary depending on the subclass of this date. For example,
 * Gregorian months can be from 1 to 12, whereas months in the Hebrew calendar
 * can be from 1 to 13.<p>
 * 
 * Note that this really calls the newInstance factory method underneath in 
 * order to instantiate the correct subclass of IDate.
 * 
 * Depends directive: !depends IDate.js
 * 
 * @constructor
 * @param {Object=} options The date components to initialize this date with
 */
var IDate = function(options) {
	if (!options || typeof(options.noinstance) === 'undefined') {
		return IDate.newInstance(options);
	}
};

/* place for the subclasses to put their constructors so that the factory method
 * can find them. Do this to add your date after it's defined: 
 * IDate._constructors["mytype"] = IDate.MyTypeConstructor;
 */
IDate._constructors = {};

/**
 * Map calendar names to classes to initialize in the dynamic code model.
 * TODO: Need to figure out some way that this doesn't have to be updated by hand.
 * @private
 */
IDate._dynMap = {
	"coptic":       "Coptic",
	"ethiopic":     "Ethiopic",
	"gregorian":    "Gregorian",
	"han":          "Han",
	"hebrew":       "Hebrew",
	"islamic":      "Islamic",
	"julian":       "Julian",
	"persian":      "Persian",
	"persian-algo": "PersianAlgo",
	"thaisolar":    "ThaiSolar"
};

/**
 * Dynamically load the code for a calendar and calendar class if necessary.
 * @protected
 */
IDate._dynLoadCalendar = function (name) {
	if (!IDate._constructors[name]) {
		var entry = IDate._dynMap[name];
		if (entry) {
			IDate._constructors[name] = require("./" + entry + "Date.js");
		}
	}
	return IDate._constructors[name];
};

/**
 * Factory method to create a new instance of a date subclass.<p>
 * 
 * The options parameter can be an object that contains the following
 * properties:
 * 
 * <ul>
 * <li><i>type</i> - specify the type/calendar of the date desired. The
 * list of valid values changes depending on which calendars are 
 * defined. When assembling your iliball.js, include those date type 
 * you wish to use in your program or web page, and they will register 
 * themselves with this factory method. The "gregorian",
 * and "julian" calendars are all included by default, as they are the
 * standard calendars for much of the world. If not specified, the type
 * of the date returned is the one that is appropriate for the locale.
 * This property may also be given as "calendar" instead of "type".
 * </ul>
 * 
 * The options object is also passed down to the date constructor, and 
 * thus can contain the the properties as the date object being instantiated.
 * See the documentation for {@link GregorianDate}, and other
 * subclasses for more details on other parameter that may be passed in.<p>
 * 
 * Please note that if you do not give the type parameter, this factory
 * method will create a date object that is appropriate for the calendar
 * that is most commonly used in the specified or current ilib locale. 
 * For example, in Thailand, the most common calendar is the Thai solar 
 * calendar. If the current locale is "th-TH" (Thai for Thailand) and you 
 * use this factory method to construct a new date without specifying the
 * type, it will automatically give you back an instance of 
 * {@link ThaiSolarDate}. This is convenient because you do not 
 * need to know which locales use which types of dates. In fact, you 
 * should always use this factory method to make new date instances unless
 * you know that you specifically need a date in a particular calendar.<p>
 * 
 * Also note that when you pass in the date components such as year, month,
 * day, etc., these components should be appropriate for the given date
 * being instantiated. That is, in our Thai example in the previous
 * paragraph, the year and such should be given as a Thai solar year, not
 * the Gregorian year that you get from the Javascript Date class. In
 * order to initialize a date instance when you don't know what subclass
 * will be instantiated for the locale, use a parameter such as "unixtime" 
 * or "julianday" which are unambiguous and based on UTC time, instead of
 * the year/month/date date components. The date components for that UTC 
 * time will be calculated and the time zone offset will be automatically 
 * factored in.
 * 
 * @static
 * @param {Object=} options options controlling the construction of this instance, or
 * undefined to use the default options
 * @return {IDate} an instance of a calendar object of the appropriate type 
 */
IDate.newInstance = function(options) {
	var locale,
		type,
		cons;

	if (options) {
		if (options.locale) {
			locale = (typeof(options.locale) === 'string') ? new Locale(options.locale) : options.locale;
		}
		
		type = options.type || options.calendar;
	}
	
	if (!locale) {
		locale = new Locale();	// default locale
	}

	if (!type) {
		var info = new LocaleInfo(locale);
		type = info.getCalendar();
	}
	
	if (ilib.isDynCode()) {
		IDate._dynLoadCalendar(type);
		Calendar._dynLoadCalendar(type);
		if (!IDate.Gregorian || IDate.Gregorian.stub) {
			IDate._dynLoadCalendar("gregorian"); // always need this available
			Calendar._dynLoadCalendar("gregorian"); // always need this available
		}
	}
	
	cons = IDate._constructors[type];
	
	// pass the same options through to the constructor so the subclass
	// has the ability to do something with if it needs to
	return cons && new cons(options);
};

/**
 * Convert JavaScript Date objects and other types into native Dates. This accepts any
 * string or number that can be translated by the JavaScript Date class,
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)
 * any JavaScript Date classed object, any IDate subclass, an JulianDay object, an object
 * containing the normal options to initialize an IDate instance, or null (will 
 * return null or undefined if input is null or undefined). Normal output is 
 * a standard native subclass of the IDate object as appropriate for the locale.
 * 
 * @static
 * @private
 * @param {IDate|Object|JulianDay|Date|string|number=} inDate The input date object, string or Number.
 * @param {IString|string=} timezone timezone to use if a new date object is created
 * @param {Locale|string=} locale locale to use when constructing an IDate
 * @return {IDate|null|undefined} an IDate subclass equivalent to the given inDate
 */
IDate._dateToIlib = function(inDate, timezone, locale) {
	if (typeof(inDate) === 'undefined' || inDate === null) {
		return inDate;
	}
	if (inDate instanceof IDate) {
		return inDate;
	}
	if (JSUtils.isDate(inDate)) {
		return IDate.newInstance({
			unixtime: inDate.getTime(),
			timezone: timezone,
			locale: locale
		});
	}
	if (inDate instanceof JulianDay) {
		return IDate.newInstance({
			jd: inDate,
			timezone: timezone,
			locale: locale
		});
	}
	if (typeof(inDate) === 'number') {
		return IDate.newInstance({
			unixtime: inDate,
			timezone: timezone,
			locale: locale
		});
	}
	if (typeof(inDate) === 'object') {
		return IDate.newInstance(inDate);
	}
	if (typeof(inDate) === 'string') {
		inDate = new Date(inDate);
	}
	return IDate.newInstance({
		unixtime: inDate.getTime(),
		timezone: timezone,
		locale: locale
	});
};

IDate.prototype = {
	getType: function() {
		return "date";
	},
	
	/**
	 * Return the unix time equivalent to this date instance. Unix time is
	 * the number of milliseconds since midnight on Jan 1, 1970 UTC (Gregorian). This 
	 * method only returns a valid number for dates between midnight, 
	 * Jan 1, 1970 UTC (Gregorian) and Jan 19, 2038 at 3:14:07am UTC (Gregorian) when 
	 * the unix time runs out. If this instance encodes a date outside of that range, 
	 * this method will return -1. For date types that are not Gregorian, the point 
	 * in time represented by this date object will only give a return value if it
	 * is in the correct range in the Gregorian calendar as given previously.
	 * 
	 * @return {number} a number giving the unix time, or -1 if the date is outside the
	 * valid unix time range
	 */
	getTime: function() {
		return this.rd.getTime(); 
	},
	
	/**
	 * Return the extended unix time equivalent to this Gregorian date instance. Unix time is
	 * the number of milliseconds since midnight on Jan 1, 1970 UTC. Traditionally unix time
	 * (or the type "time_t" in C/C++) is only encoded with an unsigned 32 bit integer, and thus 
	 * runs out on Jan 19, 2038. However, most Javascript engines encode numbers well above 
	 * 32 bits and the Date object allows you to encode up to 100 million days worth of time 
	 * after Jan 1, 1970, and even more interestingly, 100 million days worth of time before
	 * Jan 1, 1970 as well. This method returns the number of milliseconds in that extended 
	 * range. If this instance encodes a date outside of that range, this method will return
	 * NaN.
	 * 
	 * @return {number} a number giving the extended unix time, or Nan if the date is outside 
	 * the valid extended unix time range
	 */
	getTimeExtended: function() {
		return this.rd.getTimeExtended();
	},

	/**
	 * Set the time of this instance according to the given unix time. Unix time is
	 * the number of milliseconds since midnight on Jan 1, 1970.
	 * 
	 * @param {number} millis the unix time to set this date to in milliseconds 
	 */
	setTime: function(millis) {
		this.rd = this.newRd({
			unixtime: millis,
			cal: this.cal
		});
		this._calcDateComponents();
	},
	
	getDays: function() {
		return this.day;
	},
	getMonths: function() {
		return this.month;
	},
	getYears: function() {
		return this.year;
	},
	getHours: function() {
		return this.hour;
	},
	getMinutes: function() {
		return this.minute;
	},
	getSeconds: function() {
		return this.second;
	},
	getMilliseconds: function() {
		return this.millisecond;
	},

	setDays: function(day) {
		this.day = parseInt(day, 10) || 1;
		this.rd._setDateComponents(this);
	},
	setMonths: function(month) {
		this.month = parseInt(month, 10) || 1;
		this.rd._setDateComponents(this);
	},
	setYears: function(year) {
		this.year = parseInt(year, 10) || 0;
		this.rd._setDateComponents(this);
	},
	
	setHours: function(hour) {
		this.hour = parseInt(hour, 10) || 0;
		this.rd._setDateComponents(this);
	},
	setMinutes: function(minute) {
		this.minute = parseInt(minute, 10) || 0;
		this.rd._setDateComponents(this);
	},
	setSeconds: function(second) {
		this.second = parseInt(second, 10) || 0;
		this.rd._setDateComponents(this);
	},
	setMilliseconds: function(milli) {
		this.millisecond = parseInt(milli, 10) || 0;
		this.rd._setDateComponents(this);
	},
	
	/**
	 * Return a new date instance in the current calendar that represents the first instance 
	 * of the given day of the week before the current date. The day of the week is encoded
	 * as a number where 0 = Sunday, 1 = Monday, etc.
	 * 
	 * @param {number} dow the day of the week before the current date that is being sought
	 * @return {IDate} the date being sought
	 */
	before: function (dow) {
		return this.cal.newDateInstance({
			rd: this.rd.before(dow, this.offset),
			timezone: this.timezone
		});
	},
	
	/**
	 * Return a new date instance in the current calendar that represents the first instance 
	 * of the given day of the week after the current date. The day of the week is encoded
	 * as a number where 0 = Sunday, 1 = Monday, etc.
	 * 
	 * @param {number} dow the day of the week after the current date that is being sought
	 * @return {IDate} the date being sought
	 */
	after: function (dow) {
		return this.cal.newDateInstance({
			rd: this.rd.after(dow, this.offset),
			timezone: this.timezone
		});
	},

	/**
	 * Return a new Gregorian date instance that represents the first instance of the 
	 * given day of the week on or before the current date. The day of the week is encoded
	 * as a number where 0 = Sunday, 1 = Monday, etc.
	 * 
	 * @param {number} dow the day of the week on or before the current date that is being sought
	 * @return {IDate} the date being sought
	 */
	onOrBefore: function (dow) {
		return this.cal.newDateInstance({
			rd: this.rd.onOrBefore(dow, this.offset),
			timezone: this.timezone
		});
	},

	/**
	 * Return a new Gregorian date instance that represents the first instance of the 
	 * given day of the week on or after the current date. The day of the week is encoded
	 * as a number where 0 = Sunday, 1 = Monday, etc.
	 * 
	 * @param {number} dow the day of the week on or after the current date that is being sought
	 * @return {IDate} the date being sought
	 */
	onOrAfter: function (dow) {
		return this.cal.newDateInstance({
			rd: this.rd.onOrAfter(dow, this.offset),
			timezone: this.timezone
		});
	},
	
	/**
	 * Return a Javascript Date object that is equivalent to this date
	 * object.
	 * 
	 * @return {Date|undefined} a javascript Date object
	 */
	getJSDate: function() {
		var unix = this.rd.getTimeExtended();
		return isNaN(unix) ? undefined : new Date(unix); 
	},
	
	/**
	 * Return the Rata Die (fixed day) number of this date.
	 * 
	 * @protected
	 * @return {number} the rd date as a number
	 */
	getRataDie: function() {
		return this.rd.getRataDie();
	},
	
	/**
	 * Set the date components of this instance based on the given rd.
	 * @protected
	 * @param {number} rd the rata die date to set
	 */
	setRd: function (rd) {
		this.rd = this.newRd({
			rd: rd,
			cal: this.cal
		});
		this._calcDateComponents();
	},
	
	/**
	 * Return the Julian Day equivalent to this calendar date as a number.
	 * 
	 * @return {number} the julian date equivalent of this date
	 */
	getJulianDay: function() {
		return this.rd.getJulianDay();
	},
	
	/**
	 * Set the date of this instance using a Julian Day.
	 * @param {number|JulianDay} date the Julian Day to use to set this date
	 */
	setJulianDay: function (date) {
		this.rd = this.newRd({
			julianday: (typeof(date) === 'object') ? date.getDate() : date,
			cal: this.cal
		});
		this._calcDateComponents();
	},

	/**
	 * Return the time zone associated with this date, or 
	 * undefined if none was specified in the constructor.
	 * 
	 * @return {string|undefined} the name of the time zone for this date instance
	 */
	getTimeZone: function() {
		return this.timezone || "local";
	},
	
	/**
	 * Set the time zone associated with this date.
	 * @param {string=} tzName the name of the time zone to set into this date instance,
	 * or "undefined" to unset the time zone 
	 */
	setTimeZone: function (tzName) {
		if (!tzName || tzName === "") {
			// same as undefining it
			this.timezone = undefined;
			this.tz = undefined;
		} else if (typeof(tzName) === 'string') {
			this.timezone = tzName;
			this.tz = undefined;
			// assuming the same UTC time, but a new time zone, now we have to 
			// recalculate what the date components are
			this._calcDateComponents();
		}
	},
	
	/**
	 * Return the rd number of the first Sunday of the given ISO year.
	 * @protected
	 * @param {number} year the year for which the first Sunday is being sought
	 * @return {number} the rd of the first Sunday of the ISO year
	 */
	firstSunday: function (year) {
		var firstDay = this.newRd({
			year: year,
			month: 1,
			day: 1,
			hour: 0,
			minute: 0,
			second: 0,
			millisecond: 0,
			cal: this.cal
		});
		var firstThu = this.newRd({
			rd: firstDay.onOrAfter(4),
			cal: this.cal
		});
		return firstThu.before(0);
	},
	
	/**
	 * Return the ISO 8601 week number in the current year for the current date. The week
	 * number ranges from 0 to 55, as some years have 55 weeks assigned to them in some
	 * calendars.
	 * 
	 * @return {number} the week number for the current date
	 */
	getWeekOfYear: function() {
		var rd = Math.floor(this.rd.getRataDie());
		var year = this._calcYear(rd + this.offset);
		var yearStart = this.firstSunday(year);
		var nextYear;
		
		// if we have a January date, it may be in this ISO year or the previous year
		if (rd < yearStart) {
			yearStart = this.firstSunday(year-1);
		} else {
			// if we have a late December date, it may be in this ISO year, or the next year
			nextYear = this.firstSunday(year+1);
			if (rd >= nextYear) {
				yearStart = nextYear;
			}
		}
		
		return Math.floor((rd-yearStart)/7) + 1;
	},
	
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
	 * @param {Locale|string} locale the locale or locale spec to use when figuring out 
	 * the first day of the week
	 * @return {number} the ordinal number of the week within the current month
	 */
	getWeekOfMonth: function(locale) {
		var li = new LocaleInfo(locale);
		
		var first = this.newRd({
			year: this._calcYear(this.rd.getRataDie()+this.offset),
			month: this.getMonths(),
			day: 1,
			hour: 0,
			minute: 0,
			second: 0,
			millisecond: 0,
			cal: this.cal
		});
		var weekStart = first.onOrAfter(li.getFirstDayOfWeek());
		
		if (weekStart - first.getRataDie() > 3) {
			// if the first week has 4 or more days in it of the current month, then consider
			// that week 1. Otherwise, it is week 0. To make it week 1, move the week start
			// one week earlier.
			weekStart -= 7;
		}
		return Math.floor((this.rd.getRataDie() - weekStart) / 7) + 1;
	}
};

module.exports = IDate;