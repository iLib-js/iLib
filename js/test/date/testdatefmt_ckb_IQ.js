/*
 * testdatefmt_ckb_IQ.js - test the date formatter object in Kurdish Arabic
 *
 * Copyright © 2026 JEDLSoft
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

module.exports.testdatefmt_ckb_IQ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtSimpleShort_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٠١١-٠٩-٢٩');
        test.done();
    },
    testDateFmtSimpleMedium_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٠١١ ئەیلوول ٢٩');
        test.done();
    },
    testDateFmtSimpleLong_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٩ی ئەیلوولی ٢٠١١');
        test.done();
    },
    testDateFmtSimpleFull_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٠١١ ئەیلوول ٢٩');
        test.done();
    },
    testDateFmtSimpleTimeShort_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥ د.ن');
        test.done();
    },
    testDateFmtSimpleTimeMedium_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥ د.ن');
        test.done();
    },
    testDateFmtSimpleTimeLong_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥ د.ن');
        test.done();
    },
    testDateFmtSimpleTimeFull_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥ د.ن');
        test.done();
    },
    testDateFmtDateTimeSimpleShort_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٠١١-٠٩-٢٩ ‏١:٤٥ د.ن');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٠١١ ئەیلوول ٢٩ ‏١:٤٥ د.ن');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٩ی ئەیلوولی ٢٠١١ ‏١:٤٥ د.ن');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٠١١ ئەیلوول ٢٩ ‏١:٤٥ د.ن');
        test.done();
    },
    testDateFmtTemplateCalendar_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٢٠١١-٠٩-٢٩');
        test.done();
    },



    testDateFmtTemplateClock12SwitchHH_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٠١:٤٥');
        test.done();
    },
    testDateFmtTemplateClock12Switchkk_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٠١:٤٥');
        test.done();
    },
    testDateFmtTemplateClock24Switchhh_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '١٣:٤٥');
        test.done();
    },
    testDateFmtTemplateClock24SwitchKK_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '١٣:٤٥');
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", locale: "ckb-IQ", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٠١:٤٥');
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", locale: "ckb-IQ", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٠١:٤٥');
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", locale: "ckb-IQ", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '١٣:٤٥');
        test.done();
    },
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", locale: "ckb-IQ", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date),  '١٣:٤٥');
        test.done();
    },
    testDateFmtTypeDate_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٠١١-٠٩-٢٩');
        test.done();
    },
    testDateFmtTypeTime_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥ د.ن');
        test.done();
    },
    testDateFmtTypeDateTime_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٠١١-٠٩-٢٩ ‏١:٤٥ د.ن');
        test.done();
    },
    testDateFmtShortDateComponentsY_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٢٠١١');
        test.done();
    },
    testDateFmtShortDateComponentsM_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٠٩');
        test.done();
    },
    testDateFmtShortDateComponentsD_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٢٩');
        test.done();
    },
    testDateFmtShortDateComponentsDM_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٠٩-٢٩');
        test.done();
    },
    testDateFmtShortDateComponentsMY_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٠١١-٠٩');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });

        test.equal(fmt.format(date), '‏٢٠١١-٠٩-٢٩');
        test.done();

    },
    testDateFmtShortDateComponentsWDM_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٠٩-٢٩, پ');
        test.done();

    },
    testDateFmtShortDateComponentsWDMY_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٠١١-٠٩-٢٩, پ');
        test.done();

    },
    testDateFmtFullDateComponentsY_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٢٠١١');
        test.done();
    },
    testDateFmtFullDateComponentsM_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ئەیلوول');
        test.done();
    },
    testDateFmtFullDateComponentsD_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٢٩');
        test.done();
    },
    testDateFmtFullDateComponentsDM_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ئەیلوول ٢٩');
        test.done();
    },
    testDateFmtFullDateComponentsMY_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٠١١ ئەیلوول');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏٢٠١١ ئەیلوول ٢٩');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ئەیلوول ٢٩, پێنجشەممە');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date),  '‏٢٠١١ ئەیلوول ٢٩, پێنجشەممە');
        test.done();
    },
    testDateFmtShortTimeComponentsS_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٣٧');
        test.done();
    },
    testDateFmtShortTimeComponentsM_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٤٥');
        test.done();
    },
    testDateFmtShortTimeComponentsH_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '١');
        test.done();
    },
    testDateFmtShortTimeComponentsMS_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٤٥:٣٧');
        test.done();
    },
    testDateFmtShortTimeComponentsHM_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥');
        test.done();
    },
    testDateFmtShortTimeComponentsHMS_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥:٣٧');
        test.done();
    },
    testDateFmtShortTimeComponentsHMA_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥ د.ن');
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ckb-IQ",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥ +٠٣/+٠٤');
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ckb-IQ",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥ د.ن +٠٣/+٠٤');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥:٣٧ د.ن');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ckb-IQ",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥:٣٧ +٠٣/+٠٤');
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ckb-IQ",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥:٣٧ د.ن +٠٣/+٠٤');
        test.done();
    },
    testDateFmtFullTimeComponentsS_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٣٧');
        test.done();
    },
    testDateFmtFullTimeComponentsM_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٤٥');
        test.done();
    },
    testDateFmtFullTimeComponentsH_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '١');
        test.done();
    },
    testDateFmtFullTimeComponentsMS_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '٤٥:٣٧');
        test.done();
    },
    testDateFmtFullTimeComponentsHM_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥');
        test.done();
    },
    testDateFmtFullTimeComponentsHMS_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥:٣٧');
        test.done();
    },
    testDateFmtFullTimeComponentsHMA_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥ د.ن');
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ckb-IQ",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥ +٠٣/+٠٤');
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ckb-IQ",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥ د.ن +٠٣/+٠٤');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥:٣٧ د.ن');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ckb-IQ",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥:٣٧ +٠٣/+٠٤');
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ckb-IQ",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥:٣٧ د.ن +٠٣/+٠٤');
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ckb-IQ",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), '‏١:٤٥:٣٧ +٠٣/+٠٤');
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏+30 s");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏-30 s");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏+10 min");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏-10 min");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏+4 h");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏-4 h");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏+4 d");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏-4 d");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏+9 w");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏-9 w");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏+16 m");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏-14 m");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏+14 y");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ckb_IQ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ckb-IQ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ckb-IQ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ckb-IQ",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "‏-21 y");
        test.done();
    }
};