/*
 * testjulian.js - test the julian calendar
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

if (typeof(JulianCal) === "undefined") {
    var JulianCal = require("../../../lib/JulianCal.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testjulian = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJulianGetNumMonths: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.equal(cal.getNumMonths(2011), 12);
        test.done();
    },
    
    testJuliangetMonLengthJan: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.equal(cal.getMonLength(1, 2011), 31);
        test.done();
    },
    
    testJuliangetMonLengthFeb: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.equal(cal.getMonLength(2, 2011), 28);
        test.done();
    },
    
    testJuliangetMonLengthFebLeapYear: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.equal(cal.getMonLength(2, 2012), 29);
        test.done();
    },
    
    testJuliangetMonLengthMar: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.equal(cal.getMonLength(3, 2011), 31);
        test.done();
    },
    
    testJuliangetMonLengthApr: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.equal(cal.getMonLength(4, 2011), 30);
        test.done();
    },
    
    testJuliangetMonLengthMay: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.equal(cal.getMonLength(5, 2011), 31);
        test.done();
    },
    
    testJuliangetMonLengthJun: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.equal(cal.getMonLength(6, 2011), 30);
        test.done();
    },
    
    testJuliangetMonLengthJul: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.equal(cal.getMonLength(7, 2011), 31);
        test.done();
    },
    
    testJuliangetMonLengthAug: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.equal(cal.getMonLength(8, 2011), 31);
        test.done();
    },
    
    testJuliangetMonLengthSep: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.equal(cal.getMonLength(9, 2011), 30);
        test.done();
    },
    
    testJuliangetMonLengthOct: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.equal(cal.getMonLength(10, 2011), 31);
        test.done();
    },
    
    testJuliangetMonLengthNov: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.equal(cal.getMonLength(11, 2011), 30);
        test.done();
    },
    
    testJuliangetMonLengthDec: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.equal(cal.getMonLength(12, 2011), 31);
        test.done();
    },
    
    testJulianIsLeapYear: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.ok(cal.isLeapYear(2012));
        test.done();
    },
    
    /*
    In the Julian calendar, there is no year 0. The dates
    go from 2 BCE, 1 BCE, 1 CE, 2 CE, etc.
    Thus, year 4 is a leap year, and 4 years earlier was year
    1 BCE, which was also a leap year. 1 BCE is represented
    as -1 in our calculations.
    */
    testJulianIsLeapYearBCEFalse: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.ok(!cal.isLeapYear(-3));
        test.done();
    },
    
    testJulianIsLeapYearBCETrue: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.ok(cal.isLeapYear(-1));
        test.done();
    },
    
    testJulianIsLeapYearNot: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.ok(!cal.isLeapYear(2011));
        test.done();
    },
    
    testJulianIsLeapYearNotOnCentury1: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.ok(cal.isLeapYear(1700));
        test.done();
    },
    
    testJulianIsLeapYearNotOnCentury2: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.ok(cal.isLeapYear(1800));
        test.done();
    },
    
    testJulianIsLeapYearNotOnCentury3: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.ok(cal.isLeapYear(1900));
        test.done();
    },
    
    testJulianIsLeapYearOnQuadCentennial: function(test) {
        test.expect(1);
        var cal = new JulianCal();
        
        test.ok(cal.isLeapYear(2000));
        test.done();
    }  
};