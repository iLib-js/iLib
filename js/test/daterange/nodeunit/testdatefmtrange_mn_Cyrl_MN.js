/*
 * testdatefmtrange_mn-Cyrl_MN.js - test the date range formatter object in Mongolian/Mongolia for Cyrillic script.
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
    var GregorianDate = require("../../../lib/GregorianDate.js");
}
if (typeof(DateRngFmt) === "undefined") {
    var DateRngFmt = require("../../../lib/DateRngFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testdatefmtrange_mn_Cyrl_MN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtMNRangeinDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-12-31, 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtMNRangeinDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011 12-р сар 31 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtMNRangeinDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011оны Арван хоёрдугаар сарсарын 31өдөр 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtMNRangeinDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011 оны 12 сарын 31 13:45 – 14:30");
        test.done();
    },
    
    testDateRngFmtMNRangeNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "short"});
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
        test.equal(fmt.format(start, end), "2011-12-30, 13:45 – 2011-12-31, 14:30");
        test.done();
    },
    testDateRngFmtMNRangeNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011 12-р сар 30 13:45 – 2011 12-р сар 31 14:30");
        test.done();
    },
    testDateRngFmtMNRangeNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011оны Арван хоёрдугаар сарсарын 30өдөр 13:45 – 2011оны Арван хоёрдугаар сарсарын 31өдөр 14:30");
        test.done();
    },
    testDateRngFmtMNRangeNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011 оны 12 сарын 30 13:45 – 2011 оны 12 сарын 31 14:30");
        test.done();
    },
    
    testDateRngFmtMNRangeMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "short"});
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
    testDateRngFmtMNRangeMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011 12-р сар 20 – 31");
        test.done();
    },
    testDateRngFmtMNRangeMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011оны Арван хоёрдугаар сарсарын 20өдөр – 31");
        test.done();
    },
    testDateRngFmtMNRangeMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011 оны 12 сарын 20 – 31");
        test.done();
    },
    
    testDateRngFmtMNRangeNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "short"});
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
    testDateRngFmtMNRangeNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011 11-р сар 20 – 2011 12-р сар 31");
        test.done();
    },
    testDateRngFmtMNRangeNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011оны Арван нэгдүгээр сарсарын 20өдөр – Арван хоёрдугаар сарсарын 31өдөр");
        test.done();
    },
    testDateRngFmtMNRangeNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011 оны 11 сарын 20 – 12 сарын 31");
        test.done();
    },
    
    testDateRngFmtMNRangeNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "short"});
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
    testDateRngFmtMNRangeNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011 11-р сар 20 – 2012 1-р сар 31");
        test.done();
    },
    testDateRngFmtMNRangeNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011оны Арван нэгдүгээр сарсарын 20өдөр – 2012оны Нэгдүгээр сарсарын 31өдөр");
        test.done();
    },
    testDateRngFmtMNRangeNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011 оны 11 сарын 20 – 2012 оны 01 сарын 31");
        test.done();
    },
    
    testDateRngFmtMNRangeMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "short"});
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
    testDateRngFmtMNRangeMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011 11-р сар – 2014 1-р сар");
        test.done();
    },
    testDateRngFmtMNRangeMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011оны Арван нэгдүгээр сар – 2014оны Нэгдүгээр сар");
        test.done();
    },
    testDateRngFmtMNRangeMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011 оны 11 – 2014 оны 01");
        test.done();
    },
    testDateRngFmtMNManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mn-Cyrl-MN", length: "full"});
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