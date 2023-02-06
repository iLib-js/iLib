/*
 * testdatefmtasync.js - test the date formatter object asynchronously
 *
 * Copyright © 2018, 2022-2023 JEDLSoft
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
                test.equal(fmt.format(datMyBday), "1:37 PM");
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
                        test.equal(fmt.format(date), "21/9/11, 6:45 am AEST");
                        test.done();
                    }
                });

            }
        });
    },
    testDateFmtIntlDateTimeObjAsync_en_US: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("en-US")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        new DateFmt({
            length: "long",
            locale: "en-US",
            useIntl: true,
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                var date = new Date(2022, 4, 29);

                if(ilib._getPlatform() === "nodejs"){
                    var cldrVersion = Number(process.versions["cldr"]);
                    if (cldrVersion < 36){
                        test.equal(fmt.format(date), "5/29/2022");
                    } else {
                        test.equal(fmt.format(date), "May 29, 2022");
                    }
                } else {
                    test.equal(fmt.format(date), "May 29, 2022");
                }
                test.done();
            }
        });
    },
    testDateFmtIntlDateTimeObjAsync_ko_KR_Short: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("ko-KR")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var expected = (ilib._getPlatform() === "browser" && ilib._getBrowser() === "safari") ? "2022. 5. 29." : "22. 5. 29.";
        new DateFmt({
            length: "short",
            locale: "ko-KR",
            useIntl: true,
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                var date = new Date(2022, 4, 29);
                test.equal(fmt.format(date), expected);
                test.done();
            }
        });
    },
    testDateFmtIntlDateTimeObjAsync_ko_KR_Medium: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("ko-KR")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        new DateFmt({
            length: "medium",
            locale: "ko-KR",
            useIntl: true,
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                var date = new Date(2022, 4, 29);
                test.equal(fmt.format(date), "2022. 5. 29.");
                test.done();
            }
        });
    },
    testDateFmtIntlDateTimeObjAsync_ko_KR_Long: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("ko-KR")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        new DateFmt({
            length: "long",
            locale: "ko-KR",
            useIntl: true,
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                var date = new Date(2022, 4, 29);
                test.equal(fmt.format(date), "2022년 5월 29일");
                test.done();
            }
        });
    },
    testDateFmtIntlDateTimeObjAsync2_en_US: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("en-US")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        DateFactory({
            year: 2022,
            month: 9,
            day: 29,
            hout:13,
            minute: 32,
            sync: false,
            onLoad:function(date){
                test.ok(date !== null);
                new DateFmt({
                    length: "long",
                    locale: "en-US",
                    useIntl: true,
                    sync: false,
                    onLoad: function(fmt){
                        if(ilib._getPlatform() === "nodejs"){
                            var cldrVersion = Number(process.versions["cldr"]);
                            if(cldrVersion < 36){
                                test.equal(fmt.format(date), "9/29/2022");
                            } else {
                                test.equal(fmt.format(date), "September 29, 2022");
                            }
                        } else {
                            test.equal(fmt.format(date), "September 29, 2022");
                        }
                        test.done();
                    }
                });
            }
        })
    },
    testDateFmtIntlDateTimeObjAsync2_ko_KR: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("ko-KR")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        DateFactory({
            year: 2022,
            month: 5,
            day: 29,
            hout:13,
            minute: 32,
            sync: false,
            onLoad:function(date){
                test.ok(date !== null);
                new DateFmt({
                    length: "medium",
                    locale: "ko-KR",
                    useIntl: true,
                    sync: false,
                    onLoad: function(fmt){
                        test.equal(fmt.format(date), "2022. 5. 29.");
                        test.done();
                    }
                });
            }
        })
    },
    testDateFmtIntlDateTimeObjAsync3_ko_KR: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("ko-KR")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        new DateFmt({
            locale: "ko-KR",
            date:"dmwy",
            length: "full",
            useIntl: true,
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                DateFactory({
                    year: 2022,
                    month: 5,
                    day: 29,
                    hout:13,
                    minute: 32,
                    sync: false,
                    onLoad: function(date) {
                        test.equal(fmt.format(date), "2022년 5월 29일 일요일");
                        test.done();
                    }
                });

            }
        });
    },
};