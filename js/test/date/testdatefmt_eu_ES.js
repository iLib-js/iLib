/*
 * testdatefmt_eu_ES.js - test the date formatter object in Basque/Spain
 *
 * Copyright © 2020-2021, 2023-2024 JEDLSoft
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

module.exports.testdatefmt_eu_ES = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_eu_ES: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "eu-ES"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11/9/29");
        test.done();
    },
    testDateFmtSimpleMedium_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011(e)ko ira. 29(a)");
        test.done();
    },
    testDateFmtSimpleLong_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011(e)ko irailaren 29(a)");
        test.done();
    },
    testDateFmtSimpleFull_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011(e)ko irailaren 29(a)');
        test.done();
    },
    testDateFmtSimpleTimeShort_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtSimpleTimeMedium_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtSimpleTimeLong_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtSimpleTimeFull_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtDateTimeSimpleShort_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '11/9/29 (13:45)');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011(e)ko ira. 29(a) (13:45)');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011(e)ko irailaren 29(a) (13:45)');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011(e)ko irailaren 29(a) (13:45)');
        test.done();
    },
    testDateFmtTemplateCalendar_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "eu-ES",
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
    testDateFmtTemplateCalendarIncompatibleDateType_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtTemplateClock12SwitchHH_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtTemplateClock12Switchkk_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtTemplateClock24Switchhh_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
        var fmt = new DateFmt({locale: "eu-ES", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
        var fmt = new DateFmt({locale: "eu-ES", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtTypeDate_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '11/9/29');
        test.done();
    },
    testDateFmtTypeTime_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtTypeDateTime_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '11/9/29 (13:45)');
        test.done();
    },
    testDateFmtShortDateComponentsY_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtShortDateComponentsM_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "I");
        test.done();
    },
    testDateFmtShortDateComponentsN_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'i');
        test.done();
    },
    testDateFmtShortDateComponentsD_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtShortDateComponentsDM_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/29');
        test.done();
    },
    testDateFmtShortDateComponentsMY_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '11/9');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '11/9/29');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/29, O');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '11/9/29, O');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'irailaren 29(a), og.');
        test.done();
    },
    testDateFmtFullDateComponentsY_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtFullDateComponentsM_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "iraila");
        test.done();
    },
    testDateFmtFullDateComponentsD_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtFullDateComponentsDM_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'irailaren 29(a)');
        test.done();
    },
    testDateFmtFullDateComponentsMY_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011(e)ko iraila');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011(e)ko irailaren 29(a)');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'irailaren 29(a), osteguna');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011(e)ko irailaren 29(a), osteguna');
        test.done();
    },
    testDateFmtShortTimeComponentsS_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtShortTimeComponentsM_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtShortTimeComponentsH_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtShortTimeComponentsMS_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtShortTimeComponentsHM_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtShortTimeComponentsHMS_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtShortTimeComponentsHMA_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtShortTimeComponentsHMZ_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "eu-ES",
            type: "time",
            time: "hmz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 (CEST)");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "eu-ES",
            type: "time",
            time: "hmaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 (CEST)");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtShortTimeComponentsHMSZ_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "eu-ES",
            type: "time",
            time: "hmsz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 (CEST)");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "eu-ES",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 (CEST)");
        test.done();
    },
    testDateFmtFullTimeComponentsS_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtFullTimeComponentsM_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtFullTimeComponentsH_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtFullTimeComponentsMS_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtFullTimeComponentsHM_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtFullTimeComponentsHMS_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtFullTimeComponentsHMA_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtFullTimeComponentsHMZ_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "eu-ES",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 (CEST)");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "eu-ES",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 (CEST)");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
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
    testDateFmtFullTimeComponentsHMSZ_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "eu-ES",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 (CEST)");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "eu-ES",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 (CEST)");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "eu-ES",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 (CET)");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 segundo barru");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "duela 30 segundo");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 minutu barru");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'duela 10 minutu');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 ordu barru');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'duela 4 ordu');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 egun barru');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date),  'duela 4 egun');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 aste barru');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'duela 9 aste');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '16 hilabete barru');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'duela 14 hilabete');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "eu-ES",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 urte barru');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_eu_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "eu-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "eu-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "eu-ES",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'duela 21 urte');
        test.done();
    }
};