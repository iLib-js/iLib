/*
 * testcoptic.js - test the coptic calendar
 * 
 * Copyright © 2015,2017, JEDLSoft
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

if (typeof(CopticCal) === "undefined") {
    var CopticCal = require("../.././../lib/CopticCal.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testcoptic = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCopticGetNumMonths: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getNumMonths(1731), 13);
        test.done();
    },
    
    testCopticGetMonLength1: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getMonLength(1, 1731), 30);
        test.done();
    },
    
    testCopticGetMonLength2: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getMonLength(2, 1731), 30);
        test.done();
    },
    
    testCopticGetMonLength3: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getMonLength(3, 1731), 30);
        test.done();
    },
    
    testCopticGetMonLength4: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getMonLength(4, 1731), 30);
        test.done();
    },
    
    testCopticGetMonLength5: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getMonLength(5, 1731), 30);
        test.done();
    },
    
    testCopticGetMonLength6: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getMonLength(6, 1731), 30);
        test.done();
    },
    
    testCopticGetMonLength7: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getMonLength(7, 1731), 30);
        test.done();
    },
    
    testCopticGetMonLength8: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getMonLength(8, 1731), 30);
        test.done();
    },
    
    testCopticGetMonLength9: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getMonLength(9, 1731), 30);
        test.done();
    },
    
    testCopticGetMonLength10: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getMonLength(10, 1731), 30);
        test.done();
    },
    
    testCopticGetMonLength11: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getMonLength(11, 1731), 30);
        test.done();
    },
    
    testCopticGetMonLength12: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getMonLength(12, 1731), 30);
        test.done();
    },
    
    testCopticGetMonLength13LeapYear: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getMonLength(13, 1731), 6);
        test.done();
    },
    
    testCopticGetMonLength13: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.equal(cal.getMonLength(13, 1732), 5);
        test.done();
    },
    
    testCopticIsLeapYear: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(cal.isLeapYear(1731));
        test.done();
    },
    
    testCopticIsLeapYear: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(!cal.isLeapYear(1732));
        test.done();
    },
    
    testCopticIsLeapYear: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(!cal.isLeapYear(1733));
        test.done();
    },
    
    testCopticIsLeapYear: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(!cal.isLeapYear(1734));
        test.done();
    },
    
    testCopticIsLeapYear: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(cal.isLeapYear(1735));
        test.done();
    },
    
    testCopticIsLeapYearBM0: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(!cal.isLeapYear(0));
        test.done();
    },
    
    testCopticIsLeapYearBMMinus1: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(cal.isLeapYear(-1));
        test.done();
    },
    
    testCopticIsLeapYearBMMinus2: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(!cal.isLeapYear(-2));
        test.done();
    },
    
    testCopticIsLeapYearBMMinus3: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(!cal.isLeapYear(-3));
        test.done();
    },
    
    testCopticIsLeapYearBMMinus4: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(!cal.isLeapYear(-4));
        test.done();
    },
    
    testCopticIsLeapYearOnMillenium: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(cal.isLeapYear(2003));
        test.done();
    },
    
    testCopticIsLeapYearOnCentury0: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(cal.isLeapYear(1603));
        test.done();
    },
    
    testCopticIsLeapYearOnCentury1: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(cal.isLeapYear(1703));
        test.done();
    },
    
    testCopticIsLeapYearOnCentury2: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(cal.isLeapYear(1803));
        test.done();
    },
    
    testCopticIsLeapYearOnCentury3: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(cal.isLeapYear(1903));
        test.done();
    },
    
    testCopticIsLeapYearOnQuadCentennial: function(test) {
        test.expect(1);
        var cal = new CopticCal();
        
        test.ok(cal.isLeapYear(2003));
        test.done();
    },
    
    testCopticNewDateInstance: function(test) {
        test.expect(2);
        var cal = new CopticCal();
        var d = cal.newDateInstance({
            year: 20,
            month: 6,
            day: 1
        });
        
        test.ok(typeof(d) !== "undefined");
        test.equal(d.cal.type, "coptic");
        test.done();
    }
    
};