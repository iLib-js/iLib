/*
 * testdatefmt_sv_SE.js - test the date formatter object in Sweden
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

module.exports.testdatefmt_sv_SE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_sv_SE: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "sv-SE"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtSimpleMedium_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sep. 2011");
        test.done();
    },
    testDateFmtSimpleLong_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtSimpleFull_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtSimpleTimeShort_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtSimpleTimeMedium_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtSimpleTimeLong_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtSimpleTimeFull_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtDateTimeSimpleShort_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sep. 2011 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 september 2011 kl. 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 september 2011 kl. 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "sv-SE",
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
    testDateFmtTemplateClock12SwitchHH_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtTemplateClock12Switchkk_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtTemplateClock24Switchhh_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtTemplateClock24SwitchKK_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtTypeDate_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtTypeTime_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtTypeDateTime_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortDateComponentsM_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortDateComponentsN_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortDateComponentsD_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortDateComponentsDM_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortDateComponentsMY_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortDateComponentsDMY_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortDateComponentsWDM_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T 09-29");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T 2011-09-29");
        test.done();
    },
    testDateFmtFullDateComponentsY_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullDateComponentsM_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullDateComponentsD_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullDateComponentsDM_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullDateComponentsMY_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullDateComponentsDMY_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullDateComponentsWDM_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "torsdag 29 september");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "torsdag 29 september 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortTimeComponentsM_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortTimeComponentsH_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortTimeComponentsMS_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortTimeComponentsHM_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortTimeComponentsHMS_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortTimeComponentsHMA_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortTimeComponentsHMZ_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sv-SE", calendar: "gregorian",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortTimeComponentsHMSA_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortTimeComponentsHMSZ_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sv-SE", calendar: "gregorian",
            type: "time",
            time: "ahmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtShortTimeComponentsHMSAZ_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sv-SE", calendar: "gregorian",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullTimeComponentsS_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullTimeComponentsM_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullTimeComponentsH_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullTimeComponentsMS_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullTimeComponentsHM_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullTimeComponentsHMS_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullTimeComponentsHMA_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullTimeComponentsHMZ_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sv-SE", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "ahmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullTimeComponentsHMAZ_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sv-SE", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullTimeComponentsHMSA_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFullTimeComponentsHMSAZ_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sv-SE", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtWithTimeZoneAndNoDST_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sv-SE", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFormatRelativeWithinMinuteAfter_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFormatRelativeWithinMinuteBefore_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "för 30 sekunder sedan");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "om 10 minuter");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "för 10 minuter sedan");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "om 4 timmar");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "för 4 timmar sedan");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "om 4 dagar");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "för 4 dagar sedan");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "om 9 veckor");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "för 9 veckor sedan");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "om 16 månader");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sv-SE",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "för 14 månader sedan");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sv-SE",
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
    testDateFmtFormatRelativeYearsBefore_sv_SE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sv-SE", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sv-SE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sv-SE",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "för 21 år sedan");
        test.done();
    }
};