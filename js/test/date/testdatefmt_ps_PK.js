/*
 * testdatefmt_ps_PK.js - test the date formatter object in Pashto-Pakistan
 *
 * Copyright © 2022, 2024 JEDLSoft
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

module.exports.testdatefmt_ps_PK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_ps_PK: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ps-PK"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "short", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtSimpleMedium_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "medium", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021 سېپتمبر 29');
        test.done();
    },
    testDateFmtSimpleLong_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "long", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021 سېپتمبر 29');
        test.done();
    },
    testDateFmtSimpleFull_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021 د سېپتمبر 29');
        test.done();
    },
    testDateFmtSimpleTimeShort_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "short", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45 غ.و.');
        test.done();
    },
    testDateFmtSimpleTimeMedium_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "medium", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45 غ.و.');
        test.done();
    },
    testDateFmtSimpleTimeLong_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "long", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45 غ.و.');
        test.done();
    },
    testDateFmtSimpleTimeFull_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45 غ.م.');
        test.done();
    },
    testDateFmtDateTimeSimpleShort_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "short", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021/9/29 ‏1:45 غ.و.');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "medium", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021 سېپتمبر 29 ‏1:45 غ.و.' );
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "long", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021 سېپتمبر 29 ‏1:45 غ.و.');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021 د سېپتمبر 29 ‏1:45 غ.و.');
        test.done();
    },
    testDateFmtTemplateCalendar_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", calendar: "julian", template: "yyyy-MM-dd", useNative: false});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ps-PK",
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
    testDateFmtTemplateCalendarIncompatibleDateType_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", calendar: "julian", template: "yyyy-MM-dd HH:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtTemplateClock12SwitchHH_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", clock: "12", template: "HH:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtTemplateClock12Switchkk_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", clock: "12", template: "kk:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtTemplateClock24Switchhh_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", clock: "24", template: "hh:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
        var fmt = new DateFmt({locale: "ps-PK", clock: "24", template: "KK:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", template: "hh:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '01:45');
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", template: "KK:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '01:45');
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", template: "HH:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", template: "kk:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtTypeDate_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "date", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtTypeTime_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45 غ.و.');
        test.done();
    },
    testDateFmtTypeDateTime_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021/9/29 ‏1:45 غ.و.');
        test.done();
    },
    testDateFmtShortDateComponentsY_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", date: "y", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtShortDateComponentsM_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", date: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtShortDateComponentsD_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", date: "d", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtShortDateComponentsDM_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", date: "dm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtShortDateComponentsMY_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", date: "my", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtShortDateComponentsDMY_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", date: "dmy", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtShortDateComponentsWDM_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", date: "wdm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'W د ‏9/29');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", date: "wdmy", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'W د 2021/9/29');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", date: "wdm", length: "long", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'څلرنۍ د سېپتمبر 29');
        test.done();
    },
    testDateFmtFullDateComponentsY_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full", date: "y", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFullDateComponentsM_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full", date: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'سپتمبر');
        test.done();
    },
    testDateFmtFullDateComponentsD_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full", date: "d", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFullDateComponentsDM_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full", date: "dm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'سېپتمبر 29');
        test.done();
    },
    testDateFmtFullDateComponentsMY_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full", date: "my", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021 د سېپتمبر');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full", date: "dmy", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏2021 د سېپتمبر 29');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full", date: "wdm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'څلرنۍ د سېپتمبر 29');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full", date: "wdmy", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'څلرنۍ د 2021 د سېپتمبر 29');
        test.done();
    },
    testDateFmtShortTimeComponentsS_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", time: "s", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtShortTimeComponentsM_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", time: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtShortTimeComponentsH_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", time: "h", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1');
        test.done();
    },
    testDateFmtShortTimeComponentsMS_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", time: "ms", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtShortTimeComponentsHM_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", time: "hm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date),'‏1:45');
        test.done();
    },
    testDateFmtShortTimeComponentsHMS_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", time: "hms", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45:37');
        test.done();
    },
    testDateFmtShortTimeComponentsHMA_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", time: "hma", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45 غ.و.');
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-PK",
            type: "time",
            time: "hmz",
            timezone: "Asia/Karachi",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45 PKST');
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-PK",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Karachi",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45 غ.و. PKST');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", time: "hmsa", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45:37 غ.و.');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-PK",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Karachi",
            useNative:false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45:37 PKST');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-PK",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Karachi",
            useNative:false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45:37 غ.و. PKST');
        test.done();
    },
    testDateFmtFullTimeComponentsS_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", length: "full", time: "s", useNative:false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFullTimeComponentsM_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", length: "full", time: "m", useNative:false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFullTimeComponentsH_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", length: "full", time: "h", useNative:false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1");
        test.done();
    },
    testDateFmtFullTimeComponentsMS_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", length: "full", time: "ms", useNative:false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFullTimeComponentsHM_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", length: "full", time: "hm", useNative:false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45');
        test.done();
    },
    testDateFmtFullTimeComponentsHMS_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", length: "full", time: "hms", useNative:false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45:37');
        test.done();
    },
    testDateFmtFullTimeComponentsHMA_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", length: "full", time: "hma", useNative:false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45 غ.و.');
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-PK",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Karachi",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45 PKST');
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-PK",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Karachi",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45 غ.و. PKST');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", type: "time", length: "full", time: "hmsa", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45:37 غ.و.' );
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-PK",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Karachi",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45:37 PKST');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-PK",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Karachi",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45:37 غ.و. PKST');
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ps-PK",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Karachi",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2021,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏1:45:37 PKST');
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date),'‏په 30 ثانيو کې');
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFormatRelativeWithinHourAfter_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFormatRelativeWithinHourBefore_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFormatRelativeWithinDayAfter_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFormatRelativeWithinDayBefore_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏4 ساعتونه مخکې' );
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFormatRelativeWithinFortnightBefore_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFormatRelativeWithinQuarterAfter_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFormatRelativeWithinQuarterBefore_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFormatRelativeWithinTwoYearsAfter_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFormatRelativeWithinTwoYearsBefore_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ps-PK",
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
    testDateFmtFormatRelativeYearsAfter_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ps-PK",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏په 14 کالونو کے');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ps_PK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ps-PK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ps-PK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ps-PK",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏21 کاله مخکے');
        test.done();
    }
};
