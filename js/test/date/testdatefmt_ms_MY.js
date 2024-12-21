/*
 * testdatefmt_ms_MY.js - test the date formatter object in Malaysia
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

module.exports.testdatefmt_ms_MY = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtSimpleShort_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11");
        test.done();
    },
    testDateFmtSimpleMedium_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtSimpleLong_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    testDateFmtSimpleFull_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PTG");
        test.done();
    },
    testDateFmtSimpleTimeMedium_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PTG");
        test.done();
    },
    testDateFmtSimpleTimeLong_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PTG");
        test.done();
    },
    testDateFmtSimpleTimeFull_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PTG");
        test.done();
    },
    testDateFmtDateTimeSimpleShort_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11, 1:45 PTG");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sep 2011, 1:45 PTG");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011 pada 1:45 PTG");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011 pada 1:45 PTG");
        test.done();
    },
    testDateFmtTemplateCalendar_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ms-MY",
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
    testDateFmtTemplateClock12SwitchHH_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtTemplateClock12Switchkk_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtTemplateClock24Switchhh_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtTemplateClock24SwitchKK_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", locale: "ms-MY", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", locale: "ms-MY", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", locale: "ms-MY", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", locale: "ms-MY", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtTypeDate_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11");
        test.done();
    },
    testDateFmtTypeTime_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PTG");
        test.done();
    },
    testDateFmtTypeDateTime_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11, 1:45 PTG");
        test.done();
    },
    testDateFmtShortDateComponentsY_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtShortDateComponentsM_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtShortDateComponentsN_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtShortDateComponentsD_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtShortDateComponentsDM_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtShortDateComponentsMY_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09/11");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "K, 29/09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "K, 29/09/11");
        test.done();
    },
    testDateFmtFullDateComponentsY_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtFullDateComponentsM_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September");
        test.done();
    },
    testDateFmtFullDateComponentsD_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtFullDateComponentsDM_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September");
        test.done();
    },
    testDateFmtFullDateComponentsMY_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 8,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Isnin, 29 Ogos");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 8,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Isnin, 29 Ogos 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtShortTimeComponentsM_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtShortTimeComponentsH_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtShortTimeComponentsMS_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtShortTimeComponentsHM_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtShortTimeComponentsHMS_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtShortTimeComponentsHMA_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PTG");
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ms-MY",
            type: "time",
            time: "hmz",
            timezone: "Asia/Kuala_Lumpur"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 +08");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ms-MY",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Kuala_Lumpur"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PTG +08");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PTG");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ms-MY",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Kuala_Lumpur"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 +08");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ms-MY",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kuala_Lumpur"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PTG +08");
        test.done();
    },
    testDateFmtFullTimeComponentsS_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtFullTimeComponentsM_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtFullTimeComponentsH_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtFullTimeComponentsMS_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtFullTimeComponentsHM_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtFullTimeComponentsHMS_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
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
    testDateFmtFullTimeComponentsHMA_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PTG");
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ms-MY",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Kuala_Lumpur"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 +08");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ms-MY",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Kuala_Lumpur"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PTG +08");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ms-MY", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PTG");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ms-MY",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Kuala_Lumpur"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 +08");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ms-MY",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kuala_Lumpur"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PTG +08");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ms_MY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ms-MY",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Kuala_Lumpur"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ms-MY",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 +08");
        test.done();
    }
};
