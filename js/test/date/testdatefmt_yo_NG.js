/*
 * testdatefmt_yo_NG.js - test the date formatter object in Yoruba-Nigeria
 *
 * Copyright © 2022, JEDLSoft
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

module.exports.testdatefmt_yo_NG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_yo_NG: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "yo-NG"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/2021");
        test.done();
    },
    testDateFmtSimpleMedium_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 09 2021");
        test.done();
    },
    testDateFmtSimpleLong_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Owe 2021");
        test.done();
    },
    testDateFmtSimpleFull_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Owe 2021');
        test.done();
    },
    testDateFmtSimpleTimeShort_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtSimpleTimeMedium_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtSimpleTimeLong_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtSimpleTimeFull_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45');
        test.done();
    },
    testDateFmtDateTimeSimpleShort_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/2021, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 09 2021, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Owe 2021 níti 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Owe 2021 ní 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "yo-NG",
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
    testDateFmtTemplateCalendarIncompatibleDateType_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtTemplateClock12SwitchHH_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtTemplateClock12Switchkk_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtTemplateClock24Switchhh_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
        var fmt = new DateFmt({locale: "yo-NG", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtTypeDate_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/2021');
        test.done();
    },
    testDateFmtTypeTime_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtTypeDateTime_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/2021, 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtShortDateComponentsM_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "O");
        test.done();
    },
    testDateFmtShortDateComponentsD_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtShortDateComponentsDM_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtShortDateComponentsMY_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/2021');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/2021');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Ọ, 29/9');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Ọ, 29/9/2021');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Ọjọ́r, 29 Owe');
        test.done();
    },
    testDateFmtFullDateComponentsY_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFullDateComponentsM_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Ow");
        test.done();
    },
    testDateFmtFullDateComponentsD_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFullDateComponentsDM_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Owe');
        test.done();
    },
    testDateFmtFullDateComponentsMY_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Owe 2021');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 Owe 2021');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Ọjọ́rú, 29 Owe');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Ọjọ́rú, 29 Owe 2021');
        test.done();
    },
    testDateFmtShortTimeComponentsS_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtShortTimeComponentsM_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtShortTimeComponentsH_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtShortTimeComponentsMS_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtShortTimeComponentsHM_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtShortTimeComponentsHMS_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtShortTimeComponentsHMA_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtShortTimeComponentsHMZ_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "yo-NG",
            type: "time",
            time: "hmz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtShortTimeComponentsHMAZ_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "yo-NG",
            type: "time",
            time: "hmaz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtShortTimeComponentsHMSA_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtShortTimeComponentsHMSZ_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "yo-NG",
            type: "time",
            time: "hmsz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtShortTimeComponentsHMSAZ_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "yo-NG",
            type: "time",
            time: "hmsaz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFullTimeComponentsS_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFullTimeComponentsM_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFullTimeComponentsH_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFullTimeComponentsMS_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFullTimeComponentsHM_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFullTimeComponentsHMS_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFullTimeComponentsHMA_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFullTimeComponentsHMZ_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "yo-NG",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFullTimeComponentsHMAZ_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "yo-NG",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFullTimeComponentsHMSA_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFullTimeComponentsHMSZ_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "yo-NG",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFullTimeComponentsHMSAZ_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "yo-NG",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtWithTimeZoneAndNoDST_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "yo-NG",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Africa/Lagos"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFormatRelativeWithinMinuteAfter_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "yo-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFormatRelativeWithinMinuteBefore_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "yo-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFormatRelativeWithinHourAfter_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "yo-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFormatRelativeWithinHourBefore_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "yo-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFormatRelativeWithinDayAfter_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "yo-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFormatRelativeWithinDayBefore_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "yo-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFormatRelativeWithinFortnightAfter_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "yo-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFormatRelativeWithinFortnightBefore_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "yo-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFormatRelativeWithinQuarterAfter_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "yo-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFormatRelativeWithinQuarterBefore_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "yo-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFormatRelativeWithinTwoYearsAfter_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "yo-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFormatRelativeWithinTwoYearsBefore_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "yo-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFormatRelativeYearsAfter_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "yo-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "yo-NG",
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
    testDateFmtFormatRelativeYearsBefore_yo_NG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "yo-NG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "yo-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "yo-NG",
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