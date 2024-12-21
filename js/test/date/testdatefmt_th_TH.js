/*
 * testdatefmt_th_TH.js - test the date formatter object in พฤaiLand
 *
 * Copyright © 2012-2015,2017-2018,2023 JEDLSoft
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

if (typeof(ThaiSolarDate) === "undefined") {
    var ThaiSolarDate = require("../../lib/ThaiSolarDate.js");
}
if (typeof(JulianDate) === "undefined") {
    var JulianDate = require("../../lib/JulianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdatefmt_th_TH = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_th_TH: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "th-TH"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtSimpleMedium_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ก.ย. 2011");
        test.done();
    },
    testDateFmtSimpleLong_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 กันยายน 2011");
        test.done();
    },
    testDateFmtSimpleFull_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 กันยายน 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtSimpleTimeMedium_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtSimpleTimeLong_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtSimpleTimeFull_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtDateTimeSimpleShort_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ก.ย. 2011 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 กันยายน 2011 เวลา 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 กันยายน 2011 เวลา 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "th-TH",
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
    testDateFmtTemplateClock12SwitchHH_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtTemplateClock12Switchkk_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtTemplateClock24Switchhh_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtTemplateClock24SwitchKK_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtTypeDate_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "date"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtTypeTime_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtTypeDateTime_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "datetime"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "y"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortDateComponentsM_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "m"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortDateComponentsN_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "m", length:"full"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "กันยายน");
        test.done();
    },
    testDateFmtShortDateComponentsD_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "d"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortDateComponentsDM_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "dm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortDateComponentsMY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "my"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortDateComponentsDMY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "dmy"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortDateComponentsWDM_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "wdm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "พฤที่ 29/9");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "พฤที่ 29/9/54");
        test.done();
    },
    testDateFmtFullDateComponentsY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFullDateComponentsM_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "กันยายน");
        test.done();
    },
    testDateFmtFullDateComponentsD_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFullDateComponentsDM_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 กันยายน");
        test.done();
    },
    testDateFmtFullDateComponentsMY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "กันยายน 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 กันยายน 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "วันพฤหัสบดีที่ 29 กันยายน");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "วันพฤหัสบดีที่ 29 กันยายน 2554");
        test.done();
    },
    testDateFmtShortTimeComponentsS_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortTimeComponentsM_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortTimeComponentsH_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortTimeComponentsMS_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortTimeComponentsHM_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortTimeComponentsHMS_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortTimeComponentsHMA_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortTimeComponentsHMZ_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "th-TH", calendar: "thaisolar",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortTimeComponentsHMAZ_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "th-TH", calendar: "thaisolar",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortTimeComponentsHMSA_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortTimeComponentsHMSZ_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "th-TH", calendar: "thaisolar",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtShortTimeComponentsHMSAZ_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "th-TH", calendar: "thaisolar",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFullTimeComponentsS_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFullTimeComponentsM_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFullTimeComponentsH_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFullTimeComponentsMS_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFullTimeComponentsHM_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFullTimeComponentsHMS_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFullTimeComponentsHMA_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFullTimeComponentsHMZ_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "th-TH", calendar: "thaisolar",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFullTimeComponentsHMAZ_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "th-TH", calendar: "thaisolar",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFullTimeComponentsHMSA_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFullTimeComponentsHMSZ_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "th-TH", calendar: "thaisolar",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFullTimeComponentsHMSAZ_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "th-TH", calendar: "thaisolar",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtWithTimeZoneAndNoDST_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "th-TH", calendar: "thaisolar",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtFormatRelativeWithinMinuteAfter_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var reference = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ในอีก 30 วินาที");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var reference = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 วินาทีที่ผ่านมา");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var reference = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ในอีก 10 นาที");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var reference = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 นาทีที่ผ่านมา");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var reference = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ในอีก 4 ชั่วโมง");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var reference = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 ชั่วโมงที่ผ่านมา");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var reference = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ในอีก 4 วัน");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var reference = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 วันที่ผ่านมา");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var reference = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ในอีก 9 สัปดาห์");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var reference = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 สัปดาห์ที่ผ่านมา");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var reference = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ในอีก 16 เดือน");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var reference = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 เดือนที่ผ่านมา");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var reference = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ในอีก 14 ปี");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full"});
        test.ok(fmt !== null);

        var reference = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 ปีที่แล้ว");
        test.done();
    },
    testDateFmtShortDMWY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", date: "dmwy"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "พฤที่ 29/9/54");
        test.done();
    },
    testDateFmtMediumDMWY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", date: "dmwy"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "พฤ.ที่ 29 ก.ย. 2554");
        test.done();
    },
    testDateFmtLongDMWY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", date: "dmwy"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "พฤ.ที่ 29 กันยายน 2554");
        test.done();
    },
    testDateFmtFullDMWY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "dmwy"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "วันพฤหัสบดีที่ 29 กันยายน 2554");
        test.done();
    },
    testDateFmtShortDMY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", date: "dmy"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
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
    testDateFmtMediumDMY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", date: "dmy"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ก.ย. 2011");
        test.done();
    },
    testDateFmtLongDMY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", date: "dmy"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 กันยายน 2011");
        test.done();
    },
    testDateFmtFullDMY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 กันยายน 2011");
        test.done();
    },
    testDateFmtShortDMW_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", date: "dmw"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "พฤที่ 29/9");
        test.done();
    },
    testDateFmtMediumDMW_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", date: "dmw"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "พฤ.ที่ 29 ก.ย.");
        test.done();
    },
    testDateFmtLongDMW_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", date: "dmw"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "พฤ.ที่ 29 กันยายน");
        test.done();
    },
    testDateFmtFullDMW_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "dmw"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "วันพฤหัสบดีที่ 29 กันยายน");
        test.done();
    },
    testDateFmtShortDMW_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", date: "dm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
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
    testDateFmtMediumDM_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", date: "dm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ก.ย.");
        test.done();
    },
    testDateFmtLongDM_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", date: "dm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 กันยายน");
        test.done();
    },
    testDateFmtFullDM_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 กันยายน");
        test.done();
    },
    testDateFmtShortMY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", date: "my"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/54");
        test.done();
    },
    testDateFmtMediumMY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", date: "my"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ก.ย. 2554");
        test.done();
    },
    testDateFmtLongMY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", date: "my"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "กันยายน 2554");
        test.done();
    },
    testDateFmtFullMY_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "กันยายน 2554");
        test.done();
    },
    testDateFmtShortDW_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "short", date: "dw"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "พฤที่ 29");
        test.done();
    },
    testDateFmtMediumDW_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "medium", date: "dw"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "พฤ.ที่ 29");
        test.done();
    },
    testDateFmtLongDW_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "long", date: "dw"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "พฤ.ที่ 29");
        test.done();
    },
    testDateFmtFullDW_th_TH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar", length: "full", date: "dw"});
        test.ok(fmt !== null);

        var date = new ThaiSolarDate({
            locale: "th-TH",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "วันพฤหัสบดีที่ 29");
        test.done();
    }
};
