/*
 * testdatefmt_km_KH.js - test the date formatter object in Cambodian
 *
 * Copyright © 2016-2017,2023 JEDLSoft
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

module.exports.testdatefmt_km_KH = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_km_KH: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "km-KH"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtSimpleMedium_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 កញ្ញា 2011");
        test.done();
    },
    testDateFmtSimpleLong_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 កញ្ញា 2011");
        test.done();
    },
    testDateFmtSimpleFull_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 កញ្ញា 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    testDateFmtSimpleTimeMedium_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    testDateFmtSimpleTimeLong_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    testDateFmtSimpleTimeFull_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    testDateFmtDateTimeSimpleShort_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11, 1:45 PM");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 កញ្ញា 2011, 1:45 PM");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });

        test.equal(fmt.format(date), "29 កញ្ញា 2011 នៅ​ម៉ោង 1:45 PM");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 កញ្ញា 2011 នៅ​ម៉ោង 1:45 PM");
        test.done();
    },
    testDateFmtTemplateCalendar_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "km-KH",
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
    testDateFmtTemplateClock12SwitchHH_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtTemplateClock12Switchkk_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtTemplateClock24Switchhh_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtTemplateClock24SwitchKK_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtTypeDate_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtTypeTime_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    testDateFmtTypeDateTime_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11, 1:45 PM");
        test.done();
    },
    testDateFmtShortDateComponentsY_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtShortDateComponentsM_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtShortDateComponentsN_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ក");
        test.done();
    },
    testDateFmtShortDateComponentsD_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtShortDateComponentsDM_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtShortDateComponentsMY_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtShortDateComponentsDMY_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtShortDateComponentsDMW_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", date: "dmw"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ព 29/9");
        test.done();
    },
    testDateFmtShortDateComponentsDMWY_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", date: "dmwy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ព 29/9/11");
        test.done();
    },
    testDateFmtFullDateComponentsY_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtFullDateComponentsM_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "កញ្ញា");
        test.done();
    },
    testDateFmtFullDateComponentsD_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtFullDateComponentsDM_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 កញ្ញា");
        test.done();
    },
    testDateFmtFullDateComponentsMY_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "កញ្ញា 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 កញ្ញា 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMW_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full", date: "dmw"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ព្រហស្បតិ៍ 29 កញ្ញា");
        test.done();
    },
    testDateFmtFullDateComponentsDMWY_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full", date: "dmwy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ព្រហស្បតិ៍ 29 កញ្ញា 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtShortTimeComponentsM_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtShortTimeComponentsH_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtShortTimeComponentsMS_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtShortTimeComponentsHM_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtShortTimeComponentsHMS_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtShortTimeComponentsHMA_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "km-KH",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 +07");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "km-KH",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM +07");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "km-KH",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 +07");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "km-KH",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM +07");
        test.done();
    },
    testDateFmtFullTimeComponentsS_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtFullTimeComponentsM_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtFullTimeComponentsH_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtFullTimeComponentsMS_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtFullTimeComponentsHM_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtFullTimeComponentsHMS_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
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
    testDateFmtFullTimeComponentsHMA_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM");
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "km-KH",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 +07");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "km-KH",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 PM +07");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "km-KH",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 +07");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "km-KH",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 PM +07");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "km-KH",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 +07");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 វិនាទីទៀត");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 វិនាទី​មុន");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 នាទីទៀត");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 នាទី​មុន");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ក្នុង​រយៈ​ពេល 4 ម៉ោង");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 ម៉ោង​មុន");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 ថ្ងៃទៀត");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 ថ្ងៃ​មុន");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 សប្ដាហ៍ទៀត");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 សប្ដាហ៍​មុន");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "km-KH",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 ខែទៀត");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "km-KH",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 ខែមុន");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "km-KH",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 ឆ្នាំទៀត");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_km_KH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "km-KH", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "km-KH",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "km-KH",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 ឆ្នាំ​មុន");
        test.done();
    }
};