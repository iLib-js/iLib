/*
 * testdatefmt_bg_BG.js - test the date formatter object in bulgarian
 *
 * Copyright © 2012-2015, 2017, 2021, 2023-2024 JEDLSoft
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

module.exports.testdatefmt_bg = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_bg_BG: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "bg-BG"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11 г.");
        test.done();
    },
    testDateFmtSimpleMedium_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011 г.");
        test.done();
    },
    testDateFmtSimpleLong_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 септември 2011 г.");
        test.done();
    },
    testDateFmtSimpleFull_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 септември 2011 г.");
        test.done();
    },
    testDateFmtSimpleTimeShort_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtSimpleTimeMedium_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtSimpleTimeLong_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtSimpleTimeFull_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtDateTimeSimpleShort_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.11 г., 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.2011 г., 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 септември 2011 г. в 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 септември 2011 г. в 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "bg-BG",
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
    testDateFmtTemplateClock12SwitchHH_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtTemplateClock12Switchkk_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtTemplateClock24Switchhh_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtTemplateClock24SwitchKK_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtTypeDate_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11 г.");
        test.done();
    },
    testDateFmtTypeTime_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtTypeDateTime_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.11 г., 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtShortDateComponentsM_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtShortDateComponentsN_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "с");
        test.done();
    },
    testDateFmtShortDateComponentsD_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtShortDateComponentsDM_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    /*
    testDateFmtShortDateComponentsMY_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9.11 г.");
        test.done();
    },
    */
    testDateFmtShortDateComponentsDMY_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11 г.");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ч, 29.09");
        test.done();
    },
    /*
    testDateFmtShortDateComponentsWDMY_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ч, 29.09.11 г.");
        test.done();
    },
    */
    testDateFmtFullDateComponentsY_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtFullDateComponentsM_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "септември");
        test.done();
    },
    testDateFmtFullDateComponentsD_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtFullDateComponentsDM_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 септември");
        test.done();
    },
    testDateFmtFullDateComponentsMY_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "септември 2011 г.");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 септември 2011 г.");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "четвъртък, 29 септември");
        test.done();
    },
    /*
    testDateFmtFullDateComponentsWDMY_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "четвъртък, 29 септ. 2011 г.");
        test.done();
    },
    */

    testDateFmtShortTimeComponentsS_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtShortTimeComponentsM_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtShortTimeComponentsH_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtShortTimeComponentsMS_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtShortTimeComponentsHM_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtShortTimeComponentsHMS_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45:37');
        test.done();
    },
    testDateFmtShortTimeComponentsHMA_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bg-BG",
            type: "time",
            time: "hmz",
            timezone: "Europe/Sofia"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45 EEST');
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bg-BG",
            type: "time",
            time: "hmaz",
            timezone: "Europe/Sofia"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45 EEST');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45:37');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bg-BG",
            type: "time",
            time: "hmsz",
            timezone: "Europe/Sofia"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45:37 EEST');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bg-BG",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/Sofia"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45:37 EEST');
        test.done();
    },
    testDateFmtFullTimeComponentsS_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtFullTimeComponentsM_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtFullTimeComponentsH_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtFullTimeComponentsMS_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtFullTimeComponentsHM_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtFullTimeComponentsHMS_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45:37');
        test.done();
    },
    testDateFmtFullTimeComponentsHMA_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bg-BG",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/Sofia"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45 EEST');
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bg-BG",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/Sofia"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45 EEST');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45:37');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bg-BG",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Sofia"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45:37 EEST');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bg-BG",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/Sofia"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45:37 EEST');
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "bg-BG",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Sofia"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45:37 EET');
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinMinuteAfter_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bg-BG",
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

    testDateFmtFormatRelativeWithinMinuteBefore_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "преди 30 секунди");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinHourAfter_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bg-BG",
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

    testDateFmtFormatRelativeWithinHourBefore_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "преди 10 минути");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinDayAfter_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtFormatRelativeWithinDayBefore_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "преди 4 часа");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinFortnightAfter_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtFormatRelativeWithinFortnightBefore_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "преди 4 дни");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinQuarterAfter_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bg-BG",
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
    testDateFmtFormatRelativeWithinQuarterBefore_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "преди 9 седмици");
        test.done();
    },
    /*
    testDateFmtFormatRelativeWithinTwoYearsAfter_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bg-BG",
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
    */
    testDateFmtFormatRelativeWithinTwoYearsBefore_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "преди 14 месеца");
        test.done();
    },
    /*
    testDateFmtFormatRelativeYearsAfter_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bg-BG",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "След 14 година");
        test.done();
    },
    */
    testDateFmtFormatRelativeYearsBefore_bg_BG: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "bg-BG", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "bg-BG",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "bg-BG",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "преди 21 години");
        test.done();
    }
};