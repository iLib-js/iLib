/*
 * testdatefmt_vi_VN.js - test the date formatter object in Vietnamese-Vietnam
 *
 * Copyright © 2012-2015, 2017, 2020, 2024 JEDLSoft
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

module.exports.testdatefmt_vi_VN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_vi_VN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "vi-VN"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtSimpleMedium_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 thg 9, 2011");
        test.done();
    },
    testDateFmtSimpleLong_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 tháng 9, 2011");
        test.done();
    },
    testDateFmtSimpleFull_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 tháng 9, 2011");
        test.done();
    },
    testDateFmtAllComponentsShort_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "short", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T5, 29/9/11");
        test.done();
    },
    testDateFmtAllComponentsMedium_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "medium", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T5, 29 thg 9, 2011");
        test.done();
    },
    testDateFmtAllComponentsLong_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "long", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Th 5, 29 tháng 9, 2011");
        test.done();
    },
    testDateFmtAllComponentsFull_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Thứ Năm, 29 tháng 9, 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtSimpleTimeMedium_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtSimpleTimeLong_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtSimpleTimeFull_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtDateTimeSimpleShort_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 29/9/11");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 29 thg 9, 2011");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "lúc 13:45 29 tháng 9, 2011");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "lúc 13:45 29 tháng 9, 2011");
        test.done();
    },
    testDateFmtTemplateCalendar_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "vi-VN",
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
    testDateFmtTemplateClock12SwitchHH_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtTemplateClock12Switchkk_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtTemplateClock24Switchhh_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtTemplateClock24SwitchKK_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtTypeDate_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtTypeTime_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtTypeDateTime_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 29/9/11");
        test.done();
    },
    testDateFmtShortDateComponentsY_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtShortDateComponentsM_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T9");
        test.done();
    },
    testDateFmtShortDateComponentsN_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 't9');
        test.done();
    },
    testDateFmtShortDateComponentsD_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtShortDateComponentsDM_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtShortDateComponentsMY_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtShortDateComponentsDMY_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtShortDateComponentsWDM_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T5, 29/9");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T5, 29/9/11");
        test.done();
    },
    testDateFmtFullDateComponentsY_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtFullDateComponentsM_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Tháng 9");
        test.done();
    },
    testDateFmtFullDateComponentsD_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtFullDateComponentsDM_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 tháng 9");
        test.done();
    },
    testDateFmtFullDateComponentsMY_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "tháng 9, 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 tháng 9, 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Thứ Năm, 29 tháng 9");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Thứ Năm, 29 tháng 9, 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtShortTimeComponentsM_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtShortTimeComponentsH_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtShortTimeComponentsMS_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtShortTimeComponentsHM_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtShortTimeComponentsHMS_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtShortTimeComponentsHMA_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtShortTimeComponentsHMZ_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "vi-VN",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +07");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "vi-VN",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +07");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtShortTimeComponentsHMSZ_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "vi-VN",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +07");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "vi-VN",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +07");
        test.done();
    },
    testDateFmtFullTimeComponentsS_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtFullTimeComponentsM_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtFullTimeComponentsH_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtFullTimeComponentsMS_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtFullTimeComponentsHM_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtFullTimeComponentsHMS_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtFullTimeComponentsHMA_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtFullTimeComponentsHMZ_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "vi-VN",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +07");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "vi-VN",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +07");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
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
    testDateFmtFullTimeComponentsHMSZ_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "vi-VN",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +07");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "vi-VN",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +07");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "vi-VN",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Ho_Chi_Minh"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +07");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "sau 30 giây nữa");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "sau 10 phút nữa");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "sau 4 giờ nữa");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "sau 4 ngày nữa");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "sau 9 tuần nữa");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "sau 16 tháng nữa");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_vi_VN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "vi-VN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "vi-VN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "vi-VN",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "sau 14 năm nữa");
        test.done();
    }
};