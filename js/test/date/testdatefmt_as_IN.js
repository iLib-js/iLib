/*
 * testdatefmt_as_IN.js - test the date formatter object in Assamese for India
 *
 * Copyright © 2013-2015, 2017, 2023-2024 JEDLSoft
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

module.exports.testdatefmt_as_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtINConstructorEmpty_as_IN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "as-IN"});

        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    testDateFmtINSimpleShort_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "short"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯-৯-২০১১");
        test.done();
    },
    testDateFmtINSimpleMedium_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "medium"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯-০৯-২০১১");
        test.done();
    },
    testDateFmtINSimpleLong_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "long"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯ ছেপ্তেম্বৰ, ২০১১");
        test.done();
    },
    testDateFmtINSimpleFull_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯ ছেপ্তেম্বৰ, ২০১১");
        test.done();
    },
    testDateFmtINSimpleTimeShort_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫");
        test.done();
    },
    testDateFmtINSimpleTimeShort_as_IN1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫");
        test.done();
    },
    testDateFmtINSimpleTimeMedium_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "medium", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫");
        test.done();
    },
    testDateFmtINSimpleTimeLong_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "long", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫");
        test.done();
    },
    testDateFmtINSimpleTimeFull_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫");
        test.done();
    },
    testDateFmtINDateTimeSimpleShort_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "short", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯-৯-২০১১, PM ১.৪৫");
        test.done();
    },
    testDateFmtINDateTimeSimpleMedium_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "medium", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯-০৯-২০১১, PM ১.৪৫");
        test.done();
    },
    testDateFmtINDateTimeSimpleLong_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "long", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯ ছেপ্তেম্বৰ, ২০১১ at PM ১.৪৫");
        test.done();
    },
    testDateFmtINDateTimeSimpleFull_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯ ছেপ্তেম্বৰ, ২০১১ at PM ১.৪৫");
        test.done();
    },
    testDateFmtINTemplateCalendar_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new JulianDate({
            locale: "as-IN",
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



    testDateFmtINTemplateClock12SwitchHH_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", clock: "12", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINTemplateClock12Switchkk_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", clock: "12", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINTemplateClock24Switchhh_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", clock: "24", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINTemplateClock24SwitchKK_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", clock: "24", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINTypeDate_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "date"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯-৯-২০১১");
        test.done();
    },
    testDateFmtINTypeTime_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫");
        test.done();
    },
    testDateFmtINTypeDateTime_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '২৯-৯-২০১১, PM ১.৪৫');
        test.done();
    },
    testDateFmtINShortDateComponentsY_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINShortDateComponentsM_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "৯");
        test.done();
    },
    testDateFmtINShortDateComponentsN_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", date: "n"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ছ");
        test.done();
    },
    testDateFmtINShortDateComponentsD_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINShortDateComponentsDM_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯-৯");
        test.done();
    },
    testDateFmtINShortDateComponentsMY_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "৯-২০১১");
        test.done();
    },
    testDateFmtINShortDateComponentsDMY_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯-৯-২০১১");
        test.done();
    },
    testDateFmtINShortDateComponentsWDM_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ব, ২৯-৯");
        test.done();
    },
    testDateFmtINShortDateComponentsWDMY_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ব, ২৯-৯-২০১১");
        test.done();
    },
    testDateFmtINFullDateComponentsY_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINFullDateComponentsM_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ছেপ্তেম্বৰ");
        test.done();
    },
    testDateFmtINFullDateComponentsD_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINFullDateComponentsDM_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯ ছেপ্তেম্বৰ");
        test.done();
    },
    testDateFmtINFullDateComponentsMY_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ছেপ্তেম্বৰ, ২০১১");
        test.done();
    },
    testDateFmtINFullDateComponentsDMY_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "২৯ ছেপ্তেম্বৰ, ২০১১");
        test.done();
    },
    testDateFmtINFullDateComponentsWDM_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "বৃহস্পতিবাৰ, ২৯ ছেপ্তেম্বৰ");
        test.done();
    },
    testDateFmtINFullDateComponentsWDMY_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "বৃহস্পতিবাৰ, ২৯ ছেপ্তেম্বৰ, ২০১১");
        test.done();
    },
    testDateFmtINShortTimeComponentsS_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINShortTimeComponentsM_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINShortTimeComponentsH_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINShortTimeComponentsHM_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time", time: "hm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১.৪৫");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMS_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time", time: "hms"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "১.৪৫.৩৭");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMA_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMZ_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "as-IN",
            type: "time",
            time: "ahmsz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫.৩৭ IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMAZ_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "as-IN",
            type: "time",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫.৩৭ IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSA_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫.৩৭");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSZ_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "as-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫.৩৭ IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSAZ_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "as-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫.৩৭ IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsS_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time", length: "full", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINFullTimeComponentsM_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time", length: "full", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtINFullTimeComponentsH_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time", length: "full", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
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



    testDateFmtINFullTimeComponentsHM_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMS_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫.৩৭");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMA_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMAZ_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "as-IN",
            type: "time",
            length: "full",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫.৩৭ IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSA_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫.৩৭");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSZ_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "as-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫.৩৭ IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSAZ_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "as-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫.৩৭ IST");
        test.done();
    },
    testDateFmtINWithTimeZoneAndNoDST_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "as-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "PM ১.৪৫.৩৭ IST");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinMinuteAfter_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtFormatRelativeWithinMinuteBefore_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtFormatRelativeWithinHourAfter_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtFormatRelativeWithinHourBefore_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtFormatRelativeWithinDayAfter_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtFormatRelativeWithinDayBefore_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtFormatRelativeWithinFortnightAfter_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtFormatRelativeWithinFortnightBefore_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtFormatRelativeWithinQuarterAfter_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtFormatRelativeWithinQuarterBefore_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtFormatRelativeWithinTwoYearsAfter_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtFormatRelativeWithinTwoYearsBefore_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtFormatRelativeYearsAfter_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "as-IN",
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
    testDateFmtFormatRelativeYearsBefore_as_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "as-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "as-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "as-IN",
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