/*
 * testdatefmt_en_IN.js - test the date formatter object in Indian English
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

module.exports.testdatefmt_en_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtINConstructorEmpty: function(test) {
        var fmt = new DateFmt();
        
        test.expect(1);
        test.ok(fmt !== null);
        test.done();
    },
    
    
    testDateFmtINSimpleShort: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "short"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11");
        test.done();
    },
    
    testDateFmtINSimpleMedium: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "medium"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-Sep-2011");
        test.done();
    },
    
    testDateFmtINSimpleLong: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "long"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    
    testDateFmtINSimpleFull: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    
    testDateFmtINSimpleTimeShort: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "short", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINSimpleTimeMedium: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "medium", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINSimpleTimeLong: function(test) {
        var fmt = new DateFmt({locale: "en-IN", timelength: "long", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINSimpleTimeFull: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "full", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINDateTimeSimpleShort: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "short", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11, 1:45 PM");
        test.done();
    },
    
    testDateFmtINDateTimeSimpleMedium: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "medium", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-Sep-2011, 1:45 PM");
        test.done();
    },
    
    testDateFmtINDateTimeSimpleLong: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "long", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011 at 1:45 PM");
        test.done();
    },
    
    testDateFmtINDateTimeSimpleFull: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "full", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011 at 1:45 PM");
        test.done();
    },
    
    
    testDateFmtINTemplateCalendar: function(test) {
        var fmt = new DateFmt({locale: "en-IN", calendar: "julian", template: "yyyy-MM-dd"});
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
    
    testDateFmtINTemplateCalendarIncompatibleDateType: function(test) {
        var fmt = new DateFmt({locale: "en-IN", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINTemplateClock12SwitchHH: function(test) {
        var fmt = new DateFmt({locale: "en-IN", clock: "12", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINTemplateClock12Switchkk: function(test) {
        var fmt = new DateFmt({locale: "en-IN", clock: "12", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINTemplateClock24Switchhh: function(test) {
        var fmt = new DateFmt({locale: "en-IN", clock: "24", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINTemplateClock24SwitchKK: function(test) {
        var fmt = new DateFmt({locale: "en-IN", clock: "24", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh: function(test) {
        var fmt = new DateFmt({locale: "en-IN", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        var fmt = new DateFmt({locale: "en-IN", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH: function(test) {
        var fmt = new DateFmt({locale: "en-IN", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk: function(test) {
        var fmt = new DateFmt({locale: "en-IN", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    
    testDateFmtINTypeDate: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "date"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11");
        test.done();
    },
    
    testDateFmtINTypeTime: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINTypeDateTime: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11, 1:45 PM");
        test.done();
    },
    
    
    testDateFmtINShortDateComponentsY: function(test) {
        var fmt = new DateFmt({locale: "en-IN", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINShortDateComponentsM: function(test) {
        var fmt = new DateFmt({locale: "en-IN", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINShortDateComponentsN: function(test) {
        var fmt = new DateFmt({locale: "en-IN", date: "n"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINShortDateComponentsD: function(test) {
        var fmt = new DateFmt({locale: "en-IN", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINShortDateComponentsDM: function(test) {
        var fmt = new DateFmt({locale: "en-IN", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09");
        test.done();
    },
    
    testDateFmtINShortDateComponentsMY: function(test) {
        var fmt = new DateFmt({locale: "en-IN", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09/11");
        test.done();
    },
    
    testDateFmtINShortDateComponentsDMY: function(test) {
        var fmt = new DateFmt({locale: "en-IN", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11");
        test.done();
    },
    
    testDateFmtINShortDateComponentsWDM: function(test) {
        var fmt = new DateFmt({locale: "en-IN", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T 29/09");
        test.done();
    },
    
    testDateFmtINShortDateComponentsWDMY: function(test) {
        var fmt = new DateFmt({locale: "en-IN", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T 29/09/11");
        test.done();
    },
    
    
    testDateFmtINFullDateComponentsY: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINFullDateComponentsM: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINFullDateComponentsD: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINFullDateComponentsDM: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September");
        test.done();
    },
    
    testDateFmtINFullDateComponentsMY: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 2011");
        test.done();
    },
    
    testDateFmtINFullDateComponentsDMY: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    
    testDateFmtINFullDateComponentsWDM: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Thursday 29 September");
        test.done();
    },
    
    testDateFmtINFullDateComponentsWDMY: function(test) {
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Thursday 29 September 2011");
        test.done();
    },
    
    
    testDateFmtINShortTimeComponentsS: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINShortTimeComponentsM: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINShortTimeComponentsH: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINShortTimeComponentsMS: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINShortTimeComponentsHM: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINShortTimeComponentsHMS: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINShortTimeComponentsHMA: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINShortTimeComponentsHMZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-IN", 
            type: "time", 
            time: "hmaz", 
            timezone: "Asia/Kolkata"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM IST");
        test.done();
    },
    
    testDateFmtINShortTimeComponentsHMAZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-IN", 
            type: "time", 
            time: "hmaz", 
            timezone: "Asia/Kolkata"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM IST");
        test.done();
    },
    
    testDateFmtINShortTimeComponentsHMSA: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINShortTimeComponentsHMSZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-IN", 
            type: "time", 
            time: "hmsaz", 
            timezone: "Asia/Kolkata"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM IST");
        test.done();
    },
    
    testDateFmtINShortTimeComponentsHMSAZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-IN", 
            type: "time", 
            time: "hmsaz", 
            timezone: "Asia/Kolkata"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM IST");
        test.done();
    },
    
    
    testDateFmtINFullTimeComponentsS: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINFullTimeComponentsM: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINFullTimeComponentsH: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINFullTimeComponentsMS: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINFullTimeComponentsHM: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINFullTimeComponentsHMS: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINFullTimeComponentsHMA: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINFullTimeComponentsHMZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-IN", 
            type: "time", 
            length: "full", 
            time: "hmaz", 
            timezone: "Asia/Kolkata"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM IST");
        test.done();
    },
    
    testDateFmtINFullTimeComponentsHMAZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-IN", 
            type: "time", 
            length: "full", 
            time: "hmaz", 
            timezone: "Asia/Kolkata"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM IST");
        test.done();
    },
    
    testDateFmtINFullTimeComponentsHMSA: function(test) {
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
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
    
    testDateFmtINFullTimeComponentsHMSZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-IN", 
            type: "time", 
            length: "full", 
            time: "hmsaz", 
            timezone: "Asia/Kolkata"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM IST");
        test.done();
    },
    
    testDateFmtINFullTimeComponentsHMSAZ: function(test) {
        var fmt = new DateFmt({
            locale: "en-IN", 
            type: "time", 
            length: "full", 
            time: "hmsaz", 
            timezone: "Asia/Kolkata"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM IST");
        test.done();
    },
    
    testDateFmtINWithTimeZoneAndNoDST: function(test) {
        var fmt = new DateFmt({
            locale: "en-IN", 
            type: "time", 
            length: "full", 
            time: "hmsaz", 
            timezone: "Asia/Kolkata"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM IST");
        test.done();
    }
    
    
};