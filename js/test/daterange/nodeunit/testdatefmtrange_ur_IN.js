/*
 * testdatefmtrange_ur_IN.js - test the date range formatter object in Urdu/India
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
    var GregorianDate = require("../.././../lib/GregorianDate.js");
}
if (typeof(DateRngFmt) === "undefined") {
    var DateRngFmt = require("../.././../lib/DateRngFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testdatefmtrange_ur_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtRangeinDayShort_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "‏۳۱‏/۱۲‏/۱۱ ‏۱:۴۵ ‫PM – ‏۲:۳۰ ‫PM");
        test.done();
    },
    testDateRngFmtRangeinDayMedium_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "‏۲۰۱۱ دسمبر ۳۱ ‏۱:۴۵ ‫PM – ‏۲:۳۰ ‫PM");
        test.done();
    },
    testDateRngFmtRangeinDayLong_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "‏۳۱ دسمبر، ۲۰۱۱ ‏۱:۴۵ ‫PM – ‏۲:۳۰ ‫PM");
        test.done();
    },
    testDateRngFmtRangeinDayFull_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "‏۳۱ دسمبر، ۲۰۱۱ ‏۱:۴۵ ‫PM – ‏۲:۳۰ ‫PM");
        test.done();
    },
    
    testDateRngFmtRangeNextDayShort_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "‏۳۰‏/۱۲‏/۱۱ ‏۱:۴۵ ‫PM – ‏۳۱‏/۱۲‏/۱۱ ‏۲:۳۰ ‫PM");
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "‏۲۰۱۱ دسمبر ۳۰ ‏۱:۴۵ ‫PM – ‏۲۰۱۱ دسمبر ۳۱ ‏۲:۳۰ ‫PM");
        test.done();
    },
    testDateRngFmtRangeNextDayLong_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "‏۳۰ دسمبر، ۲۰۱۱ ‏۱:۴۵ ‫PM – ‏۳۱ دسمبر، ۲۰۱۱ ‏۲:۳۰ ‫PM");
        test.done();
    },
    testDateRngFmtRangeNextDayFull_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "‏۳۰ دسمبر، ۲۰۱۱ ‏۱:۴۵ ‫PM – ‏۳۱ دسمبر، ۲۰۱۱ ‏۲:۳۰ ‫PM");
        test.done();
    },
    
    testDateRngFmtRangeMultiDayShort_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "‏۲۰ – ‏۳۱‏/۱۲‏/۱۱");
        test.done();
    },
    testDateRngFmtRangeMultiDayMedium_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "‏۲۰۱۱ دسمبر ۲۰ – ۳۱");
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "‏۲۰ – ‏۳۱ دسمبر، ۲۰۱۱");
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "‏۲۰ – ‏۳۱ دسمبر، ۲۰۱۱");
        test.done();
    },
    
    testDateRngFmtRangeNextMonthShort_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "‏۲۰‏/۱۱ – ‏۳۱‏/۱۲‏/۱۱");
        test.done();
    },
    testDateRngFmtRangeNextMonthMedium_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
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
        })
        test.equal(fmt.format(start, end), "‏۲۰۱۱ نومبر ۲۰ – ‏۲۰۱۱ دسمبر ۳۱");
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "‏۲۰ نومبر – ‏۳۱ دسمبر، ۲۰۱۱");
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "‏۲۰ نومبر – ‏۳۱ دسمبر، ۲۰۱۱");
        test.done();
    },
    
    testDateRngFmtRangeNextYearShort_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "‏۲۰‏/۱۱‏/۱۱ – ‏۳۱‏/۱‏/۱۲");
        test.done();
    },
    testDateRngFmtRangeNextYearMedium_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "‏۲۰۱۱ نومبر ۲۰ – ‏۲۰۱۲ جنوری ۳۱");
        test.done();
    },
    testDateRngFmtRangeNextYearLong_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "‏۲۰ نومبر، ۲۰۱۱ – ‏۳۱ جنوری، ۲۰۱۲");
        test.done();
    },
    testDateRngFmtRangeNextYearFull_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "‏۲۰ نومبر، ۲۰۱۱ – ‏۳۱ جنوری، ۲۰۱۲");
        test.done();
    },
    
    testDateRngFmtRangeMultiYearShort_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "‏۱۱‏/۱۱ – ‏۱‏/۱۴");
        test.done();
    },
    testDateRngFmtRangeMultiYearMedium_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "‏۲۰۱۱ نومبر – ‏۲۰۱۴ جنوری");
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "‏نومبر، ۲۰۱۱ – ‏جنوری، ۲۰۱۴");
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "‏نومبر، ۲۰۱۱ – ‏جنوری، ۲۰۱۴");
        test.done();
    },
    testDateRngFmtManyYearsFull_ur_IN: function(test) {
        var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "‏۲۰۱۱ – ۲۰۶۴");
        test.done();
    }
    
};