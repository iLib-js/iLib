/*
 * testdatefmt_fa_IR.js - test the date formatter in saudi Arabia
 *
 * Copyright © 2012-2015,2017,2023 JEDLSoft
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

if (typeof(PersianDate) === "undefined") {
    var PersianDate = require("../../lib/PersianDate.js");
}
if (typeof(JulianDate) === "undefined") {
    var JulianDate = require("../../lib/JulianDate.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../lib/GregorianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}
/* First, Gregorian. See the bottom for the Persian calendar tests */

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdatefmt_fa_IR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtSimpleShort_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "short"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۰۱۱/۹/۲۹");
        test.done();
    },
    testDateFmtSimpleMedium_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "medium"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۹ سپتامبر ۲۰۱۱");
        test.done();
    },
    testDateFmtSimpleLong_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "long"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۹ سپتامبر ۲۰۱۱");
        test.done();
    },
    testDateFmtSimpleFull_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۹ سپتامبر ۲۰۱۱");
        test.done();
    },
    testDateFmtSimpleTimeShort_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "short",
            type: "time"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵");
        test.done();
    },
    testDateFmtSimpleTimeMedium_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "medium",
            type: "time"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵");
        test.done();
    },
    testDateFmtSimpleTimeLong_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "long",
            type: "time"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵");
        test.done();
    },
    testDateFmtSimpleTimeFull_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full",
            type: "time"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵");
        test.done();
    },
    testDateFmtDateTimeSimpleShort_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "short",
            type: "datetime"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۲۰۱۱/۹/۲۹, ‏۱۳:۴۵');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "medium",
            type: "datetime"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۲۹ سپتامبر ۲۰۱۱، ‏۱۳:۴۵');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "long",
            type: "datetime"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۲۹ سپتامبر ۲۰۱۱ ساعت ‏۱۳:۴۵');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full",
            type: "datetime"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۲۹ سپتامبر ۲۰۱۱ ساعت ‏۱۳:۴۵');
        test.done();
    },
    testDateFmtTemplateCalendar_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "julian",
            template: "yyyy-MM-dd"
        });
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۲۰۱۱-۰۹-۲۹");
        test.done();
    },
    testDateFmtTemplateClock12SwitchHH_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            clock: "12",
            template: "HH:mm"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۰۱:۴۵");
        test.done();
    },
    testDateFmtTemplateClock12Switchkk_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            clock: "12",
            template: "kk:mm"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۰۱:۴۵");
        test.done();
    },
    testDateFmtTemplateClock24Switchhh_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            clock: "24",
            template: "hh:mm"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۱۳:۴۵");
        test.done();
    },
    testDateFmtTemplateClock24SwitchKK_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            clock: "24",
            template: "KK:mm"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۱۳:۴۵");
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            template: "hh:mm"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۰۱:۴۵");
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            template: "KK:mm"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۰۱:۴۵");
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            template: "HH:mm"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۱۳:۴۵");
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            template: "kk:mm"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۱۳:۴۵");
        test.done();
    },
    testDateFmtTypeDate_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "date"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۰۱۱/۹/۲۹");
        test.done();
    },
    testDateFmtTypeTime_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵");
        test.done();
    },
    testDateFmtTypeDateTime_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "datetime"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۲۰۱۱/۹/۲۹, ‏۱۳:۴۵');
        test.done();
    },
    testDateFmtShortDateComponentsY_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            date: "y"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۲۰۱۱");
        test.done();
    },
    testDateFmtShortDateComponentsM_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            date: "m"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "س");
        test.done();
    },
    testDateFmtShortDateComponentsD_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            date: "d"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۲۹");
        test.done();
    },
    testDateFmtShortDateComponentsDM_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            date: "dm"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۹/۲۹");
        test.done();
    },
    testDateFmtShortDateComponentsMY_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            date: "my"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۰۱۱/۹");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            date: "dmy"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۰۱۱/۹/۲۹");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            date: "wdm"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "پ ‏۹/۲۹");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            date: "wdmy"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "پ ۲۰۱۱/۹/۲۹");
        test.done();
    },
    testDateFmtFullDateComponentsY_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full",
            date: "y"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۲۰۱۱");
        test.done();
    },
    testDateFmtFullDateComponentsM_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full",
            date: "m"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "سپتامبر");
        test.done();
    },
    testDateFmtFullDateComponentsD_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full",
            date: "d"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۲۹");
        test.done();
    },
    testDateFmtFullDateComponentsDM_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full",
            date: "dm"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۹ سپتامبر");
        test.done();
    },
    testDateFmtFullDateComponentsMY_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full",
            date: "my"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "سپتامبر ۲۰۱۱");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full",
            date: "dmy"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۹ سپتامبر ۲۰۱۱");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full",
            date: "wdm"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "پنجشنبه ‏۲۹ سپتامبر");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full",
            date: "wdmy"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "پنجشنبه ۲۹ سپتامبر ۲۰۱۱");
        test.done();
    },
    testDateFmtShortTimeComponentsS_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            time: "s"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۳۷");
        test.done();
    },
    testDateFmtShortTimeComponentsM_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            time: "m"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۴۵");
        test.done();
    },
    testDateFmtShortTimeComponentsH_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            time: "h"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۱۳");
        test.done();
    },
    testDateFmtShortTimeComponentsMS_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            time: "ms"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۴۵:۳۷");
        test.done();
    },
    testDateFmtShortTimeComponentsHM_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            time: "hm"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵");
        test.done();
    },
    testDateFmtShortTimeComponentsHMS_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            time: "hms"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵:۳۷");
        test.done();
    },
    testDateFmtShortTimeComponentsHMA_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            time: "hma"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵");
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵ (+۰۳۳۰/+۰۴۳۰)");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵ (+۰۳۳۰/+۰۴۳۰)");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            time: "hmsa"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵:۳۷");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵:۳۷ (+۰۳۳۰/+۰۴۳۰)");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵:۳۷ (+۰۳۳۰/+۰۴۳۰)");
        test.done();
    },
    testDateFmtFullTimeComponentsS_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            length: "full",
            time: "s"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۳۷");
        test.done();
    },
    testDateFmtFullTimeComponentsM_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            length: "full",
            time: "m"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۴۵");
        test.done();
    },
    testDateFmtFullTimeComponentsH_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            length: "full",
            time: "h"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۱۳");
        test.done();
    },
    testDateFmtFullTimeComponentsMS_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            length: "full",
            time: "ms"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "۴۵:۳۷");
        test.done();
    },
    testDateFmtFullTimeComponentsHM_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hm"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵");
        test.done();
    },
    testDateFmtFullTimeComponentsHMS_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hms"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵:۳۷");
        test.done();
    },
    testDateFmtFullTimeComponentsHMA_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hma"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵");
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵ (+۰۳۳۰/+۰۴۳۰)");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵ (+۰۳۳۰/+۰۴۳۰)");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsa"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵:۳۷");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵:۳۷ (+۰۳۳۰/+۰۴۳۰)");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵:۳۷ (+۰۳۳۰/+۰۴۳۰)");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵:۳۷ (+۰۳۳۰/+۰۴۳۰)");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏30 ثانیه بعد");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏30 ثانیه پیش");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏10 دقیقه بعد");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏10 دقیقه پیش");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏4 ساعت بعد");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏4 ساعت پیش");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '‏4 روز دیگر');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏4 روز پیش");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏9 هفته بعد");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏9 هفته پیش");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏16 ماه بعد");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏14 ماه پیش");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fa-IR",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏14 سال بعد");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fa-IR",
            calendar: "gregorian",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fa-IR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fa-IR",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏21 سال پیش");
        test.done();
    },
    /* Now Persian calendar tests */

    testDateFmtPersSimpleShort_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            calendar: "persian",
            locale: "fa-IR",
            length: "short"
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "fa-IR",
            year: 1392,
            month: 9,
            day: 21,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱۳۹۲/۹/۲۱');
        test.done();
    },
    testDateFmtPersSimpleMedium_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            calendar: "persian",
            locale: "fa-IR",
            length: "medium"
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "fa-IR",
            year: 1392,
            month: 9,
            day: 21,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۱ آذر ۱۳۹۲");
        test.done();
    },
    testDateFmtPersSimpleLong_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            calendar: "persian",
            locale: "fa-IR",
            length: "long"
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "fa-IR",
            year: 1392,
            month: 9,
            day: 21,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۱ آذر ۱۳۹۲");
        test.done();
    },
    testDateFmtPersSimpleFull_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            calendar: "persian",
            locale: "fa-IR",
            length: "full"
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "fa-IR",
            year: 1392,
            month: 9,
            day: 21,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳۹۲ آذر ۲۱");
        test.done();
    },
    testDateFmtPersSimpleTimeShort_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            calendar: "persian",
            locale: "fa-IR",
            length: "short",
            type: "time"
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "fa-IR",
            year: 1392,
            month: 9,
            day: 21,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵");
        test.done();
    },
    testDateFmtPersSimpleTimeMedium_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            calendar: "persian",
            locale: "fa-IR",
            length: "medium",
            type: "time"
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "fa-IR",
            year: 1392,
            month: 9,
            day: 21,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵");
        test.done();
    },
    testDateFmtPersSimpleTimeLong_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            calendar: "persian",
            locale: "fa-IR",
            length: "long",
            type: "time"
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "fa-IR",
            year: 1392,
            month: 9,
            day: 21,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵");
        test.done();
    },
    testDateFmtPersSimpleTimeFull_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            calendar: "persian",
            locale: "fa-IR",
            length: "full",
            type: "time"
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "fa-IR",
            year: 1392,
            month: 9,
            day: 21,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳:۴۵");
        test.done();
    },
    testDateFmtPersDateTimeSimpleShort_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            calendar: "persian",
            locale: "fa-IR",
            length: "short",
            type: "datetime"
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "fa-IR",
            year: 1392,
            month: 9,
            day: 21,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏۱۳۹۲/۹/۲۱،‏ ‏۱۳:۴۵');
        test.done();
    },
    testDateFmtPersDateTimeSimpleMedium_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            calendar: "persian",
            locale: "fa-IR",
            length: "medium",
            type: "datetime"
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "fa-IR",
            year: 1392,
            month: 9,
            day: 21,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۱ آذر ۱۳۹۲،‏ ‏۱۳:۴۵");
        test.done();
    },
    testDateFmtPersDateTimeSimpleLong_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            calendar: "persian",
            locale: "fa-IR",
            length: "long",
            type: "datetime"
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "fa-IR",
            year: 1392,
            month: 9,
            day: 21,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۲۱ آذر ۱۳۹۲، ساعت ‏۱۳:۴۵");
        test.done();
    },
    testDateFmtPersDateTimeSimpleFull_fa_IR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            calendar: "persian",
            locale: "fa-IR",
            length: "full",
            type: "datetime"
        });
        test.ok(fmt !== null);

        var date = new PersianDate({
            locale: "fa-IR",
            year: 1392,
            month: 9,
            day: 21,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏۱۳۹۲ آذر ۲۱، ساعت ‏۱۳:۴۵");
        test.done();
    }
};