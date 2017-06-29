/*
 * testethiopicdate.js - test the ethiopic date object
 * 
 * Copyright © 2015,2017, JEDLSoft
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

if (typeof(EthiopicRataDie) === "undefined") {
    var EthiopicRataDie = require("../.././../lib/EthiopicRataDie.js");
}
if (typeof(EthiopicDate) === "undefined") {
    var EthiopicDate = require("../.././../lib/EthiopicDate.js");
}

var testDatesEthiopic = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, -594,  12,    5,   18,   0,      0,      0,           0],
    [1660037.5, -175,  4,     11,  18,   0,      0,      0,           3],
    [1746893.5, 63,    1,     28,  18,   0,      0,      0,           3],
    [1770641.5, 128,   2,     4,   18,   0,      0,      0,           0],
    [1892731.5, 462,   5,     11,  18,   0,      0,      0,           3],
    [1931579.5, 568,   9,     22,  18,   0,      0,      0,           1],
    [1974851.5, 687,   3,     10,  18,   0,      0,      0,           6],
    [2091164.5, 1005,  8,     23,  18,   0,      0,      0,           0],
    [2121509.5, 1088,  9,     22,  18,   0,      0,      0,           0],
    [2155779.5, 1182,  7,     19,  18,   0,      0,      0,           5],
    [2174029.5, 1232,  7,     6,   18,   0,      0,      0,           6],
    [2191584.5, 1280,  7,     29,  18,   0,      0,      0,           5],
    [2195261.5, 1290,  8,     24,  18,   0,      0,      0,           0],
    [2229274.5, 1383,  10,    9,   18,   0,      0,      0,           0],
    [2245580.5, 1428,  5,     28,  18,   0,      0,      0,           3],
    [2266100.5, 1484,  8,     4,   18,   0,      0,      0,           6],
    [2288542.5, 1546,  1,     11,  18,   0,      0,      0,           6],
    [2290901.5, 1552,  6,     28,  18,   0,      0,      0,           6],
    [2323140.5, 1640,  10,    5,   18,   0,      0,      0,           3],
    [2334848.5, 1672,  10,    25,  18,   0,      0,      0,           0],
    [2348020.5, 1708,  11,    18,  18,   0,      0,      0,           5],
    [2366978.5, 1760,  10,    13,  18,   0,      0,      0,           0],
    [2385648.5, 1811,  11,    26,  18,   0,      0,      0,           1],
    [2392825.5, 1831,  7,     18,  18,   0,      0,      0,           3],
    [2416223.5, 1895,  8,     10,  18,   0,      0,      0,           0],
    [2425848.5, 1921,  12,    18,  18,   0,      0,      0,           0],
    [2430266.5, 1934,  1,     18,  18,   0,      0,      0,           1],
    [2430833.5, 1935,  8,     10,  18,   0,      0,      0,           1],
    [2431004.5, 1936,  1,     25,  18,   0,      0,      0,           4],
    [2448698.5, 1984,  7,     7,   18,   0,      0,      0,           2],
    [2450138.5, 1988,  6,     16,  18,   0,      0,      0,           0],
    [2465737.5, 2031,  2,     30,  18,   0,      0,      0,           3],
    [2486076.5, 2086,  11,    10,  18,   0,      0,      0,           0]
];

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testethiopicdate = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testEthiopicRataDieConstructor: function(test) {
        test.expect(1);
        var erd = new EthiopicRataDie();
        
        test.ok(erd !== null);
        test.done();
    },
    
    testEthiopicRataDieConstructorComponents: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            year: 1,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            timezone: "Etc/UTC"
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getRataDie(), 1);
        test.done();
    },
    
    testEthiopicRataDieConstructorComponentsBig: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            year: 2007,
            month: 2,
            day: 19,
            hour: 12,
            minute: 30,
            second: 12,
            millisecond: 0,
            timezone: "Etc/UTC"
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getRataDie(), 732740.5209722222);
        test.done();
    },
    
    testEthiopicRataDieConstructorRD: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            rd: 732323.2342345
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getRataDie(), 732323.2342345);
        test.done();
    },
    
    testEthiopicRataDieConstructorUnixtime: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            unixtime: 0
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getRataDie(), 716367.75);
        test.done();
    },
    
    testEthiopicRataDieConstructorJulianDay: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            julianday: 1724219.75 + 734564 
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getRataDie(), 734564);
        test.done();
    },
    
    testEthiopicRataDieGetJulianDay1: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            julianday: 1724219.75 + 734564 
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getJulianDay(), 1724219.75 + 734564);
        test.done();
    },
    
    testEthiopicRataDieGetJulianDay2: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            unixtime: 0 
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getJulianDay(), 2440587.5);
        test.done();
    },
    
    testEthiopicRataDieGetJulianDay3: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            rd: 0 
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getJulianDay(), 1724219.75);
        test.done();
    },
    
    testEthiopicRataDieGetTime1: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            unixtime: 0 
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getTime(), 0);
        test.done();
    },
    
    testEthiopicRataDieGetTime2: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            julianday: 2440587.5
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getTime(), 0);
        test.done();
    },
    
    testEthiopicRataDieGetTimeTooSmall: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            julianday: 2440586.5
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getTime(), -1);
        test.done();
    },
    
    testEthiopicRataDieGetTimeTooBig: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            julianday: 2465443.634803241
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getTime(), -1);
        test.done();
    },
    
    testEthiopicRataDieGetTimeExtended1: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            unixtime: 0 
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getTimeExtended(), 0);
        test.done();
    },
    
    testEthiopicRataDieGetTimeExtended2: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            julianday: 2440587.5
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getTimeExtended(), 0);
        test.done();
    },
    
    testEthiopicRataDieGetTimeExtendedTooSmallForRegularGetTime: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            julianday: 2440586.5
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getTimeExtended(), -86400000);
        test.done();
    },
    
    testEthiopicRataDieGetTimeExtendedTooBigForRegularGetTime: function(test) {
        test.expect(2);
        var erd = new EthiopicRataDie({
            julianday: 2465443.634803241
        });
        
        test.ok(erd !== null);
        
        test.equal(erd.getTimeExtended(), 2147570047000);
        test.done();
    },
    
    
    testEthiopicDateConstructor: function(test) {
        test.expect(1);
        var ed = new EthiopicDate();
        
        test.ok(ed !== null);
        test.done();
    },
    
    /* ethiopic date is rd 366 + epoch */
    testEthiopicDateConstructorFromJD: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({
            julianday: 1724586.75,
            timezone: "Etc/UTC"
        });
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 2);
        test.equal(ed.getMonths(), 1);
        test.equal(ed.getDays(), 2);
        test.equal(ed.getHours(), 0);
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    testEthiopicDateConstructorUnixTime: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({
            unixtime: 0, // rd = 716367.4166633331
            timezone: "Etc/UTC"
        });
        test.ok(ed !== null);
        
        test.equal(1962, ed.getYears(), "year");
        test.equal(4, ed.getMonths(), "month");
        test.equal(22, ed.getDays(), "day");
        test.equal(18, ed.getHours(), "hour");
        test.equal(0, ed.getMinutes(), "minute");
        test.equal(0, ed.getSeconds(), "second");
        test.equal(0, ed.getMilliseconds(), "millisecond");
        test.done();
    },
    
    testEthiopicDateAfterLeapYear: function(test) {
        test.expect(8);
        // year 3 of every 4 year cycle is a leap year in the ethiopic calendar
        var ed = new EthiopicDate({
            julianday: 1725316.75, // ethiopic epoch + 1 + 2 * 365 + 366
            timezone: "Etc/UTC"
        });
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 4);
        test.equal(ed.getMonths(), 1);
        test.equal(ed.getDays(), 1);
        test.equal(ed.getHours(), 0);
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    // next two test the transition between months at 6am
    testEthiopicDateFirstMonthEndRightBeforeDateChange: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({rd: 733087.9583333333, timezone: "Etc/UTC"});
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 2008); // 2015 Gregorian
        test.equal(ed.getMonths(), 1);   // Oct
        test.equal(ed.getDays(), 30);    // 11
        test.equal(ed.getHours(), 23);   // 6:00am
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    testEthiopicDateSecondMonthStartNoonAfterDateChange: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({rd: 733088.041666667, timezone: "Etc/UTC"});
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 2008); // 2015 Gregorian
        test.equal(ed.getMonths(), 2);   // Oct
        test.equal(ed.getDays(), 1);     // 12
        test.equal(ed.getHours(), 1);    // 8:00am
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    // next two test the year transition from a leap year to a regular year
    testEthiopicDateLastMonthLeapYear: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({rd: 733057, timezone: "Etc/UTC"});
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 2007);
        test.equal(ed.getMonths(), 13);
        test.equal(ed.getDays(), 6);
        test.equal(ed.getHours(), 0);
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    testEthiopicDateFirstMonthAfterLeapYear: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({rd: 733058, timezone: "Etc/UTC"});
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 2008);
        test.equal(ed.getMonths(), 1);
        test.equal(ed.getDays(), 1);
        test.equal(ed.getHours(), 0);
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    // next two test a regular month transition
    testEthiopicDateThirdMonthEnd: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({rd: 733147, timezone: "Etc/UTC"});
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 2008);
        test.equal(ed.getMonths(), 3);
        test.equal(ed.getDays(), 30);
        test.equal(ed.getHours(), 0);
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    testEthiopicDateFourthMonthStart: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({rd: 733148, timezone: "Etc/UTC"});
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 2008);
        test.equal(ed.getMonths(), 4);
        test.equal(ed.getDays(), 1);
        test.equal(ed.getHours(), 0);
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    // next two test a transition from a non-leap year to a non-leap year
    testEthiopicDateLastMonthEndNonLeapYear: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({rd: 733422, timezone: "Etc/UTC"});
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 2008);
        test.equal(ed.getMonths(), 13);
        test.equal(ed.getDays(), 5);
        test.equal(ed.getHours(), 0);
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    testEthiopicDateFirstMonthStartNonLeapYear: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({rd: 733423, timezone: "Etc/UTC"});
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 2009);
        test.equal(ed.getMonths(), 1);
        test.equal(ed.getDays(), 1);
        test.equal(ed.getHours(), 0);
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    testEthiopicDateEndOfYearZeroRd: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 0);
        test.equal(ed.getMonths(), 13);
        test.equal(ed.getDays(), 5);
        test.equal(ed.getHours(), 0);
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    testEthiopicDateBeginningOfYearOneRd: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({rd: 1, timezone: "Etc/UTC"});
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 1);
        test.equal(ed.getMonths(), 1);
        test.equal(ed.getDays(), 1);
        test.equal(ed.getHours(), 0);
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    testEthiopicDateAlmostEndOfYearOneRd: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({rd: 364, timezone: "Etc/UTC"});
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 1);
        test.equal(ed.getMonths(), 13);
        test.equal(ed.getDays(), 4);
        test.equal(ed.getHours(), 0);
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    testEthiopicDateEndOfYearOneRd: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({rd: 365, timezone: "Etc/UTC"});
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 1);
        test.equal(ed.getMonths(), 13);
        test.equal(ed.getDays(), 5);
        test.equal(ed.getHours(), 0);
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    testEthiopicDateBeginningOfYear2Rd: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({rd: 366, timezone: "Etc/UTC"});
        
        test.equal(typeof(ed), 'object');
        test.equal(ed.getYears(), 2);
        test.equal(ed.getMonths(), 1);
        test.equal(ed.getDays(), 1);
        test.equal(ed.getHours(), 0);
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.equal(ed.getMilliseconds(), 0);
        test.done();
    },
    
    testEthiopicDateConvertYears: function(test) {
        var ed;
        
        for (var i = 0; i < testDatesEthiopic.length; i++) {
        // console.log("testing jd=" + testDatesEthiopic[i][0] + " and date of " + JSON.stringify(ed));
            
            ed = new EthiopicDate({
                julianday: testDatesEthiopic[i][0], 
                timezone: "Etc/UTC"
            });
    
            test.equal(typeof(ed), 'object');
            test.equal(ed.getYears(), testDatesEthiopic[i][1]);        
        }
        test.done();
    },
    
    testEthiopicDateConvertMonths: function(test) {
        var ed;
        
        for (var i = 0; i < testDatesEthiopic.length; i++) {
        // console.log("testing jd=" + testDatesEthiopic[i][0] + " and date of " + JSON.stringify(ed));
            
            ed = new EthiopicDate({
                julianday: testDatesEthiopic[i][0], 
                timezone: "Etc/UTC"
            });
       
            test.equal(typeof(ed), 'object');
            test.equal(ed.getMonths(), testDatesEthiopic[i][2]);        
        }
        test.done();
    },
    
    testEthiopicDateConvertDays: function(test) {
        var ed;
        
        for (var i = 0; i < testDatesEthiopic.length; i++) {
        // console.log("testing jd=" + testDatesEthiopic[i][0] + " and date of " + JSON.stringify(ed));
            ed = new EthiopicDate({
                julianday: testDatesEthiopic[i][0], 
                timezone: "Etc/UTC"
            });
            
            test.equal(typeof(ed), 'object');
            test.equal(ed.getDays(), testDatesEthiopic[i][3]);
        }
        test.done();
    },
    
    testEthiopicDateConvertHours: function(test) {
        var ed;
        
        for (var i = 0; i < testDatesEthiopic.length; i++) {
        // console.log("testing jd=" + testDatesEthiopic[i][0] + " and date of " + JSON.stringify(ed));
            
            ed = new EthiopicDate({
                julianday: testDatesEthiopic[i][0], 
                timezone: "Etc/UTC"
            });
    
            test.equal(typeof(ed), 'object');
            test.equal(ed.getHours(), testDatesEthiopic[i][4]);
        }
        test.done();
    },
    
    testEthiopicDateConvertDayOfWeek: function(test) {
        var ed;
        
        for (var i = 0; i < testDatesEthiopic.length; i++) {
        // console.log("testing jd=" + testDatesEthiopic[i][0] + " and date of " + JSON.stringify(ed));
            
            ed = new EthiopicDate({
                julianday: testDatesEthiopic[i][0], 
                timezone: "Etc/UTC"
            });
    
            test.equal(typeof(ed), 'object');
            test.equal(ed.getDayOfWeek(), testDatesEthiopic[i][8]);
        }
        test.done();
    },
    
    testEthiopicDateConvertOther: function(test) {
        var ed;
        
        for (var i = 0; i < testDatesEthiopic.length; i++) {
        // console.log("testing jd=" + testDatesEthiopic[i][0] + " and date of " + JSON.stringify(ed));
            
            ed = new EthiopicDate({
                julianday: testDatesEthiopic[i][0], 
                timezone: "Etc/UTC"
            });
    
            test.equal(typeof(ed), 'object');
            test.equal(ed.getMinutes(), testDatesEthiopic[i][5]);
            test.equal(ed.getSeconds(), testDatesEthiopic[i][6]);
            test.equal(ed.getMilliseconds(), testDatesEthiopic[i][7]);
        }
        test.done();
    },
    
    testEthiopicDateConstructorFull: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({
            year: 2011,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        
        test.ok(ed !== null);
        
        test.equal(ed.getYears(), 2011);
        test.equal(ed.getMonths(), 9);
        test.equal(ed.getDays(), 23);
        test.equal(ed.getHours(), 16);
        test.equal(ed.getMinutes(), 7);
        test.equal(ed.getSeconds(), 12);
        test.equal(ed.getMilliseconds(), 123);
        test.done();
    },
    
    testEthiopicDateConstructorFullWithStrings: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({
            year: "2011", 
            month: "9",
            day: "23", 
            hour: "16", 
            minute: "7", 
            second: "12", 
            millisecond: "123",
            timezone: "Etc/UTC"
        });
        
        test.ok(ed !== null);
        
        test.equal(ed.getYears(), 2011);
        test.equal(ed.getMonths(), 9);
        test.equal(ed.getDays(), 23);
        test.equal(ed.getHours(), 16);
        test.equal(ed.getMinutes(), 7);
        test.equal(ed.getSeconds(), 12);
        test.equal(ed.getMilliseconds(), 123);
        test.done();
    },
    
    testEthiopicDateConstructorCopy: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({
            year: 2011, 
            month: 9, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        
        test.ok(ed !== null);
        
        test.equal(ed.getYears(), 2011);
        test.equal(ed.getMonths(), 9);
        test.equal(ed.getDays(), 23);
        test.equal(ed.getHours(), 16);
        test.equal(ed.getMinutes(), 7);
        test.equal(ed.getSeconds(), 12);
        test.equal(ed.getMilliseconds(), 123);
        test.done();
    },
    
    testEthiopicDateGetJulianDay: function(test) {
        var ed;
        
        for (var i = 0; i < testDatesEthiopic.length; i++) {
        // console.log("testing jd=" + testDatesEthiopic[i][0] + " and date " + JSON.stringify(ed));
            
            ed = new EthiopicDate({
                year: testDatesEthiopic[i][1], 
                month: testDatesEthiopic[i][2], 
                day: testDatesEthiopic[i][3],
                hour: testDatesEthiopic[i][4],
                minute: testDatesEthiopic[i][5],
                second: testDatesEthiopic[i][6],
                millisecond: testDatesEthiopic[i][7],
                timezone: "Etc/UTC"
            });
        
            test.equal(typeof(ed), 'object');
        // console.log("calculated julian day is " + ed.getJulianDay());
            test.equal(ed.getJulianDay(), testDatesEthiopic[i][0]);
            test.equal(ed.getDayOfWeek(), testDatesEthiopic[i][8]);
        }
        test.done();
    },
    
    testEthiopicDateSetYears: function(test) {
        test.expect(2);
        var ed = new EthiopicDate();
        
        test.ok(ed !== null);
        
        ed.setYears(123);
        
        test.equal(ed.getYears(), 123);
        test.done();
    },
    
    testEthiopicDateSetMonths: function(test) {
        test.expect(2);
        var ed = new EthiopicDate();
        
        test.ok(ed !== null);
        
        ed.setMonths(7);
        
        test.equal(ed.getMonths(), 7);
        test.done();
    },
    
    testEthiopicDateSetDays: function(test) {
        test.expect(2);
        var ed = new EthiopicDate();
        
        test.ok(ed !== null);
        
        ed.setDays(12);
        
        test.equal(ed.getDays(), 12);
        test.done();
    },
    
    testEthiopicDateSetHours: function(test) {
        test.expect(2);
        var ed = new EthiopicDate();
        
        test.ok(ed !== null);
        
        ed.setHours(12);
        
        test.equal(ed.getHours(), 12);
        test.done();
    },
    
    testEthiopicDateSetMinutes: function(test) {
        test.expect(2);
        var ed = new EthiopicDate();
        
        test.ok(ed !== null);
        
        ed.setMinutes(13);
        
        test.equal(ed.getMinutes(), 13);
        test.done();
    },
    
    testEthiopicDateSetSeconds: function(test) {
        test.expect(2);
        var ed = new EthiopicDate();
        
        test.ok(ed !== null);
        
        ed.setSeconds(23);
        
        test.equal(ed.getSeconds(), 23);
        test.done();
    },
    
    testEthiopicDateSetMilliseconds: function(test) {
        test.expect(2);
        var ed = new EthiopicDate();
        
        test.ok(ed !== null);
        
        ed.setMilliseconds(123);
        
        test.equal(ed.getMilliseconds(), 123);
        test.done();
    },
    
    testEthiopicDateTestGetTimeZero: function(test) {
        test.expect(2);
        var ed = new EthiopicDate({
            year: 1962,
            month: 4,
            day: 22,
            hour: 18,
            timezone: "Etc/UTC"
        });
        test.ok(ed !== null);
     
        test.equal(ed.getTime(), 0);
        test.done();
    },
    
    testEthiopicDateTestGetTime: function(test) {
        test.expect(2);
        var ed = new EthiopicDate({
            year: 1962,
            month: 4,
            day: 22,
            hour: 21,       // 21:30 ethiopic time = 3:30am gregorian time
            minute: 30,
            timezone: "Etc/UTC"
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTime(), 12600000);
        test.done();
    },
    
    testEthiopicDateTestGetTimeTooEarly: function(test) {
        test.expect(2);
        var ed = new EthiopicDate({
            year: 1962,
            month: 4,
            day: 22,
            hour: 16,
            timezone: "Etc/UTC"
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTime(), -1);
        test.done();
    },
    
    testEthiopicDateTestGetTimeTooLate: function(test) {
        test.expect(2);
        // 1 second too late for regular unix time. This is Jan 19, 2038 Gregorian at 3:14:08am UTC
        var ed = new EthiopicDate({
            year: 2030,
            month: 5,
            day: 10,
            hour: 21,
            minute: 14,
            second: 8,
            timezone: "Etc/UTC"
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTime(), -1);
        test.done();
    },
    
    testEthiopicDateTestGetTimeExtendedNotTooLate: function(test) {
        test.expect(2);
        // 1 second too late for regular unix time, but not for extended time. This is Jan 19, 2038 Gregorian at 3:14:08am UTC
        var ed = new EthiopicDate({
            year: 2030,
            month: 5,
            day: 10,
            hour: 21,
            minute: 14,
            second: 8,
            timezone: "Etc/UTC"
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTimeExtended(), 2147483648000);
        test.done();
    },
    
    testEthiopicDateTestSetTime1: function(test) {
        test.expect(8);
        var ed = new EthiopicDate({
            year: 1962,
            month: 4,
            day: 22,
            hour: 18,
            timezone: "Etc/UTC"
        });
        test.ok(ed !== null);
        test.equal(ed.getTime(), 0);
        
        ed.setTime(86400000*3 + 3600000*8 + 60000*30 + 3000);
        
        test.equal(ed.getYears(), 1962);
        test.equal(ed.getMonths(), 4);
        test.equal(ed.getDays(), 26);
        test.equal(ed.getHours(), 2);
        test.equal(ed.getMinutes(), 30);
        test.equal(ed.getSeconds(), 3);
        test.done();
    },
    
    testEthiopicDateTestSetTimeZero: function(test) {
        test.expect(7);
        var ed = new EthiopicDate({
            timezone: "Etc/UTC",
            year: 0, 
            month: 1, 
            day: 1,
            hour: 1,
            minute: 1,
            second: 1,
            millisecond: 1
        });
        test.ok(ed !== null);
        
        ed.setTime(0);
        
        test.equal(ed.getYears(), 1962);
        test.equal(ed.getMonths(), 4);
        test.equal(ed.getDays(), 22);
        test.equal(ed.getHours(), 18);
        test.equal(ed.getMinutes(), 0);
        test.equal(ed.getSeconds(), 0);
        test.done();
    },
    
    testEthiopicDateGetTimeZone: function(test) {
        test.expect(2);
        var ed = new EthiopicDate({
            year: 2011, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTimeZone(), "America/Los_Angeles");
        test.done();
    },
    
    testEthiopicDateGetTimeZoneDefault: function(test) {
        test.expect(2);
        var ed = new EthiopicDate({
            year: 2011, 
            month: 3, 
            day: 8
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTimeZone(), "local");
        test.done();
    },
    
    testEthiopicDateGetTimeZoneByLocaleDE: function(test) {
        test.expect(2);
        var ed = new EthiopicDate({
            year: 2011, 
            month: 3, 
            day: 8,
            locale: "de-DE"
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTimeZone(), "Europe/Berlin");
        test.done();
    },
    
    testEthiopicDateGetTimeZoneByLocaleJP: function(test) {
        test.expect(2);
        var ed = new EthiopicDate({
            year: 2011, 
            month: 3, 
            day: 8,
            locale: "ja-JP"
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTimeZone(), "Asia/Tokyo");
        test.done();
    },
    
    testEthiopicDateGetTimeZoneByLocaleBogus: function(test) {
        test.expect(2);
        var ed = new EthiopicDate({
            year: 2011, 
            month: 3, 
            day: 8,
            locale: "zz-ZZ"
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTimeZone(), "Etc/UTC");
        test.done();
    },
    
    testEthiopicDateCurrentTimeWithTimeZone: function(test) {
        test.expect(2);
        var ed = new EthiopicDate({
            timezone: "America/Los_Angeles"
        });
        var d = new Date();
        test.ok(ed !== null);
        
        test.roughlyEqual(50, ed.getTime(), d.getTime());
        test.done();
    },
    
    testEthiopicDateSetTimeZone: function(test) {
        test.expect(3);
        var ed = new EthiopicDate({
            year: 2011, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTimeZone(), "America/Los_Angeles");
        
        ed.setTimeZone("Asia/Tokyo");
        
        test.equal(ed.getTimeZone(), "Asia/Tokyo");
        test.done();
    },
    
    testEthiopicDateSetTimeZoneNotString: function(test) {
        test.expect(3);
        var ed = new EthiopicDate({
            year: 2011, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTimeZone(), "America/Los_Angeles");
        
        ed.setTimeZone(345);
        
        test.equal(ed.getTimeZone(), "America/Los_Angeles");
        test.done();
    },
    
    testEthiopicDateSetTimeZoneUndefined: function(test) {
        test.expect(3);
        var ed = new EthiopicDate({
            year: 2011, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTimeZone(), "America/Los_Angeles");
    
        // clears it out
        ed.setTimeZone(undefined);
        
        test.equal(ed.getTimeZone(), "local");
        test.done();
    },
    
    testEthiopicDateSetTimeZoneEmpty: function(test) {
        test.expect(3);
        var ed = new EthiopicDate({
            year: 2011, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTimeZone(), "America/Los_Angeles");
        
        // clears it out
        ed.setTimeZone("");
        
        test.equal(ed.getTimeZone(), "local");
        test.done();
    },
    
    testEthiopicDateInitWithUnixTimeRightTimeZone: function(test) {
        test.expect(2);
        var ed = new EthiopicDate({
            unixtime: 0
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTimeZone(), "local");
        test.done();
    },
    
    testEthiopicDateInitWithJDRightTimeZone: function(test) {
        test.expect(2);
        var ed = new EthiopicDate({
            julianday: 0
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTimeZone(), "local");
        test.done();
    },
    
    testEthiopicDateInitWithRDRightTimeZone: function(test) {
        test.expect(2);
        var ed = new EthiopicDate({
            rd: 0
        });
        test.ok(ed !== null);
        
        test.equal(ed.getTimeZone(), "local");
        test.done();
    },
    
    testEthiopicDateRoundTripConstruction: function(test) {
        test.expect(8);
        var jd = new EthiopicDate({
            year: 2014,
            month: 10,
            day: 20,
            timezone: "local"
        });
        test.ok(jd !== null);
        // console.log("jd is " + JSON.stringify(jd, undefined, 4));
        
        var u = jd.getTime();
        // console.log("unixtime is " + u);
        var jd2 = new EthiopicDate({
            unixtime: u,
            timezone: "local"
        });
        // console.log("jd2 is " + JSON.stringify(jd2, undefined, 4));
        test.equal(jd2.getTimeZone(), jd.getTimeZone());
        test.equal(jd2.getYears(), jd.getYears());
        test.equal(jd2.getMonths(), jd.getMonths());
        test.equal(jd2.getDays(), jd.getDays());
        test.equal(jd2.getHours(), jd.getHours());
        test.equal(jd2.getMinutes(), jd.getMinutes());
        test.equal(jd2.getSeconds(), jd.getSeconds());
        test.done();
    },
    
    testEthiopicDateRoundTripConstruction2: function(test) {
        test.expect(8);
        var jd = new EthiopicDate({
            year: 2014,
            month: 10,
            day: 20,
            timezone: "America/Los_Angeles"
        });
        test.ok(jd !== null);
        // console.log("jd is " + JSON.stringify(jd, undefined, 4));
        
        var u = jd.getTime();
        // console.log("unixtime is " + u);
        var jd2 = new EthiopicDate({
            unixtime: u,
            timezone: "America/Los_Angeles"
        });
        // console.log("jd2 is " + JSON.stringify(jd2, undefined, 4));
        test.equal(jd2.getTimeZone(), jd.getTimeZone());
        test.equal(jd2.getYears(), jd.getYears());
        test.equal(jd2.getMonths(), jd.getMonths());
        test.equal(jd2.getDays(), jd.getDays());
        test.equal(jd2.getHours(), jd.getHours());
        test.equal(jd2.getMinutes(), jd.getMinutes());
        test.equal(jd2.getSeconds(), jd.getSeconds());
        test.done();
    }
    
};