/*
 * testdatefmt_ne_NP.js - test the date formatter object in Nepali-Nepal
 *
 * Copyright © 2020,2023 JEDLSoft
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

module.exports.testdatefmt_ne_NP = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_ne_NP: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ne-NP"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "short", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11/9/29");
        test.done();
    },
    testDateFmtSimpleMedium_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "medium", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 सेप्टेम्बर 29');
        test.done();
    },
    testDateFmtSimpleLong_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "long", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 सेप्टेम्बर 29');
        test.done();
    },
    testDateFmtSimpleFull_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 सेप्टेम्बर 29');
        test.done();
    },
    testDateFmtSimpleTimeShort_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "short", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtSimpleTimeMedium_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "medium", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtSimpleTimeLong_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "long", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtSimpleTimeFull_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtDateTimeSimpleShort_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "short", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '11/9/29, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "medium", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 सेप्टेम्बर 29, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "long", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 सेप्टेम्बर 29: 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 सेप्टेम्बर 29: 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", calendar: "julian", template: "yyyy-MM-dd", useNative: false});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ne-NP",
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
    testDateFmtTemplateCalendarIncompatibleDateType_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", calendar: "julian", template: "yyyy-MM-dd HH:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtTemplateClock12SwitchHH_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", clock: "12", template: "HH:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtTemplateClock12Switchkk_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", clock: "12", template: "kk:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtTemplateClock24Switchhh_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", clock: "24", template: "hh:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
        var fmt = new DateFmt({locale: "ne-NP", clock: "24", template: "KK:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", template: "hh:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
        var fmt = new DateFmt({locale: "ne-NP", template: "KK:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", template: "HH:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", template: "kk:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtTypeDate_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "date", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '11/9/29');
        test.done();
    },
    testDateFmtTypeTime_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtTypeDateTime_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '11/9/29, 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", date: "y", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtShortDateComponentsM_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", date: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "सेप");
        test.done();
    },
    testDateFmtShortDateComponentsN_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", date: "n", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'स');
        test.done();
    },
    testDateFmtShortDateComponentsD_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", date: "d", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtShortDateComponentsDM_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", date: "dm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/29');
        test.done();
    },
    testDateFmtShortDateComponentsMY_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", date: "my", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '11/9');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", date: "dmy", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '11/9/29');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", date: "wdm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/29, बि');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", date: "wdmy", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '11/9/29, बि');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", date: "wdm", length: "long", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'सेप्टेम्बर 29, बिहि');
        test.done();
    },
    testDateFmtFullDateComponentsY_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full", date: "y", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtFullDateComponentsM_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full", date: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "सेप्टेम्बर");
        test.done();
    },
    testDateFmtFullDateComponentsD_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full", date: "d", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtFullDateComponentsDM_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full", date: "dm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'सेप्टेम्बर 29');
        test.done();
    },
    testDateFmtFullDateComponentsMY_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full", date: "my", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 सेप्टेम्बर');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full", date: "dmy", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 सेप्टेम्बर 29');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full", date: "wdm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'सेप्टेम्बर 29, बिहिबार');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full", date: "wdmy", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 सेप्टेम्बर 29, बिहिबार');
        test.done();
    },
    testDateFmtShortTimeComponentsS_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", time: "s", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtShortTimeComponentsM_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", time: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtShortTimeComponentsH_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", time: "h", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtShortTimeComponentsMS_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", time: "ms", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtShortTimeComponentsHM_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", time: "hm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtShortTimeComponentsHMS_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", time: "hms", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtShortTimeComponentsHMA_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", time: "hma", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtShortTimeComponentsHMZ_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ne-NP",
            type: "time",
            time: "hmz",
            timezone: "Asia/Kathmandu",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +0545");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ne-NP",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Kathmandu",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +0545");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", time: "hmsa", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtShortTimeComponentsHMSZ_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ne-NP",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Kathmandu",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +0545");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ne-NP",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kathmandu",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +0545");
        test.done();
    },
    testDateFmtFullTimeComponentsS_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", length: "full", time: "s", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtFullTimeComponentsM_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", length: "full", time: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtFullTimeComponentsH_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", length: "full", time: "h", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtFullTimeComponentsMS_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", length: "full", time: "ms", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtFullTimeComponentsHM_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", length: "full", time: "hm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtFullTimeComponentsHMS_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", length: "full", time: "hms", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtFullTimeComponentsHMA_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", length: "full", time: "hma", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtFullTimeComponentsHMZ_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ne-NP",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Kathmandu",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +0545");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ne-NP",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Kathmandu",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +0545");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", type: "time", length: "full", time: "hmsa", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
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
    testDateFmtFullTimeComponentsHMSZ_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ne-NP",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Kathmandu",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +0545");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ne-NP",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kathmandu",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +0545");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ne-NP",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Kathmandu",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +0545");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '30 सेकेन्डमा');
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '30 सेकेन्ड पहिले');
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 मिनेटमा');
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 मिनेट पहिले');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 घण्टामा');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 घण्टा पहिले');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 दिनमा');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 दिन पहिले');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 हप्तामा');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 हप्ता पहिले');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '16 महिनामा');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 महिना पहिले');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ne-NP",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 वर्षमा');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ne_NP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ne-NP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ne-NP",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ne-NP",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '21 वर्ष अघि');
        test.done();
    }
};