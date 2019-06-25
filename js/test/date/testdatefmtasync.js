/*
 * testdatefmtasync.js - test the date formatter object asynchronously
 *
 * Copyright © 2018-2019, JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}
if (typeof(ThaiSolarDate) === "undefined") {
    var ThaiSolarDate = require("../../lib/ThaiSolarDate.js");
}
if (typeof(PersianDate) === "undefined") {
    var PersianDate = require("../../lib/PersianDate.js");
}
if (typeof(IslamicDate) === "undefined") {
    var IslamicDate = require("../../lib/IslamicDate.js");
}
if (typeof(HebrewDate) === "undefined") {
    var HebrewDate = require("../../lib/HebrewDate.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../lib/GregorianDate.js");
}
if (typeof(JulianDate) === "undefined") {
    var JulianDate = require("../../lib/JulianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}
if (typeof(DateFmtInfo) === "undefined") {
    var DateFmtInfo = require("../../lib/DateFmtInfo.js");
}
if (typeof(DateFactory) === "undefined") {
    var DateFactory = require("../../lib/DateFactory.js");
}

module.exports.testdatefmtasync = {
    testDateFmtConstructorEmpty: function(test) {
        test.expect(1);
        new DateFmt({
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                test.done();
            }
        });
    },

    testDateFmtGetCalendarExplicit: function(test) {
        test.expect(3);
        new DateFmt({
            calendar: "julian",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt);
                var cal = fmt.getCalendar();
                test.ok(cal);

                test.equal(cal, "julian");
                test.done();
            }
        });
    },

    testDateFmtGetCalendarNotInThisLocale: function(test) {
        new DateFmt({
            calendar: "arabic",
            locale: 'en-US',
            sync: false,
            onLoad: function(fmt) {
                // "No formats available for calendar arabic in locale en-US"
                test.ok(!fmt);
                test.done();
            }
        });
    },

    testDateFmtGetTimeZoneDefault: function(test) {
        test.expect(2);
        ilib.tz = undefined;    // just in case
        if (ilib._getPlatform() === "nodejs") {
            process.env.TZ = "";
        }

        new DateFmt({
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                test.equal(fmt.getTimeZone().getId(), "local");
                test.done();
            }
        });
    },

    testDateFmtGetTimeZone: function(test) {
        test.expect(2);
        new DateFmt({
            timezone: "Europe/Paris",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                test.equal(fmt.getTimeZone().getId(), "Europe/Paris");
                test.done();
            }
        });
    },

    testDateFmtUseTemplateNonEmptyCalendar: function(test) {
        test.expect(2);
        new DateFmt({
            calendar: 'julian',
            template: "EEE 'the' DD 'of' MM, yyyy G",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                test.equal(fmt.getCalendar(), "julian");
                test.done();
            }
        });
    },

    testDateFmtUseTemplateNonEmptyLocale: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: 'de-DE',
            template: "EEE 'the' DD 'of' MM, yyyy G",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                test.equal(fmt.getLocale().toString(), "de-DE");
                test.done();
            }
        });
    },

    testDateFmtFormatJSDate1: function(test) {
        test.expect(2);
        new DateFmt({
            type: "time",
            length: "short",
            timezone: "America/Los_Angeles",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                // test formatting a javascript date. It should be converted to
                // an ilib date object automatically and then formatted
                var datMyBday = new Date("Fri Aug 13 1982 13:37:35 GMT-0700");
                test.equal(fmt.format(datMyBday), "1:37 PM");
                test.done();
            }
        });
    },

    testDateFmtFormatJSDateRightTimeZone1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            type: "date",
            length: "full",
            date: "w",
            timezone: "America/Los_Angeles",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                // test formatting a javascript date. It should be converted to
                // an ilib date object automatically and then formatted
                var datMyBday = new Date("Wed May 14 2014 23:37:35 GMT-0700");
                test.equal(fmt.format(datMyBday), "Wednesday");
                test.done();
            }
        });
    },

    testDateFmtGetMonthsOfYearThai: function(test) {
        test.expect(2);
        // uses ThaiSolar calendar
        var fmt = new DateFmt({
            locale: "th-TH",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                var arrMonths = fmt.getMonthsOfYear({length: "long"});

                var expected = [undefined, "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
                test.deepEqual(arrMonths, expected);
                test.done();
            }
        });
    },

    testDateFmtFormatRelativeWithinMinuteAfter: function(test) {
        test.expect(1);
        new DateFmt({
            length: "full",
            sync: false,
            onLoad: function(fmt) {
                new GregorianDate({
                    year: 2011,
                    month: 11,
                    day: 20,
                    hour: 13,
                    minute: 45,
                    second: 0,
                    millisecond: 0,
                    sync: false,
                    onLoad: function(reference) {
                        new GregorianDate({
                            year: 2011,
                            month: 11,
                            day: 20,
                            hour: 13,
                            minute: 45,
                            second: 30,
                            millisecond: 0,
                            sync: false,
                            onLoad: function(date) {
                                test.equal(fmt.formatRelative(reference, date), "in 30 seconds");
                                test.done();
                            }
                        });
                    }
                });
            }
        });
    },

    testDateFmtConvertToGMT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            length: "short",
            type: "datetime",
            timezone: "Europe/London",
            locale: "en-GB",
            time: "hmaz",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                new GregorianDate({
                    year: 2011,
                    month: 9,
                    day: 20,
                    hour: 13,
                    minute: 45,
                    second: 0,
                    millisecond: 0,
                    timezone: "America/Los_Angeles",
                    locale: "en-US",
                    sync: false,
                    onLoad: function(date) {
                        test.equal(fmt.format(date), "20/09/2011, 21:45 GMT/BST");
                        test.done();
                    }
                });
            }
        });
    },

    testDateFmtConvertToOtherTimeZone: function(test) {
        test.expect(2);
        new DateFmt({
            length: "short",
            type: "datetime",
            timezone: "Australia/Sydney",
            locale: "en-AU",
            time: "hmaz",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                new GregorianDate({
                    year: 2011,
                    month: 9,
                    day: 20,
                    hour: 13,
                    minute: 45,
                    second: 0,
                    millisecond: 0,
                    timezone: "America/Los_Angeles",
                    locale: "en-US",
                    sync: false,
                    onLoad: function(date) {
                        test.equal(fmt.format(date), "21/9/11, 6:45 am AEST");
                        test.done();
                    }
                });

            }
        });
    },

    testDateFmtGetFormatInfoUSShortAsync: function(test) {
        test.expect(16);

        var fmt = new DateFmtInfo({
            locale: "en-US",
            type: "date",
            length: "short"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: false,
            year: 2019,
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 5);

                test.equal(info[0].component, "month");
                test.equal(info[0].label, "Month");
                test.deepEqual(info[0].constraint, [1, 12]);

                test.ok(!info[1].component);
                test.equal(info[1].label, "/");

                test.equal(info[2].component, "day");
                test.equal(info[2].label, "Day");
                test.deepEqual(info[2].constraint, {
                    "1": [1, 31],
                    "2": [1, 28],
                    "3": [1, 31],
                    "4": [1, 30],
                    "5": [1, 31],
                    "6": [1, 30],
                    "7": [1, 31],
                    "8": [1, 31],
                    "9": [1, 30],
                    "10": [1, 31],
                    "11": [1, 30],
                    "12": [1, 31]
                });

                test.ok(!info[3].component);
                test.equal(info[3].label, "/");

                test.equal(info[4].component, "year");
                test.equal(info[4].label, "Year");
                test.equal(info[4].constraint, "\\d{2}");
                test.done();
            }
        });

    },

    testDateFmtGetFormatInfoGregorianTranslatedAsync: function(test) {
        test.expect(16);

        var fmt = new DateFmtInfo({
            locale: "en-US",
            type: "date",
            length: "full",
            uiLocale: "de-DE"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            year: 2019,
            sync: false,
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 5);

                test.equal(info[0].component, "month");
                test.equal(info[0].label, "Monat");
                test.deepEqual(info[0].constraint, [
                    {label: "Januar", value: 1},
                    {label: "Februar", value: 2},
                    {label: "März", value: 3},
                    {label: "April", value: 4},
                    {label: "Mai", value: 5},
                    {label: "Juni", value: 6},
                    {label: "Juli", value: 7},
                    {label: "August", value: 8},
                    {label: "September", value: 9},
                    {label: "Oktober", value: 10},
                    {label: "November", value: 11},
                    {label: "Dezember", value: 12},
                ]);

                test.ok(!info[1].component);
                test.equal(info[1].label, " ");

                test.equal(info[2].component, "day");
                test.equal(info[2].label, "Tag");
                test.deepEqual(info[2].constraint, {
                    "1": [1, 31],
                    "2": [1, 28],
                    "3": [1, 31],
                    "4": [1, 30],
                    "5": [1, 31],
                    "6": [1, 30],
                    "7": [1, 31],
                    "8": [1, 31],
                    "9": [1, 30],
                    "10": [1, 31],
                    "11": [1, 30],
                    "12": [1, 31]
                });

                test.ok(!info[3].component);
                test.equal(info[3].label, ", ");

                test.equal(info[4].component, "year");
                test.equal(info[4].label, "Jahr");
                test.equal(info[4].constraint, "\\d{4}");
                test.done();
            }
        });
    },

    testDateFmtGetFormatInfoGregorianTranslatedAsyncConstructor: function(test) {
        test.expect(16);

        var fmt = new DateFmtInfo({
            locale: "en-US",
            type: "date",
            length: "full",
            uiLocale: "de-DE",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                
                fmt.getFormatInfo({
                    year: 2019,
                    sync: false,
                    onLoad: function(info) {
                        test.ok(info);
                        
                        test.equal(info.length, 5);
                        
                        test.equal(info[0].component, "month");
                        test.equal(info[0].label, "Monat");
                        test.deepEqual(info[0].constraint, [
                            {label: "Januar", value: 1},
                            {label: "Februar", value: 2},
                            {label: "März", value: 3},
                            {label: "April", value: 4},
                            {label: "Mai", value: 5},
                            {label: "Juni", value: 6},
                            {label: "Juli", value: 7},
                            {label: "August", value: 8},
                            {label: "September", value: 9},
                            {label: "Oktober", value: 10},
                            {label: "November", value: 11},
                            {label: "Dezember", value: 12},
                        ]);

                        test.ok(!info[1].component);
                        test.equal(info[1].label, " ");
                        
                        test.equal(info[2].component, "day");
                        test.equal(info[2].label, "Tag");
                        test.deepEqual(info[2].constraint, {
                            "1": [1, 31],
                            "2": [1, 28],
                            "3": [1, 31],
                            "4": [1, 30],
                            "5": [1, 31],
                            "6": [1, 30],
                            "7": [1, 31],
                            "8": [1, 31],
                            "9": [1, 30],
                            "10": [1, 31],
                            "11": [1, 30],
                            "12": [1, 31]
                        });
                        
                        test.ok(!info[3].component);
                        test.equal(info[3].label, ", ");
                        
                        test.equal(info[4].component, "year");
                        test.equal(info[4].label, "Jahr");
                        test.equal(info[4].constraint, "\\d{4}");
                        test.done();
                    }
                });
            }
        });
    },
    
    testDateFmtInfoGetFormatInfoUSFullAllFieldsAsync: function(test) {
        test.expect(172);

        var fmt = new DateFmtInfo({
            locale: "en-US",
            type: "datetime",
            length: "full",
            date: "wmdy",
            time: "ahmsz",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                
                fmt.getFormatInfo({
                    sync: false,
                    year: 2019, // non leap year
                    onLoad: function(info) {
                        test.ok(info);
                        
                        test.equal(info.length, 17);
                        
                        test.equal(info[0].label, "Day of Week"),
                        test.equal(typeof(info[0].value), "function");
                        
                        test.ok(!info[1].component);
                        test.equal(info[1].label, ", ");
                        
                        test.equal(info[2].component, "month");
                        test.equal(info[2].label, "Month");
                        test.deepEqual(info[2].constraint, [
                            {label: "January", value: 1},
                            {label: "February", value: 2},
                            {label: "March", value: 3},
                            {label: "April", value: 4},
                            {label: "May", value: 5},
                            {label: "June", value: 6},
                            {label: "July", value: 7},
                            {label: "August", value: 8},
                            {label: "September", value: 9},
                            {label: "October", value: 10},
                            {label: "November", value: 11},
                            {label: "December", value: 12}
                            ]);
                        
                        test.ok(!info[3].component);
                        test.equal(info[3].label, " ");
                        
                        test.equal(info[4].component, "day");
                        test.equal(info[4].label, "Day");
                        test.deepEqual(info[4].constraint, {
                            "1": [1, 31],
                            "2": [1, 28],
                            "3": [1, 31],
                            "4": [1, 30],
                            "5": [1, 31],
                            "6": [1, 30],
                            "7": [1, 31],
                            "8": [1, 31],
                            "9": [1, 30],
                            "10": [1, 31],
                            "11": [1, 30],
                            "12": [1, 31]
                        });
                        test.equal(info[4].validation, "\\d{1,2}");
                        
                        test.ok(!info[5].component);
                        test.equal(info[5].label, ", ");
                        
                        test.equal(info[6].component, "year");
                        test.equal(info[6].label, "Year");
                        test.equal(info[6].placeholder, "YYYY");
                        test.equal(info[6].constraint, "\\d{4}");
                        
                        test.ok(!info[7].component);
                        test.equal(info[7].label, " at ");
                        
                        test.equal(info[8].component, "hour");
                        test.equal(info[8].label, "Hour");
                        test.equal(info[8].placeholder, "H");
                        test.deepEqual(info[8].constraint, ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]);
                        test.equal(info[8].validation, "\\d{1,2}");
                        
                        test.ok(!info[9].component);
                        test.equal(info[9].label, ":");
                        
                        test.equal(info[10].component, "minute");
                        test.equal(info[10].label, "Minute");
                        test.equal(info[10].placeholder, "mm");
                        for (var i = 0; i < 60; i++) {
                            test.equal(Number(info[10].constraint[i]), i);
                        }
                        test.equal(info[10].validation, "\\d{2}");
                        
                        test.ok(!info[11].component);
                        test.equal(info[11].label, ":");
                        
                        test.equal(info[12].component, "second");
                        test.equal(info[12].label, "Second");
                        test.equal(info[12].placeholder, "ss");
                        for (var i = 0; i < 60; i++) {
                            test.equal(Number(info[12].constraint[i]), i);
                        }
                        test.equal(info[12].validation, "\\d{2}");
                        
                        test.ok(!info[13].component);
                        test.equal(info[13].label, " ");
                        
                        test.equal(info[14].component, "meridiem");
                        test.equal(info[14].label, "AM/PM");
                        test.deepEqual(info[14].constraint, ["AM", "PM"]);
                        
                        test.ok(!info[15].component);
                        test.equal(info[15].label, " ");
                        
                        test.equal(info[16].component, "timezone");
                        test.equal(info[16].label, "Time zone");
                        test.equal(typeof(info[16].constraint), "object");
                        test.equal(info[16].constraint.length, 511);
                    }
                });
                
                test.done();
            }
        });
    }
};