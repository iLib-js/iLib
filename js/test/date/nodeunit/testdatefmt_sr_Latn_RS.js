/*
 * testdatefmt_sr_Latn_RS.js - test the date formatter object in č,aiLand
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

module.exports.testdatefmt_sr_Latn_RS = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtConstructorEmpty_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS"});
        
        test.expect(1);
        test.ok(fmt !== null);
        test.done();
    },
    
    
    testDateFmtSimpleShort_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "short"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.11.");
        test.done();
    },
    
    testDateFmtSimpleMedium_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "medium"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011.");
        test.done();
    },
    
    testDateFmtSimpleLong_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "long"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. septembar 2011.");
        test.done();
    },
    
    testDateFmtSimpleFull_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. septembar 2011.");
        test.done();
    },
    
    testDateFmtSimpleTimeShort_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "short", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtSimpleTimeMedium_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "medium", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtSimpleTimeLong_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", timelength: "long", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtSimpleTimeFull_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtDateTimeSimpleShort_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "short", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.11. 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleMedium_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "medium", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011. 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleLong_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "long", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. septembar 2011. 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleFull_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. septembar 2011. 13:45");
        test.done();
    },
    
    
    testDateFmtTemplateCalendar_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", calendar: "julian", template: "yyyy-MM-dd"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new JulianDate({
            locale: "sr-Latn-RS",
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
    
    
    
    testDateFmtTemplateClock12SwitchHH_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", clock: "12", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtTemplateClock12Switchkk_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", clock: "12", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtTemplateClock24Switchhh_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", clock: "24", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtTemplateClock24SwitchKK_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", clock: "24", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    
    testDateFmtTypeDate_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "date"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.11.");
        test.done();
    },
    
    testDateFmtTypeTime_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtTypeDateTime_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.11. 13:45");
        test.done();
    },
    
    
    testDateFmtShortDateComponentsY_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtShortDateComponentsM_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtShortDateComponentsN_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "n"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtShortDateComponentsD_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtShortDateComponentsDM_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9");
        test.done();
    },
    
    testDateFmtShortDateComponentsMY_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9.11.");
        test.done();
    },
    
    testDateFmtShortDateComponentsDMY_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.11.");
        test.done();
    },
    
    testDateFmtShortDateComponentsWDM_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "č, 29.9");
        test.done();
    },
    
    testDateFmtShortDateComponentsWDMY_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "č, 29.9.11.");
        test.done();
    },
    
    
    testDateFmtFullDateComponentsY_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtFullDateComponentsM_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septembar");
        test.done();
    },
    
    testDateFmtFullDateComponentsD_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtFullDateComponentsDM_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. septembar");
        test.done();
    },
    
    testDateFmtFullDateComponentsMY_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septembar 2011.");
        test.done();
    },
    
    testDateFmtFullDateComponentsDMY_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. septembar 2011.");
        test.done();
    },
    
    testDateFmtFullDateComponentsWDM_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "četvrtak, 29. septembar");
        test.done();
    },
    
    testDateFmtFullDateComponentsWDMY_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "četvrtak, 29. septembar 2011.");
        test.done();
    },
    
    
    testDateFmtShortTimeComponentsS_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtShortTimeComponentsM_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtShortTimeComponentsH_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtShortTimeComponentsMS_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtShortTimeComponentsHM_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtShortTimeComponentsHMS_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtShortTimeComponentsHMA_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtShortTimeComponentsHMZ_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({
            locale: "sr-Latn-RS", calendar: "gregorian", 
            type: "time", 
            time: "hmz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 CEST");
        test.done();
    },
    
    
    
    testDateFmtShortTimeComponentsHMSA_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtShortTimeComponentsHMSZ_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({
            locale: "sr-Latn-RS", calendar: "gregorian", 
            type: "time", 
            time: "ahmsz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 CEST");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSAZ_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({
            locale: "sr-Latn-RS", calendar: "gregorian", 
            type: "time", 
            time: "hmsaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 CEST");
        test.done();
    },
    
    
    testDateFmtFullTimeComponentsS_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtFullTimeComponentsM_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtFullTimeComponentsH_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtFullTimeComponentsMS_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtFullTimeComponentsHM_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtFullTimeComponentsHMS_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtFullTimeComponentsHMA_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    testDateFmtFullTimeComponentsHMZ_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({
            locale: "sr-Latn-RS", calendar: "gregorian", 
            type: "time", 
            length: "full", 
            time: "ahmz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 CEST");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMAZ_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({
            locale: "sr-Latn-RS", calendar: "gregorian", 
            type: "time", 
            length: "full", 
            time: "hmaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 CEST");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMSA_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", type: "time", length: "full", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
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
    
    
    
    testDateFmtFullTimeComponentsHMSAZ_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({
            locale: "sr-Latn-RS", calendar: "gregorian", 
            type: "time", 
            length: "full", 
            time: "hmsaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 CEST");
        test.done();
    },
    
    testDateFmtWithTimeZoneAndNoDST_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({
            locale: "sr-Latn-RS", calendar: "gregorian", 
            type: "time", 
            length: "full", 
            time: "hmsz"
        });
        test.expect(4);
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 CET");
        test.done();
    },
    
    /*function testDateFmtFormatRelativeWithinMinuteAfter_sr_Latn_RS() {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 30 sekundi");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пре 30 sekundi");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 10 minuta");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пре 10 minuta");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 4 sati");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пре 4 sati");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinFortnightAfter_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 4 dana");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пре 4 dana");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinQuarterAfter_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 9 nedelja");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пре 9 nedelja");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinTwoYearsAfter_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 16 meseci");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пре 14 meseci");
        test.done();
    },
    
    testDateFmtFormatRelativeYearsAfter_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 14 godina");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_sr_Latn_RS: function(test) {
        var fmt = new DateFmt({locale: "sr-Latn-RS", calendar: "gregorian", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sr-Latn-RS",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пре 21 godina");
        test.done();
    }
    */
    
};