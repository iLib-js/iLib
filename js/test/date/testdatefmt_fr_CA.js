/*
 * testdatefmt_fr_FR.js - test the date formatter object in standard French
 *
 * Copyright © 2012-2015,2017-2018,2021,2023 JEDLSoft
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

module.exports.testdatefmt_fr_CA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtfrCAConstructorEmpty: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "fr-CA"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtfrCASimpleShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011-09-29');
        test.done();
    },
    testDateFmtfrCASimpleMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCASimpleLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011");
        test.done();
    },
    testDateFmtfrCASimpleFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011");
        test.done();
    },
    testDateFmtfrCASimpleTimeShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    testDateFmtfrCASimpleTimeMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    testDateFmtfrCASimpleTimeLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    testDateFmtfrCASimpleTimeFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    testDateFmtfrCADateTimeSimpleShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011-09-29 13 h 45');
        test.done();
    },
    testDateFmtfrCADateTimeSimpleMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sept. 2011, 13 h 45");
        test.done();
    },
    testDateFmtfrCADateTimeSimpleLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011 à 13 h 45");
        test.done();
    },
    testDateFmtfrCADateTimeSimpleFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011 à 13 h 45");
        test.done();
    },
    testDateFmtfrCATemplateCalendar: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", calendar: "julian", template: "yyyy-MM-dd"});
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
    testDateFmtfrCATemplateCalendarIncompatibleDateType: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCATemplateClock12SwitchHH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCATemplateClock12Switchkk: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCATemplateClock24Switchhh: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCATemplateClock24SwitchKK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCATemplateNoClockDoNotFollowLocaleDefault12hh: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCATemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCATemplateNoClockDoNotFollowLocaleDefault24HH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCATemplateNoClockDoNotFollowLocaleDefault24kk: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCATypeDate: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011-09-29');
        test.done();
    },
    testDateFmtfrCATypeTime: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    testDateFmtfrCATypeDateTime: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011-09-29 13 h 45');
        test.done();
    },
    testDateFmtfrCAShortDateComponentsY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011');
        test.done();
    },
    testDateFmtfrCAShortDateComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCAShortDateComponentsN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCAShortDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCAShortDateComponentsDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09-29");
        test.done();
    },
    testDateFmtfrCAShortDateComponentsMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011-09');
        test.done();
    },
    testDateFmtfrCAShortDateComponentsDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011-09-29');
        test.done();
    },
    testDateFmtfrCAShortDateComponentsWDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "J 09-29");
        test.done();
    },
    testDateFmtfrCAShortDateComponentsWDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'J 2011-09-29');
        test.done();
    },
    testDateFmtfrCAFullDateComponentsY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCAFullDateComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septembre");
        test.done();
    },
    testDateFmtfrCAFullDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCAFullDateComponentsDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre");
        test.done();
    },
    testDateFmtfrCAFullDateComponentsMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septembre 2011");
        test.done();
    },
    testDateFmtfrCAFullDateComponentsDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011");
        test.done();
    },
    testDateFmtfrCAFullDateComponentsWDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "jeudi 29 septembre");
        test.done();
    },
    testDateFmtfrCAFullDateComponentsWDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "jeudi 29 septembre 2011");
        test.done();
    },
    testDateFmtfrCAShortTimeComponentsS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCAShortTimeComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCAShortTimeComponentsH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCAShortTimeComponentsMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '45 min 37');
        test.done();
    },
    testDateFmtfrCAShortTimeComponentsHM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    testDateFmtfrCAShortTimeComponentsHMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45 min 37 s");
        test.done();
    },
    testDateFmtfrCAShortTimeComponentsHMA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    testDateFmtfrCAShortTimeComponentsHMZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-CA",
            type: "time",
            time: "hmz",
            timezone: "America/Montreal"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13 h 45 EDT");
        test.done();
    },
    testDateFmtfrCAShortTimeComponentsHMAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-CA",
            type: "time",
            time: "hmaz",
            timezone: "America/Montreal"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13 h 45 EDT");
        test.done();
    },
    testDateFmtfrCAShortTimeComponentsHMSA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45 min 37 s");
        test.done();
    },
    testDateFmtfrCAShortTimeComponentsHMSZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-CA",
            type: "time",
            time: "hmsz",
            timezone: "America/Montreal"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13 h 45 min 37 s EDT");
        test.done();
    },
    testDateFmtfrCAShortTimeComponentsHMSAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-CA",
            type: "time",
            time: "hmsaz",
            timezone: "America/Montreal"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13 h 45 min 37 s EDT");
        test.done();
    },
    testDateFmtfrCAFullTimeComponentsS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCAFullTimeComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCAFullTimeComponentsH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
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
    testDateFmtfrCAFullTimeComponentsMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '45 min 37');
        test.done();
    },
    testDateFmtfrCAFullTimeComponentsHM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    testDateFmtfrCAFullTimeComponentsHMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45 min 37 s");
        test.done();
    },
    testDateFmtfrCAFullTimeComponentsHMA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45");
        test.done();
    },
    testDateFmtfrCAFullTimeComponentsHMZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-CA",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "America/Montreal"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13 h 45 EDT");
        test.done();
    },
    testDateFmtfrCAFullTimeComponentsHMAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-CA",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "America/Montreal"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13 h 45 EDT");
        test.done();
    },
    testDateFmtfrCAFullTimeComponentsHMSA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13 h 45 min 37 s");
        test.done();
    },
    testDateFmtfrCAFullTimeComponentsHMSZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-CA",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "America/Montreal"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13 h 45 min 37 s EDT");
        test.done();
    },
    testDateFmtfrCAFullTimeComponentsHMSAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-CA",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "America/Montreal"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13 h 45 min 37 s EDT");
        test.done();
    },
    testDateFmtfrCAWithTimeZoneAndNoDST: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-CA",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "America/Montreal"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Montreal"
        });
        test.equal(fmt.format(date), "13 h 45 min 37 s EST");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_fr_CA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 30 secondes");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_fr_CA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 30 secondes");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_fr_CA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 10 minutes");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_fr_CA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 10 minutes");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_fr_CA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 4 heures");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_fr_CA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 4 heures");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_fr_CA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 4 jours");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_fr_CA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 4 jours");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_fr_CA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 9 semaines");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_fr_CA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 9 semaines");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_fr_CA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 16 mois");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_fr_CA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 14 mois");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_fr_CA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'dans 14 ans');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_fr_CA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-CA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-CA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-CA",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'il y a 21 ans');
        test.done();
    }
};