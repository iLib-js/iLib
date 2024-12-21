/*
 * testdatefmt_hy_AM.js - test the date formatter object in Armenian/Armenia
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

module.exports.testdatefmt_hy_AM = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_hy_AM: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "hy-AM"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtSimpleMedium_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 սեպ, 2011 թ.");
        test.done();
    },
    testDateFmtSimpleLong_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 սեպտեմբերի, 2011 թ.");
        test.done();
    },
    testDateFmtSimpleFull_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 թ. սեպտեմբերի 29');
        test.done();
    },
    testDateFmtSimpleTimeShort_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtSimpleTimeMedium_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtSimpleTimeLong_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtSimpleTimeFull_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtDateTimeSimpleShort_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtDateTimeSimpleMedium_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 սեպ, 2011 թ., 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleLong_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 սեպտեմբերի, 2011 թ., 13:45');
        test.done();
    },
    testDateFmtDateTimeSimpleFull_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 թ. սեպտեմբերի 29, 13:45');
        test.done();
    },
    testDateFmtTemplateCalendar_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "hy-AM",
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
    testDateFmtTemplateCalendarIncompatibleDateType_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtTemplateClock12SwitchHH_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtTemplateClock12Switchkk_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtTemplateClock24Switchhh_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
        var fmt = new DateFmt({locale: "hy-AM", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
        var fmt = new DateFmt({locale: "hy-AM", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtTypeDate_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtTypeTime_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtTypeDateTime_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtShortDateComponentsY_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtShortDateComponentsM_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "սե");
        test.done();
    },
    testDateFmtShortDateComponentsN_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'ս');
        test.done();
    },
    testDateFmtShortDateComponentsD_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtShortDateComponentsDM_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtShortDateComponentsMY_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtShortDateComponentsDMY_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtShortDateComponentsWDM_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09, Հ');
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29.09.11, Հ');
        test.done();
    },
    testDateFmtLongDateComponentsWDM_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '29 սեպտեմբերի, հնգ');
        test.done();
    },
    testDateFmtFullDateComponentsY_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtFullDateComponentsM_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "սեպտեմբեր");
        test.done();
    },
    testDateFmtFullDateComponentsD_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtFullDateComponentsDM_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'սեպտեմբերի 29');
        test.done();
    },
    testDateFmtFullDateComponentsMY_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 թ. սեպտեմբեր');
        test.done();
    },
    testDateFmtFullDateComponentsDMY_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 թ. սեպտեմբերի 29');
        test.done();
    },
    testDateFmtFullDateComponentsWDM_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), 'սեպտեմբերի 29, հինգշաբթի');
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), '2011 թ. սեպտեմբերի 29, հինգշաբթի');
        test.done();
    },
    testDateFmtShortTimeComponentsS_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtShortTimeComponentsM_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtShortTimeComponentsH_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtShortTimeComponentsMS_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtShortTimeComponentsHM_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtShortTimeComponentsHMS_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtShortTimeComponentsHMA_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtShortTimeComponentsHMZ_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hy-AM",
            type: "time",
            time: "hmz",
            timezone: "Asia/Yerevan"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +04/+05");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hy-AM",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Yerevan"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +04/+05");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtShortTimeComponentsHMSZ_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hy-AM",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Yerevan"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +04/+05");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hy-AM",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Yerevan"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +04/+05");
        test.done();
    },
    testDateFmtFullTimeComponentsS_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtFullTimeComponentsM_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtFullTimeComponentsH_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtFullTimeComponentsMS_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtFullTimeComponentsHM_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtFullTimeComponentsHMS_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtFullTimeComponentsHMA_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtFullTimeComponentsHMZ_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hy-AM",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Yerevan"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +04/+05");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hy-AM",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Yerevan"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +04/+05");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
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
    testDateFmtFullTimeComponentsHMSZ_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hy-AM",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Yerevan"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +04/+05");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hy-AM",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Yerevan"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +04/+05");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "hy-AM",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Yerevan"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +04/+05");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 վայրկյանից");
        test.done();
    },
testDateFmtFormatRelativeWithinMinuteBefore_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 վայրկյան առաջ");
        test.done();
    },
testDateFmtFormatRelativeWithinHourAfter_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 րոպեից");
        test.done();
    },
testDateFmtFormatRelativeWithinHourBefore_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '10 րոպե առաջ');
        test.done();
    },
testDateFmtFormatRelativeWithinDayAfter_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 ժամից');
        test.done();
    },
testDateFmtFormatRelativeWithinDayBefore_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 ժամ առաջ');
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '4 օրից');
        test.done();
    },
testDateFmtFormatRelativeWithinFortnightBefore_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date),  '4 օր առաջ');
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 շաբաթից');
        test.done();
    },
testDateFmtFormatRelativeWithinQuarterBefore_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '9 շաբաթ առաջ');
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '16 ամսից');
        test.done();
    },
testDateFmtFormatRelativeWithinTwoYearsBefore_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 ամիս առաջ');
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hy-AM",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '14 տարուց');
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_hy_AM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "hy-AM", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "hy-AM",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "hy-AM",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), '21 տարի առաջ');
        test.done();
    }
};