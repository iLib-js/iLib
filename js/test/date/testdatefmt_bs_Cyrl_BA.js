/*
 * testdatefmt_bs_Cyrl_BA.js - test the date formatter object in Cyrillic Bosnian
 *
 * Copyright © 2012-2015,2017-2018,2020 JEDLSoft
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

module.exports.testdatefmt_bs_Cyrl_BA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_bs_Cyrl_BA: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtSimpleMedium_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtSimpleLong_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. септембар 2011.");
        test.done();
    },
    testDateFmtSimpleFull_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. септембар 2011.");
        test.done();
    },
    testDateFmtSimpleTimeShort_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtSimpleTimeMedium_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtSimpleTimeLong_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtSimpleTimeFull_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtDateTimeSimpleShort_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtDateTimeSimpleMedium_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtDateTimeSimpleLong_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. септембар 2011. 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. септембар 2011. 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtTemplateClock12SwitchHH_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtTemplateClock12Switchkk_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtTemplateClock24Switchhh_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtTemplateClock24SwitchKK_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtTypeDate_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtTypeTime_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtTypeDateTime_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortDateComponentsY_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortDateComponentsM_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "с");
        test.done();
    },
    testDateFmtShortDateComponentsN_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "с");
        test.done();
    },
    testDateFmtShortDateComponentsD_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortDateComponentsDM_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortDateComponentsMY_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortDateComponentsDMY_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortDateComponentsWDM_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ч, 29.9");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ч, 29.9.11.");
        test.done();
    },
    testDateFmtFullDateComponentsY_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFullDateComponentsM_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "септембар");
        test.done();
    },
    testDateFmtFullDateComponentsD_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFullDateComponentsDM_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. септембар");
        test.done();
    },
    testDateFmtFullDateComponentsMY_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "септембар 2011.");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. септембар 2011.");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "четвртак, 29. септембар");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "четвртак, 29. септембар 2011.");
        test.done();
    },
    testDateFmtShortTimeComponentsS_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortTimeComponentsM_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortTimeComponentsH_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortTimeComponentsMS_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortTimeComponentsHM_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortTimeComponentsHMS_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortTimeComponentsHMA_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortTimeComponentsHMZ_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Cyrl-BA",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortTimeComponentsHMAZ_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Cyrl-BA",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortTimeComponentsHMSA_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortTimeComponentsHMSZ_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Cyrl-BA",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtShortTimeComponentsHMSAZ_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Cyrl-BA",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFullTimeComponentsS_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFullTimeComponentsM_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFullTimeComponentsH_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFullTimeComponentsMS_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFullTimeComponentsHM_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFullTimeComponentsHMS_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFullTimeComponentsHMA_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFullTimeComponentsHMZ_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Cyrl-BA",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFullTimeComponentsHMAZ_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Cyrl-BA",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFullTimeComponentsHMSA_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFullTimeComponentsHMSZ_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Cyrl-BA",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFullTimeComponentsHMSAZ_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Cyrl-BA",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtWithTimeZoneAndNoDST_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Cyrl-BA",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
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
    testDateFmtFormatRelativeWithinMinuteAfter_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 30 секунди");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'прије 30 секунди');
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 10 минута");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'прије 10 минута');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 4 сата");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'прије 4 сата');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 4 дана");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'прије 4 дана');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'за 9 седмица');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'прије 9 седмица');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'за 16 мјесеци');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'прије 14 мјесеци');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 14 година");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Cyrl-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Cyrl-BA",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'прије 21 годину');
        test.done();
    }
};