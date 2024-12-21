/*
 * testdatefmt_sk_SK.js - test the date formatter object in Slovakia
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

module.exports.testdatefmt_sk_SK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_sk_SK: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "sk-SK"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 2011");
        test.done();
    },
    testDateFmtSimpleMedium_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 2011");
        test.done();
    },
    testDateFmtSimpleLong_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. septembra 2011");
        test.done();
    },
    testDateFmtSimpleFull_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. septembra 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtSimpleTimeMedium_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtSimpleTimeLong_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtSimpleTimeFull_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtDateTimeSimpleShort_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 2011 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. septembra 2011 o 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. septembra 2011 o 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "sk-SK",
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
    testDateFmtTemplateClock12SwitchHH_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtTemplateClock12Switchkk_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtTemplateClock24Switchhh_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtTemplateClock24SwitchKK_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtTypeDate_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 2011");
        test.done();
    },
    testDateFmtTypeTime_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtTypeDateTime_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 2011 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortDateComponentsM_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortDateComponentsN_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortDateComponentsD_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortDateComponentsDM_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9");
        test.done();
    },
    testDateFmtShortDateComponentsMY_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9. 2011");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 9. 2011");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "š 29. 9");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "š 29. 9. 2011");
        test.done();
    },
    testDateFmtFullDateComponentsY_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFullDateComponentsM_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "september");
        test.done();
    },
    testDateFmtFullDateComponentsD_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFullDateComponentsDM_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. septembra");
        test.done();
    },
    testDateFmtFullDateComponentsMY_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "september 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. septembra 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "štvrtok 29. septembra");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "štvrtok 29. septembra 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortTimeComponentsM_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortTimeComponentsH_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortTimeComponentsMS_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortTimeComponentsHM_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortTimeComponentsHMS_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortTimeComponentsHMA_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortTimeComponentsHMZ_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sk-SK",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortTimeComponentsHMAZ_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sk-SK",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortTimeComponentsHMSA_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortTimeComponentsHMSZ_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sk-SK",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtShortTimeComponentsHMSAZ_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sk-SK",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFullTimeComponentsS_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFullTimeComponentsM_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFullTimeComponentsH_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFullTimeComponentsMS_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFullTimeComponentsHM_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFullTimeComponentsHMS_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFullTimeComponentsHMA_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFullTimeComponentsHMZ_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sk-SK",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFullTimeComponentsHMAZ_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sk-SK",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFullTimeComponentsHMSA_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFullTimeComponentsHMSZ_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sk-SK",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFullTimeComponentsHMSAZ_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sk-SK",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtWithTimeZoneAndNoDST_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "sk-SK",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "sk-SK",
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
    testDateFmtFormatRelativeWithinMinuteAfter_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "o 30 sekúnd");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinMinuteBefore_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    */
    testDateFmtFormatRelativeWithinHourAfter_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "o 10 minút");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinHourBeforer_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    */
    testDateFmtFormatRelativeWithinDayAfter_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "o 4 hodiny");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinDayAfter_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    */
    testDateFmtFormatRelativeWithinFortnightAfter_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "o 4 dni");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinFortnightBefore_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0

        });
        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    */
    testDateFmtFormatRelativeWithinQuarterAfter_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "o 9 týždňov");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinQuarterBefore_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    */
    testDateFmtFormatRelativeWithinTwoYearsAfter_sk_SK: function(test) {
        test.expect(4);
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "o 16 mesiacov");
        test.done();
    },
    /*   function testDateFmtFormatRelativeWithinTwoYearsBefore_sk_SK() {

        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 mesiacov");
        test.done();
    },
    */
    testDateFmtFormatRelativeYearsAfter_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "o 14 rokov");
        test.done();
    },
    /*
    testDateFmtFormatRelativeYearsBefore_sk_SK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "sk-SK", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "sk-SK",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "sk-SK",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 rokov");
        test.done();
    }
    */
};