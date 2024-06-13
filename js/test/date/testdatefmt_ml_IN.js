/*
 * testdatefmt_ml_IN.js - test the date formatter object in Malyalam for India
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

if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../lib/GregorianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdatefmt_ml_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtINConstructorEmpty_ml_IN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ml-IN"});

        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    testDateFmtINSimpleShort_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "short"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINSimpleMedium_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "medium"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011, സെപ്റ്റം 29");
        test.done();
    },
    testDateFmtINSimpleLong_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "long"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011, സെപ്റ്റംബർ 29");
        test.done();
    },
    testDateFmtINSimpleFull_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011, സെപ്റ്റംബർ 29");
        test.done();
    },
    //needs to have translations for a.m.-p.m.
    /*
    testDateFmtINSimpleTimeShort_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINSimpleTimeShort_ml_IN1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINSimpleTimeMedium_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "medium", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINSimpleTimeLong_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "long", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINSimpleTimeFull_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINDateTimeSimpleShort_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "short", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINDateTimeSimpleMedium_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "medium", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न 11, സെപ്റ്റം 29");
        test.done();
    },
    testDateFmtINDateTimeSimpleLong_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "long", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न 2011 സെപ്റ്റം 29");
        test.done();
    },
    testDateFmtINDateTimeSimpleFull_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 अपराह्न 2011, സെപ്റ്റംബർ 29");
        test.done();
    },
    testDateFmtINTemplateCalendar_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", calendar: "julian", template: "yyyy-MM-dd"});
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
    */


    testDateFmtINTemplateClock12SwitchHH_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", clock: "12", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINTemplateClock12Switchkk_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", clock: "12", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINTemplateClock24Switchhh_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", clock: "24", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINTemplateClock24SwitchKK_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", clock: "24", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINTypeDate_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "date"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    /*
    testDateFmtINTypeTime_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINTypeDateTime_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortDateComponentsY_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortDateComponentsM_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortDateComponentsN_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", date: "n"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "സ");
        test.done();
    },
    testDateFmtINShortDateComponentsD_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortDateComponentsDM_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortDateComponentsMY_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortDateComponentsDMY_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortDateComponentsWDM_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9, വ്യാ");
        test.done();
    },
    testDateFmtINShortDateComponentsWDMY_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11, വ്യാ");
        test.done();
    },
    testDateFmtINFullDateComponentsY_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINFullDateComponentsM_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "സെപ്റ്റംബർ");
        test.done();
    },
    testDateFmtINFullDateComponentsD_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINFullDateComponentsDM_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "സെപ്റ്റംബർ 29");
        test.done();
    },
    testDateFmtINFullDateComponentsMY_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011, സെപ്റ്റംബർ");
        test.done();
    },
    testDateFmtINFullDateComponentsDMY_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011, സെപ്റ്റംബർ 29");
        test.done();
    },
    testDateFmtINFullDateComponentsWDM_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "സെപ്റ്റംബർ 29, വ്യാഴാഴ്‌ച");
        test.done();
    },
    testDateFmtINFullDateComponentsWDMY_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011, സെപ്റ്റംബർ 29, വ്യാഴാഴ്‌ച");
        test.done();
    },
    testDateFmtINShortTimeComponentsS_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortTimeComponentsM_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortTimeComponentsH_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    /*
    testDateFmtINShortTimeComponentsHM_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time", time: "hm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortTimeComponentsHMS_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time", time: "hms"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortTimeComponentsHMA_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortTimeComponentsHMZ_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ml-IN",
            type: "time",
            time: "ahmsz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortTimeComponentsHMAZ_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ml-IN",
            type: "time",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortTimeComponentsHMSA_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortTimeComponentsHMSZ_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ml-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINShortTimeComponentsHMSAZ_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ml-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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


    testDateFmtINFullTimeComponentsS_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time", length: "full", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINFullTimeComponentsM_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time", length: "full", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINFullTimeComponentsH_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time", length: "full", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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



    /*
    testDateFmtINFullTimeComponentsHM_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINFullTimeComponentsHMS_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINFullTimeComponentsHMA_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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



    testDateFmtINFullTimeComponentsHMAZ_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ml-IN",
            type: "time",
            length: "full",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINFullTimeComponentsHMSA_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINFullTimeComponentsHMSZ_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ml-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINFullTimeComponentsHMSAZ_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ml-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    testDateFmtINWithTimeZoneAndNoDST_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ml-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ml-IN",
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
    */
    //needs to have translations for after
    /*
    testDateFmtFormatRelativeWithinMinuteAfter_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 സെക്കന്റ് में");
        test.done();
    },
    */
    testDateFmtFormatRelativeWithinMinuteBefore_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 സെക്കൻഡ് മുമ്പ്");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinHourAfter_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 മിനിട്ട് में");
        test.done();
    },
    */
    testDateFmtFormatRelativeWithinHourBefore_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 മിനിറ്റ് മുമ്പ്");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinDayAfter_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 മണിക്കൂ में");
        test.done();
    },
    */
    testDateFmtFormatRelativeWithinDayBefore_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 മണിക്കൂർ മുമ്പ്");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinFortnightAfter_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 ദിവസം में");
        test.done();
    },
    */
    testDateFmtFormatRelativeWithinFortnightBefore_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 ദിവസം മുമ്പ്");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinQuarterAfter_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 ആഴ്ച में");
        test.done();
    },
    */
    testDateFmtFormatRelativeWithinQuarterBefore_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 ആഴ്ച മുമ്പ്");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinTwoYearsAfter_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 മാസം में");
        test.done();
    },
    */
    testDateFmtFormatRelativeWithinTwoYearsBefore_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 മാസം മുമ്പ്");
        test.done();
    },
    /*
    testDateFmtFormatRelativeYearsAfter_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ml-IN",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 വർഷംमें");
        test.done();
    },
    */
    testDateFmtFormatRelativeYearsBefore_ml_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ml-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ml-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ml-IN",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 വർഷം മുമ്പ്");
        test.done();
    }
};