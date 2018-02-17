/*
 * testdatefmtasync.js - test the date formatter object asynchronously
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}
if (typeof(ThaiSolarDate) === "undefined") {
    var ThaiSolarDate = require("../../../lib/ThaiSolarDate.js");
}
if (typeof(PersianDate) === "undefined") {
    var PersianDate = require("../../../lib/PersianDate.js");
}
if (typeof(IslamicDate) === "undefined") {
    var IslamicDate = require("../../../lib/IslamicDate.js");
}
if (typeof(HebrewDate) === "undefined") {
    var HebrewDate = require("../../../lib/HebrewDate.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../../lib/GregorianDate.js");
}
if (typeof(JulianDate) === "undefined") {
    var JulianDate = require("../../../lib/JulianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../../lib/DateFmt.js");
}
if (typeof(DateFactory) === "undefined") {
    var DateFactory = require("../../../lib/DateFactory.js");
}

function mockLoaderDF(paths, sync, params, callback) {
    var data = [];
    
    setTimeout(function() {
        if (paths[0].indexOf("localeinfo") !== -1) {
            data.push(ilib.data.localeinfo); // for the generic, shared stuff
            data.push(ilib.data.localeinfo_de);
        } else {
            data.push(ilib.data.dateformats); // for the generic, shared stuff
            data.push(ilib.data.dateformats_de);
        }
        
        callback.call(this, data);  
    }, 10);
}

var oldLoader = ilib._load;

module.exports.testdatefmtasync = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    tearDown: function(callback) {
        ilib._load = oldLoader;
        callback();
    },

    testDateFmtConstructorEmpty: function(test) {
        test.expect(1);
        new DateFmt({
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                test.done();
            }
        });
    },
    
    testDateFmtGetCalendarExplicit: function(test) {
        test.expect(3);
        new DateFmt({
            calendar: "julian",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                var cal = fmt.getCalendar();
                test.ok(cal !== null);
                
                test.equal(cal, "julian");
                test.done();
            }
        });
    },
    
    testDateFmtGetCalendarNotInThisLocale: function(test) {
        try {
            new DateFmt({
                calendar: "arabic", 
                locale: 'en-US',
                sync: false,
                onLoad: function(fmt) {
                    test.fail();
                    test.done();
                }
            });
        } catch (str) {
            test.equal(typeof(str), "string");
            test.equal(str, "No formats available for calendar arabic in locale en-US");
            test.done();
        }
    },
    
    testDateFmtGetTimeZoneDefault: function(test) {
        test.expect(2);
        ilib.tz = undefined;    // just in case
        if (ilib._getPlatform() === "nodejs") {
            process.env.TZ = "";
        }

        new DateFmt({
            sync: false,
            onLoad: function(fmt) {
                test.fail();
                test.ok(fmt !== null);
                
                test.equal(fmt.getTimeZone().getId(), "local");
                test.done();
            }
        });
    },
    
    testDateFmtGetTimeZone: function(test) {
        test.expect(2);
        new DateFmt({
            timezone: "Europe/Paris",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                
                test.equal(fmt.getTimeZone().getId(), "Europe/Paris");
                test.done();
            }
        });
    },
    
    testDateFmtUseTemplateNonEmptyCalendar: function(test) {
        test.expect(2);
        new DateFmt({
            calendar: 'julian', 
            template: "EEE 'the' DD 'of' MM, yyyy G",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                
                test.equal(fmt.getCalendar(), "julian");
                test.done();
            }
        });
    },
    
    testDateFmtUseTemplateNonEmptyLocale: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: 'de-DE', 
            template: "EEE 'the' DD 'of' MM, yyyy G",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                
                test.equal(fmt.getLocale().toString(), "de-DE");
                test.done();
            }
        });
    },
    
    testDateFmtFormatJSDate1: function(test) {
        test.expect(2);
        new DateFmt({
            type: "time",
            length: "short",
            timezone: "America/Los_Angeles",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                
                // test formatting a javascript date. It should be converted to 
                // an ilib date object automatically and then formatted
                var datMyBday = new Date("Fri Aug 13 1982 13:37:35 GMT-0700");
                test.equal(fmt.format(datMyBday), "1:37 PM");
                test.done();
            }
        });
    },
    
    testDateFmtFormatJSDateRightTimeZone1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            type: "date",
            length: "full",
            date: "w",
            timezone: "America/Los_Angeles",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                
                // test formatting a javascript date. It should be converted to 
                // an ilib date object automatically and then formatted
                var datMyBday = new Date("Wed May 14 2014 23:37:35 GMT-0700");
                test.equal(fmt.format(datMyBday), "Wednesday");
                test.done();
            }
        });
    },
    
    testDateFmtGetMonthsOfYearThai: function(test) {
        test.expect(2);
        // uses ThaiSolar calendar
        var fmt = new DateFmt({
            locale: "th-TH",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                
                var arrMonths = fmt.getMonthsOfYear({length: "long"});
                
                var expected = [undefined, "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
                test.deepEqual(arrMonths, expected);
                test.done();
            }
        });
    },
    
    testDateFmtFormatRelativeWithinMinuteAfter: function(test) {
        test.expect(1);
        new DateFmt({
            length: "full",
            sync: false,
            onLoad: function(fmt) {
                new GregorianDate({
                    year: 2011,
                    month: 11,
                    day: 20,
                    hour: 13,
                    minute: 45,
                    second: 0,
                    millisecond: 0,
                    sync: false,
                    onLoad: function(reference) {
                        new GregorianDate({
                            year: 2011,
                            month: 11,
                            day: 20,
                            hour: 13,
                            minute: 45,
                            second: 30,
                            millisecond: 0,
                            sync: false,
                            onLoad: function(date) {
                                test.equal(fmt.formatRelative(reference, date), "in 30 seconds");
                                test.done();
                            }
                        });
                    }
                });
            }
        });
    },
    
    testDateFmtConvertToGMT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            length: "short",
            type: "datetime",
            timezone: "Europe/London",
            locale: "en-GB",
            time: "hmaz",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                
                new GregorianDate({
                    year: 2011,
                    month: 9,
                    day: 20,
                    hour: 13,
                    minute: 45,
                    second: 0,
                    millisecond: 0,
                    timezone: "America/Los_Angeles",
                    locale: "en-US",
                    sync: false,
                    onLoad: function(date) {
                        test.equal(fmt.format(date), "20/09/2011, 21:45 GMT/BST");
                        test.done();
                    }
                });
            }
        });
    },
    
    testDateFmtConvertToOtherTimeZone: function(test) {
        test.expect(2);
        new DateFmt({
            length: "short",
            type: "datetime",
            timezone: "Australia/Sydney",
            locale: "en-AU",
            time: "hmaz",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                
                new GregorianDate({
                    year: 2011,
                    month: 9,
                    day: 20,
                    hour: 13,
                    minute: 45,
                    second: 0,
                    millisecond: 0,
                    timezone: "America/Los_Angeles",
                    locale: "en-US",
                    sync: false,
                    onLoad: function(date) {
                        test.equal(fmt.format(date), "21/9/11, 6:45 am AEST");
                        test.done();
                    }
                });
                
            }
        });
    },
    
    testDateFmtLoadLocaleDataAsynch: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoaderDF);
        
        new DateFmt({
            locale: "zz-ZZ",
            sync: false,
            onLoad: function (fmt) {
                ilib.setLoaderCallback(oldLoader);
                test.expect(4);
                test.ok(fmt !== null);
                
                test.equal(fmt.getLocale().toString(), "zz-ZZ");
                test.equal(fmt.getCalendar(), "gregorian");
                test.equal(fmt.getTemplate(), "dd.MM.yy");
                test.done();
            }
        });
    },
    
    testDateFmtLoadLocaleDataAsynchCached: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoaderDF);
        
        test.expect(4);
        new DateFmt({
            locale: "zz-ZZ",
            sync: false,
            onLoad: function (fmt) {
                ilib.setLoaderCallback(oldLoader);
                test.ok(fmt !== null);
                
                test.equal(fmt.getLocale().toString(), "zz-ZZ");
                test.equal(fmt.getCalendar(), "gregorian");
                test.equal(fmt.getTemplate(), "dd.MM.yy");
                test.done();
            }
        });
    }
};