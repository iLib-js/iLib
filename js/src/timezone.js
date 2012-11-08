/*
 * timezone.js - Definition of a time zone class
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

/*
!depends 
ilibglobal.js 
locale.js
localeinfo.js
util/utils.js
calendar/gregoriandate.js
*/

// !data localeinfo timezones

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
 * "America/Los_Angeles". These are taken from the IANA time zone database. (See
 * http://www.iana.org/time-zones for more information.) <p>
 * 
 * There is one special 
 * time zone that is not taken from the IANA database called simply "local". In
 * this case, this class will attempt to discover the current time zone and
 * daylight savings time settings by calling standard Javascript classes to 
 * determine the offsets from UTC. 
 * 
 * <li><i>locale</i> - The locale for this time zone.
 * <li><i>offset</i> - Choose the time zone based on the offset from UTC given in
 * number of minutes (negative is west, positive is east). 
 * </ul>
 * 
 * There is currently no way in the ECMAscript
 * standard to tell which exact time zone is currently in use. Choosing the
 * id "locale" or specifying an explicit offset will not give a specific time zone, 
 * as it is impossible to tell with certainty which zone the offsets 
 * match.<p>
 * 
 * When the id "local" is given or the offset option is specified, this class will
 * have the following behaviours:
 * <ul>
 * <li>The display name will always be given as the RFC822 style, no matter what
 * style is requested
 * <li>The id will also be returned as the RFC822 style display name
 * <li>When the offset is explicitly given, this class will assume the time zone 
 * does not support daylight savings time, and the offsets will be calculated 
 * the same way year round.
 * <li>When the offset is explicitly given, the inDaylightSavings() method will 
 * always return false.
 * <li>When the id "local" is given, this class will attempt to determine the 
 * daylight savings time settings by examining the offset from UTC on Jan 1
 * and June 1 of the current year. If they are different, this class assumes
 * that the local time zone uses DST. When the offset for a particular date is
 * requested, it will use the built-in Javascript support to determine the 
 * offset for that date.
 * </ul> 
 * 
 * If a more specific time zone is 
 * needed with display names and known start/stop times for DST, use the "id" 
 * property instead to specify the time zone exactly. You can perhaps ask the
 * user which time zone they prefer so that your app does not need to guess.<p>
 * 
 * If the id and the offset are both not given, the default time zone for the 
 * locale is retrieved from
 * the locale info. If the locale is not specified, the default locale for the
 * library is used.<p>
 * 
 * Because this class was designed for use in web sites, and the vast majority
 * of dates and times being formatted are recent date/times, this class is simplified
 * by not implementing historical time zones. That is, when governments change the 
 * time zone rules for a particular zone, only the latest such rule is implemented 
 * in this class. That means that determining the offset for a date that is prior 
 * to the last change may give the wrong result. Historical time zone calculations
 * may be implemented in a later version of iLib if there is enough demand for it,
 * but it would entail a much larger set of time zone data that would have to be
 * loaded.  
 * 
 * Depends directive: !depends timezone.js
 * 
 * @constructor
 * @param {Object} options Options guiding the construction of this time zone instance
 */
ilib.TimeZone = function(options) {
	var arr, i, bad, res, formats, type, zones;
	
	this.locale = new ilib.Locale();
	this.isLocal = false;
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (options.id) {
			if (options.id === 'local') {
				this.isLocal = true;
				
				// use standard Javascript Date to figure out the time zone offsets
				var now = new Date(), 
					jan1 = new Date(now.getFullYear(), 0, 1),  // months in std JS Date object are 0-based
					jun1 = new Date(now.getFullYear(), 5, 1);
				
				// Javascript's method returns the offset backwards, so we have to
				// take the negative to get the correct offset
				this.offsetJan1 = -jan1.getTimezoneOffset();
				this.offsetJun1 = -jun1.getTimezoneOffset();
				// the offset of the standard time for the time zone is always the one that is largest of 
				// the two, no matter whether you are in the northern or southern hemisphere
				this.offset = Math.max(this.offsetJan1, this.offsetJun1);
				this.id = this.getDisplayName(undefined, undefined);
			} else {
				this.id = options.id;
			}
		} else if (options.offset) {
			this.offset = (typeof(options.offset) === 'string') ? parseInt(options.offset, 10) : options.offset;
			this.id = this.getDisplayName(undefined, undefined);
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
	if (!this.zone && !this.offset) {
		this.id = "Etc/UTC";
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
	
	// special zone meaning "the local time zone according to the JS engine we are running upon"
	ids.push("local"); 
	
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
 * @param {ilib.Date=} date a date to determine if it is in daylight time or standard time
 * @param {string=} style one of "standard" or "rfc822". Default if not specified is "standard"
 * @returns {string} the name of the time zone, abbreviated according to the style 
 */
ilib.TimeZone.prototype.getDisplayName = function (date, style) {
	style = (this.isLocal || typeof(this.zone) === 'undefined') ? "rfc822" : (style || "standard");
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
			if (Math.abs(hour) < 10) {
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
 * @param {ilib.Date=} date the date for which the offset is needed
 * @return {Object.<{h:number,m:number}>} an object giving the offset for the zone at 
 * the given date/time, in hours, minutes, and seconds  
 */
ilib.TimeZone.prototype.getOffset = function (date) {
	var offset = this.getOffsetMillis(date)/60000;
	
	var hours = ilib._roundFnc.down(offset/60),
		minutes = Math.abs(offset) - Math.abs(hours)*60;

	var ret = {
		h: hours
	};
	if (minutes != 0) {
		ret.m = minutes;
	}
	return ret;
};

/**
 * Returns the offset of this time zone from UTC at the given date/time expressed in 
 * milliseconds. If daylight saving 
 * time is in effect at the given date/time, this method will return the offset value 
 * adjusted by the amount of daylight saving. Negative numbers indicate offsets west
 * of UTC and conversely, positive numbers indicate offset east of UTC.
 *  
 * @param {ilib.Date=} date the date for which the offset is needed, or null for the
 * present date
 * @return {number} the number of milliseconds of offset from UTC that the given date is
 */
ilib.TimeZone.prototype.getOffsetMillis = function (date) {
	var ret;
	
	if (this.isLocal) {
		var d = (!date) ? new Date() : new Date(date.getTime());
		return -d.getTimezoneOffset() * 60 * 1000;
	} 
	
	if (typeof(this.dstSavings) === 'undefined') {
		this._calcDSTSavings();
	}
	
	if (typeof(this.offset) === 'undefined') {
		this._calcOffset();
	}
	
	ret = this.offset;
	
	if (date && this.inDaylightTime(date)) {
		ret += this.dstSavings;
	}
	
	return ret * 60 * 1000;
};

/**
 * Returns the offset of this time zone from UTC at the given date/time. If daylight saving 
 * time is in effect at the given date/time, this method will return the offset value 
 * adjusted by the amount of daylight saving.
 * @param {ilib.Date=} date the date for which the offset is needed
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
	var offset = this.getRawOffsetMillis()/60000;

	var hours = ilib._roundFnc.down(offset/60),
		minutes = Math.abs(offset) - Math.abs(hours)*60;
	
	var ret = {
		h: hours
	};
	if (minutes != 0) {
		ret.m = minutes;
	}
	return ret;
};

/**
 * Gets the offset from UTC for this time zone expressed in milliseconds. Negative numbers
 * indicate zones west of UTC, and positive numbers indicate zones east of UTC.
 * 
 * @returns {number} an number giving the offset from 
 * UTC for this time zone in milliseconds 
 */
ilib.TimeZone.prototype.getRawOffsetMillis = function () {
	if (typeof(this.offset) === 'undefined') {
		this._calcOffset();
	}
	return this.offset * 60 * 1000;
};

/**
 * Gets the offset from UTC for this time zone.
 * @returns {string} the offset from UTC for this time zone, in the format "h:m:s" 
 */
ilib.TimeZone.prototype.getRawOffsetStr = function () {
	if (this.isLocal) {
		var off = this.getRawOffset();
		return off.h + ":" + off.m;
	} else if (typeof(this.offset) !== 'undefined') { 
		// have to check against undefined instead of just "if (this.offset)" because the 
		// offset could legally be equal to zero
		return this.getOffsetStr(undefined);
	}
	return this.zone && this.zone.o || "0:0";
};

/**
 * Return the amount of time in hours:minutes that the clock is advanced during
 * daylight savings time.
 * @returns {Object.<{h:number,m:number,s:number}>} the amount of time that the 
 * clock advances for DST in hours, minutes, and seconds 
 */
ilib.TimeZone.prototype.getDSTSavings = function () {
	if (this.isLocal) {
		// take the absolute because the difference in the offsets may be positive or
		// negative, depending on the hemisphere
		var savings = Math.abs(this.offsetJan1 - this.offsetJun1);
		var hours = ilib._roundFnc.down(savings/60),
			minutes = savings - hours*60;
		return {
			h: hours,
			m: minutes
		};
	} else if (this.zone && this.zone.s) {
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
	if (this.isLocal) {
		var savings = this.getDSTSavings();
		return savings.h + ":" + savings.m;
	} else if (typeof(this.offset) === 'undefined' && this.zone && this.zone.s) {
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
 * @private
 */
ilib.TimeZone.prototype._calcDSTSavings = function () {
	var saveParts = this.getDSTSavings();
	
	/**
	 * @private
	 * @type {number} savings in minutes when DST is in effect 
	 */
	this.dstSavings = (Math.abs(saveParts.h || 0) * 60 + (saveParts.m || 0)) * ilib.signum(saveParts.h || 0);
};

/**
 * @private
 */
ilib.TimeZone.prototype._calcOffset = function () {
	if (this.zone.o) {
		var offsetParts = this._offsetStringToObj(this.zone.o);
		/**
		 * @private
		 * @type {number} raw offset from UTC without DST, in minutes
		 */
		this.offset = (Math.abs(offsetParts.h || 0) * 60 + (offsetParts.m || 0)) * ilib.signum(offsetParts.h || 0);
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
 * @param {ilib.Date=} date a date for which the info about daylight time is being sought,
 * or undefined to tell whether we are currently in daylight savings time
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
	
	if (this.isLocal) {
		var d = new Date(date ? date.getTime() : undefined);
		// the DST offset is always the one that is closest to negative infinity, no matter 
		// if you are in the northern or southern hemisphere
		var dst = Math.min(this.offsetJan1, this.offsetJun1);
		return (-d.getTimezoneOffset() === dst);
	}
	
	if (!date) {
		date = ilib.Date.newInstance(); // right now
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
	return (this.isLocal && this.offsetJan1 !== this.offsetJun1) ||
		(typeof(this.zone) !== 'undefined' && 
		typeof(this.zone.s) !== 'undefined' && 
		typeof(this.zone.e) !== 'undefined');
};
