/*
 * testdatefmt_am_ET.js - test the date formatter object in Amharic
 *
 * Copyright © 2015,2017,2021 JEDLSoft
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
if (typeof(EthiopicDate) === "undefined") {
    var EthiopicDate = require("../../lib/EthiopicDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdatefmt_am_ET = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_am_ET: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "am-ET"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "short"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtSimpleMedium_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "medium"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ግንቦት 2011");
        test.done();
    },
    testDateFmtSimpleLong_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "long"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ግንቦት 2011");
        test.done();
    },
    testDateFmtSimpleFull_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ግንቦት 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ከምሽቱ");
        test.done();
    },
    testDateFmtSimpleTimeMedium_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ከምሽቱ");
        test.done();
    },
    testDateFmtSimpleTimeLong_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ከምሽቱ");
        test.done();
    },
    testDateFmtSimpleTimeFull_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ከምሽቱ");
        test.done();
    },
    testDateFmtDateTimeSimpleShort_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011 1:45 ከምሽቱ");
        test.done();
    },
    testDateFmtDateTimeSimpleMedium_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ግንቦት 2011 1:45 ከምሽቱ");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ግንቦት 2011 1:45 ከምሽቱ");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ግንቦት 2011 1:45 ከምሽቱ");
        test.done();
    },
    testDateFmtjTemplateMorning_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", template: "h"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 4,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "4");
        test.done();
    },
    testDateFmtjjTemplateMorning_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", template: "hh"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 4,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "04");
        test.done();
    },
    testDateFmtjTemplateEvening_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", template: "h"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1");
        test.done();
    },
    testDateFmtjjTemplateEvening_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", template: "hh"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01");
        test.done();
    },
    testDateFmtjjTemplateTransitionBefore_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", template: "hh"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 23,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11");
        test.done();
    },
    testDateFmtjjTemplateTransitionAfter_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", template: "hh"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 0,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "12");
        test.done();
    },
    testDateFmtjjTemplateTransitionEveningBefore_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", template: "hh"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 11,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "11");
        test.done();
    },
    testDateFmtjjTemplateTransitionEveningAfter_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", template: "hh"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01");
        test.done();
    },
    testDateFmtTemplateCalendar_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "am-ET",
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
    testDateFmtTemplateCalendarIncompatibleDateType_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        // convert automatically to a Julian calendar date
        test.equal(fmt.format(date), "2019-05-24 19:45");
        test.done();
    },
    testDateFmtTemplateClock12SwitchHH_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtTemplateClock12Switchkk_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtTemplateClock24Switchhh_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtTemplateClock24SwitchKK_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtTypeDate_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "date"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtTypeTime_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ከምሽቱ");
        test.done();
    },
    testDateFmtTypeDateTime_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "datetime"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011 1:45 ከምሽቱ");
        test.done();
    },
    testDateFmtShortDateComponentsY_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", date: "y"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtShortDateComponentsM_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", date: "m"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtShortDateComponentsN_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", date: "n"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ግ");
        test.done();
    },
    testDateFmtShortDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", date: "d"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtShortDateComponentsDM_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", date: "dm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtShortDateComponentsMY_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", date: "my"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtShortDateComponentsDMY_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", date: "dmy"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtShortDateComponentsWDM_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", date: "wdm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ሐ፣ 29/09");
        test.done();
    },
    testDateFmtShortDateComponentsWDMY_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ሐ፣ 29/09/2011");
        test.done();
    },
    testDateFmtFullDateComponentsY_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtFullDateComponentsM_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ግንቦት");
        test.done();
    },
    testDateFmtFullDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtFullDateComponentsDM_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ግንቦት");
        test.done();
    },
    testDateFmtFullDateComponentsMY_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ግንቦት 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 ግንቦት 2011");
        test.done();
    },
    testDateFmtFullDateComponentsWDM_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ሐሙስ፣ 29 ግንቦት");
        test.done();
    },
    testDateFmtFullDateComponentsWDMY_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "ሐሙስ፣ 29 ግንቦት 2011");
        test.done();
    },
    testDateFmtShortTimeComponentsS_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtShortTimeComponentsM_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtShortTimeComponentsH_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtShortTimeComponentsMS_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtShortTimeComponentsHM_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtShortTimeComponentsHMS_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtShortTimeComponentsHMA_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ከምሽቱ");
        test.done();
    },
    testDateFmtShortTimeComponentsHMZ_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            type: "time",
            time: "hmz",
            timezone: "Africa/Addis_Ababa"
        });
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 EAT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMAZ_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            type: "time",
            time: "hmaz",
            timezone: "Africa/Addis_Ababa"
        });
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ከምሽቱ EAT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSA_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ከምሽቱ");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSZ_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            type: "time",
            time: "hmsz",
            timezone: "Africa/Addis_Ababa"
        });
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 EAT");
        test.done();
    },
    testDateFmtShortTimeComponentsHMSAZ_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            type: "time",
            time: "hmsaz",
            timezone: "Africa/Addis_Ababa"
        });
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ከምሽቱ EAT");
        test.done();
    },
    testDateFmtFullTimeComponentsS_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtFullTimeComponentsM_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtFullTimeComponentsH_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtFullTimeComponentsMS_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtFullTimeComponentsHM_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtFullTimeComponentsHMS_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
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
    testDateFmtFullTimeComponentsHMA_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ከምሽቱ");
        test.done();
    },
    testDateFmtFullTimeComponentsHMZ_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Africa/Addis_Ababa"
        });
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 EAT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMAZ_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Africa/Addis_Ababa"
        });
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ከምሽቱ EAT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSA_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ከምሽቱ");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSZ_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Africa/Addis_Ababa"
        });
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 EAT");
        test.done();
    },
    testDateFmtFullTimeComponentsHMSAZ_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Africa/Addis_Ababa"
        });
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45:37 ከምሽቱ EAT");
        test.done();
    },
    testDateFmtWithTimeZoneAndNoDST_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Africa/Addis_Ababa"
        });
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        // does not observe DST, so no difference in the TZ spec
        test.equal(fmt.format(date), "1:45:37 EAT");
        test.done();
    },
    testDateFmtTimeMeridiem0_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            type: "time",
            length: "long",
            time: "hma",
            timezone: "Africa/Addis_Ababa"
        });
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 1,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:45 ጥዋት");
        test.done();
    },
    testDateFmtTimeMeridiem1_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            type: "time",
            length: "long",
            time: "hma",
            timezone: "Africa/Addis_Ababa"
        });
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 6,
            minute: 0,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "6:00 ቀትር");
        test.done();
    },
    testDateFmtTimeMeridiem2_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            type: "time",
            length: "long",
            time: "hma",
            timezone: "Africa/Addis_Ababa"
        });
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 8,
            minute: 22,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "8:22 ከሰዓት");
        test.done();
    },
    testDateFmtTimeMeridiem3_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            type: "time",
            length: "long",
            time: "hma",
            timezone: "Africa/Addis_Ababa"
        });
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 22,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "1:22 ከምሽቱ");
        test.done();
    },
    testDateFmtTimeMeridiem4_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            type: "time",
            length: "long",
            time: "hma",
            timezone: "Africa/Addis_Ababa"
        });
        test.ok(fmt !== null);

        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 29,
            hour: 19,
            minute: 22,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "7:22 ከሌሊቱ");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteAfter_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var reference = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "በ30 ሰከንዶች ውስጥ");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var reference = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ከ30 ሰከንዶች በፊት");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var reference = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "በ10 ደቂቃዎች ውስጥ");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var reference = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ከ10 ደቂቃዎች በፊት");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var reference = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "በ4 ሰዓቶች ውስጥ");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var reference = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ከ4 ሰዓቶች በፊት");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var reference = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "በ4 ቀናት ውስጥ");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var reference = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ከ4 ቀናት በፊት");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var reference = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "በ9 ሳምንታት ውስጥ");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var reference = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ከ9 ሳምንታት በፊት");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var reference = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "በ16 ወራት ውስጥ");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var reference = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ከ14 ወራት በፊት");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var reference = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new EthiopicDate({
            locale: "am-ET",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "በ14 ዓመታት ውስጥ");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "am-ET", length: "full"});
        test.ok(fmt !== null);

        var reference = new EthiopicDate({
            locale: "am-ET",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new EthiopicDate({
            locale: "am-ET",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "ከ21 ዓመታት በፊት");
        test.done();
    }
};