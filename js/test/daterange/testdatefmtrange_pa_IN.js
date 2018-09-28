/*
 * testdatefmtrange_pa_IN.js - test the date range formatter object in Punjabi/India
 * 
 * 
 * Copyright © 2012-2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KinD, either express or implied.
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

module.exports.testdatefmtrange_pa_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtRangeinDayShort_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "31/12/11, 1:45 ਬਾ.ਦੁ. – 2:30 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateRngFmtRangeinDayMedium_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "31 ਦਸੰ 2011, 1:45 ਬਾ.ਦੁ. – 2:30 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateRngFmtRangeinDayLong_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "31 ਦਸੰਬਰ 2011 1:45 ਬਾ.ਦੁ. – 2:30 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateRngFmtRangeinDayFull_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "31 ਦਸੰਬਰ 2011 1:45 ਬਾ.ਦੁ. – 2:30 ਬਾ.ਦੁ.");
        test.done();
    },
    
    testDateRngFmtRangeNextDayShort_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "30/12/11, 1:45 ਬਾ.ਦੁ. – 31/12/11, 2:30 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "30 ਦਸੰ 2011, 1:45 ਬਾ.ਦੁ. – 31 ਦਸੰ 2011, 2:30 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateRngFmtRangeNextDayLong_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "30 ਦਸੰਬਰ 2011 1:45 ਬਾ.ਦੁ. – 31 ਦਸੰਬਰ 2011 2:30 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateRngFmtRangeNextDayFull_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "30 ਦਸੰਬਰ 2011 1:45 ਬਾ.ਦੁ. – 31 ਦਸੰਬਰ 2011 2:30 ਬਾ.ਦੁ.");
        test.done();
    },
    
    testDateRngFmtRangeMultiDayShort_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "20 – 31/12/11");
        test.done();
    },
    testDateRngFmtRangeMultiDayMedium_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 ਦਸੰ 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 ਦਸੰਬਰ 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31 ਦਸੰਬਰ 2011");
        test.done();
    },
    
    testDateRngFmtRangeNextMonthShort_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "20/11 – 31/12/11");
        test.done();
    },
    testDateRngFmtRangeNextMonthMedium_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 ਨਵੰ – 31 ਦਸੰ 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 ਨਵੰਬਰ – 31 ਦਸੰਬਰ 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 ਨਵੰਬਰ – 31 ਦਸੰਬਰ 2011");
        test.done();
    },
    
    testDateRngFmtRangeNextYearShort_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "20/11/11 – 31/1/12");
        test.done();
    },
    testDateRngFmtRangeNextYearMedium_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 ਨਵੰ 2011 – 31 ਜਨ 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearLong_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 ਨਵੰਬਰ 2011 – 31 ਜਨਵਰੀ 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearFull_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 ਨਵੰਬਰ 2011 – 31 ਜਨਵਰੀ 2012");
        test.done();
    },
    
    testDateRngFmtRangeMultiYearShort_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "11/11 – 1/14");
        test.done();
    },
    testDateRngFmtRangeMultiYearMedium_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "ਨਵੰ 2011 – ਜਨ 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "ਨਵੰਬਰ 2011 – ਜਨਵਰੀ 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "ਨਵੰਬਰ 2011 – ਜਨਵਰੀ 2014");
        test.done();
    },
    testDateRngFmtManyYearsFull_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pa-IN", length: "full"});
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
