/*
 * testgregorian.js - test the gregorian calendar
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


if (typeof(GregorianCal) === "undefined") {
    var GregorianCal = require("../../lib/GregorianCal.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testgregorian = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testGregorianGetNumMonths: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.equal(cal.getNumMonths(2011), 12);
        test.done();
    },

    testGregoriangetMonLengthJan: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.equal(cal.getMonLength(1, 2011), 31);
        test.done();
    },

    testGregoriangetMonLengthFeb: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.equal(cal.getMonLength(2, 2011), 28);
        test.done();
    },

    testGregoriangetMonLengthFebLeapYear: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.equal(cal.getMonLength(2, 2012), 29);
        test.done();
    },

    testGregoriangetMonLengthMar: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.equal(cal.getMonLength(3, 2011), 31);
        test.done();
    },

    testGregoriangetMonLengthApr: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.equal(cal.getMonLength(4, 2011), 30);
        test.done();
    },

    testGregoriangetMonLengthMay: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.equal(cal.getMonLength(5, 2011), 31);
        test.done();
    },

    testGregoriangetMonLengthJun: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.equal(cal.getMonLength(6, 2011), 30);
        test.done();
    },

    testGregoriangetMonLengthJul: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.equal(cal.getMonLength(7, 2011), 31);
        test.done();
    },

    testGregoriangetMonLengthAug: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.equal(cal.getMonLength(8, 2011), 31);
        test.done();
    },

    testGregoriangetMonLengthSep: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.equal(cal.getMonLength(9, 2011), 30);
        test.done();
    },

    testGregoriangetMonLengthOct: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.equal(cal.getMonLength(10, 2011), 31);
        test.done();
    },

    testGregoriangetMonLengthNov: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.equal(cal.getMonLength(11, 2011), 30);
        test.done();
    },

    testGregoriangetMonLengthDec: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.equal(cal.getMonLength(12, 2011), 31);
        test.done();
    },

    testGregorianIsLeapYear: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.ok(cal.isLeapYear(2012));
        test.done();
    },

    testGregorianIsLeapYearNot: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.ok(!cal.isLeapYear(2011));
        test.done();
    },

    testGregorianIsLeapYearNotOnCentury1: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.ok(!cal.isLeapYear(1700));
        test.done();
    },

    testGregorianIsLeapYearNotOnCentury2: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.ok(!cal.isLeapYear(1800));
        test.done();
    },

    testGregorianIsLeapYearNotOnCentury3: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.ok(!cal.isLeapYear(1900));
        test.done();
    },

    testGregorianIsLeapYearOnQuadCentennial: function(test) {
        test.expect(1);
        var cal = new GregorianCal();

        test.ok(cal.isLeapYear(2000));
        test.done();
    }
};
