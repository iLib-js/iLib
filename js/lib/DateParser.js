/*
 * DateParser.js - Date string parser
 *
 * Copyright © 2020, JEDLSoft
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

// !data dateformats sysres

var ilib = require("../index.js");
var Utils = require("./Utils.js");
var JSUtils = require("./JSUtils.js");

var DateFmt = require("./DateFmt.js");
var Locale = require("./Locale.js");
var LocaleInfo = require("./LocaleInfo.js");

var IDate = require("./IDate.js");
var DateFactory = require("./DateFactory.js");
var CalendarFactory = require("./CalendarFactory.js");

var ResBundle = require("./ResBundle.js");
var TimeZone = require("./TimeZone.js");

var isAlpha = require("./isAlpha.js");
var isDigit = require("./isDigit.js");
var isSpace = require("./isSpace.js");
var CaseMapper = require("./CaseMapper.js");

var hourLetters = {
    "h": true,
    "hh": true,
    "H": true,
    "HH": true,
    "k": true,
    "kk": true,
    "K": true,
    "KK": true
};

var fields = {
    'd': "day",
    'dd': "day",
    'N': "month",
    'NN': "month",
    'M': "month",
    'MM': "month",
    'MMM': "month",
    'MMMM': "month",
    'L': "month",
    'LL': "month",
    'LLL': "month",
    'LLLL': "month",
    'yy': "year",
    'yyyy': "year",
    'h': "hour",
    'hh': "hour",
    'H': "hour",
    'HH': "hour",
    'k': "hour",
    'kk': "hour",
    'K': "hour",
    'KK': "hour",
    'm': "minute",
    'mm': "minute",
    's': "second",
    'ss': "second",
    'S': "millisecond",
    'SSS': "millisecond",
    'a': "meridiem",
    'G': "era",
    'z': "timezone",
    'Z': "timezone"
};

/**
 * @class
 * Class to create a new ilib date instances from strings. This class
 * uses a date formatter instance to figure out the usual and expected order of
 * the date components and tries to parse them appropriately. This does not work
 * in all cases, as sometimes date components are ambiguous.<p>
 *
 * The options may contain any of the following properties:
 *
 * <ul>
 * <li><i>locale</i> - locale to use when parsing the date/time. If the locale is
 * not specified, then the default locale of the app or web page will be used.
 *
 * <li><i>calendar</i> - the type of calendar to use for this parser. The value should
 * be a sting containing the name of the calendar. Currently, the supported
 * types are "gregorian", "julian", "arabic", "hebrew", or "chinese". If the
 * calendar is not specified, then the default calendar for the locale is used. When the
 * calendar type is specified, the date returned from this factory method is a date instance
 * of the given calendar type.
 *
 * <li><i>timezone</i> - time zone to use when parsing times. This may be a TimeZone
 * instance or a time zone specifier from the IANA list of time zone database names
 * (eg. "America/Los_Angeles"),
 * the string "local", or a string specifying the offset in RFC 822 format. The IANA
 * list of time zone names can be viewed at
 * <a href="http://en.wikipedia.org/wiki/List_of_tz_database_time_zones">this page</a>.
 * If the time zone is given as "local", the offset from UTC as given by
 * the Javascript system is used. If the offset is given as an RFC 822 style offset
 * specifier, it will parse that string and use the resulting offset. If the time zone
 * is not specified, the default time zone for the locale is used. If a time zone is
 * given in the parsed string, that will override any setting to this parser, as it
 * is more specific that this property.
 *
 * <li><i>onLoad</i> - a callback function to call when the parser is done. Because
 * this parser may depend on a DateParser instance which is itself asynchronous, this
 * method must also support async. When the onLoad option is given, the parser will attempt to
 * load any missing locale data using the ilib loader callback.
 * When the constructor is done (even if the data is already preassembled), the
 * onLoad function is called with the current instance as a parameter, so this
 * callback can be used with preassembled or dynamic loading or a mix of the two.
 *
 * <li><i>sync</i> - tell whether to load any missing locale data synchronously or
 * asynchronously. If this option is given as "false", then the "onLoad"
 * callback must be given, as the instance returned from this constructor will
 * not be usable for a while.
 *
 * <li><i>loadParams</i> - an object containing parameters to pass to the
 * loader callback function when locale data is missing. The parameters are not
 * interpretted or modified in any way. They are simply passed along. The object
 * may contain any property/value pairs as long as the calling code is in
 * agreement with the loader callback function as to what those parameters mean.
 * </ul>
 *
 * @constructor
 * @param {Object} options options governing the way this date formatter instance works
 */
var DateParser = function(options) {
    var arr, i, bad, c, comps,
        sync = true,
        loadParams = undefined;

    this.locale = new Locale();

    options = options || {sync: true};
    if (options.locale) {
        this.locale = (typeof(options.locale) === 'string') ? new Locale(options.locale) : options.locale;
    }

    if (options.calendar) {
        this.calName = options.calendar.toLowerCase();
    }

    if (options.timezone) {
        if (options.timezone instanceof TimeZone) {
            this.tz = options.timezone;
            this.timezone = this.tz.getId();
        } else {
            this.timezone = options.timezone;
        }
    }

    if (typeof(options.sync) !== 'undefined') {
        sync = (options.sync === true);
    } else {
        sync = true;
    }

    loadParams = options.loadParams;

    this.toLower = new CaseMapper({
        locale: this.locale,
        direction: "tolower"
    });

    new DateFmt({
        locale: this.locale,
        timezone: this.timezone,
        calendar: this.calName,
        type: "datetime",
        sync: sync,
        loadParams: loadParams,
        onLoad: ilib.bind(this, function(df) {
            this.df = df;
            this.monthNames = {};
            this.meridiems = {};
            this.eras = {};

            var templates = [
                "MMMM",
                "MMM",
                "NN",
                "N"
            ];
            var calName = (!this.calName || this.calName === "gregorian") ? "" : this.calName;

            // 14 is more months than all of the calendars we support
            for (var i = 1; i <= 14; i++) {
                templates.forEach(ilib.bind(this, function(template) {
                    var id = template + String(i);
                    var name = this.df.sysres.getStringJS(id, calName);
                    if (name && name !== id) {
                        this.monthNames[this.toLower.map(name)] = i;
                    }
                }));
            }

            // get the meridiems
            for (i = 0; i < 6; i++) {
                var id = ((this.locale.language === "zh") ? "azh" : "a") + i;
                var meridiem = this.df.sysres.getStringJS(id, calName);
                if (meridiem && meridiem !== id) {
                    this.meridiems[this.toLower.map(meridiem)] = i;
                }
            }

            // get the eras
            var id = "G-1";
            var era = this.df.sysres.getStringJS(id, calName);
            if (era && era !== id) {
                this.eras[this.toLower.map(era)] = i;
            }
            id = "G1";
            era = this.df.sysres.getStringJS(id, calName);
            if (era && era !== id) {
                this.eras[this.toLower.map(era)] = i;
            }

            var arr = this.df.templateArr;
            var i = 0;
            while (i < arr.length && !hourLetters[arr[i]]) {
                i++;
            }
            if (hourLetters[arr[i]]) {
                this.timeSeparator = arr[i+1];
            }

            if (typeof(options.onLoad) === "function") {
                options.onLoad(this);
            }
        })
    });
};

DateParser.defaultFmt = {
    "gregorian": {
        "order": "{date} {time}",
        "date": {
            "dmwy": "EEE d/MM/yyyy",
            "dmy": "d/MM/yyyy",
            "dmw": "EEE d/MM",
            "dm": "d/MM",
            "my": "MM/yyyy",
            "dw": "EEE d",
            "d": "dd",
            "m": "MM",
            "y": "yyyy",
            "n": "NN",
            "w": "EEE"
        },
        "time": {
            "12": "h:mm:ssa",
            "24": "H:mm:ss"
        },
        "range": {
            "c00": "{st} - {et}, {sd}/{sm}/{sy}",
            "c01": "{sd}/{sm} {st} - {ed}/{em} {et}, {sy}",
            "c02": "{sd}/{sm} {st} - {ed}/{em} {et}, {sy}",
            "c03": "{sd}/{sm}/{sy} {st} - {ed}/{em}/{ey} {et}",
            "c10": "{sd}-{ed}/{sm}/{sy}",
            "c11": "{sd}/{sm} - {ed}/{em} {sy}",
            "c12": "{sd}/{sm}/{sy} - {ed}/{em}/{ey}",
            "c20": "{sm}/{sy} - {em}/{ey}",
            "c30": "{sy} - {ey}"
        }
    },
    "islamic": "gregorian",
    "hebrew": "gregorian",
    "julian": "gregorian",
    "buddhist": "gregorian",
    "persian": "gregorian",
    "persian-algo": "gregorian",
    "han": "gregorian"
};

/**
 * Return the range of possible meridiems (times of day like "AM" or
 * "PM") in this date formatter.<p>
 *
 * The options may contain any of the following properties:
 *
 * <ul>
 * <li><i>locale</i> - locale to use when formatting the date/time. If the locale is
 * not specified, then the default locale of the app or web page will be used.
 *
 * <li><i>meridiems</i> - string that specifies what style of meridiems to use with this
 * format. The choices are "default", "gregorian", "ethiopic", and "chinese". The "default"
 * style is often the simple Gregorian AM/PM, but the actual style is chosen by the locale.
 * (For almost all locales, the Gregorian AM/PM style is most frequently used.)
 * The "ethiopic" style uses 5 different meridiems for "morning", "noon", "afternoon",
 * "evening", and "night". The "chinese" style uses 7 different meridiems corresponding
 * to the various parts of the day. N.B. Even for the Chinese locales, the default is "gregorian"
 * when formatting dates in the Gregorian calendar.
 * </ul>
 *
 * @static
 * @public
 * @param {Object} options options governing the way this date formatter instance works for getting meridiems range
 * @return {Array.<{name:string,start:string,end:string}>}
 */
DateParser.getMeridiemsRange = function (options) {
    options = options || {sync: true};
    var args = JSUtils.merge({}, options);
    args.onLoad = function(fmt) {
        if (typeof(options.onLoad) === "function") {
            options.onLoad(fmt.getMeridiemsRange());
        }
    };
    var fmt = new DateParser(args);

    return fmt.getMeridiemsRange();
};

DateParser.prototype = {

    /**
     * Return the locale used with this formatter instance.
     * @return {Locale} the Locale instance for this formatter
     */
    getLocale: function() {
        return this.locale;
    },

    /**
     * Return the name of the calendar used to format date/times for this
     * formatter instance.
     * @return {string} the name of the calendar used by this formatter
     */
    getCalendar: function () {
        return this.calName;
    },

    /**
     * Return the time zone used to format date/times for this formatter
     * instance.
     * @return {TimeZone} a time zone object that this formatter is formatting for
     */
    getTimeZone: function () {
        return this.timezone;
    },

    /**
     * Return the meridiems range in current locale.
     * @return {Array.<{name:string,start:string,end:string}>} the range of available meridiems
     */
    getMeridiemsRange: function () {
        var result;
        var _getSysString = function (key) {
            return (this.sysres.getString(undefined, key + "-" + this.calName) || this.sysres.getString(undefined, key)).toString();
        };

        switch (this.meridiems) {
        case "chinese":
            result = [
                {
                    name: _getSysString.call(this, "azh0"),
                    start: "00:00",
                    end: "05:59"
                },
                {
                    name: _getSysString.call(this, "azh1"),
                    start: "06:00",
                    end: "08:59"
                },
                {
                    name: _getSysString.call(this, "azh2"),
                    start: "09:00",
                    end: "11:59"
                },
                {
                    name: _getSysString.call(this, "azh3"),
                    start: "12:00",
                    end: "12:59"
                },
                {
                    name: _getSysString.call(this, "azh4"),
                    start: "13:00",
                    end: "17:59"
                },
                {
                    name: _getSysString.call(this, "azh5"),
                    start: "18:00",
                    end: "20:59"
                },
                {
                    name: _getSysString.call(this, "azh6"),
                    start: "21:00",
                    end: "23:59"
                }
            ];
            break;
        case "ethiopic":
            result = [
                {
                    name: _getSysString.call(this, "a0-ethiopic"),
                    start: "00:00",
                    end: "05:59"
                },
                {
                    name: _getSysString.call(this, "a1-ethiopic"),
                    start: "06:00",
                    end: "06:00"
                },
                {
                    name: _getSysString.call(this, "a2-ethiopic"),
                    start: "06:01",
                    end: "11:59"
                },
                {
                    name: _getSysString.call(this, "a3-ethiopic"),
                    start: "12:00",
                    end: "17:59"
                },
                {
                    name: _getSysString.call(this, "a4-ethiopic"),
                    start: "18:00",
                    end: "23:59"
                }
            ];
            break;
        default:
            result = [
                {
                    name: _getSysString.call(this, "a0"),
                    start: "00:00",
                    end: "11:59"
                },
                {
                    name: _getSysString.call(this, "a1"),
                    start: "12:00",
                    end: "23:59"
                }
            ];
            break;
        }

        return result;
    },

    /**
     * @private
     */
    _tokenize: function(dateStr) {
        var str = this.toLower.map(dateStr);
        var tokens = [];
        var token, start, i = 0;

        while (i < str.length) {
            token = "";

            // skip whitespace
            while (isSpace(str[i]) && i < str.length) {
                i++;
            }

            if (isDigit(str[i])) {
                start = i;
                while ((isDigit(str[i]) || str[i] === this.timeSeparator) && i < str.length) {
                    i++;
                }

                tokens.push(str.substring(start, i));
            } else if (isAlpha(str[i])) {
                start = i;
                while (isAlpha(str[i]) && i < str.length) {
                    i++;
                }

                tokens.push(str.substring(start, i));
            }
            // skip other things
            i++;
        }

        return tokens;
    },

    /**
     * Parse a string for date components and return an IDate instance that is
     * equivalent to that date.
     *
     * @param {string} dateStr the string to parse
     * @returns {IDate} an instance of an IDate subclass containing the parsed date
     */
    parse: function (dateStr) {
        var tokens = this._tokenize(dateStr);
        var resolved = {
            timezone: this.tz,
            calendar: this.calName,
            locale: this.locale,
            year: 0,
            month: 0,
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        };
        var numberParts = [];
        // check for months
        var sysres = this.df.sysres;

        // First match the tokens using the regular format

        for (var i = 0; i < tokens.length; i++) {
            if (tokens[i].match(/\d+/)) {
                if (tokens[i].indexOf(this.timeSeparator) > -1) {
                    var parts = tokens[i].split(this.timeSeparator);
                    resolved.hour = parts[0];
                    resolved.minute = parts[1] || 0;
                    resolved.second = parts[2] || 0
                } else {
                    numberParts.push(tokens[i]);
                }
            }

            if (tokens[i].match(/\S+/)) {
                var month = this.monthNames[tokens[i]];
                if (month) {
                    resolved.month = month;
                    continue;
                }

                var meridiem = this.meridiems[tokens[i]];
                if (meridiem) {

                }
            }
        }

        return DateFactory(resolved);
    },
};

module.exports = DateParser;
