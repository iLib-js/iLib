/*
 * testdatefmt_pl_PL.js - test the date formatter object in Polish
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

module.exports.testdatefmt_pl_PL = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtPLConstructorEmpty_pl_PL: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "pl-PL"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtPLSimpleShort_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLSimpleMedium_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 wrz 2011");
        test.done();
    },
    testDateFmtPLSimpleLong_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 września 2011");
        test.done();
    },
    testDateFmtPLSimpleFull_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 września 2011");
        test.done();
    },
    testDateFmtPLSimpleTimeShort_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLSimpleTimeMedium_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLSimpleTimeLong_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLSimpleTimeFull_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLDateTimeSimpleShort_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLDateTimeSimpleMedium_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 wrz 2011, 13:45");
        test.done();
    },
    testDateFmtPLDateTimeSimpleLong_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 września 2011 13:45");
        test.done();
    },
    testDateFmtPLDateTimeSimpleFull_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 września 2011 13:45");
        test.done();
    },
    testDateFmtPLTemplateCalendar_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
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
    testDateFmtPLTemplateClock12SwitchHH_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLTemplateClock12Switchkk_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLTemplateClock24Switchhh_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLTemplateClock24SwitchKK_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLTemplateNoClockDoNotFollowLocaleDefault12hh_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLTemplateNoClockDoNotFollowLocaleDefault12KK_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLTemplateNoClockDoNotFollowLocaleDefault24HH_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLTemplateNoClockDoNotFollowLocaleDefault24kk_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLTypeDate_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLTypeTime_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLTypeDateTime_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortDateComponentsY_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortDateComponentsM_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "wr");
        test.done();
    },
    testDateFmtPLShortDateComponentsN_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "w");
        test.done();
    },
    testDateFmtPLShortDateComponentsD_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortDateComponentsDM_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortDateComponentsMY_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortDateComponentsDMY_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortDateComponentsWDM_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "c, 29.09");
        test.done();
    },
    testDateFmtPLShortDateComponentsWDMY_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "c, 29.09.2011");
        test.done();
    },
    testDateFmtPLFullDateComponentsY_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLFullDateComponentsM_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "wrzesień");
        test.done();
    },
    testDateFmtPLFullDateComponentsD_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLFullDateComponentsDM_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 września");
        test.done();
    },
    testDateFmtPLFullDateComponentsMY_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "wrzesień 2011");
        test.done();
    },
    testDateFmtPLFullDateComponentsDMY_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 września 2011");
        test.done();
    },
    testDateFmtPLFullDateComponentsWDM_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "czwartek, 29 września");
        test.done();
    },
    testDateFmtPLFullDateComponentsWDMY_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "czwartek, 29 września 2011");
        test.done();
    },
    testDateFmtPLShortTimeComponentsS_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortTimeComponentsM_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortTimeComponentsH_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortTimeComponentsMS_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortTimeComponentsHM_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortTimeComponentsHMS_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortTimeComponentsHMA_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortTimeComponentsHMZ_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pl-PL",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortTimeComponentsHMAZ_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pl-PL",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortTimeComponentsHMSA_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortTimeComponentsHMSZ_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pl-PL",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLShortTimeComponentsHMSAZ_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pl-PL",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLFullTimeComponentsS_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLFullTimeComponentsM_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLFullTimeComponentsH_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLFullTimeComponentsMS_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLFullTimeComponentsHM_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLFullTimeComponentsHMS_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLFullTimeComponentsHMA_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLFullTimeComponentsHMZ_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pl-PL",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLFullTimeComponentsHMAZ_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pl-PL",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLFullTimeComponentsHMSA_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pl-PL", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLFullTimeComponentsHMSZ_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pl-PL",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLFullTimeComponentsHMSAZ_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pl-PL",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    testDateFmtPLWithTimeZoneAndNoDST_pl_PL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pl-PL",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pl-PL",
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
    }
};