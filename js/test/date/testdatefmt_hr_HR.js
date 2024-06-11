/*
 * testdatefmt_hr_HR.js - test the date formatter object in Croation
 *
 * Copyright © 2012-2015,2017-2018,2023 JEDLSoft
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

module.exports.testdatefmt_hr_HR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_hr_HR: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "hr-HR"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 09. 2011.");
        test.done();
    },
    testDateFmtSimpleMedium_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. ruj 2011.");
        test.done();
    },
    testDateFmtSimpleLong_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. rujna 2011.");
        test.done();
    },
    testDateFmtSimpleFull_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. rujna 2011.");
        test.done();
    },
    testDateFmtSimpgodinaimeShort_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtSimpgodinaimeMedium_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtSimpgodinaimeLong_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtSimpgodinaimeFull_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtDateTimeSimpleShort_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 09. 2011. 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. ruj 2011. 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. rujna 2011. u 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. rujna 2011. u 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "hr-HR",
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
    testDateFmtTemplateClock12SwitchHH_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtTemplateClock12Switchkk_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtTemplateClock24Switchhh_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtTemplateClock24SwitchKK_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortDateComponentsY_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortDateComponentsM_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortDateComponentsN_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortDateComponentsD_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortDateComponentsDM_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 09");
        test.done();
    },
    testDateFmtShortDateComponentsMY_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09. 2011.");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. 09. 2011.");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Č, 29. 09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Č, 29. 09. 2011.");
        test.done();
    },
    testDateFmtFullDateComponentsY_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtFullDateComponentsM_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "rujan");
        test.done();
    },
    testDateFmtFullDateComponentsD_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtFullDateComponentsDM_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. rujna");
        test.done();
    },
    testDateFmtFullDateComponentsMY_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "rujan 2011.");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29. rujna 2011.");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "četvrtak, 29. rujna");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "četvrtak, 29. rujna 2011.");
        test.done();
    },
    testDateFmtShortTimeComponentsS_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortTimeComponentsM_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortTimeComponentsH_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortTimeComponentsHM_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortTimeComponentsHMS_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortTimeComponentsHMA_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortTimeComponentsHMZ_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hr-HR",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortTimeComponentsHMAZ_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hr-HR",
            type: "time",
            time: "ahmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortTimeComponentsHMSA_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortTimeComponentsHMSZ_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hr-HR",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtShortTimeComponentsHMSAZ_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hr-HR",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtFullTimeComponentsS_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtFullTimeComponentsM_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtFullTimeComponentsH_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtFullTimeComponentsHM_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtFullTimeComponentsHMS_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtFullTimeComponentsHMA_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtFullTimeComponentsHMZ_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hr-HR",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtFullTimeComponentsHMSA_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtFullTimeComponentsHMSZ_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hr-HR",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtFullTimeComponentsHMSAZ_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hr-HR",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtWithTimeZoneAndNoDST_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hr-HR",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hr-HR",
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
    testDateFmtFormatRelativeWithinMinuteAfter_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 30 sekundi");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "prije 30 sekundi");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 10 minuta");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "prije 10 minuta");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 4 sata");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "prije 4 sata");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 4 dana");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "prije 4 dana");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 9 tjedana");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "prije 9 tjedana");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 16 mjeseci");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "prije 14 mjeseci");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hr-HR",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "za 14 godina");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_hr_HR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hr-HR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hr-HR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hr-HR",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "prije 21 godinu");
        test.done();
    }
};