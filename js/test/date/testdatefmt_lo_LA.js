/*
 * testdatefmt_lo_LA.js - test the date formatter object in Lao
 *
 * Copyright © 2020, JEDLSoft
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

module.exports.testdatefmt_lo_LA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_lo_LA: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "lo-LA"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/2011");
        test.done();
    },
    testDateFmtSimpleMedium_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ກ.ຍ. 2011");
        test.done();
    },
    testDateFmtSimpleLong_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ກັນຍາ 2011");
        test.done();
    },
    testDateFmtSimpleFull_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 ກັນຍາ 2011');
        test.done();
    },
    testDateFmtSimpleTimeShort_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtSimpleTimeMedium_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtSimpleTimeLong_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtSimpleTimeFull_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtDateTimeSimpleShort_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/2011, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 ກ.ຍ. 2011, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 ກັນຍາ 2011, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 ກັນຍາ 2011, 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "lo-LA",
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
    testDateFmtTemplateCalendarIncompatibleDateType_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtTemplateClock12SwitchHH_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtTemplateClock12Switchkk_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtTemplateClock24Switchhh_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
        var fmt = new DateFmt({locale: "lo-LA", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
        var fmt = new DateFmt({locale: "lo-LA", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtTypeDate_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/2011');
        test.done();
    },
    testDateFmtTypeTime_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtTypeDateTime_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/2011, 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtShortDateComponentsM_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtShortDateComponentsN_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ກ');
        test.done();
    },
    testDateFmtShortDateComponentsD_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtShortDateComponentsDM_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtShortDateComponentsMY_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '9/2011');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29/9/2011');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ພຫ ທີ 29/9');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ພຫ ທີ 29/9/2011');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ພະຫັດ ທີ 29 ກັນຍາ');
        test.done();
    },
    testDateFmtFullDateComponentsY_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtFullDateComponentsM_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ກັນຍາ");
        test.done();
    },
    testDateFmtFullDateComponentsD_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtFullDateComponentsDM_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 ກັນຍາ');
        test.done();
    },
    testDateFmtFullDateComponentsMY_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ກັນຍາ 2011');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 ກັນຍາ 2011');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ວັນພະຫັດ ທີ 29 ກັນຍາ');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ວັນພະຫັດ ທີ 29 ກັນຍາ 2011');
        test.done();
    },
    testDateFmtShortTimeComponentsS_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtShortTimeComponentsM_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtShortTimeComponentsH_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtShortTimeComponentsMS_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtShortTimeComponentsHM_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtShortTimeComponentsHMS_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtShortTimeComponentsHMA_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtShortTimeComponentsHMZ_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lo-LA",
            type: "time",
            time: "hmz",
            timezone: "Asia/Vientiane"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +07");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lo-LA",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Vientiane"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +07");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtShortTimeComponentsHMSZ_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lo-LA",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Vientiane"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +07");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lo-LA",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Vientiane"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +07");
        test.done();
    },
    testDateFmtFullTimeComponentsS_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtFullTimeComponentsM_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtFullTimeComponentsH_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtFullTimeComponentsMS_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtFullTimeComponentsHM_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtFullTimeComponentsHMS_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtFullTimeComponentsHMA_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtFullTimeComponentsHMZ_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lo-LA",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Vientiane"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +07");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lo-LA",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Vientiane"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +07");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
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
    testDateFmtFullTimeComponentsHMSZ_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lo-LA",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Vientiane"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +07");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lo-LA",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Vientiane"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +07");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "lo-LA",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Vientiane"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +07");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ໃນອີກ 30 ວິນາທີ");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 ວິນາທີກ່ອນ");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ໃນອີກ 10 ນາທີ");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 ນາທີກ່ອນ');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'ໃນອີກ 4 ຊົ່ວໂມງ');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 ຊົ່ວໂມງກ່ອນ');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'ໃນອີກ 4 ມື້');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 ມື້ກ່ອນ');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'ໃນອີກ 9 ອາທິດ');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 ອາທິດກ່ອນ');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'ໃນອີກ 16 ເດືອນ');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 ເດືອນກ່ອນ');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lo-LA",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), 'ໃນອີກ 14 ປີ');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_lo_LA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "lo-LA", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "lo-LA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "lo-LA",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '21 ປີກ່ອນ');
        test.done();
    }
};