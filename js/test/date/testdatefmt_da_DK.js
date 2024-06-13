/*
 * testdatefmt_da_DK.js - test the date formatter object in Danish
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

module.exports.testdatefmt_da_DK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtDADKConstructorEmpty: function(test) {
        test.expect(1);
        var fmt = new DateFmt();

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtDADKSimpleShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKSimpleMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. sep. 2011");
        test.done();
    },
    testDateFmtDADKSimpleLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKSimpleFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKSimpleTimeShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKSimpleTimeMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKSimpleTimeLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKSimpleTimeFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKDateTimeSimpleShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011, 13.45");
        test.done();
    },
    testDateFmtDADKDateTimeSimpleMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. sep. 2011, 13.45");
        test.done();
    },
    testDateFmtDADKDateTimeSimpleLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september 2011 kl. 13.45");
        test.done();
    },
    testDateFmtDADKDateTimeSimpleFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september 2011 kl. 13.45");
        test.done();
    },
    testDateFmtDADKTemplateCalendar: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", calendar: "julian", template: "yyyy-MM-dd"});
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
    testDateFmtDADKTemplateCalendarIncompatibleDateType: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKTemplateClock12SwitchHH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKTemplateClock12Switchkk: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKTemplateClock24Switchhh: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKTemplateClock24SwitchKK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKTemplateNoClockDoNotFollowLocaleDefault12hh: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", locale: "da-DK", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKTemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", locale: "da-DK", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKTemplateNoClockDoNotFollowLocaleDefault24HH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", locale: "da-DK", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKTemplateNoClockDoNotFollowLocaleDefault24kk: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", locale: "da-DK", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKTypeDate: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKTypeTime: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKTypeDateTime: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011, 13.45");
        test.done();
    },
    testDateFmtDADKShortDateComponentsY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKShortDateComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKShortDateComponentsN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKShortDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKShortDateComponentsDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKShortDateComponentsMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKShortDateComponentsDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKShortDateComponentsWDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T den 29.09");
        test.done();
    },
    testDateFmtDADKShortDateComponentsWDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T den 29.09.2011");
        test.done();
    },
    testDateFmtDADKFullDateComponentsY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKFullDateComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKFullDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKFullDateComponentsDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKFullDateComponentsMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKFullDateComponentsDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKFullDateComponentsWDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "torsdag den 29. september");
        test.done();
    },
    testDateFmtDADKFullDateComponentsWDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "torsdag den 29. september 2011");
        test.done();
    },
    testDateFmtDADKShortTimeComponentsS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKShortTimeComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKShortTimeComponentsH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKShortTimeComponentsMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45.37");
        test.done();
    },
    testDateFmtDADKShortTimeComponentsHM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtDADKShortTimeComponentsHMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37");
        test.done();
    },
    testDateFmtDADKShortTimeComponentsHMA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtDADKShortTimeComponentsHMZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "da-DK",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 CEST");
        test.done();
    },
    testDateFmtDADKShortTimeComponentsHMAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "da-DK",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 CEST");
        test.done();
    },
    testDateFmtDADKShortTimeComponentsHMSA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37");
        test.done();
    },
    testDateFmtDADKShortTimeComponentsHMSZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "da-DK",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 CEST");
        test.done();
    },
    testDateFmtDADKShortTimeComponentsHMSAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "da-DK",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 CEST");
        test.done();
    },
    testDateFmtDADKFullTimeComponentsS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKFullTimeComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKFullTimeComponentsH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
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
    testDateFmtDADKFullTimeComponentsMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45.37");
        test.done();
    },
    testDateFmtDADKFullTimeComponentsHM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtDADKFullTimeComponentsHMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37");
        test.done();
    },
    testDateFmtDADKFullTimeComponentsHMA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtDADKFullTimeComponentsHMZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "da-DK",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 CEST");
        test.done();
    },
    testDateFmtDADKFullTimeComponentsHMAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "da-DK",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 CEST");
        test.done();
    },
    testDateFmtDADKFullTimeComponentsHMSA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37");
        test.done();
    },
    testDateFmtDADKFullTimeComponentsHMSZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "da-DK",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 CEST");
        test.done();
    },
    testDateFmtDADKFullTimeComponentsHMSAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "da-DK",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 CEST");
        test.done();
    },
    testDateFmtDADKWithTimeZoneAndNoDST: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "da-DK",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 CET");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_da_DK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "om 30 sekunder");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_da_DK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "for 30 sekunder siden");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_da_DK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "om 10 minutter");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_da_DK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "for 10 minutter siden");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_da_DK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "om 4 timer");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_da_DK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "for 4 timer siden");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_da_DK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "om 4 dage");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_da_DK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "for 4 dage siden");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_da_DK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "om 9 uger");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_da_DK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "for 9 uger siden");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_da_DK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "da-DK",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "om 16 måneder");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_da_DK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "da-DK",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "for 14 måneder siden");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_da_DK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "da-DK",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "om 14 år");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_da_DK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "da-DK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "da-DK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "da-DK",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "for 21 år siden");
        test.done();
    }
};