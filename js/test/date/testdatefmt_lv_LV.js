/*
 * testdatefmt_lv_LV.js - test the date formatter object in Latvia
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

module.exports.testdatefmt_lv_LV = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_lv_LV: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "lv-LV"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11");
        test.done();
    },
    testDateFmtSimpleMedium_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011. gada 29. sept.");
        test.done();
    },
    testDateFmtSimpleLong_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011. gada 29. septembris");
        test.done();
    },
    testDateFmtSimpleFull_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011. gada 29. septembris");
        test.done();
    },
    testDateFmtSimpleTimeShort_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtSimpleTimeMedium_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtSimpleTimeLong_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtSimpleTimeFull_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtDateTimeSimpleShort_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011. gada 29. sept. 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011. gada 29. septembris 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011. gada 29. septembris 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "lv-LV",
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
    testDateFmtTemplateClock12SwitchHH_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtTemplateClock12Switchkk_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtTemplateClock24Switchhh_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtTemplateClock24SwitchKK_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtTypeDate_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11");
        test.done();
    },
    testDateFmtTypeTime_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtTypeDateTime_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtShortDateComponentsM_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtShortDateComponentsN_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtShortDateComponentsD_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtShortDateComponentsDM_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09");
        test.done();
    },
    testDateFmtShortDateComponentsMY_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09.11");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "C, 29.09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "C, 29.09.11");
        test.done();
    },
    testDateFmtFullDateComponentsY_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtFullDateComponentsM_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septembris");
        test.done();
    },
    testDateFmtFullDateComponentsD_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtFullDateComponentsDM_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. septembris");
        test.done();
    },
    testDateFmtFullDateComponentsMY_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011. gada septembris");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011. gada 29. septembris");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ceturtdiena, 29. septembris");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ceturtdiena, 2011. gada 29. septembris");
        test.done();
    },
    testDateFmtShortTimeComponentsS_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtShortTimeComponentsM_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtShortTimeComponentsH_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtShortTimeComponentsMS_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtShortTimeComponentsHM_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtShortTimeComponentsHMS_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtShortTimeComponentsHMA_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtShortTimeComponentsHMZ_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lv-LV",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 EEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lv-LV",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 EEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtShortTimeComponentsHMSZ_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lv-LV",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 EEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lv-LV",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 EEST");
        test.done();
    },
    testDateFmtFullTimeComponentsS_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtFullTimeComponentsM_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtFullTimeComponentsH_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtFullTimeComponentsMS_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtFullTimeComponentsHM_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtFullTimeComponentsHMS_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtFullTimeComponentsHMA_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    testDateFmtFullTimeComponentsHMZ_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lv-LV",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 EEST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lv-LV",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 EEST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_lv_LV: function(test) {
        test.expect(4);
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lv-LV",
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
    /*function testDateFmtFormatRelativeWithinMinuteAfter_lv_LV() {
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "+30 s");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "-30 s");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "+10 min");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "-10 min");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "+4 h");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "-4 h");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "+4 d");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "-4 d");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "+9 w");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "-9 w");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "+16 m");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "-16 m");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lv-LV",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "+14 y");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_lv_LV: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lv-LV", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lv-LV",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lv-LV",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "-21 y");
        test.done();
    }
    */
};
