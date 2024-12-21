/*
 * testdatefmt_ru_RU.js - test the date formatter object in Russian
 *
 * Copyright © 2012-2015,2017,2021,2023 JEDLSoft
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

module.exports.testdatefmt_ru_RU = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_ru_RU: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ru-RU"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtSimpleMedium_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сент. 2011 г.");
        test.done();
    },
    testDateFmtSimpleLong_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сентября 2011 г.");
        test.done();
    },
    testDateFmtSimpleFull_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сентября 2011 г.");
        test.done();
    },
    testDateFmtSimpleTimeShort_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtSimpleTimeMedium_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtSimpleTimeLong_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtSimpleTimeFull_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtDateTimeSimpleShort_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сент. 2011 г., 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сентября 2011 г. в 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сентября 2011 г. в 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ru-RU",
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
    testDateFmtTemplateCalendarIncompatibleDateType_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtTemplateClock12SwitchHH_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtTemplateClock12Switchkk_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtTemplateClock24Switchhh_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtTemplateClock24SwitchKK_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtTypeDate_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtTypeTime_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtTypeDateTime_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011, 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtShortDateComponentsM_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtShortDateComponentsN_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtShortDateComponentsD_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtShortDateComponentsDM_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09");
        test.done();
    },
    testDateFmtShortDateComponentsMY_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09.2011");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtShortDateComponentsWDM_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Ч, 29.09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Ч, 29.09.2011");
        test.done();
    },
    testDateFmtFullDateComponentsY_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtFullDateComponentsM_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "сентябрь");
        test.done();
    },
    testDateFmtFullDateComponentsD_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtFullDateComponentsDM_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сентября");
        test.done();
    },
    testDateFmtFullDateComponentsMY_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "сентябрь 2011 г.");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 сентября 2011 г.");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "четверг, 29 сентября");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "четверг, 29 сентября 2011 г.");
        test.done();
    },
    testDateFmtShortTimeComponentsS_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtShortTimeComponentsM_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtShortTimeComponentsH_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtShortTimeComponentsMS_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtShortTimeComponentsHM_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtShortTimeComponentsHMS_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtShortTimeComponentsHMA_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtShortTimeComponentsHMZ_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ru-RU",
            type: "time",
            time: "hmz",
            timezone: "Europe/Moscow"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 MSK");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ru-RU",
            type: "time",
            time: "hmaz",
            timezone: "Europe/Moscow"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 MSK");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtShortTimeComponentsHMSZ_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ru-RU",
            type: "time",
            time: "hmsz",
            timezone: "Europe/Moscow"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 MSK");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ru-RU",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/Moscow"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 MSK");
        test.done();
    },
    testDateFmtFullTimeComponentsS_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtFullTimeComponentsM_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtFullTimeComponentsH_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtFullTimeComponentsMS_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtFullTimeComponentsHM_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtFullTimeComponentsHMS_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtFullTimeComponentsHMA_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtFullTimeComponentsHMZ_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ru-RU",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/Moscow"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 MSK");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ru-RU",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/Moscow"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 MSK");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
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
    testDateFmtFullTimeComponentsHMSZ_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ru-RU",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Moscow"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 MSK");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ru-RU",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/Moscow"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 MSK");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ru-RU",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Moscow"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 MSK");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "через 30 секунд");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 секунд назад");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "через 10 минут");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 минут назад");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "через 4 часа");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 часа назад");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "через 4 дня");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 дня назад");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "через 9 недель");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 недель назад");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "через 16 месяцев");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 месяцев назад");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ru-RU",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "через 14 лет");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ru_RU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ru-RU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ru-RU",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ru-RU",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 год назад");
        test.done();
    }
};