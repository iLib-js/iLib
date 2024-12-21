/*
 * testdatefmt_pa_IN.js - test the date formatter object in Punjabi for India
 *
 * Copyright © 2013-2015,2017, JEDLSoft
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

module.exports.testdatefmt_pa_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtINConstructorEmpty_pa_IN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "pa-IN"});

        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    testDateFmtINSimpleShort_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "short"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINSimpleMedium_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "medium"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ਸਤੰ 2011");
        test.done();
    },
    testDateFmtINSimpleLong_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "long"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ਸਤੰਬਰ 2011");
        test.done();
    },
    testDateFmtINSimpleFull_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ਸਤੰਬਰ 2011");
        test.done();
    },
    testDateFmtINSimpleTimeShort_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINSimpleTimeShort_pa_IN1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINSimpleTimeMedium_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "medium", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINSimpleTimeLong_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "long", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINSimpleTimeFull_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINDateTimeSimpleShort_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "short", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11, 1:45 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINDateTimeSimpleMedium_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "medium", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ਸਤੰ 2011, 1:45 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINDateTimeSimpleLong_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "long", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ਸਤੰਬਰ 2011 1:45 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINDateTimeSimpleFull_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ਸਤੰਬਰ 2011 1:45 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINTemplateCalendar_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new JulianDate({
            locale: "pa-IN",
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
    testDateFmtINTemplateClock12SwitchHH_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", clock: "12", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINTemplateClock12Switchkk_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", clock: "12", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINTemplateClock24Switchhh_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", clock: "24", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINTemplateClock24SwitchKK_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", clock: "24", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINTypeDate_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "date"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINTypeTime_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINTypeDateTime_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11, 1:45 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINShortDateComponentsY_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINShortDateComponentsM_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINShortDateComponentsN_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", date: "n"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ਸ");
        test.done();
    },
    testDateFmtINShortDateComponentsD_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINShortDateComponentsDM_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINShortDateComponentsMY_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINShortDateComponentsDMY_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINShortDateComponentsWDM_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ਵੀ, 29/9");
        test.done();
    },
    testDateFmtINShortDateComponentsWDMY_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ਵੀ, 29/9/11");
        test.done();
    },
    testDateFmtINFullDateComponentsY_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINFullDateComponentsM_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ਸਤੰਬਰ");
        test.done();
    },
    testDateFmtINFullDateComponentsD_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINFullDateComponentsDM_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ਸਤੰਬਰ");
        test.done();
    },
    testDateFmtINFullDateComponentsMY_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ਸਤੰਬਰ 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsDMY_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ਸਤੰਬਰ 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsWDM_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ਵੀਰਵਾਰ, 29 ਸਤੰਬਰ");
        test.done();
    },
    testDateFmtINFullDateComponentsWDMY_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ਵੀਰਵਾਰ, 29 ਸਤੰਬਰ 2011");
        test.done();
    },
    testDateFmtINShortTimeComponentsS_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINShortTimeComponentsM_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINShortTimeComponentsH_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
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
    testDateFmtINShortTimeComponentsHM_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time", time: "hm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMS_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time", time: "hms"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMA_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMZ_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pa-IN",
            type: "time",
            time: "ahmsz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ਬਾ.ਦੁ. IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMAZ_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pa-IN",
            type: "time",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ਬਾ.ਦੁ. IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSA_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSZ_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pa-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ਬਾ.ਦੁ. IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSAZ_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pa-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ਬਾ.ਦੁ. IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsS_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time", length: "full", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINFullTimeComponentsM_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time", length: "full", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
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
    testDateFmtINFullTimeComponentsH_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time", length: "full", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
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



    testDateFmtINFullTimeComponentsHM_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMS_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMA_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ਬਾ.ਦੁ.");
        test.done();
    },



    testDateFmtINFullTimeComponentsHMAZ_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pa-IN",
            type: "time",
            length: "full",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ਬਾ.ਦੁ. IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSA_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ਬਾ.ਦੁ.");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSZ_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pa-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ਬਾ.ਦੁ. IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSAZ_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pa-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ਬਾ.ਦੁ. IST");
        test.done();
    },
    testDateFmtINWithTimeZoneAndNoDST_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pa-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ਬਾ.ਦੁ. IST");
        test.done();
    },
    //should be uncommented after getting the translations for punjabi
    /*
    testDateFmtFormatRelativeWithinMinuteAfter_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 सेकंड में");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 सेकंड पहले");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 मिनट में");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 मिनट पहले");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 घंटे में");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 घंटे पहले");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 दिन में");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 दिन पहले");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 सप्ताह में");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 सप्ताह पहले");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 महीने में");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 महीने पहले");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "pa-IN",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 साल में");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_pa_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pa-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "pa-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "pa-IN",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 साल पहले");
        test.done();
    }
    */
};