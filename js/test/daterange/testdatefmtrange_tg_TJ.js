/*
 * testdatefmtrange_tg_TJ.js - test the date range formatter object Tajik-Tajikistan
 *
 * Copyright © 2021, 2024 JEDLSoft
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

module.exports.testdatefmtrange_tg_TJ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateRngFmtRangeInDayShort_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "short"});
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
        test.equal(fmt.format(start, end), '31/12/11, 13:45 – 14:30');
        test.done();
    },
    testDateRngFmtRangeInDayMedium_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "medium"});
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
        test.equal(fmt.format(start, end), '31 Дек 2011, 13:45 – 14:30');
        test.done();
    },
    testDateRngFmtRangeInDayLong_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "long"});
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
        test.equal(fmt.format(start, end), '31 Декабр 2011 соати 13:45 – 14:30');
        test.done();
    },
    testDateRngFmtRangeInDayFull_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "full"});
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
        test.equal(fmt.format(start, end), '31 Декабр 2011 соати 13:45 – 14:30');
        test.done();
    },
    testDateRngFmtRangeNextDayShort_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "short"});
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
        test.equal(fmt.format(start, end), '30/12/11, 13:45 – 31/12/11, 14:30');
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "medium"});
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
        test.equal(fmt.format(start, end), '30 Дек 2011, 13:45 – 31 Дек 2011, 14:30');
        test.done();
    },
    testDateRngFmtRangeNextDayLong_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "long"});
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
        test.equal(fmt.format(start, end), '30 Декабр 2011 соати 13:45 – 31 Декабр 2011 соати 14:30');
        test.done();
    },
    testDateRngFmtRangeNextDayFull_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "full"});
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
        test.equal(fmt.format(start, end), '30 Декабр 2011 соати 13:45 – 31 Декабр 2011 соати 14:30');
        test.done();
    },
    testDateRngFmtRangeMultiDayShort_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "short"});
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
        test.equal(fmt.format(start, end), "20 – 31/12/11");
        test.done();
    },
    testDateRngFmtRangeMultiDayMedium_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 Дек 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 Декабр 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31 Декабр 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthShort_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "short"});
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
        test.equal(fmt.format(start, end), "20/11 – 31/12/11");
        test.done();
    },
    testDateRngFmtRangeNextMonthMedium_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 Ноя – 31 Дек 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "long"});
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
        test.equal(fmt.format(start, end), "20 Ноябр – 31 Декабр 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "full"});
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
        test.equal(fmt.format(start, end), "20 Ноябр – 31 Декабр 2011");
        test.done();
    },
    testDateRngFmtRangeNextYearShort_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "short"});
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
        test.equal(fmt.format(start, end), "20/11/11 – 31/01/12");
        test.done();
    },
    testDateRngFmtRangeNextYearMedium_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 Ноя 2011 – 31 Янв 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearLong_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "long"});
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
        test.equal(fmt.format(start, end), "20 Ноябр 2011 – 31 Январ 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearFull_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "full"});
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
        test.equal(fmt.format(start, end), "20 Ноябр 2011 – 31 Январ 2012");
        test.done();
    },
    testDateRngFmtRangeMultiYearShort_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "short"});
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
        test.equal(fmt.format(start, end), "11/11 – 01/14");
        test.done();
    },
    testDateRngFmtRangeMultiYearMedium_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "medium"});
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
        test.equal(fmt.format(start, end), "Ноя 2011 – Янв 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "long"});
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
        test.equal(fmt.format(start, end), "Ноябр 2011 – Январ 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "full"});
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
        test.equal(fmt.format(start, end), "Ноябр 2011 – Январ 2014");
        test.done();
    },
    testDateRngFmtManyYearsFull_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tg-TJ", length: "full"});
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