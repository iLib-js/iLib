/*
 * testdatefmt_hi_IN.js - test the date formatter object in Hindi for India
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

module.exports.testdatefmt_hi_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtINConstructorEmpty_hi_IN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "hi-IN"});

        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    testDateFmtINSimpleShort_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "short"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINSimpleMedium_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "medium"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 सित॰ 2011");
        test.done();
    },
    testDateFmtINSimpleLong_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "long"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 सितंबर 2011");
        test.done();
    },
    testDateFmtINSimpleFull_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 सितंबर 2011");
        test.done();
    },
    testDateFmtINSimpleTimeShort_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45 pm');
        test.done();
    },
    testDateFmtINSimpleTimeShort_hi_IN1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45 pm');
        test.done();
    },
    testDateFmtINSimpleTimeMedium_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "medium", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45 pm');
        test.done();
    },
    testDateFmtINSimpleTimeLong_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "long", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45 pm');
        test.done();
    },
    testDateFmtINSimpleTimeFull_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45 pm');
        test.done();
    },
    testDateFmtINDateTimeSimpleShort_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "short", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11, 1:45 pm");
        test.done();
    },
    testDateFmtINDateTimeSimpleMedium_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "medium", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 सित॰ 2011, 1:45 pm");
        test.done();
    },
    testDateFmtINDateTimeSimpleLong_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "long", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 सितंबर 2011 को 1:45 pm बजे");
        test.done();
    },
    testDateFmtINDateTimeSimpleFull_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 सितंबर 2011 को 1:45 pm बजे");
        test.done();
    },
    testDateFmtINTemplateCalendar_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", calendar: "julian", template: "yyyy-MM-dd", timezone: "local"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new JulianDate({
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
    testDateFmtINTemplateClock12SwitchHH_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", clock: "12", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINTemplateClock12Switchkk_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", clock: "12", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINTemplateClock24Switchhh_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", clock: "24", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINTemplateClock24SwitchKK_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", clock: "24", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINTypeDate_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "date"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINTypeTime_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm");
        test.done();
    },
    testDateFmtINTypeDateTime_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11, 1:45 pm");
        test.done();
    },
    testDateFmtINShortDateComponentsY_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINShortDateComponentsM_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINShortDateComponentsN_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", date: "n"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "स");
        test.done();
    },
    testDateFmtINShortDateComponentsD_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINShortDateComponentsDM_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINShortDateComponentsMY_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINShortDateComponentsDMY_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINShortDateComponentsWDM_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "गु, 29/9");
        test.done();
    },
    testDateFmtINShortDateComponentsWDMY_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "गु, 29/9/11");
        test.done();
    },
    testDateFmtINFullDateComponentsY_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINFullDateComponentsM_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "सितंबर");
        test.done();
    },
    testDateFmtINFullDateComponentsD_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINFullDateComponentsDM_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 सितंबर");
        test.done();
    },
    testDateFmtINFullDateComponentsMY_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "सितंबर 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsDMY_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 सितंबर 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsWDM_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "गुरुवार, 29 सितंबर");
        test.done();
    },
    testDateFmtINFullDateComponentsWDMY_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "गुरुवार, 29 सितंबर 2011");
        test.done();
    },
    testDateFmtINShortTimeComponentsS_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINShortTimeComponentsM_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINShortTimeComponentsH_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINShortTimeComponentsHM_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time", time: "hm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINShortTimeComponentsHMS_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time", time: "hms"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINShortTimeComponentsHMA_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMZ_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hi-IN",
            type: "time",
            time: "ahmsz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45:37 pm IST');
        test.done();
    },
    testDateFmtINShortTimeComponentsHMAZ_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hi-IN",
            type: "time",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45:37 pm IST');
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSA_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45:37 pm');
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSZ_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hi-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45:37 pm IST');
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSAZ_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hi-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45:37 pm IST');
        test.done();
    },
    testDateFmtINFullTimeComponentsS_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time", length: "full", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINFullTimeComponentsM_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time", length: "full", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINFullTimeComponentsH_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time", length: "full", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtINFullTimeComponentsHM_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMS_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45:37 pm');
        test.done();
    },
    testDateFmtINFullTimeComponentsHMA_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMAZ_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hi-IN",
            type: "time",
            length: "full",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45:37 pm IST');
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSA_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45:37 pm');
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSZ_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hi-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45:37 pm IST');
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSAZ_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hi-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45:37 pm IST');
        test.done();
    },
    testDateFmtINWithTimeZoneAndNoDST_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hi-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45:37 pm IST');
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtFormatRelativeWithinMinuteBefore_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtFormatRelativeWithinHourAfter_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtFormatRelativeWithinHourBefore_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtFormatRelativeWithinDayAfter_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtFormatRelativeWithinDayBefore_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtFormatRelativeWithinFortnightAfter_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtFormatRelativeWithinFortnightBefore_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtFormatRelativeWithinQuarterAfter_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtFormatRelativeWithinQuarterBefore_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hi-IN",
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
    testDateFmtFormatRelativeWithinTwoYearsAfter_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 माह में");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 माह पहले");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hi-IN",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 वर्ष में");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_hi_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hi-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hi-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hi-IN",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 वर्ष पहले");
        test.done();
    }
};