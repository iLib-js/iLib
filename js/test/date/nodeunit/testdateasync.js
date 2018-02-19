/*
 * testdateasync.js - test the date object asynchronously
 *
 * Copyright © 2018, JEDLSoft
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

if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../../lib/GregorianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../../lib/DateFmt.js");
}
if (typeof(DateFactory) === "undefined") {
    var DateFactory = require("../../../lib/DateFactory.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testdateasync = {
    testDateConstructor: function(test) {
        test.expect(1);
        DateFactory({
            sync: false,
            onLoad: function(gd) {
                test.ok(gd !== null);
                test.done();
            }
        });
    },

    testDateConstructorFull: function(test) {
        test.expect(8);
        DateFactory({
            year: 2011,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            sync: false,
            onLoad: function(gd) {
                test.ok(gd !== null);
                
                test.equal(gd.getYears(), 2011);
                test.equal(gd.getMonths(), 9);
                test.equal(gd.getDays(), 23);
                test.equal(gd.getHours(), 16);
                test.equal(gd.getMinutes(), 7);
                test.equal(gd.getSeconds(), 12);
                test.equal(gd.getMilliseconds(), 123);
                test.done();
            }
        });
    },

    testDateFactoryRightType: function(test) {
        test.expect(2);
        DateFactory({
            type: "gregorian",
            sync: false,
            onLoad: function(gd) {
                test.ok(gd !== null);
                test.equal(gd.getCalendar(), "gregorian");
                test.done();
            }
        });
    },

    testDateFactoryNonGregorian: function(test) {
        test.expect(2);
        DateFactory({
            type: "hebrew",
            sync: false,
            onLoad: function(hd) {
                test.ok(hd !== null);
                test.equal(hd.getCalendar(), "hebrew");
                test.done();
            }
        });
    },

    testDateFactoryNonGregorianWithCalendar: function(test) {
        test.expect(2);
        DateFactory({
            calendar: "hebrew",
            sync: false,
            onLoad: function(hd) {
                test.ok(hd !== null);
                test.equal(hd.getCalendar(), "hebrew");
                test.done();
            }
        });
    },

    testDateFactoryBogus: function(test) {
        test.expect(1);
        DateFactory({
            type: "asdf",
            sync: false,
            onLoad: function(gd) {
                test.ok(typeof(gd) === "undefined");
                test.done();
            }
        });
    },

    testDateToIlibDate: function(test) {
        test.expect(1);
        var datMyBday = new Date("Fri Aug 13 1982 13:37:35 GMT-0700");
        DateFactory({
            year: 1982,
            month: 8,
            day: 13,
            hour: 13,
            minute: 37,
            second: 35,
            timezone: "America/Los_Angeles",
            sync: false,
            onLoad: function(ildMyBday) {
                new DateFmt({
                    length: "full",
                    sync: false,
                    onLoad: function(fmt) {
                        test.equal(fmt.format(DateFactory._dateToIlib(datMyBday)), fmt.format(ildMyBday));
                        test.done();
                    }
                });
            }
        });
    },

    testDstStartBoundary_Azores: function(test) {
        test.expect(1);
        DateFactory({
            year: 2019,
            month: 3,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            timezone: "Atlantic/Azores",
            sync: false,
            onLoad: function(boundaryiLib) {
                // we can't set time zone to Date object, so compare with constant value
                // 1553994000000: new Date(2019, 2, 31, 0, 0, 0).getTime() with Azores local time
                test.equal(boundaryiLib.getTimeExtended(), 1553994000000);
                test.done();
            }
        });
    },
    
    testDstEndBoundary_Azores: function(test) {
        test.expect(1);
        var boundaryiLib = DateFactory({
            year: 2019,
            month: 10,
            day: 27,
            hour: 1,
            minute: 0,
            second: 0,
            timezone: "Atlantic/Azores"
        });
        var boundaryEs = new Date(2019, 9, 27, 1, 0, 0);
        // we can't set time zone to Date object, so compare with constant value
        // 1572141600000: new Date(2019, 9, 27, 1, 0, 0).getTime() with Azores local time
        test.equal(boundaryiLib.getTimeExtended(), 1572141600000);
        test.done();
    }
};
