/*
 * testdatefmt_fr_FR.js - test the date formatter object in standard French
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

module.exports.testdatefmt_fr_CA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtfrCAConstructorEmpty: function(test) {
        var fmt = new DateFmt({locale: "fr-CA"});
        
        test.expect(1);
        test.ok(fmt !== null);
        test.done();
    },
    
    testDateFmtfrCASimpleShort: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "short"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11-09-29");
        test.done();
    },
    
    testDateFmtfrCASimpleMedium: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "medium"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sept. 2011");
        test.done();
    },
    
    testDateFmtfrCASimpleLong: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "long"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011");
        test.done();
    },
    
    testDateFmtfrCASimpleFull: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011");
        test.done();
    },
    
    testDateFmtfrCASimpleTimeShort: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "short", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    
    testDateFmtfrCASimpleTimeMedium: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "medium", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    
    testDateFmtfrCASimpleTimeLong: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", timelength: "long", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    
    testDateFmtfrCASimpleTimeFull: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    
    testDateFmtfrCADateTimeSimpleShort: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "short", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11-09-29 13 h 45");
        test.done();
    },
    
    testDateFmtfrCADateTimeSimpleMedium: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "medium", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sept. 2011 13 h 45");
        test.done();
    },
    
    testDateFmtfrCADateTimeSimpleLong: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "long", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011 à 13 h 45");
        test.done();
    },
    
    testDateFmtfrCADateTimeSimpleFull: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011 à 13 h 45");
        test.done();
    },
    
    
    testDateFmtfrCATemplateCalendar: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", calendar: "julian", template: "yyyy-MM-dd"});
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
    
    testDateFmtfrCATemplateCalendarIncompatibleDateType: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCATemplateClock12SwitchHH: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", clock: "12", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCATemplateClock12Switchkk: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", clock: "12", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCATemplateClock24Switchhh: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", clock: "24", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCATemplateClock24SwitchKK: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", clock: "24", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCATemplateNoClockDoNotFollowLocaleDefault12hh: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCATemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCATemplateNoClockDoNotFollowLocaleDefault24HH: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCATemplateNoClockDoNotFollowLocaleDefault24kk: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    
    testDateFmtfrCATypeDate: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "date"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11-09-29");
        test.done();
    },
    
    testDateFmtfrCATypeTime: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    
    testDateFmtfrCATypeDateTime: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11-09-29 13 h 45");
        test.done();
    },
    
    
    testDateFmtfrCAShortDateComponentsY: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11");
        test.done();
    },
    
    testDateFmtfrCAShortDateComponentsM: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCAShortDateComponentsN: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", date: "n"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "s");
        test.done();
    },
    
    testDateFmtfrCAShortDateComponentsD: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCAShortDateComponentsDM: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCAShortDateComponentsMY: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11-09");
        test.done();
    },
    
    testDateFmtfrCAShortDateComponentsDMY: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11-09-29");
        test.done();
    },
    
    testDateFmtfrCAShortDateComponentsWDM: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "J 09-29");
        test.done();
    },
    
    testDateFmtfrCAShortDateComponentsWDMY: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "J 11-09-29");
        test.done();
    },
    
    
    testDateFmtfrCAFullDateComponentsY: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCAFullDateComponentsM: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septembre");
        test.done();
    },
    
    testDateFmtfrCAFullDateComponentsD: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCAFullDateComponentsDM: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre");
        test.done();
    },
    
    testDateFmtfrCAFullDateComponentsMY: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septembre 2011");
        test.done();
    },
    
    testDateFmtfrCAFullDateComponentsDMY: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011");
        test.done();
    },
    
    testDateFmtfrCAFullDateComponentsWDM: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "jeudi 29 septembre");
        test.done();
    },
    
    testDateFmtfrCAFullDateComponentsWDMY: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "jeudi 29 septembre 2011");
        test.done();
    },
    
    
    testDateFmtfrCAShortTimeComponentsS: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCAShortTimeComponentsM: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCAShortTimeComponentsH: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13");
        test.done();
    },
    
    testDateFmtfrCAShortTimeComponentsMS: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCAShortTimeComponentsHM: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    
    testDateFmtfrCAShortTimeComponentsHMS: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    
    testDateFmtfrCAShortTimeComponentsHMA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    
    testDateFmtfrCAShortTimeComponentsHMZ: function(test) {
        var fmt = new DateFmt({
            locale: "fr-CA",
            type: "time", 
            time: "hmz", 
            timezone: "America/Montreal"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13 h 45 EDT");
        test.done();
    },
    
    testDateFmtfrCAShortTimeComponentsHMAZ: function(test) {
        var fmt = new DateFmt({
            locale: "fr-CA", 
            type: "time", 
            time: "hmaz", 
            timezone: "America/Montreal"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13 h 45 EDT");
        test.done();
    },
    
    testDateFmtfrCAShortTimeComponentsHMSA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    
    testDateFmtfrCAShortTimeComponentsHMSZ: function(test) {
        var fmt = new DateFmt({
            locale: "fr-CA", 
            type: "time", 
            time: "hmsz", 
            timezone: "America/Montreal"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13:45:37 EDT");
        test.done();
    },
    
    testDateFmtfrCAShortTimeComponentsHMSAZ: function(test) {
        var fmt = new DateFmt({
            locale: "fr-CA", 
            type: "time", 
            time: "hmsaz", 
            timezone: "America/Montreal"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13:45:37 EDT");
        test.done();
    },
    
    
    testDateFmtfrCAFullTimeComponentsS: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCAFullTimeComponentsM: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCAFullTimeComponentsH: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13");
        test.done();
    },
    
    testDateFmtfrCAFullTimeComponentsMS: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
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
    
    testDateFmtfrCAFullTimeComponentsHM: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    
    testDateFmtfrCAFullTimeComponentsHMS: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    
    testDateFmtfrCAFullTimeComponentsHMA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    
    testDateFmtfrCAFullTimeComponentsHMZ: function(test) {
        var fmt = new DateFmt({
            locale: "fr-CA", 
            type: "time", 
            length: "full", 
            time: "hmz", 
            timezone: "America/Montreal"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13 h 45 EDT");
        test.done();
    },
    
    testDateFmtfrCAFullTimeComponentsHMAZ: function(test) {
        var fmt = new DateFmt({
            locale: "fr-CA", 
            type: "time", 
            length: "full", 
            time: "hmaz", 
            timezone: "America/Montreal"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13 h 45 EDT");
        test.done();
    },
    
    testDateFmtfrCAFullTimeComponentsHMSA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    
    testDateFmtfrCAFullTimeComponentsHMSZ: function(test) {
        var fmt = new DateFmt({
            locale: "fr-CA", 
            type: "time", 
            length: "full", 
            time: "hmsz", 
            timezone: "America/Montreal"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13:45:37 EDT");
        test.done();
    },
    
    testDateFmtfrCAFullTimeComponentsHMSAZ: function(test) {
        var fmt = new DateFmt({
            locale: "fr-CA", 
            type: "time", 
            length: "full", 
            time: "hmsaz", 
            timezone: "America/Montreal"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13:45:37 EDT");
        test.done();
    },
    
    testDateFmtfrCAWithTimeZoneAndNoDST: function(test) {
        var fmt = new DateFmt({
            locale: "fr-CA", 
            type: "time", 
            length: "full", 
            time: "hmsz", 
            timezone: "America/Montreal"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13:45:37 EST");
        test.done();
    },
    
    
    testDateFmtFormatRelativeWithinMinuteAfter_fr_CA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 30 secondes");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_fr_CA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 30 secondes");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_fr_CA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 10 minutes");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_fr_CA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 10 minutes");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_fr_CA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 4 heures");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_fr_CA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 4 heures");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinFortnightAfter_fr_CA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 4 jours");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_fr_CA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 4 jours");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinQuarterAfter_fr_CA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 9 semaines");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_fr_CA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 9 semaines");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinTwoYearsAfter_fr_CA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 16 mois");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_fr_CA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 14 mois");
        test.done();
    },
    
    testDateFmtFormatRelativeYearsAfter_fr_CA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 14 ans");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_fr_CA: function(test) {
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 21 ans");
        test.done();
    }
    
    
};