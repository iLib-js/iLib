/*
 * testdatefmtrange_ps_AF.js - test the date range formatter object Pashto-Afghanistan
 *
 * Copyright © 2022, JEDLSoft
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

if (typeof(PersianDate) === "undefined") {
    var PersianDate = require("../../lib/PersianDate.js");
}

if (typeof(PersianDate) === "undefined") {
    var PersianDate = require("../../lib/PersianDate.js");
}

if (typeof(DateRngFmt) === "undefined") {
    var DateRngFmt = require("../../lib/DateRngFmt.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdatefmtrange_ps_AF = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateRngFmtRangeInDayShort_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "short", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011/12/31 ‏13:45 – ‏14:30');
        test.done();
    },
    testDateRngFmtRangeInDayMedium_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "medium", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 کب 31 ‏13:45 – ‏14:30');
        test.done();
    },
    testDateRngFmtRangeInDayLong_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "long", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), 'د 2011 د کب 31 ‏13:45 – ‏14:30');
        test.done();
    },
    testDateRngFmtRangeInDayFull_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "full", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), 'د 2011 د کب 31 ‏13:45 – ‏14:30');
        test.done();
    },
    testDateRngFmtRangeNextDayShort_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "short", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011/12/30 ‏13:45 – ‏2011/12/31 ‏14:30');
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "medium", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 کب 30 ‏13:45 – ‏2011 کب 31 ‏14:30');
        test.done();
    },
    testDateRngFmtRangeNextDayLong_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "long", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), 'د 2011 د کب 30 ‏13:45 – د 2011 د کب 31 ‏14:30');
        test.done();
    },
    testDateRngFmtRangeNextDayFull_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "full", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), 'د 2011 د کب 30 ‏13:45 – د 2011 د کب 31 ‏14:30');
        test.done();
    },
    testDateRngFmtRangeMultiDayShort_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "short", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011/12/20 – 31');
        test.done();
    },
    testDateRngFmtRangeMultiDayMedium_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "medium", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 کب 20 – 31');
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "long", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), 'د 2011 د کب 20 – 31');
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "full", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), 'د 2011 د کب 20 – 31');
        test.done();
    },
    testDateRngFmtRangeNextMonthShort_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "short", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011/11/20 – ‏2011/12/31');
        test.done();
    },
    testDateRngFmtRangeNextMonthMedium_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "medium", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 سلواغه 20 – ‏2011 کب 31');
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "long", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), 'د 2011 د سلواغه 20 – د کب 31');
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "full", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), 'د 2011 د سلواغه 20 – د کب 31');
        test.done();
    },
    testDateRngFmtRangeNextYearShort_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "short", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011/11/20 – ‏2012/1/31');
        test.done();
    },
    testDateRngFmtRangeNextYearMedium_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "medium", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 سلواغه 20 – ‏2012 وری 31');
        test.done();
    },
    testDateRngFmtRangeNextYearLong_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "long", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), 'د 2011 د سلواغه 20 – د 2012 د وری 31');
        test.done();
    },
    testDateRngFmtRangeNextYearFull_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "full", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), 'د 2011 د سلواغه 20 – د 2012 د وری 31');
        test.done();
    },
    testDateRngFmtRangeMultiYearShort_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "short", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011/11 – ‏2014/1');
        test.done();
    },
    testDateRngFmtRangeMultiYearMedium_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "medium", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 سلواغه – ‏2014 وری');
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "long", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), 'د 2011 د سلواغه – د 2014 د وری');
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "full", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end),  'د 2011 د سلواغه – د 2014 د وری');
        test.done();
    },
    testDateRngFmtManyYearsFull_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ps-AF", length: "full", useNative :false});
        test.ok(fmt !== null);

        var start = new PersianDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 2064,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '‏2011 – 2064');
        test.done();
    }
};