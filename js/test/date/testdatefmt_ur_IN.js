/*
 * testdatefmt_ur_IN.js - test the date formatter object in Urdu for India
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

module.exports.testdatefmt_ur_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtINConstructorEmpty_ur_IN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ur-IN"});

        test.ok(typeof(fmt) !== "undefined");
        test.done();
    },
    testDateFmtINSimpleShort_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "short"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۲۹/۹/۱۱');
        test.done();
    },
    testDateFmtINSimpleMedium_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "medium"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۲۹ ستمبر، ۲۰۱۱');
        test.done();
    },
    testDateFmtINSimpleLong_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "long"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۹ ستمبر، ۲۰۱۱");
        test.done();
    },
    testDateFmtINSimpleFull_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۹ ستمبر، ۲۰۱۱");
        test.done();
    },
    testDateFmtINSimpleTimeShort_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵ PM');
        test.done();
    },
    testDateFmtINSimpleTimeShort_ur_IN1: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "short", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵ PM');
        test.done();
    },
    testDateFmtINSimpleTimeMedium_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "medium", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵ PM');
        test.done();
    },
    testDateFmtINSimpleTimeLong_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "long", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵ PM');
        test.done();
    },
    testDateFmtINSimpleTimeFull_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵ PM');
        test.done();
    },
    testDateFmtINDateTimeSimpleShort_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "short", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۲۹/۹/۱۱، ‏۱:۴۵ PM');
        test.done();
    },
    testDateFmtINDateTimeSimpleMedium_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "medium", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۲۹ ستمبر، ۲۰۱۱، ‏۱:۴۵ PM');
        test.done();
    },
    testDateFmtINDateTimeSimpleLong_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "long", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۲۹ ستمبر، ۲۰۱۱ کو ‏۱:۴۵ PM');
        test.done();
    },
    testDateFmtINDateTimeSimpleFull_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۲۹ ستمبر، ۲۰۱۱ کو ‏۱:۴۵ PM');
        test.done();
    },
    testDateFmtINTemplateCalendar_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new JulianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۲۰۱۱-۰۹-۲۹");
        test.done();
    },
    testDateFmtINTemplateClock12SwitchHH_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", clock: "12", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۰۱:۴۵");
        test.done();
    },
    testDateFmtINTemplateClock12Switchkk_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", clock: "12", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۰۱:۴۵");
        test.done();
    },
    testDateFmtINTemplateClock24Switchhh_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", clock: "24", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۱۳:۴۵");
        test.done();
    },
    testDateFmtINTemplateClock24SwitchKK_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", clock: "24", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۱۳:۴۵");
        test.done();
    },
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", template: "hh:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۰۱:۴۵");
        test.done();
    },
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", template: "KK:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۰۱:۴۵");
        test.done();
    },
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", template: "HH:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۱۳:۴۵");
        test.done();
    },
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", template: "kk:mm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۱۳:۴۵");
        test.done();
    },
    testDateFmtINTypeDate_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "date"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۲۹/۹/۱۱');
        test.done();
    },
    testDateFmtINTypeTime_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date),'‏۱:۴۵ PM');
        test.done();
    },
    testDateFmtINTypeDateTime_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "datetime"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۲۹/۹/۱۱، ‏۱:۴۵ PM');
        test.done();
    },
    testDateFmtINShortDateComponentsY_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۱۱");
        test.done();
    },
    testDateFmtINShortDateComponentsM_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۹");
        test.done();
    },
    testDateFmtINShortDateComponentsN_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", date: "n"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "س");
        test.done();
    },
    testDateFmtINShortDateComponentsD_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۲۹");
        test.done();
    },
    testDateFmtINShortDateComponentsDM_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date),'‏۲۹/۹');
        test.done();
    },
    testDateFmtINShortDateComponentsMY_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۹/۱۱');
        test.done();
    },
    testDateFmtINShortDateComponentsDMY_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date),'‏۲۹/۹/۱۱');
        test.done();
    },
    testDateFmtINShortDateComponentsWDM_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'T، ‏۲۹/۹');
        test.done();
    },
    testDateFmtINShortDateComponentsWDMY_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'T، ۲۹/۹/۱۱');
        test.done();
    },
    testDateFmtINFullDateComponentsY_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "y"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۲۰۱۱");
        test.done();
    },
    testDateFmtINFullDateComponentsM_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ستمبر");
        test.done();
    },
    testDateFmtINFullDateComponentsD_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "d"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۲۹");
        test.done();
    },
    testDateFmtINFullDateComponentsDM_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "dm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۹ ستمبر");
        test.done();
    },
    testDateFmtINFullDateComponentsMY_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "my"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ستمبر، ۲۰۱۱");
        test.done();
    },
    testDateFmtINFullDateComponentsDMY_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "dmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۹ ستمبر، ۲۰۱۱");
        test.done();
    },
    testDateFmtINFullDateComponentsWDM_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "wdm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "جمعرات، ‏۲۹ ستمبر");
        test.done();
    },
    testDateFmtINFullDateComponentsWDMY_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full", date: "wdmy"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "جمعرات، ۲۹ ستمبر، ۲۰۱۱");
        test.done();
    },
    testDateFmtINShortTimeComponentsS_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۳۷");
        test.done();
    },
    testDateFmtINShortTimeComponentsM_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۴۵");
        test.done();
    },
    testDateFmtINShortTimeComponentsH_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۱");
        test.done();
    },
    testDateFmtINShortTimeComponentsHM_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time", time: "hm"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱:۴۵");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMS_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time", time: "hms"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱:۴۵:۳۷");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMA_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵ PM');
        test.done();
    },
    testDateFmtINShortTimeComponentsHMZ_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ur-IN",
            type: "time",
            time: "ahmsz"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵:۳۷ PM IST');
        test.done();
    },
    testDateFmtINShortTimeComponentsHMAZ_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ur-IN",
            type: "time",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵:۳۷ PM IST');
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSA_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵:۳۷ PM');
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSZ_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ur-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵:۳۷ PM IST');
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSAZ_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ur-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵:۳۷ PM IST');
        test.done();
    },
    testDateFmtINFullTimeComponentsS_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time", length: "full", time: "s"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۳۷");
        test.done();
    },
    testDateFmtINFullTimeComponentsM_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time", length: "full", time: "m"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۴۵");
        test.done();
    },
    testDateFmtINFullTimeComponentsH_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time", length: "full", time: "h"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۱");
        test.done();
    },
    testDateFmtINFullTimeComponentsHM_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵ PM');
        test.done();
    },
    testDateFmtINFullTimeComponentsHMS_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵:۳۷ PM');
        test.done();
    },
    testDateFmtINFullTimeComponentsHMA_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time", length: "full", time: "hma"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵ PM');
        test.done();
    },
    testDateFmtINFullTimeComponentsHMAZ_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ur-IN",
            type: "time",
            length: "full",
            time: "ahmsz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵:۳۷ PM IST');
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSA_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵:۳۷ PM');
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSZ_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ur-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵:۳۷ PM IST');
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSAZ_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ur-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵:۳۷ PM IST');
        test.done();
    },
    testDateFmtINWithTimeZoneAndNoDST_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ur-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(typeof(fmt) !== "undefined");

        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱:۴۵:۳۷ PM IST');
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏30 سیکنڈ میں");
        test.done();


    },
    testDateFmtFormatRelativeWithinMinuteBefore_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏30 سیکنڈ قبل");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏10 منٹ میں");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏10 منٹ قبل");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏4 گھنٹے میں");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏4 گھنٹے پہلے");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏4 دنوں میں");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏4 دنوں پہلے");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏9 ہفتوں میں");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏9 ہفتے قبل");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏16 ماہ میں");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏14 ماہ قبل");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ur-IN",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏14 سالوں میں");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ur_IN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ur-IN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ur-IN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ur-IN",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏21 سال پہلے");
        test.done();
    }
};