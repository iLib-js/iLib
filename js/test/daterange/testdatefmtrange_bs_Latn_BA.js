/*
 * testdatefmtrange_bs_Latn_BA.js - test the date range formatter object in Bosnian/Herzegovina
 *
 * Copyright © 2012-2017, JEDLSoft
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

module.exports.testdatefmtrange_bs_Latn_BA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtBARangeInDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "short"});
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
        test.equal(fmt.format(start, end), '31. 12. 2011. 13:45 – 14:30');
        test.done();
    },
    testDateRngFmtBARangeInDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "medium"});
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
        test.equal(fmt.format(start, end), '31. dec 2011. 13:45 – 14:30');
        test.done();
    },
    testDateRngFmtBARangeInDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "long"});
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
        test.equal(fmt.format(start, end), "31. decembar 2011. u 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtBARangeInDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "full"});
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
        test.equal(fmt.format(start, end), "31. decembar 2011. u 13:45 – 14:30");
        test.done();
    },

    testDateRngFmtBARangeNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "short"});
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
        test.equal(fmt.format(start, end), '30. 12. 2011. 13:45 – 31. 12. 2011. 14:30');
        test.done();
    },
    testDateRngFmtBARangeNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "medium"});
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
        test.equal(fmt.format(start, end), '30. dec 2011. 13:45 – 31. dec 2011. 14:30');
        test.done();
    },
    testDateRngFmtBARangeNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "long"});
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
        test.equal(fmt.format(start, end), "30. decembar 2011. u 13:45 – 31. decembar 2011. u 14:30");
        test.done();
    },
    testDateRngFmtBARangeNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "full"});
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
        test.equal(fmt.format(start, end), "30. decembar 2011. u 13:45 – 31. decembar 2011. u 14:30");
        test.done();
    },

    testDateRngFmtBARangeMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "short"});
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
        test.equal(fmt.format(start, end), '20 – 31. 12. 2011.');
        test.done();
    },
    testDateRngFmtBARangeMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "medium"});
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
        test.equal(fmt.format(start, end), '20 – 31. dec 2011.');
        test.done();
    },
    testDateRngFmtBARangeMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31. decembar 2011.");
        test.done();
    },
    testDateRngFmtBARangeMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31. decembar 2011.");
        test.done();
    },

    testDateRngFmtBARangeNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "short"});
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
        test.equal(fmt.format(start, end), '20. 11 – 31. 12. 2011.');
        test.done();
    },
    testDateRngFmtBARangeNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "medium"});
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
        test.equal(fmt.format(start, end), '20. nov – 31. dec 2011.');
        test.done();
    },
    testDateRngFmtBARangeNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "long"});
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
        test.equal(fmt.format(start, end), "20. novembar – 31. decembar 2011.");
        test.done();
    },
    testDateRngFmtBARangeNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "full"});
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
        test.equal(fmt.format(start, end), "20. novembar – 31. decembar 2011.");
        test.done();
    },

    testDateRngFmtBARangeNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "short"});
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
        test.equal(fmt.format(start, end), '20. 11. 2011. – 31. 1. 2012.');
        test.done();
    },
    testDateRngFmtBARangeNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "medium"});
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
        test.equal(fmt.format(start, end), '20. nov 2011. – 31. jan 2012.');
        test.done();
    },
    testDateRngFmtBARangeNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "long"});
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
        test.equal(fmt.format(start, end), "20. novembar 2011. – 31. januar 2012.");
        test.done();
    },
    testDateRngFmtBARangeNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "full"});
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
        test.equal(fmt.format(start, end), "20. novembar 2011. – 31. januar 2012.");
        test.done();
    },

    testDateRngFmtBARangeMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "short"});
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
        test.equal(fmt.format(start, end), '11. 2011. – 1. 2014.');
        test.done();
    },
    testDateRngFmtBARangeMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "medium"});
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
        test.equal(fmt.format(start, end), 'nov 2011. – jan 2014.');
        test.done();
    },
    testDateRngFmtBARangeMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "long"});
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
        test.equal(fmt.format(start, end), "novembar 2011. – januar 2014.");
        test.done();
    },
    testDateRngFmtBARangeMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "full"});
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
        test.equal(fmt.format(start, end), "novembar 2011. – januar 2014.");
        test.done();
    },
    testDateRngFmtBAManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bs-Latn-BA", length: "full"});
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
