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
    var CalendarFactory = require("../../../lib/CalendarFactory.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testcalendar = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCalendarFactoryDefault: function(test) {
        test.expect(1);
        var cal = CalendarFactory();
        test.ok(typeof(cal) !== "undefined");
        test.done();
    },
    
    testCalendarFactoryDefaultRightType: function(test) {
        test.expect(2);
        var cal = CalendarFactory();
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "gregorian");
        test.done();
    },
    
    testCalendarFactorySpecific: function(test) {
        test.expect(2);
        var cal = CalendarFactory({type: "julian"});
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "julian");
        test.done();
    },
    
    testCalendarFactoryUnknown: function(test) {
        test.expect(1);
        var cal = CalendarFactory({type: "asdf"});
        test.ok(typeof(cal) === "undefined");
        test.done();
    },
    
    testCalendarFactoryDefaultForLocale: function(test) {
        test.expect(2);
        var cal = CalendarFactory({locale: "ar-AE"});
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "gregorian");
        test.done();
    },
    
    testCalendarFactoryDefaultForLocale_KH: function(test) {
        test.expect(2);
        var cal = CalendarFactory({locale: "km-KH"});
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "gregorian");
        test.done();
    },
    
    testCalendarFactoryDefaultForLocale_AZ: function(test) {
        test.expect(2);
        var cal = CalendarFactory({locale: "az-Latn-AZ"});
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "gregorian");
        test.done();
    },
    
    testCalendarFactoryDefaultForLocale_LK: function(test) {
        test.expect(2);
        var cal = CalendarFactory({locale: "si-LK"});
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "gregorian");
        test.done();
    },
    
    testCalendarFactoryDefaultForLocale_KE: function(test) {
        test.expect(2);
        var cal = CalendarFactory({locale: "sw-Latn-KE"});
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "gregorian");
        test.done();
    },
    
    testCalendarFactoryDefaultForLocaleOther: function(test) {
        test.expect(2);
        var cal = CalendarFactory({locale: "th-TH"});
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "thaisolar");
        test.done();
    },
    
    testCalendarFactoryOverrideLocale: function(test) {
        test.expect(2);
        var cal = CalendarFactory({locale: "ar-AE", type: "gregorian"});
        test.ok(typeof(cal) !== "undefined");
    
        test.equal(cal.getType(), "gregorian");
        test.done();
    },
    
    testGetCalendars: function(test) {
        test.expect(1);
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
    
        test.equalIgnoringOrder(CalendarFactory.getCalendars(), expected);
        test.done();
    }
    
};