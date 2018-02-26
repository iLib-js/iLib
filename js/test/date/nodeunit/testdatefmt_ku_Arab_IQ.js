/*
 * testdatefmt_ku_Arab_IQ.js - test the date formatter object in Kurdish Arabic
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
    var JulianDate = require("../../../lib/JulianDate.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../../lib/GregorianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../../lib/DateFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testdatefmt_ku_Arab_IQ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtSimpleShort_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "short"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29‏/9‏/2011");
        test.done();
    },
    
    testDateFmtSimpleMedium_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "medium"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29‏/09‏/2011");
        test.done();
    },
    
    testDateFmtSimpleLong_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "long"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏2011/ئەیلول/29");
        test.done();
    },
    
    testDateFmtSimpleFull_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "full"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏2011/ئەیلول/29");
        test.done();
    },
    
    testDateFmtSimpleTimeShort_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "short", type: "time"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtSimpleTimeMedium_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "medium", type: "time"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtSimpleTimeLong_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", timelength: "long", type: "time"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtSimpleTimeFull_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "full", type: "time"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtDateTimeSimpleShort_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "short", type: "datetime"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29‏/9‏/2011 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleMedium_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "medium", type: "datetime"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29‏/09‏/2011 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleLong_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "long", type: "datetime"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏2011/ئەیلول/29 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleFull_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "full", type: "datetime"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏2011/ئەیلول/29 13:45");
        test.done();
    },
    
    
    testDateFmtTemplateCalendar_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);
        
        var date = new JulianDate({
            locale: "ku-Arab-IQ",
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
    
    
    
    testDateFmtTemplateClock12SwitchHH_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtTemplateClock12Switchkk_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtTemplateClock24Switchhh_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtTemplateClock24SwitchKK_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", locale: "ku-Arab-IQ", template: "hh:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", locale: "ku-Arab-IQ", template: "KK:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", locale: "ku-Arab-IQ", template: "HH:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", locale: "ku-Arab-IQ", template: "kk:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    
    testDateFmtTypeDate_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "date"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29‏/9‏/2011");
        test.done();
    },
    
    testDateFmtTypeTime_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtTypeDateTime_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "datetime"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29‏/9‏/2011 13:45");
        test.done();
    },
    
    
    testDateFmtShortDateComponentsY_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", date: "y"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtShortDateComponentsM_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", date: "m"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    
    testDateFmtShortDateComponentsD_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", date: "d"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtShortDateComponentsDM_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", date: "dm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏29‏/9");
        test.done();
    },
    
    testDateFmtShortDateComponentsMY_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", date: "my"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏9‏/2011");
        test.done();
    },
    
    testDateFmtShortDateComponentsDMY_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", date: "dmy"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
    
        test.equal(fmt.format(date), "‏29‏/9‏/2011");
        test.done();
    
    },
    
    testDateFmtShortDateComponentsWDM_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", date: "wdm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "پێن, 29‏/9");
        test.done();
    
    },
    
    testDateFmtShortDateComponentsWDMY_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", date: "wdmy"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "پێن,  29‏/9‏/2011");
        test.done();
    
    },
    
    
    testDateFmtFullDateComponentsY_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "full", date: "y"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtFullDateComponentsM_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "full", date: "m"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ئەیلول");
        test.done();
    },
    
    testDateFmtFullDateComponentsD_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "full", date: "d"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtFullDateComponentsDM_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "full", date: "dm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏ئەیلول/29");
        test.done();
    },
    
    testDateFmtFullDateComponentsMY_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "full", date: "my"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏2011/ئەیلول");
        test.done();
    },
    
    testDateFmtFullDateComponentsDMY_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "full", date: "dmy"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏2011/ئەیلول/29");
        test.done();
    },
    
    testDateFmtFullDateComponentsWDM_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "full", date: "wdm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "پێنج شەممە,ئەیلول/29");
        test.done();
    },
    
    testDateFmtFullDateComponentsWDMY_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", length: "full", date: "wdmy"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "پێنج شەممە, 2011/ئەیلول/29");
        test.done();
    },
    
    
    testDateFmtShortTimeComponentsS_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", time: "s"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtShortTimeComponentsM_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", time: "m"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtShortTimeComponentsH_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", time: "h"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtShortTimeComponentsMS_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", time: "ms"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtShortTimeComponentsHM_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", time: "hm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtShortTimeComponentsHMS_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", time: "hms"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtShortTimeComponentsHMA_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", time: "hma"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtShortTimeComponentsHMZ_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-Arab-IQ", 
            type: "time", 
            time: "hmz"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +03/+04");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMAZ_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-Arab-IQ", 
            type: "time", 
            time: "hmaz"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +03/+04");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSA_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", time: "hmsa"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtShortTimeComponentsHMSZ_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-Arab-IQ", 
            type: "time", 
            time: "hmsz"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +03/+04");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSAZ_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-Arab-IQ", 
            type: "time", 
            time: "hmsaz"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +03/+04");
        test.done();
    },
    
    
    testDateFmtFullTimeComponentsS_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtFullTimeComponentsM_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtFullTimeComponentsH_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtFullTimeComponentsMS_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtFullTimeComponentsHM_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtFullTimeComponentsHMS_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtFullTimeComponentsHMA_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtFullTimeComponentsHMZ_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-Arab-IQ", 
            type: "time", 
            length: "full", 
            time: "hmz"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +03/+04");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMAZ_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-Arab-IQ", 
            type: "time", 
            length: "full", 
            time: "hmaz"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +03/+04");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMSA_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
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
    
    testDateFmtFullTimeComponentsHMSZ_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-Arab-IQ", 
            type: "time", 
            length: "full", 
            time: "hmsz"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +03/+04");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMSAZ_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-Arab-IQ", 
            type: "time", 
            length: "full", 
            time: "hmsaz"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +03/+04");
        test.done();
    },
    
    testDateFmtWithTimeZoneAndNoDST_ku_Arab_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-Arab-IQ", 
            type: "time", 
            length: "full", 
            time: "hmsz"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "ku-Arab-IQ",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +03/+04");
        test.done();
    }
    
    
};
