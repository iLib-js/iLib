/*
 * testdatefmtrange_si_LK.js - test the date range formatter object in Sri Lanka
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

module.exports.testdatefmtrange_si_LK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtLKRangeInDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-12-31 13.45 – 14.30");
        test.done();
    },
    testDateRngFmtLKRangeInDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011 දෙසැ 31 13.45 – 14.30");
        test.done();
    },
    testDateRngFmtLKRangeInDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "long"});
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
        test.equal(fmt.format(start, end), "2011 දෙසැම්බර් 31 13.45 – 14.30");
        test.done();
    },
    testDateRngFmtLKRangeInDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "full"});
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
        test.equal(fmt.format(start, end), "2011 දෙසැම්බර් 31 13.45 – 14.30");
        test.done();
    },
    
    testDateRngFmtLKRangeNextDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-12-30 13.45 – 2011-12-31 14.30");
        test.done();
    },
    testDateRngFmtLKRangeNextDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011 දෙසැ 30 13.45 – 2011 දෙසැ 31 14.30");
        test.done();
    },
    testDateRngFmtLKRangeNextDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "long"});
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
        test.equal(fmt.format(start, end), "2011 දෙසැම්බර් 30 13.45 – 2011 දෙසැම්බර් 31 14.30");
        test.done();
    },
    testDateRngFmtLKRangeNextDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "full"});
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
        test.equal(fmt.format(start, end), "2011 දෙසැම්බර් 30 13.45 – 2011 දෙසැම්බර් 31 14.30");
        test.done();
    },
    
    testDateRngFmtLKRangeMultiDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "short"});
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
    testDateRngFmtLKRangeMultiDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011 දෙසැ 20 – 31");
        test.done();
    },
    testDateRngFmtLKRangeMultiDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "long"});
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
        test.equal(fmt.format(start, end), "2011 දෙසැම්බර් 20 – 31");
        test.done();
    },
    testDateRngFmtLKRangeMultiDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "full"});
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
        test.equal(fmt.format(start, end), "2011 දෙසැම්බර් 20 – 31");
        test.done();
    },
    
    testDateRngFmtLKRangeNextMonthShort: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "short"});
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
    testDateRngFmtLKRangeNextMonthMedium: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011 නොවැ 20 – 2011 දෙසැ 31");
        test.done();
    },
    testDateRngFmtLKRangeNextMonthLong: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "long"});
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
        test.equal(fmt.format(start, end), "2011 නොවැම්බර් 20 – දෙසැම්බර් 31");
        test.done();
    },
    testDateRngFmtLKRangeNextMonthFull: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "full"});
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
        test.equal(fmt.format(start, end), "2011 නොවැම්බර් 20 – දෙසැම්බර් 31");
        test.done();
    },
    
    testDateRngFmtLKRangeNextYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "short"});
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
    testDateRngFmtLKRangeNextYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011 නොවැ 20 – 2012 ජන 31");
        test.done();
    },
    testDateRngFmtLKRangeNextYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "long"});
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
        test.equal(fmt.format(start, end), "2011 නොවැම්බර් 20 – 2012 ජනවාරි 31");
        test.done();
    },
    testDateRngFmtLKRangeNextYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "full"});
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
        test.equal(fmt.format(start, end), "2011 නොවැම්බර් 20 – 2012 ජනවාරි 31");
        test.done();
    },
    
    testDateRngFmtLKRangeMultiYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "short"});
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
    testDateRngFmtLKRangeMultiYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011 නොවැ – 2014 ජන");
        test.done();
    },
    testDateRngFmtLKRangeMultiYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "long"});
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
        test.equal(fmt.format(start, end), "2011 නොවැම්බර් – 2014 ජනවාරි");
        test.done();
    },
    testDateRngFmtLKRangeMultiYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "full"});
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
        test.equal(fmt.format(start, end), "2011 නොවැම්බර් – 2014 ජනවාරි");
        test.done();
    },
    testDateRngFmtLKManyYearsFull: function(test) {
        var fmt = new DateRngFmt({locale: "si-LK", length: "full"});
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