/*
 * testislamic.js - test the islamic calendar
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

if (typeof(IslamicCal) === "undefined") {
    var IslamicCal = require("../../lib/IslamicCal.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testislamic = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testIslamicGetNumMonths: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.equal(cal.getNumMonths(1), 12);
        test.done();
    },
    
    testIslamicgetMonLength1: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.equal(cal.getMonLength(1, 1), 30);
        test.done();
    },
    
    testIslamicgetMonLength2: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.equal(cal.getMonLength(2, 1), 29);
        test.done();
    },
    
    testIslamicgetMonLength3: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.equal(cal.getMonLength(3, 1), 30);
        test.done();
    },
    
    testIslamicgetMonLength4: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.equal(cal.getMonLength(4, 1), 29);
        test.done();
    },
    
    testIslamicgetMonLength5: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.equal(cal.getMonLength(5, 1), 30);
        test.done();
    },
    
    testIslamicgetMonLength6: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.equal(cal.getMonLength(6, 1), 29);
        test.done();
    },
    
    testIslamicgetMonLength7: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.equal(cal.getMonLength(7, 1), 30);
        test.done();
    },
    
    testIslamicgetMonLength8: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.equal(cal.getMonLength(8, 1), 29);
        test.done();
    },
    
    testIslamicgetMonLength9: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.equal(cal.getMonLength(9, 1), 30);
        test.done();
    },
    
    testIslamicgetMonLength10: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.equal(cal.getMonLength(10, 1), 29);
        test.done();
    },
    
    testIslamicgetMonLength11: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.equal(cal.getMonLength(11, 1), 30);
        test.done();
    },
    
    testIslamicgetMonLength12: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.equal(cal.getMonLength(12, 1), 29);
        test.done();
    },
    
    testIslamicgetMonLength12LeapYear: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.equal(cal.getMonLength(12, 2), 30);
        test.done();
    },
    
    testIslamicIsLeapYear1: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(1));
        test.done();
    },
    
    testIslamicIsLeapYear2: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(cal.isLeapYear(2));
        test.done();
    },
    
    testIslamicIsLeapYear3: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(3));
        test.done();
    },
    
    testIslamicIsLeapYear4: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(4));
        test.done();
    },
    
    testIslamicIsLeapYear5: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(cal.isLeapYear(5));
        test.done();
    },
    
    testIslamicIsLeapYear6: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(6));
        test.done();
    },
    
    testIslamicIsLeapYear7: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(cal.isLeapYear(7));
        test.done();
    },
    
    testIslamicIsLeapYear8: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(8));
        test.done();
    },
    
    testIslamicIsLeapYear9: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(9));
        test.done();
    },
    
    testIslamicIsLeapYear10: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(cal.isLeapYear(10));
        test.done();
    },
    
    testIslamicIsLeapYear11: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(11));
        test.done();
    },
    
    testIslamicIsLeapYear12: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(12));
        test.done();
    },
    
    testIslamicIsLeapYear13: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(cal.isLeapYear(13));
        test.done();
    },
    testIslamicIsLeapYear14: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(14));
        test.done();
    },
    testIslamicIsLeapYear15: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(15));
        test.done();
    },
    testIslamicIsLeapYear16: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(cal.isLeapYear(16));
        test.done();
    },
    testIslamicIsLeapYear17: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(17));
        test.done();
    },
    testIslamicIsLeapYear18: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(cal.isLeapYear(18));
        test.done();
    },
    testIslamicIsLeapYear19: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(19));
        test.done();
    },
    testIslamicIsLeapYear20: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(20));
        test.done();
    },
    testIslamicIsLeapYear21: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(cal.isLeapYear(21));
        test.done();
    },
    testIslamicIsLeapYear22: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(22));
        test.done();
    },
    testIslamicIsLeapYear23: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(23));
        test.done();
    },
    testIslamicIsLeapYear24: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(cal.isLeapYear(24));
        test.done();
    },
    testIslamicIsLeapYear25: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(25));
        test.done();
    },
    testIslamicIsLeapYear26: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(cal.isLeapYear(26));
        test.done();
    },
    testIslamicIsLeapYear27: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(27));
        test.done();
    },
    testIslamicIsLeapYear28: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(28));
        test.done();
    },
    testIslamicIsLeapYear29: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(cal.isLeapYear(29));
        test.done();
    },
    testIslamicIsLeapYear30: function(test) {
        test.expect(1);
        var cal = new IslamicCal();
        
        test.ok(!cal.isLeapYear(30));
        test.done();
    }
};
