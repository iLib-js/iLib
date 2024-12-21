/*
 * testdatefmt_az_Latn_AZ.js - test the date formatter object in Latin Azerbaijani
 *
 * Copyright © 2016-2017,2020-2023 JEDLSoft
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

module.exports.testdatefmt_az_Latn_AZ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtConstructorEmpty_az_Latn_AZ: function(test) {
        test.expect(1);
        var fmt = new DateFmt({locale: "az-Latn-AZ"});

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtSimpleShort_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtSimpleMedium_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sen 2011");
        test.done();
    },
    testDateFmtSimpleMedium_az_Latn_AZ_useIntl: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("az-Latn-AZ")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "long", useIntl: true});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });

        var expected;
        switch (ilib._getPlatform()) {
            case "nodejs":
                expected = "29 sentyabr 2011";
                break;
            case "browser":
                var browser = ilib._getBrowser();
                switch (browser) {
                    case "firefox":
                    case 'safari':
                        expected = "29 sentyabr 2011";
                        break;
                    default:
                        expected = "2011 M09 29";
                        break;
                }
                break;
            default:
                expected = "2011 M09 29";
                break;
        }
        test.equal(fmt.format(date), expected);
        test.done();
    },
    testDateFmtSimpleLong_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sentyabr 2011");
        test.done();
    },
    testDateFmtSimpleFull_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sentyabr 2011");
        test.done();
    },
    testDateFmtSimpleTimeShort_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtSimpleTimeMedium_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtSimpleTimeLong_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtSimpleTimeFull_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtDateTimeSimpleShort_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtDateTimeSimpleMedium_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sen 2011, 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleLong_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });

        test.equal(fmt.format(date), "29 sentyabr 2011 at 13:45");
        test.done();
    },
    testDateFmtDateTimeSimpleFull_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sentyabr 2011/13:45");
        test.done();
    },
    testDateFmtTemplateCalendar_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtTemplateClock12SwitchHH_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtTemplateClock12Switchkk_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtTemplateClock24Switchhh_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtTemplateClock24SwitchKK_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtTypeDate_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtTypeTime_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtTypeDateTime_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortDateComponentsY_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortDateComponentsM_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortDateComponentsN_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortDateComponentsD_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortDateComponentsDM_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortDateComponentsMY_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortDateComponentsDMY_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortDateComponentsDMW_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", date: "dmw"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09, 4");
        test.done();
    },
    testDateFmtShortDateComponentsDMWY_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", date: "dmwy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.11, 4");
        test.done();
    },
    testDateFmtFullDateComponentsY_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFullDateComponentsM_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "sentyabr");
        test.done();
    },
    testDateFmtFullDateComponentsD_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFullDateComponentsDM_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sentyabr");
        test.done();
    },
    testDateFmtFullDateComponentsMY_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "sentyabr 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMY_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sentyabr 2011");
        test.done();
    },
    testDateFmtFullDateComponentsDMW_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "dmw"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sentyabr, cümə axşamı");
        test.done();
    },
    testDateFmtFullDateComponentsDMWY_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "dmwy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 sentyabr 2011, cümə axşamı");
        test.done();
    },
    testDateFmtShortTimeComponentsS_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortTimeComponentsM_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortTimeComponentsH_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortTimeComponentsMS_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortTimeComponentsHM_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortTimeComponentsHMS_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortTimeComponentsHMA_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortTimeComponentsHMZ_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "az-Latn-AZ",
            type: "time",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortTimeComponentsHMAZ_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "az-Latn-AZ",
            type: "time",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortTimeComponentsHMSA_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortTimeComponentsHMSZ_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "az-Latn-AZ",
            type: "time",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtShortTimeComponentsHMSAZ_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "az-Latn-AZ",
            type: "time",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFullTimeComponentsS_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFullTimeComponentsM_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFullTimeComponentsH_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFullTimeComponentsMS_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFullTimeComponentsHM_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFullTimeComponentsHMS_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFullTimeComponentsHMA_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFullTimeComponentsHMZ_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "az-Latn-AZ",
            type: "time",
            length: "full",
            time: "hmz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFullTimeComponentsHMAZ_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "az-Latn-AZ",
            type: "time",
            length: "full",
            time: "hmaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFullTimeComponentsHMSA_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFullTimeComponentsHMSZ_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "az-Latn-AZ",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFullTimeComponentsHMSAZ_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "az-Latn-AZ",
            type: "time",
            length: "full",
            time: "hmsaz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtWithTimeZoneAndNoDST_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "az-Latn-AZ",
            type: "time",
            length: "full",
            time: "hmsz"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "az-Latn-AZ",
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
    testDateFmtFormatRelativeWithinMinuteAfter_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 saniyə ərzində");
        test.done();
    },
    testDateFmtFormatRelativeWithinMinuteBefore_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 44,
            second: 30,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "30 saniyə öncə");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourAfter_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 dəqiqə ərzində");
        test.done();
    },
    testDateFmtFormatRelativeWithinHourBefore_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "10 dəqiqə öncə");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayAfter_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 17,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 saat ərzində");
        test.done();
    },
    testDateFmtFormatRelativeWithinDayBefore_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 saat öncə");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightAfter_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 gün ərzində");
        test.done();
    },
    testDateFmtFormatRelativeWithinFortnightBefore_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 16,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "4 gün öncə");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterAfter_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 11,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 həftə ərzində");
        test.done();
    },
    testDateFmtFormatRelativeWithinQuarterBefore_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "9 həftə öncə");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsAfter_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2013,
            month: 1,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "16 ay ərzində");
        test.done();
    },
    testDateFmtFormatRelativeWithinTwoYearsBefore_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2010,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 ay öncə");
        test.done();
    },
    testDateFmtFormatRelativeYearsAfter_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2025,
            month: 10,
            day: 24,
            hour: 15,
            minute: 55,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "14 il ərzində");
        test.done();
    },
    testDateFmtFormatRelativeYearsBefore_az_Latn_AZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
        test.ok(fmt !== null);

        var reference = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 2011,
            month: 9,
            day: 20,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        var date = new GregorianDate({
            locale: "az-Latn-AZ",
            year: 1990,
            month: 7,
            day: 18,
            hour: 9,
            minute: 35,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.formatRelative(reference, date), "21 il öncə");
        test.done();
    }
};