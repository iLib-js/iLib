/*
 * testjulianday.js - test the julian day object
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

if (typeof(JulianDay) === "undefined") {
    var JulianDay = require("../../lib/JulianDay.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testjulianday = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJulianDayConstructor: function(test) {
        test.expect(1);
        var jd = new JulianDay(1721791.25);  // jan 2, 2, 6:00pm
    
        test.ok(jd !== null);
        test.done();
    },
    
    /* julian date is 366 + epoch */
    testJulianDayGetDate: function(test) {
        test.expect(1);
        var jd = new JulianDay(1721791.25);  // jan 2, 2, 6:00pm
    
        test.equal(jd.getDate(), 1721791.25);
        test.done();
    },
    
    testJulianDayGetDays: function(test) {
        test.expect(1);
        var jd = new JulianDay(1721791.25);  // jan 2, 2, 6:00pm
    
        test.equal(jd.getDays(), 1721791);
        test.done();
    },
    
    testJulianDayGetDayFraction: function(test) {
        test.expect(1);
        var jd = new JulianDay(1721791.25);  // jan 2, 2, 6:00pm
    
        test.equal(jd.getDayFraction(), 0.25);
        test.done();
    },
    
    testJulianDayAddDate: function(test) {
        test.expect(2);
        var jd = new JulianDay(1.25);
        test.equal(jd.getDate(), 1.25);
        
        jd.addDate(83.2);
        
        test.equal(jd.getDate(), 84.45);
        test.done();
    },
    
    testJulianDaySetDays: function(test) {
        test.expect(3);
        var jd = new JulianDay(1721791.25);  // jan 2, 2, 6:00pm
        test.equal(jd.getDate(), 1721791.25);
        
        jd.setDays(2);
        
        test.equal(jd.getDays(), 2);
        test.equal(jd.getDate(), 2.25);
        test.done();
    },
    
    testJulianDaySetDaysIgnoreFraction: function(test) {
        test.expect(3);
        var jd = new JulianDay(1721791.25);  // jan 2, 2, 6:00pm
        test.equal(jd.getDate(), 1721791.25);
        
        jd.setDays(2.9);
        
        test.equal(jd.getDays(), 2);
        test.equal(jd.getDate(), 2.25);
        test.done();
    },
    
    testJulianDaySetDayFraction: function(test) {
        test.expect(3);
        var jd = new JulianDay(1721791.25);  // jan 2, 2, 6:00pm
        test.equal(jd.getDate(), 1721791.25);
        
        jd.setDayFraction(0.33);
        
        test.ok(jd.getDayFraction() - 0.33 < 0.0000000001);
        test.equal(jd.getDate(), 1721791.33);
        test.done();
    },
    
    testJulianDaySetDayFractionWithWholeNumber: function(test) {
        test.expect(3);
        var jd = new JulianDay(1721791.25);  // jan 2, 2, 6:00pm
        test.equal(jd.getDate(), 1721791.25);
        
        jd.setDayFraction(2.33);
        
        test.ok(jd.getDayFraction() - 0.33 < 0.0000000001);
        test.equal(jd.getDate(), 1721791.33);
        test.done();
    },
    
    testJulianDaySetDate: function(test) {
        test.expect(2);
        var jd = new JulianDay(1721791.25);
        test.equal(jd.getDate(), 1721791.25);
        
        jd.setDate(123.456);
        
        test.equal(jd.getDate(), 123.456);
        test.done();
    }
    
    
};
