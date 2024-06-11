/*
 * testdatefmt_ro_RO.js - test the date formatter object in  Romanian
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

module.exports.testdatefmt_ro_RO = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_ro_RO: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ro-RO"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011");
        test.done();
    },
    testDateFmtSimpleMedium_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sept. 2011");
        test.done();
    },
    testDateFmtSimpleLong_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembrie 2011");
        test.done();
    },
    testDateFmtSimpleFull_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembrie 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtSimpleTimeMedium_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtSimpleTimeLong_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtSimpleTimeFull_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtDateTimeSimpleShort_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sept. 2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembrie 2011 la 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembrie 2011 la 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ro-RO",
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
    testDateFmtTemplateClock12SwitchHH_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtTemplateClock12Switchkk_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtTemplateClock24Switchhh_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtTemplateClock24SwitchKK_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtTypeDate_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011");
        test.done();
    },
    testDateFmtTypeTime_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtTypeDateTime_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011, 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortDateComponentsM_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortDateComponentsN_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortDateComponentsD_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortDateComponentsDM_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortDateComponentsMY_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09.2011");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "J, 29.09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "J, 29.09.2011");
        test.done();
    },
    testDateFmtFullDateComponentsY_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtFullDateComponentsM_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septembrie");
        test.done();
    },
    testDateFmtFullDateComponentsD_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtFullDateComponentsDM_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembrie");
        test.done();
    },
    testDateFmtFullDateComponentsMY_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septembrie 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembrie 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "joi, 29 septembrie");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "joi, 29 septembrie 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortTimeComponentsM_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortTimeComponentsH_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortTimeComponentsMS_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortTimeComponentsHM_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortTimeComponentsHMS_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortTimeComponentsHMA_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortTimeComponentsHMZ_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ro-RO",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortTimeComponentsHMAZ_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ro-RO",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortTimeComponentsHMSA_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortTimeComponentsHMSZ_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ro-RO",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtShortTimeComponentsHMSAZ_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ro-RO",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtFullTimeComponentsS_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtFullTimeComponentsM_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtFullTimeComponentsH_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtFullTimeComponentsMS_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtFullTimeComponentsHM_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtFullTimeComponentsHMS_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtFullTimeComponentsHMA_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtFullTimeComponentsHMZ_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ro-RO",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtFullTimeComponentsHMAZ_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ro-RO",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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
    testDateFmtFullTimeComponentsHMSA_ro_RO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ro-RO", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ro-RO",
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

    }
};