/*
 * testdatefmt_bs_Latn_BA.js - test the date formatter object in Latin Bosnian
 *
 * Copyright © 2012-2015, 2017-2018, 2020, 2023-2024 JEDLSoft
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

module.exports.testdatefmt_bs_Latn_BA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_bs_Latn_BA: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "bs-Latn-BA"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 2011.");
        test.done();
    },
    testDateFmtSimpleMedium_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. sep 2011.");
        test.done();
    },
    testDateFmtSimpleLong_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtSimpleFull_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtSimpleTimeShort_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtSimpleTimeMedium_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtSimpleTimeLong_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtSimpleTimeFull_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtDateTimeSimpleShort_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 2011. u 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. sep 2011. u 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });

        test.equal(fmt.format(date), "29. septembar 2011. u 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. septembar 2011. u 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtTemplateClock12SwitchHH_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtTemplateClock12Switchkk_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtTemplateClock24Switchhh_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtTemplateClock24SwitchKK_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtTypeDate_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 2011.");
        test.done();
    },
    testDateFmtTypeTime_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtTypeDateTime_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 2011. u 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortDateComponentsM_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortDateComponentsN_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortDateComponentsD_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortDateComponentsDM_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9");
        test.done();
    },
    testDateFmtShortDateComponentsMY_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9. 2011.");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 2011.");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Č, 29. 9");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Č, 29. 9. 2011.");
        test.done();
    },
    testDateFmtFullDateComponentsY_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullDateComponentsM_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullDateComponentsD_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullDateComponentsDM_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullDateComponentsMY_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullDateComponentsDMY_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullDateComponentsWDM_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullDateComponentsWDMY_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortTimeComponentsS_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortTimeComponentsM_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortTimeComponentsH_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortTimeComponentsMS_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortTimeComponentsHM_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortTimeComponentsHMS_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortTimeComponentsHMA_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortTimeComponentsHMZ_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Latn-BA",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortTimeComponentsHMAZ_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Latn-BA",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortTimeComponentsHMSA_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortTimeComponentsHMSZ_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Latn-BA",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtShortTimeComponentsHMSAZ_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Latn-BA",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullTimeComponentsS_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullTimeComponentsM_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullTimeComponentsH_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullTimeComponentsMS_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullTimeComponentsHM_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullTimeComponentsHMS_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullTimeComponentsHMA_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullTimeComponentsHMZ_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Latn-BA",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullTimeComponentsHMAZ_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Latn-BA",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullTimeComponentsHMSA_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullTimeComponentsHMSZ_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Latn-BA",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFullTimeComponentsHMSAZ_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Latn-BA",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtWithTimeZoneAndNoDST_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bs-Latn-BA",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bs-Latn-BA",
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
    testDateFmtFormatRelativeWithinMinuteAfter_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 30 sekundi");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "prije 30 sekundi");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 10 minuta");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "prije 10 minuta");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 4 sata");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "prije 4 sata");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 4 dana");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "prije 4 dana");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 9 sedmica");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "prije 9 sedmica");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 16 mjeseci");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "prije 14 mjeseci");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 14 godina");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_bs_Latn_BA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bs-Latn-BA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bs-Latn-BA",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "prije 21 godinu");
        test.done();
    }
};
