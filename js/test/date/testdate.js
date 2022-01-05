/*
 * testdate.js - test the date object
 *
 * Copyright © 2012-2015,2017,2021 JEDLSoft
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
    var GregorianDate = require("../../lib/GregorianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}
if (typeof(DateFactory) === "undefined") {
    var DateFactory = require("../../lib/DateFactory.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdate = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateConstructor: function(test) {
        test.expect(1);
        var gd = DateFactory();

        test.ok(gd !== null);
        test.done();
    },

    testDateConstructorFull: function(test) {
        test.expect(8);
        var gd = DateFactory({
            year: 2011,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123
        });

        test.ok(gd !== null);

        test.equal(gd.getYears(), 2011);
        test.equal(gd.getMonths(), 9);
        test.equal(gd.getDays(), 23);
        test.equal(gd.getHours(), 16);
        test.equal(gd.getMinutes(), 7);
        test.equal(gd.getSeconds(), 12);
        test.equal(gd.getMilliseconds(), 123);
        test.done();
    },

    testDateSetYears: function(test) {
        test.expect(2);
        var gd = DateFactory();

        test.ok(gd !== null);

        gd.setYears(123);

        test.equal(gd.getYears(), 123);
        test.done();
    },

    testDateSetMonths: function(test) {
        test.expect(2);
        var gd = DateFactory();

        test.ok(gd !== null);

        gd.setMonths(7);

        test.equal(gd.getMonths(), 7);
        test.done();
    },

    testDateSetDays: function(test) {
        test.expect(2);
        var gd = DateFactory();

        test.ok(gd !== null);

        gd.setDays(12);

        test.equal(gd.getDays(), 12);
        test.done();
    },

    testDateSetHours: function(test) {
        test.expect(2);
        var gd = DateFactory();

        test.ok(gd !== null);

        gd.setHours(12);

        test.equal(gd.getHours(), 12);
        test.done();
    },

    testDateSetMinutes: function(test) {
        test.expect(2);
        var gd = DateFactory();

        test.ok(gd !== null);

        gd.setMinutes(13);

        test.equal(gd.getMinutes(), 13);
        test.done();
    },

    testDateSetSeconds: function(test) {
        test.expect(2);
        var gd = DateFactory();

        test.ok(gd !== null);

        gd.setSeconds(23);

        test.equal(gd.getSeconds(), 23);
        test.done();
    },

    testDateSetMilliseconds: function(test) {
        test.expect(2);
        var gd = DateFactory();

        test.ok(gd !== null);

        gd.setMilliseconds(123);

        test.equal(gd.getMilliseconds(), 123);
        test.done();
    },


    testDateFactoryRightType: function(test) {
        test.expect(2);
        var date = DateFactory({
            type: "gregorian"
        });

        test.ok(date !== null);
        test.equal(date.getCalendar(), "gregorian");
        test.done();
    },

    testDateFactoryDefaultGregorian: function(test) {
        test.expect(2);
        var date = DateFactory();

        test.ok(date !== null);
        test.equal(date.getCalendar(), "gregorian");
        test.done();
    },

    testDateFactoryNonGregorian: function(test) {
        test.expect(2);
        var date = DateFactory({
            type: "hebrew"
        });

        test.ok(date !== null);
        test.equal(date.getCalendar(), "hebrew");
        test.done();
    },

    testDateFactoryNonGregorianWithCalendar: function(test) {
        test.expect(2);
        var date = DateFactory({
            calendar: "hebrew"
        });

        test.ok(date !== null);
        test.equal(date.getCalendar(), "hebrew");
        test.done();
    },

    testDateFactoryBogus: function(test) {
        test.expect(1);
        var date = DateFactory({
            type: "asdf"
        });

        test.ok(typeof(date) === "undefined");
        test.done();
    },

    testDateToIlibUndefined: function(test) {
        test.expect(1);
        var date = DateFactory._dateToIlib();

        test.ok(typeof(date) === "undefined");
        test.done();
    },

    testDateToIlibNull: function(test) {
        test.expect(1);
        var date = DateFactory._dateToIlib(null);

        test.ok(date === null);
        test.done();
    },

    testDateToIlibDateWithDate: function(test) {
        test.expect(4);
        var d = new Date();
        var date = DateFactory._dateToIlib(d);

        test.equal(typeof(date), "object");
        test.ok(typeof(typeof(date.cal)) !== "undefined");
        test.equal(date.cal.type, "gregorian");
        test.equal(date.getTime(), d.getTime());
        test.done();
    },

    testDateToIlibDateWithIlibDate: function(test) {
        test.expect(4);
        var d = new GregorianDate();
        var date = DateFactory._dateToIlib(d);

        test.equal(typeof(date), "object");
        test.ok(typeof(typeof(date.cal)) !== "undefined");
        test.equal(date.cal.type, "gregorian");
        test.equal(date.getTime(), d.getTime());
        test.done();
    },

    testDateToIlibDateWithNumber: function(test) {
        test.expect(4);
        var date = DateFactory._dateToIlib(1000);

        test.equal(typeof(date), "object");
        test.ok(typeof(typeof(date.cal)) !== "undefined");
        test.equal(date.cal.type, "gregorian");
        test.equal(date.getTime(), 1000);
        test.done();
    },

    testDateToIlibDateWithString: function(test) {
        test.expect(4);
        var date = DateFactory._dateToIlib("Wed Mar 05 2014 14:18:12 GMT-0800");

        test.equal(typeof(date), "object");
        test.ok(typeof(typeof(date.cal)) !== "undefined");
        test.equal(date.cal.type, "gregorian");
        test.equal(date.getTime(), 1394057892000);
        test.done();
    },

    testDateToIlibDateWithGenericObject: function(test) {
        test.expect(8);
        var d = {
            year: 1968,
            month: 8,
            day: 23,
            hour: 8,
            minute: 24
        };
        var date = DateFactory._dateToIlib(d);

        test.equal(typeof(date), "object");
        test.ok(typeof(typeof(date.cal)) !== "undefined");
        test.equal(date.cal.type, "gregorian");
        test.equal(date.year, 1968);
        test.equal(date.month, 8);
        test.equal(date.day, 23);
        test.equal(date.hour, 8);
        test.equal(date.minute, 24);
        test.done();
    },

    testDateToIlibDateWithBogusObject: function(test) {
        test.expect(9);
        var d = {
            foo: "bar",
            xxx: true
        };
        var now = new Date();
        var date = DateFactory._dateToIlib(d);

        test.equal(typeof(date), "object");
        test.ok(typeof(typeof(date.cal)) !== "undefined");
        test.equal(date.cal.type, "gregorian");
        test.equal(date.year, now.getFullYear());
        test.equal(date.month-1, now.getMonth());
        test.equal(date.day, now.getDate());
        test.equal(date.hour, now.getHours());
        test.equal(date.minute, now.getMinutes());
        test.ok(date.second - now.getSeconds() <= 1);
        test.done();
    },

    testDateToIlibDate: function(test) {
        test.expect(1);
        var datMyBday = new Date("Fri Aug 13 1982 13:37:35 GMT-0700");
        var ildMyBday = DateFactory({
            year: 1982,
            month: 8,
            day: 13,
            hour: 13,
            minute: 37,
            second: 35,
            timezone: "America/Los_Angeles"
        });
        var fmt = new DateFmt({length: "full"});
        test.equal(fmt.format(DateFactory._dateToIlib(datMyBday)), fmt.format(ildMyBday));
        test.done();
    },

    testDateToIlibString: function(test) {
        test.expect(1);
        var strMyBday = "Fri Aug 13 1982 13:37:35 GMT-0700";
        var ildMyBday = DateFactory({
            year: 1982,
            month: 8,
            day: 13,
            hour: 13,
            minute: 37,
            second: 35,
            timezone: "America/Los_Angeles"
        });
        var fmt = new DateFmt({length: "full"});
        test.equal(fmt.format(DateFactory._dateToIlib(strMyBday)), fmt.format(ildMyBday));
        test.done();
    },

    testDateToIlibInteger: function(test) {
        test.expect(1);
        var intMyBday = 1234657890000;
        var ildMyBday = DateFactory({unixtime: 1234657890000});
        var fmt = new DateFmt({length: "full"});
        test.equal(fmt.format(DateFactory._dateToIlib(intMyBday)), fmt.format(ildMyBday));
        test.done();
    },

    testDateToIlibIlibDate: function(test) {
        test.expect(1);
        var ildMyBday = DateFactory({unixtime: 1234657890000});
        test.deepEqual(DateFactory._dateToIlib(ildMyBday), ildMyBday);
        test.done();
    },

    testDateGetJSDateBeyond32Bits: function(test) {
        test.expect(4);
        var d = DateFactory({
            year: 2040,  // beyond the end of 32-bit unix time
            month: 1,
            day: 1
        });

        var jsd = d.getJSDate();

        test.ok(typeof(jsd) !== "undefined");
        test.equal(jsd.getFullYear(), 2040);
        test.equal(jsd.getMonth(), 0);
        test.equal(jsd.getDate(), 1);
        test.done();
    },
    testDstStartBoundary_Azores: function(test) {
        test.expect(1);
        var boundaryiLib = DateFactory({
            year: 2019,
            month: 3,
            day: 31,
            hour: 0,
            minute: 0,
            second: 0,
            timezone: "Atlantic/Azores"
        });
        // we can't set time zone to Date object, so compare with constant value
        // 1553994000000: new Date(2019, 2, 31, 0, 0, 0).getTime() with Azores local time
        test.equal(boundaryiLib.getTimeExtended(), 1553994000000);
        test.done();
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
    },
    testDstStartBoundary_Santiago: function(test) {
        test.expect(2);
        var boundaryiLib = DateFactory({year: 2020,month: 9,day: 6,hour: 0,minute: 0,second: 0,timezone: "America/Santiago"});
        // we can't set time zone to Date object, so compare with constant value
        // 1599364800000: new Date(2020, 8, 6, 0, 0, 0).getTime() with Santiago local time
        test.equal(boundaryiLib.getTimeExtended(), 1599364800000);
        var ildMyBday = DateFactory({unixtime: 1599364800000});
        var fmt = new DateFmt({length: "short", type:"datetime",locale:"es-CL", timezone:"America/Santiago"});
        test.equal(fmt.format(ildMyBday), "06-09-20, 01:00");

        test.done();
    },
    testDstEndBoundary_Santiago: function(test) {
        test.expect(2);
        var boundaryiLib = DateFactory({year: 2020, month: 4,day: 5, hour: 0,minute: 0,second: 0,timezone: "America/Santiago"});

        // we can't set time zone to Date object, so compare with constant value
        // 1591243200000: new Date(2020, 3, 5, 0, 0, 0).getTime() with Santiago local time
        test.equal(boundaryiLib.getTimeExtended(), 1586059200000);
        var ildMyBday = DateFactory({unixtime: 1586059200000});
        var fmt = new DateFmt({length: "short", type:"datetime",locale:"es-CL", timezone:"America/Santiago"});
        test.equal(fmt.format(ildMyBday), "05-04-20, 00:00");

        test.done();
    },
    testDstEndBoundary_Santiago2: function(test) {
        test.expect(3);
        var boundaryiLib = DateFactory({year: 2020, month: 4,day: 4, hour: 23,minute: 0,second: 0,timezone: "America/Santiago"});

        // we can't set time zone to Date object, so compare with constant value
        // 1591243200000: new Date(2020, 3, 4, 23, 0, 0).getTime() with Santiago local time

        test.equal(1586059200000 - boundaryiLib.getTimeExtended(), 7200000); // 2 hours
        test.equal(boundaryiLib.getTimeExtended(), 1586052000000);

        var ildMyBday = DateFactory({unixtime: 1586052000000});
        var fmt = new DateFmt({length: "short", type:"datetime", locale:"es-CL", timezone:"America/Santiago"});
        test.equal(fmt.format(ildMyBday), "04-04-20, 23:00");

        test.done();
    }
    /*,
    testDstStartBoundary_Windhoek: function(test) {
        test.expect(1);
        var boundaryiLib = DateFactory({
            year: 2016,
            month: 9,
            day: 4,
            hour: 2,
            minute: 0,
            second: 0,
            timezone: "Africa/Windhoek"
        });
        // we can't set time zone to Date object, so compare with constant value
        // 1472950800000: new Date(2016, 8, 4, 2, 0, 0).getTime() with Windhoek local time
        test.equal(boundaryiLib.getTimeExtended(), 1472950800000);
        test.done();
    },
    testDstEndBoundary_Windhoek: function(test) {
        test.expect(1);
        var boundaryiLib = DateFactory({
            year: 2016,
            month: 4,
            day: 3,
            hour: 2,
            minute: 0,
            second: 0,
            timezone: "Africa/Windhoek"
        });
        // we can't set time zone to Date object, so compare with constant value
        // 1459645200000: new Date(2016, 3, 3, 2, 0, 0).getTime() with Windhoek local time
        test.equal(boundaryiLib.getTimeExtended(), 1459645200000);
        test.done();
    }*/
};
