/*
 * testdatefmt_es_ES.js - test the date formatter object in Castillian Spanish
 *
 * Copyright © 2012-2015,2017,2021 JEDLSoft
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

module.exports.testdatefmt_es_ES = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_es_ES: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "es-ES"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11");
        test.done();
    },
    testDateFmtSimpleMedium_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sept 2011");
        test.done();
    },
    testDateFmtSimpleLong_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de septiembre de 2011");
        test.done();
    },
    testDateFmtSimpleFull_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de septiembre de 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtSimpleTimeMedium_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtSimpleTimeLong_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtSimpleTimeFull_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtDateTimeSimpleShort_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sept 2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de septiembre de 2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de septiembre de 2011, 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "es-ES",
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
    testDateFmtTemplateCalendarIncompatibleDateType_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtTemplateClock12SwitchHH_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtTemplateClock12Switchkk_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtTemplateClock24Switchhh_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtTemplateClock24SwitchKK_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtTypeDate_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11");
        test.done();
    },
    testDateFmtTypeTime_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtTypeDateTime_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11, 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortDateComponentsM_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortDateComponentsN_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortDateComponentsD_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortDateComponentsDM_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9");
        test.done();
    },
    testDateFmtShortDateComponentsMY_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/11");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "J, 29/9");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "J, 29/9/11");
        test.done();
    },
    testDateFmtFullDateComponentsY_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtFullDateComponentsM_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septiembre");
        test.done();
    },
    testDateFmtFullDateComponentsD_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtFullDateComponentsDM_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de septiembre");
        test.done();
    },
    testDateFmtFullDateComponentsMY_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septiembre de 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de septiembre de 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "jueves, 29 de septiembre");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "jueves, 29 de septiembre de 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortTimeComponentsM_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortTimeComponentsH_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortTimeComponentsMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortTimeComponentsHM_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortTimeComponentsHMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortTimeComponentsHMA_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortTimeComponentsHMZ_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-ES",
            type: "time",
            time: "hmz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortTimeComponentsHMAZ_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-ES",
            type: "time",
            time: "hmaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortTimeComponentsHMSA_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortTimeComponentsHMSZ_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-ES",
            type: "time",
            time: "hmsz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtShortTimeComponentsHMSAZ_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-ES",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtFullTimeComponentsS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtFullTimeComponentsM_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtFullTimeComponentsH_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtFullTimeComponentsMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtFullTimeComponentsHM_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtFullTimeComponentsHMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtFullTimeComponentsHMA_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtFullTimeComponentsHMZ_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-ES",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtFullTimeComponentsHMAZ_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-ES",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtFullTimeComponentsHMSA_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-ES", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtFullTimeComponentsHMSZ_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-ES",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtFullTimeComponentsHMSAZ_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-ES",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    testDateFmtWithTimeZoneAndNoDST_es_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-ES",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "es-ES",
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
    }
};