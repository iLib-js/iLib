/*
 * testdatefmt_mr_IN.js - test the date formatter object in Marathi for India
 *
 * Copyright © 2013-2015,2017-2018,2021,2023 JEDLSoft
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

module.exports.testdatefmt_mr_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtINConstructorEmpty_mr_IN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "mr-IN"});

        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    testDateFmtINSimpleShort_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "short", useNative: false});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
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
    testDateFmtINSimpleMedium_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "medium"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "२९ सप्टें, २०११");
        test.done();
    },
    testDateFmtINSimpleLong_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "long", useNative:false});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 सप्टेंबर, 2011");
        test.done();
    },
    testDateFmtINSimpleFull_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "२९ सप्टेंबर, २०११");
        test.done();
    },
    testDateFmtINSimpleTimeShort_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५ PM");
        test.done();
    },
    testDateFmtINSimpleTimeShort_mr_IN1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "short", type: "time", useNative: false});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    testDateFmtINSimpleTimeMedium_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "medium", type: "time", useNative:false});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    testDateFmtINSimpleTimeLong_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "long", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५ PM");
        test.done();
    },
    testDateFmtINSimpleTimeFull_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full", type: "time", useNative:false});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    testDateFmtINDateTimeSimpleShort_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "short", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "२९/९/११, १:४५ PM");
        test.done();
    },
    testDateFmtINDateTimeSimpleMedium_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "medium", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "२९ सप्टें, २०११, १:४५ PM");
        test.done();
    },
    testDateFmtINDateTimeSimpleLong_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "long", type: "datetime", useNative:false});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 सप्टेंबर, 2011 रोजी 1:45 PM');
        test.done();
    },
    testDateFmtINDateTimeSimpleFull_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '२९ सप्टेंबर, २०११ रोजी १:४५ PM');
        test.done();
    },
    testDateFmtINTemplateCalendar_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", calendar: "julian", template: "yyyy-MM-dd", useNative:false});
        test.ok(typeof(fmt) !== "undefined");

        var date = new JulianDate({
            locale: "mr-IN",
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
    testDateFmtINTemplateClock12SwitchHH_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", clock: "12", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "०१:४५");
        test.done();
    },
    testDateFmtINTemplateClock12Switchkk_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", clock: "12", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "०१:४५");
        test.done();
    },
    testDateFmtINTemplateClock24Switchhh_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", clock: "24", template: "hh:mm", useNative: false});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
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
    testDateFmtINTemplateClock24SwitchKK_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", clock: "24", template: "KK:mm", useNative: false});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "०१:४५");
        test.done();
    },
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "०१:४५");
        test.done();
    },
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१३:४५");
        test.done();
    },
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", template: "kk:mm", useNative:false});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
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
    testDateFmtINTypeDate_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "date"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "२९/९/११");
        test.done();
    },
    testDateFmtINTypeTime_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५ PM");
        test.done();
    },
    testDateFmtINTypeDateTime_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "२९/९/११, १:४५ PM");
        test.done();
    },
    testDateFmtINShortDateComponentsY_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "११");
        test.done();
    },
    testDateFmtINShortDateComponentsM_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "९");
        test.done();
    },
    testDateFmtINShortDateComponentsN_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", date: "n"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
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
    testDateFmtINShortDateComponentsD_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "२९");
        test.done();
    },
    testDateFmtINShortDateComponentsDM_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "२९/९");
        test.done();
    },
    testDateFmtINShortDateComponentsMY_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "९/११");
        test.done();
    },
    testDateFmtINShortDateComponentsDMY_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "२९/९/११");
        test.done();
    },
    testDateFmtINShortDateComponentsWDM_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "गु, २९/९");
        test.done();
    },
    testDateFmtINShortDateComponentsWDMY_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "गु, २९/९/११");
        test.done();
    },
    testDateFmtINFullDateComponentsY_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "२०११");
        test.done();
    },
    testDateFmtINFullDateComponentsM_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "सप्टेंबर");
        test.done();
    },
    testDateFmtINFullDateComponentsD_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "२९");
        test.done();
    },
    testDateFmtINFullDateComponentsDM_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "२९ सप्टेंबर");
        test.done();
    },
    testDateFmtINFullDateComponentsMY_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "सप्टेंबर, २०११");
        test.done();
    },
    testDateFmtINFullDateComponentsDMY_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "२९ सप्टेंबर, २०११");
        test.done();
    },
    testDateFmtINFullDateComponentsWDM_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "गुरुवार, २९ सप्टेंबर");
        test.done();
    },
    testDateFmtINFullDateComponentsWDMY_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "गुरुवार, २९ सप्टेंबर, २०११");
        test.done();
    },
    testDateFmtINShortTimeComponentsS_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "३७");
        test.done();
    },
    testDateFmtINShortTimeComponentsM_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "४५");
        test.done();
    },
    testDateFmtINShortTimeComponentsH_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१");
        test.done();
    },
    testDateFmtINShortTimeComponentsHM_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time", time: "hm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMS_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time", time: "hms"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५:३७");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMA_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५ PM");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMZ_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mr-IN",
            type: "time",
            time: "ahmsz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५:३७ PM IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMAZ_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mr-IN",
            type: "time",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५:३७ PM IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSA_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५:३७ PM");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSZ_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mr-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५:३७ PM IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSAZ_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mr-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५:३७ PM IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsS_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time", length: "full", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "३७");
        test.done();
    },
    testDateFmtINFullTimeComponentsM_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time", length: "full", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "४५");
        test.done();
    },
    testDateFmtINFullTimeComponentsH_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time", length: "full", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१");
        test.done();
    },
    testDateFmtINFullTimeComponentsHM_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५ PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMS_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५:३७ PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMA_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५ PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMAZ_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mr-IN",
            type: "time",
            length: "full",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५:३७ PM IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSA_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५:३७ PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSZ_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mr-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५:३७ PM IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSAZ_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mr-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५:३७ PM IST");
        test.done();
    },
    testDateFmtINWithTimeZoneAndNoDST_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mr-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "१:४५:३७ PM IST");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 सेकंदांमध्ये");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 सेकंदांपूर्वी");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 मिनिटांमध्ये");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 मिनिटांपूर्वी");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 तासांमध्ये");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 तासांपूर्वी");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "येत्या 4 दिवसांमध्ये");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 दिवसांपूर्वी");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 आठवड्यांमध्ये");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 आठवड्यांपूर्वी");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "येत्या 16 महिन्यांमध्ये");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 महिन्यांपूर्वी");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mr-IN",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "येत्या 14 वर्षांमध्ये");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_mr_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mr-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mr-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mr-IN",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 वर्षांपूर्वी");
        test.done();
    }
};