/*
 * testdatefmtrange_sw_KE.js - test the date range formatter object in Kenya
 *
 * Copyright © 2017,2017, JEDLSoft
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
    var GregorianDate = require("../.././../lib/GregorianDate.js");
}
if (typeof(DateRngFmt) === "undefined") {
    var DateRngFmt = require("../.././../lib/DateRngFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testdatefmtrange_sw_KE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtKERangeInDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "short"});
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
        test.equal(fmt.format(start, end), "31/12/2011, 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtKERangeInDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "medium"});
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
        test.equal(fmt.format(start, end), "31 Des 2011, 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtKERangeInDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "long"});
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
        test.equal(fmt.format(start, end), "31 Desemba 2011 saa 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtKERangeInDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "full"});
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
        test.equal(fmt.format(start, end), "31 Desemba 2011 saa 13:45 – 14:30");
        test.done();
    },
    
    testDateRngFmtKERangeNextDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "short"});
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
        test.equal(fmt.format(start, end), "30/12/2011, 13:45 – 31/12/2011, 14:30");
        test.done();
    },
    testDateRngFmtKERangeNextDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "medium"});
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
        test.equal(fmt.format(start, end), "30 Des 2011, 13:45 – 31 Des 2011, 14:30");
        test.done();
    },
    testDateRngFmtKERangeNextDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "long"});
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
        test.equal(fmt.format(start, end), "30 Desemba 2011 saa 13:45 – 31 Desemba 2011 saa 14:30");
        test.done();
    },
    testDateRngFmtKERangeNextDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "full"});
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
        test.equal(fmt.format(start, end), "30 Desemba 2011 saa 13:45 – 31 Desemba 2011 saa 14:30");
        test.done();
    },
    
    testDateRngFmtKERangeMultiDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "short"});
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
        test.equal(fmt.format(start, end), "20 – 31/12/2011");
        test.done();
    },
    testDateRngFmtKERangeMultiDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 Des 2011");
        test.done();
    },
    testDateRngFmtKERangeMultiDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 Desemba 2011");
        test.done();
    },
    testDateRngFmtKERangeMultiDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31 Desemba 2011");
        test.done();
    },
    
    testDateRngFmtKERangeNextMonthShort: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "short"});
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
        test.equal(fmt.format(start, end), "20/11 – 31/12/2011");
        test.done();
    },
    testDateRngFmtKERangeNextMonthMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 Nov – 31 Des 2011");
        test.done();
    },
    testDateRngFmtKERangeNextMonthLong: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "long"});
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
        test.equal(fmt.format(start, end), "20 Novemba – 31 Desemba 2011");
        test.done();
    },
    testDateRngFmtKERangeNextMonthFull: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "full"});
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
        test.equal(fmt.format(start, end), "20 Novemba – 31 Desemba 2011");
        test.done();
    },
    
    testDateRngFmtKERangeNextYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "short"});
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
        test.equal(fmt.format(start, end), "20/11/2011 – 31/01/2012");
        test.done();
    },
    testDateRngFmtKERangeNextYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 Nov 2011 – 31 Jan 2012");
        test.done();
    },
    testDateRngFmtKERangeNextYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "long"});
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
        test.equal(fmt.format(start, end), "20 Novemba 2011 – 31 Januari 2012");
        test.done();
    },
    testDateRngFmtKERangeNextYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "full"});
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
        test.equal(fmt.format(start, end), "20 Novemba 2011 – 31 Januari 2012");
        test.done();
    },
    
    testDateRngFmtKERangeMultiYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "short"});
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
        test.equal(fmt.format(start, end), "11/2011 – 01/2014");
        test.done();
    },
    testDateRngFmtKERangeMultiYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "medium"});
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
        test.equal(fmt.format(start, end), "Nov 2011 – Jan 2014");
        test.done();
    },
    testDateRngFmtKERangeMultiYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "long"});
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
        test.equal(fmt.format(start, end), "Novemba 2011 – Januari 2014");
        test.done();
    },
    testDateRngFmtKERangeMultiYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "full"});
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
        test.equal(fmt.format(start, end), "Novemba 2011 – Januari 2014");
        test.done();
    },
    testDateRngFmtKEManyYearsFull: function(test) {
        var fmt = new DateRngFmt({locale: "sw-Latn-KE", length: "full"});
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