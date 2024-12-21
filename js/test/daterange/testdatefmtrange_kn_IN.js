/*
 * testdatefmtrange_kn_IN.js - test the date range formatter object in Kannada/india
 *
 * Copyright © 2012-2017, 2023-2024 JEDLSoft
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

module.exports.testdatefmtrange_kn_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateRngFmtRangeinDayShort_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "short"});
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
        test.equal(fmt.format(start, end), '31/12/11, 01:45 PM – 02:30 PM');
        test.done();
    },
    testDateRngFmtRangeinDayMedium_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), 'ಡಿಸೆಂ 31, 2011, 01:45 PM – 02:30 PM');
        test.done();
    },
    testDateRngFmtRangeinDayLong_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "long"});
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
        test.equal(fmt.format(start, end), 'ಡಿಸೆಂಬರ್ 31, 2011 ರಂದು 01:45 PM ಸಮಯಕ್ಕೆ – 02:30 PM');
        test.done();
    },
    testDateRngFmtRangeinDayFull_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "full"});
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
        test.equal(fmt.format(start, end), 'ಡಿಸೆಂಬರ್ 31, 2011 ರಂದು 01:45 PM ಸಮಯಕ್ಕೆ – 02:30 PM');
        test.done();
    },
    testDateRngFmtRangeNextDayShort_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "short"});
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
        test.equal(fmt.format(start, end), '30/12/11, 01:45 PM – 31/12/11, 02:30 PM');
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), 'ಡಿಸೆಂ 30, 2011, 01:45 PM – ಡಿಸೆಂ 31, 2011, 02:30 PM');
        test.done();
    },
    testDateRngFmtRangeNextDayLong_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "long"});
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
        test.equal(fmt.format(start, end), 'ಡಿಸೆಂಬರ್ 30, 2011 ರಂದು 01:45 PM ಸಮಯಕ್ಕೆ – ಡಿಸೆಂಬರ್ 31, 2011 ರಂದು 02:30 PM ಸಮಯಕ್ಕೆ');
        test.done();
    },
    testDateRngFmtRangeNextDayFull_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "full"});
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
        test.equal(fmt.format(start, end), 'ಡಿಸೆಂಬರ್ 30, 2011 ರಂದು 01:45 PM ಸಮಯಕ್ಕೆ – ಡಿಸೆಂಬರ್ 31, 2011 ರಂದು 02:30 PM ಸಮಯಕ್ಕೆ');
        test.done();
    },
    testDateRngFmtRangeMultiDayShort_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "short"});
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
    testDateRngFmtRangeMultiDayMedium_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "ಡಿಸೆಂ 20 – 31, 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "ಡಿಸೆಂಬರ್ 20 – 31, 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "ಡಿಸೆಂಬರ್ 20 – 31, 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthShort_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "short"});
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
    testDateRngFmtRangeNextMonthMedium_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "ನವೆಂ 20 – ಡಿಸೆಂ 31, 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "ನವೆಂಬರ್ 20 – ಡಿಸೆಂಬರ್ 31, 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "ನವೆಂಬರ್ 20 – ಡಿಸೆಂಬರ್ 31, 2011");
        test.done();
    },
    testDateRngFmtRangeNextYearShort_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "short"});
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
    testDateRngFmtRangeNextYearMedium_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), 'ನವೆಂ 20, 2011 – ಜನ 31, 2012');
        test.done();
    },
    testDateRngFmtRangeNextYearLong_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "ನವೆಂಬರ್ 20, 2011 – ಜನವರಿ 31, 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearFull_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "ನವೆಂಬರ್ 20, 2011 – ಜನವರಿ 31, 2012");
        test.done();
    },
    testDateRngFmtRangeMultiYearShort_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "short"});
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
    testDateRngFmtRangeMultiYearMedium_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), 'ನವೆಂ, 2011 – ಜನ, 2014');
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "ನವೆಂಬರ್, 2011 – ಜನವರಿ, 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "ನವೆಂಬರ್, 2011 – ಜನವರಿ, 2014");
        test.done();
    },
    testDateRngFmtManyYearsFull_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "kn-IN", length: "full"});
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