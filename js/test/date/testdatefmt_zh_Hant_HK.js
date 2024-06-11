/*
 * testdatefmt_zh_HK.js - test the date formatter object in Chinese (traditional)
 *
 * Copyright © 2012-2015,2017, JEDLSoft
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

module.exports.testdatefmt_zh_Hant_HK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_zh_Hant_HK: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "zh-Hant-HK"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/2011");
        test.done();
    },
    testDateFmtSimpleMedium_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011年9月29日");
        test.done();
    },
    testDateFmtSimpleLong_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011年9月29日");
        test.done();
    },
    testDateFmtSimpleFull_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011年9月29日");
        test.done();
    },
    testDateFmtSimpleTimeShort_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午1:45");
        test.done();
    },
    testDateFmtSimpleTimeMedium_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午1:45");
        test.done();
    },
    testDateFmtSimpleTimeLong_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午1:45");
        test.done();
    },
    testDateFmtSimpleTimeFull_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午1:45");
        test.done();
    },
    testDateFmtDateTimeSimpleShort_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/2011 下午1:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011年9月29日 下午1:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011年9月29日 下午1:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011年9月29日 下午1:45");
        test.done();
    },
    testDateFmtTemplateCalendar_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtTemplateCalendarIncompatibleDateType_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        // convert automatically to a Julian calendar date
        test.equal(fmt.format(date), "2011-09-16 13:45");
        test.done();
    },
    testDateFmtTemplateClock12SwitchHH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtTemplateClock12Switchkk_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtTemplateClock24Switchhh_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtTemplateClock24SwitchKK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtTypeDate_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/2011");
        test.done();
    },
    testDateFmtTypeTime_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午1:45");
        test.done();
    },
    testDateFmtTypeDateTime_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/2011 下午1:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011年");
        test.done();
    },
    testDateFmtShortDateComponentsM_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9月");
        test.done();
    },
    testDateFmtShortDateComponentsN_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtShortDateComponentsD_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29日");
        test.done();
    },
    testDateFmtShortDateComponentsDM_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtShortDateComponentsMY_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/2011");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/2011");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9四");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/2011四");
        test.done();
    },
    testDateFmtFullDateComponentsY_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011年");
        test.done();
    },
    testDateFmtFullDateComponentsM_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9月");
        test.done();
    },
    testDateFmtFullDateComponentsD_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29日");
        test.done();
    },
    testDateFmtFullDateComponentsDM_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9月29日");
        test.done();
    },
    testDateFmtFullDateComponentsMY_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011年9月");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011年9月29日");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9月29日星期四");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011年9月29日星期四");
        test.done();
    },
    testDateFmtShortTimeComponentsS_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtShortTimeComponentsM_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtShortTimeComponentsH_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtShortTimeComponentsMS_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtShortTimeComponentsHM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtShortTimeComponentsHMS_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtShortTimeComponentsHMA_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午1:45");
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            time: "hmz",
            timezone: "Asia/Hong_Kong"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 [HKST]");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Hong_Kong"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午1:45 [HKST]");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午1:45:37");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Hong_Kong"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 [HKST]");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Hong_Kong"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午1:45:37 [HKST]");
        test.done();
    },
    testDateFmtFullTimeComponentsS_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtFullTimeComponentsM_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtFullTimeComponentsH_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtFullTimeComponentsMS_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtFullTimeComponentsHM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtFullTimeComponentsHMS_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
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
    testDateFmtFullTimeComponentsHMA_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午1:45");
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Hong_Kong"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 [HKST]");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Hong_Kong"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午1:45 [HKST]");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午1:45:37");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Hong_Kong"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 [HKST]");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Hong_Kong"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午1:45:37 [HKST]");
        test.done();
    },
    testDateFmtTimeFrameDefaultWeeHours_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hma"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "上午1:45");
        test.done();
    },
    testDateFmtTimeFrameDefaultEarlyMorning_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hma"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 8,
            minute: 30,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "上午8:30");
        test.done();
    },
    testDateFmtTimeFrameDefaultLateMorning_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hma"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 11,
            minute: 30,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "上午11:30");
        test.done();
    },
    testDateFmtTimeFrameDefaultNoonHour_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hma"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 12,
            minute: 37,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午12:37");
        test.done();
    },
    testDateFmtTimeFrameDefaultAfterNoon_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hma"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 15,
            minute: 37,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午3:37");
        test.done();
    },
    testDateFmtTimeFrameDefaultEvening_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hma"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 19,
            minute: 47,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午7:47");
        test.done();
    },
    testDateFmtTimeFrameDefaultNight_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hma"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 22,
            minute: 53,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午10:53");
        test.done();
    },
    testDateFmtTimeFrameChineseWeeHours_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hma",
            meridiems: "chinese"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "凌晨1:45");
        test.done();
    },
    testDateFmtTimeFrameChineseEarlyMorning_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hma",
            meridiems: "chinese"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 8,
            minute: 30,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "早上8:30");
        test.done();
    },
    testDateFmtTimeFrameChineseLateMorning_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hma",
            meridiems: "chinese"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 11,
            minute: 30,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "上午11:30");
        test.done();
    },
    testDateFmtTimeFrameChineseNoonHour_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hma",
            meridiems: "chinese"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 12,
            minute: 37,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "正午12:37");
        test.done();
    },
    testDateFmtTimeFrameChineseAfterNoon_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hma",
            meridiems: "chinese"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 15,
            minute: 37,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "下午3:37");
        test.done();
    },
    testDateFmtTimeFrameChineseEvening_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hma",
            meridiems: "chinese"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 19,
            minute: 47,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "傍晚7:47");
        test.done();
    },
    testDateFmtTimeFrameChineseNight_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hma",
            meridiems: "chinese"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 22,
            minute: 53,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "晚上10:53");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zh-Hant-HK",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Hong_Kong"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 [HKST]");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 秒後");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 秒前");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 分鐘後");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 分鐘前");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 小時後");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 小時前");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 日後");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 日前");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 星期後");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 星期前");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 個月後");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 個月前");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 年後");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_zh_Hant_HK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zh-Hant-HK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zh-Hant-HK",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 年前");
        test.done();
    }
};