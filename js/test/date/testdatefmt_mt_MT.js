/*
 * testdatefmt_mt_MT.js - test the date formatter object in Maltese-Malta
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

module.exports.testdatefmt_mt_MT = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_mt_MT: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "mt-MT"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtSimpleMedium_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Set 2011");
        test.done();
    },
    testDateFmtSimpleLong_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ta’ Settembru 2011");
        test.done();
    },
    testDateFmtSimpleFull_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 ta’ Settembru 2011');
        test.done();
    },
    testDateFmtSimpleTimeShort_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
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
    testDateFmtSimpleTimeMedium_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
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
    testDateFmtSimpleTimeLong_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
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
    testDateFmtSimpleTimeFull_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
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
    testDateFmtDateTimeSimpleShort_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09/2011 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Set 2011 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 ta’ Settembru 2011 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 ta’ Settembru 2011 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "mt-MT",
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
    testDateFmtTemplateCalendarIncompatibleDateType_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtTemplateClock12SwitchHH_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtTemplateClock12Switchkk_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtTemplateClock24Switchhh_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtTemplateClock24SwitchKK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtTypeDate_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09/2011');
        test.done();
    },
    testDateFmtTypeTime_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
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
    testDateFmtTypeDateTime_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09/2011 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtShortDateComponentsM_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtShortDateComponentsD_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtShortDateComponentsDM_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09');
        test.done();
    },
    testDateFmtShortDateComponentsMY_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '09/2011');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09/2011');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Ħm, 29/09');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Ħm, 29/09/2011');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Ħam, 29 ta’ Settembru');
        test.done();
    },
    testDateFmtFullDateComponentsY_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFullDateComponentsM_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Settembru");
        test.done();
    },
    testDateFmtFullDateComponentsD_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFullDateComponentsDM_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 ta’ Settembru');
        test.done();
    },
    testDateFmtFullDateComponentsMY_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Settembru 2011');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 ta’ Settembru 2011');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Il-Ħamis, 29 ta’ Settembru');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Il-Ħamis, 29 ta’ Settembru 2011');
        test.done();
    },
    testDateFmtShortTimeComponentsS_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtShortTimeComponentsM_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtShortTimeComponentsH_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtShortTimeComponentsMS_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtShortTimeComponentsHM_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtShortTimeComponentsHMS_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtShortTimeComponentsHMA_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtShortTimeComponentsHMZ_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mt-MT",
            type: "time",
            time: "hmz",
            timezone: "Europe/Malta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtShortTimeComponentsHMAZ_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mt-MT",
            type: "time",
            time: "hmaz",
            timezone: "Europe/Malta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtShortTimeComponentsHMSA_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtShortTimeComponentsHMSZ_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mt-MT",
            type: "time",
            time: "hmsz",
            timezone: "Europe/Malta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtShortTimeComponentsHMSAZ_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mt-MT",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/Malta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFullTimeComponentsS_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFullTimeComponentsM_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFullTimeComponentsH_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFullTimeComponentsMS_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFullTimeComponentsHM_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFullTimeComponentsHMS_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFullTimeComponentsHMA_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFullTimeComponentsHMZ_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mt-MT",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/Malta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFullTimeComponentsHMAZ_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mt-MT",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/Malta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFullTimeComponentsHMSA_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFullTimeComponentsHMSZ_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mt-MT",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Malta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFullTimeComponentsHMSAZ_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mt-MT",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/Malta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtWithTimeZoneAndNoDST_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mt-MT",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Malta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mt-MT",
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
    testDateFmtFormatRelativeWithinMinuteAfter_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "sa 30 sekonda oħra");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 sekonda ilu");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "sa 10 minuti oħra");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 minuti ilu');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fi żmien 4 sigħat');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 sigħat ilu');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fi żmien 4 ġranet oħra');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 ġranet ilu');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'sa 9 ġimgħat oħra');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 ġimgħat ilu');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fi 16-xahar oħra');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14-il xahar ilu');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mt-MT",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fi żmien 14-il sena oħra');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_mt_MT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mt-MT", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mt-MT",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mt-MT",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '21 sena ilu');
        test.done();
    }
};