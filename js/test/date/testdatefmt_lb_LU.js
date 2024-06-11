/*
 * testdatefmt_lb_LU.js - test the date formatter object in Luxembourgish-Luxembourg
 *
 * Copyright © 2022, JEDLSoft
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

module.exports.testdatefmt_lb_LU = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_lb_LU: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "lb-LU"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.21");
        test.done();
    },
    testDateFmtSimpleMedium_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. Sep. 2021");
        test.done();
    },
    testDateFmtSimpleLong_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. September 2021");
        test.done();
    },
    testDateFmtSimpleFull_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29. September 2021');
        test.done();
    },
    testDateFmtSimpleTimeShort_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtSimpleTimeMedium_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtSimpleTimeLong_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtSimpleTimeFull_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '01:45');
        test.done();
    },
    testDateFmtDateTimeSimpleShort_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.21 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29. Sep. 2021 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29. September 2021 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29. September 2021 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2021-09-29");
        test.done();
    },
    testDateFmtTemplateCalendarIncompatibleDateType_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        // convert automatically to a Julian calendar date
        test.equal(fmt.format(date), "2021-09-16 13:45");
        test.done();
    },
    testDateFmtTemplateClock12SwitchHH_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtTemplateClock12Switchkk_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtTemplateClock24Switchhh_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
        var fmt = new DateFmt({locale: "lb-LU", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtTypeDate_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.21');
        test.done();
    },
    testDateFmtTypeTime_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtTypeDateTime_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.21 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "21");
        test.done();
    },
    testDateFmtShortDateComponentsM_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Se");
        test.done();
    },
    testDateFmtShortDateComponentsD_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtShortDateComponentsDM_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09');
        test.done();
    },
    testDateFmtShortDateComponentsMY_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '09.21');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.21');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'M, 29.09');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'M, 29.09.21');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Mët., 29. September');
        test.done();
    },
    testDateFmtFullDateComponentsY_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2021");
        test.done();
    },
    testDateFmtFullDateComponentsM_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFullDateComponentsD_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFullDateComponentsDM_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29. September');
        test.done();
    },
    testDateFmtFullDateComponentsMY_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'September 2021');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29. September 2021');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Mëttwoch, 29. September');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'Mëttwoch, 29. September 2021');
        test.done();
    },
    testDateFmtShortTimeComponentsS_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtShortTimeComponentsM_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtShortTimeComponentsH_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtShortTimeComponentsMS_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtShortTimeComponentsHM_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMS_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMA_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMZ_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lb-LU",
            type: "time",
            time: "hmz",
            timezone: "Europe/Luxembourg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMAZ_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lb-LU",
            type: "time",
            time: "hmaz",
            timezone: "Europe/Luxembourg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMSA_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMSZ_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lb-LU",
            type: "time",
            time: "hmsz",
            timezone: "Europe/Luxembourg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtShortTimeComponentsHMSAZ_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lb-LU",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/Luxembourg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFullTimeComponentsS_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFullTimeComponentsM_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFullTimeComponentsH_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFullTimeComponentsMS_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFullTimeComponentsHM_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMS_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMA_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMZ_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lb-LU",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/Luxembourg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMAZ_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lb-LU",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/Luxembourg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMSA_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMSZ_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lb-LU",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Luxembourg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFullTimeComponentsHMSAZ_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lb-LU",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/Luxembourg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtWithTimeZoneAndNoDST_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lb-LU",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Luxembourg"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2021,
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
    testDateFmtFormatRelativeWithinMinuteAfter_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "a(n) 30 Sekonnen");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "viru(n) 30 Sekonnen");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "a(n) 10 Minutten");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'viru(n) 10 Minutten');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'a(n) 4 Stonnen');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'viru(n) 4 Stonnen');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'a(n) 4 Deeg');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'viru(n) 4 Deeg');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'a(n) 9 Wochen');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'viru(n) 9 Wochen');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'a(n) 16 Méint');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'viru(n) 14 Méint');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lb-LU",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'a(n) 14 Joer');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_lb_LU: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lb-LU", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lb-LU",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lb-LU",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'viru(n) 21 Joer');
        test.done();
    }
};