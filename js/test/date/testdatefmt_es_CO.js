/*
 * testdatefmt_es_CO.js - test the date formatter object in spainish Columbia
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

module.exports.testdatefmt_es_CO = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_es_CO: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "es-CO"});
    
        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "short"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtSimpleMedium_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "medium"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtSimpleLong_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "long"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de septiembre de 2011");
        test.done();
    },
    testDateFmtSimpleFull_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de septiembre de 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "short", type: "time"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p. m.");
        test.done();
    },
    testDateFmtSimpleTimeMedium_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "medium", type: "time"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p. m.");
        test.done();
    },
    testDateFmtSimpleTimeLong_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "long", type: "time"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p. m.");
        test.done();
    },
    testDateFmtSimpleTimeFull_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full", type: "time"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p. m.");
        test.done();
    },
    testDateFmtDateTimeSimpleShort_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "short", type: "datetime"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11, 1:45 p. m.");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "medium", type: "datetime"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 9,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9/09/2011, 1:45 p. m.");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "long", type: "datetime"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de septiembre de 2011, 1:45 p. m.");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full", type: "datetime"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de septiembre de 2011, 1:45 p. m.");
        test.done();
    },
    testDateFmtTemplatelendar_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", calendar: "julian", template: "yyyy-MM-dd", timezone: "local"});
        test.ok(fmt !== null);
    
        var date = new JulianDate({
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
    testDateFmtTemplateClock12SwitchHH_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtTemplateClock12Switchkk_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtTemplateClock24Switchhh_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtTemplateClock24SwitchKK_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtTemplateNoClockDoNotFollowLoleDefault12hh_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", template: "hh:mm"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtTemplateNoClockDoNotFollowLoleDefault12KK_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", template: "KK:mm"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtTemplateNoClockDoNotFollowLoleDefault24HH_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", template: "HH:mm"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtTemplateNoClockDoNotFollowLoleDefault24kk_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", template: "kk:mm"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtTypeDate_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "date"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtTypeTime_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p. m.");
        test.done();
    },
    testDateFmtTypeDateTime_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "datetime"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/11, 1:45 p. m.");
        test.done();
    },
    testDateFmtShortDateComponentsY_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", date: "y"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtShortDateComponentsM_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", date: "m"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtShortDateComponentsN_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", date: "n"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtShortDateComponentsD_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", date: "d"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtShortDateComponentsDM_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", date: "dm"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtShortDateComponentsMY_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", date: "my"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtShortDateComponentsDMY_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", date: "dmy"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtShortDateComponentsWDM_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", date: "wdm"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "J, 29/09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", date: "wdmy"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "J, 29/09/11");
        test.done();
    },
    testDateFmtFullDateComponentsY_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full", date: "y"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtFullDateComponentsM_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full", date: "m"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septiembre");
        test.done();
    },
    testDateFmtFullDateComponentsD_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full", date: "d"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtFullDateComponentsDM_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full", date: "dm"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de septiembre");
        test.done();
    },
    testDateFmtFullDateComponentsMY_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full", date: "my"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "septiembre de 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full", date: "dmy"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 de septiembre de 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full", date: "wdm"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "jueves, 29 de septiembre");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full", date: "wdmy"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "jueves, 29 de septiembre de 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", time: "s"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtShortTimeComponentsM_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", time: "m"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtShortTimeComponentsH_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", time: "h"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtShortTimeComponentsMS_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", time: "ms"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtShortTimeComponentsHM_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", time: "hm"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtShortTimeComponentsHMS_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", time: "hms"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtShortTimeComponentsHMA_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", time: "hma"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p. m.");
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-CO",
            type: "time",
            time: "hmz",
    
        });
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 -05/-04");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-CO",
            type: "time",
            time: "hmaz"
    
        });
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p. m. -05/-04");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", time: "hmsa"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 p. m.");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-CO",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 -05/-04");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-CO",
            type: "time",
            time: "hmsaz"
    
        });
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 p. m. -05/-04");
        test.done();
    },
    testDateFmtFullTimeComponentsS_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtFullTimeComponentsM_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtFullTimeComponentsH_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtFullTimeComponentsMS_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtFullTimeComponentsHM_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtFullTimeComponentsHMS_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
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
    testDateFmtFullTimeComponentsHMA_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p. m.");
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-CO",
            type: "time",
            length: "full",
            time: "hmz",
    
        });
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 -05/-04");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-CO",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 p. m. -05/-04");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 p. m.");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-CO",
            type: "time",
            length: "full",
            time: "hmsz",
    
        });
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 -05/-04");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-CO",
            type: "time",
            length: "full",
            time: "hmsaz",
    
        });
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 p. m. -05/-04");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "es-CO",
            type: "time",
            length: "full",
            time: "hmsz",
    
        });
        test.ok(fmt !== null);
    
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 -05/-04");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dentro de 30 segundos");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hace 30 segundos");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dentro de 10 minutos");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hace 10 minutos");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dentro de 4 horas");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hace 4 horas");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dentro de 4 días");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hace 4 días");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dentro de 9 semanas");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hace 9 semanas");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dentro de 16 meses");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hace 14 meses");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "dentro de 14 años");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_es_CO: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "es-CO", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "es-CO",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "es-CO",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "hace 21 años");
        test.done();
    }
};