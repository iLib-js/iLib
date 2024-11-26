/*
 * testdatefmt_tg_TJ.js - test the date formatter object in Tajik-Tajikistan
 *
 * Copyright © 2021, 2024 JEDLSoft
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

module.exports.testdatefmt_tg_TJ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_tg_TJ: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "tg-TJ"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtSimpleMedium_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Сен 2011");
        test.done();
    },
    testDateFmtSimpleLong_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Сентябр 2011");
        test.done();
    },
    testDateFmtSimpleFull_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Сентябр 2011');
        test.done();
    },
    testDateFmtSimpleTimeShort_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtSimpleTimeMedium_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtSimpleTimeLong_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtSimpleTimeFull_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtDateTimeSimpleShort_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09/11, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Сен 2011, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Сентябр 2011 соати 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Сентябр 2011 соати 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "tg-TJ",
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
    testDateFmtTemplateCalendarIncompatibleDateType_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtTemplateClock12SwitchHH_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtTemplateClock12Switchkk_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtTemplateClock24Switchhh_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
        var fmt = new DateFmt({locale: "tg-TJ", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtTypeDate_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09/11');
        test.done();
    },
    testDateFmtTypeTime_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtTypeDateTime_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09/11, 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortDateComponentsM_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortDateComponentsD_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortDateComponentsDM_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortDateComponentsMY_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '09/11');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09/11');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'П, 29/09');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'П, 29/09/11');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Пшб, 29 Сентябр');
        test.done();
    },
    testDateFmtFullDateComponentsY_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFullDateComponentsM_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Сентябр");
        test.done();
    },
    testDateFmtFullDateComponentsD_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFullDateComponentsDM_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Сентябр');
        test.done();
    },
    testDateFmtFullDateComponentsMY_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Сентябр 2011');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Сентябр 2011');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Панҷшанбе, 29 Сентябр');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Панҷшанбе, 29 Сентябр 2011');
        test.done();
    },
    testDateFmtShortTimeComponentsS_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortTimeComponentsM_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortTimeComponentsH_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortTimeComponentsMS_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortTimeComponentsHM_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortTimeComponentsHMS_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortTimeComponentsHMA_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortTimeComponentsHMZ_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tg-TJ",
            type: "time",
            time: "hmz",
            timezone: "Asia/Dushanbe"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortTimeComponentsHMAZ_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tg-TJ",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Dushanbe"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortTimeComponentsHMSA_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortTimeComponentsHMSZ_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tg-TJ",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Dushanbe"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtShortTimeComponentsHMSAZ_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tg-TJ",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Dushanbe"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFullTimeComponentsS_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFullTimeComponentsM_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFullTimeComponentsH_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFullTimeComponentsMS_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFullTimeComponentsHM_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFullTimeComponentsHMS_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFullTimeComponentsHMA_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFullTimeComponentsHMZ_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tg-TJ",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Dushanbe"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFullTimeComponentsHMAZ_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tg-TJ",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Dushanbe"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFullTimeComponentsHMSA_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFullTimeComponentsHMSZ_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tg-TJ",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Dushanbe"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFullTimeComponentsHMSAZ_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tg-TJ",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Dushanbe"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtWithTimeZoneAndNoDST_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "tg-TJ",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Dushanbe"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "tg-TJ",
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
    testDateFmtFormatRelativeWithinMinuteAfter_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пас аз 30 сония");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 сония пеш");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пас аз 10 дақиқа");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 дақиқа пеш');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'пас аз 4 соат');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 соат пеш');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'пас аз 4 рӯз');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 рӯз пеш');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'пас аз 9 ҳафта');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 ҳафта пеш');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'пас аз 16 моҳ');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 моҳ пеш');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'пас аз 14 сол');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_tg_TJ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "tg-TJ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "tg-TJ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "tg-TJ",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '21 сол пеш');
        test.done();
    }
};