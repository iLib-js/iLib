/*
 * testcalendar.js - test the calendar routines
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

if (typeof(CalendarFactory) === "undefined") {
    var CalendarFactory = require("../.././../lib/CalendarFactory.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testcalendar = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCalendarFactoryDefault: function(test) {
        var cal = CalendarFactory();
        test.expect(1);
        test.ok(typeof(cal) !== "undefined");
        test.done();
    },
    
    testCalendarFactoryDefaultRightType: function(test) {
        var cal = CalendarFactory();
        test.expect(2);
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "gregorian");
        test.done();
    },
    
    testCalendarFactorySpecific: function(test) {
        var cal = CalendarFactory({type: "julian"});
        test.expect(2);
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "julian");
        test.done();
    },
    
    testCalendarFactoryUnknown: function(test) {
        var cal = CalendarFactory({type: "asdf"});
        test.expect(1);
        test.ok(typeof(cal) === "undefined");
        test.done();
    },
    
    testCalendarFactoryDefaultForLocale: function(test) {
        var cal = CalendarFactory({locale: "ar-AE"});
        test.expect(2);
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "gregorian");
        test.done();
    },
    
    testCalendarFactoryDefaultForLocale_KH: function(test) {
        var cal = CalendarFactory({locale: "km-KH"});
        test.expect(2);
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "gregorian");
        test.done();
    },
    
    testCalendarFactoryDefaultForLocale_AZ: function(test) {
        var cal = CalendarFactory({locale: "az-Latn-AZ"});
        test.expect(2);
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "gregorian");
        test.done();
    },
    
    testCalendarFactoryDefaultForLocale_LK: function(test) {
        var cal = CalendarFactory({locale: "si-LK"});
        test.expect(2);
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "gregorian");
        test.done();
    },
    
    testCalendarFactoryDefaultForLocale_KE: function(test) {
        var cal = CalendarFactory({locale: "sw-Latn-KE"});
        test.expect(2);
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "gregorian");
        test.done();
    },
    
    testCalendarFactoryDefaultForLocaleOther: function(test) {
        var cal = CalendarFactory({locale: "th-TH"});
        test.expect(2);
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "thaisolar");
        test.done();
    },
    
    testCalendarFactoryOverrideLocale: function(test) {
        var cal = CalendarFactory({locale: "ar-AE", type: "gregorian"});
        test.expect(2);
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "gregorian");
        test.done();
    },
    
    testGetCalendars: function(test) {
        var expected = [
            "julian",
            "gregorian",
            "islamic",
            "hebrew",
            "thaisolar",
            "persian-algo",
            "persian",
            "han",
            "ethiopic",
            "coptic"
        ];
    
        test.expect(1);
        test.equalIgnoringOrder(CalendarFactory.getCalendars(), expected);
        test.done();
    }
    
};