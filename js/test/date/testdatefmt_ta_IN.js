/*
 * testdatefmt_ta_IN.js - test the date formatter object in tamil for India
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

module.exports.testdatefmt_ta_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtINConstructorEmpty_ta_IN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ta-IN"});

        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    testDateFmtINSimpleShort_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "short"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINSimpleMedium_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "medium"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 செப்., 2011");
        test.done();
    },
    testDateFmtINSimpleLong_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "long"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 செப்டம்பர், 2011");
        test.done();
    },
    testDateFmtINSimpleFull_ta_IN: function(test) {
        test.expect(4);
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 செப்டம்பர், 2011");
        test.done();
    },
    //needs to have translations for a.m.-p.m.
    /*function testDateFmtINSimpleTimeShort_ta_IN() {
        var fmt = new DateFmt({locale: "ta-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न");
        test.done();
    },
    testDateFmtINSimpleTimeShort_ta_IN1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न");
        test.done();
    },
    testDateFmtINSimpleTimeMedium_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "medium", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न");
        test.done();
    },
    testDateFmtINSimpleTimeLong_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "long", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न");
        test.done();
    },
    testDateFmtINSimpleTimeFull_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न");
        test.done();
    },
    testDateFmtINDateTimeSimpleShort_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "short", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न 29/9/11");
        test.done();
    },
    testDateFmtINDateTimeSimpleMedium_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "medium", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न 29 செப்., 11");
        test.done();
    },
    testDateFmtINDateTimeSimpleLong_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "long", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न 29 செப்., 2011");
        test.done();
    },
    testDateFmtINDateTimeSimpleFull_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न 29 செப்டம்பர் 2011");
        test.done();
    },
    testDateFmtINTemplateCalendar_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", calendar: "julian", template: "yyyy-MM-dd"});
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
    testDateFmtINTemplateClock12SwitchHH_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", clock: "12", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINTemplateClock12Switchkk_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", clock: "12", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINTemplateClock24Switchhh_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", clock: "24", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINTemplateClock24SwitchKK_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", clock: "24", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINTypeDate_ta_IN: function(test) {
        test.expect(4);
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", type: "date"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    /*function testDateFmtINTypeTime_ta_IN() {
        var fmt = new DateFmt({locale: "ta-IN", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न");
        test.done();
    },
    testDateFmtINTypeDateTime_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न 29/9/11");
        test.done();
    },
    */
    testDateFmtINShortDateComponentsY_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINShortDateComponentsM_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINShortDateComponentsN_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", date: "n"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ச");
        test.done();
    },
    testDateFmtINShortDateComponentsD_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINShortDateComponentsDM_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINShortDateComponentsMY_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINShortDateComponentsDMY_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINShortDateComponentsWDM_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "வி, 29/9");
        test.done();
    },
    testDateFmtINShortDateComponentsWDMY_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "வி, 29/9/11");
        test.done();
    },
    testDateFmtINFullDateComponentsY_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINFullDateComponentsM_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "செப்டம்பர்");
        test.done();
    },
    testDateFmtINFullDateComponentsD_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINFullDateComponentsDM_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 செப்டம்பர்");
        test.done();
    },
    testDateFmtINFullDateComponentsMY_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "செப்டம்பர், 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsDMY_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 செப்டம்பர், 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsWDM_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "வியாழன், 29 செப்டம்பர்");
        test.done();
    },
    testDateFmtINFullDateComponentsWDMY_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "வியாழன், 29 செப்டம்பர், 2011");
        test.done();
    },
    testDateFmtINShortTimeComponentsS_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", type: "time", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINShortTimeComponentsM_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", type: "time", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINShortTimeComponentsH_ta_IN: function(test) {
        test.expect(4);
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", type: "time", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    /*function testDateFmtINShortTimeComponentsHM_ta_IN() {
        var fmt = new DateFmt({locale: "ta-IN", type: "time", time: "hm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMS_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", type: "time", time: "hms"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 अपराह्न");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMA_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", type: "time", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMZ_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ta-IN",
            type: "time",
            time: "ahmsz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 अपराह्न IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMAZ_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ta-IN",
            type: "time",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 अपराह्न IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSA_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", type: "time", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 अपराह्न");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSZ_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ta-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 अपराह्न IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSAZ_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ta-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 अपराह्न IST");
        test.done();
    },
    */
    testDateFmtINFullTimeComponentsS_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", type: "time", length: "full", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINFullTimeComponentsM_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", type: "time", length: "full", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    testDateFmtINFullTimeComponentsH_ta_IN: function(test) {
        test.expect(4);
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", type: "time", length: "full", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
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
    //needs to have translations for ago and after

    /*function testDateFmtINFullTimeComponentsHM_ta_IN() {
        var fmt = new DateFmt({locale: "ta-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMS_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 अपराह्न");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMA_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMAZ_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ta-IN",
            type: "time",
            length: "full",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 अपराह्न IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSA_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 अपराह्न");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSZ_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ta-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 अपराह्न IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSAZ_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ta-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 अपराह्न IST");
        test.done();
    },
    testDateFmtINWithTimeZoneAndNoDST_ta_IN: function(test) {
        test.expect(4);
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ta-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 अपराह्न IST");
        test.done();
    },
    /*function testDateFmtFormatRelativeWittanMinuteAfter_ta_IN() {
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 வினாடிகள் में");
        test.done();
    },
    testDateFmtFormatRelativeWittanMinuteBefore_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 வினாடிகள் पहले");
        test.done();
    },
    testDateFmtFormatRelativeWittanHourAfter_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 நிமிடங்கள் में");
        test.done();
    },
    testDateFmtFormatRelativeWittanHourBefore_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 நிமிடங்கள் पहले");
        test.done();
    },
    testDateFmtFormatRelativeWittanDayAfter_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 மணிநேரம் में");
        test.done();
    },
    testDateFmtFormatRelativeWittanDayBefore_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 மணிநேரம் पहले");
        test.done();
    },
    testDateFmtFormatRelativeWittanFortnightAfter_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 நாட்கள் में");
        test.done();
    },
    testDateFmtFormatRelativeWittanFortnightBefore_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 நாட்கள் पहले");
        test.done();
    },
    testDateFmtFormatRelativeWittanQuarterAfter_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 வாரங்கள் में");
        test.done();
    },
    testDateFmtFormatRelativeWittanQuarterBefore_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 வாரங்கள் पहले");
        test.done();
    },
    testDateFmtFormatRelativeWittanTwoYearsAfter_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 மாதங்கள் में");
        test.done();
    },
    testDateFmtFormatRelativeWittanTwoYearsBefore_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 மாதங்கள் पहले");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ta-IN",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 வருடங்கள் में");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ta_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ta-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ta-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ta-IN",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 வருடங்கள் पहले");
        test.done();
    }
    */
};
