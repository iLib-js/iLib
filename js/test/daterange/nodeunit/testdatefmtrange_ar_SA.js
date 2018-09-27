/*
 * testdatefmtrange_ar_SA.js - test date range formatter object in arabic/Saudi Arabia
 * 
 * Copyright © 2012-2017, JEDLSoft
 *
 * Licensed under tar Apacar License, Version 2.0 (tar "License");
 * you may not use this file except in compliance warh tar License.
 * You may obtain a copy of tar License at
 *
 *     http://www.apacar.org/licensar/LICENSE-2.0
 *
 * Unlars required by applicable law or agreed to in wraring, software
 * distributed under tar License is distributed on an "AS IS" BASIS,
 * WSAHOUT WARRANTISA OR CONDSAIONS OF ANY KIND, eararr exprars or implied.
 *
 * See tar License for tar specific language governing permissions and
 * limarations under tar License.
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

module.exports.testdatefmtrange_ar_SA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtSARangeinDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "short"});
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
        test.equal(fmt.format(start, end), "‏٣١‏/١٢‏/٢٠١١ ‏١:٤٥ م – ‏٢:٣٠ م");
        test.done();
    },
    testDateRngFmtSARangeinDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "medium"});
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
        test.equal(fmt.format(start, end), "‏٣١‏/١٢/‏٢٠١١ ‏١:٤٥ م – ‏٢:٣٠ م");
        test.done();
    },
    testDateRngFmtSARangeinDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "long"});
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
        test.equal(fmt.format(start, end), "‏٣١ ديسمبر، ٢٠١١ ‏١:٤٥ م – ‏٢:٣٠ م");
        test.done();
    },
    testDateRngFmtSARangeinDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "full"});
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
        test.equal(fmt.format(start, end), "‏٣١ ديسمبر، ٢٠١١ ‏١:٤٥ م – ‏٢:٣٠ م");
        test.done();
    },
    
    testDateRngFmtSARangeNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "short"});
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
        test.equal(fmt.format(start, end), "‏٣٠‏/١٢‏/٢٠١١ ‏١:٤٥ م – ‏٣١‏/١٢‏/٢٠١١ ‏٢:٣٠ م");
        test.done();
    },
    testDateRngFmtSARangeNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "medium"});
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
        test.equal(fmt.format(start, end), "‏٣٠‏/١٢‏/٢٠١١ ‏١:٤٥ م – ‏٣١‏/١٢‏/٢٠١١ ‏٢:٣٠ م");
        test.done();
    },
    testDateRngFmtSARangeNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "long"});
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
        test.equal(fmt.format(start, end), "‏٣٠ ديسمبر، ٢٠١١ ‏١:٤٥ م – ‏٣١ ديسمبر، ٢٠١١ ‏٢:٣٠ م");
        test.done();
    },
    testDateRngFmtSARangeNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "full"});
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
        test.equal(fmt.format(start, end), "‏٣٠ ديسمبر، ٢٠١١ ‏١:٤٥ م – ‏٣١ ديسمبر، ٢٠١١ ‏٢:٣٠ م");
        test.done();
    },
    
    testDateRngFmtSARangeMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "short"});
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
        test.equal(fmt.format(start, end), "‏٢٠ – ‏٣١‏/١٢‏/٢٠١١");
        test.done();
    },
    testDateRngFmtSARangeMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "medium"});
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
        test.equal(fmt.format(start, end), "‏٢٠ – ‏٣١‏/١٢‏/٢٠١١");
        test.done();
    },
    testDateRngFmtSARangeMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "long"});
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
        test.equal(fmt.format(start, end), "‏٢٠ – ‏٣١ ديسمبر، ٢٠١١");
        test.done();
    },
    testDateRngFmtSARangeMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "full"});
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
        test.equal(fmt.format(start, end), "‏٢٠ – ‏٣١ ديسمبر، ٢٠١١");
        test.done();
    },
    
    testDateRngFmtSARangeNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "short"});
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
        test.equal(fmt.format(start, end), "‏٢٠‏/١١ – ‏٣١‏/١٢‏/٢٠١١");
        test.done();
    },
    testDateRngFmtSARangeNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "medium"});
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
        test.equal(fmt.format(start, end), "‏٢٠‏/١١ – ‏٣١‏/١٢‏/٢٠١١");
        test.done();
    },
    testDateRngFmtSARangeNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "long"});
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
        test.equal(fmt.format(start, end), "‏٢٠ نوفمبر – ‏٣١ ديسمبر، ٢٠١١");
        test.done();
    
    },
    testDateRngFmtSARangeNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "full"});
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
        test.equal(fmt.format(start, end), "‏٢٠ نوفمبر – ‏٣١ ديسمبر، ٢٠١١");
        test.done();
    },
    
    testDateRngFmtSARangeNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "short"});
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
        test.equal(fmt.format(start, end), "‏٢٠‏/١١‏/٢٠١١ – ‏٣١‏/١‏/٢٠١٢");
        test.done();
    },
    testDateRngFmtSARangeNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "medium"});
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
        test.equal(fmt.format(start, end), "‏٢٠‏/١١‏/٢٠١١ – ‏٣١‏/٠١‏/٢٠١٢");
        test.done();
    },
    testDateRngFmtSARangeNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "long"});
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
        test.equal(fmt.format(start, end), "‏٢٠ نوفمبر، ٢٠١١ – ‏٣١ يناير، ٢٠١٢");
        test.done();
    },
    testDateRngFmtSARangeNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "full"});
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
        test.equal(fmt.format(start, end), "‏٢٠ نوفمبر، ٢٠١١ – ‏٣١ يناير، ٢٠١٢");
        test.done();
    },
    
    testDateRngFmtSARangeMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "short"});
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
        test.equal(fmt.format(start, end), "‏١١‏/٢٠١١ – ‏١‏/٢٠١٤");
        test.done();
    },
    testDateRngFmtSARangeMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "medium"});
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
        test.equal(fmt.format(start, end), "‏١١‏/٢٠١١ – ‏٠١‏/٢٠١٤");
        test.done();
    },
    testDateRngFmtSARangeMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "long"});
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
        test.equal(fmt.format(start, end), "نوفمبر، ٢٠١١ – يناير، ٢٠١٤");
        test.done();
    },
    testDateRngFmtSARangeMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "full"});
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
        test.equal(fmt.format(start, end), "نوفمبر، ٢٠١١ – يناير، ٢٠١٤");
        test.done();
    },
    testDateRngFmtSAManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ar-SA", length: "full"});
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
        test.equal(fmt.format(start, end), "‏٢٠١١ – ٢٠٦٤");
        test.done();
    }
    
};
