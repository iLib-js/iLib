/*
 * testgetformatinfo.js - test the date formatter object's
 * getFormatInfo call
 *
 * Copyright © 2019 JEDLSoft
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
if (typeof(DateFactory) === "undefined") {
    var DateFactory = require("../../lib/DateFactory.js");
}
if (typeof(DateFmtInfo) === "undefined") {
    var DateFmtInfo = require("../../lib/DateFmtInfo.js");
}

module.exports.testdategetformatinfo = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtInfoGetFormatInfoUSShort: function(test) {
        test.expect(16);

        var fmt = new DateFmtInfo({
            locale: "en-US",
            type: "date",
            date: "short"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 2019, // non leap year
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
            }
        });

        test.done();
    },

    testDateFmtInfoGetFormatInfoUSShortLeapYear: function(test) {
        test.expect(16);

        var fmt = new DateFmtInfo({
            locale: "en-US",
            type: "date",
            date: "short"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 2020, // leap year
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
                    "2": [1, 29],
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
            }
        });

        test.done();
    },

    testDateFmtInfoGetFormatInfoUSFull: function(test) {
        test.expect(16);

        var fmt = new DateFmtInfo({
            locale: "en-US",
            type: "date",
            length: "full"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 2019,
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 5);

                test.equal(info[0].component, "month");
                test.equal(info[0].label, "Month");
                test.deepEqual(info[0].constraint, [
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
                    {label: "December", value: 12},
                ]);

                test.ok(!info[1].component);
                test.equal(info[1].label, " ");

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
                test.equal(info[3].label, ", ");

                test.equal(info[4].component, "year");
                test.equal(info[4].label, "Year");
                test.equal(info[4].constraint, "\\d{4}");
            }
        });

        test.done();
    },

    testDateFmtInfoGetFormatInfoGregorianTranslated: function(test) {
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
            sync: true,
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
            }
        });

        test.done();
    },

    testDateFmtInfoGetFormatInfoUSShortAllFields: function(test) {
        test.expect(175);

        var fmt = new DateFmtInfo({
            locale: "en-US",
            type: "datetime",
            length: "short",
            date: "wmdy",
            time: "ahmsz"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
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
                test.equal(info[2].placeholder, "M");
                test.deepEqual(info[2].constraint, [1, 12]);
                test.equal(info[2].validation, "\\d{1,2}");

                test.ok(!info[3].component);
                test.equal(info[3].label, "/");

                test.equal(info[4].component, "day");
                test.equal(info[4].label, "Day");
                test.equal(info[4].placeholder, "D");
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
                test.equal(info[5].label, "/");

                test.equal(info[6].component, "year");
                test.equal(info[6].label, "Year");
                test.equal(info[6].placeholder, "YY");
                test.equal(info[6].constraint, "\\d{2}");

                test.ok(!info[7].component);
                test.equal(info[7].label, ", ");

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
    },

    testDateFmtInfoGetFormatInfoUSFullAllFields: function(test) {
        test.expect(172);

        var fmt = new DateFmtInfo({
            locale: "en-US",
            type: "datetime",
            length: "full",
            date: "wmdy",
            time: "ahmsz"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
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
    },

    testDateFmtInfoGetFormatInfoDayOfWeekCalculator: function(test) {
        test.expect(6);

        var fmt = new DateFmtInfo({
            locale: "en-US",
            type: "datetime",
            length: "full",
            date: "wmdy",
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 2019, // non leap year
            onLoad: function(info) {
                test.ok(info);

                test.equal(info[0].label, "Day of Week"),
                test.equal(typeof(info[0].value), "function");

                test.equal(info[0].value(new Date(2019, 5, 3)), "Monday");
                test.equal(info[0].value(new Date(2019, 7, 23)), "Friday");
            }
        });

        test.done();
    },


    testDateFmtInfoGetFormatInfoHebrewCalendarNonLeap: function(test) {
        test.expect(16);

        var fmt = new DateFmtInfo({
            locale: "en-US",
            type: "date",
            length: "full",
            calendar: "hebrew"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 5780, // non leap year
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 5);

                test.equal(info[0].component, "month");
                test.equal(info[0].label, "Month");
                test.deepEqual(info[0].constraint, [
                    {label: "Nisan", value: 1},
                    {label: "Iyyar", value: 2},
                    {label: "Sivan", value: 3},
                    {label: "Tammuz", value: 4},
                    {label: "Av", value: 5},
                    {label: "Elul", value: 6},
                    {label: "Tishri", value: 7},
                    {label: "Ḥeshvan", value: 8},
                    {label: "Kislev", value: 9},
                    {label: "Teveth", value: 10},
                    {label: "Shevat", value: 11},
                    {label: "Adar", value: 12},
                ]);

                test.ok(!info[1].component);
                test.equal(info[1].label, " ");

                test.equal(info[2].component, "day");
                test.equal(info[2].label, "Day");
                test.deepEqual(info[2].constraint, {
                    "1": [1, 30],
                    "2": [1, 29],
                    "3": [1, 30],
                    "4": [1, 29],
                    "5": [1, 30],
                    "6": [1, 29],
                    "7": [1, 30],
                    "8": [1, 30],
                    "9": [1, 30],
                    "10": [1, 29],
                    "11": [1, 30],
                    "12": [1, 30]
                });

                test.ok(!info[3].component);
                test.equal(info[3].label, ", ");

                test.equal(info[4].component, "year");
                test.equal(info[4].label, "Year");
                test.equal(info[4].constraint, "\\d{4}");
            }
        });

        test.done();
    },

    testDateFmtInfoGetFormatInfoHebrewCalendarLeap: function(test) {
        test.expect(16);

        var fmt = new DateFmtInfo({
            locale: "en-US",
            type: "date",
            length: "full",
            calendar: "hebrew"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 5779, // leap year
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 5);

                test.equal(info[0].component, "month");
                test.equal(info[0].label, "Month");
                test.deepEqual(info[0].constraint, [
                    {label: "Nisan", value: 1},
                    {label: "Iyyar", value: 2},
                    {label: "Sivan", value: 3},
                    {label: "Tammuz", value: 4},
                    {label: "Av", value: 5},
                    {label: "Elul", value: 6},
                    {label: "Tishri", value: 7},
                    {label: "Ḥeshvan", value: 8},
                    {label: "Kislev", value: 9},
                    {label: "Teveth", value: 10},
                    {label: "Shevat", value: 11},
                    {label: "Adar I", value: 12},
                    {label: "Adar II", value: 13},
                ]);

                test.ok(!info[1].component);
                test.equal(info[1].label, " ");

                test.equal(info[2].component, "day");
                test.equal(info[2].label, "Day");
                test.deepEqual(info[2].constraint, {
                    "1": [1, 30],
                    "2": [1, 29],
                    "3": [1, 30],
                    "4": [1, 29],
                    "5": [1, 30],
                    "6": [1, 29],
                    "7": [1, 30],
                    "8": [1, 30],
                    "9": [1, 30],
                    "10": [1, 29],
                    "11": [1, 30],
                    "12": [1, 30],
                    "13": [1, 29]
                });

                test.ok(!info[3].component);
                test.equal(info[3].label, ", ");

                test.equal(info[4].component, "year");
                test.equal(info[4].label, "Year");
                test.equal(info[4].constraint, "\\d{4}");
            }
        });

        test.done();
    },

    testDateFmtInfoGetFormatInfoHebrewCalendarInHebrew: function(test) {
        test.expect(18);

        var fmt = new DateFmtInfo({
            locale: "he-IL",
            type: "date",
            length: "full",
            calendar: "hebrew"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 5780, // non leap year
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 6);

                test.ok(!info[0].component);
                test.equal(info[0].label, "\u200F"); // RTL mark

                test.equal(info[1].component, "day");
                test.equal(info[1].label, "יום");
                test.deepEqual(info[1].constraint, {
                    "1": [1, 30],
                    "2": [1, 29],
                    "3": [1, 30],
                    "4": [1, 29],
                    "5": [1, 30],
                    "6": [1, 29],
                    "7": [1, 30],
                    "8": [1, 30],
                    "9": [1, 30],
                    "10": [1, 29],
                    "11": [1, 30],
                    "12": [1, 30]
                });

                test.ok(!info[2].component);
                test.equal(info[2].label, " ב");

                test.equal(info[3].component, "month");
                test.equal(info[3].label, "חודש");
                test.deepEqual(info[3].constraint, [
                    {label: "ניסן", value: 1},
                    {label: "אייר", value: 2},
                    {label: "סיוון", value: 3},
                    {label: "תמוז", value: 4},
                    {label: "אב", value: 5},
                    {label: "אלול", value: 6},
                    {label: "תשרי", value: 7},
                    {label: "חשוון", value: 8},
                    {label: "כסלו", value: 9},
                    {label: "טבת", value: 10},
                    {label: "שבט", value: 11},
                    {label: "אדר", value: 12},
                ]);

                test.ok(!info[4].component);
                test.equal(info[4].label, " ");

                test.equal(info[5].component, "year");
                test.equal(info[5].label, "שנה");
                test.equal(info[5].constraint, "\\d{4}");
            }
        });

        test.done();
    },

    testDateFmtInfoGetFormatInfoHebrewCalendarInHebrewLeap: function(test) {
        test.expect(18);

        var fmt = new DateFmtInfo({
            locale: "he-IL",
            type: "date",
            length: "full",
            calendar: "hebrew"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 5782, // leap year
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 6);

                test.ok(!info[0].component);
                test.equal(info[0].label, "\u200F"); // RTL mark

                test.equal(info[1].component, "day");
                test.equal(info[1].label, "יום");
                test.deepEqual(info[1].constraint, {
                    "1": [1, 30],
                    "2": [1, 29],
                    "3": [1, 30],
                    "4": [1, 29],
                    "5": [1, 30],
                    "6": [1, 29],
                    "7": [1, 30],
                    "8": [1, 29],
                    "9": [1, 30],
                    "10": [1, 29],
                    "11": [1, 30],
                    "12": [1, 30],
                    "13": [1, 29]
                });

                test.ok(!info[2].component);
                test.equal(info[2].label, " ב");

                test.equal(info[3].component, "month");
                test.equal(info[3].label, "חודש");
                test.deepEqual(info[3].constraint, [
                    {label: "ניסן", value: 1},
                    {label: "אייר", value: 2},
                    {label: "סיוון", value: 3},
                    {label: "תמוז", value: 4},
                    {label: "אב", value: 5},
                    {label: "אלול", value: 6},
                    {label: "תשרי", value: 7},
                    {label: "חשוון", value: 8},
                    {label: "כסלו", value: 9},
                    {label: "טבת", value: 10},
                    {label: "שבט", value: 11},
                    {label: "אדר א׳", value: 12},
                    {label: "אדר ב׳", value: 13}
                ]);

                test.ok(!info[4].component);
                test.equal(info[4].label, " ");

                test.equal(info[5].component, "year");
                test.equal(info[5].label, "שנה");
                test.equal(info[5].constraint, "\\d{4}");
            }
        });

        test.done();
    },

    testDateFmtInfoGetFormatInfoHebrewCalendarInArabic: function(test) {
        test.expect(18);

        var fmt = new DateFmtInfo({
            locale: "he-IL",
            type: "date",
            length: "full",
            calendar: "hebrew",
            uiLocale: "ar-IL"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 5780, // non leap year
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 6);

                test.ok(!info[0].component);
                test.equal(info[0].label, "\u200F"); // RTL mark

                test.equal(info[1].component, "day");
                test.equal(info[1].label, "يوم");
                test.deepEqual(info[1].constraint, {
                    "1": [1, 30],
                    "2": [1, 29],
                    "3": [1, 30],
                    "4": [1, 29],
                    "5": [1, 30],
                    "6": [1, 29],
                    "7": [1, 30],
                    "8": [1, 30],
                    "9": [1, 30],
                    "10": [1, 29],
                    "11": [1, 30],
                    "12": [1, 30]
                });

                test.ok(!info[2].component);
                test.equal(info[2].label, " ב");

                test.equal(info[3].component, "month");
                test.equal(info[3].label, "الشهر");
                test.deepEqual(info[3].constraint, [
                    {label: "نيسان", value: 1},
                    {label: "أيار", value: 2},
                    {label: "سيفان", value: 3},
                    {label: "تموز", value: 4},
                    {label: "آب", value: 5},
                    {label: "أيلول", value: 6},
                    {label: "تشري", value: 7},
                    {label: "مرحشوان", value: 8},
                    {label: "كيسلو", value: 9},
                    {label: "طيفت", value: 10},
                    {label: "شباط", value: 11},
                    {label: "آذار", value: 12}
                ]);

                test.ok(!info[4].component);
                test.equal(info[4].label, " ");

                test.equal(info[5].component, "year");
                test.equal(info[5].label, "السنة");
                test.equal(info[5].constraint, "\\d{4}");
            }
        });

        test.done();
    },

    testDateFmtInfoGetFormatInfoHebrewCalendarInArabicLeap: function(test) {
        test.expect(18);

        var fmt = new DateFmtInfo({
            locale: "he-IL",
            type: "date",
            length: "full",
            calendar: "hebrew",
            uiLocale: "ar-IL"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 5782, // leap year
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 6);

                test.ok(!info[0].component);
                test.equal(info[0].label, "\u200F"); // RTL mark

                test.equal(info[1].component, "day");
                test.equal(info[1].label, "يوم");
                test.deepEqual(info[1].constraint, {
                    "1": [1, 30],
                    "2": [1, 29],
                    "3": [1, 30],
                    "4": [1, 29],
                    "5": [1, 30],
                    "6": [1, 29],
                    "7": [1, 30],
                    "8": [1, 29],
                    "9": [1, 30],
                    "10": [1, 29],
                    "11": [1, 30],
                    "12": [1, 30],
                    "13": [1, 29]
                });

                test.ok(!info[2].component);
                test.equal(info[2].label, " ב");

                test.equal(info[3].component, "month");
                test.equal(info[3].label, "الشهر");
                test.deepEqual(info[3].constraint, [
                    {label: "نيسان", value: 1},
                    {label: "أيار", value: 2},
                    {label: "سيفان", value: 3},
                    {label: "تموز", value: 4},
                    {label: "آب", value: 5},
                    {label: "أيلول", value: 6},
                    {label: "تشري", value: 7},
                    {label: "مرحشوان", value: 8},
                    {label: "كيسلو", value: 9},
                    {label: "طيفت", value: 10},
                    {label: "شباط", value: 11},
                    {label: "آذار الأول", value: 12},
                    {label: "آذار الثاني", value: 13}
                ]);

                test.ok(!info[4].component);
                test.equal(info[4].label, " ");

                test.equal(info[5].component, "year");
                test.equal(info[5].label, "السنة");
                test.equal(info[5].constraint, "\\d{4}");
            }
        });

        test.done();
    },

    testDateFmtInfoGetDateComponentOrderEN: function(test) {
        test.expect(2);

        var fmt = new DateFmtInfo({locale: "en"});
        test.ok(fmt !== null);

        test.equal(fmt.getDateComponentOrder(), "mdy");
        test.done();
    },

    testDateFmtInfoGetDateComponentOrderENGB: function(test) {
        test.expect(2);

        var fmt = new DateFmtInfo({locale: "en-GB"});
        test.ok(fmt !== null);

        test.equal(fmt.getDateComponentOrder(), "dmy");
        test.done();
    },

    testDateFmtInfoGetDateComponentOrderENUS: function(test) {
        test.expect(2);

        var fmt = new DateFmtInfo({locale: "en-US"})
        test.ok(fmt !== null);

        test.equal(fmt.getDateComponentOrder(), "mdy");
        test.done();
    },

    testDateFmtInfoGetDateComponentOrderDE: function(test) {
        test.expect(2);

        var fmt = new DateFmtInfo({locale: "de-DE"});
        test.ok(fmt !== null);

        test.equal(fmt.getDateComponentOrder(), "dmy");
        test.done();
    },

    testDateFmtInfoGetDateComponentOrderAK: function(test) {
        test.expect(2);

        var fmt = new DateFmtInfo({locale: "ak-GH"});
        test.ok(fmt !== null);

        test.equal(fmt.getDateComponentOrder(), "ymd");
        test.done();
    },

    testDateFmtInfoGetDateComponentOrderLV: function(test) {
        test.expect(2);

        var fmt = new DateFmtInfo({locale: "lv-LV"});
        test.ok(fmt !== null);

        test.equal(fmt.getDateComponentOrder(), "ydm");
        test.done();
    },

    testDateFmtInfoGetMonthsOfYear1: function(test) {
        test.expect(2);
        var fmt = new DateFmtInfo({locale: "en-US"});
        test.ok(fmt !== null);

        var arrMonths = fmt.getMonthsOfYear();
        var expected = [undefined, "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
        test.deepEqual(arrMonths, expected);
        test.done();
    },

    testDateFmtInfoGetMonthsOfYear2: function(test) {
        test.expect(2);
        var fmt = new DateFmtInfo({locale: "en-US"});
        test.ok(fmt !== null);

        var arrMonths = fmt.getMonthsOfYear({length: "long"});
        var expected = [undefined, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        test.deepEqual(arrMonths, expected);
        test.done();
    },

    testDateFmtInfoGetMonthsOfYearThai: function(test) {
        test.expect(2);
        // uses ThaiSolar calendar
        var fmt = new DateFmtInfo({locale: "th-TH"});
        test.ok(fmt !== null);

        var arrMonths = fmt.getMonthsOfYear({length: "long"});

        var expected = [undefined, "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
        test.deepEqual(arrMonths, expected);
        test.done();
    },

    testDateFmtInfoGetMonthsOfYearLeapYear: function(test) {
        test.expect(2);
        var d = DateFactory({type: "hebrew", locale: "en-US", year: 5774, month: 1, day: 1});
        var fmt = new DateFmtInfo({date: "en-US", calendar: "hebrew"});
        test.ok(fmt !== null);

        var arrMonths = fmt.getMonthsOfYear({length: "long", date: d});

        var expected = [undefined, "Nis", "Iyy", "Siv", "Tam", "Av", "Elu", "Tis", "Ḥes", "Kis", "Tev", "She", "Ada", "Ad2"];
        test.deepEqual(arrMonths, expected);
        test.done();
    },

    testDateFmtInfoGetMonthsOfYearNonLeapYear: function(test) {
        test.expect(2);
        var d = DateFactory({type: "hebrew", locale: "en-US", year: 5775, month: 1, day: 1});
        var fmt = new DateFmtInfo({date: "en-US", calendar: "hebrew"});
        test.ok(fmt !== null);

        var arrMonths = fmt.getMonthsOfYear({length: "long", date: d});

        var expected = [undefined, "Nis", "Iyy", "Siv", "Tam", "Av", "Elu", "Tis", "Ḥes", "Kis", "Tev", "She", "Ada"];
        test.deepEqual(arrMonths, expected);
        test.done();
    },

    testDateFmtInfoGetMonthsOfYearNonLeapYearInHebrew: function(test) {
        test.expect(2);
        var d = DateFactory({type: "hebrew", locale: "en-US", year: 5775, month: 1, day: 1});
        var fmt = new DateFmtInfo({date: "en-US", calendar: "hebrew", uiLocale: "he-IL"});
        test.ok(fmt !== null);

        var arrMonths = fmt.getMonthsOfYear({length: "long", date: d});

        var expected = [undefined, "ניסן", "אייר", "סיון", "תמוז", "אב", "אלול", "תשרי", "חשון", "כסלו", "טבת", "שבט", "אדר"];

        test.deepEqual(arrMonths, expected);
        test.done();
    },

    testDateFmtInfoGetDaysOfWeek1: function(test) {
        test.expect(2);
        var fmt = new DateFmtInfo({locale: "en-US"});
        test.ok(fmt !== null);

        var arrDays = fmt.getDaysOfWeek();

        var expected = ["S", "M", "T", "W", "T", "F", "S"];
        test.deepEqual(arrDays, expected);
        test.done();
    },

    testDateFmtInfoGetDaysOfWeek1InGerman: function(test) {
        test.expect(2);
        var fmt = new DateFmtInfo({locale: "en-US", uiLocale: "de-DE"});
        test.ok(fmt !== null);

        var arrDays = fmt.getDaysOfWeek();

        var expected = ["S", "M", "D", "M", "D", "F", "S"];
        test.deepEqual(arrDays, expected);
        test.done();
    },

    testDateFmtInfoGetDaysOfWeek2: function(test) {
        test.expect(2);
        var fmt = new DateFmtInfo({locale: "en-US"});
        test.ok(fmt !== null);

        var arrDays = fmt.getDaysOfWeek({length: 'long'});
        var expected = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        test.deepEqual(arrDays, expected);
        test.done();
    },

    testDateFmtInfoGetDaysOfWeekOtherCalendar: function(test) {
        test.expect(2);
        var fmt = new DateFmtInfo({locale: "en-US", calendar: "hebrew"});
        test.ok(fmt !== null);

        var arrDays = fmt.getDaysOfWeek({length: 'long'});

        var expected = ["ris", "she", "shl", "rvi", "ḥam", "shi", "sha"];
        test.deepEqual(arrDays, expected);
        test.done();
    },

    testDateFmtInfoGetDaysOfWeekThai: function(test) {
        test.expect(2);
        var fmt = new DateFmtInfo({locale: "th-TH", calendar: "thaisolar"});
        test.ok(fmt !== null);

        var arrDays = fmt.getDaysOfWeek({length: 'long'});

        var expected = ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."];
        test.deepEqual(arrDays, expected);
        test.done();
    },

    testDateFmtInfoGetDaysOfWeekThaiInEnglish: function(test) {
        test.expect(2);
        var fmt = new DateFmtInfo({locale: "en-US", calendar: "thaisolar"});
        test.ok(fmt !== null);

        var arrDays = fmt.getDaysOfWeek({length: 'long'});

        var expected = ["ath", "cha", "ang", "phu", "phr", "suk", "sao"];
        test.deepEqual(arrDays, expected);
        test.done();
    }
};
