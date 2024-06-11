/*
 * testdatefmt_en_CA.js - test the date formatter object in Canadian English
 *
 * Copyright © 2012-2015,2017,2021,2023 JEDLSoft
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

module.exports.testdatefmt_en_CA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtenCAConstructorEmpty: function(test) {
        test.expect(1);
        var fmt = new DateFmt();

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtenCASimpleShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCASimpleMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Sep 29, 2011");
        test.done();
    },
    testDateFmtenCASimpleLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 29, 2011");
        test.done();
    },
    testDateFmtenCASimpleFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 29, 2011");
        test.done();
    },
    testDateFmtenCASimpleTimeShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p.m.");
        test.done();
    },
    testDateFmtenCASimpleTimeMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p.m.");
        test.done();
    },
    testDateFmtenCASimpleTimeLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p.m.");
        test.done();
    },
    testDateFmtenCASimpleTimeFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p.m.");
        test.done();
    },
    testDateFmtenCADateTimeSimpleShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29, 1:45 p.m.");
        test.done();
    },
    testDateFmtenCADateTimeSimpleMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Sep 29, 2011, 1:45 p.m.");
        test.done();
    },
    testDateFmtenCADateTimeSimpleLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 29, 2011 at 1:45 p.m.");
        test.done();
    },
    testDateFmtenCADateTimeSimpleFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 29, 2011 at 1:45 p.m.");
        test.done();
    },
    testDateFmtenCATemplateCalendar: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", calendar: "julian", template: "yyyy-MM-dd"});
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
    testDateFmtenCATemplateCalendarIncompatibleDateType: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCATemplateClock12SwitchHH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCATemplateClock12Switchkk: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCATemplateClock24Switchhh: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCATemplateClock24SwitchKK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCATemplateNoClockDoNotFollowLocaleDefault12hh: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", locale: "en-CA", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCATemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", locale: "en-CA", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCATemplateNoClockDoNotFollowLocaleDefault24HH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", locale: "en-CA", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCATemplateNoClockDoNotFollowLocaleDefault24kk: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", locale: "en-CA", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCATypeDate: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCATypeTime: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p.m.");
        test.done();
    },
    testDateFmtenCATypeDateTime: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29, 1:45 p.m.");
        test.done();
    },
    testDateFmtenCAShortDateComponentsY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCAShortDateComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCAShortDateComponentsN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCAShortDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCAShortDateComponentsDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCAShortDateComponentsMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09");
        test.done();
    },
    testDateFmtenCAShortDateComponentsDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCAShortDateComponentsWDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T, 09-29");
        test.done();
    },
    testDateFmtenCAShortDateComponentsWDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T, 2011-09-29");
        test.done();
    },
    testDateFmtenCAFullDateComponentsY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCAFullDateComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCAFullDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCAFullDateComponentsDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 29");
        test.done();
    },
    testDateFmtenCAFullDateComponentsMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September, 2011");
        test.done();
    },
    testDateFmtenCAFullDateComponentsDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 29, 2011");
        test.done();
    },
    testDateFmtenCAFullDateComponentsWDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Thursday, September 29");
        test.done();
    },
    testDateFmtenCAFullDateComponentsWDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Thursday, September 29, 2011");
        test.done();
    },
    testDateFmtenCAShortTimeComponentsS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCAShortTimeComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCAShortTimeComponentsH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1");
        test.done();
    },
    testDateFmtenCAShortTimeComponentsMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCAShortTimeComponentsHM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45");
        test.done();
    },
    testDateFmtenCAShortTimeComponentsHMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37");
        test.done();
    },
    testDateFmtenCAShortTimeComponentsHMA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p.m.");
        test.done();
    },
    testDateFmtenCAShortTimeComponentsHMZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-CA",
            type: "time",
            time: "hmz",
            timezone: "America/Toronto"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Toronto"
        });
        test.equal(fmt.format(date), "1:45 EDT");
        test.done();
    },
    testDateFmtenCAShortTimeComponentsHMAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-CA",
            type: "time",
            time: "hmaz",
            timezone: "America/Toronto"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Toronto"
        });
        test.equal(fmt.format(date), "1:45 p.m. EDT");
        test.done();
    },
    testDateFmtenCAShortTimeComponentsHMSA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Toronto"
        });
        test.equal(fmt.format(date), "1:45:37 p.m.");
        test.done();
    },
    testDateFmtenCAShortTimeComponentsHMSZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-CA",
            type: "time",
            time: "hmsz",
            timezone: "America/Toronto"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Toronto"
        });
        test.equal(fmt.format(date), "1:45:37 EDT");
        test.done();
    },
    testDateFmtenCAShortTimeComponentsHMSAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-CA",
            type: "time",
            time: "hmsaz",
            timezone: "America/Toronto"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Toronto"
        });
        test.equal(fmt.format(date), "1:45:37 p.m. EDT");
        test.done();
    },
    testDateFmtenCAFullTimeComponentsS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0,
            timezone: "America/Toronto"
        });
        test.equal(fmt.format(date), "37");
        test.done();
    },
    testDateFmtenCAFullTimeComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCAFullTimeComponentsH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1");
        test.done();
    },
    testDateFmtenCAFullTimeComponentsMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
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
    testDateFmtenCAFullTimeComponentsHM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45");
        test.done();
    },
    testDateFmtenCAFullTimeComponentsHMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37");
        test.done();
    },
    testDateFmtenCAFullTimeComponentsHMA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p.m.");
        test.done();
    },
    testDateFmtenCAFullTimeComponentsHMZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-CA",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "America/Toronto"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 EDT");
        test.done();
    },
    testDateFmtenCAFullTimeComponentsHMAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-CA",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "America/Toronto"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p.m. EDT");
        test.done();
    },
    testDateFmtenCAFullTimeComponentsHMSA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-CA", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 p.m.");
        test.done();
    },
    testDateFmtenCAFullTimeComponentsHMSZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-CA",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "America/Toronto"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 EDT");
        test.done();
    },
    testDateFmtenCAFullTimeComponentsHMSAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-CA",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "America/Toronto"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 p.m. EDT");
        test.done();
    },
    testDateFmtenCAWithTimeZoneAndNoDST: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-CA",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "America/Toronto"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-CA",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 EST");
        test.done();
    }
};