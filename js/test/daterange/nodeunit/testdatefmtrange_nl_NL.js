/*
 * testdatefmtrange_nl_NL.js – test the date range formatter object in Dutch/Netherlands
 * 
 * Copyright © 2012-2017, JEDLSoft
 *
 * Licensed unNLr the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed unNLr the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations unNLr the License.
 */

if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../.././../lib/GregorianDate.js");
}
if (typeof(DateRngFmt) === "undefined") {
    var DateRngFmt = require("../.././../lib/DateRngFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testdatefmtrange_nl_NL = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtNLRangeInDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "short"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "31-12-11 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtNLRangeInDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "medium"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "31 dec. 2011 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtNLRangeInDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "long"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "31 december 2011 om 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtNLRangeInDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "full"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "31 december 2011 om 13:45 – 14:30");
        test.done();
    },
    
    testDateRngFmtNLRangeNextDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "short"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "30-12-11 13:45 – 31-12-11 14:30");
        test.done();
    },
    testDateRngFmtNLRangeNextDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "medium"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "30 dec. 2011 13:45 – 31 dec. 2011 14:30");
        test.done();
    },
    testDateRngFmtNLRangeNextDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "long"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "30 december 2011 om 13:45 – 31 december 2011 om 14:30");
        test.done();
    },
    testDateRngFmtNLRangeNextDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "full"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "30 december 2011 om 13:45 – 31 december 2011 om 14:30");
        test.done();
    },
    
    testDateRngFmtNLRangeMultiDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "short"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "20 – 31-12-11");
        test.done();
    },
    testDateRngFmtNLRangeMultiDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "medium"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "20 – 31 dec. 2011");
        test.done();
    },
    testDateRngFmtNLRangeMultiDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "long"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "20 – 31 december 2011");
        test.done();
    },
    testDateRngFmtNLRangeMultiDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "full"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "20 – 31 december 2011");
        test.done();
    },
    
    testDateRngFmtNLRangeNextMonthShort: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "short"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "20-11 – 31-12-11");
        test.done();
    },
    testDateRngFmtNLRangeNextMonthMedium: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "medium"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "20 nov. – 31 dec. 2011");
        test.done();
    },
    testDateRngFmtNLRangeNextMonthLong: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "long"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "20 november – 31 december 2011");
        test.done();
    },
    testDateRngFmtNLRangeNextMonthFull: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "full"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "20 november – 31 december 2011");
        test.done();
    },
    
    testDateRngFmtNLRangeNextYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "short"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "20-11-11 – 31-01-12");
        test.done();
    },
    testDateRngFmtNLRangeNextYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "medium"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "20 nov. 2011 – 31 jan. 2012");
        test.done();
    },
    testDateRngFmtNLRangeNextYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "long"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "20 november 2011 – 31 januari 2012");
        test.done();
    },
    testDateRngFmtNLRangeNextYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "full"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "20 november 2011 – 31 januari 2012");
        test.done();
    },
    
    testDateRngFmtNLRangeMultiYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "short"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "11-11 – 01-14");
        test.done();
    },
    testDateRngFmtNLRangeMultiYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "medium"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "nov. 2011 – jan. 2014");
        test.done();
    },
    testDateRngFmtNLRangeMultiYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "long"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "november 2011 – januari 2014");
        test.done();
    },
    testDateRngFmtNLRangeMultiYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "full"});
        test.expect(2);
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
        test.equal(fmt.format(start, end), "november 2011 – januari 2014");
        test.done();
    },
    testDateRngFmtNLManyYearsFull: function(test) {
        var fmt = new DateRngFmt({locale: "nl-NL", length: "full"});
        test.expect(2);
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