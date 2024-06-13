/*
 * testdatefmt_lt_LT.js - test the date formatter object in Lithuanian
 *
 * Copyright © 2012-2015,2017, JEDLSoft
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

module.exports.testdatefmt_lt_LT = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_lt_LT: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "lt-LT"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtSimpleMedium_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtSimpleLong_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 m. rugsėjo 29 d.");
        test.done();
    },
    testDateFmtSimpleFull_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 m. rugsėjo 29 d.");
        test.done();
    },
    testDateFmtSimpleTimeShort_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtSimpleTimeMedium_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtSimpleTimeLong_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtSimpleTimeFull_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtDateTimeSimpleShort_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtDateTimeSimpleMedium_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtDateTimeSimpleLong_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 m. rugsėjo 29 d. 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 m. rugsėjo 29 d. 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "lt-LT",
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
    testDateFmtTemplateClock12SwitchHH_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtTemplateClock12Switchkk_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtTemplateClock24Switchhh_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtTemplateClock24SwitchKK_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtTypeDate_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtTypeTime_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtTypeDateTime_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortDateComponentsY_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortDateComponentsM_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ru");
        test.done();
    },
    testDateFmtShortDateComponentsN_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "r");
        test.done();
    },
    testDateFmtShortDateComponentsD_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortDateComponentsDM_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortDateComponentsMY_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortDateComponentsDMY_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortDateComponentsWDM_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09-29, K");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29, K");
        test.done();
    },
    testDateFmtFullDateComponentsY_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFullDateComponentsM_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "rugsėjis");
        test.done();
    },
    testDateFmtFullDateComponentsD_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFullDateComponentsDM_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "rugsėjo 29 d.");
        test.done();
    },
    testDateFmtFullDateComponentsMY_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 m. rugsėjis");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 m. rugsėjo 29 d.");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "rugsėjo 29 d., ketvirtadienis");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 m. rugsėjo 29 d., ketvirtadienis");
        test.done();
    },
    testDateFmtShortTimeComponentsS_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortTimeComponentsM_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortTimeComponentsH_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortTimeComponentsMS_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortTimeComponentsHM_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortTimeComponentsHMS_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortTimeComponentsHMA_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortTimeComponentsHMZ_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lt-LT",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortTimeComponentsHMAZ_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lt-LT",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortTimeComponentsHMSA_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortTimeComponentsHMSZ_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lt-LT",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtShortTimeComponentsHMSAZ_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lt-LT",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFullTimeComponentsS_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFullTimeComponentsM_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFullTimeComponentsH_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFullTimeComponentsMS_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFullTimeComponentsHM_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFullTimeComponentsHMS_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFullTimeComponentsHMA_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFullTimeComponentsHMZ_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lt-LT",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFullTimeComponentsHMAZ_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lt-LT",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFullTimeComponentsHMSA_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lt-LT",
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
    /*
    testDateFmtFormatRelativeWithinMinuteAfter_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFormatRelativeWithinMinuteBefore_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFormatRelativeWithinHourBefore_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFormatRelativeWithinDayBefore_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFormatRelativeWithinFortnightBefore_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lt-LT",
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
    testDateFmtFormatRelativeWithinQuarterBefore_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lt-LT",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_lt_LT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lt-LT", calendar: "gregorian", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lt-LT",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lt-LT",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "y");
        test.done();
    }
    */
};
