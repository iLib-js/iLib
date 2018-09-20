/*
 * testdurfmt_si-LK.js - test the duration formatter object
 *
 * Copyright © 2017,2017, JEDLSoft
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

module.exports.testdurfmt_si_LK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDurFmtLKFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "si-LK",
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
        test.equal(duration.toString(), "ව 1, මා 1, ස 1, දි 1, පැ 1, මි 1, ත 1");
        test.done();
    },
    
    testDurFmtLKFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "si-LK",
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
        test.equal(duration.toString(), "ව 1, මා 1, ස 1, දි 1, පැ 1, මි 1, ත 1");
        test.done();
    },
    
    testDurFmtLKFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "si-LK",
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
        test.equal(duration.toString(), "ව 1, මා 1, ස 1, දි 1, 01.01.01");
        test.done();
    },
    
    testDurFmtLKFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "si-LK",
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
        test.equal(duration.toString(), "ව 1, මා 1, ස 1, දි 1, පැ 1, මි 1, ත 1");
        test.done();
    },
    
    testDurFmtLKFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "si-LK",
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
        test.equal(duration.toString(), "වසර 1, මාස 1, සති 1, දින 1, පැය 1, මිනි 1, තත් 1");
        test.done();
    },
    
    testDurFmtLKFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "si-LK",
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
        test.equal(duration.toString(), "වසර 1, මාස 1, සති 1, දින 1, පැය 1, මිනිත්තු 1, සහ තත්පර 1");
        test.done();
    },
    
    
    testDurFmtLKAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "si-LK",
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
                test.equal(duration.toString(), "වසර 2, මාස 2, සති 2, දින 2, පැය 2, මිනිත්තු 2, සහ තත්පර 2");
                test.done();
            }
        });
    },
    
    testDurFmtLKFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "si-LK",
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
                test.equal(duration.toString(), "ව 1, මා 1, ස 1, දි 1, 01.01.01");
                test.done();
            }
        });
    }
    
};
