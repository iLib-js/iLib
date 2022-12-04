/*
 * testhebrew.js - test the hebrew calendar
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

if (typeof(HebrewCal) === "undefined") {
    var HebrewCal = require("../../lib/HebrewCal.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testhebrew = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testHebrewGetNumMonths: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getNumMonths(5772), 12);
        test.done();
    },

    testHebrewGetMonLength1: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(1, 5772), 30);
        test.done();
    },

    testHebrewGetMonLength2: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(2, 5772), 29);
        test.done();
    },

    testHebrewGetMonLength3: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(3, 5772), 30);
        test.done();
    },

    testHebrewGetMonLength4: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(4, 5772), 29);
        test.done();
    },

    testHebrewGetMonLength5: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(5, 5772), 30);
        test.done();
    },

    testHebrewGetMonLength6: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(6, 5772), 29);
        test.done();
    },

    testHebrewGetMonLength7: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(7, 5772), 30);
        test.done();
    },

    testHebrewGetMonLength8: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(8, 5772), 29);
        test.done();
    },

    testHebrewGetMonLength9: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(9, 5772), 30);
        test.done();
    },

    testHebrewGetMonLength10: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(10, 5772), 29);
        test.done();
    },

    testHebrewGetMonLength11: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(11, 5772), 30);
        test.done();
    },

    testHebrewGetMonLength12: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(12, 5772), 30);
        test.done();
    },

    testHebrewGetMonLength13: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        // doesn't exist in a non-leap year
        test.equal(cal.getMonLength(13, 5772), 0);
        test.done();
    },

    testHebrewGetNumMonthsLeap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getNumMonths(5774), 13);
        test.done();
    },

    testHebrewGetMonLength1Leap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(1, 5774), 30);
        test.done();
    },

    testHebrewGetMonLength2Leap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(2, 5774), 29);
        test.done();
    },

    testHebrewGetMonLength3Leap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(3, 5774), 30);
        test.done();
    },

    testHebrewGetMonLength4Leap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(4, 5774), 29);
        test.done();
    },

    testHebrewGetMonLength5Leap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(5, 5774), 30);
        test.done();
    },

    testHebrewGetMonLength6Leap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(6, 5774), 29);
        test.done();
    },

    testHebrewGetMonLength7Leap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(7, 5774), 30);
        test.done();
    },

    testHebrewGetMonLength8Leap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(8, 5774), 30);
        test.done();
    },

    testHebrewGetMonLength9Leap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(9, 5774), 30);
        test.done();
    },

    testHebrewGetMonLength10Leap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(10, 5774), 29);
        test.done();
    },

    testHebrewGetMonLength11Leap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(11, 5774), 30);
        test.done();
    },

    testHebrewGetMonLength12Leap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(12, 5774), 30);
        test.done();
    },

    testHebrewGetMonLength13Leap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getMonLength(13, 5774), 29);
        test.done();
    },

    testHebrewIsLeapYear1: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(1));
        test.done();
    },

    testHebrewIsLeapYear2: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(2));
        test.done();
    },

    testHebrewIsLeapYear3: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(cal.isLeapYear(3));
        test.done();
    },

    testHebrewIsLeapYear4: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(4));
        test.done();
    },

    testHebrewIsLeapYear5: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(5));
        test.done();
    },

    testHebrewIsLeapYear6: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(cal.isLeapYear(6));
        test.done();
    },

    testHebrewIsLeapYear7: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(7));
        test.done();
    },

    testHebrewIsLeapYear8: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(cal.isLeapYear(8));
        test.done();
    },

    testHebrewIsLeapYear9: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(9));
        test.done();
    },

    testHebrewIsLeapYear10: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(10));
        test.done();
    },

    testHebrewIsLeapYear11: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(cal.isLeapYear(11));
        test.done();
    },

    testHebrewIsLeapYear12: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(12));
        test.done();
    },

    testHebrewIsLeapYear13: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(13));
        test.done();
    },
    testHebrewIsLeapYear14: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(cal.isLeapYear(14));
        test.done();
    },
    testHebrewIsLeapYear15: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(15));
        test.done();
    },
    testHebrewIsLeapYear16: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(16));
        test.done();
    },
    testHebrewIsLeapYear17: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(cal.isLeapYear(17));
        test.done();
    },
    testHebrewIsLeapYear18: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(18));
        test.done();
    },
    testHebrewIsLeapYear19: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(cal.isLeapYear(19));
        test.done();
    },
    testHebrewIsLeapYear20: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(20));
        test.done();
    },
    testHebrewIsLeapYear21: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(21));
        test.done();
    },
    testHebrewIsLeapYear22: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(cal.isLeapYear(22));
        test.done();
    },
    testHebrewIsLeapYear23: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(23));
        test.done();
    },
    testHebrewIsLeapYear24: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(24));
        test.done();
    },
    testHebrewIsLeapYear25: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(cal.isLeapYear(25));
        test.done();
    },
    testHebrewIsLeapYear26: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(26));
        test.done();
    },
    testHebrewIsLeapYear27: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(cal.isLeapYear(27));
        test.done();
    },
    testHebrewIsLeapYear28: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(28));
        test.done();
    },
    testHebrewIsLeapYear29: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(!cal.isLeapYear(29));
        test.done();
    },
    testHebrewIsLeapYear30: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.ok(cal.isLeapYear(30));
        test.done();
    },

    testHebrewGetNumMonths1: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getNumMonths(1), 12);
        test.done();
    },

    testHebrewGetNumMonths2: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getNumMonths(2), 12);
        test.done();
    },
    testHebrewGetNumMonths3: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getNumMonths(3), 13);
        test.done();
    },
    testHebrewGetNumMonths4: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getNumMonths(4), 12);
        test.done();
    },
    testHebrewGetNumMonths5: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getNumMonths(5), 12);
        test.done();
    },
    testHebrewGetNumMonths6: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.getNumMonths(6), 13);
        test.done();
    },

    testHebrewLastDayOfMonth1: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(1, 5772), 30);
        test.done();
    },
    testHebrewLastDayOfMonth2: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(2, 5772), 29);
        test.done();
    },
    testHebrewLastDayOfMonth3: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(3, 5772), 30);
        test.done();
    },
    testHebrewLastDayOfMonth4: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(4, 5772), 29);
        test.done();
    },
    testHebrewLastDayOfMonth5: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(5, 5772), 30);
        test.done();
    },
    testHebrewLastDayOfMonth6: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(6, 5772), 29);
        test.done();
    },
    testHebrewLastDayOfMonth7: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(7, 5772), 30);
        test.done();
    },
    testHebrewLastDayOfMonth8ShortHeshvan: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(8, 5772), 29);
        test.done();
    },
    testHebrewLastDayOfMonth8LongHeshvan: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(8, 5771), 30);
        test.done();
    },
    testHebrewLastDayOfMonth9ShortKislev: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(9, 5773), 29);
        test.done();
    },
    testHebrewLastDayOfMonth9LongKislev: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(9, 5772), 30);
        test.done();
    },
    testHebrewLastDayOfMonth10: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(10, 5772), 29);
        test.done();
    },
    testHebrewLastDayOfMonth11: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(11, 5772), 30);
        test.done();
    },
    testHebrewLastDayOfMonth12: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(12, 5772), 30);
        test.done();
    },
    testHebrewLastDayOfMonth13NotLeap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(13, 5772), 0);
        test.done();
    },
    testHebrewLastDayOfMonth13Leap: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(13, 5771), 29);
        test.done();
    },
    testHebrewLastDayOfMonthBogus: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(2313, 5772), 0);
        test.done();
    },
    testHebrewLastDayOfMonthNegative: function(test) {
        test.expect(1);
        var cal = new HebrewCal();

        test.equal(cal.lastDayOfMonth(-2, 5772), 0);
        test.done();
    },

    /* test internal private functions to make sure they are providing the correct
     * information to the other internal routines...
     */
    testHebrewElapsedDays1: function(test) {
        test.expect(1);
        test.equal(HebrewCal.elapsedDays(1), 0);
        test.done();
    },
    testHebrewElapsedDays2: function(test) {
        test.expect(1);
        test.equal(HebrewCal.elapsedDays(2), 355);
        test.done();
    },
    testHebrewElapsedDays3: function(test) {
        test.expect(1);
        test.equal(HebrewCal.elapsedDays(3), 710);
        test.done();
    },
    testHebrewElapsedDays4: function(test) {
        test.expect(1);
        test.equal(HebrewCal.elapsedDays(4), 1093);
        test.done();
    },
    testHebrewElapsedDays5: function(test) {
        test.expect(1);
        test.equal(HebrewCal.elapsedDays(5), 1447);
        test.done();
    },
    testHebrewElapsedDays6: function(test) {
        test.expect(1);
        test.equal(HebrewCal.elapsedDays(6), 1802);
        test.done();
    },
    testHebrewElapsedDays5773: function(test) {
        test.expect(1);
        // bigger number calculation, so more chance for error
        test.equal(HebrewCal.elapsedDays(5773), 2108190);
        test.done();
    }

};
