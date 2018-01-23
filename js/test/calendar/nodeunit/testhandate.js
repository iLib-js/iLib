/*
 * testhandate.js - test the Han Chinese Lunar date object
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

if (typeof(HanRataDie) === "undefined") {
    var HanRataDie = require("../../../lib/HanRataDie.js");
}
if (typeof(HanDate) === "undefined") {
    var HanDate = require("../../../lib/HanDate.js");
}

var testDatesHan = [
    // jd            cycle    year    month    day    isLeapYear    isLeapMonth    day of week
    [ 1507231.5,    35,    11,    6,    12,    false,    false,    0,    -214193],
    [ 1660037.5,    42,    9,    10,    27,    false,    false,    3,    -61387],
    [ 1746893.5,    46,    7,    9,    4,    true,    false,    3,    25469],
    [ 1770641.5,    47,    12,    9,    9,    true,    false,    0,    49217],
    [ 1892731.5,    52,    46,    12,    20,    true,    false,    3,    171307],
    [ 1931579.5,    54,    33,    4,    5,    false,    false,    1,    210155],
    [ 1974851.5,    56,    31,    10,    15,    false,    false,    6,    253427],
    [ 2091164.5,    61,    50,    4,    7,    true,    false,    0,    369740],
    [ 2121509.5,    63,    13,    4,    24,    false,    false,    0,    400085],
    [ 2155779.5,    64,    47,    2,    9,    false,    false,    5,    434355],
    [ 2174029.5,    65,    37,    2,    9,    false,    false,    6,    452605],
    [ 2191584.5,    66,    25,    2,    23,    false,    false,    5,    470160],
    [ 2195261.5,    66,    35,    4,    9,    true,    false,    0,    473837],
    [ 2229274.5,    68,    8,    5,    2,    false,    false,    0,    507850],
    [ 2245580.5,    68,    53,    1,    8,    true,    false,    3,    524156],
    [ 2266100.5,    69,    49,    3,    4,    false,    false,    6,    544676],
    [ 2288542.5,    70,    50,    9,    2,    true,    false,    6,    567118],
    [ 2290901.5,    70,    57,    1,    29,    false,    false,    6,    569477],
    [ 2323140.5,    72,    25,    5,    20,    true,    true,    3,    601716],
    [ 2334848.5,    72,    57,    6,    5,    true,    false,    0,    613424],
    [ 2348020.5,    73,    33,    7,    6,    true,    false,    5,    626596],
    [ 2366978.5,    74,    25,    5,    5,    false,    false,    0,    645554],
    [ 2385648.5,    75,    16,    7,    12,    true,    false,    1,    664224],
    [ 2392825.5,    75,    36,    2,    13,    false,    false,    3,    671401],
    [ 2416223.5,    76,    40,    3,    22,    true,    false,    0,    694799],
    [ 2425848.5,    77,    6,    7,    21,    false,    false,    0,    704424],
    [ 2430266.5,    77,    18,    9,    9,    true,    false,    1,    708842],
    [ 2430833.5,    77,    20,    3,    15,    false,    false,    1,    709409],
    [ 2431004.5,    77,    20,    9,    9,    false,    false,    4,    709580],
    [ 2448698.5,    78,    9,    2,    14,    false,    false,    2,    727274],
    [ 2450138.5,    78,    13,    1,    7,    false,    false,    0,    728714],
    [ 2465737.5,    78,    55,    10,    14,    false,    false,    3,    744313],
    [ 2486076.5,    79,    51,    6,    7,    false,    false,    0,    764652],
];

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testhandate = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testHanDateConstructor: function(test) {
        test.expect(1);
        var hd = new HanDate();
        
        test.ok(hd !== null);
        test.done();
    },
    
    testHanDateCalcYearPositive1: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(1), 2697);
        test.done();
    },
    
    testHanDateCalcYearPositive2: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(40), 2697);
        test.done();
    },
    
    testHanDateCalcYearPositive3: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(41), 2698);
        test.done();
    },
    testHanDateCalcYearPositive4: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(394), 2698);
        test.done();
    },
    testHanDateCalcYearPositive5: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(395), 2699);
        test.done();
    },
    testHanDateCalcYearPositive6: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(778), 2699);
        test.done();
    },
    testHanDateCalcYearPositive7: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(779), 2700);
        test.done();
    },
    testHanDateCalcYearPositive8: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(1132), 2700);
        test.done();
    },
    testHanDateCalcYearPositive9: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(1133), 2701);
        test.done();
    },
    testHanDateCalcYearPositive10: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(1487), 2701);
        test.done();
    },
    testHanDateCalcYearPositive11: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(1827), 2702);
        test.done();
    },
    
    testHanDateCalcYearNegative1: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(-985395), 0);
        test.done();
    },
    testHanDateCalcYearNegative2: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(-985396), -1);
        test.done();
    },
    testHanDateCalcYearNegative3: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(-985749), -1);
        test.done();
    },
    testHanDateCalcYearNegative4: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(-985750), -2);
        test.done();
    },
    testHanDateCalcYearNegative5: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(-986135), -3);
        test.done();
    },
    testHanDateCalcYearNegative6: function(test) {
        test.expect(1);
        var hd = new HanDate({rd: 0, timezone: "Etc/UTC"});
        
        test.equal(hd._calcYear(-1426600), -1208);
        test.done();
    },
    
    testHanRataDieConstructorFromDateComponents1: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 2698,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 41);
        test.done();
    },
    testHanRataDieConstructorFromDateComponents2: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 2697,
            month: 13, // leap year
            day: 30,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 40);
        test.done();
    },
    testHanRataDieConstructorFromDateComponents3: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 1,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -985011);
        test.done();
    },
    testHanRataDieConstructorFromDateComponents4: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 0,
            month: 13,
            day: 30,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -985012);
        test.done();
    },
    testHanRataDieConstructorFromDateComponents5: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 1,
            month: 12,
            day: 30,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -984658);
        test.done();
    },
    testHanRataDieConstructorFromDateComponents6: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 2,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -984657);
        test.done();
    },
    testHanRataDieConstructorFromDateComponents7: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 2,
            month: 12,
            day: 30,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -984304);
        test.done();
    },
    testHanRataDieConstructorFromDateComponents8: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 3,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -984303);
        test.done();
    },
    testHanRataDieConstructorFromDateComponents9: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 3,
            month: 13,
            day: 30,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -983920);
        test.done();
    },
    testHanRataDieConstructorFromDateComponents10: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 4,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -983919);
        test.done();
    },
    testHanRataDieConstructorFromDateComponents11: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 4,
            month: 12,
            day: 30,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -983565);
        test.done();
    },
    testHanRataDieConstructorFromDateComponents12: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 5,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -983564);
        test.done();
    },
    testHanRataDieConstructorFromDateComponents13: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 5,
            month: 12,
            day: 29,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -983211);
        test.done();
    },
    testHanRataDieConstructorFromDateComponents14: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 6,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -983210);
        test.done();
    },
    testHanRataDieConstructorFromDateComponents15: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: -1208,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -1426612);
        test.done();
    },
    
    testHanRataDieConstructorFromDateComponentsCycle1: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 58,
            cycle: 44,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 41);
        test.done();
    },
    testHanRataDieConstructorFromDateComponentsCycle2: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            year: 57,
            cycle: 44,
            month: 13,
            day: 30,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), 40);
        test.done();
    },
    testHanRataDieConstructorFromDateComponentsCycle3: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            cycle: 0,
            year: 1,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -985011);
        test.done();
    },
    testHanRataDieConstructorFromDateComponentsCycle4: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            cycle: 0,
            year: 0,
            month: 13,
            day: 30,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -985012);
        test.done();
    },
    testHanRataDieConstructorFromDateComponentsCycle5: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            cycle: 0,
            year: 1,
            month: 12,
            day: 30,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -984658);
        test.done();
    },
    testHanRataDieConstructorFromDateComponentsCycle6: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            cycle: 0,
            year: 2,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -984657);
        test.done();
    },
    testHanRataDieConstructorFromDateComponentsCycle7: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            cycle: 0,
            year: 2,
            month: 12,
            day: 30,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -984304);
        test.done();
    },
    testHanRataDieConstructorFromDateComponentsCycle8: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            cycle: 0,
            year: 3,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -984303);
        test.done();
    },
    testHanRataDieConstructorFromDateComponentsCycle9: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            cycle: 0,
            year: 3,
            month: 13,
            day: 30,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -983920);
        test.done();
    },
    testHanRataDieConstructorFromDateComponentsCycle10: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            cycle: 0,
            year: 4,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -983919);
        test.done();
    },
    testHanRataDieConstructorFromDateComponentsCycle11: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            cycle: 0,
            year: 4,
            month: 12,
            day: 30,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -983565);
        test.done();
    },
    testHanRataDieConstructorFromDateComponentsCycle12: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            cycle: 0,
            year: 5,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -983564);
        test.done();
    },
    testHanRataDieConstructorFromDateComponentsCycle13: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            cycle: 0,
            year: 5,
            month: 12,
            day: 29,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -983211);
        test.done();
    },
    testHanRataDieConstructorFromDateComponentsCycle14: function(test) {
        test.expect(2);
        var prd = new HanRataDie({
            cycle: 0,
            year: 6,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        
        test.equal(typeof(prd), 'object');
        test.equal(prd.getRataDie(), -983210);
        test.done();
    },
    
    testHanDateConvert: function(test) {
        var hd;
        
        for (var i = 0; i < testDatesHan.length; i++) {
            hd = new HanDate({julianday: testDatesHan[i][0], timezone: "Etc/UTC"});
        
            // console.log("testing jd=" + testDatesHan[i][0]);
            
            test.equal(typeof(hd), 'object');
            test.equal((testDatesHan[i][0] - 1721424.5), hd.getRataDie(), "testing rd for " + testDatesHan[i][0]);
            test.equal(testDatesHan[i][1], hd.getCycles(), "testing cycle for " + testDatesHan[i][0]);
            test.equal(testDatesHan[i][2], hd.getCycleYears(), "testing cycle year for " + testDatesHan[i][0]);
            test.equal(testDatesHan[i][1] * 60 + testDatesHan[i][2], hd.getYears(), "testing year for " + testDatesHan[i][0]);
            test.equal(testDatesHan[i][3], hd.getMonths(), "testing month for " + testDatesHan[i][0]);
            test.equal(testDatesHan[i][4], hd.getDays(), "testing day for " + testDatesHan[i][0]);
            test.equal(testDatesHan[i][5], hd.isLeapYear(), "testing isLeapYear for " + testDatesHan[i][0]);
            test.equal(testDatesHan[i][6], hd.isLeapMonth(), "testing isLeapMonth for " + testDatesHan[i][0]);
            test.equal(testDatesHan[i][7], hd.getDayOfWeek(), "testing day of week for " + testDatesHan[i][0]);
        }
        test.done();
    },
    
    testHanDateGetJulianDay: function(test) {
        var hd;
        
        for (var i = 0; i < testDatesHan.length; i++) {
            hd = new HanDate({
                cycle: testDatesHan[i][1],
                year: testDatesHan[i][2], 
                month: testDatesHan[i][3], 
                day: testDatesHan[i][4],
                timezone: "Etc/UTC"
            });
        
            // console.log("testing jd=" + testDatesHan[i][0]);
            
            test.equal(typeof(hd), 'object');
            test.equal(testDatesHan[i][0], hd.getJulianDay(), "testing row " + testDatesHan[i][0]);
            test.equal(hd.getDayOfWeek(), testDatesHan[i][7]);
        }
        test.done();
    },
    
    testHanDateConstructorFull: function(test) {
        test.expect(10);
        var hd = new HanDate({
            year: 4711,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        
        test.ok(hd !== null);
        
        test.equal(hd.getYears(), 4711);
        test.equal(hd.getMonths(), 9);
        test.equal(hd.getDays(), 23);
        test.equal(hd.getHours(), 16);
        test.equal(hd.getMinutes(), 7);
        test.equal(hd.getSeconds(), 12);
        test.equal(hd.getMilliseconds(), 123);
        test.equal(hd.getCycles(), 78);
        test.equal(hd.getCycleYears(), 31);
        test.done();
    },
    
    testHanDateConstructorFullWithStrings: function(test) {
        test.expect(10);
        var hd = new HanDate({
            year: "4711", 
            month: "9",
            day: "23", 
            hour: "16", 
            minute: "7", 
            second: "12", 
            millisecond: "123"
        });
        
        test.ok(hd !== null);
        
        test.equal(hd.getYears(), 4711);
        test.equal(hd.getMonths(), 9);
        test.equal(hd.getDays(), 23);
        test.equal(hd.getHours(), 16);
        test.equal(hd.getMinutes(), 7);
        test.equal(hd.getSeconds(), 12);
        test.equal(hd.getMilliseconds(), 123);
        test.equal(hd.getCycles(), 78);
        test.equal(hd.getCycleYears(), 31);
        test.done();
    },
    
    testHanDateConstructorCopy: function(test) {
        test.expect(12);
        var hd2 = new HanDate({
            year: 4711, 
            month: 9, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        var hd = new HanDate(hd2);
        
        test.ok(hd !== null);
        
        test.equal(hd.getYears(), 4711);
        test.equal(hd.getMonths(), 9);
        test.equal(hd.getDays(), 23);
        test.equal(hd.getHours(), 16);
        test.equal(hd.getMinutes(), 7);
        test.equal(hd.getSeconds(), 12);
        test.equal(hd.getMilliseconds(), 123);
        test.equal(hd.getCycles(), 78);
        test.equal(hd.getCycleYears(), 31);
        test.ok(hd.isLeapYear());
        test.ok(!hd.isLeapMonth());
        test.done();
    },
    
    testHanDateConstructorCopyLeapMonth: function(test) {
        test.expect(5);
        var hd2 = new HanDate({
            year: 4711, 
            month: 10, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123,
            timezone: "Etc/UTC"
        });
        var hd = new HanDate(hd2);
        
        test.ok(hd !== null);
        
        test.equal(hd.getYears(), 4711);
        test.equal(hd.getMonths(), 10);
        test.ok(hd.isLeapYear());
        test.ok(hd.isLeapMonth());
        test.done();
    },
    
    testHanDateConstructorUnixTime: function(test) {
        test.expect(12);
        var hd = new HanDate({
            unixtime: 1420563744696,
            timezone: "Etc/UTC"
        });
        
        test.ok(hd !== null);
        
        test.equal(hd.getYears(), 4711);
        test.equal(hd.getMonths(), 12);
        test.equal(hd.getDays(), 16);
        test.equal(hd.getHours(), 17);
        test.equal(hd.getMinutes(), 2);
        test.equal(hd.getSeconds(), 24);
        test.equal(hd.getMilliseconds(), 696);
        test.equal(hd.getCycles(), 78);
        test.equal(hd.getCycleYears(), 31);
        test.ok(hd.isLeapYear());
        test.ok(!hd.isLeapMonth());
        test.done();
    },
    
    testHanDateSetYears: function(test) {
        test.expect(2);
        var hd = new HanDate();
        
        test.ok(hd !== null);
        
        hd.setYears(123);
        
        test.equal(hd.getYears(), 123);
        test.done();
    },
    
    testHanDateSetMonths: function(test) {
        test.expect(2);
        var hd = new HanDate();
        
        test.ok(hd !== null);
        
        hd.setMonths(7);
        
        test.equal(hd.getMonths(), 7);
        test.done();
    },
    
    testHanDateSetDays: function(test) {
        test.expect(2);
        var hd = new HanDate();
        
        test.ok(hd !== null);
        
        hd.setDays(12);
        
        test.equal(hd.getDays(), 12);
        test.done();
    },
    
    testHanDateSetHours: function(test) {
        test.expect(2);
        var hd = new HanDate();
        
        test.ok(hd !== null);
        
        hd.setHours(12);
        
        test.equal(hd.getHours(), 12);
        test.done();
    },
    
    testHanDateSetMinutes: function(test) {
        test.expect(2);
        var hd = new HanDate();
        
        test.ok(hd !== null);
        
        hd.setMinutes(13);
        
        test.equal(hd.getMinutes(), 13);
        test.done();
    },
    
    testHanDateSetSeconds: function(test) {
        test.expect(2);
        var hd = new HanDate();
        
        test.ok(hd !== null);
        
        hd.setSeconds(23);
        
        test.equal(hd.getSeconds(), 23);
        test.done();
    },
    
    testHanDateSetMilliseconds: function(test) {
        test.expect(2);
        var hd = new HanDate();
        
        test.ok(hd !== null);
        
        hd.setMilliseconds(123);
        
        test.equal(hd.getMilliseconds(), 123);
        test.done();
    },
    
    testGetDayOfWeek1: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5);
        test.done();
    },
    
    testGetDayOfWeekWithTime: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            hour: 8,
            minute: 39,
            second: 34,
            timezone: "Etc/UTC"
        });
        
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5);
        test.done();
    },
    
    testHanDateTestGetTimeZero: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4666,
            month: 11,
            day: 24,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTime(), 0);
        test.done();
    },
    
    testHanDateTestGetTimeZeroJD: function(test) {
        test.expect(2);
        var hd = new HanDate({julianday: 2440587.5});
        test.ok(hd !== null);
        
        test.equal(hd.getTime(), 0);
        test.done();
    },
    
    testHanDateTestGetTime: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4666,
            month: 11,
            day: 24,
            hour: 8,
            minute: 30,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTime(), 30600000);
        test.done();
    },
    
    testHanDateTestGetTimeTooEarly: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 1348,
            month: 10,
            day: 10,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTime(), -1);
        test.done();
    },
    
    testHanDateTestGetTimeTooLate: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 1416,
            month: 11,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTime(), -1);
        test.done();
    },
    
    // test some of the helper functions to make sure they are producing the right thing
    testHanDateOnOrBeforeSun: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        // Sunday on or before is 5 days before 
        test.equal(hd.onOrBefore(0).getRataDie(), rd-5);
        test.done();
    },
    
    testHanDateOnOrBeforeMon: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrBefore(1).getRataDie(), rd-4);
        test.done();
    },
    
    testHanDateOnOrBeforeTue: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrBefore(2).getRataDie(), rd-3);
        test.done();
    },
    
    testHanDateOnOrBeforeWed: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrBefore(3).getRataDie(), rd-2);
        test.done();
    },
    
    testHanDateOnOrBeforeThu: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrBefore(4).getRataDie(), rd-1);
        test.done();
    },
    
    testHanDateOnOrBeforeFri: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrBefore(5).getRataDie(), rd);
        test.done();
    },
    
    testHanDateOnOrBeforeSat: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrBefore(6).getRataDie(), rd-6);
        test.done();
    },
    
    testHanDateOnOrBeforeSunWithTime: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 30,
               hour: 8,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 6); // Saturday
        var rd = hd.getRataDie(); // contains fractional time for the 8:00am part
        
        // Sunday on or before is 5 days before 
        // Should give an rd result that also contains the fractional time 
        test.equal(hd.onOrBefore(0).getRataDie(), rd-6);
        test.done();
    },
    
    testHanDateOnOrBeforeSunWithTimeZoneWestern1: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13,
            day: 30,
               hour: 23,
               minute: 59,
               timezone: "America/Los_Angeles"
        }); // this is Saturday in Los Angeles, but Sunday in UTC 
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 6); // Saturday
        var rd = hd.getRataDie(); // contains fractional time for the 8:00am part
        
        // Sunday on or before is 6 days before 
        // Should give an rd result that also contains the fractional time 
        test.equal(hd.onOrBefore(0).getRataDie(), rd-6);
        test.done();
    },
    
    testHanDateOnOrBeforeSunWithTimeZoneWestern2: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4707, 
            month: 1, 
            day: 1,
               hour: 0,
               minute: 0,
               timezone: "America/Los_Angeles"
        }); // this is Sunday in Los Angeles and in UTC 
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 0); // Sunday
        var rd = hd.getRataDie(); // contains fractional time for the 8:00am part
        
        // Sunday on or before is 5 days before 
        // Should give an rd result that also contains the fractional time 
        test.equal(hd.onOrBefore(0).getRataDie(), rd);
        test.done();
    },
    
    testHanDateOnOrBeforeSunWithTimeZoneEastern1: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4707, 
            month: 1,
            day: 1,
               hour: 0,
               minute: 0,
               timezone: "Asia/Seoul"
        }); // this is Saturday in UTC, but Sunday in Seoul
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 0); // Sunday
        var rd = hd.getRataDie(); // contains fractional time for the 8:00am part
        
        // Sunday on or before is today 
        // Should give an rd result that also contains the fractional time 
        test.equal(hd.onOrBefore(0).getRataDie(), rd);
        test.done();
    },
    
    testHanDateOnOrBeforeSunWithTimeZoneEastern2: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 30,
               hour: 23,
               minute: 59,
               timezone: "Asia/Seoul"
        }); // this is Saturday in Seoul and in UTC 
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 6); // Saturday
        var rd = hd.getRataDie(); // contains fractional time for the 8:00am part
        
        // Sunday on or before is 6 days before 
        // Should give an rd result that also contains the fractional time 
        test.equal(hd.onOrBefore(0).getRataDie(), rd-6);
        test.done();
    },
    
    testHanDateOnOrAfterSun: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        // Sunday on or after is 2 days after 
        test.equal(hd.onOrAfter(0).getRataDie(), rd+2);
        test.done();
    },
    
    testHanDateOnOrAfterSunDate: function(test) {
        test.expect(5);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var date = hd.onOrBefore(0);
        
        // Sunday on or before is 5 days before
        test.equal(date.year, 4706);
        test.equal(date.month, 13);
        test.equal(date.day, 24);
        test.done();
    },
    
    testHanDateOnOrAfterMon: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrAfter(1).getRataDie(), rd+3);
        test.done();
    },
    
    testHanDateOnOrAfterMonDate: function(test) {
        test.expect(5);
        var hd = new HanDate({
            year: 4706,
            month: 13,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var date = hd.onOrAfter(1);
        
        test.equal(date.year, 4707);
        test.equal(date.month, 1);
        test.equal(date.day, 2);
        test.done();
    },
    
    testHanDateOnOrAfterTue: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrAfter(2).getRataDie(), rd+4);
        test.done();
    },
    
    testHanDateOnOrAfterWed: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrAfter(3).getRataDie(), rd+5);
        test.done();
    },
    
    testHanDateOnOrAfterThu: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrAfter(4).getRataDie(), rd+6);
        test.done();
    },
    
    testHanDateOnOrAfterThuDate: function(test) {
        test.expect(5);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var date = hd.onOrAfter(4);
        
        test.equal(date.year, 4707);
        test.equal(date.month, 1);
        test.equal(date.day, 5);
        test.done();
    },
    
    testHanDateOnOrAfterFri: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrAfter(5).getRataDie(), rd);
        test.done();
    },
    
    testHanDateOnOrAfterFriDate: function(test) {
        test.expect(5);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var date = hd.onOrAfter(5);
        
        test.equal(date.year, 4706);
        test.equal(date.month, 13);
        test.equal(date.day, 29);
        test.done();
    },
    
    testHanDateOnOrAfterSat: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.onOrAfter(6).getRataDie(), rd+1);
        test.done();
    },
    
    testHanDateBeforeSun: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        // Sunday before is 5 days before 
        test.equal(hd.before(0).getRataDie(), rd-5);
        test.done();
    },
    
    testHanDateBeforeSunDate: function(test) {
        test.expect(5);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var date = hd.before(0);
        
        // Sunday before is 5 days before 
        test.equal(date.year, 4706);
        test.equal(date.month, 13);
        test.equal(date.day, 24);
        test.done();
    },
    
    testHanDateBeforeMon: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.before(1).getRataDie(), rd-4);
        test.done();
    },
    
    testHanDateBeforeTue: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.before(2).getRataDie(), rd-3);
        test.done();
    },
    
    testHanDateBeforeWed: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.before(3).getRataDie(), rd-2);
        test.done();
    },
    
    testHanDateBeforeThu: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.before(4).getRataDie(), rd-1);
        test.done();
    },
    
    testHanDateBeforeThuDate: function(test) {
        test.expect(5);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var date = hd.before(4);
        
        // Thursday before is 1 day before 
        test.equal(date.year, 4706);
        test.equal(date.month, 13);
        test.equal(date.day, 28);
        test.done();
    },
    
    testHanDateBeforeFri: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.before(5).getRataDie(), rd-7);
        test.done();
    },
    
    testHanDateBeforeFriDate: function(test) {
        test.expect(5);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var date = hd.before(5);
        
        // Friday before is 7 days before the current Friday
        test.equal(date.year, 4706);
        test.equal(date.month, 13);
        test.equal(date.day, 22);
        test.done();
    },
    
    testHanDateBeforeSat: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.before(6).getRataDie(), rd-6);
        test.done();
    },
    
    testHanDateAfterSun: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        // Sunday after is 2 days after 
        test.equal(hd.after(0).getRataDie(), rd+2);
        test.done();
    },
    
    testHanDateAfterSunDate: function(test) {
        test.expect(5);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var date = hd.after(0);
        
        // Sunday after is 2 days after 
        test.equal(date.year, 4707);
        test.equal(date.month, 1);
        test.equal(date.day, 1);
        test.done();
    },
    
    testHanDateAfterMon: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.after(1).getRataDie(), rd+3);
        test.done();
    },
    
    testHanDateAfterTue: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.after(2).getRataDie(), rd+4);
        test.done();
    },
    
    testHanDateAfterWed: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.after(3).getRataDie(), rd+5);
        test.done();
    },
    
    testHanDateAfterThu: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.after(4).getRataDie(), rd+6);
        test.done();
    },
    
    testHanDateAfterFri: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.after(5).getRataDie(), rd+7);
        test.done();
    },
    
    testHanDateAfterFriDate: function(test) {
        test.expect(5);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var date = hd.after(5);
        
        // Friday after is 7 days after 
        test.equal(date.year, 4707);
        test.equal(date.month, 1);
        test.equal(date.day, 6);
        test.done();
    },
    
    testHanDateAfterSat: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var rd = hd.getRataDie();
        
        test.equal(hd.after(6).getRataDie(), rd+1);
        test.done();
    },
    
    testHanDateAfterSatDate: function(test) {
        test.expect(5);
        var hd = new HanDate({
            year: 4706, 
            month: 13, 
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfWeek(), 5); // Friday
        var date = hd.after(6);
        
        // Sat after is 1 day after 
        test.equal(date.year, 4706);
        test.equal(date.month, 13);
        test.equal(date.day, 30);
        test.done();
    },
    
    testHanDateTestGetWeekOfYearThisYear: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 2,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 5);
        test.done();
    },
    
    testHanDateTestGetWeekOfYearThisYear2: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 3,
            day: 19,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 12);
        test.done();
    },
    
    testHanDateTestGetWeekOfYearThisYear3: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 12,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 1);
        test.done();
    },
    
    testHanDateTestGetWeekOfYearThisYearWithTime: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 12,
            day: 30,
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
    
    testHanDateTestGetWeekOfYearPreviousYear: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4700,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 51);
        test.done();
    },
    
    testHanDateTestGetWeekOfYearLastWeekRegular1: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4689,
            month: 12,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 51);
        test.done();
    },
    
    testHanDateTestGetWeekOfYearLastWeekRegular2: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4690,
            month: 13,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 1);
        test.done();
    },
    
    testHanDateTestGetWeekOfYearLastWeekRegular3: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4691,
            month: 12,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 1);
        test.done();
    },
    
    testHanDateTestGetWeekOfYearLastWeekRegular4: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4692,
            month: 13,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 55);
        test.done();
    },
    
    testHanDateTestGetWeekOfYearLastWeekRegular5: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4693,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 51);
        test.done();
    },
    
    testHanDateTestGetWeekOfYearLastWeekRegular6: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4694,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfYear(), 1);
        test.done();
    },
    
    testHanDateGetDayOfYearFirstDay: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfYear(), 1);
        test.done();
    },
    
    testHanDateGetDayOfYearMidYear: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4687,
            month: 3,
            day: 17,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfYear(), 76);
        test.done();
    },
    
    testHanDateGetDayOfYearLastDay: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4686,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfYear(), 354);
        test.done();
    },
    
    testHanDateGetDayOfYearLastDayLeapYear: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4687,
            month: 13,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getDayOfYear(), 384);
        test.done();
    },
    
    testHanDateGetWeekOfMonth0: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 3,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testHanDateGetWeekOfMonth1: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 3,
            day: 4,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testHanDateGetWeekOfMonth2: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 3,
            day: 11,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("en-US"), 2);
        test.done();
    },
    
    testHanDateGetWeekOfMonth3: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 3,
            day: 20,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("en-US"), 4);
        test.done();
    },
    
    testHanDateGetWeekOfMonth4: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 3,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("en-US"), 5);
        test.done();
    },
    
    testHanDateGetWeekOfMonth6: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 4,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testHanDateGetWeekOfMonth7: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 5,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("en-US"), 0);
        test.done();
    },
    
    testHanDateGetWeekOfMonth8: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 6,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testHanDateGetWeekOfMonth9: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 7,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("en-US"), 1);
        test.done();
    },
    
    testHanDateGetWeekOfMonthCN0: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 3,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 1);
        test.done();
    },
    
    testHanDateGetWeekOfMonthCN1: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 3,
            day: 4,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 1);
        test.done();
    },
    
    testHanDateGetWeekOfMonthCN2: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 3,
            day: 11,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 2);
        test.done();
    },
    
    testHanDateGetWeekOfMonthCN3: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 3,
            day: 20,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 4);
        test.done();
    },
    
    testHanDateGetWeekOfMonthCN4: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 3,
            day: 30,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 5);
        test.done();
    },
    
    testHanDateGetWeekOfMonthCN6: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 4,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 0);
        test.done();
    },
    
    testHanDateGetWeekOfMonthCN7: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 5,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 0);
        test.done();
    },
    
    testHanDateGetWeekOfMonthCN8: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 6,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 1);
        test.done();
    },
    
    testHanDateGetWeekOfMonthCN9: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 7,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 1);
        test.done();
    },
    
    
    testHanDateGetWeekOfMonthCN10: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 8,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 1);
        test.done();
    },
    
    testHanDateGetWeekOfMonthCN11: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 9,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 0);
        test.done();
    },
    
    testHanDateGetWeekOfMonthCN12: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 10,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 0);
        test.done();
    },
    
    testHanDateGetWeekOfMonthCN13: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 11,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 1);
        test.done();
    },
    
    testHanDateGetWeekOfMonthCN14: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 12,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 1);
        test.done();
    },
    
    testHanDateGetWeekOfMonthCN: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4708,
            month: 3,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        // 3/1 is a Sunday, so it is at the beginning of the first week in China
        test.equal(hd.getWeekOfMonth("zh-Hans-CN"), 1);
        test.done();
    },
    
    testHanDateGetWeekOfMonthDE: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4708,
            month: 3,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        // weeks in Germany start on Monday, and 3/1 is a Sunday, so it is at the 
        // end of the preceding week.
        test.equal(hd.getWeekOfMonth("de-DE"), 0);
        test.done();
    },
    
    testHanDateGetEraAP: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 4707,
            month: 5,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getEra(), 1);
        test.done();
    },
    
    testHanDateGetEraBAP: function(test) {
        test.expect(2);
        var hd = new HanDate({
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
    
    testHanDateGetEraAPYear1: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 1,
            month: 1,
            day: 1,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getEra(), 1);
        test.done();
    },
    
    testHanDateGetEraBAPYear0: function(test) {
        test.expect(2);
        var hd = new HanDate({
            year: 0,
            month: 12,
            day: 29,
            timezone: "Etc/UTC"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getEra(), -1);
        test.done();
    },
    
    testHanDateSetTimeZone: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4707, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTimeZone(), "America/Los_Angeles");
        
        hd.setTimeZone("Asia/Tokyo");
        
        test.equal(hd.getTimeZone(), "Asia/Tokyo");
        test.done();
    },
    
    testHanDateSetTimeZoneNotString: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4707, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTimeZone(), "America/Los_Angeles");
        
        hd.setTimeZone(345);
        
        test.equal(hd.getTimeZone(), "America/Los_Angeles");
        test.done();
    },
    
    testHanDateSetTimeZoneUndefined: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4707, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTimeZone(), "America/Los_Angeles");
    
        // clears it out
        hd.setTimeZone(undefined);
        
        test.equal(hd.getTimeZone(), "local");
        test.done();
    },
    
    testHanDateSetTimeZoneEmpty: function(test) {
        test.expect(3);
        var hd = new HanDate({
            year: 4707, 
            month: 3, 
            day: 8,
            timezone: "America/Los_Angeles"
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTimeZone(), "America/Los_Angeles");
        
        // clears it out
        hd.setTimeZone("");
        
        test.equal(hd.getTimeZone(), "local");
        test.done();
    },
    
    testHanDateInitWithUnixTimeRightTimeZone: function(test) {
        test.expect(2);
        var hd = new HanDate({
            unixtime: 0
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTimeZone(), "local");
        test.done();
    },
    
    testHanDateInitWithJDRightTimeZone: function(test) {
        test.expect(2);
        var hd = new HanDate({
            julianday: 0
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTimeZone(), "local");
        test.done();
    },
    
    testHanDateInitWithRDRightTimeZone: function(test) {
        test.expect(2);
        var hd = new HanDate({
            rd: 0
        });
        test.ok(hd !== null);
        
        test.equal(hd.getTimeZone(), "local");
        test.done();
    },
    
    testHanDateRoundTripConstruction: function(test) {
        test.expect(8);
        var hd = new HanDate({
            year: 4707,
            month: 8,
            day: 12,
            timezone: "local"
        });
        test.ok(hd !== null);
        // console.log("hd is " + JSON.stringify(hd, undefined, 4));
        
        var u = hd.getTime();
        // console.log("unixtime is " + u);
        var hd2 = new HanDate({
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
    
    testHanDateRoundTripConstruction2: function(test) {
        test.expect(8);
        var hd = new HanDate({
            year: 4707,
            month: 8,
            day: 12,
            timezone: "America/Los_Angeles"
        });
        test.ok(hd !== null);
        // console.log("hd is " + JSON.stringify(hd, undefined, 4));
        
        var u = hd.getTime();
        // console.log("unixtime is " + u);
        var hd2 = new HanDate({
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