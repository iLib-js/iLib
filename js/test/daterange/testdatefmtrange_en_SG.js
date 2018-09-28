/*
 * testdatefmtrange_en_SG.js - test the date range formatter object in Singapore English
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

module.exports.testdatefmtrange_en_SG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtSGInDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "short",locale: "en-SG"});
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
    testDateRngFmtSGInDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "medium",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "31 Dec 2011, 1:45 PM – 2:30 PM");
        test.done();
    },
    testDateRngFmtSGInDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "long",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "31 December 2011 at 1:45 PM – 2:30 PM");
        test.done();
    },
    testDateRngFmtSGInDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "31 December 2011 at 1:45 PM – 2:30 PM");
        test.done();
    },
    
    testDateRngFmtSGNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "short",locale: "en-SG"});
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
    testDateRngFmtSGNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "medium",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "30 Dec 2011, 1:45 PM – 31 Dec 2011, 2:30 PM");
        test.done();
    },
    testDateRngFmtSGNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "long",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "30 December 2011 at 1:45 PM – 31 December 2011 at 2:30 PM");
        test.done();
    },
    testDateRngFmtSGNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "30 December 2011 at 1:45 PM – 31 December 2011 at 2:30 PM");
        test.done();
    },
    
    testDateRngFmtSGMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "short",locale: "en-SG"});
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
    testDateRngFmtSGMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "medium",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "20 – 31 Dec 2011");
        test.done();
    },
    testDateRngFmtSGMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "long",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "20 – 31 December 2011");
        test.done();
    },
    testDateRngFmtSGMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "20 – 31 December 2011");
        test.done();
    },
    
    testDateRngFmtSGNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "short",locale: "en-SG"});
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
    testDateRngFmtSGNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "medium",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "20 Nov – 31 Dec 2011");
        test.done();
    },
    testDateRngFmtSGNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "long",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "20 November – 31 December 2011");
        test.done();
    },
    testDateRngFmtSGNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "20 November – 31 December 2011");
        test.done();
    },
    
    testDateRngFmtSGNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "short",locale: "en-SG"});
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
    testDateRngFmtSGNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "medium",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "20 Nov 2011 – 31 Jan 2012");
        test.done();
    },
    testDateRngFmtSGNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "long",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "20 November 2011 – 31 January 2012");
        test.done();
    },
    testDateRngFmtSGNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "20 November 2011 – 31 January 2012");
        test.done();
    },
    
    testDateRngFmtSGMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "short",locale: "en-SG"});
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
    testDateRngFmtSGMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "medium",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "Nov 2011 – Jan 2014");
        test.done();
    },
    testDateRngFmtSGMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "long",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "November 2011 – January 2014");
        test.done();
    },
    testDateRngFmtMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full",locale: "en-SG"});
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
        test.equal(fmt.format(start, end), "November 2011 – January 2014");
        test.done();
    },
    testDateRngFmtSGManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full",locale: "en-SG"});
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
    
    /*
    testDateRngFmtSGRangeShortWithinDay: function(test) {
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
    
        test.equal(fmt.format(date1, date2), "2:34PM – 5:00PM 11/18/2011");
        test.done();
    },
    
    testDateRngFmtSGRangeShortWithinMonth: function(test) {
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
    
        test.equal(fmt.format(date1, date2), "11/2-19, 2011");    
        test.done();
    },
    
    testDateRngFmtSGRangeShortConsecutiveDays: function(test) {
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
    
        test.equal(fmt.format(date1, date2), "2:00PM 11/18 – 8:00am 11/19, 2011");    
        test.done();
    },
    
    testDateRngFmtSGRangeShortWithinYear: function(test) {
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
    
        test.equal(fmt.format(date1, date2), "5/2 – 11/19, 2011");    
        test.done();
    },
    
    testDateRngFmtSGRangeShortWithinDecade: function(test) {
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
    
        test.equal(fmt.format(date1, date2), "9/2001 – 12/2010");
        test.done();
    },
    
    testDateRngFmtSGRangeShortLongTime: function(test) {
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
    
        test.equal(fmt.format(date1, date2), "1776 – 2008");
        test.done();
    },
    
    testDateRngFmtSGRangeLongWithinDay: function(test) {
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
    
        test.equal(fmt.format(date1, date2), "2:34PM – 5:00PM Nov 18, 2011");    
        test.done();
    },
    
    testDateRngFmtSGRangeLongConsecutiveDays: function(test) {
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
    
        test.equal(fmt.format(date1, date2), "2:00PM Nov 18 – 8:00am Nov 19, 2011");    
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
    
        test.equal(fmt.format(date1, date2), "Nov 2-19, 2011");    
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
    
        test.equal(fmt.format(date1, date2), "May 2 – Nov 19, 2011");    
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
    
        test.equal(fmt.format(date1, date2), "Sep 2001 – Dec 2010");
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
    
        test.equal(fmt.format(date1, date2), "2:34PM – 5:00PM November 18, 2011");    
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
    
        test.equal(fmt.format(date1, date2), "2:00PM November 18 – 8:00am November 19, 2011");    
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
    
        test.equal(fmt.format(date1, date2), "November 2-19, 2011");    
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
    
        test.equal(fmt.format(date1, date2), "September 2001 – December 2010");
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
    */
    
    
};
