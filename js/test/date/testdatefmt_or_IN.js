/*
 * testdatefmt_or_IN.js - test the date formatter object in Oriya for India
 *
 * Copyright © 2015,2017,2023 JEDLSoft
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

module.exports.testdatefmt_or_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtINConstructorEmpty_or_IN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "or-IN"});

        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    testDateFmtINSimpleShort_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "short"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/29/11");
        test.done();
    },
    testDateFmtINSimpleMedium_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "medium"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ସେପ୍ଟେମ୍ବର 29, 2011");
        test.done();
    },
    testDateFmtINSimpleLong_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "long"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ସେପ୍ଟେମ୍ବର 29, 2011");
        test.done();
    },
    testDateFmtINSimpleFull_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "full"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ସେପ୍ଟେମ୍ବର 29, 2011");
        test.done();
    },
    testDateFmtINSimpleTimeShort_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINSimpleTimeShort_or_IN1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINSimpleTimeMedium_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "medium", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINSimpleTimeLong_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "long", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINSimpleTimeFull_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "full", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINDateTimeSimpleShort_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "short", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/29/11, 1:45 PM");
        test.done();
    },
    testDateFmtINDateTimeSimpleMedium_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "medium", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ସେପ୍ଟେମ୍ବର 29, 2011, 1:45 PM");
        test.done();
    },
    testDateFmtINDateTimeSimpleLong_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "long", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM ଠାରେ ସେପ୍ଟେମ୍ବର 29, 2011");
        test.done();
    },
    testDateFmtINDateTimeSimpleFull_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "full", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM ଠାରେ ସେପ୍ଟେମ୍ବର 29, 2011");
        test.done();
    },
    testDateFmtINTemplateCalendar_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new JulianDate({
            locale: "or-IN",
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
    testDateFmtINTemplateClock12SwitchHH_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", clock: "12", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINTemplateClock12Switchkk_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", clock: "12", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINTemplateClock24Switchhh_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", clock: "24", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINTemplateClock24SwitchKK_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", clock: "24", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINTypeDate_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "date"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/29/11");
        test.done();
    },
    testDateFmtINTypeTime_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINTypeDateTime_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/29/11, 1:45 PM");
        test.done();
    },
    testDateFmtINShortDateComponentsY_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINShortDateComponentsM_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINShortDateComponentsN_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", date: "n"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ସ");
        test.done();
    },
    testDateFmtINShortDateComponentsD_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINShortDateComponentsDM_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/29");
        test.done();
    },
    testDateFmtINShortDateComponentsMY_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINShortDateComponentsDMY_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/29/11");
        test.done();
    },
    testDateFmtINShortDateComponentsWDM_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ଗୁ, 9/29");
        test.done();
    },
    testDateFmtINShortDateComponentsWDMY_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ଗୁ, 9/29/11");
        test.done();
    },
    testDateFmtINFullDateComponentsY_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "full", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINFullDateComponentsM_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "full", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ସେପ୍ଟେମ୍ବର");
        test.done();
    },
    testDateFmtINFullDateComponentsD_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "full", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINFullDateComponentsDM_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "full", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ସେପ୍ଟେମ୍ବର 29");
        test.done();
    },
    testDateFmtINFullDateComponentsMY_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "full", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ସେପ୍ଟେମ୍ବର, 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsDMY_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "full", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ସେପ୍ଟେମ୍ବର 29, 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsWDM_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "full", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ଗୁରୁବାର, ସେପ୍ଟେମ୍ବର 29");
        test.done();
    },
    testDateFmtINFullDateComponentsWDMY_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", length: "full", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ଗୁରୁବାର, ସେପ୍ଟେମ୍ବର 29, 2011");
        test.done();
    },
    testDateFmtINShortTimeComponentsS_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINShortTimeComponentsM_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINShortTimeComponentsH_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINShortTimeComponentsHM_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time", time: "hm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINShortTimeComponentsHMS_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time", time: "hms"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINShortTimeComponentsHMA_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINShortTimeComponentsHMZ_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "or-IN",
            type: "time",
            time: "ahmsz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINShortTimeComponentsHMAZ_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "or-IN",
            type: "time",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINShortTimeComponentsHMSA_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINShortTimeComponentsHMSZ_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "or-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINShortTimeComponentsHMSAZ_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "or-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINFullTimeComponentsS_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time", length: "full", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINFullTimeComponentsM_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time", length: "full", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINFullTimeComponentsH_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time", length: "full", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINFullTimeComponentsHM_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINFullTimeComponentsHMS_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINFullTimeComponentsHMA_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINFullTimeComponentsHMAZ_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "or-IN",
            type: "time",
            length: "full",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINFullTimeComponentsHMSA_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "or-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINFullTimeComponentsHMSZ_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "or-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINFullTimeComponentsHMSAZ_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "or-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    testDateFmtINWithTimeZoneAndNoDST_or_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "or-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "or-IN",
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
    }
};