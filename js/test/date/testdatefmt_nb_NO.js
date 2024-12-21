/*
 * testdatefmt_nb_NO.js - test the date formatter object in Norwegian Bokmal
 *
 * Copyright © 2012-2015,2017,2021,2023 JEDLSoft
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

module.exports.testdatefmt_nb_NO = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_nb_NO: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "nb-NO"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011");
        test.done();
    },
    testDateFmtSimpleMedium_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. sep. 2011");
        test.done();
    },
    testDateFmtSimpleLong_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september 2011");
        test.done();
    },
    testDateFmtSimpleFull_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtSimpleTimeMedium_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtSimpleTimeLong_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtSimpleTimeFull_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtDateTimeSimpleShort_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. sep. 2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september 2011 kl. 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september 2011 kl. 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "nb-NO",
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
    testDateFmtTemplateClock12SwitchHH_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtTemplateClock12Switchkk_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtTemplateClock24Switchhh_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtTemplateClock24SwitchKK_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtTypeDate_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011");
        test.done();
    },
    testDateFmtTypeTime_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtTypeDateTime_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011, 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortDateComponentsM_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "se");
        test.done();
    },
    testDateFmtShortDateComponentsN_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortDateComponentsD_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortDateComponentsDM_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortDateComponentsMY_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09.2011");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T 29.09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T 29.09.2011");
        test.done();
    },
    testDateFmtFullDateComponentsY_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtFullDateComponentsM_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtFullDateComponentsD_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtFullDateComponentsDM_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september");
        test.done();
    },
    testDateFmtFullDateComponentsMY_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtFullDateComponentsDMY_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. september 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "torsdag 29. september");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "torsdag 29. september 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortTimeComponentsM_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortTimeComponentsH_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortTimeComponentsMS_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortTimeComponentsHM_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortTimeComponentsHMS_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortTimeComponentsHMA_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortTimeComponentsHMZ_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nb-NO",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortTimeComponentsHMAZ_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nb-NO",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortTimeComponentsHMSA_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortTimeComponentsHMSZ_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nb-NO",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtShortTimeComponentsHMSAZ_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nb-NO",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtFullTimeComponentsS_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtFullTimeComponentsM_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtFullTimeComponentsH_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtFullTimeComponentsMS_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtFullTimeComponentsHM_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtFullTimeComponentsHMS_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtFullTimeComponentsHMA_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtFullTimeComponentsHMZ_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nb-NO",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtFullTimeComponentsHMAZ_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "nb-NO",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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
    testDateFmtFullTimeComponentsHMSA_nb_NO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "nb-NO", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "nb-NO",
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