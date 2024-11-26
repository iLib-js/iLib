/*
 * testdatefmtrange_yo_NG.js - test the date range formatter object Yoruba-Nigeria
 *
 * Copyright © 2022-2024 JEDLSoft
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

module.exports.testdatefmtrange_yo_NG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateRngFmtRangeInDayShort_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "short"});
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
        test.equal(fmt.format(start, end), "31/12/2011, 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtRangeInDayMedium_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "medium"});
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
        test.equal(fmt.format(start, end), "31 12 2011, 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtRangeInDayLong_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "long"});
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
        test.equal(fmt.format(start, end), '31 Oṣù Ọ̀pẹ̀ 2011 ní 13:45 – 14:30');
        test.done();
    },
    testDateRngFmtRangeInDayFull_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "full"});
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
        test.equal(fmt.format(start, end), '31 Oṣù Ọ̀pẹ̀ 2011 ní 13:45 – 14:30');
        test.done();
    },
    testDateRngFmtRangeNextDayShort_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "short"});
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
        test.equal(fmt.format(start, end), "30/12/2011, 13:45 – 31/12/2011, 14:30");
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "medium"});
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
        test.equal(fmt.format(start, end), "30 12 2011, 13:45 – 31 12 2011, 14:30");
        test.done();
    },
    testDateRngFmtRangeNextDayLong_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "long"});
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
        test.equal(fmt.format(start, end), '30 Oṣù Ọ̀pẹ̀ 2011 ní 13:45 – 31 Oṣù Ọ̀pẹ̀ 2011 ní 14:30');
        test.done();
    },
    testDateRngFmtRangeNextDayFull_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "full"});
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
        test.equal(fmt.format(start, end), '30 Oṣù Ọ̀pẹ̀ 2011 ní 13:45 – 31 Oṣù Ọ̀pẹ̀ 2011 ní 14:30');
        test.done();
    },
    testDateRngFmtRangeMultiDayShort_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "short"});
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
        test.equal(fmt.format(start, end), "20 – 31/12/2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayMedium_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 12 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "long"});
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
        test.equal(fmt.format(start, end), '20 – 31 Oṣù Ọ̀pẹ̀ 2011');
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "full"});
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
        test.equal(fmt.format(start, end), '20 – 31 Oṣù Ọ̀pẹ̀ 2011');
        test.done();
    },
    testDateRngFmtRangeNextMonthShort_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "short"});
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
        test.equal(fmt.format(start, end), "20/11 – 31/12/2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthMedium_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 11 – 31 12 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "long"});
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
        test.equal(fmt.format(start, end), '20 Oṣù Bélú – 31 Oṣù Ọ̀pẹ̀ 2011');
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "full"});
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
        test.equal(fmt.format(start, end), '20 Oṣù Bélú – 31 Oṣù Ọ̀pẹ̀ 2011');
        test.done();
    },
    testDateRngFmtRangeNextYearShort_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "short"});
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
        test.equal(fmt.format(start, end), "20/11/2011 – 31/1/2012");
        test.done();
    },
    testDateRngFmtRangeNextYearMedium_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 11 2011 – 31 01 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearLong_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "long"});
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
        test.equal(fmt.format(start, end), '20 Oṣù Bélú 2011 – 31 Oṣù Ṣẹ́rẹ́ 2012');
        test.done();
    },
    testDateRngFmtRangeNextYearFull_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "full"});
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
        test.equal(fmt.format(start, end), '20 Oṣù Bélú 2011 – 31 Oṣù Ṣẹ́rẹ́ 2012');
        test.done();
    },
    testDateRngFmtRangeMultiYearShort_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "short"});
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
        test.equal(fmt.format(start, end), "11/2011 – 1/2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearMedium_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "medium"});
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
        test.equal(fmt.format(start, end), "11 2011 – 01 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "long"});
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
        test.equal(fmt.format(start, end), 'Oṣù Bélú 2011 – Oṣù Ṣẹ́rẹ́ 2014');
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "full"});
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
        test.equal(fmt.format(start, end), 'Oṣù Bélú 2011 – Oṣù Ṣẹ́rẹ́ 2014');
        test.done();
    },
    testDateRngFmtManyYearsFull_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yo-NG", length: "full"});
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