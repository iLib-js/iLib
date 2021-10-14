/*
 * testdatefmtrange_ml_IN.js - test the date range formatter object in Malyalam/India
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
//needs translation for a.m.-p.m.
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdatefmtrange_ml_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtRangeinDayShort_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "31/12/11 1:45 PM – 2:30 PM");
        test.done();
    },
    testDateRngFmtRangeinDayMedium_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011, ഡിസം 31 1:45 PM – 2:30 PM");
        test.done();
    },
    testDateRngFmtRangeinDayLong_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011, ഡിസംബർ 31 1:45 PM – 2:30 PM");
        test.done();
    },
    testDateRngFmtRangeinDayFull_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011, ഡിസംബർ 31 1:45 PM – 2:30 PM");
        test.done();
    },
    
    testDateRngFmtRangeNextDayShort_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "30/12/11 1:45 PM – 31/12/11 2:30 PM");
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011, ഡിസം 30 1:45 PM – 2011, ഡിസം 31 2:30 PM");
        test.done();
    },
    testDateRngFmtRangeNextDayLong_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011, ഡിസംബർ 30 1:45 PM – 2011, ഡിസംബർ 31 2:30 PM");
        test.done();
    },
    testDateRngFmtRangeNextDayFull_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011, ഡിസംബർ 30 1:45 PM – 2011, ഡിസംബർ 31 2:30 PM");
        test.done();
    },
    
    testDateRngFmtRangeMultiDayShort_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "short"});
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
    testDateRngFmtRangeMultiDayMedium_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011, ഡിസം 20 – 31");
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011, ഡിസംബർ 20 – 31");
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011, ഡിസംബർ 20 – 31");
        test.done();
    },
    
    testDateRngFmtRangeNextMonthShort_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "short"});
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
    testDateRngFmtRangeNextMonthMedium_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011, നവം 20 – 2011, ഡിസം 31");
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011, നവംബർ 20 – ഡിസംബർ 31");
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011, നവംബർ 20 – ഡിസംബർ 31");
        test.done();
    },
    
    testDateRngFmtRangeNextYearShort_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "short"});
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
    testDateRngFmtRangeNextYearMedium_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011, നവം 20 – 2012, ജനു 31");
        test.done();
    },
    testDateRngFmtRangeNextYearLong_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011, നവംബർ 20 – 2012, ജനുവരി 31");
        test.done();
    },
    testDateRngFmtRangeNextYearFull_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011, നവംബർ 20 – 2012, ജനുവരി 31");
        test.done();
    },
    
    testDateRngFmtRangeMultiYearShort_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "short"});
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
    testDateRngFmtRangeMultiYearMedium_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "2011, നവം – 2014, ജനു");
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "2011, നവംബർ – 2014, ജനുവരി");
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "2011, നവംബർ – 2014, ജനുവരി");
        test.done();
    },
    testDateRngFmtManyYearsFull_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "ml-IN", length: "full"});
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
