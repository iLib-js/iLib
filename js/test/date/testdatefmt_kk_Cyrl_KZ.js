/*
 * testdatefmt_kk_cyrl_KZ.js - test the date formatter object in Cyrillic Kazakhstan
 *
 * Copyright © 2012-2015,2017,2020,2023-2024 JEDLSoft
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

module.exports.testdatefmt_kk_Cyrl_KZ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_kk_Cyrl_KZ: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11");
        test.done();
    },
    testDateFmtSimpleMedium_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 ж. 29 қыр.");
        test.done();
    },
    testDateFmtSimpleLong_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 ж. 29 қыркүйек");
        test.done();
    },
    testDateFmtSimpleFull_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 ж. 29 қыркүйек");
        test.done();
    },
    testDateFmtSimpleTimeShort_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtSimpleTimeMedium_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtSimpleTimeLong_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtSimpleTimeFull_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtDateTimeSimpleShort_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 ж. 29 қыр., 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 ж. 29 қыркүйек, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 ж. 29 қыркүйек, 13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtTemplateClock12SwitchHH_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtTemplateClock12Switchkk_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtTemplateClock24Switchhh_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtTemplateClock24SwitchKK_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtShortDateComponentsY_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtShortDateComponentsM_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "қы");
        test.done();
    },
    testDateFmtShortDateComponentsN_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "қ");
        test.done();
    },
    testDateFmtShortDateComponentsD_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtShortDateComponentsDM_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtShortDateComponentsMY_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09.11");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09, Б");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11, Б");
        test.done();
    },
    testDateFmtFullDateComponentsY_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFullDateComponentsM_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Қыркүйек");
        test.done();
    },
    testDateFmtFullDateComponentsD_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFullDateComponentsDM_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 қыркүйек");
        test.done();
    },
    testDateFmtFullDateComponentsMY_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 ж. қыркүйек");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 ж. 29 қыркүйек");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 қыркүйек, бейсенбі");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011 ж. 29 қыркүйек, бейсенбі");
        test.done();
    },
    testDateFmtShortTimeComponentsS_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtShortTimeComponentsM_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtShortTimeComponentsH_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtShortTimeComponentsHM_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtShortTimeComponentsHMS_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtShortTimeComponentsHMA_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtShortTimeComponentsHMZ_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kk-Cyrl-KZ",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +05");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kk-Cyrl-KZ",
            type: "time",
            time: "ahmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +05");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtShortTimeComponentsHMSZ_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kk-Cyrl-KZ",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +05");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kk-Cyrl-KZ",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +05");
        test.done();
    },
    testDateFmtFullTimeComponentsS_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFullTimeComponentsM_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFullTimeComponentsH_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFullTimeComponentsHM_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFullTimeComponentsHMS_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFullTimeComponentsHMA_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFullTimeComponentsHMZ_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kk-Cyrl-KZ",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +05");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFullTimeComponentsHMSZ_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kk-Cyrl-KZ",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +05");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kk-Cyrl-KZ",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +05");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_kk_Cyrl_KZ: function(test) {
        test.expect(4);
        test.expect(2);
        var fmt = new DateFmt({
            locale: "kk-Cyrl-KZ",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +05");
        test.done();
    },
    /*function testDateFmtFormatRelativeWithinMinuteAfter_kk_Cyrl_KZ() {
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFormatRelativeWithinMinuteBefore_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFormatRelativeWithinHourAfter_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFormatRelativeWithinHourBefore_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFormatRelativeWithinDayAfter_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFormatRelativeWithinDayBefore_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFormatRelativeWithinFortnightAfter_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFormatRelativeWithinFortnightBefore_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFormatRelativeWithinQuarterAfter_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFormatRelativeWithinQuarterBefore_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFormatRelativeWithinTwoYearsAfter_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFormatRelativeWithinTwoYearsBefore_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFormatRelativeYearsAfter_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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
    testDateFmtFormatRelativeYearsBefore_kk_Cyrl_KZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "kk-Cyrl-KZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "kk-Cyrl-KZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "kk-Cyrl-KZ",
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