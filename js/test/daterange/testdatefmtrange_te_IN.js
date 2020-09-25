/*
 * testdatefmtrange_te_IN.js - test the date range formatter object in Telugu/India
 * 
 * Copyright © 2012-2017,2020 JEDLSoft
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

module.exports.testdatefmtrange_te_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtRangeinDayShort_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "31-12-11 1:45 PM – 2:30 PM");
        test.done();
    },
    testDateRngFmtRangeinDayMedium_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "31 డిసెం, 2011 1:45 PM – 2:30 PM");
        test.done();
    },
    testDateRngFmtRangeinDayLong_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "long"});
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
        test.equal(fmt.format(start, end), '31 డిసెంబర్, 2011 1:45 PMకి – 2:30 PM');
        test.done();
    },
    testDateRngFmtRangeinDayFull_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "full"});
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
        test.equal(fmt.format(start, end), '31, డిసెంబర్ 2011 1:45 PMకి – 2:30 PM');
        test.done();
    },
    
    testDateRngFmtRangeNextDayShort_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "30-12-11 1:45 PM – 31-12-11 2:30 PM");
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "30 డిసెం, 2011 1:45 PM – 31 డిసెం, 2011 2:30 PM");
        test.done();
    },
    testDateRngFmtRangeNextDayLong_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "long"});
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
        test.equal(fmt.format(start, end), '30 డిసెంబర్, 2011 1:45 PMకి – 31 డిసెంబర్, 2011 2:30 PMకి');
        test.done();
    },
    testDateRngFmtRangeNextDayFull_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "full"});
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
        test.equal(fmt.format(start, end), '30, డిసెంబర్ 2011 1:45 PMకి – 31, డిసెంబర్ 2011 2:30 PMకి');
        test.done();
    },
    
    testDateRngFmtRangeMultiDayShort_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "20 – 31-12-11");
        test.done();
    },
    testDateRngFmtRangeMultiDayMedium_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 డిసెం, 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 డిసెంబర్, 2011");
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31, డిసెంబర్ 2011");
        test.done();
    },
    
    testDateRngFmtRangeNextMonthShort_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "20-11 – 31-12-11");
        test.done();
    },
    testDateRngFmtRangeNextMonthMedium_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 నవం – 31 డిసెం, 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 నవంబర్ – 31 డిసెంబర్, 2011");
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "20, నవంబర్ – 31, డిసెంబర్ 2011");
        test.done();
    },
    
    testDateRngFmtRangeNextYearShort_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "20-11-11 – 31-01-12");
        test.done();
    },
    testDateRngFmtRangeNextYearMedium_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 నవం, 2011 – 31 జన, 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearLong_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "20 నవంబర్, 2011 – 31 జనవరి, 2012");
        test.done();
    },
    testDateRngFmtRangeNextYearFull_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "20, నవంబర్ 2011 – 31, జనవరి 2012");
        test.done();
    },
    
    testDateRngFmtRangeMultiYearShort_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "11-11 – 01-14");
        test.done();
    },
    testDateRngFmtRangeMultiYearMedium_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "నవం, 2011 – జన, 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "నవంబర్, 2011 – జనవరి, 2014");
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "నవంబర్ 2011 – జనవరి 2014");
        test.done();
    },
    testDateRngFmtManyYearsFull_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "te-IN", length: "full"});
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
