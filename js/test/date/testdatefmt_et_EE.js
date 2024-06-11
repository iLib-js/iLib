/*
 * testdatefmt_et_EE.js - test the date formatter object in Estonian
 *
 * Copyright © 2012-2015,2017,2021,2023 JEDLSoft
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

module.exports.testdatefmt_et_EE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_et_EE: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "et-EE"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtSimpleMedium_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. sept 2011");
        test.done();
    },
    testDateFmtSimpleLong_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtSimpleFull_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtSimpleTimeShort_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtSimpleTimeMedium_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtSimpleTimeLong_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtSimpleTimeFull_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtDateTimeSimpleShort_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. sept 2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september 2011, kell 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september 2011, kell 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "et-EE",
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
    testDateFmtTemplateClock12SwitchHH_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtTemplateClock12Switchkk_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtTemplateClock24Switchhh_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtTemplateClock24SwitchKK_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortDateComponentsY_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortDateComponentsM_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortDateComponentsN_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortDateComponentsD_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortDateComponentsDM_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortDateComponentsMY_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortDateComponentsDMY_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortDateComponentsWDM_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "N, 29.09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "N, 29.09.11");
        test.done();
    },
    testDateFmtFullDateComponentsY_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullDateComponentsM_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullDateComponentsD_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullDateComponentsDM_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullDateComponentsMY_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullDateComponentsDMY_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullDateComponentsWDM_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "neljapäev, 29. september");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "neljapäev, 29. september 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortTimeComponentsM_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortTimeComponentsH_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortTimeComponentsHM_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortTimeComponentsHMS_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortTimeComponentsHMA_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortTimeComponentsHMZ_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "et-EE",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortTimeComponentsHMAZ_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "et-EE",
            type: "time",
            time: "ahmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortTimeComponentsHMSA_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortTimeComponentsHMSZ_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "et-EE",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtShortTimeComponentsHMSAZ_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "et-EE",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullTimeComponentsS_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullTimeComponentsM_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullTimeComponentsH_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullTimeComponentsHM_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullTimeComponentsHMS_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullTimeComponentsHMA_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullTimeComponentsHMZ_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "et-EE",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullTimeComponentsHMSA_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullTimeComponentsHMSZ_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "et-EE",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFullTimeComponentsHMSAZ_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "et-EE",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtWithTimeZoneAndNoDST_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "et-EE",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 EET");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinMinuteAfter_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFormatRelativeWithinHourAfter_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "et-EE",
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
    testDateFmtFormatRelativeWithinDayAfter_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "et-EE",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "et-EE",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "et-EE",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_et_EE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "et-EE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "et-EE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "et-EE",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    }
    */

};