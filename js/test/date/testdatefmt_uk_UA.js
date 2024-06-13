/*
 * testdatefmt_uk_UK.js - test the date formatter object in Ukranian
 *
 * Copyright © 2012-2015,2017,2023 JEDLSoft
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

module.exports.testdatefmt_uk_UA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_uk_UA: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "uk-UA"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtSimpleMedium_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 вер. 2011 р.");
        test.done();
    },
    testDateFmtSimpleLong_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 вересня 2011 р.");
        test.done();
    },
    testDateFmtSimpleFull_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 вересня 2011 р.");
        test.done();
    },
    testDateFmtSimpleTimeShort_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtSimpleTimeMedium_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtSimpleTimeLong_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtSimpleTimeFull_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtDateTimeSimpleShort_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 вер. 2011 р., 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 вересня 2011 р. о 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 вересня 2011 р. о 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "uk-UA",
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
    testDateFmtTemplateClock12SwitchHH_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtTemplateClock12Switchkk_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtTemplateClock24Switchhh_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtTemplateClock24SwitchKK_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtTypeDate_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtTypeTime_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtTypeDateTime_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11, 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtShortDateComponentsM_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ве");
        test.done();
    },
    testDateFmtShortDateComponentsN_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "в");
        test.done();
    },
    testDateFmtShortDateComponentsD_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtShortDateComponentsDM_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtShortDateComponentsMY_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtShortDateComponentsDMY_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtShortDateComponentsWDM_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Ч, 29.09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Ч, 29.09.11");
        test.done();
    },
    testDateFmtFullDateComponentsY_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtFullDateComponentsM_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "вересень");
        test.done();
    },
    testDateFmtFullDateComponentsD_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtFullDateComponentsDM_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 вересня");
        test.done();
    },
    testDateFmtFullDateComponentsMY_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "вересень 2011 р.");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 вересня 2011 р.");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "четвер, 29 вересня");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "четвер, 29 вересня 2011 р.");
        test.done();
    },
    testDateFmtShortTimeComponentsS_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtShortTimeComponentsM_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtShortTimeComponentsH_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtShortTimeComponentsMS_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtShortTimeComponentsHM_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtShortTimeComponentsHMS_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtShortTimeComponentsHMA_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtShortTimeComponentsHMZ_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "uk-UA",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 EEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "uk-UA",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 EEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtShortTimeComponentsHMSZ_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "uk-UA",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 EEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "uk-UA",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 EEST");
        test.done();
    },
    testDateFmtFullTimeComponentsS_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtFullTimeComponentsM_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtFullTimeComponentsH_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtFullTimeComponentsMS_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtFullTimeComponentsHM_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtFullTimeComponentsHMS_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtFullTimeComponentsHMA_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    testDateFmtFullTimeComponentsHMZ_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "uk-UA",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 EEST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "uk-UA",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 EEST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_uk_UA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "uk-UA", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "uk-UA",
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
    }
};