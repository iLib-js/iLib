/*
 * testdatefmt_de_DE.js - test the date formatter object in German
 *
 * Copyright © 2012-2015,2017-2018,2023 JEDLSoft
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

module.exports.testdatefmt_de_DE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_de_DE: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "de-DE"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtSimpleMedium_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtSimpleLong_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. September 2011");
        test.done();
    },
    testDateFmtSimpleFull_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. September 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtSimpleTimeMedium_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtSimpleTimeLong_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtSimpleTimeFull_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtDateTimeSimpleShort_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtDateTimeSimpleMedium_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtDateTimeSimpleLong_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. September 2011 um 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. September 2011 um 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "de-DE",
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
    testDateFmtTemplateCalendarIncompatibleDateType_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtTemplateClock12SwitchHH_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtTemplateClock12Switchkk_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtTemplateClock24Switchhh_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtTemplateClock24SwitchKK_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtTypeDate_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtTypeTime_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtTypeDateTime_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortDateComponentsY_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortDateComponentsM_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Se");
        test.done();
    },
    testDateFmtShortDateComponentsN_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortDateComponentsD_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortDateComponentsDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortDateComponentsMY_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortDateComponentsDMY_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortDateComponentsWDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "D, 29.09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "D, 29.09.11");
        test.done();
    },
    testDateFmtFullDateComponentsY_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullDateComponentsM_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullDateComponentsD_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullDateComponentsDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. September");
        test.done();
    },
    testDateFmtFullDateComponentsMY_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullDateComponentsDMY_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. September 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Donnerstag, 29. September");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Donnerstag, 29. September 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortTimeComponentsM_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortTimeComponentsH_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortTimeComponentsMS_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortTimeComponentsHM_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortTimeComponentsHMS_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortTimeComponentsHMA_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortTimeComponentsHMZ_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "de-DE",
            type: "time",
            time: "hmz",
            timezone: "Europe/Berlin"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortTimeComponentsHMAZ_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "de-DE",
            type: "time",
            time: "hmaz",
            timezone: "Europe/Berlin"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortTimeComponentsHMSA_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortTimeComponentsHMSZ_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "de-DE",
            type: "time",
            time: "hmsz",
            timezone: "Europe/Berlin"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtShortTimeComponentsHMSAZ_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "de-DE",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/Berlin"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullTimeComponentsS_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullTimeComponentsM_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullTimeComponentsH_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullTimeComponentsMS_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullTimeComponentsHM_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullTimeComponentsHMS_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullTimeComponentsHMA_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullTimeComponentsHMZ_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "de-DE",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/Berlin"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullTimeComponentsHMAZ_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "de-DE",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/Berlin"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullTimeComponentsHMSA_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullTimeComponentsHMSZ_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "de-DE",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Berlin"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFullTimeComponentsHMSAZ_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "de-DE",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/Berlin"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtWithTimeZoneAndNoDST_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "de-DE",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Berlin"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "de-DE",
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
    testDateFmtFormatRelativeWithinMinuteAfter_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "in 30 Sekunden");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "vor 30 Sekunden");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "in 10 Minuten");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "vor 10 Minuten");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "in 4 Stunden");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "vor 4 Stunden");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "in 4 Tagen");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "vor 4 Tagen");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "in 9 Wochen");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "vor 9 Wochen");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "in 16 Monaten");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "vor 14 Monaten");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "de-DE",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "in 14 Jahren");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_de_DE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "de-DE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "de-DE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "de-DE",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "vor 21 Jahren");
        test.done();
    }
};