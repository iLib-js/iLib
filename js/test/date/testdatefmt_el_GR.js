/*
 * testdatefmt_el_GR.js - test the date formatter object in Greece
 *
 * Copyright © 2012-2015,2017,2020-2021,2023 JEDLSoft
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

module.exports.testdatefmt_el_GR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_el_GR: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "el-GR"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtSimpleMedium_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Σεπ 2011");
        test.done();
    },
    testDateFmtSimpleLong_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Σεπτεμβρίου 2011");
        test.done();
    },
    testDateFmtSimpleFull_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Σεπτεμβρίου 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 μ.μ.");
        test.done();
    },
    testDateFmtSimpleTimeMedium_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 μ.μ.");
        test.done();
    },
    testDateFmtSimpleTimeLong_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 μ.μ.");
        test.done();
    },
    testDateFmtSimpleTimeFull_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 μ.μ.");
        test.done();
    },
    testDateFmtDateTimeSimpleShort_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/9/11, 1:45 μ.μ.");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Σεπ 2011, 1:45 μ.μ.");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Σεπτεμβρίου 2011 στις 1:45 μ.μ.");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Σεπτεμβρίου 2011 στις 1:45 μ.μ.");
        test.done();
    },
    testDateFmtTemplateCalendar_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "el-GR",
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
    testDateFmtTemplateClock12SwitchHH_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtTemplateClock12Switchkk_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtTemplateClock24Switchhh_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtTemplateClock24SwitchKK_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtShortDateComponentsY_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtShortDateComponentsM_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtShortDateComponentsN_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Σ");
        test.done();
    },
    testDateFmtShortDateComponentsD_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtShortDateComponentsDM_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtShortDateComponentsMY_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtShortDateComponentsDMY_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtShortDateComponentsWDM_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Π 29/9");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Π 29/9/11");
        test.done();
    },
    testDateFmtFullDateComponentsY_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtFullDateComponentsM_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Σεπτεμβρίου");
        test.done();
    },
    testDateFmtFullDateComponentsD_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtFullDateComponentsDM_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Σεπτεμβρίου");
        test.done();
    },
    testDateFmtFullDateComponentsMY_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Σεπτέμβριος 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Σεπτεμβρίου 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Πέμπτη 29 Σεπτεμβρίου");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Πέμπτη 29 Σεπτεμβρίου 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtShortTimeComponentsM_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtShortTimeComponentsH_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtShortTimeComponentsHM_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtShortTimeComponentsHMS_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtShortTimeComponentsHMA_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 μ.μ.");
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "el-GR",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 EEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "el-GR",
            type: "time",
            time: "ahmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 μ.μ. EEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 μ.μ.");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "el-GR",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 EEST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "el-GR",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 μ.μ. EEST");
        test.done();
    },
    testDateFmtFullTimeComponentsS_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtFullTimeComponentsM_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtFullTimeComponentsH_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtFullTimeComponentsHM_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtFullTimeComponentsHMS_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
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
    testDateFmtFullTimeComponentsHMA_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 μ.μ.");
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "el-GR",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 EEST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 μ.μ.");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "el-GR",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 EEST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "el-GR",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 μ.μ. EEST");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "el-GR",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 EET");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "σε 30 δευτερόλεπτα");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "πριν από 30 δευτερόλεπτα");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "σε 10 λεπτά");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "πριν από 10 λεπτά");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "σε 4 ώρες");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "πριν από 4 ώρες");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "σε 4 ημέρες");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "πριν από 4 ημέρες");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "σε 9 εβδομάδες");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "πριν από 9 εβδομάδες");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "el-GR",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "σε 16 μήνες");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "el-GR",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "πριν από 14 μήνες");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "el-GR",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "σε 14 έτη");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_el_GR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "el-GR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "el-GR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "el-GR",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "πριν από 21 έτη");
        test.done();
    }
};
