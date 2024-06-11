/*
 * testdatefmt_fr_FR.js - test the date formatter object in standard French
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

module.exports.testdatefmt_fr_FR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_fr_FR: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "fr-FR"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    testDateFmtSimpleMedium_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sept. 2011");
        test.done();
    },
    testDateFmtSimpleLong_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011");
        test.done();
    },
    testDateFmtSimpleFull_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtSimpleTimeMedium_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtSimpleTimeLong_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtSimpleTimeFull_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtDateTimeSimpleShort_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sept. 2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011 à 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011 à 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "fr-FR",
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
    testDateFmtTemplateCalendarIncompatibleDateType_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtTemplateClock12SwitchHH_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtTemplateClock12Switchkk_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtTemplateClock24Switchhh_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtTemplateClock24SwitchKK_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtTypeDate_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    testDateFmtTypeTime_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtTypeDateTime_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011 13:45");
        test.done();
    },
    testDateFmtShortDateComponentsY_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortDateComponentsM_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortDateComponentsN_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortDateComponentsD_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortDateComponentsDM_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortDateComponentsMY_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09/2011");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "J 29/09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "J 29/09/2011");
        test.done();
    },
    testDateFmtFullDateComponentsY_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFullDateComponentsM_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septembre");
        test.done();
    },
    testDateFmtFullDateComponentsD_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFullDateComponentsDM_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre");
        test.done();
    },
    testDateFmtFullDateComponentsMY_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septembre 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 septembre 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "jeudi 29 septembre");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "jeudi 29 septembre 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortTimeComponentsM_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortTimeComponentsH_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortTimeComponentsMS_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortTimeComponentsHM_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortTimeComponentsHMS_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortTimeComponentsHMA_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortTimeComponentsHMZ_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-FR",
            type: "time",
            time: "hmz",
            timezone: "Europe/Paris"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortTimeComponentsHMAZ_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-FR",
            type: "time",
            time: "hmaz",
            timezone: "Europe/Paris"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortTimeComponentsHMSA_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortTimeComponentsHMSZ_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-FR",
            type: "time",
            time: "hmsz",
            timezone: "Europe/Paris"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtShortTimeComponentsHMSAZ_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-FR",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/Paris"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFullTimeComponentsS_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFullTimeComponentsM_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFullTimeComponentsH_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFullTimeComponentsMS_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFullTimeComponentsHM_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFullTimeComponentsHMS_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFullTimeComponentsHMA_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFullTimeComponentsHMZ_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-FR",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/Paris"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFullTimeComponentsHMAZ_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-FR",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/Paris"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFullTimeComponentsHMSA_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFullTimeComponentsHMSZ_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-FR",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Paris"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFullTimeComponentsHMSAZ_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-FR",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/Paris"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtWithTimeZoneAndNoDST_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "fr-FR",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/Paris"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "fr-FR",
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
    testDateFmtFormatRelativeWithinMinuteAfter_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 30 secondes");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 30 secondes");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 10 minutes");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 10 minutes");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 4 heures");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 4 heures");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 4 jours");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 4 jours");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 9 semaines");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 9 semaines");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 16 mois");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 14 mois");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-FR",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dans 14 ans");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_fr_FR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "fr-FR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "fr-FR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "fr-FR",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "il y a 21 ans");
        test.done();
    }
};