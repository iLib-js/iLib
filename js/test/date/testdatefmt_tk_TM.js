/*
 * testdatefmt_tk_TM.js - test the date formatter object in Turkmen-Turkmenistan
 *
 * Copyright © 2021,2023 JEDLSoft
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

module.exports.testdatefmt_tk_TM = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_tk_TM: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "tk-TM"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011");
        test.done();
    },
    testDateFmtSimpleMedium_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sen 2011");
        test.done();
    },
    testDateFmtSimpleLong_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sentýabr 2011");
        test.done();
    },
    testDateFmtSimpleFull_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 sentýabr 2011');
        test.done();
    },
    testDateFmtSimpleTimeShort_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtSimpleTimeMedium_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtSimpleTimeLong_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtSimpleTimeFull_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtDateTimeSimpleShort_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.2011, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 sen 2011, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 sentýabr 2011 sagat 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 sentýabr 2011 sagat 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "tk-TM",
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
    testDateFmtTemplateCalendarIncompatibleDateType_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtTemplateClock12SwitchHH_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtTemplateClock12Switchkk_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtTemplateClock24Switchhh_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
        var fmt = new DateFmt({locale: "tk-TM", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtTypeDate_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.2011');
        test.done();
    },
    testDateFmtTypeTime_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtTypeDateTime_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.2011, 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtShortDateComponentsM_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtShortDateComponentsD_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtShortDateComponentsDM_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09');
        test.done();
    },
    testDateFmtShortDateComponentsMY_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '09.2011');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.2011');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09 P');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.2011 P');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 sentýabr pen');
        test.done();
    },
    testDateFmtFullDateComponentsY_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtFullDateComponentsM_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Sentýabr");
        test.done();
    },
    testDateFmtFullDateComponentsD_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtFullDateComponentsDM_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 sentýabr');
        test.done();
    },
    testDateFmtFullDateComponentsMY_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'sentýabr 2011');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 sentýabr 2011');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 sentýabr penşenbe');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 sentýabr 2011 penşenbe');
        test.done();
    },
    testDateFmtShortTimeComponentsS_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtShortTimeComponentsM_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtShortTimeComponentsH_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtShortTimeComponentsMS_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtShortTimeComponentsHM_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtShortTimeComponentsHMS_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtShortTimeComponentsHMA_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtShortTimeComponentsHMZ_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tk-TM",
            type: "time",
            time: "hmz",
            timezone: "Asia/Ashgabat"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +05");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tk-TM",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Ashgabat"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +05");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtShortTimeComponentsHMSZ_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tk-TM",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Ashgabat"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +05");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tk-TM",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Ashgabat"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +05");
        test.done();
    },
    testDateFmtFullTimeComponentsS_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtFullTimeComponentsM_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtFullTimeComponentsH_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtFullTimeComponentsMS_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtFullTimeComponentsHM_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtFullTimeComponentsHMS_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtFullTimeComponentsHMA_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtFullTimeComponentsHMZ_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tk-TM",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Ashgabat"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +05");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tk-TM",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Ashgabat"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +05");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
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
    testDateFmtFullTimeComponentsHMSZ_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tk-TM",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Ashgabat"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +05");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tk-TM",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Ashgabat"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +05");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tk-TM",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Ashgabat"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +05");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 sekuntdan");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 sekunt öň");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 minutdan");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 minut öň');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 sagatdan');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 sagat öň');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 günden');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 gün öň');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 hepdeden');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 hepde öň');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '16 aýdan');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 aý öň');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tk-TM",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 ýyldan');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_tk_TM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tk-TM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tk-TM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tk-TM",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '21 ýyl öň');
        test.done();
    }
};