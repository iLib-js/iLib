/*
 * testdatefmt_gu_IN.js - test the date formatter object in gujrati for India
 *
 * Copyright © 2013-2015,2017,2023 JEDLSoft
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

module.exports.testdatefmt_gu_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtINConstructorEmpty_gu_IN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "gu-IN"});

        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    testDateFmtINSimpleShort_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "short"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11");
        test.done();
    },
    testDateFmtINSimpleMedium_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "medium"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 સપ્ટે, 2011");
        test.done();
    },
    testDateFmtINSimpleLong_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "long"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 સપ્ટેમ્બર, 2011");
        test.done();
    },
    testDateFmtINSimpleFull_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 સપ્ટેમ્બર, 2011");
        test.done();
    },
    testDateFmtINSimpleTimeShort_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45 PM");
        test.done();
    },
    testDateFmtINSimpleTimeShort_gu_IN1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45 PM");
        test.done();
    },
    testDateFmtINSimpleTimeMedium_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "medium", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45 PM");
        test.done();
    },
    testDateFmtINSimpleTimeLong_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "long", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45 PM");
        test.done();
    },
    testDateFmtINSimpleTimeFull_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45 PM");
        test.done();
    },
    testDateFmtINDateTimeSimpleShort_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "short", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11 01:45 PM");
        test.done();
    },
    testDateFmtINDateTimeSimpleMedium_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "medium", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 સપ્ટે, 2011 01:45 PM");
        test.done();
    },
    testDateFmtINDateTimeSimpleLong_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "long", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 સપ્ટેમ્બર, 2011 એ 01:45 PM વાગ્યે");
        test.done();
    },
    testDateFmtINDateTimeSimpleFull_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 સપ્ટેમ્બર, 2011 એ 01:45 PM વાગ્યે");
        test.done();
    },
    testDateFmtINTemplateCalendar_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new JulianDate({
            locale: "gu-IN",
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
    testDateFmtINTemplateClock12SwitchHH_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", clock: "12", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINTemplateClock12Switchkk_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", clock: "12", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINTemplateClock24Switchhh_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", clock: "24", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINTemplateClock24SwitchKK_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", clock: "24", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINTypeDate_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "date"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINTypeTime_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45 PM");
        test.done();
    },
    testDateFmtINTypeDateTime_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11 01:45 PM");
        test.done();
    },
    testDateFmtINShortDateComponentsY_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINShortDateComponentsM_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9");
        test.done();
    },
    testDateFmtINShortDateComponentsN_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", date: "n"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "સ");
        test.done();
    },
    testDateFmtINShortDateComponentsD_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINShortDateComponentsDM_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9");
        test.done();
    },
    testDateFmtINShortDateComponentsMY_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/11");
        test.done();
    },
    testDateFmtINShortDateComponentsDMY_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINShortDateComponentsWDM_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ગુ, 29/9");
        test.done();
    },
    testDateFmtINShortDateComponentsWDMY_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ગુ, 29/9/11");
        test.done();
    },
    testDateFmtINFullDateComponentsY_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINFullDateComponentsM_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "સપ્ટેમ્બર");
        test.done();
    },
    testDateFmtINFullDateComponentsD_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINFullDateComponentsDM_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 સપ્ટેમ્બર");
        test.done();
    },
    testDateFmtINFullDateComponentsMY_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "સપ્ટેમ્બર, 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsDMY_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 સપ્ટેમ્બર, 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsWDM_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ગુરુવાર, 29 સપ્ટેમ્બર");
        test.done();
    },
    testDateFmtINFullDateComponentsWDMY_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ગુરુવાર, 29 સપ્ટેમ્બર, 2011");
        test.done();
    },
    testDateFmtINShortTimeComponentsS_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINShortTimeComponentsM_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINShortTimeComponentsH_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01");
        test.done();
    },
    testDateFmtINShortTimeComponentsHM_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time", time: "hm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMS_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time", time: "hms"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45:37");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMA_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45 PM");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMZ_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gu-IN",
            type: "time",
            time: "ahmsz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45:37 PM IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMAZ_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gu-IN",
            type: "time",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45:37 PM IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSA_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45:37 PM");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSZ_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gu-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45:37 PM IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSAZ_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gu-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45:37 PM IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsS_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time", length: "full", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINFullTimeComponentsM_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time", length: "full", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
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
    testDateFmtINFullTimeComponentsH_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time", length: "full", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01");
        test.done();
    },
    testDateFmtINFullTimeComponentsHM_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45 PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMS_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45:37 PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMA_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45 PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMAZ_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gu-IN",
            type: "time",
            length: "full",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45:37 PM IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSA_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45:37 PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSZ_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gu-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45:37 PM IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSAZ_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gu-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45:37 PM IST");
        test.done();
    },
    testDateFmtINWithTimeZoneAndNoDST_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gu-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45:37 PM IST");
        test.done();
    },
    testDateFmtFormatRelativeWitgunMinuteAfter_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 સેકંડમાં");
        test.done();
    },
    testDateFmtFormatRelativeWitgunMinuteBefore_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 સેકંડ પહેલાં");
        test.done();
    },
    testDateFmtFormatRelativeWitgunHourAfter_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 મિનિટમાં");
        test.done();
    },
    testDateFmtFormatRelativeWitgunHourBefore_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 મિનિટ પહેલાં");
        test.done();
    },
    testDateFmtFormatRelativeWitgunDayAfter_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 કલાકમાં");
        test.done();
    },
    testDateFmtFormatRelativeWitgunDayBefore_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 કલાક પહેલાં");
        test.done();
    },
    testDateFmtFormatRelativeWitgunFortnightAfter_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 દિવસમાં");
        test.done();
    },
    testDateFmtFormatRelativeWitgunFortnightBefore_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 દિવસ પહેલાં");
        test.done();
    },
    testDateFmtFormatRelativeWitgunQuarterAfter_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 અઠવાડિયામાં");
        test.done();
    },
    testDateFmtFormatRelativeWitgunQuarterBefore_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 અઠવાડિયા પહેલાં");
        test.done();
    },
    testDateFmtFormatRelativeWitgunTwoYearsAfter_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 મહિનામાં");
        test.done();
    },
    testDateFmtFormatRelativeWitgunTwoYearsBefore_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 મહિના પહેલાં");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gu-IN",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 વર્ષમાં");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_gu_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gu-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gu-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gu-IN",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 વર્ષ પહેલાં");
        test.done();
    }
};