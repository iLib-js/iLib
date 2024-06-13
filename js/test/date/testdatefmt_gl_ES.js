/*
 * testdatefmt_gl_ES.js - test the date formatter object in Galician-Spain
 *
 * Copyright © 2020, 2023-2024 JEDLSoft
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

module.exports.testdatefmt_gl_ES = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_gl_ES: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "gl-ES"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtSimpleMedium_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de set. de 2011");
        test.done();
    },
    testDateFmtSimpleLong_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtSimpleFull_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembro de 2011');
        test.done();
    },
    testDateFmtSimpleTimeShort_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtSimpleTimeMedium_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtSimpleTimeLong_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtSimpleTimeFull_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '01:45');
        test.done();
    },
    testDateFmtDateTimeSimpleShort_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09/11, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtDateTimeSimpleLong_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembro de 2011, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembro de 2011, 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "gl-ES",
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
    testDateFmtTemplateCalendarIncompatibleDateType_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtTemplateClock12SwitchHH_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtTemplateClock12Switchkk_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtTemplateClock24Switchhh_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtTemplateClock24SwitchKK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtTypeDate_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09/11');
        test.done();
    },
    testDateFmtTypeTime_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtTypeDateTime_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09/11, 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtShortDateComponentsM_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "se");
        test.done();
    },
    testDateFmtShortDateComponentsN_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 's');
        test.done();
    },
    testDateFmtShortDateComponentsD_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtShortDateComponentsDM_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09');
        test.done();
    },
    testDateFmtShortDateComponentsMY_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '09/11');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/09/11');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'x., 29/09');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'x., 29/09/11');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'xov., 29 de setembro');
        test.done();
    },
    testDateFmtFullDateComponentsY_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullDateComponentsM_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullDateComponentsD_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullDateComponentsDM_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembro');
        test.done();
    },
    testDateFmtFullDateComponentsMY_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'setembro de 2011');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembro de 2011');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'xoves, 29 de setembro');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'xoves, 29 de setembro de 2011');
        test.done();
    },
    testDateFmtShortTimeComponentsS_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtShortTimeComponentsM_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtShortTimeComponentsH_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtShortTimeComponentsMS_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtShortTimeComponentsHM_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtShortTimeComponentsHMS_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtShortTimeComponentsHMA_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtShortTimeComponentsHMZ_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gl-ES",
            type: "time",
            time: "hmz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtShortTimeComponentsHMAZ_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gl-ES",
            type: "time",
            time: "hmaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtShortTimeComponentsHMSA_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtShortTimeComponentsHMSZ_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gl-ES",
            type: "time",
            time: "hmsz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtShortTimeComponentsHMSAZ_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gl-ES",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullTimeComponentsS_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullTimeComponentsM_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullTimeComponentsH_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullTimeComponentsMS_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullTimeComponentsHM_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullTimeComponentsHMS_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullTimeComponentsHMA_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullTimeComponentsHMZ_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gl-ES",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullTimeComponentsHMAZ_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gl-ES",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullTimeComponentsHMSA_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullTimeComponentsHMSZ_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gl-ES",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFullTimeComponentsHMSAZ_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gl-ES",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtWithTimeZoneAndNoDST_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "gl-ES",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "gl-ES",
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
    testDateFmtFormatRelativeWithinMinuteAfter_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "en 30 segundos");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hai 30 segundos");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "en 10 minutos");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'hai 10 minutos');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'en 4 horas');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'hai 4 horas');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'en 4 días');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date),  'hai 4 días');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'en 9 semanas');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'hai 9 semanas');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'en 16 meses');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'hai 14 meses');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gl-ES",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'en 14 anos');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_gl_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "gl-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "gl-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "gl-ES",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'hai 21 anos');
        test.done();
    }
};