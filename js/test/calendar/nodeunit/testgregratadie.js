/*
 * testgregratadie.js - test the gregorian RD date object
 * 
 * Copyright © 2014-2015,2017, JEDLSoft
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
    var ilib = require("../.././../lib/ilib.js");
}
if (typeof(GregRataDie) === "undefined") {
    var GregRataDie = require("../.././../lib/GregRataDie.js");
}
if (typeof(DateFactory) === "undefined") {
    var DateFactory = require("../.././../lib/DateFactory.js");
}

var testDatesGregRD = [
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

module.exports.testgregratadie = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testGregRataDieConstructor: function(test) {
        test.expect(1);
        var rd = new GregRataDie();
        
        test.ok(rd !== null);
        test.done();
    },
    
    /* julian date is rd 366.25 + epoch */
    testGregRataDieConstructorFromJD: function(test) {
        test.expect(2);
        var rd = new GregRataDie({julianday: 1721790.75});
        
        test.equal(typeof(rd), 'object');
        test.equal(rd.getRataDie(), 366.25);
        test.done();
    },
    
    testGregRataDieConstructorFromRD: function(test) {
        test.expect(2);
        var rd = new GregRataDie({rd: 234323});
        
        test.equal(typeof(rd), 'object');
        test.equal(rd.getRataDie(), 234323);
        test.done();
    },
    
    testGregRataDieConstructorFromUnixtime: function(test) {
        test.expect(2);
        var rd = new GregRataDie({unixtime: 0});
        
        test.equal(typeof(rd), 'object');
        test.equal(rd.getRataDie(), 719163);
        test.done();
    },
    
    testGregRataDieConstructorFromComponents: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 1970,
            month: 1,
            day: 1
        });
        
        test.equal(typeof(rd), 'object');
        test.equal(rd.getRataDie(), 719163);
        test.done();
    },
    
    testGregRataDieConvert: function(test) {
        var rd;
        
        for (var i = 0; i < testDatesGregRD.length; i++) {
            rd = new GregRataDie({julianday: testDatesGregRD[i][0]});
        
            // console.log("testing jd=" + testDatesGregRD[i][0]);
            
            test.equal(rd.getRataDie(), testDatesGregRD[i][0] - rd.epoch);
        }
        test.done();
    },
    
    testGregRataDieConstructorFull: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2011,
            month: 9, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123
        });
        
        test.ok(rd !== null);
        
        test.equal(rd.getRataDie(), 734403.6716680903);
        test.done();
    },
    
    testGregRataDieConstructorFullWithStrings: function(test) {
        test.expect(2);
        // often you get strings from a UI element instead of numbers... 
        // this constructor should work with numbers or strings
        var rd = new GregRataDie({
            year: "2011", 
            month: "9",
            day: "23", 
            hour: "16", 
            minute: "7", 
            second: "12", 
            millisecond: "123"
        });
        
        test.ok(rd !== null);
        
        test.equal(rd.getRataDie(), 734403.6716680903);
        test.done();
    },
    
    testGregRataDieConstructorCopy: function(test) {
        test.expect(2);
        var rd2 = new GregRataDie({
            year: 2011, 
            month: 9, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123
        });
        var rd = new GregRataDie(rd2);
        
        test.ok(rd !== null);
        
        test.equal(rd.getRataDie(), 734403.6716680903);
        test.done();
    },
    
    testGregRataDieConstructorUnixTime: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            unixtime: 61000
        });
        test.ok(rd !== null);
        
        // rounded to 8 decimal points
        test.equal(rd.getRataDie(), 719163.0007060185);
        test.done();
    },
    
    testGregRataDieConstructorUnixTimeTestRounding: function(test) {
        test.expect(3);
        var rd = new GregRataDie({
            unixtime: 61000
        });
        test.ok(rd !== null);
        
        // rounded to 10 decimal points
        test.equal(rd.getRataDie(), 719163.0007060185);
        
        test.equal(rd.getTime(), 61000);
        test.done();
    },
    
    testGregRataDieGetJulianDay: function(test) {
        var rd;
        
        for (var i = 0; i < testDatesGregRD.length; i++) {
            rd = new GregRataDie({
                year: testDatesGregRD[i][1], 
                month: testDatesGregRD[i][2], 
                day: testDatesGregRD[i][3],
                hour: testDatesGregRD[i][4],
                minute: testDatesGregRD[i][5],
                second: testDatesGregRD[i][6],
                millisecond: testDatesGregRD[i][7]
            });
        
            // console.log("testing jd=" + testDatesGregRD[i][0]);
            
            test.equal(typeof(rd), 'object');
            test.equal(rd.getJulianDay(), testDatesGregRD[i][0]);
        }
        test.done();
    },
    
    testGregRataDieTestGetTimeZero: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 1970, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        test.equal(rd.getTime(), 0);
        test.done();
    },
    
    testGregRataDieTestGetTime: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 1970, 
            month: 1, 
            day: 3,
               hour: 8,
               minute: 30
        });
        test.ok(rd !== null);
        
        test.equal(rd.getTime(), 203400000);
        test.done();
    },
    
    testGregRataDieTestGetTimeTooEarly: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 1969, 
            month: 12, 
            day: 31
        });
        test.ok(rd !== null);
        
        test.equal(rd.getTime(), -1);
        test.done();
    },
    
    testGregRataDieTestGetTimeTooLate: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2038, 
            month: 1, 
            day: 20
        });
        test.ok(rd !== null);
        
        test.equal(rd.getTime(), -1);
        test.done();
    },
    
    // test some of the helper functions to make sure they are producing the right thing
    testGregRataDieOnOrBeforeSun: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        // Sunday on or before is 5 days before 
        test.equal(rd.onOrBefore(0), rdn-5);
        test.done();
    },
    
    testGregRataDieOnOrBeforeMon: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.onOrBefore(1), rdn-4);
        test.done();
    },
    
    testGregRataDieOnOrBeforeTue: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.onOrBefore(2), rdn-3);
        test.done();
    },
    
    testGregRataDieOnOrBeforeWed: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.onOrBefore(3), rdn-2);
        test.done();
    },
    
    testGregRataDieOnOrBeforeThu: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.onOrBefore(4), rdn-1);
        test.done();
    },
    
    testGregRataDieOnOrBeforeFri: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.onOrBefore(5), rdn);
        test.done();
    },
    
    testGregRataDieOnOrBeforeSat: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.onOrBefore(6), rdn-6);
        test.done();
    },
    
    testGregRataDieOnOrBeforeSunWithTime: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1,
               hour: 8
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie(); // contains fractional time for the 8:00am part
        
        // Sunday on or before is 5 days before 
        // Should give an rd result that also contains the fractional time 
        test.equal(rd.onOrBefore(0), rdn-5);
        test.done();
    },
    
    testGregRataDieOnOrAfterSun: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        // Sunday on or before is 5 days before 
        test.equal(rd.onOrAfter(0), rdn+2);
        test.done();
    },
    
    testGregRataDieOnOrAfterMon: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.onOrAfter(1), rdn+3);
        test.done();
    },
    
    testGregRataDieOnOrAfterTue: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.onOrAfter(2), rdn+4);
        test.done();
    },
    
    testGregRataDieOnOrAfterWed: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.onOrAfter(3), rdn+5);
        test.done();
    },
    
    testGregRataDieOnOrAfterThu: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.onOrAfter(4), rdn+6);
        test.done();
    },
    
    testGregRataDieOnOrAfterFri: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.onOrAfter(5), rdn);
        test.done();
    },
    
    testGregRataDieOnOrAfterSat: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.onOrAfter(6), rdn+1);
        test.done();
    },
    
    testGregRataDieBeforeSun: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        // Sunday before is 5 days before 
        test.equal(rd.before(0), rdn-5);
        test.done();
    },
    
    testGregRataDieBeforeMon: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.before(1), rdn-4);
        test.done();
    },
    
    testGregRataDieBeforeTue: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.before(2), rdn-3);
        test.done();
    },
    
    testGregRataDieBeforeWed: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.before(3), rdn-2);
        test.done();
    },
    
    testGregRataDieBeforeThu: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.before(4), rdn-1);
        test.done();
    },
    
    testGregRataDieBeforeFri: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.before(5), rdn-7);
        test.done();
    },
    
    testGregRataDieBeforeSat: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.before(6), rdn-6);
        test.done();
    },
    
    testGregRataDieAfterSun: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        // Sunday after is 2 days after 
        test.equal(rd.after(0), rdn+2);
        test.done();
    },
    
    testGregRataDieAfterMon: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.after(1), rdn+3);
        test.done();
    },
    
    testGregRataDieAfterTue: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.after(2), rdn+4);
        test.done();
    },
    
    testGregRataDieAfterWed: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.after(3), rdn+5);
        test.done();
    },
    
    testGregRataDieAfterThu: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.after(4), rdn+6);
        test.done();
    },
    
    testGregRataDieAfterFri: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.after(5), rdn+7);
        test.done();
    },
    
    testGregRataDieAfterSat: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2010, 
            month: 1, 
            day: 1
        });
        test.ok(rd !== null);
        
        var rdn = rd.getRataDie();
        
        test.equal(rd.after(6), rdn+1);
        test.done();
    },
    
    testGregRataDieJan1Midnight: function(test) {
        test.expect(2);
        var rd = new GregRataDie({julianday: 2455197.5});
        test.ok(rd !== null);
        
        test.equal(rd.getRataDie(), 733773);
        test.done();
    },
    
    testGregRataDieGetRataDie: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2011, 
            month: 3, 
            day: 8
        });
        test.ok(rd !== null);
        
        test.equal(rd.getRataDie(), 734204);
        test.done();
    },
    
    
    // for GF-33596
    testGregRataDieGetTimeWithUnixTime: function(test) {
        test.expect(2);
        var d = new Date(Date.UTC(2011, 2, 8, 0, 0, 0, 0));
        var rd = new GregRataDie({
            year: 2011,
            month: 3, 
            day: 8,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        test.ok(rd !== null);
        
        test.equal(rd.getTime(), d.getTime());
        test.done();
    },
    
    testGregRataDieGetTimeWithUTC: function(test) {
        test.expect(2);
        var utc = Date.UTC(2013, 10, 1);
        var d = new Date(utc);
        var rd = new GregRataDie({
            unixtime: utc
        });
        test.ok(rd !== null);
        
        test.equal(rd.getTime(), d.getTime());
        test.done();
    },
    
    testGregRataDieGetTimeWithDefaultTime: function(test) {
        test.expect(2);
        var d = new Date();
        var rd = new GregRataDie();
        
        test.ok(rd !== null);
        
        test.roughlyEqual(rd.getTime(), d.getTime(), 100);
        test.done();
    },
    
    testGregRataDieOnOrBeforeWithOffset1: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2014,
            month: 4,
            day: 26,
            hour: 23
        }); // this is a Saturday in California, but Sunday in UTC
        
        test.ok(rd !== null);
        
        // the Sunday before should be the previous Sunday, not today
        test.equal(rd.onOrBefore(0, -0.33333333333), rd.getRataDie()-6);
        test.done();
    },
    
    testGregRataDieOnOrBeforeWithOffset2: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2014,
            month: 4,
            day: 27,
            hour: 8
        }); // this is a Sunday in California and Sunday in UTC
        
        test.ok(rd !== null);
        
        // the Sunday before should be today, not a week ago
        test.equal(rd.onOrBefore(0, -0.33333333333), rd.getRataDie());
        test.done();
    },
    
    testGregRataDieOnOrAfterWithOffset1: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2014,
            month: 4,
            day: 26,
            hour: 23
        }); // this is a Saturday in California, but Sunday in UTC
        
        test.ok(rd !== null);
        
        // the Sunday before should be the next day
        test.equal(rd.onOrAfter(0, -0.33333333333), rd.getRataDie()+1);
        test.done();
    },
    
    testGregRataDieOnOrAfterWithOffset2: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2014,
            month: 4,
            day: 27,
            hour: 8
        }); // this is a Sunday in California and Sunday in UTC
        
        test.ok(rd !== null);
        
        // the Sunday before should be today
        test.equal(rd.onOrAfter(0, -0.33333333333), rd.getRataDie());
        test.done();
    },
    
    testGregRataDieBeforeWithOffset1: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2014,
            month: 4,
            day: 27,
            hour: 23
        }); // this is a Sunday in California, but Monday in UTC
        
        test.ok(rd !== null);
        
        // the Sunday before should be the previous week, not today
        test.equal(rd.before(0, -0.33333333333), rd.getRataDie()-7);
        test.done();
    },
    
    testGregRataDieBeforeWithOffset2: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2014,
            month: 4,
            day: 28,
            hour: 8
        }); // this is a Monday in California and in UTC
        
        test.ok(rd !== null);
        
        // the Sunday before should be the previous day
        test.equal(rd.before(0, -0.33333333333), rd.getRataDie()-1);
        test.done();
    },
    
    testGregRataDieAfterWithOffset1: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2014,
            month: 4,
            day: 26,
            hour: 23
        }); // this is a Saturday in California, but Sunday in UTC
        
        test.ok(rd !== null);
        
        // the Sunday after should be the next day, not in a week
        test.equal(rd.after(0, -0.33333333333), rd.getRataDie()+1);
        test.done();
    },
    
    testGregRataDieAfterWithOffset2: function(test) {
        test.expect(2);
        var rd = new GregRataDie({
            year: 2014,
            month: 4,
            day: 27,
            hour: 8
        }); // this is a Sunday in California and Sunday in UTC
        
        test.ok(rd !== null);
        
        // the Sunday after should be in one week, not today
        test.equal(rd.after(0, -0.33333333333), rd.getRataDie()+7);
        test.done();
    }
    
};