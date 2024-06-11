/*
 * testdatefmtrange_uz_Cyrl_UZ.js - test the date range formatter object Uzbek/Uzbekistan for Cyrillic script
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

module.exports.testdatefmt_uz_Cyrl_UZ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_uz_Cyrl_UZ: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtSimpleMedium_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сен, 2011");
        test.done();
    },
    testDateFmtSimpleLong_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сентябр, 2011");
        test.done();
    },
    testDateFmtSimpleFull_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сентябр, 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtSimpleTimeMedium_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtSimpleTimeLong_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtSimpleTimeFull_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtDateTimeSimpleShort_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сен, 2011 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сентябр, 2011 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сентябр, 2011 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtTemplateClock12SwitchHH_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtTemplateClock12Switchkk_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtTemplateClock24Switchhh_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtTemplateClock24SwitchKK_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtTypeDate_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtTypeTime_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtTypeDateTime_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortDateComponentsM_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "се");
        test.done();
    },
    testDateFmtShortDateComponentsN_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortDateComponentsD_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortDateComponentsDM_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortDateComponentsMY_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortDateComponentsDMY_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortDateComponentsWDM_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "П, 29/09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "П, 29/09/11");
        test.done();
    },
    testDateFmtFullDateComponentsY_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtFullDateComponentsM_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "сентябр");
        test.done();
    },
    testDateFmtFullDateComponentsD_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtFullDateComponentsDM_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сентябр");
        test.done();
    },
    testDateFmtFullDateComponentsMY_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "сентябр, 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сентябр, 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "пайшанба, 29 сентябр");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "пайшанба, 29 сентябр, 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortTimeComponentsM_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortTimeComponentsH_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortTimeComponentsMS_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortTimeComponentsHM_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortTimeComponentsHMS_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortTimeComponentsHMA_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortTimeComponentsHMZ_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "uz-Cyrl-UZ",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortTimeComponentsHMAZ_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "uz-Cyrl-UZ",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortTimeComponentsHMSA_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortTimeComponentsHMSZ_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "uz-Cyrl-UZ",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtShortTimeComponentsHMSAZ_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "uz-Cyrl-UZ",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtFullTimeComponentsS_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtFullTimeComponentsM_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtFullTimeComponentsH_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtFullTimeComponentsMS_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtFullTimeComponentsHM_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtFullTimeComponentsHMS_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtFullTimeComponentsHMA_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtFullTimeComponentsHMZ_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "uz-Cyrl-UZ",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtFullTimeComponentsHMAZ_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "uz-Cyrl-UZ",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtFullTimeComponentsHMSA_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
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
    testDateFmtFormatRelativeWithinMinuteAfter_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 сониядан сўнг");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 сония олдин");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 дақиқадан сўнг");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 дақиқа олдин");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 соатдан сўнг");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 соат олдин");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 кундан сўнг");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 кун олдин");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 ҳафтадан сўнг");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 ҳафта олдин");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 ойдан сўнг");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 ой аввал");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 йилдан сўнг");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_uz_Cyrl_UZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uz-Cyrl-UZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "uz-Cyrl-UZ",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 йил аввал");
        test.done();
    }
};