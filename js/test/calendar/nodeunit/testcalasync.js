/*
 * testcalasync.js - test the calendar objects asynchronously
 * 
 * Copyright © 2015,2017-2018, JEDLSoft
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
    var ilib = require("../../../lib/ilib.js");
}

if (typeof(CopticDate) === "undefined") {
    var CopticDate = require("../.././../lib/CopticDate.js");
}

if (typeof(EthiopicDate) === "undefined") {
    var EthiopicDate = require("../.././../lib/EthiopicDate.js");
}

if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../.././../lib/GregorianDate.js");
}

if (typeof(HanDate) === "undefined") {
    var HanDate = require("../.././../lib/HanDate.js");
}

if (typeof(HebrewDate) === "undefined") {
    var HebrewDate = require("../.././../lib/HebrewDate.js");
}

if (typeof(IslamicDate) === "undefined") {
    var IslamicDate = require("../.././../lib/IslamicDate.js");
}

if (typeof(JulianDate) === "undefined") {
    var JulianDate = require("../.././../lib/JulianDate.js");
}

if (typeof(PersianAlgoDate) === "undefined") {
    var PersianAlgoDate = require("../.././../lib/PersianAlgoDate.js");
}

if (typeof(PersianDate) === "undefined") {
    var PersianDate = require("../.././../lib/PersianDate.js");
}

if (typeof(ThaiSolarDate) === "undefined") {
    var ThaiSolarDate = require("../.././../lib/ThaiSolarDate.js");
}

module.exports.testcalasync = {
    testCalendarFactoryAsyncDefault: function(test) {
        test.expect(1);
        CalendarFactory({
            sync: false,
            onLoad: function(cal) {
                test.ok(typeof(cal) !== "undefined");
                test.done();
            }
        });
    },
    
    testCalendarFactoryAsyncSpecific: function(test) {
        test.expect(2);
        var cal = CalendarFactory({
            type: "julian",
            sync: false,
            onLoad: function(cal) {
                test.ok(typeof(cal) !== "undefined");
                
                test.equal(cal.getType(), "julian");
                test.done();
            }
        });
    },
    
    testCalendarFactoryAsyncUnknown: function(test) {
        test.expect(1);
        CalendarFactory({
            type: "asdf",
            sync: false,
            onLoad: function(cal) {
                test.ok(typeof(cal) === "undefined");
                test.done();
            }
        });
    },
    
    testCalendarFactoryAsyncDefaultForLocale: function(test) {
        test.expect(2);
        CalendarFactory({
            locale: "fa-IR",
            sync: false,
            onLoad: function(cal) {
                test.ok(typeof(cal) !== "undefined");
                
                test.equal(cal.getType(), "persian");
                test.done();
            }
        });
    },
        
    testCalendarFactoryAsyncDefaultForLocaleOther: function(test) {
        test.expect(2);
        var cal = CalendarFactory({
            locale: "th-TH",
            sync: false,
            onLoad: function(cal) {
                test.ok(typeof(cal) !== "undefined");
                
                test.equal(cal.getType(), "thaisolar");
                test.done();
            }
        });
    },
    
    testCalendarFactoryAsyncOverrideLocale: function(test) {
        test.expect(2);
        var cal = CalendarFactory({
            locale: "fa-IR", 
            type: "gregorian",
            sync: false,
            onLoad: function(cal) {
                test.ok(typeof(cal) !== "undefined");
                
                test.equal(cal.getType(), "gregorian");
                test.done();
            }
        });
    },
    
    testCopticDateAsyncConstructorFull: function(test) {
        test.expect(8);
        new CopticDate({
            year: 1735,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC",
            sync: false,
            onLoad: function(cd) {
                test.ok(cd !== null);
                
                test.equal(cd.getYears(), 1735);
                test.equal(cd.getMonths(), 9);
                test.equal(cd.getDays(), 23);
                test.equal(cd.getHours(), 16);
                test.equal(cd.getMinutes(), 7);
                test.equal(cd.getSeconds(), 12);
                test.equal(cd.getMilliseconds(), 123);
                test.done();
            }
        });    
    },
    
    testEthiopicDateAsyncConstructorFull: function(test) {
        test.expect(8);
        new EthiopicDate({
            year: 2011,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC",
            sync: false,
            onLoad: function(ed) {
                test.ok(ed !== null);
                
                test.equal(ed.getYears(), 2011);
                test.equal(ed.getMonths(), 9);
                test.equal(ed.getDays(), 23);
                test.equal(ed.getHours(), 16);
                test.equal(ed.getMinutes(), 7);
                test.equal(ed.getSeconds(), 12);
                test.equal(ed.getMilliseconds(), 123);
                test.done();
            }
        });    
    },

    testGregDateAsyncConstructorFull: function(test) {
        test.expect(8);
        new GregorianDate({
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
    
    testHanDateAsyncConstructorFull: function(test) {
        test.expect(10);
        new HanDate({
            year: 4711,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC",
            sync: false,
            onLoad: function(hd) {
                test.ok(hd !== null);
                
                test.equal(hd.getYears(), 4711);
                test.equal(hd.getMonths(), 9);
                test.equal(hd.getDays(), 23);
                test.equal(hd.getHours(), 16);
                test.equal(hd.getMinutes(), 7);
                test.equal(hd.getSeconds(), 12);
                test.equal(hd.getMilliseconds(), 123);
                test.equal(hd.getCycles(), 78);
                test.equal(hd.getCycleYears(), 31);
                test.done();
            }
        });
        
    },
    
    testHebrewDateAsyncConstructorFull: function(test) {
        test.expect(8);
        new HebrewDate({
            year: 2011,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC",
            sync: false,
            onLoad: function(hd) {
                test.ok(hd !== null);
                
                test.equal(hd.getYears(), 2011);
                test.equal(hd.getMonths(), 9);
                test.equal(hd.getDays(), 23);
                test.equal(hd.getHours(), 16);
                test.equal(hd.getMinutes(), 7);
                test.equal(hd.getSeconds(), 12);
                test.equal(hd.getMilliseconds(), 123);
                test.done();
            }
        });
        
    },
    
    testIslamicDateAsyncConstructorFull: function(test) {
        test.expect(8);
        new IslamicDate({
            year: 2011,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC",
            sync: false,
            onLoad: function(id) {
                test.ok(id !== null);
                
                test.equal(id.getYears(), 2011);
                test.equal(id.getMonths(), 9);
                test.equal(id.getDays(), 23);
                test.equal(id.getHours(), 16);
                test.equal(id.getMinutes(), 7);
                test.equal(id.getSeconds(), 12);
                test.equal(id.getMilliseconds(), 123);
                test.done();
            }
        });
        
    },
    
    testJulDateAsyncConstructorFull: function(test) {
        test.expect(8);
        new JulianDate({
            year: 2011,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC",
            sync: false,
            onLoad: function(jul) {
                test.ok(jul !== null);
                
                test.equal(jul.getYears(), 2011);
                test.equal(jul.getMonths(), 9);
                test.equal(jul.getDays(), 23);
                test.equal(jul.getHours(), 16);
                test.equal(jul.getMinutes(), 7);
                test.equal(jul.getSeconds(), 12);
                test.equal(jul.getMilliseconds(), 123);
                test.done();
            }
        });
        
    },
    
    testPersAlgoDateAsyncConstructorFull: function(test) {
        test.expect(8);
        new PersianAlgoDate({
            year: 1392,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC",
            sync: false,
            onLoad: function(pd) {
                test.ok(pd !== null);
                
                test.equal(pd.getYears(), 1392);
                test.equal(pd.getMonths(), 9);
                test.equal(pd.getDays(), 23);
                test.equal(pd.getHours(), 16);
                test.equal(pd.getMinutes(), 7);
                test.equal(pd.getSeconds(), 12);
                test.equal(pd.getMilliseconds(), 123);
                test.done();
            }
        });
        
    },
    
    testPersDateAstroAsyncConstructorFull: function(test) {
        test.expect(8);
        new PersianDate({
            year: 1392,
            month: 9,
            day: 23,
            hour: 16,
            minute: 7,
            second: 12,
            millisecond: 123,
            timezone: "Etc/UTC",
            sync: false,
            onLoad: function(pd) {
                test.ok(pd !== null);
                
                test.equal(pd.getYears(), 1392);
                test.equal(pd.getMonths(), 9);
                test.equal(pd.getDays(), 23);
                test.equal(pd.getHours(), 16);
                test.equal(pd.getMinutes(), 7);
                test.equal(pd.getSeconds(), 12);
                test.equal(pd.getMilliseconds(), 123);
                test.done();
            }
        });
        
    },
    
    testThaiSolarDateAsyncConstructorFull: function(test) {
        test.expect(8);
        new ThaiSolarDate({
            year: 2553, 
            month: 9, 
            day: 23, 
            hour: 16, 
            minute: 7, 
            second: 12, 
            millisecond: 123,
            timezone: "Etc/UTC",
            sync: false,
            onLoad: function(td) {
                test.ok(td !== null);
                
                test.equal(td.getYears(), 2553);
                test.equal(td.getMonths(), 9);
                test.equal(td.getDays(), 23);
                test.equal(td.getHours(), 16);
                test.equal(td.getMinutes(), 7);
                test.equal(td.getSeconds(), 12);
                test.equal(td.getMilliseconds(), 123);
                test.done();
            }
        });
    }
};
