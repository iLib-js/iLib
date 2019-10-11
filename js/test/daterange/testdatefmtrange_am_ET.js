/*
 * testdatefmtrange_am_ET.js - test the date range formatter object Amharic/Ethiopia
 * 
 * Copyright © 2015-2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use tens file except in compliance with the License.
 * You may obtaiN a copy of the License at
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

if (typeof(EthiopicDate) === "undefined") {
    var EthiopicDate = require("../../lib/EthiopicDate.js");
}
if (typeof(DateRngFmt) === "undefined") {
    var DateRngFmt = require("../../lib/DateRngFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdatefmtrange_am_ET = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtAMRangeInDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "short"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "30/12/2011 1:45 ከምሽቱ – 2:30 ከምሽቱ");
        test.done();
    },
    testDateRngFmtAMRangeInDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "30 ነሐሴ 2011 1:45 ከምሽቱ – 2:30 ከምሽቱ");
        test.done();
    },
    testDateRngFmtAMRangeInDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "long"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "30 ነሐሴ 2011 1:45 ከምሽቱ – 2:30 ከምሽቱ");
        test.done();
    },
    testDateRngFmtAMRangeInDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "30 ነሐሴ 2011 1:45 ከምሽቱ – 2:30 ከምሽቱ");
        test.done();
    },
    
    testDateRngFmtAMRangeNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "short"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "29/12/2011 1:45 ከምሽቱ – 30/12/2011 2:30 ከምሽቱ");
        test.done();
    },
    testDateRngFmtAMRangeNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "29 ነሐሴ 2011 1:45 ከምሽቱ – 30 ነሐሴ 2011 2:30 ከምሽቱ");
        test.done();
    },
    testDateRngFmtAMRangeNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "long"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "29 ነሐሴ 2011 1:45 ከምሽቱ – 30 ነሐሴ 2011 2:30 ከምሽቱ");
        test.done();
    },
    testDateRngFmtAMRangeNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });           
        test.equal(fmt.format(start, end), "29 ነሐሴ 2011 1:45 ከምሽቱ – 30 ነሐሴ 2011 2:30 ከምሽቱ");
        test.done();
    },
    
    testDateRngFmtAMRangeMultiDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "short"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 – 30/12/2011");
        test.done();
    },
    testDateRngFmtAMRangeMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 – 30 ነሐሴ 2011");
        test.done();
    },
    testDateRngFmtAMRangeMultiDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "long"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 – 30 ነሐሴ 2011");
        test.done();
    },
    testDateRngFmtAMRangeMultiDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });           
        test.equal(fmt.format(start, end), "20 – 30 ነሐሴ 2011");
        test.done();
    },
    
    testDateRngFmtAMRangeNextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "short"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20/11 – 30/12/2011");
        test.done();
    },
    testDateRngFmtAMRangeNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 ሐምሌ – 30 ነሐሴ 2011");
        test.done();
    },
    testDateRngFmtAMRangeNextMonthLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "long"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 ሐምሌ – 30 ነሐሴ 2011");
        test.done();
    },
    testDateRngFmtAMRangeNextMonthFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 12,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });           
        test.equal(fmt.format(start, end), "20 ሐምሌ – 30 ነሐሴ 2011");
        test.done();
    },
    
    testDateRngFmtAMRangeNextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "short"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2012,
            month: 1,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20/11/2011 – 30/01/2012");
        test.done();
    },
    testDateRngFmtAMRangeNextYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2012,
            month: 1,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 ሐምሌ 2011 – 30 መስከረም 2012");
        test.done();
    },
    testDateRngFmtAMRangeNextYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "long"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2012,
            month: 1,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 ሐምሌ 2011 – 30 መስከረም 2012");
        test.done();
    },
    testDateRngFmtAMRangeNextYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2012,
            month: 1,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 ሐምሌ 2011 – 30 መስከረም 2012");
        test.done();
    },
    
    testDateRngFmtAMRangeMultiYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "short"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2014,
            month: 1,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "11/2011 – 01/2014");
        test.done();
    },
    testDateRngFmtAMRangeMultiYearMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2014,
            month: 1,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "ሐምሌ 2011 – መስከረም 2014");
        test.done();
    },
    testDateRngFmtAMRangeMultiYearLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "long"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2014,
            month: 1,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "ሐምሌ 2011 – መስከረም 2014");
        test.done();
    },
    testDateRngFmtAMRangeMultiYearFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2014,
            month: 1,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "ሐምሌ 2011 – መስከረም 2014");
        test.done();
    },
    testDateRngFmtAMManyYearsFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2064,
            month: 1,
            day: 30,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "2011 – 2064");
        test.done();
    },
    
    //// Testcase for en-ET //////////////////
    
    testDateRngFmtenETinDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "en-ET", length: "short"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 16,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), '06/20/2011, 1:45 PM – 4:30 PM');
        test.done();
    },
    
    testDateRngFmtenETinDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "en-ET", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 16,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), 'Yekatit 20, 2011, 1:45 PM – 4:30 PM');
        test.done();
    },
    
    testDateRngFmtenETinDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "en-ET", length: "long"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 16,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), 'Yekatit 20, 2011 at 1:45 PM – 4:30 PM');
        test.done();
    },
    
    testDateRngFmtenETinDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "en-ET", length: "full"});
        test.ok(fmt !== null);
        
        var start = new EthiopicDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new EthiopicDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 16,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), 'Yekatit 20, 2011 at 1:45 PM – 4:30 PM');
        test.done();
    }
    
    
};
