/*
 * testdatefmt_de_DE.js - test the date formatter object in German
 *
 * Copyright © 2013-2015,2017, JEDLSoft
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

module.exports.testdatefmt_ja_JP = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_ja_JP: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ja-JP"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011/09/29");
        test.done();
    },
    testDateFmtSimpleMedium_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011/09/29");
        test.done();
    },
    testDateFmtSimpleLong_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtSimpleFull_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtSimpleTimeShort_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtSimpleTimeMedium_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtSimpleTimeLong_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtSimpleTimeFull_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtDateTimeSimpleShort_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011/09/29 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011/09/29 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011年9月29日 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011年9月29日 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ja-JP",
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
    testDateFmtTemplateCalendarIncompatibleDateType_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtTemplateClock12SwitchHH_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtTemplateClock12Switchkk_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtTemplateClock24Switchhh_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtTemplateClock24SwitchKK_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtTypeDate_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011/09/29");
        test.done();
    },
    testDateFmtTypeTime_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtTypeDateTime_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011/09/29 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtShortDateComponentsM_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09月");
        test.done();
    },
    testDateFmtShortDateComponentsN_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtShortDateComponentsD_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtShortDateComponentsDM_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09/29");
        test.done();
    },
    testDateFmtShortDateComponentsMY_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011/09");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011/09/29");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09/29木");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011/09/29木");
        test.done();
    },
    testDateFmtFullDateComponentsY_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFullDateComponentsM_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFullDateComponentsD_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFullDateComponentsDM_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFullDateComponentsMY_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFullDateComponentsDMY_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFullDateComponentsWDM_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9月29日木曜日");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011年9月29日木曜日");
        test.done();
    },
    testDateFmtShortTimeComponentsS_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtShortTimeComponentsM_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtShortTimeComponentsH_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtShortTimeComponentsMS_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtShortTimeComponentsHM_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtShortTimeComponentsHMS_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtShortTimeComponentsHMA_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtShortTimeComponentsHMZ_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ja-JP",
            type: "time",
            time: "hmz",
            timezone: "Asia/Tokyo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 JST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ja-JP",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Tokyo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 JST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtShortTimeComponentsHMSZ_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ja-JP",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Tokyo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 JST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ja-JP",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Tokyo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 JST");
        test.done();
    },
    testDateFmtFullTimeComponentsS_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFullTimeComponentsM_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFullTimeComponentsH_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFullTimeComponentsMS_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFullTimeComponentsHM_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFullTimeComponentsHMS_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFullTimeComponentsHMA_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFullTimeComponentsHMZ_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ja-JP",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Tokyo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 JST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ja-JP",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Tokyo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 JST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFullTimeComponentsHMSZ_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ja-JP",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Tokyo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 JST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ja-JP",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Tokyo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 JST");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ja-JP",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Tokyo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 JST");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFormatRelativeWithinMinuteBefore_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFormatRelativeWithinHourAfter_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 分後");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 分前");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 時間後");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 時間前");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFormatRelativeWithinFortnightBefore_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFormatRelativeWithinQuarterAfter_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 週間後");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 週間前");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 か月後");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ja-JP",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 か月前");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ja-JP",
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
    testDateFmtFormatRelativeYearsBefore_ja_JP: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ja-JP", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ja-JP",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ja-JP",
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