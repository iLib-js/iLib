/*
 * testdatefmt_wo_SN.js - test the date formatter object in Wolof-Senegal
 * 
 * Copyright © 2021, JEDLSoft
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
    var JulianDate = require("../../lib/JulianDate.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../lib/GregorianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdatefmt_wo_SN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_wo_SN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "wo-SN"});
        
        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "short"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09-2021");
        test.done();
    },
    testDateFmtSimpleMedium_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "medium"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sàt, 2021");
        test.done();
    },
    testDateFmtSimpleLong_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "long"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sàttumbar, 2021");
        test.done();
    },
    testDateFmtSimpleFull_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Sàt, 2021');
        test.done();
    },
    testDateFmtSimpleTimeShort_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "short", type: "time"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtSimpleTimeMedium_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "medium", type: "time"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtSimpleTimeLong_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", timelength: "long", type: "time"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtSimpleTimeFull_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full", type: "time"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '01:45');
        test.done();
    },
    testDateFmtDateTimeSimpleShort_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "short", type: "datetime"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29-09-2021 - 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "medium", type: "datetime"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Sàt, 2021 - 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "long", type: "datetime"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Sàttumbar, 2021 ci 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full", type: "datetime"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Sàt, 2021 ci 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);
        
        var date = new JulianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2021-09-29");
        test.done();
    },
    testDateFmtTemplateCalendarIncompatibleDateType_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        // convert automatically to a Julian calendar date
        test.equal(fmt.format(date), "2021-09-16 13:45");
        test.done();
    },
    testDateFmtTemplateClock12SwitchHH_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtTemplateClock12Switchkk_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtTemplateClock24Switchhh_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtTemplateClock24SwitchKK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", template: "hh:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", template: "KK:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", template: "HH:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", template: "kk:mm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtTypeDate_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "date"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29-09-2021');
        test.done();
    },
    testDateFmtTypeTime_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtTypeDateTime_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "datetime"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29-09-2021 - 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", date: "y"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2021");
        test.done();
    },
    testDateFmtShortDateComponentsM_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", date: "m"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtShortDateComponentsD_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", date: "d"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtShortDateComponentsDM_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", date: "dm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29-09');
        test.done();
    },
    testDateFmtShortDateComponentsMY_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", date: "my"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '09-2021');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", date: "dmy"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29-09-2021');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", date: "wdm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Àla, 29-09');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", date: "wdmy"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Àla, 29-09-2021');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", date: "wdm", length: "long"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Àla, 29 Sàttumbar');
        test.done();
    },
    testDateFmtFullDateComponentsY_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full", date: "y"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2021");
        test.done();
    },
    testDateFmtFullDateComponentsM_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full", date: "m"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Sàt");
        test.done();
    },
    testDateFmtFullDateComponentsD_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full", date: "d"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtFullDateComponentsDM_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full", date: "dm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Sàt');
        test.done();
    },
    testDateFmtFullDateComponentsMY_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full", date: "my"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Sàt, 2021');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full", date: "dmy"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Sàt, 2021');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full", date: "wdm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Àlarba, 29 Sàt');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full", date: "wdmy"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Àlarba, 29 Sàt, 2021');
        test.done();
    },
    testDateFmtShortTimeComponentsS_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", time: "s"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtShortTimeComponentsM_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", time: "m"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtShortTimeComponentsH_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", time: "h"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtShortTimeComponentsMS_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", time: "ms"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtShortTimeComponentsHM_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", time: "hm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMS_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", time: "hms"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMA_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", time: "hma"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMZ_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "wo-SN",
            type: "time",
            time: "hmz",
            timezone: "Africa/Dakar"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 GMT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "wo-SN",
            type: "time",
            time: "hmaz",
            timezone: "Africa/Dakar"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 GMT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", time: "hmsa"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMSZ_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "wo-SN",
            type: "time",
            time: "hmsz",
            timezone: "Africa/Dakar"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 GMT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "wo-SN",
            type: "time",
            time: "hmsaz",
            timezone: "Africa/Dakar"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 GMT");
        test.done();
    },
    testDateFmtFullTimeComponentsS_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtFullTimeComponentsM_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtFullTimeComponentsH_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtFullTimeComponentsMS_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtFullTimeComponentsHM_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMS_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMA_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMZ_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "wo-SN", 
            type: "time", 
            length: "full", 
            time: "hmz", 
            timezone: "Africa/Dakar"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 GMT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "wo-SN",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Africa/Dakar"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 GMT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMSZ_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "wo-SN",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Africa/Dakar"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 GMT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "wo-SN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Africa/Dakar"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 GMT");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "wo-SN",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Africa/Dakar"
        });
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 GMT");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "fileek 30 saa");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 saa ci ginaaw");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "fileek 10 simili");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 simili ci ginaaw');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fileek 4 waxtu');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 waxtu ci ginaaw');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fileek 4 fan');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 fan ci ginaaw');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fileek 9 ayi-bis');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 ayi-bis ci ginaaw');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "wo-SN",
            year: 2021,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2023,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fileek 16 weer');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "wo-SN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 weer ci ginaaw');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "wo-SN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fileek 14 at');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_wo_SN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "wo-SN", length: "full"});
        test.ok(fmt !== null);
        
        var reference = new GregorianDate({
            locale: "wo-SN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "wo-SN",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '21 at ci ginaaw');
        test.done();
    }
};