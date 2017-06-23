/*
 * testdatefmt_cop_EG.js - test the date formatter object in Coptic
 * 
 * Copyright © 2015,2017, JEDLSoft
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
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../.././../lib/DateFmt.js");
}
if (typeof(CopticDate) === "undefined") {
    var CopticDate = require("../.././../lib/CopticDate.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testdatefmt_cop_EG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtConstructorEmpty_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG"});
        
        test.expect(1);
        test.ok(fmt !== null);
        test.done();
    },
    
    
    testDateFmtSimpleShort_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "short"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29/09/2011");
        test.done();
    },
    
    testDateFmtSimpleMedium_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "medium"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29 بشنس 2011");
        test.done();
    },
    
    testDateFmtSimpleLong_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "long"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29 بشنس، 2011");
        test.done();
    },
    
    testDateFmtSimpleFull_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29 بشنس، 2011");
        test.done();
    },
    
    testDateFmtSimpleTimeShort_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "short", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 م");
        test.done();
    },
    
    testDateFmtSimpleTimeMedium_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "medium", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 م");
        test.done();
    },
    
    testDateFmtSimpleTimeLong_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", timelength: "long", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 م");
        test.done();
    },
    
    testDateFmtSimpleTimeFull_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "full", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 م");
        test.done();
    },
    
    testDateFmtDateTimeSimpleShort_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "short", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 م ‏29/09/2011");
        test.done();
    },
    
    testDateFmtDateTimeSimpleMedium_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "medium", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 م ‏29 بشنس 2011");
        test.done();
    },
    
    testDateFmtDateTimeSimpleLong_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "long", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 م ‏29 بشنس، 2011");
        test.done();
    },
    
    testDateFmtDateTimeSimpleFull_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "full", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 م ‏29 بشنس، 2011");
        test.done();
    },
    
    testDateFmtTemplateCalendar_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", calendar: "julian", template: "yyyy-MM-dd"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new JulianDate({
            locale: "cop-EG",
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
    
    
    testDateFmtTemplateCalendarIncompatibleDateType_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 1731,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        // convert automatically to a Julian calendar date
        test.equal(fmt.format(date), "2015-05-24 13:45");
        test.done();
    },
    
    testDateFmtTemplateClock12SwitchHH_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", clock: "12", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtTemplateClock12Switchkk_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", clock: "12", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtTemplateClock24Switchhh_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", clock: "24", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtTemplateClock24SwitchKK_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", clock: "24", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    
    testDateFmtTypeDate_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "date"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29/09/2011");
        test.done();
    },
    
    testDateFmtTypeTime_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 م");
        test.done();
    },
    
    testDateFmtTypeDateTime_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 م ‏29/09/2011");
        test.done();
    },
    
    
    testDateFmtShortDateComponentsY_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtShortDateComponentsM_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtShortDateComponentsN_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", date: "n"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtShortDateComponentsD_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29");
        test.done();
    },
    
    testDateFmtShortDateComponentsDM_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29/09");
        test.done();
    },
    
    testDateFmtShortDateComponentsMY_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏09/2011");
        test.done();
    },
    
    testDateFmtShortDateComponentsDMY_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29/09/2011");
        test.done();
    },
    
    testDateFmtShortDateComponentsWDM_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "س، 29/09");
        test.done();
    },
    
    testDateFmtShortDateComponentsWDMY_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "س، 29/09/2011");
        test.done();
    },
    
    
    testDateFmtFullDateComponentsY_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtFullDateComponentsM_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "بشنس");
        test.done();
    },
    
    testDateFmtFullDateComponentsD_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29");
        test.done();
    },
    
    testDateFmtFullDateComponentsDM_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29 بشنس");
        test.done();
    },
    
    testDateFmtFullDateComponentsMY_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "بشنس، 2011");
        test.done();
    },
    
    testDateFmtFullDateComponentsDMY_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29 بشنس، 2011");
        test.done();
    },
    
    testDateFmtFullDateComponentsWDM_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "السبت، 29 بشنس");
        test.done();
    },
    
    testDateFmtFullDateComponentsWDMY_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", length: "full", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "السبت، 29 بشنس، 2011");
        test.done();
    },
    
    
    testDateFmtShortTimeComponentsS_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtShortTimeComponentsM_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtShortTimeComponentsH_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtShortTimeComponentsMS_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtShortTimeComponentsHM_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtShortTimeComponentsHMS_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtShortTimeComponentsHMA_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 م");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMZ_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG", 
            type: "time", 
            time: "hmz", 
            timezone: "Africa/Cairo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 EEST");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMAZ_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG", 
            type: "time", 
            time: "hmaz", 
            timezone: "Africa/Cairo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 م EEST");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSA_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 م");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSZ_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG", 
            type: "time", 
            time: "hmsz", 
            timezone: "Africa/Cairo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 EEST");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSAZ_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG", 
            type: "time", 
            time: "hmsaz", 
            timezone: "Africa/Cairo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 م EEST");
        test.done();
    },
    
    
    testDateFmtFullTimeComponentsS_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtFullTimeComponentsM_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtFullTimeComponentsH_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtFullTimeComponentsMS_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtFullTimeComponentsHM_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtFullTimeComponentsHMS_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
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
    
    testDateFmtFullTimeComponentsHMA_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 م");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMZ_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG", 
            type: "time", 
            length: "full", 
            time: "hmz", 
            timezone: "Africa/Cairo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 EEST");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMAZ_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG", 
            type: "time", 
            length: "full", 
            time: "hmaz", 
            timezone: "Africa/Cairo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 م EEST");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMSA_cop_EG: function(test) {
        var fmt = new DateFmt({locale: "cop-EG", type: "time", length: "full", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 م");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMSZ_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG", 
            type: "time", 
            length: "full", 
            time: "hmsz", 
            timezone: "Africa/Cairo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 EEST");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMSAZ_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG", 
            type: "time", 
            length: "full", 
            time: "hmsaz", 
            timezone: "Africa/Cairo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 م EEST");
        test.done();
    },
    
    testDateFmtWithTimeZoneAndNoDST_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG", 
            type: "time", 
            length: "full", 
            time: "hmsz", 
            timezone: "Africa/Cairo"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        // does not observe DST, so no difference in the TZ spec
        test.equal(fmt.format(date), "1:45:37 EEST");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinMinuteAfter_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "خلال 30 ثانية من الأيام");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "قبل 30 ثانية من الأيام");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "خلال 10 دقائق من الأيام");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "قبل 10 دقائق من الأيام");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "خلال 4 ساعات من الأيام");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "قبل 4 ساعات من الأيام");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinFortnightAfter_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "خلال 4 أيام من الأيام");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "قبل 4 أيام من الأيام");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinQuarterAfter_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "خلال 9 أسابيع من الأيام");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "قبل 9 أسابيع من الأيام");
        test.done();
    },
    
    testDateFmtFormatRelativeWithinTwoYearsAfter_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "خلال 16 شهر من الأيام");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "قبل 14 شهر من الأيام");
        test.done();
    },
    
    testDateFmtFormatRelativeYearsAfter_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new CopticDate({
            locale: "cop-EG",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "خلال 14 سنة من الأيام");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_cop_EG: function(test) {
        var fmt = new DateFmt({
            locale: "cop-EG",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var reference = new CopticDate({
            locale: "cop-EG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new CopticDate({
            locale: "cop-EG",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "قبل 21 سنة من الأيام");
        test.done();
    }
    
};