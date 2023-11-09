/*
 * testpersianastro.js - test the persian astronomical calendar
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

if (typeof(PersianCal) === "undefined") {
    var PersianCal = require("../../lib/PersianCal.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testpersianastro = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testPersianGetNumMonths: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.equal(cal.getNumMonths(1392), 12);
        test.done();
    },
    testPersianGetMonLength1: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.equal(cal.getMonLength(1, 1392), 31);
        test.done();
    },
    testPersianGetMonLength2: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.equal(cal.getMonLength(2, 1392), 31);
        test.done();
    },
    testPersianGetMonLength3: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.equal(cal.getMonLength(3, 1392), 31);
        test.done();
    },
    testPersianGetMonLength4: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.equal(cal.getMonLength(4, 1392), 31);
        test.done();
    },
    testPersianGetMonLength5: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.equal(cal.getMonLength(5, 1392), 31);
        test.done();
    },
    testPersianGetMonLength6: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.equal(cal.getMonLength(6, 1392), 31);
        test.done();
    },
    testPersianGetMonLength7: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.equal(cal.getMonLength(7, 1392), 30);
        test.done();
    },
    testPersianGetMonLength8: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.equal(cal.getMonLength(8, 1392), 30);
        test.done();
    },
    testPersianGetMonLength9: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.equal(cal.getMonLength(9, 1392), 30);
        test.done();
    },
    testPersianGetMonLength10: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.equal(cal.getMonLength(10, 1392), 30);
        test.done();
    },
    testPersianGetMonLength11: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.equal(cal.getMonLength(11, 1392), 30);
        test.done();
    },
    testPersianGetMonLength12: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.equal(cal.getMonLength(12, 1392), 29);
        test.done();
    },
    testPersianGetMonLength12LeapYear: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.equal(cal.getMonLength(12, 1391), 30);
        test.done();
    },
    testPersianIsLeapYear: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.ok(cal.isLeapYear(1391));
        test.done();
    },
    testPersianIsLeapYearNot: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.ok(!cal.isLeapYear(1392));
        test.done();
    },
    testPersianIsLeapYear1: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.ok(!cal.isLeapYear(1393));
        test.done();
    },
    testPersianIsLeapYear2: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.ok(!cal.isLeapYear(1394));
        test.done();
    },
    testPersianIsLeapYear3: function(test) {
        test.expect(1);
        var cal = new PersianCal();

        test.ok(cal.isLeapYear(1395));
        test.done();
    }
};
