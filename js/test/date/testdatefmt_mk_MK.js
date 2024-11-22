/*
 * testdatefmt_mk_Mk.js - test the date formatter object in Former Yugoslav Republic of Macedonia
 *
 * Copyright © 2012-2015, 2017,2021, 2023-2024 JEDLSoft
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

module.exports.testdatefmt_mk_MK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_mk_MK: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "mk-MK"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.11");
        test.done();
    },
    testDateFmtSimpleMedium_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.9.2011 г.');
        test.done();
    },
    testDateFmtSimpleLong_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 септември 2011 г.');
        test.done();
    },
    testDateFmtSimpleFull_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 септември 2011 г.');
        test.done();
    },
    testDateFmtSimpleTimeShort_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtSimpleTimeMedium_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtSimpleTimeLong_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtSimpleTimeFull_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtDateTimeSimpleShort_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.11, во 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.9.2011 г., во 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 септември 2011 г., во 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 септември 2011 г., во 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "mk-MK",
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
    testDateFmtTemplateClock12SwitchHH_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtTemplateClock12Switchkk_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtTemplateClock24Switchhh_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtTemplateClock24SwitchKK_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtShortDateComponentsY_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtShortDateComponentsM_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9");
        test.done();
    },
    testDateFmtShortDateComponentsN_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "с");
        test.done();
    },
    testDateFmtShortDateComponentsD_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtShortDateComponentsDM_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9");
        test.done();
    },
    testDateFmtShortDateComponentsMY_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9.11");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.11");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ч, 29.9");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ч, 29.9.11");
        test.done();
    },
    testDateFmtFullDateComponentsY_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtFullDateComponentsM_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "септември");
        test.done();
    },
    testDateFmtFullDateComponentsD_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtFullDateComponentsDM_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 септември");
        test.done();
    },
    testDateFmtFullDateComponentsMY_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'септември 2011 г.');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 септември 2011 г.');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "четврток, 29 септември");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'четврток, 29 септември 2011 г.');
        test.done();
    },
    testDateFmtShortTimeComponentsS_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtShortTimeComponentsM_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtShortTimeComponentsH_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtShortTimeComponentsHM_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtShortTimeComponentsHMS_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtShortTimeComponentsHMA_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtShortTimeComponentsHMZ_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mk-MK",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtShortTimeComponentsHMAZ_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mk-MK",
            type: "time",
            time: "ahmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtShortTimeComponentsHMSA_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtShortTimeComponentsHMSZ_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mk-MK",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtShortTimeComponentsHMSAZ_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mk-MK",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtFullTimeComponentsS_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtFullTimeComponentsM_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtFullTimeComponentsH_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtFullTimeComponentsHM_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtFullTimeComponentsHMS_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtFullTimeComponentsHMA_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtFullTimeComponentsHMZ_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mk-MK",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtFullTimeComponentsHMSA_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtFullTimeComponentsHMSZ_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mk-MK",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtFullTimeComponentsHMSAZ_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mk-MK",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtWithTimeZoneAndNoDST_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mk-MK",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mk-MK",
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
    testDateFmtFormatRelativeWithinMinuteAfter_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 30 секунди");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пред 30 секунди");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 10 минути");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пред 10 минути");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 4 часа");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пред 4 часа");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 4 дена");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пред 4 дена");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 9 седмици");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пред 9 седмици");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 16 месеци");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пред 14 месеци");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mk-MK",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "за 14 години");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_mk_MK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mk-MK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mk-MK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mk-MK",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "пред 21 година");
        test.done();
    }
};