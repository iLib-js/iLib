/*
 * testjuliandate.js - test the julian date object
 * 
 * Copyright © 2012-2015,2017, JEDLSoft
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

if (typeof(JulianDate) === "undefined") {
    var JulianDate = require("../../lib/JulianDate.js");
}

var testDatesJulian = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, -587,  7,     30,  0,    0,      0,      0,           0],
    [1660037.5, -169,  12,    8,   0,    0,      0,      0,           3],
    [1746893.5, 70,    9,     26,  0,    0,      0,      0,           3],
    [1770641.5, 135,   10,    3,   0,    0,      0,      0,           0],
    [1892731.5, 470,   1,     7,   0,    0,      0,      0,           3],
    [1931579.5, 576,   5,     18,  0,    0,      0,      0,           1],
    [1974851.5, 694,   11,    7,   0,    0,      0,      0,           6],
    [2091164.5, 1013,  4,     19,  0,    0,      0,      0,           0],
    [2121509.5, 1096,  5,     18,  0,    0,      0,      0,           0],
    [2155779.5, 1190,  3,     16,  0,    0,      0,      0,           5],
    [2174029.5, 1240,  3,     3,   0,    0,      0,      0,           6],
    [2191584.5, 1288,  3,     26,  0,    0,      0,      0,           5],
    [2195261.5, 1298,  4,     20,  0,    0,      0,      0,           0],
    [2229274.5, 1391,  6,     4,   0,    0,      0,      0,           0],
    [2245580.5, 1436,  1,     25,  0,    0,      0,      0,           3],
    [2266100.5, 1492,  3,     31,  0,    0,      0,      0,           6],
    [2288542.5, 1553,  9,     9,   0,    0,      0,      0,           6],
    [2290901.5, 1560,  2,     24,  0,    0,      0,      0,           6],
    [2323140.5, 1648,  5,     31,  0,    0,      0,      0,           3],
    [2334848.5, 1680,  6,     20,  0,    0,      0,      0,           0],
    [2348020.5, 1716,  7,     13,  0,    0,      0,      0,           5],
    [2366978.5, 1768,  6,     8,   0,    0,      0,      0,           0],
    [2385648.5, 1819,  7,     21,  0,    0,      0,      0,           1],
    [2392825.5, 1839,  3,     15,  0,    0,      0,      0,           3],
    [2416223.5, 1903,  4,     6,   0,    0,      0,      0,           0],
    [2425848.5, 1929,  8,     12,  0,    0,      0,      0,           0],
    [2430266.5, 1941,  9,     16,  0,    0,      0,      0,           1],
    [2430833.5, 1943,  4,     6,   0,    0,      0,      0,           1],
    [2431004.5, 1943,  9,     24,  0,    0,      0,      0,           4],
    [2448698.5, 1992,  3,     4,   0,    0,      0,      0,           2],
    [2450138.5, 1996,  2,     12,  0,    0,      0,      0,           0],
    [2465737.5, 2038,  10,    28,  0,    0,      0,      0,           3],
    [2486076.5, 2094,  7,     5,   0,    0,      0,      0,           0]
];

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testjuliandate = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJulDateConstructor: function(test) {
        test.expect(1);
        var jul = new JulianDate();
        
        test.ok(jul !== null);
        test.done();
    },
    
    /* julian date is rd 366 + epoch */
    testJulDateConstructorFromJD: function(test) {
        test.expect(8);
        var jul = new JulianDate({
            julianday: 1721790.75,
            timezone: "Etc/UTC"
        });
        
        test.equal(typeof(jul), 'object');
        test.equal(jul.getYears(), 2);
        test.equal(jul.getMonths(), 1);
        test.equal(jul.getDays(), 3);
        test.equal(jul.getHours(), 6);
        test.equal(jul.getMinutes(), 0);
        test.equal(jul.getSeconds(), 0);
        test.equal(jul.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateConstructorUnixTime: function(test) {
        test.expect(8);
        var gd = new JulianDate({
            unixtime: 61000,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(1969, gd.getYears(), "year");
        test.equal(12, gd.getMonths(), "month");
        test.equal(19, gd.getDays(), "day");
        test.equal(0, gd.getHours(), "hour");
        test.equal(1, gd.getMinutes(), "minute");
        test.equal(1, gd.getSeconds(), "second");
        test.equal(0, gd.getMilliseconds(), "millisecond");
        test.done();
    },
    
    testJulDateAfterLeapYear: function(test) {
        test.expect(8);
        var jul = new JulianDate({
            julianday: 1723071.9,
            timezone: "Etc/UTC"
        });
        
        test.equal(typeof(jul), 'object');
        test.equal(jul.getYears(), 5);
        test.equal(jul.getMonths(), 7);
        test.equal(jul.getDays(), 7);
        test.equal(jul.getHours(), 9);
        test.equal(jul.getMinutes(), 36);
        test.equal(jul.getSeconds(), 0);
        test.equal(jul.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateJan31Midnight: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 734548,    timezone: "Etc/UTC"});  // Jan 31, 2012 12:00am
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2012);
        test.equal(gd.getMonths(), 1);
        test.equal(gd.getDays(), 31);
        test.equal(gd.getHours(), 0);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateJan31Noon: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 734548.5, timezone: "Etc/UTC"});  // Jan 31, 2012 12:00pm
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2012);
        test.equal(gd.getMonths(), 1);
        test.equal(gd.getDays(), 31);
        test.equal(gd.getHours(), 12);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateFeb1: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 734549.5, timezone: "Etc/UTC"});  // Feb 1, 2012 12:00pm
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2012);
        test.equal(gd.getMonths(), 2);
        test.equal(gd.getDays(), 1);
        test.equal(gd.getHours(), 12);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateFeb28LeapYear: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 734576.5, timezone: "Etc/UTC"});  // Feb 28, 2012 12:00pm
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2012);
        test.equal(gd.getMonths(), 2);
        test.equal(gd.getDays(), 28);
        test.equal(gd.getHours(), 12);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateFeb29LeapYear: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 734577.5, timezone: "Etc/UTC"});  // Feb 29, 2012 12:00pm
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2012);
        test.equal(gd.getMonths(), 2);
        test.equal(gd.getDays(), 29);
        test.equal(gd.getHours(), 12);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateMar1LeapYear: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 734578.5, timezone: "Etc/UTC"});  // Mar 1, 2012 12:00pm
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2012);
        test.equal(gd.getMonths(), 3);
        test.equal(gd.getDays(), 1);
        test.equal(gd.getHours(), 12);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateMar31LeapYear: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 734608.5, timezone: "Etc/UTC"});  // Mar 31, 2012 12:00pm
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2012);
        test.equal(gd.getMonths(), 3);
        test.equal(gd.getDays(), 31);
        test.equal(gd.getHours(), 12);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateApr1LeapYear: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 734609.5, timezone: "Etc/UTC"});  // Apr 1, 2012 12:00pm
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2012);
        test.equal(gd.getMonths(), 4);
        test.equal(gd.getDays(), 1);
        test.equal(gd.getHours(), 12);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateDec31LeapYear: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 734883.5, timezone: "Etc/UTC"});  // Dec 31, 2012 12:00pm
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2012);
        test.equal(gd.getMonths(), 12);
        test.equal(gd.getDays(), 31);
        test.equal(gd.getHours(), 12);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateJan1NonLeapYear: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 734884.5, timezone: "Etc/UTC"});  // Jan 1, 2013 12:00pm
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2013);
        test.equal(gd.getMonths(), 1);
        test.equal(gd.getDays(), 1);
        test.equal(gd.getHours(), 12);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateFeb28NonLeapYear: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 734942.5, timezone: "Etc/UTC"});  // Feb 28, 2013 12:00pm
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2013);
        test.equal(gd.getMonths(), 2);
        test.equal(gd.getDays(), 28);
        test.equal(gd.getHours(), 12);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateMar1NonLeapYear: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 734943.5, timezone: "Etc/UTC"});  // Mar 1, 2013 12:00pm
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2013);
        test.equal(gd.getMonths(), 3);
        test.equal(gd.getDays(), 1);
        test.equal(gd.getHours(), 12);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateMar31NonLeapYear: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 734973.5, timezone: "Etc/UTC"});  // Mar 31, 2013 12:00pm
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2013);
        test.equal(gd.getMonths(), 3);
        test.equal(gd.getDays(), 31);
        test.equal(gd.getHours(), 12);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateApr1NonLeapYear: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 734974.5, timezone: "Etc/UTC"});  // Apr 1, 2013 12:00pm
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2013);
        test.equal(gd.getMonths(), 4);
        test.equal(gd.getDays(), 1);
        test.equal(gd.getHours(), 12);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateAfterCentury: function(test) {
        test.expect(8);
        var jul = new JulianDate({
            julianday: 1758231.8, 
            timezone: "Etc/UTC"
        });
        
        test.equal(typeof(jul), 'object');
        test.equal(jul.getYears(), 101);
        test.equal(jul.getMonths(), 10);
        test.equal(jul.getDays(), 11);
        test.equal(jul.getHours(), 7);
        test.equal(jul.getMinutes(), 12);
        test.equal(jul.getSeconds(), 0);
        test.equal(jul.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateAfterQuadCentury: function(test) {
        test.expect(8);
        var jul = new JulianDate({
            julianday: 1867706.833333333333, 
            timezone: "Etc/UTC"
        });
        
        test.equal(typeof(jul), 'object');
        test.equal(jul.getYears(), 401);
        test.equal(jul.getMonths(), 7);
        test.equal(jul.getDays(), 3);
        test.equal(jul.getHours(), 8);
        test.equal(jul.getMinutes(), 0);
        test.equal(jul.getSeconds(), 0);
        test.equal(jul.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateEndOfYearMinus1Rd: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), -1);
        test.equal(gd.getMonths(), 12);
        test.equal(gd.getDays(), 31);
        test.equal(gd.getHours(), 0);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateBeginningOfYearRd: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 1, timezone: "Etc/UTC"});
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 1);
        test.equal(gd.getMonths(), 1);
        test.equal(gd.getDays(), 1);
        test.equal(gd.getHours(), 0);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateAlmostEndOfYearRd: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 364, timezone: "Etc/UTC"});
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 1);
        test.equal(gd.getMonths(), 12);
        test.equal(gd.getDays(), 30);
        test.equal(gd.getHours(), 0);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateEndOfYearRd: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 365, timezone: "Etc/UTC"});
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 1);
        test.equal(gd.getMonths(), 12);
        test.equal(gd.getDays(), 31);
        test.equal(gd.getHours(), 0);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateBeginningOfYear2Rd: function(test) {
        test.expect(8);
        var gd = new JulianDate({rd: 366, timezone: "Etc/UTC"});
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2);
        test.equal(gd.getMonths(), 1);
        test.equal(gd.getDays(), 1);
        test.equal(gd.getHours(), 0);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testJulDateConvert: function(test) {
        var jul;
        
        for (var i = 0; i < testDatesJulian.length; i++) {
            // console.log("testing jd=" + testDatesJulian[i][0] + " and date of " + JSON.stringify(jul));
            
            jul = new JulianDate({
                julianday: testDatesJulian[i][0], 
                timezone: "Etc/UTC"
            });
        
            test.equal(typeof(jul), 'object');
            test.equal(jul.getYears(), testDatesJulian[i][1]);
            test.equal(jul.getMonths(), testDatesJulian[i][2]);
            test.equal(jul.getDays(), testDatesJulian[i][3]);
            test.equal(jul.getHours(), testDatesJulian[i][4]);
            test.equal(jul.getMinutes(), testDatesJulian[i][5]);
            test.equal(jul.getSeconds(), testDatesJulian[i][6]);
            test.equal(jul.getMilliseconds(), testDatesJulian[i][7]);
            test.equal(jul.getDayOfWeek(), testDatesJulian[i][8]);
        }
        test.done();
    },
    
    testJulDateConstructorFull: function(test) {
        test.expect(8);
        var jul = new JulianDate({
            year: 2011,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        
        test.ok(jul !== null);
        
        test.equal(jul.getYears(), 2011);
        test.equal(jul.getMonths(), 9);
        test.equal(jul.getDays(), 23);
        test.equal(jul.getHours(), 16);
        test.equal(jul.getMinutes(), 7);
        test.equal(jul.getSeconds(), 12);
        test.equal(jul.getMilliseconds(), 123);
        test.done();
    },
    
    testJulDateConstructorFullWithStrings: function(test) {
        test.expect(8);
        var jul = new JulianDate({
            year: "2011", 
            month: "9",
            day: "23", 
            hour: "16", 
            minute: "7", 
            second: "12", 
            millisecond: "123"
        });
        
        test.ok(jul !== null);
        
        test.equal(jul.getYears(), 2011);
        test.equal(jul.getMonths(), 9);
        test.equal(jul.getDays(), 23);
        test.equal(jul.getHours(), 16);
        test.equal(jul.getMinutes(), 7);
        test.equal(jul.getSeconds(), 12);
        test.equal(jul.getMilliseconds(), 123);
        test.done();
    },
    
    testJulDateConstructorCopy: function(test) {
        test.expect(8);
        var jul = new JulianDate({
            year: 2011, 
            month: 9, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        
        test.ok(jul !== null);
        
        test.equal(jul.getYears(), 2011);
        test.equal(jul.getMonths(), 9);
        test.equal(jul.getDays(), 23);
        test.equal(jul.getHours(), 16);
        test.equal(jul.getMinutes(), 7);
        test.equal(jul.getSeconds(), 12);
        test.equal(jul.getMilliseconds(), 123);
        test.done();
    },
    
    testJulDateGetJulianDay: function(test) {
        var jul;
        
        for (var i = 0; i < testDatesJulian.length; i++) {
            // console.log("testing jd=" + testDatesJulian[i][0] + " and date " + JSON.stringify(jul));
            
            jul = new JulianDate({
                year: testDatesJulian[i][1], 
                month: testDatesJulian[i][2], 
                day: testDatesJulian[i][3],
                hour: testDatesJulian[i][4],
                minute: testDatesJulian[i][5],
                second: testDatesJulian[i][6],
                millisecond: testDatesJulian[i][7],
                timezone: "Etc/UTC"
            });
        
            test.equal(typeof(jul), 'object');
            // console.log("calculated julian day is " + jul.getJulianDay());
            test.equal(jul.getJulianDay(), testDatesJulian[i][0]);
            test.equal(jul.getDayOfWeek(), testDatesJulian[i][8]);
        }
        test.done();
    },
    
    testJulDateSetYears: function(test) {
        test.expect(2);
        var jul = new JulianDate();
        
        test.ok(jul !== null);
        
        jul.setYears(123);
        
        test.equal(jul.getYears(), 123);
        test.done();
    },
    
    testJulDateSetMonths: function(test) {
        test.expect(2);
        var jul = new JulianDate();
        
        test.ok(jul !== null);
        
        jul.setMonths(7);
        
        test.equal(jul.getMonths(), 7);
        test.done();
    },
    
    testJulDateSetDays: function(test) {
        test.expect(2);
        var jul = new JulianDate();
        
        test.ok(jul !== null);
        
        jul.setDays(12);
        
        test.equal(jul.getDays(), 12);
        test.done();
    },
    
    testJulDateSetHours: function(test) {
        test.expect(2);
        var jul = new JulianDate();
        
        test.ok(jul !== null);
        
        jul.setHours(12);
        
        test.equal(jul.getHours(), 12);
        test.done();
    },
    
    testJulDateSetMinutes: function(test) {
        test.expect(2);
        var jul = new JulianDate();
        
        test.ok(jul !== null);
        
        jul.setMinutes(13);
        
        test.equal(jul.getMinutes(), 13);
        test.done();
    },
    
    testJulDateSetSeconds: function(test) {
        test.expect(2);
        var jul = new JulianDate();
        
        test.ok(jul !== null);
        
        jul.setSeconds(23);
        
        test.equal(jul.getSeconds(), 23);
        test.done();
    },
    
    testJulDateSetMilliseconds: function(test) {
        test.expect(2);
        var jul = new JulianDate();
        
        test.ok(jul !== null);
        
        jul.setMilliseconds(123);
        
        test.equal(jul.getMilliseconds(), 123);
        test.done();
    },
    
    testJulDateTestGetTimeZero: function(test) {
        test.expect(2);
        var jul = new JulianDate({
            year: 1969,
            month: 12,
            day: 19,
            timezone: "Etc/UTC"
        });
        test.ok(jul !== null);
        
        test.equal(jul.getTime(), 0);
        test.done();
    },
    
    testJulDateTestGetTime: function(test) {
        test.expect(2);
        var jul = new JulianDate({
            year: 1969,
            month: 12,
            day: 21,
            hour: 8,
            minute: 30,
            timezone: "Etc/UTC"
        });
        test.ok(jul !== null);
        
        test.equal(jul.getTime(), 203400000);
        test.done();
    },
    
    testJulDateTestGetTimeTooEarly: function(test) {
        test.expect(2);
        var jul = new JulianDate({
            year: 1960,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(jul !== null);
        
        test.equal(jul.getTime(), -1);
        test.done();
    },
    
    testJulDateTestGetTimeTooLate: function(test) {
        test.expect(2);
        var jul = new JulianDate({
            year: 2040,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(jul !== null);
        
        test.equal(jul.getTime(), -1);
        test.done();
    },
    
    testJulDateTestSetTime1: function(test) {
        test.expect(8);
        var jul = new JulianDate({
            year: 1969, 
            month: 12, 
            day: 19,
            timezone: "Etc/UTC"
        });
        test.ok(jul !== null);
        test.equal(jul.getTime(), 0);
        
        jul.setTime(86400000*3 + 3600000*8 + 60000*30 + 3000);
        
        test.equal(jul.getYears(), 1969);
        test.equal(jul.getMonths(), 12);
        test.equal(jul.getDays(), 22);
        test.equal(jul.getHours(), 8);
        test.equal(jul.getMinutes(), 30);
        test.equal(jul.getSeconds(), 3);
        test.done();
    },
    
    testJulDateTestSetTimeZero: function(test) {
        test.expect(7);
        var jul = new JulianDate({
            timezone: "Etc/UTC",
            year: -1, 
            month: 1, 
            day: 1,
               hour: 1,
               minute: 1,
               second: 1,
               millisecond: 1,
            timezone: "Etc/UTC"
        });
        test.ok(jul !== null);
        
        jul.setTime(0);
        
        test.equal(jul.getYears(), 1969);
        test.equal(jul.getMonths(), 12);
        test.equal(jul.getDays(), 19);
        test.equal(jul.getHours(), 0);
        test.equal(jul.getMinutes(), 0);
        test.equal(jul.getSeconds(), 0);
        test.done();
    },
    
    testJulDateGetTimeZone: function(test) {
        test.expect(2);
        var jul = new JulianDate({
            year: 2011, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(jul !== null);
        
        test.equal(jul.getTimeZone(), "America/Los_Angeles");
        test.done();
    },
    
    testJulDateGetTimeZoneDefault: function(test) {
        test.expect(2);
        var jul = new JulianDate({
            year: 2011, 
            month: 3, 
            day: 8
        });
        test.ok(jul !== null);
        
        test.equal(jul.getTimeZone(), "local");
        test.done();
    },
    
    testJulDateGetTimeZoneByLocaleDE: function(test) {
        test.expect(2);
        var jul = new JulianDate({
            year: 2011, 
            month: 3, 
            day: 8,
            locale: "de-DE"
        });
        test.ok(jul !== null);
        
        test.equal(jul.getTimeZone(), "Europe/Berlin");
        test.done();
    },
    
    testJulDateGetTimeZoneByLocaleJP: function(test) {
        test.expect(2);
        var jul = new JulianDate({
            year: 2011, 
            month: 3, 
            day: 8,
            locale: "ja-JP"
        });
        test.ok(jul !== null);
        
        test.equal(jul.getTimeZone(), "Asia/Tokyo");
        test.done();
    },
    
    testJulDateGetTimeZoneByLocaleBogus: function(test) {
        test.expect(2);
        var jul = new JulianDate({
            year: 2011, 
            month: 3, 
            day: 8,
            locale: "zz-ZZ"
        });
        test.ok(jul !== null);
        
        test.equal(jul.getTimeZone(), "Etc/UTC");
        test.done();
    },
    
    testJulDateCurrentTimeWithTimeZone: function(test) {
        test.expect(2);
        var jul = new JulianDate({
            timezone: "America/Los_Angeles"
        });
        var d = new Date();
        test.ok(jul !== null);
        
        test.roughlyEqual(jul.getTime(), d.getTime(), 50);
        test.done();
    },
    
    testJulDateSetTimeZone: function(test) {
        test.expect(3);
        var gd = new JulianDate({
            year: 2011, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "America/Los_Angeles");
        
        gd.setTimeZone("Asia/Tokyo");
        
        test.equal(gd.getTimeZone(), "Asia/Tokyo");
        test.done();
    },
    
    testJulDateSetTimeZoneNotString: function(test) {
        test.expect(3);
        var gd = new JulianDate({
            year: 2011, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "America/Los_Angeles");
        
        gd.setTimeZone(345);
        
        test.equal(gd.getTimeZone(), "America/Los_Angeles");
        test.done();
    },
    
    testJulDateSetTimeZoneUndefined: function(test) {
        test.expect(3);
        var gd = new JulianDate({
            year: 2011, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "America/Los_Angeles");
    
        // clears it out
        gd.setTimeZone(undefined);
        
        test.equal(gd.getTimeZone(), "local");
        test.done();
    },
    
    testJulDateSetTimeZoneEmpty: function(test) {
        test.expect(3);
        var gd = new JulianDate({
            year: 2011, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "America/Los_Angeles");
        
        // clears it out
        gd.setTimeZone("");
        
        test.equal(gd.getTimeZone(), "local");
        test.done();
    },
    
    testJulDateInitWithUnixTimeRightTimeZone: function(test) {
        test.expect(2);
        var gd = new JulianDate({
            unixtime: 0
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "local");
        test.done();
    },
    
    testJulDateInitWithJDRightTimeZone: function(test) {
        test.expect(2);
        var gd = new JulianDate({
            julianday: 0
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "local");
        test.done();
    },
    
    testJulDateInitWithRDRightTimeZone: function(test) {
        test.expect(2);
        var gd = new JulianDate({
            rd: 0
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "local");
        test.done();
    },
    
    testJulianDateRoundTripConstruction: function(test) {
        test.expect(8);
        var jd = new JulianDate({
            year: 2014,
            month: 10,
            day: 20,
            timezone: "local"
        });
        test.ok(jd !== null);
        // console.log("jd is " + JSON.stringify(jd, undefined, 4));
        
        var u = jd.getTime();
        // console.log("unixtime is " + u);
        var jd2 = new JulianDate({
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
    
    testJulianDateRoundTripConstruction2: function(test) {
        test.expect(8);
        var jd = new JulianDate({
            year: 2014,
            month: 10,
            day: 20,
            timezone: "America/Los_Angeles"
        });
        test.ok(jd !== null);
        // console.log("jd is " + JSON.stringify(jd, undefined, 4));
        
        var u = jd.getTime();
        // console.log("unixtime is " + u);
        var jd2 = new JulianDate({
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
