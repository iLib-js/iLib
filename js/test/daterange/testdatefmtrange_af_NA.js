/*
 * testdatefmtrange_af_ZA.js - test the date range formatter object in Afrikaans
 *
 * Copyright © 2015-2017, 2020 JEDLSoft
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

module.exports.testdatefmtrange_af_NA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtAFNAFRangeInDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-12-31 1:45 nm. – 2:30 nm.");
        test.done();
    },
    testDateRngFmtAFNAFRangeInDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "medium"});
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
        test.equal(fmt.format(start, end), "31 Des. 2011 1:45 nm. – 2:30 nm.");
        test.done();
    },
    testDateRngFmtAFNAFRangeInDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "long"});
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
        test.equal(fmt.format(start, end), "31 Desember 2011 1:45 nm. – 2:30 nm.");
        test.done();
    },
    testDateRngFmtAFNAFRangeInDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "full"});
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
        test.equal(fmt.format(start, end), "31 Desember 2011 1:45 nm. – 2:30 nm.");
        test.done();
    },

    testDateRngFmtAFNAFRangeNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-12-30 1:45 nm. – 2011-12-31 2:30 nm.");
        test.done();
    },
    testDateRngFmtAFNAFRangeNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "medium"});
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
        test.equal(fmt.format(start, end), "30 Des. 2011 1:45 nm. – 31 Des. 2011 2:30 nm.");
        test.done();
    },
    testDateRngFmtAFNAFRangeNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "long"});
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
        test.equal(fmt.format(start, end), "30 Desember 2011 1:45 nm. – 31 Desember 2011 2:30 nm.");
        test.done();
    },
    testDateRngFmtAFNAFRangeNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "full"});
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
        test.equal(fmt.format(start, end), "30 Desember 2011 1:45 nm. – 31 Desember 2011 2:30 nm.");
        test.done();
    },

    testDateRngFmtAFNAFRangeMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "short"});
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
    testDateRngFmtAFNAFRangeMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "medium"});
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
    testDateRngFmtAFNAFRangeMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "long"});
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
    testDateRngFmtAFNAFRangeMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "full"});
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

    testDateRngFmtAFNAFRangeNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "short"});
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
    testDateRngFmtAFNAFRangeNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "medium"});
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
    testDateRngFmtAFNAFRangeNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "long"});
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
    testDateRngFmtAFNAFRangeNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "full"});
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

    testDateRngFmtAFNAFRangeNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "short"});
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
    testDateRngFmtAFNAFRangeNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "medium"});
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
    testDateRngFmtAFNAFRangeNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "long"});
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
    testDateRngFmtAFNAFRangeNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "full"});
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

    testDateRngFmtAFNAFRangeMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "short"});
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
    testDateRngFmtAFNAFRangeMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "medium"});
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
    testDateRngFmtAFNAFRangeMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "long"});
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
    testDateRngFmtAFNAFRangeMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "full"});
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
    testDateRngFmtAFNAFManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "af-NA", length: "medium"});
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
