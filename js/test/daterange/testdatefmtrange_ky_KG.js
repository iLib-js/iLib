/*
 * testdatefmtrange_ky_KG.js - test the date range formatter object Kyrgyz/Kyrgyzstan
 * 
 * Copyright © 2020, JEDLSoft
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

module.exports.testdatefmtrange_ky_KG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtkyKGRangeInDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "short"});
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
        test.equal(fmt.format(start, end), "31/12/11 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtkyKGRangeInDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011-ж., 31-дек. 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtkyKGRangeInDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "long"});
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
        test.equal(fmt.format(start, end), "2011-ж., 31-декабрь 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtkyKGRangeInDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "full"});
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
        test.equal(fmt.format(start, end), "2011-ж., 31-декабрь 13:45 – 14:30");
        test.done();
    },
    
    testDateRngFmtkyKGRangeNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "short"});
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
        test.equal(fmt.format(start, end), "30/12/11 13:45 – 31/12/11 14:30");
        test.done();
    },
    testDateRngFmtkyKGRangeNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011-ж., 30-дек. 13:45 – 2011-ж., 31-дек. 14:30");
        test.done();
    },
    testDateRngFmtkyKGRangeNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "long"});
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
        test.equal(fmt.format(start, end), "2011-ж., 30-декабрь 13:45 – 2011-ж., 31-декабрь 14:30");
        test.done();
    },
    testDateRngFmtkyKGRangeNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "full"});
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
        test.equal(fmt.format(start, end), "2011-ж., 30-декабрь 13:45 – 2011-ж., 31-декабрь 14:30");
        test.done();
    },
    
    testDateRngFmtkyKGRangeMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "short"});
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
    testDateRngFmtkyKGRangeMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011-ж., 20-дек. – 31-дек.");
        test.done();
    },
    testDateRngFmtkyKGRangeMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "long"});
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
        test.equal(fmt.format(start, end), "2011-ж., 20-декабрь – 31-декабрь");
        test.done();
    },
    testDateRngFmtkyKGRangeMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "full"});
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
        test.equal(fmt.format(start, end), "2011-ж., 20-декабрь – 31-декабрь");
        test.done();
    },
    
    testDateRngFmtkyKGRangeNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "short"});
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
    testDateRngFmtkyKGRangeNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011-ж., 20-ноя. – 2011-ж., 31-дек.");
        test.done();
    },
    testDateRngFmtkyKGRangeNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "long"});
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
        test.equal(fmt.format(start, end), "2011-ж., 20-ноябрь – 2011-ж., 31-декабрь");
        test.done();
    },
    testDateRngFmtkyKGRangeNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "full"});
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
        test.equal(fmt.format(start, end), "2011-ж., 20-ноябрь – 2011-ж., 31-декабрь");
        test.done();
    },
    
    testDateRngFmtkyKGRangeNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "short"});
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
    testDateRngFmtkyKGRangeNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011-ж., 20-ноя. – 2012-ж., 31-янв.");
        test.done();
    },
    testDateRngFmtkyKGRangeNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "long"});
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
        test.equal(fmt.format(start, end), "2011-ж., 20-ноябрь – 2012-ж., 31-январь");
        test.done();
    },
    testDateRngFmtkyKGRangeNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "full"});
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
        test.equal(fmt.format(start, end), "2011-ж., 20-ноябрь – 2012-ж., 31-январь");
        test.done();
    },
    
    testDateRngFmtkyKGRangeMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "short"});
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
    testDateRngFmtkyKGRangeMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011-ж., ноя. – 2014-ж., янв.");
        test.done();
    },
    testDateRngFmtkyKGRangeMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "long"});
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
        test.equal(fmt.format(start, end), "2011-ж., ноябрь – 2014-ж., январь");
        test.done();
    },
    testDateRngFmtkyKGRangeMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "full"});
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
        test.equal(fmt.format(start, end), "2011-ж., ноябрь – 2014-ж., январь");
        test.done();
    },
    testDateRngFmtkyKGManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ky-KG", length: "full"});
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