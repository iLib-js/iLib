/*
 * testdatefmt_ps_AF.js - test the date formatter object in Pashto-Afghanistan
 *
 * Copyright © 2022, JEDLSoft
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

if (typeof(PersianDate) === "undefined") {
    var PersianDate = require("../../lib/PersianDate.js");
}

if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdatefmt_ps_AF = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_ps_AF: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ps-AF"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "short", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021/9/29');
        test.done();
    },
    testDateFmtSimpleMedium_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "medium", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021 لیندۍ 29');
        test.done();
    },
    testDateFmtSimpleLong_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "long", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'د 2021 د لیندۍ 29');
        test.done();
    },
    testDateFmtSimpleFull_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'د 2021 د لیندۍ 29');
        test.done();
    },
    testDateFmtSimpleTimeShort_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "short", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtSimpleTimeMedium_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "medium", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtSimpleTimeLong_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "long", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtSimpleTimeFull_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45');
        test.done();
    },
    testDateFmtDateTimeSimpleShort_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "short", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021/9/29 ‏13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "medium", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021 لیندۍ 29 ‏13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "long", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'د 2021 د لیندۍ 29 ‏13:45' );
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'د 2021 د لیندۍ 29 ‏13:45' );
        test.done();
    },
    testDateFmtTemplateCalendar_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", calendar: "julian", template: "yyyy-MM-dd", useNative: false});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ps-AF",
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
    testDateFmtTemplateCalendarIncompatibleDateType_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", calendar: "julian", template: "yyyy-MM-dd HH:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        // convert automatically to a Julian calendar date
        test.equal(fmt.format(date), '2021-09-29 13:45');
        test.done();
    },
    testDateFmtTemplateClock12SwitchHH_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", clock: "12", template: "HH:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
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
    testDateFmtTemplateClock12Switchkk_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", clock: "12", template: "kk:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
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
    testDateFmtTemplateClock24Switchhh_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", clock: "24", template: "hh:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
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
        var fmt = new DateFmt({locale: "ps-AF", clock: "24", template: "KK:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", template: "hh:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", template: "KK:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", template: "HH:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", template: "kk:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
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
    testDateFmtTypeDate_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "date", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021/9/29');
        test.done();
    },
    testDateFmtTypeTime_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtTypeDateTime_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021/9/29 ‏13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", date: "y", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2021');
        test.done();
    },
    testDateFmtShortDateComponentsM_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", date: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9');
        test.done();
    },
    testDateFmtShortDateComponentsD_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", date: "d", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
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
    testDateFmtShortDateComponentsDM_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", date: "dm", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏9/29');
        test.done();
    },
    testDateFmtShortDateComponentsMY_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", date: "my", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021/9');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", date: "dmy", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021/9/29');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", date: "wdm", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'T ‏9/29');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", date: "wdmy", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'T 2021/9/29');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", date: "wdm", length: "long", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'درېنۍ لیندۍ 29');
        test.done();
    },
    testDateFmtFullDateComponentsY_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", date: "y", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2021');
        test.done();
    },
    testDateFmtFullDateComponentsM_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", date: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'لیندۍ');
        test.done();
    },
    testDateFmtFullDateComponentsD_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", date: "d", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29');
        test.done();
    },
    testDateFmtFullDateComponentsDM_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", date: "dm", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'لیندۍ 29');
        test.done();
    },
    testDateFmtFullDateComponentsMY_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", date: "my", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'د 2021 د لیندۍ');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", date: "dmy", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'د 2021 د لیندۍ 29');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", date: "wdm", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'درېنۍ لیندۍ 29');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", date: "wdmy", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'درېنۍ د 2021 د لیندۍ 29');
        test.done();
    },
    testDateFmtShortTimeComponentsS_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", time: "s", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
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
    testDateFmtShortTimeComponentsM_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", time: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
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
    testDateFmtShortTimeComponentsH_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", time: "h", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13');
        test.done();
    },
    testDateFmtShortTimeComponentsMS_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", time: "ms", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '45:37');
        test.done();
    },
    testDateFmtShortTimeComponentsHM_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", time: "hm", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtShortTimeComponentsHMS_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", time: "hms", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37');
        test.done();
    },
    testDateFmtShortTimeComponentsHMA_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", time: "hma", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-AF",
            type: "time",
            time: "hmz",
            timezone: "Asia/Kabul",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45 (+0430)');
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-AF",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Kabul",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45 (+0430)');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", time: "hmsa", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-AF",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Kabul",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37 (+0430)');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-AF",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kabul",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37 (+0430)');
        test.done();
    },
    testDateFmtFullTimeComponentsS_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", length: "full", time: "s", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '37');
        test.done();
    },
    testDateFmtFullTimeComponentsM_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", length: "full", time: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '45');
        test.done();
    },
    testDateFmtFullTimeComponentsH_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", length: "full", time: "h", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13');
        test.done();
    },
    testDateFmtFullTimeComponentsMS_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", length: "full", time: "ms", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '45:37');
        test.done();
    },
    testDateFmtFullTimeComponentsHM_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", length: "full", time: "hm", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtFullTimeComponentsHMS_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", length: "full", time: "hms", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37');
        test.done();
    },
    testDateFmtFullTimeComponentsHMA_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", length: "full", time: "hma", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-AF",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Kabul",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45 (+0430)');
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-AF",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Kabul",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45 (+0430)');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", type: "time", length: "full", time: "hmsa", useNative: false});
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-AF",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Kabul",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37 (+0430)');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-AF",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kabul",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37 (+0430)');
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-AF",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Kabul",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "ps-AF",
            year: 2021,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37 (+0430)');
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var reference = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏په 30 ثانيو کې');
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var reference = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏30 ثانيې مخکې');
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var reference = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏په 10 دقيقو کې');
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var reference = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏10 دقيقې مخکې');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var reference = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏په 4 ساعتو کې');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var reference = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏4 ساعتونه مخکې');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var reference = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏په 4 ورځو کې');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var reference = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏4 ورځې مخکې');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var reference = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏په 9 اونيو کې');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var reference = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏9 اونۍ مخکې');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var reference = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new PersianDate({
            locale: "ps-AF",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏په 16 مياشتو کې');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var reference = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new PersianDate({
            locale: "ps-AF",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏14 مياشتې مخکې');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var reference = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new PersianDate({
            locale: "ps-AF",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏په 14 کالونو کې');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ps_AF: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-AF", length: "full", useNative: false});
        test.ok(fmt !== null);

        var reference = new PersianDate({
            locale: "ps-AF",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new PersianDate({
            locale: "ps-AF",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏21 کاله مخکې');
        test.done();
    }
};