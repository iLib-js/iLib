/*
 * testdatefmt_bn_IN.js - test the date formatter object in bengali for India
 *
 * Copyright © 2013-2015,2017-2018,2023 JEDLSoft
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

module.exports.testdatefmt_bn_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtINConstructorEmpty_bn_IN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "bn-IN"});

        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    testDateFmtINSimpleShort_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "short"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯/৯/১১");
        test.done();
    },
    testDateFmtINSimpleMedium_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "medium"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '২৯ সেপ্টেঃ, ২০১১');
        test.done();
    },
    testDateFmtINSimpleLong_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "long"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯ সেপ্টেম্বর, ২০১১");
        test.done();
    },
    testDateFmtINSimpleFull_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯ সেপ্টেম্বর, ২০১১");
        test.done();
    },
    testDateFmtINSimpleTimeShort_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫ PM");
        test.done();
    },
    testDateFmtINSimpleTimeShort_bn_IN1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫ PM");
        test.done();
    },
    testDateFmtINSimpleTimeMedium_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "medium", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫ PM");
        test.done();
    },
    testDateFmtINSimpleTimeLong_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "long", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫ PM");
        test.done();
    },
    testDateFmtINSimpleTimeFull_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫ PM");
        test.done();
    },
    testDateFmtINDateTimeSimpleShort_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "short", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯/৯/১১, ১:৪৫ PM");
        test.done();
    },
    testDateFmtINDateTimeSimpleMedium_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "medium", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '২৯ সেপ্টেঃ, ২০১১, ১:৪৫ PM');
        test.done();
    },
    testDateFmtINDateTimeSimpleLong_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "long", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '২৯ সেপ্টেম্বর, ২০১১ এ ১:৪৫ PM');
        test.done();
    },
    testDateFmtINDateTimeSimpleFull_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '২৯ সেপ্টেম্বর, ২০১১ এ ১:৪৫ PM');
        test.done();
    },
    testDateFmtINTemplateCalendar_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new JulianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২০১১-০৯-২৯");
        test.done();
    },
    testDateFmtINTemplateClock12SwitchHH_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", clock: "12", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "০১:৪৫");
        test.done();
    },
    testDateFmtINTemplateClock12Switchkk_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", clock: "12", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "০১:৪৫");
        test.done();
    },
    testDateFmtINTemplateClock24Switchhh_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", clock: "24", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১৩:৪৫");
        test.done();
    },
    testDateFmtINTemplateClock24SwitchKK_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", clock: "24", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১৩:৪৫");
        test.done();
    },
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "০১:৪৫");
        test.done();
    },
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "০১:৪৫");
        test.done();
    },
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১৩:৪৫");
        test.done();
    },
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১৩:৪৫");
        test.done();
    },
    testDateFmtINTypeDate_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "date"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯/৯/১১");
        test.done();
    },
    testDateFmtINTypeTime_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫ PM");
        test.done();
    },
    testDateFmtINTypeDateTime_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '২৯/৯/১১, ১:৪৫ PM');
        test.done();
    },
    testDateFmtINShortDateComponentsY_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১১");
        test.done();
    },
    testDateFmtINShortDateComponentsM_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "সে");
        test.done();
    },
    testDateFmtINShortDateComponentsN_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", date: "n"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "স");
        test.done();
    },
    testDateFmtINShortDateComponentsD_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯");
        test.done();
    },
    testDateFmtINShortDateComponentsDM_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯/৯");
        test.done();
    },
    testDateFmtINShortDateComponentsMY_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "৯/১১");
        test.done();
    },
    testDateFmtINShortDateComponentsDMY_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯/৯/১১");
        test.done();
    },
    testDateFmtINShortDateComponentsWDM_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "বৃ, ২৯/৯");
        test.done();
    },
    testDateFmtINShortDateComponentsWDMY_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "বৃ, ২৯/৯/১১");
        test.done();
    },
    testDateFmtINFullDateComponentsY_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২০১১");
        test.done();
    },
    testDateFmtINFullDateComponentsM_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "সেপ্টেম্বর");
        test.done();
    },
    testDateFmtINFullDateComponentsD_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯");
        test.done();
    },
    testDateFmtINFullDateComponentsDM_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯ সেপ্টেম্বর");
        test.done();
    },
    testDateFmtINFullDateComponentsMY_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "সেপ্টেম্বর, ২০১১");
        test.done();
    },
    testDateFmtINFullDateComponentsDMY_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯ সেপ্টেম্বর, ২০১১");
        test.done();
    },
    testDateFmtINFullDateComponentsWDM_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "বৃহস্পতিবার, ২৯ সেপ্টেম্বর");
        test.done();
    },
    testDateFmtINFullDateComponentsWDMY_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "বৃহস্পতিবার, ২৯ সেপ্টেম্বর, ২০১১");
        test.done();
    },
    testDateFmtINShortTimeComponentsS_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "৩৭");
        test.done();
    },
    testDateFmtINShortTimeComponentsM_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "৪৫");
        test.done();
    },
    testDateFmtINShortTimeComponentsH_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১");
        test.done();
    },
    testDateFmtINShortTimeComponentsHM_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time", time: "hm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMS_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time", time: "hms"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫:৩৭");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMA_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫ PM");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMZ_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bn-IN",
            type: "time",
            time: "ahmsz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫:৩৭ PM IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMAZ_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bn-IN",
            type: "time",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫:৩৭ PM IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSA_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫:৩৭ PM");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSZ_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bn-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫:৩৭ PM IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSAZ_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bn-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫:৩৭ PM IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsS_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time", length: "full", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "৩৭");
        test.done();
    },
    testDateFmtINFullTimeComponentsM_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time", length: "full", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "৪৫");
        test.done();
    },
    testDateFmtINFullTimeComponentsH_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time", length: "full", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১");
        test.done();
    },



    testDateFmtINFullTimeComponentsHMA_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫ PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSA_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫:৩৭ PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSAWestern_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bn-IN",
            type: "time",
            length: "full",
            time: "hmsa",
            useNative: false
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
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
    testDateFmtINFullTimeComponentsHMA_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫ PM");
        test.done();
    },



    testDateFmtINFullTimeComponentsHMAZ_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bn-IN",
            type: "time",
            length: "full",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫:৩৭ PM IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSA_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫:৩৭ PM");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSZ_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bn-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫:৩৭ PM IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSAZ_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bn-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫:৩৭ PM IST");
        test.done();
    },
    testDateFmtINWithTimeZoneAndNoDST_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bn-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১:৪৫:৩৭ PM IST");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 সেকেন্ডে");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 সেকেন্ড পূর্বে");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 মিনিটে");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 মিনিট আগে');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 ঘন্টায়");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 ঘন্টা আগে");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 দিনের মধ্যে");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 দিন আগে");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 সপ্তাহে");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 সপ্তাহ আগে");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 মাসে");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 মাস আগে");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bn-IN",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 বছরে");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_bn_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bn-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bn-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bn-IN",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 বছর পূর্বে");
        test.done();
    }
};