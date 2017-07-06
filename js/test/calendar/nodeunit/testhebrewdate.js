/*
 * testhebrewdate.js - test the hebrew date object
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

if (typeof(HebrewDate) === "undefined") {
    var HebrewDate = require("../.././../lib/HebrewDate.js");
}

var testDatesHebrew = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, 3174,  5,     10,  0,    0,      0,      0,           0],
    [1660037.5, 3593,  9,     25,  0,    0,      0,      0,           3],
    [1746893.5, 3831,  7,     3,   0,    0,      0,      0,           3],
    [1770641.5, 3896,  7,     9,   0,    0,      0,      0,           0],
    [1892731.5, 4230,  10,    18,  0,    0,      0,      0,           3],
    [1931579.5, 4336,  3,     4,   0,    0,      0,      0,           1],
    [1974851.5, 4455,  8,     13,  0,    0,      0,      0,           6],
    [2091164.5, 4773,  2,     6,   0,    0,      0,      0,           0],
    [2121509.5, 4856,  2,     23,  0,    0,      0,      0,           0],
    [2155779.5, 4950,  1,     7,   0,    0,      0,      0,           5],
    [2174029.5, 5000,  13,    8,   0,    0,      0,      0,           6],
    [2191584.5, 5048,  1,     21,  0,    0,      0,      0,           5],
    [2195261.5, 5058,  2,     7,   0,    0,      0,      0,           0],
    [2229274.5, 5151,  4,     1,   0,    0,      0,      0,           0],
    [2245580.5, 5196,  11,    7,   0,    0,      0,      0,           3],
    [2266100.5, 5252,  1,     3,   0,    0,      0,      0,           6],
    [2288542.5, 5314,  7,     1,   0,    0,      0,      0,           6],
    [2290901.5, 5320,  12,    27,  0,    0,      0,      0,           6],
    [2323140.5, 5408,  3,     20,  0,    0,      0,      0,           3],
    [2334848.5, 5440,  4,     3,   0,    0,      0,      0,           0],
    [2348020.5, 5476,  5,     5,   0,    0,      0,      0,           5],
    [2366978.5, 5528,  4,     4,   0,    0,      0,      0,           0],
    [2385648.5, 5579,  5,     11,  0,    0,      0,      0,           1],
    [2392825.5, 5599,  1,     12,  0,    0,      0,      0,           3],
    [2416223.5, 5663,  1,     22,  0,    0,      0,      0,           0],
    [2425848.5, 5689,  5,     19,  0,    0,      0,      0,           0],
    [2430266.5, 5702,  7,     8,   0,    0,      0,      0,           1],
    [2430833.5, 5703,  1,     14,  0,    0,      0,      0,           1],
    [2431004.5, 5704,  7,     8,   0,    0,      0,      0,           4],
    [2448698.5, 5752,  13,    12,  0,    0,      0,      0,           2],
    [2450138.5, 5756,  12,    5,   0,    0,      0,      0,           0],
    [2465737.5, 5799,  8,     12,  0,    0,      0,      0,           3],
    [2486076.5, 5854,  5,     5,   0,    0,      0,      0,           0]
];

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testhebrewdate = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testHebrewDateConstructor: function(test) {
        test.expect(1);
        var hd = new HebrewDate();
        
        test.ok(hd !== null);
        test.done();
    },
    
    testHebrewDateConstructorFromRD: function(test) {
        test.expect(9);
        var hd = new HebrewDate({rd: 357.25, timezone: "Etc/UTC"});
        
        test.equal(typeof(hd), 'object');
        test.equal(hd.getRataDie(), 357.25);
        test.equal(hd.getYears(), 2);
        test.equal(hd.getMonths(), 7);
        test.equal(hd.getDays(), 3);
        test.equal(hd.getHours(), 0);
        test.equal(hd.getMinutes(), 0);
        test.equal(hd.getSeconds(), 0);
        test.equal(hd.getMilliseconds(), 0);
        test.done();
    },
    
    /* julian date is rd 357 + epoch */
    testHebrewDateConstructorFromJD: function(test) {
        test.expect(9);
        var hd = new HebrewDate({julianday: 348354.5, timezone: "Etc/UTC"});
        
        test.equal(typeof(hd), 'object');
        test.equal(hd.getRataDie(), 357.25);
        test.equal(hd.getYears(), 2);
        test.equal(hd.getMonths(), 7);
        test.equal(hd.getDays(), 3);
        test.equal(hd.getHours(), 0);
        test.equal(hd.getMinutes(), 0);
        test.equal(hd.getSeconds(), 0);
        test.equal(hd.getMilliseconds(), 0);
        test.done();
    },
    
    testHebrewDateConstructorFromRDCusp: function(test) {
        test.expect(9);
        var hd = new HebrewDate({rd: 355.25, timezone: "Etc/UTC"});
        
        test.equal(typeof(hd), 'object');
        test.equal(hd.getRataDie(), 355.25);
        test.equal(hd.getYears(), 2);
        test.equal(hd.getMonths(), 7);
        test.equal(hd.getDays(), 1);
        test.equal(hd.getHours(), 0);
        test.equal(hd.getMinutes(), 0);
        test.equal(hd.getSeconds(), 0);
        test.equal(hd.getMilliseconds(), 0);
        test.done();
    },
    
    testHebrewDateAfterLeapYear: function(test) {
        test.expect(9);
        var hd = new HebrewDate({julianday: 349326.9, timezone: "Etc/UTC"});  // Siv 1, 0004, 9:36am
        
        test.equal(typeof(hd), 'object');
        test.roughlyEqual(hd.getRataDie(), 1329.65, 0.001);
        test.equal(hd.getYears(), 4);
        test.equal(hd.getMonths(), 3);
        test.equal(hd.getDays(), 1);
        test.equal(hd.getHours(), 9);
        test.equal(hd.getMinutes(), 36);
        test.equal(hd.getSeconds(), 0);
        test.equal(hd.getMilliseconds(), 0);
        test.done();
    },
    
    testHebrewDateAfterNoon: function(test) {
        test.expect(9);
        var hd = new HebrewDate({julianday: 349327.1, timezone: "Etc/UTC"});  // Siv 1, 0004, 2:24pm
        
        test.equal(typeof(hd), 'object');
        test.roughlyEqual(hd.getRataDie(), 1329.85, 0.001);
        test.equal(hd.getYears(), 4);
        test.equal(hd.getMonths(), 3);
        test.equal(hd.getDays(), 1);
        test.equal(hd.getHours(), 14);
        test.equal(hd.getMinutes(), 24);
        test.equal(hd.getSeconds(), 0);
        test.equal(hd.getMilliseconds(), 0);
        test.done();
    },
    
    testHebrewDateConvert: function(test) {
        var hd;
        for (var i = 0; i < testDatesHebrew.length; i++) {
            hd = new HebrewDate({julianday: testDatesHebrew[i][0], timezone: "Etc/UTC"});
        
            // console.log("testing jd=" + testDatesHebrew[i][0]);
            
            test.equal(typeof(hd), 'object');
            test.equal((testDatesHebrew[i][0] - 347997.25), hd.getRataDie(), "testing rd for " + testDatesHebrew[i][0]);
            test.equal(testDatesHebrew[i][1], hd.getYears(), "testing year for " + testDatesHebrew[i][0]);
            test.equal(testDatesHebrew[i][2], hd.getMonths(), "testing month for " + testDatesHebrew[i][0]);
            test.equal(testDatesHebrew[i][3], hd.getDays(), "testing day for " + testDatesHebrew[i][0]);
            test.equal(testDatesHebrew[i][4], hd.getHours(), "testing hour for " + testDatesHebrew[i][0]);
            test.equal(testDatesHebrew[i][5], hd.getMinutes(), "testing minute for " + testDatesHebrew[i][0]);
            test.equal(testDatesHebrew[i][6], hd.getSeconds(), "testing second for " + testDatesHebrew[i][0]);
            test.equal(testDatesHebrew[i][7], hd.getMilliseconds(), "testing millisecond for " + testDatesHebrew[i][0]);
            test.equal(testDatesHebrew[i][8], hd.getDayOfWeek(), "testing day of week for " + testDatesHebrew[i][0]);
        }
        test.done();
    },
    
    testHebrewDateConstructorFull: function(test) {
        test.expect(8);
        var hd = new HebrewDate({
            year: 2011,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        
        test.ok(hd !== null);
        
        test.equal(hd.getYears(), 2011);
        test.equal(hd.getMonths(), 9);
        test.equal(hd.getDays(), 23);
        test.equal(hd.getHours(), 16);
        test.equal(hd.getMinutes(), 7);
        test.equal(hd.getSeconds(), 12);
        test.equal(hd.getMilliseconds(), 123);
        test.done();
    },
    
    testHebrewDateConstructorFullWithStrings: function(test) {
        test.expect(8);
        var hd = new HebrewDate({
            year: "2011", 
            month: "9",
            day: "23", 
            hour: "16", 
            minute: "7", 
            second: "12", 
            millisecond: "123",
            timezone: "Etc/UTC"
        });
        
        test.ok(hd !== null);
        
        test.equal(hd.getYears(), 2011);
        test.equal(hd.getMonths(), 9);
        test.equal(hd.getDays(), 23);
        test.equal(hd.getHours(), 16);
        test.equal(hd.getMinutes(), 7);
        test.equal(hd.getSeconds(), 12);
        test.equal(hd.getMilliseconds(), 123);
        test.done();
    },
    
    testHebrewDateConstructorCopy: function(test) {
        test.expect(8);
        var hd = new HebrewDate({
            year: 2011, 
            month: 9, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        
        test.ok(hd !== null);
        
        test.equal(hd.getYears(), 2011);
        test.equal(hd.getMonths(), 9);
        test.equal(hd.getDays(), 23);
        test.equal(hd.getHours(), 16);
        test.equal(hd.getMinutes(), 7);
        test.equal(hd.getSeconds(), 12);
        test.equal(hd.getMilliseconds(), 123);
        test.done();
    },
    
    testHebrewDateGetJulianDay: function(test) {
        var hd;
        
        for (var i = 0; i < testDatesHebrew.length; i++) {
            hd = new HebrewDate({
                year: testDatesHebrew[i][1], 
                month: testDatesHebrew[i][2], 
                day: testDatesHebrew[i][3],
                hour: testDatesHebrew[i][4],
                minute: testDatesHebrew[i][5],
                second: testDatesHebrew[i][6],
                millisecond: testDatesHebrew[i][7],
                timezone: "Etc/UTC"            
            });
        
            // console.log("testing jd=" + testDatesHebrew[i][0]);
            
            test.equal(typeof(hd), 'object');
            test.equal(hd.getJulianDay(), testDatesHebrew[i][0]);
            test.equal(hd.getDayOfWeek(), testDatesHebrew[i][8]);
        }
        test.done();
    },
    
    testHebrewDateSetYears: function(test) {
        test.expect(2);
        var hd = new HebrewDate();
        
        test.ok(hd !== null);
        
        hd.setYears(123);
        
        test.equal(hd.getYears(), 123);
        test.done();
    },
    
    testHebrewDateSetMonths: function(test) {
        test.expect(2);
        var hd = new HebrewDate();
        
        test.ok(hd !== null);
        
        hd.setMonths(7);
        
        test.equal(hd.getMonths(), 7);
        test.done();
    },
    
    testHebrewDateSetDays: function(test) {
        test.expect(2);
        var hd = new HebrewDate();
        
        test.ok(hd !== null);
        
        hd.setDays(12);
        
        test.equal(hd.getDays(), 12);
        test.done();
    },
    
    testHebrewDateSetHours: function(test) {
        test.expect(2);
        var hd = new HebrewDate();
        
        test.ok(hd !== null);
        
        hd.setHours(12);
        
        test.equal(hd.getHours(), 12);
        test.done();
    },
    
    testHebrewDateSetMinutes: function(test) {
        test.expect(2);
        var hd = new HebrewDate();
        
        test.ok(hd !== null);
        
        hd.setMinutes(13);
        
        test.equal(hd.getMinutes(), 13);
        test.done();
    },
    
    testHebrewDateSetSeconds: function(test) {
        test.expect(2);
        var hd = new HebrewDate();
        
        test.ok(hd !== null);
        
        hd.setSeconds(23);
        
        test.equal(hd.getSeconds(), 23);
        test.done();
    },
    
    testHebrewDateSetMilliseconds: function(test) {
        test.expect(2);
        var hd = new HebrewDate();
        
        test.ok(hd !== null);
        
        hd.setMilliseconds(123);
        
        test.equal(hd.getMilliseconds(), 123);
        test.done();
    },
    
    testGetDayOfWeek1: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 7,
            day: 2,
            timezone: "Etc/UTC"
        });
        
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5);
        test.done();
    },
    
    testGetDayOfWeekWithTime: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 7,
            day: 2,
            hour: 8,
            minute: 39,
            second: 34,
            timezone: "Etc/UTC"
        });
        
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5);
        test.done();
    },
    
    testHebrewDateTestGetTimeZero: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            timezone: "Etc/UTC",
            year: 5730,
            month: 10,
            day: 23,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTime(), 0);
        test.done();
    },
    
    testHebrewDateTestGetTimeZeroJD: function(test) {
        test.expect(2);
        var hd = new HebrewDate({julianday: 2440587.5, timezone: "Etc/UTC"});
        test.ok(hd !== null);
        
        test.equal(hd.getTime(), 0);
        test.done();
    },
    
    testHebrewDateTestGetTime: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5730,
            month: 10,
            day: 24,
            hour: 8,
            minute: 30,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTime(), 117000000);
        test.done();
    },
    
    testHebrewDateTestGetTimeTooEarly: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5730,
            month: 10,
            day: 22,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTime(), -1);
        test.done();
    },
    
    testHebrewDateTestGetTimeTooLate: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5798,
            month: 11,
            day: 14,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTime(), -1);
        test.done();
    },
    
    // test some of the helper functions to make sure they are producing the right thing
    testHebrewDateOnOrBeforeSun: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        // Sunday on or before is 5 days before 
        test.equal(hd.onOrBefore(0).getRataDie(), rd-5);
        test.done();
    },
    
    testHebrewDateOnOrBeforeMon: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrBefore(1).getRataDie(), rd-4);
        test.done();
    },
    
    testHebrewDateOnOrBeforeTue: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrBefore(2).getRataDie(), rd-3);
        test.done();
    },
    
    testHebrewDateOnOrBeforeWed: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrBefore(3).getRataDie(), rd-2);
        test.done();
    },
    
    testHebrewDateOnOrBeforeThu: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrBefore(4).getRataDie(), rd-1);
        test.done();
    },
    
    testHebrewDateOnOrBeforeFri: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrBefore(5).getRataDie(), rd);
        test.done();
    },
    
    testHebrewDateOnOrBeforeSat: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrBefore(6).getRataDie(), rd-6);
        test.done();
    },
    
    testHebrewDateOnOrAfterSun: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        // Sunday on or before is 5 days before 
        test.equal(hd.onOrAfter(0).getRataDie(), rd+2);
        test.done();
    },
    
    testHebrewDateOnOrAfterMon: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrAfter(1).getRataDie(), rd+3);
        test.done();
    },
    
    testHebrewDateOnOrAfterTue: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrAfter(2).getRataDie(), rd+4);
        test.done();
    },
    
    testHebrewDateOnOrAfterWed: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrAfter(3).getRataDie(), rd+5);
        test.done();
    },
    
    testHebrewDateOnOrAfterThu: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrAfter(4).getRataDie(), rd+6);
        test.done();
    },
    
    testHebrewDateOnOrAfterFri: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrAfter(5).getRataDie(), rd);
        test.done();
    },
    
    testHebrewDateOnOrAfterSat: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrAfter(6).getRataDie(), rd+1);
        test.done();
    },
    
    testHebrewDateBeforeSun: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        // Sunday before hd 5 days before 
        test.equal(hd.before(0).getRataDie(), rd-5);
        test.done();
    },
    
    testHebrewDateBeforeMon: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.before(1).getRataDie(), rd-4);
        test.done();
    },
    
    testHebrewDateBeforeTue: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.before(2).getRataDie(), rd-3);
        test.done();
    },
    
    testHebrewDateBeforeWed: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.before(3).getRataDie(), rd-2);
        test.done();
    },
    
    testHebrewDateBeforeThu: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.before(4).getRataDie(), rd-1);
        test.done();
    },
    
    testHebrewDateBeforeFri: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.before(5).getRataDie(), rd-7);
        test.done();
    },
    
    testHebrewDateBeforeSat: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.before(6).getRataDie(), rd-6);
        test.done();
    },
    
    testHebrewDateAfterSun: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        // Sunday on or before hd 5 days before 
        test.equal(hd.after(0).getRataDie(), rd+2);
        test.done();
    },
    
    testHebrewDateAfterMon: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.after(1).getRataDie(), rd+3);
        test.done();
    },
    
    testHebrewDateAfterTue: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.after(2).getRataDie(), rd+4);
        test.done();
    },
    
    testHebrewDateAfterWed: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.after(3).getRataDie(), rd+5);
        test.done();
    },
    
    testHebrewDateAfterThu: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.after(4).getRataDie(), rd+6);
        test.done();
    },
    
    testHebrewDateAfterFri: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.after(5).getRataDie(), rd+7);
        test.done();
    },
    
    testHebrewDateAfterSat: function(test) {
        test.expect(3);
        var hd = new HebrewDate({
            year: 5771,
            month: 9,
            day: 12,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.after(6).getRataDie(), rd+1);
        test.done();
    },
    
    testHebrewDateTestGetWeekOfYearThisYear: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 8,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 5);
        test.done();
    },
    
    testHebrewDateTestGetWeekOfYearThisYear2: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 9,
            day: 19,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 12);
        test.done();
    },
    
    testHebrewDateTestGetWeekOfYearThisYearRegular: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 26);
        test.done();
    },
    
    testHebrewDateTestGetWeekOfYearThisYearLeap: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5771,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        // the extra month pushes the week number later in leap years
        test.equal(hd.getWeekOfYear(), 31);
        test.done();
    },
    
    testHebrewDateTestGetWeekOfYearThisYearWithTime: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 6,
            day: 29,
            hour: 16,
            minute: 13,
            second: 12,
            millisecond: 232,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 1);
        test.done();
    },
    
    testHebrewDateTestGetWeekOfYearPreviousYear: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5781,
            month: 7,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 51);
        test.done();
    },
    
    testHebrewDateTestGetWeekOfYearLastWeekLeap: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5784,
            month: 6,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 1);
        test.done();
    },
    
    testHebrewDateTestGetWeekOfYearLastWeekRegular1: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5781,
            month: 6,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 1);
        test.done();
    },
    
    testHebrewDateTestGetWeekOfYearLastWeekRegular2: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5782,
            month: 6,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 1);
        test.done();
    },
    
    testHebrewDateTestGetWeekOfYearLastWeekRegular3: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5783,
            month: 6,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 51);
        test.done();
    },
    
    testHebrewDateTestGetWeekOfYearLastWeekRegular4: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5785,
            month: 6,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 1);
        test.done();
    },
    
    testHebrewDateTestGetWeekOfYearLastWeekRegular5: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5786,
            month: 6,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 51);
        test.done();
    },
    
    testHebrewDateTestGetWeekOfYearLastWeekRegular6: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5787,
            month: 6,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 55);
        test.done();
    },
    
    testHebrewDateGetDayOfYearFirstDay: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5771,
            month: 7,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfYear(), 1);
        test.done();
    },
    
    testHebrewDateGetDayOfYearMidYear: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfYear(), 178);
        test.done();
    },
    
    testHebrewDateGetDayOfYearMidYearLeap: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5774,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfYear(), 209);
        test.done();
    },
    
    testHebrewDateGetDayOfYearLastDay: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 6,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfYear(), 354);
        test.done();
    },
    
    testHebrewDateGetDayOfYearLastDayLeapYear: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5774,
            month: 6,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfYear(), 385);
        test.done();
    },
    
    testHebrewDateGetWeekOfMonth0: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 9,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("he-IL"), 1);
        test.done();
    },
    
    testHebrewDateGetWeekOfMonth1: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 9,
            day: 2,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("he-IL"), 1);
        test.done();
    },
    
    testHebrewDateGetWeekOfMonth2: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 9,
            day: 11,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("he-IL"), 2);
        test.done();
    },
    
    testHebrewDateGetWeekOfMonth3: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 9,
            day: 20,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("he-IL"), 3);
        test.done();
    },
    
    testHebrewDateGetWeekOfMonth4: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 9,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("he-IL"), 5);
        test.done();
    },
    
    testHebrewDateGetWeekOfMonth5: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 1,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("he-IL"), 5);
        test.done();
    },
    
    testHebrewDateGetWeekOfMonth6: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 4,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("he-IL"), 0);
        test.done();
    },
    
    testHebrewDateGetWeekOfMonth7: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 5,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("he-IL"), 0);
        test.done();
    },
    
    testHebrewDateGetWeekOfMonth8: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 6,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("he-IL"), 1);
        test.done();
    },
    
    testHebrewDateGetWeekOfMonth9: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 7,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("he-IL"), 0);
        test.done();
    },
    
    testHebrewDateGetWeekOfMonth10: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 8,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("he-IL"), 0);
        test.done();
    },
    
    testHebrewDateGetWeekOfMonthUS: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 8,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testHebrewDateGetWeekOfMonthDE: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 8,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        // weeks in Germany start on Monday, and 8/1 is a Saturday, so it is at the 
        // end of the preceding week.
        test.equal(hd.getWeekOfMonth("de-DE"), 0);
        test.done();
    },
    
    testHebrewDateGetEraAM: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 5772,
            month: 5,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getEra(), 1);
        test.done();
    },
    
    testHebrewDateGetEraBAM: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: -46,
            month: 5,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getEra(), -1);
        test.done();
    },
    
    testHebrewDateGetEraAMYear1: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 1,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getEra(), 1);
        test.done();
    },
    
    testHebrewDateGetEraBAMYear0: function(test) {
        test.expect(2);
        var hd = new HebrewDate({
            year: 0,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getEra(), -1);
        test.done();
    },
    
    testHebrewDateSetTimeZone: function(test) {
        test.expect(3);
        var gd = new HebrewDate({
            year: 5711, 
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
    
    testHebrewDateSetTimeZoneNotString: function(test) {
        test.expect(3);
        var gd = new HebrewDate({
            year: 5711, 
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
    
    testHebrewDateSetTimeZoneUndefined: function(test) {
        test.expect(3);
        var gd = new HebrewDate({
            year: 5711, 
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
    
    testHebrewDateSetTimeZoneEmpty: function(test) {
        test.expect(3);
        var gd = new HebrewDate({
            year: 5711, 
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
    
    testHebrewDateInitWithUnixTimeRightTimeZone: function(test) {
        test.expect(2);
        var gd = new HebrewDate({
            unixtime: 0
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "local");
        test.done();
    },
    
    testHebrewDateInitWithJDRightTimeZone: function(test) {
        test.expect(2);
        var gd = new HebrewDate({
            julianday: 0
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "local");
        test.done();
    },
    
    testHebrewDateInitWithRDRightTimeZone: function(test) {
        test.expect(2);
        var gd = new HebrewDate({
            rd: 0
        });
        test.ok(gd !== null);
        
        test.equal(gd.getTimeZone(), "local");
        test.done();
    },
    
    testHebrewDateRoundTripConstruction: function(test) {
        test.expect(8);
        var hd = new HebrewDate({
            year: 5775,
            month: 8,
            day: 10,
            timezone: "local"
        });
        test.ok(hd !== null);
        // console.log("hd is " + JSON.stringify(hd, undefined, 4));
        
        var u = hd.getTime();
        // console.log("unixtime is " + u);
        var hd2 = new HebrewDate({
            unixtime: u,
            timezone: "local"
        });
        // console.log("hd2 is " + JSON.stringify(hd2, undefined, 4));
        test.equal(hd2.getTimeZone(), hd.getTimeZone());
        test.equal(hd2.getYears(), hd.getYears());
        test.equal(hd2.getMonths(), hd.getMonths());
        test.equal(hd2.getDays(), hd.getDays());
        test.equal(hd2.getHours(), hd.getHours());
        test.equal(hd2.getMinutes(), hd.getMinutes());
        test.equal(hd2.getSeconds(), hd.getSeconds());
        test.done();
    },
    
    testHebrewDateRoundTripConstruction2: function(test) {
        test.expect(8);
        var hd = new HebrewDate({
            year: 5775,
            month: 8,
            day: 10,
            timezone: "America/Los_Angeles"
        });
        test.ok(hd !== null);
        // console.log("hd is " + JSON.stringify(hd, undefined, 4));
        
        var u = hd.getTime();
        // console.log("unixtime is " + u);
        var hd2 = new HebrewDate({
            unixtime: u,
            timezone: "America/Los_Angeles"
        });
        // console.log("hd2 is " + JSON.stringify(hd2, undefined, 4));
        test.equal(hd2.getTimeZone(), hd.getTimeZone());
        test.equal(hd2.getYears(), hd.getYears());
        test.equal(hd2.getMonths(), hd.getMonths());
        test.equal(hd2.getDays(), hd.getDays());
        test.equal(hd2.getHours(), hd.getHours());
        test.equal(hd2.getMinutes(), hd.getMinutes());
        test.equal(hd2.getSeconds(), hd.getSeconds());
        test.done();
    }
    
};