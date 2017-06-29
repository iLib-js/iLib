/*
 * testgregoriandate.js - test the gregorian date object
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

if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../.././../lib/GregorianDate.js");
}

var testDatesGregorian = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, -586,  7,     24,  0,    0,      0,      0,           0],
    [1660037.5, -168,  12,    5,   0,    0,      0,      0,           3],
    [1746893.5, 70,    9,     24,  0,    0,      0,      0,           3],
    [1770641.5, 135,   10,    2,   0,    0,      0,      0,           0],
    [1892731.5, 470,   1,     8,   0,    0,      0,      0,           3],
    [1931579.5, 576,   5,     20,  0,    0,      0,      0,           1],
    [1974851.5, 694,   11,    10,  0,    0,      0,      0,           6],
    [2091164.5, 1013,  4,     25,  0,    0,      0,      0,           0],
    [2121509.5, 1096,  5,     24,  0,    0,      0,      0,           0],
    [2155779.5, 1190,  3,     23,  0,    0,      0,      0,           5],
    [2174029.5, 1240,  3,     10,  0,    0,      0,      0,           6],
    [2191584.5, 1288,  4,     2,   0,    0,      0,      0,           5],
    [2195261.5, 1298,  4,     27,  0,    0,      0,      0,           0],
    [2229274.5, 1391,  6,     12,  0,    0,      0,      0,           0],
    [2245580.5, 1436,  2,     3,   0,    0,      0,      0,           3],
    [2266100.5, 1492,  4,     9,   0,    0,      0,      0,           6],
    [2288542.5, 1553,  9,     19,  0,    0,      0,      0,           6],
    [2290901.5, 1560,  3,     5,   0,    0,      0,      0,           6],
    [2323140.5, 1648,  6,     10,  0,    0,      0,      0,           3],
    [2334848.5, 1680,  6,     30,  0,    0,      0,      0,           0],
    [2348020.5, 1716,  7,     24,  0,    0,      0,      0,           5],
    [2366978.5, 1768,  6,     19,  0,    0,      0,      0,           0],
    [2385648.5, 1819,  8,     2,   0,    0,      0,      0,           1],
    [2392825.5, 1839,  3,     27,  0,    0,      0,      0,           3],
    [2416223.5, 1903,  4,     19,  0,    0,      0,      0,           0],
    [2425848.5, 1929,  8,     25,  0,    0,      0,      0,           0],
    [2430266.5, 1941,  9,     29,  0,    0,      0,      0,           1],
    [2430833.5, 1943,  4,     19,  0,    0,      0,      0,           1],
    [2431004.5, 1943,  10,    7,   0,    0,      0,      0,           4],
    [2448698.5, 1992,  3,     17,  0,    0,      0,      0,           2],
    [2450138.5, 1996,  2,     25,  0,    0,      0,      0,           0],
    [2465737.5, 2038,  11,    10,  0,    0,      0,      0,           3],
    [2486076.5, 2094,  7,     18,  0,    0,      0,      0,           0]
];

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testgregoriandate = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testGregDateConstructor: function(test) {
        test.expect(1);
        var gd = new GregorianDate();
        
        test.ok(gd !== null);
        test.done();
    },
    
    /* julian date is rd 366 + epoch */
    testGregDateConstructorFromJD: function(test) {
        test.expect(8);
        var gd = new GregorianDate({
            julianday: 1721790.75,
            timezone: "Etc/UTC"
        });
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2);
        test.equal(gd.getMonths(), 1);
        test.equal(gd.getDays(), 1);
        test.equal(gd.getHours(), 6);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testGregDateAfterLeapYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({julianday: 1723071.9, timezone: "Etc/UTC"});  // jul 5, 05, 9:36am
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 5);
        test.equal(gd.getMonths(), 7);
        test.equal(gd.getDays(), 5);
        test.equal(gd.getHours(), 9);
        test.equal(gd.getMinutes(), 36);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testGregDateJan31Midnight: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 734533, timezone: "Etc/UTC"});  // Jan 31, 2012 12:00am
        
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
    
    testGregDateJan31Noon: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 734533.5, timezone: "Etc/UTC"});  // Jan 31, 2012 12:00pm
        
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
    
    testGregDateFeb1: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 734534.5, timezone: "Etc/UTC"});  // Feb 1, 2012 12:00pm
        
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
    
    testGregDateFeb28LeapYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 734561.5, timezone: "Etc/UTC"});  // Feb 28, 2012 12:00pm
        
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
    
    testGregDateFeb29LeapYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 734562.5, timezone: "Etc/UTC"});  // Feb 29, 2012 12:00pm
        
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
    
    testGregDateMar1LeapYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 734563.5, timezone: "Etc/UTC"});  // Mar 1, 2012 12:00pm
        
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
    
    testGregDateMar31LeapYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 734593.5, timezone: "Etc/UTC"});  // Mar 31, 2012 12:00pm
        
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
    
    testGregDateApr1LeapYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 734594.5, timezone: "Etc/UTC"});  // Apr 1, 2012 12:00pm
        
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
    
    testGregDateDec31LeapYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 734868.5, timezone: "Etc/UTC"});  // Dec 31, 2012 12:00pm
        
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
    
    testGregDateJan1NonLeapYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 734869.5, timezone: "Etc/UTC"});  // Jan 1, 2013 12:00pm
        
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
    
    testGregDateFeb28NonLeapYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 734927.5, timezone: "Etc/UTC"});  // Feb 28, 2013 12:00pm
        
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
    
    testGregDateMar1NonLeapYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 734928.5, timezone: "Etc/UTC"});  // Mar 1, 2013 12:00pm
        
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
    
    testGregDateMar31NonLeapYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 734958.5, timezone: "Etc/UTC"});  // Mar 31, 2013 12:00pm
        
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
    
    testGregDateApr1NonLeapYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 734959.5, timezone: "Etc/UTC"});  // Apr 1, 2013 12:00pm
        
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
    
    testGregDateAfterCentury: function(test) {
        test.expect(8);
        var gd = new GregorianDate({julianday: 1758231.8, timezone: "Etc/UTC"}); // Oct 10, 101, 7:12am
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 101);
        test.equal(gd.getMonths(), 10);
        test.equal(gd.getDays(), 10);
        test.equal(gd.getHours(), 7);
        test.equal(gd.getMinutes(), 12);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testGregDateAfterQuadCentury: function(test) {
        test.expect(8);
        var gd = new GregorianDate({julianday: 1867706.833333333333, timezone: "Etc/UTC"}); // Jul 4, 401, 8:00pm
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 401);
        test.equal(gd.getMonths(), 7);
        test.equal(gd.getDays(), 4);
        test.equal(gd.getHours(), 8);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testGregDateEndOfYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({julianday: 2455196.5, timezone: "Etc/UTC"});
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2009);
        test.equal(gd.getMonths(), 12);
        test.equal(gd.getDays(), 31);
        test.equal(gd.getHours(), 0);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testGregDateBeginningOfYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({julianday: 2455197.5, timezone: "Etc/UTC"});
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2010);
        test.equal(gd.getMonths(), 1);
        test.equal(gd.getDays(), 1);
        test.equal(gd.getHours(), 0);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testGregDateEndOfYearLeapYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({julianday: 2454831.5, timezone: "Etc/UTC"});
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2008);
        test.equal(gd.getMonths(), 12);
        test.equal(gd.getDays(), 31);
        test.equal(gd.getHours(), 0);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testGregDateBeginningOfYearAfterLeapYear: function(test) {
        test.expect(8);
        var gd = new GregorianDate({julianday: 2454832.5, timezone: "Etc/UTC"});
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 2009);
        test.equal(gd.getMonths(), 1);
        test.equal(gd.getDays(), 1);
        test.equal(gd.getHours(), 0);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testGregDateEndOfYear0RJd: function(test) {
        test.expect(8);
        var gd = new GregorianDate({julianday: 1721424.5, timezone: "Etc/UTC"});
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 0);
        test.equal(gd.getMonths(), 12);
        test.equal(gd.getDays(), 31);
        test.equal(gd.getHours(), 0);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testGregDateEndOfYear0Rd: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(typeof(gd), 'object');
        test.equal(gd.getYears(), 0);
        test.equal(gd.getMonths(), 12);
        test.equal(gd.getDays(), 31);
        test.equal(gd.getHours(), 0);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.equal(gd.getMilliseconds(), 0);
        test.done();
    },
    
    testGregDateBeginningOfYearRd: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 1, timezone: "Etc/UTC"});
        
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
    
    testGregDateAlmostEndOfYearRd: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 364, timezone: "Etc/UTC"});
        
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
    
    testGregDateEndOfYearRd: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 365, timezone: "Etc/UTC"});
        
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
    
    testGregDateBeginningOfYear2Rd: function(test) {
        test.expect(8);
        var gd = new GregorianDate({rd: 366, timezone: "Etc/UTC"});
        
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
    
    testGregDateConvert: function(test) {
        var gd;
        
        for (var i = 0; i < testDatesGregorian.length; i++) {
            gd = new GregorianDate({julianday: testDatesGregorian[i][0], timezone: "Etc/UTC"});
        
        // console.log("testing jd=" + testDatesGregorian[i][0]);
            
            test.equal(typeof(gd), 'object');
            test.equal(gd.getYears(), testDatesGregorian[i][1]);
            test.equal(gd.getMonths(), testDatesGregorian[i][2]);
            test.equal(gd.getDays(), testDatesGregorian[i][3]);
            test.equal(gd.getHours(), testDatesGregorian[i][4]);
            test.equal(gd.getMinutes(), testDatesGregorian[i][5]);
            test.equal(gd.getSeconds(), testDatesGregorian[i][6]);
            test.equal(gd.getMilliseconds(), testDatesGregorian[i][7]);
            test.equal(gd.getDayOfWeek(), testDatesGregorian[i][8]);
        }
        test.done();
    },
    
    testGregDateConstructorFull: function(test) {
        test.expect(8);
        var gd = new GregorianDate({
            year: 2011, 
            month: 9, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123
        });
        
        test.ok(gd !== null);
        
        test.equal(gd.getYears(), 2011);
        test.equal(gd.getMonths(), 9);
        test.equal(gd.getDays(), 23);
        test.equal(gd.getHours(), 16);
        test.equal(gd.getMinutes(), 7);
        test.equal(gd.getSeconds(), 12);
        test.equal(gd.getMilliseconds(), 123);
        test.done();
    },
    
    testGregDateConstructorFullWithStrings: function(test) {
        test.expect(8);
        // often you get strings from a UI element instead of numbers... 
        // this constructor should work with numbers or strings
        var gd = new GregorianDate({
            year: "2011", 
            month: "9",
            day: "23", 
            hour: "16", 
            minute: "7", 
            second: "12", 
            millisecond: "123"
        });
        
        test.ok(gd !== null);
        
        test.equal(gd.getYears(), 2011);
        test.equal(gd.getMonths(), 9);
        test.equal(gd.getDays(), 23);
        test.equal(gd.getHours(), 16);
        test.equal(gd.getMinutes(), 7);
        test.equal(gd.getSeconds(), 12);
        test.equal(gd.getMilliseconds(), 123);
        test.done();
    },
    
    testGregDateConstructorCopy: function(test) {
        test.expect(8);
        var gd2 = new GregorianDate({
            year: 2011, 
            month: 9, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123
        });
        var gd = new GregorianDate(gd2);
        
        test.ok(gd !== null);
        
        test.equal(gd.getYears(), 2011);
        test.equal(gd.getMonths(), 9);
        test.equal(gd.getDays(), 23);
        test.equal(gd.getHours(), 16);
        test.equal(gd.getMinutes(), 7);
        test.equal(gd.getSeconds(), 12);
        test.equal(gd.getMilliseconds(), 123);
        test.done();
    },
    
    testGregDateConstructorEmpty: function(test) {
        test.expect(8);
        var gd = new GregorianDate();
        var now = new Date(gd.getTime()); // compare against the JS date
        test.ok(gd !== null);
        
        test.equal(now.getFullYear(), gd.getYears(), "year");
        test.equal(now.getMonth()+1, gd.getMonths(), "month"); // js date months are 0-11 instead of 1-12 like gregorian dates
        test.equal(now.getDate(), gd.getDays(), "day");
        test.equal(now.getHours(), gd.getHours(), "hour");
        test.equal(now.getMinutes(), gd.getMinutes(), "minute");
        test.equal(now.getSeconds(), gd.getSeconds(), "second");
        test.equal(now.getMilliseconds(), gd.getMilliseconds(), "millisecond");
        test.done();
    },
    
    testGregDateConstructorUnixTime: function(test) {
        test.expect(8);
        var gd = new GregorianDate({
            unixtime: 61000, 
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(1970, gd.getYears(), "year");
        test.equal(1, gd.getMonths(), "month");
        test.equal(1, gd.getDays(), "day");
        test.equal(0, gd.getHours(), "hour");
        test.equal(1, gd.getMinutes(), "minute");
        test.equal(1, gd.getSeconds(), "second");
        test.equal(0, gd.getMilliseconds(), "millisecond");
        test.done();
    },
    
    testGregDateGetJulianDay: function(test) {
        var gd;
        
        for (var i = 0; i < testDatesGregorian.length; i++) {
            gd = new GregorianDate({
                year: testDatesGregorian[i][1], 
                month: testDatesGregorian[i][2], 
                day: testDatesGregorian[i][3],
                hour: testDatesGregorian[i][4],
                minute: testDatesGregorian[i][5],
                second: testDatesGregorian[i][6],
                millisecond: testDatesGregorian[i][7],
                timezone: "Etc/UTC"
            });
        
        // console.log("testing jd=" + testDatesGregorian[i][0]);
            
            test.equal(typeof(gd), 'object');
            test.equal(gd.getJulianDay(), testDatesGregorian[i][0]);
            test.equal(gd.getDayOfWeek(), testDatesGregorian[i][8]);
        }
        test.done();
    },
    
    testGregDateSetYears: function(test) {
        test.expect(2);
        var gd = new GregorianDate();
        
        test.ok(gd !== null);
        
        gd.setYears(123);
        
        test.equal(gd.getYears(), 123);
        test.done();
    },
    
    testGregDateSetMonths: function(test) {
        test.expect(2);
        var gd = new GregorianDate();
        
        test.ok(gd !== null);
        
        gd.setMonths(7);
        
        test.equal(gd.getMonths(), 7);
        test.done();
    },
    
    testGregDateSetDays: function(test) {
        test.expect(2);
        var gd = new GregorianDate();
        
        test.ok(gd !== null);
        
        gd.setDays(12);
        
        test.equal(gd.getDays(), 12);
        test.done();
    },
    
    testGregDateSetHours: function(test) {
        test.expect(2);
        var gd = new GregorianDate();
        
        test.ok(gd !== null);
        
        gd.setHours(12);
        
        test.equal(gd.getHours(), 12);
        test.done();
    },
    
    testGregDateSetMinutes: function(test) {
        test.expect(2);
        var gd = new GregorianDate();
        
        test.ok(gd !== null);
        
        gd.setMinutes(13);
        
        test.equal(gd.getMinutes(), 13);
        test.done();
    },
    
    testGregDateSetSeconds: function(test) {
        test.expect(2);
        var gd = new GregorianDate();
        
        test.ok(gd !== null);
        
        gd.setSeconds(23);
        
        test.equal(gd.getSeconds(), 23);
        test.done();
    },
    
    testGregDateSetMilliseconds: function(test) {
        test.expect(2);
        var gd = new GregorianDate();
        
        test.ok(gd !== null);
        
        gd.setMilliseconds(123);
        
        test.equal(gd.getMilliseconds(), 123);
        test.done();
    },
    
    testGetDayOfWeek1: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 9, 
            day: 30,
            timezone: "Etc/UTC"
        });
        
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5);
        test.done();
    },
    
    testGetDayOfWeekWithTime: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 9, 
            day: 30, 
            hour: 8, 
            minute: 39, 
            second: 34,
            timezone: "Etc/UTC"
        });
        
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5);
        test.done();
    },
    
    testGetDayOfWeek2: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 1648, 
            month: 6, 
            day: 10,
            timezone: "Etc/UTC"
        });
        
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 3);
        test.done();
    },
    
    testGetDayOfWeek3: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 1190, 
            month: 3, 
            day: 23,
            timezone: "Etc/UTC"
        });
        
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5);
        test.done();
    },
    
    testGetDayOfWeek4: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: -586, 
            month: 7, 
            day: 24,
            timezone: "Etc/UTC"
        });
        
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 0);
        test.done();
    },
    
    testGetDayOfWeekWithTimezoneWestern: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2014, 
            month: 4,
            day: 25,
            hour: 23,
            minute: 59,
            timezone: "America/Los_Angeles"
        });
        
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5);
        test.done();
    },
    
    testGetDayOfWeekWithTimezoneEastern: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2014, 
            month: 4,
            day: 25,
            timezone: "Asia/Seoul"
        });
        
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5);
        test.done();
    },
    
    testGregDateTestGetTimeZero: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 1970, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTime(), 0);
        test.done();
    },
    
    testGregDateTestGetTimeCalifornia: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 1970, 
            month: 1, 
            day: 1,
            timezone: "America/Los_Angeles"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTime(), 28800000);
        test.done();
    },
    
    testGregDateTestGetTime: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 1970, 
            month: 1, 
            day: 3,
               hour: 8,
               minute: 30,
               timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTime(), 203400000);
        test.done();
    },
    
    testGregDateTestGetTimeTooEarly: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 1969, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTime(), -1);
        test.done();
    },
    
    testGregDateTestGetTimeTooLate: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2038, 
            month: 1, 
            day: 20,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTime(), -1);
        test.done();
    },
    
    testGregDateTestGetTimeExtendedZero: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 1970, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeExtended(), 0);
        test.done();
    },
    
    testGregDateTestGetTimeExtendedCalifornia: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 1970, 
            month: 1, 
            day: 1,
            timezone: "America/Los_Angeles"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeExtended(), 28800000);
        test.done();
    },
    
    testGregDateTestGetTimeExtended: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 1970, 
            month: 1, 
            day: 3,
               hour: 8,
               minute: 30,
               timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeExtended(), 203400000);
        test.done();
    },
    
    testGregDateTestGetTimeExtendedTooEarlyForRegularUnixTime: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 1969, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeExtended(), -86400000);
        test.done();
    },
    
    testGregDateTestGetTimeExtendedTooEarlyForExtendedUnixTime: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: -271821, 
            month: 4, 
            day: 18,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.ok(isNaN(gd.getTimeExtended()));
        test.done();
    },
    
    testGregDateTestGetTimeExtendedTooLateForRegularUnixTime: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2038, 
            month: 1, 
            day: 20,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeExtended(), 2147558400000);
        test.done();
    },
    
    testGregDateTestGetTimeExtendedTooLateForExtendedUnixTime: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 275760, 
            month: 9, 
            day: 20,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.ok(isNaN(gd.getTimeExtended()));
        test.done();
    },
    
    testGregDateTestSetTime1: function(test) {
        test.expect(8);
        var gd = new GregorianDate({
            year: 1970, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        test.equal(gd.getTime(), 0);
        
        // set to Jan 4, 1970 at 8:30:03
        gd.setTime(86400000*3 + 3600000*8 + 60000*30 + 3000);
        
        test.equal(gd.getYears(), 1970);
        test.equal(gd.getMonths(), 1);
        test.equal(gd.getDays(), 4);
        test.equal(gd.getHours(), 8);
        test.equal(gd.getMinutes(), 30);
        test.equal(gd.getSeconds(), 3);
        test.done();
    },
    
    testGregDateTestSetTimeZero: function(test) {
        test.expect(7);
        var gd = new GregorianDate({
            year: -1, 
            month: 1,
            day: 1,
               hour: 1,
               minute: 1,
               second: 1,
               millisecond: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        gd.setTime(0);
        
        test.equal(gd.getYears(), 1970);
        test.equal(gd.getMonths(), 1);
        test.equal(gd.getDays(), 1);
        test.equal(gd.getHours(), 0);
        test.equal(gd.getMinutes(), 0);
        test.equal(gd.getSeconds(), 0);
        test.done();
    },
    
    // test some of the helper functions to make sure they are producing the right thing
    testGregDateOnOrBeforeSun: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        // Sunday on or before is 5 days before 
        test.equal(gd.onOrBefore(0).getRataDie(), rd-5);
        test.done();
    },
    
    testGregDateOnOrBeforeMon: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.onOrBefore(1).getRataDie(), rd-4);
        test.done();
    },
    
    testGregDateOnOrBeforeTue: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.onOrBefore(2).getRataDie(), rd-3);
        test.done();
    },
    
    testGregDateOnOrBeforeWed: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.onOrBefore(3).getRataDie(), rd-2);
        test.done();
    },
    
    testGregDateOnOrBeforeThu: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.onOrBefore(4).getRataDie(), rd-1);
        test.done();
    },
    
    testGregDateOnOrBeforeFri: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.onOrBefore(5).getRataDie(), rd);
        test.done();
    },
    
    testGregDateOnOrBeforeSat: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.onOrBefore(6).getRataDie(), rd-6);
        test.done();
    },
    
    testGregDateOnOrBeforeSunWithTime: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
               hour: 8,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie(); // contains fractional time for the 8:00am part
        
        // Sunday on or before is 5 days before 
        // Should give an rd result that also contains the fractional time 
        test.equal(gd.onOrBefore(0).getRataDie(), rd-5);
        test.done();
    },
    
    testGregDateOnOrBeforeSunWithTimeZoneWestern1: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2014, 
            month: 4,
            day: 26,
               hour: 23,
               minute: 59,
               timezone: "America/Los_Angeles"
        }); // this is Saturday in Los Angeles, but Sunday in UTC 
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 6); // Saturday
        var rd = gd.getRataDie(); // contains fractional time for the 8:00am part
        
        // Sunday on or before is 6 days before 
        // Should give an rd result that also contains the fractional time 
        test.equal(gd.onOrBefore(0).getRataDie(), rd-6);
        test.done();
    },
    
    testGregDateOnOrBeforeSunWithTimeZoneWestern2: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2014, 
            month: 4, 
            day: 27,
               hour: 0,
               minute: 0,
               timezone: "America/Los_Angeles"
        }); // this is Sunday in Los Angeles and in UTC 
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 0); // Friday
        var rd = gd.getRataDie(); // contains fractional time for the 8:00am part
        
        // Sunday on or before is 5 days before 
        // Should give an rd result that also contains the fractional time 
        test.equal(gd.onOrBefore(0).getRataDie(), rd);
        test.done();
    },
    
    testGregDateOnOrBeforeSunWithTimeZoneEastern1: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2014, 
            month: 4,
            day: 27,
               hour: 0,
               minute: 0,
               timezone: "Asia/Seoul"
        }); // this is Saturday in UTC, but Sunday in Seoul
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 0); // Sunday
        var rd = gd.getRataDie(); // contains fractional time for the 8:00am part
        
        // Sunday on or before is today 
        // Should give an rd result that also contains the fractional time 
        test.equal(gd.onOrBefore(0).getRataDie(), rd);
        test.done();
    },
    
    testGregDateOnOrBeforeSunWithTimeZoneEastern2: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2014, 
            month: 4, 
            day: 26,
               hour: 23,
               minute: 59,
               timezone: "Asia/Seoul"
        }); // this is Saturday in Seoul and in UTC 
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 6); // Saturday
        var rd = gd.getRataDie(); // contains fractional time for the 8:00am part
        
        // Sunday on or before is 6 days before 
        // Should give an rd result that also contains the fractional time 
        test.equal(gd.onOrBefore(0).getRataDie(), rd-6);
        test.done();
    },
    
    testGregDateOnOrAfterSun: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        // Sunday on or before is 5 days before 
        test.equal(gd.onOrAfter(0).getRataDie(), rd+2);
        test.done();
    },
    
    testGregDateOnOrAfterSunDate: function(test) {
        test.expect(5);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var date = gd.onOrBefore(0);
        
        // Sunday on or before is 5 days before
        test.equal(date.year, 2009);
        test.equal(date.month, 12);
        test.equal(date.day, 27);
        test.done();
    },
    
    testGregDateOnOrAfterMon: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.onOrAfter(1).getRataDie(), rd+3);
        test.done();
    },
    
    testGregDateOnOrAfterMonDate: function(test) {
        test.expect(5);
        var gd = new GregorianDate({
            year: 2010,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var date = gd.onOrAfter(1);
        
        test.equal(date.year, 2010);
        test.equal(date.month, 1);
        test.equal(date.day, 4);
        test.done();
    },
    
    testGregDateOnOrAfterTue: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.onOrAfter(2).getRataDie(), rd+4);
        test.done();
    },
    
    testGregDateOnOrAfterWed: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.onOrAfter(3).getRataDie(), rd+5);
        test.done();
    },
    
    testGregDateOnOrAfterThu: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.onOrAfter(4).getRataDie(), rd+6);
        test.done();
    },
    
    testGregDateOnOrAfterThuDate: function(test) {
        test.expect(5);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var date = gd.onOrAfter(4);
        
        test.equal(date.year, 2010);
        test.equal(date.month, 1);
        test.equal(date.day, 7);
        test.done();
    },
    
    testGregDateOnOrAfterFri: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.onOrAfter(5).getRataDie(), rd);
        test.done();
    },
    
    testGregDateOnOrAfterFriDate: function(test) {
        test.expect(5);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var date = gd.onOrAfter(5);
        
        test.equal(date.year, 2010);
        test.equal(date.month, 1);
        test.equal(date.day, 1);
        test.done();
    },
    
    testGregDateOnOrAfterSat: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.onOrAfter(6).getRataDie(), rd+1);
        test.done();
    },
    
    testGregDateBeforeSun: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        // Sunday before is 5 days before 
        test.equal(gd.before(0).getRataDie(), rd-5);
        test.done();
    },
    
    testGregDateBeforeSunDate: function(test) {
        test.expect(5);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var date = gd.before(0);
        
        // Sunday before is 5 days before 
        test.equal(date.year, 2009);
        test.equal(date.month, 12);
        test.equal(date.day, 27);
        test.done();
    },
    
    testGregDateBeforeMon: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.before(1).getRataDie(), rd-4);
        test.done();
    },
    
    testGregDateBeforeTue: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.before(2).getRataDie(), rd-3);
        test.done();
    },
    
    testGregDateBeforeWed: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.before(3).getRataDie(), rd-2);
        test.done();
    },
    
    testGregDateBeforeThu: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.before(4).getRataDie(), rd-1);
        test.done();
    },
    
    testGregDateBeforeThuDate: function(test) {
        test.expect(5);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var date = gd.before(4);
        
        // Thursday before is 1 day before 
        test.equal(date.year, 2009);
        test.equal(date.month, 12);
        test.equal(date.day, 31);
        test.done();
    },
    
    testGregDateBeforeFri: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.before(5).getRataDie(), rd-7);
        test.done();
    },
    
    testGregDateBeforeFriDate: function(test) {
        test.expect(5);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var date = gd.before(5);
        
        // Friday before is 7 days before the current Friday
        test.equal(date.year, 2009);
        test.equal(date.month, 12);
        test.equal(date.day, 25);
        test.done();
    },
    
    testGregDateBeforeSat: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.before(6).getRataDie(), rd-6);
        test.done();
    },
    
    testGregDateAfterSun: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        // Sunday after is 2 days after 
        test.equal(gd.after(0).getRataDie(), rd+2);
        test.done();
    },
    
    testGregDateAfterSunDate: function(test) {
        test.expect(5);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var date = gd.after(0);
        
        // Sunday after is 2 days after 
        test.equal(date.year, 2010);
        test.equal(date.month, 1);
        test.equal(date.day, 3);
        test.done();
    },
    
    testGregDateAfterMon: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.after(1).getRataDie(), rd+3);
        test.done();
    },
    
    testGregDateAfterTue: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.after(2).getRataDie(), rd+4);
        test.done();
    },
    
    testGregDateAfterWed: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.after(3).getRataDie(), rd+5);
        test.done();
    },
    
    testGregDateAfterThu: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.after(4).getRataDie(), rd+6);
        test.done();
    },
    
    testGregDateAfterFri: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.after(5).getRataDie(), rd+7);
        test.done();
    },
    
    testGregDateAfterFriDate: function(test) {
        test.expect(5);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var date = gd.after(5);
        
        // Friday after is 7 days after 
        test.equal(date.year, 2010);
        test.equal(date.month, 1);
        test.equal(date.day, 8);
        test.done();
    },
    
    testGregDateAfterSat: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var rd = gd.getRataDie();
        
        test.equal(gd.after(6).getRataDie(), rd+1);
        test.done();
    },
    
    testGregDateAfterSatDate: function(test) {
        test.expect(5);
        var gd = new GregorianDate({
            year: 2010, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfWeek(), 5); // Friday
        var date = gd.after(6);
        
        // Sat after is 1 day after 
        test.equal(date.year, 2010);
        test.equal(date.month, 1);
        test.equal(date.day, 2);
        test.done();
    },
    
    testGregDateTestGetWeekOfYearThisYear: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 1, 
            day: 7,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfYear(), 1);
        test.done();
    },
    
    testGregDateTestGetWeekOfYearThisYear2: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 1, 
            day: 25,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfYear(), 4);
        test.done();
    },
    
    testGregDateTestGetWeekOfYearThisYear3: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 10, 
            day: 19,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfYear(), 42);
        test.done();
    },
    
    testGregDateTestGetWeekOfYearThisYearWithTime: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: -2011, 
            month: 10, 
            day: 19,
               hour: 16,
               minute: 13,
               second: 12,
               millisecond: 232,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfYear(), 42);
        test.done();
    },
    
    testGregDateTestGetWeekOfYearPreviousYear: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfYear(), 52);
        test.done();
    },
    
    testGregDateTestGetWeekOfYearLastWeekLeap: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2009, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfYear(), 53);
        test.done();
    },
    
    testGregDateTestGetWeekOfYearLastWeekRegular1: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2010, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfYear(), 52);
        test.done();
    },
    
    testGregDateTestGetWeekOfYearLastWeekRegular2: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2008, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfYear(), 1);
        test.done();
    },
    
    testGregDateTestGetWeekOfYearLastWeekRegular3: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2007, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfYear(), 1);
        test.done();
    },
    
    testGregDateTestGetWeekOfYearLastWeekRegular4: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2006, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfYear(), 1);
        test.done();
    },
    
    testGregDateTestGetWeekOfYearLastWeekRegular5: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2005, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfYear(), 52);
        test.done();
    },
    
    testGregDateTestGetWeekOfYearLastWeekRegular6: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfYear(), 52);
        test.done();
    },
    
    testGregDateGetDayOfYearFirstDay: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfYear(), 1);
        test.done();
    },
    
    testGregDateGetDayOfYearPaddysDay: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 3, 
            day: 17,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfYear(), 76);
        test.done();
    },
    
    testGregDateGetDayOfYearPaddysDayLeapYear: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2008, 
            month: 3, 
            day: 17,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfYear(), 77);
        test.done();
    },
    
    testGregDateGetDayOfYearLastDay: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfYear(), 365);
        test.done();
    },
    
    testGregDateGetDayOfYearLastDayLeapYear: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2008, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getDayOfYear(), 366);
        test.done();
    },
    
    testGregDateGetWeekOfMonth0: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 10, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testGregDateGetWeekOfMonth1: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 10, 
            day: 2,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testGregDateGetWeekOfMonth2: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 10, 
            day: 11,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfMonth("en-US"), 2);
        test.done();
    },
    
    testGregDateGetWeekOfMonth3: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 10, 
            day: 20,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfMonth("en-US"), 3);
        test.done();
    },
    
    testGregDateGetWeekOfMonth4: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 10, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfMonth("en-US"), 4);
        test.done();
    },
    
    testGregDateGetWeekOfMonth5: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 10, 
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfMonth("en-US"), 5);
        test.done();
    },
    
    testGregDateGetWeekOfMonth6: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 9, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testGregDateGetWeekOfMonth7: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 8, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testGregDateGetWeekOfMonth8: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 7, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testGregDateGetWeekOfMonth9: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 6, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testGregDateGetWeekOfMonthUS: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 5, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testGregDateGetWeekOfMonthDE: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 5, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        // weeks in Germany start on Monday, and May 1st is a Sunday, so it is at the 
        // end of the preceding week.
        test.equal(gd.getWeekOfMonth("de-DE"), 0);
        test.done();
    },
    
    testGregDateGetEraCE: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 5, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getEra(), 1);
        test.done();
    },
    
    testGregDateGetEraBCE: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: -46, 
            month: 5, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getEra(), -1);
        test.done();
    },
    
    testGregDateGetEraCEYear1: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 1, 
            month: 1, 
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getEra(), 1);
        test.done();
    },
    
    testGregDateGetEraCEYear0: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 0, 
            month: 12, 
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getEra(), -1);
        test.done();
    },
    
    testGregDateJan1Midnight: function(test) {
        test.expect(8);
        var gd = new GregorianDate({
            julianday: 2455197.5,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.year, 2010);
        test.equal(gd.month, 1);
        test.equal(gd.day, 1);
        test.equal(gd.hour, 0);
        test.equal(gd.minute, 0);
        test.equal(gd.second, 0);
        test.equal(gd.millisecond, 0);
        test.done();
    },
    
    testGregDateGetRataDie: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 3, 
            day: 8,
            timezone: "Etc/UTC"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getRataDie(), 734204);
        test.done();
    },
    
    testGregDateGetTimeZone: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "America/Los_Angeles");
        test.done();
    },
    
    testGregDateGetTimeZoneDefault: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 3, 
            day: 8
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "local");
        test.done();
    },
    
    testGregDateGetTimeZoneByLocale: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 3, 
            day: 8,
            locale: "de-DE"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "Europe/Berlin");
        test.done();
    },
    
    testGregDateGetTimeZoneByLocaleBogus: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            year: 2011, 
            month: 3, 
            day: 8,
            locale: "zz-ZZ"
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "Etc/UTC");
        test.done();
    },
    
    testGregDateCurrentTimeWithTimeZone: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            timezone: "America/Los_Angeles"
        });
        var d = new Date();
        test.ok(gd !== null);
        
        test.roughlyEqual(30, gd.getTime(), d.getTime());
        test.done();
    },
    
    testGregDateSetTimeZone: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
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
    
    testGregDateSetTimeZoneNotString: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
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
    
    testGregDateSetTimeZoneUndefined: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
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
    
    testGregDateSetTimeZoneEmpty: function(test) {
        test.expect(3);
        var gd = new GregorianDate({
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
    
    testGregDateInitWithUnixTimeRightTimeZone: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            unixtime: 0
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "local");
        test.done();
    },
    
    testGregDateInitWithJDRightTimeZone: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            julianday: 0
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "local");
        test.done();
    },
    
    testGregDateInitWithRDRightTimeZone: function(test) {
        test.expect(2);
        var gd = new GregorianDate({
            rd: 0
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "local");
        test.done();
    },
    
    // for GF-33596
    testGregDateGetTimeWithUnixTime: function(test) {
        test.expect(2);
        var d = new Date(2011, 2, 8, 0, 0, 0, 0);
        var gd = new GregorianDate({
            year: 2011,
            month: 3, 
            day: 8,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTime(), d.getTime());
        test.done();
    },
    
    testGregDateGetTimeWithUTC: function(test) {
        test.expect(2);
        var utc = Date.UTC(2013, 10, 1);
        var d = new Date(utc);
        var gd = new GregorianDate({
            unixtime: utc
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTime(), d.getTime());
        test.done();
    },
    
    testGregDateGetTimeWithDefaultTime: function(test) {
        test.expect(2);
        var d = new Date();
        var gd = new GregorianDate();
        
        test.ok(gd !== null);
        
        test.roughlyEqual(100, gd.getTime(), d.getTime());
        test.done();
    },
    
    testGregDateRoundTripConstruction: function(test) {
        test.expect(8);
        var gd = new GregorianDate({
            year: 2014,
            month: 11,
            day: 3,
            timezone: "local"
        });
        test.ok(gd !== null);
        // console.log("gd is " + JSON.stringify(gd, undefined, 4));
        
        var u = gd.getTime();
        // console.log("unixtime is " + u);
        var gd2 = new GregorianDate({
            unixtime: u,
            timezone: "local"
        });
        // console.log("gd2 is " + JSON.stringify(gd2, undefined, 4));
        test.equal(gd2.getTimeZone(), gd.getTimeZone());
        test.equal(gd2.getYears(), gd.getYears());
        test.equal(gd2.getMonths(), gd.getMonths());
        test.equal(gd2.getDays(), gd.getDays());
        test.equal(gd2.getHours(), gd.getHours());
        test.equal(gd2.getMinutes(), gd.getMinutes());
        test.equal(gd2.getSeconds(), gd.getSeconds());
        test.done();
    },
    
    testGregDateRoundTripConstruction2: function(test) {
        test.expect(8);
        var gd = new GregorianDate({
            year: 2014,
            month: 11,
            day: 3,
            timezone: "America/Los_Angeles"
        });
        test.ok(gd !== null);
        // console.log("gd is " + JSON.stringify(gd, undefined, 4));
        
        var u = gd.getTime();
        // console.log("unixtime is " + u);
        var gd2 = new GregorianDate({
            unixtime: u,
            timezone: "America/Los_Angeles"
        });
        // console.log("gd2 is " + JSON.stringify(gd2, undefined, 4));
        test.equal(gd2.getTimeZone(), gd.getTimeZone());
        test.equal(gd2.getYears(), gd.getYears());
        test.equal(gd2.getMonths(), gd.getMonths());
        test.equal(gd2.getDays(), gd.getDays());
        test.equal(gd2.getHours(), gd.getHours());
        test.equal(gd2.getMinutes(), gd.getMinutes());
        test.equal(gd2.getSeconds(), gd.getSeconds());
        test.done();
    }
    
};