/*
 * testdatefmt_sq_AL.js - test the date formatter object in Albanian for Albania
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

module.exports.testdatefmt_sq_AL = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtINConstructorEmpty_sq_AL: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "sq-AL"});

        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    testDateFmtINSimpleShort_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "short"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.11");
        test.done();
    },
    testDateFmtINSimpleMedium_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "medium"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sht 2011");
        test.done();
    },
    testDateFmtINSimpleLong_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "long"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 shtator 2011");
        test.done();
    },
    testDateFmtINSimpleFull_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 shtator 2011");
        test.done();
    },
    testDateFmtINSimpleTimeShort_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 e pasdites");
        test.done();
    },
    testDateFmtINSimpleTimeShort_sq_AL1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 e pasdites");
        test.done();
    },
    testDateFmtINSimpleTimeMedium_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "medium", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 e pasdites");
        test.done();
    },
    testDateFmtINSimpleTimeLong_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "long", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 e pasdites");
        test.done();
    },
    testDateFmtINSimpleTimeFull_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 e pasdites");
        test.done();
    },
    testDateFmtINDateTimeSimpleShort_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "short", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.11, 1:45 e pasdites");
        test.done();
    },
    testDateFmtINDateTimeSimpleMedium_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "medium", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sht 2011, 1:45 e pasdites");
        test.done();
    },
    testDateFmtINDateTimeSimpleLong_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "long", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 shtator 2011 në 1:45 e pasdites");
        test.done();
    },
    testDateFmtINDateTimeSimpleFull_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 shtator 2011 në 1:45 e pasdites");
        test.done();
    },
    testDateFmtINTemplateCalendar_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", calendar: "julian", template: "yyyy-MM-dd"});
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
    testDateFmtINTemplateClock12SwitchHH_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", clock: "12", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINTemplateClock12Switchkk_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", clock: "12", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINTemplateClock24Switchhh_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", clock: "24", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINTemplateClock24SwitchKK_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", clock: "24", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINTypeDate_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", type: "date"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.11");
        test.done();
    },
    testDateFmtINTypeTime_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 e pasdites");
        test.done();
    },
    testDateFmtINTypeDateTime_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.11, 1:45 e pasdites");
        test.done();
    },
    testDateFmtINShortDateComponentsY_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINShortDateComponentsM_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINShortDateComponentsN_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", date: "n"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINShortDateComponentsD_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINShortDateComponentsDM_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9");
        test.done();
    },
    testDateFmtINShortDateComponentsMY_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9.11");
        test.done();
    },
    testDateFmtINShortDateComponentsDMY_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.11");
        test.done();
    },
    testDateFmtINShortDateComponentsWDM_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "e, 29.9");
        test.done();
    },
    testDateFmtINShortDateComponentsWDMY_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "e, 29.9.11");
        test.done();
    },
    testDateFmtINFullDateComponentsY_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINFullDateComponentsM_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "shtator");
        test.done();
    },
    testDateFmtINFullDateComponentsD_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINFullDateComponentsDM_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 shtator");
        test.done();
    },
    testDateFmtINFullDateComponentsMY_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "shtator 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsDMY_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 shtator 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsWDM_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "e enjte, 29 shtator");
        test.done();
    },
    testDateFmtINFullDateComponentsWDMY_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "e enjte, 29 shtator 2011");
        test.done();
    },
    testDateFmtINShortTimeComponentsS_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", type: "time", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINShortTimeComponentsM_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", type: "time", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINShortTimeComponentsH_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", type: "time", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINShortTimeComponentsHM_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", type: "time", time: "hm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINShortTimeComponentsHMS_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", type: "time", time: "hms"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
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
    testDateFmtINShortTimeComponentsHMA_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", type: "time", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 e pasdites");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMZ_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sq-AL",
            type: "time",
            time: "ahmsz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 e pasdites CEST");
        test.done();
    },




    testDateFmtINFullTimeComponentsHM_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 e pasdites");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMS_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 e pasdites");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMA_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 e pasdites");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMAZ_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sq-AL",
            type: "time",
            length: "full",
            time: "ahmsz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 e pasdites CEST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSA_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 e pasdites");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSZ_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sq-AL",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 e pasdites CEST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSAZ_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sq-AL",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 e pasdites CEST");
        test.done();
    },
    testDateFmtINWithTimeZoneAndNoDST_sq_AL: function(test) {
        test.expect(4);
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sq-AL",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 e pasdites CET");
        test.done();

    },
    /*function testDateFmtFormatRelativeWithinMinuteAfter_sq_AL() {
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Pēc 30 sekundēm");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Pirms 30 sekundēm");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Pēc 10 minūtes");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Pirms 10 minūtes");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Pēc 4 stundas");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Pirms 4 stundas");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Pēc 4 dienas");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Pirms 4 dienas");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Pēc 9 nedēļas");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Pirms 9 nedēļas");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Pēc 16 mēnešiem");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Pirms 14 mēneša");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sq-AL",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Pēc 14 gada");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_sq_AL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sq-AL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sq-AL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sq-AL",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Pirms 21 gada");
        test.done();
    }
    */
};