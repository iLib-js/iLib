/*
 * testdatefmt_pt_BR.js - test the date formatter object in Brazilian Portuguese
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

module.exports.testdatefmt_pt_BR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtBRConstructorEmpty: function(test) {
        var fmt = new DateFmt({locale: "pt-BR"});
        
        test.expect(1);
        test.ok(fmt !== null);
        test.done();
    },
    
    
    testDateFmtBRSimpleShort: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "short"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    
    testDateFmtBRSimpleMedium: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "medium"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de set de 2011");
        test.done();
    },
    
    testDateFmtBRSimpleLong: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "long"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de setembro de 2011");
        test.done();
    },
    
    testDateFmtBRSimpleFull: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de setembro de 2011");
        test.done();
    },
    
    testDateFmtBRSimpleTimeShort: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "short", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRSimpleTimeMedium: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "medium", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRSimpleTimeLong: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", timelength: "long", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRSimpleTimeFull: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "full", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRDateTimeSimpleShort: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "short", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011 13:45");
        test.done();
    },
    
    testDateFmtBRDateTimeSimpleMedium: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "medium", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de set de 2011 13:45");
        test.done();
    },
    
    testDateFmtBRDateTimeSimpleLong: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "long", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de setembro de 2011 13:45");
        test.done();
    },
    
    testDateFmtBRDateTimeSimpleFull: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "full", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de setembro de 2011 13:45");
        test.done();
    },
    
    
    testDateFmtBRTemplateCalendar: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", calendar: "julian", template: "yyyy-MM-dd"});
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
    
    testDateFmtBRTemplateCalendarIncompatibleDateType: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRTemplateClock12SwitchHH: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", clock: "12", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRTemplateClock12Switchkk: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", clock: "12", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRTemplateClock24Switchhh: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", clock: "24", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRTemplateClock24SwitchKK: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", clock: "24", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRTemplateNoClockDoNotFollowLocaleDefault12hh: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRTemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRTemplateNoClockDoNotFollowLocaleDefault24HH: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRTemplateNoClockDoNotFollowLocaleDefault24kk: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    
    testDateFmtBRTypeDate: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "date"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    
    testDateFmtBRTypeTime: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRTypeDateTime: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011 13:45");
        test.done();
    },
    
    
    testDateFmtBRShortDateComponentsY: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRShortDateComponentsM: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRShortDateComponentsN: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", date: "n"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRShortDateComponentsD: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRShortDateComponentsDM: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRShortDateComponentsMY: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09/2011");
        test.done();
    },
    
    testDateFmtBRShortDateComponentsDMY: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    
    testDateFmtBRShortDateComponentsWDM: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Q, 29/09");
        test.done();
    },
    
    testDateFmtBRShortDateComponentsWDMY: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Q, 29/09/2011");
        test.done();
    },
    
    
    testDateFmtBRFullDateComponentsY: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRFullDateComponentsM: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "setembro");
        test.done();
    },
    
    testDateFmtBRFullDateComponentsD: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRFullDateComponentsDM: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de setembro");
        test.done();
    },
    
    testDateFmtBRFullDateComponentsMY: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "setembro de 2011");
        test.done();
    },
    
    testDateFmtBRFullDateComponentsDMY: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de setembro de 2011");
        test.done();
    },
    
    testDateFmtBRFullDateComponentsWDM: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "quinta-feira, 29 de setembro");
        test.done();
    },
    
    testDateFmtBRFullDateComponentsWDMY: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "quinta-feira, 29 de setembro de 2011");
        test.done();
    },
    
    
    testDateFmtBRShortTimeComponentsS: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRShortTimeComponentsM: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRShortTimeComponentsH: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRShortTimeComponentsMS: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRShortTimeComponentsHM: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtBRShortTimeComponentsHMS: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRShortTimeComponentsHMA: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtBRShortTimeComponentsHMZ: function(test) {
        var fmt = new DateFmt({
            locale: "pt-BR", 
            type: "time", 
            time: "hmz", 
            timezone: "America/Sao_Paulo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 -03/-02");
        test.done();
    },
    
    testDateFmtBRShortTimeComponentsHMAZ: function(test) {
        var fmt = new DateFmt({
            locale: "pt-BR", 
            type: "time", 
            time: "hmaz", 
            timezone: "America/Sao_Paulo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 -03/-02");
        test.done();
    },
    
    testDateFmtBRShortTimeComponentsHMSA: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRShortTimeComponentsHMSZ: function(test) {
        var fmt = new DateFmt({
            locale: "pt-BR", 
            type: "time", 
            time: "hmsz", 
            timezone: "America/Sao_Paulo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 -03/-02");
        test.done();
    },
    
    testDateFmtBRShortTimeComponentsHMSAZ: function(test) {
        var fmt = new DateFmt({
            locale: "pt-BR", 
            type: "time", 
            time: "hmsaz", 
            timezone: "America/Sao_Paulo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 -03/-02");
        test.done();
    },
    
    
    testDateFmtBRFullTimeComponentsS: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRFullTimeComponentsM: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRFullTimeComponentsH: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRFullTimeComponentsMS: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRFullTimeComponentsHM: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtBRFullTimeComponentsHMS: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRFullTimeComponentsHMA: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtBRFullTimeComponentsHMZ: function(test) {
        var fmt = new DateFmt({
            locale: "pt-BR", 
            type: "time", 
            length: "full", 
            time: "hmz", 
            timezone: "America/Sao_Paulo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 -03/-02");
        test.done();
    },
    
    testDateFmtBRFullTimeComponentsHMAZ: function(test) {
        var fmt = new DateFmt({
            locale: "pt-BR", 
            type: "time", 
            length: "full", 
            time: "hmaz", 
            timezone: "America/Sao_Paulo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 -03/-02");
        test.done();
    },
    
    testDateFmtBRFullTimeComponentsHMSA: function(test) {
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
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
    
    testDateFmtBRFullTimeComponentsHMSZ: function(test) {
        var fmt = new DateFmt({
            locale: "pt-BR", 
            type: "time", 
            length: "full", 
            time: "hmsz", 
            timezone: "America/Sao_Paulo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 -03/-02");
        test.done();
    },
    
    testDateFmtBRFullTimeComponentsHMSAZ: function(test) {
        var fmt = new DateFmt({
            locale: "pt-BR", 
            type: "time", 
            length: "full", 
            time: "hmsaz", 
            timezone: "America/Sao_Paulo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 -03/-02");
        test.done();
    },
    
    testDateFmtBRWithTimeZoneAndNoDST: function(test) {
        var fmt = new DateFmt({
            locale: "pt-BR", 
            type: "time", 
            length: "full", 
            time: "hmsz", 
            timezone: "America/Sao_Paulo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 -03/-02");
        test.done();
    }
    
    
};