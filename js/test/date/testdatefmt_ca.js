/*
 * testdatefmt_ca.js - test the date formatter object in Catalan
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

module.exports.testdatefmt_ca = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    //// ca-AD //////
    testDateFmtConstructorEmpty_ca_AD: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ca-AD"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtSimpleMedium_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de set. 2011");
        test.done();
    },
    testDateFmtSimpleLong_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de setembre del 2011");
        test.done();
    },
    testDateFmtSimpleFull_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembre del 2011');
        test.done();
    },
    testDateFmtSimpleTimeShort_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtSimpleTimeMedium_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtSimpleTimeLong_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtSimpleTimeFull_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45');
        test.done();
    },
    testDateFmtDateTimeSimpleShort_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/11 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de set. 2011, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembre del 2011, a les 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembre del 2011, a les 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ca-AD",
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
    testDateFmtTemplateCalendarIncompatibleDateType_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtTemplateClock12SwitchHH_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtTemplateClock12Switchkk_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtTemplateClock24Switchhh_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
        var fmt = new DateFmt({locale: "ca-AD", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
        var fmt = new DateFmt({locale: "ca-AD", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtTypeDate_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/11');
        test.done();
    },
    testDateFmtTypeTime_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtTypeDateTime_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/11 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtShortDateComponentsM_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ST");
        test.done();
    },
    testDateFmtShortDateComponentsN_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'd');
        test.done();
    },
    testDateFmtShortDateComponentsD_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtShortDateComponentsDM_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9');
        test.done();
    },
    testDateFmtShortDateComponentsMY_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/11');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/11');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'dj., 29/9');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'dj., 29/9/11');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'dj., 29 de setembre');
        test.done();
    },
    testDateFmtFullDateComponentsY_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFullDateComponentsM_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "setembre");
        test.done();
    },
    testDateFmtFullDateComponentsD_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFullDateComponentsDM_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembre');
        test.done();
    },
    testDateFmtFullDateComponentsMY_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'setembre del 2011');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembre del 2011');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'dijous, 29 de setembre');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'dijous, 29 de setembre del 2011');
        test.done();
    },
    testDateFmtShortTimeComponentsS_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtShortTimeComponentsM_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtShortTimeComponentsH_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtShortTimeComponentsMS_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtShortTimeComponentsHM_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtShortTimeComponentsHMS_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtShortTimeComponentsHMA_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtShortTimeComponentsHMZ_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-AD",
            type: "time",
            time: "hmz",
            timezone: "Europe/Andorra"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtShortTimeComponentsHMAZ_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-AD",
            type: "time",
            time: "hmaz",
            timezone: "Europe/Andorra"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtShortTimeComponentsHMSA_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtShortTimeComponentsHMSZ_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-AD",
            type: "time",
            time: "hmsz",
            timezone: "Europe/Andorra"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtShortTimeComponentsHMSAZ_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-AD",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/Andorra"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFullTimeComponentsS_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFullTimeComponentsM_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFullTimeComponentsH_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFullTimeComponentsMS_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFullTimeComponentsHM_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFullTimeComponentsHMS_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFullTimeComponentsHMA_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFullTimeComponentsHMZ_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-AD",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/Andorra"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFullTimeComponentsHMAZ_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-AD",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/Andorra"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFullTimeComponentsHMSA_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFullTimeComponentsHMSZ_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-AD",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Andorra"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFullTimeComponentsHMSAZ_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-AD",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/Andorra"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtWithTimeZoneAndNoDST_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-AD",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Andorra"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-AD",
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
    testDateFmtFormatRelativeWithinMinuteAfter_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "d’aquí a 30 segons");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "fa 30 segons");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "d’aquí a 10 minuts");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fa 10 minuts');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'd’aquí a 4 hores');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fa 4 hores');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'd’aquí a 4 dies');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date),  'fa 4 dies');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'd’aquí a 9 setmanes');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fa 9 setmanes');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'd’aquí a 16 mesos');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fa 14 mesos');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-AD",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'd’aquí a 14 anys');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ca_AD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-AD", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-AD",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-AD",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fa 21 anys');
        test.done();
    },
    //// ca-ES //////
    testDateFmtConstructorEmpty_ca_ES: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ca-ES"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtSimpleMedium_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de set. 2011");
        test.done();
    },
    testDateFmtSimpleLong_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de setembre del 2011");
        test.done();
    },
    testDateFmtSimpleFull_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembre del 2011');
        test.done();
    },
    testDateFmtSimpleTimeShort_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtSimpleTimeMedium_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtSimpleTimeLong_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtSimpleTimeFull_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45');
        test.done();
    },
    testDateFmtDateTimeSimpleShort_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/11 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de set. 2011, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembre del 2011, a les 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembre del 2011, a les 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ca-ES",
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
    testDateFmtTemplateCalendarIncompatibleDateType_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtTemplateClock12SwitchHH_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtTemplateClock12Switchkk_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtTemplateClock24Switchhh_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
        var fmt = new DateFmt({locale: "ca-ES", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtTypeDate_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/11');
        test.done();
    },
    testDateFmtTypeTime_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtTypeDateTime_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/11 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtShortDateComponentsM_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ST");
        test.done();
    },
    testDateFmtShortDateComponentsN_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'd');
        test.done();
    },
    testDateFmtShortDateComponentsD_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtShortDateComponentsDM_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9');
        test.done();
    },
    testDateFmtShortDateComponentsMY_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/11');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/11');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'dj., 29/9');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'dj., 29/9/11');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'dj., 29 de setembre');
        test.done();
    },
    testDateFmtFullDateComponentsY_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFullDateComponentsM_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "setembre");
        test.done();
    },
    testDateFmtFullDateComponentsD_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFullDateComponentsDM_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembre');
        test.done();
    },
    testDateFmtFullDateComponentsMY_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'setembre del 2011');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 de setembre del 2011');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'dijous, 29 de setembre');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'dijous, 29 de setembre del 2011');
        test.done();
    },
    testDateFmtShortTimeComponentsS_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtShortTimeComponentsM_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtShortTimeComponentsH_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtShortTimeComponentsMS_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtShortTimeComponentsHM_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtShortTimeComponentsHMS_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtShortTimeComponentsHMA_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtShortTimeComponentsHMZ_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-ES",
            type: "time",
            time: "hmz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtShortTimeComponentsHMAZ_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-ES",
            type: "time",
            time: "hmaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtShortTimeComponentsHMSA_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtShortTimeComponentsHMSZ_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-ES",
            type: "time",
            time: "hmsz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtShortTimeComponentsHMSAZ_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-ES",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFullTimeComponentsS_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFullTimeComponentsM_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFullTimeComponentsH_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFullTimeComponentsMS_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFullTimeComponentsHM_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFullTimeComponentsHMS_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFullTimeComponentsHMA_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFullTimeComponentsHMZ_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-ES",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFullTimeComponentsHMAZ_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-ES",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFullTimeComponentsHMSA_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFullTimeComponentsHMSZ_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-ES",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFullTimeComponentsHMSAZ_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-ES",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtWithTimeZoneAndNoDST_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ca-ES",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Madrid"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ca-ES",
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
    testDateFmtFormatRelativeWithinMinuteAfter_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "d’aquí a 30 segons");
        test.done();
    },
testDateFmtFormatRelativeWithinMinuteBefore_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "fa 30 segons");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "d’aquí a 10 minuts");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fa 10 minuts');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'd’aquí a 4 hores');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fa 4 hores');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'd’aquí a 4 dies');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date),  'fa 4 dies');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'd’aquí a 9 setmanes');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fa 9 setmanes');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'd’aquí a 16 mesos');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fa 14 mesos');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-ES",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'd’aquí a 14 anys');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ca_ES: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ca-ES", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ca-ES",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ca-ES",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'fa 21 anys');
        test.done();
    }
};