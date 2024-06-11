/*
 * testdatefmt_sl_SI.js - test the date formatter object in Slovenian/Slovenia
 *
 * Copyright © 2012-2015, 2017, 2021, 2023-2024 JEDLSoft
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

module.exports.testdatefmt_sl_SI = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_sl_SI: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "sl-SI"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 11");
        test.done();
    },
    testDateFmtSimpleMedium_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. sep. 2011");
        test.done();
    },
    testDateFmtSimpleLong_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september 2011");
        test.done();
    },
    testDateFmtSimpleFull_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtSimpleTimeMedium_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtSimpleTimeLong_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtSimpleTimeFull_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtDateTimeSimpleShort_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 11, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. sep. 2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september 2011 ob 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september 2011 ob 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "sl-SI",
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
    testDateFmtTemplateClock12SwitchHH_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtTemplateClock12Switchkk_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtTemplateClock24Switchhh_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtTemplateClock24SwitchKK_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtTypeDate_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 11");
        test.done();
    },
    testDateFmtTypeTime_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtTypeDateTime_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 11, 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtShortDateComponentsM_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtShortDateComponentsN_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "s");
        test.done();
    },
    testDateFmtShortDateComponentsD_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtShortDateComponentsDM_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9");
        test.done();
    },
    testDateFmtShortDateComponentsMY_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9. 11");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 11");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "č, 29. 9");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "č, 29. 9. 11");
        test.done();
    },
    testDateFmtFullDateComponentsY_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtFullDateComponentsM_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "september");
        test.done();
    },
    testDateFmtFullDateComponentsD_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtFullDateComponentsDM_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september");
        test.done();
    },
    testDateFmtFullDateComponentsMY_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "september 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "četrtek, 29. september");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "četrtek, 29. september 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtShortTimeComponentsM_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtShortTimeComponentsH_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtShortTimeComponentsMS_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45:37");
        test.done();
    },
    testDateFmtShortTimeComponentsHM_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtShortTimeComponentsHMS_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    testDateFmtShortTimeComponentsHMA_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sl-SI", calendar: "gregorian",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 CEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sl-SI", calendar: "gregorian",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 CEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sl-SI", calendar: "gregorian",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 CEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sl-SI", calendar: "gregorian",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 CEST");
        test.done();
    },
    testDateFmtFullTimeComponentsS_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtFullTimeComponentsM_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtFullTimeComponentsH_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
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
    testDateFmtFullTimeComponentsMS_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45:37");
        test.done();
    },
    testDateFmtFullTimeComponentsHM_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtFullTimeComponentsHMS_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    testDateFmtFullTimeComponentsHMA_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sl-SI", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 CEST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sl-SI", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 CEST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sl-SI", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 CEST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sl-SI", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 CEST");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sl-SI", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 CET");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "čez 30 sekund");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinMinuteBefore_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "čez 10 minut");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinHourBefore_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "čez 4 ure");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinDayBefore_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "pred 4 ur");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "čez 4 dni");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinFortnightBefore_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "pred 4 dni");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "čez 9 tednov");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinQuarterBefore_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "pred 9 tednov");
        test.done();
    },
    */
    testDateFmtFormatRelativeWithinTwoYearsAfter_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "čez 16 mesecev");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinTwoYearsBefore_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "pred 14 mesecev");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sl-SI",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "čez 14 let");
        test.done();
    },
    /*
    testDateFmtFormatRelativeYearsBefore_sl_SI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sl-SI", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sl-SI",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sl-SI",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "pred 21 let");
        test.done();
    }
    */
};