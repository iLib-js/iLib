/*
 * testdatefmtrange_en_US.js - test the date range formatter object in US English
 * 
 * Copyright © 2012-2017,2020 JEDLSoft
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

module.exports.testdatefmtrange_en_US = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtInDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "short"});
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
        test.equal(fmt.format(start, end), "12/31/11, 1:45 PM – 2:30 PM");
        test.done();
    },
    testDateRngFmtInDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "medium"});
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
        test.equal(fmt.format(start, end), "Dec 31, 2011, 1:45 PM – 2:30 PM");
        test.done();
    },
    testDateRngFmtInDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "long"});
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
        test.equal(fmt.format(start, end), "December 31, 2011 at 1:45 PM – 2:30 PM");
        test.done();
    },
    testDateRngFmtInDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full"});
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
        test.equal(fmt.format(start, end), "December 31, 2011 at 1:45 PM – 2:30 PM");
        test.done();
    },
    
    testDateRngFmtNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "short"});
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
        test.equal(fmt.format(start, end), "12/30/11, 1:45 PM – 12/31/11, 2:30 PM");
        test.done();
    },
    testDateRngFmtNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "medium"});
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
        test.equal(fmt.format(start, end), "Dec 30, 2011, 1:45 PM – Dec 31, 2011, 2:30 PM");
        test.done();
    },
    testDateRngFmtNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "long"});
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
        test.equal(fmt.format(start, end), "December 30, 2011 at 1:45 PM – December 31, 2011 at 2:30 PM");
        test.done();
    },
    testDateRngFmtNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full"});
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
        test.equal(fmt.format(start, end), "December 30, 2011 at 1:45 PM – December 31, 2011 at 2:30 PM");
        test.done();
    },
    
    testDateRngFmtMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "short"});
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
        test.equal(fmt.format(start, end), "12/20/11 – 12/31/11");
        test.done();
    },
    testDateRngFmtMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "medium"});
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
        test.equal(fmt.format(start, end), "Dec 20 – 31, 2011");
        test.done();
    },
    testDateRngFmtMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "long"});
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
        test.equal(fmt.format(start, end), "December 20 – 31, 2011");
        test.done();
    },
    testDateRngFmtMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full"});
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
        test.equal(fmt.format(start, end), "December 20 – 31, 2011");
        test.done();
    },
    
    testDateRngFmtNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "short"});
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
        test.equal(fmt.format(start, end), "11/20 – 12/31/11");
        test.done();
    },
    testDateRngFmtNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "medium"});
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
        test.equal(fmt.format(start, end), "Nov 20 – Dec 31, 2011");
        test.done();
    },
    testDateRngFmtNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "long"});
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
        test.equal(fmt.format(start, end), "November 20 – December 31, 2011");
        test.done();
    },
    testDateRngFmtNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full"});
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
        test.equal(fmt.format(start, end), "November 20 – December 31, 2011");
        test.done();
    },
    
    testDateRngFmtNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "short"});
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
        test.equal(fmt.format(start, end), "11/20/11 – 1/31/12");
        test.done();
    },
    testDateRngFmtNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "medium"});
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
        test.equal(fmt.format(start, end), "Nov 20, 2011 – Jan 31, 2012");
        test.done();
    },
    testDateRngFmtNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "long"});
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
        test.equal(fmt.format(start, end), "November 20, 2011 – January 31, 2012");
        test.done();
    },
    testDateRngFmtNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full"});
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
        test.equal(fmt.format(start, end), "November 20, 2011 – January 31, 2012");
        test.done();
    },
    
    testDateRngFmtMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "short"});
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
    testDateRngFmtMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "medium"});
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
        test.equal(fmt.format(start, end), "Nov, 2011 – Jan, 2014");
        test.done();
    },
    testDateRngFmtMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "long"});
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
        test.equal(fmt.format(start, end), "November, 2011 – January, 2014");
        test.done();
    },
    testDateRngFmtMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full"});
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
        test.equal(fmt.format(start, end), "November, 2011 – January, 2014");
        test.done();
    },
    testDateRngFmtManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full"});
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
    },
    
    testDateRngFmtRangeShortWithinDay: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt();
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 18,
            hour: 14,
            minute: 34,
            second: 12,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 18,
            hour: 17,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "11/18/11, 2:34 PM – 5:00 PM");    
        test.done();
    },
    
    testDateRngFmtRangeShortWithinMonth: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt();
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 2,
            hour: 14,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 19,
            hour: 8,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "11/2/11 – 11/19/11");    
        test.done();
    },
    
    testDateRngFmtRangeShortConsecutiveDays: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt();
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 18,
            hour: 14,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 19,
            hour: 8,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "11/18/11, 2:00 PM – 11/19/11, 8:00 AM");    
        test.done();
    },
    
    testDateRngFmtRangeShortWithinYear: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt();
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2011,
            month: 5,
            day: 2,
            hour: 14,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 19,
            hour: 8,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "5/2 – 11/19/11");
        test.done();
    },
    
    testDateRngFmtRangeShortWithinDecade: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt();
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2001,
            month: 9,
            day: 11,
            hour: 8,
            minute: 36,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2010,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "9/01 – 12/10");
        test.done();
    },
    
    testDateRngFmtRangeShortLongTime: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt();
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 1776,
            month: 7,
            day: 4,
            hour: 11,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2008,
            month: 1,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "76 – 08");
        test.done();
    },
    
    testDateRngFmtRangeLongWithinDay: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            length: "long"
        });
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 18,
            hour: 14,
            minute: 34,
            second: 12,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 18,
            hour: 17,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "November 18, 2011 at 2:34 PM – 5:00 PM");    
        test.done();
    },
    
    testDateRngFmtRangeLongConsecutiveDays: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            length: "long"
        });
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 18,
            hour: 14,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 19,
            hour: 8,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "November 18, 2011 at 2:00 PM – November 19, 2011 at 8:00 AM");    
        test.done();
    },
    
    testDateRngFmtRangeLongWithinMonth: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            length: "long"
        });
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 2,
            hour: 14,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 19,
            hour: 8,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "November 2 – 19, 2011");    
        test.done();
    },
    
    testDateRngFmtRangeLongWithinYear: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            length: "long"
        });
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2011,
            month: 5,
            day: 2,
            hour: 14,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 19,
            hour: 8,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "May 2 – November 19, 2011");    
        test.done();
    },
    
    testDateRngFmtRangeLongWithinDecade: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            length: "long"
        });
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2001,
            month: 9,
            day: 11,
            hour: 8,
            minute: 36,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2010,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "September, 2001 – December, 2010");
        test.done();
    },
    
    testDateRngFmtRangeLongLongTime: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            length: "long"
        });
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 1776,
            month: 7,
            day: 4,
            hour: 11,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2008,
            month: 1,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "1776 – 2008");
        test.done();
    },
    
    testDateRngFmtRangeFullWithinDay: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            length: "full"
        });
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 18,
            hour: 14,
            minute: 34,
            second: 12,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 18,
            hour: 17,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "November 18, 2011 at 2:34 PM – 5:00 PM");    
        test.done();
    },
    
    testDateRngFmtRangeFullConsecutiveDays: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            length: "full"
        });
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 18,
            hour: 14,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 19,
            hour: 8,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "November 18, 2011 at 2:00 PM – November 19, 2011 at 8:00 AM");    
        test.done();
    },
    
    testDateRngFmtRangeFullWithinMonth: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            length: "full"
        });
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 2,
            hour: 14,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 19,
            hour: 8,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "November 2 – 19, 2011");    
        test.done();
    },
    
    testDateRngFmtRangeFullWithinYear: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            length: "full"
        });
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2011,
            month: 5,
            day: 2,
            hour: 14,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2011,
            month: 11,
            day: 19,
            hour: 8,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "May 2 – November 19, 2011");    
        test.done();
    },
    
    testDateRngFmtRangeFullWithinDecade: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            length: "full"
        });
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 2001,
            month: 9,
            day: 11,
            hour: 8,
            minute: 36,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2010,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "September, 2001 – December, 2010");
        test.done();
    },
    
    testDateRngFmtRangeFullLongTime: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            length: "full"
        });
        test.ok(fmt !== null);
        
        var date1 = new GregorianDate({
            year: 1776,
            month: 7,
            day: 4,
            hour: 11,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        var date2 = new GregorianDate({
            year: 2008,
            month: 1,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date1, date2), "1776 – 2008");
        test.done();
    }
    
    
    
};
