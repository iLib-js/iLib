/*
 * Calendar.js - Represent a calendar object.
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

/* !depends
ilib.js
Locale.js
LocaleInfo.js
*/

var ilib = require("./ilib.js");
var Locale = require("./Locale.js");
var LocaleInfo = require("./LocaleInfo.js");

/**
 * Interface that all calendars must implement.
 * 
 * Depends directive: !depends Calendar.js
 * 
 * @interface
 * @protected
 */
var Calendar = function() {
};

/* place for the subclasses to put their constructors so that the factory method
 * can find them. Do this to add your calendar after it's defined: 
 * Calendar._constructors["mytype"] = Calendar.MyTypeConstructor;
 */
Calendar._constructors = {};

/**
 * Map calendar names to classes to initialize in the dynamic code model.
 * TODO: Need to figure out some way that this doesn't have to be updated by hand.
 * @private
 */
Calendar._dynMap = {
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
Calendar._dynLoadCalendar = function (name) {
	if (!Calendar._constructors[name]) {
		var entry = Calendar._dynMap[name];
		if (entry) {
			Calendar._constructors[name] = require("./" + entry + "Cal.js");
		}
	}
	return Calendar._constructors[name];
};

/**
 * Factory method to create a new instance of a calendar subclass.<p>
 * 
 * The options parameter can be an object that contains the following
 * properties:
 * 
 * <ul>
 * <li><i>type</i> - specify the type of the calendar desired. The
 * list of valid values changes depending on which calendars are 
 * defined. When assembling your iliball.js, include those calendars 
 * you wish to use in your program or web page, and they will register 
 * themselves with this factory method. The "official", "gregorian",
 * and "julian" calendars are all included by default, as they are the
 * standard calendars for much of the world.
 * <li><i>locale</i> - some calendars vary depending on the locale.
 * For example, the "official" calendar transitions from a Julian-style
 * calendar to a Gregorian-style calendar on a different date for
 * each country, as the governments of those countries decided to
 * adopt the Gregorian calendar at different times. 
 * </ul>
 * 
 * If a locale is specified, but no type, then the calendar that is default for
 * the locale will be instantiated and returned. If neither the type nor
 * the locale are specified, then the calendar for the default locale will
 * be used. 
 * 
 * @param {Object=} options options controlling the construction of this instance, or
 * undefined to use the default options
 * @return {Calendar} an instance of a calendar object of the appropriate type
 */
Calendar.newInstance = function (options) {
	var locale = options && options.locale,
	type = options && options.type,
	cons;

	if (!locale) {
		locale = new Locale();	// default locale
	}
	
	if (!type) {
		var info = new LocaleInfo(locale);
		type = info.getCalendar();
	}
	
	if (ilib.isDynCode()) {
		Calendar._dynLoadCalendar(type);
	}
	
	cons = Calendar._constructors[type];
	
	// pass the same options through to the constructor so the subclass
	// has the ability to do something with if it needs to
	return cons && new cons(options);
};

/**
 * Return an array of known calendar types that the factory method can instantiate.
 * 
 * @return {Array.<string>} an array of calendar types
 */
Calendar.getCalendars = function () {
	var arr = [],
		c;
	
	if (ilib.isDynCode()) {
		for (c in Calendar._dynMap) {
			Calendar._dynLoadCalendar(c);
		}
	}
	
	for (c in Calendar._constructors) {
		if (c && Calendar._constructors[c]) {
			arr.push(c); // code like a pirate
		}
	}
	
	return arr;
};

Calendar.prototype = {
	/**
	 * Return the type of this calendar.
	 * 
	 * @return {string} the name of the type of this calendar 
	 */
	getType: function() {
		throw "Cannot call methods of abstract class Calendar";
	},
	
	/**
	 * Return the number of months in the given year. The number of months in a year varies
	 * for some luni-solar calendars because in some years, an extra month is needed to extend the 
	 * days in a year to an entire solar year. The month is represented as a 1-based number
	 * where 1=first month, 2=second month, etc.
	 * 
	 * @param {number} year a year for which the number of months is sought
	 * @return {number} The number of months in the given year
	 */
	getNumMonths: function(year) {
		throw "Cannot call methods of abstract class Calendar";
	},
	
	/**
	 * Return the number of days in a particular month in a particular year. This function
	 * can return a different number for a month depending on the year because of things
	 * like leap years.
	 * 
	 * @param {number} month the month for which the length is sought
	 * @param {number} year the year within which that month can be found
	 * @return {number} the number of days within the given month in the given year
	 */
	getMonLength: function(month, year) {
		throw "Cannot call methods of abstract class Calendar";
	},
	
	/**
	 * Return true if the given year is a leap year in this calendar.
	 * The year parameter may be given as a number.
	 * 
	 * @param {number} year the year for which the leap year information is being sought
	 * @return {boolean} true if the given year is a leap year
	 */
	isLeapYear: function(year) {
		throw "Cannot call methods of abstract class Calendar";
	}
};

module.exports = Calendar;