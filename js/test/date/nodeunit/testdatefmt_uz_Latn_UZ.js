/*
 * testdatefmtrange_uz_Latn_UZ.js - test the date range formatter object Uzbek/Uzbekistan for Cyrillic script
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

module.exports.testdatefmt_uz_Latn_UZ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtConstructorEmpty_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ"});
        
        test.expect(1);
        test.ok(fmt !== null);
        test.done();
    },
    
    
    testDateFmtSimpleShort_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "short"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtSimpleMedium_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "medium"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-sen, 2011");
        test.done();
    },
    
    testDateFmtSimpleLong_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "long"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-sentabr, 2011");
        test.done();
    },
    
    testDateFmtSimpleFull_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-sentabr, 2011");
        test.done();
    },
    
    testDateFmtSimpleTimeShort_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "short", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtSimpleTimeMedium_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "medium", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtSimpleTimeLong_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", timelength: "long", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtSimpleTimeFull_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "full", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtDateTimeSimpleShort_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "short", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11, 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleMedium_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "medium", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-sen, 2011, 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleLong_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "long", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-sentabr, 2011, 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleFull_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "full", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-sentabr, 2011, 13:45");
        test.done();
    },
    
    
    testDateFmtTemplateCalendar_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", calendar: "julian", template: "yyyy-MM-dd"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new JulianDate({
            locale: "uz-Latn-UZ",
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
    
    
    testDateFmtTemplateClock12SwitchHH_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", clock: "12", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtTemplateClock12Switchkk_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", clock: "12", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtTemplateClock24Switchhh_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", clock: "24", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtTemplateClock24SwitchKK_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", clock: "24", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    
    testDateFmtTypeDate_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "date"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtTypeTime_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtTypeDateTime_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11, 13:45");
        test.done();
    },
    
    
    testDateFmtShortDateComponentsY_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtShortDateComponentsM_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Se");
        test.done();
    },
    
    testDateFmtShortDateComponentsN_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", date: "n"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtShortDateComponentsD_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtShortDateComponentsDM_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtShortDateComponentsMY_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtShortDateComponentsDMY_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtShortDateComponentsWDM_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "P, 29/09");
        test.done();
    },
    
    testDateFmtShortDateComponentsWDMY_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "P, 29/09/11");
        test.done();
    },
    
    
    testDateFmtFullDateComponentsY_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "full", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtFullDateComponentsM_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "full", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Sentabr");
        test.done();
    },
    
    testDateFmtFullDateComponentsD_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "full", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtFullDateComponentsDM_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "full", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-sentabr");
        test.done();
    },
    
    testDateFmtFullDateComponentsMY_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "full", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Sentabr, 2011");
        test.done();
    },
    
    testDateFmtFullDateComponentsDMY_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "full", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-sentabr, 2011");
        test.done();
    },
    
    testDateFmtFullDateComponentsWDM_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "full", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "payshanba, 29-sentabr");
        test.done();
    },
    
    testDateFmtFullDateComponentsWDMY_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", length: "full", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "payshanba, 29-sentabr, 2011");
        test.done();
    },
    
    
    testDateFmtShortTimeComponentsS_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtShortTimeComponentsM_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtShortTimeComponentsH_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtShortTimeComponentsMS_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtShortTimeComponentsHM_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtShortTimeComponentsHMS_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtShortTimeComponentsHMA_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtShortTimeComponentsHMZ_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({
            locale: "uz-Latn-UZ", 
            type: "time", 
            time: "hmz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 (+05)");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMAZ_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({
            locale: "uz-Latn-UZ", 
            type: "time", 
            time: "hmaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 (+05)");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSA_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtShortTimeComponentsHMSZ_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({
            locale: "uz-Latn-UZ", 
            type: "time", 
            time: "hmsz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 (+05)");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSAZ_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({
            locale: "uz-Latn-UZ", 
            type: "time", 
            time: "hmsaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 (+05)");
        test.done();
    },
    
    
    testDateFmtFullTimeComponentsS_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtFullTimeComponentsM_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtFullTimeComponentsH_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtFullTimeComponentsMS_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtFullTimeComponentsHM_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtFullTimeComponentsHMS_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtFullTimeComponentsHMA_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    
    testDateFmtFullTimeComponentsHMZ_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({
            locale: "uz-Latn-UZ", 
            type: "time", 
            length: "full", 
            time: "hmz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 (+05)");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMAZ_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({
            locale: "uz-Latn-UZ", 
            type: "time", 
            length: "full", 
            time: "hmaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 (+05)");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMSA_uz_Latn_UZ: function(test) {
        var fmt = new DateFmt({locale: "uz-Latn-UZ", type: "time", length: "full", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "uz-Latn-UZ",
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
    }
    
    
    
    
};