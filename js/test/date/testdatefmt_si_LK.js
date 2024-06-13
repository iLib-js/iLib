/*
 * testdatefmt_si_LK.js - test the date formatter object in Sri Lanka
 *
 * Copyright © 2017-2018,2023 JEDLSoft
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

module.exports.testdatefmt_si_LK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_si_LK: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "si-LK"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtSimpleMedium_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 සැප් 29");
        test.done();
    },
    testDateFmtSimpleLong_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 සැප්තැම්බර් 29");
        test.done();
    },
    testDateFmtSimpleFull_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 සැප්තැම්බර් 29");
        test.done();
    },
    testDateFmtSimpleTimeShort_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtSimpleTimeMedium_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtSimpleTimeLong_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtSimpleTimeFull_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtDateTimeSimpleShort_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29, 13.45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 සැප් 29, 13.45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });

        test.equal(fmt.format(date), "2011 සැප්තැම්බර් 29 දින 13.45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 සැප්තැම්බර් 29 දින 13.45");
        test.done();
    },
    testDateFmtTemplateCalendar_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "si-LK",
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
    testDateFmtTemplateClock12SwitchHH_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtTemplateClock12Switchkk_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtTemplateClock24Switchhh_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtTemplateClock24SwitchKK_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtTypeDate_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtTypeTime_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtTypeDateTime_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29, 13.45");
        test.done();
    },
    testDateFmtShortDateComponentsY_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtShortDateComponentsM_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "සැ");
        test.done();
    },
    // resources(N formats) of si-LK locale are changed manually
    // because of combination of glyph, substring function can't
    // extract N formats properly in toolcode for datefomat.
    testDateFmtShortDateComponentsN_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ස");
        test.done();
    },
    testDateFmtShortDateComponentsD_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtShortDateComponentsDM_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09-29");
        test.done();
    },
    testDateFmtShortDateComponentsMY_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtShortDateComponentsDMW_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", date: "dmw"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09-29, බ්‍ර");
        test.done();
    },
    testDateFmtShortDateComponentsDMWY_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", date: "dmwy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29, බ්‍ර");
        test.done();
    },
    testDateFmtFullDateComponentsY_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtFullDateComponentsM_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "සැප්තැම්බර්");
        test.done();
    },
    testDateFmtFullDateComponentsD_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtFullDateComponentsDM_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "සැප්තැම්බර් 29");
        test.done();
    },
    testDateFmtFullDateComponentsMY_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 සැප්තැම්බර්");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 සැප්තැම්බර් 29");
        test.done();
    },
    testDateFmtFullDateComponentsDMW_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full", date: "dmw"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "සැප්තැම්බර් 29, බ්‍රහස්පතින්දා");
        test.done();
    },
    testDateFmtFullDateComponentsDMWY_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full", date: "dmwy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 සැප්තැම්බර් 29, බ්‍රහස්පතින්දා");
        test.done();
    },
    testDateFmtShortTimeComponentsS_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtShortTimeComponentsM_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtShortTimeComponentsH_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13");
        test.done();
    },
    testDateFmtShortTimeComponentsMS_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45.37");
        test.done();
    },
    testDateFmtShortTimeComponentsHM_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtShortTimeComponentsHMS_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37");
        test.done();
    },
    testDateFmtShortTimeComponentsHMA_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "si-LK",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 +0530");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "si-LK",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 +0530");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "si-LK",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 +0530");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "si-LK",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 +0530");
        test.done();
    },
    testDateFmtFullTimeComponentsS_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtFullTimeComponentsM_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
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
    testDateFmtFullTimeComponentsH_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13");
        test.done();
    },
    testDateFmtFullTimeComponentsMS_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45.37");
        test.done();
    },
    testDateFmtFullTimeComponentsHM_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtFullTimeComponentsHMS_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37");
        test.done();
    },
    testDateFmtFullTimeComponentsHMA_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "si-LK",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 +0530");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "si-LK",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 +0530");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "si-LK",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 +0530");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "si-LK",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 +0530");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "si-LK",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 +0530");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "තත්පර 30කින්");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "තත්පර 30කට පෙර");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "මිනිත්තු 10කින්");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "මිනිත්තු 10කට පෙර");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "පැය 4කින්");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "පැය 4කට පෙර");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "දින 4න්");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "දින 4කට පෙර");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "සති 9කින්");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "සති 9කට පෙර");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "si-LK",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "මාස 16කින්");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "si-LK",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "මාස 14කට පෙර");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "si-LK",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "වසර 14කින්");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_si_LK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "si-LK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "si-LK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "si-LK",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "වසර 21කට පෙර");
        test.done();
    }
};