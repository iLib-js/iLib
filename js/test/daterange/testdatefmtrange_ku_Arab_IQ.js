/*
 * testdatefmtrange_ku_Arab_IQ.js - test the date range formatter object in
 * Kurdish for Iraq in Arabic script
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

module.exports.testdatefmtrange_ku_Arab_IQ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateRngFmtKuRangeInDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "short"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١-١٢-٣١ ‏١:٤٥ د.ن – ‏٢:٣٠ د.ن');
        test.done();
    },
    testDateRngFmtKuRangeInDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "medium"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١ کانونی یەکەم ٣١ ‏١:٤٥ د.ن – ‏٢:٣٠ د.ن');
        test.done();
    },
    testDateRngFmtKuRangeInDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "long"});
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
        test.equal(fmt.format(start, end), '‏٣١ی کانونی یەکەمی ٢٠١١ ‏١:٤٥ د.ن – ‏٢:٣٠ د.ن');
        test.done();
    },
    testDateRngFmtKuRangeInDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "full"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١ کانونی یەکەم ٣١ ‏١:٤٥ د.ن – ‏٢:٣٠ د.ن');
        test.done();
    },
    testDateRngFmtKuRangeNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "short"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١-١٢-٣٠ ‏١:٤٥ د.ن – ‏٢٠١١-١٢-٣١ ‏٢:٣٠ د.ن');
        test.done();
    },
    testDateRngFmtKuRangeNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "medium"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١ کانونی یەکەم ٣٠ ‏١:٤٥ د.ن – ‏٢٠١١ کانونی یەکەم ٣١ ‏٢:٣٠ د.ن');
        test.done();
    },
    testDateRngFmtKuRangeNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "long"});
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
        test.equal(fmt.format(start, end), '‏٣٠ی کانونی یەکەمی ٢٠١١ ‏١:٤٥ د.ن – ‏٣١ی کانونی یەکەمی ٢٠١١ ‏٢:٣٠ د.ن');
        test.done();
    },
    testDateRngFmtKuRangeNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "full"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١ کانونی یەکەم ٣٠ ‏١:٤٥ د.ن – ‏٢٠١١ کانونی یەکەم ٣١ ‏٢:٣٠ د.ن');
        test.done();
    },
    testDateRngFmtKuRangeMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "short"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١-١٢-٢٠ – ٣١');
        test.done();
    },
    testDateRngFmtKuRangeMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "medium"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١ کانونی یەکەم ٢٠ – ٣١');
        test.done();
    },
    testDateRngFmtKuRangeMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "long"});
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
        test.equal(fmt.format(start, end), '‏٢٠ – ‏٣١ی کانونی یەکەمی ٢٠١١');
        test.done();
    },
    testDateRngFmtKuRangeMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "full"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١ کانونی یەکەم ٢٠ – ٣١');
        test.done();
    },
    testDateRngFmtKuRangeNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "short"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١-١١-٢٠ – ‏٢٠١١-١٢-٣١');
        test.done();
    },
    testDateRngFmtKuRangeNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "medium"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١ تشرینی دووەم ٢٠ – ‏٢٠١١ کانونی یەکەم ٣١');
        test.done();
    },
    testDateRngFmtKuRangeNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "long"});
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
        test.equal(fmt.format(start, end), '‏٢٠ی تشرینی دووەم – ‏٣١ی کانونی یەکەمی ٢٠١١');
        test.done();
    },
    testDateRngFmtKuRangeNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "full"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١ تشرینی دووەم ٢٠ – ‏کانونی یەکەم ٣١');
        test.done();
    },
    testDateRngFmtKuRangeNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "short"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١-١١-٢٠ – ‏٢٠١٢-٠١-٣١');
        test.done();
    },
    testDateRngFmtKuRangeNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "medium"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١ تشرینی دووەم ٢٠ – ‏٢٠١٢ کانوونی دووەم ٣١');
        test.done();
    },
    testDateRngFmtKuRangeNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "long"});
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
        test.equal(fmt.format(start, end), '‏٢٠ی تشرینی دووەمی ٢٠١١ – ‏٣١ی کانوونی دووەمی ٢٠١٢');
        test.done();
    },
    testDateRngFmtKuRangeNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "full"});
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
        test.equal(fmt.format(start, end),  '‏٢٠١١ تشرینی دووەم ٢٠ – ‏٢٠١٢ کانوونی دووەم ٣١');
        test.done();
    },
    testDateRngFmtKuRangeMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "short"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١-١١ – ‏٢٠١٤-٠١');
        test.done();
    },
    testDateRngFmtKuRangeMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "medium"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١ تشرینی دووەم – ‏٢٠١٤ کانوونی دووەم');
        test.done();
    },
    testDateRngFmtKuRangeMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "long"});
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
        test.equal(fmt.format(start, end), 'تشرینی دووەمی ٢٠١١ – کانوونی دووەمی ٢٠١٤');
        test.done();
    },
    testDateRngFmtKuRangeMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "full"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١ تشرینی دووەم – ‏٢٠١٤ کانوونی دووەم');
        test.done();
    },
    testDateRngFmtKuManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ku-Arab-IQ", length: "full"});
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
        test.equal(fmt.format(start, end), '‏٢٠١١ – ٢٠٦٤');
        test.done();
    }
};