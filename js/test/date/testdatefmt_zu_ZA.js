/*
 * testdatefmt_zu_ZA.js - test the date formatter object in isiZulu-SouthAfrica
 *
 * Copyright © 2021, JEDLSoft
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

module.exports.testdatefmt_zu_ZA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_zu_ZA: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "zu-ZA"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/29/21");
        test.done();
    },
    testDateFmtSimpleMedium_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Sep 29, 2021");
        test.done();
    },
    testDateFmtSimpleLong_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Septhemba 29, 2021");
        test.done();
    },
    testDateFmtSimpleFull_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Septhemba 29, 2021');
        test.done();
    },
    testDateFmtSimpleTimeShort_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtSimpleTimeMedium_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtSimpleTimeLong_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtSimpleTimeFull_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtDateTimeSimpleShort_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/29/21 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Sep 29, 2021 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Septhemba 29, 2021 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Septhemba 29, 2021 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "zu-ZA",
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
    testDateFmtTemplateCalendarIncompatibleDateType_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtTemplateClock12SwitchHH_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtTemplateClock12Switchkk_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtTemplateClock24Switchhh_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
        var fmt = new DateFmt({locale: "zu-ZA", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtTypeDate_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/29/21');
        test.done();
    },
    testDateFmtTypeTime_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtTypeDateTime_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/29/21 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtShortDateComponentsM_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
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
    testDateFmtShortDateComponentsD_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtShortDateComponentsDM_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/29');
        test.done();
    },
    testDateFmtShortDateComponentsMY_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtShortDateComponentsDMY_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/29/21');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'T, 9/29');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'T, 9/29/21');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Tha, Septhemba 29');
        test.done();
    },
    testDateFmtFullDateComponentsY_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtFullDateComponentsM_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Septhemba");
        test.done();
    },
    testDateFmtFullDateComponentsD_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtFullDateComponentsDM_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Septhemba 29');
        test.done();
    },
    testDateFmtFullDateComponentsMY_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Septhemba, 2021');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Septhemba 29, 2021');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ULwesithathu, Septhemba 29');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ULwesithathu, Septhemba 29, 2021');
        test.done();
    },
    testDateFmtShortTimeComponentsS_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtShortTimeComponentsM_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtShortTimeComponentsH_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtShortTimeComponentsMS_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtShortTimeComponentsHM_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtShortTimeComponentsHMS_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtShortTimeComponentsHMA_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtShortTimeComponentsHMZ_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zu-ZA",
            type: "time",
            time: "hmz",
            timezone: "Africa/Johannesburg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 SAST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zu-ZA",
            type: "time",
            time: "hmaz",
            timezone: "Africa/Johannesburg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 SAST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtShortTimeComponentsHMSZ_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zu-ZA",
            type: "time",
            time: "hmsz",
            timezone: "Africa/Johannesburg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 SAST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zu-ZA",
            type: "time",
            time: "hmsaz",
            timezone: "Africa/Johannesburg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 SAST");
        test.done();
    },
    testDateFmtFullTimeComponentsS_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtFullTimeComponentsM_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtFullTimeComponentsH_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtFullTimeComponentsMS_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtFullTimeComponentsHM_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtFullTimeComponentsHMS_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtFullTimeComponentsHMA_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtFullTimeComponentsHMZ_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zu-ZA",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Africa/Johannesburg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 SAST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zu-ZA",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Africa/Johannesburg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 SAST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
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
    testDateFmtFullTimeComponentsHMSZ_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zu-ZA",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Africa/Johannesburg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 SAST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zu-ZA",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Africa/Johannesburg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 SAST");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "zu-ZA",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Africa/Johannesburg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2021,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 SAST");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "kumasekhondi angu-30 ezayo");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 amasekhondi edlule");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "kumaminithi angu-10 ezayo");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 amaminithi edlule');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'emahoreni angu-4 ezayo');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'emahoreni angu-4 edlule');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'ezinsukwini ezingu-4 ezizayo');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'ezinsukwini ezingu-4 ezedlule.');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'emavikini angu-9');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'amaviki angu-9 edlule');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'ezinyangeni ezingu-16 ezizayo');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 izinyanga ezedlule');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'eminyakeni engu-14 ezayo');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_zu_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "zu-ZA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "zu-ZA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "zu-ZA",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '21 iminyaka edlule');
        test.done();
    }
};