/*
 * testdatefmt_id_ID.js - test the date formatter object in Indonesian
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

module.exports.testdatefmt_id_ID = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_id_ID: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "id-ID"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11");
        test.done();
    },
    testDateFmtSimpleMedium_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sep 2011");
        test.done();
    },
    testDateFmtSimpleLong_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtSimpleFull_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtSimpleTimeShort_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtSimpleTimeMedium_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtSimpleTimeLong_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtSimpleTimeFull_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtDateTimeSimpleShort_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11, 13.45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sep 2011, 13.45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011 pukul 13.45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011 pukul 13.45");
        test.done();
    },
    testDateFmtTemplateCalendar_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "id-ID",
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
    testDateFmtTemplateCalendarIncompatibleDateType_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtTemplateClock12SwitchHH_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtTemplateClock12Switchkk_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtTemplateClock24Switchhh_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtTemplateClock24SwitchKK_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtTypeDate_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11");
        test.done();
    },
    testDateFmtTypeTime_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtTypeDateTime_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11, 13.45");
        test.done();
    },
    testDateFmtShortDateComponentsY_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtShortDateComponentsM_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtShortDateComponentsN_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtShortDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtShortDateComponentsDM_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09");
        test.done();
    },
    testDateFmtShortDateComponentsMY_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09/11");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "K, 29/09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "K, 29/09/11");
        test.done();
    },
    testDateFmtFullDateComponentsY_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtFullDateComponentsM_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtFullDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtFullDateComponentsDM_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtFullDateComponentsMY_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtFullDateComponentsDMY_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtFullDateComponentsWDM_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Kamis, 29 September");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Kamis, 29 September 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtShortTimeComponentsM_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtShortTimeComponentsH_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtShortTimeComponentsMS_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45.37");
        test.done();
    },
    testDateFmtShortTimeComponentsHM_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtShortTimeComponentsHMS_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37");
        test.done();
    },
    testDateFmtShortTimeComponentsHMA_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "id-ID",
            type: "time",
            time: "hmz",
            timezone: "Asia/Jakarta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 WIB");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "id-ID",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Jakarta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 WIB");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "id-ID",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Jakarta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 WIB");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "id-ID",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Jakarta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 WIB");
        test.done();
    },
    testDateFmtFullTimeComponentsS_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtFullTimeComponentsM_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtFullTimeComponentsH_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
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
    testDateFmtFullTimeComponentsMS_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45.37");
        test.done();
    },
    testDateFmtFullTimeComponentsHM_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtFullTimeComponentsHMS_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37");
        test.done();
    },
    testDateFmtFullTimeComponentsHMA_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45");
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "id-ID",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Jakarta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 WIB");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "id-ID",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Jakarta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45 WIB");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "id-ID",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Jakarta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 WIB");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "id-ID",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Jakarta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13.45.37 WIB");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "id-ID",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Jakarta"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        // does not observe DST, so no difference in the TZ spec
        test.equal(fmt.format(date), "13.45.37 WIB");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dalam 30 detik");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 detik yang lalu");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dalam 10 menit");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 menit yang lalu");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dalam 4 jam");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 jam yang lalu");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dalam 4 hari");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 hari yang lalu");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dalam 9 minggu");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 minggu yang lalu");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "id-ID",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dalam 16 bulan");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "id-ID",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 bulan yang lalu");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "id-ID",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dalam 14 tahun");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_id_ID: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "id-ID", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "id-ID",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "id-ID",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 tahun yang lalu");
        test.done();
    }
};