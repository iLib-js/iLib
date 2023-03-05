/*
 * testdatefmtrange_hi_IN.js - test the date range formatter object in Hindi/India
 *
 * Copyright © 2012-2017,2023 JEDLSoft
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

module.exports.testdatefmtrange_hi_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateRngFmtRangeinDayShort_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "31/12/11, 1:45 pm – 2:30 pm");
        test.done();
    },
    testDateRngFmtRangeinDayMedium_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), '31 दिस॰ 2011, 1:45 pm – 2:30 pm');
        test.done();
    },
    testDateRngFmtRangeinDayLong_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "31 दिसंबर 2011 को 1:45 pm बजे – 2:30 pm");
        test.done();
    },
    testDateRngFmtRangeinDayFull_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "31 दिसंबर 2011 को 1:45 pm बजे – 2:30 pm");
        test.done();
    },
    testDateRngFmtRangeNextDayShort_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "30/12/11, 1:45 pm – 31/12/11, 2:30 pm");
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), '30 दिस॰ 2011, 1:45 pm – 31 दिस॰ 2011, 2:30 pm');
        test.done();
    },
    testDateRngFmtRangeNextDayLong_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "30 दिसंबर 2011 को 1:45 pm बजे – 31 दिसंबर 2011 को 2:30 pm बजे");
        test.done();
    },
    testDateRngFmtRangeNextDayFull_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "30 दिसंबर 2011 को 1:45 pm बजे – 31 दिसंबर 2011 को 2:30 pm बजे");
        test.done();
    },
    testDateRngFmtRangeMultiDayShort_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "short"});
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
    testDateRngFmtRangeMultiDayMedium_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), '20 – 31 दिस॰ 2011');
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 दिसंबर 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31 दिसंबर 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthShort_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "short"});
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
    testDateRngFmtRangeNextMonthMedium_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), '20 नव॰ – 31 दिस॰ 2011');
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 नवंबर – 31 दिसंबर 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 नवंबर – 31 दिसंबर 2011");
        test.done();
    },
    testDateRngFmtRangeNextYearShort_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "20/11/11 – 31/1/12");
        test.done();
    },
    testDateRngFmtRangeNextYearMedium_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), '20 नव॰ 2011 – 31 जन॰ 2012');
        test.done();
    },
    testDateRngFmtRangeNextYearLong_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 नवंबर 2011 – 31 जनवरी 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearFull_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 नवंबर 2011 – 31 जनवरी 2012");
        test.done();
    },
    testDateRngFmtRangeMultiYearShort_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "short"});
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
    testDateRngFmtRangeMultiYearMedium_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), 'नव॰ 2011 – जन॰ 2014');
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "नवंबर 2011 – जनवरी 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "नवंबर 2011 – जनवरी 2014");
        test.done();
    },
    testDateRngFmtManyYearsFull_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "hi-IN", length: "full"});
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