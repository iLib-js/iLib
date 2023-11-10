/*
 * testdurfmtasync.js - test the duration formatter object
 *
 * Copyright © 2018-2020, JEDLSoft
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

module.exports.testdurfmtasync = {
    testDurFmtAsyncConstructorEmpty: function(test) {
        test.expect(1);
        new DurationFmt({
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                test.done();
            }
        });

    },
    testDurFmtAsyncGetLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "de-DE",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                test.equal(fmt.getLocale().toString(), "de-DE");
                test.done();
            }
        });
    },
    testDurFmtAsyncGetLocaleBogus: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "zyy-XX",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                test.equal(fmt.getLocale().toString(), "zyy-XX");
                test.done();
            }
        });
    },
    testDurFmtAsyncFormatShortText: function(test) {
        test.expect(2);
        new DurationFmt({
            length: "short",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1,
                    millisecond: 1
                });
                test.equal(duration.toString(), "1y 1m 1w 1d 1h 1m 1s 1ms");
                test.done();
            }
        });
    },
    testDurFmtAsyncFormatLongSingle: function(test) {
        test.expect(2);
        new DurationFmt({
            length: "long",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1,
                    millisecond: 1
                });
                test.equal(duration.toString(), "1 yr, 1 mth, 1 wk, 1 day, 1 hr, 1 min, 1 sec, 1 ms");
                test.done();
            }
        });
    },
    testDurFmtAsyncFormatFullPlural: function(test) {
        test.expect(2);
        new DurationFmt({
            length: "full",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2,
                    millisecond: 2
                });
                test.equal(duration.toString(), "2 years, 2 months, 2 weeks, 2 days, 2 hours, 2 minutes, 2 seconds, 2 milliseconds");
                test.done();
            }
        });
    },
    testDurFmtAsyncFormatShortDEDefaultStyle: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "de-DE",
            length: "short",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1,
                    millisecond: 1
                });
                test.equal(duration.toString(), '1 J, 1 M, 1 W, 1 T, 1 Std., 1 Min., 1 Sek., 1 ms');
                test.done();
            }
        });
    },
    testDurFmtAsyncFormatFullDESingle: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "de-DE",
            length: "full",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1,
                    millisecond: 1
                });
                test.equal(duration.toString(), "1 Jahr, 1 Monat, 1 Woche, 1 Tag, 1 Stunde, 1 Minute, 1 Sekunde und 1 Millisekunde");
                test.done();
            }
        });
    },
    testDurFmtAsyncFormatShortZHText: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "zh-Hans-CN",
            length: "short",
            style: "text",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1,
                    millisecond: 1
                });
                test.equal(duration.toString(), "1年1个月1周1天1小时1分钟1秒1毫秒");
                test.done();
            }
        });
    },
    testDurFmtAsyncFormatShortZHClock: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "zh-Hans-CN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1,
                    millisecond: 1
                });
                test.equal(duration.toString(), "1年1个月1周1天01:01:01");
                test.done();
            }
        });
    },
    testDurFmtAsyncFormatFullZH: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "zh-Hans-CN",
            length: "full",
            sync: false,
            onLoad: function(fmt) {
                test.ok(fmt !== null);

                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1,
                    millisecond: 1
                });
                test.equal(duration.toString(), "1年1个月1周1天1小时1分钟1秒钟1毫秒");
                test.done();
            }
        });
    }
};