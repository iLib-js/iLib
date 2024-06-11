/*
 * testdatefmt_ar_SA.js - test the date formatter in saudi Arabia
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

module.exports.testdatefmt_ar_SA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtSimpleShort_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٩/٩/٢٠١١');
        test.done();
    },
    testDateFmtSimpleMedium_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٩/٠٩/٢٠١١');
        test.done();

    },
    testDateFmtSimpleLong_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date),'‏٢٩ سبتمبر ٢٠١١');
        test.done();
    },
    testDateFmtSimpleFull_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٩ سبتمبر ٢٠١١');
        test.done();
    },
    testDateFmtSimpleTimeShort_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥ م");
        test.done();
    },
    testDateFmtSimpleTimeMedium_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥ م");
        test.done();
    },
    testDateFmtSimpleTimeLong_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥ م");
        test.done();
    },
    testDateFmtSimpleTimeFull_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥ م");
        test.done();
    },
    testDateFmtDateTimeSimpleShort_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٩/٩/٢٠١١، ‏١:٤٥ م');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٩/٠٩/٢٠١١، ‏١:٤٥ م');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٩ سبتمبر ٢٠١١ في ‏١:٤٥ م');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٩ سبتمبر ٢٠١١ في ‏١:٤٥ م');
        test.done();
    },
    testDateFmtTemplateCalendar_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٢٠١١-٠٩-٢٩");
        test.done();
    },
    testDateFmtTemplateClock12SwitchHH_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٠١:٤٥");
        test.done();
    },
    testDateFmtTemplateClock12Switchkk_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٠١:٤٥");
        test.done();
    },
    testDateFmtTemplateClock24Switchhh_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "١٣:٤٥");
        test.done();
    },
    testDateFmtTemplateClock24SwitchKK_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "١٣:٤٥");
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", locale: "ar-SA", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٠١:٤٥");
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", locale: "ar-SA", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٠١:٤٥");
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", locale: "ar-SA", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "١٣:٤٥");
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", locale: "ar-SA", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "١٣:٤٥");
        test.done();
    },
    testDateFmtTypeDate_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٩/٩/٢٠١١');
        test.done();
    },
    testDateFmtTypeTime_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥ م");
        test.done();
    },
    testDateFmtTypeDateTime_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٩/٩/٢٠١١، ‏١:٤٥ م');
        test.done();
    },
    testDateFmtShortDateComponentsY_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٢٠١١");
        test.done();
    },
    testDateFmtShortDateComponentsM_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٩");
        test.done();
    },
    testDateFmtShortDateComponentsN_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "س");
        test.done();
    },
    testDateFmtShortDateComponentsD_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٢٩");
        test.done();
    },
    testDateFmtShortDateComponentsDM_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏٢٩/٩");
        test.done();
    },
    testDateFmtShortDateComponentsMY_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date),'‏٩/٢٠١١');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٩/٩/٢٠١١');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'خ، ‏٢٩/٩');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'خ، ٢٩/٩/٢٠١١');
        test.done();
    },
    testDateFmtFullDateComponentsY_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٢٠١١");
        test.done();
    },
    testDateFmtFullDateComponentsM_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "سبتمبر");
        test.done();
    },
    testDateFmtFullDateComponentsD_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٢٩");
        test.done();
    },
    testDateFmtFullDateComponentsDM_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏٢٩ سبتمبر");
        test.done();
    },
    testDateFmtFullDateComponentsMY_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'سبتمبر ٢٠١١');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٩ سبتمبر ٢٠١١');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "الخميس، ‏٢٩ سبتمبر");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'الخميس، ٢٩ سبتمبر ٢٠١١');
        test.done();
    },
    testDateFmtShortTimeComponentsS_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٣٧");
        test.done();
    },
    testDateFmtShortTimeComponentsM_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٤٥");
        test.done();
    },
    testDateFmtShortTimeComponentsH_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "١");
        test.done();
    },
    testDateFmtShortTimeComponentsMS_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٤٥:٣٧");
        test.done();
    },
    testDateFmtShortTimeComponentsHM_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥");
        test.done();
    },
    testDateFmtShortTimeComponentsHMS_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥:٣٧");
        test.done();
    },
    testDateFmtShortTimeComponentsHMA_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥ م");
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥ +٠٣");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥ م +٠٣");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥:٣٧ م");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥:٣٧ +٠٣");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥:٣٧ م +٠٣");
        test.done();
    },
    testDateFmtFullTimeComponentsS_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٣٧");
        test.done();
    },
    testDateFmtFullTimeComponentsM_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٤٥");
        test.done();
    },
    testDateFmtFullTimeComponentsH_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "١");
        test.done();
    },
    testDateFmtFullTimeComponentsMS_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "٤٥:٣٧");
        test.done();
    },
    testDateFmtFullTimeComponentsHM_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥");
        test.done();
    },
    testDateFmtFullTimeComponentsHMS_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥:٣٧");
        test.done();
    },
    testDateFmtFullTimeComponentsHMA_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥ م");
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥ +٠٣");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥ م +٠٣");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥:٣٧ م");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥:٣٧ +٠٣");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥:٣٧ م +٠٣");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute:45,
            second:37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏١:٤٥:٣٧ +٠٣");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏خلال 30 ثانية");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏قبل 30 ثانية");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏خلال 10 دقائق");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏قبل 10 دقائق");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏خلال 4 ساعات");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏قبل 4 ساعات");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏خلال 4 أيام");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏قبل 4 أيام");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏خلال 9 أسابيع");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏قبل 9 أسابيع");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏خلال 16 شهرًا");
        test.done();

    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏قبل 14 شهرًا");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏خلال 14 سنة");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ar-SA",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏قبل 21 سنة");
        test.done();
    },
    testDateFmtNativeSimpleShort_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29/9/2011');
        test.done();
    },
    testDateFmtNativeSimpleMedium_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29/09/2011');
        test.done();

    },
    testDateFmtNativeSimpleLong_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29 سبتمبر 2011');
        test.done();
    },
    testDateFmtNativeSimpleFull_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29 سبتمبر 2011');
        test.done();
    },
    testDateFmtNativeSimpleTimeShort_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏1:45 م");
        test.done();
    },
    testDateFmtNativeSimpleTimeMedium_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏1:45 م");
        test.done();
    },
    testDateFmtNativeSimpleTimeLong_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏1:45 م");
        test.done();
    },
    testDateFmtNativeSimpleTimeFull_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "‏1:45 م");
        test.done();
    },
    testDateFmtNativeDateTimeSimpleShort_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29/9/2011، ‏1:45 م');
        test.done();
    },
    testDateFmtNativeDateTimeSimpleMedium_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29/09/2011، ‏1:45 م');
        test.done();
    },
    testDateFmtNativeDateTimeSimpleLong_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29 سبتمبر 2011 في ‏1:45 م');
        test.done();
    },
    testDateFmtNativeDateTimeSimpleFull_ar_SA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ar-SA",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute:45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏29 سبتمبر 2011 في ‏1:45 م');
        test.done();
    }
};