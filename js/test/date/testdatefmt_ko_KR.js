/*
 * testdatefmt_ko_KR.js - test the date formatter object in Korean
 *
 * Copyright © 2012-2015, 2017, 2022, 2024 JEDLSoft
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

if (typeof(DateFactory) === "undefined") {
    var DateFactory = require("../../lib/DateFactory.js");
}

module.exports.testdatefmt_ko_KR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_ko_KR: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "ko-KR"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11. 9. 29.");
        test.done();
    },
    testDateFmtSimpleShort_ko_KR_useIntl: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("ko-KR")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "short", timezone: "local", useIntl: true});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0,
            timezone: "local"
        });
        var expected = (ilib._getPlatform() === "browser" && ilib._getBrowser() === "safari") ? "2011. 9. 29." : "11. 9. 29.";
        test.equal(fmt.format(date), expected);
        test.done();
    },
    testDateFmtSimpleMedium_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011. 9. 29.");
        test.done();
    },
    testDateFmtSimpleMedium_ko_KR_useIntl: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("ko-KR")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "medium", timezone: "local", useIntl: true});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0,
            timezone: "local"
        });
        test.equal(fmt.format(date), "2011. 9. 29.");
        test.done();
    },
    testDateFmtSimpleLong_ko_KR_useIntl: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("ko-KR")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "long", timezone: "local", useIntl: true});
        test.ok(fmt !== null);

        var date = DateFactory({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0,
            timezone: "local"
        });
        test.equal(fmt.format(date), "2011년 9월 29일");
        test.done();
    },
    testDateFmtSimpleFull_ko_KR_useIntl: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("ko-KR")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full", timezone: "local", useIntl: true});
        // Not supported case in iLib. follow normal iLib logic.
        test.ok(fmt !== null);

        var date = DateFactory({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0,
            timezone: "local"
        });
        test.equal(fmt.format(date), "2011년 9월 29일");
        test.done();
    },
    testDateFmtSimpleFull_ko_KR_useIntl_dmwy: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("ko-KR")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", date:"dmwy", timezone: "local", length: "full", useIntl: true});
        // Not supported case in iLib. follow normal iLib logic.
        test.ok(fmt !== null);

        var date = DateFactory({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0,
            timezone: "local"
        });
        test.equal(fmt.format(date), "2011년 9월 29일 목요일");
        test.done();
    },
    testDateFmtSimpleLong_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011년 9월 29일");
        test.done();
    },
    testDateFmtSimpleFull_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011년 9월 29일");
        test.done();
    },
    testDateFmtSimpleTimeShort_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오후 1:45");
        test.done();
    },
    testDateFmtSimpleTime_ko_KR_Intl_ahm: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("ko-KR")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", useIntl: true});
        test.ok(fmt !== null);

        var date = DateFactory({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 10,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오후 1:45");
        test.done();
    },
    testDateFmtSimpleTime_ko_KR_Intl_ahms: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("ko-KR")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", time: "ahms", useIntl: true});
        test.ok(fmt !== null);

        var date = DateFactory({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 10,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오후 1:45:10");
        test.done();
    },
    testDateFmtSimpleTimeMedium_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오후 1:45");
        test.done();
    },
    testDateFmtSimpleTimeLong_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오후 1:45");
        test.done();
    },
    testDateFmtSimpleTimeFull_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오전 1:45");
        test.done();
    },
    testDateFmtDateTimeSimpleShort_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11. 9. 29. 오후 1:45");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011. 9. 29. 오후 1:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011년 9월 29일 오후 1:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011년 9월 29일 오후 1:45");
        test.done();
    },


    testDateFmtTemplateCalendar_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "ko-KR",
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
    testDateFmtTemplateCalendarIncompatibleDateType_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtTemplateClock12SwitchHH_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtTemplateClock12Switchkk_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtTemplateClock24Switchhh_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
        var fmt = new DateFmt({locale: "ko-KR", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
        var fmt = new DateFmt({locale: "ko-KR", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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


    testDateFmtTypeDate_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11. 9. 29.");
        test.done();
    },
    testDateFmtTypeTime_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오후 1:45");
        test.done();
    },
    testDateFmtTypeDateTime_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11. 9. 29. 오후 1:45");
        test.done();
    },


    testDateFmtShortDateComponentsY_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11년");
        test.done();
    },
    testDateFmtShortDateComponentsM_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9월");
        test.done();
    },
    testDateFmtShortDateComponentsN_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9월");
        test.done();
    },
    testDateFmtShortDateComponentsD_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29일");
        test.done();
    },
    testDateFmtShortDateComponentsDM_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9. 29.");
        test.done();
    },
    testDateFmtShortDateComponentsMY_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11. 9.");
        test.done();
    },
    testDateFmtShortDateComponentsDMY_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11. 9. 29.");
        test.done();
    },
    testDateFmtShortDateComponentsWDM_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9. 29. 목");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11. 9. 29. 목");
        test.done();
    },
    testDateFmtLongDateComponentsWDM_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", date: "wdm", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9월 29일 목");
        test.done();
    },


    testDateFmtFullDateComponentsY_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011년");
        test.done();
    },
    testDateFmtFullDateComponentsM_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9월");
        test.done();
    },
    testDateFmtFullDateComponentsD_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29일");
        test.done();
    },
    testDateFmtFullDateComponentsDM_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9월 29일");
        test.done();
    },
    testDateFmtFullDateComponentsMY_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011년 9월");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011년 9월 29일");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "9월 29일 목요일");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011년 9월 29일 목요일");
        test.done();
    },


    testDateFmtShortTimeComponentsS_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtShortTimeComponentsM_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtShortTimeComponentsH_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtShortTimeComponentsMS_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtShortTimeComponentsHM_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtShortTimeComponentsHMS_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtShortTimeComponentsHMA_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오후 1:45");
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ko-KR",
            type: "time",
            time: "hmz",
            timezone: "Asia/Seoul"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 KST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ko-KR",
            type: "time",
            time: "hmaz",
            timezone: "Asia/Seoul"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오후 1:45 KST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오후 1:45:37");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ko-KR",
            type: "time",
            time: "hmsz",
            timezone: "Asia/Seoul"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 KST");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ko-KR",
            type: "time",
            time: "hmsaz",
            timezone: "Asia/Seoul"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오후 1:45:37 KST");
        test.done();
    },


    testDateFmtFullTimeComponentsS_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtFullTimeComponentsM_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtFullTimeComponentsH_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtFullTimeComponentsMS_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtFullTimeComponentsHM_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtFullTimeComponentsHMS_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
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
    testDateFmtFullTimeComponentsHMA_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오후 1:45");
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ko-KR",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Asia/Seoul"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 KST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ko-KR",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Asia/Seoul"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오후 1:45 KST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오후 1:45:37");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ko-KR",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Seoul"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 KST");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ko-KR",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Asia/Seoul"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "오후 1:45:37 KST");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ko-KR",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Asia/Seoul"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 KST");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30초 후");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30초 전");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10분 후");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10분 전");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4시간 후");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4시간 전");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4일 후");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4일 전");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBeforeMedium_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "medium"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4일 전");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9주 후");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9주 전");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16개월 후");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14개월 전");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14년 후");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "ko-KR", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "ko-KR",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "ko-KR",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21년 전");
        test.done();
    }
};