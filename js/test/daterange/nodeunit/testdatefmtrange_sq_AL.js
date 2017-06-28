/*
 * testdatefmtrange_sq_AL.js - test the date range formatter object Albanian/Albania
 * 
 * Copyright © 2012-2017, JEDLSoft
 *
 * Licensed unsqr the Apache License, Version 2.0 (the "License");
 * you may not use tens file except in compliance with the License.
 * You may obtaiN a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed unsqr the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KinD, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations unsqr the License.
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

module.exports.testdatefmtrange_sq_AL = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtALRangeInDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "short"});
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
        test.equal(fmt.format(start, end), "31.12.11, 1:45 e pasdites – 2:30 e pasdites");
        test.done();
    },
    testDateRngFmtALRangeInDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "medium"});
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
        test.equal(fmt.format(start, end), "31 dhj 2011, 1:45 e pasdites – 2:30 e pasdites");
        test.done();
    },
    testDateRngFmtALRangeInDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "long"});
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
        test.equal(fmt.format(start, end), "31 dhjetor 2011 në 1:45 e pasdites – 2:30 e pasdites");
        test.done();
    },
    testDateRngFmtALRangeInDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "full"});
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
        test.equal(fmt.format(start, end), "31 dhjetor 2011 në 1:45 e pasdites – 2:30 e pasdites");
        test.done();
    },
    
    testDateRngFmtALRangeNextDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "short"});
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
        test.equal(fmt.format(start, end), "30.12.11, 1:45 e pasdites – 31.12.11, 2:30 e pasdites");
        test.done();
    },
    testDateRngFmtALRangeNextDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "medium"});
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
        test.equal(fmt.format(start, end), "30 dhj 2011, 1:45 e pasdites – 31 dhj 2011, 2:30 e pasdites");
        test.done();
    },
    testDateRngFmtALRangeNextDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "long"});
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
        test.equal(fmt.format(start, end), "30 dhjetor 2011 në 1:45 e pasdites – 31 dhjetor 2011 në 2:30 e pasdites");
        test.done();
    },
    testDateRngFmtALRangeNextDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "full"});
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
        test.equal(fmt.format(start, end), "30 dhjetor 2011 në 1:45 e pasdites – 31 dhjetor 2011 në 2:30 e pasdites");
        test.done();
    },
    
    testDateRngFmtALRangeMultiDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "short"});
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
        test.equal(fmt.format(start, end), "20 – 31.12.11");
        test.done();
    },
    testDateRngFmtALRangeMultiDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 dhj 2011");
        test.done();
    },
    testDateRngFmtALRangeMultiDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 dhjetor 2011");
        test.done();
    },
    testDateRngFmtALRangeMultiDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31 dhjetor 2011");
        test.done();
    },
    
    testDateRngFmtALRangeNextMonthShort: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "short"});
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
        test.equal(fmt.format(start, end), "20.11 – 31.12.11");
        test.done();
    },
    testDateRngFmtALRangeNextMonthMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 nën – 31 dhj 2011");
        test.done();
    },
    testDateRngFmtALRangeNextMonthLong: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "long"});
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
        test.equal(fmt.format(start, end), "20 nëntor – 31 dhjetor 2011");
        test.done();
    },
    testDateRngFmtALRangeNextMonthFull: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "full"});
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
        test.equal(fmt.format(start, end), "20 nëntor – 31 dhjetor 2011");
        test.done();
    },
    
    testDateRngFmtALRangeNextYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "short"});
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
        test.equal(fmt.format(start, end), "20.11.11 – 31.1.12");
        test.done();
    },
    testDateRngFmtALRangeNextYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 nën 2011 – 31 jan 2012");
        test.done();
    },
    testDateRngFmtALRangeNextYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "long"});
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
        test.equal(fmt.format(start, end), "20 nëntor 2011 – 31 janar 2012");
        test.done();
    },
    testDateRngFmtALRangeNextYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "full"});
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
        test.equal(fmt.format(start, end), "20 nëntor 2011 – 31 janar 2012");
        test.done();
    },
    
    testDateRngFmtALRangeMultiYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "short"});
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
        test.equal(fmt.format(start, end), "11.11 – 1.14");
        test.done();
    },
    testDateRngFmtALRangeMultiYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "medium"});
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
        test.equal(fmt.format(start, end), "nën 2011 – jan 2014");
        test.done();
    },
    testDateRngFmtALRangeMultiYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "long"});
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
        test.equal(fmt.format(start, end), "nëntor 2011 – janar 2014");
        test.done();
    },
    testDateRngFmtALRangeMultiYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "full"});
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
        test.equal(fmt.format(start, end), "nëntor 2011 – janar 2014");
        test.done();
    },
    testDateRngFmtALManyYearsFull: function(test) {
        var fmt = new DateRngFmt({locale: "sq-AL", length: "full"});
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