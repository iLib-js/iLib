/*
 * timezone.js - Definition of a time zone class
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

/*
!depends 
ilibglobal.js 
locale.js
localeinfo.js
calendar/gregoriandate.js
*/

// !data timezones

/**
 * @class Create a time zone information instance. 
 * 
 * This class reports and transforms
 * information about particular time zones.<p>
 * 
 * The options parameter may contain any of the following properties:
 * 
 * <ul>
 * <li><i>id</i> - The id of the requested time zone such as "Europe/London" or 
 * "America/Los_Angeles"
 * <li><i>locale</i> - The locale for this time zone.
 * <li><i>offset</i> - Choose the time zone based on the offset from UTC given in
 * number of minutes. In some cases, there are multiple time zones that correspond
 * to the given offset, and the first one encountered in the list is the one taken.
 * If a more specific time zone is needed, use the "id" property to identify the
 * time zone instead.
 * </ul>
 * 
 * If the id is not given, the default time zone for the locale is retrieved from
 * the locale info. If the locale is not specified, the default locale for the
 * library is used.
 * <p>
 * 
 * Depends directive: !depends timezone.js
 * 
 * @constructor
 * @param {Object} options Options guiding the construction of this time zone instance
 */
ilib.TimeZone = function(options) {
	var arr, i, bad, res, formats, type, zones;
	
	this.locale = new ilib.Locale();
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (options.id) {
			this.id = options.id;
		// TODO: } else if (options.offset) {
		}
	}

	//console.log("timezone: locale is " + this.locale);
	
	if (!this.id) {
		this.locinfo = new ilib.LocaleInfo(this.locale);
		this.id = this.locinfo.getTimeZone();
	}

	//console.log("localeinfo is: " + JSON.stringify(this.locinfo));
	//console.log("id is: " + JSON.stringify(this.id));
	
	if (!ilib.TimeZone.zones) {
		res = new ilib.ResBundle({
			locale: this.locale,
			name: "timezones"
		});

		ilib.TimeZone.zones = res.getResObj();
	}
	
	/** 
	 * @private
	 * @type {{o:string,f:string,e:Object.<{m:number,r:string,t:string,z:string}>,s:Object.<{m:number,r:string,t:string,z:string,v:string,c:string}>}} 
	 */
	this.zone = ilib.TimeZone.zones[this.id];
	if (!this.zone) {
		this.id = "Europe/London";
		this.zone = ilib.TimeZone.zones[this.id];
	}
};

/**
 * Return an array of available zone ids that the constructor knows about.
 * @returns {Array.<string>} an array of zone id strings
 */
ilib.TimeZone.getAvailableIds = function () {
	var res, tz, ids = [];
	
	if (!ilib.TimeZone.zones) {
		res = new ilib.ResBundle({
			name: "timezones"
		});

		ilib.TimeZone.zones = res.getResObj();
	}
	
	for (tz in ilib.TimeZone.zones) {
		if (tz) {
			ids.push(tz);
		}
	}
	
	return ids;
};

/**
 * Return the id used to uniquely identify this time zone.
 * @returns {string} a unique id for this time zone
 */
ilib.TimeZone.prototype.getId = function () {
	return this.id;
};

/**
 * Return the abbreviation that is used for the current time zone on the given date.
 * The date may be in DST or during standard time, and many zone names have different
 * abbreviations depending on whether or not the date is falls within DST.<p>
 * 
 * There are two styles that are supported:
 * 
 * <ol>
 * <li>standard - returns the 3 to 5 letter abbreviation of the time zone name such 
 * as "CET" for "Central European Time" or "PDT" for "Pacific Daylight Time"
 * <li>rfc822 - returns an RFC 822 style time zone specifier, which specifies more
 * explicitly what the offset is from UTC
 * </ol>
 *  
 * @param {ilib.Date} date a date to determine if it is in daylight time or standard time
 * @param {string} style one of "standard" or "rfc822". Default if not specified is "standard"
 * @returns {string} the name of the time zone, abbreviated according to the style 
 */
ilib.TimeZone.prototype.getDisplayName = function (date, style) {
	style = style || "standard";
	switch (style) {
		default:
		case 'standard':
			if (this.zone.f && this.zone.f !== "zzz") {
				if (this.zone.f.indexOf("{c}") !== -1) {
					var letter = "";
					letter = this.inDaylightTime(date) ? this.zone.s.c : this.zone.e.c; 
					var temp = new ilib.String(this.zone.f);
					return temp.format({c: letter || ""});
				}
				return this.zone.f;
			} else {
				var temp = "GMT" + this.zone.o;
				if (this.inDaylightTime(date)) {
					temp += "+" + this.zone.s.v;
				}
				return temp;
			}
			break;
		case 'rfc822':
			var offset = this.getOffset(date), // includes the DST if applicable
				ret = "UTC",
				hour = offset.h || 0,
				minute = offset.m || 0;
			
			ret += (hour > 0) ? "+" : "-";
			if (hour < 10) {
				ret += "0";
			}
			ret += (hour < 0) ? -hour : hour;
			if (minute < 10) {
				ret += "0";
			}
			ret += minute;
			return ret; 
	}
};

/**
 * @private
 * Convert the offset string to an object with an h, m, and possibly s property
 * to indicate the hours, minutes, and seconds.
 * 
 * @param {string} str the offset string to convert to an object
 * @returns {Object.<{h:number,m:number,s:number}>} an object giving the offset for the zone at 
 * the given date/time, in hours, minutes, and seconds
 */
ilib.TimeZone.prototype._offsetStringToObj = function (str) {
	var offsetParts = (typeof(str) === 'string') ? str.split(":") : [],
		ret = {h:0},
		temp;
	
	if (offsetParts.length > 0) {
		ret.h = parseInt(offsetParts[0], 10);
		if (offsetParts.length > 1) {
			temp = parseInt(offsetParts[1], 10);
			if (temp) {
				ret.m = temp;
			}
			if (offsetParts.length > 2) {
				temp = parseInt(offsetParts[2], 10);
				if (temp) {
					ret.s = temp;
				}
			}
		}
	}

	return ret;
};

/**
 * Returns the offset of this time zone from UTC at the given date/time. If daylight saving 
 * time is in effect at the given date/time, this method will return the offset value 
 * adjusted by the amount of daylight saving.
 * @param {ilib.Date} date the date for which the offset is needed
 * @return {Object.<{h:number,m:number,s:number}>} an object giving the offset for the zone at 
 * the given date/time, in hours, minutes, and seconds  
 */
ilib.TimeZone.prototype.getOffset = function (date) {
	var ret = {};
	if (this.zone.o) {
		var offsetParts = this._offsetStringToObj(this.zone.o);
		
		if (date && this.inDaylightTime(date)) {
			var saveParts = this._offsetStringToObj(this.zone.s.v),
				temp,
				minutes;
			
			//console.log("standard offset is " + JSON.stringify(offsetParts));
			//console.log("savings is " + JSON.stringify(saveParts));
			
			// convert to number of seconds in the day and then back again 
			// to hours:min:seconds so that we get the arithmetic right when
			// we add the savings time, which may be a non-whole-hour size
			temp = (offsetParts.m || 0) * 60 + (offsetParts.s || 0);
			if (offsetParts.h < 0) {
				temp += -offsetParts.h * 3600;
				temp = -temp;
			} else {
				temp += offsetParts.h * 3600;
			}
			
			//console.log("standard offset in seconds: " + temp);

			temp += saveParts.h * 3600 + (saveParts.m || 0) * 60 + (saveParts.s || 0);
			
			//console.log("less savings, leaves this in seconds: " + temp);
			
			ret.h = Math.floor(temp / 3600);
			temp -= (ret.h * 3600);
			minutes = Math.floor(temp / 60);
			temp -= (minutes * 60);
			if (minutes) {
				ret.m = minutes;
			}
			if (temp !== 0) {
				ret.s = temp;
			}
			
			return ret;
		} else {
			ret.h = offsetParts.h;
			if (offsetParts.m) {
				ret.m = offsetParts.m;
			}
			if (offsetParts.s) {
				ret.s = offsetParts.s;
			}
		}
		return ret;
	}
	return {h:0};
};

/**
 * Returns the offset of this time zone from UTC at the given date/time. If daylight saving 
 * time is in effect at the given date/time, this method will return the offset value 
 * adjusted by the amount of daylight saving.
 * @param {ilib.Date} date the date for which the offset is needed
 * @return {string} the offset for the zone at the given date/time as a string in the 
 * format "h:m:s" 
 */
ilib.TimeZone.prototype.getOffsetStr = function (date) {
	var offset = this.getOffset(date),
		ret;
	
	ret = offset.h;
	if (typeof(offset.m) !== 'undefined') {
		ret += ":" + offset.m;
		if (typeof(offset.s) !== 'undefined') {
			ret += ":" + offset.s;
		}
	} else {
		ret += ":0";
	}
	
	return ret;
};

/**
 * Gets the offset from UTC for this time zone.
 * @returns {Object.<{h:number,m:number,s:number}>} an object giving the offset from 
 * UTC for this time zone, in hours, minutes, and seconds 
 */
ilib.TimeZone.prototype.getRawOffset = function () {
	return this._offsetStringToObj(this.zone.o);
};

/**
 * Gets the offset from UTC for this time zone.
 * @returns {string} the offset from UTC for this time zone, in the format "h:m:s" 
 */
ilib.TimeZone.prototype.getRawOffsetStr = function () {
	return this.zone.o || "0:0";
};

/**
 * Return the amount of time in hours:minutes that the clock is advanced during
 * daylight savings time.
 * @returns {Object.<{h:number,m:number,s:number}>} the amount of time that the 
 * clock advances for DST in hours, minutes, and seconds 
 */
ilib.TimeZone.prototype.getDSTSavings = function () {
	if (this.zone.s) {
		return this._offsetStringToObj(this.zone.s.v);	// this.zone.start.savings
	}
	return {h:0};
};

/**
 * Return the amount of time in hours:minutes that the clock is advanced during
 * daylight savings time.
 * @returns {string} the amount of time that the clock advances for DST in the
 * format "h:m:s"
 */
ilib.TimeZone.prototype.getDSTSavingsStr = function () {
	if (this.zone.s) {
		return this.zone.s.v;	// this.zone.start.savings
	}
	return "0:0";
};

/**
 * @private
 * return the rd of the start of DST transition for the given year
 * @param {Object} rule set of rules
 * @param {number} year year to check
 * @returns {number} the rd of the start of DST for the year
 */
ilib.TimeZone.prototype._calcRuleStart = function (rule, year) {
	var type, 
		weekday = 0, 
		day, 
		refDay, 
		cal, 
		rd, 
		hour = 0, 
		minute = 0, 
		second = 0,
		time,
		i;
	
	if (rule.r.charAt(0) == 'l' || rule.r.charAt(0) == 'f') {
		cal = ilib.Cal.newInstance({type: "gregorian"});
		type = rule.r.charAt(0);
		weekday = parseInt(rule.r.substring(1), 10);
		day = (type === 'l') ? cal.getMonLength(rule.m, year) : 1;
		//console.log("_calcRuleStart: Calculating the " + 
		//		(rule.r.charAt(0) == 'f' ? "first " : "last ") + weekday + 
		//		" of month " + rule.m);
	} else {
		type = "=";
		
		i = rule.r.indexOf('<');
		if (i == -1) {
			i = rule.r.indexOf('>');
		}
		
		if (i != -1) {
			type = rule.r.charAt(i);
			weekday = parseInt(rule.r.substring(0, i), 10);
			day = parseInt(rule.r.substring(i+1), 10); 
			//console.log("_calcRuleStart: Calculating the " + weekday + 
			//		type + day + " of month " + rule.m);
		} else {
			day = parseInt(rule.r, 10);
			//console.log("_calcRuleStart: Calculating the " + day + " of month " + rule.m);
		}
	}

	if (rule.t) {
		time = rule.t.split(":");
		hour = parseInt(time[0], 10);
		if (time.length > 1) {
			minute = parseInt(time[1], 10);
			if (time.length > 2) {
				second = parseInt(time[2], 10);
			}
		}
	}
	//console.log("calculating rd of " + year + "/" + rule.m + "/" + day);
	refDay = new ilib.Date.GregDate({
		year: year, 
		month: rule.m, 
		day: day, 
		hour: hour, 
		minute: minute, 
		second: second
	});
	rd = refDay.getRataDie();
	//console.log("rd is " + rd);
	
	switch (type) {
		case 'l':
		case '<':
			//console.log("returning " + refDay.onOrBeforeRd(rd, weekday));
			return refDay.onOrBeforeRd(rd, weekday);		
		case 'f':
		case '>':
			//console.log("returning " + refDay.onOrAfterRd(rd, weekday));
			return refDay.onOrAfterRd(rd, weekday);		
		default:
			//console.log("returning rd unchanged");
			return rd;
	}
};

/**
 * Returns whether or not the given date is in daylight saving time for the current
 * zone. Note that daylight savings time is observed for the summer. Because
 * the seasons are reversed, daylight savings time in the southern hemisphere usually
 * runs from the end of the year through New Years into the first few months of the
 * next year. This method will correctly calculate the start and end of DST for any
 * location.
 * 
 * @param {ilib.Date} date a date for which the info about daylight time is being sought
 * @return {boolean} true if the given date is in DST for the current zone, and false
 * otherwise.
 */
ilib.TimeZone.prototype.inDaylightTime = function (date) {
	var year, rd, startRd, endRd;
	
	// if we aren't using daylight time in this zone, then where are never in daylight
	// time, no matter what the date is
	if (!this.useDaylightTime()) {
		return false;
	}
	
	rd = date.getRataDie();
	startRd = this._calcRuleStart(this.zone.s, date.year);
	endRd = this._calcRuleStart(this.zone.e, date.year);
	
	// In the northern hemisphere, the start comes first some time in spring (Feb-Apr), 
	// then the end some time in the fall (Sept-Nov). In the southern
	// hemisphere, it is the other way around because the seasons are reversed. Standard
	// time is still in the winter, but the winter months are May-Aug, and daylight 
	// savings time usually starts Aug-Oct of one year and runs through Mar-May of the 
	// next year.
	
	if (startRd < endRd) {
		// northern hemisphere
		return (rd >= startRd && rd < endRd) ? true : false;
	} else {
		// southern hemisphere
		return (rd >= startRd || rd < endRd) ? true : false;
	}
};

/**
 * Returns true if this time zone switches to daylight savings time at some point
 * in the year, and false otherwise.
 * @returns {boolean} true if the time zone uses daylight savings time
 */
ilib.TimeZone.prototype.useDaylightTime = function () {
	// this zone uses daylight savings time iff there is a rule defining when to start
	// and when to stop the DST
	return (this.zone && 
			typeof(this.zone.s) !== 'undefined' && 
			typeof(this.zone.e) !== 'undefined');
};
