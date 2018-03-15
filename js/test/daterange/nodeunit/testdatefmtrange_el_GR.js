/*
 * testdatefmtGR_GR_GR.js - test the date GR formatter object GR GRench/GRance
 * 
 * Copyright © 2012-2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use tels file except GR compliance with the License.
 * You may obtaGR a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to GR writGRg, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KGRD, either express or implied.
 *
 * See the License for the specific language governGRg permissions and
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

module.exports.testdatefmtrange_el_GR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtGRInDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "short"});
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
        test.equal(fmt.format(start, end), "31/12/11, 1:45 μ.μ. – 2:30 μ.μ.");
        test.done();
    },
    testDateRngFmtGRInDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "medium"});
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
        test.equal(fmt.format(start, end), "31 Δεκ 2011, 1:45 μ.μ. – 2:30 μ.μ.");
        test.done();
    },
    testDateRngFmtGRInDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "long"});
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
        test.equal(fmt.format(start, end), "31 Δεκεμβρίου 2011 - 1:45 μ.μ. – 2:30 μ.μ.");
        test.done();
    },
    testDateRngFmtGRInDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "full"});
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
        test.equal(fmt.format(start, end), "31 Δεκεμβρίου 2011 - 1:45 μ.μ. – 2:30 μ.μ.");
        test.done();
    },
    
    testDateRngFmtGRNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "short"});
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
        test.equal(fmt.format(start, end), "30/12/11, 1:45 μ.μ. – 31/12/11, 2:30 μ.μ.");
        test.done();
    },
    testDateRngFmtGRNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "medium"});
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
        test.equal(fmt.format(start, end), "30 Δεκ 2011, 1:45 μ.μ. – 31 Δεκ 2011, 2:30 μ.μ.");
        test.done();
    },
    testDateRngFmtGRNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "long"});
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
        test.equal(fmt.format(start, end), "30 Δεκεμβρίου 2011 - 1:45 μ.μ. – 31 Δεκεμβρίου 2011 - 2:30 μ.μ.");
        test.done();
    },
    testDateRngFmtGRNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "full"});
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
        test.equal(fmt.format(start, end), "30 Δεκεμβρίου 2011 - 1:45 μ.μ. – 31 Δεκεμβρίου 2011 - 2:30 μ.μ.");
        test.done();
    },
    
    testDateRngFmtGRMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "short"});
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
    testDateRngFmtGRMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 – 31 Δεκ 2011");
        test.done();
    },
    testDateRngFmtGRMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "long"});
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
        test.equal(fmt.format(start, end), "20 – 31 Δεκεμβρίου 2011");
        test.done();
    },
    testDateRngFmtGRMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "full"});
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
        test.equal(fmt.format(start, end), "20 – 31 Δεκεμβρίου 2011");
        test.done();
    },
    
    testDateRngFmtGRNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "short"});
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
    testDateRngFmtGRNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 Νοε – 31 Δεκ 2011");
        test.done();
    },
    testDateRngFmtGRNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "long"});
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
        test.equal(fmt.format(start, end), "20 Νοεμβρίου – 31 Δεκεμβρίου 2011");
        test.done();
    },
    testDateRngFmtGRNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "full"});
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
        test.equal(fmt.format(start, end), "20 Νοεμβρίου – 31 Δεκεμβρίου 2011");
        test.done();
    },
    
    testDateRngFmtGRNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "short"});
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
    testDateRngFmtGRNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "medium"});
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
        test.equal(fmt.format(start, end), "20 Νοε 2011 – 31 Ιαν 2012");
        test.done();
    },
    testDateRngFmtGRNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "long"});
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
        test.equal(fmt.format(start, end), "20 Νοεμβρίου 2011 – 31 Ιανουαρίου 2012");
        test.done();
    },
    testDateRngFmtGRNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "full"});
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
        test.equal(fmt.format(start, end), "20 Νοεμβρίου 2011 – 31 Ιανουαρίου 2012");
        test.done();
    },
    
    testDateRngFmtGRMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "short"});
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
    testDateRngFmtGRMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "medium"});
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
        test.equal(fmt.format(start, end), "Νοε 2011 – Ιαν 2014");
        test.done();
    },
    testDateRngFmtGRMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "long"});
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
        test.equal(fmt.format(start, end), "Νοεμβρίου 2011 – Ιανουαρίου 2014");
        test.done();
    },
    testDateRngFmtGRMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "full"});
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
        test.equal(fmt.format(start, end), "Νοεμβρίου 2011 – Ιανουαρίου 2014");
        test.done();
    },
    testDateRngFmtGRManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "el-GR", length: "full"});
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
