/*
 * testdatefmt_it_IT.js - test the date formatter object in Italian
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

module.exports.testdatefmt_it_IT = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_it_IT: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "it-IT"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtSimpleMedium_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 set 2011");
        test.done();
    },
    testDateFmtSimpleLong_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 settembre 2011");
        test.done();
    },
    testDateFmtSimpleFull_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 settembre 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtSimpleTimeMedium_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtSimpleTimeLong_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtSimpleTimeFull_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtDateTimeSimpleShort_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 set 2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 settembre 2011 alle ore 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 settembre 2011 alle ore 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "it-IT",
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
    testDateFmtTemplateCalendarIncompatibleDateType_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtTemplateClock12SwitchHH_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", clock: "12", template: "HH.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01.45");
        test.done();
    },
    testDateFmtTemplateClock12Switchkk_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", clock: "12", template: "kk.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01.45");
        test.done();
    },
    testDateFmtTemplateClock24Switchhh_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", clock: "24", template: "hh.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtTemplateClock24SwitchKK_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", clock: "24", template: "KK.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", template: "hh.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01.45");
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", template: "KK.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01.45");
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", template: "HH.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", template: "kk.mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtTypeDate_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtTypeTime_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtTypeDateTime_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11, 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortDateComponentsM_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortDateComponentsN_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortDateComponentsD_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortDateComponentsDM_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortDateComponentsMY_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortDateComponentsDMY_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortDateComponentsWDM_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "G 29/09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "G 29/09/11");
        test.done();
    },
    testDateFmtFullDateComponentsY_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtFullDateComponentsM_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "settembre");
        test.done();
    },
    testDateFmtFullDateComponentsD_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtFullDateComponentsDM_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 settembre");
        test.done();
    },
    testDateFmtFullDateComponentsMY_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "settembre 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 settembre 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "giovedì 29 settembre");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "giovedì 29 settembre 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortTimeComponentsM_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortTimeComponentsH_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortTimeComponentsMS_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortTimeComponentsHM_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortTimeComponentsHMS_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortTimeComponentsHMA_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortTimeComponentsHMZ_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "it-IT",
            type: "time",
            time: "hmz",
            timezone: "Europe/Rome"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortTimeComponentsHMAZ_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "it-IT",
            type: "time",
            time: "hmaz",
            timezone: "Europe/Rome"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortTimeComponentsHMSA_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortTimeComponentsHMSZ_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "it-IT",
            type: "time",
            time: "hmsz",
            timezone: "Europe/Rome"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtShortTimeComponentsHMSAZ_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "it-IT",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/Rome"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtFullTimeComponentsS_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtFullTimeComponentsM_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtFullTimeComponentsH_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtFullTimeComponentsMS_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtFullTimeComponentsHM_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtFullTimeComponentsHMS_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtFullTimeComponentsHMA_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtFullTimeComponentsHMZ_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "it-IT",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/Rome"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtFullTimeComponentsHMAZ_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "it-IT",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/Rome"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtFullTimeComponentsHMSA_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "it-IT", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtFullTimeComponentsHMSZ_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "it-IT",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Rome"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtFullTimeComponentsHMSAZ_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "it-IT",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/Rome"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    testDateFmtWithTimeZoneAndNoDST_it_IT: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "it-IT",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Rome"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "it-IT",
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
    }
};