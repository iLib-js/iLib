/*
 * testdatefmtrange_zh_Hans_CN.js - test the date range formatter object in Chinese/China
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
    var ilib = require("../../..");
}

module.exports.testdatefmtrange_zh_Hans_CN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtCNRangeInDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "short"});
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
        test.equal(fmt.format(start, end), "2011/12/31 下午1:45 – 下午2:30");
        test.done();
    },
    testDateRngFmtCNRangeInDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011年12月31日 下午1:45 – 下午2:30");
        test.done();
    },
    testDateRngFmtCNRangeInDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011年12月31日 下午1:45 – 下午2:30");
        test.done();
    },
    testDateRngFmtCNRangeInDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011年12月31日 下午1:45 – 下午2:30");
        test.done();
    },
    
    testDateRngFmtCNRangeNextDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "short"});
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
        test.equal(fmt.format(start, end), "2011/12/30 下午1:45 – 2011/12/31 下午2:30");
        test.done();
    },
    testDateRngFmtCNRangeNextDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011年12月30日 下午1:45 – 2011年12月31日 下午2:30");
        test.done();
    },
    testDateRngFmtCNRangeNextDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011年12月30日 下午1:45 – 2011年12月31日 下午2:30");
        test.done();
    },
    testDateRngFmtCNRangeNextDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011年12月30日 下午1:45 – 2011年12月31日 下午2:30");
        test.done();
    },
    
    testDateRngFmtCNRangeMultiDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "short"});
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
        test.equal(fmt.format(start, end), "2011/12/20 – 31");
        test.done();
    },
    testDateRngFmtCNRangeMultiDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011年12月20日 – 31日");
        test.done();
    },
    testDateRngFmtCNRangeMultiDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011年12月20日 – 31日");
        test.done();
    },
    testDateRngFmtCNRangeMultiDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011年12月20日 – 31日");
        test.done();
    },
    
    testDateRngFmtCNRangeNextMonthShort: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "short"});
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
        test.equal(fmt.format(start, end), "2011/11/20 – 2011/12/31");
        test.done();
    },
    testDateRngFmtCNRangeNextMonthMedium: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011年11月20日 – 2011年12月31日");
        test.done();
    },
    testDateRngFmtCNRangeNextMonthLong: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011年11月20日 – 12月31日");
        test.done();
    },
    testDateRngFmtCNRangeNextMonthFull: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011年11月20日 – 12月31日");
        test.done();
    },
    
    testDateRngFmtCNRangeNextYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "short"});
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
        test.equal(fmt.format(start, end), "2011/11/20 – 2012/1/31");
        test.done();
    },
    testDateRngFmtCNRangeNextYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011年11月20日 – 2012年1月31日");
        test.done();
    },
    testDateRngFmtCNRangeNextYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011年11月20日 – 2012年1月31日");
        test.done();
    },
    testDateRngFmtCNRangeNextYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011年11月20日 – 2012年1月31日");
        test.done();
    },
    
    testDateRngFmtCNRangeMultiYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "short"});
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
        test.equal(fmt.format(start, end), "2011/11 – 2014/1");
        test.done();
    },
    testDateRngFmtCNRangeMultiYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011年11月 – 2014年1月");
        test.done();
    },
    testDateRngFmtCNRangeMultiYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011年11月 – 2014年1月");
        test.done();
    },
    testDateRngFmtCNRangeMultiYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011年11月 – 2014年1月");
        test.done();
    },
    testDateRngFmtCNManyYearsFull: function(test) {
        var fmt = new DateRngFmt({locale: "zh-Hans-CN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011年 – 2064年");
        test.done();
    }
    
};