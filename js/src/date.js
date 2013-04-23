/*
 * date.js - Represent a date in any calendar. This class is subclassed for each calendar.
 * 
 * Copyright © 2012, JEDLSoft
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

/* !depends ilibglobal.js */

/**
 * @class
 * Construct a new date object. Each parameter is a numeric value, but its 
 * accepted range can vary depending on the subclass of this date. For example,
 * Gregorian months can be from 1 to 12, whereas months in the Hebrew calendar
 * can be from 1 to 13.<p>
 * 
 * Depends directive: !depends date.js
 * 
 * @constructor
 * @param {Object=} options The date components to initialize this date with
 */
ilib.Date = function(options) {
	this.year = options && options.year || 0;
	this.month = options && options.month || 1;
	this.day = options && options.day || 1;
	this.hour = options && options.hour || 0;
	this.minute = options && options.minute || 0;
	this.second = options && options.second || 0;
	this.millisecond = options && options.millisecond || 0;
};

/**
 * Factory method to create a new instance of a date subclass.<p>
 * 
 * The options parameter can be an object that contains the following
 * properties:
 * 
 * <ul>
 * <li><i>type</i> - specify the type of the date desired. The
 * list of valid values changes depending on which calendars are 
 * defined. When assembling your iliball.js, include those date type 
 * you wish to use in your program or web page, and they will register 
 * themselves with this factory method. The "gregorian",
 * and "julian" calendars are all included by default, as they are the
 * standard calendars for much of the world.
 * </ul>
 * 
 * The options object is also passed down to the date constructor, and 
 * thus can contain the same properties as the date object being instantiated.
 *  
 * @param {Object=} options options controlling the construction of this instance, or
 * undefined to use the default options
 * @return {ilib.Date} an instance of a calendar object of the appropriate type 
 */
ilib.Date.newInstance = function(options) {
	var locale = options && options.locale,
		type = options && options.type,
		cons;

	if (!locale) {
		locale = new ilib.Locale();	// default locale
	}
	
	if (!type) {
		var info = new ilib.LocaleInfo(locale);
		type = info.getCalendar();
	}

	cons = ilib.Date._constructors[type];
	
	// pass the same options through to the constructor so the subclass
	// has the ability to do something with if it needs to
	return cons && new cons(options);
};

/* place for the subclasses to put their constructors so that the factory method
 * can find them. Do this to add your date after it's defined: 
 * ilib.Date._constructors["mytype"] = ilib.Date.MyTypeConstructor;
 */
ilib.Date._constructors = {};

ilib.Date.prototype = {
	getType: function() {
		return "ilib.Date";
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
		this.day = day;
	},
	setMonths: function(month) {
		this.month = month;
	},
	setYears: function(year) {
		this.year = year;
	},
	
	setHours: function(hour) {
		this.hour = hour;
	},
	setMinutes: function(minute) {
		this.minute = minute;
	},
	setSeconds: function(second) {
		this.second = second;
	},
	setMilliseconds: function(milli) {
		this.millisecond = milli;
	}
};
