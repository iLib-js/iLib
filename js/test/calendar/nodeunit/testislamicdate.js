/*
 * testislamicdate.js - test the islamic date object
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

if (typeof(IslamicDate) === "undefined") {
    var IslamicDate = require("../.././../lib/IslamicDate.js");
}

var testDatesIslamic = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, -1245, 12,    9,   0,    0,      0,      0,           0],
    [1660037.5, -813,  2,     23,  0,    0,      0,      0,           3],
    [1746893.5, -568,  4,     1,   0,    0,      0,      0,           3],
    [1770641.5, -501,  4,     6,   0,    0,      0,      0,           0],
    [1892731.5, -157,  10,    17,  0,    0,      0,      0,           3],
    [1931579.5, -47,   6,     3,   0,    0,      0,      0,           1],
    [1974851.5, 75,    7,     13,  0,    0,      0,      0,           6],
    [2091164.5, 403,   10,    5,   0,    0,      0,      0,           0],
    [2121509.5, 489,   5,     22,  0,    0,      0,      0,           0],
    [2155779.5, 586,   2,     7,   0,    0,      0,      0,           5],
    [2174029.5, 637,   8,     7,   0,    0,      0,      0,           6],
    [2191584.5, 687,   2,     20,  0,    0,      0,      0,           5],
    [2195261.5, 697,   7,     7,   0,    0,      0,      0,           0],
    [2229274.5, 793,   7,     1,   0,    0,      0,      0,           0],
    [2245580.5, 839,   7,     6,   0,    0,      0,      0,           3],
    [2266100.5, 897,   6,     1,   0,    0,      0,      0,           6],
    [2288542.5, 960,   9,     30,  0,    0,      0,      0,           6],
    [2290901.5, 967,   5,     27,  0,    0,      0,      0,           6],
    [2323140.5, 1058,  5,     18,  0,    0,      0,      0,           3],
    [2334848.5, 1091,  6,     2,   0,    0,      0,      0,           0],
    [2348020.5, 1128,  8,     4,   0,    0,      0,      0,           5],
    [2366978.5, 1182,  2,     3,   0,    0,      0,      0,           0],
    [2385648.5, 1234,  10,    10,  0,    0,      0,      0,           1],
    [2392825.5, 1255,  1,     11,  0,    0,      0,      0,           3],
    [2416223.5, 1321,  1,     21,  0,    0,      0,      0,           0],
    [2425848.5, 1348,  3,     19,  0,    0,      0,      0,           0],
    [2430266.5, 1360,  9,     8,   0,    0,      0,      0,           1],
    [2430833.5, 1362,  4,     13,  0,    0,      0,      0,           1],
    [2431004.5, 1362,  10,    7,   0,    0,      0,      0,           4],
    [2448698.5, 1412,  9,     13,  0,    0,      0,      0,           2],
    [2450138.5, 1416,  10,    5,   0,    0,      0,      0,           0],
    [2465737.5, 1460,  10,    12,  0,    0,      0,      0,           3],
    [2486076.5, 1518,  3,     5,   0,    0,      0,      0,           0]
];

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testislamicdate = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testIslamicDateConstructor: function(test) {
        var id = new IslamicDate();
        
        test.expect(1);
        test.ok(id !== null);
        test.done();
    },
    
    /* julian date id rd 355 + epoch */
    testIslamicDateConstructorFromJD: function(test) {
        var id = new IslamicDate({julianday: 1948793.5, timezone: "Etc/UTC"});
        
        test.expect(9);
        test.equal(typeof(id), 'object');
        test.equal(id.getRataDie(), 354);
        test.equal(id.getYears(), 2);
        test.equal(id.getMonths(), 1);
        test.equal(id.getDays(), 1);
        test.equal(id.getHours(), 0);
        test.equal(id.getMinutes(), 0);
        test.equal(id.getSeconds(), 0);
        test.equal(id.getMilliseconds(), 0);
        test.done();
    },
    
    testIslamicDateAfterLeapYear: function(test) {
        var id = new IslamicDate({julianday: 1949148.9, timezone: "Etc/UTC"});  // Muh 1, 0003 AH, 9:36am
        
        test.expect(9);
        test.equal(typeof(id), 'object');
        test.equal(id.getRataDie(), 709.4);
        test.equal(id.getYears(), 3);
        test.equal(id.getMonths(), 1);
        test.equal(id.getDays(), 1);
        test.equal(id.getHours(), 9);
        test.equal(id.getMinutes(), 36);
        test.equal(id.getSeconds(), 0);
        test.equal(id.getMilliseconds(), 0);
        test.done();
    },
    
    testIslamicDateConvert: function(test) {
        var id;
        
        for (var i = 0; i < testDatesIslamic.length; i++) {
            id = new IslamicDate({julianday: testDatesIslamic[i][0], timezone: "Etc/UTC"});
        
        // console.log("testing jd=" + testDatesIslamic[i][0]);
            
            test.equal(typeof(id), 'object');
            test.equal((testDatesIslamic[i][0] - 1948439.5), id.getRataDie(), "testing rd for " + testDatesIslamic[i][0]);
            test.equal(testDatesIslamic[i][1], id.getYears(), "testing year for " + testDatesIslamic[i][0]);
            test.equal(testDatesIslamic[i][2], id.getMonths(), "testing month for " + testDatesIslamic[i][0]);
            test.equal(testDatesIslamic[i][3], id.getDays(), "testing day for " + testDatesIslamic[i][0]);
            test.equal(testDatesIslamic[i][4], id.getHours(), "testing hour for " + testDatesIslamic[i][0]);
            test.equal(testDatesIslamic[i][5], id.getMinutes(), "testing minute for " + testDatesIslamic[i][0]);
            test.equal(testDatesIslamic[i][6], id.getSeconds(), "testing second for " + testDatesIslamic[i][0]);
            test.equal(testDatesIslamic[i][7], id.getMilliseconds(), "testing millisecond for " + testDatesIslamic[i][0]);
            test.equal(testDatesIslamic[i][8], id.getDayOfWeek(), "testing day of week for " + testDatesIslamic[i][0]);
        }
        test.done();
    },
    
    testIslamicDateConstructorFull: function(test) {
        var id = new IslamicDate({
            year: 2011,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        
        test.expect(8);
        test.ok(id !== null);
        
        test.equal(id.getYears(), 2011);
        test.equal(id.getMonths(), 9);
        test.equal(id.getDays(), 23);
        test.equal(id.getHours(), 16);
        test.equal(id.getMinutes(), 7);
        test.equal(id.getSeconds(), 12);
        test.equal(id.getMilliseconds(), 123);
        test.done();
    },
    
    testIslamicDateConstructorFullWithStrings: function(test) {
        var id = new IslamicDate({
            year: "2011", 
            month: "9",
            day: "23", 
            hour: "16", 
            minute: "7", 
            second: "12", 
            millisecond: "123"
        });
        
        test.expect(8);
        test.ok(id !== null);
        
        test.equal(id.getYears(), 2011);
        test.equal(id.getMonths(), 9);
        test.equal(id.getDays(), 23);
        test.equal(id.getHours(), 16);
        test.equal(id.getMinutes(), 7);
        test.equal(id.getSeconds(), 12);
        test.equal(id.getMilliseconds(), 123);
        test.done();
    },
    
    testIslamicDateConstructorCopy: function(test) {
        var id = new IslamicDate({
            year: 2011, 
            month: 9, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        
        test.expect(8);
        test.ok(id !== null);
        
        test.equal(id.getYears(), 2011);
        test.equal(id.getMonths(), 9);
        test.equal(id.getDays(), 23);
        test.equal(id.getHours(), 16);
        test.equal(id.getMinutes(), 7);
        test.equal(id.getSeconds(), 12);
        test.equal(id.getMilliseconds(), 123);
        test.done();
    },
    
    testIslamicDateGetJulianDay: function(test) {
        var id;
        
        for (var i = 0; i < testDatesIslamic.length; i++) {
            id = new IslamicDate({
                year: testDatesIslamic[i][1], 
                month: testDatesIslamic[i][2], 
                day: testDatesIslamic[i][3],
                hour: testDatesIslamic[i][4],
                minute: testDatesIslamic[i][5],
                second: testDatesIslamic[i][6],
                millisecond: testDatesIslamic[i][7],
                timezone: "Etc/UTC"
            });
        
        // console.log("testing jd=" + testDatesIslamic[i][0]);
            
            test.equal(typeof(id), 'object');
            test.equal(testDatesIslamic[i][0], id.getJulianDay(), "testing row " + testDatesIslamic[i][0]);
            test.equal(id.getDayOfWeek(), testDatesIslamic[i][8]);
        }
        test.done();
    },
    
    testIslamicDateSetYears: function(test) {
        var id = new IslamicDate();
        
        test.expect(2);
        test.ok(id !== null);
        
        id.setYears(123);
        
        test.equal(id.getYears(), 123);
        test.done();
    },
    
    testIslamicDateSetMonths: function(test) {
        var id = new IslamicDate();
        
        test.expect(2);
        test.ok(id !== null);
        
        id.setMonths(7);
        
        test.equal(id.getMonths(), 7);
        test.done();
    },
    
    testIslamicDateSetDays: function(test) {
        var id = new IslamicDate();
        
        test.expect(2);
        test.ok(id !== null);
        
        id.setDays(12);
        
        test.equal(id.getDays(), 12);
        test.done();
    },
    
    testIslamicDateSetHours: function(test) {
        var id = new IslamicDate();
        
        test.expect(2);
        test.ok(id !== null);
        
        id.setHours(12);
        
        test.equal(id.getHours(), 12);
        test.done();
    },
    
    testIslamicDateSetMinutes: function(test) {
        var id = new IslamicDate();
        
        test.expect(2);
        test.ok(id !== null);
        
        id.setMinutes(13);
        
        test.equal(id.getMinutes(), 13);
        test.done();
    },
    
    testIslamicDateSetSeconds: function(test) {
        var id = new IslamicDate();
        
        test.expect(2);
        test.ok(id !== null);
        
        id.setSeconds(23);
        
        test.equal(id.getSeconds(), 23);
        test.done();
    },
    
    testIslamicDateSetMilliseconds: function(test) {
        var id = new IslamicDate();
        
        test.expect(2);
        test.ok(id !== null);
        
        id.setMilliseconds(123);
        
        test.equal(id.getMilliseconds(), 123);
        test.done();
    },
    
    testGetDayOfWeek1: function(test) {
        var id = new IslamicDate({
            year: 1432,
            month: 11,
            day: 2,
            timezone: "Etc/UTC"
        });
        
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5);
        test.done();
    },
    
    testGetDayOfWeekWithTime: function(test) {
        var id = new IslamicDate({
            year: 1432,
            month: 11,
            day: 2,
            hour: 8,
            minute: 39,
            second: 34,
            timezone: "Etc/UTC"
        });
        
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5);
        test.done();
    },
    
    testIslamicDateTestGetTimeZero: function(test) {
        var id = new IslamicDate({
            year: 1389,
            month: 10,
            day: 22,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getTime(), 0);
        test.done();
    },
    
    testIslamicDateTestGetTimeZeroJD: function(test) {
        var id = new IslamicDate({julianday: 2440587.5});
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getTime(), 0);
        test.done();
    },
    
    testIslamicDateTestGetTime: function(test) {
        var id = new IslamicDate({
            year: 1389,
            month: 10,
            day: 24,
            hour: 8,
            minute: 30,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getTime(), 203400000);
        test.done();
    },
    
    testIslamicDateTestGetTimeTooEarly: function(test) {
        var id = new IslamicDate({
            year: 1389,
            month: 10,
            day: 21,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getTime(), -1);
        test.done();
    },
    
    testIslamicDateTestGetTimeTooLate: function(test) {
        var id = new IslamicDate({
            year: 1459,
            month: 12,
            day: 13,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getTime(), -1);
        test.done();
    },
    
    // test some of the helper functions to make sure they are producing the right thing
    testIslamicDateOnOrBeforeSun: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        // Sunday on or before id 5 days before 
        test.equal(id.onOrBefore(0).getRataDie(), rd-5);
        test.done();
    },
    
    testIslamicDateOnOrBeforeMon: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.onOrBefore(1).getRataDie(), rd-4);
        test.done();
    },
    
    testIslamicDateOnOrBeforeTue: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.onOrBefore(2).getRataDie(), rd-3);
        test.done();
    },
    
    testIslamicDateOnOrBeforeWed: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.onOrBefore(3).getRataDie(), rd-2);
        test.done();
    },
    
    testIslamicDateOnOrBeforeThu: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.onOrBefore(4).getRataDie(), rd-1);
        test.done();
    },
    
    testIslamicDateOnOrBeforeFri: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.onOrBefore(5).getRataDie(), rd);
        test.done();
    },
    
    testIslamicDateOnOrBeforeSat: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.onOrBefore(6).getRataDie(), rd-6);
        test.done();
    },
    
    testIslamicDateOnOrAfterSun: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        // Sunday on or before id 5 days before 
        test.equal(id.onOrAfter(0).getRataDie(), rd+2);
        test.done();
    },
    
    testIslamicDateOnOrAfterMon: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.onOrAfter(1).getRataDie(), rd+3);
        test.done();
    },
    
    testIslamicDateOnOrAfterTue: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.onOrAfter(2).getRataDie(), rd+4);
        test.done();
    },
    
    testIslamicDateOnOrAfterWed: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.onOrAfter(3).getRataDie(), rd+5);
        test.done();
    },
    
    testIslamicDateOnOrAfterThu: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.onOrAfter(4).getRataDie(), rd+6);
        test.done();
    },
    
    testIslamicDateOnOrAfterFri: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.onOrAfter(5).getRataDie(), rd);
        test.done();
    },
    
    testIslamicDateOnOrAfterSat: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.onOrAfter(6).getRataDie(), rd+1);
        test.done();
    },
    
    testIslamicDateBeforeSun: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        // Sunday before id 5 days before 
        test.equal(id.before(0).getRataDie(), rd-5);
        test.done();
    },
    
    testIslamicDateBeforeMon: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.before(1).getRataDie(), rd-4);
        test.done();
    },
    
    testIslamicDateBeforeTue: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.before(2).getRataDie(), rd-3);
        test.done();
    },
    
    testIslamicDateBeforeWed: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.before(3).getRataDie(), rd-2);
        test.done();
    },
    
    testIslamicDateBeforeThu: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.before(4).getRataDie(), rd-1);
        test.done();
    },
    
    testIslamicDateBeforeFri: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.before(5).getRataDie(), rd-7);
        test.done();
    },
    
    testIslamicDateBeforeSat: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.before(6).getRataDie(), rd-6);
        test.done();
    },
    
    testIslamicDateAfterSun: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        // Sunday on or before id 5 days before 
        test.equal(id.after(0).getRataDie(), rd+2);
        test.done();
    },
    
    testIslamicDateAfterMon: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.after(1).getRataDie(), rd+3);
        test.done();
    },
    
    testIslamicDateAfterTue: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.after(2).getRataDie(), rd+4);
        test.done();
    },
    
    testIslamicDateAfterWed: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.after(3).getRataDie(), rd+5);
        test.done();
    },
    
    testIslamicDateAfterThu: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.after(4).getRataDie(), rd+6);
        test.done();
    },
    
    testIslamicDateAfterFri: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.after(5).getRataDie(), rd+7);
        test.done();
    },
    
    testIslamicDateAfterSat: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getDayOfWeek(), 5); // Friday
        var rd = id.getRataDie();
        
        test.equal(id.after(6).getRataDie(), rd+1);
        test.done();
    },
    
    testIslamicDateTestGetWeekOfYearThisYear: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 2,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfYear(), 5);
        test.done();
    },
    
    testIslamicDateTestGetWeekOfYearThisYear2: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 3,
            day: 19,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfYear(), 11);
        test.done();
    },
    
    testIslamicDateTestGetWeekOfYearThisYear3: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfYear(), 1);
        test.done();
    },
    
    testIslamicDateTestGetWeekOfYearThisYearWithTime: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 12,
            day: 29,
            hour: 16,
            minute: 13,
            second: 12,
            millisecond: 232,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfYear(), 1);
        test.done();
    },
    
    testIslamicDateTestGetWeekOfYearPreviousYear: function(test) {
        var id = new IslamicDate({
            year: 1428,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfYear(), 51);
        test.done();
    },
    
    testIslamicDateTestGetWeekOfYearLastWeekLeap: function(test) {
        var id = new IslamicDate({
            year: 1429,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfYear(), 1);
        test.done();
    },
    
    testIslamicDateTestGetWeekOfYearLastWeekRegular1: function(test) {
        var id = new IslamicDate({
            year: 1428,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfYear(), 1);
        test.done();
    },
    
    testIslamicDateTestGetWeekOfYearLastWeekRegular2: function(test) {
        var id = new IslamicDate({
            year: 1427,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfYear(), 51);
        test.done();
    },
    
    testIslamicDateTestGetWeekOfYearLastWeekRegular3: function(test) {
        var id = new IslamicDate({
            year: 1426,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfYear(), 1);
        test.done();
    },
    
    testIslamicDateTestGetWeekOfYearLastWeekRegular4: function(test) {
        var id = new IslamicDate({
            year: 1425,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfYear(), 1);
        test.done();
    },
    
    testIslamicDateTestGetWeekOfYearLastWeekRegular5: function(test) {
        var id = new IslamicDate({
            year: 1424,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfYear(), 51);
        test.done();
    },
    
    testIslamicDateTestGetWeekOfYearLastWeekRegular6: function(test) {
        var id = new IslamicDate({
            year: 1423,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfYear(), 1);
        test.done();
    },
    
    testIslamicDateGetDayOfYearFirstDay: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getDayOfYear(), 1);
        test.done();
    },
    
    testIslamicDateGetDayOfYearMidYear: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 3,
            day: 17,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getDayOfYear(), 76);
        test.done();
    },
    
    testIslamicDateGetDayOfYearLastDay: function(test) {
        var id = new IslamicDate({
            year: 1430,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getDayOfYear(), 354);
        test.done();
    },
    
    testIslamicDateGetDayOfYearLastDayLeapYear: function(test) {
        var id = new IslamicDate({
            year: 1431,
            month: 12,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getDayOfYear(), 355);
        test.done();
    },
    
    testIslamicDateGetWeekOfMonth0: function(test) {
        var id = new IslamicDate({
            year: 1432,
            month: 3,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testIslamicDateGetWeekOfMonth1: function(test) {
        var id = new IslamicDate({
            year: 1432,
            month: 3,
            day: 2,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testIslamicDateGetWeekOfMonth2: function(test) {
        var id = new IslamicDate({
            year: 1432,
            month: 3,
            day: 11,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfMonth("en-US"), 2);
        test.done();
    },
    
    testIslamicDateGetWeekOfMonth3: function(test) {
        var id = new IslamicDate({
            year: 1432,
            month: 3,
            day: 20,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfMonth("en-US"), 3);
        test.done();
    },
    
    testIslamicDateGetWeekOfMonth4: function(test) {
        var id = new IslamicDate({
            year: 1432,
            month: 3,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfMonth("en-US"), 4);
        test.done();
    },
    
    testIslamicDateGetWeekOfMonth5: function(test) {
        var id = new IslamicDate({
            year: 1432,
            month: 3,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfMonth("en-US"), 5);
        test.done();
    },
    
    testIslamicDateGetWeekOfMonth6: function(test) {
        var id = new IslamicDate({
            year: 1432,
            month: 4,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testIslamicDateGetWeekOfMonth7: function(test) {
        var id = new IslamicDate({
            year: 1432,
            month: 5,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testIslamicDateGetWeekOfMonth8: function(test) {
        var id = new IslamicDate({
            year: 1432,
            month: 6,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testIslamicDateGetWeekOfMonth9: function(test) {
        var id = new IslamicDate({
            year: 1432,
            month: 7,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testIslamicDateGetWeekOfMonthUS: function(test) {
        var id = new IslamicDate({
            year: 1432,
            month: 8,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testIslamicDateGetWeekOfMonthDE: function(test) {
        var id = new IslamicDate({
            year: 1432,
            month: 8,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        // weeks in Germany start on Monday, and 8/1 is a Sunday, so it is at the 
        // end of the preceding week.
        test.equal(id.getWeekOfMonth("de-DE"), 0);
        test.done();
    },
    
    testIslamicDateGetEraAH: function(test) {
        var id = new IslamicDate({
            year: 2011,
            month: 5,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getEra(), 1);
        test.done();
    },
    
    testIslamicDateGetEraBAH: function(test) {
        var id = new IslamicDate({
            year: -46,
            month: 5,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getEra(), -1);
        test.done();
    },
    
    testIslamicDateGetEraAHYear1: function(test) {
        var id = new IslamicDate({
            year: 1,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getEra(), 1);
        test.done();
    },
    
    testIslamicDateGetEraBAHYear0: function(test) {
        var id = new IslamicDate({
            year: 0,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getEra(), -1);
        test.done();
    },
    
    testIslamicDateSetTimeZone: function(test) {
        var id = new IslamicDate({
            year: 1433, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getTimeZone(), "America/Los_Angeles");
        
        id.setTimeZone("Asia/Tokyo");
        
        test.equal(id.getTimeZone(), "Asia/Tokyo");
        test.done();
    },
    
    testIslamicDateSetTimeZoneNotString: function(test) {
        var id = new IslamicDate({
            year: 1433, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getTimeZone(), "America/Los_Angeles");
        
        id.setTimeZone(345);
        
        test.equal(id.getTimeZone(), "America/Los_Angeles");
        test.done();
    },
    
    testIslamicDateSetTimeZoneUndefined: function(test) {
        var id = new IslamicDate({
            year: 1433, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getTimeZone(), "America/Los_Angeles");
    
        // clears it out
        id.setTimeZone(undefined);
        
        test.equal(id.getTimeZone(), "local");
        test.done();
    },
    
    testIslamicDateSetTimeZoneEmpty: function(test) {
        var id = new IslamicDate({
            year: 1433, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.expect(3);
        test.ok(id !== null);
        
        test.equal(id.getTimeZone(), "America/Los_Angeles");
        
        // clears it out
        id.setTimeZone("");
        
        test.equal(id.getTimeZone(), "local");
        test.done();
    },
    
    testIslamicDateInitWithUnixTimeRightTimeZone: function(test) {
        var id = new IslamicDate({
            unixtime: 0
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getTimeZone(), "local");
        test.done();
    },
    
    testIslamicDateInitWithJDRightTimeZone: function(test) {
        var id = new IslamicDate({
            julianday: 0
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getTimeZone(), "local");
        test.done();
    },
    
    testIslamicDateInitWithRDRightTimeZone: function(test) {
        var id = new IslamicDate({
            rd: 0
        });
        test.expect(2);
        test.ok(id !== null);
        
        test.equal(id.getTimeZone(), "local");
        test.done();
    },
    
    testIslamicDateRoundTripConstruction: function(test) {
        var id = new IslamicDate({
            year: 1436,
            month: 1,
            day: 10,
            timezone: "local"
        });
        test.expect(8);
        test.ok(id !== null);
        // console.log("id is " + JSON.stringify(id, undefined, 4));
        
        var u = id.getTime();
        // console.log("unixtime is " + u);
        var id2 = new IslamicDate({
            unixtime: u,
            timezone: "local"
        });
        // console.log("id2 is " + JSON.stringify(id2, undefined, 4));
        test.equal(id2.getTimeZone(), id.getTimeZone());
        test.equal(id2.getYears(), id.getYears());
        test.equal(id2.getMonths(), id.getMonths());
        test.equal(id2.getDays(), id.getDays());
        test.equal(id2.getHours(), id.getHours());
        test.equal(id2.getMinutes(), id.getMinutes());
        test.equal(id2.getSeconds(), id.getSeconds());
        test.done();
    },
    
    testIslamicDateRoundTripConstruction2: function(test) {
        var id = new IslamicDate({
            year: 1436,
            month: 1,
            day: 10,
            timezone: "America/Los_Angeles"
        });
        test.expect(8);
        test.ok(id !== null);
        // console.log("id is " + JSON.stringify(id, undefined, 4));
        
        var u = id.getTime();
        // console.log("unixtime is " + u);
        var id2 = new IslamicDate({
            unixtime: u,
            timezone: "America/Los_Angeles"
        });
        // console.log("id2 is " + JSON.stringify(id2, undefined, 4));
        test.equal(id2.getTimeZone(), id.getTimeZone());
        test.equal(id2.getYears(), id.getYears());
        test.equal(id2.getMonths(), id.getMonths());
        test.equal(id2.getDays(), id.getDays());
        test.equal(id2.getHours(), id.getHours());
        test.equal(id2.getMinutes(), id.getMinutes());
        test.equal(id2.getSeconds(), id.getSeconds());
        test.done();
    }
    
};