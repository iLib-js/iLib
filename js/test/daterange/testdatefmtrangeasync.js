/*
 * testdatefmtrangeasync.js - test the date range formatter object
 *
 * Copyright © 2018, JEDLSoft
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
if (typeof(LocaleInfo) === "undefined") {
    var LocaleInfo = require("../../lib/LocaleInfo.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../lib/GregorianDate.js");
}
if (typeof(DateRngFmt) === "undefined") {
    var DateRngFmt = require("../../lib/DateRngFmt.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}

module.exports.testdatefmtrangeasync = {
    testDateRngFmtConstructorEmpty: function(test) {
        test.expect(1);
        new DateRngFmt({
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                test.done();
            }
        });

    },
    testDateRngFmtGetCalendarExplicit: function(test) {
        test.expect(3);
        new DateRngFmt({
            calendar: "julian",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                var cal = fmt.getCalendar();
                test.ok(cal !== null);

                test.equal(cal, "julian");
                test.done();
            }
        });
    },
    testDateRngFmtGetCalendarNotInThisLocale: function(test) {
        new DateRngFmt({
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
    testDateRngFmtGetLocale: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "de-DE",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                test.equal(fmt.getLocale().toString(), "de-DE");
                test.done();
            }
        });
    },
    testDateRngFmtGetTimeZone: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            timezone: "Europe/Paris",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                var tz = fmt.getTimeZone();
                test.equal(tz.getId(), "Europe/Paris");
                test.done();
            }
        });
    },
    testDateRngFmtGetDefaultLocale: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "yy-YY",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                test.equal(fmt.getLocale().toString(), "yy-YY");
                test.done();
            }
        });
    },
    //Miscellaneous UnitTest
    testDateRngFmtesPAMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "es-PA",
            length: "medium",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                new GregorianDate({
                    year: 2011,
                    month: 6,
                    day: 20,
                    hour: 13,
                    minute: 45,
                    second: 0,
                    millisecond: 0,
                    sync: false,
                    onLoad: function(start) {
                        new GregorianDate({
                            year: 2011,
                            month: 6,
                            day: 28,
                            hour: 14,
                            minute: 5,
                            second: 30,
                            millisecond: 0,
                            sync: false,
                            onLoad: function(end) {
                                test.equal(fmt.format(start, end), "06/20 – 28/2011");
                                test.done();
                            }
                        });
                    }
                });
            }
        });
    },
    testDateRngFmtesPRNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "es-PR",
            length: "medium",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                new GregorianDate({
                    year: 2011,
                    month: 6,
                    day: 20,
                    hour: 13,
                    minute: 45,
                    second: 0,
                    millisecond: 0,
                    sync: false,
                    onLoad: function(start) {
                        new GregorianDate({
                            year: 2011,
                            month: 11,
                            day: 28,
                            hour: 14,
                            minute: 30,
                            second: 0,
                            millisecond: 0,
                            sync: false,
                            onLoad: function(end) {
                                test.equal(fmt.format(start, end), "06/20 – 11/28/2011");
                                test.done();
                            }
                        });
                    }
                });
            }
        });
    },
    testDateRngFmtAcceptJSIntrisicDates: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "en-US",
            length: "short",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                var start = new Date(2011, 5, 20, 13, 45, 0);
                var end = new Date(2012, 4, 26, 16, 30, 0);
                test.equal(fmt.format(start, end), "6/20/11 – 5/26/12");
                test.done();
            }
        });
    },
    testDateRngFmtAcceptUnixTimes: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "en-US",
            length: "short",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                var start = 1308602700000;
                var end = 1338075000000;
                test.equal(fmt.format(start, end), "6/20/11 – 5/26/12");
                test.done();
            }
        });
    }
};