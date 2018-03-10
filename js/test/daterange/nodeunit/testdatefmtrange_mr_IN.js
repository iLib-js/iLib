/*
 * testdatefmtrange_mr_IN.js - test the date range formatter object in Marathi/India
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
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testdatefmtrange_mr_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtRangeinDayShort_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "३१/१२/११, १:४५ म.उ. – २:३० म.उ.");
        test.done();
    },
    testDateRngFmtRangeinDayMedium_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "३१ डिसें, २०११, १:४५ म.उ. – २:३० म.उ.");
        test.done();
    },
    testDateRngFmtRangeinDayLong_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "३१ डिसेंबर, २०११ रोजी १:४५ म.उ. – २:३० म.उ.");
        test.done();
    },
    testDateRngFmtRangeinDayFull_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "३१ डिसेंबर, २०११ रोजी १:४५ म.उ. – २:३० म.उ.");
        test.done();
    },
    
    testDateRngFmtRangeNextDayShort_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "३०/१२/११, १:४५ म.उ. – ३१/१२/११, २:३० म.उ.");
        test.done();
    },
    testDateRngFmtRangeNextDayMedium_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "३० डिसें, २०११, १:४५ म.उ. – ३१ डिसें, २०११, २:३० म.उ.");
        test.done();
    },
    testDateRngFmtRangeNextDayLong_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "३० डिसेंबर, २०११ रोजी १:४५ म.उ. – ३१ डिसेंबर, २०११ रोजी २:३० म.उ.");
        test.done();
    },
    testDateRngFmtRangeNextDayFull_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "३० डिसेंबर, २०११ रोजी १:४५ म.उ. – ३१ डिसेंबर, २०११ रोजी २:३० म.उ.");
        test.done();
    },
    
    testDateRngFmtRangeMultiDayShort_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "२० – ३१/१२/११");
        test.done();
    },
    testDateRngFmtRangeMultiDayMedium_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "२० – ३१ डिसें, २०११");
        test.done();
    },
    testDateRngFmtRangeMultiDayLong_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "२० – ३१ डिसेंबर, २०११");
        test.done();
    },
    testDateRngFmtRangeMultiDayFull_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "२० – ३१ डिसेंबर, २०११");
        test.done();
    },
    
    testDateRngFmtRangeNextMonthShort_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "२०/११ – ३१/१२/११");
        test.done();
    },
    testDateRngFmtRangeNextMonthMedium_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "२० नोव्हें – ३१ डिसें, २०११");
        test.done();
    },
    testDateRngFmtRangeNextMonthLong_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "२० नोव्हेंबर – ३१ डिसेंबर, २०११");
        test.done();
    },
    testDateRngFmtRangeNextMonthFull_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "२० नोव्हेंबर – ३१ डिसेंबर, २०११");
        test.done();
    },
    
    testDateRngFmtRangeNextYearShort_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "२०/११/११ – ३१/१/१२");
        test.done();
    },
    testDateRngFmtRangeNextYearMedium_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "२० नोव्हें, २०११ – ३१ जाने, २०१२");
        test.done();
    },
    testDateRngFmtRangeNextYearLong_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "२० नोव्हेंबर, २०११ – ३१ जानेवारी, २०१२");
        test.done();
    },
    testDateRngFmtRangeNextYearFull_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "२० नोव्हेंबर, २०११ – ३१ जानेवारी, २०१२");
        test.done();
    },
    
    testDateRngFmtRangeMultiYearShort_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "short"});
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
        test.equal(fmt.format(start, end), "११/११ – १/१४");
        test.done();
    },
    testDateRngFmtRangeMultiYearMedium_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "medium"});
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
        test.equal(fmt.format(start, end), "नोव्हें, २०११ – जाने, २०१४");
        test.done();
    },
    testDateRngFmtRangeMultiYearLong_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "long"});
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
        test.equal(fmt.format(start, end), "नोव्हेंबर, २०११ – जानेवारी, २०१४");
        test.done();
    },
    testDateRngFmtRangeMultiYearFull_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "नोव्हेंबर, २०११ – जानेवारी, २०१४");
        test.done();
    },
    testDateRngFmtManyYearsFull_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "mr-IN", length: "full"});
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
        test.equal(fmt.format(start, end), "२०११ – २०६४");
        test.done();
    }
    
};
