/*
 * testdatefmtrange_bn_IN.js - test the date range formatter object in Bengali/india
 * 
 * Copyright © 2012-2017, 2020 JEDLSoft
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

module.exports.testdatefmtrange_bn_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtRangeinDayShort_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "৩১/১২/১১ ১:৪৫ PM – ২:৩০ PM");
        test.done();
    },
    testDateRngFmtRangeinDayMedium_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "৩১ ডিসেম্বর, ২০১১ ১:৪৫ PM – ২:৩০ PM");
        test.done();
    },
    testDateRngFmtRangeinDayLong_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "৩১ ডিসেম্বর, ২০১১ ১:৪৫ PM – ২:৩০ PM");
        test.done();
    },
    testDateRngFmtRangeinDayFull_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "৩১ ডিসেম্বর, ২০১১ ১:৪৫ PM – ২:৩০ PM");
        test.done();
    },
    
    testDateRngFmtRangeNextDayShort_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "৩০/১২/১১ ১:৪৫ PM – ৩১/১২/১১ ২:৩০ PM");
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "৩০ ডিসেম্বর, ২০১১ ১:৪৫ PM – ৩১ ডিসেম্বর, ২০১১ ২:৩০ PM");
        test.done();
    },
    testDateRngFmtRangeNextDayLong_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "৩০ ডিসেম্বর, ২০১১ ১:৪৫ PM – ৩১ ডিসেম্বর, ২০১১ ২:৩০ PM");
        test.done();
    },
    testDateRngFmtRangeNextDayFull_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "৩০ ডিসেম্বর, ২০১১ ১:৪৫ PM – ৩১ ডিসেম্বর, ২০১১ ২:৩০ PM");
        test.done();
    },
    
    testDateRngFmtRangeMultiDayShort_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "২০ – ৩১/১২/১১");
        test.done();
    },
    testDateRngFmtRangeMultiDayMedium_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "২০ – ৩১ ডিসেম্বর, ২০১১");
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "২০ – ৩১ ডিসেম্বর, ২০১১");
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "২০ – ৩১ ডিসেম্বর, ২০১১");
        test.done();
    },
    
    testDateRngFmtRangeNextMonthShort_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "২০/১১ – ৩১/১২/১১");
        test.done();
    },
    testDateRngFmtRangeNextMonthMedium_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "২০ নভেম্বর – ৩১ ডিসেম্বর, ২০১১");
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "২০ নভেম্বর – ৩১ ডিসেম্বর, ২০১১");
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "২০ নভেম্বর – ৩১ ডিসেম্বর, ২০১১");
        test.done();
    },
    
    testDateRngFmtRangeNextYearShort_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "২০/১১/১১ – ৩১/১/১২");
        test.done();
    },
    testDateRngFmtRangeNextYearMedium_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "২০ নভেম্বর, ২০১১ – ৩১ জানু, ২০১২");
        test.done();
    },
    testDateRngFmtRangeNextYearLong_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "২০ নভেম্বর, ২০১১ – ৩১ জানুয়ারী, ২০১২");
        test.done();
    },
    testDateRngFmtRangeNextYearFull_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "২০ নভেম্বর, ২০১১ – ৩১ জানুয়ারী, ২০১২");
        test.done();
    },
    
    testDateRngFmtRangeMultiYearShort_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "১১/১১ – ১/১৪");
        test.done();
    },
    testDateRngFmtRangeMultiYearMedium_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "নভেম্বর, ২০১১ – জানুয়ারী, ২০১৪");
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "নভেম্বর, ২০১১ – জানুয়ারী, ২০১৪");
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "নভেম্বর, ২০১১ – জানুয়ারী, ২০১৪");
        test.done();
    },
    testDateRngFmtManyYearsFull_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "bn-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "২০১১ – ২০৬৪");
        test.done();
    }
    
};
