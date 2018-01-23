/*
 * testpersiandateastro.js - test the persian date object
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

if (typeof(PersianDate) === "undefined") {
    var PersianDate = require("../../../lib/PersianDate.js");
}
if (typeof(PersRataDie) === "undefined") {
    var PersRataDie = require("../../../lib/PersRataDie.js");
}

var testDatesPersianPersianAstro = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, -1207, 5,     1,   0,    0,      0,      0,           0],
    [1660037.5, -789,  9,     14,  0,    0,      0,      0,           3],
    [1746893.5, -551,  7,     2,   0,    0,      0,      0,           3],
    [1770641.5, -486,  7,     9,   0,    0,      0,      0,           0],
    [1892731.5, -152,  10,    18,  0,    0,      0,      0,           3],
    [1931579.5, -45,   2,     31,  0,    0,      0,      0,           1],
    [1974851.5, 73,    8,     19,  0,    0,      0,      0,           6],
    [2091164.5, 392,   2,     5,   0,    0,      0,      0,           0],
    [2121509.5, 475,   3,     4,   0,    0,      0,      0,           0],
    [2155779.5, 569,   1,     3,   0,    0,      0,      0,           5],
    [2174029.5, 618,   12,    20,  0,    0,      0,      0,           6],
    [2191584.5, 667,   1,     14,  0,    0,      0,      0,           5],
    [2195261.5, 677,   2,     8,   0,    0,      0,      0,           0],
    [2229274.5, 770,   3,     22,  0,    0,      0,      0,           0],
    [2245580.5, 814,   11,    13,  0,    0,      0,      0,           3],
    [2266100.5, 871,   1,     21,  0,    0,      0,      0,           6],
    [2288542.5, 932,   6,     28,  0,    0,      0,      0,           6],
    [2290901.5, 938,   12,    14,  0,    0,      0,      0,           6],
    [2323140.5, 1027,  3,     21,  0,    0,      0,      0,           3],
    [2334848.5, 1059,  4,     10,  0,    0,      0,      0,           0],
    [2348020.5, 1095,  5,     2,   0,    0,      0,      0,           5],
    [2366978.5, 1147,  3,     30,  0,    0,      0,      0,           0],
    [2385648.5, 1198,  5,     10,  0,    0,      0,      0,           1],
    [2392825.5, 1218,  1,     7,   0,    0,      0,      0,           3],
    [2416223.5, 1282,  1,     29,  0,    0,      0,      0,           0],
    [2425848.5, 1308,  6,     3,   0,    0,      0,      0,           0],
    [2430266.5, 1320,  7,     7,   0,    0,      0,      0,           1],
    [2430833.5, 1322,  1,     29,  0,    0,      0,      0,           1],
    [2431004.5, 1322,  7,     14,  0,    0,      0,      0,           4],
    [2448698.5, 1370,  12,    27,  0,    0,      0,      0,           2],
    [2450138.5, 1374,  12,    6,   0,    0,      0,      0,           0],
    [2465737.5, 1417,  8,     19,  0,    0,      0,      0,           3],
    [2486076.5, 1473,  4,     28,  0,    0,      0,      0,           0]
];

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testpersiandateastro = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testPersDateAstroConstructor: function(test) {
        test.expect(1);
        var pd = new PersianDate();
        
        test.ok(pd !== null);
        test.done();
    },
    
    testPersDateAstroCalcYearPositive1: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(1), 1);
        test.done();
    },
    
    testPersDateAstroCalcYearPositive2: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(365), 1);
        test.done();
    },
    
    testPersDateAstroCalcYearPositive3: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(366), 2);
        test.done();
    },
    testPersDateAstroCalcYearPositive4: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(730), 2);
        test.done();
    },
    testPersDateAstroCalcYearPositive5: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(731), 3);
        test.done();
    },
    testPersDateAstroCalcYearPositive6: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(1095), 3);
        test.done();
    },
    testPersDateAstroCalcYearPositive7: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(1096), 4);
        test.done();
    },
    testPersDateAstroCalcYearPositive8: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(1461), 4);
        test.done();
    },
    testPersDateAstroCalcYearPositive9: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(1462), 5);
        test.done();
    },
    testPersDateAstroCalcYearPositive10: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(1826), 5);
        test.done();
    },
    testPersDateAstroCalcYearPositive11: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(1827), 6);
        test.done();
    },
    
    testPersDateAstroCalcYearNegative0: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(0), 0);
        test.done();
    },
    testPersDateAstroCalcYearNegative1: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(-1), 0);
        test.done();
    },
    testPersDateAstroCalcYearNegative2: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(-365), 0);
        test.done();
    },
    testPersDateAstroCalcYearNegative3: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(-366), -1);
        test.done();
    },
    testPersDateAstroCalcYearNegative4: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(-730), -1);
        test.done();
    },
    testPersDateAstroCalcYearNegative5: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(-731), -2);
        test.done();
    },
    testPersDateAstroCalcYearNegative6: function(test) {
        test.expect(1);
        var pd = new PersianDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(-441089), -1207);
        test.done();
    },
    
    testPersRataDieAstroConstructorFromDateComponents1: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: 1,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 1);
        test.done();
    },
    testPersRataDieAstroConstructorFromDateComponents2: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: 0,
            month: 12,
            day: 30,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 0);
        test.done();
    },
    testPersRataDieAstroConstructorFromDateComponents3: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: 1,
            month: 12,
            day: 29,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 365);
        test.done();
    },
    testPersRataDieAstroConstructorFromDateComponents4: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: 2,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 366);
        test.done();
    },
    testPersRataDieAstroConstructorFromDateComponents5: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: 1,
            month: 1,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 31);
        test.done();
    },
    testPersRataDieAstroConstructorFromDateComponents6: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: 1,
            month: 2,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 32);
        test.done();
    },
    testPersRataDieAstroConstructorFromDateComponents7: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: 2,
            month: 12,
            day: 29,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 730);
        test.done();
    },
    testPersRataDieAstroConstructorFromDateComponents8: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: 3,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 731);
        test.done();
    },
    testPersRataDieAstroConstructorFromDateComponents9: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: 3,
            month: 12,
            day: 29,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 1095);
        test.done();
    },
    testPersRataDieAstroConstructorFromDateComponents10: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: 4,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 1096);
        test.done();
    },
    testPersRataDieAstroConstructorFromDateComponents11: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: 4,
            month: 12,
            day: 30,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 1461);
        test.done();
    },
    testPersRataDieAstroConstructorFromDateComponents12: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: 5,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 1462);
        test.done();
    },
    testPersRataDieAstroConstructorFromDateComponents13: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: 5,
            month: 12,
            day: 29,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 1826);
        test.done();
    },
    testPersRataDieAstroConstructorFromDateComponents14: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: 6,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 1827);
        test.done();
    },
    testPersRataDieAstroConstructorFromDateComponents15: function(test) {
        test.expect(2);
        var prd = new PersRataDie({
            year: -1207,
            month: 5,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -441088);
        test.done();
    },
    
    /* julian date is rd 366 + epoch */
    testPersDateAstroConstructorFromJD: function(test) {
        test.expect(9);
        var pd = new PersianDate({julianday: 1948685.5, timezone: "Etc/UTC"});
        
        test.equal(typeof(pd), 'object');
        test.equal(pd.getRataDie(), 366);
        test.equal(pd.getYears(), 2);
        test.equal(pd.getMonths(), 1);
        test.equal(pd.getDays(), 1);
        test.equal(pd.getHours(), 0);
        test.equal(pd.getMinutes(), 0);
        test.equal(pd.getSeconds(), 0);
        test.equal(pd.getMilliseconds(), 0);
        test.done();
    },
    
    // year 4 was a leap year, so Esfand 0004 contains 30 days instead of 29, and 
    // Farvardin 1 0005 is one day later than expected. RD is 1462
    testPersDateAstroAfterLeapYear: function(test) {
        test.expect(9);
        var pd = new PersianDate({julianday: 1949781.9, timezone: "Etc/UTC"});  // Far 1, 0005, 9:36am
        
        test.equal(typeof(pd), 'object');
        test.equal(pd.getRataDie(), 1462.4);
        test.equal(pd.getYears(), 5);
        test.equal(pd.getMonths(), 1);
        test.equal(pd.getDays(), 1);
        test.equal(pd.getHours(), 9);
        test.equal(pd.getMinutes(), 36);
        test.equal(pd.getSeconds(), 0);
        test.equal(pd.getMilliseconds(), 0);
        test.done();
    },
    
    testPersDateAstroLastDayOfLeapYear: function(test) {
        test.expect(9);
        var pd = new PersianDate({julianday: 1949780.9, timezone: "Etc/UTC"});  // Esf 30, 0004, 9:36am
        
        test.equal(typeof(pd), 'object');
        test.equal(pd.getRataDie(), 1461.4);
        test.equal(pd.getYears(), 4);
        test.equal(pd.getMonths(), 12);
        test.equal(pd.getDays(), 30);
        test.equal(pd.getHours(), 9);
        test.equal(pd.getMinutes(), 36);
        test.equal(pd.getSeconds(), 0);
        test.equal(pd.getMilliseconds(), 0);
        test.done();
    },
    
    testPersDateAstroConvert: function(test) {
        var pd;
        
        for (var i = 0; i < testDatesPersianPersianAstro.length; i++) {
            pd = new PersianDate({julianday: testDatesPersianPersianAstro[i][0], timezone: "Etc/UTC"});
        
            // console.log("testing jd=" + testDatesPersianPersianAstro[i][0]);
            
            test.equal(typeof(pd), 'object');
            test.equal((testDatesPersianPersianAstro[i][0] - 1948319.5), pd.getRataDie(), "testing rd for " + testDatesPersianPersianAstro[i][0]);
            test.equal(testDatesPersianPersianAstro[i][1], pd.getYears(), "testing year for " + testDatesPersianPersianAstro[i][0]);
            test.equal(testDatesPersianPersianAstro[i][2], pd.getMonths(), "testing month for " + testDatesPersianPersianAstro[i][0]);
            test.equal(testDatesPersianPersianAstro[i][3], pd.getDays(), "testing day for " + testDatesPersianPersianAstro[i][0]);
            test.equal(testDatesPersianPersianAstro[i][4], pd.getHours(), "testing hour for " + testDatesPersianPersianAstro[i][0]);
            test.equal(testDatesPersianPersianAstro[i][5], pd.getMinutes(), "testing minute for " + testDatesPersianPersianAstro[i][0]);
            test.equal(testDatesPersianPersianAstro[i][6], pd.getSeconds(), "testing second for " + testDatesPersianPersianAstro[i][0]);
            test.equal(testDatesPersianPersianAstro[i][7], pd.getMilliseconds(), "testing millisecond for " + testDatesPersianPersianAstro[i][0]);
            test.equal(testDatesPersianPersianAstro[i][8], pd.getDayOfWeek(), "testing day of week for " + testDatesPersianPersianAstro[i][0]);
        }
        test.done();
    },
    
    testPersDateAstroGetJulianDay: function(test) {
        var pd;
        
        for (var i = 0; i < testDatesPersianPersianAstro.length; i++) {
            pd = new PersianDate({
                year: testDatesPersianPersianAstro[i][1], 
                month: testDatesPersianPersianAstro[i][2], 
                day: testDatesPersianPersianAstro[i][3],
                hour: testDatesPersianPersianAstro[i][4],
                minute: testDatesPersianPersianAstro[i][5],
                second: testDatesPersianPersianAstro[i][6],
                millisecond: testDatesPersianPersianAstro[i][7],
                timezone: "Etc/UTC"
            });
        
            // console.log("testing jd=" + testDatesPersianPersianAstro[i][0]);
            
            test.equal(typeof(pd), 'object');
            test.equal(testDatesPersianPersianAstro[i][0], pd.getJulianDay(), "testing row " + testDatesPersianPersianAstro[i][0]);
            test.equal(pd.getDayOfWeek(), testDatesPersianPersianAstro[i][8]);
        }
        test.done();
    },
    
    testPersDateAstroConstructorFull: function(test) {
        test.expect(8);
        var pd = new PersianDate({
            year: 1392,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        
        test.ok(pd !== null);
        
        test.equal(pd.getYears(), 1392);
        test.equal(pd.getMonths(), 9);
        test.equal(pd.getDays(), 23);
        test.equal(pd.getHours(), 16);
        test.equal(pd.getMinutes(), 7);
        test.equal(pd.getSeconds(), 12);
        test.equal(pd.getMilliseconds(), 123);
        test.done();
    },
    
    testPersDateAstroConstructorFullWithStrings: function(test) {
        test.expect(8);
        var pd = new PersianDate({
            year: "1392", 
            month: "9",
            day: "23", 
            hour: "16", 
            minute: "7", 
            second: "12", 
            millisecond: "123"
        });
        
        test.ok(pd !== null);
        
        test.equal(pd.getYears(), 1392);
        test.equal(pd.getMonths(), 9);
        test.equal(pd.getDays(), 23);
        test.equal(pd.getHours(), 16);
        test.equal(pd.getMinutes(), 7);
        test.equal(pd.getSeconds(), 12);
        test.equal(pd.getMilliseconds(), 123);
        test.done();
    },
    
    testPersDateAstroConstructorCopy: function(test) {
        test.expect(8);
        var pd = new PersianDate({
            year: 1392, 
            month: 9, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        
        test.ok(pd !== null);
        
        test.equal(pd.getYears(), 1392);
        test.equal(pd.getMonths(), 9);
        test.equal(pd.getDays(), 23);
        test.equal(pd.getHours(), 16);
        test.equal(pd.getMinutes(), 7);
        test.equal(pd.getSeconds(), 12);
        test.equal(pd.getMilliseconds(), 123);
        test.done();
    },
    
    testPersDateAstroSetYears: function(test) {
        test.expect(2);
        var pd = new PersianDate();
        
        test.ok(pd !== null);
        
        pd.setYears(123);
        
        test.equal(pd.getYears(), 123);
        test.done();
    },
    
    testPersDateAstroSetMonths: function(test) {
        test.expect(2);
        var pd = new PersianDate();
        
        test.ok(pd !== null);
        
        pd.setMonths(7);
        
        test.equal(pd.getMonths(), 7);
        test.done();
    },
    
    testPersDateAstroSetDays: function(test) {
        test.expect(2);
        var pd = new PersianDate();
        
        test.ok(pd !== null);
        
        pd.setDays(12);
        
        test.equal(pd.getDays(), 12);
        test.done();
    },
    
    testPersDateAstroSetHours: function(test) {
        test.expect(2);
        var pd = new PersianDate();
        
        test.ok(pd !== null);
        
        pd.setHours(12);
        
        test.equal(pd.getHours(), 12);
        test.done();
    },
    
    testPersDateAstroSetMinutes: function(test) {
        test.expect(2);
        var pd = new PersianDate();
        
        test.ok(pd !== null);
        
        pd.setMinutes(13);
        
        test.equal(pd.getMinutes(), 13);
        test.done();
    },
    
    testPersDateAstroSetSeconds: function(test) {
        test.expect(2);
        var pd = new PersianDate();
        
        test.ok(pd !== null);
        
        pd.setSeconds(23);
        
        test.equal(pd.getSeconds(), 23);
        test.done();
    },
    
    testPersDateAstroSetMilliseconds: function(test) {
        test.expect(2);
        var pd = new PersianDate();
        
        test.ok(pd !== null);
        
        pd.setMilliseconds(123);
        
        test.equal(pd.getMilliseconds(), 123);
        test.done();
    },
    
    testGetDayOfWeek1: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1393,
            month: 3,
            day: 16,
            timezone: "Etc/UTC"
        });
        
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5);
        test.done();
    },
    
    testGetDayOfWeekWithTime: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1393,
            month: 3,
            day: 16,
            hour: 8,
            minute: 39,
            second: 34,
            timezone: "Etc/UTC"
        });
        
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5);
        test.done();
    },
    
    testPersDateAstroTestGetTimeZero: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1348,
            month: 10,
            day: 11,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTime(), 0);
        test.done();
    },
    
    testPersDateAstroTestGetTimeZeroJD: function(test) {
        test.expect(2);
        var pd = new PersianDate({julianday: 2440587.5});
        test.ok(pd !== null);
        
        test.equal(pd.getTime(), 0);
        test.done();
    },
    
    testPersDateAstroTestGetTime: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1348,
            month: 10,
            day: 11,
            hour: 8,
            minute: 30,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTime(), 30600000);
        test.done();
    },
    
    testPersDateAstroTestGetTimeTooEarly: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1348,
            month: 10,
            day: 10,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTime(), -1);
        test.done();
    },
    
    testPersDateAstroTestGetTimeTooLate: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1416,
            month: 11,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTime(), -1);
        test.done();
    },
    
    // test some of the helper functions to make sure they are producing the right thing
    testPersDateAstroOnOrBeforeSun: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        // Sunday on or before pd 5 days before 
        test.equal(pd.onOrBefore(0).getRataDie(), rd-5);
        test.done();
    },
    
    testPersDateAstroOnOrBeforeMon: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.onOrBefore(1).getRataDie(), rd-4);
        test.done();
    },
    
    testPersDateAstroOnOrBeforeTue: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.onOrBefore(2).getRataDie(), rd-3);
        test.done();
    },
    
    testPersDateAstroOnOrBeforeWed: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.onOrBefore(3).getRataDie(), rd-2);
        test.done();
    },
    
    testPersDateAstroOnOrBeforeThu: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.onOrBefore(4).getRataDie(), rd-1);
        test.done();
    },
    
    testPersDateAstroOnOrBeforeFri: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.onOrBefore(5).getRataDie(), rd);
        test.done();
    },
    
    testPersDateAstroOnOrBeforeSat: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.onOrBefore(6).getRataDie(), rd-6);
        test.done();
    },
    
    testPersDateAstroOnOrAfterSun: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        // Sunday on or before pd 5 days before 
        test.equal(pd.onOrAfter(0).getRataDie(), rd+2);
        test.done();
    },
    
    testPersDateAstroOnOrAfterMon: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.onOrAfter(1).getRataDie(), rd+3);
        test.done();
    },
    
    testPersDateAstroOnOrAfterTue: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.onOrAfter(2).getRataDie(), rd+4);
        test.done();
    },
    
    testPersDateAstroOnOrAfterWed: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.onOrAfter(3).getRataDie(), rd+5);
        test.done();
    },
    
    testPersDateAstroOnOrAfterThu: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.onOrAfter(4).getRataDie(), rd+6);
        test.done();
    },
    
    testPersDateAstroOnOrAfterFri: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.onOrAfter(5).getRataDie(), rd);
        test.done();
    },
    
    testPersDateAstroOnOrAfterSat: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.onOrAfter(6).getRataDie(), rd+1);
        test.done();
    },
    
    testPersDateAstroBeforeSun: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        // Sunday before pd 5 days before 
        test.equal(pd.before(0).getRataDie(), rd-5);
        test.done();
    },
    
    testPersDateAstroBeforeMon: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.before(1).getRataDie(), rd-4);
        test.done();
    },
    
    testPersDateAstroBeforeTue: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.before(2).getRataDie(), rd-3);
        test.done();
    },
    
    testPersDateAstroBeforeWed: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.before(3).getRataDie(), rd-2);
        test.done();
    },
    
    testPersDateAstroBeforeThu: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.before(4).getRataDie(), rd-1);
        test.done();
    },
    
    testPersDateAstroBeforeFri: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.before(5).getRataDie(), rd-7);
        test.done();
    },
    
    testPersDateAstroBeforeSat: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.before(6).getRataDie(), rd-6);
        test.done();
    },
    
    testPersDateAstroAfterSun: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        // Sunday on or before pd 5 days before 
        test.equal(pd.after(0).getRataDie(), rd+2);
        test.done();
    },
    
    testPersDateAstroAfterMon: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.after(1).getRataDie(), rd+3);
        test.done();
    },
    
    testPersDateAstroAfterTue: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.after(2).getRataDie(), rd+4);
        test.done();
    },
    
    testPersDateAstroAfterWed: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.after(3).getRataDie(), rd+5);
        test.done();
    },
    
    testPersDateAstroAfterThu: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.after(4).getRataDie(), rd+6);
        test.done();
    },
    
    testPersDateAstroAfterFri: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.after(5).getRataDie(), rd+7);
        test.done();
    },
    
    testPersDateAstroAfterSat: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 27,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfWeek(), 5); // Friday
        var rd = pd.getRataDie();
        
        test.equal(pd.after(6).getRataDie(), rd+1);
        test.done();
    },
    
    testPersDateAstroTestGetWeekOfYearThisYear: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 2,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 5);
        test.done();
    },
    
    testPersDateAstroTestGetWeekOfYearThisYear2: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 3,
            day: 19,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 12);
        test.done();
    },
    
    testPersDateAstroTestGetWeekOfYearThisYear3: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 52);
        test.done();
    },
    
    testPersDateAstroTestGetWeekOfYearThisYearWithTime: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 12,
            day: 29,
            hour: 16,
            minute: 13,
            second: 12,
            millisecond: 232,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 52);
        test.done();
    },
    
    testPersDateAstroTestGetWeekOfYearPreviousYear: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 53);
        test.done();
    },
    
    testPersDateAstroTestGetWeekOfYearLastWeekLeap: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1383,
            month: 12,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 1);
        test.done();
    },
    
    testPersDateAstroTestGetWeekOfYearLastWeekRegular1: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1389,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 1);
        test.done();
    },
    
    testPersDateAstroTestGetWeekOfYearLastWeekRegular2: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1390,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 1);
        test.done();
    },
    
    testPersDateAstroTestGetWeekOfYearLastWeekRegular3: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1391,
            month: 12,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 1);
        test.done();
    },
    
    testPersDateAstroTestGetWeekOfYearLastWeekRegular4: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1392,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 53);
        test.done();
    },
    
    testPersDateAstroTestGetWeekOfYearLastWeekRegular5: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1393,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 52);
        test.done();
    },
    
    testPersDateAstroTestGetWeekOfYearLastWeekRegular6: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1394,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 52);
        test.done();
    },
    
    testPersDateAstroGetDayOfYearFirstDay: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfYear(), 1);
        test.done();
    },
    
    testPersDateAstroGetDayOfYearMidYear: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 3,
            day: 17,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfYear(), 79);
        test.done();
    },
    
    testPersDateAstroGetDayOfYearLastDay: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfYear(), 365);
        test.done();
    },
    
    testPersDateAstroGetDayOfYearLastDayLeapYear: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1387,
            month: 12,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfYear(), 366);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonth0: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 3,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonth1: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 3,
            day: 4,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonth2: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 3,
            day: 11,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 2);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonth3: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 3,
            day: 20,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 3);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonth4: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 3,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 4);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonth5: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 3,
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 5);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonth6: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 4,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonth7: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 5,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonth8: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 6,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonth9: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 7,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR0: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 3,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 0);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR1: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 3,
            day: 4,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 1);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR2: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 3,
            day: 11,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 2);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR3: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 3,
            day: 20,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 3);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR4: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 3,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 4);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR5: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 3,
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 5);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR6: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 4,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 1);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR7: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 5,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 0);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR8: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 6,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 1);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR9: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 7,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 0);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR10: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 8,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 0);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR11: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 9,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 1);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR12: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 10,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 1);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR13: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 11,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 0);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthIR14: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 12,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 1);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthUS: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 8,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testPersDateAstroGetWeekOfMonthDE: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 8,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        // weeks in Germany start on Monday, and 8/1 is a Sunday, so it is at the 
        // end of the preceding week.
        test.equal(pd.getWeekOfMonth("de-DE"), 0);
        test.done();
    },
    
    testPersDateAstroGetEraAP: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1388,
            month: 5,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getEra(), 1);
        test.done();
    },
    
    testPersDateAstroGetEraBAP: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: -46,
            month: 5,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getEra(), -1);
        test.done();
    },
    
    testPersDateAstroGetEraAPYear1: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 1,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getEra(), 1);
        test.done();
    },
    
    testPersDateAstroGetEraBAPYear0: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            year: 0,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getEra(), -1);
        test.done();
    },
    
    testPersDateAstroSetTimeZone: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1433, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTimeZone(), "America/Los_Angeles");
        
        pd.setTimeZone("Asia/Tokyo");
        
        test.equal(pd.getTimeZone(), "Asia/Tokyo");
        test.done();
    },
    
    testPersDateAstroSetTimeZoneNotString: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1433, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTimeZone(), "America/Los_Angeles");
        
        pd.setTimeZone(345);
        
        test.equal(pd.getTimeZone(), "America/Los_Angeles");
        test.done();
    },
    
    testPersDateAstroSetTimeZoneUndefined: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1433, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTimeZone(), "America/Los_Angeles");
    
        // clears it out
        pd.setTimeZone(undefined);
        
        test.equal(pd.getTimeZone(), "local");
        test.done();
    },
    
    testPersDateAstroSetTimeZoneEmpty: function(test) {
        test.expect(3);
        var pd = new PersianDate({
            year: 1433, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTimeZone(), "America/Los_Angeles");
        
        // clears it out
        pd.setTimeZone("");
        
        test.equal(pd.getTimeZone(), "local");
        test.done();
    },
    
    testPersDateAstroInitWithUnixTimeRightTimeZone: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            unixtime: 0
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTimeZone(), "local");
        test.done();
    },
    
    testPersDateAstroInitWithJDRightTimeZone: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            julianday: 0
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTimeZone(), "local");
        test.done();
    },
    
    testPersDateAstroInitWithRDRightTimeZone: function(test) {
        test.expect(2);
        var pd = new PersianDate({
            rd: 0
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTimeZone(), "local");
        test.done();
    },
    
    testPersDateAstroRoundTripConstruction: function(test) {
        test.expect(8);
        var pd = new PersianDate({
            year: 1393,
            month: 8,
            day: 12,
            timezone: "local"
        });
        test.ok(pd !== null);
        // console.log("pd is " + JSON.stringify(pd, undefined, 4));
        
        var u = pd.getTime();
        // console.log("unixtime is " + u);
        var pd2 = new PersianDate({
            unixtime: u,
            timezone: "local"
        });
        // console.log("pd2 is " + JSON.stringify(pd2, undefined, 4));
        test.equal(pd2.getTimeZone(), pd.getTimeZone());
        test.equal(pd2.getYears(), pd.getYears());
        test.equal(pd2.getMonths(), pd.getMonths());
        test.equal(pd2.getDays(), pd.getDays());
        test.equal(pd2.getHours(), pd.getHours());
        test.equal(pd2.getMinutes(), pd.getMinutes());
        test.equal(pd2.getSeconds(), pd.getSeconds());
        test.done();
    },
    
    testPersDateAstroRoundTripConstruction2: function(test) {
        test.expect(8);
        var pd = new PersianDate({
            year: 1393,
            month: 8,
            day: 12,
            timezone: "America/Los_Angeles"
        });
        test.ok(pd !== null);
        // console.log("pd is " + JSON.stringify(pd, undefined, 4));
        
        var u = pd.getTime();
        // console.log("unixtime is " + u);
        var pd2 = new PersianDate({
            unixtime: u,
            timezone: "America/Los_Angeles"
        });
        // console.log("pd2 is " + JSON.stringify(pd2, undefined, 4));
        test.equal(pd2.getTimeZone(), pd.getTimeZone());
        test.equal(pd2.getYears(), pd.getYears());
        test.equal(pd2.getMonths(), pd.getMonths());
        test.equal(pd2.getDays(), pd.getDays());
        test.equal(pd2.getHours(), pd.getHours());
        test.equal(pd2.getMinutes(), pd.getMinutes());
        test.equal(pd2.getSeconds(), pd.getSeconds());
        test.done();
    }
    
};