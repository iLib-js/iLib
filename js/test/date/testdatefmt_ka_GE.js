/*
 * testdatefmt_ka_GE.js - test the date formatter object in Georgian
 *
 * Copyright © 2020, JEDLSoft
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

module.exports.testdatefmt_ka_GE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_ka_GE: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ka-GE"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtSimpleMedium_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 სექ. 2011");
        test.done();
    },
    testDateFmtSimpleLong_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 სექტემბერი, 2011");
        test.done();
    },
    testDateFmtSimpleFull_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 სექტემბერი, 2011');
        test.done();
    },
    testDateFmtSimpleTimeShort_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtSimpleTimeMedium_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtSimpleTimeLong_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtSimpleTimeFull_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '01:45');
        test.done();
    },
    testDateFmtDateTimeSimpleShort_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.11, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 სექ. 2011, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 სექტემბერი, 2011, 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 სექტემბერი, 2011, 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ka-GE",
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
    testDateFmtTemplateCalendarIncompatibleDateType_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtTemplateClock12SwitchHH_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtTemplateClock12Switchkk_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtTemplateClock24Switchhh_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtTemplateClock24SwitchKK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtTypeDate_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.11');
        test.done();
    },
    testDateFmtTypeTime_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '13:45');
        test.done();
    },
    testDateFmtTypeDateTime_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.11, 13:45');
        test.done();
    },
    testDateFmtShortDateComponentsY_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtShortDateComponentsM_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtShortDateComponentsN_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ს');
        test.done();
    },
    testDateFmtShortDateComponentsD_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtShortDateComponentsDM_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09');
        test.done();
    },
    testDateFmtShortDateComponentsMY_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '09.11');
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.11');
        test.done();
    },
    testDateFmtShortDateComponentsWDM_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ხ, 29.09');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ხ, 29.09.11' );
        test.done();
    },
    testDateFmtLongDateComponentsWDM_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ხუთ, 29 სექტემბერი');
        test.done();
    },
    testDateFmtFullDateComponentsY_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtFullDateComponentsM_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "სექტემბერი");
        test.done();
    },
    testDateFmtFullDateComponentsD_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtFullDateComponentsDM_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 სექტემბერი');
        test.done();
    },
    testDateFmtFullDateComponentsMY_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'სექტემბერი, 2011');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 სექტემბერი, 2011');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ხუთშაბათი, 29 სექტემბერი');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ხუთშაბათი, 29 სექტემბერი, 2011');
        test.done();
    },
    testDateFmtShortTimeComponentsS_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtShortTimeComponentsM_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtShortTimeComponentsH_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtShortTimeComponentsMS_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtShortTimeComponentsHM_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtShortTimeComponentsHMS_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtShortTimeComponentsHMA_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtShortTimeComponentsHMZ_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ka-GE",
            type: "time",
            time: "hmz",
            timezone: "Asia/Tbilisi"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +04");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ka-GE",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Tbilisi"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +04");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtShortTimeComponentsHMSZ_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ka-GE",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Tbilisi"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +04");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ka-GE",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Tbilisi"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +04");
        test.done();
    },
    testDateFmtFullTimeComponentsS_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtFullTimeComponentsM_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtFullTimeComponentsH_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtFullTimeComponentsMS_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtFullTimeComponentsHM_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtFullTimeComponentsHMS_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtFullTimeComponentsHMA_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtFullTimeComponentsHMZ_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ka-GE",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Tbilisi"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +04");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ka-GE",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Tbilisi"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +04");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
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
    testDateFmtFullTimeComponentsHMSZ_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ka-GE",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Tbilisi"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +04");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ka-GE",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Tbilisi"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +04");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ka-GE",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Tbilisi"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +04");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 წამში");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 წამის წინ");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 წუთში");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 წუთის წინ');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 საათში');
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 საათის წინ');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 დღეში');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date),  '4 დღის წინ');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 კვირაში');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 კვირის წინ');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '16 თვეში');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 თვის წინ');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ka-GE",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 წელიწადში');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ka_GE: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ka-GE", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ka-GE",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ka-GE",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '21 წლის წინ');
        test.done();
    }
};