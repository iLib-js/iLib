/*
 * testdatefmtrange_uk_UA.js - test the date range formatter object Russian/Russia
 * 
 * Copyright © 2012-2017, JEDLSoft
 *
 * Licensed unukr the Apache License, Version 2.0 (the "License");
 * you may not use tens file except in compliance with the License.
 * You may obtaiN a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed unukr the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KinD, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations unukr the License.
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

module.exports.testdatefmtrange_uk_UA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtUARangeInDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "short"});
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
        test.equal(fmt.format(start, end), "31.12.11, 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtUARangeInDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "medium"});
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
        test.equal(fmt.format(start, end), "31 груд. 2011 р., 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtUARangeInDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "long"});
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
        test.equal(fmt.format(start, end), "31 грудня 2011 р. о 13:45 – 14:30");
        test.done();
    },
    testDateRngFmtUARangeInDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "full"});
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
        test.equal(fmt.format(start, end), "31 грудня 2011 р. о 13:45 – 14:30");
        test.done();
    },
    
    testDateRngFmtUARangeNextDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "short"});
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
        test.equal(fmt.format(start, end), "30.12.11, 13:45 – 31.12.11, 14:30");
        test.done();
    },
    testDateRngFmtUARangeNextDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "medium"});
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
        test.equal(fmt.format(start, end), "30 груд. 2011 р., 13:45 – 31 груд. 2011 р., 14:30");
        test.done();
    },
    testDateRngFmtUARangeNextDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "long"});
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
        test.equal(fmt.format(start, end), "30 грудня 2011 р. о 13:45 – 31 грудня 2011 р. о 14:30");
        test.done();
    },
    testDateRngFmtUARangeNextDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "full"});
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
        test.equal(fmt.format(start, end), "30 грудня 2011 р. о 13:45 – 31 грудня 2011 р. о 14:30");
        test.done();
    },
    
    testDateRngFmtUARangeMultiDayShort: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "short"});
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
    testDateRngFmtUARangeMultiDayMedium: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 груд. 2011 р.");
        test.done();
    },
    testDateRngFmtUARangeMultiDayLong: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 грудня 2011 р.");
        test.done();
    },
    testDateRngFmtUARangeMultiDayFull: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31 грудня 2011 р.");
        test.done();
    },
    
    testDateRngFmtUARangeNextMonthShort: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "short"});
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
    testDateRngFmtUARangeNextMonthMedium: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 лист. – 31 груд. 2011 р.");
        test.done();
    },
    testDateRngFmtUARangeNextMonthLong: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "long"});
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
        test.equal(fmt.format(start, end), "20 листопада – 31 грудня 2011 р.");
        test.done();
    },
    testDateRngFmtUARangeNextMonthFull: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "full"});
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
        test.equal(fmt.format(start, end), "20 листопада – 31 грудня 2011 р.");
        test.done();
    },
    
    testDateRngFmtUARangeNextYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "short"});
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
    testDateRngFmtUARangeNextYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 лист. 2011 р. – 31 січ. 2012 р.");
        test.done();
    },
    testDateRngFmtUARangeNextYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "long"});
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
        test.equal(fmt.format(start, end), "20 листопада 2011 р. – 31 січня 2012 р.");
        test.done();
    },
    testDateRngFmtUARangeNextYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "full"});
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
        test.equal(fmt.format(start, end), "20 листопада 2011 р. – 31 січня 2012 р.");
        test.done();
    },
    
    testDateRngFmtUARangeMultiYearShort: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "short"});
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
    testDateRngFmtUARangeMultiYearMedium: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "medium"});
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
        test.equal(fmt.format(start, end), "лист. 2011 р. – січ. 2014 р.");
        test.done();
    },
    testDateRngFmtUARangeMultiYearLong: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "long"});
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
        test.equal(fmt.format(start, end), "листопада 2011 р. – січня 2014 р.");
        test.done();
    },
    testDateRngFmtUARangeMultiYearFull: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "full"});
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
        test.equal(fmt.format(start, end), "листопада 2011 р. – січня 2014 р.");
        test.done();
    },
    testDateRngFmtUAManyYearsFull: function(test) {
        var fmt = new DateRngFmt({locale: "uk-UA", length: "full"});
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