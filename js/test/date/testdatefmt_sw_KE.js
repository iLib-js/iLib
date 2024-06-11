/*
 * testdatefmt_sw_KE.js - test the date formatter object in Kenya
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

module.exports.testdatefmt_sw_KE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_sw_KE: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "sw-Latn-KE"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    testDateFmtSimpleMedium_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sep 2011");
        test.done();
    },
    testDateFmtSimpleLong_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Septemba 2011");
        test.done();
    },
    testDateFmtSimpleFull_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Septemba 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtSimpleTimeMedium_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtSimpleTimeLong_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtSimpleTimeFull_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtDateTimeSimpleShort_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09/2011, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Sep 2011, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });

        test.equal(fmt.format(date), '29 Septemba 2011 saa 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Septemba 2011 saa 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtTemplateClock12SwitchHH_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtTemplateClock12Switchkk_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtTemplateClock24Switchhh_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtTemplateClock24SwitchKK_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtTypeDate_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    testDateFmtTypeTime_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtTypeDateTime_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09/2011, 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtShortDateComponentsM_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09");
        test.done();
    },
    testDateFmtShortDateComponentsN_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "S");
        test.done();
    },
    testDateFmtShortDateComponentsD_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtShortDateComponentsDM_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09");
        test.done();
    },
    testDateFmtShortDateComponentsMY_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09/2011");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    testDateFmtShortDateComponentsDMW_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", date: "dmw"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T, 29/09");
        test.done();
    },
    testDateFmtShortDateComponentsDMWY_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", date: "dmwy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T, 29/09/2011");
        test.done();
    },
    testDateFmtFullDateComponentsY_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtFullDateComponentsM_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Septemba");
        test.done();
    },
    testDateFmtFullDateComponentsD_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtFullDateComponentsDM_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Septemba");
        test.done();
    },
    testDateFmtFullDateComponentsMY_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Septemba 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Septemba 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMW_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "dmw"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Alhamisi, 29 Septemba");
        test.done();
    },
    testDateFmtFullDateComponentsDMWY_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "dmwy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Alhamisi, 29 Septemba 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtShortTimeComponentsM_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtShortTimeComponentsH_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtShortTimeComponentsMS_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtShortTimeComponentsHM_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtShortTimeComponentsHMS_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtShortTimeComponentsHMA_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtShortTimeComponentsHMZ_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sw-Latn-KE",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 EAT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sw-Latn-KE",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 EAT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtShortTimeComponentsHMSZ_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sw-Latn-KE",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 EAT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sw-Latn-KE",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 EAT");
        test.done();
    },
    testDateFmtFullTimeComponentsS_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtFullTimeComponentsM_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtFullTimeComponentsH_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtFullTimeComponentsMS_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtFullTimeComponentsHM_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtFullTimeComponentsHMS_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtFullTimeComponentsHMA_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtFullTimeComponentsHMZ_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sw-Latn-KE",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 EAT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sw-Latn-KE",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 EAT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
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
    testDateFmtFullTimeComponentsHMSZ_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sw-Latn-KE",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 EAT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sw-Latn-KE",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 EAT");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sw-Latn-KE",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 EAT");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "baada ya sekunde 30");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "Sekunde 30 zilizopita");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "baada ya dakika 10");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dakika 10 zilizopita");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "baada ya saa 4");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "saa 4 zilizopita");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "baada ya siku 4");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "siku 4 zilizopita");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "baada ya wiki 9");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "wiki 9 zilizopita");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "baada ya miezi 16");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "miezi 14 iliyopita");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "baada ya miaka 14");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_sw_KE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sw-Latn-KE",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "miaka 21 iliyopita");
        test.done();
    }
};