/*
 * testdatefmt_ky_KG.js - test the date formatter object in Kyrgyz
 *
 * Copyright © 2020, JEDLSoft
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

module.exports.testdatefmt_ky_KG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_ky_KG: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ky-KG"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11");
        test.done();
    },
    testDateFmtSimpleMedium_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-ж., 29-сен.");
        test.done();
    },
    testDateFmtSimpleLong_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-ж., 29-сентябрь");
        test.done();
    },
    testDateFmtSimpleFull_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011-ж., 29-сентябрь');
        test.done();
    },
    testDateFmtSimpleTimeShort_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtSimpleTimeMedium_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtSimpleTimeLong_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtSimpleTimeFull_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtDateTimeSimpleShort_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/11 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011-ж., 29-сен. 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011-ж., 29-сентябрь 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011-ж., 29-сентябрь 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ky-KG",
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
    testDateFmtTemplateCalendarIncompatibleDateType_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtTemplateClock12SwitchHH_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtTemplateClock12Switchkk_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtTemplateClock24Switchhh_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
        var fmt = new DateFmt({locale: "ky-KG", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
        var fmt = new DateFmt({locale: "ky-KG", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtTypeDate_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/11');
        test.done();
    },
    testDateFmtTypeTime_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtTypeDateTime_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/11 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtShortDateComponentsM_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "С");
        test.done();
    },
    testDateFmtShortDateComponentsN_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'с');
        test.done();
    },
    testDateFmtShortDateComponentsD_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtShortDateComponentsDM_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9');
        test.done();
    },
    testDateFmtShortDateComponentsMY_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/11');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/11');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9, Б');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/11, Б');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29-сентябрь, бейш.');
        test.done();
    },
    testDateFmtFullDateComponentsY_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtFullDateComponentsM_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Сентябрь");
        test.done();
    },
    testDateFmtFullDateComponentsD_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtFullDateComponentsDM_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29-сентябрь');
        test.done();
    },
    testDateFmtFullDateComponentsMY_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011-ж., сентябрь');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011-ж., 29-сентябрь');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29-сентябрь, бейшемби');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011-ж., 29-сентябрь, бейшемби');
        test.done();
    },
    testDateFmtShortTimeComponentsS_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtShortTimeComponentsM_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtShortTimeComponentsH_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtShortTimeComponentsMS_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtShortTimeComponentsHM_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtShortTimeComponentsHMS_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtShortTimeComponentsHMA_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtShortTimeComponentsHMZ_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ky-KG",
            type: "time",
            time: "hmz",
            timezone: "Asia/Bishkek"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +06");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ky-KG",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Bishkek"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +06");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtShortTimeComponentsHMSZ_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ky-KG",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Bishkek"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +06");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ky-KG",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Bishkek"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +06");
        test.done();
    },
    testDateFmtFullTimeComponentsS_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtFullTimeComponentsM_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtFullTimeComponentsH_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtFullTimeComponentsMS_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtFullTimeComponentsHM_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtFullTimeComponentsHMS_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtFullTimeComponentsHMA_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtFullTimeComponentsHMZ_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ky-KG",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Bishkek"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +06");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ky-KG",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Bishkek"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +06");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
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
    testDateFmtFullTimeComponentsHMSZ_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ky-KG",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Bishkek"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +06");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ky-KG",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Bishkek"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +06");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ky-KG",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Bishkek"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +06");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 секунддан кийин");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 секунд мурун");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 мүнөттөн кийин");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 мүнөт мурун');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 сааттан кийин');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 саат мурун');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 күндөн кийин');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date),  '4 күн мурун');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 аптадан кийин');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 апта мурун');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '16 айдан кийин');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 ай мурун');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ky-KG",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 жылдан кийин');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ky_KG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ky-KG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ky-KG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ky-KG",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '21 жыл мурун');
        test.done();
    }
};