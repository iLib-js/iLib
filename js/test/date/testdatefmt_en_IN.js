/*
 * testdatefmt_en_IN.js - test the date formatter object in Indian English
 *
 * Copyright © 2012-2015, 2017, 2021, 2023-2024 JEDLSoft
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

module.exports.testdatefmt_en_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtINConstructorEmpty: function(test) {
        test.expect(1);
        var fmt = new DateFmt();

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtINSimpleShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11");
        test.done();
    },
    testDateFmtINSimpleMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sept 2011");
        test.done();
    },
    testDateFmtINSimpleLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    testDateFmtINSimpleFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September, 2011");
        test.done();
    },
    testDateFmtINSimpleTimeShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm");
        test.done();
    },
    testDateFmtINSimpleTimeMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm");
        test.done();
    },
    testDateFmtINSimpleTimeLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm");
        test.done();
    },
    testDateFmtINSimpleTimeFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm");
        test.done();
    },
    testDateFmtINDateTimeSimpleShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11, 1:45 pm");
        test.done();
    },
    testDateFmtINDateTimeSimpleMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sept 2011, 1:45 pm");
        test.done();
    },
    testDateFmtINDateTimeSimpleLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011 at 1:45 pm");
        test.done();
    },
    testDateFmtINDateTimeSimpleFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September, 2011 at 1:45 pm");
        test.done();
    },
    testDateFmtINTemplateCalendar: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "en-IN",
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
    testDateFmtINTemplateCalendarIncompatibleDateType: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINTemplateClock12SwitchHH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINTemplateClock12Switchkk: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINTemplateClock24Switchhh: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINTemplateClock24SwitchKK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINTypeDate: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11");
        test.done();
    },
    testDateFmtINTypeTime: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm");
        test.done();
    },
    testDateFmtINTypeDateTime: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11, 1:45 pm");
        test.done();
    },
    testDateFmtINShortDateComponentsY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINShortDateComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINShortDateComponentsN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINShortDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINShortDateComponentsDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINShortDateComponentsMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09/11");
        test.done();
    },
    testDateFmtINShortDateComponentsDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11");
        test.done();
    },
    testDateFmtINShortDateComponentsWDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T 29/09");
        test.done();
    },
    testDateFmtINShortDateComponentsWDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T 29/09/11");
        test.done();
    },
    testDateFmtINFullDateComponentsY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINFullDateComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINFullDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINFullDateComponentsDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September");
        test.done();
    },
    testDateFmtINFullDateComponentsMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINFullDateComponentsDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September, 2011");
        test.done();
    },
    testDateFmtINFullDateComponentsWDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Thursday 29 September");
        test.done();
    },
    testDateFmtINFullDateComponentsWDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Thursday 29 September, 2011");
        test.done();
    },
    testDateFmtINShortTimeComponentsS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINShortTimeComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINShortTimeComponentsH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINShortTimeComponentsMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINShortTimeComponentsHM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINShortTimeComponentsHMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINShortTimeComponentsHMA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-IN",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-IN",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 pm");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 pm IST");
        test.done();
    },
    testDateFmtINShortTimeComponentsHMSAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-IN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 pm IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINFullTimeComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINFullTimeComponentsH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINFullTimeComponentsMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
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
    testDateFmtINFullTimeComponentsHM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 pm");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-IN",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-IN",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 pm IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-IN", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 pm");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 pm IST");
        test.done();
    },
    testDateFmtINFullTimeComponentsHMSAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 pm IST");
        test.done();
    },
    testDateFmtINWithTimeZoneAndNoDST: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-IN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Kolkata"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-IN",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 pm IST");
        test.done();
    }
};