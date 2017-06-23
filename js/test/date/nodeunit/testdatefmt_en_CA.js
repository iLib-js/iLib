/*
 * testdatefmt_en_CA.js - test the date formatter object in Canadian English
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

if (typeof(JulianDate) === "undefined") {
    var JulianDate = require("../.././../lib/JulianDate.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../.././../lib/GregorianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../.././../lib/DateFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testdatefmt_en_CA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtenCAConstructorEmpty: function(test) {
        var fmt = new DateFmt();
        
        test.expect(1);
        test.ok(fmt !== null);
        test.done();
    },
    
    
    testDateFmtenCASimpleShort: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "short"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29");
        test.done();
    },
    
    testDateFmtenCASimpleMedium: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "medium"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Sep 29, 2011");
        test.done();
    },
    
    testDateFmtenCASimpleLong: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "long"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 29, 2011");
        test.done();
    },
    
    testDateFmtenCASimpleFull: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 29, 2011");
        test.done();
    },
    
    testDateFmtenCASimpleTimeShort: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "short", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    
    testDateFmtenCASimpleTimeMedium: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "medium", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    
    testDateFmtenCASimpleTimeLong: function(test) {
        var fmt = new DateFmt({locale: "en-CA", timelength: "long", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    
    testDateFmtenCASimpleTimeFull: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "full", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    
    testDateFmtenCADateTimeSimpleShort: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "short", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29, 1:45 PM");
        test.done();
    },
    
    testDateFmtenCADateTimeSimpleMedium: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "medium", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Sep 29, 2011, 1:45 PM");
        test.done();
    },
    
    testDateFmtenCADateTimeSimpleLong: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "long", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 29, 2011 at 1:45 PM");
        test.done();
    },
    
    testDateFmtenCADateTimeSimpleFull: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "full", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 29, 2011 at 1:45 PM");
        test.done();
    },
    
    
    testDateFmtenCATemplateCalendar: function(test) {
        var fmt = new DateFmt({locale: "en-CA", calendar: "julian", template: "yyyy-MM-dd"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new JulianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29");
        test.done();
    },
    
    testDateFmtenCATemplateCalendarIncompatibleDateType: function(test) {
        var fmt = new DateFmt({locale: "en-CA", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        // convert automatically to a Julian calendar date
        test.equal(fmt.format(date), "2011-09-16 13:45");
        test.done();
    },
    
    testDateFmtenCATemplateClock12SwitchHH: function(test) {
        var fmt = new DateFmt({locale: "en-CA", clock: "12", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    
    testDateFmtenCATemplateClock12Switchkk: function(test) {
        var fmt = new DateFmt({locale: "en-CA", clock: "12", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    
    testDateFmtenCATemplateClock24Switchhh: function(test) {
        var fmt = new DateFmt({locale: "en-CA", clock: "24", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtenCATemplateClock24SwitchKK: function(test) {
        var fmt = new DateFmt({locale: "en-CA", clock: "24", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtenCATemplateNoClockDoNotFollowLocaleDefault12hh: function(test) {
        var fmt = new DateFmt({locale: "en-CA", locale: "en-CA", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    
    testDateFmtenCATemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        var fmt = new DateFmt({locale: "en-CA", locale: "en-CA", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    
    testDateFmtenCATemplateNoClockDoNotFollowLocaleDefault24HH: function(test) {
        var fmt = new DateFmt({locale: "en-CA", locale: "en-CA", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtenCATemplateNoClockDoNotFollowLocaleDefault24kk: function(test) {
        var fmt = new DateFmt({locale: "en-CA", locale: "en-CA", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    
    testDateFmtenCATypeDate: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "date"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29");
        test.done();
    },
    
    testDateFmtenCATypeTime: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    
    testDateFmtenCATypeDateTime: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29, 1:45 PM");
        test.done();
    },
    
    
    testDateFmtenCAShortDateComponentsY: function(test) {
        var fmt = new DateFmt({locale: "en-CA", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011");
        test.done();
    },
    
    testDateFmtenCAShortDateComponentsM: function(test) {
        var fmt = new DateFmt({locale: "en-CA", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09");
        test.done();
    },
    
    testDateFmtenCAShortDateComponentsN: function(test) {
        var fmt = new DateFmt({locale: "en-CA", date: "n"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "S");
        test.done();
    },
    
    testDateFmtenCAShortDateComponentsD: function(test) {
        var fmt = new DateFmt({locale: "en-CA", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29");
        test.done();
    },
    
    testDateFmtenCAShortDateComponentsDM: function(test) {
        var fmt = new DateFmt({locale: "en-CA", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09-29");
        test.done();
    },
    
    testDateFmtenCAShortDateComponentsMY: function(test) {
        var fmt = new DateFmt({locale: "en-CA", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09");
        test.done();
    },
    
    testDateFmtenCAShortDateComponentsDMY: function(test) {
        var fmt = new DateFmt({locale: "en-CA", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29");
        test.done();
    },
    
    testDateFmtenCAShortDateComponentsWDM: function(test) {
        var fmt = new DateFmt({locale: "en-CA", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T, 09-29");
        test.done();
    },
    
    testDateFmtenCAShortDateComponentsWDMY: function(test) {
        var fmt = new DateFmt({locale: "en-CA", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T, 2011-09-29");
        test.done();
    },
    
    
    testDateFmtenCAFullDateComponentsY: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011");
        test.done();
    },
    
    testDateFmtenCAFullDateComponentsM: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September");
        test.done();
    },
    
    testDateFmtenCAFullDateComponentsD: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29");
        test.done();
    },
    
    testDateFmtenCAFullDateComponentsDM: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 29");
        test.done();
    },
    
    testDateFmtenCAFullDateComponentsMY: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September, 2011");
        test.done();
    },
    
    testDateFmtenCAFullDateComponentsDMY: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 29, 2011");
        test.done();
    },
    
    testDateFmtenCAFullDateComponentsWDM: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Thursday, September 29");
        test.done();
    },
    
    testDateFmtenCAFullDateComponentsWDMY: function(test) {
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Thursday, September 29, 2011");
        test.done();
    },
    
    
    testDateFmtenCAShortTimeComponentsS: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "37");
        test.done();
    },
    
    testDateFmtenCAShortTimeComponentsM: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45");
        test.done();
    },
    
    testDateFmtenCAShortTimeComponentsH: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1");
        test.done();
    },
    
    testDateFmtenCAShortTimeComponentsMS: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45:37");
        test.done();
    },
    
    testDateFmtenCAShortTimeComponentsHM: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45");
        test.done();
    },
    
    testDateFmtenCAShortTimeComponentsHMS: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37");
        test.done();
    },
    
    testDateFmtenCAShortTimeComponentsHMA: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    
    testDateFmtenCAShortTimeComponentsHMZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-CA", 
            type: "time", 
            time: "hmz", 
            timezone: "America/Toronto"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Toronto"
        });
        test.equal(fmt.format(date), "1:45 EDT");
        test.done();
    },
    
    testDateFmtenCAShortTimeComponentsHMAZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-CA", 
            type: "time", 
            time: "hmaz", 
            timezone: "America/Toronto"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Toronto"
        });
        test.equal(fmt.format(date), "1:45 PM EDT");
        test.done();
    },
    
    testDateFmtenCAShortTimeComponentsHMSA: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Toronto"
        });
        test.equal(fmt.format(date), "1:45:37 PM");
        test.done();
    },
    
    testDateFmtenCAShortTimeComponentsHMSZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-CA", 
            type: "time", 
            time: "hmsz", 
            timezone: "America/Toronto"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Toronto"
        });
        test.equal(fmt.format(date), "1:45:37 EDT");
        test.done();
    },
    
    testDateFmtenCAShortTimeComponentsHMSAZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-CA", 
            type: "time", 
            time: "hmsaz", 
            timezone: "America/Toronto"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Toronto"
        });
        test.equal(fmt.format(date), "1:45:37 PM EDT");
        test.done();
    },
    
    
    testDateFmtenCAFullTimeComponentsS: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Toronto"
        });
        test.equal(fmt.format(date), "37");
        test.done();
    },
    
    testDateFmtenCAFullTimeComponentsM: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45");
        test.done();
    },
    
    testDateFmtenCAFullTimeComponentsH: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1");
        test.done();
    },
    
    testDateFmtenCAFullTimeComponentsMS: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45:37");
        test.done();
    },
    
    testDateFmtenCAFullTimeComponentsHM: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45");
        test.done();
    },
    
    testDateFmtenCAFullTimeComponentsHMS: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37");
        test.done();
    },
    
    testDateFmtenCAFullTimeComponentsHMA: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    
    testDateFmtenCAFullTimeComponentsHMZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-CA", 
            type: "time", 
            length: "full", 
            time: "hmz", 
            timezone: "America/Toronto"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 EDT");
        test.done();
    },
    
    testDateFmtenCAFullTimeComponentsHMAZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-CA", 
            type: "time", 
            length: "full", 
            time: "hmaz", 
            timezone: "America/Toronto"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM EDT");
        test.done();
    },
    
    testDateFmtenCAFullTimeComponentsHMSA: function(test) {
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM");
        test.done();
    },
    
    testDateFmtenCAFullTimeComponentsHMSZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-CA", 
            type: "time", 
            length: "full", 
            time: "hmsz", 
            timezone: "America/Toronto"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 EDT");
        test.done();
    },
    
    testDateFmtenCAFullTimeComponentsHMSAZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-CA", 
            type: "time", 
            length: "full", 
            time: "hmsaz", 
            timezone: "America/Toronto"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM EDT");
        test.done();
    },
    
    testDateFmtenCAWithTimeZoneAndNoDST: function(test) {
        var fmt = new DateFmt({
            locale: "en-CA", 
            type: "time", 
            length: "full", 
            time: "hmsz", 
            timezone: "America/Toronto"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 EST");
        test.done();
    }
    
    
};