/*
 * testdatefmt_ig_NG.js - test the date formatter object in Igbo-Nigeria
 *
 * Copyright © 2022-2023, JEDLSoft
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

module.exports.testdatefmt_ig_NG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_ig_NG: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ig-NG"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/21");
        test.done();
    },
    testDateFmtSimpleMedium_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sep 2021");
        test.done();
    },
    testDateFmtSimpleLong_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Septemba 2021");
        test.done();
    },
    testDateFmtSimpleFull_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Septemba 2021');
        test.done();
    },
    testDateFmtSimpleTimeShort_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtSimpleTimeMedium_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtSimpleTimeLong_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtSimpleTimeFull_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '01:45');
        test.done();
    },
    testDateFmtDateTimeSimpleShort_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/21, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Sep 2021, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Septemba 2021 na 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Septemba 2021 na 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2021-09-29");
        test.done();
    },
    testDateFmtTemplateCalendarIncompatibleDateType_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        // convert automatically to a Julian calendar date
        test.equal(fmt.format(date), "2021-09-16 13:45");
        test.done();
    },
    testDateFmtTemplateClock12SwitchHH_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtTemplateClock12Switchkk_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtTemplateClock24Switchhh_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
        var fmt = new DateFmt({locale: "ig-NG", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtTypeDate_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/21');
        test.done();
    },
    testDateFmtTypeTime_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtTypeDateTime_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/21, 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "21");
        test.done();
    },
    testDateFmtShortDateComponentsM_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtShortDateComponentsD_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtShortDateComponentsDM_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9');
        test.done();
    },
    testDateFmtShortDateComponentsMY_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/21');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/21');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'W, 29/9');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'W, 29/9/21');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Wen, 29 Septemba');
        test.done();
    },
    testDateFmtFullDateComponentsY_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2021");
        test.done();
    },
    testDateFmtFullDateComponentsM_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtFullDateComponentsD_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtFullDateComponentsDM_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Septemba');
        test.done();
    },
    testDateFmtFullDateComponentsMY_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Septemba 2021');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Septemba 2021');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Wenezdee, 29 Septemba');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Wenezdee, 29 Septemba 2021');
        test.done();
    },
    testDateFmtShortTimeComponentsS_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtShortTimeComponentsM_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtShortTimeComponentsH_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtShortTimeComponentsMS_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtShortTimeComponentsHM_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMS_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMA_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMZ_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ig-NG",
            type: "time",
            time: "hmz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 WAT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ig-NG",
            type: "time",
            time: "hmaz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 WAT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMSZ_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ig-NG",
            type: "time",
            time: "hmsz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ig-NG",
            type: "time",
            time: "hmsaz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAT");
        test.done();
    },
    testDateFmtFullTimeComponentsS_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtFullTimeComponentsM_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtFullTimeComponentsH_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtFullTimeComponentsMS_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtFullTimeComponentsHM_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMS_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMA_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMZ_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ig-NG",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 WAT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ig-NG",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 WAT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMSZ_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ig-NG",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ig-NG",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAT");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ig-NG",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2021,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAT");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ig-NG",
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
    testDateFmtFormatRelativeWithinMinuteBefore_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ig-NG",
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
    testDateFmtFormatRelativeWithinHourAfter_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ig-NG",
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
    testDateFmtFormatRelativeWithinHourBefore_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '-10 min');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '+4 h');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '-4 h');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '+4 d');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '-4 d');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '+9 w');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '-9 w');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '+16 m');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '-14 m');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ig-NG",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '+14 y');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ig_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ig-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ig-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ig-NG",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '-21 y');
        test.done();
    }
};