/*
 * testdatefmtrange_ja_JP.js - test the date range formatter object in Japanese/Japan
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
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testdatefmtrange_ja_JP = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtJPRangeInDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "short"});
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
        test.equal(fmt.format(start, end), "2011/12/31 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtJPRangeInDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011/12/31 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtJPRangeInDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "long"});
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
        test.equal(fmt.format(start, end), "2011年12月31日 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtJPRangeInDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "full"});
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
        test.equal(fmt.format(start, end), "2011年12月31日 13:45 – 14:30");
        test.done();
    },
    
    testDateRngFmtJPRangeNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "short"});
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
        test.equal(fmt.format(start, end), "2011/12/30 13:45 – 2011/12/31 14:30");
        test.done();
    },
    testDateRngFmtJPRangeNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011/12/30 13:45 – 2011/12/31 14:30");
        test.done();
    },
    testDateRngFmtJPRangeNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "long"});
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
        test.equal(fmt.format(start, end), "2011年12月30日 13:45 – 2011年12月31日 14:30");
        test.done();
    },
    testDateRngFmtJPRangeNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "full"});
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
        test.equal(fmt.format(start, end), "2011年12月30日 13:45 – 2011年12月31日 14:30");
        test.done();
    },
    
    testDateRngFmtJPRangeMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "short"});
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
        test.equal(fmt.format(start, end), "2011/12/20 – 31");
        test.done();
    },
    testDateRngFmtJPRangeMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011/12/20 – 31");
        test.done();
    },
    testDateRngFmtJPRangeMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "long"});
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
        test.equal(fmt.format(start, end), "2011年12月20日 – 31日");
        test.done();
    },
    testDateRngFmtJPRangeMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "full"});
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
        test.equal(fmt.format(start, end), "2011年12月20日 – 31日");
        test.done();
    },
    
    testDateRngFmtJPRangeNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "short"});
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
        test.equal(fmt.format(start, end), "2011/11/20 – 2011/12/31");
        test.done();
    },
    testDateRngFmtJPRangeNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011/11/20 – 2011/12/31");
        test.done();
    },
    testDateRngFmtJPRangeNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "long"});
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
        test.equal(fmt.format(start, end), "2011年11月20日 – 12月31日");
        test.done();
    },
    testDateRngFmtJPRangeNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "full"});
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
        test.equal(fmt.format(start, end), "2011年11月20日 – 12月31日");
        test.done();
    },
    
    testDateRngFmtJPRangeNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "short"});
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
        test.equal(fmt.format(start, end), "2011/11/20 – 2012/01/31");
        test.done();
    },
    testDateRngFmtJPRangeNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011/11/20 – 2012/01/31");
        test.done();
    },
    testDateRngFmtJPRangeNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "long"});
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
        test.equal(fmt.format(start, end), "2011年11月20日 – 2012年1月31日");
        test.done();
    },
    testDateRngFmtJPRangeNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "full"});
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
        test.equal(fmt.format(start, end), "2011年11月20日 – 2012年1月31日");
        test.done();
    },
    
    testDateRngFmtJPRangeMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "short"});
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
        test.equal(fmt.format(start, end), "2011/11 – 2014/01");
        test.done();
    },
    testDateRngFmtJPRangeMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011/11 – 2014/01");
        test.done();
    },
    testDateRngFmtJPRangeMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "long"});
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
        test.equal(fmt.format(start, end), "2011年11月 – 2014年1月");
        test.done();
    },
    testDateRngFmtJPRangeMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "full"});
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
        test.equal(fmt.format(start, end), "2011年11月 – 2014年1月");
        test.done();
    },
    testDateRngFmtJPManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ja-JP", length: "full"});
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
        test.equal(fmt.format(start, end), "2011年 – 2064年");
        test.done();
    }
    
};
