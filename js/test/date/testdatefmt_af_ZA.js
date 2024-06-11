/*
 * testdatefmt_af_ZA.js - test the date formatter object in Afrikaans
 *
 * Copyright © 2015,2017,2023 JEDLSoft
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

module.exports.testdatefmt_af_ZA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_af_ZA: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "af-ZA"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtSimpleMedium_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sep. 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_ZA_Jan: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 1,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Januarie 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_ZA_Feb: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 2,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Februarie 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_ZA_Mar: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 3,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Maart 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_ZA_Apr: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 4,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 April 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_ZA_May: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 5,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Mei 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_ZA_Jun: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 6,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Junie 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_ZA_Jul: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 7,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Julie 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_ZA_Aug: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 8,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Augustus 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_ZA_Sep: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_ZA_Oct: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 10,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Oktober 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_ZA_Nov: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 November 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_ZA_Dec: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Desember 2011");
        test.done();
    },
    testDateFmtSimpleLong_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    testDateFmtSimpleFull_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    testDateFmtSimpleTimeMedium_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtSimpleTimeLong_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtSimpleTimeFull_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtDateTimeSimpleShort_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sep. 2011 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011 om 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011 om 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "af-ZA",
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
    testDateFmtTemplateClock12SwitchHH_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtTemplateClock12Switchkk_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtTemplateClock24Switchhh_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtTemplateClock24SwitchKK_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtTypeDate_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtTypeTime_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtTypeDateTime_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtShortDateComponentsM_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtShortDateComponentsN_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtShortDateComponentsN_af_ZA_Mar: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 3,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "M");
        test.done();
    },
    testDateFmtShortDateComponentsD_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtShortDateComponentsDM_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09-29");
        test.done();
    },
    testDateFmtShortDateComponentsMY_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtShortDateComponentsWDM_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "S 09-29");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "S 2554-09-29");
        test.done();
    },
    testDateFmtFullDateComponentsY_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtFullDateComponentsM_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September");
        test.done();
    },
    testDateFmtFullDateComponentsD_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtFullDateComponentsDM_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September");
        test.done();
    },
    testDateFmtFullDateComponentsMY_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2015,
            month: 2,
            day: 19,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Donderdag 19 Februarie");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2015,
            month: 2,
            day: 19,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Donderdag 19 Februarie 2015");
        test.done();
    },
    testDateFmtShortTimeComponentsS_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtShortTimeComponentsM_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtShortTimeComponentsH_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtShortTimeComponentsMS_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtShortTimeComponentsHM_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtShortTimeComponentsHMS_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtShortTimeComponentsHMA_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtShortTimeComponentsHMZ_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "af-ZA",
            calendar: "gregorian",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 SAST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "af-ZA",
            calendar: "gregorian",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 SAST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtShortTimeComponentsHMSZ_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "af-ZA",
            calendar: "gregorian",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 SAST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "af-ZA",
            calendar: "gregorian",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 SAST");
        test.done();
    },
    testDateFmtFullTimeComponentsS_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtFullTimeComponentsM_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtFullTimeComponentsH_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtFullTimeComponentsMS_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtFullTimeComponentsHM_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtFullTimeComponentsHMS_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtFullTimeComponentsHMA_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtFullTimeComponentsHMZ_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "af-ZA", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 SAST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "af-ZA", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 SAST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
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
    testDateFmtFullTimeComponentsHMSZ_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "af-ZA",
            calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 SAST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "af-ZA", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 SAST");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "af-ZA", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 SAST");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "oor 30 sekondes");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 sekondes gelede");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "oor 10 minute");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 minute gelede");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "oor 4 uur");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 uur gelede");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "oor 4 dae");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 dae gelede");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "oor 9 weke");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 weke gelede");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "oor 16 maande");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 maande gelede");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-ZA",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "oor 14 jaar");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_af_ZA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "af-ZA", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "af-ZA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "af-ZA",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 jaar gelede");
        test.done();
    }
};