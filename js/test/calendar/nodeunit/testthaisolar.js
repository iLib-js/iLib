/*
 * testthaisolar.js - test the Thai solar calendar
 * 
 * Copyright © 2013-2015,2017, JEDLSoft
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

if (typeof(ThaiSolarCal) === "undefined") {
    var ThaiSolarCal = require("../../../lib/ThaiSolarCal.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testthaisolar = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testThaiSolarGetNumMonths: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.equal(cal.getNumMonths(2554), 12);
        test.done();
    },
    
    testThaiSolargetMonLengthJan: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.equal(cal.getMonLength(1, 2554), 31);
        test.done();
    },
    
    testThaiSolargetMonLengthFeb: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.equal(cal.getMonLength(2, 2554), 28);
        test.done();
    },
    
    testThaiSolargetMonLengthFebLeapYear: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.equal(cal.getMonLength(2, 2555), 29);
        test.done();
    },
    
    testThaiSolargetMonLengthMar: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.equal(cal.getMonLength(3, 2554), 31);
        test.done();
    },
    
    testThaiSolargetMonLengthApr: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.equal(cal.getMonLength(4, 2554), 30);
        test.done();
    },
    
    testThaiSolargetMonLengthMay: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.equal(cal.getMonLength(5, 2554), 31);
        test.done();
    },
    
    testThaiSolargetMonLengthJun: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.equal(cal.getMonLength(6, 2554), 30);
        test.done();
    },
    
    testThaiSolargetMonLengthJul: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.equal(cal.getMonLength(7, 2554), 31);
        test.done();
    },
    
    testThaiSolargetMonLengthAug: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.equal(cal.getMonLength(8, 2554), 31);
        test.done();
    },
    
    testThaiSolargetMonLengthSep: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.equal(cal.getMonLength(9, 2554), 30);
        test.done();
    },
    
    testThaiSolargetMonLengthOct: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.equal(cal.getMonLength(10, 2554), 31);
        test.done();
    },
    
    testThaiSolargetMonLengthNov: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.equal(cal.getMonLength(11, 2554), 30);
        test.done();
    },
    
    testThaiSolargetMonLengthDec: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.equal(cal.getMonLength(12, 2554), 31);
        test.done();
    },
    
    testThaiSolarIsLeapYear: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.ok(cal.isLeapYear(2555));
        test.done();
    },
    
    testThaiSolarIsLeapYearNot: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.ok(!cal.isLeapYear(2554));
        test.done();
    },
    
    testThaiSolarIsLeapYearNotOnCentury1: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.ok(!cal.isLeapYear(2243));
        test.done();
    },
    
    testThaiSolarIsLeapYearNotOnCentury2: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.ok(!cal.isLeapYear(2343));
        test.done();
    },
    
    testThaiSolarIsLeapYearNotOnCentury3: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.ok(!cal.isLeapYear(2443));
        test.done();
    },
    
    testThaiSolarIsLeapYearOnQuadCentennial: function(test) {
        test.expect(1);
        var cal = new ThaiSolarCal();
        
        test.ok(cal.isLeapYear(2543));
        test.done();
    }
};
