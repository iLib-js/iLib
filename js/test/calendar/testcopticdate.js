/*
 * testcopticdate.js - test the coptic date object
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}
if (typeof(CopticRataDie) === "undefined") {
    var CopticRataDie = require("../../lib/CopticRataDie.js");
}
if (typeof(CopticDate) === "undefined") {
    var CopticDate = require("../../lib/CopticDate.js");
}

var testDatesCoptic = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, -870,      12,    6,    0,    0,    0,    0,    0],
    [1660037.5, -451,      4,    12,    0,    0,    0,    0,    3],
    [1746893.5, -213,      1,    29,    0,    0,    0,    0,    3],
    [1770641.5, -148,      2,    5,    0,    0,    0,    0,    0],
    [1892731.5, 186,      5,    12,    0,    0,    0,    0,    3],
    [1931579.5, 292,      9,    23,    0,    0,    0,    0,    1],
    [1974851.5, 411,      3,    11,    0,    0,    0,    0,    6],
    [2091164.5, 729,      8,    24,    0,    0,    0,    0,    0],
    [2121509.5, 812,      9,    23,    0,    0,    0,    0,    0],
    [2155779.5, 906,      7,    20,    0,    0,    0,    0,    5],
    [2174029.5, 956,      7,    7,    0,    0,    0,    0,    6],
    [2191584.5, 1004,      7,    30,    0,    0,    0,    0,    5],
    [2195261.5, 1014,      8,    25,    0,    0,    0,    0,    0],
    [2229274.5, 1107,      10,    10,    0,    0,    0,    0,    0],
    [2245580.5, 1152,      5,    29,    0,    0,    0,    0,    3],
    [2266100.5, 1208,      8,    5,    0,    0,    0,    0,    6],
    [2288542.5, 1270,      1,    12,    0,    0,    0,    0,    6],
    [2290901.5, 1276,      6,    29,    0,    0,    0,    0,    6],
    [2323140.5, 1364,      10,    6,    0,    0,    0,    0,    3],
    [2334848.5, 1396,      10,    26,    0,    0,    0,    0,    0],
    [2348020.5, 1432,      11,    19,    0,    0,    0,    0,    5],
    [2366978.5, 1484,      10,    14,    0,    0,    0,    0,    0],
    [2385648.5, 1535,      11,    27,    0,    0,    0,    0,    1],
    [2392825.5, 1555,      7,    19,    0,    0,    0,    0,    3],
    [2416223.5, 1619,      8,    11,    0,    0,    0,    0,    0],
    [2425848.5, 1645,      12,    19,    0,    0,    0,    0,    0],
    [2430266.5, 1658,      1,    19,    0,    0,    0,    0,    1],
    [2430833.5, 1659,      8,    11,    0,    0,    0,    0,    1],
    [2431004.5, 1660,      1,    26,    0,    0,    0,    0,    4],
    [2448698.5, 1708,      7,    8,    0,    0,    0,    0,    2],
    [2450138.5, 1712,      6,    17,    0,    0,    0,    0,    0],
    [2465737.5, 1755,      3,    1,    0,    0,    0,    0,    3],
    [2486076.5, 1810,      11,    11,    0,    0,    0,    0,    0]
];

module.exports.testcopticdate = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCopticRataDieConstructor: function(test) {
        test.expect(1);
        var crd = new CopticRataDie();
        
        test.ok(crd !== null);
        test.done();
    },
    
    testCopticRataDieConstructorComponents: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            year: 1,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            timezone: "Etc/UTC"
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getRataDie(), 1);
        test.done();
    },
    
    testCopticRataDieConstructorComponentsBig: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            year: 1731,
            month: 2,
            day: 19,
            hour: 12,
            minute: 30,
            second: 12,
            millisecond: 0,
            timezone: "Etc/UTC"
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getRataDie(), 631931.5209722222);
        test.done();
    },
    
    testCopticRataDieConstructorRD: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            rd: 732323.2342345
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getRataDie(), 732323.2342345);
        test.done();
    },
    
    testCopticRataDieConstructorUnixtime: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            unixtime: 0
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getRataDie(), 615559);
        test.done();
    },
    
    testCopticRataDieConstructorJD: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            julianday: 1825028.5 + 734564 
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getRataDie(), 734564);
        test.done();
    },
    
    testCopticRataDieGetJulianDay1: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            julianday: 1825028.5 + 734564 
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getJulianDay(), 1825028.5 + 734564);
        test.done();
    },
    
    testCopticRataDieGetJulianDay2: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            unixtime: 0 
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getJulianDay(), 2440587.5);
        test.done();
    },
    
    testCopticRataDieGetJulianDay3: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            rd: 0 
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getJulianDay(), 1825028.5);
        test.done();
    },
    
    testCopticRataDieGetTime1: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            unixtime: 0 
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getTime(), 0);
        test.done();
    },
    
    testCopticRataDieGetTime2: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            julianday: 2440587.5
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getTime(), 0);
        test.done();
    },
    
    testCopticRataDieGetTimeTooSmall: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            julianday: 2440586.5
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getTime(), -1);
        test.done();
    },
    
    testCopticRataDieGetTimeTooBig: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            julianday: 2465443.634803241
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getTime(), -1);
        test.done();
    },
    
    testCopticRataDieGetTimeExtended1: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            unixtime: 0 
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getTimeExtended(), 0);
        test.done();
    },
    
    testCopticRataDieGetTimeExtended2: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            julianday: 2440587.5
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getTimeExtended(), 0);
        test.done();
    },
    
    testCopticRataDieGetTimeExtendedTooSmallForRegularGetTime: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            julianday: 2440586.5
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getTimeExtended(), -86400000);
        test.done();
    },
    
    testCopticRataDieGetTimeExtendedTooBigForRegularGetTime: function(test) {
        test.expect(2);
        var crd = new CopticRataDie({
            julianday: 2465443.634803241
        });
        
        test.ok(crd !== null);
        
        test.equal(crd.getTimeExtended(), 2147570047000);
        test.done();
    },
    
    
    testCopticDateConstructor: function(test) {
        test.expect(1);
        var cd = new CopticDate();
        
        test.ok(cd !== null);
        test.done();
    },
    
    /* Coptic date is rd 367 + epoch */
    testCopticDateConstructorFromJD: function(test) {
        test.expect(8);
        var cd = new CopticDate({
            julianday: 1825395.5,
            timezone: "Etc/UTC"
        });
        
        //console.log("testCopticDateConstructorFromJD: " + JSON.stringify(cd, undefined, 4));
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 2);
        test.equal(cd.getMonths(), 1);
        test.equal(cd.getDays(), 2);
        test.equal(cd.getHours(), 0);
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    testCopticDateConstructorUnixTime: function(test) {
        test.expect(8);
        var cd = new CopticDate({
            unixtime: 0,
            timezone: "Etc/UTC"
        });
        test.ok(cd !== null);
        
        test.equal(1686, cd.getYears(), "year");
        test.equal(4, cd.getMonths(), "month");
        test.equal(23, cd.getDays(), "day");
        test.equal(0, cd.getHours(), "hour");
        test.equal(0, cd.getMinutes(), "minute");
        test.equal(0, cd.getSeconds(), "second");
        test.equal(0, cd.getMilliseconds(), "millisecond");
        test.done();
    },
    
    testCopticDateAfterLeapYear: function(test) {
        test.expect(8);
        // year 3 of every 4 year cycle is a leap year in the Coptic calendar
        var cd = new CopticDate({
            julianday: 1826125.5, // Coptic epoch + 1 + 2 * 365 + 366
            timezone: "Etc/UTC"
        });
        
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 4);
        test.equal(cd.getMonths(), 1);
        test.equal(cd.getDays(), 1);
        test.equal(cd.getHours(), 0);
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    // next two test the transition between months at 6am
    testCopticDateFirstMonthEndRightBeforeDateChange: function(test) {
        test.expect(8);
        var cd = new CopticDate({rd: 632263.9583333333, timezone: "Etc/UTC"});
        
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 1732); // 2015 Gregorian
        test.equal(cd.getMonths(), 1);   // Sept
        test.equal(cd.getDays(), 15);    // 27
        test.equal(cd.getHours(), 23);   // 6am
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    testCopticDateSecondMonthStartNoonAfterDateChange: function(test) {
        test.expect(8);
        var cd = new CopticDate({rd: 632265.2083333333, timezone: "Etc/UTC"});
        
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 1732); // 2015 Gregorian
        test.equal(cd.getMonths(), 1);   // Sept
        test.equal(cd.getDays(), 17);    // 28
        test.equal(cd.getHours(), 5);    // 12:00pm
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    // next two test the year transition from a leap year to a regular year
    testCopticDateLastMonthLeapYear: function(test) {
        test.expect(8);
        var cd = new CopticDate({rd: 632245, timezone: "Etc/UTC"});
        
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 1731);
        test.equal(cd.getMonths(), 13);
        test.equal(cd.getDays(), 3);
        test.equal(cd.getHours(), 0);
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    testCopticDateFirstMonthAfterLeapYear: function(test) {
        test.expect(8);
        var cd = new CopticDate({rd: 632246, timezone: "Etc/UTC"});
        
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 1731);
        test.equal(cd.getMonths(), 13);
        test.equal(cd.getDays(), 4);
        test.equal(cd.getHours(), 0);
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    // next two test a regular month transition
    testCopticDateThirdMonthEnd: function(test) {
        test.expect(8);
        var cd = new CopticDate({rd: 632335, timezone: "Etc/UTC"});
        
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 1732);
        test.equal(cd.getMonths(), 3);
        test.equal(cd.getDays(), 27);
        test.equal(cd.getHours(), 0);
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    testCopticDateFourthMonthStart: function(test) {
        test.expect(8);
        var cd = new CopticDate({rd: 632336, timezone: "Etc/UTC"});
        
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 1732);
        test.equal(cd.getMonths(), 3);
        test.equal(cd.getDays(), 28);
        test.equal(cd.getHours(), 0);
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    // next two test a transition from a non-leap year to a non-leap year
    testCopticDateLastMonthEndNonLeapYear: function(test) {
        test.expect(8);
        var cd = new CopticDate({rd: 632610, timezone: "Etc/UTC"});
        
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 1732);
        test.equal(cd.getMonths(), 13);
        test.equal(cd.getDays(), 2);
        test.equal(cd.getHours(), 0);
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    testCopticDateFirstMonthStartNonLeapYear: function(test) {
        test.expect(8);
        var cd = new CopticDate({rd: 632611, timezone: "Etc/UTC"});
        
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 1732);
        test.equal(cd.getMonths(), 13);
        test.equal(cd.getDays(), 3);
        test.equal(cd.getHours(), 0);
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    testCopticDateEndOfYearZeroRd: function(test) {
        test.expect(8);
        var cd = new CopticDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 0);
        test.equal(cd.getMonths(), 13);
        test.equal(cd.getDays(), 5);
        test.equal(cd.getHours(), 0);
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    testCopticDateBeginningOfYearOneRd: function(test) {
        test.expect(8);
        var cd = new CopticDate({rd: 1, timezone: "Etc/UTC"});
        
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 1);
        test.equal(cd.getMonths(), 1);
        test.equal(cd.getDays(), 1);
        test.equal(cd.getHours(), 0);
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    testCopticDateAlmostEndOfYearOneRd: function(test) {
        test.expect(8);
        var cd = new CopticDate({rd: 364, timezone: "Etc/UTC"});
        
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 1);
        test.equal(cd.getMonths(), 13);
        test.equal(cd.getDays(), 4);
        test.equal(cd.getHours(), 0);
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    testCopticDateEndOfYearOneRd: function(test) {
        test.expect(8);
        var cd = new CopticDate({rd: 365, timezone: "Etc/UTC"});
        
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 1);
        test.equal(cd.getMonths(), 13);
        test.equal(cd.getDays(), 5);
        test.equal(cd.getHours(), 0);
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    testCopticDateBeginningOfYear2Rd: function(test) {
        test.expect(8);
        var cd = new CopticDate({rd: 366, timezone: "Etc/UTC"});
        
        test.equal(typeof(cd), 'object');
        test.equal(cd.getYears(), 2);
        test.equal(cd.getMonths(), 1);
        test.equal(cd.getDays(), 1);
        test.equal(cd.getHours(), 0);
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.equal(cd.getMilliseconds(), 0);
        test.done();
    },
    
    testCopticDateConvertYears: function(test) {
        var cd;
        
        for (var i = 0; i < testDatesCoptic.length; i++) {
            // console.log("testing jd=" + testDatesCoptic[i][0] + " and date of " + JSON.stringify(cd));
            
            cd = new CopticDate({
                julianday: testDatesCoptic[i][0], 
                timezone: "Etc/UTC"
            });
    
            test.equal(typeof(cd), 'object');
            test.equal(cd.getYears(), testDatesCoptic[i][1]);        
        }
        test.done();
    },
    
    testCopticDateConvertMonths: function(test) {
        var cd;
        
        for (var i = 0; i < testDatesCoptic.length; i++) {
            // console.log("testing jd=" + testDatesCoptic[i][0] + " and date of " + JSON.stringify(cd));
            
            cd = new CopticDate({
                julianday: testDatesCoptic[i][0], 
                timezone: "Etc/UTC"
            });
       
            test.equal(typeof(cd), 'object');
            test.equal(cd.getMonths(), testDatesCoptic[i][2]);        
        }
        test.done();
    },
    
    testCopticDateConvertDays: function(test) {
        var cd;
        
        for (var i = 0; i < testDatesCoptic.length; i++) {
            // console.log("testing jd=" + testDatesCoptic[i][0] + " and date of " + JSON.stringify(cd));
            cd = new CopticDate({
                julianday: testDatesCoptic[i][0], 
                timezone: "Etc/UTC"
            });
            
            test.equal(typeof(cd), 'object');
            test.equal(cd.getDays(), testDatesCoptic[i][3]);
        }
        test.done();
    },
    
    testCopticDateConvertHours: function(test) {
        var cd;
        
        for (var i = 0; i < testDatesCoptic.length; i++) {
            // console.log("testing jd=" + testDatesCoptic[i][0] + " and date of " + JSON.stringify(cd));
            
            cd = new CopticDate({
                julianday: testDatesCoptic[i][0], 
                timezone: "Etc/UTC"
            });
    
            test.equal(typeof(cd), 'object');
            test.equal(cd.getHours(), testDatesCoptic[i][4]);
        }
        test.done();
    },
    
    testCopticDateConvertDayOfWeek: function(test) {
        var cd;
        
        for (var i = 0; i < testDatesCoptic.length; i++) {
            // console.log("testing jd=" + testDatesCoptic[i][0] + " and date of " + JSON.stringify(cd));
            
            cd = new CopticDate({
                julianday: testDatesCoptic[i][0], 
                timezone: "Etc/UTC"
            });
    
            test.equal(typeof(cd), 'object');
            test.equal(cd.getDayOfWeek(), testDatesCoptic[i][8]);
        }
        test.done();
    },
    
    testCopticDateConvertOther: function(test) {
        var cd;
        
        for (var i = 0; i < testDatesCoptic.length; i++) {
            // console.log("testing jd=" + testDatesCoptic[i][0] + " and date of " + JSON.stringify(cd));
            
            cd = new CopticDate({
                julianday: testDatesCoptic[i][0], 
                timezone: "Etc/UTC"
            });
    
            test.equal(typeof(cd), 'object');
            test.equal(cd.getMinutes(), testDatesCoptic[i][5]);
            test.equal(cd.getSeconds(), testDatesCoptic[i][6]);
            test.equal(cd.getMilliseconds(), testDatesCoptic[i][7]);
        }
        test.done();
    },
    
    testCopticDateConstructorFull: function(test) {
        test.expect(8);
        var cd = new CopticDate({
            year: 1735,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        
        test.ok(cd !== null);
        
        test.equal(cd.getYears(), 1735);
        test.equal(cd.getMonths(), 9);
        test.equal(cd.getDays(), 23);
        test.equal(cd.getHours(), 16);
        test.equal(cd.getMinutes(), 7);
        test.equal(cd.getSeconds(), 12);
        test.equal(cd.getMilliseconds(), 123);
        test.done();
    },
    
    testCopticDateConstructorFullWithStrings: function(test) {
        test.expect(8);
        var cd = new CopticDate({
            year: "1735", 
            month: "9",
            day: "23", 
            hour: "16", 
            minute: "7", 
            second: "12", 
            millisecond: "123",
            timezone: "Etc/UTC"
        });
        
        test.ok(cd !== null);
        
        test.equal(cd.getYears(), 1735);
        test.equal(cd.getMonths(), 9);
        test.equal(cd.getDays(), 23);
        test.equal(cd.getHours(), 16);
        test.equal(cd.getMinutes(), 7);
        test.equal(cd.getSeconds(), 12);
        test.equal(cd.getMilliseconds(), 123);
        test.done();
    },
    
    testCopticDateConstructorCopy: function(test) {
        test.expect(8);
        var cd = new CopticDate({
            year: 1735, 
            month: 9, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        
        test.ok(cd !== null);
        
        test.equal(cd.getYears(), 1735);
        test.equal(cd.getMonths(), 9);
        test.equal(cd.getDays(), 23);
        test.equal(cd.getHours(), 16);
        test.equal(cd.getMinutes(), 7);
        test.equal(cd.getSeconds(), 12);
        test.equal(cd.getMilliseconds(), 123);
        test.done();
    },
    
    testCopticDateGetJulianDay: function(test) {
        var cd;
        
        for (var i = 0; i < testDatesCoptic.length; i++) {
            // console.log("testing jd=" + testDatesCoptic[i][0] + " and date " + JSON.stringify(cd));
            
            cd = new CopticDate({
                year: testDatesCoptic[i][1], 
                month: testDatesCoptic[i][2], 
                day: testDatesCoptic[i][3],
                hour: testDatesCoptic[i][4],
                minute: testDatesCoptic[i][5],
                second: testDatesCoptic[i][6],
                millisecond: testDatesCoptic[i][7],
                timezone: "Etc/UTC"
            });
        
            test.equal(typeof(cd), 'object');
            // console.log("calculated julian day is " + cd.getJulianDay());
            test.equal(cd.getJulianDay(), testDatesCoptic[i][0]);
            test.equal(cd.getDayOfWeek(), testDatesCoptic[i][8]);
        }
        test.done();
    },
    
    testCopticDateSetYears: function(test) {
        test.expect(2);
        var cd = new CopticDate();
        
        test.ok(cd !== null);
        
        cd.setYears(123);
        
        test.equal(cd.getYears(), 123);
        test.done();
    },
    
    testCopticDateSetMonths: function(test) {
        test.expect(2);
        var cd = new CopticDate();
        
        test.ok(cd !== null);
        
        cd.setMonths(7);
        
        test.equal(cd.getMonths(), 7);
        test.done();
    },
    
    testCopticDateSetDays: function(test) {
        test.expect(2);
        var cd = new CopticDate();
        
        test.ok(cd !== null);
        
        cd.setDays(12);
        
        test.equal(cd.getDays(), 12);
        test.done();
    },
    
    testCopticDateSetHours: function(test) {
        test.expect(2);
        var cd = new CopticDate();
        
        test.ok(cd !== null);
        
        cd.setHours(12);
        
        test.equal(cd.getHours(), 12);
        test.done();
    },
    
    testCopticDateSetMinutes: function(test) {
        test.expect(2);
        var cd = new CopticDate();
        
        test.ok(cd !== null);
        
        cd.setMinutes(13);
        
        test.equal(cd.getMinutes(), 13);
        test.done();
    },
    
    testCopticDateSetSeconds: function(test) {
        test.expect(2);
        var cd = new CopticDate();
        
        test.ok(cd !== null);
        
        cd.setSeconds(23);
        
        test.equal(cd.getSeconds(), 23);
        test.done();
    },
    
    testCopticDateSetMilliseconds: function(test) {
        test.expect(2);
        var cd = new CopticDate();
        
        test.ok(cd !== null);
        
        cd.setMilliseconds(123);
        
        test.equal(cd.getMilliseconds(), 123);
        test.done();
    },
    
    testCopticDateTestGetTimeZero: function(test) {
        test.expect(2);
        var cd = new CopticDate({
            year: 1686,
            month: 4,
            day: 23,
            hour: 0,
            timezone: "Etc/UTC"
        });
        test.ok(cd !== null);
     
        test.equal(cd.getTime(), 0);
        test.done();
    },
    
    testCopticDateTestGetTime: function(test) {
        test.expect(2);
        var cd = new CopticDate({
            year: 1686,
            month: 4,
            day: 23,
            hour: 3,        // 20:30 coptic time = 3:30am gregorian time
            minute: 30,
            timezone: "Etc/UTC"
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTime(), 12600000);
        test.done();
    },
    
    testCopticDateTestGetTimeTooEarly: function(test) {
        test.expect(2);
        var cd = new CopticDate({
            year: 1686,
            month: 4,
            day: 22,
            hour: 23,
            timezone: "Etc/UTC"
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTime(), -1);
        test.done();
    },
    
    testCopticDateTestGetTimeTooLate: function(test) {
        test.expect(2);
        // 1 second too late for regular unix time. This is Jan 19, 2038 Gregorian at 3:14:08am UTC
        var cd = new CopticDate({
            year: 1754,
            month: 5,
            day: 11,
            hour: 3,
            minute: 14,
            second: 8,
            timezone: "Etc/UTC"
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTime(), -1);
        test.done();
    },
    
    testCopticDateTestGetTimeExtendedNotTooLate: function(test) {
        test.expect(2);
        // 1 second too late for regular unix time, but not for extended time. This is Jan 19, 2038 Gregorian at 3:14:08am UTC
        var cd = new CopticDate({
            year: 1754,
            month: 5,
            day: 11,
            hour: 3,
            minute: 14,
            second: 8,
            timezone: "Etc/UTC"
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTimeExtended(), 2147483648000);
        test.done();
    },
    
    testCopticDateTestSetTime1: function(test) {
        test.expect(7);
        var cd = new CopticDate({
            year: 1686,
            month: 1,
            day: 1,
            hour: 0,
            timezone: "Etc/UTC"
        });
        test.ok(cd !== null);
        
        cd.setTime(86400000*3 + 3600000*8 + 60000*30 + 3000);
        
        test.equal(cd.getYears(), 1686);
        test.equal(cd.getMonths(), 4);
        test.equal(cd.getDays(), 26);
        test.equal(cd.getHours(), 8);
        test.equal(cd.getMinutes(), 30);
        test.equal(cd.getSeconds(), 3);
        test.done();
    },
    
    testCopticDateTestSetTimeZero: function(test) {
        test.expect(7);
        var cd = new CopticDate({
            timezone: "Etc/UTC",
            year: 0, 
            month: 1, 
            day: 1,
               hour: 1,
               minute: 1,
               second: 1,
               millisecond: 1
        });
        test.ok(cd !== null);
        
        cd.setTime(0);
        
        test.equal(cd.getYears(), 1686);
        test.equal(cd.getMonths(), 4);
        test.equal(cd.getDays(), 23);
        test.equal(cd.getHours(), 0);
        test.equal(cd.getMinutes(), 0);
        test.equal(cd.getSeconds(), 0);
        test.done();
    },
    
    testCopticDateGetTimeZone: function(test) {
        test.expect(2);
        var cd = new CopticDate({
            year: 1735, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTimeZone(), "America/Los_Angeles");
        test.done();
    },
    
    testCopticDateGetTimeZoneDefault: function(test) {
        test.expect(2);
        var cd = new CopticDate({
            year: 1735, 
            month: 3, 
            day: 8
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTimeZone(), "local");
        test.done();
    },
    
    testCopticDateGetTimeZoneByLocaleDE: function(test) {
        test.expect(2);
        var cd = new CopticDate({
            year: 1735, 
            month: 3, 
            day: 8,
            locale: "de-DE"
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTimeZone(), "Europe/Berlin");
        test.done();
    },
    
    testCopticDateGetTimeZoneByLocaleJP: function(test) {
        test.expect(2);
        var cd = new CopticDate({
            year: 1735, 
            month: 3, 
            day: 8,
            locale: "ja-JP"
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTimeZone(), "Asia/Tokyo");
        test.done();
    },
    
    testCopticDateGetTimeZoneByLocaleBogus: function(test) {
        test.expect(2);
        var cd = new CopticDate({
            year: 1735, 
            month: 3, 
            day: 8,
            locale: "zz-ZZ"
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTimeZone(), "Etc/UTC");
        test.done();
    },
    
    testCopticDateCurrentTimeWithTimeZone: function(test) {
        test.expect(2);
        var cd = new CopticDate({
            timezone: "America/Los_Angeles"
        });
        var d = new Date();
        test.ok(cd !== null);
        
        test.roughlyEqual(cd.getTime(), d.getTime(), 50);
        test.done();
    },
    
    testCopticDateSetTimeZone: function(test) {
        test.expect(3);
        var cd = new CopticDate({
            year: 1735, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTimeZone(), "America/Los_Angeles");
        
        cd.setTimeZone("Asia/Tokyo");
        
        test.equal(cd.getTimeZone(), "Asia/Tokyo");
        test.done();
    },
    
    testCopticDateSetTimeZoneNotString: function(test) {
        test.expect(3);
        var cd = new CopticDate({
            year: 1735, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTimeZone(), "America/Los_Angeles");
        
        cd.setTimeZone(345);
        
        test.equal(cd.getTimeZone(), "America/Los_Angeles");
        test.done();
    },
    
    testCopticDateSetTimeZoneUndefined: function(test) {
        test.expect(3);
        var cd = new CopticDate({
            year: 1735, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTimeZone(), "America/Los_Angeles");
    
        // clears it out
        cd.setTimeZone(undefined);
        
        test.equal(cd.getTimeZone(), "local");
        test.done();
    },
    
    testCopticDateSetTimeZoneEmpty: function(test) {
        test.expect(3);
        var cd = new CopticDate({
            year: 1735, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTimeZone(), "America/Los_Angeles");
        
        // clears it out
        cd.setTimeZone("");
        
        test.equal(cd.getTimeZone(), "local");
        test.done();
    },
    
    testCopticDateInitWithUnixTimeRightTimeZone: function(test) {
        test.expect(2);
        var cd = new CopticDate({
            unixtime: 0
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTimeZone(), "local");
        test.done();
    },
    
    testCopticDateInitWithJDRightTimeZone: function(test) {
        test.expect(2);
        var cd = new CopticDate({
            julianday: 0
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTimeZone(), "local");
        test.done();
    },
    
    testCopticDateInitWithRDRightTimeZone: function(test) {
        test.expect(2);
        var cd = new CopticDate({
            rd: 0
        });
        test.ok(cd !== null);
        
        test.equal(cd.getTimeZone(), "local");
        test.done();
    },
    
    testCopticDateRoundTripConstruction: function(test) {
        test.expect(8);
        var jd = new CopticDate({
            year: 1738,
            month: 10,
            day: 20,
            timezone: "local"
        });
        test.ok(jd !== null);
        // console.log("jd is " + JSON.stringify(jd, undefined, 4));
        
        var u = jd.getTime();
        // console.log("unixtime is " + u);
        var jd2 = new CopticDate({
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
    
    testCopticDateRoundTripConstruction2: function(test) {
        test.expect(8);
        var jd = new CopticDate({
            year: 1738,
            month: 10,
            day: 20,
            timezone: "America/Los_Angeles"
        });
        test.ok(jd !== null);
        // console.log("jd is " + JSON.stringify(jd, undefined, 4));
        
        var u = jd.getTime();
        // console.log("unixtime is " + u);
        var jd2 = new CopticDate({
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