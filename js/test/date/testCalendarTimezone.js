/*
 * testCalendarTimezone.js - test DateFmt timezone/calendar conversion
 *
 * Verifies that DateFmt.format() correctly converts dates when:
 * - The input date's timezone differs from the formatter's timezone
 * - The input date's calendar differs from the formatter's calendar
 * - Both timezone and calendar differ simultaneously
 *
 * These are the reference tests for flutter_ilib's
 * datefmt_timezone_calendar_conversion_test.dart
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

if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../lib/GregorianDate.js");
}
if (typeof(EthiopicDate) === "undefined") {
    var EthiopicDate = require("../../lib/EthiopicDate.js");
}
if (typeof(DateFactory) === "undefined") {
    var DateFactory = require("../../lib/DateFactory.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testCalendarTimezone = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // ===== Scenario 3: cross-calendar conversion with timezone =====

    // gregorian components with timezone formatted as ethiopic
    testDateFmtCrossCalGregToEthiopic_am_ET: function(test) {
        test.expect(1);
        var fmt = new DateFmt({
            locale: "am-ET",
            length: "short",
            type: "datetime",
            timezone: "Africa/Addis_Ababa"
        });

        // 2024-06-27 13:00 in Africa/Addis_Ababa (UTC+3)
        var date = DateFactory({
            type: "gregorian",
            year: 2024,
            month: 6,
            day: 27,
            hour: 13,
            minute: 0,
            second: 0,
            timezone: "Africa/Addis_Ababa"
        });

        test.equal(fmt.format(date), "20/10/2016 7:00 ከሰዓት");
        test.done();
    },

    // gregorian components with same timezone as formatter -
    // verify components path matches unixtime path for same instant
    testDateFmtCrossCalComponentsVsUnixtime_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            length: "short",
            type: "datetime",
            timezone: "Africa/Addis_Ababa"
        });

        // Same wall-clock time in same timezone - should give same result
        // whether constructed from components or from unixtime
        var fromComponents = DateFactory({
            type: "gregorian",
            year: 2024,
            month: 6,
            day: 27,
            hour: 13,
            minute: 0,
            second: 0,
            timezone: "Africa/Addis_Ababa"
        });

        // 2024-06-27 13:00 Addis Ababa = 2024-06-27 10:00 UTC
        // Unix time: 1719482400000
        var fromUnixtime = DateFactory({
            type: "gregorian",
            unixtime: 1719482400000,
            timezone: "Africa/Addis_Ababa"
        });

        test.equal(fmt.format(fromComponents), "20/10/2016 7:00 ከሰዓት");
        test.equal(fmt.format(fromUnixtime), "20/10/2016 7:00 ከሰዓት");
        test.done();
    },

    // ===== Scenario 4: same calendar, different timezone =====

    // NY time formatted with Seoul formatter
    testDateFmtTzConvNYToSeoul_ko_KR: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "ko-KR",
            length: "short",
            type: "datetime",
            timezone: "Asia/Seoul",
            useNative: false
        });

        // 2024-06-27 13:00 New York (EDT, UTC-4) = 2024-06-28 02:00 Seoul (KST, UTC+9)
        var dateNY = DateFactory({
            type: "gregorian",
            year: 2024,
            month: 6,
            day: 27,
            hour: 13,
            minute: 0,
            second: 0,
            timezone: "America/New_York"
        });

        // Same instant via unixtime
        // 2024-06-27 13:00 EDT = 2024-06-27 17:00 UTC = unix 1719507600000
        var dateUnix = DateFactory({
            type: "gregorian",
            unixtime: 1719507600000,
            timezone: "Asia/Seoul"
        });

        test.equal(fmt.format(dateNY), "24. 6. 28. 오전 2:00");
        test.equal(fmt.format(dateUnix), "24. 6. 28. 오전 2:00");
        test.done();
    },

    // explicit timezone on date differs from formatter timezone
    testDateFmtTzConvSeoulToLA_en_US: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-US",
            length: "full",
            type: "datetime",
            timezone: "America/Los_Angeles",
            useNative: false
        });

        // 2024-01-15 09:00 in Asia/Seoul (KST, UTC+9)
        // = 2024-01-15 00:00 UTC
        // = 2024-01-14 16:00 Los Angeles (PST, UTC-8)
        var dateSeoul = DateFactory({
            type: "gregorian",
            year: 2024,
            month: 1,
            day: 15,
            hour: 9,
            minute: 0,
            second: 0,
            timezone: "Asia/Seoul"
        });

        // Same instant as unixtime: 2024-01-15 00:00 UTC = 1705276800000
        var dateUnix = DateFactory({
            type: "gregorian",
            unixtime: 1705276800000,
            timezone: "America/Los_Angeles"
        });

        test.equal(fmt.format(dateSeoul), "January 14, 2024 at 4:00\u202FPM");
        test.equal(fmt.format(dateUnix), "January 14, 2024 at 4:00\u202FPM");
        test.done();
    },

    // ===== Scenario 5: different timezone AND different calendar =====

    // NY gregorian to Addis Ababa ethiopic
    testDateFmtTzCalConvNYGregToAddisEthiopic_am_ET: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "am-ET",
            length: "short",
            type: "datetime",
            timezone: "Africa/Addis_Ababa"
        });

        // 2024-06-27 13:00 New York (EDT, UTC-4)
        // = 2024-06-27 17:00 UTC
        // = 2024-06-27 20:00 Addis Ababa (EAT, UTC+3)
        var dateNY = DateFactory({
            type: "gregorian",
            year: 2024,
            month: 6,
            day: 27,
            hour: 13,
            minute: 0,
            second: 0,
            timezone: "America/New_York"
        });

        // Same instant from unixtime
        var dateUnix = DateFactory({
            type: "gregorian",
            unixtime: 1719507600000,
            timezone: "Africa/Addis_Ababa"
        });

        test.equal(fmt.format(dateNY), "20/10/2016 2:00 ከምሽቱ");
        test.equal(fmt.format(dateUnix), "20/10/2016 2:00 ከምሽቱ");
        test.done();
    }
};
