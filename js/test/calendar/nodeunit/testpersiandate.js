/*
 * testpersiandate.js - test the persian date object
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

if (typeof(PersianAlgoDate) === "undefined") {
    var PersianAlgoDate = require("../../../lib/PersianAlgoDate.js");
}
if (typeof(PersAlgoRataDie) === "undefined") {
    var PersAlgoRataDie = require("../../../lib/PersAlgoRataDie.js");
}

var testDatesPersAlgoPersian = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, -1208, 5,     1,   0,    0,      0,      0,           0],
    [1660037.5, -790,  9,     14,  0,    0,      0,      0,           3],
    [1746893.5, -552,  7,     2,   0,    0,      0,      0,           3],
    [1770641.5, -487,  7,     9,   0,    0,      0,      0,           0],
    [1892731.5, -153,  10,    18,  0,    0,      0,      0,           3],
    [1931579.5, -46,   2,     30,  0,    0,      0,      0,           1],
    [1974851.5, 73,    8,     19,  0,    0,      0,      0,           6],
    [2091164.5, 392,   2,     5,   0,    0,      0,      0,           0],
    [2121509.5, 475,   3,     3,   0,    0,      0,      0,           0],
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

module.exports.testpersiandate = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testPersAlgoDateConstructor: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate();
        
        test.ok(pd !== null);
        test.done();
    },
    
    testPersAlgoDateCalcYearPositive1: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(1), 1);
        test.done();
    },
    
    testPersAlgoDateCalcYearPositive2: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(365), 1);
        test.done();
    },
    
    testPersAlgoDateCalcYearPositive3: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(366), 2);
        test.done();
    },
    testPersAlgoDateCalcYearPositive4: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(730), 2);
        test.done();
    },
    testPersAlgoDateCalcYearPositive5: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(731), 3);
        test.done();
    },
    testPersAlgoDateCalcYearPositive6: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(1095), 3);
        test.done();
    },
    testPersAlgoDateCalcYearPositive7: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(1096), 4);
        test.done();
    },
    testPersAlgoDateCalcYearPositive8: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(1461), 4);
        test.done();
    },
    testPersAlgoDateCalcYearPositive9: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(1462), 5);
        test.done();
    },
    testPersAlgoDateCalcYearPositive10: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(1826), 5);
        test.done();
    },
    testPersAlgoDateCalcYearPositive11: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(1827), 6);
        test.done();
    },
    
    testPersAlgoDateCalcYearNegative1: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(0), -1);
        test.done();
    },
    testPersAlgoDateCalcYearNegative2: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(-365), -1);
        test.done();
    },
    testPersAlgoDateCalcYearNegative3: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(-366), -2);
        test.done();
    },
    testPersAlgoDateCalcYearNegative4: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(-730), -2);
        test.done();
    },
    testPersAlgoDateCalcYearNegative5: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(-731), -3);
        test.done();
    },
    testPersAlgoDateCalcYearNegative6: function(test) {
        test.expect(1);
        var pd = new PersianAlgoDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(pd._calcYear(-441089), -1208);
        test.done();
    },
    
    testPersAlgoRataDieConstructorFromDateComponents1: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
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
    testPersAlgoRataDieConstructorFromDateComponents2: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
            year: -1,
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
    testPersAlgoRataDieConstructorFromDateComponents3: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
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
    testPersAlgoRataDieConstructorFromDateComponents4: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
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
    testPersAlgoRataDieConstructorFromDateComponents5: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
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
    testPersAlgoRataDieConstructorFromDateComponents6: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
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
    testPersAlgoRataDieConstructorFromDateComponents7: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
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
    testPersAlgoRataDieConstructorFromDateComponents8: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
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
    testPersAlgoRataDieConstructorFromDateComponents9: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
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
    testPersAlgoRataDieConstructorFromDateComponents10: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
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
    testPersAlgoRataDieConstructorFromDateComponents11: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
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
    testPersAlgoRataDieConstructorFromDateComponents12: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
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
    testPersAlgoRataDieConstructorFromDateComponents13: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
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
    testPersAlgoRataDieConstructorFromDateComponents14: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
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
    testPersAlgoRataDieConstructorFromDateComponents15: function(test) {
        test.expect(2);
        var prd = new PersAlgoRataDie({
            year: -1208,
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
    testPersAlgoDateConstructorFromJD: function(test) {
        test.expect(9);
        var pd = new PersianAlgoDate({julianday: 1948685.5, timezone: "Etc/UTC"});
        
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
    testPersAlgoDateAfterLeapYear: function(test) {
        test.expect(9);
        var pd = new PersianAlgoDate({julianday: 1949781.9, timezone: "Etc/UTC"});  // Far 1, 0005, 9:36am
        
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
    
    testPersAlgoDateConvert: function(test) {
        var pd;
        
        for (var i = 0; i < testDatesPersAlgoPersian.length; i++) {
            pd = new PersianAlgoDate({julianday: testDatesPersAlgoPersian[i][0], timezone: "Etc/UTC"});
        
            // console.log("testing jd=" + testDatesPersAlgoPersian[i][0]);
            
            test.equal(typeof(pd), 'object');
            test.equal((testDatesPersAlgoPersian[i][0] - 1948319.5), pd.getRataDie(), "testing rd for " + testDatesPersAlgoPersian[i][0]);
            test.equal(testDatesPersAlgoPersian[i][1], pd.getYears(), "testing year for " + testDatesPersAlgoPersian[i][0]);
            test.equal(testDatesPersAlgoPersian[i][2], pd.getMonths(), "testing month for " + testDatesPersAlgoPersian[i][0]);
            test.equal(testDatesPersAlgoPersian[i][3], pd.getDays(), "testing day for " + testDatesPersAlgoPersian[i][0]);
            test.equal(testDatesPersAlgoPersian[i][4], pd.getHours(), "testing hour for " + testDatesPersAlgoPersian[i][0]);
            test.equal(testDatesPersAlgoPersian[i][5], pd.getMinutes(), "testing minute for " + testDatesPersAlgoPersian[i][0]);
            test.equal(testDatesPersAlgoPersian[i][6], pd.getSeconds(), "testing second for " + testDatesPersAlgoPersian[i][0]);
            test.equal(testDatesPersAlgoPersian[i][7], pd.getMilliseconds(), "testing millisecond for " + testDatesPersAlgoPersian[i][0]);
            test.equal(testDatesPersAlgoPersian[i][8], pd.getDayOfWeek(), "testing day of week for " + testDatesPersAlgoPersian[i][0]);
        }
        test.done();
    },
    
    testPersAlgoDateGetJulianDay: function(test) {
        var pd;
        
        for (var i = 0; i < testDatesPersAlgoPersian.length; i++) {
            pd = new PersianAlgoDate({
                year: testDatesPersAlgoPersian[i][1], 
                month: testDatesPersAlgoPersian[i][2], 
                day: testDatesPersAlgoPersian[i][3],
                hour: testDatesPersAlgoPersian[i][4],
                minute: testDatesPersAlgoPersian[i][5],
                second: testDatesPersAlgoPersian[i][6],
                millisecond: testDatesPersAlgoPersian[i][7],
                timezone: "Etc/UTC"
            });
        
            // console.log("testing jd=" + testDatesPersAlgoPersian[i][0]);
            
            test.equal(typeof(pd), 'object');
            test.equal(testDatesPersAlgoPersian[i][0], pd.getJulianDay(), "testing row " + testDatesPersAlgoPersian[i][0]);
            test.equal(pd.getDayOfWeek(), testDatesPersAlgoPersian[i][8]);
        }
        test.done();
    },
    
    testPersAlgoDateConstructorFull: function(test) {
        test.expect(8);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateConstructorFullWithStrings: function(test) {
        test.expect(8);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateConstructorCopy: function(test) {
        test.expect(8);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateSetYears: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate();
        
        test.ok(pd !== null);
        
        pd.setYears(123);
        
        test.equal(pd.getYears(), 123);
        test.done();
    },
    
    testPersAlgoDateSetMonths: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate();
        
        test.ok(pd !== null);
        
        pd.setMonths(7);
        
        test.equal(pd.getMonths(), 7);
        test.done();
    },
    
    testPersAlgoDateSetDays: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate();
        
        test.ok(pd !== null);
        
        pd.setDays(12);
        
        test.equal(pd.getDays(), 12);
        test.done();
    },
    
    testPersAlgoDateSetHours: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate();
        
        test.ok(pd !== null);
        
        pd.setHours(12);
        
        test.equal(pd.getHours(), 12);
        test.done();
    },
    
    testPersAlgoDateSetMinutes: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate();
        
        test.ok(pd !== null);
        
        pd.setMinutes(13);
        
        test.equal(pd.getMinutes(), 13);
        test.done();
    },
    
    testPersAlgoDateSetSeconds: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate();
        
        test.ok(pd !== null);
        
        pd.setSeconds(23);
        
        test.equal(pd.getSeconds(), 23);
        test.done();
    },
    
    testPersAlgoDateSetMilliseconds: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate();
        
        test.ok(pd !== null);
        
        pd.setMilliseconds(123);
        
        test.equal(pd.getMilliseconds(), 123);
        test.done();
    },
    
    testGetDayOfWeek1: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
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
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateTestGetTimeZero: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1348,
            month: 10,
            day: 11,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTime(), 0);
        test.done();
    },
    
    testPersAlgoDateTestGetTimeZeroJD: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({julianday: 2440587.5});
        test.ok(pd !== null);
        
        test.equal(pd.getTime(), 0);
        test.done();
    },
    
    testPersAlgoDateTestGetTime: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateTestGetTimeTooEarly: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1348,
            month: 10,
            day: 10,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTime(), -1);
        test.done();
    },
    
    testPersAlgoDateTestGetTimeTooLate: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
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
    testPersAlgoDateOnOrBeforeSun: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateOnOrBeforeMon: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateOnOrBeforeTue: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateOnOrBeforeWed: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateOnOrBeforeThu: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateOnOrBeforeFri: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateOnOrBeforeSat: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateOnOrAfterSun: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateOnOrAfterMon: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateOnOrAfterTue: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateOnOrAfterWed: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateOnOrAfterThu: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateOnOrAfterFri: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateOnOrAfterSat: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateBeforeSun: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateBeforeMon: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateBeforeTue: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateBeforeWed: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateBeforeThu: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateBeforeFri: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateBeforeSat: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateAfterSun: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateAfterMon: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateAfterTue: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateAfterWed: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateAfterThu: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateAfterFri: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateAfterSat: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateTestGetWeekOfYearThisYear: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 2,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 5);
        test.done();
    },
    
    testPersAlgoDateTestGetWeekOfYearThisYear2: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 3,
            day: 19,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 12);
        test.done();
    },
    
    testPersAlgoDateTestGetWeekOfYearThisYear3: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 52);
        test.done();
    },
    
    testPersAlgoDateTestGetWeekOfYearThisYearWithTime: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateTestGetWeekOfYearPreviousYear: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 53);
        test.done();
    },
    
    testPersAlgoDateTestGetWeekOfYearLastWeekLeap: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1383,
            month: 12,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 1);
        test.done();
    },
    
    testPersAlgoDateTestGetWeekOfYearLastWeekRegular1: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1389,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 1);
        test.done();
    },
    
    testPersAlgoDateTestGetWeekOfYearLastWeekRegular2: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1390,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 1);
        test.done();
    },
    
    testPersAlgoDateTestGetWeekOfYearLastWeekRegular3: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1391,
            month: 12,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 1);
        test.done();
    },
    
    testPersAlgoDateTestGetWeekOfYearLastWeekRegular4: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1392,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 53);
        test.done();
    },
    
    testPersAlgoDateTestGetWeekOfYearLastWeekRegular5: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1393,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 52);
        test.done();
    },
    
    testPersAlgoDateTestGetWeekOfYearLastWeekRegular6: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1394,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfYear(), 52);
        test.done();
    },
    
    testPersAlgoDateGetDayOfYearFirstDay: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfYear(), 1);
        test.done();
    },
    
    testPersAlgoDateGetDayOfYearMidYear: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 3,
            day: 17,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfYear(), 79);
        test.done();
    },
    
    testPersAlgoDateGetDayOfYearLastDay: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfYear(), 365);
        test.done();
    },
    
    testPersAlgoDateGetDayOfYearLastDayLeapYear: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1387,
            month: 12,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getDayOfYear(), 366);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonth0: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 3,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonth1: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 3,
            day: 4,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonth2: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 3,
            day: 11,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 2);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonth3: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 3,
            day: 20,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 3);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonth4: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 3,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 4);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonth5: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 3,
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 5);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonth6: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 4,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonth7: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 5,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonth8: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 6,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonth9: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 7,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR0: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 3,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 0);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR1: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 3,
            day: 4,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 1);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR2: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 3,
            day: 11,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 2);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR3: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 3,
            day: 20,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 3);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR4: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 3,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 4);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR5: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 3,
            day: 31,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 5);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR6: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 4,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 1);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR7: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 5,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 0);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR8: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 6,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 1);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR9: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 7,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 0);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR10: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 8,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 0);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR11: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 9,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 1);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR12: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 10,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 1);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR13: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 11,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 0);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthIR14: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 12,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("fa-IR"), 1);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthUS: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 8,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testPersAlgoDateGetWeekOfMonthDE: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateGetEraAP: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1388,
            month: 5,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getEra(), 1);
        test.done();
    },
    
    testPersAlgoDateGetEraBAP: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateGetEraAPYear1: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 1,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getEra(), 1);
        test.done();
    },
    
    testPersAlgoDateGetEraBAPYear0: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            year: 0,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(pd !== null);
        
        test.equal(pd.getEra(), -1);
        test.done();
    },
    
    testPersAlgoDateSetTimeZone: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateSetTimeZoneNotString: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateSetTimeZoneUndefined: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateSetTimeZoneEmpty: function(test) {
        test.expect(3);
        var pd = new PersianAlgoDate({
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
    
    testPersAlgoDateInitWithUnixTimeRightTimeZone: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            unixtime: 0
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTimeZone(), "local");
        test.done();
    },
    
    testPersAlgoDateInitWithJDRightTimeZone: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            julianday: 0
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTimeZone(), "local");
        test.done();
    },
    
    testPersAlgoDateInitWithRDRightTimeZone: function(test) {
        test.expect(2);
        var pd = new PersianAlgoDate({
            rd: 0
        });
        test.ok(pd !== null);
        
        test.equal(pd.getTimeZone(), "local");
        test.done();
    },
    
    testPersDateAlgoRoundTripConstruction: function(test) {
        test.expect(8);
        var pd = new PersianAlgoDate({
            year: 1393,
            month: 8,
            day: 12,
            timezone: "local"
        });
        test.ok(pd !== null);
        // console.log("pd is " + JSON.stringify(pd, undefined, 4));
        
        var u = pd.getTime();
        // console.log("unixtime is " + u);
        var pd2 = new PersianAlgoDate({
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
    
    testPersDateAlgoRoundTripConstruction2: function(test) {
        test.expect(8);
        var pd = new PersianAlgoDate({
            year: 1393,
            month: 8,
            day: 12,
            timezone: "America/Los_Angeles"
        });
        test.ok(pd !== null);
        // console.log("pd is " + JSON.stringify(pd, undefined, 4));
        
        var u = pd.getTime();
        // console.log("unixtime is " + u);
        var pd2 = new PersianAlgoDate({
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
