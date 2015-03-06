/*
 * copticdate.js - Represent a date in the Coptic calendar
 * 
 * Copyright © 2012-2014, JEDLSoft
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
calendar/coptic.js 
util/utils.js
util/search.js 
util/math.js
localeinfo.js 
julianday.js 
calendar/ethiopicdate.js
*/

/**
 * @class
 * Construct a new Coptic RD date number object. The constructor parameters can 
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
 * If the constructor is called with another Coptic date instance instead of
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
 * Depends directive: !depends copticdate.js
 * 
 * @private
 * @constructor
 * @extends ilib.Date.EthiopicRataDie
 * @param {Object=} params parameters that govern the settings and behaviour of this Coptic RD date
 */
ilib.Date.CopticRataDie = function(params) {
	this.cal = params && params.cal || new ilib.Cal.Coptic();
	this.rd = undefined;
	/**
	 * The difference between the zero Julian day and the first Coptic date
	 * of Friday, August 29, 284 CE Julian at 7:00am UTC. 
	 * @private
	 * @const
	 * @type number
	 */
	this.epoch = 1825028.5;

	var tmp = {};
	if (params) {
		ilib.shallowCopy(params, tmp);
	}
	tmp.cal = this.cal; // override the cal parameter that may be passed in
	ilib.Date.EthiopicRataDie.call(this, tmp);
};

ilib.Date.CopticRataDie.prototype = new ilib.Date.EthiopicRataDie();
ilib.Date.CopticRataDie.prototype.parent = ilib.Date.EthiopicRataDie;
ilib.Date.CopticRataDie.prototype.constructor = ilib.Date.CopticRataDie;

/**
 * @class
 * Construct a new date object for the Coptic Calendar. The constructor can be called
 * with a parameter object that contains any of the following properties:
 * 
 * <ul>
 * <li><i>unixtime<i> - sets the time of this instance according to the given 
 * unix time. Unix time is the number of milliseconds since midnight on Jan 1, 1970 (Gregorian).
 * <li><i>julianday</i> - the Julian Day to set into this date
 * <li><i>year</i> - any integer
 * <li><i>month</i> - 1 to 12, where 1 means January, 2 means February, etc.
 * <li><i>day</i> - 1 to 31
 * <li><i>hour</i> - 0 to 23. A formatter is used to display 12 hour clocks, but this representation 
 * is always done with an unambiguous 24 hour representation
 * <li><i>minute</i> - 0 to 59
 * <li><i>second</i> - 0 to 59
 * <li><i>millisecond<i> - 0 to 999
 * <li><i>locale</i> - the ilib.TimeZone instance or time zone name as a string 
 * of this coptic date. The date/time is kept in the local time. The time zone
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
 * If called with another Coptic date argument, the date components of the given
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
 * Depends directive: !depends copticdate.js
 * 
 * @constructor
 * @extends ilib.Date.EthiopicDate
 * @param {Object=} params parameters that govern the settings and behaviour of this Coptic date
 */
ilib.Date.CopticDate = function(params) {
	this.rd = undefined; // clear these out so that the EthiopicDate constructor can set it
	ilib.Date.EthiopicDate.call(this, params);
	this.cal = new ilib.Cal.Coptic();
};

ilib.Date.CopticDate.prototype = new ilib.Date.EthiopicDate({noinstance: true});
ilib.Date.CopticDate.prototype.parent = ilib.Date.EthiopicDate.prototype;
ilib.Date.CopticDate.prototype.constructor = ilib.Date.CopticDate;

/**
 * Return a new RD for this date type using the given params.
 * @protected
 * @param {Object=} params the parameters used to create this rata die instance
 * @returns {ilib.Date.RataDie} the new RD instance for the given params
 */
ilib.Date.CopticDate.prototype.newRd = function (params) {
	return new ilib.Date.CopticRataDie(params);
};

/**
 * Return the day of the week of this date. The day of the week is encoded
 * as number from 0 to 6, with 0=Sunday, 1=Monday, etc., until 6=Saturday.
 * 
 * @return {number} the day of the week
 */
ilib.Date.CopticDate.prototype.getDayOfWeek = function() {
	var rd = Math.floor(this.rd.getRataDie() + (this.offset || 0));
	return ilib.mod(rd-3, 7);
};

/**
 * Return the name of the calendar that governs this date.
 * 
 * @return {string} a string giving the name of the calendar
 */
ilib.Date.CopticDate.prototype.getCalendar = function() {
	return "coptic";
};

//register with the factory method
ilib.Date._constructors["coptic"] = ilib.Date.CopticDate;