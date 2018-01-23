/*
 * testdatefmtrange_km_KH.js - test the date range formatter object in Cambodian
 *
 * Copyright © 2016-2017, JEDLSoft
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
    var GregorianDate = require("../../../lib/GregorianDate.js");
}
if (typeof(DateRngFmt) === "undefined") {
    var DateRngFmt = require("../../../lib/DateRngFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testdatefmtrange_km_KH = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtKHRangeInDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "short"});
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
        test.equal(fmt.format(start, end), "31/12/11, 1:45 PM – 2:30 PM");
        test.done();
    },
    testDateRngFmtKHRangeInDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "medium"});
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
        test.equal(fmt.format(start, end), "31 ធ្នូ 2011, 1:45 PM – 2:30 PM");
        test.done();
    },
    testDateRngFmtKHRangeInDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "long"});
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
        test.equal(fmt.format(start, end), "31 ធ្នូ 2011 នៅ​ម៉ោង 1:45 PM – 2:30 PM");
        test.done();
    },
    testDateRngFmtKHRangeInDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "full"});
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
        test.equal(fmt.format(start, end), "31 ធ្នូ 2011 នៅ​ម៉ោង 1:45 PM – 2:30 PM");
        test.done();
    },
    
    testDateRngFmtKHRangeNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "short"});
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
        test.equal(fmt.format(start, end), "30/12/11, 1:45 PM – 31/12/11, 2:30 PM");
        test.done();
    },
    testDateRngFmtKHRangeNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "medium"});
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
        test.equal(fmt.format(start, end), "30 ធ្នូ 2011, 1:45 PM – 31 ធ្នូ 2011, 2:30 PM");
        test.done();
    },
    testDateRngFmtKHRangeNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "long"});
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
        test.equal(fmt.format(start, end), "30 ធ្នូ 2011 នៅ​ម៉ោង 1:45 PM – 31 ធ្នូ 2011 នៅ​ម៉ោង 2:30 PM");
        test.done();
    },
    testDateRngFmtKHRangeNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "full"});
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
        test.equal(fmt.format(start, end), "30 ធ្នូ 2011 នៅ​ម៉ោង 1:45 PM – 31 ធ្នូ 2011 នៅ​ម៉ោង 2:30 PM");
        test.done();
    },
    
    testDateRngFmtKHRangeMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "short"});
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
    testDateRngFmtKHRangeMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 ធ្នូ 2011");
        test.done();
    },
    testDateRngFmtKHRangeMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 ធ្នូ 2011");
        test.done();
    },
    testDateRngFmtKHRangeMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31 ធ្នូ 2011");
        test.done();
    },
    
    testDateRngFmtKHRangeNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "short"});
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
    testDateRngFmtKHRangeNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 វិច្ឆិកា – 31 ធ្នូ 2011");
        test.done();
    },
    testDateRngFmtKHRangeNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "long"});
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
        test.equal(fmt.format(start, end), "20 វិច្ឆិកា – 31 ធ្នូ 2011");
        test.done();
    },
    testDateRngFmtKHRangeNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "full"});
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
        test.equal(fmt.format(start, end), "20 វិច្ឆិកា – 31 ធ្នូ 2011");
        test.done();
    },
    
    testDateRngFmtKHRangeNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "short"});
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
    testDateRngFmtKHRangeNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 វិច្ឆិកា 2011 – 31 មករា 2012");
        test.done();
    },
    testDateRngFmtKHRangeNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "long"});
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
        test.equal(fmt.format(start, end), "20 វិច្ឆិកា 2011 – 31 មករា 2012");
        test.done();
    },
    testDateRngFmtKHRangeNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "full"});
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
        test.equal(fmt.format(start, end), "20 វិច្ឆិកា 2011 – 31 មករា 2012");
        test.done();
    },
    
    testDateRngFmtKHRangeMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "short"});
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
    testDateRngFmtKHRangeMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "medium"});
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
        test.equal(fmt.format(start, end), "វិច្ឆិកា 2011 – មករា 2014");
        test.done();
    },
    testDateRngFmtKHRangeMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "long"});
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
        test.equal(fmt.format(start, end), "វិច្ឆិកា 2011 – មករា 2014");
        test.done();
    },
    testDateRngFmtKHRangeMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "full"});
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
        test.equal(fmt.format(start, end), "វិច្ឆិកា 2011 – មករា 2014");
        test.done();
    },
    testDateRngFmtKHManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "km-KH", length: "full"});
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