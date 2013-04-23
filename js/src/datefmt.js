/*
 * datefmt.js - Date formatter definition
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
date.js 
strings.js 
resources.js 
calendar.js
localeinfo.js
timezone.js
*/

// !data dateformats sysres

/**
 * @class
 * 
 * Create a new date formatter instance. The date formatter is immutable once
 * it is created, but can format as many different dates as needed with the same
 * options. Create different date formatter instances for different purposes
 * and then keep them cached for use later if you have more than one date to
 * format.<p>
 * 
 * The options may contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - locale to use when formatting the date/time. If the locale is
 * not specified, then the default locale of the app or web page will be used.
 * 
 * <li><i>calendar</i> - the type of calendar to use for this format. The value should
 * be a sting containing the name of the calendar. Currently, the supported
 * types are "gregorian", "julian", "arabic", "hebrew", or "chinese". If the
 * calendar is not specified, then the default calendar for the locale is used. When the
 * calendar type is specified, then the format method must be called with an instance of
 * the appropriate date type. (eg. Gregorian calendar means that the format method must 
 * be called with a GregDate instance.)
 *  
 * <li><i>timezone</i> - time zone to use when formatting times. This may be a time zone
 * instance or a time zone specifier string in RFC 822 format. If not specified, the
 * default time zone for the locale is used. If both the date object and this formatter
 * instance contain time zones and those time zones are different from each other, the 
 * formatter will calculate the offset between the time zones and subtract it from the 
 * date before formatting the result for the current time zone. The theory is that a date
 * object that contains a time zone specifies a specific instant in time that is valid
 * around the world, whereas a date object without one is a local time and can only be
 * used for doing things in the local time zone of the user.
 * 
 * <li><i>type</i> - Specify whether this formatter should format times only, dates only, or
 * both times and dates together. Valid values are "time", "date", and "datetime". Note that
 * in some locales, the standard format uses the order "time followed by date" and in others, 
 * the order is exactly opposite, so it is better to create a single "datetime" formatter 
 * than it is to create a time formatter and a date formatter separately and concatenate the 
 * results. A "datetime" formatter will get the order correct for the locale.<p>
 * 
 * The default type if none is specified in with the type option is "date".
 * 
 * <li><i>length</i> - Specify the length of the format to use. The length is the approximate size of the 
 * formatted string.
 * 
 * <ul>
 * <li><i>short</i> - use a short representation of the time. This is the most compact format possible for the locale.
 * <li><i>medium</i> - use a medium length representation of the time. This is a slightly longer format.
 * <li><i>long</i> - use a long representation of the time. This is a fully specified format, but some of the textual 
 * components may still be abbreviated
 * <li><i>full</i> - use a full representation of the time. This is a fully specified format where all the textual 
 * components are spelled out completely
 * </ul>
 * 
 * eg. The "short" format for an en_US date may be "MM/dd/yy", whereas the long format might be "d MMM, yyyy". In the long
 * format, the month name is textual instead of numeric and is longer, the year is 4 digits instead of 2, and the format 
 * contains slightly more spaces and formatting characters.<p>
 * 
 * Note that the length parameter does not specify which components are to be formatted. Use the "date" and the "time"
 * properties to specify the components. Also, very few of the components of a time format differ according to the length,
 * so this property has little to no affect on time formatting.
 * 
 * <li><i>date</i> - This property tells
 * which components of a date format to use. For example,
 * sometimes you may wish to format a date that only contains the month and date
 * without the year, such as when displaying a person's yearly birthday. The value
 * of this property allows you to specify only those components you want to see in the
 * final output, ordered correctly for the locale. <p>
 * 
 * Valid values are:
 * 
 * <ul>
 * <li><i>dmwy</i> - format all components, weekday, date, month, and year
 * <li><i>dmy</i> - format only date, month, and year
 * <li><i>dmw</i> - format only weekday, date, and month
 * <li><i>dm</i> - format only date and month
 * <li><i>my</i> - format only month and year
 * <li><i>dw</i> - format only the weekday and date
 * <li><i>d</i> - format only the date
 * <li><i>m</i> - format only the month, in numbers for shorter lengths, and letters for 
 * longer lengths
 * <li><i>n</i> - format only the month, in letters only for all lengths
 * <li><i>y</i> - format only the year
 * </ul>
 * Default components, if this property is not specified, is "dmy". This property may be specified
 * but has no affect if the current formatter is for times only.
 * 
 * <li><i>time</i> - This property gives which components of a time format to use. The time will be formatted 
 * correctly for the locale with only the time components requested. For example, a clock might only display 
 * the hour and minute and not need the seconds or the am/pm component. In this case, the time property should be set 
 * to "hm". <p>
 * 
 * Valid values for this property are:
 * 
 * <ul>
 * <li><i>ahmsz</i> - format the hours, minutes, seconds, am/pm (if using a 12 hour clock), and the time zone
 * <li><i>ahms</i> - format the hours, minutes, seconds, and am/pm (if using a 12 hour clock)
 * <li><i>hmsz</i> - format the hours, minutes, seconds, and the time zone
 * <li><i>hms</i> - format the hours, minutes, and seconds
 * <li><i>ahmz</i> - format the hours, minutes, am/pm (if using a 12 hour clock), and the time zone
 * <li><i>ahm</i> - format the hours, minutes, and am/pm (if using a 12 hour clock)
 * <li><i>hmz</i> - format the hours, minutes, and the time zone
 * <li><i>ah</i> - format only the hours and am/pm if using a 12 hour clock
 * <li><i>hm</i> - format only the hours and minutes
 * <li><i>ms</i> - format only the minutes and seconds
 * <li><i>h</i> - format only the hours
 * <li><i>m</i> - format only the minutes
 * <li><i>s</i> - format only the seconds
 * </ul>
 * 
 * If you want to format a length of time instead of a particular instant
 * in time, use the duration formatter object (ilib.DurFmt) instead because this
 * formatter is geared towards instants. A date formatter will make sure that each component of the 
 * time is within the normal range
 * for that component. That is, the minutes will always be between 0 and 59, no matter
 * what is specified in the date to format. A duration format will allow the number
 * of minutes to exceed 59 if, for example, you were displaying the length of
 * a movie of 198 minutes.<p>
 * 
 * Default value if this property is not specified is "hma".
 * 
 * <li><i>clock</i> - specify that the time formatter should use a 12 or 24 hour clock. 
 * Valid values are "12" and "24".<p>
 * 
 * In some locales, both clocks are used. For example, in en_US, the general populace uses
 * a 12 hour clock with am/pm, but in the US military or in nautical or aeronautical or 
 * scientific writing, it is more common to use a 24 hour clock. This property allows you to
 * construct a formatter that overrides the default for the locale.<p>
 * 
 * If this property is not specified, the default is to use the most widely used convention
 * for the locale.
 *  
 * <li><i>template</i> - use the given template string as a fixed format when formatting 
 * the date/time. Valid codes to use in a template string are as follows:
 * 
 * <ul>
 * <li><i>a</i> - am/pm marker
 * <li><i>d</i> - 1 or 2 digit date of month, not padded
 * <li><i>dd</i> - 1 or 2 digit date of month, 0 padded to 2 digits
 * <li><i>O</i> - ordinal representation of the date of month (eg. "1st", "2nd", etc.)
 * <li><i>D</i> - 1 to 3 digit day of year
 * <li><i>DD</i> - 1 to 3 digit day of year, 0 padded to 2 digits
 * <li><i>DDD</i> - 1 to 3 digit day of year, 0 padded to 3 digits
 * <li><i>M</i> - 1 or 2 digit month number, not padded
 * <li><i>MM</i> - 1 or 2 digit month number, 0 padded to 2 digits
 * <li><i>N</i> - 1 character month name abbreviation
 * <li><i>NN</i> - 2 character month name abbreviation
 * <li><i>MMM</i> - 3 character month month name abbreviation
 * <li><i>MMMM</i> - fully spelled out month name
 * <li><i>yy</i> - 2 digit year
 * <li><i>yyyy</i> - 4 digit year
 * <li><i>E</i> - day-of-week name, abbreviated to a single character
 * <li><i>EE</i> - day-of-week name, abbreviated to a max of 2 characters
 * <li><i>EEE</i> - day-of-week name, abbreviated to a max of 3 characters
 * <li><i>EEEE</i> - day-of-week name fully spelled out 
 * <li><i>G</i> - era designator
 * <li><i>w</i> - week number in year
 * <li><i>ww</i> - week number in year, 0 padded to 2 digits
 * <li><i>W</i> - week in month
 * <li><i>h</i> - hour (1 to 12)
 * <li><i>hh</i> - hour (1 to 12), 0 padded to 2 digits
 * <li><i>k</i> - hour (1 to 24)
 * <li><i>kk</i> - hour (1 to 24), 0 padded to 2 digits
 * <li><i>H</i> - hour (0 to 23)
 * <li><i>HH</i> - hour (0 to 23), 0 padded to 2 digits
 * <li><i>K</i> - hour (0 to 11)
 * <li><i>KK</i> - hour (0 to 11), 0 padded to 2 digits
 * <li><i>m</i> - minute in hour
 * <li><i>mm</i> - minute in hour, 0 padded to 2 digits
 * <li><i>s</i> - second in minute
 * <li><i>ss</i> - second in minute, 0 padded to 2 digits
 * <li><i>S</i> - millisecond (1 to 3 digits)
 * <li><i>SSS</i> - millisecond, 0 padded to 3 digits
 * <li><i>z</i> - general time zone
 * <li><i>Z</i> - RFC 822 time zone
 * </ul>
 * 
 * <li>onLoad - a callback function to call when the date format object is fully 
 * loaded. When the onLoad option is given, the DateFmt object will attempt to
 * load any missing locale data using the ilib loader callback.
 * When the constructor is done (even if the data is already preassembled), the 
 * onLoad function is called with the current instance as a parameter, so this
 * callback can be used with preassembled or dynamic loading or a mix of the two.
 * 
 * <li>sync - tell whether to load any missing locale data synchronously or 
 * asynchronously. If this option is given as "false", then the "onLoad"
 * callback must be given, as the instance returned from this constructor will
 * not be usable for a while. 
 * </ul>
 * 
 * Any substring containing letters within single or double quotes will be used 
 * as-is in the final output and will not be interpretted for codes as above.<p>
 * 
 * Example: a date format in Spanish might be given as: "'El' d. 'de' MMMM", where
 * the 'El' and the 'de' are left as-is in the output because they are quoted. Typical 
 * output for this example template might be, "El 5. de Mayo".
 * 
 * The following options will be used when formatting a date/time with an explicit
 * template:
 * 
 * <ul>
 * <li>locale - the locale is only used for 
 * translations of things like month names or day-of-week names.
 * <li>calendar - used to translate a date instance into date/time component values 
 * that can be formatted into the template
 * <li>timezone - used to figure out the offset to add or subtract from the time to
 * get the final time component values
 * <li>clock - used to figure out whether to format times with a 12 or 24 hour clock.
 * If this option is specified, it will override the hours portion of a time format.
 * That is, "hh" is switched with "HH" and "kk" is switched with "KK" as appropriate. 
 * If this option is not specified, the 12/24 code in the template will dictate whether 
 * to use the 12 or 24 clock, and the 12/24 default in the locale will be ignored.
 * </ul>
 * 
 * All other options will be ignored and their corresponding getter methods will
 * return the empty string.<p>
 * 
 * Depends directive: !depends datefmt.js
 * 
 * @constructor
 * @param {Object} options options governing the way this date formatter instance works
 */
ilib.DateFmt = function(options) {
	var arr, i, bad, formats, sync = true;
	
	this.locale = new ilib.Locale();
	this.type = "date";
	this.length = "s";
	this.dateComponents = "dmy";
	this.timeComponents = "ahm";
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (options.type) {
			if (options.type === 'date' || options.type === 'time' || options.type === 'datetime') {
				this.type = options.type;
			}
		}
		
		if (options.calendar) {
			this.calName = options.calendar;
		}
		
		if (options.length) {
			if (options.length === 'short' ||
				options.length === 'medium' ||
				options.length === 'long' ||
				options.length === 'full') {
				// only use the first char to save space in the json files
				this.length = options.length.charAt(0);
			}
		}
		
		if (options.date) {
			arr = options.date.split("");
			arr.sort(function (left, right) {
				return (left < right) ? -1 : ((right < left) ? 1 : 0);
			});
			bad = false;
			for (i = 0; i < arr.length; i++) {
				if (arr[i] !== 'd' && arr[i] !== 'm' && arr[i] !== 'y' && arr[i] !== 'w' && arr[i] !== 'n') {
					bad = true;
					break;
				}
			}
			if (!bad) {
				this.dateComponents = arr.join("");
			}
		}

		if (options.time) {
			arr = options.time.split("");
			arr.sort(function (left, right) {
				return (left < right) ? -1 : ((right < left) ? 1 : 0);
			});
			this.badTime = false;
			for (i = 0; i < arr.length; i++) {
				if (arr[i] !== 'h' && arr[i] !== 'm' && arr[i] !== 's' && arr[i] !== 'a' && arr[i] !== 'z') {
					this.badTime = true;
					break;
				}
			}
			if (!this.badTime) {
				this.timeComponents = arr.join("");
			}
		}
		
		if (options.clock && (options.clock === '12' || options.clock === '24')) {
			this.clock = options.clock;
		}
		
		if (options.template) {
			// many options are not useful when specifying the template directly, so zero
			// them out.
			this.type = "";
			this.length = "";
			this.dateComponents = "";
			this.timeComponents = "";
			
			this.template = options.template;
		}
		
		if (options.timezone) {
			this.tz = new ilib.TimeZone({
				locale: this.locale, 
				id: options.timezone
			});
		}
		
		if (typeof(options.sync) !== 'undefined') {
			sync = (options.sync == true);
		}
	}

	if (!ilib.DateFmt.cache) {
		ilib.DateFmt.cache = {};
	}

	new ilib.LocaleInfo(this.locale, {
		sync: sync,
		onLoad: ilib.bind(this, function (li) {
			this.locinfo = li;
			
			// get the default calendar name from the locale, and if the locale doesn't define
			// one, use the hard-coded gregorian as the last resort
			this.calName = this.calName || this.locinfo.getCalendar() || "gregorian";
			switch (this.calName) {
				case 'julian':
					this.cal = new ilib.Cal.Julian();
					break;
				default:
					// just use the default Gregorian instead
					this.cal = new ilib.Cal.Gregorian();
					break;
			}

			if (this.timeComponents &&
					(this.clock === '24' || 
					(!this.clock && this.locinfo.getClock() === "24"))) {
				// make sure we don't have am/pm in 24 hour mode unless the user specifically
				// requested it in the time component option
				this.timeComponents = this.timeComponents.replace("a", "");
			}
			
			// load the strings used to translate the components
			new ilib.ResBundle({
				locale: this.locale,
				name: "sysres",
				sync: sync,
				onLoad: ilib.bind(this, function (rb) {
					this.sysres = rb;
					
					if (!this.template) {
						ilib.loadData(ilib.DateFmt, this.locale, "dateformats", sync, this.loadParams, ilib.bind(this, function (formats) {
							if (!formats) {
								formats = ilib.data.dateformats;
								var spec = this.locale.getSpec().replace(/-/g, '_');
								ilib.DateFmt.cache[spec] = formats;
							}
							this._initTemplate(formats);
							this._massageTemplate();
							if (options && typeof(options.onLoad) === 'function') {
								options.onLoad(this);
							}
						}));
					} else {
						this._massageTemplate();
						if (options && typeof(options.onLoad) === 'function') {
							options.onLoad(this);
						}
					}
				})
			});	
		})
	});
};

// used in getLength
ilib.DateFmt.lenmap = {
	"s": "short",
	"m": "medium",
	"l": "long",
	"f": "full"
};

ilib.DateFmt.zeros = "0000";

ilib.DateFmt.prototype = {
	/**
	 * @protected
	 */
	_initTemplate: function (formats) {
		if (formats[this.calName]) {
			/** 
			 * @private
			 * @type {{order:(string|{s:string,m:string,l:string,f:string}),date:Object.<string, (string|{s:string,m:string,l:string,f:string})>,time:Object.<string,(string|{s:string,m:string,l:string,f:string})>,range:Object.<string, (string|{s:string,m:string,l:string,f:string})>}}
			 */
			this.formats = formats[this.calName];
			if (typeof(this.formats) === "string") {
				// alias to another calendar type
				this.formats = formats[this.formats];
			}
			
			this.template = "";
			
			switch (this.type) {
				case "datetime":
					this.template = (this.formats && this._getLengthFormat(this.formats.order, this.length)) || "{date} {time}";
					this.template = this.template.replace("{date}", this._getFormat(this.formats.date, this.dateComponents, this.length));
					this.template = this.template.replace("{time}", this._getFormat(this.formats.time, this.timeComponents, this.length));
					break;
				case "date":
					this.template = this._getFormat(this.formats.date, this.dateComponents, this.length);
					break;
				case "time":
					this.template = this._getFormat(this.formats.time, this.timeComponents, this.length);
					break;
			}
		} else {
			throw "No formats available for calendar " + this.calName + " in locale " + this.locale.toString();
		}
	},
	
	/**
	 * @protected
	 */
	_massageTemplate: function () {
		var i;
		
		if (this.clock && this.template) {
			// explicitly set the hours to the requested type
			var temp = "";
			switch (this.clock) {
				case "24":
					for (i = 0; i < this.template.length; i++) {
						if (this.template.charAt(i) == "'") {
							temp += this.template.charAt(i++);
							while (i < this.template.length && this.template.charAt(i) !== "'") {
								temp += this.template.charAt(i++);
							}
							if (i < this.template.length) {
								temp += this.template.charAt(i);
							}
						} else if (this.template.charAt(i) == 'K') {
							temp += 'k';
						} else if (this.template.charAt(i) == 'h') {
							temp += 'H';
						} else {
							temp += this.template.charAt(i);
						}
					}
					this.template = temp;
					break;
				case "12":
					for (i = 0; i < this.template.length; i++) {
						if (this.template.charAt(i) == "'") {
							temp += this.template.charAt(i++);
							while (i < this.template.length && this.template.charAt(i) !== "'") {
								temp += this.template.charAt(i++);
							}
							if (i < this.template.length) {
								temp += this.template.charAt(i);
							}
						} else if (this.template.charAt(i) == 'k') {
							temp += 'K';
						} else if (this.template.charAt(i) == 'H') {
							temp += 'h';
						} else {
							temp += this.template.charAt(i);
						}
					}
					this.template = temp;
					break;
			}
		}
		
		// tokenize it now for easy formatting
		this.templateArr = this._tokenize(this.template);
	},
    
	/**
	 * @protected
	 * Convert the template into an array of date components separated by formatting chars.
	 * @param {string} template Format template to tokenize into components
	 * @return {Array.<string>} a tokenized array of date format components
	 */
	_tokenize: function (template) {
		var i = 0, start, ch, letter, arr = [];
		
		// console.log("_tokenize: tokenizing template " + template);
		if (template) {
			while (i < template.length) {
				ch = template.charAt(i);
				start = i;
				if (ch === "'") {
					// console.log("found quoted string");
					i++;
					// escaped string - push as-is, then dequote later
					while (i < template.length && template.charAt(i) !== "'") {
						i++;
					}
					if (i < template.length) {
						i++;	// grab the other quote too
					}
				} else if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
					letter = template.charAt(i);
					// console.log("found letters " + letter);
					while (i < template.length && ch === letter) {
						ch = template.charAt(++i);
					}
				} else {
					// console.log("found other");
					while (i < template.length && ch !== "'" && (ch < 'a' || ch > 'z') && (ch < 'A' || ch > 'Z')) {
						ch = template.charAt(++i);
					}
				}
				arr.push(template.substring(start,i));
				// console.log("start is " + start + " i is " + i + " and substr is " + template.substring(start,i));
			}
		}
		return arr;
	},
                          
	/**
	 * @protected
	 * @param {Object.<string, (string|{s:string,m:string,l:string,f:string})>} obj Object to search
	 * @param {string} components Format components to search
	 * @param {string} length Length of the requested format
	 * @return {string|undefined} the requested format
	 */
	_getFormat: function getFormat(obj, components, length) {
		if (typeof(components) !== 'undefined' && obj[components]) {
			return this._getLengthFormat(obj[components], length);
		}
		return undefined;
	},

	/**
	 * @protected
	 * @param {(string|{s:string,m:string,l:string,f:string})} obj Object to search
	 * @param {string} length Length of the requested format
	 * @return {(string|undefined)} the requested format
	 */
	_getLengthFormat: function getLengthFormat(obj, length) {
		if (typeof(obj) === 'string') {
			return obj;
		} else if (obj[length]) {
			return obj[length];
		}
		return undefined;
	},

	/**
	 * Return the locale used with this formatter instance.
	 * @return {ilib.Locale} the ilib.Locale instance for this formatter
	 */
	getLocale: function() {
		return this.locale;
	},
	
	/**
	 * Return the template string that is used to format date/times for this
	 * formatter instance. This will work, even when the template property is not explicitly 
	 * given in the options to the constructor. Without the template option, the constructor 
	 * will build the appropriate template according to the options and use that template
	 * in the format method. 
	 * 
	 * @return {string} the format template for this formatter
	 */
	getTemplate: function() {
		return this.template;
	},
	
	/**
	 * Return the type of this formatter. The type is a string that has one of the following
	 * values: "time", "date", "datetime".
	 * @return {string} the type of the formatter
	 */
	getType: function() {
		return this.type;
	},
	
	/**
	 * Return the name of the calendar used to format date/times for this
	 * formatter instance.
	 * @return {string} the name of the calendar used by this formatter
	 */
	getCalendar: function () {
		return this.cal.getType();
	},
	
	/**
	 * Return the length used to format date/times in this formatter. This is either the
	 * value of the length option to the constructor, or the default value.
	 * 
	 * @return {string} the length of formats this formatter returns
	 */
	getLength: function () {
		return ilib.DateFmt.lenmap[this.length] || "";
	},
	
	/**
	 * Return the date components that this formatter formats. This is either the 
	 * value of the date option to the constructor, or the default value. If this
	 * formatter is a time-only formatter, this method will return the empty 
	 * string. The date component letters may be specified in any order in the 
	 * constructor, but this method will reorder the given components to a standard 
	 * order.
	 * 
	 * @return {string} the date components that this formatter formats
	 */
	getDateComponents: function () {
		return this.dateComponents || "";
	},

	/**
	 * Return the time components that this formatter formats. This is either the 
	 * value of the time option to the constructor, or the default value. If this
	 * formatter is a date-only formatter, this method will return the empty 
	 * string. The time component letters may be specified in any order in the 
	 * constructor, but this method will reorder the given components to a standard 
	 * order.
	 * 
	 * @return {string} the time components that this formatter formats
	 */
	getTimeComponents: function () {
		return this.timeComponents || "";
	},

	/**
	 * Return the time zone used to format date/times for this formatter
	 * instance.
	 * @return a string naming the time zone
	 */
	getTimeZone: function () {
		// Lazy load the time zone. If it wasn't explicitly set up before, set 
		// it up now, but use the 
		// default TZ for the locale. This way, if the caller never uses the
		// time zone in their format, we never have to load up a TimeZone
		// instance into this formatter.
		if (!this.tz) {
			this.tz = new ilib.TimeZone({locale: this.locale});
		}
		return this.tz;
	},
	
	/**
	 * Return the clock option set in the constructor. If the clock option was
	 * not given, the default from the locale is returned instead.
	 * @return {string} "12" or "24" depending on whether this formatter uses
	 * the 12-hour or 24-hour clock
	 */
	getClock: function () {
		return this.clock || this.locinfo.getClock();
	},
	
	/**
	 * Convert this formatter to a string representation by returning the
	 * format template. This method delegates to getTemplate.
	 * 
	 * @return {string} the format template
	 */
	toString: function() {
		return this.getTemplate();
	},
	
	/*
	 * @private
	 * Left pad the str to the given length of digits with zeros
	 * @param {string} str the string to pad
	 * @param {number} length the desired total length of the output string, padded 
	 */
	_pad: function (str, length) {
		if (typeof(str) !== 'string') {
			str = "" + str;
		}
		return (str.length >= length) ? str : ilib.DateFmt.zeros.substring(0,length-str.length) + str;
	},
	
	/*
	 * @private
	 * Format a date according to a sequence of components. 
	 * @param {ilib.Date} date a date/time object to format
	 * @param {Array.<string>} templateArr an array of components to format
	 * @return {string} the formatted date
	 */
	_formatTemplate: function (date, templateArr) {
		var i, key, temp, tz, str = "";
		for (i = 0; i < templateArr.length; i++) {
			switch (templateArr[i]) {
				case 'd':
					str += (date.day || 1);
					break;
				case 'dd':
					str += this._pad(date.day || 1, 2);
					break;
				case 'yy':
					temp = "" + (date.year || 1);
					str += this._pad(temp.substring(2,4), 2);
					break;
				case 'yyyy':
					str += this._pad(date.year || 1, 4);
					break;
				case 'M':
					str += (date.month || 1);
					break;
				case 'MM':
					str += this._pad(date.month || 1, 2);
					break;

				case 'h':
					temp = (date.hour || 0) % 12;
					if (temp == 0) {
						temp = "12";
					}
					str += temp; 
					break;
				case 'hh':
					temp = (date.hour || 0) % 12;
					if (temp == 0) {
						temp = "12";
					}
					str += this._pad(temp, 2);
					break;
				case 'K':
					temp = (date.hour || 0) % 12;
					str += temp; 
					break;
				case 'KK':
					temp = (date.hour || 0) % 12;
					str += this._pad(temp, 2);
					break;

				case 'H':
					str += (date.hour || 0);
					break;
				case 'HH':
					str += this._pad(date.hour || 0, 2);
					break;
				case 'k':
					str += (date.hour == 0 ? "24" : date.hour);
					break;
				case 'kk':
					temp = (date.hour == 0 ? "24" : date.hour);
					str += this._pad(temp, 2);
					break;

				case 'm':
					str += (date.minute || 0);
					break;
				case 'mm':
					str += this._pad(date.minute || 0, 2);
					break;
				case 's':
					str += (date.minute || 0);
					break;
				case 'ss':
					str += this._pad(date.second || 0, 2);
					break;
				case 'S':
					str += (date.millisecond || 0);
					break;
				case 'SSS':
					str += this._pad(date.millisecond || 0, 3);
					break;

				case 'N':
				case 'NN':
				case 'MMM':
				case 'MMMM':
					key = templateArr[i] + (date.month || 1);
					str += (this.sysres.getString(undefined, key + "-" + this.calName) || this.sysres.getString(undefined, key));
					break;

				case 'E':
				case 'EE':
				case 'EEE':
				case 'EEEE':
					key = templateArr[i] + date.getDayOfWeek();
					//console.log("finding " + key + " in the resources");
					str += (this.sysres.getString(undefined, key + "-" + this.calName) || this.sysres.getString(undefined, key));
					break;
					
				case 'a':
					if (this.locale.getLanguage() === 'zh') {
						if (date.hour < 6) {
							key = "azh0";
						} else if (date.hour < 9) {
							key = "azh1";
						} else if (date.hour < 12) {
							key = "azh2";
						} else if (date.hour < 13) {
							key = "azh3";
						} else if (date.hour < 18) {
							key = "azh4";
						} else if (date.hour < 21) {
							key = "azh5";
						} else {
							key = "azh6";
						}
					} else {
						key = date.hour < 12 ? "a0" : "a1";
					}
					//console.log("finding " + key + " in the resources");
					str += (this.sysres.getString(undefined, key + "-" + this.calName) || this.sysres.getString(undefined, key));
					break;
					
				case 'w':
					str += date.getWeekOfYear();
					break;
				case 'ww':
					str += this._pad(date.getWeekOfYear(), 2);
					break;

				case 'D':
					str += date.getDayOfYear();
					break;
				case 'DD':
					str += this._pad(date.getDayOfYear(), 2);
					break;
				case 'DDD':
					str += this._pad(date.getDayOfYear(), 3);
					break;
				case 'W':
					str += date.getWeekOfMonth(this.locale);
					break;

				case 'G':
					key = "G" + date.getEra();
					str += (this.sysres.getString(undefined, key + "-" + this.calName) || this.sysres.getString(undefined, key));
					break;

				case 'O':
					temp = this.sysres.getString("1#1st|2#2nd|3#3rd|21#21st|22#22nd|23#23rd|31#31st|#{num}th", "ordinalChoice");
					str += temp.formatChoice(date.day, {num: date.day});
					break;
					
				case 'z': // general time zone
					tz = this.getTimeZone(); // lazy-load the tz
					str += tz.getDisplayName(date, "standard");
					break;
				case 'Z': // RFC 822 time zone
					tz = this.getTimeZone(); // lazy-load the tz
					str += tz.getDisplayName(date, "rfc822");
					break;

				default:
					str += templateArr[i].replace(/'/g, "");
					break;
			}
		}
		return str;
	},
	
	/**
	 * Format a particular date instance according to the settings of this
	 * formatter object. The type of the date instance being formatted must 
	 * correspond exactly to the calendar type with which this formatter was 
	 * constructed. If the types are not compatible, this formatter will
	 * produce bogus results.
	 * 
	 * @param {ilib.Date} date a date to format
	 * @return {string} the formatted version of the given date instance
	 */
	format: function (date) {
		if (!date.getCalendar || date.getCalendar() !== this.calName) {
			throw "Wrong date type passed to ilib.DateFmt.format()";
		}
		
		// convert to the time zone of this formatter before formatting
		if (date.timezone && this.tz) {
			// console.log("Differing time zones " + date.timezone + " and " + this.tz.getId() + ". Converting...");
			
			var datetz = new ilib.TimeZone({
				locale: date.locale,
				id: date.timezone
			});
			
			var dateOffset = datetz.getOffset(date),
				fmtOffset = this.tz.getOffset(date),
				// relative offset in seconds
				offset = (dateOffset.h || 0)*60*60 + (dateOffset.m || 0)*60 + (dateOffset.s || 0) -
					((fmtOffset.h || 0)*60*60 + (fmtOffset.m || 0)*60 + (fmtOffset.s || 0));
			
			//console.log("Date offset is " + JSON.stringify(dateOffset));
			//console.log("Formatter offset is " + JSON.stringify(fmtOffset));
			//console.log("Relative offset is " + offset + " seconds.");
			
			var newDate = ilib.Date.newInstance({
				type: this.calName,
				rd: date.getRataDie() - (offset / 86400) // 86400 seconds in a day
			});
			
			date = newDate;
		}
		return this._formatTemplate(date, this.templateArr);
	},
	
	/**
	 * Return a string that describes a date relative to the given 
	 * reference date. The string returned is text that for the locale that
	 * was specified when the formatter instance was constructed.<p>
	 * 
	 * The date can be in the future relative to the reference date or in
	 * the past, and the formatter will generate the appropriate string.<p>
	 * 
	 * The text used to describe the relative reference depends on the length
	 * of time between the date and the reference. If the time was in the
	 * past, it will use the "ago" phrase, and in the future, it will use
	 * the "in" phrase. Examples:<p>
	 * 
	 * <ul>
	 * <li>within a minute: either "X seconds ago" or "in X seconds"
	 * <li>within an hour: either "X minutes ago" or "in X minutes"
	 * <li>within a day: either "X hours ago" or "in X hours"
	 * <li>within 2 weeks: either "X days ago" or "in X days"
	 * <li>within 12 weeks (~3 months): either "X weeks ago" or "in X weeks"
	 * <li>within two years: either "X months ago" or "in X months"
	 * <li>longer than 2 years: "X years ago" or "in X years"
	 * </ul>
	 * 
	 * @param {ilib.Date} reference a date that the date parameter should be relative to
	 * @param {ilib.Date} date a date being formatted
	 * @throws "Wrong calendar type" when the start or end dates are not the same
	 * calendar type as the formatter itself
	 * @return {string} the formatted relative date
	 */
	formatRelative: function(reference, date) {
		var referenceRd, dateRd, fmt, time, diff, num;
		
		if (typeof(reference) !== 'object' || !reference.getCalendar || reference.getCalendar() !== this.calName ||
			typeof(date) !== 'object' || !date.getCalendar || date.getCalendar() !== this.calName) {
			throw "Wrong calendar type";
		}
		
		referenceRd = reference.getRataDie();
		dateRd = date.getRataDie();
		
		if (dateRd < referenceRd) {
			diff = referenceRd - dateRd;
			fmt = this.sysres.getString("{duration} ago");
		} else {
			diff = dateRd - referenceRd;
			fmt = this.sysres.getString("in {duration}");
		}
		
		if (diff < 0.000694444) {
			num = Math.round(diff * 86400);
			switch (this.length) {
				case 's':
					time = this.sysres.getString("#{num}s");
					break;
				case 'm':
					time = this.sysres.getString("1#1 se|#{num} sec");
					break;
				case 'l':
					time = this.sysres.getString("1#1 sec|#{num} sec");
					break;
				default:
				case 'f':
					time = this.sysres.getString("1#1 second|#{num} seconds");
					break;
			}
		} else if (diff < 0.041666667) {
			num = Math.round(diff * 1440);
			switch (this.length) {
				case 's':
					time = this.sysres.getString("#{num}m", "durationShortMinutes");
					break;
				case 'm':
					time = this.sysres.getString("1#1 mi|#{num} min");
					break;
				case 'l':
					time = this.sysres.getString("1#1 min|#{num} min");
					break;
				default:
				case 'f':
					time = this.sysres.getString("1#1 minute|#{num} minutes");
					break;
			}
		} else if (diff < 1) {
			num = Math.round(diff * 24);
			switch (this.length) {
				case 's':
					time = this.sysres.getString("#{num}h");
					break;
				case 'm':
					time = this.sysres.getString("1#1 hr|#{num} hrs", "durationMediumHours");
					break;
				case 'l':
					time = this.sysres.getString("1#1 hr|#{num} hrs");
					break;
				default:
				case 'f':
					time = this.sysres.getString("1#1 hour|#{num} hours");
					break;
			}
		} else if (diff < 14) {
			num = Math.round(diff);
			switch (this.length) {
				case 's':
					time = this.sysres.getString("#{num}d");
					break;
				case 'm':
					time = this.sysres.getString("1#1 dy|#{num} dys");
					break;
				case 'l':
					time = this.sysres.getString("1#1 day|#{num} days", "durationLongDays");
					break;
				default:
				case 'f':
					time = this.sysres.getString("1#1 day|#{num} days");
					break;
			}
		} else if (diff < 84) {
			num = Math.round(diff/7);
			switch (this.length) {
				case 's':
					time = this.sysres.getString("#{num}w");
					break;
				case 'm':
					time = this.sysres.getString("1#1 wk|#{num} wks", "durationMediumWeeks");
					break;
				case 'l':
					time = this.sysres.getString("1#1 wk|#{num} wks");
					break;
				default:
				case 'f':
					time = this.sysres.getString("1#1 week|#{num} weeks");
					break;
			}
		} else if (diff < 730) {
			num = Math.round(diff/30.4);
			switch (this.length) {
				case 's':
					time = this.sysres.getString("#{num}m", "durationShortMonths");
					break;
				case 'm':
					time = this.sysres.getString("1#1 mo|#{num} mos");
					break;
				case 'l':
					time = this.sysres.getString("1#1 mon|#{num} mons");
					break;
				default:
				case 'f':
					time = this.sysres.getString("1#1 month|#{num} months");
					break;
			}
		} else {
			num = Math.round(diff/365);
			switch (this.length) {
				case 's':
					time = this.sysres.getString("#{num}y");
					break;
				case 'm':
					time = this.sysres.getString("1#1 yr|#{num} yrs", "durationMediumYears");
					break;
				case 'l':
					time = this.sysres.getString("1#1 yr|#{num} yrs");
					break;
				default:
				case 'f':
					time = this.sysres.getString("1#1 year|#{num} years");
					break;
			}
		}
		return fmt.format({duration: time.formatChoice(num, {num: num})});
	}
};
