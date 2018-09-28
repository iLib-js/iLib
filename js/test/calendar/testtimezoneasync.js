/*
 * testtimezoneasync.js - test the timezone objects asynchronously
 *
 * Copyright © 2015,2017-2018, JEDLSoft
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

if (typeof(TimeZone) === "undefined") {
    var TimeZone = require("../../lib/TimeZone.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testtimezoneasync = {
    testTZAsyncGetAvailableIds: function(test) {
        test.expect(2);
        TimeZone.getAvailableIds(undefined, false, function(zones) {
            test.ok(typeof(zones) !== "undefined");

            test.ok(zones.length > 0);
            test.done();
        });
    },

    testTZAsyncGetAvailableIdsRightValues: function(test) {
        test.expect(6);
        TimeZone.getAvailableIds(undefined, false, function(zones) {
            test.ok(typeof(zones) !== "undefined");

            //var util = require("util");
            //util.print("ilib._load is " + util.inspect(ilib._load) + "\n");
            test.contains(zones, "Europe/London");
            test.contains(zones, "America/Los_Angeles");
            test.contains(zones, "Australia/Sydney");
            test.contains(zones, "Asia/Tokyo");
            test.contains(zones, "Africa/Cairo");
            test.done();
        });
    },

    testTZAsyncGetAvailableIdsNoFilterContainsLocal: function(test) {
        test.expect(2);
        TimeZone.getAvailableIds(undefined, false, function(zones) {
            test.ok(typeof(zones) !== "undefined");

            test.ok(zones.indexOf("local") != -1);
            test.done();
        });
    },

    testTZAsyncGetAvailableIdsByCountryRightLength: function(test) {
        test.expect(2);
        TimeZone.getAvailableIds("US", false, function(zones) {
            test.ok(typeof(zones) !== "undefined");

            test.equal(zones.length, 48);
            test.done();
        });
    },

    testTZAsyncGetAvailableIdsWithFilterContainsNoLocal: function(test) {
        try {
            TimeZone.getAvailableIds("US", false, function(zones) {
                test.ok(typeof(zones) !== "undefined");

                test.ok(zones.indexOf("local") == -1);
            });
        } catch (e) {
            test.ok(typeof(e) !== "undefined");
        }
        test.done();
    },

    testTZAsyncGetAvailableIdsByCountryRightContents: function(test) {
        test.expect(2);
        TimeZone.getAvailableIds("US", false, function(zones) {
            test.ok(typeof(zones) !== "undefined");

            var expected = [
                "America/New_York",
                "America/Detroit",
                "America/Kentucky/Louisville",
                "America/Kentucky/Monticello",
                "America/Indiana/Indianapolis",
                "America/Indiana/Vincennes",
                "America/Indiana/Winamac",
                "America/Indiana/Marengo",
                "America/Indiana/Petersburg",
                "America/Indiana/Vevay",
                "America/Chicago",
                "America/Indiana/Tell_City",
                "America/Indiana/Knox",
                "America/Menominee",
                "America/North_Dakota/Center",
                "America/North_Dakota/New_Salem",
                "America/North_Dakota/Beulah",
                "America/Denver",
                "America/Boise",
                "America/Phoenix",
                "America/Los_Angeles",
                "America/Anchorage",
                "America/Juneau",
                "America/Sitka",
                "America/Metlakatla",
                "America/Yakutat",
                "America/Nome",
                "America/Adak",
                "Pacific/Honolulu",
                "America/Atka",
                "America/Fort_Wayne",
                "America/Indianapolis",
                "America/Knox_IN",
                "America/Louisville",
                "America/Shiprock",
                "Navajo",
                "Pacific/Johnston",
                "US/Alaska",
                "US/Aleutian",
                "US/Arizona",
                "US/Central",
                "US/East-Indiana",
                "US/Eastern",
                "US/Hawaii",
                "US/Indiana-Starke",
                "US/Michigan",
                "US/Mountain",
                "US/Pacific"
            ];

            test.equalIgnoringOrder(zones, expected);
            test.done();
        });
    },

    testTZAsyncGetAvailableIdsByCountry2RightLength: function(test) {
        test.expect(2);
        var zones = TimeZone.getAvailableIds("SG", false, function(zones) {
            test.ok(typeof(zones) !== "undefined");

            test.equal(zones.length, 2);
            test.done();
        });
    },

    testTZAsyncGetAvailableIdsByCountry2RightContents: function(test) {
        test.expect(2);
        var zones = TimeZone.getAvailableIds("SG", false, function(zones) {
            test.ok(typeof(zones) !== "undefined");

            var expected = [
                "Asia/Singapore",
                "Singapore"        // legacy tz
            ];

            test.equalIgnoringOrder(zones, expected);
            test.done();
        });
    }
};
