/*
 * testdatefmt_my_MM.js - test the date formatter object in Burmese-Myanmar
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

module.exports.testdatefmt_my_MM = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_my_MM: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "my-MM"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "short", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtSimpleMedium_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "medium", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 စက် 29');
        test.done();
    },
    testDateFmtSimpleLong_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "long", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 စက်တင်ဘာ 29');
        test.done();
    },
    testDateFmtSimpleFull_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 စက်တင်ဘာ 29');
        test.done();
    },
    testDateFmtSimpleTimeShort_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "short", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtSimpleTimeMedium_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "medium", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtSimpleTimeLong_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "long", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtSimpleTimeFull_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtDateTimeSimpleShort_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "short", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtDateTimeSimpleMedium_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "medium", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 စက် 29 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "long", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 စက်တင်ဘာ 29 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 စက်တင်ဘာ 29 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", calendar: "julian", template: "yyyy-MM-dd", useNative: false});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "my-MM",
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
    testDateFmtTemplateCalendarIncompatibleDateType_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", calendar: "julian", template: "yyyy-MM-dd B HH:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        // convert automatically to a Julian calendar date
        test.equal(fmt.format(date), "2011-09-16 နေ့လယ် 13:45");
        test.done();
    },
    testDateFmtTemplateClock12SwitchHH_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", clock: "12", template: "HH:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtTemplateClock12Switchkk_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", clock: "12", template: "kk:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtTemplateClock24Switchhh_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", clock: "24", template: "hh:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
        var fmt = new DateFmt({locale: "my-MM", clock: "24", template: "KK:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", template: "hh:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
        var fmt = new DateFmt({locale: "my-MM", template: "KK:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", template: "HH:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", template: "kk:mm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtTypeDate_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "date", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtTypeTime_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtTypeDateTime_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "datetime", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtShortDateComponentsY_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", date: "y", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtShortDateComponentsM_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", date: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9');
        test.done();
    },
    testDateFmtShortDateComponentsN_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", date: "n", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'စ');
        test.done();
    },
    testDateFmtShortDateComponentsD_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", date: "d", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtShortDateComponentsDM_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", date: "dm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtShortDateComponentsMY_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", date: "my", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtShortDateComponentsDMY_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", date: "dmy", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtShortDateComponentsWDM_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", date: "wdm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9 က');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", date: "wdmy", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/11 က');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", date: "wdm", length: "long", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'စက်တင်ဘာ 29 ကြာသပတေး');
        test.done();
    },
    testDateFmtFullDateComponentsY_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full", date: "y", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtFullDateComponentsM_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full", date: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'စက်တင်ဘာ');
        test.done();
    },
    testDateFmtFullDateComponentsD_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full", date: "d", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtFullDateComponentsDM_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full", date: "dm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'စက်တင်ဘာ 29');
        test.done();
    },
    testDateFmtFullDateComponentsMY_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full", date: "my", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 စက်တင်ဘာ');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full", date: "dmy", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 စက်တင်ဘာ 29');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full", date: "wdm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'စက်တင်ဘာ 29 ကြာသပတေး');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full", date: "wdmy", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 စက်တင်ဘာ 29 ကြာသပတေး');
        test.done();
    },
    testDateFmtShortTimeComponentsS_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", time: "s", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtShortTimeComponentsM_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", time: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtShortTimeComponentsH_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", time: "h", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtShortTimeComponentsMS_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", time: "ms", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtShortTimeComponentsHM_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", time: "hm",useNative:false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtShortTimeComponentsHMS_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", time: "hms", useNative:false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtShortTimeComponentsHMA_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", time: "hma", useNative:false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtShortTimeComponentsHMZ_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "my-MM",
            type: "time",
            time: "hmz",
            timezone: "Asia/Yangon",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "+0630 13:45");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "my-MM",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Yangon",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "+0630 13:45");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", time: "hmsa", useNative:false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtShortTimeComponentsHMSZ_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "my-MM",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Yangon",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "+0630 13:45:37");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "my-MM",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Yangon",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "+0630 13:45:37");
        test.done();
    },
    testDateFmtFullTimeComponentsS_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", length: "full", time: "s", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtFullTimeComponentsM_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", length: "full", time: "m", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtFullTimeComponentsH_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", length: "full", time: "h", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtFullTimeComponentsMS_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", length: "full", time: "ms",useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtFullTimeComponentsHM_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", length: "full", time: "hm", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtFullTimeComponentsHMS_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", length: "full", time: "hms", useNative:false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtFullTimeComponentsHMA_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "my-MM",
            type: "time",
            length: "full",
            time: "hma",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtFullTimeComponentsHMZ_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "my-MM",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Yangon",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "+0630 13:45");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "my-MM",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Yangon",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "+0630 13:45");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", type: "time", length: "full", time: "hmsa", useNative: false});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
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
    testDateFmtFullTimeComponentsHMSZ_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "my-MM",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Yangon",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "+0630 13:45:37");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "my-MM",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Yangon",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "+0630 13:45:37");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "my-MM",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Yangon",
            useNative: false
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "+0630 13:45:37");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '30 စက္ကန့်အတွင်း');
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'ပြီးခဲ့သည့် 30 စက္ကန့်');
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 မိနစ်အတွင်း');
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'ပြီးခဲ့သည့် 10 မိနစ်');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 နာရီအတွင်း');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'ပြီးခဲ့သည့် 4 နာရီ');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 ရက်အတွင်း');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date),  'ပြီးခဲ့သည့် 4 ရက်');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 ပတ်အတွင်း');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'ပြီးခဲ့သည့် 9 ပတ်');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "my-MM",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '16 လအတွင်း');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "my-MM",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'ပြီးခဲ့သည့် 14 လ');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "my-MM",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 နှစ်အတွင်း');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_my_MM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "my-MM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "my-MM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "my-MM",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'ပြီးခဲ့သည့် 21 နှစ်');
        test.done();
    }
};