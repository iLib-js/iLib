/*
 * testdatefmt_mn_Cyrl_MN.js - test the date formatter object in Mongolian
 *
 * Copyright © 2012-2015,2017-2018,2020,2023 JEDLSoft
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

module.exports.testdatefmt_mn_Cyrl_MN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_mn_Cyrl_MN: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011.09.29");
        test.done();
    },
    testDateFmtSimpleMedium_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 оны 9-р сарын 29");
        test.done();
    },
    testDateFmtSimpleLong_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 оны есдүгээр сарын 29');
        test.done();
    },
    testDateFmtSimpleFull_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 оны есдүгээр сарын 29');
        test.done();
    },
    testDateFmtSimpleTimeShort_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtSimpleTimeMedium_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtSimpleTimeLong_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtSimpleTimeFull_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtDateTimeSimpleShort_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011.09.29 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 оны 9-р сарын 29 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 оны есдүгээр сарын 29 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 оны есдүгээр сарын 29 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtTemplateCalendarIncompatibleDateType_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtTemplateClock12SwitchHH_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtTemplateClock12Switchkk_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtTemplateClock24Switchhh_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtTemplateClock24SwitchKK_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtTypeDate_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011.09.29");
        test.done();
    },
    testDateFmtTypeTime_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtTypeDateTime_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011.09.29 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtShortDateComponentsM_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtShortDateComponentsN_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtShortDateComponentsD_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtShortDateComponentsDM_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09.29");
        test.done();
    },
    testDateFmtShortDateComponentsMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011.09");
        test.done();
    },
    testDateFmtShortDateComponentsDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011.09.29");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '09.29, Пү гараг');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011.09.29, Пү гараг');
        test.done();
    },
    testDateFmtFullDateComponentsY_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtFullDateComponentsM_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Есдүгээр сар');
        test.done();
    },
    testDateFmtFullDateComponentsD_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtFullDateComponentsDM_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'есдүгээр сарын 29');
        test.done();
    },
    testDateFmtFullDateComponentsMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 оны есдүгээр сар');
        test.done();
    },
    testDateFmtFullDateComponentsDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 оны есдүгээр сарын 29');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'есдүгээр сарын 29, пүрэв гараг');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 оны есдүгээр сарын 29, пүрэв гараг');
        test.done();
    },
    testDateFmtShortTimeComponentsS_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtShortTimeComponentsM_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtShortTimeComponentsH_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtShortTimeComponentsHM_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtShortTimeComponentsHMA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtShortTimeComponentsHMZ_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mn-Cyrl-MN",
            type: "time",
            time: "hmz",
            timezone: "Asia/Ulaanbaatar"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 8,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 (+08/+09)");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mn-Cyrl-MN",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Ulaanbaatar"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 8,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 (+08/+09)");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtShortTimeComponentsHMSZ_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mn-Cyrl-MN",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Ulaanbaatar"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 8,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 (+08/+09)");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mn-Cyrl-MN",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Ulaanbaatar"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 8,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 (+08/+09)");
        test.done();
    },
    testDateFmtFullTimeComponentsS_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtFullTimeComponentsM_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtFullTimeComponentsH_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtFullTimeComponentsHM_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtFullTimeComponentsHMA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtFullTimeComponentsHMZ_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mn-Cyrl-MN",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Ulaanbaatar"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 8,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 (+08/+09)");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mn-Cyrl-MN",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Ulaanbaatar"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 8,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 (+08/+09)");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
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
    testDateFmtFullTimeComponentsHMSZ_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mn-Cyrl-MN",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Ulaanbaatar"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 8,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 (+08/+09)");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mn-Cyrl-MN",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Ulaanbaatar"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 8,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 (+08/+09)");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "mn-Cyrl-MN",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Ulaanbaatar"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 (+08/+09)");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 секундын дараа");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 секундын өмнө");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 минутын дараа");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 минутын өмнө");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 цагийн дараа");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 цагийн өмнө");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 өдрийн дараа");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 өдрийн өмнө");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 долоо хоногийн дараа");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 долоо хоногийн өмнө");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 сарын дараа");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 сарын өмнө");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 жилийн дараа");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_mn_Cyrl_MN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "mn-Cyrl-MN", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "mn-Cyrl-MN",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 жилийн өмнө");
        test.done();
    }
};