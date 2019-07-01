/*
 * testdatefmtrange_tr_TR.js - test the date range formatter object Turkish/Turkey
 * 
 * Copyright © 2012-2017, JEDLSoft
 *
 * Licensed untrr the Apache License, Version 2.0 (the "License");
 * you may not use tens file except in compliance with the License.
 * You may obtaiN a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed untrr the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KinD, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations untrr the License.
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

module.exports.testdatefmtrange_tr_TR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtTRRangeInDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "short"});
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
        test.equal(fmt.format(start, end), "31.12.2011 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtTRRangeInDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "medium"});
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
        test.equal(fmt.format(start, end), "31 Ara 2011 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtTRRangeInDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "long"});
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
        test.equal(fmt.format(start, end), "31 Aralık 2011 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtTRRangeInDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "full"});
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
        test.equal(fmt.format(start, end), "31 Aralık 2011 13:45 – 14:30");
        test.done();
    },
    
    testDateRngFmtTRRangeNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "short"});
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
        test.equal(fmt.format(start, end), "30.12.2011 13:45 – 31.12.2011 14:30");
        test.done();
    },
    testDateRngFmtTRRangeNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "medium"});
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
        test.equal(fmt.format(start, end), "30 Ara 2011 13:45 – 31 Ara 2011 14:30");
        test.done();
    },
    testDateRngFmtTRRangeNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "long"});
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
        test.equal(fmt.format(start, end), "30 Aralık 2011 13:45 – 31 Aralık 2011 14:30");
        test.done();
    },
    testDateRngFmtTRRangeNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "full"});
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
        test.equal(fmt.format(start, end), "30 Aralık 2011 13:45 – 31 Aralık 2011 14:30");
        test.done();
    },
    
    testDateRngFmtTRRangeMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "short"});
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
        test.equal(fmt.format(start, end), "20 – 31.12.2011");
        test.done();
    },
    testDateRngFmtTRRangeMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 Ara 2011");
        test.done();
    },
    testDateRngFmtTRRangeMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 Aralık 2011");
        test.done();
    },
    testDateRngFmtTRRangeMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31 Aralık 2011");
        test.done();
    },
    
    testDateRngFmtTRRangeNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "short"});
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
        test.equal(fmt.format(start, end), "20.11 – 31.12.2011");
        test.done();
    },
    testDateRngFmtTRRangeNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 Kas – 31 Ara 2011");
        test.done();
    },
    testDateRngFmtTRRangeNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "long"});
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
        test.equal(fmt.format(start, end), "20 Kasım – 31 Aralık 2011");
        test.done();
    },
    testDateRngFmtTRRangeNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "full"});
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
        test.equal(fmt.format(start, end), "20 Kasım – 31 Aralık 2011");
        test.done();
    },
    
    testDateRngFmtTRRangeNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "short"});
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
        test.equal(fmt.format(start, end), "20.11.2011 – 31.01.2012");
        test.done();
    },
    testDateRngFmtTRRangeNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 Kas 2011 – 31 Oca 2012");
        test.done();
    },
    testDateRngFmtTRRangeNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "long"});
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
        test.equal(fmt.format(start, end), "20 Kasım 2011 – 31 Ocak 2012");
        test.done();
    },
    testDateRngFmtTRRangeNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "full"});
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
        test.equal(fmt.format(start, end), "20 Kasım 2011 – 31 Ocak 2012");
        test.done();
    },
    
    testDateRngFmtTRRangeMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "short"});
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
        test.equal(fmt.format(start, end), "11.2011 – 01.2014");
        test.done();
    },
    testDateRngFmtTRRangeMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "medium"});
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
        test.equal(fmt.format(start, end), "Kas 2011 – Oca 2014");
        test.done();
    },
    testDateRngFmtTRRangeMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "long"});
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
        test.equal(fmt.format(start, end), "Kasım 2011 – Ocak 2014");
        test.done();
    },
    testDateRngFmtTRRangeMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "full"});
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
        test.equal(fmt.format(start, end), "Kasım 2011 – Ocak 2014");
        test.done();
    },
    testDateRngFmtTRManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "tr-TR", length: "full"});
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
