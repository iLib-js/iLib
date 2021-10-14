/*
 * testdatefmtrange_vi_VN.js - test the date range formatter object Vietnamese/Vietnam
 * 
 * Copyright © 2012-2017, 2020 JEDLSoft
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

module.exports.testdatefmtrange_vi_VN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtVNRangeInDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "short"});
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
        test.equal(fmt.format(start, end), "13:45 – 14:30, 31/12/2011");
        test.done();
    },
    testDateRngFmtVNRangeInDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "medium"});
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
        test.equal(fmt.format(start, end), "13:45 – 14:30, 31 thg 12, 2011");
        test.done();
    },
    testDateRngFmtVNRangeInDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "long"});
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
        test.equal(fmt.format(start, end), "13:45 – 14:30 31 tháng 12, 2011");
        test.done();
    },
    testDateRngFmtVNRangeInDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "full"});
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
        test.equal(fmt.format(start, end), "13:45 – 14:30 31 tháng 12, 2011");
        test.done();
    },
    
    testDateRngFmtVNRangeNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "short"});
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
        test.equal(fmt.format(start, end), "13:45, 30/12/2011 – 14:30, 31/12/2011");
        test.done();
    },
    testDateRngFmtVNRangeNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "medium"});
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
        test.equal(fmt.format(start, end), "13:45, 30 thg 12, 2011 – 14:30, 31 thg 12, 2011");
        test.done();
    },
    testDateRngFmtVNRangeNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "long"});
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
        test.equal(fmt.format(start, end), "13:45 30 tháng 12, 2011 – 14:30 31 tháng 12, 2011");
        test.done();
    },
    testDateRngFmtVNRangeNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "full"});
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
        test.equal(fmt.format(start, end), "13:45 30 tháng 12, 2011 – 14:30 31 tháng 12, 2011");
        test.done();
    },
    
    testDateRngFmtVNRangeMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "short"});
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
    testDateRngFmtVNRangeMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 thg 12, 2011");
        test.done();
    },
    testDateRngFmtVNRangeMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 tháng 12, 2011");
        test.done();
    },
    testDateRngFmtVNRangeMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31 tháng 12, 2011");
        test.done();
    },
    
    testDateRngFmtVNRangeNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "short"});
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
    testDateRngFmtVNRangeNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 thg 11 – 31 thg 12, 2011");
        test.done();
    },
    testDateRngFmtVNRangeNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 tháng 11 – 31 tháng 12, 2011");
        test.done();
    },
    testDateRngFmtVNRangeNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 tháng 11 – 31 tháng 12, 2011");
        test.done();
    },
    
    testDateRngFmtVNRangeNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "short"});
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
        test.equal(fmt.format(start, end), "20/11/2011 – 31/01/2012");
        test.done();
    },
    testDateRngFmtVNRangeNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 thg 11, 2011 – 31 thg 1, 2012");
        test.done();
    },
    testDateRngFmtVNRangeNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 tháng 11, 2011 – 31 tháng 1, 2012");
        test.done();
    },
    testDateRngFmtVNRangeNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 tháng 11, 2011 – 31 tháng 1, 2012");
        test.done();
    },
    
    testDateRngFmtVNRangeMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "short"});
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
        test.equal(fmt.format(start, end), "11/2011 – 01/2014");
        test.done();
    },
    testDateRngFmtVNRangeMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "medium"});
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
        test.equal(fmt.format(start, end), "thg 11, 2011 – thg 1, 2014");
        test.done();
    },
    testDateRngFmtVNRangeMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "long"});
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
        test.equal(fmt.format(start, end), "tháng 11, 2011 – tháng 1, 2014");
        test.done();
    },
    testDateRngFmtVNRangeMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "full"});
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
        test.equal(fmt.format(start, end), "tháng 11, 2011 – tháng 1, 2014");
        test.done();
    },
    testDateRngFmtVNManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "vi-VN", length: "full"});
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
