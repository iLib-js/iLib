/*
 * testdatefmtrange.js - test the date range formatter object
 * 
 * Copyright © 2012-2017, JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../.././../lib/ilib-node.js");
}
if (typeof(LocaleInfo) === "undefined") {
    var LocaleInfo = require("../.././../lib/LocaleInfo.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../.././../lib/GregorianDate.js");
}
if (typeof(DateRngFmt) === "undefined") {
    var DateRngFmt = require("../.././../lib/DateRngFmt.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../.././../lib/DateFmt.js");
}

function mockLoader(paths, sync, params, callback) {
    var data = [];
    
    if (paths[0].indexOf("localeinfo") !== -1) {
        data.push(ilib.data.localeinfo); // for the generic, shared stuff
        data.push(ilib.data.localeinfo_en);
        data.push(ilib.data.localeinfo_US);
        data.push(ilib.data.localeinfo_en_US);
    } else {
        data.push(ilib.data.dateformats); // for the generic, shared stuff
        data.push(ilib.data.dateformats_en);
        data.push(ilib.data.dateformats_US);
        data.push(ilib.data.dateformats_en_US);
    }

    if (typeof(callback) !== 'undefined') {
        callback.call(this, data);    
    }
    return data;
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testdatefmtrange = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateRngFmtConstructorEmpty: function(test) {
        test.expect(1);
        var fmt = new DateRngFmt();
        
        test.ok(fmt !== null);
        test.done();
    },
    
    testDateRngFmtConstructorDefaultLocale: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt();
        
        test.ok(fmt !== null);
        
        test.equal(fmt.getLocale().toString(), "en-US");
        test.done();
    },
    
    testDateRngFmtGetCalendarDefault: function(test) {
        test.expect(3);
        var fmt = new DateRngFmt();
        
        test.ok(fmt !== null);
        var cal = fmt.getCalendar();
        test.ok(cal !== null);
        
        test.equal(cal, "gregorian");
        test.done();
    },
    
    testDateRngFmtGetCalendarExplicit: function(test) {
        test.expect(3);
        var fmt = new DateRngFmt({calendar: "julian"});
        
        test.ok(fmt !== null);
        var cal = fmt.getCalendar();
        test.ok(cal !== null);
        
        test.equal(cal, "julian");
        test.done();
    },
    
    testDateRngFmtGetCalendarExplicitDefault: function(test) {
        test.expect(3);
        var fmt = new DateRngFmt({calendar: "gregorian"});
        
        test.ok(fmt !== null);
        var cal = fmt.getCalendar();
        test.ok(cal !== null);
        
        test.equal(cal, "gregorian");
        test.done();
    },
    
    testDateRngFmtGetCalendarNotInThisLocale: function(test) {
        try {
            var fmt = new DateRngFmt({calendar: "arabic", locale: 'en-US'});
            test.fail();
        } catch (str) {
            test.equal(typeof(str), "string");
            test.equal(str, "No formats available for calendar arabic in locale en-US");
        }
        test.done();
    },
    
    testDateRngFmtGetLength: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "full"});
        test.ok(fmt !== null);
        
        test.equal(fmt.getLength(), "full");
        test.done();
    },
    
    testDateRngFmtGetLengthDefault: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt();
        test.ok(fmt !== null);
        
        test.equal(fmt.getLength(), "short");
        test.done();
    },
    
    testDateRngFmtGetLengthBogus: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({length: "asdf"});
        test.ok(fmt !== null);
        
        test.equal(fmt.getLength(), "short");
        test.done();
    },
    
    testDateRngFmtGetLocale: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "de-DE"});
        test.ok(fmt !== null);
        
        test.equal(fmt.getLocale().toString(), "de-DE");
        test.done();
    },
    
    testDateRngFmtGetLocaleDefault: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt();
        test.ok(fmt !== null);
        
        test.equal(fmt.getLocale().toString(), "en-US");
        test.done();
    },
    
    testDateRngFmtGetLocaleBogus: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "zyy-XX"});
        test.ok(fmt !== null);
        
        test.equal(fmt.getLocale().toString(), "zyy-XX");
        test.done();
    },
    
    testDateRngFmtGetClockDefaultUS: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "en-US"});
        test.ok(fmt !== null);
        
        // use the default
        test.equal(fmt.getClock(), "12");
        test.done();
    },
    
    testDateRngFmtGetClockDefaultDE: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "de-DE"});
        test.ok(fmt !== null);
        
        // use the default
        test.equal(fmt.getClock(), "24");
        test.done();
    },
    
    testDateRngFmtGetClock: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "en-US", clock: "24"});
        test.ok(fmt !== null);
        
        // use the default
        test.equal(fmt.getClock(), "24");
        test.done();
    },
    
    testDateRngFmtGetClockBogus: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "en-US", clock: "asdf"});
        test.ok(fmt !== null);
        
        // use the default
        test.equal(fmt.getClock(), "12");
        test.done();
    },
    
    testDateRngFmtGetTimeZoneDefault: function(test) {
        test.expect(2);
        ilib.tz = undefined;    // just in case
        if (ilib._getPlatform() === "nodejs") {
            process.env.TZ = ""; // just in case
        }
        
        var fmt = new DateRngFmt();
        test.ok(fmt !== null);
        
        var tz = fmt.getTimeZone();
        test.equal(tz.getId(), "local");
        test.done();
    },
    
    testDateRngFmtGetTimeZone: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({timezone: "Europe/Paris"});
        test.ok(fmt !== null);
        
        var tz = fmt.getTimeZone();
        test.equal(tz.getId(), "Europe/Paris");
        test.done();
    },
    
    testDateRngFmtGetDefaultLocale: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yy-YY"});
        test.ok(fmt !== null);
        
        test.equal(fmt.getLocale().toString(), "yy-YY");
        test.done();
    },
    
    testDateRngFmtGetDefaultFormat: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "yy-YY"});
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2013,
            month: 2,
            day: 20,
            hour: 12,
            minute: 20,
            second: 0
        });
        
        var end = new GregorianDate({
            year: 2013,
            month: 2,
            day: 20,
            hour: 16,
            minute: 35,
            second: 0
        });
        test.equal(fmt.format(start, end), "20/2/13 12:20 – 16:35");
        test.done();
    },
    
    testDateRngFmtDynamicLoadSync: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        var oldLoader = ilib._load;
        ilib.setLoaderCallback(mockLoader);
        
        var fmt = new DateRngFmt({
            locale: "yy-YY"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2013,
            month: 2,
            day: 20,
            hour: 12,
            minute: 20,
            second: 0
        });
        
        var end = new GregorianDate({
            year: 2013,
            month: 2,
            day: 20,
            hour: 16,
            minute: 35,
            second: 0
        });
        
        ilib.setLoaderCallback(oldLoader);
        test.equal(fmt.format(start, end), "2/20/13, 12:20 PM – 4:35 PM");
        test.done();
    },
    
    testDateRngFmtDynamicLoadSyncCached: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        var oldLoader = ilib._load;
        ilib.setLoaderCallback(mockLoader);
        
        var fmt = new DateRngFmt({
            locale: "yy-YY"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2013,
            month: 2,
            day: 20,
            hour: 12,
            minute: 20,
            second: 0
        });
        
        var end = new GregorianDate({
            year: 2013,
            month: 2,
            day: 20,
            hour: 16,
            minute: 35,
            second: 0
        });
        
        ilib.setLoaderCallback(oldLoader);
        test.equal(fmt.format(start, end), "2/20/13, 12:20 PM – 4:35 PM");
        test.done();
    },
    
    testDateRngFmtDynamicLoadAsync: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        var oldLoader = ilib._load;
        ilib.setLoaderCallback(mockLoader);
    
        var start = new GregorianDate({
            year: 2013,
            month: 2,
            day: 20,
            hour: 12,
            minute: 20,
            second: 0
        });
        
        var end = new GregorianDate({
            year: 2013,
            month: 2,
            day: 20,
            hour: 16,
            minute: 35,
            second: 0
        });
        
        new DateRngFmt({
            locale: "yy-YY",
            sync: false,
            onLoad: function (fmt) {
                ilib.setLoaderCallback(oldLoader);
        test.expect(2);
                test.ok(fmt !== null);
                test.equal(fmt.format(start, end), "2/20/13, 12:20 PM – 4:35 PM");
                test.done();
            }
        });
    },
    
    testDateRngFmtDynamicLoadAsyncCached: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        var oldLoader = ilib._load;
        ilib.setLoaderCallback(mockLoader);
    
        var start = new GregorianDate({
            year: 2013,
            month: 2,
            day: 20,
            hour: 12,
            minute: 20,
            second: 0
        });
        
        var end = new GregorianDate({
            year: 2013,
            month: 2,
            day: 20,
            hour: 16,
            minute: 35,
            second: 0
        });
        
        new DateRngFmt({
            locale: "yy-YY",
            sync: false,
            onLoad: function (fmt) {
                ilib.setLoaderCallback(oldLoader);
        test.expect(2);
                test.ok(fmt !== null);
                test.equal(fmt.format(start, end), "2/20/13, 12:20 PM – 4:35 PM");
                test.done();
            }
        });
    },
    
    
    //Miscellaneous UnitTest
    
    testDateRngFmtesPAMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "es-PA", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 6,
            day: 28,
            hour: 14,
            minute: 5,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "06/20 – 28/2011");
        test.done();
    },
    
    testDateRngFmtesPANextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "es-PA", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 11,
            day: 28,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "06/20/2011 – 11/28/2011");
        test.done();
    },
    
    testDateRngFmtesPRMultiDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "es-PR", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 6,
            day: 28,
            hour: 14,
            minute: 5,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "06/20 – 28/2011");
        test.done();
    },
    
    testDateRngFmtesPRNextMonthMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "es-PR", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 11,
            day: 28,
            hour: 14,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "06/20/2011 – 11/28/2011");
        test.done();
    },
    
    testDateRngFmtptGQNextDayFull: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pt-GQ", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 6,
            day: 22,
            hour: 15,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20/06/2011, 13:45 – 22/06/2011, 15:30");
        test.done();
    },
    
    testDateRngFmtptGQNextDayLong: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pt-GQ", length: "long"});
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 6,
            day: 22,
            hour: 15,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20 de junho de 2011 às 13:45 – 22 de junho de 2011 às 15:30");
        test.done();
    },
    
    testDateRngFmtptGQNextDayMedium: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pt-GQ", length: "medium"});
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 6,
            day: 22,
            hour: 15,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20/06/2011, 13:45 – 22/06/2011, 15:30");
        test.done();
    },
    
    testDateRngFmtptGQNextDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "pt-GQ", length: "short"});
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 6,
            day: 22,
            hour: 15,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "20/06/11, 13:45 – 22/06/11, 15:30");
        test.done();
    },
    
    
    testDateRngFmtenCAinDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "en-CA", length: "short"});
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 16,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "2011-06-20, 1:45 PM – 4:30 PM");
        test.done();
    },
    
    testDateRngFmtenCAMultitDayShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "en-CA", length: "short"});
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 6,
            day: 26,
            hour: 16,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "2011-06-20 – 26");
        test.done();
    },
    
    testDateRngFmtenCANextMonthShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "en-CA", length: "short"});
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2011,
            month: 9,
            day: 26,
            hour: 16,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "2011-06-20 – 2011-09-26");
        test.done();
    },
    
    testDateRngFmtenCANextYearShort: function(test) {
        test.expect(2);
        var fmt = new DateRngFmt({locale: "en-CA", length: "short"});
        test.ok(fmt !== null);
        
        var start = new GregorianDate({
            year: 2011,
            month: 6,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var end = new GregorianDate({
            year: 2012,
            month: 5,
            day: 26,
            hour: 16,
            minute: 30,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(start, end), "2011-06-20 – 2012-05-26");
        test.done();
    },
    
    testDateRngFmtAcceptJSIntrisicDates: function(test) {
        test.expect(1);
        var fmt = new DateRngFmt({locale: "en-US", length: "short"});
        test.ok(fmt !== null);
        
        var start = new Date(2011, 7, 20, 13, 45, 0);
        var end = new Date(2012, 6, 26, 16, 30, 0);
        test.equal(fmt.format(start, end), "2011-06-20 – 2012-05-26");
        test.done();
    },

    testDateRngFmtAcceptUnixTimes: function(test) {
        test.expect(1);
        var fmt = new DateRngFmt({locale: "en-US", length: "short"});
        test.ok(fmt !== null);
        
        var start = 1313873100000;
        var end = 1343345400000;
        test.equal(fmt.format(start, end), "2011-06-20 – 2012-05-26");
        test.done();
    }

};