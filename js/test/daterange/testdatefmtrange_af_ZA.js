/*
 * testdatefmtrange_af_ZA.js - test the date range formatter object in Afrikaans
 *
 * Copyright © 2015-2017, JEDLSoft
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

module.exports.testdatefmtrange_af_ZA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtAFRangeInDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-12-31 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtAFRangeInDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "medium"});
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
        test.equal(fmt.format(start, end), "31 Des. 2011 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtAFRangeInDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "long"});
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
        test.equal(fmt.format(start, end), "31 Desember 2011 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtAFRangeInDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "full"});
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
        test.equal(fmt.format(start, end), "31 Desember 2011 13:45 – 14:30");
        test.done();
    },

    testDateRngFmtAFRangeNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-12-30 13:45 – 2011-12-31 14:30");
        test.done();
    },
    testDateRngFmtAFRangeNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "medium"});
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
        test.equal(fmt.format(start, end), "30 Des. 2011 13:45 – 31 Des. 2011 14:30");
        test.done();
    },
    testDateRngFmtAFRangeNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "long"});
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
        test.equal(fmt.format(start, end), "30 Desember 2011 13:45 – 31 Desember 2011 14:30");
        test.done();
    },
    testDateRngFmtAFRangeNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "full"});
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
        test.equal(fmt.format(start, end), "30 Desember 2011 13:45 – 31 Desember 2011 14:30");
        test.done();
    },

    testDateRngFmtAFRangeMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-12-20 – 31");
        test.done();
    },
    testDateRngFmtAFRangeMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 Des. 2011");
        test.done();
    },
    testDateRngFmtAFRangeMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 Desember 2011");
        test.done();
    },
    testDateRngFmtAFRangeMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31 Desember 2011");
        test.done();
    },

    testDateRngFmtAFRangeNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-11-20 – 2011-12-31");
        test.done();
    },
    testDateRngFmtAFRangeNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 Nov. – 31 Des. 2011");
        test.done();
    },
    testDateRngFmtAFRangeNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "long"});
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
        test.equal(fmt.format(start, end), "20 November – 31 Desember 2011");
        test.done();
    },
    testDateRngFmtAFRangeNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "full"});
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
        test.equal(fmt.format(start, end), "20 November – 31 Desember 2011");
        test.done();
    },

    testDateRngFmtAFRangeNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-11-20 – 2012-01-31");
        test.done();
    },
    testDateRngFmtAFRangeNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 Nov. 2011 – 31 Jan. 2012");
        test.done();
    },
    testDateRngFmtAFRangeNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "long"});
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
        test.equal(fmt.format(start, end), "20 November 2011 – 31 Januarie 2012");
        test.done();
    },
    testDateRngFmtAFRangeNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "full"});
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
        test.equal(fmt.format(start, end), "20 November 2011 – 31 Januarie 2012");
        test.done();
    },

    testDateRngFmtAFRangeMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-11 – 2014-01");
        test.done();
    },
    testDateRngFmtAFRangeMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "medium"});
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
        test.equal(fmt.format(start, end), "Nov. 2011 – Jan. 2014");
        test.done();
    },
    testDateRngFmtAFRangeMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "long"});
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
        test.equal(fmt.format(start, end), "November 2011 – Januarie 2014");
        test.done();
    },
    testDateRngFmtAFRangeMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "full"});
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
        test.equal(fmt.format(start, end), "November 2011 – Januarie 2014");
        test.done();
    },
    testDateRngFmtAFManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-ZA", length: "medium"});
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
