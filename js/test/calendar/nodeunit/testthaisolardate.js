/*
 * testthaisolardate.js - test the Thai solar date object
 * 
 * Copyright © 2556, JEDLSoft
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

if (typeof(ThaiSolarDate) === "undefined") {
    var ThaiSolarDate = require("../.././../lib/ThaiSolarDate.js");
}

var testDates = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5,  -43,  7,     24,  0,    0,      0,      0,           0],
    [1660037.5,  375,  12,     5,  0,    0,      0,      0,           3],
    [1746893.5,  613,  9,     24,  0,    0,      0,      0,           3],
    [1770641.5,  678,  10,     2,  0,    0,      0,      0,           0],
    [1892731.5, 1013,  1,      8,  0,    0,      0,      0,           3],
    [1931579.5, 1119,  5,     20,  0,    0,      0,      0,           1],
    [1974851.5, 1237,  11,    10,  0,    0,      0,      0,           6],
    [2091164.5, 1556,  4,     25,  0,    0,      0,      0,           0],
    [2121509.5, 1639,  5,     24,  0,    0,      0,      0,           0],
    [2155779.5, 1733,  3,     23,  0,    0,      0,      0,           5],
    [2174029.5, 1783,  3,     10,  0,    0,      0,      0,           6],
    [2191584.5, 1831,  4,     2,   0,    0,      0,      0,           5],
    [2195261.5, 1841,  4,     27,  0,    0,      0,      0,           0],
    [2229274.5, 1934,  6,     12,  0,    0,      0,      0,           0],
    [2245580.5, 1979,  2,     3,   0,    0,      0,      0,           3],
    [2266100.5, 2035,  4,     9,   0,    0,      0,      0,           6],  
    [2288542.5, 2096,  9,     19,  0,    0,      0,      0,           6],
    [2290901.5, 2103,  3,     5,   0,    0,      0,      0,           6],
    [2323140.5, 2191,  6,     10,  0,    0,      0,      0,           3],
    [2334848.5, 2223,  6,     30,  0,    0,      0,      0,           0],
    [2348020.5, 2259,  7,     24,  0,    0,      0,      0,           5],
    [2366978.5, 2311,  6,     19,  0,    0,      0,      0,           0],
    [2385648.5, 2362,  8,     2,   0,    0,      0,      0,           1],
    [2392825.5, 2382,  3,     27,  0,    0,      0,      0,           3],
    [2416223.5, 2446,  4,     19,  0,    0,      0,      0,           0],
    [2425848.5, 2472,  8,     25,  0,    0,      0,      0,           0],
    [2430266.5, 2484,  9,     29,  0,    0,      0,      0,           1],
    [2430833.5, 2486,  4,     19,  0,    0,      0,      0,           1],
    [2431004.5, 2486,  10,     7,  0,    0,      0,      0,           4],  
    [2448698.5, 2535,  3,     17,  0,    0,      0,      0,           2],
    [2450138.5, 2539,  2,     25,  0,    0,      0,      0,           0],
    [2465737.5, 2581,  11,    10,  0,    0,      0,      0,           3],
    [2486076.5, 2637,  7,     18,  0,    0,      0,      0,           0]
];

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testthaisolardate = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testThaiSolarDateConstructor: function(test) {
        test.expect(1);
        var td = new ThaiSolarDate();
        
        test.ok(td !== null);
        test.done();
    },
    
    testThaiSolarDateConstructorFromRd: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({rd: 0});
        
        test.equal(td.getRataDie(), 0);
        test.equal(td.getJulianDay(), 1523097.5);
        test.done();
    },
    
    testThaiSolarDateConstructorFromRd1: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({rd: 1});
        
        test.equal(td.getRataDie(), 1);
        test.equal(td.getJulianDay(), 1523098.5);
        test.done();
    },
    
    testThaiSolarDateConstructorFromRd2: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({rd: 2});
        
        test.equal(td.getRataDie(), 2);
        test.equal(td.getJulianDay(), 1523099.5);
        test.done();
    },
    
    testThaiSolarDateConstructorFromJD: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({julianday: 1523096.5});
        
        test.equal(td.getRataDie(), -1);
        test.equal(td.getJulianDay(), 1523096.5);
        test.done();
    },
    
    testThaiSolarDateConstructorFromJD1: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({julianday: 1523097.5});
        
        test.equal(td.getRataDie(), 0);
        test.equal(td.getJulianDay(), 1523097.5);
        test.done();
    },
    
    testThaiSolarDateConstructorFromJD2: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({julianday: 1523098.5});
        
        test.equal(td.getRataDie(), 1);
        test.equal(td.getJulianDay(), 1523098.5);
        test.done();
    },
    
    testThaiSolarDateConstructorFromRdComplex1: function(test) {
        test.expect(1);
        // start of the gregorian calendar
        var td = new ThaiSolarDate({rd: 198327}); 
        
        test.equal(td.getRataDie(), 198327);
        test.done();
    },
    
    testThaiSolarDateConstructorFromRdComplex2: function(test) {
        test.expect(1);
        // start of the gregorian calendar
        var td = new ThaiSolarDate({rd: 198327}); 
        
        test.equal(td.getJulianDay(), 1721424.5);
        test.done();
    },
    
    testThaiSolarDateConstructorFromRdComplex3: function(test) {
        test.expect(7);
        // start of the gregorian calendar
        var td = new ThaiSolarDate({rd: 198327, timezone: "Etc/UTC"}); 
        
        test.equal(td.getYears(), 543);
        test.equal(td.getMonths(), 12);
        test.equal(td.getDays(), 31);
        test.equal(td.getHours(), 0);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    /* julian date is rd 366 + epoch */
    testThaiSolarDateConstructorFromJDRightRd: function(test) {
        test.expect(1);
        var td = new ThaiSolarDate({julianday: 1721790.75});
        
        test.equal(td.getRataDie(), 366.25 + 198327);
        test.done();
    },
    
    /* julian date is rd 366 + epoch */
    testThaiSolarDateConstructorFromJDYear2: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({julianday: 1721790.75, timezone: "Etc/UTC"});
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 545);
        test.equal(td.getMonths(), 1);
        test.equal(td.getDays(), 1);
        test.equal(td.getHours(), 6);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateAfterLeapYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({julianday: 1723071.9, timezone: "Etc/UTC"});  // jul 5, 05, 9:36am
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 548);
        test.equal(td.getMonths(), 7);
        test.equal(td.getDays(), 5);
        test.equal(td.getHours(), 9);
        test.equal(td.getMinutes(), 36);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateJan31Midnight: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 932860, timezone: "Etc/UTC"});  // Jan 31, 2555 12:00am
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2555);
        test.equal(td.getMonths(), 1);
        test.equal(td.getDays(), 31);
        test.equal(td.getHours(), 0);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateJan31Noon: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 932860.5, timezone: "Etc/UTC"});  // Jan 31, 2555 12:00pm
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2555);
        test.equal(td.getMonths(), 1);
        test.equal(td.getDays(), 31);
        test.equal(td.getHours(), 12);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateFeb1: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 932861.5, timezone: "Etc/UTC"});  // Feb 1, 2555 12:00pm
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2555);
        test.equal(td.getMonths(), 2);
        test.equal(td.getDays(), 1);
        test.equal(td.getHours(), 12);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateFeb28LeapYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 932888.5, timezone: "Etc/UTC"});  // Feb 28, 2555 12:00pm
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2555);
        test.equal(td.getMonths(), 2);
        test.equal(td.getDays(), 28);
        test.equal(td.getHours(), 12);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateFeb29LeapYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 932889.5, timezone: "Etc/UTC"});  // Feb 29, 2555 12:00pm
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2555);
        test.equal(td.getMonths(), 2);
        test.equal(td.getDays(), 29);
        test.equal(td.getHours(), 12);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateMar1LeapYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 932890.5, timezone: "Etc/UTC"});  // Mar 1, 2555 12:00pm
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2555);
        test.equal(td.getMonths(), 3);
        test.equal(td.getDays(), 1);
        test.equal(td.getHours(), 12);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateMar31LeapYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 932920.5, timezone: "Etc/UTC"});  // Mar 31, 2555 12:00pm
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2555);
        test.equal(td.getMonths(), 3);
        test.equal(td.getDays(), 31);
        test.equal(td.getHours(), 12);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateApr1LeapYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 932921.5, timezone: "Etc/UTC"});  // Apr 1, 2555 12:00pm
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2555);
        test.equal(td.getMonths(), 4);
        test.equal(td.getDays(), 1);
        test.equal(td.getHours(), 12);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateDec31LeapYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 933195.5, timezone: "Etc/UTC"});  // Dec 31, 2555 12:00pm
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2555);
        test.equal(td.getMonths(), 12);
        test.equal(td.getDays(), 31);
        test.equal(td.getHours(), 12);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateJan1NonLeapYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 933196.5, timezone: "Etc/UTC"});  // Jan 1, 2556 12:00pm
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2556);
        test.equal(td.getMonths(), 1);
        test.equal(td.getDays(), 1);
        test.equal(td.getHours(), 12);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateFeb28NonLeapYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 933254.5, timezone: "Etc/UTC"});  // Feb 28, 2556 12:00pm
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2556);
        test.equal(td.getMonths(), 2);
        test.equal(td.getDays(), 28);
        test.equal(td.getHours(), 12);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateMar1NonLeapYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 933255.5, timezone: "Etc/UTC"});  // Mar 1, 2556 12:00pm
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2556);
        test.equal(td.getMonths(), 3);
        test.equal(td.getDays(), 1);
        test.equal(td.getHours(), 12);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateMar31NonLeapYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 933285.5, timezone: "Etc/UTC"});  // Mar 31, 2556 12:00pm
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2556);
        test.equal(td.getMonths(), 3);
        test.equal(td.getDays(), 31);
        test.equal(td.getHours(), 12);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateApr1NonLeapYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 933286.5, timezone: "Etc/UTC"});  // Apr 1, 2556 12:00pm
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2556);
        test.equal(td.getMonths(), 4);
        test.equal(td.getDays(), 1);
        test.equal(td.getHours(), 12);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateAfterCentury: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({julianday: 1758231.8, timezone: "Etc/UTC"}); // Oct 10, 101, 7:12am
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 644);
        test.equal(td.getMonths(), 10);
        test.equal(td.getDays(), 10);
        test.equal(td.getHours(), 7);
        test.equal(td.getMinutes(), 12);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateAfterQuadCentury: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({julianday: 1867706.833333333333, timezone: "Etc/UTC"}); // Jul 4, 401, 8:00pm
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 944);
        test.equal(td.getMonths(), 7);
        test.equal(td.getDays(), 4);
        test.equal(td.getHours(), 8);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateEndOfYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({julianday: 2455196.5, timezone: "Etc/UTC"});
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2552);
        test.equal(td.getMonths(), 12);
        test.equal(td.getDays(), 31);
        test.equal(td.getHours(), 0);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateBeginningOfYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({julianday: 2455197.5, timezone: "Etc/UTC"});
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2553);
        test.equal(td.getMonths(), 1);
        test.equal(td.getDays(), 1);
        test.equal(td.getHours(), 0);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateEndOfYearLeapYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({julianday: 2454831.5, timezone: "Etc/UTC"});
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2551);
        test.equal(td.getMonths(), 12);
        test.equal(td.getDays(), 31);
        test.equal(td.getHours(), 0);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateBeginningOfYearAfterLeapYear: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({julianday: 2454832.5, timezone: "Etc/UTC"});
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2552);
        test.equal(td.getMonths(), 1);
        test.equal(td.getDays(), 1);
        test.equal(td.getHours(), 0);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateEndOfYear0Rd: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 0);
        test.equal(td.getMonths(), 12);
        test.equal(td.getDays(), 31);
        test.equal(td.getHours(), 0);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateBeginningOfYearRd: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 1, timezone: "Etc/UTC"});
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 1);
        test.equal(td.getMonths(), 1);
        test.equal(td.getDays(), 1);
        test.equal(td.getHours(), 0);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateAlmostEndOfYearRd: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 364, timezone: "Etc/UTC"});
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 1);
        test.equal(td.getMonths(), 12);
        test.equal(td.getDays(), 30);
        test.equal(td.getHours(), 0);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateEndOfYearRd: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 365, timezone: "Etc/UTC"});
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 1);
        test.equal(td.getMonths(), 12);
        test.equal(td.getDays(), 31);
        test.equal(td.getHours(), 0);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateBeginningOfYear2Rd: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({rd: 366, timezone: "Etc/UTC"});
        
        test.equal(typeof(td), 'object');
        test.equal(td.getYears(), 2);
        test.equal(td.getMonths(), 1);
        test.equal(td.getDays(), 1);
        test.equal(td.getHours(), 0);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.equal(td.getMilliseconds(), 0);
        test.done();
    },
    
    testThaiSolarDateConvert: function(test) {
        var td;
        
        for (var i = 0; i < testDates.length; i++) {
            td = new ThaiSolarDate({julianday: testDates[i][0], timezone: "Etc/UTC"});
        
            // console.log("testing jd=" + testDates[i][0]);
            
            test.equal(typeof(td), 'object');
            test.equal(td.getYears(), testDates[i][1]);
            test.equal(td.getMonths(), testDates[i][2]);
            test.equal(td.getDays(), testDates[i][3]);
            test.equal(td.getHours(), testDates[i][4]);
            test.equal(td.getMinutes(), testDates[i][5]);
            test.equal(td.getSeconds(), testDates[i][6]);
            test.equal(td.getMilliseconds(), testDates[i][7]);
            test.equal(td.getDayOfWeek(), testDates[i][8]);
        }
        test.done();
    },
    
    testThaiSolarDateConstructorFull: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({
            year: 2553, 
            month: 9, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        
        test.ok(td !== null);
        
        test.equal(td.getYears(), 2553);
        test.equal(td.getMonths(), 9);
        test.equal(td.getDays(), 23);
        test.equal(td.getHours(), 16);
        test.equal(td.getMinutes(), 7);
        test.equal(td.getSeconds(), 12);
        test.equal(td.getMilliseconds(), 123);
        test.done();
    },
    
    testThaiSolarDateConstructorFullWithStrings: function(test) {
        test.expect(8);
        // often you get strings from a UI element instead of numbers... 
        // this constructor should work with numbers or strings
        var td = new ThaiSolarDate({
            year: "2553", 
            month: "9",
            day: "23", 
            hour: "16", 
            minute: "7", 
            second: "12", 
            millisecond: "123",
            timezone: "Etc/UTC"
        });
        
        test.ok(td !== null);
        
        test.equal(td.getYears(), 2553);
        test.equal(td.getMonths(), 9);
        test.equal(td.getDays(), 23);
        test.equal(td.getHours(), 16);
        test.equal(td.getMinutes(), 7);
        test.equal(td.getSeconds(), 12);
        test.equal(td.getMilliseconds(), 123);
        test.done();
    },
    
    testThaiSolarDateConstructorCopy: function(test) {
        test.expect(8);
        var td2 = new ThaiSolarDate({
            year: 2553, 
            month: 9, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        var td = new ThaiSolarDate(td2);
        
        test.ok(td !== null);
        
        test.equal(td.getYears(), 2553);
        test.equal(td.getMonths(), 9);
        test.equal(td.getDays(), 23);
        test.equal(td.getHours(), 16);
        test.equal(td.getMinutes(), 7);
        test.equal(td.getSeconds(), 12);
        test.equal(td.getMilliseconds(), 123);
        test.done();
    },
    
    testThaiSolarDateConstructorEmpty: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate();
        var now = new Date(td.getTime()); // compare against the JS date
        test.ok(td !== null);
        
        test.equal(now.getFullYear()+543, td.getYears(), "year");
        test.equal(now.getMonth()+1, td.getMonths(), "month"); // js date months are 0-11 instead of 1-12 like gregorian dates
        test.equal(now.getDate(), td.getDays(), "day");
        test.equal(now.getHours(), td.getHours(), "hour");
        test.equal(now.getMinutes(), td.getMinutes(), "minute");
        test.equal(now.getSeconds(), td.getSeconds(), "second");
        test.equal(now.getMilliseconds(), td.getMilliseconds(), "millisecond");
        test.done();
    },
    
    testThaiSolarDateConstructorUnixTime: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({
            unixtime: 61000, 
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(2513, td.getYears(), "year");
        test.equal(1, td.getMonths(), "month");
        test.equal(1, td.getDays(), "day");
        test.equal(0, td.getHours(), "hour");
        test.equal(1, td.getMinutes(), "minute");
        test.equal(1, td.getSeconds(), "second");
        test.equal(0, td.getMilliseconds(), "millisecond");
        test.done();
    },
    
    testThaiSolarDateGetJulianDay: function(test) {
        var td;
        
        for (var i = 0; i < testDates.length; i++) {
            td = new ThaiSolarDate({
                year: testDates[i][1], 
                month: testDates[i][2], 
                day: testDates[i][3],
                hour: testDates[i][4],
                minute: testDates[i][5],
                second: testDates[i][6],
                millisecond: testDates[i][7],
                timezone: "Etc/UTC"
            });
        
            // console.log("testing jd=" + testDates[i][0]);
            
            test.equal(typeof(td), 'object');
            test.equal(td.getJulianDay(), testDates[i][0]);
            test.equal(td.getDayOfWeek(), testDates[i][8]);
        }
        test.done();
    },
    
    testThaiSolarDateSetYears: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate();
        
        test.ok(td !== null);
        
        td.setYears(123);
        
        test.equal(td.getYears(), 123);
        test.done();
    },
    
    testThaiSolarDateSetMonths: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate();
        
        test.ok(td !== null);
        
        td.setMonths(7);
        
        test.equal(td.getMonths(), 7);
        test.done();
    },
    
    testThaiSolarDateSetDays: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate();
        
        test.ok(td !== null);
        
        td.setDays(12);
        
        test.equal(td.getDays(), 12);
        test.done();
    },
    
    testThaiSolarDateSetHours: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate();
        
        test.ok(td !== null);
        
        td.setHours(12);
        
        test.equal(td.getHours(), 12);
        test.done();
    },
    
    testThaiSolarDateSetMinutes: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate();
        
        test.ok(td !== null);
        
        td.setMinutes(13);
        
        test.equal(td.getMinutes(), 13);
        test.done();
    },
    
    testThaiSolarDateSetSeconds: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate();
        
        test.ok(td !== null);
        
        td.setSeconds(23);
        
        test.equal(td.getSeconds(), 23);
        test.done();
    },
    
    testThaiSolarDateSetMilliseconds: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate();
        
        test.ok(td !== null);
        
        td.setMilliseconds(123);
        
        test.equal(td.getMilliseconds(), 123);
        test.done();
    },
    
    testThaiSolarDateGetDayOfWeekWithTZ: function(test) {
        test.expect(2);
        // often you get strings from a UI element instead of numbers... 
        // this constructor should work with numbers or strings
        var td = new ThaiSolarDate({
            year: "2557", 
            month: "4",
            day: "24", 
            hour: "20", 
            minute: "52", 
            second: "12", 
            millisecond: "123",
            timezone: "America/Los_Angeles"
        });
        
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 4);
        test.done();
    },
    
    testGetDayOfWeekSimple1: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 1, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5);
        test.done();
    },
    
    testGetDayOfWeekGregorianDay1: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 544,
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 1);
        test.done();
    },
    
    testGetDayOfWeekGregorianDay1ByJD: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            julianday: 1721424.5
        });
        
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 0);
        test.done();
    },
    
    testGetDayOfWeekSimple2: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 0,
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 4);
        test.done();
    },
    
    testGetDayOfWeekSimple3: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 1,
            month: 1,
            day: 2,
            timezone: "Etc/UTC"
        });
        
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 6);
        test.done();
    },
    
    testGetDayOfWeekSimple4: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 1,
            month: 1,
            day: 3,
            timezone: "Etc/UTC"
        });
        
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 0);
        test.done();
    },
    
    testGetDayOfWeekSimple5: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 1,
            month: 1,
            day: 4,
            timezone: "Etc/UTC"
        });
        
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 1);
        test.done();
    },
    
    testGetDayOfWeek1: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 9, 
            day: 30,
            timezone: "Etc/UTC"
        });
        
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5);
        test.done();
    },
    
    testGetDayOfWeekWithTime: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 9, 
            day: 30, 
            hour: 8, 
            minute: 39, 
            second: 34,
            timezone: "Etc/UTC"
        });
        
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5);
        test.done();
    },
    
    testGetDayOfWeek2: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2191, 
            month: 6, 
            day: 10,
            timezone: "Etc/UTC"
        });
        
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 3);
        test.done();
    },
    
    testGetDayOfWeek3: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 1733, 
            month: 3, 
            day: 23,
            timezone: "Etc/UTC"
        });
        
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5);
        test.done();
    },
    
    testGetDayOfWeek4: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: -43, 
            month: 7, 
            day: 24,
            timezone: "Etc/UTC"
        });
        
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 0);
        test.done();
    },
    
    testThaiSolarDateTestGetTimeZero: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            year: 2513, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getTime(), 0);
        test.done();
    },
    
    testThaiSolarDateTestGetTime: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            year: 2513, 
            month: 1, 
            day: 3,
               hour: 8,
               minute: 30,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getTime(), 203400000);
        test.done();
    },
    
    testThaiSolarDateTestGetTimeTooEarly: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            year: 2512, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getTime(), -1);
        test.done();
    },
    
    testThaiSolarDateTestGetTimeTooLate: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            year: 2581, 
            month: 1, 
            day: 20,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getTime(), -1);
        test.done();
    },
    
    testThaiSolarDateTestSetTime1: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({
            year: 2513, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        test.equal(td.getTime(), 0);
        
        // set to Jan 4, 2513 at 8:30:03
        td.setTime(86400000*3 + 3600000*8 + 60000*30 + 3000);
        
        test.equal(td.getYears(), 2513);
        test.equal(td.getMonths(), 1);
        test.equal(td.getDays(), 4);
        test.equal(td.getHours(), 8);
        test.equal(td.getMinutes(), 30);
        test.equal(td.getSeconds(), 3);
        test.done();
    },
    
    testThaiSolarDateTestSetTimeZero: function(test) {
        test.expect(7);
        var td = new ThaiSolarDate({
            year: -1, 
            month: 1, 
            day: 1,
               hour: 1,
               minute: 1,
               second: 1,
               millisecond: 1,
               timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        td.setTime(0);
        
        test.equal(td.getYears(), 2513);
        test.equal(td.getMonths(), 1);
        test.equal(td.getDays(), 1);
        test.equal(td.getHours(), 0);
        test.equal(td.getMinutes(), 0);
        test.equal(td.getSeconds(), 0);
        test.done();
    },
    
    // test some of the helper functions to make sure they are producing the right thing
    testThaiSolarDateOnOrBeforeSun: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        // Sunday on or before is 5 days before 
        test.equal(td.onOrBefore(0).getRataDie(), rd-5);
        test.done();
    },
    
    testThaiSolarDateOnOrBeforeMon: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.onOrBefore(1).getRataDie(), rd-4);
        test.done();
    },
    
    testThaiSolarDateOnOrBeforeTue: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.onOrBefore(2).getRataDie(), rd-3);
        test.done();
    },
    
    testThaiSolarDateOnOrBeforeWed: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.onOrBefore(3).getRataDie(), rd-2);
        test.done();
    },
    
    testThaiSolarDateOnOrBeforeThu: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.onOrBefore(4).getRataDie(), rd-1);
        test.done();
    },
    
    testThaiSolarDateOnOrBeforeFri: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.onOrBefore(5).getRataDie(), rd);
        test.done();
    },
    
    testThaiSolarDateOnOrBeforeSat: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.onOrBefore(6).getRataDie(), rd-6);
        test.done();
    },
    
    testThaiSolarDateOnOrBeforeSunWithTime: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
               hour: 8,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie(); // contains fractional time for the 8:00am part
        
        // Sunday on or before is 5 days before 
        // Should give an rd result that also contains the fractional time 
        test.equal(td.onOrBefore(0).getRataDie(), rd-5);
        test.done();
    },
    
    testThaiSolarDateOnOrAfterSun: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        // Sunday on or before is 5 days before 
        test.equal(td.onOrAfter(0).getRataDie(), rd+2);
        test.done();
    },
    
    testThaiSolarDateOnOrAfterSunDate: function(test) {
        test.expect(5);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var date = td.onOrBefore(0);
        
        // Sunday on or before is 5 days before
        test.equal(date.year, 2552);
        test.equal(date.month, 12);
        test.equal(date.day, 27);
        test.done();
    },
    
    testThaiSolarDateOnOrAfterMon: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.onOrAfter(1).getRataDie(), rd+3);
        test.done();
    },
    
    testThaiSolarDateOnOrAfterMonDate: function(test) {
        test.expect(5);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var date = td.onOrAfter(1);
        
        test.equal(date.year, 2553);
        test.equal(date.month, 1);
        test.equal(date.day, 4);
        test.done();
    },
    
    testThaiSolarDateOnOrAfterTue: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.onOrAfter(2).getRataDie(), rd+4);
        test.done();
    },
    
    testThaiSolarDateOnOrAfterWed: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.onOrAfter(3).getRataDie(), rd+5);
        test.done();
    },
    
    testThaiSolarDateOnOrAfterThu: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.onOrAfter(4).getRataDie(), rd+6);
        test.done();
    },
    
    testThaiSolarDateOnOrAfterThuDate: function(test) {
        test.expect(5);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var date = td.onOrAfter(4);
        
        test.equal(date.year, 2553);
        test.equal(date.month, 1);
        test.equal(date.day, 7);
        test.done();
    },
    
    testThaiSolarDateOnOrAfterFri: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.onOrAfter(5).getRataDie(), rd);
        test.done();
    },
    
    testThaiSolarDateOnOrAfterFriDate: function(test) {
        test.expect(5);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var date = td.onOrAfter(5);
        
        test.equal(date.year, 2553);
        test.equal(date.month, 1);
        test.equal(date.day, 1);
        test.done();
    },
    
    testThaiSolarDateOnOrAfterSat: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.onOrAfter(6).getRataDie(), rd+1);
        test.done();
    },
    
    testThaiSolarDateBeforeSun: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        // Sunday before is 5 days before 
        test.equal(td.before(0).getRataDie(), rd-5);
        test.done();
    },
    
    testThaiSolarDateBeforeSunDate: function(test) {
        test.expect(5);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var date = td.before(0);
        
        // Sunday before is 5 days before 
        test.equal(date.year, 2552);
        test.equal(date.month, 12);
        test.equal(date.day, 27);
        test.done();
    },
    
    testThaiSolarDateBeforeMon: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.before(1).getRataDie(), rd-4);
        test.done();
    },
    
    testThaiSolarDateBeforeTue: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.before(2).getRataDie(), rd-3);
        test.done();
    },
    
    testThaiSolarDateBeforeWed: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.before(3).getRataDie(), rd-2);
        test.done();
    },
    
    testThaiSolarDateBeforeThu: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.before(4).getRataDie(), rd-1);
        test.done();
    },
    
    testThaiSolarDateBeforeThuDate: function(test) {
        test.expect(5);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var date = td.before(4);
        
        // Thursday before is 1 day before 
        test.equal(date.year, 2552);
        test.equal(date.month, 12);
        test.equal(date.day, 31);
        test.done();
    },
    
    testThaiSolarDateBeforeFri: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.before(5).getRataDie(), rd-7);
        test.done();
    },
    
    testThaiSolarDateBeforeFriDate: function(test) {
        test.expect(5);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var date = td.before(5);
        
        // Friday before is 7 days before the current Friday
        test.equal(date.year, 2552);
        test.equal(date.month, 12);
        test.equal(date.day, 25);
        test.done();
    },
    
    testThaiSolarDateBeforeSat: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.before(6).getRataDie(), rd-6);
        test.done();
    },
    
    testThaiSolarDateAfterSun: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        // Sunday after is 2 days after 
        test.equal(td.after(0).getRataDie(), rd+2);
        test.done();
    },
    
    testThaiSolarDateAfterSunDate: function(test) {
        test.expect(5);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var date = td.after(0);
        
        // Sunday after is 2 days after 
        test.equal(date.year, 2553);
        test.equal(date.month, 1);
        test.equal(date.day, 3);
        test.done();
    },
    
    testThaiSolarDateAfterMon: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.after(1).getRataDie(), rd+3);
        test.done();
    },
    
    testThaiSolarDateAfterTue: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.after(2).getRataDie(), rd+4);
        test.done();
    },
    
    testThaiSolarDateAfterWed: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.after(3).getRataDie(), rd+5);
        test.done();
    },
    
    testThaiSolarDateAfterThu: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.after(4).getRataDie(), rd+6);
        test.done();
    },
    
    testThaiSolarDateAfterFri: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.after(5).getRataDie(), rd+7);
        test.done();
    },
    
    testThaiSolarDateAfterFriDate: function(test) {
        test.expect(5);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var date = td.after(5);
        
        // Friday after is 7 days after 
        test.equal(date.year, 2553);
        test.equal(date.month, 1);
        test.equal(date.day, 8);
        test.done();
    },
    
    testThaiSolarDateAfterSat: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var rd = td.getRataDie();
        
        test.equal(td.after(6).getRataDie(), rd+1);
        test.done();
    },
    
    testThaiSolarDateAfterSatDate: function(test) {
        test.expect(5);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfWeek(), 5); // Friday
        var date = td.after(6);
        
        // Sat after is 1 day after 
        test.equal(date.year, 2553);
        test.equal(date.month, 1);
        test.equal(date.day, 2);
        test.done();
    },
    
    testThaiSolarDateTestGetWeekOfYearThisYear: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 7,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfYear(), 1);
        test.done();
    },
    
    testThaiSolarDateTestGetWeekOfYearThisYear2: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 1, 
            day: 25,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfYear(), 4);
        test.done();
    },
    
    testThaiSolarDateTestGetWeekOfYearThisYear3: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 10, 
            day: 19,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfYear(), 42);
        test.done();
    },
    
    testThaiSolarDateTestGetWeekOfYearThisYearWithTime: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: -1468, 
            month: 10, 
            day: 19,
               hour: 16,
               minute: 13,
               second: 12,
               millisecond: 232,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfYear(), 42);
        test.done();
    },
    
    testThaiSolarDateTestGetWeekOfYearPreviousYear: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfYear(), 52);
        test.done();
    },
    
    testThaiSolarDateTestGetWeekOfYearLastWeekLeap: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2552, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfYear(), 53);
        test.done();
    },
    
    testThaiSolarDateTestGetWeekOfYearLastWeekRegular1: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2553, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfYear(), 52);
        test.done();
    },
    
    testThaiSolarDateTestGetWeekOfYearLastWeekRegular2: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2551, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfYear(), 1);
        test.done();
    },
    
    testThaiSolarDateTestGetWeekOfYearLastWeekRegular3: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2550, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfYear(), 1);
        test.done();
    },
    
    testThaiSolarDateTestGetWeekOfYearLastWeekRegular4: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2549, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfYear(), 1);
        test.done();
    },
    
    testThaiSolarDateTestGetWeekOfYearLastWeekRegular5: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2548, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfYear(), 52);
        test.done();
    },
    
    testThaiSolarDateTestGetWeekOfYearLastWeekRegular6: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfYear(), 52);
        test.done();
    },
    
    testThaiSolarDateGetDayOfYearFirstDay: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfYear(), 1);
        test.done();
    },
    
    testThaiSolarDateGetDayOfYearPaddysDay: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 3, 
            day: 17,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfYear(), 76);
        test.done();
    },
    
    testThaiSolarDateGetDayOfYearPaddysDayLeapYear: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2551, 
            month: 3, 
            day: 17,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfYear(), 77);
        test.done();
    },
    
    testThaiSolarDateGetDayOfYearLastDay: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfYear(), 365);
        test.done();
    },
    
    testThaiSolarDateGetDayOfYearLastDayLeapYear: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2551, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getDayOfYear(), 366);
        test.done();
    },
    
    testThaiSolarDateGetWeekOfMonth0: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 10, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testThaiSolarDateGetWeekOfMonth1: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 10, 
            day: 2,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testThaiSolarDateGetWeekOfMonth2: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 10, 
            day: 11,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfMonth("en-US"), 2);
        test.done();
    },
    
    testThaiSolarDateGetWeekOfMonth3: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 10, 
            day: 20,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfMonth("en-US"), 3);
        test.done();
    },
    
    testThaiSolarDateGetWeekOfMonth4: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 10, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfMonth("en-US"), 4);
        test.done();
    },
    
    testThaiSolarDateGetWeekOfMonth5: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 10, 
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfMonth("en-US"), 5);
        test.done();
    },
    
    testThaiSolarDateGetWeekOfMonth6: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 9, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testThaiSolarDateGetWeekOfMonth7: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 8, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testThaiSolarDateGetWeekOfMonth8: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 7, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testThaiSolarDateGetWeekOfMonth9: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 6, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testThaiSolarDateGetWeekOfMonthUS: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 5, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testThaiSolarDateGetWeekOfMonthDE: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 5, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        // weeks in Germany start on Monday, and May 1st is a Sunday, so it is at the 
        // end of the preceding week.
        test.equal(td.getWeekOfMonth("de-DE"), 0);
        test.done();
    },
    
    testThaiSolarDateGetEraCE: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 2554, 
            month: 5, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getEra(), 1);
        test.done();
    },
    
    testThaiSolarDateGetEraBCE: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: -46, 
            month: 5, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getEra(), -1);
        test.done();
    },
    
    testThaiSolarDateGetEraCEYear1: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 1, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getEra(), 1);
        test.done();
    },
    
    testThaiSolarDateGetEraCEYear0: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "Etc/UTC",
            year: 0, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getEra(), -1);
        test.done();
    },
    
    testThaiSolarDateJan1Midnight: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({
            julianday: 2455197.5,
               timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.year, 2553);
        test.equal(td.month, 1);
        test.equal(td.day, 1);
        test.equal(td.hour, 0);
        test.equal(td.minute, 0);
        test.equal(td.second, 0);
        test.equal(td.millisecond, 0);
        test.done();
    },
    
    testThaiSolarDateGetRataDie: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            year: 2554, 
            month: 3, 
            day: 8,
               timezone: "Etc/UTC"
        });
        test.ok(td !== null);
        
        test.equal(td.getRataDie(), 932531);
        test.done();
    },
    
    testThaiSolarDateGetTimeZone: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            year: 2554, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(td !== null);
        
        test.equal(td.getTimeZone(), "America/Los_Angeles");
        test.done();
    },
    
    testThaiSolarDateGetTimeZoneDefault: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            year: 2554, 
            month: 3, 
            day: 8
        });
        test.ok(td !== null);
        
        test.equal(td.getTimeZone(), "local");
        test.done();
    },
    
    testThaiSolarDateGetTimeZoneByLocale: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            year: 2554, 
            month: 3, 
            day: 8,
            locale: "de-DE"
        });
        test.ok(td !== null);
        
        test.equal(td.getTimeZone(), "Europe/Berlin");
        test.done();
    },
    
    testThaiSolarDateGetTimeZoneByLocaleBogus: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            year: 2554, 
            month: 3, 
            day: 8,
            locale: "zz-ZZ"
        });
        test.ok(td !== null);
        
        test.equal(td.getTimeZone(), "Etc/UTC");
        test.done();
    },
    
    testThaiSolarDateCurrentTimeWithTimeZone: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            timezone: "America/Los_Angeles"
        });
        var d = new Date();
        test.ok(td !== null);
        
        test.roughlyEqual(td.getTime(), d.getTime(), 30);
        test.done();
    },
    
    testThaiSolarDateSetTimeZone: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            year: 2554, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(td !== null);
        
        test.equal(td.getTimeZone(), "America/Los_Angeles");
        
        td.setTimeZone("Asia/Tokyo");
        
        test.equal(td.getTimeZone(), "Asia/Tokyo");
        test.done();
    },
    
    testThaiSolarDateSetTimeZoneNotString: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            year: 2554, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(td !== null);
        
        test.equal(td.getTimeZone(), "America/Los_Angeles");
        
        td.setTimeZone(345);
        
        test.equal(td.getTimeZone(), "America/Los_Angeles");
        test.done();
    },
    
    testThaiSolarDateSetTimeZoneUndefined: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            year: 2554, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(td !== null);
        
        test.equal(td.getTimeZone(), "America/Los_Angeles");
    
        // clears it out
        td.setTimeZone(undefined);
        
        test.equal(td.getTimeZone(), "local");
        test.done();
    },
    
    testThaiSolarDateSetTimeZoneEmpty: function(test) {
        test.expect(3);
        var td = new ThaiSolarDate({
            year: 2554, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(td !== null);
        
        test.equal(td.getTimeZone(), "America/Los_Angeles");
        
        // clears it out
        td.setTimeZone("");
        
        test.equal(td.getTimeZone(), "local");
        test.done();
    },
    
    testThaiSolarDateInitWithUnixTimeRightTimeZone: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            unixtime: 0
        });
        test.ok(td !== null);
        
        test.equal(td.getTimeZone(), "local");
        test.done();
    },
    
    testThaiSolarDateInitWithJDRightTimeZone: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            julianday: 0
        });
        test.ok(td !== null);
        
        test.equal(td.getTimeZone(), "local");
        test.done();
    },
    
    testThaiSolarDateInitWithRDRightTimeZone: function(test) {
        test.expect(2);
        var td = new ThaiSolarDate({
            rd: 0
        });
        test.ok(td !== null);
        
        test.equal(td.getTimeZone(), "local");
        test.done();
    },
    
    testThaiSolarDateRoundTripConstruction: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({
            year: 2557,
            month: 11,
            day: 3,
            timezone: "local"
        });
        test.ok(td !== null);
        // console.log("td is " + JSON.stringify(td, undefined, 4));
        
        var u = td.getTime();
        // console.log("unixtime is " + u);
        var td2 = new ThaiSolarDate({
            unixtime: u,
            timezone: "local"
        });
        // console.log("td2 is " + JSON.stringify(td2, undefined, 4));
        test.equal(td2.getTimeZone(), td.getTimeZone());
        test.equal(td2.getYears(), td.getYears());
        test.equal(td2.getMonths(), td.getMonths());
        test.equal(td2.getDays(), td.getDays());
        test.equal(td2.getHours(), td.getHours());
        test.equal(td2.getMinutes(), td.getMinutes());
        test.equal(td2.getSeconds(), td.getSeconds());
        test.done();
    },
    
    testThaiSolarDateRoundTripConstruction2: function(test) {
        test.expect(8);
        var td = new ThaiSolarDate({
            year: 2557,
            month: 11,
            day: 3,
            timezone: "America/Los_Angeles"
        });
        test.ok(td !== null);
        // console.log("td is " + JSON.stringify(td, undefined, 4));
        
        var u = td.getTime();
        // console.log("unixtime is " + u);
        var td2 = new ThaiSolarDate({
            unixtime: u,
            timezone: "America/Los_Angeles"
        });
        // console.log("td2 is " + JSON.stringify(td2, undefined, 4));
        test.equal(td2.getTimeZone(), td.getTimeZone());
        test.equal(td2.getYears(), td.getYears());
        test.equal(td2.getMonths(), td.getMonths());
        test.equal(td2.getDays(), td.getDays());
        test.equal(td2.getHours(), td.getHours());
        test.equal(td2.getMinutes(), td.getMinutes());
        test.equal(td2.getSeconds(), td.getSeconds());
        test.done();
    }
    
};