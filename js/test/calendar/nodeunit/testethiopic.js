/*
 * testethiopic.js - test the ethiopic calendar
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

if (typeof(EthiopicCal) === "undefined") {
    var EthiopicCal = require("../.././../lib/EthiopicCal.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testethiopic = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testEthiopicGetNumMonths: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getNumMonths(2007), 13);
        test.done();
    },
    
    testEthiopicGetMonLength1: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(1, 2007), 30);
        test.done();
    },
    
    testEthiopicGetMonLength2: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(2, 2007), 30);
        test.done();
    },
    
    testEthiopicGetMonLength3: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(3, 2007), 30);
        test.done();
    },
    
    testEthiopicGetMonLength4: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(4, 2007), 30);
        test.done();
    },
    
    testEthiopicGetMonLength5: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(5, 2007), 30);
        test.done();
    },
    
    testEthiopicGetMonLength6: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(6, 2007), 30);
        test.done();
    },
    
    testEthiopicGetMonLength7: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(7, 2007), 30);
        test.done();
    },
    
    testEthiopicGetMonLength8: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(8, 2007), 30);
        test.done();
    },
    
    testEthiopicGetMonLength9: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(9, 2007), 30);
        test.done();
    },
    
    testEthiopicGetMonLength10: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(10, 2007), 30);
        test.done();
    },
    
    testEthiopicGetMonLength11: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(11, 2007), 30);
        test.done();
    },
    
    testEthiopicGetMonLength12: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(12, 2007), 30);
        test.done();
    },
    
    testEthiopicGetMonLength13LeapYear: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(13, 2007), 6);
        test.done();
    },
    
    testEthiopicGetMonLength13: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(13, 2008), 5);
        test.done();
    },
    
    testEthiopicGetMonLength14: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength(undefined), 30);
        test.done();
    },
    
    testEthiopicGetMonLength15: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength("15"), 5);
        test.done();
    },
    
    testEthiopicGetMonLength16: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.equal(cal.getMonLength("13", "2007"), 6);
        test.done();
    },
    
    testEthiopicIsLeapYear: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(cal.isLeapYear(2007));
        test.done();
    },
    
    testEthiopicIsLeapYear1: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(!cal.isLeapYear(2008));
        test.done();
    },
    
    testEthiopicIsLeapYear2: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(!cal.isLeapYear(2009));
        test.done();
    },
    
    testEthiopicIsLeapYear3: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(!cal.isLeapYear(2010));
        test.done();
    },
    
    testEthiopicIsLeapYear4: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(cal.isLeapYear(2011));
        test.done();
    },
    
    testEthiopicIsLeapYear5: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(!cal.isLeapYear(undefined));
        test.done();
    },
    
    testEthiopicIsLeapYear6: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(!cal.isLeapYear("2009"));
        test.done();
    },
    
    testEthiopicIsLeapYearBM0: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(!cal.isLeapYear(0));
        test.done();
    },
    
    testEthiopicIsLeapYearBMMinus1: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(cal.isLeapYear(-1));
        test.done();
    },
    
    testEthiopicIsLeapYearBMMinus2: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(!cal.isLeapYear(-2));
        test.done();
    },
    
    testEthiopicIsLeapYearBMMinus3: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(!cal.isLeapYear(-3));
        test.done();
    },
    
    testEthiopicIsLeapYearBMMinus4: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(!cal.isLeapYear(-4));
        test.done();
    },
    
    testEthiopicIsLeapYearOnMillenium: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(cal.isLeapYear(2003));
        test.done();
    },
    
    testEthiopicIsLeapYearOnCentury0: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(cal.isLeapYear(1603));
        test.done();
    },
    
    testEthiopicIsLeapYearOnCentury1: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(cal.isLeapYear(1703));
        test.done();
    },
    
    testEthiopicIsLeapYearOnCentury2: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(cal.isLeapYear(1803));
        test.done();
    },
    
    testEthiopicIsLeapYearOnCentury3: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(cal.isLeapYear(1903));
        test.done();
    },
    
    testEthiopicIsLeapYearOnQuadCentennial: function(test) {
        test.expect(1);
        var cal = new EthiopicCal();
        
        test.ok(cal.isLeapYear(2003));
        test.done();
    },
    
    testEthiopicNewDateInstance: function(test) {
        test.expect(2);
        var cal = new EthiopicCal();
        var d = cal.newDateInstance({
            year: 20,
            month: 6,
            day: 1
        });
        
        test.ok(typeof(d) !== "undefined");
        test.equal(d.cal.type, "ethiopic");
        test.done();
    }
    
};