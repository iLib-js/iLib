/*
 * testdatefmt_ku_TR.js - test the date formatter object in Kurdish Turkish
 *
 * Copyright © 2026 JEDLSoft
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

module.exports.testdatefmt_ku_TR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtSimpleShort_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29.09.2011');
        test.done();
    },
    testDateFmtSimpleMedium_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29 îln, 2011');
        test.done();
    },
    testDateFmtSimpleLong_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29ê îlona 2011an');
        test.done();
    },
    testDateFmtSimpleFull_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29ê îlona 2011an');
        test.done();
    },
    testDateFmtSimpleTimeShort_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtSimpleTimeMedium_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtSimpleTimeLong_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtSimpleTimeFull_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleShort_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29.09.2011 ‏13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29 îln, 2011 ‏13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29ê îlona 2011an ‏13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29ê îlona 2011an ‏13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011-09-29');
        test.done();
    },



    testDateFmtTemplateClock12SwitchHH_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '01:45');
        test.done();
    },
    testDateFmtTemplateClock12Switchkk_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '01:45');
        test.done();
    },
    testDateFmtTemplateClock24Switchhh_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtTemplateClock24SwitchKK_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", locale: "ku-TR", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '01:45');
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", locale: "ku-TR", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '01:45');
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", locale: "ku-TR", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", locale: "ku-TR", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date),  '13:45');
        test.done();
    },
    testDateFmtTypeDate_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29.09.2011');
        test.done();
    },
    testDateFmtTypeTime_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtTypeDateTime_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29.09.2011 ‏13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011');
        test.done();
    },
    testDateFmtShortDateComponentsM_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '09');
        test.done();
    },
    testDateFmtShortDateComponentsD_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29');
        test.done();
    },
    testDateFmtShortDateComponentsDM_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29.09');
        test.done();
    },
    testDateFmtShortDateComponentsMY_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏09.2011');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });

        test.equal(fmt.format(date), '‏29.09.2011');
        test.done();

    },
    testDateFmtShortDateComponentsWDM_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'P, ‏29.09');
        test.done();

    },
    testDateFmtShortDateComponentsWDMY_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'P, 29.09.2011');
        test.done();

    },
    testDateFmtFullDateComponentsY_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011');
        test.done();
    },
    testDateFmtFullDateComponentsM_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'îlon');
        test.done();
    },
    testDateFmtFullDateComponentsD_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29');
        test.done();
    },
    testDateFmtFullDateComponentsDM_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29ê îlon');
        test.done();
    },
    testDateFmtFullDateComponentsMY_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'îlona 2011an');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29ê îlona 2011an');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'pêncşem, ‏29ê îlon');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date),  'pêncşem, 29ê îlona 2011an');
        test.done();
    },
    testDateFmtShortTimeComponentsS_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '37');
        test.done();
    },
    testDateFmtShortTimeComponentsM_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '45');
        test.done();
    },
    testDateFmtShortTimeComponentsH_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13');
        test.done();
    },
    testDateFmtShortTimeComponentsMS_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '45:37');
        test.done();
    },
    testDateFmtShortTimeComponentsHM_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtShortTimeComponentsHMS_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37');
        test.done();
    },
    testDateFmtShortTimeComponentsHMA_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-TR",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45 +03');
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-TR",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45 +03');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-TR",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37 +03');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-TR",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37 +03');
        test.done();
    },
    testDateFmtFullTimeComponentsS_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '37');
        test.done();
    },
    testDateFmtFullTimeComponentsM_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '45');
        test.done();
    },
    testDateFmtFullTimeComponentsH_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13');
        test.done();
    },
    testDateFmtFullTimeComponentsMS_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '45:37');
        test.done();
    },
    testDateFmtFullTimeComponentsHM_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtFullTimeComponentsHMS_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37');
        test.done();
    },
    testDateFmtFullTimeComponentsHMA_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45');
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-TR",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45 +03');
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-TR",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45 +03');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-TR",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37 +03');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-TR",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37 +03');
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ku-TR",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏13:45:37 +03');
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏piştî 30 saniyeyan");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏berî 30 saniyeyan");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏piştî 10 deqîqeyan");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏berî 10 deqîqeyan");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏piştî 4 saetan");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏berî 4 saetan");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏piştî 4 rojan");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏berî 4 rojan");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏piştî 9 hefteyan");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏berî 9 hefteyan");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏piştî 16 mehan");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏berî 14 mehan");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ku-TR",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏di 14 salan de");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ku_TR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ku-TR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ku-TR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ku-TR",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏berî 21 salan");
        test.done();
    }
};