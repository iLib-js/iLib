/*
 * testdatefmt_be_BY.js - test the date formatter object in Belarus
 *
 * Copyright © 2020-2021,2023 JEDLSoft
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

module.exports.testdatefmt_be_BY = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_be_BY: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "be-BY"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtSimpleMedium_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 вер 2011 г.");
        test.done();
    },
    testDateFmtSimpleLong_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 верасня 2011 г.");
        test.done();
    },
    testDateFmtSimpleFull_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 верасня 2011 г.');
        test.done();
    },
    testDateFmtSimpleTimeShort_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
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
    testDateFmtSimpleTimeMedium_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
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
    testDateFmtSimpleTimeLong_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
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
    testDateFmtSimpleTimeFull_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
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
    testDateFmtDateTimeSimpleShort_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.11, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 вер 2011 г., 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 верасня 2011 г. у 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 верасня 2011 г. у 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "be-BY",
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
    testDateFmtTemplateCalendarIncompatibleDateType_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtTemplateClock12SwitchHH_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtTemplateClock12Switchkk_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtTemplateClock24Switchhh_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtTemplateClock24SwitchKK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtTypeDate_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.11');
        test.done();
    },
    testDateFmtTypeTime_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
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
    testDateFmtTypeDateTime_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.11, 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtShortDateComponentsM_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ве");
        test.done();
    },
    testDateFmtShortDateComponentsN_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'в');
        test.done();
    },
    testDateFmtShortDateComponentsD_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtShortDateComponentsDM_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09');
        test.done();
    },
    testDateFmtShortDateComponentsMY_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '09.11');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.11');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ч, 29.09');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ч, 29.09.11');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'чц, 29 верасня');
        test.done();
    },
    testDateFmtFullDateComponentsY_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtFullDateComponentsM_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "верасень");
        test.done();
    },
    testDateFmtFullDateComponentsD_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtFullDateComponentsDM_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 верасня');
        test.done();
    },
    testDateFmtFullDateComponentsMY_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'верасень 2011 г.');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 верасня 2011 г.');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'чацвер, 29 верасня');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'чацвер, 29 верасня 2011 г.');
        test.done();
    },
    testDateFmtShortTimeComponentsS_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtShortTimeComponentsM_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtShortTimeComponentsH_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtShortTimeComponentsMS_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtShortTimeComponentsHM_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtShortTimeComponentsHMS_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtShortTimeComponentsHMA_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtShortTimeComponentsHMZ_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "be-BY",
            type: "time",
            time: "hmz",
            timezone: "Europe/Minsk"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +03");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "be-BY",
            type: "time",
            time: "hmaz",
            timezone: "Europe/Minsk"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +03");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtShortTimeComponentsHMSZ_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "be-BY",
            type: "time",
            time: "hmsz",
            timezone: "Europe/Minsk"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +03");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "be-BY",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/Minsk"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +03");
        test.done();
    },
    testDateFmtFullTimeComponentsS_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtFullTimeComponentsM_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtFullTimeComponentsH_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtFullTimeComponentsMS_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtFullTimeComponentsHM_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtFullTimeComponentsHMS_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtFullTimeComponentsHMA_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtFullTimeComponentsHMZ_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "be-BY",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/Minsk"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +03");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "be-BY",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/Minsk"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +03");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
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
    testDateFmtFullTimeComponentsHMSZ_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "be-BY",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Minsk"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +03");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "be-BY",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/Minsk"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +03");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "be-BY",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Minsk"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +03");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "праз 30 секунд");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 секунд таму");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "праз 10 хвілін");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 хвілін таму');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'праз 4 гадзіны');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 гадзіны таму');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'праз 4 дні');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date),  '4 дні таму');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'праз 9 тыдняў');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 тыдняў таму');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "be-BY",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'праз 16 месяцаў');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "be-BY",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 месяцаў таму');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "be-BY",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'праз 14 гадоў');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_be_BY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "be-BY", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "be-BY",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "be-BY",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '21 год таму');
        test.done();
    }
};