/*
 * testdatefmt_kn_IN.js - test the date formatter object in Kannada for India
 *
 * Copyright © 2013-2015, 2017-2018, 2023-2024 JEDLSoft
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

module.exports.testdatefmt_kn_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtINConstructorEmpty_kn_IN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "kn-IN"});

        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    testDateFmtINSimpleShort_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "short"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINSimpleMedium_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "medium"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಸೆಪ್ಟೆಂ 29, 2011");
        test.done();
    },
    testDateFmtINSimpleLong_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "long"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಸೆಪ್ಟೆಂಬರ್ 29, 2011");
        test.done();
    },
    testDateFmtINSimpleFull_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಸೆಪ್ಟೆಂಬರ್ 29, 2011");
        test.done();
    },
    testDateFmtINSimpleTimeShort_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINSimpleTimeShort_kn_IN1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINSimpleTimeMedium_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "medium", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINSimpleTimeLong_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "long", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINSimpleTimeFull_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINDateTimeSimpleShort_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "short", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11, 01:45 PM");
        test.done();
    },
    testDateFmtINDateTimeSimpleMedium_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "medium", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಸೆಪ್ಟೆಂ 29, 2011, 01:45 PM");
        test.done();
    },
    testDateFmtINDateTimeSimpleLong_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "long", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಸೆಪ್ಟೆಂಬರ್ 29, 2011 ರಂದು 01:45 PM ಸಮಯಕ್ಕೆ");
        test.done();
    },
    testDateFmtINDateTimeSimpleFull_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಸೆಪ್ಟೆಂಬರ್ 29, 2011 ರಂದು 01:45 PM ಸಮಯಕ್ಕೆ");
        test.done();
    },
    testDateFmtINTemplateCalendar_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new JulianDate({
            locale: "kn-IN",
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
    testDateFmtINTemplateClock12SwitchHH_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", clock: "12", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINTemplateClock12Switchkk_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", clock: "12", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINTemplateClock24Switchhh_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", clock: "24", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINTemplateClock24SwitchKK_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", clock: "24", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINTypeDate_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "date"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINTypeTime_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINTypeDateTime_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11, 01:45 PM");
        test.done();
    },
    testDateFmtINShortDateComponentsY_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortDateComponentsM_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortDateComponentsN_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", date: "n"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಸ");
        test.done();
    },
    testDateFmtINShortDateComponentsD_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortDateComponentsDM_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortDateComponentsMY_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortDateComponentsDMY_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortDateComponentsWDM_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಗು, 29/9");
        test.done();
    },
    testDateFmtINShortDateComponentsWDMY_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಗು, 29/9/11");
        test.done();
    },
    testDateFmtINFullDateComponentsY_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINFullDateComponentsM_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಸೆಪ್ಟೆಂಬರ್");
        test.done();
    },
    testDateFmtINFullDateComponentsD_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINFullDateComponentsDM_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಸೆಪ್ಟೆಂಬರ್ 29");
        test.done();
    },
    testDateFmtINFullDateComponentsMY_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಸೆಪ್ಟೆಂಬರ್, 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsDMY_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಸೆಪ್ಟೆಂಬರ್ 29, 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsWDM_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಗುರುವಾರ, ಸೆಪ್ಟೆಂಬರ್ 29");
        test.done();
    },
    testDateFmtINFullDateComponentsWDMY_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ಗುರುವಾರ, ಸೆಪ್ಟೆಂಬರ್ 29, 2011");
        test.done();
    },
    testDateFmtINShortTimeComponentsS_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortTimeComponentsM_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortTimeComponentsH_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortTimeComponentsHM_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time", time: "hm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortTimeComponentsHMS_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time", time: "hms"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortTimeComponentsHMA_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortTimeComponentsHMZ_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kn-IN",
            type: "time",
            time: "ahmsz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortTimeComponentsHMAZ_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kn-IN",
            type: "time",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortTimeComponentsHMSA_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortTimeComponentsHMSZ_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kn-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINShortTimeComponentsHMSAZ_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kn-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINFullTimeComponentsS_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time", length: "full", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINFullTimeComponentsM_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time", length: "full", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINFullTimeComponentsH_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time", length: "full", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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



    testDateFmtINFullTimeComponentsHM_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINFullTimeComponentsHMS_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINFullTimeComponentsHMA_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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



    testDateFmtINFullTimeComponentsHMAZ_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kn-IN",
            type: "time",
            length: "full",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINFullTimeComponentsHMSA_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINFullTimeComponentsHMSZ_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kn-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINFullTimeComponentsHMSAZ_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kn-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtINWithTimeZoneAndNoDST_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kn-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "kn-IN",
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
    testDateFmtFormatRelativeWitknnMinuteAfter_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ");
        test.done();
    },
    testDateFmtFormatRelativeWitknnMinuteBefore_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 ಸೆಕೆಂಡುಗಳ ಹಿಂದೆ");
        test.done();
    },
    testDateFmtFormatRelativeWitknnHourAfter_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 ನಿಮಿಷಗಳಲ್ಲಿ");
        test.done();
    },
    testDateFmtFormatRelativeWitknnHourBefore_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 ನಿಮಿಷಗಳ ಹಿಂದೆ");
        test.done();
    },
    testDateFmtFormatRelativeWitknnDayAfter_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 ಗಂಟೆಗಳಲ್ಲಿ");
        test.done();
    },
    testDateFmtFormatRelativeWitknnDayBefore_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 ಗಂಟೆಗಳ ಹಿಂದೆ");
        test.done();
    },
    testDateFmtFormatRelativeWitknnFortnightAfter_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 ದಿನಗಳಲ್ಲಿ");
        test.done();
    },
    testDateFmtFormatRelativeWitknnFortnightBefore_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 ದಿನಗಳ ಹಿಂದೆ");
        test.done();
    },
    testDateFmtFormatRelativeWitknnQuarterAfter_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 ವಾರಗಳಲ್ಲಿ");
        test.done();
    },
    testDateFmtFormatRelativeWitknnQuarterBefore_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 ವಾರಗಳ ಹಿಂದೆ");
        test.done();
    },
    testDateFmtFormatRelativeWitknnTwoYearsAfter_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 ತಿಂಗಳುಗಳಲ್ಲಿ");
        test.done();
    },
    testDateFmtFormatRelativeWitknnTwoYearsBefore_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 ತಿಂಗಳುಗಳ ಹಿಂದೆ");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kn-IN",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 ವರ್ಷಗಳಲ್ಲಿ");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_kn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kn-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kn-IN",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 ವರ್ಷಗಳ ಹಿಂದೆ");
        test.done();
    }
};