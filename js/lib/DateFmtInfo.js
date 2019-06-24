/*
 * DateFmtInfo.js - Information about a date formatter
 *
 * Copyright © 2019, JEDLSoft
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

// !data dateres

var DateFmt = require("./DateFmt.js");

var ilib = require("../index.js");
var JSUtils = require("./JSUtils.js");
var Locale = require("./Locale.js");
var DateFactory = require("./DateFactory.js");
var ResBundle = require("./ResBundle.js");
var TimeZone = require("./TimeZone.js");
var ISet = require("./ISet.js");

/**
 * @class
 * Create a new date formatter info instance. This instance gives information about
 * a particular date formatter that can be used by UI builders to construct
 * input form elements based on the formatter.<p>
 *
 * The options may contain any of the properties that are valid to create a date
 * formatter (q.v.), plus the following:
 *
 * <ul>
 * <li><i>uiLocale</i> - locale of the user interface. This may be different than
 * the locale of the formatter which is given in the "locale" property. The uiLocale
 * specifies the language for translations of things like names of months or days
 * of the week, whereas the locale of the formatter specifies the actual date
 * format, time zone, calendar, etc. of the formatter.
 * </ul>
 *
 * @constructor
 * @param {Object} options options governing the way this date formatter info
 * instance works
 */
var DateFmtInfo = function(options) {
    var sync = typeof(options.sync) === "boolean" ? options.sync : true;
    if (!options || sync) {
        this.fmt = new DateFmt(options);
        this._init(options);
    } else {
        var newOptions = {};
        var callback = options.onLoad;
        JSUtils.shallowCopy(options, newOptions);
        newOptions.onLoad = ilib.bind(this, function(fmt) {
            this.fmt = fmt;
            this._init(options);
        });
        new DateFmt(newOptions);
    }
};

DateFmtInfo.prototype = {
    /**
     * @private
     */
    _init: function(options) {
        var locale, sync = true, callback, loadParams;

        if (options) {
            locale = options.uiLocale || options.locale;
            sync = typeof(options.sync) === "boolean" ? options.sync : true;
            callback = options.onLoad;
            loadParams = options.loadParams;
        }
        var loc = this.fmt.locale;
        if (locale) {
            if (typeof(locale) === "string") {
                locale = new Locale(locale);
            }
            locale = new Locale(locale.getLanguage(), loc.getRegion(), loc.getVariant(), loc.getScript());
        }
        new ResBundle({
            locale: locale,
            name: "dateres",
            sync: sync,
            loadParams: loadParams,
            onLoad: ilib.bind(this, function (rb) {
                this.rb = rb;
                if (locale && locale.getLanguage() !== this.fmt.locale.getLanguage()) {
                    new ResBundle({
                        locale: locale,
                        name: "sysres",
                        sync: sync,
                        loadParams: loadParams,
                        onLoad: ilib.bind(this, function (rb) {
                            this.sysres = rb;
                            if (callback && typeof(callback) === "function") {
                                callback(this);
                            }
                        })
                    });
                } else {
                    this.sysres = this.fmt.sysres;
                    if (callback && typeof(callback) === "function") {
                        callback(this);
                    }
                }
            })
        });
    },

    /**
     * Return the order of the year, month, and date components for the current locale.<p>
     *
     * When implementing a date input widget in a UI, it would be useful to know what
     * order to put the year, month, and date input fields so that it conforms to the
     * user expectations for the locale. This method gives that order by returning a
     * string that has a single "y", "m", and "d" character in it in the correct
     * order.<p>
     *
     * For example, the return value "ymd" means that this locale formats the year first,
     * the month second, and the date third, and "mdy" means that the month is first,
     * the date is second, and the year is third. Four of the 6 possible permutations
     * of the three letters have at least one locale that uses that ordering, though some
     * combinations are far more likely than others. The ones that are not used by any
     * locales are "dym" and "myd", though new locales are still being added to
     * CLDR frequently, and possible orderings cannot be predicted. Your code should
     * support all 6 possibilities, just in case.
     *
     * @return {string} a string giving the date component order
     */
    getDateComponentOrder: function() {
        return this.fmt.componentOrder;
    },

    /**
     * @private
     */
    _getSysString: function (key) {
        return (this.sysres.getStringJS(undefined, key + "-" + this.fmt.calName) || this.sysres.getStringJS(undefined, key)).toString();
    },

    /**
     * Return the meridiems range in current locale.
     * @return {Array.<{name:string,start:string,end:string}>} the range of available meridiems
     */
    getMeridiemsRange: function () {
        var result;

        switch (this.fmt.meridiems) {
        case "chinese":
            result = [
                {
                    name: this._getSysString("azh0"),
                    start: "00:00",
                    end: "05:59"
                },
                {
                    name: this._getSysString("azh1"),
                    start: "06:00",
                    end: "08:59"
                },
                {
                    name: this._getSysString("azh2"),
                    start: "09:00",
                    end: "11:59"
                },
                {
                    name: this._getSysString("azh3"),
                    start: "12:00",
                    end: "12:59"
                },
                {
                    name: this._getSysString("azh4"),
                    start: "13:00",
                    end: "17:59"
                },
                {
                    name: this._getSysString("azh5"),
                    start: "18:00",
                    end: "20:59"
                },
                {
                    name: this._getSysString("azh6"),
                    start: "21:00",
                    end: "23:59"
                }
            ];
            break;
        case "ethiopic":
            result = [
                {
                    name: this._getSysString("a0-ethiopic"),
                    start: "00:00",
                    end: "05:59"
                },
                {
                    name: this._getSysString("a1-ethiopic"),
                    start: "06:00",
                    end: "06:00"
                },
                {
                    name: this._getSysString("a2-ethiopic"),
                    start: "06:01",
                    end: "11:59"
                },
                {
                    name: this._getSysString("a3-ethiopic"),
                    start: "12:00",
                    end: "17:59"
                },
                {
                    name: this._getSysString("a4-ethiopic"),
                    start: "18:00",
                    end: "23:59"
                }
            ];
            break;
        default:
            result = [
                {
                    name: this._getSysString("a0"),
                    start: "00:00",
                    end: "11:59"
                },
                {
                    name: this._getSysString("a1"),
                    start: "12:00",
                    end: "23:59"
                }
            ];
            break;
        }

        return result;
    },

    /**
     * Returns an array of the months of the year, formatted to the optional length specified.
     * i.e. ...getMonthsOfYear() OR ...getMonthsOfYear({length: "short"})
     * <p>
     * The options parameter may contain any of the following properties:
     *
     * <ul>
     * <li><i>length</i> - length of the names of the months being sought. This may be one of
     * "short", "medium", "long", or "full"
     * <li><i>date</i> - retrieve the names of the months in the date of the given date
     * <li><i>year</i> - retrieve the names of the months in the given year. In some calendars,
     * the months have different names depending if that year is a leap year or not.
     * </ul>
     *
     * @param  {Object=} options an object-literal that contains any of the above properties
     * @return {Array} an array of the names of all of the months of the year in the current calendar
     */
    getMonthsOfYear: function(options) {
        var length = (options && options.length) || this.fmt.getLength(),
            template = DateFmt.monthNameLenMap[length],
            months = [undefined],
            date,
            monthCount;

        if (options) {
            if (options.date) {
                date = DateFactory._dateToIlib(options.date);
            }

            if (options.year) {
                date = DateFactory({year: options.year, month: 1, day: 1, type: this.fmt.cal.getType()});
            }
        }

        if (!date) {
            date = DateFactory({
                calendar: this.fmt.cal.getType()
            });
        }

        monthCount = this.fmt.cal.getNumMonths(date.getYears());
        for (var i = 1; i <= monthCount; i++) {
            months[i] = this.sysres.getStringJS(this.fmt._getTemplate(template + i, this.fmt.cal.getType())).toString();
        }
        return months;
    },

    /**
     * Returns an array of the days of the week, formatted to the optional length specified.
     * i.e. ...getDaysOfWeek() OR ...getDaysOfWeek({length: "short"})
     * <p>
     * The options parameter may contain any of the following properties:
     *
     * <ul>
     * <li><i>length</i> - length of the names of the months being sought. This may be one of
     * "short", "medium", "long", or "full"
     * </ul>
     * @param  {Object=} options an object-literal that contains one key
     *                   "length" with the standard length strings
     * @return {Array} an array of all of the names of the days of the week
     */
    getDaysOfWeek: function(options) {
        var length = (options && options.length) || this.fmt.getLength(),
            template = DateFmt.weekDayLenMap[length],
            days = [];
        for (var i = 0; i < 7; i++) {
            days[i] = this.sysres.getStringJS(this.fmt._getTemplate(template + i, this.fmt.cal.getType())).toString();
        }
        return days;
    },

    /**
     * @private
     */
    _mapFormatInfo: function(year, RB, tzinfo) {
        function sequence(start, end, pad) {
            var constraint = [];
            for (var i = start; i <= end; i++) {
                constraint.push(pad ? JSUtils.pad(i, 2) : String(i));
            }
            return constraint;
        }

        var isLeap = this.fmt.cal.isLeapYear(year);
        var dateStr = RB.getStringJS("Day"); // i18n: date input form label for the day of the month field
        var yearStr = RB.getStringJS("Year"); // i18n: date input form label for the year field
        var monthStr = RB.getStringJS("Month"); // i18n: date input form label for the months field
        var hourStr = RB.getStringJS("Hour"); // i18n: date input form label for the hours field
        var minuteStr = RB.getStringJS("Minute"); // i18n: date input form label for the minutes field
        var secondStr = RB.getStringJS("Second"); // i18n: date input form label for the seconds field
        var milliStr = RB.getStringJS("Millisecond"); // i18n: date input form label for the milliseconds field
        var woyStr = RB.getStringJS("Week of Year"); // i18n: date input form label for a week of the year field
        var doyStr = RB.getStringJS("Day of Year"); // i18n: date input form label for the day of the year field
        var ret, i;

        return this.fmt.templateArr.map(ilib.bind(this, function(component) {
            switch (component) {
                case 'd':
                    ret = {
                        component: "day",
                        label: dateStr,
                        placeholder: RB.getStringJS("D"), // i18n: date format placeholder string for 1 digit date
                        constraint: {},
                        validation: "\\d{1,2}"
                    };
                    var months = this.fmt.cal.getNumMonths(year);
                    for (i = 1; i <= months; i++) {
                        ret.constraint[String(i)] = [1, this.fmt.cal.getMonLength(i, year)];
                    }
                    return ret;

                case 'dd':
                    ret = {
                        component: "day",
                        label: dateStr,
                        placeholder: RB.getStringJS("DD"), // i18n: date format placeholder string for 2 digit date
                        constraint: {},
                        validation: "\\d{1,2}"
                    };
                    var months = this.fmt.cal.getNumMonths(year);
                    for (i = 1; i <= months; i++) {
                        ret.constraint[String(i)] = sequence(1, this.fmt.cal.getMonLength(i, year));
                    }
                    return ret;

                case 'yy':
                    return {
                        component: "year",
                        label: yearStr,
                        placeholder: RB.getStringJS("YY"), // i18n: date format placeholder string for 2 digit year
                        constraint: "\\d{2}",
                        validation: "\\d{2}"
                    };

                case 'yyyy':
                    return {
                        component: "year",
                        label: yearStr,
                        placeholder: RB.getStringJS("YYYY"), // i18n: date format placeholder string for 4 digit year
                        constraint: "\\d{4}",
                        validation: "\\d{4}"
                    };

                case 'M':
                    ret = {
                        component: "month",
                        label: monthStr,
                        placeholder: RB.getStringJS("M"), // i18n: date format placeholder string for 1 digit month
                        constraint: [1, this.fmt.cal.getNumMonths(year)],
                        validation: "\\d{1,2}"
                    };
                    return ret;

                case 'MM':
                    ret = {
                        component: "month",
                        label: monthStr,
                        placeholder: RB.getStringJS("MM"), // i18n: date format placeholder string for 2 digit month
                        constraint: sequence(1, this.fmt.cal.getNumMonths(year)),
                        validation: "\\d{2}"
                    };
                    return ret;

                case 'h':
                    return {
                        component: "hour",
                        label: hourStr,
                        placeholder: RB.getStringJS("H"), // i18n: date format placeholder string for 1 digit hour
                        constraint: ["12"].concat(sequence(1, 11)),
                        validation: "\\d{1,2}"
                    };

                case 'hh':
                    return {
                        component: "hour",
                        label: hourStr,
                        placeholder: RB.getStringJS("HH"), // i18n: date format placeholder string for 2 digit hour,
                        constraint: ["12"].concat(sequence(1, 11, true)),
                        validation: "\\d{2}"
                    };


                case 'K':
                    return {
                        component: "hour",
                        label: hourStr,
                        placeholder: RB.getStringJS("H"), // i18n: date format placeholder string for 1 digit hour
                        constraint: sequence(0, 11),
                        validation: "\\d{1,2}"
                    };

                case 'KK':
                    return {
                        component: "hour",
                        label: hourStr,
                        placeholder: RB.getStringJS("HH"), // i18n: date format placeholder string for 2 digit hour,
                        constraint: sequence(0, 11, true),
                        validation: "\\d{2}"
                    };

                case 'H':
                    return {
                        component: "hour",
                        label: hourStr,
                        placeholder: RB.getStringJS("H"), // i18n: date format placeholder string for 1 digit hour
                        constraint: [0, 23],
                        validation: "\\d{1,2}"
                    };

                case 'HH':
                    return {
                        component: "hour",
                        label: hourStr,
                        placeholder: RB.getStringJS("HH"), // i18n: date format placeholder string for 2 digit hour
                        constraint: sequence(0, 23, true),
                        validation: "\\d{2}"
                    };

                case 'k':
                    return {
                        component: "hour",
                        label: hourStr,
                        placeholder: RB.getStringJS("H"), // i18n: date format placeholder string for 1 digit hour
                        constraint: ["24"].concat(sequence(0, 23)),
                        validation: "\\d{1,2}"
                    };

                case 'kk':
                    return {
                        component: "hour",
                        label: hourStr,
                        placeholder: RB.getStringJS("H"), // i18n: date format placeholder string for 1 digit hour
                        constraint: ["24"].concat(sequence(0, 23, true)),
                        validation: "\\d{2}"
                    };

                case 'm':
                    return {
                        component: "minute",
                        label: minuteStr,
                        placeholder: RB.getStringJS("mm"), // i18n: date format placeholder string for 2 digit minute
                        constraint: [0, 59],
                        validation: "\\d{1,2}"
                    };

                case 'mm':
                    return {
                        component: "minute",
                        label: minuteStr,
                        placeholder: RB.getStringJS("mm"), // i18n: date format placeholder string for 2 digit minute
                        constraint: sequence(0, 59, true),
                        validation: "\\d{2}"
                    };

                case 's':
                    return {
                        component: "second",
                        label: secondStr,
                        placeholder: RB.getStringJS("ss"), // i18n: date format placeholder string for 2 digit second
                        constraint: [0, 59],
                        validation: "\\d{1,2}"
                    };

                case 'ss':
                    return {
                        component: "second",
                        label: secondStr,
                        placeholder: RB.getStringJS("ss"), // i18n: date format placeholder string for 2 digit second
                        constraint: sequence(0, 59, true),
                        validation: "\\d{2}"
                    };

                case 'S':
                    return {
                        component: "millisecond",
                        label: milliStr,
                        placeholder: RB.getStringJS("ms"), // i18n: date format placeholder string for 2 digit millisecond
                        constraint: [0, 999],
                        validation: "\\d{1,3}"
                    };

                case 'SSS':
                    return {
                        component: "millisecond",
                        label: milliStr,
                        placeholder: RB.getStringJS("ms"), // i18n: date format placeholder string for 2 digit millisecond
                        constraint: sequence(0, 999, true),
                        validation: "\\d{3}"
                    };

                case 'N':
                case 'NN':
                case 'MMM':
                case 'MMMM':
                case 'L':
                case 'LL':
                case 'LLL':
                case 'LLLL':
                    return {
                        component: "month",
                        label: monthStr,
                        constraint: (ilib.bind(this, function() {
                            var ret = [];
                            var months = this.fmt.cal.getNumMonths(year);
                            var isLeap = this.fmt.cal.isLeapYear(year);
                            for (i = 1; i <= months; i++) {
                                var key = component + i;
                                ret.push({
                                    label:
                                        (isLeap ? this.sysres.getStringJS(undefined, key + "-leap" + "-" + this.fmt.calName) : false) ||
                                        this.sysres.getStringJS(undefined, key + "-" + this.fmt.calName) ||
                                        this.sysres.getStringJS(undefined, key),
                                    value: i
                                });
                            }
                            return ret;
                        }))()
                    };

                case 'E':
                case 'EE':
                case 'EEE':
                case 'EEEE':
                case 'c':
                case 'cc':
                case 'ccc':
                case 'cccc':
                    return {
                        component: "dayofweek",
                        label: RB.getStringJS("Day of Week"), // i18n: date input form label for the day of the week field
                        value: ilib.bind(this, function(date) {
                            var d = DateFactory._dateToIlib(date).getJSDate();
                            var key = component.replace(/c/g, 'E') + d.getDay();
                            if (this.fmt.calName !== "gregorian") {
                                key += '-' + this.fmt.calName;
                            }
                            return this.sysres.getStringJS(undefined, key);
                        })
                    };
                    break;

                case 'a':
                    var ret = {
                        component: "meridiem",
                        label: RB.getStringJS("AM/PM"), // i18n: date input form label for the meridiem field
                        constraint: []
                    };
                    switch (this.fmt.meridiems) {
                        case "chinese":
                            for (var i = 0; i < 7; i++) {
                                var key = "azh" + i;
                                ret.constraint.push(this.sysres.getStringJS(undefined, key + "-" + this.fmt.calName) || this.sysres.getStringJS(undefined, key));
                            }
                            break;
                        case "ethiopic":
                            for (var i = 0; i < 7; i++) {
                                var key = "a" + i + "-ethiopic";
                                ret.constraint.push(this.sysres.getStringJS(undefined, key + "-" + this.fmt.calName) || this.sysres.getStringJS(undefined, key));
                            }
                            break;
                        default:
                            ret.constraint.push(this.sysres.getStringJS(undefined, "a0-" + this.fmt.calName) || this.sysres.getStringJS(undefined, "a0"));
                            ret.constraint.push(this.sysres.getStringJS(undefined, "a1-" + this.fmt.calName) || this.sysres.getStringJS(undefined, "a1"));
                            break;
                    }
                    return ret;

                case 'w':
                    return {
                        label: woyStr,
                        value: function(date) {
                            return date.getDayOfYear();
                        }
                    };

                case 'ww':
                    return {
                        label: woyStr,
                        value: function(date) {
                            var temp = date.getWeekOfYear();
                            return JSUtils.pad(temp, 2)
                        }
                    };

                case 'D':
                    return {
                        label: doyStr,
                        value: function(date) {
                            return date.getDayOfYear();
                        }
                    };

                case 'DD':
                    return {
                        label: doyStr,
                        value: function(date) {
                            var temp = date.getDayOfYear();
                            return JSUtils.pad(temp, 2)
                        }
                    };

                case 'DDD':
                    return {
                        label: doyStr,
                        value: function(date) {
                            var temp = date.getDayOfYear();
                            return JSUtils.pad(temp, 3)
                        }
                    };

                case 'W':
                    return {
                        label: RB.getStringJS("Week of Month"), // i18n: date input form label for the week of the month field
                        value: function(date) {
                            return date.getWeekOfMonth();
                        }
                    };

                case 'G':
                    var ret = {
                        component: "era",
                        label: RB.getStringJS("Era"), // i18n: date input form label for the era field
                        constraint: []
                    };
                    ret.constraint.push(this.sysres.getStringJS(undefined, "G0-" + this.fmt.calName) || this.sysres.getStringJS(undefined, "G0"));
                    ret.constraint.push(this.sysres.getStringJS(undefined, "G1-" + this.fmt.calName) || this.sysres.getStringJS(undefined, "G1"));
                    return ret;

                case 'z': // general time zone
                case 'Z': // RFC 822 time zone
                    return {
                        component: "timezone",
                        label: RB.getStringJS("Time Zone"), // i18n: date input form label for the time zone field
                        constraint: tzinfo
                    };

                default:
                    return {
                        label: component.replace(/'/g, "")
                    };
            }
        }));
    },

    /**
     * Return information about the date format that can be used
     * by UI frameworks to display a locale-sensitive input form.<p>
     *
     * The options parameter is an object that can contain any of
     * the following properties:
     *
     * <ul>
     * <li><i>locale</i> - the locale to translate the labels
     * to. If not given, the locale of the formatter will be used.
     * The locale of the formatter specifies the format of the
     * date input and which components are available and in what
     * order, whereas this locale property only specifies the language
     * used for the labels.
     *
     * <li><i>year</i> - the year for which the formats are being sought.
     * For some calendars such as the Hebrew calendar, the number of
     * and the length of the months depends upon the year. Even in the
     * Gregorian calendar, the length of February changes in leap
     * years, though the number of months or their names do not
     * change. If not specified, the default is the current year.
     *
     * <li><i>sync</i> - if true, this method should load the data
     * synchronously. If false, load the data asynchronously and
     * call the onLoad callback function when it is done. The onLoad
     * parameter must be specified in order to receive the data.
     *
     * <li><i>onLoad</i> - a callback function to call when the data is fully
     * loaded. When the onLoad option is given, this method will attempt to
     * load any missing locale data using the ilib loader callback.
     * When this method is done (even if the data is already preassembled), the
     * onLoad function is called with the results as a parameter, so this
     * callback can be used with preassembled or dynamic data loading or a
     * mix of the two.
     *
     * <li><i>loadParams</i> - an object containing parameters to pass to the
     * loader callback function when locale data is missing. The parameters are not
     * interpretted or modified in any way. They are simply passed along. The object
     * may contain any property/value pairs as long as the calling code is in
     * agreement with the loader callback function as to what those parameters mean.
     * </ul>
     *
     * The results object returned by this method or passed to the onLoad
     * callback is an array of date
     * format components. Each format component is an object
     * that contains information that can be used to display
     * a field in an input form.
     * The list of possible properties on each component object are:
     *
     * <ul>
     * <li><i>component</i> - if this component describes a part
     * of the date format which can be entered by the user (as opposed
     * to the fixed parts which cannot), then this property gives
     * the name of that component when the value is used
     * with the DateFactory() function to construct an IDate instance.
     * For example, if the value of "component" is "year",
     * then the value of the input field can be used as the "year"
     * property when calling DateFactory().
     * <li><i>label</i> - a localized text to display for this
     * component as a label. The text is localized to the given
     * locale. If a locale is not given, then it uses the locale
     * of the formatter.
     * <li><i>placeholder</i> - the localized placeholder text to
     * display in a free-form, empty text input field, which gives
     * the user a hint as to what to enter in that field. The text
     * is localized to the given
     * locale. If a locale is not given, then it uses the locale
     * of the formatter.
     * <li><i>validation</i> - a regular expression or function
     * that validates the input value of a free-form text input
     * field. When the validation property is a regular expression,
     * the expression matches when the value of the field is valid.
     * When the validation property is a function, the function
     * would take a single parameter which is the value of
     * the input field. It returns a boolean value: true if the
     * input is valid, and false otherwise.
     * <li><i>constraint</i> - a rule that describes the constraints
     * on valid values for this component. This is intended to be
     * used with input fields such as drop-down boxes.
     * <li><i>value</i> - a function that this the value of
     * a calculated field. (See the description below.)
     * </ul>
     *
     * Field separators such as slashes or dots, etc., are given
     * as a object with no "component" property. They only contain
     * a "label" property with a string value. A user interface
     * may choose to use these purely formatting components or ignore
     * them as needed.<p>
     *
     * User interfaces can construct two different types of input
     * forms: constrained or free-form. In a constrained form,
     * components such as the month are displayed as
     * as a drop-down box containing a fixed list of month names.
     * The user may only choose from that list and it is therefore
     * impossible to choose an invalid value. In a free-form
     * form, the user is presented with text input fields where
     * they can type whatever they want. The resulting value should
     * be validated using the validation rules before submitting
     * the form. The getFormatInfo
     * method returns information that can be used to create either
     * type of form. It is up to the caller to
     * decide which type of form to present to the user.<p>
     *
     * For a constrained form element, the input value
     * must conform to a particular pattern, range, or a fixed
     * list of possible values. The rule for this is given in
     * the "constraint" property.
     * The values of the constraint property can be one of the
     * following types:
     *
     * <ol>
     * <ul><i>array[2]&lt;number&gt;</i> - an array of size 2 of numbers
     * that gives the start and end of a numeric range. The input must
     * be between the start and end of the range, inclusive.
     * <ul><i>array[2]&lt;string&gt;</i> - an array of strings gives
     * the exact range of values possible for this field. The input must
     * be one of these values. This is mainly intended for use in
     * drop-down boxes. The value of the chosen element is the value
     * that should be returned for the field.
     * <ul><i>array&lt;object&gt; - an array of valid string values
     * given as objects that have "label" and "value" properties. The
     * label is intended to be displayed to the user and the value
     * is to be used to construct the new date object when the
     * user has finished selecting the components and the form is
     * being evaluated or submitted.
     * </ol>
     *
     * For a free-form form, the user interface must validate the
     * values that the user has typed into the text field. To aid
     * with this, this method returns a "validation" property which
     * contains either a regular expression or a function. The
     * regular expression tests whether or not what the user has
     * entered is valid. If the validation property is set to
     * a function, this function would take a single
     * parameter which is the text value of the input field, and
     * it returns a boolean value: true if the input is valid,
     * and false otherwise. If it does not make sense for a
     * particular date format component to be free-form, such
     * as the "AM/PM" choice for a meridiem, then the validation
     * property will be left off. Only the given choices are
     * valid. UI builders should only allow
     * free-form fields for those components that have a
     * "validation" property. Otherwise, use a constrained
     * input form element instead.<p>
     *
     * Some date format components do not represent values that
     * a user may enter, but instead values that are calculated
     * based on other date format components. For example, the
     * day of the week is a property that is calculated based
     * on the date the user has entered. It would not
     * make sense for the user to be able to choose a day of
     * the week that does not correspond to the day, month, and
     * year they have already chosen. To handle calculated
     * date format components, this method returns a "value"
     * property which is a function which returns
     * the calculated value of the field. Its parameter is a date
     * object that has been created from the other date format
     * components. Its single parameter is an object that contains
     * the other date input components, similar to what you might
     * pass to the DateFactory function.<p>
     *
     * @example Here is what the result would look like for a US short
     * date/time format for a leap year. This includes the components
     * of day of the week, date, month, year, hour, minute, and meridiem:
     *
     * <pre>
     * [
     *   {
     *     "label": "Day of Week",   // optional label
     *     "value": function(date) { returns the calculated, localized day of week name }
     *   },
     *   {
     *     "label": " "              // fixed field (optionally displayed in the UI)
     *   },
     *   {
     *     "component": "month",     // property name to use when calling DateFactory() for this field
     *     "label": "Month",         // label describing this field, in this case translated to English/US
     *     "placeholder": "M",       // the placeholder text for this field
     *     "constraint": [1, 12],    // constraint rules for a drop-down box for the month
     *     "validation": "\\d{1,2}"  // validation rule for a free-form text input
     *   },
     *   {
     *     "label": "/"              // fixed field (optionally displayed in the UI)
     *   },
     *   {
     *     "component": "day",
     *     "label": "Date",
     *     "placeholder": "DD",
     *     "constraint": {
     *       "1": [1, 31],       // range from 1 to 31 inclusive
     *       "2": [1, 29],
     *       "3": [1, 31],
     *       "4": [1, 30],
     *       "5": [1, 31],
     *       "6": [1, 30],
     *       "7": [1, 31],
     *       "8": [1, 31],
     *       "9": [1, 30],
     *       "10": [1, 31],
     *       "11": [1, 30],
     *       "12": [1, 31]
     *     },
     *     "validation": "\\d{1,2}"
     *   },
     *   {
     *     "label": "/"
     *   },
     *   {
     *     "component": "year",
     *     "label": "Year",
     *     "placeholder": "YYYY",
     *     "validation": "\\d{4}"
     *   },
     *   {
     *     "label": " at "
     *   },
     *   {
     *     "component": "hour",
     *     "label": "Hour",
     *     "placeholder": "H",
     *     "constraint": [1, 12],
     *     "validation": "\\d{1,2}"
     *   },
     *   {
     *     "label": ":"
     *   },
     *   {
     *     "component": "minute",
     *     "label": "Minute",
     *     "constraint": [
     *       "00",                   // note that these are strings so that they can be zero-padded
     *       "01",
     *       "02",
     *       "03",
     *       "04",
     *       "05",
     *       "06",
     *       "07",
     *       "08",
     *       "09",
     *       "10",
     *       "11",
     *       ...
     *       "59"
     *     ],
     *     "placeholder": "mm",
     *     "validation": "\\d{2}"
     *   },
     *   {
     *     "label": " "
     *   },
     *   {
     *     "component": "meridiem",
     *     "label": "AM/PM",
     *     "placeholder": "AM/PM",
     *     "constraint": ["AM", "PM"]
     *   }
     * ]
     * </pre>
     * <p>
     * Note that the "minute" component comes with a preformatted list of values
     * as strings, even though the minute is really a number. The preformatting
     * ensures that the leading zero is not lost for minutes less than 10.
     *
     * @example <caption>Example of calling the getFormatInfo method</caption>
     *
     * // the DateFmt should be created with the locale of the date you
     * // would like the user to enter.
     * new DateFmt({
     *   locale: 'nl-NL', // for dates in the Netherlands
     *   year: 2019,
     *   onLoad: ilib.bind(this, function(fmt) {
     *     // The following is the locale of the UI you would like to see the labels
     *     // like "Year" and "Minute" translated to. In this example, we
     *     // are showing an input form for Dutch dates, but the labels are
     *     // written in US English.
     *     fmt.getFormatInfo({
     *       locale: "en-US",
     *       sync: true,
     *       callback: ilib.bind(this, function(components) {
     *       // here you should iterate through the component array and dynamically create the input
     *       // elements with the given labels and placeholders and such, and install
     *       // the appropriate validators
     *     }));
     *   })
     * });
     *
     * @param {Object} options option to control this function. (See the description
     * above.)
     * @returns {Array.<Object>} An array of date components
     */
    getFormatInfo: function(options) {
        var locale, sync = true, callback, loadParams, year;

        if (options) {
            sync = !!options.sync;
            callback = options.onLoad;
            loadParams = options.loadParams;
            year = options.year;
        }

        if (!year) {
            var now = DateFactory({
                type: this.fmt.calName
            });
            year = now.getYear();
        }

        var info, zone = false;
        for (var i = 0; i < this.fmt.templateArr.length; i++) {
            if (this.fmt.templateArr[i] === "z" || this.fmt.templateArr[i] === "Z") {
                zone = true;
                break;
            }
        }

        if (zone) {
            TimeZone.getAvailableIds(undefined, sync, ilib.bind(this, function(tzinfo) {
                var set = new ISet(tzinfo);
                set.add("Etc/UTC");
                set.add("Etc/GMT");
                for (var j = 1; j < 13; j++) {
                    set.add("Etc/GMT+" + j);
                    set.add("Etc/GMT-" + j);
                }
                set.add("Etc/GMT-13");
                set.add("Etc/GMT-14");

                info = this._mapFormatInfo(year, this.rb, set.asArray().sort());
                if (callback && typeof(callback) === "function") {
                    callback(info);
                }
            }));
        } else {
            info = this._mapFormatInfo(year, this.rb);
            if (callback && typeof(callback) === "function") {
                callback(info);
            }
        }

        return info;
    }
};

module.exports = DateFmtInfo;
