/*
 * testdatefmt_ga_IE.js - test the date formatter object in Irish Gaelic
 *
 * Copyright © 2012-2015,2017-2018,2021,2023 JEDLSoft
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

module.exports.testdatefmt_ga_IE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_ga_IE: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ga-IE"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    testDateFmtSimpleMedium_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 MFómh 2011");
        test.done();
    },
    testDateFmtSimpleLong_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Meán Fómhair 2011");
        test.done();
    },
    testDateFmtSimpleFull_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Meán Fómhair 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtSimpleTimeMedium_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtSimpleTimeLong_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtSimpleTimeFull_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtDateTimeSimpleShort_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 MFómh 2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Meán Fómhair 2011 ag 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Meán Fómhair 2011 ag 13:45");
        test.done();
    },
    testDateFmtDateTimeFullwithUseNativeFalse_ga_IE: function(test) {
        test.expect(2);
        var fmt= new DateFmt({locale:"ga-IE",length: "full", type:"datetime", date: "dmwy", time:"hma", useNative:false});

        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2015,
            month: 4,
            day: 8,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Dé Céadaoin 8 Aibreán 2015 ag 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ga-IE",
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
    testDateFmtTemplateClock12SwitchHH_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtTemplateClock12Switchkk_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtTemplateClock24Switchhh_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtTemplateClock24SwitchKK_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtShortDateComponentsY_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtShortDateComponentsM_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtShortDateComponentsN_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "M");
        test.done();
    },
    testDateFmtShortDateComponentsD_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtShortDateComponentsDM_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtShortDateComponentsMY_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09/2011");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "D 29/09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "D 29/09/2011");
        test.done();
    },
    testDateFmtFullDateComponentsY_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtFullDateComponentsM_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Meán Fómhair");
        test.done();
    },
    testDateFmtFullDateComponentsD_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtFullDateComponentsDM_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Meán Fómhair");
        test.done();
    },
    testDateFmtFullDateComponentsMY_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Meán Fómhair 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Meán Fómhair 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Déardaoin 29 Meán Fómhair");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Déardaoin 29 Meán Fómhair 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtShortTimeComponentsM_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtShortTimeComponentsH_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtShortTimeComponentsHM_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtShortTimeComponentsHMS_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtShortTimeComponentsHMA_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtShortTimeComponentsHMZ_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ga-IE",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 IST/GMT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ga-IE",
            type: "time",
            time: "ahmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 IST/GMT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtShortTimeComponentsHMSZ_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ga-IE",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 IST/GMT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ga-IE",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 IST/GMT");
        test.done();
    },
    testDateFmtFullTimeComponentsS_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtFullTimeComponentsM_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtFullTimeComponentsH_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtFullTimeComponentsHM_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtFullTimeComponentsHMS_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtFullTimeComponentsHMA_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtFullTimeComponentsHMZ_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ga-IE",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 IST/GMT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
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
    testDateFmtFullTimeComponentsHMSZ_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ga-IE",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 IST/GMT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ga-IE",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 IST/GMT");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ga-IE",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 IST/GMT");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "i gceann 30 soicind");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 soicind ó shin");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "i gceann 10 nóiméad");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 nóiméad ó shin");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "i gceann 4 uair an chloig");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 uair an chloig ó shin");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "i gceann 4 lá");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 lá ó shin");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "i gceann 9 seachtaine");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 seachtaine ó shin");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "i gceann 16 mí");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 mí ó shin");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ga-IE",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "i gceann 14 bliain");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ga_IE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ga-IE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ga-IE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ga-IE",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 bliain ó shin");
        test.done();
    }
};