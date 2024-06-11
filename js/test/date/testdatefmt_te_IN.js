/*
 * testdatefmt_te_IN.js - test the date formatter object in telugu for India
 *
 * Copyright © 2013-2015,2017-2018, 2023 JEDLSoft
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

module.exports.testdatefmt_te_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtINConstructorEmpty_te_IN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "te-IN"});

        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    testDateFmtINSimpleShort_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "short"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09-11");
        test.done();
    },
    testDateFmtINSimpleMedium_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "medium"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 సెప్టెం, 2011");
        test.done();
    },
    testDateFmtINSimpleLong_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "long"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 సెప్టెంబర్, 2011");
        test.done();
    },
    testDateFmtINSimpleFull_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29, సెప్టెంబర్ 2011");
        test.done();
    },
    testDateFmtINSimpleTimeShort_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINSimpleTimeShort_te_IN1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINSimpleTimeMedium_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "medium", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINSimpleTimeLong_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "long", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINSimpleTimeFull_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINDateTimeSimpleShort_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "short", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09-11 1:45 PM");
        test.done();
    },
    testDateFmtINDateTimeSimpleMedium_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "medium", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 సెప్టెం, 2011 1:45 PM");
        test.done();
    },
    testDateFmtINDateTimeSimpleLong_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "long", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 సెప్టెంబర్, 2011 1:45 PMకి');
        test.done();
    },
    testDateFmtINDateTimeSimpleFull_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29, సెప్టెంబర్ 2011 1:45 PMకి');
        test.done();
    },
    testDateFmtINTemplateCalendar_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new JulianDate({
            locale: "te-IN",
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
    testDateFmtINTemplateClock12SwitchHH_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", clock: "12", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINTemplateClock12Switchkk_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", clock: "12", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINTemplateClock24Switchhh_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", clock: "24", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINTemplateClock24SwitchKK_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", clock: "24", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINTypeDate_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "date"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09-11");
        test.done();
    },
    testDateFmtINTypeTime_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINTypeDateTime_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09-11 1:45 PM");
        test.done();
    },
    testDateFmtINShortDateComponentsY_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINShortDateComponentsM_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09");
        test.done();
    },
    testDateFmtINShortDateComponentsN_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", date: "n"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "స");
        test.done();
    },
    testDateFmtINShortDateComponentsD_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINShortDateComponentsDM_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09");
        test.done();
    },
    testDateFmtINShortDateComponentsMY_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09-11");
        test.done();
    },
    testDateFmtINShortDateComponentsDMY_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09-11");
        test.done();
    },
    testDateFmtINShortDateComponentsWDM_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09, గు");
        test.done();
    },
    testDateFmtINShortDateComponentsWDMY_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09-11, గు");
        test.done();
    },
    testDateFmtINFullDateComponentsY_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINFullDateComponentsM_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "సెప్టెంబర్");
        test.done();
    },
    testDateFmtINFullDateComponentsD_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINFullDateComponentsDM_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29, సెప్టెంబర్");
        test.done();
    },
    testDateFmtINFullDateComponentsMY_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "సెప్టెంబర్ 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsDMY_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29, సెప్టెంబర్ 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsWDM_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29, సెప్టెంబర్, గురువారం");
        test.done();
    },
    testDateFmtINFullDateComponentsWDMY_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29, సెప్టెంబర్ 2011, గురువారం");
        test.done();
    },
    testDateFmtINShortTimeComponentsS_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINShortTimeComponentsM_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINShortTimeComponentsH_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINShortTimeComponentsHM_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time", time: "hm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINShortTimeComponentsHMS_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time", time: "hms"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINShortTimeComponentsHMA_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMZ_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "te-IN",
            type: "time",
            time: "ahmsz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMAZ_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "te-IN",
            type: "time",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSA_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSZ_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "te-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSAZ_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "te-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsS_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time", length: "full", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINFullTimeComponentsM_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time", length: "full", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINFullTimeComponentsH_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time", length: "full", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
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
    testDateFmtINFullTimeComponentsHM_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMS_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMA_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMAZ_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "te-IN",
            type: "time",
            length: "full",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSA_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSZ_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "te-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSAZ_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "te-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM IST");
        test.done();
    },
    testDateFmtINWithTimeZoneAndNoDST_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "te-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM IST");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 సెకన్లలో");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 సెకన్ల క్రితం");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 నిమిషాల్లో");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 నిమిషాల క్రితం");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 గంటల్లో");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 గంటల క్రితం");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 రోజుల్లో");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 రోజుల క్రితం");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 వారాల్లో");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 వారాల క్రితం");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "te-IN",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 నెలల్లో");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "te-IN",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 నెలల క్రితం");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "te-IN",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 సంవత్సరాల్లో");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_te_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "te-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "te-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "te-IN",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 సంవత్సరాల క్రితం");
        test.done();
    }
};