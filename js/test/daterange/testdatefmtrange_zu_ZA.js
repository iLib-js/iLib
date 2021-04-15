/*
 * testdatefmtrange_zu_ZA.js - test the date range formatter object Tajik-Tajikistan
 * 
 * Copyright © 2021, JEDLSoft
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

if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../lib/GregorianDate.js");
}
if (typeof(DateRngFmt) === "undefined") {
    var DateRngFmt = require("../../lib/DateRngFmt.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdatefmtrange_zu_ZA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateRngFmtRangeInDayShort_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "short"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "12/31/11 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtRangeInDayMedium_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "medium"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Dis 31, 2011 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtRangeInDayLong_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "long"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Disemba 31, 2011 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtRangeInDayFull_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Disemba 31, 2011 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtRangeNextDayShort_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "short"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "12/30/11 13:45 – 12/31/11 14:30");
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "medium"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Dis 30, 2011 13:45 – Dis 31, 2011 14:30");
        test.done();
    },
    testDateRngFmtRangeNextDayLong_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "long"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Disemba 30, 2011 13:45 – Disemba 31, 2011 14:30");
        test.done();
    },
    testDateRngFmtRangeNextDayFull_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Disemba 30, 2011 13:45 – Disemba 31, 2011 14:30");
        test.done();
    },
    testDateRngFmtRangeMultiDayShort_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "short"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "12/20/11 – 12/31/11");
        test.done();
    },
    testDateRngFmtRangeMultiDayMedium_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "medium"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Dis 20 – 31, 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "long"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Disemba 20 – 31, 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Disemba 20 – 31, 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthShort_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "short"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "11/20 – 12/31/11");
        test.done();
    },
    testDateRngFmtRangeNextMonthMedium_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "medium"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Nov 20 – Dis 31, 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "long"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Novemba 20 – Disemba 31, 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Novemba 20 – Disemba 31, 2011");
        test.done();
    },
    testDateRngFmtRangeNextYearShort_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "short"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "11/20/11 – 1/31/12");
        test.done();
    },
    testDateRngFmtRangeNextYearMedium_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "medium"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Nov 20, 2011 – Jan 31, 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearLong_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "long"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Novemba 20, 2011 – Januwari 31, 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearFull_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Novemba 20, 2011 – Januwari 31, 2012");
        test.done();
    },
    testDateRngFmtRangeMultiYearShort_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "short"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "11/11 – 1/14");
        test.done();
    },
    testDateRngFmtRangeMultiYearMedium_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "medium"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Nov, 2011 – Jan, 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "long"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Novemba, 2011 – Januwari, 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "Novemba, 2011 – Januwari, 2014");
        test.done();
    },
    testDateRngFmtManyYearsFull_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var start = new GregorianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2064,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "2011 – 2064");
        test.done();
    }
};