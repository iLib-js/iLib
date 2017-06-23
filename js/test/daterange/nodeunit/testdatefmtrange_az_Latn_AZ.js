/*
 * testdatefmtrange_az_Latn_AZ.js - test the date range formatter object in Azerbaijani
 *
 * Copyright © 2016-2017, JEDLSoft
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

module.exports.testdatefmtrange_az_Latn_AZ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtAZRangeInDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "short"});
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
        test.equal(fmt.format(start, end), "31.12.11 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtAZRangeInDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "medium"});
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
        test.equal(fmt.format(start, end), "31 dek 2011 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtAZRangeInDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "long"});
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
        test.equal(fmt.format(start, end), "31 dekabr 2011 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtAZRangeInDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "full"});
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
        test.equal(fmt.format(start, end), "31 dekabr 2011 13:45 – 14:30");
        test.done();
    },
    
    testDateRngFmtAZRangeNextDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "short"});
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
        test.equal(fmt.format(start, end), "30.12.11 13:45 – 31.12.11 14:30");
        test.done();
    },
    testDateRngFmtAZRangeNextDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "medium"});
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
        test.equal(fmt.format(start, end), "30 dek 2011 13:45 – 31 dek 2011 14:30");
        test.done();
    },
    testDateRngFmtAZRangeNextDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "long"});
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
        test.equal(fmt.format(start, end), "30 dekabr 2011 13:45 – 31 dekabr 2011 14:30");
        test.done();
    },
    testDateRngFmtAZRangeNextDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "full"});
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
        test.equal(fmt.format(start, end), "30 dekabr 2011 13:45 – 31 dekabr 2011 14:30");
        test.done();
    },
    
    testDateRngFmtAZRangeMultiDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "short"});
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
    testDateRngFmtAZRangeMultiDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 dek 2011");
        test.done();
    },
    testDateRngFmtAZRangeMultiDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 dekabr 2011");
        test.done();
    },
    testDateRngFmtAZRangeMultiDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31 dekabr 2011");
        test.done();
    },
    
    testDateRngFmtAZRangeNextMonthShort: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "short"});
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
    testDateRngFmtAZRangeNextMonthMedium: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 noy – 31 dek 2011");
        test.done();
    },
    testDateRngFmtAZRangeNextMonthLong: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "long"});
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
        test.equal(fmt.format(start, end), "20 noyabr – 31 dekabr 2011");
        test.done();
    },
    testDateRngFmtAZRangeNextMonthFull: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "full"});
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
        test.equal(fmt.format(start, end), "20 noyabr – 31 dekabr 2011");
        test.done();
    },
    
    testDateRngFmtAZRangeNextYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "short"});
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
        test.equal(fmt.format(start, end), "20.11.11 – 31.01.12");
        test.done();
    },
    testDateRngFmtAZRangeNextYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 noy 2011 – 31 yan 2012");
        test.done();
    },
    testDateRngFmtAZRangeNextYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "long"});
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
        test.equal(fmt.format(start, end), "20 noyabr 2011 – 31 yanvar 2012");
        test.done();
    },
    testDateRngFmtAZRangeNextYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "full"});
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
        test.equal(fmt.format(start, end), "20 noyabr 2011 – 31 yanvar 2012");
        test.done();
    },
    
    testDateRngFmtAZRangeMultiYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "short"});
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
        test.equal(fmt.format(start, end), "11.11 – 01.14");
        test.done();
    },
    testDateRngFmtAZRangeMultiYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "medium"});
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
        test.equal(fmt.format(start, end), "noy 2011 – yan 2014");
        test.done();
    },
    testDateRngFmtAZRangeMultiYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "long"});
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
        test.equal(fmt.format(start, end), "noyabr 2011 – yanvar 2014");
        test.done();
    },
    testDateRngFmtAZRangeMultiYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "full"});
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
        test.equal(fmt.format(start, end), "noyabr 2011 – yanvar 2014");
        test.done();
    },
    testDateRngFmtAZManyYearsFull: function(test) {
        var fmt = new DateRngFmt({locale: "az-Latn-AZ", length: "full"});
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