/*
 * testdatefmtrange_fa_IR.js - test date range formatter object in Farsi/Iran
 * 
 * Copyright © 2012-2017, JEDLSoft
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (typeof(PersianDate) === "undefined") {
    var PersianDate = require("../../../lib/PersianDate.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../../lib/GregorianDate.js");
}
if (typeof(DateRngFmt) === "undefined") {
    var DateRngFmt = require("../../../lib/DateRngFmt.js");
}
/* These are the gregorian tests. For Persian calendar tests, see about
 * half way down the file. */

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testdatefmtrange_fa_IR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtIRRangeinDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "short"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰۱۱/۱۲/۳۱،‏ ‏۱۳:۴۵ – ‏۱۴:۳۰");
        test.done();
    },
    testDateRngFmtIRRangeinDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "medium"
        });
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
        test.equal(fmt.format(start, end), "‏۳۱ دسامبر ۲۰۱۱،‏ ‏۱۳:۴۵ – ‏۱۴:۳۰");
        test.done();
    },
    testDateRngFmtIRRangeinDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "long"
        });
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
        test.equal(fmt.format(start, end), "‏۳۱ دسامبر ۲۰۱۱، ساعت ‏۱۳:۴۵ – ‏۱۴:۳۰");
        test.done();
    },
    testDateRngFmtIRRangeinDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "full"
        });
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
        test.equal(fmt.format(start, end), "‏۳۱ دسامبر ۲۰۱۱، ساعت ‏۱۳:۴۵ – ‏۱۴:۳۰");
        test.done();
    },
    
    testDateRngFmtIRRangeNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "short"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰۱۱/۱۲/۳۰،‏ ‏۱۳:۴۵ – ‏۲۰۱۱/۱۲/۳۱،‏ ‏۱۴:۳۰");
        test.done();
    
    },
    testDateRngFmtIRRangeNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "medium"
        });
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
        test.equal(fmt.format(start, end), "‏۳۰ دسامبر ۲۰۱۱،‏ ‏۱۳:۴۵ – ‏۳۱ دسامبر ۲۰۱۱،‏ ‏۱۴:۳۰");
        test.done();
    },
    testDateRngFmtIRRangeNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "long"
        });
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
        test.equal(fmt.format(start, end), "‏۳۰ دسامبر ۲۰۱۱، ساعت ‏۱۳:۴۵ – ‏۳۱ دسامبر ۲۰۱۱، ساعت ‏۱۴:۳۰");
        test.done();
    },
    testDateRngFmtIRRangeNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "full"
        });
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
        test.equal(fmt.format(start, end), "‏۳۰ دسامبر ۲۰۱۱، ساعت ‏۱۳:۴۵ – ‏۳۱ دسامبر ۲۰۱۱، ساعت ‏۱۴:۳۰");
        test.done();
    },
    
    testDateRngFmtIRRangeMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "short"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰۱۱/۱۲/۲۰ – ۳۱");
        test.done();
    },
    testDateRngFmtIRRangeMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "medium"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰ – ‏۳۱ دسامبر ۲۰۱۱");
        test.done();
    },
    testDateRngFmtIRRangeMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "long"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰ – ‏۳۱ دسامبر ۲۰۱۱");
        test.done();
    },
    testDateRngFmtIRRangeMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "full"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰ – ‏۳۱ دسامبر ۲۰۱۱");
        test.done();
    },
    
    testDateRngFmtIRRangeNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "short"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰۱۱/۱۱/۲۰ – ‏۲۰۱۱/۱۲/۳۱");
        test.done();
    },
    testDateRngFmtIRRangeNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "medium"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰ نوامبر – ‏۳۱ دسامبر ۲۰۱۱");
        test.done();
    },
    testDateRngFmtIRRangeNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "long"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰ نوامبر – ‏۳۱ دسامبر ۲۰۱۱");
        test.done();
    },
    testDateRngFmtIRRangeNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "full"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰ نوامبر – ‏۳۱ دسامبر ۲۰۱۱");
        test.done();
    },
    
    testDateRngFmtIRRangeNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "short"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰۱۱/۱۱/۲۰ – ‏۲۰۱۲/۱/۳۱");
        test.done();
    },
    testDateRngFmtIRRangeNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "medium"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰ نوامبر ۲۰۱۱ – ‏۳۱ ژانویهٔ ۲۰۱۲");
        test.done();
    },
    testDateRngFmtIRRangeNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "long"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰ نوامبر ۲۰۱۱ – ‏۳۱ ژانویهٔ ۲۰۱۲");
        test.done();
    },
    testDateRngFmtIRRangeNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "full"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰ نوامبر ۲۰۱۱ – ‏۳۱ ژانویهٔ ۲۰۱۲");
        test.done();
    },
    
    testDateRngFmtIRRangeMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "short"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰۱۱/۱۱ – ‏۲۰۱۴/۱");
        test.done();
    },
    testDateRngFmtIRRangeMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "medium"
        });
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
        test.equal(fmt.format(start, end), "نوامبر ۲۰۱۱ – ژانویهٔ ۲۰۱۴");
        test.done();
    },
    testDateRngFmtIRRangeMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "long"
        });
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
        test.equal(fmt.format(start, end), "نوامبر ۲۰۱۱ – ژانویهٔ ۲۰۱۴");
        test.done();
    },
    testDateRngFmtIRRangeMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "full"
        });
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
        test.equal(fmt.format(start, end), "نوامبر ۲۰۱۱ – ژانویهٔ ۲۰۱۴");
        test.done();
    
    },
    testDateRngFmtIRManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "gregorian",
            length: "full"
        });
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
        test.equal(fmt.format(start, end), "‏۲۰۱۱ – ۲۰۶۴");
        test.done();
    },
    
    /* Now the persian calendar tests. */
    
    testDateRngFmtPersRangeinDdfayShort_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "short"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۱۳۹۳‏/۱۲‏/۳۱،‏ ‏۱۳:۴۵ – ‏۱۴:۳۰");
        test.done();
    },
    testDateRngFmtPersRangeinDayMedium_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "medium"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۳۱ اسفند ۱۳۹۳،‏ ‏۱۳:۴۵ – ‏۱۴:۳۰");
        test.done();
    },
    testDateRngFmtPersRangeinDayLong_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "long"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۳۱ اسفند ۱۳۹۳، ساعت ‏۱۳:۴۵ – ‏۱۴:۳۰");
        test.done();
    },
    testDateRngFmtPersRangeinDayFull_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "full"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۱۳۹۳ اسفند ۳۱، ساعت ‏۱۳:۴۵ – ‏۱۴:۳۰");
        test.done();
    },
    
    testDateRngFmtPersRangeNextDayShort_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "short"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۱۳۹۳‏/۱۲‏/۳۰،‏ ‏۱۳:۴۵ – ‏۱۳۹۳‏/۱۲‏/۳۱،‏ ‏۱۴:۳۰");
        test.done();
    },
    testDateRngFmtPersRangeNextDayMedium_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "medium"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۳۰ اسفند ۱۳۹۳،‏ ‏۱۳:۴۵ – ‏۳۱ اسفند ۱۳۹۳،‏ ‏۱۴:۳۰");
        test.done();
    },
    testDateRngFmtPersRangeNextDayLong_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "long"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۳۰ اسفند ۱۳۹۳، ساعت ‏۱۳:۴۵ – ‏۳۱ اسفند ۱۳۹۳، ساعت ‏۱۴:۳۰");
        test.done();
    },
    testDateRngFmtPersRangeNextDayFull_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "full"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۱۳۹۳ اسفند ۳۰، ساعت ‏۱۳:۴۵ – ۱۳۹۳ اسفند ۳۱، ساعت ‏۱۴:۳۰");
        test.done();
    },
    
    testDateRngFmtPersRangeMultiDayShort_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "short"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۱۳۹۳‏/۱۲‏/۲۰ – ۳۱");
        test.done();
    },
    testDateRngFmtPersRangeMultiDayMedium_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "medium"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۲۰ – ‏۳۱ اسفند ۱۳۹۳");
        test.done();
    },
    testDateRngFmtPersRangeMultiDayLong_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "long"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۲۰ – ‏۳۱ اسفند ۱۳۹۳");
        test.done();
    },
    testDateRngFmtPersRangeMultiDayFull_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "full"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۱۳۹۳ اسفند ۲۰ – ۳۱");
        test.done();
    },
    
    testDateRngFmtPersRangeNextMonthShort_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "short"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۱۳۹۳‏/۱۱‏/۲۰ – ‏۱۳۹۳‏/۱۲‏/۳۱");
        test.done();
    },
    testDateRngFmtPersRangeNextMonthMedium_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "medium"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۲۰ بهمن – ‏۳۱ اسفند ۱۳۹۳");
        test.done();
    },
    testDateRngFmtPersRangeNextMonthLong_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "long"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۲۰ بهمن – ‏۳۱ اسفند ۱۳۹۳");
        test.done();
    },
    testDateRngFmtPersRangeNextMonthFull_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "full"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1393,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۱۳۹۳ بهمن ۲۰ – اسفند ۳۱");
        test.done();
    },
    
    testDateRngFmtPersRangeNextYearShort_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "short"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1394,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۱۳۹۳‏/۱۱‏/۲۰ – ‏۱۳۹۴‏/۱‏/۳۱");
        test.done();
    },
    testDateRngFmtPersRangeNextYearMedium_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "medium"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1394,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۲۰ بهمن ۱۳۹۳ – ‏۳۱ فروردین ۱۳۹۴");
        test.done();
    },
    testDateRngFmtPersRangeNextYearLong_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "long"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1394,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۲۰ بهمن ۱۳۹۳ – ‏۳۱ فروردین ۱۳۹۴");
        test.done();
    },
    testDateRngFmtPersRangeNextYearFull_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "full"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1394,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۱۳۹۳ بهمن ۲۰ – ۱۳۹۴ فروردین ۳۱");
        test.done();
    },
    
    testDateRngFmtPersRangeMultiYearShort_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "short"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1396,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۱۳۹۳‏/۱۱ – ‏۱۳۹۶‏/۱");
        test.done();
    },
    testDateRngFmtPersRangeMultiYearMedium_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "medium"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1396,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏بهمن ۱۳۹۳ – فروردین ۱۳۹۶");
        test.done();
    },
    testDateRngFmtPersRangeMultiYearLong_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "long"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1396,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏بهمن ۱۳۹۳ – فروردین ۱۳۹۶");
        test.done();
    },
    testDateRngFmtPersRangeMultiYearFull_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "full"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1396,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۱۳۹۳ بهمن – ۱۳۹۶ فروردین");
        test.done();
    },
    testDateRngFmtPersManyYearsFull_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({
            locale: "fa-IR", 
            calendar: "persian",
            length: "full"
        });
        test.ok(fmt !== null);
        
        var start = new PersianDate({
            year: 1393,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new PersianDate({
            year: 1450,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "‏۱۳۹۳ – ۱۴۵۰");
        test.done();
    }
    
};