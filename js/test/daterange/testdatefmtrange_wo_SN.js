/*
 * testdatefmtrange_wo_SN.js - test the date range formatter object Wolof-Senegal
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

module.exports.testdatefmtrange_wo_SN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateRngFmtRangeInDayShort_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "short"});
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
        test.equal(fmt.format(start, end), "31-12-2011 - 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtRangeInDayMedium_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "medium"});
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
        test.equal(fmt.format(start, end), "31 Des, 2011 - 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtRangeInDayLong_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "long"});
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
        test.equal(fmt.format(start, end), "31 Desàmbar, 2011 ci 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtRangeInDayFull_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "full"});
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
        test.equal(fmt.format(start, end), "31 Des, 2011 ci 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtRangeNextDayShort_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "short"});
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
        test.equal(fmt.format(start, end), "30-12-2011 - 13:45 – 31-12-2011 - 14:30");
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "medium"});
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
        test.equal(fmt.format(start, end), "30 Des, 2011 - 13:45 – 31 Des, 2011 - 14:30");
        test.done();
    },
    testDateRngFmtRangeNextDayLong_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "long"});
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
        test.equal(fmt.format(start, end), "30 Desàmbar, 2011 ci 13:45 – 31 Desàmbar, 2011 ci 14:30");
        test.done();
    },
    testDateRngFmtRangeNextDayFull_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "full"});
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
        test.equal(fmt.format(start, end), "30 Des, 2011 ci 13:45 – 31 Des, 2011 ci 14:30");
        test.done();
    },
    testDateRngFmtRangeMultiDayShort_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "short"});
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
        test.equal(fmt.format(start, end), "20 – 31-12-2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayMedium_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 Des, 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 Desàmbar, 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31 Des, 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthShort_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "short"});
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
        test.equal(fmt.format(start, end), "20-11 – 31-12-2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthMedium_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 Now – 31 Des, 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 Nowàmbar – 31 Desàmbar, 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 Now – 31 Des, 2011");
        test.done();
    },
    testDateRngFmtRangeNextYearShort_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "short"});
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
        test.equal(fmt.format(start, end), "20-11-2011 – 31-01-2012");
        test.done();
    },
    testDateRngFmtRangeNextYearMedium_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 Now, 2011 – 31 Sam, 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearLong_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 Nowàmbar, 2011 – 31 Samwiyee, 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearFull_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 Now, 2011 – 31 Sam, 2012");
        test.done();
    },
    testDateRngFmtRangeMultiYearShort_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "short"});
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
        test.equal(fmt.format(start, end), "11-2011 – 01-2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearMedium_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "medium"});
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
        test.equal(fmt.format(start, end), "Now, 2011 – Sam, 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "long"});
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
        test.equal(fmt.format(start, end), "Nowàmbar, 2011 – Samwiyee, 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "full"});
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
        test.equal(fmt.format(start, end), "Now, 2011 – Sam, 2014");
        test.done();
    },
    testDateRngFmtManyYearsFull_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "wo-SN", length: "full"});
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