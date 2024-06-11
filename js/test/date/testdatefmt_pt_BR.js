/*
 * testdatefmt_pt_BR.js - test the date formatter object in Brazilian Portuguese
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

module.exports.testdatefmt_pt_BR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtBRConstructorEmpty: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "pt-BR"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtBRSimpleShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    testDateFmtBRSimpleMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de set. de 2011');
        test.done();
    },
    testDateFmtBRSimpleLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de setembro de 2011");
        test.done();
    },
    testDateFmtBRSimpleFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de setembro de 2011");
        test.done();
    },
    testDateFmtBRSimpleTimeShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRSimpleTimeMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRSimpleTimeLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRSimpleTimeFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRDateTimeSimpleShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011, 13:45");
        test.done();
    },
    testDateFmtBRDateTimeSimpleMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de set. de 2011, 13:45');
        test.done();
    },
    testDateFmtBRDateTimeSimpleLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de setembro de 2011 às 13:45");
        test.done();
    },
    testDateFmtBRDateTimeSimpleFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de setembro de 2011 às 13:45");
        test.done();
    },
    testDateFmtBRTemplateCalendar: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", calendar: "julian", template: "yyyy-MM-dd"});
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
    testDateFmtBRTemplateCalendarIncompatibleDateType: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRTemplateClock12SwitchHH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRTemplateClock12Switchkk: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRTemplateClock24Switchhh: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRTemplateClock24SwitchKK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRTemplateNoClockDoNotFollowLocaleDefault12hh: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRTemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRTemplateNoClockDoNotFollowLocaleDefault24HH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRTemplateNoClockDoNotFollowLocaleDefault24kk: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRTypeDate: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    testDateFmtBRTypeTime: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRTypeDateTime: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011, 13:45");
        test.done();
    },
    testDateFmtBRShortDateComponentsY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRShortDateComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRShortDateComponentsN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRShortDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRShortDateComponentsDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09");
        test.done();
    },
    testDateFmtBRShortDateComponentsMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09/2011");
        test.done();
    },
    testDateFmtBRShortDateComponentsDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    testDateFmtBRShortDateComponentsWDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Q, 29/09");
        test.done();
    },
    testDateFmtBRShortDateComponentsWDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Q, 29/09/2011");
        test.done();
    },
    testDateFmtBRFullDateComponentsY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRFullDateComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "setembro");
        test.done();
    },
    testDateFmtBRFullDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRFullDateComponentsDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de setembro");
        test.done();
    },
    testDateFmtBRFullDateComponentsMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "setembro de 2011");
        test.done();
    },
    testDateFmtBRFullDateComponentsDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de setembro de 2011");
        test.done();
    },
    testDateFmtBRFullDateComponentsWDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "quinta-feira, 29 de setembro");
        test.done();
    },
    testDateFmtBRFullDateComponentsWDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "quinta-feira, 29 de setembro de 2011");
        test.done();
    },
    testDateFmtBRShortTimeComponentsS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRShortTimeComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRShortTimeComponentsH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRShortTimeComponentsMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRShortTimeComponentsHM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRShortTimeComponentsHMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRShortTimeComponentsHMA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRShortTimeComponentsHMZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pt-BR",
            type: "time",
            time: "hmz",
            timezone: "America/Sao_Paulo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 -03/-02");
        test.done();
    },
    testDateFmtBRShortTimeComponentsHMAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pt-BR",
            type: "time",
            time: "hmaz",
            timezone: "America/Sao_Paulo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 -03/-02");
        test.done();
    },
    testDateFmtBRShortTimeComponentsHMSA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRShortTimeComponentsHMSZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pt-BR",
            type: "time",
            time: "hmsz",
            timezone: "America/Sao_Paulo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 -03/-02");
        test.done();
    },
    testDateFmtBRShortTimeComponentsHMSAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pt-BR",
            type: "time",
            time: "hmsaz",
            timezone: "America/Sao_Paulo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 -03/-02");
        test.done();
    },
    testDateFmtBRFullTimeComponentsS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRFullTimeComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRFullTimeComponentsH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRFullTimeComponentsMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRFullTimeComponentsHM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRFullTimeComponentsHMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRFullTimeComponentsHMA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRFullTimeComponentsHMZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pt-BR",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "America/Sao_Paulo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 -03/-02");
        test.done();
    },
    testDateFmtBRFullTimeComponentsHMAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pt-BR",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "America/Sao_Paulo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 -03/-02");
        test.done();
    },
    testDateFmtBRFullTimeComponentsHMSA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "pt-BR", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
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
    testDateFmtBRFullTimeComponentsHMSZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pt-BR",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "America/Sao_Paulo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 -03/-02");
        test.done();
    },
    testDateFmtBRFullTimeComponentsHMSAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pt-BR",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "America/Sao_Paulo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 -03/-02");
        test.done();
    },
    testDateFmtBRWithTimeZoneAndNoDST: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "pt-BR",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "America/Sao_Paulo"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "pt-BR",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 -03/-02");
        test.done();
    }
};