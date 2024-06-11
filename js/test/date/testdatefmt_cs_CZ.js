/*
 * testdatefmt_cs_CZ.js - test the date formatter object in Czech
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

module.exports.testdatefmt_cs_CZ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_cs_CZ: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "cs-CZ"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtSimpleMedium_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 2011");
        test.done();
    },
    testDateFmtSimpleLong_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. září 2011");
        test.done();
    },
    testDateFmtSimpleFull_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. září 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtSimpleTimeMedium_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtSimpleTimeLong_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtSimpleTimeFull_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtDateTimeSimpleShort_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 2011 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. září 2011 v 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. září 2011 v 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "cs-CZ",
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
    testDateFmtTemplateClock12SwitchHH_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtTemplateClock12Switchkk_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtTemplateClock24Switchhh_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtTemplateClock24SwitchKK_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortDateComponentsY_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortDateComponentsM_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "zá");
        test.done();
    },
    testDateFmtShortDateComponentsN_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "z");
        test.done();
    },
    testDateFmtShortDateComponentsD_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortDateComponentsDM_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortDateComponentsMY_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortDateComponentsDMY_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortDateComponentsWDM_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Č 29.09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Č 29.09.11");
        test.done();
    },
    testDateFmtFullDateComponentsY_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtFullDateComponentsM_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "září");
        test.done();
    },
    testDateFmtFullDateComponentsD_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtFullDateComponentsDM_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. září");
        test.done();
    },
    testDateFmtFullDateComponentsMY_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "září 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. září 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "čtvrtek 29. září");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "čtvrtek 29. září 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortTimeComponentsM_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortTimeComponentsH_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortTimeComponentsHM_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortTimeComponentsHMS_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortTimeComponentsHMA_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortTimeComponentsHMZ_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "cs-CZ",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortTimeComponentsHMAZ_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "cs-CZ",
            type: "time",
            time: "ahmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortTimeComponentsHMSA_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortTimeComponentsHMSZ_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "cs-CZ",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtShortTimeComponentsHMSAZ_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "cs-CZ",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtFullTimeComponentsS_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtFullTimeComponentsM_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtFullTimeComponentsH_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtFullTimeComponentsHM_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtFullTimeComponentsHMS_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtFullTimeComponentsHMA_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtFullTimeComponentsHMZ_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "cs-CZ",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtFullTimeComponentsHMSA_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtFullTimeComponentsHMSZ_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "cs-CZ",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtFullTimeComponentsHMSAZ_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "cs-CZ",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtWithTimeZoneAndNoDST_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "cs-CZ",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "cs-CZ",
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
    testDateFmtFormatRelativeWithinMinuteAfter_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 30 sekund");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "před 30 sekundami");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 10 minut");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "před 10 minutami");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 4 hodiny");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "před 4 hodinami");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 4 dny");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "před 4 dny");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 9 týdnů");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "před 9 týdny");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 16 měsíců");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "před 14 měsíci");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 14 let");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_cs_CZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "cs-CZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "cs-CZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "cs-CZ",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "před 21 lety");
        test.done();
    }
};