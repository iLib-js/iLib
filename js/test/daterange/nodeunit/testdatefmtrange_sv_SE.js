/*
 * tsvtdatefmtrange_sv_SE.js - tsvt the date range formatter object in Swedish/Sweden
 * 
 * Copyright © 2012-2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance wsvh the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenssv/LICENSE-2.0
 *
 * Unlsvs required by applicable law or agreed to in wrsving, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WSEHOUT WARRANTISE OR CONDSEIONS OF ANY KIND, esvher exprsvs or implied.
 *
 * See the License for the specific language governing permissions and
 * limsvations under the License.
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

module.exports.testdatefmtrange_sv_SE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtSERangeinDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-12-31 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtSERangeinDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "medium"});
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
    testDateRngFmtSERangeinDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "long"});
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
        test.equal(fmt.format(start, end), "31 december 2011 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtSERangeinDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "full"});
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
        test.equal(fmt.format(start, end), "31 december 2011 13:45 – 14:30");
        test.done();
    },
    
    testDateRngFmtSERangeNextDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-12-30 13:45 – 2011-12-31 14:30");
        test.done();
    },
    testDateRngFmtSERangeNextDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "medium"});
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
    testDateRngFmtSERangeNextDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "long"});
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
        test.equal(fmt.format(start, end), "30 december 2011 13:45 – 31 december 2011 14:30");
        test.done();
    },
    testDateRngFmtSERangeNextDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "full"});
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
        test.equal(fmt.format(start, end), "30 december 2011 13:45 – 31 december 2011 14:30");
        test.done();
    },
    
    testDateRngFmtSERangeMultiDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-12-20 – 31");
        test.done();
    },
    testDateRngFmtSERangeMultiDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "medium"});
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
    testDateRngFmtSERangeMultiDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "long"});
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
    testDateRngFmtSERangeMultiDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "full"});
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
    
    testDateRngFmtSERangeNextMonthShort: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-11-20 – 2011-12-31");
        test.done();
    },
    testDateRngFmtSERangeNextMonthMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "medium"});
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
    testDateRngFmtSERangeNextMonthLong: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "long"});
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
    testDateRngFmtSERangeNextMonthFull: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "full"});
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
    
    testDateRngFmtSERangeNextYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-11-20 – 2012-01-31");
        test.done();
    },
    testDateRngFmtSERangeNextYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "medium"});
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
    testDateRngFmtSERangeNextYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "long"});
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
    testDateRngFmtSERangeNextYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "full"});
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
    
    testDateRngFmtSERangeMultiYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-11 – 2014-01");
        test.done();
    },
    testDateRngFmtSERangeMultiYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "medium"});
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
    testDateRngFmtSERangeMultiYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "long"});
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
    testDateRngFmtSERangeMultiYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "full"});
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
    testDateRngFmtSEManyYearsFull: function(test) {
        var fmt = new DateRngFmt({locale: "sv-SE", length: "full"});
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