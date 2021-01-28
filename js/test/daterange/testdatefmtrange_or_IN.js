/*
 * testdatefmtrange_or_IN.js - test the date range formatter object in Oriya/India
 *
 * Copyright © 2015-2017,2020 JEDLSoft
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

module.exports.testdatefmtrange_or_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtRangeinDayShort_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "short"});
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
        test.equal(fmt.format(start, end), '12/31/11, 1:45 PM – 2:30 PM');
        test.done();
    },
    testDateRngFmtRangeinDayMedium_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), 'ଡିସେମ୍ବର 31, 2011, 1:45 PM – 2:30 PM');
        test.done();
    },
    testDateRngFmtRangeinDayLong_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "long"});
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
        test.equal(fmt.format(start, end), '1:45 PM – 2:30 PM ଠାରେ ଡିସେମ୍ବର 31, 2011');
        test.done();
    },
    testDateRngFmtRangeinDayFull_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "full"});
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
        test.equal(fmt.format(start, end), '1:45 PM – 2:30 PM ଠାରେ ଡିସେମ୍ବର 31, 2011');
        test.done();
    },

    testDateRngFmtRangeNextDayShort_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "short"});
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
        test.equal(fmt.format(start, end), '12/30/11, 1:45 PM – 12/31/11, 2:30 PM');
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), 'ଡିସେମ୍ବର 30, 2011, 1:45 PM – ଡିସେମ୍ବର 31, 2011, 2:30 PM');
        test.done();
    },
    testDateRngFmtRangeNextDayLong_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "long"});
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
        test.equal(fmt.format(start, end), '1:45 PM ଠାରେ ଡିସେମ୍ବର 30, 2011 – 2:30 PM ଠାରେ ଡିସେମ୍ବର 31, 2011');
        test.done();
    },
    testDateRngFmtRangeNextDayFull_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "full"});
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
        test.equal(fmt.format(start, end), '1:45 PM ଠାରେ ଡିସେମ୍ବର 30, 2011 – 2:30 PM ଠାରେ ଡିସେମ୍ବର 31, 2011');
        test.done();
    },

    testDateRngFmtRangeMultiDayShort_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "short"});
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
        test.equal(fmt.format(start, end), '12/20/11 – 12/31/11');
        test.done();
    },
    testDateRngFmtRangeMultiDayMedium_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), 'ଡିସେମ୍ବର 20 – 31, 2011');
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "long"});
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
        test.equal(fmt.format(start, end), 'ଡିସେମ୍ବର 20 – 31, 2011');
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "full"});
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
        test.equal(fmt.format(start, end), 'ଡିସେମ୍ବର 20 – 31, 2011');
        test.done();
    },

    testDateRngFmtRangeNextMonthShort_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "short"});
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
        test.equal(fmt.format(start, end), '11/20 – 12/31/11');
        test.done();
    },
    testDateRngFmtRangeNextMonthMedium_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), 'ନଭେମ୍ବର 20 – ଡିସେମ୍ବର 31, 2011');
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "long"});
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
        test.equal(fmt.format(start, end), 'ନଭେମ୍ବର 20 – ଡିସେମ୍ବର 31, 2011');
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "full"});
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
        test.equal(fmt.format(start, end), 'ନଭେମ୍ବର 20 – ଡିସେମ୍ବର 31, 2011');
        test.done();
    },

    testDateRngFmtRangeNextYearShort_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "short"});
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
        test.equal(fmt.format(start, end), '11/20/11 – 1/31/12');
        test.done();
    },
    testDateRngFmtRangeNextYearMedium_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), 'ନଭେମ୍ବର 20, 2011 – ଜାନୁଆରୀ 31, 2012');
        test.done();
    },
    testDateRngFmtRangeNextYearLong_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "long"});
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
        test.equal(fmt.format(start, end), 'ନଭେମ୍ବର 20, 2011 – ଜାନୁଆରୀ 31, 2012');
        test.done();
    },
    testDateRngFmtRangeNextYearFull_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "full"});
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
        test.equal(fmt.format(start, end), 'ନଭେମ୍ବର 20, 2011 – ଜାନୁଆରୀ 31, 2012');
        test.done();
    },

    testDateRngFmtRangeMultiYearShort_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "short"});
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
    testDateRngFmtRangeMultiYearMedium_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "ନଭେମ୍ବର, 2011 – ଜାନୁଆରୀ, 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "ନଭେମ୍ବର, 2011 – ଜାନୁଆରୀ, 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "ନଭେମ୍ବର, 2011 – ଜାନୁଆରୀ, 2014");
        test.done();
    },
    testDateRngFmtManyYearsFull_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "or-IN", length: "full"});
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
