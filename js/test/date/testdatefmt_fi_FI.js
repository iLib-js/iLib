/*
 * testdatefmt_fi_FI.js - test the date formatter object in Finnish
 *
 * Copyright © 2012-2015, 2017-2018, 2023-2024 JEDLSoft
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

module.exports.testdatefmt_fi_FI = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_fi_FI: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "fi-FI"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.2011");
        test.done();
    },
    testDateFmtSimpleMedium_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.2011");
        test.done();
    },
    testDateFmtSimpleLong_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. syyskuuta 2011");
        test.done();
    },
    testDateFmtSimpleFull_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. syyskuuta 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtSimpleTimeMedium_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtSimpleTimeLong_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtSimpleTimeFull_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtDateTimeSimpleShort_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.2011 klo 13.45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.2011 klo 13.45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. syyskuuta 2011 klo 13.45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. syyskuuta 2011 klo 13.45");
        test.done();
    },
    testDateFmtTemplateCalendar_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "fi-FI",
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
    testDateFmtTemplateClock12SwitchHH_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtTemplateClock12Switchkk_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtTemplateClock24Switchhh_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtTemplateClock24SwitchKK_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtTypeDate_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.2011");
        test.done();
    },
    testDateFmtTypeTime_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtTypeDateTime_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.2011 klo 13.45");
        test.done();
    },
    testDateFmtShortDateComponentsY_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtShortDateComponentsM_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtShortDateComponentsN_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtShortDateComponentsD_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtShortDateComponentsDM_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtShortDateComponentsMY_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9.2011");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.9.2011");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T 29.9");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T 29.9.2011");
        test.done();
    },
    testDateFmtFullDateComponentsY_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtFullDateComponentsM_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "syyskuu");
        test.done();
    },
    testDateFmtFullDateComponentsD_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtFullDateComponentsDM_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. syyskuuta");
        test.done();
    },
    testDateFmtFullDateComponentsMY_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "syyskuu 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. syyskuuta 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "torstai 29. syyskuuta");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "torstai 29. syyskuuta 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtShortTimeComponentsM_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtShortTimeComponentsH_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtShortTimeComponentsMS_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtShortTimeComponentsHM_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtShortTimeComponentsHMS_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtShortTimeComponentsHMA_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtShortTimeComponentsHMZ_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fi-FI",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 EEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fi-FI",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 EEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtShortTimeComponentsHMSZ_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fi-FI",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 EEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fi-FI",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 EEST");
        test.done();
    },
    testDateFmtFullTimeComponentsS_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtFullTimeComponentsM_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtFullTimeComponentsH_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtFullTimeComponentsMS_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtFullTimeComponentsHM_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtFullTimeComponentsHMS_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtFullTimeComponentsHMA_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtFullTimeComponentsHMZ_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fi-FI",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 EEST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fi-FI",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 EEST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
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
    testDateFmtFullTimeComponentsHMSZ_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fi-FI",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 EEST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fi-FI",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 EEST");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fi-FI",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 EET");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 sekunnin päästä");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 sekuntia sitten");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 minuutin päästä");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 minuuttia sitten");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 tunnin päästä");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 tuntia sitten");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 päivän päästä");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 päivää sitten");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 viikon päästä");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 viikkoa sitten");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 kuukauden päästä");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 kuukautta sitten");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 vuoden päästä");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_fi_FI: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fi-FI", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fi-FI",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fi-FI",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 vuotta sitten");
        test.done();
    }
};