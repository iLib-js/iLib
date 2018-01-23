/*
 * testdurfmt_az-Latn-AZ.js - test the duration formatter object
 *
 * Copyright © 2016-2017, JEDLSoft
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

if (typeof(DurationFmt) === "undefined") {
    var DurationFmt = require("../../../lib/DurationFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testdurfmt_az_Latn_AZ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDurFmtAZFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "az-Latn-AZ",
            length: "short"
        });
        test.ok(fmt !== null);
    
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1 il, 1 ay, 1 hft, 1 gün, 1 saat, 1 dəq, 1 san");
        test.done();
    },
    
    testDurFmtAZFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "az-Latn-AZ",
            length: "short",
            style: "text"
        });
        test.ok(fmt !== null);
    
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1 il, 1 ay, 1 hft, 1 gün, 1 saat, 1 dəq, 1 san");
        test.done();
    },
    
    testDurFmtAZFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "az-Latn-AZ",
            length: "short",
            style: "clock"
        });
        test.ok(fmt !== null);
    
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1 il, 1 ay, 1 hft, 1 gün, 01:01:01");
        test.done();
    },
    
    testDurFmtAZFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "az-Latn-AZ",
            length: "medium"
        });
        test.ok(fmt !== null);
    
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1 il, 1 ay, 1 hft, 1 gün, 1 saat, 1 dəq, 1 san");
        test.done();
    },
    
    testDurFmtAZFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "az-Latn-AZ",
            length: "long"
        });
        test.ok(fmt !== null);
    
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1 il, 1 ay, 1 hft, 1 gün, 1 saat, 1 dəq, 1 san");
        test.done();
    },
    
    testDurFmtAZFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "az-Latn-AZ",
            length: "full"
        });
        test.ok(fmt !== null);
    
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });           
        test.equal(duration.toString(), "1 il, 1 ay, 1 həftə, 1 gün, 1 saat, 1 dəqiqə, 1 saniyə");
        test.done();
    },
    
    
    testDurFmtAZAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "az-Latn-AZ",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
    
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });           
                test.equal(duration.toString(), "2 il, 2 ay, 2 həftə, 2 gün, 2 saat, 2 dəqiqə, 2 saniyə");
                test.done();
            }
        });
    },
    
    testDurFmtAZFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "az-Latn-AZ",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
    
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1 il, 1 ay, 1 hft, 1 gün, 01:01:01");
                test.done();
            }
        });
    }
    
};