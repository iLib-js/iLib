/*
 * testdatefmt_nl_NL.js - test the date formatter object in the Netherlands
 *
 * Copyright © 2012-2015, 2017, 2023-2024 JEDLSoft
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

module.exports.testdatefmt_nl_NL = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_nl_NL: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "nl-NL"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09-2011");
        test.done();
    },
    testDateFmtSimpleMedium_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sep 2011");
        test.done();
    },
    testDateFmtSimpleLong_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 september 2011");
        test.done();
    },
    testDateFmtSimpleFull_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 september 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtSimpleTimeMedium_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtSimpleTimeLong_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtSimpleTimeFull_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtDateTimeSimpleShort_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09-2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sep 2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 september 2011 om 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 september 2011 om 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "nl-NL",
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
    testDateFmtTemplateCalendarIncompatibleDateType_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtTemplateClock12SwitchHH_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", clock: "12", template: "HH.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01.45");
        test.done();
    },
    testDateFmtTemplateClock12Switchkk_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", clock: "12", template: "kk.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01.45");
        test.done();
    },
    testDateFmtTemplateClock24Switchhh_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", clock: "24", template: "hh.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtTemplateClock24SwitchKK_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", clock: "24", template: "KK.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", template: "hh.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01.45");
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", template: "KK.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01.45");
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", template: "HH.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", template: "kk.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtTypeDate_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09-2011");
        test.done();
    },
    testDateFmtTypeTime_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtTypeDateTime_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09-2011, 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortDateComponentsM_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortDateComponentsN_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortDateComponentsD_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortDateComponentsDM_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09");
        test.done();
    },
    testDateFmtShortDateComponentsMY_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09-2011");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29-09-2011");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "D 29-09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "D 29-09-2011");
        test.done();
    },
    testDateFmtFullDateComponentsY_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullDateComponentsM_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullDateComponentsD_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullDateComponentsDM_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 september");
        test.done();
    },
    testDateFmtFullDateComponentsMY_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullDateComponentsDMY_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 september 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "donderdag 29 september");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "donderdag 29 september 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortTimeComponentsM_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortTimeComponentsH_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortTimeComponentsMS_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortTimeComponentsHM_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortTimeComponentsHMS_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortTimeComponentsHMA_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortTimeComponentsHMZ_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nl-NL",
            type: "time",
            time: "hmz",
            timezone: "Europe/Amsterdam"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortTimeComponentsHMAZ_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nl-NL",
            type: "time",
            time: "hmaz",
            timezone: "Europe/Amsterdam"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortTimeComponentsHMSA_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortTimeComponentsHMSZ_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nl-NL",
            type: "time",
            time: "hmsz",
            timezone: "Europe/Amsterdam"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtShortTimeComponentsHMSAZ_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nl-NL",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/Amsterdam"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullTimeComponentsS_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullTimeComponentsM_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullTimeComponentsH_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullTimeComponentsMS_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullTimeComponentsHM_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullTimeComponentsHMS_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullTimeComponentsHMA_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullTimeComponentsHMZ_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nl-NL",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/Amsterdam"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullTimeComponentsHMAZ_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nl-NL",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/Amsterdam"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullTimeComponentsHMSA_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullTimeComponentsHMSZ_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nl-NL",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Amsterdam"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtFullTimeComponentsHMSAZ_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nl-NL",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/Amsterdam"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    testDateFmtWithTimeZoneAndNoDST_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nl-NL",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Amsterdam"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nl-NL",
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
    },
    testDateFmtFormatRelativeWithinMinuteAfter_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "over 30 seconden");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 seconden geleden");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "over 10 minuten");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 minuten geleden");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "over 4 uur");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 uur geleden");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "over 4 dagen");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 dagen geleden");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "over 9 weken");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 weken geleden");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "over 16 maanden");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 maanden geleden");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "nl-NL",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "over 14 jaar");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_nl_NL: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nl-NL", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "nl-NL",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "nl-NL",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 jaar geleden");
        test.done();
    }
};