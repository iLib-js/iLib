/*
 * testdatefmt_en_US.js - test the date formatter object in American English
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
if (typeof(IslamicDate) === "undefined") {
    var IslamicDate = require("../.././../lib/IslamicDate.js");
}
if (typeof(HebrewDate) === "undefined") {
    var HebrewDate = require("../.././../lib/HebrewDate.js");
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

module.exports.testdatefmt_en_US = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtUSConstructorEmpty: function(test) {
        var fmt = new DateFmt();
        
        test.expect(1);
        test.ok(fmt !== null);
        test.done();
    },
    
    
    testDateFmtUSSimpleShort: function(test) {
        var fmt = new DateFmt({length: "short"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/29/11");
        test.done();
    },
    
    testDateFmtUSSimpleMedium: function(test) {
        var fmt = new DateFmt({length: "medium"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSSimpleLong: function(test) {
        var fmt = new DateFmt({length: "long"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSSimpleFull: function(test) {
        var fmt = new DateFmt({length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSSimpleTimeShort: function(test) {
        var fmt = new DateFmt({length: "short", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSSimpleTimeMedium: function(test) {
        var fmt = new DateFmt({length: "medium", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSSimpleTimeLong: function(test) {
        var fmt = new DateFmt({timelength: "long", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSSimpleTimeFull: function(test) {
        var fmt = new DateFmt({length: "full", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSDateTimeSimpleShort: function(test) {
        var fmt = new DateFmt({length: "short", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/29/11, 1:45 PM");
        test.done();
    },
    
    testDateFmtUSDateTimeSimpleMedium: function(test) {
        var fmt = new DateFmt({length: "medium", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSDateTimeSimpleLong: function(test) {
        var fmt = new DateFmt({length: "long", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSDateTimeSimpleFull: function(test) {
        var fmt = new DateFmt({length: "full", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    
    testDateFmtUSTemplateCalendar: function(test) {
        var fmt = new DateFmt({calendar: "julian", template: "yyyy-MM-dd"});
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
    
    testDateFmtUSTemplateCalendarIncompatibleDateType: function(test) {
        var fmt = new DateFmt({calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSTemplateClock12SwitchHH: function(test) {
        var fmt = new DateFmt({clock: "12", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSTemplateClock12Switchkk: function(test) {
        var fmt = new DateFmt({clock: "12", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSTemplateClock24Switchhh: function(test) {
        var fmt = new DateFmt({clock: "24", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSTemplateClock24SwitchKK: function(test) {
        var fmt = new DateFmt({clock: "24", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSTemplateNoClockDoNotFollowLocaleDefault12hh: function(test) {
        var fmt = new DateFmt({locale: "en-US", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
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
    
    testDateFmtUSTemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        var fmt = new DateFmt({locale: "en-US", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
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
    
    testDateFmtUSTemplateNoClockDoNotFollowLocaleDefault24HH: function(test) {
        var fmt = new DateFmt({locale: "en-US", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
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
    
    testDateFmtUSTemplateNoClockDoNotFollowLocaleDefault24kk: function(test) {
        var fmt = new DateFmt({locale: "en-US", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-US",
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
    
    
    testDateFmtUSTypeDate: function(test) {
        var fmt = new DateFmt({type: "date"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/29/11");
        test.done();
    },
    
    testDateFmtUSTypeTime: function(test) {
        var fmt = new DateFmt({type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSTypeDateTime: function(test) {
        var fmt = new DateFmt({type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/29/11, 1:45 PM");
        test.done();
    },
    
    
    testDateFmtUSShortDateComponentsY: function(test) {
        var fmt = new DateFmt({date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSShortDateComponentsM: function(test) {
        var fmt = new DateFmt({date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9");
        test.done();
    },
    
    testDateFmtUSShortDateComponentsN: function(test) {
        var fmt = new DateFmt({date: "n"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSShortDateComponentsD: function(test) {
        var fmt = new DateFmt({date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSShortDateComponentsDM: function(test) {
        var fmt = new DateFmt({date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/29");
        test.done();
    },
    
    testDateFmtUSShortDateComponentsMY: function(test) {
        var fmt = new DateFmt({date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/11");
        test.done();
    },
    
    testDateFmtUSShortDateComponentsDMY: function(test) {
        var fmt = new DateFmt({date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/29/11");
        test.done();
    },
    
    testDateFmtUSShortDateComponentsWDM: function(test) {
        var fmt = new DateFmt({date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T, 9/29");
        test.done();
    },
    
    testDateFmtUSShortDateComponentsWDMY: function(test) {
        var fmt = new DateFmt({date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T, 9/29/11");
        test.done();
    },
    
    
    testDateFmtUSFullDateComponentsY: function(test) {
        var fmt = new DateFmt({length: "full", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullDateComponentsM: function(test) {
        var fmt = new DateFmt({length: "full", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullDateComponentsD: function(test) {
        var fmt = new DateFmt({length: "full", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullDateComponentsDM: function(test) {
        var fmt = new DateFmt({length: "full", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullDateComponentsMY: function(test) {
        var fmt = new DateFmt({length: "full", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullDateComponentsDMY: function(test) {
        var fmt = new DateFmt({length: "full", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullDateComponentsWDM: function(test) {
        var fmt = new DateFmt({length: "full", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullDateComponentsWDMY: function(test) {
        var fmt = new DateFmt({length: "full", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    
    testDateFmtUSShortTimeComponentsS: function(test) {
        var fmt = new DateFmt({type: "time", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSShortTimeComponentsM: function(test) {
        var fmt = new DateFmt({type: "time", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSShortTimeComponentsH: function(test) {
        var fmt = new DateFmt({type: "time", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSShortTimeComponentsMS: function(test) {
        var fmt = new DateFmt({type: "time", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSShortTimeComponentsHM: function(test) {
        var fmt = new DateFmt({type: "time", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSShortTimeComponentsHMS: function(test) {
        var fmt = new DateFmt({type: "time", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSShortTimeComponentsHMA: function(test) {
        var fmt = new DateFmt({type: "time", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSShortTimeComponentsHMZ: function(test) {
        var fmt = new DateFmt({
            type: "time", 
            time: "hmz", 
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Los_Angeles"
        });
        test.equal(fmt.format(date), "1:45 PDT");
        test.done();
    },
    
    testDateFmtUSShortTimeComponentsHMAZ: function(test) {
        var fmt = new DateFmt({
            type: "time", 
            time: "hmaz", 
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Los_Angeles"
        });
        test.equal(fmt.format(date), "1:45 PM PDT");
        test.done();
    },
    
    testDateFmtUSShortTimeComponentsHMSA: function(test) {
        var fmt = new DateFmt({type: "time", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSShortTimeComponentsHMSZ: function(test) {
        var fmt = new DateFmt({
            type: "time", 
            time: "hmsz", 
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Los_Angeles"
        });
        test.equal(fmt.format(date), "1:45:37 PDT");
        test.done();
    },
    
    testDateFmtUSShortTimeComponentsHMSAZ: function(test) {
        var fmt = new DateFmt({
            type: "time", 
            time: "hmsaz", 
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Los_Angeles"
        });
        test.equal(fmt.format(date), "1:45:37 PM PDT");
        test.done();
    },
    
    
    testDateFmtUSFullTimeComponentsS: function(test) {
        var fmt = new DateFmt({type: "time", length: "full", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullTimeComponentsM: function(test) {
        var fmt = new DateFmt({type: "time", length: "full", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullTimeComponentsH: function(test) {
        var fmt = new DateFmt({type: "time", length: "full", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullTimeComponentsMS: function(test) {
        var fmt = new DateFmt({type: "time", length: "full", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullTimeComponentsHM: function(test) {
        var fmt = new DateFmt({type: "time", length: "full", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullTimeComponentsHMS: function(test) {
        var fmt = new DateFmt({type: "time", length: "full", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullTimeComponentsHMA: function(test) {
        var fmt = new DateFmt({type: "time", length: "full", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullTimeComponentsHMZ: function(test) {
        var fmt = new DateFmt({
            type: "time", 
            length: "full", 
            time: "hmz", 
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Los_Angeles"
        });
        test.equal(fmt.format(date), "1:45 PDT");
        test.done();
    },
    
    testDateFmtUSFullTimeComponentsHMAZ: function(test) {
        var fmt = new DateFmt({
            type: "time", 
            length: "full", 
            time: "hmaz", 
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Los_Angeles"
        });
        test.equal(fmt.format(date), "1:45 PM PDT");
        test.done();
    },
    
    testDateFmtUSFullTimeComponentsHMSA: function(test) {
        var fmt = new DateFmt({type: "time", length: "full", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
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
    
    testDateFmtUSFullTimeComponentsHMSZ: function(test) {
        var fmt = new DateFmt({
            type: "time", 
            length: "full", 
            time: "hmsz", 
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Los_Angeles"
        });
        test.equal(fmt.format(date), "1:45:37 PDT");
        test.done();
    },
    
    testDateFmtUSFullTimeComponentsHMSAZ: function(test) {
        var fmt = new DateFmt({
            type: "time", 
            length: "full", 
            time: "hmsaz", 
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0, 
            timezone: "America/Los_Angeles"
        });
        test.equal(fmt.format(date), "1:45:37 PM PDT");
        test.done();
    },
    
    testDateFmtUSWithTimeZoneAndNoDST: function(test) {
        var fmt = new DateFmt({
            type: "time", 
            length: "full", 
            time: "hmsz", 
            timezone: "America/Los_Angeles"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            timezone: "America/Los_Angeles",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PST");
        test.done();
    },
    
    testDateFmtUSIslamic: function(test) {
        var fmt = new DateFmt({
            type: "date", 
            length: "full",
            date: "wdmy",
            calendar: "islamic"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new IslamicDate({
            year: 1433,
            month: 8,
            day: 24
        });
        
        // should format with English transliterations of the month names
        test.equal(fmt.format(date), "yawn as-sabt, Šha'bān 24, 1433");
        test.done();
    },
    
    testDateFmtUSHebrew: function(test) {
        var fmt = new DateFmt({
            type: "date", 
            length: "full",
            date: "wdmy",
            calendar: "hebrew"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new HebrewDate({
            year: 5772,
            month: 8,
            day: 24
        });
        
        // should format with English transliterations of the month names
        test.equal(fmt.format(date), "yom sheni, Ḥeshvan 24, 5772");
        test.done();
    },
    
    /*
    testDateFmtUSHebrew: function(test) {
        var fmt = new DateFmt({
            type: "date", 
            length: "full",
            date: "wdmy",
            calendar: "hebrew"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new HebrewDate({
            year: 5772,
            month: 4,
            day: 24
        });
        // should format with English transliterations of the month names
        test.equal(fmt.format(date), "Saturday Tammuz 24, 5772");
        test.done();
    },
    */
    
    testDateFmtUSShortTimeWithNoMinOrSec: function(test) {
        var fmt = new DateFmt({
            type: "time",
            length: "short", 
            time: "hms"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            year: 2011,
            month: 12,
            day: 29,
            hour: 13
        });
        test.equal(fmt.format(date), "1:00:00");
        test.done();
    }
    
};