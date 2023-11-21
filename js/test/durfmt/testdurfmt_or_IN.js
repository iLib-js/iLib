/*
 * testdurfmt_or_IN.js - test the duration formatter object
 *
 * Copyright © 2015,2017, JEDLSoft
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
    var DurationFmt = require("../../lib/DurationFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdurfmt_or_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDurFmtORFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "or-IN",
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
        test.equal(duration.toString(), '1ବର୍ଷ 1ମାସ 1ସପ୍ 1ଦିନ 1ଘଣ୍ଟା 1ମିନିଟ୍‌ 1ସେକ୍');
        test.done();
    },
    testDurFmtORFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "or-IN",
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
        test.equal(duration.toString(), '1ବର୍ଷ 1ମାସ 1ସପ୍ 1ଦିନ 1ଘଣ୍ଟା 1ମିନିଟ୍‌ 1ସେକ୍');
        test.done();
    },
    testDurFmtORFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "or-IN",
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
        test.equal(duration.toString(), '1ବର୍ଷ 1ମାସ 1ସପ୍ 1ଦିନ 1:01:01');
        test.done();
    },
    testDurFmtORFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "or-IN",
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
        test.equal(duration.toString(), '1ବର୍ଷ 1ମାସ 1ସପ୍ 1ଦିନ 1ଘଣ୍ଟା 1ମିନିଟ୍‌ 1ସେକ୍' );
        test.done();
    },
    testDurFmtORFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "or-IN",
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
        test.equal(duration.toString(), '1 ବର୍ଷ, 1 ମାସ, 1 ସପ୍ତାହ, 1 ଦିନ, 1 ଘଣ୍ଟା, 1 ମିନିଟ୍‌, 1 ସେକେଣ୍ଡ');
        test.done();
    },
    testDurFmtORFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "or-IN",
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
        test.equal(duration.toString(), '1 ବର୍ଷ, 1 ମାସ, 1 ସପ୍ତାହ, 1 ଦିନ, 1 ଘଣ୍ଟା, 1 ମିନିଟ୍‌, 1 ସେକେଣ୍ଡ');
        test.done();
    },


    testDurFmtORAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "or-IN",
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
                test.equal(duration.toString(), '2 ବର୍ଷ, 2 ମାସ, 2 ସପ୍ତାହ, 2 ଦିନ, 2 ଘଣ୍ଟା, 2 ମିନିଟ୍, 2 ସେକେଣ୍ଡ');
                test.done();
            }
        });
    },
    testDurFmtORFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "or-IN",
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
                test.equal(duration.toString(), '1ବର୍ଷ 1ମାସ 1ସପ୍ 1ଦିନ 1:01:01');
                test.done();
            }
        });
    }
};