/*
 * testdatefmtrange_th_TH.js - test the the range formatter object in Thai
 * 
 * Copyright © 2012-2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENTH-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (typeof(ThaiSolarDate) === "undefined") {
    var ThaiSolarDate = require("../../../lib/ThaiSolarDate.js");
}
if (typeof(DateRngFmt) === "undefined") {
    var DateRngFmt = require("../../../lib/DateRngFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testdatefmtrange_th_TH = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtTHRangeInDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "short"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "31/12/11 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtTHRangeInDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "31 ธ.ค. 2011 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtTHRangeInDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "long"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "31 ธันวาคม 2011 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtTHRangeInDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "31 ธันวาคม 2011 13:45 – 14:30");
        test.done();
    },
    
    testDateRngFmtTHRangeNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "short"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "30/12/11 13:45 – 31/12/11 14:30");
        test.done();
    },
    testDateRngFmtTHRangeNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "30 ธ.ค. 2011 13:45 – 31 ธ.ค. 2011 14:30");
        test.done();
    },
    testDateRngFmtTHRangeNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "long"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });          
        test.equal(fmt.format(start, end), "30 ธันวาคม 2011 13:45 – 31 ธันวาคม 2011 14:30");
        test.done();
    },
    testDateRngFmtTHRangeNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "30 ธันวาคม 2011 13:45 – 31 ธันวาคม 2011 14:30");
        test.done();
    },
    
    testDateRngFmtTHRangeMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "short"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
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
    testDateRngFmtTHRangeMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 – 31 ธ.ค. 2011");
        test.done();
    },
    testDateRngFmtTHRangeMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "long"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 – 31 ธันวาคม 2011");
        test.done();
    },
    testDateRngFmtTHRangeMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 – 31 ธันวาคม 2011");
        test.done();
    },
    
    testDateRngFmtTHRangeNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "short"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
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
    testDateRngFmtTHRangeNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 พ.ย. – 31 ธ.ค. 2011");
        test.done();
    },
    testDateRngFmtTHRangeNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "long"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 พฤศจิกายน – 31 ธันวาคม 2011");
        test.done();
    },
    testDateRngFmtTHRangeNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2011,
            month: 12,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 พฤศจิกายน – 31 ธันวาคม 2011");
        test.done();
    },
    
    testDateRngFmtTHRangeNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "short"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
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
    testDateRngFmtTHRangeNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 พ.ย. 2011 – 31 ม.ค. 2012");
        test.done();
    },
    testDateRngFmtTHRangeNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "long"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 พฤศจิกายน 2011 – 31 มกราคม 2012");
        test.done();
    },
    testDateRngFmtTHRangeNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2012,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 พฤศจิกายน 2011 – 31 มกราคม 2012");
        test.done();
    },
    
    testDateRngFmtTHRangeMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "short"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
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
    testDateRngFmtTHRangeMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "พ.ย. 2011 – ม.ค. 2014");
        test.done();
    },
    testDateRngFmtTHRangeMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "long"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "พฤศจิกายน 2011 – มกราคม 2014");
        test.done();
    },
    testDateRngFmtTHRangeMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
            year: 2014,
            month: 1,
            day: 31,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "พฤศจิกายน 2011 – มกราคม 2014");
        test.done();
    },
    testDateRngFmtTHManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);
        
        var start = new ThaiSolarDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new ThaiSolarDate({
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
