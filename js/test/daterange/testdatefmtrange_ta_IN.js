/*
 * testdatefmtrange_ta_IN.js - test the date range formatter object in Tamil/India
 *
 * Copyright © 2012-2017, 2020-2021, 2024 JEDLSoft
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

module.exports.testdatefmtrange_ta_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateRngFmtRangeinDayShort_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "short"});
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
        test.equal(fmt.format(start, end), '31/12/11, 1:45 PM – 2:30 PM');
        test.done();
    },
    testDateRngFmtRangeinDayMedium_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), '31 டிச., 2011, 1:45 PM – 2:30 PM');
        test.done();
    },
    testDateRngFmtRangeinDayLong_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "long"});
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
        test.equal(fmt.format(start, end), '31 டிசம்பர், 2011 அன்று 1:45 PM – 2:30 PM');
        test.done();
    },
    testDateRngFmtRangeinDayFull_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "full"});
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
        test.equal(fmt.format(start, end), '31 டிசம்பர், 2011 அன்று 1:45 PM – 2:30 PM');
        test.done();
    },
    testDateRngFmtRangeNextDayShort_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "short"});
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
        test.equal(fmt.format(start, end), '30/12/11, 1:45 PM – 31/12/11, 2:30 PM');
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), '30 டிச., 2011, 1:45 PM – 31 டிச., 2011, 2:30 PM');
        test.done();
    },
    testDateRngFmtRangeNextDayLong_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "long"});
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
        test.equal(fmt.format(start, end), '30 டிசம்பர், 2011 அன்று 1:45 PM – 31 டிசம்பர், 2011 அன்று 2:30 PM');
        test.done();
    },
    testDateRngFmtRangeNextDayFull_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "full"});
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
        test.equal(fmt.format(start, end), '30 டிசம்பர், 2011 அன்று 1:45 PM – 31 டிசம்பர், 2011 அன்று 2:30 PM');
        test.done();
    },
    testDateRngFmtRangeMultiDayShort_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "short"});
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
    testDateRngFmtRangeMultiDayMedium_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 டிச., 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 டிசம்பர், 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31 டிசம்பர், 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthShort_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "short"});
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
    testDateRngFmtRangeNextMonthMedium_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 நவ. – 31 டிச., 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 நவம்பர் – 31 டிசம்பர், 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 நவம்பர் – 31 டிசம்பர், 2011");
        test.done();
    },
    testDateRngFmtRangeNextYearShort_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "short"});
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
    testDateRngFmtRangeNextYearMedium_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 நவ., 2011 – 31 ஜன., 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearLong_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 நவம்பர், 2011 – 31 ஜனவரி, 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearFull_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 நவம்பர், 2011 – 31 ஜனவரி, 2012");
        test.done();
    },
    testDateRngFmtRangeMultiYearShort_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "short"});
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
    testDateRngFmtRangeMultiYearMedium_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "நவ., 2011 – ஜன., 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "நவம்பர், 2011 – ஜனவரி, 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "நவம்பர், 2011 – ஜனவரி, 2014");
        test.done();
    },
    testDateRngFmtManyYearsFull_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ta-IN", length: "full"});
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