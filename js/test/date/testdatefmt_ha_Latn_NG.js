/*
 * testdatefmt_ha_Latn_NG.js - test the date formatter object in Hausa.
 *
 * Copyright © 2015,2017-2018,2021,2023 JEDLSoft
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

module.exports.testdatefmt_ha_Latn_NG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_ha_Latn: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ha-Latn-NG"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtSimpleMedium_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sat, 2011");
        test.done();
    },
    testDateFmtSimpleLong_ha_Latn_Jan: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 1,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Janairu, 2011");
        test.done();
    },
    testDateFmtSimpleLong_ha_Latn_Feb: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 2,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Faburairu, 2011");
        test.done();
    },
    testDateFmtSimpleLong_ha_Latn_Mar: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 3,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Maris, 2011");
        test.done();
    },
    testDateFmtSimpleLong_ha_Latn_Apr: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 4,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Afirilu, 2011");
        test.done();
    },
    testDateFmtSimpleLong_ha_Latn_May: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 5,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Mayu, 2011");
        test.done();
    },
    testDateFmtSimpleLong_ha_Latn_Jun: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 6,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Yuni, 2011");
        test.done();
    },
    testDateFmtSimpleLong_ha_Latn_Jul: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 7,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Yuli, 2011");
        test.done();
    },
    testDateFmtSimpleLong_ha_Latn_Aug: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 8,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Agusta, 2011");
        test.done();
    },
    testDateFmtSimpleLong_ha_Latn_Sep: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Satumba, 2011");
        test.done();
    },
    testDateFmtSimpleLong_ha_Latn_Oct: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 10,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Oktoba, 2011");
        test.done();
    },
    testDateFmtSimpleLong_ha_Latn_Nov: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Nuwamba, 2011");
        test.done();
    },
    testDateFmtSimpleLong_ha_Latn_Dec: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Disamba, 2011");
        test.done();
    },
    testDateFmtSimpleLong_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Satumba, 2011");
        test.done();
    },
    testDateFmtSimpleFull_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Satumba, 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtSimpleTimeMedium_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtSimpleTimeLong_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtSimpleTimeFull_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtDateTimeSimpleShort_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtDateTimeSimpleMedium_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sat, 2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Satumba, 2011 da 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Satumba, 2011 da 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ha-Latn-NG",
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



    testDateFmtTemplateClock12SwitchHH_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtTemplateClock12Switchkk_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtTemplateClock24Switchhh_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtTemplateClock24SwitchKK_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtTypeDate_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtTypeTime_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtTypeDateTime_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtShortDateComponentsY_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtShortDateComponentsM_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtShortDateComponentsN_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtShortDateComponentsN_ha_Latn_Mar: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtShortDateComponentsD_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtShortDateComponentsDM_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtShortDateComponentsMY_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtShortDateComponentsDMY_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtShortDateComponentsDMW_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "dmw"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'L 29/9');
        test.done();
    },
    testDateFmtShortDateComponentsDMWY_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "dmwy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2554,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'L 29/9/54');
        test.done();
    },
    testDateFmtFullDateComponentsY_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtFullDateComponentsM_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Satumba");
        test.done();
    },
    testDateFmtFullDateComponentsD_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtFullDateComponentsDM_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Satumba");
        test.done();
    },
    testDateFmtFullDateComponentsMY_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Satumba, 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Satumba, 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMW_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "dmw"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2015,
            month: 2,
            day: 19,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Alhamis 19 Faburairu');
        test.done();
    },
    testDateFmtFullDateComponentsDMWY_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "dmwy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2015,
            month: 2,
            day: 19,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Alhamis 19 Faburairu, 2015');
        test.done();
    },
    testDateFmtShortTimeComponentsS_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtShortTimeComponentsM_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtShortTimeComponentsH_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtShortTimeComponentsMS_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtShortTimeComponentsHM_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock:"12", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45");
        test.done();
    },
    testDateFmtShortTimeComponentsHMS_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock:"12", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37");
        test.done();
    },
    testDateFmtShortTimeComponentsHMA_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock:"12", type: "time", time: "ahm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45 Yamma');
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ha-Latn-NG", calendar: "gregorian",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 WAT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ha-Latn-NG", calendar: "gregorian",
            type: "time",
            time: "ahmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 WAT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock:"12", type: "time", time: "ahms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45:37 Yamma');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ha-Latn-NG", calendar: "gregorian",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ha-Latn-NG", calendar: "gregorian",
            type: "time",
            time: "ahmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAT");
        test.done();
    },
    testDateFmtFullTimeComponentsS_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtFullTimeComponentsM_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtFullTimeComponentsH_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", clock:"12", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1");
        test.done();
    },
    testDateFmtFullTimeComponentsMS_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtFullTimeComponentsHM_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtFullTimeComponentsHMS_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
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
    testDateFmtFullTimeComponentsHMA_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", clock:"12", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45 Yamma');
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ha-Latn-NG", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 WAT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ha-Latn-NG", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 WAT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", clock:"12", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '1:45:37 Yamma');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ha-Latn-NG", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ha-Latn-NG", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAT");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ha-Latn-NG", calendar: "gregorian",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 WAT");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'cikin 30 dakika');
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '30 dakika da ya gabata');
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'cikin 10 minti');
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 minti da ya gabata');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'cikin 4 awa');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 awa da ya gabata');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "a cikin kwanaki 4");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "kwanaki da suka gabata 4");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "a cikin makonni 9");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "makonni da suka gabata 9");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "a cikin watanni 16");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "watanni da suka gabata 14");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "a shekaru 14");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ha_Latn: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ha-Latn-NG",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "shekara da suka gabata 21");
        test.done();
    }
};